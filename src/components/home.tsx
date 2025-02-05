"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="home-container w-full mb-8">
      <header className="hero w-full  flex flex-col justify-center items-center bg-[#121212]">
        <p className="text-white text-8xl mb-8 whitespace-nowrap"> Hello! I'm William Tyrrell</p>
      </header>

      <section className="intro w-full">
        <h2 className="text-2xl font-bold text-white mb-2">About Me:</h2>
        <p className="text-white text-lg">
        Passionate about the intersection of hardware and software, I am an Electrical and Computer Engineering BS student also pursuing a Master's in Computer Science. My academic journey blends a deep understanding of electronics with advanced software development, enabling me to explore innovative solutions that bridge the gap between the physical and digital worlds. I thrive on tackling complex challenges and building systems that integrate both hardware and software seamlessly        </p>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          <div className="project-card">Project 3</div>
        </div>
      </section>

      <footer>
      </footer>
    </div>
  );
};

export default Home;