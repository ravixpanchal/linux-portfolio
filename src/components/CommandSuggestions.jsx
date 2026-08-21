import React from 'react';

export const CommandSuggestions = ({ onExecuteCommand }) => {
  const suggestions = [
    { label: 'help', cmd: 'help', icon: 'terminal' },
    { label: 'projects', cmd: 'projects', icon: 'folder_special' },
    { label: 'skills', cmd: 'skills', icon: 'code' },
    { label: 'internships', cmd: 'internships', icon: 'work' },
    { label: 'ls', cmd: 'ls', icon: 'account_tree' },
    { label: 'neofetch', cmd: 'neofetch', icon: 'settings' },
    { label: 'contact', cmd: 'contact', icon: 'mail' },
    { label: 'clear', cmd: 'clear', icon: 'cleaning_services' }
  ];

  return (
    <div className="md:hidden bg-[#28051e] border-t border-[#502741] px-2 py-2 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none select-none z-30">
      <span className="text-[10px] font-mono text-[#f2b5d6] uppercase tracking-wider pl-1 pr-1 font-bold">
        Quick:
      </span>
      {suggestions.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onExecuteCommand(item.cmd)}
          className="bg-[#37122b] active:bg-[#e95420] border border-[#603050] text-[#e0d0d8] active:text-white px-3 py-1.5 rounded-full text-xs hover:bg-[#502741] transition-all font-mono font-medium flex items-center gap-1.5 shrink-0 active:scale-95 shadow-sm"
        >
          <span className="material-symbols-outlined text-sm text-[#f2b5d6]">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};
