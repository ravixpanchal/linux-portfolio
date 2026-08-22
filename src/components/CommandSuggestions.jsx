import React from 'react';

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
  const suggestions = [
    { label: '⚡ Recruiter Mode', cmd: 'recruiter', icon: 'badge', highlight: true },
    { label: 'projects', cmd: 'projects', icon: 'folder_special' },
    { label: 'resume', cmd: 'resume', icon: 'description' },
    { label: 'skills', cmd: 'skills', icon: 'code' },
    { label: 'internships', cmd: 'internships', icon: 'work' },
    { label: 'matrix', cmd: 'matrix', icon: 'terminal' },
    { label: 'contact', cmd: 'contact', icon: 'mail' },
    { label: 'clear', cmd: 'clear', icon: 'cleaning_services' }
  ];

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
    <div className="bg-[#28051e] border-t border-[#502741] px-2 py-1.5 flex items-center gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap scrollbar-none select-none z-30 shrink-0 touch-pan-x">
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
    </div>
  );
};

