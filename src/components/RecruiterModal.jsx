import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { CodingStatsWidget } from './CodingStatsWidget';

export const RecruiterModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { personal, internships, projects, skills } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container - Styled like a sleek Ubuntu Application Window */}
      <div className="bg-[#28051e] border border-[#603050] text-white w-full max-w-4xl max-h-[92dvh] sm:max-h-[88vh] rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Window Title Bar */}
        <div className="bg-[#37122b] border-b border-[#502741] px-3 sm:px-4 py-2.5 sm:py-3 flex justify-between items-center select-none flex-shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-3.5 h-3.5 rounded-full bg-[#E95420] cursor-pointer hover:opacity-80 shrink-0" onClick={onClose} title="Close"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#AEA79F] shrink-0"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#4E9A06] shrink-0"></div>
            <span className="font-mono font-bold text-xs sm:text-sm text-[#f2b5d6] ml-1.5 truncate">
              ⚡ Recruiter Mode - Executive Profile Overview
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#e0d0d8] hover:text-white hover:bg-[#502741] active:bg-[#603050] rounded px-2 py-1 text-xs font-mono transition-colors shrink-0"
          >
            ✕ Close [Esc]
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-3.5 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 font-sans scrollbar-thin">
          
          {/* Header & Candidate Card */}
          <div className="bg-[#320e26] border border-[#603050] p-4 sm:p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="inline-block bg-[#499300]/20 text-[#8adb4d] text-xs px-2.5 py-1 rounded-full font-mono font-bold mb-2 border border-[#499300]/40">
                {personal.status}
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-white font-mono">{personal.name}</h2>
              <p className="text-[#f2b5d6] text-xs sm:text-base font-semibold mt-0.5">{personal.title}</p>
              <p className="text-[11px] sm:text-xs text-[#e0d0d8] mt-1 font-mono">{personal.degree} | CGPA: {personal.cgpa}</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 w-full md:w-auto">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#e95420] hover:bg-[#c33900] text-white text-xs font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow-lg transition-colors font-mono flex-1 md:flex-initial"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Download Resume
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="bg-[#502741] hover:bg-[#603050] text-white text-xs font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg flex items-center justify-center gap-1.5 border border-[#603050] transition-colors font-mono flex-1 md:flex-initial"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                Email Candidate
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 font-mono text-center">
            <div className="bg-[#320e26] border border-[#603050] p-2.5 sm:p-3 rounded-lg">
              <div className="text-[11px] sm:text-xs text-[#e0d0d8]">Education</div>
              <div className="text-xs sm:text-base font-bold text-[#8adb4d] mt-1 truncate">B.Tech AI & DS</div>
              <div className="text-[10px] sm:text-[11px] text-[#9c8d93]">CGPA 8.42</div>
            </div>
            <div className="bg-[#320e26] border border-[#603050] p-2.5 sm:p-3 rounded-lg">
              <div className="text-[11px] sm:text-xs text-[#e0d0d8]">Experience</div>
              <div className="text-xs sm:text-base font-bold text-[#f2b5d6] mt-1 truncate">3 Internships</div>
              <div className="text-[10px] sm:text-[11px] text-[#9c8d93]">AI-ML , Gen-AI</div>
            </div>
            <div className="bg-[#320e26] border border-[#603050] p-2.5 sm:p-3 rounded-lg">
              <div className="text-[11px] sm:text-xs text-[#e0d0d8]">LeetCode</div>
              <div className="text-xs sm:text-base font-bold text-[#ffb59e] mt-1 truncate">392 Solved</div>
              <div className="text-[10px] sm:text-[11px] text-[#9c8d93]">Rating: 1,422</div>
            </div>
            <div className="bg-[#320e26] border border-[#603050] p-2.5 sm:p-3 rounded-lg">
              <div className="text-[11px] sm:text-xs text-[#e0d0d8]">GeeksforGeeks</div>
              <div className="text-xs sm:text-base font-bold text-white mt-1 truncate">Institute Rank</div>
              <div className="text-[10px] sm:text-[11px] text-[#8adb4d]">Rank #1</div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-lg font-bold text-[#f2b5d6] font-mono mb-3 flex items-center gap-2">
              💼 Work Experience & Internships
            </h3>
            <div className="space-y-3">
              {internships.map((item, idx) => (
                <div key={idx} className="bg-[#320e26] border border-[#603050] p-4 rounded-lg">
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <span className="font-bold text-base text-white">{item.role}</span>
                    <span className="text-xs text-[#ffb59e] font-mono">{item.period}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#8adb4d] mb-2">{item.company} • {item.location}</div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tech.map((t, tIdx) => (
                      <span key={tIdx} className="bg-[#502741] text-white text-[11px] px-2 py-0.5 rounded font-mono border border-[#603050]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#e0d0d8] space-y-1">
                    {item.details.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects with Links */}
          <div>
            <h3 className="text-lg font-bold text-[#f2b5d6] font-mono mb-3 flex items-center gap-2">
              🚀 Key Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="bg-[#320e26] border border-[#603050] p-4 rounded-lg flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-[#8adb4d] font-bold font-mono uppercase mb-1">{proj.category}</div>
                    <div className="text-base font-bold text-[#f2b5d6] mb-1 font-mono">{proj.name}</div>
                    <p className="text-xs text-[#e0d0d8] mb-3 leading-relaxed">{proj.desc}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {proj.stack.map((s, sIdx) => (
                        <span key={sIdx} className="bg-[#502741] text-white text-[10px] px-2 py-0.5 rounded font-mono">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={proj.githubUrl || personal.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#502741] hover:bg-[#603050] text-white text-xs font-mono px-3 py-1 rounded border border-[#603050] transition-colors"
                      >
                        💻 Code
                      </a>
                      <a
                        href={proj.liveDemoUrl || personal.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#e95420] hover:bg-[#c33900] text-white text-xs font-mono px-3 py-1 rounded transition-colors"
                      >
                        🌐 Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h3 className="text-lg font-bold text-[#f2b5d6] font-mono mb-3 flex items-center gap-2">
              ⚡ Technical Skills Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-[#320e26] border border-[#603050] p-3 rounded-lg">
                <div className="text-[#f2b5d6] font-bold mb-1.5">Languages</div>
                <div className="text-[#e0d0d8]">{skills.programming.join(', ')}</div>
              </div>
              <div className="bg-[#320e26] border border-[#603050] p-3 rounded-lg">
                <div className="text-[#8adb4d] font-bold mb-1.5">AI & Machine Learning</div>
                <div className="text-[#e0d0d8]">{skills.ai_ml.join(', ')}</div>
              </div>
              <div className="bg-[#320e26] border border-[#603050] p-3 rounded-lg">
                <div className="text-[#ffb59e] font-bold mb-1.5">Fullstack Web</div>
                <div className="text-[#e0d0d8]">{skills.web_dev.join(', ')}</div>
              </div>
              <div className="bg-[#320e26] border border-[#603050] p-3 rounded-lg">
                <div className="text-white font-bold mb-1.5">Tools & Cloud</div>
                <div className="text-[#e0d0d8]">{skills.tools.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Live GitHub & LeetCode Developer Stats */}
          <div>
            <h3 className="text-lg font-bold text-[#f2b5d6] font-mono mb-2 flex items-center gap-2">
              📊 Live GitHub & LeetCode Analytics
            </h3>
            <CodingStatsWidget />
          </div>

        </div>
      </div>
    </div>
  );
};
