"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const basePath = '/personal-website'; // Must match `basePath` in next.config.ts    

const featuredProjects = [
  {
    name: "RTOS Oscilloscope",
      image: "/personal-website/TI_EK.jpg",
      repo: "https://github.com/wftyrrell/oscilloscope-RTOS",
      description: "Using the EK-TM4C1294XL board I am porting a 1 Msps digital oscilloscope, to run using a RealTime Operating System (RTOS)."
  },
  {
    name: "RISC-V CPU Design",
    image: `${basePath}/riscv_project.jpg`,
    repo: "https://github.com/wftyrrell/riscv-cpu-design",
    description: "A custom RISC-V CPU implemented in Verilog for FPGA deployment."
  },
  {
    name: "Auction House App",
    image: `${basePath}/auction_house.jpg`,
    repo: "https://github.com/wftyrrell/auction-house-app",
    description: "A full-stack auction house platform built with React and AWS Amplify."
  }
];

const Home = () => {
  return (
    <div>
      <div className="home-container w-full mb-4 flex flex-col items-center bg-gray-800">
        <header className="hero flex flex-col justify-center items-center bg-red border-4 border-red-800 p-4 w-full mb-4">
          <div className="flex items-center justify-center">
            <p className="text-red-600 text-6xl font-bold whitespace-nowrap">Hello!</p>
            <p className="text-white text-6xl ml-4 whitespace-nowrap">I&apos;m William Tyrrell</p>
            <section className="intro flex-1 ml-8 flex items-center">
              <div className="flex-shrink-0 ml-16">
                <Image
                  src={`${basePath}/Wpi_seal.png`}
                  alt="William Tyrrell"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </section>
          </div>
        </header>

        <div className="flex w-full justify-between ml-16">
          <section className="photo flex justify-center flex-shrink-0 my-8">
            <div className="border-4 border-red-700 rounded-full flex items-center justify-center w-[200px] h-[260px]">
              <Image
                src={`${basePath}/headshot.jpg`}
                alt="William Tyrrell"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </section>

          <section className="intro flex-1 ml-8 mr-4 my-4">
            <h2 className="text-4xl font-bold text-white mb-2">About Me:</h2>
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
                <a className="bg-red-600 text-black text-2xl font-bold py-2 px-8 rounded-full hover:bg-red-900 transition duration-300">
                  View My Resume
                </a>
              </Link>
            </div>
          </section>
        </div>

        {/* Featured Projects Section */}
        <section className="text-xl font-bold projects items-center my-4">
          <h2 className="text-white text-4xl text-center mb-8">Featured Projects:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            {featuredProjects.map((project) => (
              <div key={project.name} className="bg-gray-700 p-4 rounded-lg shadow-lg border border-red-500">
                <Link href={project.repo} target="_blank">
                  <div className="group relative cursor-pointer">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={350}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg transition-transform transform group-hover:scale-105"
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
          <div className="mt-6 text-center">
            <Link href="/projects" className="text-lg text-red-500 hover:underline">
              View All Projects →
            </Link>
          </div>
        </section>

        <footer className="w-full mt-8"></footer>
      </div>
    </div>
  );
};

export default Home;
