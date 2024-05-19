// @ts-nocheck
import { z } from 'zod'

const registerSchema = z.object({
    firstname: 
        z.string({ required_error: 'Please enter your First name' })
        .min(1, { message: 'Please enter your First name' })
        .max(64, { message: 'Max 64 characters' })
        .trim(),
    surname: 
        z.string({ required_error: 'Please enter your Surname' })
        .min(1, { message: 'Please enter your Surname' })
        .max(64, { message: 'Max 64 characters' })
        .trim(),
    email: 
        z.string({ required_error: 'Please enter your Email address' })
        .min(1, { message: 'Please enter your Email address' })
        .max(64, { message: 'Max 64 characters' })
        .email(),
    phone: 
        z.string({ required_error: 'Please enter your Phone number' })
        .min(1, { message: 'Please enter your Phone number' })
        .max(13, { message: 'Max 13 characters' }),
    terms: z.enum(['on'], { required_error: 'Please confirm your consent' })
})

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());

        try {
            const result = registerSchema.parse(formData);
            console.log('SUCCESS');
            console.log(result);
        } catch (err) {
            const { fieldErrors: errors } = err.flatten();
            return {
                errors
            };
        }
    }
};