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
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-3 sm:px-6 h-11 md:h-12 bg-[#28051e]/90 backdrop-blur-md border-b border-[#502741] text-white select-none">
      <div className="font-bold text-xs sm:text-sm md:text-base flex items-center gap-2 font-mono">
        <button
          onClick={onToggleMobileMenu}
          className="md:hidden flex items-center justify-center p-1 rounded text-[#e0d0d8] hover:text-white hover:bg-[#502741] transition-colors"
          title="Toggle Menu"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <span className="text-white font-bold tracking-wide hidden sm:inline">visitor@portfolio:~</span>
        <span className="text-white font-bold tracking-wide inline sm:hidden font-mono text-xs">visitor@ravi:~</span>

        {/* ⚡ Recruiter Quick Action Button */}
        <button
          onClick={onOpenRecruiterModal}
          className="ml-2 bg-[#e95420] hover:bg-[#c33900] text-white text-xs font-mono font-bold px-2.5 py-1 rounded-md shadow-md transition-transform active:scale-95 flex items-center gap-1"
          title="Open 1-Click Executive Recruiter Overview"
        >
          <span className="material-symbols-outlined text-sm">badge</span>
          <span>Recruiter Mode</span>
        </button>
      </div>
      
      {/* Center Date/Time - Ubuntu desktop status bar */}
      <div className="text-xs text-[#e0d0d8] font-sans font-medium hidden md:block absolute left-1/2 -translate-x-1/2">
        <span>{timeStr || 'Oct 24 14:32'}</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 text-white">
        {/* Theme Selector */}
        <div className="flex items-center gap-1 bg-[#37122b] border border-[#502741] rounded px-2 py-0.5 text-xs font-mono">
          <span className="material-symbols-outlined text-sm text-[#f2b5d6]">palette</span>
          <select
            value={activeTheme}
            onChange={(e) => onChangeTheme && onChangeTheme(e.target.value)}
            className="bg-transparent text-white text-xs font-mono outline-none cursor-pointer"
          >
            <option value="yaru" className="bg-[#28051e]">Theme: Yaru Dark</option>
            <option value="matrix" className="bg-[#0d1117]">Theme: Matrix Green</option>
            <option value="dracula" className="bg-[#282a36]">Theme: Dracula</option>
            <option value="nord" className="bg-[#2e3440]">Theme: Nord Frost</option>
            <option value="cyberpunk" className="bg-[#0b0e14]">Theme: Cyberpunk</option>
          </select>
        </div>

        <span className="material-symbols-outlined text-lg sm:text-xl cursor-default text-white hidden sm:inline-block" title="Connected">
          network_wifi
        </span>
        <span className="material-symbols-outlined text-lg sm:text-xl cursor-default text-white hidden sm:inline-block" title="Battery 100%">
          battery_full
        </span>
      </div>
    </header>
  );
};

