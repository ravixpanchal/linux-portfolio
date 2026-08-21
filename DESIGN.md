# DESIGN.md - Ravi Linux Portfolio Design System & Architecture Specification

## 1. Executive Summary & Design Philosophy

The **Ravi Linux Portfolio** design system is inspired by the **Ubuntu Terminal & Yaru Dark Desktop Experience** ("Kinetic Terminal" meets Modern Brutalist Desktop). It bridges authentic Linux command-line interaction with modern web design standards—featuring backdrop blur glassmorphism, responsive windowing, tonal color layering, and vibrant Ubuntu brand highlights.

* **Stitch Project Reference:** `projects/6101100473198546317` ("Ubuntu Terminal Portfolio" / "Ravi Linux Portfolio")
* **Target Experience:** Developer-centric, high-fidelity terminal environment that functions both as an interactive command-line interface and a sleek visual portfolio.

---

## 2. Color Palette & Token System

### Base Desktop Wallpaper Environment
* **Outer Background Color:** `#11050E` (Deep Night Aubergine)
* **Radial Gradient Background:** `radial-gradient(circle at center, #28051e 0%, #11050E 100%)`
* **Desktop Backdrop Image Overlay:** Subdued high-tech network node background at `15%` opacity with `mix-blend-mode: luminosity`.

### Material Design & Yaru Color Tokens

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `background` / `surface` / `surface-dim` | `#28051e` | Base Canvas / Deep Aubergine |
| `primary` / `surface-tint` | `#f2b5d6` | Highlights, Command Titles, Primary Accents |
| `primary-container` | `#300a24` | Main Terminal Surface (Ubuntu Terminal Base) |
| `on-primary` | `#4c223c` | Text on Primary Fill |
| `secondary` | `#ffb59e` | Soft Warm Orange Highlight |
| `secondary-container` | `#c33900` | Ubuntu Orange Active Container Fill |
| `on-secondary-container` | `#ffe7e0` | Text on Secondary Container |
| `tertiary` | `#8adb4d` | Linux Green (Prompt Symbol, Executables, Success) |
| `tertiary-container` | `#0a1e00` | Dark Green Container Base |
| `surface-container-lowest` | `#220218` | Sidebar Background / Scrollbar Track |
| `surface-container-low` | `#320e26` | Card Surfaces / Bottom Header Gradient |
| `surface-container` | `#37122b` | Intermediate Container Surface |
| `surface-container-high` | `#431c36` | Top Header Gradient / Mobile Bar Fill |
| `surface-container-highest` | `#502741` | Terminal Outer Border / Scrollbar Thumb |
| `surface-variant` | `#502741` | Chip & Card Tag Background |
| `surface-bright` | `#552b45` | Hover State Surfaces |
| `outline` | `#9c8d93` | Soft Component Outline |
| `outline-variant` | `#4f4449` | Divider & Window Header Borders |
| `on-surface` | `#ffd8eb` | Main Text (Pink-Tinted Warm White) |
| `on-surface-variant` | `#d3c2c9` | Muted Text, Directory File Outputs |
| `error` | `#ffb4ab` | Error Alerts |
| `error-container` | `#93000a` | Deep Red Error Container |

### Terminal Window Window-Control Colors
* **Close Button (`.close-btn`):** `#E95420` (Ubuntu Orange-Red)
* **Minimize Button (`.min-btn`):** `#AEA79F` (Ubuntu Warm Grey)
* **Maximize Button (`.max-btn`):** `#4E9A06` (Linux Green)

### Syntax & Output Color Scheme
* **Prompt Host (`.prompt`):** `#8adb4d` (`visitor@ravi-portfolio`)
* **Prompt Path (`.path`):** `#804f6c` (`~` or `~/projects`)
* **Directories (`.dir`):** `#804f6c` (Bold Deep Violet)
* **Regular Files (`.file`):** `#d3c2c9` (Muted Warm White)
* **Executables (`.exec`):** `#8adb4d` (Bold Green)
* **ASCII Art Header:** `#ffb59e` (Orange-Peach Tint)

---

## 3. Typography System

