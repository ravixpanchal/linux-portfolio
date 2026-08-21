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

  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [thumbHeight, setThumbHeight] = React.useState(35);
  const [isScrollable, setIsScrollable] = React.useState(false);
  const trackRef = useRef(null);

  const updateScrollState = () => {
    if (!bodyRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = bodyRef.current;
    if (scrollHeight > clientHeight + 10) {
      setIsScrollable(true);
      const ratio = clientHeight / scrollHeight;
      const calculatedThumbH = Math.max(30, Math.min(120, clientHeight * ratio));
      setThumbHeight(calculatedThumbH);
      const maxScroll = scrollHeight - clientHeight;
      setScrollProgress(maxScroll > 0 ? scrollTop / maxScroll : 0);
    } else {
      setIsScrollable(false);
    }
  };

  const scrollToBottom = () => {
    if (!bodyRef.current) return;
    const el = bodyRef.current;
    el.scrollTop = el.scrollHeight;
    requestAnimationFrame(() => {
      if (el) el.scrollTop = el.scrollHeight;
      updateScrollState();
    });
    setTimeout(() => {
      if (el) el.scrollTop = el.scrollHeight;
      updateScrollState();
    }, 50);
    setTimeout(() => {
      if (el) el.scrollTop = el.scrollHeight;
      updateScrollState();
    }, 250);
  };

  useEffect(() => {
    scrollToBottom();
  }, [historyOutput]);

  const touchStartYRef = useRef(0);
  const isTouchSwipingRef = useRef(false);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartYRef.current = e.touches[0].clientY;
      isTouchSwipingRef.current = false;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      const dist = Math.abs(e.touches[0].clientY - touchStartYRef.current);
      if (dist > 8) {
        isTouchSwipingRef.current = true;
      }
    }
  };

  const handleTrackTouchMove = (e) => {
    if (!trackRef.current || !bodyRef.current || !e.touches[0]) return;
    const rect = trackRef.current.getBoundingClientRect();
    const touchY = e.touches[0].clientY - rect.top;
    const ratio = Math.max(0, Math.min(1, touchY / rect.height));
    const targetScroll = ratio * (bodyRef.current.scrollHeight - bodyRef.current.clientHeight);
    bodyRef.current.scrollTop = targetScroll;
  };

  const handleContainerClick = (e) => {
    // If user was swiping/scrolling on touch screen, DO NOT focus input
    if (isTouchSwipingRef.current) {
      isTouchSwipingRef.current = false;
      return;
    }
    // If text is selected or an interactive element was clicked, don't steal focus
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) return;

    const inputEl = bodyRef.current?.querySelector('input');
    if (inputEl) {
      inputEl.focus();
    }
  };

  const handleScrollTop = (e) => {
    e.stopPropagation();
    if (bodyRef.current) {
      bodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollBottom = (e) => {
    e.stopPropagation();
    if (bodyRef.current) {
      bodyRef.current.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="ubuntu-terminal w-full max-w-[1000px] h-full max-h-full min-h-0 md:h-[600px] rounded-lg md:rounded-xl shadow-2xl flex flex-col overflow-hidden relative">
      {/* Floating Quick Scroll Controls */}
      <div className="absolute right-3 top-12 z-20 flex flex-col gap-1 opacity-80 hover:opacity-100 transition-opacity">
        <button
          onClick={handleScrollTop}
          className="bg-[#502741]/90 hover:bg-[#e95420] text-white p-1 rounded-full border border-[#603050] shadow-md transition-all active:scale-95 flex items-center justify-center"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <span className="material-symbols-outlined text-sm">keyboard_arrow_up</span>
        </button>
        <button
          onClick={handleScrollBottom}
          className="bg-[#502741]/90 hover:bg-[#e95420] text-white p-1 rounded-full border border-[#603050] shadow-md transition-all active:scale-95 flex items-center justify-center"
          title="Scroll to Bottom"
          aria-label="Scroll to Bottom"
        >
          <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
        </button>
      </div>

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

      {/* 🚀 Custom Visible Touch Scrollbar Overlay */}
      {isScrollable && (
        <div
          ref={trackRef}
          onClick={handleTrackClick}
          onTouchStart={handleTrackClick}
          onTouchMove={handleTrackTouchMove}
          className="absolute right-1 top-11 bottom-11 w-3 bg-[#1d0316]/90 border border-[#603050] rounded-full z-30 cursor-pointer select-none py-1 flex flex-col items-center touch-none"
          title="Terminal Scroll Indicator"
        >
          <div
            className="w-full bg-[#f2b5d6] hover:bg-[#e95420] active:bg-[#e95420] rounded-full transition-colors shadow-lg border border-[#300a24]"
            style={{
              height: `${thumbHeight}px`,
              transform: `translateY(${scrollProgress * Math.max(0, (bodyRef.current?.clientHeight || 350) - thumbHeight - 24)}px)`
            }}
          />
        </div>
      )}

      {/* Terminal Body */}
      <div
        ref={bodyRef}
        onClick={handleContainerClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onScroll={updateScrollState}
        className="terminal-body font-terminal-input text-terminal-input flex-1 min-h-0 p-3 sm:p-4 overflow-y-auto"
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
