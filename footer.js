
function loadFooter() {
    const footerHTML = `
        <footer class="bg-gradient-to-br from-black to-stone-900 text-white py-20">
            <div class="container mx-auto px-4 w-[80%]">
                <div class="grid grid-cols-1 md:grid-cols-[40%_20%_20%_20%] gap-8">
                    <div>
                        <h3 class="text-lg font-semibold mb-4">About R4XN</h3>
                        <p class="text-sm text-gray-400">
                            R4XN is a tech collaboration between 
                            <span class="italic font-semibold">RAWZEENS TECH</span>, a full-stack developer, and 
                            <span class="italic font-semibold">DEVXAIR</span>, a front-end developer. Together, we deliver innovative solutions in web development, IoT, and system design.
                        </p>
                        <h3 class="text-lg font-semibold mt-6 mb-4">Follow Us</h3>
                        <div class="flex space-x-4">
                            <a href="https://github.com/um-xair" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300 icon-hover" aria-label="Follow us on GitHub">
                                <i class="fa-brands fa-github text-3xl"></i>
                            </a>
                            <a href="https://github.com/Rawzeens" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300 icon-hover" aria-label="Follow us on GitHub">
                                <i class="fa-brands fa-github text-3xl"></i>
                            </a>
                            <a href="https://tiktok.com/@rawxair" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300 icon-hover" aria-label="Follow us on TikTok">
                                <i class="fa-brands fa-tiktok text-3xl"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Discover More</h3>
                        <ul class="space-y-2">
                            <li><a href="https://r4xn.netlify.app/" class="text-gray-400 hover:text-white transition-all duration-500 hover-underline">Portfolio</a></li>
                            <li><a href="#front-end-projects" class="text-gray-400 hover:text-white transition-all duration-500 hover-underline">Front-End Projects</a></li>
                            <li><a href="#iot-solutions" class="text-gray-400 hover:text-white transition-all duration-500 hover-underline">IoT Solutions</a></li>
                            <li><a href="#system-design" class="text-gray-400 hover:text-white transition-all duration-500 hover-underline">System Design</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul class="space-y-2 mb-6">
                            <li class="flex flex-col space-y-2">
                                <div class="flex items-center space-x-2 text-gray-400 transition-all duration-500 hover:text-white">
                                    <i class="fa-brands fa-whatsapp text-xl"></i>
                                    <a href="https://wa.me/601119415142" target="_blank" class="hover-underline">+60 11-1941 5142</a>
                                </div>
                                <div class="flex items-center space-x-2 text-gray-400 transition-all duration-500 hover:text-white">
                                    <i class="fa-brands fa-whatsapp text-xl"></i>
                                    <a href="https://wa.me/601162260866" target="_blank" class="hover-underline">+60 11-6226 0866</a>
                                </div>
                            </li>
                            <li class="flex flex-col space-y-2">
                                <div class="flex items-center space-x-2 text-gray-400 transition-all duration-500 hover:text-white">
                                    <i class="fa-solid fa-envelope text-xl"></i>
                                    <a href="mailto:walkers287@gmail.com" class="hover-underline">walkers287@gmail.com</a>
                                </div>
                                <div class="flex items-center space-x-2 text-gray-400 transition-all duration-500 hover:text-white">
                                    <i class="fa-solid fa-envelope text-xl"></i>
                                    <a href="mailto:natasyahebat@gmail.com" class="hover-underline">natasyahebat@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Portfolio</h3>
                        <ul class="space-y-2 mb-6">
                            <li class="flex flex-col space-y-2">
                                <div class="flex items-center space-x-2 text-gray-400 transition-all duration-500 hover:text-white">
                                    <i class="fa-solid fa-globe text-lg"></i>
                                    <a href="https://rawzeens.rf.gd/" target="_blank" class="hover-underline">Rawzeens</a>
                                </div>
                                <div class="flex items-center space-x-2 text-gray-400 transition-all duration-500 hover:text-white">
                                    <i class="fa-solid fa-globe text-lg"></i>
                                    <a href="https://devxair.netlify.app/" target="_blank" class="hover-underline">Devxair</a>
                                </div>
                            </li>
                        </ul>                    
                    </div>
                </div>
                <div class="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
                    <p class="text-sm">© <span id="current-year"></span> R4XN. All rights reserved.</p>
                </div>
            </div>
        </footer>
        <script>
            document.getElementById("current-year").textContent = new Date().getFullYear();
        </script>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

loadFooter();

