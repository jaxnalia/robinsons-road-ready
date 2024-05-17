// @ts-nocheck
import { z } from 'zod'

const registerSchema = z.object({
    firstname: z.string({ required_error: 'First Name is required.' }).min(1, { message: 'First Name is required.' }).max(64, { message: 'Max 64 characters.' }).trim(),
    surname: z.string({ required_error: 'Last Name is required.' }).min(1, { message: 'Last Name is required.' }).max(64, { message: 'Max 64 characters.' }).trim(),
    email: z.string({ required_error: 'Email is required.' }).min(1, { message: 'Email is required.' }).max(64, { message: 'Max 64 characters.' }).email(),
    terms: z.enum(['on'], { required_error: 'You must accept the terms and conditions.' })
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