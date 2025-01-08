import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/375882_9f1a8e8b364946f38b7eb05436e76503f000.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex items-center justify-center -mt-64 px-4">
        {/* Featured Post Card */}
        <div className="bg-[#2d3c32] shadow-lg p-4 max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 w-full mt-20">
          {/* Left Image Section */}
          <div className="sm:w-1/3 w-full flex justify-center sm:justify-start">
            <Image
              src="/photo.jpeg"
              alt="Featured Post"
              width={300}
              height={200}
              className="rounded-lg object-cover sm:h-[250px] h-[150px]"
            />
          </div>

          {/* Right Text Section */}
          <div className="sm:w-1/2 w-full text-white">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              My Travel Blogs
            </h2>
            <h3 className="text-lg font-bold mb-2">
              Discover the World with Me
            </h3>
            <p className="text-sm text-gray-300 mb-2 sm:block hidden">
              Traveling is more than just visiting new places—it's about
              embracing different cultures, exploring breathtaking landscapes,
              and creating memories that last a lifetime. Through this blog, I
              share my personal travel stories, favorite destinations, and
              valuable tips to inspire your next adventure.
            </p>
            <p className="text-sm text-gray-300 sm:hidden mb-2">
              Traveling is more than just visiting new places. Join me as I
              explore hidden gems and uncover the beauty of the world.
            </p>
            <p className="text-xs text-gray-500">Mar 22, 2023 · 2 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
}