### Font Families
* **Primary Monospace (Terminal, Code, Commands):** `'JetBrains Mono', monospace`
* **Secondary Sans-Serif (Window Titles, System Time, Labels):** `'Fira Sans', sans-serif`
* **System Symbols:** `'Material Symbols Outlined'`

### Typography Scale Definition

| Class Name | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `headline-xl` | JetBrains Mono | 40px | 700 | 1.2 | -0.02em |
| `headline-lg` | JetBrains Mono | 32px | 700 | 1.2 | normal |
| `headline-lg-mobile` | JetBrains Mono | 24px | 700 | 1.2 | normal |
| `body-md` | JetBrains Mono | 16px | 400 | 1.6 | normal |
| `terminal-input` | JetBrains Mono | 16px | 500 | 1.2 | normal |
| `code-block` | JetBrains Mono | 14px | 400 | 1.5 | normal |
| `label-sm` | Fira Sans | 12px | 500 | 1.2 | 0.05em |

---

## 4. Spacing System & Geometry Tokens

### Spacing Scale
* `unit`: `4px`
* `xs`: `4px`
* `sm`: `8px`
* `md`: `16px`
* `lg`: `24px`
* `xl`: `48px`
* `gutter`: `16px`
* `container-max`: `1200px`

### Corner Radii
* `DEFAULT`: `0.125rem` (2px)
* `lg`: `0.25rem` (4px - Standard terminal window)
* `xl`: `0.5rem` (8px - Sidebar icons)
* `full`: `0.75rem` / `9999px` (Pills, badges, profile avatar)

---

## 5. Layout Structure & Framing

```
+-------------------------------------------------------------------------+
| TopAppBar (Fixed 48px)  visitor@portfolio:~      Oct 24 14:32  [wifi][bat]|
+--------+----------------------------------------------------------------+
|        |                                                                |
| Side   |  Main Canvas (Desktop Wallpaper + Centered Terminal Window)    |
| Nav    |                                                                |
| Dock   |  +----------------------------------------------------------+  |
| (80px) |  | Terminal Header: controls (●●●)  visitor@ravi-portfolio  |  |
|        |  +----------------------------------------------------------+  |
| [Home] |  | Terminal Body:                                           |  |
| [Proj] |  |   Welcome to Ubuntu 22.04 LTS...                         |  |
| [Tree] |  |   visitor@ravi-portfolio:~$ cat about.txt                |  |
| [Set]  |  |   Hi, I'm Ravi Panchal...                                |  |
|        |  |                                                          |  |
| (RP)   |  +----------------------------------------------------------+  |
|        |                                                                |
+--------+----------------------------------------------------------------+
| Footer (Fixed 36px) © 2024 ravi-panchal:~$    [GitHub] [LinkedIn] [Resume]|
+-------------------------------------------------------------------------+
```

### Component Details
1. **TopAppBar Header (`<header>`):**
   - Fixed top, height `48px` (`h-xl`), `z-50`, `bg-surface/85 backdrop-blur-md border-b border-outline-variant`.
   - Left: User indicator (`visitor@portfolio:~`).
   - Center (Desktop): System Time Widget (`Oct 24 14:32`).
   - Right: System icons (WiFi, Battery, Calendar).

2. **SideNav Dock (`<nav>`):**
   - Fixed left docked below header (`top: 48px`, width `80px` / `w-20`, `z-40`).
   - `bg-surface-container-lowest/90 backdrop-blur-xl border-r border-outline-variant`.
   - Navigation Buttons: Terminal (Active with `border-l-4 border-secondary`), Projects, FileSystem, Settings.
   - Bottom: Profile avatar (`RP`) with hover tooltip revealing full name and title.

3. **Terminal Window (`.ubuntu-terminal`):**
   - Background `#300a24`, border `1px solid #502741`, shadow `0 25px 50px -12px rgba(0,0,0,0.5)`.
   - Max width `1000px`, desktop height `600px`.
   - Header Bar: Height `36px`, background gradient `#431c36` to `#320e26`, window controls (`close`, `min`, `max`), title `visitor@ravi-portfolio: ~`.
   - Custom Scrollbar: 8px width, track `#220218`, thumb `#502741`.

