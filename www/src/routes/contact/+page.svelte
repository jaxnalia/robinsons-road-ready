<script>
// @ts-nocheck

	export let form;
</script>

<svelte:head>
    <title>Contact Us | Robinson's Road Ready</title>
</svelte:head>



<header>
	<div class="flex justify-center my-8">
		<div class="flex flex-col container">
			<h5 class="uppercase text-lg text-gray-500">Contact form</h5>
			<h1 class="text-4xl md:text-6xl font-extrabold uppercase text-green-600">Contact Us</h1>
		</div>
	</div>
</header>


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
<div class="container grid grid-cols-1 md:grid-cols-10">
	<div class="h-full w-full md:col-span-5 lg:col-span-6">
		<h2 class="text-lg  mb-8 ">Do you have questions about learning to drive? Or, perhaps you’d like to find out more about becoming a driving instructor?</h2>
		<h3 class="text-lg font-semibold mb-4 ">Send us a message below! We’ll get back in touch with you as soon as possible:</h3>
		<form method="POST" class="flex flex-col  items-center md:items-start justify-center bg-gray-100 p-8 mb-8">
			<h2 class="text-2xl font-semibold mb-6">Your details</h2>
			<div class="text-sm mb-6">Items marked with * are required.</div>
			<div class="form-control w-full">
				<label for="firstname" class="label">
					<span class="label-text font-semibold">First name *</span>
				</label>
				<input
					type="text"
					name="firstname"
					class="input rounded w-full {form?.errors?.firstname ? 'input-error' : 'input-bordered'}"
					placeholder="Enter your First name"
					value={form?.data?.firstname ?? ''}
				/>
				<label for="name" class="label">
					{#if form?.errors?.firstname}
						<div class="label-text-alt text-error">{form?.errors?.firstname[0]}</div>
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
					placeholder="Enter your Surname"
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
					<span class="label-text font-semibold">Email address *</span>
				</label>
				<input
					type="email"
					name="email"
					placeholder="Enter your Email address"
					class="input rounded w-full {form?.errors?.email ? 'input-error' : 'input-bordered'}"
					value={form?.data?.email ?? ''}
				/>
				<label for="email" class="label">
					{#if form?.errors?.email}
						<div class="label-text-alt text-error">{form?.errors?.email[0]}</div>
					{/if}
				</label>
			</div>
			<div class="form-control w-full">
				<label for="phone" class="label">
					<span class="label-text font-semibold">Phone number *</span>
				</label>
				<input
					type="tel"
					name="phone"
					placeholder="Enter your Phone number"
					class="input rounded w-full {form?.errors?.phone ? 'input-error' : 'input-bordered'}"
					value={form?.data?.phone ?? ''}
				/>
				<label for="phone" class="label">
					{#if form?.errors?.phone}
						<div class="label-text-alt text-error">{form?.errors?.phone[0]}</div>
					{/if}
				</label>
			</div>
			<h2 class="text-2xl font-semibold mb-6 mt-6">Your message</h2>
			<div class="form-control w-full">
				<label for="lessontype" class="label">
					<span class="label-text font-semibold">Subject</span>
				</label>
				<select class="input rounded w-full {form?.errors?.lessontype ? 'input-error' : 'input-bordered'}"
				name="lessontype"
				placeholder="none">
					<option value="none">-Please choose an option-</option>
					<option value="learning-to-drive">Learning to drive</option>
					<option value="advanced-refresher">Advanced & Refresher Lessons</option>
					<option value="joining-franchise">Joining the Franchise</option>
					<option value="di-training">Driving Instructor Training</option>
					<option value="other">Other</option>
				</select>
				<label for="lessontype" class="label">
					{#if form?.errors?.lessontype}
						<div class="label-text-alt text-error">{form?.errors?.lessontype[0]}</div>
					{/if}
				</label>
			</div>
			<div class="form-control w-full">
				<label for="message" class="label">
					<span class="label-text font-semibold">Message *</span>
				</label>
				<textarea style="height: auto; min-height:108px" class="input rounded w-full h-auto {form?.errors?.message ? 'input-error' : 'input-bordered'}" rows="4" name="message" placeholder="Enter your Message"></textarea>
				<label for="message" class="label">
					{#if form?.errors?.message}
						<div class="label-text-alt text-error">{form?.errors?.message[0]}</div>
					{/if}
				</label>
			</div>
			
			<!-- <div class="form-control w-full pb-2">
				<label class="label cursor-pointer justify-start space-x-4">
					<input
						type="checkbox"
						name="terms"
						class="checkbox checkbox-primary {form?.errors?.terms ? 'border-error' : ''}"
					/>
					<span class="label-text font-medium">I agree that by submitting this form I am giving my consent to allow Robinson's Road Ready to hold my personal data so that I can be presented with relevant Learner Driver offers and information as part of my initial enquiry, in accordance with their <a class="underline" href="/privacy">Privacy Policy</a>. *</span>
				</label>
				<label for="terms" class="label">
					{#if form?.errors?.terms}
						<div class="label-text-alt text-error">{form?.errors?.terms[0]}</div>
					{/if}
				</label>
			</div> -->
			<div class="w-full">
				
				<button id="sendbtn" class="btn btn-primary w-full bg-green-500 hover:bg-green-400 active:bg-green-200 text-white text-xl rounded-lg py-4" type="submit"><span id="sendbtnText">Send Message</span></button>
			</div>
			<script type="text/javascript">
				const sendbtn = document.querySelector("#sendbtn");
				const sendbtnText = document.querySelector("#sendbtnText");
			
				sendbtn.onclick = () => {
					sendbtnText.innerHTML = "Sending, please wait...";
					sendbtn.classList.add("bg-green-400");
				};
			</script>
			<p class="text-xs mt-4">Your privacy is important to us, and we will not share your information with any third party without your explicit consent. For more information on how we manage your personal data, please review our <a href="/privacy" class="underline">privacy policy</a>.</p>
		</form>
	</div>
	<div id="sidebar" class="md:ml-4 md:col-span-5 lg:col-span-4 mb-8">
		<div class="relative bg-gradient-to-br from-green-600 to-emerald-400 text-gray-50 rounded-xl h-96 p-8 mb-4">
			<div class="mb-8">
				<h3 class="font-bold text-3xl mb-4">Bookings & enquiries</h3>
				<div class="font-medium text-lg list-none">
					<li>Phone: <a href="tel:+447772 562651" class="underline hover:text-blue-600">07772 562651</a></li>
					<li>Email: <a href="mailto:ben@robinsonsroadready.com" class="underline hover:text-blue-600">ben@robinsonsroadready.com</a></li>
					<li>Online: <a href="/driving-lessons/booking" class="underline hover:text-blue-600">Book Online</a></li>
				</div>
			</div>
			<div class="">
				<h3 class="font-bold text-3xl mb-2">{`{Location}`}</h3>

			</div>

		</div>
		<div class="relative border text-gray-900 rounded-xl h-96 p-8">
			{`{Customer reviews}`}
		</div>
		
	</div>
</div>

