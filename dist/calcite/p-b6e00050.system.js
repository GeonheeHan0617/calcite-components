System.register([],(function(t){"use strict";return{execute:function(){t({a:r,b:o,c:i,f:u,g:n,h:c,n:e});function e(t){if(Array.isArray(t)){return t}else{return Array.prototype.slice.call(t)}}function n(t){return r(t,"dir","ltr")}function r(t,e,n){var r=t.closest("["+e+"]");return r?r.getAttribute(e):n}function u(t){if(!t){return}typeof t.setFocus==="function"?t.setFocus():t.focus()}function i(t,n){var r=t.querySelector("slot");var u=r?r.assignedElements():t.children;return e(u).filter((function(t){return t.matches(n)}))}function o(t){var e=t===null||t===void 0?void 0:t.getAttribute("aria-describedby");return e&&document.getElementById(e)||null}function c(t,e){return t.shadowRoot.contains(e)||t.contains(e)}}}}));