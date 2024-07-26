import Link from 'next/link';
import React from 'react';
// import Navbar from './Navbar';

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto mt-8 p-4">
        <div className="flex flex-wrap justify-center">
          
          <div className="w-full md:w-1/2 p-2">
          <Link href="/ada" >
            <div id="ada" className="bg-blue-300 rounded-lg shadow-md flex items-center justify-center h-64">
              <div>
                <h2 className="text-2xl font-bold mb-4">ADA</h2>
                <p>Algorithm Design and Analysis</p>
              </div>
            </div>
        </Link>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div id="java" className="bg-green-300 rounded-lg shadow-md flex items-center justify-center h-64">
              <div>
                <h2 className="text-2xl font-bold mb-4">JAVA</h2>
                <p>Java Programming Language</p>
              </div>
            </div>
          </div>
          <div className="w-full p-2">
            <div id="dbms" className="bg-yellow-300 rounded-lg shadow-md flex items-center justify-center h-64 md:w-1/2 mx-auto">
              <div>
                <h2 className="text-2xl font-bold mb-4">DBMS</h2>
                <p>Database Management Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
