(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(27693)}])},27693:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(85893),i=n(40108),s=n.n(i),r=n(41664),o=n(67294),u=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("nav",{className:"flex items-center flex-wrap bg-concave-400 p-3 ",children:[(0,a.jsx)(r.default,{href:"/",children:(0,a.jsxs)("a",{className:"inline-flex items-center p-2 mr-4 ",children:[(0,a.jsx)("img",{className:"rounded-full fill-current text-white h-8 w-8 mr-2",src:"https://pbs.twimg.com/profile_images/1463359390988357632/MJ1DbAHy_400x400.jpg"}),(0,a.jsx)("span",{className:"text-xl text-white font-bold uppercase tracking-wide",children:"Concave NFT Minting"})]})}),(0,a.jsx)("button",{className:" inline-flex p-3 hover:bg-concave-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none",onClick:function(){n(!t)},children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})})},p=function(){return(0,a.jsx)("footer",{className:s().footer,children:(0,a.jsx)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",className:"lowercase",children:"Made with Love - Concave Finance Discord"})})},l=n(9008),m=function(){return(0,a.jsxs)(l.default,{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"color-scheme",content:"dark light"}),(0,a.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("title",{children:"Concave Meme Governance"})]})},y=n(28520),d=n.n(y),c=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_COLORS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"","type":"uint32"}],"name":"existingHexColors","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getBase64TokenSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getBlue","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getGreen","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHexColor","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRGB","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRed","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTokenMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTokenSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintNextColors","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"number","type":"uint256"}],"name":"uintToHexString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}]}'),f=n(3283),b=n.n(f);function _(e,t,n,a,i,s,r){try{var o=e[s](r),u=o.value}catch(p){return void n(p)}o.done?t(u):Promise.resolve(u).then(a,i)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function r(e){_(s,a,i,r,o,"next",e)}function o(e){_(s,a,i,r,o,"throw",e)}r(void 0)}))}}var h=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"owner",type:"address"}],type:"function"}],T=function(){var e="0x3C4CfA9540c7aeacBbB81532Eb99D5E870105CA9",t=(0,o.useState)(null),n=t[0],i=t[1],s=(0,o.useState)(null),r=s[0],u=s[1],p=(0,o.useState)(null),l=p[0],m=p[1],y=(0,o.useState)(null),f=y[0],_=y[1];function T(){return v.apply(this,arguments)}function v(){return(v=x(d().mark((function t(){var a,i,s;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.eth.getTransactionCount(r,"latest");case 2:return a=t.sent,i=new n.eth.Contract(c.Mt,e),s={from:r,to:e,nonce:a,gas:5e5,data:i.methods.mintNextColors(n.eth.abi.encodeParameter("uint256",1)).encodeABI()},t.next=7,n.eth.sendTransaction(s,r).catch();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,o.useEffect)(x(d().mark((function t(){var n,a,s,r,o;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.ethereum||console.log("Please install Metamask"),t.next=3,ethereum.request({method:"eth_requestAccounts"});case 3:return n=t.sent,u(n[0]),a=new(b())(ethereum),i(a),t.next=9,a.eth.net.getNetworkType();case 9:return s=t.sent,m("main"===s?"Mainnet":s),r=new a.eth.Contract(h,e),t.next=14,r.methods.balanceOf(n[0]).call();case 14:o=t.sent,_(o);case 16:case"end":return t.stop()}}),t)}))),[]),r?f>0?(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"text-red-600 font-bold",children:[r," owns ",f," Colors NFT on ",l]}),(0,a.jsx)("div",{className:"content-center flex",children:(0,a.jsx)("button",{onClick:T,className:"bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Mint!"})})]}):(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-red-600 font-bold",children:"You must own a Colors NFT to Mint!"}),(0,a.jsx)("button",{onClick:T,className:"bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Mint a COLORS NFT"})]}):(0,a.jsx)("p",{className:"text-red-600 font-bold",children:"Please connect to Metamask"})};function v(){return(0,a.jsxs)("div",{className:s().mainContainer,children:[(0,a.jsx)(m,{}),(0,a.jsx)(u,{}),(0,a.jsxs)("div",{className:s().container,children:[(0,a.jsxs)("main",{className:s().main,children:[(0,a.jsxs)("h1",{className:s().title,children:["Welcome to ",(0,a.jsx)("br",{}),(0,a.jsx)("a",{children:"Concave NFT Minting"})]}),(0,a.jsx)(T,{})]}),(0,a.jsx)(p,{})]})]})}},40108:function(e){e.exports={mainContainer:"meme_mainContainer__wDbC4",main:"meme_main__r97fT",vertical:"meme_vertical__GEQFk",footer:"meme_footer__4ngmz",title:"meme_title__k1nOk",description:"meme_description__J_gfj",code:"meme_code__AzOA1",grid:"meme_grid__o9MXi",card:"meme_card__gSL5r",logo:"meme_logo__pE_a_",polls:"meme_polls__pnpy5",container:"meme_container__cxVnq",inner:"meme_inner__Dzp_B",poll:"meme_poll__s2zpk",heading:"meme_heading__2OBvD","heading-note":"meme_heading-note__ZjSAp","error-container":"meme_error-container__HdJx6",error:"meme_error__FkOnO",votes:"meme_votes__5dY9Y",up:"meme_up__UmECk",down:"meme_down__TSL3V","concave-blue":"meme_concave-blue__QFzhX","concave-hover":"meme_concave-hover__ftJ7e"}},88677:function(){},62808:function(){},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){},43503:function(){},55896:function(){},87500:function(){}},function(e){e.O(0,[482,138,774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);