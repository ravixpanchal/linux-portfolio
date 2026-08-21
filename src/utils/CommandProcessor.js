import { portfolioData } from '../data/portfolioData';

export class CommandProcessor {
  constructor(fileSystemEngine) {
    this.fsEngine = fileSystemEngine;
  }

  process(commandStr, currentPath, history = []) {
    const trimmed = commandStr.trim();
    if (!trimmed) return null;

    const parts = trimmed.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) || [];
    const cleanParts = parts.map(p => p.replace(/^['"]|['"]$/g, ''));
    
    const cmd = cleanParts[0].toLowerCase();
    const args = cleanParts.slice(1);

    switch (cmd) {
      // --- Navigation Commands ---
      case 'pwd':
        return {
          type: 'text',
          content: currentPath === '~' ? '/home/visitor' : `/home/visitor/${currentPath.replace('~/', '')}`
        };

      case 'ls': {
        const target = args.find(a => !a.startsWith('-')) || '';
        const res = this.fsEngine.ls(currentPath, target);
        if (!res.success) {
          return { type: 'error', content: res.error };
        }
        if (res.isFile) {
          return { type: 'text', content: res.item };
        }
        return {
          type: 'ls',
          items: res.items,
          path: res.path
        };
      }

      case 'cd': {
        const target = args[0] || '~';
        const dirRes = this.fsEngine.getDirectory(currentPath, target);
        if (!dirRes) {
          return { type: 'error', content: `cd: ${target}: No such file or directory` };
        }
        return {
          type: 'cd',
          newPath: dirRes.path
        };
      }

      // --- File Commands ---
      case 'cat': {
        if (args.length === 0) {
          return { type: 'error', content: 'cat: missing operand' };
        }
        const filePath = args[0];
        const res = this.fsEngine.cat(currentPath, filePath);
        if (!res.success) {
          return { type: 'error', content: res.error };
        }
        return {
          type: 'cat',
          fileName: res.fileName,
          content: res.content,
          currentPath
        };
      }

      case 'grep': {
        if (args.length === 0) {
          return { type: 'error', content: 'Usage: grep [-i] "query" [pattern]' };
        }

        let isCaseInsensitive = false;
        let query = '';
        let pattern = '*';

        const filteredArgs = [];
        for (const arg of args) {
          if (arg === '-i' || arg === '-i') {
            isCaseInsensitive = true;
          } else {
            filteredArgs.push(arg);
          }
        }

        if (filteredArgs.length > 0) query = filteredArgs[0];
        if (filteredArgs.length > 1) pattern = filteredArgs[1];

        const res = this.fsEngine.grep(currentPath, query, pattern, isCaseInsensitive);
        if (!res.success) {
          return { type: 'error', content: res.error };
        }

        return {
          type: 'grep',
          matches: res.matches,
          query: res.query
        };
      }

      case 'find': {
        const targetName = args[0] || '';
        const res = this.fsEngine.find(currentPath, targetName);
        return {
          type: 'find',
          results: res.results
        };
      }

      // --- Utility Commands ---
      case 'help':
        return {
          type: 'help',
          commands: [
            { cmd: 'help', desc: 'Display help overview and available command list' },
            { cmd: 'recruiter', desc: 'Open 1-Click Executive Visual Recruiter View' },
            { cmd: 'theme [name]', desc: 'Change terminal theme (yaru, matrix, dracula, nord, cyberpunk)' },
            { cmd: 'matrix', desc: 'Trigger full-screen Matrix digital rain effect' },
            { cmd: 'guide', desc: 'Interactive step-by-step portfolio tour' },
            { cmd: 'ls [dir]', desc: 'List directory files and folders' },
            { cmd: 'cd <dir>', desc: 'Change current virtual directory' },
            { cmd: 'pwd', desc: 'Print working directory path' },
            { cmd: 'cat <file>', desc: 'Read content of a file or project card' },
            { cmd: 'grep -i "query"', desc: 'Search for text patterns in files' },
            { cmd: 'find [name]', desc: 'Recursively search files and directories' },
            { cmd: 'intro', desc: 'Display Ravi Panchal intro & summary' },
            { cmd: 'projects', desc: 'View full featured software projects' },
            { cmd: 'internships', desc: 'View work experience & internships' },
            { cmd: 'skills', desc: 'View technical skills & AI/ML stack' },
            { cmd: 'education', desc: 'View academic background & CGPA' },
            { cmd: 'stories', desc: 'View project architectural deep dives' },
            { cmd: 'coding', desc: 'View live GitHub & LeetCode statistics & heatmap' },
            { cmd: 'github', desc: 'Display live GitHub activity calendar & repos' },
            { cmd: 'leetcode', desc: 'Display LeetCode problem solve breakdown' },
            { cmd: 'achievements', desc: 'View awards, certifications & paper' },
            { cmd: 'activities', desc: 'View leadership & community work' },
            { cmd: 'blogs', desc: 'View technical articles & publications' },
            { cmd: 'resume', desc: 'Display resume & direct link' },
            { cmd: 'contact', desc: 'Display contact info & social links' },
            { cmd: 'neofetch', desc: 'Display system info & ASCII art logo' },
            { cmd: 'whoami', desc: 'Print current session user role' },
            { cmd: 'history', desc: 'Display command execution history' },
            { cmd: 'man <cmd>', desc: 'View manual pages for a command' },
            { cmd: 'clear', desc: 'Clear terminal screen buffer' }
          ]
        };

      case 'recruiter':
        return {
          type: 'open_recruiter_modal'
        };

      case 'theme': {
        const themeName = args[0] ? args[0].toLowerCase() : '';
        const validThemes = ['yaru', 'matrix', 'dracula', 'nord', 'cyberpunk'];
        if (!themeName || !validThemes.includes(themeName)) {
          return {
            type: 'text',
            content: `Available themes:\n  • yaru (Ubuntu Dark - Default)\n  • matrix (Matrix Green)\n  • dracula (Dracula Purple)\n  • nord (Nord Arctic Blue)\n  • cyberpunk (Cyberpunk Yellow/Pink)\n\nUsage: theme <name>`
          };
        }
        return {
          type: 'theme_change',
          theme: themeName
        };
      }

      case 'matrix':
        return {
          type: 'trigger_matrix'
        };

      case 'guide':
        return {
          type: 'guide',
          content: `Welcome to Ravi Panchal's Interactive Linux Terminal Portfolio! 🐧

Quick Exploration Checklist:
  1. Click '⚡ Recruiter Mode' or type 'recruiter' for a visual 1-page resume overview.
  2. Type 'intro' to read about my background and specialization.
  3. Type 'projects' to view projects with live code & demo links!
  4. Type 'theme matrix' or 'matrix' for interactive visual effects.
  5. Type 'resume' or 'contact' to connect directly with me!`
        };

      case 'man': {
        const manTarget = args[0] ? args[0].toLowerCase() : '';
        const manPages = {
          grep: "NAME\n  grep - search file(s) for lines matching a pattern\n\nSYNOPSIS\n  grep [-i] PATTERN [FILE_PATTERN]\n\nDESCRIPTION\n  grep searches named input files for lines containing a match to PATTERN.\n  Example: grep -i \"RAG\" internships/*",
          cat: "NAME\n  cat - concatenate files and print on the standard output\n\nSYNOPSIS\n  cat FILE\n\nDESCRIPTION\n  Reads FILE and outputs formatted content or project cards.",
          ls: "NAME\n  ls - list directory contents\n\nSYNOPSIS\n  ls [DIRECTORY]\n\nDESCRIPTION\n  Lists files and subdirectories with Yaru color indicators.",
          cd: "NAME\n  cd - change directory\n\nSYNOPSIS\n  cd [DIRECTORY]\n\nDESCRIPTION\n  Change current virtual working directory. Use 'cd ..' to move up."
        };
        return {
          type: 'text',
          content: manPages[manTarget] || `No manual entry for ${args[0] || 'specified command'}. Type 'help' for commands.`
        };
      }

      case 'whoami':
        return {
          type: 'whoami',
          user: 'visitor',
          note: 'recruiter / engineering manager / tech collaborator'
        };

      case 'neofetch':
        return {
          type: 'neofetch',
          data: portfolioData.personal
        };

      case 'history':
        return {
          type: 'history',
          history
        };

      case 'clear':
        return { type: 'clear' };

      // --- Direct Portfolio Commands ---
      case 'intro':
        return {
          type: 'text',
          content: portfolioData.introduction
        };

      case 'internships':
        return {
          type: 'internships',
          data: portfolioData.internships
        };

      case 'education':
        return {
          type: 'education',
          data: portfolioData.education
        };

      case 'projects':
        return {
          type: 'projects',
          data: portfolioData.projects
        };

      case 'stories':
        return {
          type: 'stories',
          data: portfolioData.stories
        };

      case 'skills':
        return {
          type: 'skills',
          data: portfolioData.skills
        };

      case 'coding':
      case 'github':
      case 'leetcode':
      case 'stats':
        return {
          type: 'coding_stats'
        };

      case 'achievements':
        return {
          type: 'achievements',
          data: portfolioData.achievements
        };

      case 'activities':
        return {
          type: 'activities',
          data: portfolioData.activities
        };

      case 'blogs':
        return {
          type: 'blogs',
          data: portfolioData.blogs
        };

      case 'resume':
        return {
          type: 'resume',
          data: portfolioData.personal
        };

      case 'contact':
        return {
          type: 'contact',
          data: portfolioData.personal
        };

      case 'stats':
        return {
          type: 'stats',
          data: {
            degree: portfolioData.personal.degree,
            cgpa: portfolioData.personal.cgpa,
            leetcode: "1780+ Rating",
            hackerrank: "5 Stars Python",
            projects: portfolioData.projects.length,
            internships: portfolioData.internships.length
          }
        };

      // --- Easter Eggs ---
      case 'sudo':
        if (args[0] === 'hire' && (!args[1] || args[1] === 'ravi' || args[1] === 'panchal')) {
          return {
            type: 'sudo_hire',
            data: portfolioData.personal,
            content: '🎉 ACCESS GRANTED! Candidate status: Open for Full-Time Roles & Internships. Email: ravi.panchal@example.com'
          };
        }
        return {
          type: 'error',
          content: 'visitor is not in the sudoers file. This incident will be reported. Try "sudo hire ravi" 😉'
        };

      default:
        return {
          type: 'error',
          content: `${cmd}: command not found. Type 'help' or 'guide' for available commands.`
        };
    }
  }
}

