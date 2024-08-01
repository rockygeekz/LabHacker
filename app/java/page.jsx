"use client"
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Collapse } from 'react-collapse';
import programs from '@/components/javaprograms'; // Adjust the path as necessary

function Page() {
  const [copiedId, setCopiedId] = useState(null);
  const [openProgramId, setOpenProgramId] = useState(null);
  const [openFileId, setOpenFileId] = useState({});

  const handleCopy = (id) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000); // Reset copied state after 2 seconds
  };

  const handleProgramToggle = (id) => {
    setOpenProgramId(openProgramId === id ? null : id);
  };

  const handleFileToggle = (programId, fileId) => {
    setOpenFileId((prev) => ({
      ...prev,
      [programId]: prev[programId] === fileId ? null : fileId,
    }));
  };

  if (!programs || !Array.isArray(programs)) {
    return <div>No programs available.</div>;
  }
  
  return (
    <div className="container h-full mx-auto bg-[#111827] p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#F9FAFB]">Java Lab Programs</h1>
      <div className="grid gap-6">
        {programs.map((program) => (
          <div key={program.id} className="bg-[#1E293B] p-6 rounded-lg shadow-md border border-[#374151]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-medium text-[#F9FAFB]">{program.name}</span>
              {program.files.length > 1 ? (
                <button
                  className="bg-[#F59E0B] text-white px-4 py-2 rounded hover:bg-[#D97706] transition duration-200"
                  onClick={() => handleProgramToggle(program.id)}
                >
                  {openProgramId === program.id ? 'Hide Files' : 'Show Files'}
                </button>
              ) : (
                <div className="flex items-center space-x-2">
                  <CopyToClipboard text={program.files[0].content} onCopy={() => handleCopy(`${program.id}-0`)}>
                    <button className="bg-[#10B981] text-white px-4 py-2 rounded hover:bg-[#0F766E] transition duration-200">
                      {copiedId === `${program.id}-0` ? 'Copied!' : 'Copy Code'}
                    </button>
                  </CopyToClipboard>
                  <button
                    className="bg-[#F59E0B] text-white px-4 py-2 rounded hover:bg-[#D97706] transition duration-200"
                    onClick={() => handleFileToggle(program.id, 0)}
                  >
                    {openFileId[program.id] === 0 ? 'Hide Code' : 'Show Code'}
                  </button>
                </div>
              )}
            </div>
            {program.files.length > 1 ? (
              <Collapse isOpened={openProgramId === program.id}>
                <div className="space-y-4">
                  {program.files.map((file, index) => (
                    <div key={index} className="bg-[#2D3748] p-4 rounded-lg shadow-md border border-[#4A5568]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-medium text-[#F9FAFB]">{file.name}</span>
                        <div className="flex items-center space-x-2">
                          <CopyToClipboard text={file.content} onCopy={() => handleCopy(`${program.id}-${index}`)}>
                            <button className="bg-[#10B981] text-white px-4 py-2 rounded hover:bg-[#0F766E] transition duration-200">
                              {copiedId === `${program.id}-${index}` ? 'Copied!' : 'Copy Code'}
                            </button>
                          </CopyToClipboard>
                          <button
                            className="bg-[#F59E0B] text-white px-4 py-2 rounded hover:bg-[#D97706] transition duration-200"
                            onClick={() => handleFileToggle(program.id, index)}
                          >
                            {openFileId[program.id] === index ? 'Hide Code' : 'Show Code'}
                          </button>
                        </div>
                      </div>
                      <Collapse isOpened={openFileId[program.id] === index}>
                        <SyntaxHighlighter language={file.language} style={okaidia} className="rounded-lg border border-[#4A5568] mt-4">
                          {file.content}
                        </SyntaxHighlighter>
                      </Collapse>
                    </div>
                  ))}
                </div>
              </Collapse>
            ) : (
              <Collapse isOpened={openFileId[program.id] === 0}>
                <SyntaxHighlighter language={program.files[0].language} style={okaidia} className="rounded-lg border border-[#4A5568] mt-4">
                  {program.files[0].content}
                </SyntaxHighlighter>
              </Collapse>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
