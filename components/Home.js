"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ThemeProvider from '@/components/themeProvider';

function Home() {

  return (
    <ThemeProvider theme="hacker">
    <div className="container mx-auto p-4">
      <div className="flex justify-end">
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-2">
          <Link href="/ada">
            <div id="ada" className="rounded-lg shadow-md flex items-center justify-center h-48 md:h-64 border" style={{ backgroundColor: 'var(--secondary-bg-color)', borderColor: 'var(--border-color)' }}>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ color: 'var(--text-color)' }}>ADA</h2>
                <p className="text-sm md:text-base" style={{ color: 'var(--text-color)' }}>Algorithm Design and Analysis</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <Link href="/java">
            <div id="java" className="rounded-lg shadow-md flex items-center justify-center h-48 md:h-64 border" style={{ backgroundColor: 'var(--secondary-bg-color)', borderColor: 'var(--border-color)' }}>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ color: 'var(--text-color)' }}>JAVA</h2>
                <p className="text-sm md:text-base" style={{ color: 'var(--text-color)' }}>Advanced Java</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full p-2">
<Link href="/dbms">          <div id="dbms" className="rounded-lg shadow-md flex items-center justify-center h-48 md:h-64 border" style={{ backgroundColor: 'var(--secondary-bg-color)', borderColor: 'var(--border-color)' }}>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ color: 'var(--text-color)' }}>DBMS</h2>
              <p className="text-sm md:text-base" style={{ color: 'var(--text-color)' }}>Database Management Systems</p>
            </div>
          </div></Link>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Home;
