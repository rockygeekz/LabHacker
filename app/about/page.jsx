"use client";
import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    const audio = new Audio('/audio2.mp3'); // Ensure your audio file is in the public/static/audio folder
    audio.loop = true; // Set audio to loop
    audio.play().catch(error => console.log('Audio play error:', error)); // Handle error
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#000000] text-[#00FF00] p-4">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#00FF00]">Visit Our Office in Bangalore</h1>
        <div className="w-full max-w-lg h-64 md:h-96 mb-4">
          <iframe
            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=pattanagere,Bangalore,India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <a 
          href="https://maps.google.com/maps?ll=12.920994,77.509732&z=15&t=m&hl=en&gl=US&mapclient=embed&q=Pattanagere%20Rajarajeshwari%20Nagar%20Bengaluru%2C%20Karnataka%20560098" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-md md:text-lg text-[#00FF00] underline"
        >
          View on Maps
        </a>
      </div>
    </div>
  );
}

export default About;
