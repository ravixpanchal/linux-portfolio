import React, { useRef, useState, useEffect, useCallback } from 'react';

export const CommandSuggestions = ({
  onExecuteCommand,
  commandHistory = [],
  historyIndex = -1,
  setHistoryIndex,
  onScrollUp,
  onScrollDown,
  onScrollTop,
  onScrollBottom
}) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const suggestions = [
    { label: '⚡ Recruiter Mode', cmd: 'recruiter', icon: 'badge', highlight: true },
    { label: 'projects', cmd: 'projects', icon: 'folder_special' },
    { label: 'resume', cmd: 'resume', icon: 'description' },
    { label: 'skills', cmd: 'skills', icon: 'code' },
    { label: 'internships', cmd: 'internships', icon: 'work' },
    { label: 'contact', cmd: 'contact', icon: 'mail' },
    { label: 'clear', cmd: 'clear', icon: 'cleaning_services' }
  ];

  const checkScrollability = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  }, []);

  useEffect(() => {
    checkScrollability();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', checkScrollability);

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => checkScrollability());
      resizeObserver.observe(el);
    }

    return () => {
      el.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [checkScrollability]);

  const handleScrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(checkScrollability, 300);
  };

  const handleScrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(checkScrollability, 300);
  };

  const handlePrevHistory = () => {
    if (!commandHistory || commandHistory.length === 0) return;
    const nextIdx = historyIndex <= 0 ? 0 : historyIndex - 1;
    if (setHistoryIndex) setHistoryIndex(nextIdx);
    const cmd = commandHistory[nextIdx];
    if (cmd) onExecuteCommand(cmd);
  };

  const handleNextHistory = () => {
    if (!commandHistory || commandHistory.length === 0) return;
    const nextIdx = historyIndex >= commandHistory.length - 1 ? commandHistory.length - 1 : historyIndex + 1;
    if (setHistoryIndex) setHistoryIndex(nextIdx);
    const cmd = commandHistory[nextIdx];
    if (cmd) onExecuteCommand(cmd);
  };

  const handleSuggestionClick = (cmd) => {
    onExecuteCommand(cmd);
    setTimeout(() => {
      const el = document.querySelector('.terminal-body');
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
    setTimeout(() => {
      const el = document.querySelector('.terminal-body');
      if (el) el.scrollTop = el.scrollHeight;
    }, 250);
  };

  return (
    <div className="relative bg-[#28051e] border-t border-[#502741] select-none z-30 shrink-0 flex items-center">
      {/* Left Scroll Arrow Button */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 z-40 flex items-center bg-gradient-to-r from-[#28051e] via-[#28051e]/95 to-transparent pl-1 pr-3">
          <button
            onClick={handleScrollLeft}
            className="bg-[#502741] hover:bg-[#e95420] active:bg-[#e95420] text-white p-1 rounded-full shadow-lg border border-[#603050] transition-all active:scale-95 flex items-center justify-center cursor-pointer min-w-[28px] min-h-[28px]"
            title="Scroll left"
            aria-label="Scroll left to view previous buttons"
          >
            <span className="material-symbols-outlined text-base">chevron_left</span>
          </button>
        </div>
      )}

      {/* Main Scrollable Suggestions Strip */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="w-full px-2 py-1.5 flex items-center gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap scrollbar-none touch-pan-x"
      >
        {/* Dedicated Terminal Page Scroll Controls */}
        <div className="flex items-center gap-1 border-r border-[#603050] pr-1.5 sm:pr-2 shrink-0">
          <button
            onClick={onScrollUp}
            className="bg-[#502741] hover:bg-[#e95420] active:bg-[#e95420] text-white px-2 py-1.5 rounded-md text-xs flex items-center gap-0.5 sm:gap-1 font-mono font-medium active:scale-95 shadow transition-colors cursor-pointer min-h-[36px]"
            title="Scroll Terminal Up"
            aria-label="Scroll Terminal Up"
          >
            <span className="material-symbols-outlined text-sm">keyboard_arrow_up</span>
            <span className="text-[11px] hidden sm:inline">Up</span>
          </button>
          <button
            onClick={onScrollDown}
            className="bg-[#502741] hover:bg-[#e95420] active:bg-[#e95420] text-white px-2 py-1.5 rounded-md text-xs flex items-center gap-0.5 sm:gap-1 font-mono font-medium active:scale-95 shadow transition-colors cursor-pointer min-h-[36px]"
            title="Scroll Terminal Down"
            aria-label="Scroll Terminal Down"
          >
            <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            <span className="text-[11px] hidden sm:inline">Down</span>
          </button>
          {onScrollTop && (
            <button
              onClick={onScrollTop}
              className="bg-[#37122b] hover:bg-[#502741] active:bg-[#502741] text-[#f2b5d6] px-1.5 py-1.5 rounded-md text-xs font-mono font-bold active:scale-95 border border-[#603050] min-h-[36px]"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              Top
            </button>
          )}
        </div>

        {/* Command History Navigation */}
        {commandHistory && commandHistory.length > 0 && (
          <div className="flex items-center gap-1 border-r border-[#603050] pr-1.5 sm:pr-2 shrink-0">
            <button
              onClick={handlePrevHistory}
              className="bg-[#37122b] hover:bg-[#502741] text-[#e0d0d8] px-2 py-1.5 rounded-md text-xs flex items-center gap-0.5 font-mono text-[10px] active:scale-95 border border-[#603050] min-h-[36px]"
              title="Re-run Previous Typed Command"
              aria-label="Re-run Previous Typed Command"
            >
              <span className="material-symbols-outlined text-xs">history</span>
              <span className="hidden sm:inline">Hist Prev</span>
              <span className="inline sm:hidden">Prev</span>
            </button>
            <button
              onClick={handleNextHistory}
              className="bg-[#37122b] hover:bg-[#502741] text-[#e0d0d8] px-2 py-1.5 rounded-md text-xs flex items-center gap-0.5 font-mono text-[10px] active:scale-95 border border-[#603050] min-h-[36px]"
              title="Re-run Next Typed Command"
              aria-label="Re-run Next Typed Command"
            >
              <span className="material-symbols-outlined text-xs">history_toggle_off</span>
              <span className="hidden sm:inline">Hist Next</span>
              <span className="inline sm:hidden">Next</span>
            </button>
          </div>
        )}

        <span className="text-[10px] font-mono text-[#f2b5d6] uppercase tracking-wider px-0.5 font-bold shrink-0">
          Quick:
        </span>
        {suggestions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSuggestionClick(item.cmd)}
            className={`${item.highlight ? 'bg-[#e95420] text-white font-bold' : 'bg-[#37122b] text-[#e0d0d8]'} border border-[#603050] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs hover:bg-[#502741] hover:text-white transition-all font-mono flex items-center gap-1 sm:gap-1.5 shrink-0 active:scale-95 shadow-sm cursor-pointer min-h-[36px]`}
          >
            <span className="material-symbols-outlined text-sm">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}

        {/* Right-most Scroll Arrow Button directly at the end of suggestion list */}
        {canScrollRight && (
          <button
            onClick={handleScrollRight}
            className="bg-[#e95420] text-white px-2.5 py-1 sm:py-1.5 rounded-full text-xs hover:bg-[#ff6832] transition-all font-mono flex items-center gap-1 shrink-0 active:scale-95 shadow border border-[#ff8359] cursor-pointer min-h-[36px]"
            title="Scroll to view more buttons"
          >
            <span className="text-[11px] font-bold">More</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        )}
      </div>

      {/* Right-most Floating Scroll Arrow Button */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 z-40 flex items-center bg-gradient-to-l from-[#28051e] via-[#28051e]/95 to-transparent pr-1.5 pl-4">
          <button
            onClick={handleScrollRight}
            className="bg-[#e95420] hover:bg-[#ff6832] active:bg-[#d84310] text-white px-2.5 py-1.5 rounded-full shadow-xl border border-[#ff8359] transition-all active:scale-95 flex items-center gap-0.5 font-mono text-xs font-bold cursor-pointer animate-pulse min-h-[32px]"
            title="Scroll right to view more buttons"
            aria-label="Scroll right to view more buttons"
          >
            <span className="text-[10px] uppercase font-bold tracking-wider hidden sm:inline">More</span>
            <span className="material-symbols-outlined text-base font-bold">chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
};