4. **Footer (`<footer>`):**
   - Fixed bottom, height `36px`, `bg-surface-dim border-t border-outline-variant`.
   - Copyright prompt on left, external links on right (GitHub, LinkedIn, Resume in green underline).

---

## 6. Terminal Component Hierarchy & Output Renderers

### Interactive Input Line Component (`.input-line`)
```html
<div class="input-line">
  <span class="prompt">visitor@ravi-portfolio</span>:<span class="path">~</span>$
  <input type="text" class="command-input" autofocus spellcheck="false" autocomplete="off">
</div>
```

### Rich Output Component Renderers

1. **Project Card Renderer (`cat projects/<name>.txt`):**
   - Styled box with `bg-surface-container-low border border-outline-variant rounded p-4`.
   - Tech stack tags rendered as `bg-surface-variant text-on-surface-variant text-xs px-2 py-1 rounded-full`.

2. **Neofetch System Info Renderer (`neofetch`):**
   - ASCII Art logo on left in `#ffb59e`.
   - System details on right (`OS`, `Host`, `Kernel`, `Uptime`, `Shell`, `Resolution`, `Theme`, `CPU`, `Memory`).
   - Yaru color block test swatches (`#28051e`, `#c33900`, `#499300`, `#804f6c`, `#9c8d93`, `#ffd8eb`).

3. **Directory Listing (`ls`):**
   - Formatted list separating directories (`.dir`), files (`.file`), and scripts (`.exec`).

---

## 7. Virtual File System & Command Architecture

### Virtual File System Structure (`fileSystem`)
* `~` (Home Directory)
  * `about.txt`: Personal bio, degree info (B.Tech AI & DS, CGPA 8.42), role interest.
  * `achievements.txt`: Hackathon wins, AWS certification, research publication.
  * `projects/`
    * `osteoporosis-ai.txt`
    * `railway-safety.txt`
    * `x-automation.txt`
    * `gst-ai-insights.txt`
  * `skills/`
    * `programming.txt`
    * `ai-ml.txt`
    * `tools.txt`
  * `internships/`
    * `bisag-n.txt`
    * `aai.txt`
    * `drm-jhansi.txt`

### Command Processor Matrix
* `help`: Display list of available commands.
* `ls [path]`: List directory contents with syntax color coding.
* `cd [path]`: Change directory (`~`, `..`, subdirectory).
* `cat <file>`: Display file contents or project cards.
* `whoami`: Output user persona details.
* `neofetch`: Output system information & ASCII art.
* `clear`: Clear output buffer.
* `stats`: Output GitHub & coding metrics.
* `sudo hire ravi`: Trigger secret onboarding animation and external link.

---

## 8. Responsive Behavior & Adaptation Rules

* **Desktop (>= 768px):**
  - SideNav dock is visible (`w-20`).
  - Terminal window is centered with fixed dimensions (`max-w-[1000px]`, `h-[600px]`, `rounded-xl`).
  - Header displays centered date/time clock.

* **Mobile (< 768px):**
  - SideNav dock is hidden (`hidden md:flex`).
  - Main container padding shrinks: `60px 16px 16px 16px`.
  - Terminal window expands to 100% width and height with zero border-radius (`w-full h-full rounded-0`).
  - **Mobile Suggestion Bar:** Appears at the bottom of the terminal window with quick tap buttons (`help`, `ls`, `about`, `neofetch`) for touch accessibility.

---

## 9. Animation & Motion Design Guidelines

1. **Blinking Terminal Caret:**
   ```css
   @keyframes blink {
       0%, 100% { opacity: 1; }
       50% { opacity: 0; }
   }
   .blinking-cursor {
       animation: blink 1s step-end infinite;
   }
   ```
2. **Dock Button Hover Transitions:**
   - Smooth `transition-all` on icon color shift and background expansion (`bg-surface-container-high`).
3. **Profile Tooltip Overlay:**
   - `opacity-0 group-hover:opacity-100 transition-opacity` with slight left offset.
4. **Sudo Command Onboarding Sequence:**
   - Text pulse animation (`animate-pulse`) with delayed window redirect.
