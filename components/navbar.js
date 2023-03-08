import { useEffect } from 'react';
import { GiCat } from "react-icons/gi";

export default function Header() {
    useEffect(() => {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');

        const handleClick = () => {
            mobileMenu.classList.toggle('hidden');
        };

        mobileMenuButton.addEventListener('click', handleClick);

        return () => {
            mobileMenuButton.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <nav class="bg-gray-100">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">

                    <div class="flex space-x-4">
                        <div>
                            <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <GiCat class="w-6 h-6 mr-1" />
                                <span class="font-bold">Meow</span>
                            </a>
                        </div>

                        <div class="hidden md:flex items-center space-x-1">
                            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
                            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Projects</a>
                            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Experiences</a>
                        </div>
                    </div>

                    <div class="md:hidden flex items-center">
                        <button class="mobile-menu-button">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            <div class="mobile-menu hidden md:hidden">
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">About</a>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Projects</a>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Experiences</a>
            </div>
        </nav>

    );
}