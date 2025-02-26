"use client";

import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 text-white">
      {/* Header */}
      <h1 className="text-5xl font-bold text-red-500 mb-6">Contact Me</h1>

      {/* Introduction */}
      <p className="text-lg mb-6 text-gray-300">
        As a soon-to-graduate senior, I am open and actively seeking an entry-level full-time position.
        Feel free to reach out for collaboration, professional inquiries, or just to connect!
      </p>

      {/* Contact Info */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500 mb-8">
        <h2 className="text-3xl font-semibold text-red-500 mb-4">Get in Touch</h2>
        <ul className="text-lg space-y-3 text-gray-200">
          <li>
            📧 Personal Email :{" "}
            <a href="mailto:wftyrrell@example.com" className="text-red-500 hover:underline">
              wftyrrell64@gmail.com
            </a>
          </li>
          <li>
            📧 School Email:{" "}
            <a href="mailto:wftyrrell@example.com" className="text-red-500 hover:underline">
              wftyrrell@wpi.edu
            </a>
          </li>
          <li>
            🔗 LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/william-tyrrell64/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
              https://www.linkedin.com/in/william-tyrrell64/
            </a>
          </li>
          <li>
            🐙 Github:{" "}
            <a href="https://github.com/wftyrrell" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
              https://github.com/wftyrrell
            </a>
          </li>
          <li>
            🏢 Location: Worcester, MA | Looking for In-Person Opportunities in the Northesat
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500">
        <h2 className="text-3xl font-semibold text-red-500 mb-4">Send Me a Message</h2>
        <form action="https://formspree.io/f/xpwqggpj" method="POST" className="space-y-4">
          <div>
            <label className="block text-lg text-gray-200 mb-1">Name</label>
            <input type="text" name="name" required className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div>
            <label className="block text-lg text-gray-200 mb-1">Email</label>
            <input type="email" name="email" required className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div>
            <label className="block text-lg text-gray-200 mb-1">Message</label>
            <textarea name="message" required rows={4} className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
          </div>
          <button type="submit" className="bg-red-600 text-black text-xl font-bold py-2 px-6 rounded-md hover:bg-red-800 transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Back to Home */}
      <div className="mt-8">
        <Link href="/" className="text-lg text-red-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;
