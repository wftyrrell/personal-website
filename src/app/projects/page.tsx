"use client";

import React, { useState } from "react";
import Link from "next/link";

const projects = {
  Embedded: [
    {
      name: "RTOS Oscilloscope",
      image: "/personal-website/TI_EK.jpg",
      repo: "https://github.com/wftyrrell/oscilloscope-RTOS",
      description: "Using the EK-TM4C1294XL board I am porting a 1 Msps digital oscilloscope, to run using a RealTime Operating System (RTOS)."
    },
    {
      name: "Space Invaders",
      image: "/personal-website/space_invaders.jpg",
      repo: "https://github.com/wftyrrell/space-invaders",
      description: "Using the Texas Instruments MSP-EXP430F5529LP microcontroller, I am implementing a simple version of the game space invaders."
    },
    {
      name: "Embedded Oscilloscope Design",
      image: "/personal-website/Osciloscope.png",
      repo: "https://github.com/wftyrrell/oscilloscope-EK-TM4C1294XL",
      description: "Using the EK-TM4C1294XL board I am creating a 1 Msps digital oscilloscope"
    },
    {
      name: "Guitar Hero",
      image: "/personal-website/guitar.jpg",
      repo: "https://github.com/wftyrrell/guitar-hero",
      description: "Using the Texas Instruments MSP-EXP430F5529LP microcontroller, I am implementing a simple version of the game guitar hero."
    },
    {
      name: "Frequency Counter Embedded Oscilloscope",
      image: "/personal-website/trigger.png",
      repo: "https://github.com/wftyrrell/frequency_counter-audio_output",
      description: "Using the EK-TM4C1294XL board I am adding a frequency counter and audio output functionality to the previously created digital oscilloscope"
    },
  ],
  HDL: [
    {
      name: "Light Sensor Reading",
      image: "/personal-website/Basys3.jpg",
      repo: "https://github.com/wftyrrell/light-sensor",
      description: "This project is designed for the Basys 3 development board and involves interfacing with a PMOD ALS (Ambient Light Sensor) module using SPI communication. The light sensor readings are displayed on the seven-segment display of the Basys 3 board. Features include a two stage synchronizer for removing metastability."
    },

  ],
  "Full-Stack": [
    {
      name: "Auction House App",
      image: "/personal-website/auction.jpg",
      repo: "https://github.com/apblanchard4/auction-house",
      description: "A full-stack auction house platform built with React and AWS Amplify."
    },
    {
      name: "WPI Course Tracker",
      image: "/personal-website/Wpi_seal.png",
      repo: "https://github.com/dugganm24/WPI-Course-Tracker",
      description: "Full-stack implementation of streamlined alternative to WPI tracking sheets"
    },
  ],
  Python: [
    {
      name: "Binary Classification",
      image: "/personal-website/melanoma.png",
      repo: "https://github.com/wftyrrell/Binary-classification-on-melanoma-and-naevus-images",
      description: "This Project Implements a Binary classification of images of melanoma and naevus"
    },
  ],
  Other: [
    {
      name: "Major Qualifying Project",
      image: "/personal-website/a2f.jpg",
      repo: "https://github.com/dugganm24/MQP",
      description: "This project focuses on generating realistic human facial video and mapping it onto a 3D surface to create expressive, lip-synced animations."
    },
    {
      name: "Smart Trash Can Design",
      image: "/personal-website/trash.png",
      repo: "/trash_report.pdf",
      description: "Piloted a group of three in the Design of a Smart Trash Can. Design successfully implemented a weigh functionality for the trash within +/- 0.1% accuracy solving a local problem for trash weight limits"
    },
  ],
};


const Projects = () => {
  const [activeTab, setActiveTab] = useState<"Embedded" | "HDL" | "Full-Stack" | "Python" | "Other">(
    "Embedded"
  );

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>

      {/* Tabs Navigation (Scrollable) */}
      <div className="relative mb-6">
        <div className="overflow-x-auto whitespace-nowrap custom-scrollbar">
          <div className="flex space-x-4 min-w-max">
            {Object.keys(projects).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category as "Embedded" | "HDL" | "Full-Stack" | "Python" | "Other")}
                className={`px-4 py-2 rounded-md text-lg font-semibold transition-all duration-300 ${
                  activeTab === category ? "bg-red-600 text-black" : "bg-gray-700 text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects[activeTab].map((project) => (
          <div key={project.name} className="bg-gray-800 p-4 rounded-lg shadow-lg border border-red-500">
            <Link href={project.repo} target="_blank">
              <div className="group relative cursor-pointer">
                <img
                  src={project.image}
                  alt={project.name}
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

      {/* Back to Home */}
      <div className="mt-8">
        <Link href="/" className="text-lg text-red-500 hover:underline">← Back to Home</Link>
      </div>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2d2d2d;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e63946;
          border-radius: 10px;
          border: 2px solid #2d2d2d;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ff4d6d;
        }
      `}</style>
    </div>
  );
};

export default Projects;

