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
      image: "/personal-website/auction_house.jpg",
      repo: "https://github.com/wftyrrell/auction-house-app",
      description: "A full-stack auction house platform built with React and AWS Amplify."
    },
    {
      name: "AI-Powered Resume Analyzer",
      image: "/personal-website/resume_analyzer.jpg",
      repo: "https://github.com/wftyrrell/ai-resume-analyzer",
      description: "An AI-driven tool for analyzing and scoring resumes using NLP."
    },
  ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"Embedded" | "HDL" | "Full-Stack">(
    "Embedded"
  );

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>

      {/* Tabs Navigation */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category as "Embedded" | "HDL" | "Full-Stack")}
            className={`px-4 py-2 rounded-md text-lg font-semibold ${
              activeTab === category ? "bg-red-600 text-black" : "bg-gray-700 text-white"
            } transition-all duration-300`}
          >
            {category}
          </button>
        ))}
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
    </div>
  );
};

export default Projects;
