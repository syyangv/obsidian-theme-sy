# Plumbob — a Sims 4-inspired Design System for Obsidian

A design system that remixes the unmistakable visual language of *The Sims 4* —
glossy teal panels, plumbob-green accents, friendly rounded type, bouncy pops —
for an Obsidian theme, plus a full UI kit of sample screens.

## Sources

- **Codebase (local):** `obsidian-theme-sy/` — the user's skeleton theme (mounted
  read-only). Currently a stub: `manifest.json` (SY Theme, v0.1.0) and
  `theme.css` (blank template with empty CSS variables for dark/light/shared).
- **GitHub repo:** [`syyangv/obsidian-theme-sy`](https://github.com/syyangv/obsidian-theme-sy)
  — same contents as local. Nothing substantive yet; this system fills it in.
- **Brief:** "build the theme in the same design style as The Sims 4."

Because the starter theme was empty, **all visual direction in this system comes
from The Sims 4 game UI itself** (color chips, type feel, panel chrome, icon
motifs), not from an existing SY visual identity.

---

## Index

| File | What's in it |
| --- | --- |
| `colors_and_type.css` | Single source of truth for color tokens, type scale, spacing, radii, shadows. |
| `theme.css` | The Obsidian theme — consumes `colors_and_type.css` tokens. |
| `fonts/` | Webfont files (Fredoka, Nunito, JetBrains Mono). |
| `assets/` | Logos, plumbob SVGs, emotion icons, textures. |
| `preview/` | ~15 card-sized HTMLs that populate the Design System tab. |
| `ui_kits/obsidian/` | The Sims-4-styled Obsidian UI — sidebar, note pane, command palette, status bar. |
| `SKILL.md` | Agent Skill entrypoint for Claude Code. |

---

## Content Fundamentals

The Sims' voice is warm, slightly cheeky, and never clinical. Use it as a tone
target even in technical UI strings.

- **Pronouns:** second-person ("your") for the user's own stuff; third-person
  sim-speak for background flavor ("Eliza Pancakes is *feeling inspired*").
- **Casing:** **Title Case** for buttons, menu items, tab labels, section
  headings — like Sims panel titles ("Create A Sim", "Build Mode", "Manage
  Worlds"). Sentence case only inside long-form body copy.
- **Voice:** friendly but never cutesy-corporate. Light humor is welcome when
  describing ambient state ("No notes yet — go make some chaos."), but errors
  and destructive confirmations must be plain and direct.
- **I vs you:** always "you". Never "I" / "we". The app is a stage, you are the
  player.
- **Emoji:** no. The brand uses *iconography* (plumbobs, emotion auras,
  simoleons), not unicode emoji. If you need a symbolic accent, reach for a
  project SVG from `assets/` first.
- **Simlish flavor:** one or two quirky throwaway strings per screen is the
  sweet spot — "Dag dag!" as a farewell toast, "Sul sul!" as a welcome banner.
  Don't pepper the whole UI with it.

**Examples**
- Empty sidebar: *"Your vault is empty. Drop a note in — even a bad one counts."*
- Destructive confirm: *"Delete 3 notes? This can't be undone."* (plain.)
- Toast on save: *"Saved. Nice one."*
- Section heading: *"Today's Vibes"* (over a dashboard, not "Dashboard").

---

## Visual Foundations

### Colors
Two anchors do all the heavy lifting: **Sim-Teal** (the UI chrome color seen in
Create-A-Sim and Live Mode) and **Plumbob Green** (the accent, taken from the
floating diamond above the active Sim). Everything else is support:

- **Sim-Teal** `#0e5f7c`–`#3aa4c2` — panels, sidebars, chrome backgrounds.
- **Sim-Navy** `#05161f`–`#0a2a3d` — dark-mode workspace background.
- **Plumbob Green** `#50e131` — accent, focus ring, success, active selection.
- **Mood palette** — ten colors keyed to Sims emotions (happy yellow, flirty
  pink, inspired lavender, uncomfortable red, etc.) — used for callouts, tag
  colors, and emotion-coded highlights.
- **Simoleon Gold** `#f4c842` — currency, XP, premium-feel badges.
- **Ivory** `#fbf8f1`–`#e9dec4` — light-mode paper.

All token names, hex values, and semantic mappings live in
`colors_and_type.css`.

### Type
- **Display / headings (Latin):** **Sims Sans Bold** (`fonts/Loucos_Lyne_-_thesimssansbold.otf`)
  — the real thing, user-provided. `unicode-range` caps this face to Latin so
  CJK characters fall through cleanly.
- **Display small-caps (Latin):** **Sims Sans Bold SC** — for eyebrows, tab
  labels, and HUD chrome.
- **Display (Mandarin / zh-CN):** **ZCOOL KuaiLe** (Google Fonts) — chunky,
  playful, the closest open-source match to Sims Sans energy in Simplified
  Chinese. Single weight; display-only.
- **Body / UI (Latin):** Nunito — multi-weight, rounded, humanist.
- **Body / UI (Mandarin):** **Noto Sans SC** (Google Fonts) — weights 400 / 500
  / 700 / 900, full SC coverage.
- **Mono:** JetBrains Mono.
- The font stacks in `colors_and_type.css` (`--font-display`, `--font-ui`,
  etc.) already list the CJK faces after the Latin ones — the browser picks
  per-glyph, so a line like `今日心情：灵感迸发` renders in ZCOOL KuaiLe
  automatically while the surrounding Latin stays in Sims Sans.
- Scale is on a roughly 1.2–1.25 ratio, `12 · 13 · 15 · 17 · 20 · 24 · 32 · 44 · 60`.

### Backgrounds
Never flat. The Sims 4 UI is built from **vertical gradients** — every panel
has a lighter top and a darker bottom by 1–2 steps of the teal ramp. Combined
with an **inset 1px top highlight** and a **subtle bottom shadow**, this
produces the signature "gel" look.

- No full-bleed photography inside the app chrome. Photos live *inside* cards,
  framed like a TV in a Sims living room.
- No repeating patterns / textures in the base chrome — but `assets/paper-grain.png`
  exists for optional noise on light-mode surfaces.
- No hand-drawn illustrations. The vocabulary is clean iconography +
  photographic content.

### Animation
- **Default easing:** `cubic-bezier(.34, 1.56, .64, 1)` — a gentle overshoot
  that feels like Sims panel pops.
- Hover: 120ms. Press: immediate. Enter: 220ms. Toast/popover: 420ms.
- Menus and popovers **scale in from 92% + fade**. Never slide from offscreen.
- The plumbob icon **spins** (4s linear loop) whenever it's a focal point.
- Reduced-motion: all pops collapse to simple 120ms fades.

### Hover + press
- Buttons and list items: **brighten on hover** (+8% lightness via
  `color-mix`), never darken. Matches how the game adds a cyan glow to
  hovered interactions.
- Press: **scale(0.97)** + shift to `--accent-press` (one step darker).
- Focus: 2px plumbob-green ring, 2px offset. Rounded.

### Borders, shadows, elevation
- **Borders** are low-contrast and mostly transparent
  (`rgba(127,200,220,.22)` in dark). Real separation comes from *gradient +
  shadow*, not from hard lines.
- **Outer shadow** is soft and warm-black, two-layer
  (tight contact + wide halo).
- **Inner highlight** on every elevated panel — `inset 0 1px 0 rgba(255,255,255,.35)`.
  This is the single most "Sims 4" move in the system.
- A **plumbob glow** (`--shadow-glow-plumbob`) is reserved for the primary CTA
  and the active Sim-equivalent (current note / focused window title).

### Corners
- Interior chips, inputs, small buttons: `8–14px`.
- Panels and cards: `22px`.
- Hero and modal shells: `32px`.
- Pills and avatars: `999px`.
- **Nothing is square-cornered.** Sharp corners read as "un-Sims-like."

### Transparency + blur
- Modals dim the workspace with `rgba(3,14,22,.72)` — navy-tinted, not pure
  black.
- Popovers use a 12px backdrop-blur over a 90% opaque panel — enough to read
  the UI behind as blurred color, not shapes.
- Never use transparency on body copy. Always on scrims / chrome only.

### Imagery color vibe
- When photos are used, they lean **warm and saturated** — the Sims color-
  grades gameplay toward sunny, golden-hour tones. A light `sepia(6%) saturate(1.08)`
  filter is acceptable on user-uploaded note covers if consistency matters.
- No grain. No black-and-white.

### Layout rules
- **Top-right HUD:** clock + world toggle + plumbob — mirrors the Sims 4 HUD.
- **Bottom action bar:** primary verbs (Build, Play, Save) — the Sims 4
  control bar sits at the bottom and is always visible.
- **Left rail:** navigation — tabs stacked, icon + label.
- **Panels float with margin** around them; nothing is flush to the viewport
  edge except the workspace background.

### Cards
- Vertical gradient fill (2-step teal ramp, or ivory ramp in light mode).
- 22px rounded corners.
- Inset top highlight + outer shadow (2-layer).
- Optional plumbob-green ribbon strip at the top for "featured/active" state.
- Hover: brighten 4%, lift shadow by 2px.

---

## Iconography

The Sims 4 UI uses **custom vector glyphs** — not a licensable icon font. For
this system we use **Lucide** (CDN) as the primary icon set because its stroke
weight (1.75–2px) and rounded terminals match the Sims feel better than
Heroicons or Feather. Flag to user: *substitute — if you have the EA icon
sprite sheets, drop them into `assets/icons/` and we'll switch.*

Custom project SVGs live in `assets/`:
- `plumbob.svg` — the iconic green diamond. Use at 20–40px. Spin on focus.
- `simoleon.svg` — the stacked-§ currency symbol.
- `emotion-*.svg` — ten mood aura rings (happy, flirty, inspired, etc.)
- `logo-wordmark.svg` — "Plumbob" wordmark for this theme package.
- `logo-mark.svg` — just the plumbob diamond, for favicons / small chrome.

**No emoji. No unicode glyphs as icons.** The only unicode-as-icon exception
is `§` for simoleons (which is the real EA convention).

### When to use what
- **Lucide** for anything utility (save, search, settings, trash).
- **Project SVG** for anything *brand-signaling* (plumbob = active, emotion
  rings = status, simoleon = currency/XP).
- **Never** reach for an emoji as a shortcut. If you don't have an icon for it,
  ship without one.

---

## CAVEATS (what's substituted / unknown)

- **Fonts** — display type is now the real **Sims Sans Bold** + **Sims Sans
  Bold SC** (user-provided, in `fonts/`). Body/UI still uses **Nunito** because
  Sims Sans only ships one bold weight and is display-only. Code uses
  **JetBrains Mono**.
- **Icons** — Using **Lucide** as a substitute for EA's custom UI glyph set.
- **Plumbob/emotion artwork** — hand-built as simple geometric SVGs in
  `assets/`. Ideally replaced with official renders if you have rights.
- **Starter theme was empty**, so the entire visual language in this system
  is synthesized from public Sims 4 reference (game HUD, Create-A-Sim panels,
  Live/Build mode). Let us know if you have specific interior screenshots or
  a mood board you want the system tuned toward.
