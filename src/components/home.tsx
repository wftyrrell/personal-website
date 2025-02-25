"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <div className="home-container w-full mb-4 flex flex-col items-center mt-[-200px] bg-gray-500">
        <header className="hero flex flex-col justify-center items-center bg-red border-4 border-yellow-500 p-4 w-full mb-4">
        <div className="flex items-center justify-center">
          <p className="text-yellow-500 text-8xl  font-bold whitespace-nowrap">Hello!</p>
          <p className="text-white text-8xl ml-4 whitespace-nowrap">I&apos;m William Tyrrell</p>
          <section className="intro flex-1 ml-8 flex items-center">
            <div className="flex-shrink-0 ml-16">
              <Image
                src="/Wpi_seal.png" // Replace with the path to your photo
                alt="William Tyrrell"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </section>
        </div>
        
        </header>

        <div className="flex w-full justify-between my-4 ml-32">
          <section className="photo flex justify-center mr-2 flex-shrink-0">
            <div className="border-4 border-yellow-500 rounded-full">
              <Image
                src="/headshot.jpg"
                alt="William Tyrrell"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
          </section>

          <section className="intro flex-1 ml-8 mr-4 my-8">
            <h2 className="text-4xl font-bold text-yellow-500 mb-2">About Me:</h2>
            <p className="text-white font-bold text-xl mb-2 mr-32">
              As a skilled engineer, I am passionate about exploring opportunities to develop innovative hardware and software solutions in a new college graduate position.
            </p>
            <p className="text-white text-lg mb-2">
              I have expertise in software development, including embedded systems, hardware description languages (HDL), full-stack development, and AI. Additionally, 
              my hands-on experience with sensors, circuits, systems, and microcontrollers has strengthened my hardware and lab skills.
            </p>
            <p className="text-white text-lg mb-8"> 
              Explore my projects, resume, and work experience to see how my skills can contribute to your team’s success.
            </p>
            <div className="">
              <Link href="/Resume.pdf" legacyBehavior>
                <a className="bg-yellow-500 text-black text-2xl font-bold py-2 px-8 rounded-full hover:bg-yellow-700 transition duration-300">
                  View My Resume
                </a>
              </Link>
            </div>
          </section>
        </div>

        <section className="text-4xl font-bold projects items-center">
          <h2>Featured Projects:</h2>
          <div className="project-list">
            {/* Projects */}
          </div>
        </section>

        <footer className="w-full mt-8">
        </footer>
      </div>
    </div>
  );
};

export default Home;