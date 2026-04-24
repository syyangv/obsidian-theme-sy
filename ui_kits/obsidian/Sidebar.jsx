/* global React */
const { useState } = React;

function Ribbon({ activeTab, setActiveTab }) {
  const items = [
    { id: "files",   label: "Files",   icon: "folder" },
    { id: "search",  label: "Search",  icon: "search" },
    { id: "graph",   label: "Graph",   icon: "graph"  },
    { id: "tags",    label: "Tags",    icon: "tag"    },
    { id: "today",   label: "Today",   icon: "calendar" },
  ];
  return (
    <div className="ribbon">
      <div className="ribbon-logo">
        <img src="../../assets/logo-mark.svg" alt="Plumbob"/>
      </div>
      {items.map(it => (
        <button
          key={it.id}
          className={"ribbon-btn " + (activeTab === it.id ? "is-active" : "")}
          onClick={() => setActiveTab(it.id)}
          title={it.label}
        >
          <Icon name={it.icon}/>
        </button>
      ))}
      <div style={{flex:1}}/>
      <button className="ribbon-btn" title="Settings"><Icon name="gear"/></button>
    </div>
  );
}

function Icon({ name }) {
  const paths = {
    folder:   <><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></>,
    search:   <><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>,
    graph:    <><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 7l4 9M17 7l-4 9"/></>,
    tag:      <><path d="M20.59 13.41 13 21l-9-9V4h8l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    gear:     <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    chevron:  <><polyline points="9 18 15 12 9 6"/></>,
    chevdown: <><polyline points="6 9 12 15 18 9"/></>,
    file:     <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    plus:     <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    command:  <><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
}

function FileExplorer({ files, activeFile, setActiveFile }) {
  return (
    <div className="explorer">
      <div className="explorer-head">
        <div className="vault-name">Willow Creek Vault</div>
        <button className="iconbtn"><Icon name="plus"/></button>
      </div>
      <div className="explorer-search">
        <Icon name="search"/>
        <input placeholder="Search files…" defaultValue=""/>
      </div>
      <div className="file-tree">
        <Folder title="Sims" defaultOpen>
          {files.filter(f => f.folder === "Sims").map(f => (
            <File key={f.id} file={f} active={f.id === activeFile} onClick={() => setActiveFile(f.id)} />
          ))}
        </Folder>
        <Folder title="Lots" defaultOpen>
          {files.filter(f => f.folder === "Lots").map(f => (
            <File key={f.id} file={f} active={f.id === activeFile} onClick={() => setActiveFile(f.id)} />
          ))}
        </Folder>
        <Folder title="Moodboards">
          {files.filter(f => f.folder === "Moodboards").map(f => (
            <File key={f.id} file={f} active={f.id === activeFile} onClick={() => setActiveFile(f.id)} />
          ))}
        </Folder>
      </div>
    </div>
  );
}

function Folder({ title, defaultOpen, children }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={"folder " + (open ? "is-open" : "")}>
      <div className="folder-head" onClick={() => setOpen(!open)}>
        <Icon name={open ? "chevdown" : "chevron"}/>
        <span>{title}</span>
      </div>
      {open && <div className="folder-body">{children}</div>}
    </div>
  );
}

function File({ file, active, onClick }) {
  return (
    <div className={"file " + (active ? "is-active" : "")} onClick={onClick}>
      <Icon name="file"/>
      <span>{file.title}</span>
    </div>
  );
}

window.Ribbon = Ribbon;
window.FileExplorer = FileExplorer;
window.Icon = Icon;
