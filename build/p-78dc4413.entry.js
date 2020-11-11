import{r as t,c as e,h as a,H as i,g as s}from"./p-6e5b355a.js";import{c as r}from"./p-b4a9def1.js";import{I as o}from"./p-39515aa9.js";import{T as n,I as l,C as c,S as d}from"./p-af4f2d93.js";const m=class{constructor(a){t(this,a),this.calciteListItemChange=e(this,"calciteListItemChange",7),this.calciteListItemRemove=e(this,"calciteListItemRemove",7),this.calciteListItemPropsChange=e(this,"calciteListItemPropsChange",7),this.calciteListItemValueChange=e(this,"calciteListItemValueChange",7),this.disabled=!1,this.disableDeselect=!1,this.icon=null,this.removable=!1,this.selected=!1,this.intlRemove=n.remove,this.pickListClickHandler=t=>{this.disabled||this.disableDeselect&&this.selected||(this.shiftPressed=t.shiftKey,this.selected=!this.selected)},this.pickListKeyDownHandler=t=>{if(" "===t.key){if(t.preventDefault(),this.disableDeselect&&this.selected)return;this.selected=!this.selected}},this.removeClickHandler=()=>{this.calciteListItemRemove.emit()}}descriptionWatchHandler(){this.calciteListItemPropsChange.emit()}labelWatchHandler(){this.calciteListItemPropsChange.emit()}metadataWatchHandler(){this.calciteListItemPropsChange.emit()}selectedWatchHandler(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed}),this.shiftPressed=!1}valueWatchHandler(t,e){this.calciteListItemValueChange.emit({oldValue:e,newValue:t})}async toggleSelected(t){this.disabled||(this.selected="boolean"==typeof t?t:!this.selected)}async setFocus(){var t;null===(t=this.focusEl)||void 0===t||t.focus()}renderIcon(){const{icon:t}=this;return t?a("span",{class:{[c.icon]:!0,[c.iconDot]:t===o.circle}},t===o.square?a("calcite-icon",{icon:l.checked,scale:"s"}):null):null}renderRemoveAction(){return this.removable?a("calcite-action",{class:c.remove,icon:l.remove,onClick:this.removeClickHandler,slot:d.actionsEnd,text:this.intlRemove}):null}renderActionsStart(){const{el:t}=this;return r(t,d.actionsStart)?a("div",{class:{[c.actions]:!0,[c.actionsStart]:!0}},a("slot",{name:d.actionsStart})):null}renderActionsEnd(){const{el:t,removable:e}=this;return r(t,d.actionsEnd)||e?a("div",{class:{[c.actions]:!0,[c.actionsEnd]:!0}},a("slot",{name:d.actionsEnd}),this.renderRemoveAction()):null}render(){const{description:t,label:e}=this;return a(i,{"aria-checked":this.selected.toString(),role:"menuitemcheckbox"},this.renderIcon(),this.renderActionsStart(),a("label",{"aria-label":e,class:c.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,ref:t=>this.focusEl=t,tabIndex:0},a("div",{class:c.textContainer},a("span",{class:c.title},e),t?a("span",{class:c.description},t):null)),this.renderActionsEnd())}get el(){return s(this)}static get watchers(){return{description:["descriptionWatchHandler"],label:["labelWatchHandler"],metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],value:["valueWatchHandler"]}}};m.style='@charset "UTF-8";@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;margin:0 0 1px 0;color:var(--calcite-ui-text-1);-webkit-transition:background-color 150ms ease-in-out;transition:background-color 150ms ease-in-out;-webkit-animation:calcite-fade-in 150ms ease-in-out;animation:calcite-fade-in 150ms ease-in-out;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3);--calcite-icon-dot-size:16px}:host(:hover){background-color:var(--calcite-ui-foreground-2)}.icon{-ms-flex-align:center;align-items:center;color:var(--calcite-ui-blue-3);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;line-height:0;margin:0 var(--calcite-spacing-half);opacity:0}.icon-dot{width:calc(var(--calcite-icon-dot-size) / 2);margin:calc(var(--calcite-icon-dot-size) / 2)}.icon-dot:before{content:"•"}:host([selected]) .icon{-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1}.label{background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-spacing-three-quarters);-ms-flex-align:center;align-items:center;mix-blend-mode:multiply;cursor:pointer;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.label:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;pointer-events:none;padding:0 var(--calcite-spacing-quarter)}.title{font-size:0.75rem;line-height:1.5;word-wrap:break-word;word-break:break-word}.description{color:var(--calcite-ui-text-3);font-family:var(--calcite-code-family);margin-top:var(--calcite-spacing-quarter);font-size:0.75rem;line-height:1.5;word-wrap:break-word;word-break:break-word}.actions{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;justify-self:flex-end;margin:0}::slotted(calcite-action),.remove{mix-blend-mode:multiply}.actions--start~.label{padding-left:var(--calcite-spacing-quarter)}.calcite--rtl .actions--start~.label{padding-left:unset;padding-right:var(--calcite-spacing-quarter)}';export{m as calcite_pick_list_item}