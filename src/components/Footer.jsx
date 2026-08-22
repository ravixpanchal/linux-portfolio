import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = ({ onExecuteCommand }) => {
  return (
    <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-3 sm:px-6 py-1.5 sm:py-2 pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))] bg-[#28051e] border-t border-[#502741] text-[#e0d0d8] font-sans">
      <div className="font-mono text-[11px] sm:text-xs text-[#e0d0d8] font-medium truncate max-w-[45vw] sm:max-w-none">
        <span className="hidden sm:inline">© 2026 ravi-panchal:~$ all_rights_reserved</span>
        <span className="inline sm:hidden">© 2026 ravi-panchal</span>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold shrink-0">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#f2b5d6] transition-colors p-1"
        >
          GitHub
        </a>
        <a
          href={portfolioData.personal.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#ffb59e] transition-colors p-1"
        >
          LinkedIn
        </a>
        <button
          onClick={() => onExecuteCommand('resume')}
          className="text-[#8adb4d] hover:underline font-bold p-1 cursor-pointer"
        >
          Resume
        </button>
      </div>
    </footer>
  );
};
