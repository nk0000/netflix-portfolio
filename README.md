Netflix-Style Portfolio
📌 Project Overview

This is a Netflix-style personal portfolio built using Next.js (App Router) and Tailwind CSS, designed to showcase work through horizontal content rows, similar to Netflix’s discovery UI.

The portfolio supports a hybrid Engineer ↔ Product Manager view, allowing the content and positioning to adapt based on the selected role.

✨ Key Features

🎬 Netflix-style horizontal rows with arrow navigation

🔁 Engineer ↔ PM toggle (context-aware content)

💾 Toggle state persists using localStorage

🎨 Polished dark UI with subtle gradients

🧠 Structured storytelling (Engineering, Product, Career, Discipline)

🖱️ Hover-expand cards (Netflix-like interaction)

🚫 No horizontal scrollbars (arrow-only navigation)

⚡ Built with Next.js App Router

🛠 Tech Stack

Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS

Animations: Framer Motion

Icons: lucide-react

State Management: React Context

Hosting (planned): Vercel

Dev Environment: GitHub Codespaces

📂 Project Structure
netflix-portfolio/
├── app/
│   ├── layout.tsx        # Root layout (providers + global styles)
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
│
├── components/
│   ├── Row.tsx           # Netflix-style row with arrows
│   ├── ProjectCard.tsx   # Hover-expand card
│   ├── ProjectModal.tsx  # Modal for detailed view
│   └── ViewToggle.tsx    # Engineer ↔ PM toggle
│
├── context/
│   └── ViewModeContext.tsx
│
├── data/
│   └── projects.ts       # All portfolio content (single source of truth)
│
├── public/
├── package.json
└── README.md

🚀 Running the Project (Local or Codespaces)
1️⃣ Open the project

If using GitHub Codespaces:

Open repo → Code → Codespaces → Create new

Navigate into project folder:

cd netflix-portfolio

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


App will be available at:

http://localhost:3000

🔁 Engineer ↔ PM Toggle

Toggle switches content, headlines, and positioning

State is persisted via localStorage

Logic is handled in:

context/ViewModeContext.tsx

🧠 Updating Portfolio Content

All portfolio content lives in one file:

data/projects.ts


To:

Add a new project → add an item

Add a new row → add a section

Remove content → delete from data only

⚠️ No UI changes required for content updates.

🧼 Git Workflow (Important)

Before closing Codespaces or switching machines:

git status
git add netflix-portfolio
git commit -m "Your message"
git push origin main


Rule:

If it’s not pushed to GitHub, it’s not saved.

🌍 Deployment (Later)

Deployment is intended via Vercel.

Key detail:

Root Directory must be set to:

netflix-portfolio


(Deployment intentionally deferred for now.)

🧭 Design Philosophy

Calm, confident UI (no greetings, no fluff)

Recruiter-first scanning

Progressive disclosure

Systems thinking over decoration

Product-led storytelling

📌 Notes for Future Me

Don’t over-design

Keep content honest and specific

Fitness row = discipline & systems, not vanity

This portfolio is meant to evolve gradually

📄 License

Personal portfolio project.
Not intended for commercial redistribution.