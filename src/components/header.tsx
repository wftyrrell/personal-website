// src/components/header.tsx
"use client";

import React from "react";
import Link from "next/link"; // Use Next.js Link instead of react-router-dom

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-8">
            <nav>
                <ul className="flex justify-center gap-8">
                    <li>
                        <Link href="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-400">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
