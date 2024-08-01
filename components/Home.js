import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-2">
            <Link href="/ada">
              <div id="ada" className="bg-[#1E293B] rounded-lg shadow-md flex items-center justify-center h-64">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center text-[#F9FAFB]">ADA</h2>
                  <p className="text-[#F9FAFB]">Algorithm Design and Analysis</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/2 p-2">
          <Link href="/java" >            <div id="java" className="bg-[#1E293B] rounded-lg shadow-md flex items-center justify-center h-64">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-[#F9FAFB]">JAVA</h2>
                <p className="text-[#F9FAFB]">Advanced Java</p>
              </div>
            </div></Link>
          </div>
          <div className="w-full p-2">
            <div id="dbms" className="bg-[#1E293B] rounded-lg shadow-md flex items-center justify-center h-64 md:w-1/2 mx-auto">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-[#F9FAFB]">DBMS</h2>
                <p className="text-[#F9FAFB]">Database Management Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
