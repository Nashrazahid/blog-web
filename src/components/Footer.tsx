'use client';
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-black mt-20">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/image.png"
              alt="WanderWays Logo"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl text-white">WanderWays</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
            © 2020 WanderWays —
            <a
              href="https://www.linkedin.com/in/nashra-zahid-290173308"
              className="text-gray-500 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Nashra-Zahid
            </a>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="#" className="text-gray-500 hover:text-white">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="ml-3 text-gray-500 hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="ml-3 text-gray-500 hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="ml-3 text-gray-500 hover:text-white">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;


