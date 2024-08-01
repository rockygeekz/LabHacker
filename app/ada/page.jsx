"use client";
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Collapse } from "react-collapse";
import programs from "@/components/adaprograms";
import MobileWarning from "@/components/mobilewarning";
import Loading from "@/components/loadingHacker";

function Page() {
  const [theme, setTheme] = useState("hacker");
  const [copiedId, setCopiedId] = useState(null);
  const [openId, setOpenId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        const isMobileDevice = window.innerWidth <= 768;
        if (isMobile !== isMobileDevice) {
          setIsMobile(isMobileDevice);
        }
        setLoading(false);
      }
    };

    checkMobile();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile);

      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, [isMobile]);

  const handleCopy = (id) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
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
          className={`container mx-auto p-4 ${
            theme === "hacker" ? "bg-[#121212] h-screen" : ""
          }`}
        >
          <div className="flex justify-end mb-4">
          </div>
          <h1
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === "hacker" ? "text-[#00FF00]" : "text-[#F9FAFB]"
            }`}
          >
            ADA Programs
          </h1>
          <div className="grid gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`p-4 md:p-6 rounded-lg shadow-md border ${
                  theme === "hacker"
                    ? "bg-[#1C1C1C] border-[#00FF00]"
                    : "bg-[#1E293B] border-[#374151]"
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <span
                    className={`text-xl md:text-2xl font-medium ${
                      theme === "hacker" ? "text-[#00FF00]" : "text-[#F9FAFB]"
                    }`}
                  >
                    {program.name}
                  </span>
                  <div className="flex items-center space-x-2 mt-4 md:mt-0">
                    <CopyToClipboard
                      text={program.code}
                      onCopy={() => handleCopy(program.id)}
                    >
                      <button
                        className={`px-2 md:px-4 py-2 text-xs md:text-base rounded transition duration-200 ${
                          theme === "hacker"
                            ? "bg-[#00FF00] text-[#121212] hover:bg-[#007700]"
                            : "bg-[#10B981] text-white hover:bg-[#0F766E]"
                        }`}
                      >
                        {copiedId === program.id ? "Copied!" : "Copy Code"}
                      </button>
                    </CopyToClipboard>
                    <button
                      className={`px-2 md:px-4 py-2 text-xs md:text-base rounded transition duration-200 ${
                        theme === "hacker"
                          ? "bg-[#00FF00] text-[#121212] hover:bg-[#007700]"
                          : "bg-[#F59E0B] text-white hover:bg-[#D97706]"
                      }`}
                      onClick={() => handleToggle(program.id)}
                    >
                      {openId === program.id ? "Hide Code" : "Show Code"}
                    </button>
                  </div>
                </div>
                <Collapse isOpened={openId === program.id}>
                  <SyntaxHighlighter
                    language="cpp"
                    style={okaidia}
                    className={`rounded-lg border mt-4 ${
                      theme === "hacker"
                        ? "border-[#00FF00]"
                        : "border-[#374151]"
                    }`}
                  >
                    {program.code}
                  </SyntaxHighlighter>
                </Collapse>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
