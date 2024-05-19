<script>
    import "../app.css";
    import { Phone, ChevronRight } from "lucide-svelte";
    import logo from "$lib/images/robinsons-branding.png";
    </script>
    
    <!-- <nav class="absolute" style="z-index: 2;">
        <img src="src\lib\robinsons-800px-white.png" alt="robinsons logo">
    </nav> -->
        <header style="" class="relative bg-white inset-0 z-50 border-b-8 bg-gray-50 border-green-500">
            <nav class="mx-auto flex container  transition-all duration-200 ease-in-out py-4">
                <div class="flex items-center">
                    <a href="/">
                        <img  src={logo} loading="lazy" style="color:transparent;height:60px;" alt="Robinson's Road Ready Logo"></a>
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
                <div class="mr-4 sm:mr-8">
                    <a href="tel:+447772562651" class="flex justify-end text-sm sm:text-xl text-green-600 font-semibold mt-5 sm:mt-4">
                        <Phone class="mr-1 mt-0 sm:mt-0.5 w-3 sm:w-4" /> 07772 562651
                    </a>
                </div>
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
                    style="width:142.5px;"
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
        <div class="relative text-white z-50" style="background-color: rgb(23, 102, 52)">
            <ul class="flex uppercase font-bold text-sm container gap-12">
                <li class="hover:bg-green-500 py-1 px-4 rounded-b-sm">
                    <a href="/driving-lessons/manual">Manual</a>
                </li>
                <li class="hover:bg-green-500 py-1 px-4 rounded-b-sm">
                    <a href="/driving-lessons/automatic">Automatic</a>
                </li>
                <li class="hover:bg-green-500 py-1 px-4 rounded-b-sm">
                    <a href="/driving-lessons/intensive">Intensive</a>
                </li>
                <li class="hover:bg-green-500 py-1 px-4 rounded-b-sm">
                    <a href="/franchise">Franchise</a>
                </li>
                <li class="hover:bg-green-500 py-1 px-4 rounded-b-sm">
                    <a href="/about">About</a>
                </li>
                <li class="hover:bg-green-500 py-1 px-4 rounded-b-sm">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    
        
    
    
        <slot></slot>
    
        <footer style="position:relative;" class="pt-4 border-t-2 bg-gray-50">
            <div class="container grid gap-10 row-gap-6 mb-8 grid-cols-1 sm:grid-cols-3">
        
                <!-- <div class="sm:col-span-2"> -->
                    <a href="/" class="inline-flex items-center">
                        <img src={logo} alt="logo" class="h-16">
                        <!-- <span class="ml-2 text-xl font-bold tracking-wide text-gray-800">Company Name</span> -->
                    </a>
                    <!-- <div class="mt-6 lg:max-w-xl">
                        <p class="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis mi, faucibus dignissim lorem
                            id, imperdiet interdum mauris. Vestibulum ultrices sed libero non porta. Vivamus malesuada urna eu
                            nibh malesuada, non finibus massa laoreet. Nunc nisi velit, feugiat a semper quis, pulvinar id
                            libero. Vivamus mi diam, consectetur non orci ut, tincidunt pretium justo. In vehicula porta
                            molestie. Suspendisse potenti. 
                            </p>
                    </div> -->
                <!-- </div> -->
        
                <!-- <div class="flex flex-col gap-2 text-sm">
                    <p class="text-base font-bold tracking-wide text-gray-900">Popular Courses</p>
                    <a href="/">UPSC - Union Public Service Commission</a>
                    <a href="/">General Knowledge</a>
                    <a href="/">MBA</a>
                    <p class="text-base font-bold tracking-wide text-gray-900">Popular Topics</p>
                    <a href="/">Human Resource Management</a>
                    <a href="/">Operations Management</a>
                    <a href="/">Marketing Management</a>
                </div> -->
        
                <div>
                    <p class="text-base font-bold tracking-wide text-gray-900">Follow Us</p>
                    <div class="flex items-center gap-4">
                        <a href="https://www.facebook.com/Robinsonsschoolofmotoring/" class="bg-blue-600 h-10 w-10 flex justify-center rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 30 30"
                            style="fill:#FFFFFF;">
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                            </svg>
                        </a>
                        <a href="/" class="bg-purple-600 h-10 w-10 flex justify-center rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0,0,260,260"
                            style="fill:#FFFFFF;">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path></g></g>
                            </svg>
                        </a>
                        <a href="/" class="bg-red-600 h-10 w-10 flex justify-center rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0,0,260,260"
                            style="fill:#FFFFFF;">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path></g></g>
                            </svg>
                        </a>
                    </div>
                    
                </div>
                <div>
                    <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                    <div class="flex text-clip overflow-hidden">
                        <!-- <p class="mr-1 text-gray-800">Email:</p> -->
                        <a href="mailto:ben@robinsonsroadready.com" title="send email" class="text-sm hover:underline">ben@robinsonsroadready.com</a>
                    </div>
                </div>
        
            </div>
        
            <div class="container flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p class="text-sm text-gray-600">© 2024 Robinson's Road Ready Limited. All rights reserved.</p>
                <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a href="/sitemap"
                            class="text-sm hover:underline text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Sitemap
                        </a>
                    </li>
                    <li>
                        <a href="/terms"
                            class="text-sm hover:underline text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms
                        </a>
                    </li>
                    <li>
                        <a href="/privacy"
                            class="text-sm hover:underline text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy policy
                        </a>
                    </li>
                </ul>
            </div>
        
        </footer>