import{r as e,h as t,H as a,g as i,c as s}from"./p-6e5b355a.js";import{c as r}from"./p-b4a9def1.js";const o=class{constructor(t){e(this,t)}renderHeader(){return r(this.el,"shell-header")?t("slot",{name:"shell-header"}):null}renderContent(){return t("div",{class:"content"},t("slot",null))}renderFooter(){return r(this.el,"shell-footer")?t("div",{class:"footer"},t("slot",{name:"shell-footer"})):null}renderMain(){const e=r(this.el,"primary-panel");return t("div",{class:{main:!0,"main--reversed":"end"===(null==e?void 0:e.position)}},t("slot",{name:"primary-panel"}),this.renderContent(),t("slot",{name:"center-row"}),t("slot",{name:"contextual-panel"}))}render(){return t(a,null,this.renderHeader(),this.renderMain(),this.renderFooter())}get el(){return i(this)}};o.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;--calcite-shell-tip-spacing:26vw}.main{height:100%;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative;border-top:1px solid var(--calcite-ui-border-3);border-bottom:1px solid var(--calcite-ui-border-3);-ms-flex-pack:justify;justify-content:space-between;overflow:hidden}.main--reversed{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.content{height:100%;width:100%;position:absolute;left:0;right:0;bottom:0;top:0;z-index:0}::slotted(.header .heading){font-weight:var(--calcite-ui-text-weight);font-size:0.875rem;line-height:1.5}::slotted(calcite-shell-panel),::slotted(calcite-shell-center-row){position:relative;z-index:1}::slotted(calcite-tip-manager){-webkit-animation:calcite-fade-in-up 150ms ease-in-out;animation:calcite-fade-in-up 150ms ease-in-out;border-radius:var(--calcite-border-radius);bottom:var(--calcite-spacing-plus-half);-webkit-box-shadow:var(--calcite-shadow-2);box-shadow:var(--calcite-shadow-2);-webkit-box-sizing:border-box;box-sizing:border-box;left:var(--calcite-shell-tip-spacing);position:absolute;right:var(--calcite-shell-tip-spacing);z-index:2}.footer{padding:var(--calcite-spacing-half) var(--calcite-spacing)}";const l=class{constructor(t){e(this,t),this.calciteShellPanelToggle=s(this,"calciteShellPanelToggle",7),this.collapsed=!1,this.detached=!1,this.detachedHeightScale="l",this.widthScale="m"}watchHandler(){this.calciteShellPanelToggle.emit()}render(){const{collapsed:e,detached:i,position:s}=this,r=t("div",{class:{content:!0,"content--detached":i},hidden:e},t("slot",null)),o=[t("slot",{name:"action-bar"}),r];return"end"===s&&o.reverse(),t(a,null,o)}static get watchers(){return{collapsed:["watchHandler"]}}};l.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;pointer-events:none;--calcite-shell-panel-detached-max-height:unset}::slotted(calcite-panel),::slotted(calcite-flow){height:100%;max-height:unset;max-width:unset;width:100%}.content{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-ui-background);-ms-flex-flow:column nowrap;flex-flow:column nowrap;display:-ms-flexbox;display:flex;padding:0;pointer-events:auto;width:var(--calcite-shell-panel-width);max-width:var(--calcite-shell-panel-max-width);min-width:var(--calcite-shell-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, max-width 150ms ease-in-out;transition:max-height 150ms ease-in-out, max-width 150ms ease-in-out}:host([width-scale=s]) .content{--calcite-shell-panel-width:12vw;--calcite-shell-panel-max-width:300px;--calcite-shell-panel-min-width:150px}:host([width-scale=m]) .content{--calcite-shell-panel-width:20vw;--calcite-shell-panel-max-width:420px;--calcite-shell-panel-min-width:240px}:host([width-scale=l]) .content{--calcite-shell-panel-width:45vw;--calcite-shell-panel-max-width:680px;--calcite-shell-panel-min-width:340px}:host([detached-height-scale=s]) .content--detached{--calcite-shell-panel-detached-max-height:40vh}:host([detached-height-scale=m]) .content--detached{--calcite-shell-panel-detached-max-height:60vh}:host([detached-height-scale=l]) .content--detached{--calcite-shell-panel-detached-max-height:80vh}.content--detached{border-radius:var(--calcite-border-radius);-webkit-box-shadow:var(--calcite-shadow-0);box-shadow:var(--calcite-shadow-0);height:auto;margin:var(--calcite-spacing-half) var(--calcite-spacing-half) auto;max-height:var(--calcite-shell-panel-detached-max-height);overflow:hidden}.content--detached ::slotted(calcite-panel),.content--detached ::slotted(calcite-flow){max-height:unset}.content[hidden]{display:none}:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar){border-right:1px solid var(--calcite-ui-border-3)}:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar){border-left:1px solid var(--calcite-ui-border-3)}";export{o as calcite_shell,l as calcite_shell_panel}