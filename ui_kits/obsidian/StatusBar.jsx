/* global React */
function StatusBar({ file, togglePalette }) {
  return (
    <div className="statusbar">
      <div className="sb-left">
        <img src="../../assets/plumbob.svg" className="sb-plumbob" onClick={togglePalette} title="Command palette"/>
        <span className="sb-vault">Willow Creek Vault</span>
        <span className="sb-sep">·</span>
        <span>412 words · 2,180 chars</span>
      </div>
      <div className="sb-right">
        <span className="sb-mood"><img src="../../assets/emotion-inspired.svg"/> inspired</span>
        <span className="sb-sep">·</span>
        <span>§ 4,820</span>
        <span className="sb-sep">·</span>
        <span>saved just now</span>
      </div>
    </div>
  );
}

function CommandPalette({ onClose, onOpenFile, files }) {
  const [q, setQ] = React.useState("");
  const filtered = files.filter(f =>
    f.title.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette" onClick={e => e.stopPropagation()}>
        <div className="palette-head">
          <img src="../../assets/plumbob.svg" className="palette-pb"/>
          <input
            autoFocus
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Sul sul — what are we doing?"
          />
          <span className="kbd">Esc</span>
        </div>
        <div className="palette-list">
          {filtered.length === 0 && <div className="palette-empty">Nothing matches. Try "Eliza".</div>}
          {filtered.map(f => (
            <div key={f.id} className="palette-item" onClick={() => { onOpenFile(f.id); onClose(); }}>
              <Icon name="file"/>
              <span>{f.title}</span>
              <span className="palette-folder">{f.folder}</span>
            </div>
          ))}
          <div className="palette-divider"/>
          <div className="palette-item cmd">
            <span className="cmd-ico">⚡</span> New note
            <span className="palette-kbd">⌘N</span>
          </div>
          <div className="palette-item cmd">
            <span className="cmd-ico">🜲</span> Toggle reading mode
            <span className="palette-kbd">⌘E</span>
          </div>
          <div className="palette-item cmd">
            <span className="cmd-ico">◆</span> Spin the plumbob
            <span className="palette-kbd">⌘P</span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.StatusBar = StatusBar;
window.CommandPalette = CommandPalette;
