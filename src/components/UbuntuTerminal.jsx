import React, { useRef, useEffect } from 'react';
import { TerminalOutput } from './TerminalOutput';
import { TerminalInput } from './TerminalInput';
import { CommandSuggestions } from './CommandSuggestions';

export const UbuntuTerminal = ({
  currentPath,
  historyOutput,
  commandHistory,
  historyIndex,
  setHistoryIndex,
  onExecuteCommand,
  onTabComplete,
  onClear
}) => {
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [historyOutput]);

  const handleContainerClick = (e) => {
    // If text is selected or an interactive element was clicked, don't steal focus
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) return;

    const inputEl = bodyRef.current?.querySelector('input');
    if (inputEl) {
      inputEl.focus();
    }
  };

  return (
    <div className="ubuntu-terminal w-full max-w-[1000px] h-full md:h-[600px] rounded-lg md:rounded-xl shadow-2xl flex flex-col">
      {/* Terminal Header */}
      <div className="terminal-header flex-shrink-0">
        <div className="window-controls">
          <div className="control-btn close-btn cursor-pointer" title="Close" onClick={onClear}></div>
          <div className="control-btn min-btn cursor-pointer" title="Minimize"></div>
          <div className="control-btn max-btn cursor-pointer" title="Maximize"></div>
        </div>
        <div className="terminal-title text-xs sm:text-sm px-16 truncate max-w-full text-center">
          visitor@ravi-portfolio: {currentPath}
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={bodyRef}
        onClick={handleContainerClick}
        className="terminal-body font-terminal-input text-terminal-input flex-grow p-4 overflow-y-auto"
        tabIndex={0}
      >
        {historyOutput.map((item, idx) => (
          <TerminalOutput key={item.id || idx} output={item} />
        ))}

        <TerminalInput
          currentPath={currentPath}
          onExecuteCommand={onExecuteCommand}
          onTabComplete={onTabComplete}
          commandHistory={commandHistory}
          historyIndex={historyIndex}
          setHistoryIndex={setHistoryIndex}
        />
      </div>

      {/* Mobile Quick Bar */}
      <CommandSuggestions
        onExecuteCommand={onExecuteCommand}
        commandHistory={commandHistory}
        historyIndex={historyIndex}
        setHistoryIndex={setHistoryIndex}
      />
    </div>
  );
};
