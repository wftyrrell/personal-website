"use client";

import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-white">
      <h1 className="text-5xl font-bold text-black mb-6">My Skills</h1>

      {/* Hardware Design */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-3">🔧 Hardware Design</h2>
        <p className="text-lg mb-4">
          Expertise in designing and implementing hardware solutions using FPGAs, microcontrollers, and digital logic.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
          <li>🟡 FPGA Programming (Xilinx Vivado, Verilog)</li>
          <li>🟡 Microcontroller Programming (TI MSP430, TI-EK-TM4C1294XL)</li>
          <li>🟡 Arduino</li>
          <li>🟡 Circuit Design & Troubleshooting</li>
          <li>🟡 Verilog / VHDL</li>
        </ul>
        <Link href="/projects#hardware" className="text-yellow-500 text-lg hover:underline mt-2 inline-block">
          🔗 View Related Projects
        </Link>
      </section>

      {/* Software Design */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-3">💻 Software Development</h2>
        <p className="text-lg mb-4">
          Experienced in full-stack development, embedded programming, and cloud computing.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
          <li>⚡ Python, C / C++, JavaScript, TypeScript</li>
          <li>⚡ React.js, Next.js, Node.js</li>
          <li>⚡ SQL (MySQL)</li>
          <li>⚡ AWS (Amplify, Lambda, S3, RDS)</li>
          <li>⚡ Git / GitHub</li>
          <li>⚡ Linux / Bash</li>
        </ul>
        <Link href="/projects#software" className="text-yellow-500 text-lg hover:underline mt-2 inline-block">
          🔗 View Related Projects
        </Link>
      </section>

      {/* Testing & Verification */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-3">🛠️ Testing & Verification</h2>
        <p className="text-lg mb-4">
          Skilled in debugging, verification, and ensuring system reliability.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
          <li>🔬 Signal Processing & Filtering</li>
          <li>🔬 Circuit Debugging</li>
          <li>🔬 Multimeter, Oscilloscope, Logic Analyzer Usage</li>
        </ul>
      </section>

      {/* AI / Machine Learning */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-3">🤖 Other</h2>
        <p className="text-lg mb-4">
          Hands-on experience in Artificial Intelligence, 3D Interfaces, and System Design.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
          <li> 🧠 NVIDIA's Audio2Face</li>
          <li>🧠 Unreal Engine</li>
          <li>🧠 Blender</li>
        </ul>
        <Link href="/projects#ai-ml" className="text-yellow-500 text-lg hover:underline mt-2 inline-block">
          🔗 View Related Projects
        </Link>
      </section>

      {/* Navigation Links */}
      <div className="mt-6">
        <Link href="/" className="text-lg text-yellow-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default About;
