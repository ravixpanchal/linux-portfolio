import React, { useState, useRef, useEffect } from 'react';

export const SideNavBar = ({ onExecuteCommand, mobileMenuOpen, onCloseMobileMenu, onOpenRecruiterModal }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  const menuItems = [
    { label: 'Terminal Home', cmd: 'help', icon: 'terminal', primary: true },
    { label: 'Projects', cmd: 'projects', icon: 'folder_special' },
    { label: 'Skills', cmd: 'skills', icon: 'code' },
    { label: 'Internships', cmd: 'internships', icon: 'work' },
    { label: 'File Tree', cmd: 'tree', icon: 'account_tree' },
    { label: 'System Metrics', cmd: 'neofetch', icon: 'settings' },
    { label: 'Contact', cmd: 'contact', icon: 'mail' },
    { label: 'Resume', cmd: 'resume', icon: 'description' },
  ];

  const handleCommand = (cmd) => {
    onExecuteCommand(cmd);
    if (onCloseMobileMenu) onCloseMobileMenu();
    setPopoverOpen(false);
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setPopoverOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Desktop Navigation Dock */}
      <nav className="fixed left-0 top-12 bottom-[36px] z-40 hidden md:flex flex-col items-center py-3 bg-[#1d0316]/95 backdrop-blur-xl border-r border-[#502741] w-20">
        <div className="flex flex-col gap-3.5 w-full items-center my-auto py-2 overflow-y-auto scrollbar-none">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleCommand(item.cmd)}
              className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all shadow-md active:scale-95 ${
                item.primary
                  ? 'bg-[#e95420] text-white border-l-4 border-[#ffb59e] hover:bg-[#c33900]'
                  : 'text-[#e0d0d8] hover:text-white hover:bg-[#502741]'
              }`}
              title={`${item.label} (${item.cmd})`}
              aria-label={item.label}
            >
              <span className="material-symbols-outlined text-xl text-white">{item.icon}</span>
            </button>
          ))}
        </div>

        {/* 👤 Interactive Profile Avatar Button */}
        <div ref={popoverRef} className="mt-auto mb-3 relative group shrink-0">
          <button
            onClick={() => setPopoverOpen(!popoverOpen)}
            className="w-10 h-10 rounded-full bg-[#502741] hover:bg-[#603050] active:scale-95 border-2 border-[#f2b5d6] flex items-center justify-center font-bold text-sm text-white shadow-lg transition-all cursor-pointer"
            title="Ravi Panchal - AI-ML Engineer Profile"
            aria-label="Toggle Ravi Panchal Profile Overview"
          >
            RP
          </button>

          {/* Popover Profile Card on Click / Hover */}
          <div className={`fixed left-20 bottom-12 bg-[#28051e] border border-[#603050] p-4 rounded-xl transition-all duration-200 z-[100] shadow-2xl w-64 ${
            popoverOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto'
          }`}>
            <div className="flex items-center gap-3 pb-2 mb-2.5 border-b border-[#502741]">
              <div className="w-10 h-10 rounded-full bg-[#502741] border border-[#f2b5d6] flex items-center justify-center font-bold text-sm text-white shrink-0 shadow">
                RP
              </div>
              <div className="overflow-hidden">
                <p className="font-bold text-sm text-white font-mono truncate">Ravi Panchal</p>
                <p className="text-xs text-[#f2b5d6] font-semibold truncate">AI-ML Engineer</p>
              </div>
            </div>

            <div className="text-[11px] text-[#e0d0d8] font-mono space-y-1 mb-3">
              <div className="flex items-center gap-1.5 text-[#8adb4d]">
                <span className="w-2 h-2 rounded-full bg-[#8adb4d] animate-pulse"></span>
                <span>Available for Roles</span>
              </div>
              <div className="text-[11px] text-[#e0d0d8]">B.Tech AI & DS | CGPA 8.42</div>
            </div>

            <div className="flex flex-col gap-1.5 font-mono text-xs">
              <button
                onClick={() => {
                  if (onOpenRecruiterModal) onOpenRecruiterModal();
                  setPopoverOpen(false);
                }}
                className="bg-[#e95420] hover:bg-[#c33900] text-white px-3 py-1.5 rounded-lg flex items-center justify-center gap-1.5 font-bold transition-colors shadow"
              >
                <span className="material-symbols-outlined text-sm">badge</span>
                <span>Recruiter Mode</span>
              </button>
              <button
                onClick={() => handleCommand('resume')}
                className="bg-[#37122b] hover:bg-[#502741] text-[#f2b5d6] border border-[#603050] px-3 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">description</span>
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobileMenu}
          ></div>

          {/* Drawer Content */}
          <div className="relative w-72 max-w-[85vw] bg-[#1d0316] border-r border-[#502741] h-full pt-12 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] px-4 flex flex-col z-[60] shadow-2xl overflow-y-auto animate-slideInLeft">
            {/* Header profile info + Close button */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#502741] shrink-0">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    if (onOpenRecruiterModal) onOpenRecruiterModal();
                    if (onCloseMobileMenu) onCloseMobileMenu();
                  }}
                  className="w-10 h-10 rounded-full bg-[#502741] border border-[#f2b5d6] flex items-center justify-center font-bold text-sm text-white shadow shrink-0 cursor-pointer active:scale-95"
                  title="Open Recruiter Overview"
                >
                  RP
                </button>
                <div>
                  <p className="font-bold text-sm text-white font-mono">Ravi Panchal</p>
                  <p className="text-xs text-[#f2b5d6] font-semibold">AI-ML Engineer</p>
                </div>
              </div>
              <button
                onClick={onCloseMobileMenu}
                className="w-8 h-8 rounded-lg bg-[#37122b] hover:bg-[#502741] text-[#e0d0d8] hover:text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="text-xs font-mono text-[#f2b5d6] uppercase tracking-wider mb-2 px-1 font-bold shrink-0">
              System Shortcuts
            </div>

            <div className="flex flex-col gap-1.5">
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCommand(item.cmd)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm text-[#e0d0d8] hover:text-white hover:bg-[#502741] active:bg-[#603050] transition-colors font-mono min-h-[44px]"
                >
                  <span className="material-symbols-outlined text-xl text-[#f2b5d6]">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">{item.label}</span>
                    <span className="text-[11px] text-[#8adb4d] font-mono">{item.cmd}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-auto pt-4 pb-2 border-t border-[#502741] text-xs text-[#e0d0d8] font-mono text-center shrink-0">
              Ubuntu 26.04 LTS (Portfolio)
            </div>
          </div>
        </div>
      )}
    </>
  );
};
