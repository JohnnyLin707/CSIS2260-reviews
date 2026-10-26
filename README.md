# Operating Systems — Review

> 🌐 **Languages / 语言 / 語言**: [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md)

Online link: 🌍 https://johnnylin707.github.io/CSIS2260-reviews/

A static, dependency-free review site for **Operating Systems Quiz 1**. Every lecture slide covered so far has been turned into its own page containing the **verbatim original text**, a **line-by-line Chinese translation**, and a set of **possible exam questions** with answers you can reveal by clicking. Every English line can also be **read aloud**, and on top of the slide pages there are two **write-and-check drills** with answer boxes that are marked automatically.

---

## ✨ Latest additions

- **New deck — `pages/MidtermPracticeSheet.html`** — the whole `ReviewQuestions - Midterm.pdf` as a **printable practice sheet**: all 60 questions (Chapter 1–4), **questions only, no answers**, shown in one monospace code block. Every question has a Chinese note underneath, a **suggested mark (1 mark per answer point)** and **one dotted handwriting line per mark**. Layout is 78 columns wide so it fits **US Letter** with Courier New 10 pt; a “Copy sheet” button puts it on the clipboard, then paste into Word, print and hand-write. The header carries the professor’s format: **60 minutes · 12 questions · 45 marks**, so you can pick any 12 questions worth ~45 marks and time yourself.
- **New deck — `pages/WindowsLabsReview.html` (37 predicted questions)** — bilingual (English + 中文) midterm predictions for the Microsoft Windows labs. The professor hinted that “there may also be one or two questions focusing on the Microsoft Windows based lab1–Lab4.pdf”, so this deck turns `Lab1v2–Lab4v1.pdf` and the correct answers in `jinran1–jinran4.docx` into exam-ready questions: per-lab cheat sheets, 37 click-to-reveal questions with 2–4 sentence answers and the exact tool paths, a Top-6 shortlist for the “only one or two questions” scenario, and three cross-lab comparisons.
- **New review-question decks — `pages/Chapter3Review.html` (12 questions) and `pages/Chapter4Review.html` (7 questions)** — questions 42–60, in the same format as the Chapter 1 and Chapter 2 decks: the original English question with a 中文 translation, and an answer written in the simplest English using the wording of the lecture slides, with a 简体中文 line under every answer. Chapter 3 covers processes, the PCB and process image, traces, creation / termination, all seven process states, control tables, processor state information, user vs. kernel mode, kernel functions, and interrupt vs. trap vs. supervisor call. Chapter 4 covers processes vs. threads, why processes are still needed, where threads beat processes, PCB vs. TCB, threads on a single core, thread states and operations, and why a single thread cannot be suspended.
- **New deck — `pages/chapter4.html`** — Stallings Chapter 4 *Threads*, all **22 slides** with **38 exam questions**: processes vs. threads (unit of resource ownership vs. unit of dispatching), single-threaded and multithreaded approaches, what each thread has on its own and what it shares, the benefits of threads, thread states and the spawn / block / unblock / finish operations, thread synchronization, and user-level (ULT) vs kernel-level (KLT) threads. 22 new slide scans under `Ch04v2a-images/`, so all 254 review pages now open with a full-width scan of the real slide.
- **UNIX Commands & Scripting cheat sheet** — `pages/UnixCommands.html`: the whole lab handout *Introduction to UNIX Commands and Scripting* as one bilingual page — **29 sections, 235 knowledge points**, every English line with a Simplified Chinese translation, and every command shown as a chip.
- **Review-question decks** — `pages/Chapter1Review.html` (18 questions) and `pages/Chapter2Review.html` (23 questions): the original English question with a Chinese translation, and an answer written in the simplest English using the wording of the lecture slides, with a 简体中文 translation under every answer line.
- **New deck — `pages/chapter3.html`** — Stallings Chapter 3 *Process Description and Control*, all **58 slides** with **126 exam questions**: what a process is, the process elements and the process control block, traces and the dispatcher, the two-state and five-state models, process creation and termination, suspended processes, the operating system control tables, process control structures, modes of execution, process switching, and UNIX SVR4 process management.
- **Slide scans for Chapter 3** — 58 new images under `Ch03v2a-images/`, so all 232 review pages now open with a full-width scan of the real slide.
- **Quiz1-Fall-2026** — `pages/Quiz1Fall2026.html` holds the real Fall 2026 quiz: 5 questions (20 marks) with the instruction-cycle simulation diagram stored in `Quiz1diagram/` and 24 auto-marked answer boxes.
- **Top Back / Next buttons** — every slide page and every deck page now has Back / Next at the top as well as at the bottom, so you can page through a deck without scrolling.

