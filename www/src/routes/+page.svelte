<script>
    import { Phone, ChevronRight } from "lucide-svelte";
</script>

<svelte:head>

<title>Robinson's Road Ready</title>
</svelte:head>

<section style="margin-top: 0px;height: 70vh;" class="relative h-screen flex flex-col justify-center text-left text-white ">
    <div class="video-docker absolute top-0 left-0 w-full h-full">
        <video class="min-w-full min-h-full absolute object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            autoplay muted loop></video>
    </div>
    <div class="video-content space-y-2 z-10">
        <div class="container mx-auto mt-16 mb-16">
            <div class="text-center md:text-left">
                <h1 class="font-extrabold text-5xl md:text-6xl">
                    <span class="block">Driving Lessons</span>
                    <span class="block pt-2">in Norwich</span>
                </h1>
                <p class="mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl">
                    Comprehensive, engaging and accessible driving tuition.
                </p>
                <div class="mx-auto mt-5 flex justify-center md:justify-start flex-col md:flex-row mt-8">
    
                    <!-- <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"> -->
                    <a id="get-started-button"
                            href="/driving-lessons/booking"
                           class="flex justify-center mb-6 md:mb-0 block shadow-lg text-3xl px-6 py-2 font-semibold bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-300 hover:backdrop-blur-xl backdrop-blur-lg rounded-md">
                           <style>
                            #get-started-button #arrowright {
                                transition-duration: 200ms;
                            }
                            #get-started-button:hover #arrowright {
                                transform: translate(0.5rem, 0);
                                transition-duration: 200ms;
                            }
                           </style>
                           <div>Get Started</div>
                           <!-- <CalendarDays size="32" class="ml-2" /> -->
                           <!-- <ArrowBigRight id="greenbutton" size="36" class="ml-2" /> -->
                           <ChevronRight id="arrowright" size="36" class="ml-3" />
                           
                    </a>
                    <div class="flex font-semibold text-base text-5xl md:ml-6 mt-1 justify-center">
                        <Phone size="40" class="mt-1" /> <div class="ml-3 mt-1 text-4xl">07772 562651</div>
                    </div>
                    <!-- <button style="margin: 10px;"
                            class="block uppercase shadow-lg w-full px-8 py-3 text-base transition-colors duration-200 ease-in-out font-bold text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-10">
                            Learn More
                    </button> -->
                    <!-- </div> -->
                </div>

            </div>
        </div>
    </div>

</section>
<div style="background-color: white;z-index: 100;position:relative;">
    <div style="background-color: white; 100;color:black;position:relative;" class="container">

    
    </div>
</div>


<style>
    .video-docker video {
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
        background: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }
</style>