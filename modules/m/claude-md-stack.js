MOD({
  id:'claude-md-stack', title:'Memory layers: global, project, folder', cluster:'claude', fits:[2], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-claude-md-stack .ms{display:grid;grid-template-columns:1.6fr 1fr;gap:3vw;align-items:center}
  .m-claude-md-stack .stk{display:flex;flex-direction:column;gap:10px;position:relative}
  .m-claude-md-stack .ly{display:grid;grid-template-columns:200px 1fr;gap:16px;align-items:center;border:1px solid var(--line);border-radius:12px;padding:12px 18px;background:var(--surface);margin-left:calc(var(--i)*34px)}
  .m-claude-md-stack .ly .p{font-family:var(--m);font-size:14px;color:var(--fg-2);word-break:break-all}
  .m-claude-md-stack .ly .p span{display:block;font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:18px;letter-spacing:.04em;color:var(--fg);margin-bottom:2px;word-break:normal}
  .m-claude-md-stack .ly .ex{font-family:var(--m);font-size:14px;color:var(--muted);line-height:1.5}
  .m-claude-md-stack .ly .ex s{color:var(--muted);text-decoration-color:var(--warn);text-decoration-thickness:2px}
  .m-claude-md-stack .ly .ex b{color:var(--green);font-weight:400}
  .m-claude-md-stack .ly.msg{border-color:var(--green);background:var(--green-a)}
  .m-claude-md-stack .ax{position:absolute;left:-34px;top:8px;bottom:8px;width:2px;background:var(--line)}
  .m-claude-md-stack .ax:after{content:'';position:absolute;bottom:-2px;left:-6px;border:7px solid transparent;border-top:10px solid var(--green)}
  .m-claude-md-stack .axl{position:absolute;left:-58px;top:50%;transform:rotate(-90deg) translateX(50%);transform-origin:left top;font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:14px;letter-spacing:.14em;color:var(--muted);white-space:nowrap}
  .m-claude-md-stack .res{border:2px solid var(--green);border-radius:14px;padding:20px 22px;background:var(--bg)}
  .m-claude-md-stack .res .h{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:15px;letter-spacing:.12em;color:var(--muted)}
  .m-claude-md-stack .res .big{font-family:var(--h);font-weight:900;text-transform:uppercase;font-size:clamp(28px,3vw,40px);color:var(--green);line-height:1.05;margin:8px 0 12px}
  .m-claude-md-stack .res p{color:var(--fg);font-size:17px;line-height:1.4}
  .m-claude-md-stack .res p+p{color:var(--muted);font-size:15px;margin-top:10px}
  `,
  slides:[
  {sec:'CLAUDE CODE', cls:'viz', title:`MEMORY COMES <span class="g">IN LAYERS</span>`,
   body:`<div class="ms"><div class="stk" style="margin-left:40px"><div class="ax"></div><div class="axl">closer wins</div>
       <div class="ly a-fade" style="--i:0"><div class="p"><span>Global</span>~/.claude/CLAUDE.md</div><div class="ex">I am a PM at a fintech.<br><s>Write in British English.</s><br>Keep answers short.</div></div>
       <div class="ly a-fade" style="--i:1"><div class="p"><span>Project</span>CLAUDE.md</div><div class="ex">Client: Acme Bank.<br><b>Use US English for this client.</b><br>Specs live in /docs.</div></div>
       <div class="ly a-fade" style="--i:2"><div class="p"><span>Folder</span>docs/legal/CLAUDE.md</div><div class="ex">Never change approved legal text.<br>Flag edits for review.</div></div>
       <div class="ly msg a-fade" style="--i:3"><div class="p"><span>Your message</span>this chat</div><div class="ex" style="color:var(--fg)">Draft the onboarding PRD.</div></div></div>
     <div class="res a-pop" style="--i:6"><div class="h">Claude writes</div><div class="big">In US English</div>
       <p>Global says British. Project says US. The project layer is closer, so it wins.</p>
       <p>Everything that does not conflict still applies: short answers, specs in /docs.</p></div></div>`}
  ]
});