---

## Contents

| # | Deck | Source file | Slides | Exam questions |
|---|------|-------------|:------:|:--------------:|
| 01 | Introduction to Computer Hardware / 计算机硬件导论 | `Intro to HW v2.pdf` | 40 (all) | 109 |
| 02 | Chapter 1: Computer System Overview / 第 1 章：计算机系统概述 | `Ch01v2a.pdf` | 59 (all) | 132 |
| 03 | Chapter 2: Operating System Overview / 第 2 章：操作系统概述 | `Ch02v2a.pdf` | 75 (all) | 225 |
| 04 | Chapter 3: Process Description and Control / 第 3 章：进程描述与控制 | `Ch03v2a.pdf` | 58 (all) | 126 |
| 05 | Chapter 4: Threads / 第 4 章：线程 | `Ch04v2a.pdf` | 22 (all) | 38 |
| 06 | Quiz1importantShortAnswer / 测验 1 重点简答题 | Short Questions (17 marks) | — | 4 |
| 07 | Quiz 1 Key Questions / 测验 1 重点回忆题 | Decks 01–05 | — | 25 |
| 08 | Quiz1-Fall-2026 / 2026 年秋季测验 1 真题 | 5 real exam questions (20 marks) | — | 5 |
| 09 | Chapter 1: Review Questions / 第 1 章：复习问答题 | `Ch01v2a.pdf` | — | 18 |
| 10 | Chapter 2: Review Questions / 第 2 章：复习问答题 | `Ch02v2a.pdf` | — | 23 |
| 11 | UNIX Commands & Scripting / UNIX 命令与脚本速查表 | `Introduction to UNIX Commands and Scripting.pdf` | 29 sections | 235 points |
| 12 | Chapter 3: Review Questions / 第 3 章：复习问答题 | `Ch03v2a.pdf` | — | 12 |
| 13 | Chapter 4: Review Questions / 第 4 章：复习问答题 | `Ch04v2a.pdf` | — | 7 |
| 14 | Windows Labs 1–4: Predicted Exam Questions / Windows 实验 1–4：考题预测 | `Lab1v2–Lab4v1.pdf` + `jinran1–4.docx` | — | 37 |
| 15 | Midterm Practice Sheet / 期中考练习卷 | `ReviewQuestions - Midterm.pdf` | — | 60 (re-formatted, see note) |
| | **Total** | | **254** | **761** |

Deck 11 is a command cheat sheet (29 sections, 235 bilingual knowledge points) rather than a slide deck, so it is not counted in the slide and exam-question totals. Deck 15 is the same 60 review questions already counted in decks 09, 10, 12 and 13, re-formatted as a printable practice sheet, so it is not added to the totals either.

### Deck 01 — Introduction to Computer Hardware
Hardware vs. software, binary numbers, PC components, the motherboard, storage devices, buses, BIOS/UEFI, and the electrical system.

### Deck 02 — Chapter 1: Computer System Overview (Stallings)
Basic elements (processor, main memory, I/O modules, system bus), microprocessor evolution, GPUs / DSPs / SoC, instruction execution and the instruction cycle, interrupts (classes, control transfer, multiple interrupts), the memory hierarchy, the principle of locality, secondary memory, cache memory and cache design (block size, mapping function, replacement algorithm, write policy), through to the chapter summary.

### Deck 03 — Chapter 2: Operating System Overview (Stallings)
What an operating system is and what it does as a resource manager, the evolution of operating systems (serial processing → simple batch → multiprogramming → time sharing), major achievements, process concepts and the process table, memory management and virtual memory, scheduling and process states, system architecture and multiprocessor / multicore organisation, fault tolerance, and the Windows, Linux and Android case studies.

### Deck 04 — Chapter 3: Process Description and Control (Stallings)
What a process is and its two essential elements, the process elements held in the process control block, traces and the dispatcher, the two-state and five-state process models, process creation and termination, suspended processes and swapping, the operating system control tables, process control structures and the process image, modes of execution, process switching, and UNIX SVR4 process management.

### Deck 05 — Chapter 4: Threads (Stallings)
Processes vs. threads (the unit of resource ownership vs. the unit of dispatching), the two characteristics of a process, multithreading, single-threaded and multithreaded approaches, what a process provides in a multithreaded environment, what each thread has on its own and what it shares, the benefits of threads and their use in a single-user system, thread states and the operations spawn / block / unblock / finish, thread synchronization, and user-level (ULT) vs kernel-level (KLT) threads.

### Deck 06 — Quiz1importantShortAnswer
Four short-answer questions in the exact style of the quiz (17 marks), answered straight from the slides — each question quotes the **textbook source** with page references and then gives **one answer box per mark**:

