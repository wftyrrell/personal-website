"use client";

import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-white">
      <h1 className="text-5xl font-bold text-yellow-500 mb-4">About Me</h1>
      <p className="text-lg mb-6">
        I am <span className="font-bold">William Tyrrell</span>, an engineer passionate about developing innovative hardware and software solutions. 
        My expertise spans across embedded systems, full-stack development, AI, and digital design.
      </p>

      {/* Languages & Frameworks */}
      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-2">Languages & Frameworks</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-lg">
          <li>🟡 Python</li>
          <li>🟡 C / C++</li>
          <li>🟡 JavaScript / TypeScript</li>
          <li>🟡 React.js / Next.js</li>
          <li>🟡 Node.js</li>
          <li>🟡 HTML / CSS / Tailwind</li>
          <li>🟡 VHDL / Verilog</li>
          <li>🟡 SQL / NoSQL</li>
        </ul>
      </section>

      {/* Software & Tools */}
      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-2">Software & Tools</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-lg">
          <li>⚡ Git / GitHub</li>
          <li>⚡ Docker</li>
          <li>⚡ AWS (Amplify, Lambda, S3)</li>
          <li>⚡ MATLAB</li>
          <li>⚡ Quartus / Xilinx Vivado</li>
          <li>⚡ Linux / Bash</li>
        </ul>
      </section>

      {/* Course Work */}
      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-2">Relevant Course Work</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
          <li>✅ Embedded Systems Design</li>
          <li>✅ Machine Learning & AI</li>
          <li>✅ Computer Architecture</li>
          <li>✅ Digital Signal Processing</li>
          <li>✅ VLSI Design</li>
          <li>✅ Computer Vision</li>
          <li>✅ Cybersecurity Principles</li>
        </ul>
      </section>

      {/* Lab Techniques */}
      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-2">Lab Techniques & Hands-on Experience</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
          <li>🔬 FPGA Programming</li>
          <li>🔬 PCB Design & Testing</li>
          <li>🔬 Microcontroller Programming (ARM, AVR, PIC)</li>
          <li>🔬 Signal Processing & Filtering</li>
          <li>🔬 Sensor Interfacing</li>
          <li>🔬 Circuit Design & Troubleshooting</li>
        </ul>
      </section>

      {/* Navigation Links */}
      <div className="mt-6">
        <Link href="/" className="text-lg text-yellow-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> 50e4c9f081cc2730743e0cc606b1646501cdc219
