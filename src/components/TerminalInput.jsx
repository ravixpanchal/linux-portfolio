import React, { useState, useRef, useEffect } from 'react';

export const TerminalInput = ({
  currentPath,
  onExecuteCommand,
  onTabComplete,
  commandHistory,
  historyIndex,
  setHistoryIndex
}) => {
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentPath]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onExecuteCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex <= 0 ? 0 : historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex >= commandHistory.length - 1 ? commandHistory.length : historyIndex + 1;
        setHistoryIndex(nextIdx);
        if (nextIdx === commandHistory.length) {
          setInputVal('');
        } else {
          setInputVal(commandHistory[nextIdx] || '');
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const completed = onTabComplete(inputVal);
      if (completed) setInputVal(completed);
    }
  };

  const handleFocus = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2 mt-2 mb-6 sm:mb-4 pb-6 font-mono text-sm sm:text-base">
      <span className="prompt whitespace-nowrap hidden sm:inline">visitor@ravi-portfolio</span>
      <span className="prompt whitespace-nowrap inline sm:hidden">ravi</span>
      <span className="text-on-surface">:</span>
      <span className="path whitespace-nowrap max-w-[100px] sm:max-w-none truncate">{currentPath}</span>
      <span className="text-on-surface">$</span>
      
      <div className="flex-grow flex items-center min-w-[80px] relative">
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          className="command-input min-w-0"
          autoFocus
          spellCheck="false"
          autoComplete="off"
        />
        <span className="blinking-cursor"></span>
      </div>
    </div>
  );
};
