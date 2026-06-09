# Company OS

An internal, portable company operating system. It is tied to the codebase: the repo's context
files (CLAUDE.md, MASTERPLAN.md, COMPANY.md, etc.) are the knowledge base, and this OS is the
structured, visual layer over them. Claude Code is the agent layer that keeps it in sync.

Not a product, not part of the iron.credit website. An internal tool you dogfood, and may one day
spin out (the Slack-from-Glitch, Discord-from-a-gaming-company pattern).

## What is here
- `company-os.data.js` — the single source of truth (mission, money, metrics, goals, products,
  roadmap, org, weekly history, and the list of knowledge-base files). Plain data.
- `index.html` — a zero-dependency dashboard that reads the data file and renders money, runway,
  founder level, streak, trend sparklines, goals, products, the gated roadmap, the org chart, and
  links to every context file. No build step.

## How to use it
1. Open `index.html` (double-click, or serve the folder). It renders your company at a glance.
2. To update, edit `company-os.data.js`, or ask Claude Code: "log this week", "check off
   'Waitlist captures emails'", "set waitlist to 40", "mark the prototype goal done". Claude edits
   the data file; refresh to see it.
3. Each week, ask Claude to append a snapshot to `history` so the trend charts grow.

## How it is tied to the codebase (the knowledge base)
The `knowledgeBase` array in the data file lists the repo's context files. The dashboard links to
them, and Claude reads them to keep the structured data honest. The codebase is the brain; this OS
is the dashboard.

## Porting to any company
Copy this `company-os/` folder into any repo, then ask Claude to rewrite `company-os.data.js` from
that repo's context files. That is the "import into any company Claude codebase" model.

## Privacy
The finance numbers in `company-os.data.js` are placeholders. If your real numbers are sensitive,
add `company-os/company-os.data.js` to `.gitignore` so they stay local and are never pushed.
