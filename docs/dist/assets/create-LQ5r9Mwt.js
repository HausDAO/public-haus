import{u as r,j as e}from"./index-CZyyDon-.js";const t={title:"Create Retro Signal Session",description:"undefined"};function i(n){const s={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"create-retro-signal-session",children:["Create Retro Signal Session",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-retro-signal-session",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"Retro Signal Sessions reward contributors for work completed in a season that supports the DAOs priorities from the Objective Signal Session."}),`
`,e.jsx(s.p,{children:"The Retro Signal Session is a two week event that happens at the end of each quarter."}),`
`,e.jsx(s.p,{children:"The proposal to Create a Signal TCR should be submitted 14 days before the end of the month. The end date of the proposal should be set for the last day of the month. It is helpful to add an event on the calendar to provide a reminder to start this process."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Voting Period"}),": 4 days"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Grace Period"}),": 3 days"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Retro Signal Session"}),": 7 days"]}),`
`]}),`
`,e.jsxs(s.h2,{id:"verify-staking-is-paused",children:["Verify Staking is Paused",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verify-staking-is-paused",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Staking in the DAO should be paused prior to starting the Retro Signal Session."}),`
`,e.jsxs(s.p,{children:["To verify staking is paused goto ",e.jsx(s.a,{href:"https://join.daohaus.fun/#/join",children:"Stake HAUS"})," and confirm the following banner is displayed:"]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/images/staking-paused.png",alt:"Staking Paused Banner"})}),`
`,e.jsxs(s.p,{children:["You can also verify staking is paused in the ",e.jsx(s.a,{href:"https://github.com/HausDAO/publichaus/blob/main/src/targetDAO.tsx#L30",children:e.jsx(s.code,{children:"targetDAO.tsx"})})," file on GitHub."]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/images/target-dao.png",alt:"Target DAO"})}),`
`,e.jsxs(s.h2,{id:"pause-staking",children:["Pause Staking",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pause-staking",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"If staking is not currently paused you need to take the following steps to pause staking prior to starting the Retro Signal Session:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Goto ",e.jsx(s.a,{href:"https://github.com/HausDAO/publichaus/blob/main/src/targetDAO.tsx#L30",children:e.jsx(s.code,{children:"targetDAO.tsx"})})," on GitHub."]}),`
`,e.jsx(s.li,{children:'Click pencil icon to "Edit this file"'}),`
`,e.jsx(s.li,{children:"Change:"}),`
`]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"STAKE_PAUSED"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]})})}),`
`,e.jsx(s.p,{children:"to:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"STAKE_PAUSED"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]})})}),`
`,e.jsxs(s.h2,{id:"resume-staking",children:["Resume Staking",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resume-staking",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.a,{href:"https://tools.deth.net/unix-epoch-utc-conversion",children:"dEth Tools"})," to get the date on the first of next month when staking should resume."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/images/convert-utc-to-unix-epoch.png",alt:"Convert UTC to UNIX Epoch"})}),`
`,e.jsxs(s.ol,{start:"2",children:[`
`,e.jsx(s.li,{children:"Copy the Unix epoch (in miliseconds):"}),`
`,e.jsxs(s.li,{children:["Edit the Unix epoch",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Since the epoch is in miliseconds you will need to remove 3 zeros from the end"}),`
`,e.jsxs(s.li,{children:["Change: ",e.jsx(s.code,{children:"1088640000000"})]}),`
`,e.jsxs(s.li,{children:["To: ",e.jsx(s.code,{children:"1088640000"})]}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:"Paste your updated Unix epoch in dEth Tools to verify it is correct:"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/images/convert-unix-epoch-to-utc.png",alt:"Convert UNIX Epoch to UTC"})}),`
`,e.jsxs(s.ol,{start:"5",children:[`
`,e.jsxs(s.li,{children:["Go back to the ",e.jsx(s.a,{href:"https://github.com/HausDAO/publichaus/blob/main/src/targetDAO.tsx#L31",children:e.jsx(s.code,{children:"targetDAO.tsx"})})," file you are editing on GitHub."]}),`
`,e.jsx(s.li,{children:"Change:"}),`
`]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"STAKE_NEXT_START"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1711976936"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"; "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// last end 1704222000, //"})]})})}),`
`,e.jsx(s.p,{children:"to:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"STAKE_NEXT_START"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1088640000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"; "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// last end 1711976936, //"})]})})}),`
`,e.jsxs(s.p,{children:["(notice you take the previous Epoch time and replace last end comment and paste the new time as ",e.jsx(s.code,{children:"STAKE_NEXT_START"}),")"]}),`
`,e.jsxs(s.ol,{start:"6",children:[`
`,e.jsx(s.li,{children:"Click commit changes"}),`
`,e.jsx(s.li,{children:'Add Extended description: "Pause staking and update date for resuming"'}),`
`,e.jsx(s.li,{children:'Select "Create a new branch for this commit and start a pull request"'}),`
`,e.jsxs(s.li,{children:["Name branch: ",e.jsx(s.code,{children:"earth2travis-retro5"})," (your GitHub username dash current retro number)"]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/images/propose-changes.png",alt:"Propose Changes"})}),`
`,e.jsxs(s.ol,{start:"10",children:[`
`,e.jsx(s.li,{children:"Open a pull request"}),`
`,e.jsx(s.li,{children:"Create pull request"}),`
`,e.jsx(s.li,{children:"Merge pull request"}),`
`,e.jsx(s.li,{children:"Delete branch"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"*"})," Need to verify how these changes are deployed and if there are additional steps required"]}),`
`,e.jsxs(s.p,{children:["Once the changes have been deployed verify the staking is paused banner appears on ",e.jsx(s.a,{href:"https://join.daohaus.fun/#/join",children:"Stake Haus"})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"<INSERT SCREENSHOT>"})}),`
`,e.jsxs(s.h2,{id:"create-forum-post-on-discord",children:["Create Forum Post on Discord",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-forum-post-on-discord",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Goto ",e.jsx(s.a,{href:"https://discord.com/channels/709210493549674598/1062791450183610410",children:"📜-public-forum"})," channel on Discord."]}),`
`,e.jsx(s.li,{children:"Click New Post"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Title"}),": Shipped in Season ",e.jsx(s.code,{children:"#"})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Message"}),": As we gear up for Season ",e.jsx(s.code,{children:"#"})," Demo Day, we want to hear from you! Share links to your projects and let's discuss the the work we shipped. Tell us what you're proud of, what challenges you faced, and what didn't go as planned. This is a chance to support and learn from each other, gain insights to inspire future collaborations, and help us avoid common pitfalls."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tags"}),": ",e.jsx(s.code,{children:"retro"})]}),`
`,e.jsx(s.p,{children:"Once the post has been created copy the link to it to use in the next step."}),`
`,e.jsx(s.p,{children:"Add image:"}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/images/shipped.png",alt:"Shipped"})}),`
`,e.jsxs(s.p,{children:["Add link to Season ",e.jsx(s.code,{children:"#"})," Demo Day ",e.jsx(s.a,{href:"/procedures/demo-day/schedule#create-discord-event",children:"event in Discord"})]}),`
`,e.jsx(s.p,{children:"Add messages:"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Signal your appreciation to the builders that keep the HAUS standing. Projectooooors, Bizdevooooooors, Maintainooooors, Operatoooooors, Proposalooooooors, and Champions. Share things you and others have done towards the seasonal and yearly roadmap objectives. Onchain vote starts next week"}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"@PublicHaus WTF did you ship in Season #?"}),`
`]}),`
`,e.jsxs(s.h2,{id:"create-signal",children:["Create Signal",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-signal",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Goto ",e.jsx(s.a,{href:"https://signal.daohaus.fun/#/0xa/0xf5d6b637a9185707f52d40d452956ca49018247a",children:"PublicHAUS (HQ) Signals"})]}),`
`,e.jsxs(s.li,{children:["Click ",e.jsx(s.a,{href:"https://signal.daohaus.fun/#/0xa/0xf5d6b637a9185707f52d40d452956ca49018247a/create",children:"Create Signal"})," (at bottom of view)"]}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Signal Title"}),`: Public HAUS Retro #5
(update retro number to current season)`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Signal Description"}),": Signal your appreciation to the builders that keep the HAUS standing. Projectooooors, Bizdevooooooors, Maintainooooors, Operatoooooors, Proposalooooooors, and Champions"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"End Date"}),": Last day of month at 11:30 PM"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Link"}),": Link to Discord Forum post created above"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tags"}),": ",e.jsx(s.code,{children:"retro"}),", ",e.jsx(s.code,{children:"season 5"}),`
(update season number to current season)`]}),`
`]}),`
`,e.jsxs(s.ol,{start:"3",children:[`
`,e.jsx(s.li,{children:"Click Submit"}),`
`,e.jsx(s.li,{children:"Vote on Proposal"}),`
`]})]})}function a(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default,t as frontmatter};
