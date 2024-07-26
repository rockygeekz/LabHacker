"use client"
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Collapse } from 'react-collapse';
import programs from '@/components/programs'; // Adjust the path as necessary

function Page() {
  const [copiedId, setCopiedId] = useState(null);
  const [openId, setOpenId] = useState(null);

  const handleCopy = (id) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000); // Reset copied state after 2 seconds
  };

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">ADA Programs</h1>
      <div className="grid gap-6">
        {programs.map((program) => (
          <div key={program.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-medium text-gray-700">{program.name}</span>
              <div className="flex items-center space-x-2">
                <CopyToClipboard text={program.code} onCopy={() => handleCopy(program.id)}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                    {copiedId === program.id ? 'Copied!' : 'Copy Code'}
                  </button>
                </CopyToClipboard>
                <button
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
                  onClick={() => handleToggle(program.id)}
                >
                  {openId === program.id ? 'Hide Code' : 'Show Code'}
                </button>
              </div>
            </div>
            <Collapse isOpened={openId === program.id}>
              <SyntaxHighlighter language="cpp" style={okaidia} className="rounded-lg border border-gray-300 mt-4">
                {program.code}
              </SyntaxHighlighter>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
