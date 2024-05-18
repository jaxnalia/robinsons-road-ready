<script>
    import "../app.css";
    import { Phone, ChevronRight } from "lucide-svelte";
    </script>
    
    <!-- <nav class="absolute" style="z-index: 2;">
        <img src="src\lib\robinsons-800px-white.png" alt="robinsons logo">
    </nav> -->
        <header style="" class="sticky inset-0 z-50 border-b-4 border-green-600 bg-white backdrop-blur-lg">
            <nav class="mx-auto flex container px-6 transition-all duration-200 ease-in-out lg:px-12 py-6">
                <div class="relative flex items-center">
                    <a href="/">
                        <img  src="https://bigjax.s3.eu-west-2.amazonaws.com/rrr.png" loading="lazy" style="color:transparent;height:32px;" alt="Robinson's Road Ready Logo"></a>
                </div>
                <!-- <ul class="hidden uppercase font-bold text-gray-900 items-center justify-center gap-6 md:flex">
                    
                    <li class="pt-1.5 text-sm transition-colors duration-100 ease-in-out hover:text-gray-400">
                        <a href="/intensive">Learn to Drive</a>
                    </li>
                    <li class="pt-1.5 text-sm transition-colors duration-100 ease-in-out hover:text-gray-400">
                        <a href="/">Automatic</a>
                    </li><li class="pt-1.5 text-sm transition-colors duration-100 ease-in-out hover:text-gray-400">
                        <a href="/">Intensive</a>
                    </li>
                    <li class="pt-1.5 text-sm transition-colors duration-100 ease-in-out hover:text-gray-400">
                        <a href="/">Meet the Instructors</a>
                    </li>
                </ul> -->
                <div class=" flex-grow"></div>
                <a href="tel:+447772562651" class="">
                    <div class="flex justify-end text-md text-gray-900 md:text-xl font-semibold mt-1 mr-4 md:mr-8">
                        <Phone size="18" class="mr-1 mt-1" /> 07772 562651
                    </div>
                </a>
                <div id="bookonline" class="items-center justify-center gap-6 flex">
                    <style>
                        #bookonline #arrowright {
                            transition-duration: 200ms;
                        }
                        #bookonline:hover #arrowright {
                            transform: translate(0.2rem, 0);
                            transition-duration: 200ms;
                        }
                       </style>
                    <a href="/driving-lessons/booking"
                        class="flex rounded-md text-center uppercase font-bold bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm text-white transition-transform duration-200 ease-in-out">
                        Book Online <ChevronRight id="arrowright" size="20" class="ml-1" />
                    </a>
                </div>
                <!-- <div class="relative flex items-center justify-center md:hidden justify-end">
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-auto text-slate-900"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                    </button>
                </div> -->
            </nav>
        </header>
    
        
    
    
        <slot></slot>
    
        <footer style="position:relative;" class="pt-4 border-t-2 bg-gray-50">
            <div class="container grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        
                <div class="sm:col-span-2">
                    <a href="/" class="inline-flex items-center">
                        <img src="https://bigjax.s3.eu-west-2.amazonaws.com/rrr.png" alt="logo" class="h-10">
                        <!-- <span class="ml-2 text-xl font-bold tracking-wide text-gray-800">Company Name</span> -->
                    </a>
                    <div class="mt-6 lg:max-w-xl">
                        <p class="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis mi, faucibus dignissim lorem
                            id, imperdiet interdum mauris. Vestibulum ultrices sed libero non porta. Vivamus malesuada urna eu
                            nibh malesuada, non finibus massa laoreet. Nunc nisi velit, feugiat a semper quis, pulvinar id
                            libero. Vivamus mi diam, consectetur non orci ut, tincidunt pretium justo. In vehicula porta
                            molestie. Suspendisse potenti. 
                            </p>
                    </div>
                </div>
        
                <div class="flex flex-col gap-2 text-sm">
                    <p class="text-base font-bold tracking-wide text-gray-900">Popular Courses</p>
                    <a href="/">UPSC - Union Public Service Commission</a>
                    <a href="/">General Knowledge</a>
                    <a href="/">MBA</a>
                    <p class="text-base font-bold tracking-wide text-gray-900">Popular Topics</p>
                    <a href="/">Human Resource Management</a>
                    <a href="/">Operations Management</a>
                    <a href="/">Marketing Management</a>
                </div>
        
                <div>
                    <p class="text-base font-bold tracking-wide text-gray-900">COMPANY IS ALSO AVAILABLE ON</p>
                    <div class="flex items-center gap-1 px-2">
                        <a href="/" class="w-full min-w-xl">
                            <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                                class="h-10">
                        </a>
                        <a class="w-full min-w-xl" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
                            <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button"
                                class="h-28">
                        </a>
                    </div>
                    <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                    <div class="flex text-clip overflow-hidden">
                        <!-- <p class="mr-1 text-gray-800">Email:</p> -->
                        <a href="/" title="send email" class="text-sm">ben@robinsonsroadready.com</a>
                    </div>
                </div>
        
            </div>
        
            <div class="container flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p class="text-sm text-gray-600">© 2024 Robinson's Road Ready Limited. All rights reserved.</p>
                <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a href="/"
                            class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                            &amp; Cookies Policy
                        </a>
                    </li>
                    <li>
                        <a href="/"
                            class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                        </a>
                    </li>
                </ul>
            </div>
        
        </footer>