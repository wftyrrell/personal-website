"use client";

import React, { useState } from "react";
import Link from "next/link";

const skills = {
  "Hardware Design": {
    description: "Expert in designing and implementing hardware solutions using FPGAs, microcontrollers, and digital logic.",
    items: [
      "FPGA Programming (Xilinx Vivado, Verilog)",
      "Arduino",
      "Circuit Design & Troubleshooting / Digital & Analog",
      "Verilog",
      "Microcontroller Programming (TI MSP430, TI-EK-TM4C1294XL, Basys3)",
      "CPU Organization and Design (Architechture and Assembly Language Programming)",
    ],
    projectLink: "/projects#hardware",
  },
  "Software Development": {
    description: "Experienced in full-stack development, embedded programming, and cloud computing.",
    items: [
      "Python, C / C++, JavaScript, TypeScript",
      "React.js, Next.js, Node.js",
      "SQL (MySQL) / Database Structures",
      "AWS (Amplify, Lambda, S3, RDS)",
      "Git / GitHub",
      "Linux / Bash",
      "HTML, CSS, Tailwind CSS, Assembly",
    ],
    projectLink: "/projects#software",
  },
  "Testing & Verification": {
    description: "Skilled in debugging, verification, and ensuring system reliability.",
    items: [
      "Signal Processing & Filtering",
      "Circuit Debugging",
      "Multimeter, Oscilloscope, Logic Analyzer Usage",
    ],
    projectLink: "/projects#testing",
  },
  "Other": {
    description: "Hands-on experience in AI, 3D Interfaces, and System Design.",
    items: [
      "NVIDIA Audio2Face",
      "Unreal Engine",
      "Blender",
      "Computer Aided Design (Solidworks)",
      "AI / Machine Learning",
      "3D Printing",
      "System Design & Analysis",
    ],
    projectLink: "/projects#ai-ml",
  },
};

const experience = [
  {
    title: "Field Engineer",
    company: " Northern Construction Service LLC",
    duration: "May 2024 - August 2024",
    responsibilities: [
      "Responsible for daily survey layout of construction points from established benchmarks",
      "Monitor and document employee hours for daily job tracking and payroll reporting",
      "Measure and report daily production quantities to assist in the development of monthly pay requisitions submitted to MA DCR",
    ],
  },
  {
    title: "SPS Intern",
    company: "American Superconductor",
    duration: "May 2023 - August 2023",
    responsibilities: [
      "Assisted in product development, modification, assembly, and testing of superconducting wire and superconducting coils used inthe superconducting system",
      "Designed wiring diagrams and test stations for various aspects of superconductor product development",
      "Used Solidworks, LabVIEW, Visual Code Studio, and other software to aid in superconductor research",
    ],
  },
  {
    title: "IT Intern",
    company: "IPG Photonics",
    duration: "June 2022 - August 2022",
    responsibilities: [
      "Managed access privileges, control structures, and resources available to employees to prevent cyber attacks",
      "Helped troubleshoot issues related to IT among IPG employees",
      "Fixed and replaced faulty or broken computers/hardware",
    ],
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof skills>("Hardware Design");

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 text-white">
      {/* Introduction Section */}
      <section className="mb-10">
        <h1 className="text-5xl font-bold text-red-500 mb-4">About Me</h1>
        <p className="text-lg mb-4 text-gray-300">
          I am a BS Electrical and Computer Engineering and a Master&apos;s of Computer Science stuent at Worcester Polytechnic Institue (WPI).
          I will be graduating in May 2025 and am actively looking for an Entry-Level Full time Job.
          I have expertise in software development, including embedded systems, hardware description languages (HDL), and full-stack development. Additionally,
          I have hands-on experience with sensors, circuits, systems, and microcontrollers that has strengthened my hardware and lab skills.
        </p>
        <p className="text-lg mb-6 text-gray-300">
          I have worked on projects involving FPGA programming, real-time embedded systems, cloud computing, and AI-driven applications.
          My hands-on experience includes circuit design, microcontroller programming, and testing electronic hardware. You can see
          these and my other skills below.
        </p>
      </section>

      {/* Skills Tabs */}
      <div >
        {/* Tabs Navigation */}
        <div className="mb-10">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Skills</h1>
        <div className="flex space-x-4 border-b border-gray-700 mb-6">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category as keyof typeof skills)}
              className={`px-4 py-2 text-lg font-semibold ${activeTab === category ? "border-b-4 border-red-500 text-red-500" : "text-gray-400"
                } transition-all duration-300`}
            >
              {category}
            </button>
          ))}
          </div>
        </div>

        {/* Skill Content */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500">
          <h2 className="text-3xl font-semibold text-red-500 mb-3">{activeTab}</h2>
          <p className="text-lg mb-4 text-gray-300">{skills[activeTab].description}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg text-gray-200">
            {skills[activeTab].items.map((skill) => (
              <li key={skill}>🔹 {skill}</li>
            ))}
          </ul>
          <Link href={skills[activeTab].projectLink} className="text-red-500 text-lg hover:underline mt-4 inline-block">
            🔗 View Related Projects
          </Link>
        </div>
      </div>

      {/* Professional Experience Section */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold text-red-500 mb-6">Professional Experience</h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.title} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500">
              <h3 className="text-2xl font-semibold text-red-500">{job.title}</h3>
              <p className="text-lg text-gray-300">{job.company} | {job.duration}</p>
              <ul className="list-disc pl-6 mt-3 text-gray-300">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Home */}
      <div className="mt-8">
        <Link href="/" className="text-lg text-red-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default About;
