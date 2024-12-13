<script>
	import brandingWhite from "$lib/images/robinsons-branding-white.png"
    import audiSide from "$lib/images/audi_side.jpeg"
</script>

<svelte:head>

<title>Manual Driving Lessons in Norwich | Robinson's Road Ready</title>
</svelte:head>

<header style="margin-top: 0px;" class="relative overflow-clip flex flex-col justify-center text-left text-white ">
	<div class="video-docker absolute top-0 left-0 w-full h-full">
		<img class="min-w-full min-h-full absolute object-cover"
			src={audiSide}
			alt="audi-robinsons">
	</div>
	<div class="flex justify-center my-24 md:my-44 z-10">
		<div class="flex flex-col container">
			<!-- <div class="h-24"></div> -->
			<!-- <h5 class="uppercase text-lg text-gray-500">about</h5> -->
			<h1 class="text-4xl md:text-6xl text-center font-extrabold uppercase">
				Weekly driving lessons
			</h1>
		</div>
	</div>
</header>
<section class="">
	<div class="text-center bg-green-500 text-white">
		<!-- <div class="flex flex-row justify-center p-4">
		<img class="h-14" src={brandingWhite} alt="Robinson's Road Ready">
		
	</div> -->
		<h1 class="container uppercase text-4xl p-8 font-bold">
			Manual Driving Lesson Rates
		</h1>
		
	</div>
	<div class="text-center p-4 text-white" style="background-color: rgb(23, 102, 52)">
		<h2 class="font-semibold text-2xl uppercase">Pay As You Go</h2>
		<p class="font-semibold">Standard Driving Lessons - 1.5 hours: £63 (£42 ph)</p>
		<p class="font-semibold text-sm mb-6 italic">Pay for 2 lessons at the start of your course so you always have 1 lesson in credit.</p>
		<h2 class="font-semibold text-2xl uppercase">Block Booking Deal</h2>
		<p class="font-semibold mb-6">10 hours of driving lessons: £420 (£42 ph)</p>
		<!-- <h2 class="font-bold text-2xl uppercase">New Pupil Introductory Offer</h2>
		<p class="font-semibold">Pay for 2 lessons at the start of your course so you always have 1 lesson in credit.</p> -->
	</div>
</section>




<style>
    .video-docker img {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .video-docker::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
</style>