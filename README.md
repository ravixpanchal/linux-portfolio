# 💻 Linux-Style Terminal Portfolio | Ravi Panchal

An interactive, high-fidelity, web-based **Ubuntu Linux Desktop & Terminal Portfolio** built with **React 19**, **Vite**, and **Tailwind CSS**. Designed for engineering managers, recruiters, developers, and tech enthusiasts who appreciate a sleek Linux terminal interface paired with modern visual web capabilities.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 🌟 Key Features

- 🐧 **Ubuntu Linux Terminal Simulator**: Custom command line engine with UNIX utility emulation (`ls`, `cd`, `cat`, `pwd`, `clear`, `grep`, `find`, `tree`, `man`, `history`, `whoami`, `neofetch`).
- 🎨 **Multiple Terminal Color Themes**: On-the-fly theme switching (`yaru`, `matrix`, `dracula`, `nord`, `cyberpunk`).
- 📁 **Interactive Virtual File System (VFS)**: Hierarchical folder structure representing portfolio sections (Bio, Projects, Experience, Skills, Education, Achievements, Blogs).
- 👔 **1-Click Recruiter Fast-Track View**: Clean graphical overlay modal for instant, non-command navigation.
- 📊 **Live Coding Stats & Heatmap**: Integrated widget displaying GitHub activity and LeetCode problem-solving stats.
- ⚡ **Command Autocomplete & Suggestions**: Interactive tab key completion, syntax highlighting, and clickable quick-command chips.
- 📜 **Command History**: Cycle through prior execution history using `Up` and `Down` arrow keys.
- 🟢 **Matrix Digital Rain Canvas**: Toggleable matrix background animation effect.
- 📱 **Responsive & Mobile Ready**: Desktop experience with adaptive quick-action bars for mobile screens.
- 🎁 **Secret Easter Eggs**: Try running `sudo hire ravi`!

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 19 (JSX)
- **Styling**: Tailwind CSS v4, PostCSS, Custom Yaru Design System
- **Build Tool**: Vite 8
- **Icons**: Lucide React & Material Symbols
- **State & VFS**: Custom React Hooks & Virtual File System Engine

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ravixpanchal/linux-portfolio.git
   cd linux-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your web browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🎮 Command Reference

| Command | Category | Description |
| :--- | :--- | :--- |
| `help` | General | Display full command directory and usage tips |
| `guide` | General | Step-by-step interactive portfolio walkthrough |
| `recruiter` | Navigation | Launch executive visual overview modal |
| `theme [yaru\|matrix\|dracula\|nord\|cyberpunk]` | Customization | Switch terminal color theme palette |
| `matrix` | Visuals | Toggle Matrix green digital rain background effect |
| `ls [dir]` | Navigation | List files and folders in directory |
| `cd <dir>` | Navigation | Change working directory (`cd ..`, `cd ~`, `cd projects`) |
| `pwd` | Navigation | Print absolute path of current working directory |
| `cat <file>` | Files | Output contents of a file or project details card |
| `grep [-i] "query"` | Files | Search pattern strings across virtual files |
| `find [name]` | Files | Recursively search files and directories |
| `tree [dir]` | Files | Display recursive directory tree visualization |
| `man <cmd>` | Help | View manual pages for specific unix commands |
| `intro` | Portfolio | Display personal summary & background |
| `projects` | Portfolio | View technical projects & live repository links |
| `internships` | Portfolio | View work experience & industrial training |
| `skills` | Portfolio | Display AI/ML, Programming, and Tool technical stack |
| `education` | Portfolio | Display academic profile & degree details |
| `stories` | Portfolio | Read engineering project deep-dives & architecture |
| `coding` / `stats` | Portfolio | View live GitHub & LeetCode profile analytics |
| `achievements` | Portfolio | View awards, certifications, and research publications |
| `activities` | Portfolio | View leadership & community roles |
| `blogs` | Portfolio | View technical write-ups and publications |
| `resume` | Portfolio | Display resume summary and direct download link |
| `contact` | Portfolio | Display contact links (Email, LinkedIn, GitHub) |
| `neofetch` | System | Output system information with ASCII art logo |
| `whoami` | System | Print active user session role |
| `history` | System | View session command execution history |
| `clear` | System | Clear terminal screen output buffer |
| `sudo hire ravi` | Easter Egg | Trigger recruitment response animation |

---

## 📂 Project Structure

```
Linux-Style-Portfolio/
├── src/
│   ├── components/            # React UI Components
│   │   ├── CodingStatsWidget.jsx    # Live GitHub/LeetCode stats & heatmap
│   │   ├── CommandSuggestions.jsx   # Quick command chips & suggestion bar
│   │   ├── DesktopIcons.jsx         # Ubuntu desktop background icons
│   │   ├── Footer.jsx               # Bottom system status bar & links
│   │   ├── MatrixRain.jsx           # Matrix digital rain canvas renderer
│   │   ├── RecruiterModal.jsx       # Graphical GUI overlay modal
│   │   ├── SideNavBar.jsx           # Desktop left docked launcher
│   │   ├── TerminalInput.jsx        # Command prompt input line with autocomplete
│   │   ├── TerminalOutput.jsx       # Specialized command output renderers
│   │   ├── TopAppBar.jsx            # Ubuntu header with live clock & status indicators
│   │   └── UbuntuTerminal.jsx       # Main draggable/resizable window wrapper
│   ├── data/                  # Virtual File System & Portfolio Datasets
│   │   ├── portfolioData.js         # Bio, projects, experience, skills data
│   │   └── virtualFileSystem.js     # VFS node tree definitions
│   ├── hooks/                 # Custom React Hooks
│   │   └── useTerminal.js           # Terminal state, input history, themes & execution
│   ├── utils/                 # Core Business Logic & Command Engines
│   │   ├── CommandProcessor.js      # Parser & execution engine for commands
│   │   ├── FileSystemEngine.js      # Virtual File System traversal engine
│   │   └── codingStatsApi.js        # API fetch logic for coding profiles
│   ├── App.jsx                # Main Application Frame Component
│   ├── index.css              # Global Yaru design tokens & CSS resets
│   └── main.jsx               # Application Entry Point
├── index.html                 # HTML Root Entry
├── tailwind.config.js         # Tailwind CSS v4 Configuration
├── vite.config.js             # Vite Build Tool Configuration
├── DESIGN.md                  # Comprehensive Design System Specification
└── package.json               # Dependencies & NPM Scripts
```

---

## 👤 Author

**Ravi Panchal**
- **Role**: AI/ML Engineer & Full Stack Developer
- **GitHub**: [@ravixpanchal](https://github.com/ravixpanchal)
- **LinkedIn**: [Ravi Panchal](https://www.linkedin.com/in/ravixpanchal/)

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
