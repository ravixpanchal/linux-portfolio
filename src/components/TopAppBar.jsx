import React, { useState, useEffect } from 'react';

export const TopAppBar = ({ onToggleMobileMenu, mobileMenuOpen }) => {
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
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-3 sm:px-6 h-11 md:h-12 bg-[#28051e]/90 backdrop-blur-md border-b border-[#502741] text-white">
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
      </div>
      
      {/* Center Date/Time - Ubuntu desktop status bar */}
      <div className="text-xs text-[#e0d0d8] font-sans font-medium hidden sm:block absolute left-1/2 -translate-x-1/2">
        <span>{timeStr || 'Oct 24 14:32'}</span>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-4 text-white">
        <span className="text-[11px] font-mono text-[#e0d0d8] sm:hidden">
          {timeStr ? timeStr.split(' ').slice(-2).join(' ') : ''}
        </span>
        <span className="material-symbols-outlined text-lg sm:text-xl cursor-default text-white" title="Connected">
          network_wifi
        </span>
        <span className="material-symbols-outlined text-lg sm:text-xl cursor-default text-white" title="Battery 100%">
          battery_full
        </span>
        <span className="material-symbols-outlined text-lg sm:text-xl cursor-default text-white hidden xs:inline-block" title="Calendar">
          event
        </span>
      </div>
    </header>
  );
};
