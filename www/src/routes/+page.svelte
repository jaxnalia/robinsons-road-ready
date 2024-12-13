<script>
    import { Phone, ChevronRight } from "lucide-svelte";
    import audiBack from "$lib/images/audi_back.jpeg"
</script>

<svelte:head>

<title>Driving Lessons in Norwich | Robinson's Road Ready</title>
</svelte:head>

<section style="margin-top: 0px;height: 70vh;" class="relative overflow-clip h-screen flex flex-col justify-center text-left text-white ">
    <div class="video-docker absolute top-0 left-0 w-full h-full">
        <img class="min-w-full min-h-full absolute object-cover"
            src={audiBack}
            alt="audi-robinsons">
    </div>
    <div class="space-y-2 z-10">
        <div class="container mx-auto mt-16 mb-16">
            <div class="text-center">
                <h1 class="font-bold text-4xl md:text-6xl">
                    <span class="block">Welcome to<br> Robinson's Road Ready</span>
                    <!-- <span class="block pt-2"></span> -->
                </h1>
                <p class="mx-auto mt-2 text-base sm:text-lg">
                    Driving school based in Norwich & South Norfolk
                </p>
                <h2 class="font-bold text-4xl">
                    <!-- <span class="block text-green-800 font-bold uppercase">Are you Road Ready?</span> -->
                    <!-- <span class="block pt-2"></span> -->
                </h2>
                <div class="mx-auto mt-5 flex justify-center gap-2 md:gap-6 flex-row mt-8 md:text-2xl leading-loose">
                    <a href="tel:+447772562651" class="flex justify-center md:mb-0 block shadow-lg px-3 md:px-6 py-2 font-semibold bg-gradient-to-br from-green-600 to-green-600 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400 hover:backdrop-blur-xl backdrop-blur-lg rounded-md">
                        <Phone size="30" class="" /> <div class="ml-3 font-semibold">Call Now</div>
                    </a>
                    <a id="get-started-button"
                            href="/driving-lessons/booking"
                           class="flex justify-center md:mb-0 block shadow-lg px-3 md:px-6 py-2 font-semibold bg-gradient-to-br from-green-600 to-green-600 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400 hover:backdrop-blur-xl backdrop-blur-lg rounded-md">
                           <style>
                            #get-started-button #arrowright {
                                transition-duration: 200ms;
                            }
                            #get-started-button:hover #arrowright {
                                transform: translate(0.5rem, 0);
                                transition-duration: 200ms;
                            }
                           </style>
                           <div class="">Book Online</div>
                           <!-- <CalendarDays size="32" class="ml-2" /> -->
                           <!-- <ArrowBigRight id="greenbutton" size="36" class="ml-2" /> -->
                           <ChevronRight id="arrowright" size="30" class="ml-3" />
                           
                    </a>
                    
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