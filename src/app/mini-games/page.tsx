"use client";

import React from "react";
import Link from "next/link";

const MiniGames = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 text-white text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-6">Mini Games</h1>
      <p className="text-2xl text-gray-300">🎮 Coming Soon! Stay Tuned. 🎮</p>

      {/* Back to Home */}
      <div className="mt-8">
        <Link href="/" className="text-lg text-red-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default MiniGames;
