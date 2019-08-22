import{r as t,c as s,h as i,H as h,g as e}from"./p-aef71dcb.js";import{S as c,E as a}from"./p-6415f679.js";const r=class{constructor(i){t(this,i),this.switched=!1,this.name="",this.value="",this.color="blue",this.syncThisToProxyInput=()=>{this.switched=this.inputProxy.hasAttribute("checked"),this.name=this.inputProxy.name,this.value=this.inputProxy.value},this.syncProxyInputToThis=()=>{this.switched?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"),this.inputProxy.setAttribute("name",this.name),this.inputProxy.setAttribute("value",this.value)},this.calciteSwitchChange=s(this,"calciteSwitchChange",7)}onClick(t){(this.el.closest("label")&&t.target===this.inputProxy||!this.el.closest("label")&&t.target===this.el)&&(this.switched=!this.switched)}keyDownHandler(t){t.keyCode!==c&&t.keyCode!==a||(this.switched=!this.switched)}switchWatcher(){this.calciteSwitchChange.emit(),this.switched?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")}connectedCallback(){this.setupProxyInput()}disconnectedCallback(){this.observer.disconnect()}componentWillRender(){this.syncProxyInputToThis()}render(){return i(h,{role:"checkbox","aria-checked":this.switched,tabindex:"0"},i("div",{class:"track"},i("div",{class:"handle"})),i("slot",null))}setupProxyInput(){this.inputProxy=this.el.querySelector("input"),this.inputProxy||(this.inputProxy=document.createElement("input"),this.inputProxy.type="checkbox",this.syncProxyInputToThis(),this.el.appendChild(this.inputProxy)),this.syncThisToProxyInput(),this.observer=new MutationObserver(this.syncThisToProxyInput),this.observer.observe(this.inputProxy,{attributes:!0})}get el(){return e(this)}static get watchers(){return{switched:["switchWatcher"]}}static get style(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}::slotted(input){display:none}:host{display:inline-block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;tap-highlight-color:transparent}.track{position:relative;display:inline-block;vertical-align:top;width:36px;height:20px;background-color:#f8f8f8;border-radius:30px;border:1px solid #eaeaea}.handle,.track{-webkit-transition:all .25s ease;transition:all .25s ease}.handle{position:absolute;display:block;width:18px;height:18px;top:-1px;left:-1px;right:auto;background-color:#fff;border-radius:30px;border:2px solid #757575;-webkit-box-shadow:0 1px 1px 0 rgba(43,43,43,.2);box-shadow:0 1px 1px 0 rgba(43,43,43,.2)}:host([switched]) .handle{right:-1px;left:auto;border-color:#004874;-webkit-box-shadow:0 2px 1px 0 rgba(43,43,43,.2);box-shadow:0 2px 1px 0 rgba(43,43,43,.2)}:host([switched]) .track{border-color:#00619b;background-color:#007ac2}:host([switched][color=red]) .handle{border-color:#7c1d13}:host([switched][color=red]) .track{border-color:#7c1d13;background-color:#a82b1e}:host(:focus),:host([switched]:focus){outline:none}:host(:focus) .track,:host([switched]:focus) .track{-webkit-box-shadow:0 0 4px 2px hsla(0,0%,45.9%,.9);box-shadow:0 0 4px 2px hsla(0,0%,45.9%,.9)}:host(:hover) .track{border-color:#eaeaea;background-color:#757575}:host(:hover) .handle{border-color:#007ac2;-webkit-box-shadow:0 1px 2px 0 rgba(43,43,43,.2);box-shadow:0 1px 2px 0 rgba(43,43,43,.2)}:host([color=red]:hover) .handle{border-color:#d83020}:host([switched]:hover) .handle{border-color:#004874}:host([switched]:hover) .track{border-color:#00619b;background-color:#007ac2}:host([switched][color=red]:hover) .handle{border-color:#7c1d13}:host([switched][color=red]:hover) .track{border-color:#7c1d13;background-color:#a82b1e}"}};export{r as calcite_switch};