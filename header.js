document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
        <div class="flex justify-center text-white">
            <header id="header" class="mt-10 bg-[#232323] w-[90%] lg:w-[85%] flex flex-col items-center justify-between px-6 py-4 lg:rounded-full rounded-[30px] backdrop-filter backdrop-blur-sm bg-opacity-10 fixed z-[999] transition-opacity duration-500">
                <div class="flex items-center w-full justify-between">
                    <div class="flex items-center">
                        <div class="ml-3">
                            <h1 class="text-lg font-semibold">R4XN</h1>
                            <p class="text-sm text-gray-400">Project Hub</p>
                        </div>
                    </div>
                    <nav class="hidden lg:flex items-center space-x-6">
                        <a href="#home" class="text-md">Home</a>
                        <a href="#features" class="text-md">Features</a>
                        <a href="#explore" class="text-md">Explore</a>
                        <div class="relative">
                            <button id="desktop-tools-btn" class="text-md flex items-center space-x-2 focus:outline-none">
                                <span>Tools</span>
                                <i class="fas fa-chevron-down text-sm"></i>
                            </button>
                            <div id="desktop-tools-menu"
                                class="absolute right-0 mt-8 w-[750px] bg-[#0A0A0A] text-white rounded-[20px] shadow-lg opacity-0 scale-95 translate-y-2 transition-all duration-300 ease-in-out pointer-events-none p-4 backdrop-blur-md backdrop-filter hidden">
                                <div class="grid grid-cols-3 w-full">
                                    <a href="gradient.html" class="block p-3 hover:bg-neutral-900 rounded-md transition-all duration-300">
                                        <h3 class="text-md font-semibold">Tailwind CSS Gradient</h3>
                                        <p class="text-xs text-gray-400">Vibrant multi-color gradients for web.</p>
                                    </a>
                                    <a href="card.html" class="block p-3 hover:bg-neutral-900 rounded-md transition-all duration-300">
                                        <h3 class="text-md font-semibold">Tailwind CSS Card</h3>
                                        <p class="text-xs text-gray-400">Stylish modern, adaptive card layouts.</p>
                                    </a>
                                    <a href="pallete.html" class="block p-3 hover:bg-neutral-900 rounded-md transition-all duration-300">
                                        <h3 class="text-md font-semibold">Color Palette</h3>
                                        <p class="text-xs text-gray-400">Design custom color combinations easily.</p>
                                    </a>
                                    <a href="font.html" class="block p-3 hover:bg-neutral-900 rounded-md transition-all duration-300">
                                        <h3 class="text-md font-semibold">Font Pair Generator</h3>
                                        <p class="text-xs text-gray-400">Discover and match perfect font combinations.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="#about" class="text-md">About</a>
                    </nav>
                    <button class="lg:hidden text-white" id="menu-btn">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>

                <div class="w-full mt-4 backdrop-blur-lg bg-opacity-10 text-white hidden" id="mobile-menu">
                    <nav class="flex flex-col space-y-4 py-4">
                        <a href="#home" class="text-md">Home</a>
                        <a href="#features" class="text-md py-2">Features</a>
                        <a href="#explore" class="text-md py-2">Explore</a>
                        <div class="relative">
                            <button id="mobile-tools-btn" class="text-md flex items-center space-x-1 py-2">
                                <span>Tools</span>
                                <i class="fas fa-chevron-down text-sm"></i>
                            </button>
                            <div id="mobile-tools-menu" class="hidden flex flex-col space-y-2 bg-[#0A0A0A] text-white p-2 rounded-md">
                                <a href="gradient.html" class="text-sm py-2 block hover:bg-neutral-900 p-4">Tailwind CSS Gradient</a>
                                <a href="card.html" class="text-sm py-2 block hover:bg-neutral-900 p-4">Tailwind CSS Card</a>
                                <a href="pallete.html" class="text-sm py-2 block hover:bg-neutral-900 p-4">Color Palette</a>
                                <a href="font.html" class="text-sm py-2 block hover:bg-neutral-900 p-4">Font Generator</a>
                            </div>
                        </div>
                        <a href="#about" class="text-md py-2">About</a>
                    </nav>
                </div>
            </header>
        </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    document.getElementById("menu-btn").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.toggle("hidden");
    });

    document.getElementById("mobile-tools-btn").addEventListener("click", function () {
        document.getElementById("mobile-tools-menu").classList.toggle("hidden");
    });

    const toolsBtn = document.getElementById("desktop-tools-btn");
    const toolsMenu = document.getElementById("desktop-tools-menu");

    toolsBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        const isHidden = toolsMenu.classList.contains("hidden");
        
        if (isHidden) {
            toolsMenu.classList.remove("hidden", "opacity-0", "scale-95", "translate-y-2", "pointer-events-none");
            toolsMenu.classList.add("opacity-100", "scale-100", "translate-y-0");
        } else {
            toolsMenu.classList.add("hidden", "opacity-0", "scale-95", "translate-y-2", "pointer-events-none");
            toolsMenu.classList.remove("opacity-100", "scale-100", "translate-y-0");
        }
    });

    document.addEventListener("click", function (event) {
        if (!toolsBtn.contains(event.target) && !toolsMenu.contains(event.target)) {
            toolsMenu.classList.add("hidden", "opacity-0", "scale-95", "translate-y-2", "pointer-events-none");
            toolsMenu.classList.remove("opacity-100", "scale-100", "translate-y-0");
        }
    });

    const header = document.getElementById("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            header.style.opacity = "0";
        } else {
            header.style.opacity = "1";
        }
        lastScrollY = window.scrollY;
    });
});