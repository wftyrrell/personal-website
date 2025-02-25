import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-black text-white p-8">
            <nav>
                <ul className="flex justify-center gap-8">
                    <li>
                        <Link href="/" passHref>
                            <span className="hover:text-gray-400 cursor-pointer">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className="hover:text-gray-400 cursor-pointer">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" passHref>
                            <span className="hover:text-gray-400 cursor-pointer">Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" passHref>
                            <span className="hover:text-gray-400 cursor-pointer">Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
