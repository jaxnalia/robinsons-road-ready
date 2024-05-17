<script>
// @ts-nocheck

	export let form;
</script>

<svelte:head>
    <title>Enquiry Form / Robinson's Road Ready</title>
</svelte:head>

<header>
<div class="flex justify-center my-4">
    <div class="flex flex-col">
        <h5 class="uppercase">Enquiry form</h5>
        <h2 class="text-3xl font-bold uppercase">Contact Us</h2>
    </div>
    
    
</div>

</header>


<div class="lg:container mx-auto h-full w-full p-8">
	<form method="POST" class="flex flex-col items-center w-full justify-center">
		<h1 class="text-3xl font-medium text-center mb-8">Enter your details below.</h1>
		<div class="form-control w-full max-w-xs">
			<label for="firstname" class="label">
				<span class="label-text">First Name</span>
			</label>
			<input
				type="text"
				name="firstname"
				class="input w-full max-w-xs {form?.errors?.firstname ? 'input-error' : 'input-bordered'}"
                placeholder="First Name"

				value={form?.data?.firstname ?? ''}
			/>
			<label for="firstname" class="label">
				{#if form?.errors?.firstname}
					<span class="label-text-alt text-error">{form?.errors?.firstname[0]}</span>
				{/if}
			</label>
		</div>
        <div class="form-control w-full max-w-xs">
			<label for="surname" class="label">
				<span class="label-text">Last Name</span>
			</label>
			<input
				type="text"
				name="surname"
				class="input w-full max-w-xs {form?.errors?.surname ? 'input-error' : 'input-bordered'}"
                placeholder="Last Name"

				value={form?.data?.surname ?? ''}
			/>
			<label for="surname" class="label">
				{#if form?.errors?.surname}
					<span class="label-text-alt text-error">{form?.errors?.surname[0]}</span>
				{/if}
			</label>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				name="email"
                placeholder="Email"

				class="input w-full max-w-xs {form?.errors?.email ? 'input-error' : 'input-bordered'}"
				value={form?.data?.email ?? ''}
			/>
			<label for="email" class="label">
				{#if form?.errors?.email}
					<span class="label-text-alt text-error">{form?.errors?.email[0]}</span>
				{/if}
			</label>
		</div>
		
		<div class="form-control w-full max-w-xs pb-2">
			<label class="label cursor-pointer justify-start space-x-4">
				<input
					type="checkbox"
					name="terms"
 
					class="checkbox checkbox-primary {form?.errors?.terms ? 'border-error' : ''}"
				/>
				<span class="label-text">I accept the terms and conditions</span>
			</label>
			<label for="terms" class="label">
				{#if form?.errors?.terms}
					<span class="label-text-alt text-error">{form?.errors?.terms[0]}</span>
				{/if}
			</label>
		</div>
		<div class="w-full max-w-xs">
			<button class="btn btn-primary w-full" type="submit">Register</button>
		</div>
	</form>
</div>