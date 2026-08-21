import React from 'react';

export const SideNavBar = ({ onExecuteCommand, mobileMenuOpen, onCloseMobileMenu }) => {
  const menuItems = [
    { label: 'Terminal Home', cmd: 'help', icon: 'terminal', primary: true },
    { label: 'Projects', cmd: 'projects', icon: 'folder_special' },
    { label: 'Skills', cmd: 'skills', icon: 'code' },
    { label: 'Internships', cmd: 'internships', icon: 'work' },
    { label: 'File Tree', cmd: 'ls', icon: 'account_tree' },
    { label: 'System Metrics', cmd: 'neofetch', icon: 'settings' },
    { label: 'Contact', cmd: 'contact', icon: 'mail' },
    { label: 'Resume', cmd: 'resume', icon: 'description' },
  ];

  const handleCommand = (cmd) => {
    onExecuteCommand(cmd);
    if (onCloseMobileMenu) onCloseMobileMenu();
  };

  return (
    <>
      {/* Desktop Navigation Dock */}
      <nav className="fixed left-0 top-12 h-[calc(100vh-48px)] z-40 hidden md:flex flex-col items-center py-4 bg-[#1d0316]/95 backdrop-blur-xl border-r border-[#502741] w-20">
        <div className="flex flex-col gap-5 w-full items-center mt-4">
          {menuItems.slice(0, 6).map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleCommand(item.cmd)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all shadow-md ${
                item.primary
                  ? 'bg-[#e95420] text-white border-l-4 border-[#ffb59e] hover:bg-[#c33900]'
                  : 'text-[#e0d0d8] hover:text-white hover:bg-[#502741]'
              }`}
              title={`${item.label} (${item.cmd})`}
            >
              <span className="material-symbols-outlined text-2xl text-white">{item.icon}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto mb-4 relative group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-[#502741] border border-[#f2b5d6] overflow-hidden flex items-center justify-center font-bold text-sm text-white shadow-md">
            RP
          </div>
          <div className="absolute left-14 bottom-0 bg-[#37122b] border border-[#603050] px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl">
            <p className="font-bold text-sm text-white">Ravi Panchal</p>
            <p className="text-xs text-[#e0d0d8]">Fullstack & AI Dev</p>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobileMenu}
          ></div>

          {/* Drawer Content */}
          <div className="relative w-64 max-w-[80vw] bg-[#1d0316] border-r border-[#502741] h-full pt-16 pb-6 px-4 flex flex-col z-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#502741]">
              <div className="w-10 h-10 rounded-full bg-[#502741] border border-[#f2b5d6] flex items-center justify-center font-bold text-sm text-white">
                RP
              </div>
              <div>
                <p className="font-bold text-sm text-white font-mono">Ravi Panchal</p>
                <p className="text-xs text-[#e0d0d8] font-sans">Fullstack & AI Dev</p>
              </div>
            </div>

            <div className="text-xs font-mono text-[#f2b5d6] uppercase tracking-wider mb-2 px-2">
              System Shortcuts
            </div>

            <div className="flex flex-col gap-2">
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCommand(item.cmd)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm text-[#e0d0d8] hover:text-white hover:bg-[#502741] transition-colors font-mono"
                >
                  <span className="material-symbols-outlined text-xl text-[#f2b5d6]">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">{item.label}</span>
                    <span className="text-[11px] text-[#8adb4d] font-mono">{item.cmd}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-[#502741] text-xs text-[#e0d0d8] font-mono text-center">
              Ubuntu 22.04 LTS (Portfolio)
            </div>
          </div>
        </div>
      )}
    </>
  );
};
