import { useState, useMemo, useCallback } from 'react';
import { FileSystemEngine } from '../utils/FileSystemEngine';
import { CommandProcessor } from '../utils/CommandProcessor';

const initialBanner = {
  type: 'banner',
  content: `Welcome to Ubuntu 26.04 LTS (GNU/Linux 6.8.0-generic x86_64)

Welcome to Ravi Panchal's Interactive Portfolio.
Type 'help' or 'guide' to see available commands.`
};

export const useTerminal = () => {
  const fsEngine = useMemo(() => new FileSystemEngine(), []);
  const commandProcessor = useMemo(() => new CommandProcessor(fsEngine), [fsEngine]);

  const [currentPath, setCurrentPath] = useState('~');
  const [historyOutput, setHistoryOutput] = useState([initialBanner]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Advanced Visual & Interaction States
  const [activeTheme, setActiveTheme] = useState('yaru');
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(false);

  const executeCommand = useCallback((cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) {
      setHistoryOutput(prev => [...prev, { type: 'empty_prompt', path: currentPath }]);
      return;
    }

    // Add to history
    setCommandHistory(prev => {
      const next = [...prev, trimmed];
      setHistoryIndex(next.length);
      return next;
    });

    const result = commandProcessor.process(trimmed, currentPath, commandHistory);

    if (result) {
      if (result.type === 'clear') {
        setHistoryOutput([]);
        return;
      }

      if (result.type === 'open_recruiter_modal') {
        setIsRecruiterModalOpen(true);
      }

      if (result.type === 'theme_change') {
        setActiveTheme(result.theme);
      }

      if (result.type === 'trigger_matrix') {
        setIsMatrixActive(true);
      }

      if (result.type === 'cd' && result.newPath) {
        setCurrentPath(result.newPath);
      }

      setHistoryOutput(prev => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          promptPath: currentPath,
          cmd: trimmed,
          result
        }
      ]);
    }
  }, [currentPath, commandHistory, commandProcessor]);

  // Tab Auto-Completion
  const handleTabCompletion = useCallback((inputVal) => {
    const parts = inputVal.split(' ');
    if (parts.length <= 1) {
      // Complete command names
      const knownCmds = [
        'help', 'recruiter', 'theme', 'matrix', 'guide', 'tree', 'ls', 'cd', 'pwd', 'cat', 'grep', 'find',
        'intro', 'projects', 'internships', 'skills', 'education',
        'stories', 'coding', 'achievements', 'activities', 'blogs',
        'resume', 'contact', 'neofetch', 'whoami', 'history', 'clear', 'man'
      ];
      const match = knownCmds.find(c => c.startsWith(inputVal.toLowerCase()));
      if (match) return match;
      return inputVal;
    } else {
      // Complete file or directory path
      const cmd = parts[0];
      const partialPath = parts.slice(1).join(' ');
      const lsRes = fsEngine.ls(currentPath, '');
      if (lsRes.success && lsRes.items) {
        const match = lsRes.items.find(item => item.name.startsWith(partialPath));
        if (match) {
          const suffix = match.type === 'dir' ? '/' : '';
          return `${cmd} ${match.name}${suffix}`;
        }
      }
      return inputVal;
    }
  }, [currentPath, fsEngine]);

  const clearTerminal = useCallback(() => {
    setHistoryOutput([]);
  }, []);

  return {
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
  };
};

