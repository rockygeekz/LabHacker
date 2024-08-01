import React from "react";

function MobileWarning() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#111827] text-[#F9FAFB] p-4">
      <div className="text-center">
        <div className="text-6xl mb-4">
          <span role="img" aria-label="skull">
            💀
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-[#EF4444]">Warning!</h1>
        <p className="text-lg">
          This site is best viewed on a desktop. Please open it on a desktop
          device for the best experience.
        </p>
      </div>
    </div>
  );
}

export default MobileWarning;
