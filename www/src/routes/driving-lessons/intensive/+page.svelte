<script>
	import brandingWhite from "$lib/images/robinsons-branding-white.png"
    import audiSide from "$lib/images/audi_side.jpeg"
</script>

<svelte:head>

<title>Intensive Driving Courses in Norwich | Robinson's Road Ready</title>
</svelte:head>

<header style="margin-top: 0px;" class="relative overflow-clip flex flex-col justify-center text-left text-white ">
	<div class="video-docker absolute top-0 left-0 w-full h-full">
		<img class="min-w-full min-h-full absolute object-cover"
			src={audiSide}
			alt="audi-robinsons">
	</div>
	<div class="flex justify-center my-10 md:my-24 z-10">
		<div class="flex flex-col container">

			<!-- <h1 class="text-3xl md:text-6xl text-center font-extrabold uppercase">
				Intensive driving courses
			</h1> -->
			<div class="flex flex-row justify-center px-0 py-4">
				<img class="w-80" src={brandingWhite} alt="Robinson's Road Ready">
				
			</div>
		</div>
	</div>
</header>
<section class="bg-green-500 text-white">
	<div class="container">
		<!-- <div class="flex flex-row justify-center p-4">
		<img class="h-14" src={brandingWhite} alt="Robinson's Road Ready">
		
	</div> -->
	<h1 class="text-3xl p-4 text-center font-bold uppercase">
		FAST TRACK YOUR TUITION WITH AN INTENSIVE COURSE
	</h1>
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