| Q | Topic | Source | Marks | Boxes |
|---|-------|--------|:-----:|:-----:|
| 9 | Convert `11001` (binary) to decimal, showing the working | `Intro to HW v2.pdf` p. 7 | 4 | 4 |
| 10 | Four system specifications to evaluate when buying a PC | `Intro to HW v2.pdf` p. 15, 17, 19, 20 | 2 | 4 |
| 11 | What a program counter holds, and when its value increases | `Ch01v2a.pdf` p. 13, 15 | 4 | 4 |
| 12 | The principle of locality in a multilevel memory structure | `Ch01v2a.pdf` p. 33, 35, 36, 37 | 7 | 7 |

### Deck 07 — Quiz 1 Key Questions
A professor-style consolidated recall quiz: **25 questions / 84 marks**, one mark per answer point, covering basic elements, the processor and its registers, the instruction cycle, interrupts, the memory hierarchy, cache design, the computer's internal hardware and the operating-system overview. Click any question to reveal its English + 中文 model answer.

### Deck 08 — Quiz1-Fall-2026
The real Fall 2026 quiz: **5 questions / 20 marks** — components of a modern microprocessor besides the CPU, BIOS and UEFI, primary vs. secondary storage, the instruction-cycle simulation diagram (cells A–L, image in `Quiz1diagram/`), and three classes of interrupts. Every answer point gets its own auto-marked box.

### Deck 09 — Chapter 1: Review Questions
The **18** Chapter 1 review questions (four basic elements of a computer, primary vs. secondary memory, I/O device types, GPU / DSP / cache, SoC, interrupts and their classes, the memory hierarchy, the principle of locality, cache design tradeoffs, LRU, programmed / interrupt-driven / DMA I/O, SMP and multicore). Questions are shown in English with a Chinese translation; answers are written in the simplest English using the words of the lecture slides, with a 简体中文 line under every answer.

### Deck 10 — Chapter 2: Review Questions
The **23** Chapter 2 review questions (ISA / ABI / API, why operating systems evolve, serial → batch → multiprogramming → time sharing, JCL, memory protection / timers / privileged instructions / interrupts, user vs kernel mode, processes, memory management, virtual memory paging, security, scheduling priorities, interrupt vs service call, monolithic vs microkernel, multithreading, SMP vs distributed systems, fault-tolerance measures, fault types, Windows fault tolerance). Same format: English question + 中文, simple English answer + 简体中文.

### Deck 11 — UNIX Commands & Scripting
A bilingual cheat sheet for the lab handout *Introduction to UNIX Commands and Scripting*: getting help (`man`, `whatis`, `apropos`), listing / making / changing directories (`ls`, `mkdir`, `cd`, `.`, `..`, `pwd`, `~`), copying / moving / removing (`cp`, `mv`, `rm`, `rmdir`), displaying files (`cat`, `less`, `head`, `tail`), tab completion and command history, searching (`grep`, `wc`), wildcards (`*`, `?`), redirection (`>`, `>>`, `<`) and pipes (`|`), access rights and `chmod`, processes and jobs (`&`, `^Z`, `bg`, `jobs`, `fg`, `kill`), and other useful commands (`df`, `du`, `compress`, `gzip`, `file`, `history`). Every point has a Simplified Chinese translation underneath.

### Deck 12 — Chapter 3: Review Questions
Questions **42–53** (12 questions): what a process is, three elements of a process control block and three of a process image, a process trace and the dispatcher, four ways a process is created, the ways a process ends, all seven process states (New, Ready, Running, Blocked, Ready/Suspend, Blocked/Suspend, Exit) and the transitions between them, the resources tracked by the OS control tables, processor state information (for example the PSW), user vs. system (kernel) mode, kernel functions vs. functions outside the kernel, the steps of process creation, and interrupt vs. trap vs. supervisor call. Same format: English question + 中文, simple English answer + 简体中文.

### Deck 13 — Chapter 4: Review Questions
Questions **54–60** (7 questions): processes vs. threads (unit of resource ownership vs. unit of dispatching), why processes are still needed in a threaded OS, three examples where threads beat separate processes, PCB vs. thread control block information, whether threads make sense on a single CPU core, thread states and the spawn / block / unblock / finish operations, and why an individual thread cannot be suspended. Same format: English question + 中文, simple English answer + 简体中文.

