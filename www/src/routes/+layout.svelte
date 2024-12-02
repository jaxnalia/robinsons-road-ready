<script>
    import "../app.css";
    import logo from "$lib/images/robinsons-branding.png";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<slot></slot>

<footer style="position:relative;" class="pt-4 border-t-2 bg-gray-50">
    <div class="container flex gap-10 row-gap-6 mb-8 text-center justify-between md:text-left flex-col md:flex-row">

        <div class="flex justify-center">
            <a href="/">
                <img src={logo} alt="logo" class="h-14">
            </a>
        </div>
            


        <div>
            <p class="text-base font-bold tracking-wide text-gray-900">Let's Connect</p>
            <div class="flex justify-center md:justify-start gap-4">
                <a href="https://www.facebook.com/Robinsonsschoolofmotoring/" class="bg-blue-600 hover:bg-blue-400 h-10 w-10 flex justify-center rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 30 30"
                    style="fill:#FFFFFF;">
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                    </svg>
                </a>
                <!-- <a href="/" class="bg-purple-600 hover:bg-purple-400 h-10 w-10 flex justify-center rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0,0,260,260"
                    style="fill:#FFFFFF;">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path></g></g>
                    </svg>
                </a> -->
                <!-- <a href="/" class="bg-red-600 hover:bg-red-400 h-10 w-10 flex justify-center rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0,0,260,260"
                    style="fill:#FFFFFF;">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path></g></g>
                    </svg>
                </a> -->
            </div>
            
        </div>
        <div>
            <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div class="flex flex-col gap-1 text-clip overflow-hidden justify-center md:justify-start">
                <!-- <p class="mr-1 text-gray-800">Email:</p> -->
                <a href="mailto:ben@robinsonsroadready.com" title="send email" class="text-sm hover:underline">ben@robinsonsroadready.com</a>
                <a href="mailto:karen@robinsonsroadready.com" title="send email" class="text-sm hover:underline">karen@robinsonsroadready.com</a>
                <a href="mailto:colin@robinsonsroadready.com" title="send email" class="text-sm hover:underline">colin@robinsonsroadready.com</a>
            </div>
        </div>

    </div>

    <div class="container flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-gray-600 text-center md:text-left">© 2025 Robinson's Road Ready Limited. All rights reserved.</p>
        <ul class="flex justify-center md:justify-start mb-3 lg:mb-0 space-y-0 space-x-5 flex-row">
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