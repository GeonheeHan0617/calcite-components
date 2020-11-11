import{r as t,c as e,h as a,g as s}from"./p-6e5b355a.js";import"./p-b4a9def1.js";import"./p-fc8feabd.js";import{g as i}from"./p-0ae16e31.js";import"./p-39515aa9.js";import{m as r,d as o,s as n,h as l,g as c,k as m,i as f,a as p,c as h,b as d,e as b,f as u,j as x,L as y}from"./p-e861979d.js";import{I as k}from"./p-aa9926da.js";var w;!function(t){t.grip="grip"}(w||(w={}));const g=class{constructor(a){t(this,a),this.calciteListChange=e(this,"calciteListChange",7),this.calciteListOrderChange=e(this,"calciteListOrderChange",7),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(r.bind(this)),this.deselectSiblingItems=o.bind(this),this.selectSiblings=n.bind(this),this.handleFilter=l.bind(this),this.getItemData=c.bind(this),this.keyDownHandler=t=>{const e=t.composedPath().find((t=>{var e;return null===(e=t.dataset)||void 0===e?void 0:e.jsHandle})),a=t.composedPath().find((t=>{var e;return"calcite-value-list-item"===(null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase())}));if(!e||!a.handleActivated)return void m.call(this,t);if("ArrowUp"!==t.key&&"ArrowDown"!==t.key)return;t.preventDefault();const{el:s,items:r}=this,o="ArrowDown"===t.key?1:-1,n=r.indexOf(a),l=i(n+o,r.length);if(l===r.length-1)s.appendChild(a);else{const t=s.children[l];s.insertBefore(a,t===a.nextElementSibling?t.nextElementSibling:t)}requestAnimationFrame((()=>e.focus())),a.handleActivated=!0}}connectedCallback(){f.call(this),p.call(this)}componentDidLoad(){this.setUpDragAndDrop()}disconnectedCallback(){h.call(this),this.cleanUpDragAndDrop()}calciteListItemChangeHandler(t){d.call(this,t)}calciteListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(t){b.call(this,t)}setUpItems(){u.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.dragEnabled&&(this.sortable=k.create(this.el,{handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map((t=>t.value));this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){this.dragEnabled&&this.sortable.destroy()}async getSelectedItems(){return this.selectedValues}async setFocus(){return x.call(this)}getIconType(){let t=null;return this.dragEnabled&&(t=w.grip),t}render(){return a(y,{onKeyDown:this.keyDownHandler,props:this})}get el(){return s(this)}};g.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:column;flex-flow:column;position:relative}calcite-value-list-item:last-of-type{-webkit-box-shadow:none;box-shadow:none}header{background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:var(--calcite-spacing-quarter);-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3)}header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:1px}calcite-scrim{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:column;flex-flow:column;pointer-events:none}";export{g as calcite_value_list}