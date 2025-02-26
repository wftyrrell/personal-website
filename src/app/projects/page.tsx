// src/app/about/page.tsx
"use client";

import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-lg">I am William Tyrrell, an engineer passionate about hardware and software solutions.</p>
      <Link href="/">Go Home</Link>
    </div>
  );
};

export default Projects;