import{d as t,r as s,h as i,H as a,g as e}from"./p-2dcc2b38.js";import{g as n}from"./p-13cfbb21.js";const l={},o={},c={s:16,m:24,l:32};const r=class{constructor(t){s(this,t),this.filled=!1,this.icon=null,this.mirrored=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null)}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,mirrored:s,pathData:e,scale:l,textLabel:o}=this,r=n(t),h=c[l],d=!!o;return i(a,{"aria-label":d?o:null,role:d?"img":null},i("svg",{class:{mirrored:"rtl"===r&&s,svg:!0},xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:h,width:h,viewBox:`0 0 ${h} ${h}`},i("path",{d:e})))}async loadIconPathData(){const{filled:s,icon:i,scale:a,visible:e}=this;i&&e&&(this.pathData=await async function({icon:s,scale:i,filled:a}){const e=c[i],n=`${function(t){const s=!isNaN(Number(t.charAt(0))),i=t.split("-");return 1===i.length?s?`i${t}`:t:i.map((t,i)=>0===i?s?`i${t.toUpperCase()}`:t:t.charAt(0).toUpperCase()+t.slice(1)).join("")}(s)}${e}${a?"F":""}`;if(l[n])return l[n];o[n]||(o[n]=fetch(t(`./assets/${n}.json`)).then(t=>t.json()).catch(()=>(console.error(`"${n}" is not a valid calcite-ui-icon name`),"")));const r=await o[n];return l[n]=r,r}({icon:i,scale:a,filled:s}))}waitUntilVisible(t){"undefined"!=typeof window&&window.IntersectionObserver?(this.intersectionObserver=new IntersectionObserver(s=>{s.forEach(s=>{s.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),this.intersectionObserver.observe(this.el)):t()}static get assetsDirs(){return["assets"]}get el(){return e(this)}static get watchers(){return{icon:["loadIconPathData"],filled:["loadIconPathData"],scale:["loadIconPathData"]}}};r.style=":host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}.mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";export{r as calcite_icon}