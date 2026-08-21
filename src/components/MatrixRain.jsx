import React, { useEffect, useRef } from 'react';

export const MatrixRain = ({ isActive, onClose }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const phrases = [
      'RAVI PANCHAL',
      'AI/ML ENGINEER'
    ];

    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*+<>~';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Track column states: each column can carry a signature phrase or random code
    const columnStates = Array(columns).fill(null).map((_, idx) => ({
      y: Math.floor(Math.random() * -50), // stagger start heights
      speed: Math.random() * 0.8 + 0.8,
      phrase: phrases[idx % phrases.length],
      charIndex: 0,
      isNameColumn: Math.random() < 0.35 // 35% of columns explicitly stream signature name phrases
    }));

    const draw = () => {
      // Fade out canvas background gradually for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < columnStates.length; i++) {
        const col = columnStates[i];
        let char = '';
        let isHighlighted = false;

        if (col.isNameColumn && col.phrase) {
          char = col.phrase[col.charIndex % col.phrase.length];
          isHighlighted = true;
        } else {
          char = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        }

        const x = i * fontSize;
        const y = col.y * fontSize;

        // Lead character glows bright white / neon green for RAVI PANCHAL
        if (isHighlighted) {
          ctx.fillStyle = '#ffffff'; // Glowing white text for name characters
          ctx.shadowColor = '#00FF66';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = '#00FF66'; // Standard Matrix green
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Advance vertical drop
        col.y += col.speed;
        col.charIndex++;

        // Reset column when it hits bottom
        if (col.y * fontSize > canvas.height && Math.random() > 0.96) {
          col.y = 0;
          col.charIndex = 0;
          col.isNameColumn = Math.random() < 0.35;
          col.phrase = phrases[Math.floor(Math.random() * phrases.length)];
        }
      }
    };

    const interval = setInterval(draw, 33);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, onClose]);

  if (!isActive) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black cursor-pointer flex flex-col justify-between p-4 select-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex justify-between items-center text-xs font-mono text-[#00FF66] bg-black/85 p-3 rounded border border-[#00FF66]/50 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
          <span className="font-bold tracking-wider">
            🟢 MATRIX CODE STREAM - RAVI PANCHAL (AI/ML ENGINEER)
          </span>
        </div>
        <button
          onClick={onClose}
          className="bg-[#00FF66] text-black font-bold px-3.5 py-1 rounded hover:bg-white transition-colors font-mono"
        >
          Exit Matrix [Esc / Click]
        </button>
      </div>
    </div>
  );
};
