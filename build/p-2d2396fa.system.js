System.register(["./p-24a86f46.system.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.g}],execute:function(){e({c:rt,u:nt});var r="top";var n="bottom";var a="right";var i="left";var o="auto";var s=[r,n,a,i];var f="start";var c="end";var u="clippingParents";var p="viewport";var v="popper";var l="reference";var d=s.reduce((function(e,t){return e.concat([t+"-"+f,t+"-"+c])}),[]);var m=[].concat(s,[o]).reduce((function(e,t){return e.concat([t,t+"-"+f,t+"-"+c])}),[]);var h="beforeRead";var g="read";var b="afterRead";var y="beforeMain";var w="main";var O="afterMain";var x="beforeWrite";var j="write";var M="afterWrite";var E=[h,g,b,y,w,O,x,j,M];function D(e){return e?(e.nodeName||"").toLowerCase():null}function k(e){if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t?t.defaultView||window:window}return e}function L(e){var t=k(e).Element;return e instanceof t||e instanceof Element}function P(e){var t=k(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function A(e){var t=k(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function B(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{};var n=t.attributes[e]||{};var a=t.elements[e];if(!P(a)||!D(a)){return}Object.assign(a.style,r);Object.keys(n).forEach((function(e){var t=n[e];if(t===false){a.removeAttribute(e)}else{a.setAttribute(e,t===true?"":t)}}))}))}function W(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}return function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e];var a=t.attributes[e]||{};var i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]);var o=i.reduce((function(e,t){e[t]="";return e}),{});if(!P(n)||!D(n)){return}Object.assign(n.style,o);Object.keys(a).forEach((function(e){n.removeAttribute(e)}))}))}}var H={name:"applyStyles",enabled:true,phase:"write",fn:B,effect:W,requires:["computeStyles"]};function R(e){return e.split("-")[0]}function T(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function S(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t)){return true}else if(r&&A(r)){var n=t;do{if(n&&e.isSameNode(n)){return true}n=n.parentNode||n.host}while(n)}return false}function q(e){return k(e).getComputedStyle(e)}function C(e){return["table","td","th"].indexOf(D(e))>=0}function N(e){return((L(e)?e.ownerDocument:e.document)||window.document).documentElement}function V(e){if(D(e)==="html"){return e}return e.assignedSlot||e.parentNode||e.host||N(e)}function I(e){if(!P(e)||q(e).position==="fixed"){return null}var t=e.offsetParent;if(t){var r=N(t);if(D(t)==="body"&&q(t).position==="static"&&q(r).position!=="static"){return r}}return t}function U(e){var t=V(e);while(P(t)&&["html","body"].indexOf(D(t))<0){var r=q(t);if(r.transform!=="none"||r.perspective!=="none"||r.willChange&&r.willChange!=="auto"){return t}else{t=t.parentNode}}return null}function z(e){var t=k(e);var r=I(e);while(r&&C(r)&&q(r).position==="static"){r=I(r)}if(r&&D(r)==="body"&&q(r).position==="static"){return t}return r||U(e)||t}function _(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function F(e,t,r){return Math.max(e,Math.min(t,r))}function X(){return{top:0,right:0,bottom:0,left:0}}function Y(e){return Object.assign(Object.assign({},X()),e)}function G(e,t){return t.reduce((function(t,r){t[r]=e;return t}),{})}function J(e){var t;var o=e.state,s=e.name;var f=o.elements.arrow;var c=o.modifiersData.popperOffsets;var u=R(o.placement);var p=_(u);var v=[i,a].indexOf(u)>=0;var l=v?"height":"width";if(!f||!c){return}var d=o.modifiersData[s+"#persistent"].padding;var m=T(f);var h=p==="y"?r:i;var g=p==="y"?n:a;var b=o.rects.reference[l]+o.rects.reference[p]-c[p]-o.rects.popper[l];var y=c[p]-o.rects.reference[p];var w=z(f);var O=w?p==="y"?w.clientHeight||0:w.clientWidth||0:0;var x=b/2-y/2;var j=d[h];var M=O-m[l]-d[g];var E=O/2-m[l]/2+x;var D=F(j,E,M);var k=p;o.modifiersData[s]=(t={},t[k]=D,t.centerOffset=D-E,t)}function K(e){var t=e.state,r=e.options,n=e.name;var a=r.element,i=a===void 0?"[data-popper-arrow]":a,o=r.padding,f=o===void 0?0:o;if(i==null){return}if(typeof i==="string"){i=t.elements.popper.querySelector(i);if(!i){return}}if(!S(t.elements.popper,i)){return}t.elements.arrow=i;t.modifiersData[n+"#persistent"]={padding:Y(typeof f!=="number"?f:G(f,s))}}var Q={name:"arrow",enabled:true,phase:"main",fn:J,effect:K,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};var Z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function $(e){var t=e.x,r=e.y;var n=window;var a=n.devicePixelRatio||1;return{x:Math.round(t*a)/a||0,y:Math.round(r*a)/a||0}}function ee(e){var t;var o=e.popper,s=e.popperRect,f=e.placement,c=e.offsets,u=e.position,p=e.gpuAcceleration,v=e.adaptive;var l=$(c),d=l.x,m=l.y;var h=c.hasOwnProperty("x");var g=c.hasOwnProperty("y");var b=i;var y=r;var w=window;if(v){var O=z(o);if(O===k(o)){O=N(o)}if(f===r){y=n;m-=O.clientHeight-s.height;m*=p?1:-1}if(f===i){b=a;d-=O.clientWidth-s.width;d*=p?1:-1}}var x=Object.assign({position:u},v&&Z);if(p){var j;return Object.assign(Object.assign({},x),{},(j={},j[y]=g?"0":"",j[b]=h?"0":"",j.transform=(w.devicePixelRatio||1)<2?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",j))}return Object.assign(Object.assign({},x),{},(t={},t[y]=g?m+"px":"",t[b]=h?d+"px":"",t.transform="",t))}function te(e){var t=e.state,r=e.options;var n=r.gpuAcceleration,a=n===void 0?true:n,i=r.adaptive,o=i===void 0?true:i;var s={placement:R(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a};if(t.modifiersData.popperOffsets!=null){t.styles.popper=Object.assign(Object.assign({},t.styles.popper),ee(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o})))}if(t.modifiersData.arrow!=null){t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),ee(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:false})))}t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})}var re={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:te,data:{}};var ne={passive:true};function ae(e){var t=e.state,r=e.instance,n=e.options;var a=n.scroll,i=a===void 0?true:a,o=n.resize,s=o===void 0?true:o;var f=k(t.elements.popper);var c=[].concat(t.scrollParents.reference,t.scrollParents.popper);if(i){c.forEach((function(e){e.addEventListener("scroll",r.update,ne)}))}if(s){f.addEventListener("resize",r.update,ne)}return function(){if(i){c.forEach((function(e){e.removeEventListener("scroll",r.update,ne)}))}if(s){f.removeEventListener("resize",r.update,ne)}}}var ie={name:"eventListeners",enabled:true,phase:"write",fn:function e(){},effect:ae,data:{}};var oe={left:"right",right:"left",bottom:"top",top:"bottom"};function se(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var fe={start:"end",end:"start"};function ce(e){return e.replace(/start|end/g,(function(e){return fe[e]}))}function ue(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function pe(e){var t=k(e);var r=t.pageXOffset;var n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function ve(e){return ue(N(e)).left+pe(e).scrollLeft}function le(e){var t=k(e);var r=N(e);var n=t.visualViewport;var a=r.clientWidth;var i=r.clientHeight;var o=0;var s=0;if(n){a=n.width;i=n.height;if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){o=n.offsetLeft;s=n.offsetTop}}return{width:a,height:i,x:o+ve(e),y:s}}function de(e){var t=N(e);var r=pe(e);var n=e.ownerDocument.body;var a=Math.max(t.scrollWidth,t.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0);var i=Math.max(t.scrollHeight,t.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0);var o=-r.scrollLeft+ve(e);var s=-r.scrollTop;if(q(n||t).direction==="rtl"){o+=Math.max(t.clientWidth,n?n.clientWidth:0)-a}return{width:a,height:i,x:o,y:s}}function me(e){var t=q(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function he(e){if(["html","body","#document"].indexOf(D(e))>=0){return e.ownerDocument.body}if(P(e)&&me(e)){return e}return he(V(e))}function ge(e,t){if(t===void 0){t=[]}var r=he(e);var n=D(r)==="body";var a=k(r);var i=n?[a].concat(a.visualViewport||[],me(r)?r:[]):r;var o=t.concat(i);return n?o:o.concat(ge(V(i)))}function be(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ye(e){var t=ue(e);t.top=t.top+e.clientTop;t.left=t.left+e.clientLeft;t.bottom=t.top+e.clientHeight;t.right=t.left+e.clientWidth;t.width=e.clientWidth;t.height=e.clientHeight;t.x=t.left;t.y=t.top;return t}function we(e,t){return t===p?be(le(e)):P(t)?ye(t):be(de(N(e)))}function Oe(e){var t=ge(V(e));var r=["absolute","fixed"].indexOf(q(e).position)>=0;var n=r&&P(e)?z(e):e;if(!L(n)){return[]}return t.filter((function(e){return L(e)&&S(e,n)&&D(e)!=="body"}))}function xe(e,t,r){var n=t==="clippingParents"?Oe(e):[].concat(t);var a=[].concat(n,[r]);var i=a[0];var o=a.reduce((function(t,r){var n=we(e,r);t.top=Math.max(n.top,t.top);t.right=Math.min(n.right,t.right);t.bottom=Math.min(n.bottom,t.bottom);t.left=Math.max(n.left,t.left);return t}),we(e,i));o.width=o.right-o.left;o.height=o.bottom-o.top;o.x=o.left;o.y=o.top;return o}function je(e){return e.split("-")[1]}function Me(e){var t=e.reference,o=e.element,s=e.placement;var u=s?R(s):null;var p=s?je(s):null;var v=t.x+t.width/2-o.width/2;var l=t.y+t.height/2-o.height/2;var d;switch(u){case r:d={x:v,y:t.y-o.height};break;case n:d={x:v,y:t.y+t.height};break;case a:d={x:t.x+t.width,y:l};break;case i:d={x:t.x-o.width,y:l};break;default:d={x:t.x,y:t.y}}var m=u?_(u):null;if(m!=null){var h=m==="y"?"height":"width";switch(p){case f:d[m]=Math.floor(d[m])-Math.floor(t[h]/2-o[h]/2);break;case c:d[m]=Math.floor(d[m])+Math.ceil(t[h]/2-o[h]/2);break}}return d}function Ee(e,t){if(t===void 0){t={}}var i=t,o=i.placement,f=o===void 0?e.placement:o,c=i.boundary,d=c===void 0?u:c,m=i.rootBoundary,h=m===void 0?p:m,g=i.elementContext,b=g===void 0?v:g,y=i.altBoundary,w=y===void 0?false:y,O=i.padding,x=O===void 0?0:O;var j=Y(typeof x!=="number"?x:G(x,s));var M=b===v?l:v;var E=e.elements.reference;var D=e.rects.popper;var k=e.elements[w?M:b];var P=xe(L(k)?k:k.contextElement||N(e.elements.popper),d,h);var A=ue(E);var B=Me({reference:A,element:D,strategy:"absolute",placement:f});var W=be(Object.assign(Object.assign({},D),B));var H=b===v?W:A;var R={top:P.top-H.top+j.top,bottom:H.bottom-P.bottom+j.bottom,left:P.left-H.left+j.left,right:H.right-P.right+j.right};var T=e.modifiersData.offset;if(b===v&&T){var S=T[f];Object.keys(R).forEach((function(e){var t=[a,n].indexOf(e)>=0?1:-1;var i=[r,n].indexOf(e)>=0?"y":"x";R[e]+=S[i]*t}))}return R}function De(e,t){if(t===void 0){t={}}var r=t,n=r.placement,a=r.boundary,i=r.rootBoundary,o=r.padding,f=r.flipVariations,c=r.allowedAutoPlacements,u=c===void 0?m:c;var p=je(n);var v=p?f?d:d.filter((function(e){return je(e)===p})):s;var l=v.filter((function(e){return u.indexOf(e)>=0}));if(l.length===0){l=v}var h=l.reduce((function(t,r){t[r]=Ee(e,{placement:r,boundary:a,rootBoundary:i,padding:o})[R(r)];return t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}function ke(e){if(R(e)===o){return[]}var t=se(e);return[ce(e),t,ce(t)]}function Le(e){var t=e.state,s=e.options,c=e.name;if(t.modifiersData[c]._skip){return}var u=s.mainAxis,p=u===void 0?true:u,v=s.altAxis,l=v===void 0?true:v,d=s.fallbackPlacements,m=s.padding,h=s.boundary,g=s.rootBoundary,b=s.altBoundary,y=s.flipVariations,w=y===void 0?true:y,O=s.allowedAutoPlacements;var x=t.options.placement;var j=R(x);var M=j===x;var E=d||(M||!w?[se(x)]:ke(x));var D=[x].concat(E).reduce((function(e,r){return e.concat(R(r)===o?De(t,{placement:r,boundary:h,rootBoundary:g,padding:m,flipVariations:w,allowedAutoPlacements:O}):r)}),[]);var k=t.rects.reference;var L=t.rects.popper;var P=new Map;var A=true;var B=D[0];for(var W=0;W<D.length;W++){var H=D[W];var T=R(H);var S=je(H)===f;var q=[r,n].indexOf(T)>=0;var C=q?"width":"height";var N=Ee(t,{placement:H,boundary:h,rootBoundary:g,altBoundary:b,padding:m});var V=q?S?a:i:S?n:r;if(k[C]>L[C]){V=se(V)}var I=se(V);var U=[];if(p){U.push(N[T]<=0)}if(l){U.push(N[V]<=0,N[I]<=0)}if(U.every((function(e){return e}))){B=H;A=false;break}P.set(H,U)}if(A){var z=w?3:1;var _=function e(t){var r=D.find((function(e){var r=P.get(e);if(r){return r.slice(0,t).every((function(e){return e}))}}));if(r){B=r;return"break"}};for(var F=z;F>0;F--){var X=_(F);if(X==="break")break}}if(t.placement!==B){t.modifiersData[c]._skip=true;t.placement=B;t.reset=true}}var Pe={name:"flip",enabled:true,phase:"main",fn:Le,requiresIfExists:["offset"],data:{_skip:false}};function Ae(e,t,r){if(r===void 0){r={x:0,y:0}}return{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Be(e){return[r,a,n,i].some((function(t){return e[t]>=0}))}function We(e){var t=e.state,r=e.name;var n=t.rects.reference;var a=t.rects.popper;var i=t.modifiersData.preventOverflow;var o=Ee(t,{elementContext:"reference"});var s=Ee(t,{altBoundary:true});var f=Ae(o,n);var c=Ae(s,a,i);var u=Be(f);var p=Be(c);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p};t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":u,"data-popper-escaped":p})}var He={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:We};function Re(e,t,n){var o=R(e);var s=[i,r].indexOf(o)>=0?-1:1;var f=typeof n==="function"?n(Object.assign(Object.assign({},t),{},{placement:e})):n,c=f[0],u=f[1];c=c||0;u=(u||0)*s;return[i,a].indexOf(o)>=0?{x:u,y:c}:{x:c,y:u}}function Te(e){var t=e.state,r=e.options,n=e.name;var a=r.offset,i=a===void 0?[0,0]:a;var o=m.reduce((function(e,r){e[r]=Re(r,t.rects,i);return e}),{});var s=o[t.placement],f=s.x,c=s.y;if(t.modifiersData.popperOffsets!=null){t.modifiersData.popperOffsets.x+=f;t.modifiersData.popperOffsets.y+=c}t.modifiersData[n]=o}var Se={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:Te};function qe(e){var t=e.state,r=e.name;t.modifiersData[r]=Me({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Ce={name:"popperOffsets",enabled:true,phase:"read",fn:qe,data:{}};function Ne(e){return e==="x"?"y":"x"}function Ve(e){var t=e.state,o=e.options,s=e.name;var c=o.mainAxis,u=c===void 0?true:c,p=o.altAxis,v=p===void 0?false:p,l=o.boundary,d=o.rootBoundary,m=o.altBoundary,h=o.padding,g=o.tether,b=g===void 0?true:g,y=o.tetherOffset,w=y===void 0?0:y;var O=Ee(t,{boundary:l,rootBoundary:d,padding:h,altBoundary:m});var x=R(t.placement);var j=je(t.placement);var M=!j;var E=_(x);var D=Ne(E);var k=t.modifiersData.popperOffsets;var L=t.rects.reference;var P=t.rects.popper;var A=typeof w==="function"?w(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):w;var B={x:0,y:0};if(!k){return}if(u){var W=E==="y"?r:i;var H=E==="y"?n:a;var S=E==="y"?"height":"width";var q=k[E];var C=k[E]+O[W];var N=k[E]-O[H];var V=b?-P[S]/2:0;var I=j===f?L[S]:P[S];var U=j===f?-P[S]:-L[S];var Y=t.elements.arrow;var G=b&&Y?T(Y):{width:0,height:0};var J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:X();var K=J[W];var Q=J[H];var Z=F(0,L[S],G[S]);var $=M?L[S]/2-V-Z-K-A:I-Z-K-A;var ee=M?-L[S]/2+V+Z+Q+A:U+Z+Q+A;var te=t.elements.arrow&&z(t.elements.arrow);var re=te?E==="y"?te.clientTop||0:te.clientLeft||0:0;var ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][E]:0;var ae=k[E]+$-ne-re;var ie=k[E]+ee-ne;var oe=F(b?Math.min(C,ae):C,q,b?Math.max(N,ie):N);k[E]=oe;B[E]=oe-q}if(v){var se=E==="x"?r:i;var fe=E==="x"?n:a;var ce=k[D];var ue=ce+O[se];var pe=ce-O[fe];var ve=F(ue,ce,pe);k[D]=ve;B[D]=ve-ce}t.modifiersData[s]=B}var Ie={name:"preventOverflow",enabled:true,phase:"main",fn:Ve,requiresIfExists:["offset"]};function Ue(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function ze(e){if(e===k(e)||!P(e)){return pe(e)}else{return Ue(e)}}function _e(e,t,r){if(r===void 0){r=false}var n=N(t);var a=ue(e);var i=P(t);var o={scrollLeft:0,scrollTop:0};var s={x:0,y:0};if(i||!i&&!r){if(D(t)!=="body"||me(n)){o=ze(t)}if(P(t)){s=ue(t);s.x+=t.clientLeft;s.y+=t.clientTop}else if(n){s.x=ve(n)}}return{x:a.left+o.scrollLeft-s.x,y:a.top+o.scrollTop-s.y,width:a.width,height:a.height}}function Fe(e){var t=new Map;var r=new Set;var n=[];e.forEach((function(e){t.set(e.name,e)}));function a(e){r.add(e.name);var i=[].concat(e.requires||[],e.requiresIfExists||[]);i.forEach((function(e){if(!r.has(e)){var n=t.get(e);if(n){a(n)}}}));n.push(e)}e.forEach((function(e){if(!r.has(e.name)){a(e)}}));return n}function Xe(e){var t=Fe(e);return E.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}function Ye(e){var t;return function(){if(!t){t=new Promise((function(r){Promise.resolve().then((function(){t=undefined;r(e())}))}))}return t}}function Ge(e){var t=e.reduce((function(e,t){var r=e[t.name];e[t.name]=r?Object.assign(Object.assign(Object.assign({},r),t),{},{options:Object.assign(Object.assign({},r.options),t.options),data:Object.assign(Object.assign({},r.data),t.data)}):t;return e}),{});return Object.keys(t).map((function(e){return t[e]}))}var Je={placement:"bottom",modifiers:[],strategy:"absolute"};function Ke(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return!t.some((function(e){return!(e&&typeof e.getBoundingClientRect==="function")}))}function Qe(e){if(e===void 0){e={}}var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,i=a===void 0?Je:a;return function e(t,r,a){if(a===void 0){a=i}var o={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},Je),i),modifiersData:{},elements:{reference:t,popper:r},attributes:{},styles:{}};var s=[];var f=false;var c={state:o,setOptions:function e(a){p();o.options=Object.assign(Object.assign(Object.assign({},i),o.options),a);o.scrollParents={reference:L(t)?ge(t):t.contextElement?ge(t.contextElement):[],popper:ge(r)};var s=Xe(Ge([].concat(n,o.options.modifiers)));o.orderedModifiers=s.filter((function(e){return e.enabled}));u();return c.update()},forceUpdate:function e(){if(f){return}var t=o.elements,r=t.reference,n=t.popper;if(!Ke(r,n)){return}o.rects={reference:_e(r,z(n),o.options.strategy==="fixed"),popper:T(n)};o.reset=false;o.placement=o.options.placement;o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var a=0;a<o.orderedModifiers.length;a++){if(o.reset===true){o.reset=false;a=-1;continue}var i=o.orderedModifiers[a],s=i.fn,u=i.options,p=u===void 0?{}:u,v=i.name;if(typeof s==="function"){o=s({state:o,options:p,name:v,instance:c})||o}}},update:Ye((function(){return new Promise((function(e){c.forceUpdate();e(o)}))})),destroy:function e(){p();f=true}};if(!Ke(t,r)){return c}c.setOptions(a).then((function(e){if(!f&&a.onFirstUpdate){a.onFirstUpdate(e)}}));function u(){o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=r===void 0?{}:r,a=e.effect;if(typeof a==="function"){var i=a({state:o,name:t,instance:c,options:n});var f=function e(){};s.push(i||f)}}))}function p(){s.forEach((function(e){return e()}));s=[]}return c}}var Ze=[ie,Ce,re,H,Se,Pe,Ie,Q,He];var $e=Qe({defaultModifiers:Ze});var et=e("C",{animation:"calcite-popper-anim",animationActive:"calcite-popper-anim--active"});function tt(e,r){var n=["left","right"];if(t(e)==="rtl"){n.reverse()}return r.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}function rt(e){var t=e.referenceEl,r=e.el,n=e.placement,a=e.modifiers;if(!t){return null}return $e(t,r,{placement:tt(r,n),modifiers:a})}function nt(e){var t=e.el,r=e.modifiers,n=e.placement,a=e.popper;var i=tt(t,n);a.setOptions({modifiers:r,placement:i})}function at(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))}var it=4;var ot=e("d",Math.ceil(at(it,it)))}}}));