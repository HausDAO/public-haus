import{u as r,j as e}from"./index-CZyyDon-.js";const l={title:"Summon and Add Shaman",description:"undefined"};function i(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"summon-and-add-shaman",children:["Summon and Add Shaman",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#summon-and-add-shaman",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Summon the shaman contract for the next season."}),`
`,e.jsxs(n.h2,{id:"multiplyonboardershamansummoner",children:[e.jsx(n.code,{children:"MultiplyOnboarderShamanSummoner"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multiplyonboardershamansummoner",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Go to the ",e.jsx(n.a,{href:"https://optimistic.etherscan.io/address/0x748b854efbeadad9a9ed3bea54413b3403b48053#writeContract",children:e.jsx(n.code,{children:"MultiplyOnboarderShamanSummoner"})})," contract on the OP Mainnet Explorer."]}),`
`,e.jsx(n.li,{children:"Click the Write Contract button"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/write-contract.png",alt:"Write Contract"})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Fill in the following values:"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"_moloch (address)"})}),": ",e.jsx(n.code,{children:"0xf5d6b637a9185707f52d40d452956ca49018247a"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"_token (address)"})}),": ",e.jsx(n.code,{children:"0x01B8b6384298D4848E3BE63D4C9D17830EeE488A"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"_expiery (uint256)"})}),": 1726531200 (Set to 2 weeks before end of next season)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"_multiplier (uint256)"})}),": 10"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"_isShares (bool)"})}),": false"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"_details (string)"})}),": Season 6 (Update for next season)"]}),`
`]}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:"Click the Write button"}),`
`,e.jsx(n.li,{children:"Click the View your transaction button"}),`
`]}),`
`,e.jsxs(n.h3,{id:"transaction-details",children:["Transaction Details",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-details",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Goto the transaction details page"}),`
`,e.jsx(n.li,{children:"Click the Logs(2) button"}),`
`,e.jsx(n.li,{children:"Scroll down to the second Transaction Receipt Event Log"}),`
`,e.jsxs(n.li,{children:["Click the address after to ",e.jsx(n.code,{children:"2: onboarder"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/onboarder.png",alt:"Onboarder"})}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsx(n.li,{children:"Copy that address"}),`
`,e.jsx(n.li,{children:"Save the URL of this page for your Add Shaman proposal below"}),`
`]}),`
`,e.jsxs(n.h2,{id:"update-shaman-address-in-target-dao",children:["Update Shaman Address in Target DAO",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-shaman-address-in-target-dao",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Goto ",e.jsx(n.a,{href:"https://github.com/HausDAO/publichaus/blob/main/src/targetDAO.tsx#L29",children:e.jsx(n.code,{children:"targetDAO.tsx"})})," on GitHub"]}),`
`,e.jsx(n.li,{children:'Click pencil icon to "Edit this file"'}),`
`,e.jsx(n.li,{children:"Move the existing address to the comment"}),`
`,e.jsxs(n.li,{children:["Replace the ",e.jsx(n.code,{children:"expiry"})," with the value used in the ",e.jsx(n.code,{children:"MultiplyOnboarderShamanSummoner"})," above"]}),`
`,e.jsx(n.li,{children:"Change:"}),`
`]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SHAMAN_ADDRESS"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xae487435dCF82C764526f7f8805518d8E8b27677"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// expiry: 1718647200 //"0xe00240bd87934955c6b53565e072420e24e41f63",'})]})})}),`
`,e.jsx(n.p,{children:"to:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SHAMAN_ADDRESS"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x40118ac38965a4adfe92e72cced49a151f9f0406"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// expiry: 1726531200 //"0xae487435dCF82C764526f7f8805518d8E8b27677",'})]})})}),`
`,e.jsxs(n.ol,{start:"7",children:[`
`,e.jsx(n.li,{children:"Click commit changes"}),`
`,e.jsx(n.li,{children:'Add Extended description: "Update shaman address"'}),`
`,e.jsx(n.li,{children:'Select "Create a new branch for this commit and start a pull request"'}),`
`,e.jsxs(n.li,{children:["Name branch: ",e.jsx(n.code,{children:"earth2travis-retro6"})," (your GitHub username dash next season number)"]}),`
`,e.jsx(n.li,{children:"Open a pull request"}),`
`,e.jsx(n.li,{children:"Create pull request"}),`
`,e.jsx(n.li,{children:"Merge pull request"}),`
`,e.jsx(n.li,{children:"Delete branch"}),`
`]}),`
`,e.jsxs(n.h2,{id:"add-shaman",children:["Add Shaman",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#add-shaman",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Go to the DAO and create new ",e.jsx(n.a,{href:"https://admin.daohaus.club/#/molochv3/0xa/0xf5d6b637a9185707f52d40d452956ca49018247a/new-proposal?formLego=ADD_SHAMAN",children:"Add Shaman"})," proposal"]}),`
`,e.jsx(n.li,{children:"Fill out the form"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Proposal Title"}),": Season ",e.jsx(n.code,{children:"#"})," Staking Shaman"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Description"}),": Grant DAO permissions to shaman contract"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link"}),": (URL from Transaction Details above)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shaman Address:"})," (same address you updated in Target DAO)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shaman Permission"}),": 2 - Manager only"]}),`
`]}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Click submit"}),`
`,e.jsx(n.li,{children:"Vote on proposal"}),`
`]}),`
`,e.jsxs(n.h2,{id:"notes-on-values",children:["Notes on Values",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#notes-on-values",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"_expiery-uint256",children:[e.jsx(n.code,{children:"_expiery (uint256)"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#_expiery-uint256",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To calculate the ",e.jsx(n.code,{children:"_expiery"})," you need the Unix epoch time."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.a,{href:"https://tools.deth.net/unix-epoch-utc-conversion",children:"dEth Tools"})," to get the date that is two weeks prior to when the next season ends."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/convert-utc-to-unix-epoch.png",alt:"convert-utc-to-unix"})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Copy the Unix epoch (in milliseconds):"}),`
`,e.jsxs(n.li,{children:["Edit the Unix epoch",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Since the epoch is in milliseconds you will need to remove 3 zeros from the end"}),`
`,e.jsxs(n.li,{children:["Change: ",e.jsx(n.code,{children:"1726531200000"})]}),`
`,e.jsxs(n.li,{children:["To: ",e.jsx(n.code,{children:"1726531200"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Paste your updated Unix epoch in dEth Tools to verify it is correct:"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/convert-unix-epoch-to-utc.png",alt:"convert-unix"})}),`
`,e.jsxs(n.h3,{id:"_isshares-bool",children:[e.jsx(n.code,{children:"_isShares (bool)"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#_isshares-bool",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:'This should be "false" in all lowercase letters.'}),`
`,e.jsxs(n.h3,{id:"_details-string",children:[e.jsx(n.code,{children:"_details (string)"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#_details-string",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"This is the number of the next season."})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default,l as frontmatter};
