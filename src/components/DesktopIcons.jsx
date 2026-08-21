import React from 'react';

export const DesktopIcons = ({ onExecuteCommand, onOpenRecruiterModal }) => {
  const icons = [
    {
      id: 'recruiter',
      name: 'RecruiterMode.app',
      icon: 'badge',
      color: 'bg-[#e95420]',
      action: onOpenRecruiterModal
    },
    {
      id: 'resume',
      name: 'Resume.pdf',
      icon: 'description',
      color: 'bg-red-600',
      action: () => onExecuteCommand('resume')
    },
    {
      id: 'projects',
      name: 'Projects.desktop',
      icon: 'folder',
      color: 'bg-amber-600',
      action: () => onExecuteCommand('projects')
    },
    {
      id: 'experience',
      name: 'Experience.desktop',
      icon: 'work',
      color: 'bg-blue-600',
      action: () => onExecuteCommand('internships')
    },
    {
      id: 'coding',
      name: 'CodingStats.desktop',
      icon: 'bar_chart',
      color: 'bg-emerald-600',
      action: () => onExecuteCommand('github')
    },
    {
      id: 'terminal',
      name: 'Terminal.app',
      icon: 'terminal',
      color: 'bg-[#300a24]',
      action: () => onExecuteCommand('help')
    }
  ];

  return (
    <div className="absolute top-14 left-4 z-10 flex flex-col gap-4 hidden md:flex select-none">
      {icons.map((item) => (
        <button
          key={item.id}
          onClick={item.action}
          onDoubleClick={item.action}
          className="group flex flex-col items-center w-20 p-2 rounded-lg hover:bg-white/10 transition-all focus:outline-none focus:ring-1 focus:ring-[#f2b5d6]"
          title={`Open ${item.name}`}
        >
          <div className={`w-11 h-11 ${item.color} rounded-xl shadow-lg flex items-center justify-center text-white border border-white/20 group-hover:scale-105 transition-transform`}>
            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
          </div>
          <span className="text-[11px] font-mono font-medium text-white text-center mt-1 truncate max-w-full drop-shadow-md bg-black/40 px-1 rounded">
            {item.name}
          </span>
        </button>
      ))}
    </div>
  );
};
