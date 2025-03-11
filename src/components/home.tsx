"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

  

const featuredProjects = [
  {
    name: "RTOS Oscilloscope",
    image: "/personal-website/TI_EK.jpg",
    repo: "https://github.com/wftyrrell/oscilloscope-RTOS",
    description: "Using the EK-TM4C1294XL board I am porting a 1 Msps digital oscilloscope, to run using a RealTime Operating System (RTOS)."
  },
  {
    name: "FPGA-Based Light Sensor Reading",
    image: "/personal-website/Basys3.jpg",
    repo: "https://github.com/wftyrrell/light-sensor",
    description: "This project is designed for the Basys 3 development board and involves interfacing with a PMOD ALS (Ambient Light Sensor) module using SPI communication. The light sensor readings are displayed on the seven-segment display of the Basys 3 board. Features include a two stage synchronizer for removing metastability."
  },
  {
    name: "Major Qualifying Project",
    image: "/personal-website/a2f.jpg",
    repo: "https://github.com/dugganm24/MQP",
    description: "This project focuses on generating realistic human facial video and mapping it onto a 3D surface to create expressive, lip-synced animations. "
  }
];

const Home = () => {
  return (
    <div className="py-4 lg:py-24">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-between mb-8 max-w-5xl mx-auto flex-wrap">
        <header className="flex flex-col items-center lg:items-start lg:w-1/2 bg-red border-8 border-red-800 p-2 w-full mb-4 lg:mb-0">
          <p className="text-red-600 text-5xl sm:text-6xl font-bold">Hello!</p>
          <p className="text-white text-3xl sm:text-6xl mt-2">I&apos;m William Tyrrell</p>
          <div className="mt-4 justify-center items-center">
            <Image
              src="/personal-website/Wpi_seal.png"
              alt="William Tyrrell"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </header>

        <section className="flex justify-center">
          <div className="w-full relative h-auto p-1 border-8 border-red-800 rounded-full max-w-sm mx-auto">
            <Image
              src="/personal-website/headshot.jpg"
              alt="William Tyrrell"
              className="rounded-full max-w-full h-auto"
              width={220}
              height={220}
            />
          </div>
        </section>

        <section className="text-center md:text-left max-w-4xl lg:w-full my-4">
          <p className="text-white font-bold text-lg md:text-xl mb-4">
            As a skilled engineer, I am passionate about exploring opportunities to develop innovative hardware and software solutions in a new college graduate position.
          </p>
          <p className="text-white text-md md:text-lg mb-6">
            Explore my projects, resume, and work experience to see how my skills can contribute to your team’s success.
          </p>
          <Link href="/Resume.pdf" legacyBehavior>
            <a className="bg-red-600 text-black text-xl font-bold py-2 px-6 rounded-full hover:bg-red-900 transition duration-300 inline-block">
              View My Resume
            </a>
          </Link>
        </section>
      </div>

      {/* Featured Projects Section */}
      <section className="text-center my-6 max-w-6xl mx-auto"> {/* Centering and width limit */}
        <h2 className="text-white text-3xl sm:text-4xl mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {featuredProjects.map((project) => (
            <div key={project.name} className="bg-gray-700 p-4 rounded-lg shadow-lg border border-red-500">
              <Link href={project.repo} target="_blank">
                <div className="group relative cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={280}
                    height={160}
                    className="w-full h-40 object-cover rounded-lg transition-transform transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xl font-bold">{project.name}</p>
                  </div>
                </div>
              </Link>
              <h3 className="text-xl font-bold text-red-500 mt-4">{project.name}</h3>
              <p className="text-gray-300 text-md">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Link to Projects Page */}
        <div className="mt-6">
          <Link href="/projects" className="text-lg text-red-500 hover:underline">
            View All Projects →
          </Link>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="relative h-auto  max-w-sm mx-auto">
          <div className="flex items-center justify-center border-8 border-gray-500 rounded-full w-40 h-40">
            <span className="text-red-600 text-7xl font-bold">WT</span>
          </div>
        </div>
      </section>

      <footer className="w-full"></footer>
    </div>
  );
};

export default Home;
