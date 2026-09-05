import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = ({ onExecuteCommand }) => {
  return (
    <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-2.5 sm:px-6 py-1.5 sm:py-2 pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))] bg-[#28051e] border-t border-[#502741] text-[#e0d0d8] font-sans gap-2 sm:gap-4 select-none">
      <div className="font-mono text-[10px] sm:text-xs text-[#e0d0d8] font-medium tracking-tight sm:tracking-normal shrink min-w-0">
        <span className="hidden sm:inline">© 2026 ravi-panchal:~$ all_rights_reserved</span>
        <span className="inline sm:hidden whitespace-nowrap text-[10.5px]">© 2026 ravi-panchal:~$</span>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-4 text-[10.5px] sm:text-xs font-semibold shrink-0">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#f2b5d6] transition-colors py-1 px-1.5 rounded active:bg-[#502741]"
        >
          GitHub
        </a>
        <a
          href={portfolioData.personal.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#ffb59e] transition-colors py-1 px-1.5 rounded active:bg-[#502741]"
        >
          LinkedIn
        </a>
        <a
          href={portfolioData.personal.linktree || 'https://linktr.ee/ravi.panchal'}
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#8adb4d] transition-colors py-1 px-1.5 rounded active:bg-[#502741]"
        >
          Linktree
        </a>
        <button
          onClick={() => onExecuteCommand('resume')}
          className="text-[#8adb4d] hover:underline font-bold py-1 px-1.5 rounded active:bg-[#502741] cursor-pointer"
        >
          Resume
        </button>
      </div>
    </footer>
  );
};

