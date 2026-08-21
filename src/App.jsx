import React from 'react';
import { TopAppBar } from './components/TopAppBar';
import { SideNavBar } from './components/SideNavBar';
import { UbuntuTerminal } from './components/UbuntuTerminal';
import { Footer } from './components/Footer';
import { RecruiterModal } from './components/RecruiterModal';
import { DesktopIcons } from './components/DesktopIcons';
import { MatrixRain } from './components/MatrixRain';
import { useTerminal } from './hooks/useTerminal';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const {
    currentPath,
    historyOutput,
    commandHistory,
    historyIndex,
    setHistoryIndex,
    activeTheme,
    setActiveTheme,
    isRecruiterModalOpen,
    setIsRecruiterModalOpen,
    isMatrixActive,
    setIsMatrixActive,
    executeCommand,
    handleTabCompletion,
    clearTerminal
  } = useTerminal();

  return (
    <div className={`min-h-screen flex flex-col font-body-md text-on-surface relative overflow-hidden theme-${activeTheme}`}>
      {/* Desktop Backdrop Wallpaper */}
      <div className="desktop-bg"></div>

      {/* Top App Bar Header */}
      <TopAppBar
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
        activeTheme={activeTheme}
        onChangeTheme={(t) => setActiveTheme(t)}
      />

      {/* Side Navigation Dock */}
      <SideNavBar
        onExecuteCommand={executeCommand}
        mobileMenuOpen={mobileMenuOpen}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />

      {/* Main Desktop Canvas & Terminal Window */}
      <main className="desktop-canvas">
        {/* Floating Wallpaper Icons */}
        <DesktopIcons
          onExecuteCommand={executeCommand}
          onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
        />

        <UbuntuTerminal
          currentPath={currentPath}
          historyOutput={historyOutput}
          commandHistory={commandHistory}
          historyIndex={historyIndex}
          setHistoryIndex={setHistoryIndex}
          onExecuteCommand={executeCommand}
          onTabComplete={handleTabCompletion}
          onClear={clearTerminal}
        />
      </main>

      {/* Footer Status Bar */}
      <Footer onExecuteCommand={executeCommand} />

      {/* ⚡ 1-Click Executive Recruiter Modal */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />

      {/* 🟢 Matrix Digital Rain Canvas */}
      <MatrixRain
        isActive={isMatrixActive}
        onClose={() => setIsMatrixActive(false)}
      />
    </div>
  );
}

export default App;

