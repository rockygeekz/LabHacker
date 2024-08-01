// pages/danger.js
"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';

function Danger() {
  useEffect(() => {
    const audio = new Audio('/static/audio/prank.mp3'); // Ensure your audio file is in the public/static/audio folder
    audio.play().catch(error => console.log('Audio play error:', error)); // Handle error
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#000000] text-[#00FF00] p-4">
      <div className="text-center flex flex-col items-center justify-center ">
        <Image 
          src="/static/images/prank-image.jpg" 
          alt="Prank Image"
          className="mb-4 rounded-lg bg-red-600 "
          width={300}
          height={300}
        />
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#00FF00]">Please turn your volume up for viewing on mobile</h1>
        <p className="text-md md:text-lg">
          Thank you!!
        </p>
      </div>
    </div>
  );
}

export default Danger;
