# 💻 Linux-Style Terminal Portfolio | Ravi Panchal

An interactive, responsive, web-based **Ubuntu Linux Terminal Portfolio** built with **React 19**, **Vite**, and **Tailwind CSS**. Designed for developers, recruiters, and tech enthusiasts who appreciate a sleek command-line interface paired with modern web capabilities.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 🌟 Key Features

- 🐧 **Full Linux Terminal Simulator**: Interactive custom shell with support for standard UNIX-like commands (`ls`, `cd`, `cat`, `pwd`, `clear`, `grep`, `find`, `echo`, `mkdir`, `touch`, `rm`, `sudo`, etc.).
- 📁 **Virtual File System**: Complete directory tree representing portfolio sections (About, Projects, Experience, Skills, Education, Certifications).
- 👔 **Recruiter Fast-Track Mode**: Accessible UI modal for quick navigation without needing to type terminal commands.
- ⚡ **Auto-suggestions & Command Autocomplete**: Command completion with `Tab` key and interactive suggestion chips.
- 📜 **Command History**: Navigate command history easily with `Up` and `Down` arrow keys.
- 📊 **Live Coding Stats**: Integrated LeetCode, GitHub, and competitive programming statistics widget.
- 🟢 **Matrix Rain Animation**: Toggleable cool Matrix digital rain background canvas effect.
- 📱 **Fully Responsive Layout**: Designed to work seamlessly across desktops, tablets, and mobile devices.
- 🖥️ **Ubuntu Desktop UI**: Authentically crafted top navigation bar, side dock, desktop icons, and customizable terminal window.

---

## 🛠️ Built With

- **Frontend**: React 19, JSX
- **Styling**: Tailwind CSS v4, PostCSS, Autoprefixer
- **Build Tool**: Vite 8
- **Icons**: Lucide React

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ravixpanchal/linux-portfolio.git
   cd linux-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to explore the terminal portfolio.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🎮 Terminal Commands

Here are some of the key terminal commands available in the interface:

| Command | Description |
| :--- | :--- |
| `help` / `guide` | Display list of available commands and usage guide |
| `ls [-l]` | List files and directories |
| `cd <dir>` | Change directory |
| `cat <file>` | Display content of a file |
| `pwd` | Print current working directory |
| `clear` | Clear the terminal screen |
| `matrix` | Toggle the Matrix rain background effect |
| `stats` | View live coding profile statistics |
| `recruiter` | Open the interactive Recruiter / GUI overview modal |
| `theme` | Toggle terminal color theme |
| `sudo` | Special permission command (Easter egg) |

---

## 📂 Project Structure

```
linux-portfolio/
├── src/
│   ├── components/       # UI components (Ubuntu Terminal, Recruiter Modal, Top Bar, Dock, etc.)
│   ├── data/             # Portfolio content and virtual filesystem data
│   ├── hooks/            # Custom React hooks (useTerminal)
│   ├── utils/            # Command processor, filesystem engine, API helpers
│   ├── App.jsx           # Main application root component
│   ├── index.css         # Global CSS styles & Tailwind configuration
│   └── main.jsx          # Entry point
├── index.html            # Single page HTML entry
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite build tool setup
└── package.json          # Project dependencies & npm scripts
```

---

## 👤 Author

**Ravi Panchal**
- **Title**: AI/ML Engineer
- **GitHub**: [@ravixpanchal](https://github.com/ravixpanchal)
- **LinkedIn**: [Ravi Panchal](https://www.linkedin.com/in/ravixpanchal/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
