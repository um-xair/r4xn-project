<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>R4XN | Project</title>
    <link rel="icon" href="../assets/r4xn-black.png" type="image/png" sizes="32x32">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
        }
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        .fade-in {
            animation: fadeIn 1s ease-in-out forwards;
        }
        .floating-animation {
            animation: float 2s ease-in-out infinite;
        }
        @keyframes float {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
            100% {
                transform: translateY(0);
            }
        }
    </style>
</head>
<body class="px-4 py-6 bg-gradient-to-bl from-[#DEE4F0] via-slate-100 to-zinc-200 fade-in mb-[100px]">

    <div class="w-full bg-white rounded-full py-4 z-50">
        <div class="flex items-center justify-between px-6 h-full">
            <a href="#" id="menu-btn" class="w-10 h-10 rounded-full bg-[#783BE7] flex items-center justify-center">
                <i class="fa-solid fa-bars text-white"></i>
            </a>
            <h1 class="text-[#040D12] text-2xl font-extrabold text-xl">Expenses Tracker</h1>
            <div class="w-10 h-10"></div>
        </div>
    </div>

    <div id="sidebar" class="fixed top-0 left-0 w-full bg-white h-full z-50 transform -translate-x-full transition-transform duration-300 ease-in-out">
        <div class="flex items-center justify-between p-10">
            <button id="close-btn" class="w-10 h-10 flex items-center justify-center bg-[#E9336E] rounded-full text-white text-2xl">
                <i class="fa-solid fa-times"></i>
            </button>            
            <h2 class="text-xl font-bold text-[#783BE7]">Expenses Tracker</h2>
        </div>
        <ul class="px-10 py-4">
            <li><a href="#" class="block py-2">Home</a></li>
            <li><a href="#" class="block py-2">About</a></li>
            <li><a href="#" class="block py-2">Features</a></li>
            <li><a href="#" class="block py-2">Contact</a></li>
        </ul>
    </div>

    <div id="overlay" class="hidden fixed inset-0 bg-black bg-opacity-50 z-40"></div>

    <script>
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        menuBtn.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
        });

        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        });
    </script>