### Deck 14 — Windows Labs 1–4: Predicted Exam Questions
**37 predicted questions**, each English sentence followed by a 中文 translation in parentheses, built from the four lab handouts `Lab1v2.pdf`, `Lab2v2.pdf`, `Lab3.pdf`, `Lab4v1.pdf` and the correct submitted answers `jinran1–jinran4.docx`, after the professor's hint that “there may also be one or two questions focusing on the Microsoft Windows based lab1–Lab4.pdf”. Lab 1: system information, Settings, display resolution, storage, Recovery. Lab 2: VirtualBox and Type 2 hypervisors, .ova import, virtual vs. actual disk size, MAC addresses, Standard vs. Administrator. Lab 3: paging file and virtual memory, Resource Monitor (four resources, hard faults), Performance Monitor and `winsat`, the five Basic System Checks, DHCP/LSM/SPOOLER, threads vs. processes, Task Manager. Lab 4: Disk Management and partitions, NTFS, defragmentation (HDD vs. SSD), Disk Cleanup, restore points, WinRE / Advanced Startup and the recovery and Startup Settings options. Plus three cross-lab comparison questions and a Top-6 shortlist. Every English sentence, bullet and panel heading has a 中文 translation in parentheses directly underneath it.

### Deck 15 — Midterm Practice Sheet
The complete `ReviewQuestions - Midterm.pdf` — **all 60 questions** (Ch 1: 1–18, Ch 2: 19–41, Ch 3: 42–53, Ch 4: 54–60) — as a **printable practice sheet with no answers**. Each question shows: the English question, a **中文 note** underneath, a **suggested mark** (1 mark per answer point, 225 marks in total, average 3.75 per question), and **one dotted handwriting line per mark**. Questions with sub-parts (Q4, Q14, Q23, Q43, Q51, Q57) are laid out as `a) b) c)` rows, each with two writing lines. The whole sheet is one monospace block, 78 columns wide, so it drops straight into **Microsoft Word** (Courier New, 10 pt) and prints on **US Letter**; the page also has its own `@page { size: Letter }` print styles and a **Copy sheet** button. Header block carries the professor's exam format — **60 minutes · 12 questions · 45 marks** — plus a tip to simulate the exam by picking 12 questions worth about 45 marks.

---

## Features

- **Slide-by-slide pages** — one HTML page per slide, 254 in total across five decks.
- **The real slide image** — a full-width scan of the actual slide at the top of every page (254 images). Plain display: not clickable, and always scaled to fit the screen width.
- **Back / Next at the top and the bottom** — page through a whole deck without scrolling back down.
- **Responsive navigation bar** — a sticky, collapsible menu at the top of the home page. On desktop every chapter opens as a dropdown (slides + review questions); on phones the whole row collapses behind a hamburger button and each group becomes an accordion, so you can jump straight to the chapter you want to revise.
- **Bilingual** — every original line is followed by its Chinese translation.
- **Read-aloud** — a speaker button after the title and after every English line reads it with the built-in Web Speech API (Chinese lines are skipped).
- **Textbook answers highlighted** — model answers on warm highlight chips, slide points on numbered low-glare cards, Chinese lines on soft mint chips.
- **Exam-style Q&A** — 686 click-to-reveal questions with answers and source references on the slide pages, 25 recall questions on the key-questions page, 4 short-answer drills with answer boxes, and the 5-question Fall 2026 quiz.
- **Write-and-check drills** — one input box per answer point, marked automatically: order does not matter, English or 中文 both accepted, missing keywords are reported.
- **Searchable navigation** — a collapsible sidebar with live filtering, plus a keyword filter on each deck page.
- **Keyboard shortcuts** — `←` previous slide, `→` next slide, `Esc` back to home.
- **Progress bar** — shows how far you are through a deck.
- **Responsive & animated** — scroll reveals, orbs background, ripple effects, page transitions.
- **Zero dependencies** — plain HTML / CSS / vanilla JavaScript. No build step, no npm, no framework.

---

## Practice drills

| Drill | Where | Questions | Boxes |
|-------|-------|:---------:|:-----:|
| Instruction-cycle fill-in-the-blanks | home page — `index.html` | 10 | 12 |
| Quiz1importantShortAnswer | `pages/Quiz1importantShortAnswer.html` | 4 | 19 |

Both drills mark what you write automatically:

- **One box per standard answer point** — the number of boxes always matches the number of marks.
- **Order does not matter** — any box can be matched to any unused point.
- **Tolerant marking** — capitalisation, spacing and full sentences are not graded; English and 中文 are both accepted, and paraphrases pass.
- **Short forms count** — `25` is accepted for *11001 in binary equals 25 in decimal*, `RAM` for *Memory (RAM) size*.
- **Missing keywords are listed** so you know exactly what to memorise.
- **Controls** — `Check` marks everything, `Show answers` reveals the model answers, `Clear` / `Reset` start over, `Ctrl`+`Enter` checks quickly.

