import React from 'react';
import { CodingStatsWidget } from './CodingStatsWidget';

export const TerminalOutput = ({ output }) => {
  if (!output) return null;

  if (output.type === 'banner') {
    return <div className="output mb-4 text-[#e0d0d8] font-mono leading-relaxed">{output.content}</div>;
  }

  if (output.type === 'empty_prompt') {
    return null;
  }

  const { promptPath, cmd, result } = output;

  return (
    <div className="mb-4">
      {/* Historical Command Line */}
      {cmd && (
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1 font-mono text-sm sm:text-base">
          <span className="prompt hidden sm:inline">visitor@ravi-portfolio</span>
          <span className="prompt inline sm:hidden">ravi</span>:
          <span className="path max-w-[100px] sm:max-w-none truncate">{promptPath}</span>$
          <span className="text-white font-bold break-all">{cmd}</span>
        </div>
      )}

      {/* Result Container */}
      <div className="output font-mono text-sm leading-relaxed">
        {!result && null}

        {result?.type === 'text' && <div className="text-[#ffffff]">{result.content}</div>}

        {result?.type === 'error' && (
          <div className="text-[#ffb4ab] font-bold">{result.content}</div>
        )}

        {result?.type === 'ls' && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 my-1 font-mono text-base">
            {result.items.map((item, idx) => {
              let colorClass = 'file';
              if (item.type === 'dir') colorClass = 'dir';
              else if (item.isExec) colorClass = 'exec';

              return (
                <span key={idx} className={colorClass}>
                  {item.name}{item.type === 'dir' ? '/' : ''}
                </span>
              );
            })}
          </div>
        )}

        {result?.type === 'cat' && (
          <div className="my-2">
            {result.content.startsWith('project:') ? (
              <div className="bg-[#320e26] border border-[#603050] rounded-lg p-3 sm:p-4 my-2 max-w-lg shadow-lg">
                {result.content.split('\n').map((line, i) => {
                  if (line.startsWith('project:')) {
                    return (
                      <div key={i} className="text-[#f2b5d6] font-bold text-lg mb-2 font-mono">
                        🚀 {line.replace('project:', '').trim()}
                      </div>
                    );
                  } else if (line.startsWith('stack:')) {
                    const stackItems = line.replace('stack:', '').split(',');
                    return (
                      <div key={i} className="flex gap-2 mb-3 flex-wrap">
                        {stackItems.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-[#502741] text-white text-xs px-2.5 py-1 rounded-full font-sans font-medium border border-[#603050]"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    );
                  } else if (line.startsWith('desc:')) {
                    return (
                      <div key={i} className="text-sm text-[#ffffff] mb-3 leading-relaxed font-sans">
                        {line.replace('desc:', '').trim()}
                      </div>
                    );
                  }
                  return <div key={i} className="text-xs text-[#e0d0d8] font-mono">{line}</div>;
                })}
              </div>
            ) : (
              <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-[#ffffff] font-normal">
                {result.content}
              </pre>
            )}
          </div>
        )}

        {result?.type === 'grep' && (
          <div className="my-2 font-mono text-sm">
            {result.matches.length === 0 ? (
              <div className="text-[#e0d0d8]">No matches found for "{result.query}".</div>
            ) : (
              <div>
                <div className="text-[#8adb4d] font-bold mb-2">
                  Found {result.matches.length} match(es) for "{result.query}":
                </div>
                {result.matches.map((m, idx) => (
                  <div key={idx} className="mb-1">
                    <span className="text-[#f2b5d6] font-bold">{m.file}</span>:
                    <span className="text-[#ffffff] ml-2">{m.content}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {result?.type === 'find' && (
          <div className="my-2 font-mono text-sm">
            {result.results.length === 0 ? (
              <div className="text-[#e0d0d8]">No files or directories found.</div>
            ) : (
              <div>
                {result.results.map((r, idx) => (
                  <div key={idx} className={r.type === 'dir' ? 'dir' : 'file'}>
                    {r.path}{r.type === 'dir' ? '/' : ''}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {result?.type === 'help' && (
          <div className="my-2 max-w-2xl font-mono text-sm">
            <div className="text-[#f2b5d6] font-bold text-base mb-2">Available System Commands:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
              {result.commands.map((c, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <span className="text-[#8adb4d] font-bold">{c.cmd}</span>
                  <span className="text-[#e0d0d8] text-xs text-right">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {result?.type === 'guide' && (
          <pre className="whitespace-pre-wrap font-mono text-sm text-[#ffffff] leading-relaxed my-2 bg-[#320e26] p-4 rounded-lg border border-[#603050]">
            {result.content}
          </pre>
        )}

        {result?.type === 'whoami' && (
          <div className="my-1 font-mono text-sm">
            <span className="text-[#8adb4d] font-bold">{result.user}</span>
            <div className="text-xs text-[#e0d0d8] mt-1">
              ...secretly hoping to be a {result.note} 😉
            </div>
          </div>
        )}

        {result?.type === 'neofetch' && (
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 my-4 bg-[#320e26] p-3 sm:p-4 rounded-lg border border-[#603050] max-w-xl">
            <div className="ascii-art whitespace-pre text-[#ffb59e] text-[10px] sm:text-xs leading-none select-none font-mono">
{`       _..._
     .'     '.
    /  _   _  \\
    | (o)_(o) |
    \\  .---.  /
     '. '...' .'
       '-...-'`}
            </div>
            <div className="font-mono text-xs text-[#ffffff] flex-grow space-y-1">
              <div><span className="text-[#f2b5d6] font-bold text-sm">ravi@portfolio</span></div>
              <div className="text-[#603050] border-b border-[#603050] pb-1">-----------------</div>
              <div><span className="text-[#8adb4d] font-bold">OS</span>: Ubuntu 22.04 LTS (Portfolio Edition)</div>
              <div><span className="text-[#8adb4d] font-bold">Degree</span>: {result.data.degree} (CGPA: {result.data.cgpa})</div>
              <div><span className="text-[#8adb4d] font-bold">Host</span>: Vercel / Cloud Engine</div>
              <div><span className="text-[#8adb4d] font-bold">Kernel</span>: Web Standards / React 18</div>
              <div><span className="text-[#8adb4d] font-bold">Shell</span>: Bash (interactive simulation)</div>
              <div><span className="text-[#8adb4d] font-bold">Theme</span>: Yaru Dark (Aubergine & Orange)</div>

              <div className="flex gap-1.5 pt-2">
                <div className="w-4 h-4 bg-[#28051e] rounded-sm" title="#28051e"></div>
                <div className="w-4 h-4 bg-[#c33900] rounded-sm" title="#c33900"></div>
                <div className="w-4 h-4 bg-[#499300] rounded-sm" title="#499300"></div>
                <div className="w-4 h-4 bg-[#804f6c] rounded-sm" title="#804f6c"></div>
                <div className="w-4 h-4 bg-[#9c8d93] rounded-sm" title="#9c8d93"></div>
                <div className="w-4 h-4 bg-[#ffd8eb] rounded-sm" title="#ffd8eb"></div>
              </div>
            </div>
          </div>
        )}

        {result?.type === 'history' && (
          <div className="font-mono text-sm my-2">
            {result.history.length === 0 ? (
              <div className="text-[#e0d0d8]">No command history yet.</div>
            ) : (
              result.history.map((hCmd, idx) => (
                <div key={idx}>
                  <span className="text-[#9c8d93] mr-3">{idx + 1}</span>
                  <span className="text-[#ffffff]">{hCmd}</span>
                </div>
              ))
            )}
          </div>
        )}

        {/* --- Custom Portfolio Rich Renderers --- */}
        {result?.type === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 max-w-4xl">
            {result.data.map((proj, idx) => (
              <div
                key={idx}
                className="bg-[#320e26] border border-[#603050] rounded-lg p-4 flex flex-col justify-between hover:border-[#f2b5d6] transition-colors"
              >
                <div>
                  <div className="text-xs text-[#8adb4d] font-bold uppercase tracking-wider mb-1 font-sans">
                    {proj.category}
                  </div>
                  <div className="text-[#f2b5d6] font-bold text-base mb-2 font-mono">
                    {proj.name}
                  </div>
                  <p className="text-xs text-[#e0d0d8] leading-relaxed mb-3 font-sans">
                    {proj.desc}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.stack.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-[#502741] text-white text-[11px] px-2 py-0.5 rounded font-sans border border-[#603050]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={proj.githubUrl || 'https://github.com/ravixpanchal'}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#502741] hover:bg-[#603050] text-white text-xs font-mono px-3 py-1 rounded border border-[#603050] transition-colors"
                    >
                      💻 Code
                    </a>
                    <a
                      href={proj.liveDemoUrl || 'https://github.com/ravixpanchal'}
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
        )}

        {result?.type === 'internships' && (
          <div className="space-y-3 my-3 max-w-3xl">
            {result.data.map((intern, idx) => (
              <div
                key={idx}
                className="bg-[#320e26] border border-[#603050] rounded-lg p-4 font-mono"
              >
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <span className="text-[#f2b5d6] font-bold text-base">{intern.role}</span>
                  <span className="text-xs text-[#ffb59e] font-sans">{intern.period}</span>
                </div>
                <div className="text-[#8adb4d] text-sm font-semibold mb-2">{intern.company}</div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {intern.tech.map((t, tIdx) => (
                    <span key={tIdx} className="bg-[#502741] text-white text-xs px-2 py-0.5 rounded font-sans border border-[#603050]">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-xs text-[#e0d0d8] space-y-1 font-sans">
                  {intern.details.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {result?.type === 'skills' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3 max-w-3xl font-mono text-sm">
            <div className="bg-[#320e26] p-4 rounded-lg border border-[#603050]">
              <div className="text-[#f2b5d6] font-bold mb-2">💻 Languages</div>
              <div className="flex flex-wrap gap-1.5">
                {result.data.programming.map((s, i) => (
                  <span key={i} className="bg-[#502741] text-white text-xs px-2 py-1 rounded font-sans border border-[#603050]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#320e26] p-4 rounded-lg border border-[#603050]">
              <div className="text-[#8adb4d] font-bold mb-2">🤖 AI / Machine Learning</div>
              <div className="flex flex-wrap gap-1.5">
                {result.data.ai_ml.map((s, i) => (
                  <span key={i} className="bg-[#502741] text-white text-xs px-2 py-1 rounded font-sans border border-[#603050]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#320e26] p-4 rounded-lg border border-[#603050]">
              <div className="text-[#ffb59e] font-bold mb-2">🌐 Fullstack Web</div>
              <div className="flex flex-wrap gap-1.5">
                {result.data.web_dev.map((s, i) => (
                  <span key={i} className="bg-[#502741] text-white text-xs px-2 py-1 rounded font-sans border border-[#603050]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#320e26] p-4 rounded-lg border border-[#603050]">
              <div className="text-white font-bold mb-2">🛠️ Cloud & Tools</div>
              <div className="flex flex-wrap gap-1.5">
                {result.data.tools.map((s, i) => (
                  <span key={i} className="bg-[#502741] text-white text-xs px-2 py-1 rounded font-sans border border-[#603050]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {result?.type === 'education' && (
          <div className="space-y-3 my-3 max-w-2xl font-mono text-sm">
            {result.data.map((edu, idx) => (
              <div key={idx} className="bg-[#320e26] p-4 rounded-lg border border-[#603050]">
                <div className="text-[#f2b5d6] font-bold text-base">{edu.degree}</div>
                <div className="text-[#8adb4d] font-semibold text-xs mt-0.5">{edu.institution}</div>
                <div className="text-xs text-[#e0d0d8] mt-2">{edu.score} | {edu.period}</div>
                {edu.courses && (
                  <div className="mt-2 text-xs text-[#e0d0d8]">
                    <span className="text-white font-bold">Key Coursework:</span> {edu.courses.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {result?.type === 'contact' && (
          <div className="bg-[#320e26] p-4 rounded-lg border border-[#603050] max-w-md my-3 font-mono text-sm space-y-2">
            <div className="text-[#f2b5d6] font-bold text-base">Contact & Social Links</div>
            <div className="text-white">📧 Email: <a href={`mailto:${result.data.email}`} className="text-[#8adb4d] underline font-bold">{result.data.email}</a></div>
            <div className="text-white">🐙 GitHub: <a href={result.data.github} target="_blank" rel="noreferrer" className="text-[#f2b5d6] underline font-bold">{result.data.github}</a></div>
            <div className="text-white">💼 LinkedIn: <a href={result.data.linkedin} target="_blank" rel="noreferrer" className="text-[#ffb59e] underline font-bold">{result.data.linkedin}</a></div>
          </div>
        )}

        {result?.type === 'resume' && (
          <div className="bg-[#320e26] p-4 rounded-lg border border-[#603050] max-w-md my-3 font-mono text-sm space-y-2">
            <div className="text-[#f2b5d6] font-bold text-base">📄 Resume Document</div>
            <p className="text-xs text-[#e0d0d8]">Ravi Panchal - Fullstack & AI/ML Engineer Resume</p>
            <div>
              <a
                href={result.data.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#e95420] text-white font-bold text-xs px-3.5 py-1.5 rounded hover:bg-[#c33900] transition-colors font-sans shadow-md"
              >
                Download / View Resume
              </a>
            </div>
          </div>
        )}

        {result?.type === 'theme_change' && (
          <div className="text-[#8adb4d] font-bold font-mono text-sm my-2">
            🎨 Terminal theme switched to: <span className="text-[#f2b5d6] uppercase">{result.theme}</span>
          </div>
        )}

        {result?.type === 'open_recruiter_modal' && (
          <div className="text-[#8adb4d] font-bold font-mono text-sm my-2">
            ⚡ Opening 1-Click Executive Recruiter Mode...
          </div>
        )}

        {result?.type === 'coding_stats' && (
          <CodingStatsWidget />
        )}

        {result?.type === 'sudo_hire' && (
          <div className="bg-[#320e26] border-2 border-[#8adb4d] p-4 rounded-lg my-3 font-mono max-w-lg shadow-xl">
            <div className="text-[#8adb4d] font-bold text-base flex items-center gap-2 mb-1">
              <span>🎉 PERMISSION GRANTED!</span>
            </div>
            <div className="text-white text-xs mb-3">{result.content}</div>
            <div className="flex gap-2">
              <a
                href={`mailto:${result.data.email}`}
                className="bg-[#e95420] text-white text-xs font-bold px-3 py-1.5 rounded font-sans hover:bg-[#c33900]"
              >
                Send Offer / Interview Email
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

