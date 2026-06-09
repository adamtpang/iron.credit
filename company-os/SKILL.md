# Company OS (skill)

A portable, JSON-config company operating system. The fundamentals are universal (every company
has a mission, a problem, money, metrics, a roadmap, an org). The founder fills in the blanks.
Claude is the agent that operates it. Inspired by Tobi Lutke's JSON-config company OS and by
Bridgewater's "principles encoded as software."

## The model
- The **codebase is the knowledge base** (the context .md files).
- `company-os.data.js` is the **single JSON-style config and state file** (the source of truth).
- `index.html` is a zero-dependency dashboard that renders the state. No build step.
- **Claude is the runtime:** the founder talks, Claude updates the config and the knowledge base.

## The schema (universal fundamentals + company-specific blanks)
`window.COMPANY_OS = { ... }` with these universal fields (every company fills the blanks):
- `company`, `tagline`, `mission`, `problem`, `northStar`
- `finances`: `{ income, expenses, savings }` (monthly income, monthly expenses, cash)
- `metrics`: the 3 to 5 input metrics the founder controls weekly
- `goals`: quarterly goals `[{ text, done }]`
- `products`: the product line `[{ name, status }]` (Live / Building / Next / Later)
- `roadmap`: gated stages `[{ stage, items:[{ label, done }] }]`
- `org`: functions `[{ fn, now, next }]`
- `history`: weekly snapshots `[{ t, waitlist, savings, ... }]` (Claude appends one per week)
- `knowledgeBase`: the context files this OS is tied to `[{ file, desc }]`
Founders may add custom metrics, stages, or fields. The fundamentals stay; the specifics flex.

## Commands Claude follows (when the user asks, in plain language)
- **"set up the company OS here" / "init"**: copy the `company-os/` folder into the repo, then run the interview.
- **"interview me" / "onboard me"**: run the interview below, then write `company-os.data.js` and create or update the knowledge-base context files.
- **"log this week"**: append a snapshot to `history` using today's real date (month + day), pulling current `metrics` and `finances`.
- **"check off X" / "mark X done"**: set that roadmap item or goal `done: true` (and the reverse on "uncheck").
- **"set <metric> to N"**: update the value in `finances` or `metrics`.
- **"sync from context"**: re-read the context files (CLAUDE.md, MASTERPLAN.md, etc.) and update the config to match.
- After any change, remind the user to refresh `index.html`.

## The interview (to populate a new company's OS and seed its knowledge base)
Ask these a few at a time, conversationally, adapting to answers. Do not dump all at once.
1. Company name and a one-line tagline.
2. Mission: the 25-year why.
3. The problem, and exactly who has it (be specific about the segments).
4. The solution and product line: what is Live, Building, Next, Later.
5. North star: the single output number that means you are winning.
6. The 3 input metrics you control week to week.
7. Money: monthly income, monthly expenses, cash on hand (say "skip" if private; default to placeholders and remind them to gitignore the data file).
8. The roadmap: the gated stages from today to your next big milestone, with the concrete tasks in each.
9. The org: the functions the company needs, who owns each now, and the first hires.
10. Quarterly goals: 3 max, the rocks that matter this quarter.
11. Non-negotiables: the principles or rules you will not break.
12. Competitors and the graveyard: who tried this and failed, and why.
Then: write `company-os.data.js` from the answers, create or append the matching knowledge-base files
(for example MASTERPLAN.md, GRAVEYARD.md), and list them in `knowledgeBase`.

## Porting to any company
Copy the `company-os/` folder into the target repo, add the Company OS block to that repo's CLAUDE.md
(see this repo's CLAUDE.md for the template), then run "interview me." Claude populates everything from
the founder's answers plus any context files already in the repo. That is the "import into any company
Claude codebase" model.

## Principle
The founder fills the blanks; the fundamentals are universal; Claude keeps the config and the knowledge
base in sync. Dogfood it on one real company first. If other founders ask "can I use that," that is the
signal to spin it out (the Basecamp moment).
