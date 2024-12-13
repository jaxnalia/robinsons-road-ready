<script  lang="ts">
    import { Phone, ChevronRight } from "lucide-svelte";
    import logo from "$lib/images/robinsons-branding.png";
    import { page } from '$app/stores';

    let isOpen = false;
    const toggleMenu = () => isOpen = !isOpen;
</script>

<div style="z-index: 100;" class="inset-0">
    <div class="bg-white z-50 md:border-b-8 bg-gray-50 border-green-500">
        <nav class="mx-auto flex max-md:flex-col max-md:gap-2 items-center container transition-all duration-200 ease-in-out py-4">
            <div class="flex items-center">
                <a href="/">
                    <img  src={logo} loading="lazy" style="color:transparent;height:60px;" alt="Robinson's Road Ready Logo"></a>
            </div>

            <div class=" flex-grow"></div>
            <div class="flex">
                <div class="mr-4 items-center justify-center">
                    <a href="tel:+447772562651" class="flex rounded-md text-center uppercase font-semibold bg-gradient-to-br from-green-600 to-green-600 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400 px-3 py-1.5 font-dm text-sm text-white transition-transform duration-200 ease-in-out">
                        <Phone size="20" class="mr-1" /> 07772 562651
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
                        class="flex rounded-md text-center uppercase font-semibold bg-gradient-to-br from-green-600 to-green-600 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400 px-3 py-1.5 font-dm text-sm text-white transition-transform duration-200 ease-in-out">
                        Book Online <ChevronRight id="arrowright" size="20" class="ml-1" />
                    </a>
                </div>
            </div>
            

        </nav>
        
    </div>

        <button
        class="bg-green-500 p-2 w-full md:hidden text-white"
        on:click={toggleMenu} aria-label="Toggle menu">
        <svg
        class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        {#if isOpen}
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M6 18L18 6M6 6l12 12"
        />
        {:else}
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M4 6h16M4 12h16M4 18h16"
            />
        {/if}
        </svg>
    </button>

    <!-- MOBILE MENU -->
    {#if isOpen}
        <div class="relative text-white z-50" style="background-color: rgb(23, 102, 52)">
            <ul class="flex md:hidden p-0 flex-col uppercase font-bold text-lg container">
                <a href="/driving-lessons/manual">
                    <li aria-current={$page.url.pathname === '/driving-lessons/manual' ? 'page' : undefined} class="hover:bg-green-500 py-2 px-4">
                        Weekly lessons
                    </li>
                </a>
                <!-- <a href="/driving-lessons/automatic">
                    <li aria-current={$page.url.pathname === '/driving-lessons/automatic' ? 'page' : undefined} class="hover:bg-green-500 py-2 px-4">
                        Automatic
                    </li>
                </a> -->
                <a href="/driving-lessons/intensive">
                    <li aria-current={$page.url.pathname === '/driving-lessons/intensive' ? 'page' : undefined} class="hover:bg-green-500 py-2 px-4">
                        Intensive Courses
                    </li>
                </a>
                <!-- <a href="/franchise">
                    <li aria-current={$page.url.pathname === '/franchise' ? 'page' : undefined} class="hover:bg-green-500 py-2 px-4">
                        Franchise
                    </li>
                </a> -->
                <a href="/about">
                    <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined} class="hover:bg-green-500 py-2 px-4">
                        About Us
                    </li>
                </a>
                <a href="/contact">
                    <li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined} class="hover:bg-green-500 py-2 px-4">
                        Contact
                    </li>
                </a>
            </ul>
        </div>
    {/if}
    <!-- DESKTOP MENU -->
    <div class="max-md:hidden relative z-50 text-white" style="background-color: rgb(23, 102, 52)">
        <ul class="flex max-md:hidden uppercase font-bold text-sm container gap-5 lg:gap-12">
            <a href="/driving-lessons/manual">
                <li aria-current={$page.url.pathname === '/driving-lessons/manual' ? 'page' : undefined} class="hover:bg-green-500 py-1 px-4">
                    Weekly Lessons
                </li>
            </a>
            <!-- <a href="/driving-lessons/automatic">
                <li aria-current={$page.url.pathname === '/driving-lessons/automatic' ? 'page' : undefined} class="hover:bg-green-500 py-1 px-4">
                    Automatic
                </li>
            </a> -->
            <a href="/driving-lessons/intensive">
                <li aria-current={$page.url.pathname === '/driving-lessons/intensive' ? 'page' : undefined} class="hover:bg-green-500 py-1 px-4">
                    Intensive Courses
                </li>
            </a>
            <!-- <a href="/franchise">
                <li aria-current={$page.url.pathname === '/franchise' ? 'page' : undefined} class="hover:bg-green-500 py-1 px-4">
                    Franchise
                </li>
            </a> -->
            <a href="/about">
                <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined} class="hover:bg-green-500 py-1 px-4">
                    About Us
                </li>
            </a>
            <a href="/contact">
                <li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined} class="hover:bg-green-500 py-1 px-4">
                    Contact
                </li>
            </a>
        </ul>
    </div>
</div>
    
<style>
li[aria-current='page'] {
    background-color: rgb(34 197 94);
}
</style>