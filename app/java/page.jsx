"use client";
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Collapse } from "react-collapse";
import programs from "@/components/javaprograms"; // Adjust the path as necessary
import MobileWarning from "@/components/mobilewarning";
import Loading from "@/components/loadingHacker"; // Adjust the path as necessary

function Page() {
  const [theme, setTheme] = useState("hacker");
  const [copiedId, setCopiedId] = useState(null);
  const [openProgramId, setOpenProgramId] = useState(null);
  const [openFileId, setOpenFileId] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        const isMobileDevice = window.innerWidth <= 768;
        if (isMobile !== isMobileDevice) {
          setIsMobile(isMobileDevice);
        }
        setLoading(false); // Ensure loading is set to false
      }
    };

    checkMobile(); // Initial check

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile); // Update on resize

      return () => {
        window.removeEventListener("resize", checkMobile); // Cleanup on unmount
      };
    }
  }, [isMobile]); // Add isMobile to the dependency array

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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {isMobile ? (
        <MobileWarning />
      ) : (
        <div
          className={`container h-full mx-auto p-4 ${
            theme === "hacker" ? "bg-[#121212] h-screen" : ""
          }`}
        >
          <div className="flex justify-end mb-4"></div>
          <h1
            className={`text-3xl font-bold mb-6 ${
              theme === "hacker" ? "text-[#00FF00]" : "text-[#F9FAFB]"
            }`}
          >
            Java Lab Programs
          </h1>
          <div className="grid gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`p-6 rounded-lg shadow-md border ${
                  theme === "hacker"
                    ? "bg-[#1C1C1C] border-[#00FF00]"
                    : "bg-[#1E293B] border-[#374151]"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`text-xl font-medium ${
                      theme === "hacker" ? "text-[#00FF00]" : "text-[#F9FAFB]"
                    }`}
                  >
                    {program.name}
                  </span>
                  {program.files.length > 1 ? (
                    <button
                      className={`px-4 py-2 rounded transition duration-200 ${
                        theme === "hacker"
                          ? "bg-[#00FF00] text-[#121212] hover:bg-[#007700]"
                          : "bg-[#F59E0B] text-white hover:bg-[#D97706]"
                      }`}
                      onClick={() => handleProgramToggle(program.id)}
                    >
                      {openProgramId === program.id
                        ? "Hide Files"
                        : "Show Files"}
                    </button>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <CopyToClipboard
                        text={program.files[0].content}
                        onCopy={() => handleCopy(`${program.id}-0`)}
                      >
                        <button
                          className={`px-4 py-2 rounded transition duration-200 ${
                            theme === "hacker"
                              ? "bg-[#00FF00] text-[#121212] hover:bg-[#007700]"
                              : "bg-[#10B981] text-white hover:bg-[#0F766E]"
                          }`}
                        >
                          {copiedId === `${program.id}-0`
                            ? "Copied!"
                            : "Copy Code"}
                        </button>
                      </CopyToClipboard>
                      <button
                        className={`px-4 py-2 rounded transition duration-200 ${
                          theme === "hacker"
                            ? "bg-[#00FF00] text-[#121212] hover:bg-[#007700]"
                            : "bg-[#F59E0B] text-white hover:bg-[#D97706]"
                        }`}
                        onClick={() => handleFileToggle(program.id, 0)}
                      >
                        {openFileId[program.id] === 0
                          ? "Hide Code"
                          : "Show Code"}
                      </button>
                    </div>
                  )}
                </div>
                {program.files.length > 1 ? (
                  <Collapse isOpened={openProgramId === program.id}>
                    <div className="space-y-4">
                      {program.files.map((file, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg shadow-md border ${
                            theme === "hacker"
                              ? "bg-[#1C1C1C] border-[#00FF00]"
                              : "bg-[#1E293B] border-[#374151]"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span
                              className={`text-lg font-medium ${
                                theme === "hacker"
                                  ? "text-[#00FF00]"
                                  : "text-[#F9FAFB]"
                              }`}
                            >
                              {file.name}
                            </span>
                            <div className="flex items-center space-x-2">
                              <CopyToClipboard
                                text={file.content}
                                onCopy={() =>
                                  handleCopy(`${program.id}-${index}`)
                                }
                              >
                                <button
                                  className={`px-4 py-2 rounded transition duration-200 ${
                                    theme === "hacker"
                                      ? "bg-[#00FF00] text-[#121212] hover:bg-[#007700]"
                                      : "bg-[#10B981] text-white hover:bg-[#0F766E]"
                                  }`}
                                >
                                  {copiedId === `${program.id}-${index}`
                                    ? "Copied!"
                                    : "Copy Code"}
                                </button>
                              </CopyToClipboard>
                              <button
                                className={`px-4 py-2 rounded transition duration-200 ${
                                  theme === "hacker"
                                    ? "bg-[#00FF00] text-[#121212] hover:bg-[#007700]"
                                    : "bg-[#F59E0B] text-white hover:bg-[#D97706]"
                                }`}
                                onClick={() =>
                                  handleFileToggle(program.id, index)
                                }
                              >
                                {openFileId[program.id] === index
                                  ? "Hide Code"
                                  : "Show Code"}
                              </button>
                            </div>
                          </div>
                          <Collapse isOpened={openFileId[program.id] === index}>
                            <SyntaxHighlighter
                              language="java"
                              style={okaidia}
                              className={`rounded-lg border mt-4 ${
                                theme === "hacker"
                                  ? "border-[#00FF00]"
                                  : "border-[#374151]"
                              }`}
                            >
                              {file.content}
                            </SyntaxHighlighter>
                          </Collapse>
                        </div>
                      ))}
                    </div>
                  </Collapse>
                ) : (
                  <Collapse isOpened={openFileId[program.id] === 0}>
                    <SyntaxHighlighter
                      language="java"
                      style={okaidia}
                      className={`rounded-lg border mt-4 ${
                        theme === "hacker"
                          ? "border-[#00FF00]"
                          : "border-[#374151]"
                      }`}
                    >
                      {program.files[0].content}
                    </SyntaxHighlighter>
                  </Collapse>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
