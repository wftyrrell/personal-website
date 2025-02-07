"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="home-container w-full mb-8 flex flex-col items-center">
      <header className="hero flex flex-col justify-center items-center bg-[#121212] border-4 border-yellow-500 p-8 w-full w-[55vw] mb-4">
      <div className="flex items-center justify-center">
        <p className="text-yellow-500 text-8xl whitespace-nowrap">Hello!</p>
        <p className="text-white text-8xl ml-4 whitespace-nowrap">I'm William Tyrrell</p>
      </div>
      </header>

      <section className="intro w-full">
        <h2 className="text-4xl font-bold text-yellow-500 mb-2">About Me:</h2>
        <p className="text-white font-bold text-xl mb-2">
          As a skilled engineer, I am passionate about exploring opportunities to develop innovative hardware and software solutions in a new college graduate position.
        </p>
        <p className="text-white text-lg mb-2">
          I have expertise in software development, including embedded systems, hardware description languages (HDL), full-stack development, and AI. Additionally, 
          my hands-on experience with sensors, circuits, systems, and microcontrollers has strengthened my hardware and lab skills.
        </p>
        <p className="text-white text-lg"> 
          Explore my projects, resume, and work experience to see how my skills can contribute to your team’s success.
        </p>
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