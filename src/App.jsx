import React from 'react';
import { TopAppBar } from './components/TopAppBar';
import { SideNavBar } from './components/SideNavBar';
import { UbuntuTerminal } from './components/UbuntuTerminal';
import { Footer } from './components/Footer';
import { useTerminal } from './hooks/useTerminal';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const {
    currentPath,
    historyOutput,
    commandHistory,
    historyIndex,
    setHistoryIndex,
    executeCommand,
    handleTabCompletion,
    clearTerminal
  } = useTerminal();

  return (
    <div className="min-h-screen flex flex-col font-body-md text-on-surface select-none relative overflow-hidden">
      {/* Desktop Backdrop Wallpaper */}
      <div className="desktop-bg"></div>

      {/* Top App Bar Header */}
      <TopAppBar
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* Side Navigation Dock */}
      <SideNavBar
        onExecuteCommand={executeCommand}
        mobileMenuOpen={mobileMenuOpen}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />

      {/* Main Desktop Canvas & Terminal Window */}
      <main className="desktop-canvas">
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
    </div>
  );
}

export default App;
