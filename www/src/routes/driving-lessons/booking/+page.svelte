<script>
// @ts-nocheck

	export let form;
</script>

<svelte:head>
    <title>Enquiry Form / Robinson's Road Ready</title>
</svelte:head>

<header>
	<div class="flex justify-center my-8">
		<div class="flex flex-col container">
			<h5 class="uppercase text-gray-500">Booking form</h5>
			<h1 class="text-4xl font-extrabold uppercase text-gray-900">Book Driving Lessons</h1>
		</div>
	</div>
</header>

<h2 class="text-md font-medium mb-8 container">Simply send us your details below and we'll call you back to arrange your introductory lesson.</h2>
<style>
	
	.text-error {
		color: rgb(225, 55, 55);
	}
	.input{
		border: 1px solid rgb(225, 55, 55);;
	}
	.input-bordered {
		/* border-color: rgb(225, 55, 55); */
		border: 1px solid;
	}
	.form-control {
		margin-bottom: 1rem;
	}
	.form-control .input {
		height: 40px;
		padding: 5px;
	}
</style>
<div class="container mx-auto h-full w-full">
	<form method="POST" class="flex flex-col md:w-3/6 items-center md:items-start justify-center bg-gray-100 p-8 mb-8">
		<h2 class="text-xl font-medium mb-6">Could you tell us a little bit about yourself?</h2>
		<div class="text-sm mb-6">Items marked with * are required.</div>
		<div class="form-control w-full">
			<label for="name" class="label">
				<span class="label-text font-semibold">Your name *</span>
			</label>
			<input
				type="text"
				name="name"
				class="input rounded w-full {form?.errors?.name ? 'input-error' : 'input-bordered'}"
                placeholder="Enter your name"

				value={form?.data?.name ?? ''}
			/>
			<label for="name" class="label">
				{#if form?.errors?.name}
					<div class="label-text-alt text-error">{form?.errors?.name[0]}</div>
				{/if}
			</label>
		</div>
        <div class="form-control w-full">
			<label for="surname" class="label">
				<span class="label-text font-semibold">Surname *</span>
			</label>
			<input
				type="text"
				name="surname"
				class="input rounded w-full {form?.errors?.surname ? 'input-error' : 'input-bordered'}"
                placeholder="Enter your surname"

				value={form?.data?.surname ?? ''}
			/>
			<label for="surname" class="label">
				{#if form?.errors?.surname}
					<div class="label-text-alt text-error">{form?.errors?.surname[0]}</div>
				{/if}
			</label>
		</div>
		<div class="form-control w-full">
			<label for="email" class="label">
				<span class="label-text font-semibold">Email *</span>
			</label>
			<input
				type="email"
				name="email"
                placeholder="Enter your email address"

				class="input rounded w-full {form?.errors?.email ? 'input-error' : 'input-bordered'}"
				value={form?.data?.email ?? ''}
			/>
			<label for="email" class="label">
				{#if form?.errors?.email}
					<div class="label-text-alt text-error">{form?.errors?.email[0]}</div>
				{/if}
			</label>
		</div>
		
		<div class="form-control w-full pb-2">
			<label class="label cursor-pointer justify-start space-x-4">
				<input
					type="checkbox"
					name="terms"
 
					class="checkbox checkbox-primary {form?.errors?.terms ? 'border-error' : ''}"
				/>
				<span class="label-text font-semibold">I accept the terms and conditions *</span>
			</label>
			<label for="terms" class="label">
				{#if form?.errors?.terms}
					<div class="label-text-alt text-error">{form?.errors?.terms[0]}</div>
				{/if}
			</label>
		</div>
		<div class="w-full">
			<button class="btn btn-primary w-full" type="submit">Send My Booking!</button>
		</div>
	</form>
</div>