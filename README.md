# Devanshu Jamwal — IT portfolio

A personal portfolio for entry-level IT support, systems, networking, infrastructure, and cloud roles. Built with Next.js App Router, TypeScript, and Tailwind CSS. This branch contains the portable Next.js source and the prebuilt GitHub Pages site in `docs/`.

## Setup

Node.js 22 or later is recommended. This repository uses the pinned pnpm version in `package.json` and its committed lockfile.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm run dev
```

You can also use `npm install` and `npm run dev`. The committed pnpm lockfile provides the reproducible install.

## Publish the prepared website

The source is on the `portfolio` branch of `Devanshujamwal/Devanshujamwal`. The `main` branch and its profile README remain unchanged.

1. Open this repository's **Settings → Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Choose the **portfolio** branch and **/docs**, then **Save**.

After GitHub completes its deployment, the project address will be `https://devanshujamwal.github.io/Devanshujamwal/`. This is a planned address, not a claim that hosting is already enabled. There is no platform branding in the website.

## Builds and future updates

```bash
pnpm run build        # Next.js static export into out/ for a root-domain host
pnpm run build:pages  # Build for /Devanshujamwal and refresh docs/
```

After editing content on this branch, run `pnpm run build:pages`, then commit the source and `docs/` together. A push to `portfolio` will redeploy the site after Pages is enabled for that branch and folder.

For a dedicated repository named `Devanshujamwal.github.io`, set `NEXT_PUBLIC_BASE_PATH` to an empty string when running `build:pages` and select that repository's publishing branch and `/docs`. Other repository names need their matching base path. Custom domains require the host's domain settings and DNS records.

Contact uses the visitor's email application. There is no server-side email delivery or database.

## Editing content

Edit `data/portfolio.ts` for identity, contact links, skills, experience, education, project summaries, case-study content, and evidence.

Each project has nine sections: Overview, Objective, Architecture, Technologies, Implementation, Troubleshooting, Validation, What I Learned, and Screenshots / Evidence. Every project has a shareable route under `app/projects/[slug]/`.

- Leave unknown information as an explicit `[ADD ...]` placeholder.
- Add personal reflections and individual contributions in your own words.
- Do not convert a proposed check into a completed test without actual output.
- `implementation`, `troubleshooting`, `validation`, and `learned` accept `{ title, text, placeholder? }` notes.
- Evidence accepts `{ title, description, href?, image?, alt?, placeholder? }`.
- Network, Azure, security, and Python diagrams are editable in `components/portfolio/architecture.tsx`. The conceptual diagrams are labelled; update them only from verified project records.

## Evidence provenance

Two existing public repositories were reviewed:

- `Devanshujamwal/Network-Design-Company-Infrastructure-Implementation`: original Packet Tracer file, assignment brief, and network report. The included PNGs are faithful renders of report pages 12 and 13. No credentials or student-number pages are included. Runtime connectivity results remain placeholders.
- `Devanshujamwal/Library-management-system`: `book.py`, `library_app.py`, and `test_book.py`. The case study describes the inspected source and distinguishes current code-review findings from historical troubleshooting. The supplied test_book.py was executed during review; the exact stdout and source blob identifiers are in public/projects/python-validation.txt. This is not a claim that the whole application passed, or that a historical fix was completed.

The original project repositories have not been modified. The network brief and report use inconsistent city labels; the conceptual diagram preserves the original portfolio brief, with a note to reconcile the .pkt file. Azure and Wazuh case studies contain explicit editable placeholders wherever implementation details or outcomes were not supplied.

## Resume and contact

Place the PDF at `public/resume/Devanshu-Jamwal-Resume.pdf`, then set `portfolio.resume.available` to `true`. The resume control otherwise shows an honest missing-file state instead of a broken download.

The supplied email, LinkedIn, and GitHub addresses are configured in `portfolio`. The contact form opens the visitor's email app with the entered fields; it never reports that a message has been sent. Update the same configuration to change contact destinations.

## Structure

```text
app/                     Home, case-study routes, metadata, global design tokens
components/portfolio/    Navigation, resume, architecture diagrams, lab, contact
components/ui/           Existing accessible UI primitives
lib/portfolio-paths.ts   Static-host asset paths
data/portfolio.ts        Central editable content
public/projects/         Real evidence images
public/resume/           Resume PDF
public/images/           Optional user-supplied images
docs/                    Prebuilt website published by GitHub Pages
```

## Accessibility and design

Semantic sections, readable type, visible keyboard focus, a skip link, Radix-based navigation and dialogs, keyboard-operated lab tabs, and reduced-motion support. The site uses no glow effects or decorative gradients. Diagrams have accessible descriptions and can scroll inside their frame on small screens.
