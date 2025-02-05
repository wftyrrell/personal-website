// src/components/header.tsx
"use client";

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <nav>
                <ul className="flex justify-center gap-8">
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                    <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
