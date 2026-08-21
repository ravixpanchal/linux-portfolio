import React from 'react';

export const CommandSuggestions = ({
  onExecuteCommand,
  commandHistory = [],
  historyIndex = -1,
  setHistoryIndex
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
  };

  return (
    <div className="bg-[#28051e] border-t border-[#502741] px-2 py-2 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none select-none z-30 shrink-0">
      {commandHistory && commandHistory.length > 0 && (
        <div className="flex items-center gap-1 border-r border-[#603050] pr-2 shrink-0">
          <button
            onClick={handlePrevHistory}
            className="bg-[#e95420] text-white p-1 rounded-md text-xs flex items-center justify-center font-mono font-bold active:scale-95 shadow"
            title="Previous Typed Command"
            aria-label="Previous Typed Command"
          >
            <span className="material-symbols-outlined text-base">arrow_upward</span>
          </button>
          <button
            onClick={handleNextHistory}
            className="bg-[#502741] text-white p-1 rounded-md text-xs flex items-center justify-center font-mono font-bold active:scale-95 shadow"
            title="Next Typed Command"
            aria-label="Next Typed Command"
          >
            <span className="material-symbols-outlined text-base">arrow_downward</span>
          </button>
        </div>
      )}

      <span className="text-[10px] font-mono text-[#f2b5d6] uppercase tracking-wider pl-1 pr-1 font-bold">
        Quick:
      </span>
      {suggestions.map((item, idx) => (
        <button
          key={idx}
          onClick={() => handleSuggestionClick(item.cmd)}
          className={`${item.highlight ? 'bg-[#e95420] text-white font-bold' : 'bg-[#37122b] text-[#e0d0d8]'} border border-[#603050] px-3 py-1 rounded-full text-xs hover:bg-[#502741] hover:text-white transition-all font-mono flex items-center gap-1.5 shrink-0 active:scale-95 shadow-sm`}
        >
          <span className="material-symbols-outlined text-sm">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

