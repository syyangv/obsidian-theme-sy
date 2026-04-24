/* global React, Icon */
const { useState: useStateE } = React;

function EditorPane({ file, onChange }) {
  return (
    <div className="editor-pane">
      <div className="tabbar">
        <div className="tab is-active">
          <Icon name="file"/>
          <span>{file.title}</span>
          <span className="tab-close">×</span>
        </div>
        <div className="tab">
          <Icon name="file"/>
          <span>Daily · Today</span>
          <span className="tab-close">×</span>
        </div>
        <button className="tab-new"><Icon name="plus"/></button>
        <div style={{flex:1}}/>
        <div className="editor-actions">
          <button className="iconbtn" title="Reading mode"><Icon name="file"/></button>
          <button className="iconbtn" title="Command palette"><Icon name="command"/></button>
        </div>
      </div>

      <div className="editor-scroll">
        <div className="editor-header">
          <div className="breadcrumb">{file.folder} / {file.title}</div>
          <h1 className="editor-title">{file.title}</h1>
          <div className="frontmatter">
            <FM k="mood" v={file.mood} mood/>
            <FM k="sim" v={file.sim}/>
            <FM k="tags" v={file.tags} tag/>
            <FM k="simoleons" v={file.simoleons} gold/>
          </div>
        </div>

        <div className="editor-body">
          <p>{file.intro}</p>

          <div className="callout c-tip">
            <img src="../../assets/emotion-energized.svg" alt="" className="c-icon"/>
            <div>
              <div className="c-title">Energized — Tip</div>
              <div>Dropping a plumbob on a note pins it to the top of the dashboard. Click the diamond to release.</div>
            </div>
          </div>

          <h2>Today's Vibes</h2>
          <p>Eliza Pancakes is feeling <strong>inspired</strong>. She just finished a canvas in the back
          studio and there's already another one primed. <em>The muse does not wait.</em></p>

          <h3>What to build next</h3>
          <ul>
            <li>A greenhouse — the back lot is wasted space.</li>
            <li>An easel corner in the upstairs loft for late-night painting.</li>
            <li><a href="#">A second plumbob</a> — just kidding, there can only be one.</li>
          </ul>

          <blockquote>
            "Sul sul, my little sim. Your vault is growing."
          </blockquote>

          <h3>The code behind the plumbob</h3>
          <pre><code>{`const plumbob = {
  color: "#50e131",   // canonical
  state: "energized", // happy | flirty | focused | tense
  spin:  4000         // ms per rotation
};`}</code></pre>

          <div className="tagrow">
            <span className="tag">#sims</span>
            <span className="tag">#ideas</span>
            <span className="tag">#focus</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FM({ k, v, mood, tag, gold }) {
  return (
    <div className="fm-row">
      <span className="fm-key">{k}</span>
      {mood  && <span className="fm-mood">{v}</span>}
      {tag   && v.map(t => <span key={t} className="tag">{"#"+t}</span>)}
      {gold  && <span className="fm-gold">§ {v.toLocaleString()}</span>}
      {!mood && !tag && !gold && <span className="fm-val">{v}</span>}
    </div>
  );
}

window.EditorPane = EditorPane;
