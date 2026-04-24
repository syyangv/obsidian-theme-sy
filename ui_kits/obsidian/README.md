# Obsidian UI Kit — Plumbob theme

A click-through mockup of Obsidian dressed in the Sims 4-inspired "Plumbob" theme.

## What's here

- `index.html` — the main interactive mock. Left ribbon → file explorer →
  editor pane → right panel (properties + graph mini). Top tab bar. Bottom
  status bar. Tap a file to open it; type in the editor; press the plumbob to
  toggle the command palette.
- `Sidebar.jsx` — ribbon + file explorer
- `EditorPane.jsx` — title, frontmatter, markdown surface
- `RightPanel.jsx` — properties, outgoing links, graph mini
- `StatusBar.jsx` — word count, vault, mood indicator
- `CommandPalette.jsx` — modal with plumbob brand

## What this is NOT

This is a **visual recreation**, not Obsidian. Typing is real (into a textarea);
navigation between files is real; everything else (graph, sync, plugins) is a
static prop. The goal is pixel-feel, not functionality.

## Source of truth

Driven by `../../theme.css` + `../../colors_and_type.css`. If you edit tokens
there, this kit updates automatically.
