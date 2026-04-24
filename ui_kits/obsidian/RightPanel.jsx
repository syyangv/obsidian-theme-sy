/* global React */
function RightPanel({ file }) {
  return (
    <div className="rightpanel">
      <div className="rp-head">Properties</div>
      <div className="rp-props">
        <div className="rp-row"><span>mood</span><span className="rp-mood">{file.mood}</span></div>
        <div className="rp-row"><span>sim</span><span>{file.sim}</span></div>
        <div className="rp-row"><span>created</span><span>2 days ago</span></div>
        <div className="rp-row"><span>words</span><span>412</span></div>
      </div>

      <div className="rp-head">Backlinks</div>
      <div className="rp-list">
        <div className="rp-item"><img src="../../assets/plumbob.svg"/>Eliza Pancakes</div>
        <div className="rp-item"><img src="../../assets/plumbob.svg"/>Willow Creek — moodboard</div>
      </div>

      <div className="rp-head">Graph</div>
      <div className="rp-graph">
        <svg viewBox="0 0 200 120" width="100%" height="120">
          <defs>
            <radialGradient id="rp-glow" cx=".5" cy=".5" r=".5">
              <stop offset="0%" stopColor="#50e131" stopOpacity=".55"/>
              <stop offset="100%" stopColor="#50e131" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <line x1="100" y1="60" x2="40"  y2="30" stroke="#3aa4c2" strokeWidth="1.2"/>
          <line x1="100" y1="60" x2="160" y2="30" stroke="#3aa4c2" strokeWidth="1.2"/>
          <line x1="100" y1="60" x2="40"  y2="95" stroke="#3aa4c2" strokeWidth="1.2"/>
          <line x1="100" y1="60" x2="160" y2="95" stroke="#3aa4c2" strokeWidth="1.2"/>
          <line x1="100" y1="60" x2="100" y2="100" stroke="#3aa4c2" strokeWidth="1.2"/>
          <circle cx="100" cy="60" r="24" fill="url(#rp-glow)"/>
          <circle cx="100" cy="60" r="10" fill="#50e131" stroke="#2f8e16" strokeWidth="1.5"/>
          <circle cx="40"  cy="30" r="5" fill="#7fc8dc"/>
          <circle cx="160" cy="30" r="5" fill="#ff6fae"/>
          <circle cx="40"  cy="95" r="5" fill="#c79bff"/>
          <circle cx="160" cy="95" r="5" fill="#f4c842"/>
          <circle cx="100" cy="100" r="5" fill="#7fc8dc"/>
        </svg>
      </div>
    </div>
  );
}
window.RightPanel = RightPanel;