---

## Project structure

```
CSIS-2260review/
├── index.html                 # Home page — pick a deck + the 10-question drill
├── css/
│   └── style.css              # All styling (dark theme, answer highlighting, drills)
├── javascript/
│   ├── main.js                # Reveals, Q&A accordion, filtering, sidebar, shortcuts
│   ├── animations.js          # Background orbs / grid / typing effects
│   ├── speech.js              # Read-aloud via the Web Speech API
│   ├── quiz.js                # Write-and-check engine: auto-marking, keyword matching
│   └── home-quiz.js           # Home-page 10-question fill-in-the-blank drill
├── pages/
│   ├── intro-hw.html          # Deck 01 index (all 40 slides)
│   ├── intro-hw/
│   │   └── page-01 … page-40.html
│   ├── chapter1.html          # Deck 02 index (all 59 slides)
│   ├── chapter1/
│   │   └── page-01 … page-59.html
│   ├── chapter2.html          # Deck 03 index (all 75 slides)
│   ├── chapter2/
│   │   └── page-01 … page-75.html
│   ├── chapter3.html          # Deck 04 index (all 58 slides)
│   ├── chapter3/
│   │   └── page-01 … page-58.html
│   ├── chapter4.html          # Deck 05 index (all 22 slides)
│   ├── chapter4/
│   │   └── page-01 … page-22.html
│   ├── Quiz1importantShortAnswer.html   # Deck 06 — 4 short questions, 19 answer boxes
│   ├── Quiz1keyQuestions.html           # Deck 07 — 25 recall questions (84 marks)
│   ├── Quiz1Fall2026.html               # Deck 08 — Fall 2026 quiz, 20 marks
│   ├── Chapter1Review.html              # Deck 09 — 18 Ch.1 review questions
│   ├── Chapter2Review.html              # Deck 10 — 23 Ch.2 review questions
│   ├── UnixCommands.html                # Deck 11 — UNIX commands cheat sheet (29 sections)
│   ├── Chapter3Review.html              # Deck 12 — 12 Ch.3 review questions (Q42-Q53)
│   ├── Chapter4Review.html              # Deck 13 — 7 Ch.4 review questions (Q54-Q60)
│   ├── WindowsLabsReview.html           # Deck 14 — 37 predicted Windows Labs 1-4 questions
│   └── MidtermPracticeSheet.html        # Deck 15 — printable practice sheet (60 questions, 225 marks)
├── Ch01v2a-images/            # Slide scans for deck 02 (59 images)
├── Ch02v2a-images/            # Slide scans for deck 03 (75 images)
├── Ch03v2a-images/            # Slide scans for deck 04 (58 images)
├── Ch04v2a-images/            # Slide scans for deck 05 (22 images)
├── Quiz1diagram/              # The Fall 2026 instruction-cycle simulation image
├── Intro to HW v2-images/     # Slide scans for deck 01 (40 images)
└── .gitignore                 # ignores .DS_Store and temporary *.zip files
```

---

## Usage

### Option A — open directly
Double-click `index.html` to open it in your browser. This works, but some browsers restrict `file://` navigation.

### Option B — local server (recommended)
```bash
cd CSIS-2260review
python3 -m http.server 8000
# then open http://localhost:8000
```

### Option C — GitHub Pages
Push the repository, then go to **Settings → Pages → Build and deployment → Deploy from a branch** and select `main` / `/ (root)`. The site will be published at `https://<username>.github.io/<repository>/`.

---

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous slide |
| `→` | Next slide |
| `Esc` | Back to the home page |

---

## Notes

- Content is excerpted verbatim from the course lecture slides (`Intro to HW v2.pdf`, `Ch01v2a.pdf`, `Ch02v2a.pdf`, `Ch03v2a.pdf`, `Ch04v2a.pdf`) and the lab handout `Introduction to UNIX Commands and Scripting.pdf`; the PDFs themselves are **not** included in this repository (`.gitignore` ignores `*.pdf`). The images under `Intro to HW v2-images/`, `Ch01v2a-images/`, `Ch02v2a-images/` and `Ch03v2a-images/` are page scans extracted from those PDFs.
- Translations, exam questions and model answers are study aids generated for review purposes — always cross-check against the official slides and your instructor's guidance before the quiz.
- The answer checking is keyword based and deliberately forgiving, so it is a memorisation aid, not a strict grader: a box marked ✓ still means "you reproduced the point", not "this is the only correct wording".

---

Built for Operating Systems (course 2260) Quiz 1 preparation.
