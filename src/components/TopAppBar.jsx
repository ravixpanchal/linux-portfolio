import React, { useState, useEffect } from 'react';

export const TopAppBar = ({
  onToggleMobileMenu,
  mobileMenuOpen,
  onOpenRecruiterModal,
  activeTheme,
  onChangeTheme
}) => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const timeStrFormatted = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      setTimeStr(`${dateStr} ${timeStrFormatted}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-2.5 sm:px-6 h-11 md:h-12 bg-[#28051e]/95 backdrop-blur-md border-b border-[#502741] text-white select-none">
      <div className="font-bold text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2.5 font-mono shrink-0">
        <button
          onClick={onToggleMobileMenu}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-md text-[#e0d0d8] hover:text-white hover:bg-[#502741] active:bg-[#603050] transition-colors"
          title="Toggle Navigation Menu"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <span className="text-white font-bold tracking-wide hidden md:inline">visitor@portfolio:~</span>
        <span className="text-white font-bold tracking-wide hidden sm:inline md:hidden font-mono text-xs">visitor@ravi:~</span>

        {/* ⚡ Recruiter Quick Action Button */}
        <button
          onClick={onOpenRecruiterModal}
          className="bg-[#e95420] hover:bg-[#c33900] active:scale-95 text-white text-[11px] sm:text-xs font-mono font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-md shadow-md transition-all flex items-center gap-1 shrink-0"
          title="Open 1-Click Executive Recruiter Overview"
        >
          <span className="material-symbols-outlined text-sm">badge</span>
          <span>Recruiter</span>
          <span className="hidden sm:inline"> Mode</span>
        </button>
      </div>
      
      {/* Center Date/Time - Ubuntu desktop status bar */}
      <div className="text-xs text-[#e0d0d8] font-sans font-medium hidden lg:block absolute left-1/2 -translate-x-1/2">
        <span>{timeStr || 'Oct 24 14:32'}</span>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-3 text-white shrink-0">
        {/* Theme Selector */}
        <div className="flex items-center gap-1 bg-[#37122b] border border-[#502741] rounded-md px-1.5 sm:px-2 py-0.5 text-[11px] sm:text-xs font-mono">
          <span className="material-symbols-outlined text-sm text-[#f2b5d6]">palette</span>
          <select
            value={activeTheme}
            onChange={(e) => onChangeTheme && onChangeTheme(e.target.value)}
            className="bg-transparent text-white text-[11px] sm:text-xs font-mono outline-none cursor-pointer pr-1"
            aria-label="Select Theme"
          >
            <option value="yaru" className="bg-[#28051e]">Yaru Dark</option>
            <option value="matrix" className="bg-[#0d1117]">Matrix</option>
            <option value="dracula" className="bg-[#282a36]">Dracula</option>
            <option value="nord" className="bg-[#2e3440]">Nord</option>
            <option value="cyberpunk" className="bg-[#0b0e14]">Cyberpunk</option>
          </select>
        </div>

        <span className="material-symbols-outlined text-lg sm:text-xl cursor-default text-[#e0d0d8] hidden sm:inline-block" title="Connected">
          network_wifi
        </span>
        <span className="material-symbols-outlined text-lg sm:text-xl cursor-default text-[#e0d0d8] hidden sm:inline-block" title="Battery 100%">
          battery_full
        </span>
      </div>
    </header>
  );
};

