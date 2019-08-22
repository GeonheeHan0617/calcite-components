'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9cd06664.js');
const dom = require('./dom-dcb5a4ba.js');

const CalciteButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** specify the color of the button, defaults to blue */
        this.color = "blue";
        /** specify the appearance style of the button, defaults to solid. Specifying "inline" will render the component as an anchor */
        this.appearance = "solid";
        /** Select theme (light or dark) */
        this.theme = "light";
        /** specify the scale of the button, defaults to m */
        this.scale = "m";
        /** specify the width of the button, defaults to auto */
        this.width = "auto";
        /** optionally add a calcite-loader component inline to indicate loading is occuring. You can add and remove this prop depending on status  */
        this.loading = false;
        /** optionally used with icon, select where to position the icon */
        this.iconposition = "start";
        /**
         * @internal
         */
        // hastext prop for spacing graphic when text is present in slot
        this.hastext = false;
    }
    connectedCallback() {
        // prop validations
        let appearance = ["solid", "outline", "clear", "inline", "transparent"];
        if (!appearance.includes(this.appearance))
            this.appearance = "solid";
        let color = ["blue", "red", "dark", "light"];
        if (!color.includes(this.color))
            this.color = "blue";
        let scale = ["xs", "s", "m", "l", "xl"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let width = ["auto", "half", "full"];
        if (!width.includes(this.width))
            this.width = "auto";
        let theme = ["dark", "light"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        let iconposition = ["start", "end"];
        if (this.icon !== null && !iconposition.includes(this.iconposition))
            this.iconposition = "start";
    }
    componentDidLoad() {
        {
            let textSlot = this.el.shadowRoot.querySelector("slot");
            let textNode = textSlot ? textSlot.assignedNodes() : null;
            if (textNode && (textNode[0] !== undefined && textNode[0] !== null))
                this.hastext = true;
        }
    }
    getAttributes() {
        // spread attributes specified on the compoennt to component child, if they aren't props
        let props = [
            "appearance",
            "color",
            "dir",
            "hastext",
            "icon",
            "iconposition",
            "loading",
            "scale",
            "width",
            "theme"
        ];
        return Array.from(this.el.attributes)
            .filter(a => a && !props.includes(a.name))
            .reduce((acc, { name, value }) => (Object.assign({}, acc, { [name]: value })), {});
    }
    render() {
        const dir = dom.getElementDir(this.el);
        const attributes = this.getAttributes();
        const Type = this.href || this.appearance === "inline" ? "a" : "button";
        const role = Type === "a" ? "link" : "button";
        const loader = this.loading ? (core.h("div", { class: "calcite-button--loader" }, core.h("calcite-loader", { "is-active": true, inline: true }))) : null;
        const icon = this.icon ? (core.h("svg", { class: "calcite-button--icon", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24" }, core.h("path", { d: this.icon }))) : null;
        if (this.iconposition === "start") {
            return (core.h(core.Host, { dir: dir, hastext: this.hastext }, core.h(Type, Object.assign({}, attributes, { role: role }), loader, icon, core.h("slot", null))));
        }
        else if (this.iconposition === "end") {
            return (core.h(core.Host, { dir: dir, hastext: this.hastext }, core.h(Type, Object.assign({}, attributes, { role: role }), loader, core.h("slot", null), icon)));
        }
        else {
            core.h(core.Host, { dir: dir, hastext: this.hastext }, core.h(Type, Object.assign({}, attributes, { role: role }), loader, core.h("slot", null)));
        }
    }
    get el() { return core.getElement(this); }
    static get style() { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-button-blue:#007ac2;--calcite-button-blue-hover:#2890ce;--calcite-button-blue-pressed:#00619b;--calcite-button-red:#d83020;--calcite-button-red-hover:#e65240;--calcite-button-red-pressed:#a82b1e;--calcite-button-blue-inline-underline:rgba(0,122,194,0.2);--calcite-button-red-inline-underline:rgba(216,48,32,0.2);--calcite-button-blue-solid-color:#fff;--calcite-button-red-solid-color:#fff;--calcite-button-outline-background:#fff;--calcite-button-outline-color:#0b0b0b;--calcite-button-outline-color-pressed:#0b0b0b}:host([theme=dark]){--calcite-button-blue:#3db8ff;--calcite-button-blue-hover:#59d6ff;--calcite-button-blue-pressed:#009af2;--calcite-button-red:#ff0015;--calcite-button-red-hover:#ff624d;--calcite-button-red-pressed:#d90012;--calcite-button-blue-inline-underline:rgba(61,184,255,0.2);--calcite-button-red-inline-underline:rgba(255,0,21,0.2);--calcite-button-blue-solid-color:#0b0b0b;--calcite-button-red-solid-color:#0b0b0b;--calcite-button-outline-background:#151515;--calcite-button-outline-color:#fff;--calcite-button-outline-color-pressed:#fff}:host a,:host button{position:relative;display:inline-block;padding:.375rem 1rem;text-decoration:none;width:auto;border-radius:0;border:none;line-height:inherit;font-family:inherit;-webkit-appearance:none;cursor:pointer;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}:host a:hover,:host button:hover{text-decoration:none}:host([width=half]) a,:host([width=half]) button{width:50%}:host([width=full]) a,:host([width=full]) button{width:100%}.calcite-button--icon{display:-ms-inline-flexbox;display:inline-flex;top:2px;position:relative;height:16px;width:16px;margin:0 auto;line-height:inherit;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}:host([hastext][iconposition=start]) .calcite-button--icon{margin-right:.5rem}:host([hastext][iconposition=start][dir=rtl]) .calcite-button--icon{margin-right:0;margin-left:.5rem}:host([hastext][iconposition=end]) .calcite-button--icon{margin-left:.5rem}:host([hastext][iconposition=end][dir=rtl]) .calcite-button--icon{margin-left:0;margin-right:.5rem}:host([appearance=inline]) .calcite-button--icon{max-height:.75rem;top:0}:host([appearance=inline][iconposition=start]) .calcite-button--icon{margin-right:.375rem}:host([appearance=inline][iconposition=start][dir=rtl]) .calcite-button--icon{margin-left:.375rem;margin-right:0}:host([appearance=inline][iconposition=end]) .calcite-button--icon{margin-left:.375rem}:host([appearance=inline][iconposition=end][dir=rtl]) .calcite-button--icon{margin-left:0;margin-right:.375rem}.calcite-button--loader{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.calcite-button--loader calcite-loader{margin:0}:host([loading]) a,:host([loading]) button{color:transparent!important;pointer-events:none}:host([loading]) a .calcite-button--icon,:host([loading]) button .calcite-button--icon{opacity:0}:host([appearance=solid][color=blue]) a,:host([appearance=solid][color=blue]) button{color:var(--calcite-button-blue-solid-color);background-color:var(--calcite-button-blue);border:1px solid var(--calcite-button-blue);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=solid][color=blue]) a:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) button:hover{background-color:var(--calcite-button-blue-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-button-blue);box-shadow:inset 0 0 0 1px var(--calcite-button-blue)}:host([appearance=solid][color=blue]) a:active,:host([appearance=solid][color=blue]) button:active{background-color:var(--calcite-button-blue);border-color:var(--calcite-button-blue-pressed);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-button-blue-pressed);box-shadow:inset 0 0 0 2px var(--calcite-button-blue-pressed)}:host([appearance=solid][color=blue]) a .calcite-button--icon,:host([appearance=solid][color=blue]) button .calcite-button--icon{fill:var(--calcite-button-blue-solid-color)}:host([appearance=solid][color=blue]) a calcite-loader,:host([appearance=solid][color=blue]) button calcite-loader{color:var(--calcite-button-blue-solid-color)}:host([appearance=solid][color=red]) a,:host([appearance=solid][color=red]) button{color:var(--calcite-button-red-solid-color);background-color:var(--calcite-button-red);border:1px solid var(--calcite-button-red);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=solid][color=red]) a:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) button:hover{background-color:var(--calcite-button-red-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-button-red);box-shadow:inset 0 0 0 1px var(--calcite-button-red)}:host([appearance=solid][color=red]) a:active,:host([appearance=solid][color=red]) button:active{background-color:var(--calcite-button-red);border-color:var(--calcite-button-red-pressed);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-button-red-pressed);box-shadow:inset 0 0 0 2px var(--calcite-button-red-pressed)}:host([appearance=solid][color=red]) a .calcite-button--icon,:host([appearance=solid][color=red]) button .calcite-button--icon{fill:var(--calcite-button-red-solid-color)}:host([appearance=solid][color=red]) a calcite-loader,:host([appearance=solid][color=red]) button calcite-loader{color:var(--calcite-button-red-solid-color)}:host([appearance=solid][color=light]) a,:host([appearance=solid][color=light]) button{color:#000;background-color:#f3f3f3;border:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=solid][color=light]) a:focus,:host([appearance=solid][color=light]) a:hover,:host([appearance=solid][color=light]) button:focus,:host([appearance=solid][color=light]) button:hover{background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #f3f3f3;box-shadow:inset 0 0 0 1px #f3f3f3}:host([appearance=solid][color=light]) a:active,:host([appearance=solid][color=light]) button:active{background-color:#f3f3f3;border-color:#eaeaea;-webkit-box-shadow:inset 0 0 0 2px #eaeaea;box-shadow:inset 0 0 0 2px #eaeaea}:host([appearance=solid][color=light]) a .calcite-button--icon,:host([appearance=solid][color=light]) button .calcite-button--icon{fill:#000}:host([appearance=solid][color=light]) a calcite-loader,:host([appearance=solid][color=light]) button calcite-loader{color:#000}:host([appearance=solid][color=dark]) a,:host([appearance=solid][color=dark]) button{color:#fff;background-color:#2b2b2b;border:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=solid][color=dark]) a:focus,:host([appearance=solid][color=dark]) a:hover,:host([appearance=solid][color=dark]) button:focus,:host([appearance=solid][color=dark]) button:hover{background-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #2b2b2b;box-shadow:inset 0 0 0 1px #2b2b2b}:host([appearance=solid][color=dark]) a:active,:host([appearance=solid][color=dark]) button:active{background-color:#2b2b2b;border-color:#000;-webkit-box-shadow:inset 0 0 0 2px #000;box-shadow:inset 0 0 0 2px #000}:host([appearance=solid][color=dark]) a .calcite-button--icon,:host([appearance=solid][color=dark]) button .calcite-button--icon{fill:#fff}:host([appearance=solid][color=dark]) a calcite-loader,:host([appearance=solid][color=dark]) button calcite-loader{color:#fff}:host([appearance=outline][color=blue]) a,:host([appearance=outline][color=blue]) button{color:var(--calcite-button-blue);background-color:var(--calcite-button-outline-background);border:1px solid var(--calcite-button-blue);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) a:hover,:host([appearance=outline][color=blue]) button:hover{border-color:1px solid var(--calcite-button-blue);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-button-blue);box-shadow:inset 0 0 0 1px var(--calcite-button-blue)}:host([appearance=outline][color=blue]) a:active,:host([appearance=outline][color=blue]) a:focus,:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) button:focus{color:var(--calcite-button-blue-pressed);border-color:var(--calcite-button-blue-pressed);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-button-blue-pressed);box-shadow:inset 0 0 0 2px var(--calcite-button-blue-pressed)}:host([appearance=outline][color=blue]) a:active .calcite-button--icon,:host([appearance=outline][color=blue]) a:focus .calcite-button--icon,:host([appearance=outline][color=blue]) button:active .calcite-button--icon,:host([appearance=outline][color=blue]) button:focus .calcite-button--icon{fill:var(--calcite-button-blue-pressed)}:host([appearance=outline][color=blue]) a .calcite-button--icon,:host([appearance=outline][color=blue]) button .calcite-button--icon{fill:var(--calcite-button-blue)}:host([appearance=outline][color=blue]) a calcite-loader,:host([appearance=outline][color=blue]) button calcite-loader{color:var(--calcite-button-blue)}:host([appearance=outline][color=red]) a,:host([appearance=outline][color=red]) button{color:var(--calcite-button-red);background-color:var(--calcite-button-outline-background);border:1px solid var(--calcite-button-red);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=red]) a:hover,:host([appearance=outline][color=red]) button:hover{border-color:1px solid var(--calcite-button-red);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-button-red);box-shadow:inset 0 0 0 1px var(--calcite-button-red)}:host([appearance=outline][color=red]) a:active,:host([appearance=outline][color=red]) a:focus,:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) button:focus{color:var(--calcite-button-red-pressed);border-color:var(--calcite-button-red-pressed);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-button-red-pressed);box-shadow:inset 0 0 0 2px var(--calcite-button-red-pressed)}:host([appearance=outline][color=red]) a:active .calcite-button--icon,:host([appearance=outline][color=red]) a:focus .calcite-button--icon,:host([appearance=outline][color=red]) button:active .calcite-button--icon,:host([appearance=outline][color=red]) button:focus .calcite-button--icon{fill:var(--calcite-button-red-pressed)}:host([appearance=outline][color=red]) a .calcite-button--icon,:host([appearance=outline][color=red]) button .calcite-button--icon{fill:var(--calcite-button-red)}:host([appearance=outline][color=red]) a calcite-loader,:host([appearance=outline][color=red]) button calcite-loader{color:var(--calcite-button-red)}:host([appearance=outline][color=light]) a,:host([appearance=outline][color=light]) button{color:var(--calcite-button-outline-color);background-color:var(--calcite-button-outline-background);border:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=light]) a:hover,:host([appearance=outline][color=light]) button:hover{border-color:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px #f3f3f3;box-shadow:inset 0 0 0 1px #f3f3f3}:host([appearance=outline][color=light]) a:active,:host([appearance=outline][color=light]) a:focus,:host([appearance=outline][color=light]) button:active,:host([appearance=outline][color=light]) button:focus{color:var(--calcite-button-outline-pressed);border-color:#eaeaea;-webkit-box-shadow:inset 0 0 0 2px #eaeaea;box-shadow:inset 0 0 0 2px #eaeaea}:host([appearance=outline][color=light]) a:active .calcite-button--icon,:host([appearance=outline][color=light]) a:focus .calcite-button--icon,:host([appearance=outline][color=light]) button:active .calcite-button--icon,:host([appearance=outline][color=light]) button:focus .calcite-button--icon{fill:var(--calcite-button-outline-pressed)}:host([appearance=outline][color=light]) a .calcite-button--icon,:host([appearance=outline][color=light]) button .calcite-button--icon{fill:var(--calcite-button-outline-color)}:host([appearance=outline][color=light]) a calcite-loader,:host([appearance=outline][color=light]) button calcite-loader{color:var(--calcite-button-outline-color)}:host([appearance=outline][color=dark]) a,:host([appearance=outline][color=dark]) button{color:var(--calcite-button-outline-color);background-color:var(--calcite-button-outline-background);border:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=dark]) a:hover,:host([appearance=outline][color=dark]) button:hover{border-color:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px #2b2b2b;box-shadow:inset 0 0 0 1px #2b2b2b}:host([appearance=outline][color=dark]) a:active,:host([appearance=outline][color=dark]) a:focus,:host([appearance=outline][color=dark]) button:active,:host([appearance=outline][color=dark]) button:focus{color:var(--calcite-button-outline-pressed);border-color:#000;-webkit-box-shadow:inset 0 0 0 2px #000;box-shadow:inset 0 0 0 2px #000}:host([appearance=outline][color=dark]) a:active .calcite-button--icon,:host([appearance=outline][color=dark]) a:focus .calcite-button--icon,:host([appearance=outline][color=dark]) button:active .calcite-button--icon,:host([appearance=outline][color=dark]) button:focus .calcite-button--icon{fill:var(--calcite-button-outline-pressed)}:host([appearance=outline][color=dark]) a .calcite-button--icon,:host([appearance=outline][color=dark]) button .calcite-button--icon{fill:var(--calcite-button-outline-color)}:host([appearance=outline][color=dark]) a calcite-loader,:host([appearance=outline][color=dark]) button calcite-loader{color:var(--calcite-button-outline-color)}:host([appearance=clear][color=blue]) a,:host([appearance=clear][color=blue]) button{color:var(--calcite-button-blue);background-color:transparent;border:1px solid var(--calcite-button-blue);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) a:hover,:host([appearance=clear][color=blue]) button:hover{border-color:1px solid var(--calcite-button-blue);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-button-blue);box-shadow:inset 0 0 0 1px var(--calcite-button-blue)}:host([appearance=clear][color=blue]) a:active,:host([appearance=clear][color=blue]) a:focus,:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) button:focus{color:var(--calcite-button-blue-pressed);border-color:var(--calcite-button-blue-pressed);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-button-blue-pressed);box-shadow:inset 0 0 0 2px var(--calcite-button-blue-pressed)}:host([appearance=clear][color=blue]) a:active .calcite-button--icon,:host([appearance=clear][color=blue]) a:focus .calcite-button--icon,:host([appearance=clear][color=blue]) button:active .calcite-button--icon,:host([appearance=clear][color=blue]) button:focus .calcite-button--icon{fill:var(--calcite-button-blue-pressed)}:host([appearance=clear][color=blue]) a .calcite-button--icon,:host([appearance=clear][color=blue]) button .calcite-button--icon{fill:var(--calcite-button-blue)}:host([appearance=clear][color=blue]) a calcite-loader,:host([appearance=clear][color=blue]) button calcite-loader{color:var(--calcite-button-blue)}:host([appearance=clear][color=red]) a,:host([appearance=clear][color=red]) button{color:var(--calcite-button-red);background-color:transparent;border:1px solid var(--calcite-button-red);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=red]) a:hover,:host([appearance=clear][color=red]) button:hover{border-color:1px solid var(--calcite-button-red);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-button-red);box-shadow:inset 0 0 0 1px var(--calcite-button-red)}:host([appearance=clear][color=red]) a:active,:host([appearance=clear][color=red]) a:focus,:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) button:focus{color:var(--calcite-button-red-pressed);border-color:var(--calcite-button-red-pressed);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-button-red-pressed);box-shadow:inset 0 0 0 2px var(--calcite-button-red-pressed)}:host([appearance=clear][color=red]) a:active .calcite-button--icon,:host([appearance=clear][color=red]) a:focus .calcite-button--icon,:host([appearance=clear][color=red]) button:active .calcite-button--icon,:host([appearance=clear][color=red]) button:focus .calcite-button--icon{fill:var(--calcite-button-red-pressed)}:host([appearance=clear][color=red]) a .calcite-button--icon,:host([appearance=clear][color=red]) button .calcite-button--icon{fill:var(--calcite-button-red)}:host([appearance=clear][color=red]) a calcite-loader,:host([appearance=clear][color=red]) button calcite-loader{color:var(--calcite-button-red)}:host([appearance=clear][color=light]) a,:host([appearance=clear][color=light]) button{color:#f8f8f8;background-color:transparent;border:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=light]) a:hover,:host([appearance=clear][color=light]) button:hover{border-color:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px #f3f3f3;box-shadow:inset 0 0 0 1px #f3f3f3}:host([appearance=clear][color=light]) a:active,:host([appearance=clear][color=light]) a:focus,:host([appearance=clear][color=light]) button:active,:host([appearance=clear][color=light]) button:focus{color:#fff;border-color:#eaeaea;-webkit-box-shadow:inset 0 0 0 2px #eaeaea;box-shadow:inset 0 0 0 2px #eaeaea}:host([appearance=clear][color=light]) a:active .calcite-button--icon,:host([appearance=clear][color=light]) a:focus .calcite-button--icon,:host([appearance=clear][color=light]) button:active .calcite-button--icon,:host([appearance=clear][color=light]) button:focus .calcite-button--icon{fill:#fff}:host([appearance=clear][color=light]) a .calcite-button--icon,:host([appearance=clear][color=light]) button .calcite-button--icon{fill:#f8f8f8}:host([appearance=clear][color=light]) a calcite-loader,:host([appearance=clear][color=light]) button calcite-loader{color:#f8f8f8}:host([appearance=clear][color=dark]) a,:host([appearance=clear][color=dark]) button{color:#151515;background-color:transparent;border:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=dark]) a:hover,:host([appearance=clear][color=dark]) button:hover{border-color:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px #2b2b2b;box-shadow:inset 0 0 0 1px #2b2b2b}:host([appearance=clear][color=dark]) a:active,:host([appearance=clear][color=dark]) a:focus,:host([appearance=clear][color=dark]) button:active,:host([appearance=clear][color=dark]) button:focus{color:#000;border-color:#000;-webkit-box-shadow:inset 0 0 0 2px #000;box-shadow:inset 0 0 0 2px #000}:host([appearance=clear][color=dark]) a:active .calcite-button--icon,:host([appearance=clear][color=dark]) a:focus .calcite-button--icon,:host([appearance=clear][color=dark]) button:active .calcite-button--icon,:host([appearance=clear][color=dark]) button:focus .calcite-button--icon{fill:#000}:host([appearance=clear][color=dark]) a .calcite-button--icon,:host([appearance=clear][color=dark]) button .calcite-button--icon{fill:#151515}:host([appearance=clear][color=dark]) a calcite-loader,:host([appearance=clear][color=dark]) button calcite-loader{color:#151515}:host([appearance=transparent][color=blue]) a,:host([appearance=transparent][color=blue]) button{color:var(--calcite-button-blue);background-color:transparent;border:1px solid transparent}:host([appearance=transparent][color=blue]) a:hover,:host([appearance=transparent][color=blue]) button:hover{color:var(--calcite-button-blue-hover)}:host([appearance=transparent][color=blue]) a:hover .calcite-button--icon,:host([appearance=transparent][color=blue]) button:hover .calcite-button--icon{fill:var(--calcite-button-blue-hover)}:host([appearance=transparent][color=blue]) a:active,:host([appearance=transparent][color=blue]) a:focus,:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) button:focus{color:var(--calcite-button-blue-pressed)}:host([appearance=transparent][color=blue]) a:active .calcite-button--icon,:host([appearance=transparent][color=blue]) a:focus .calcite-button--icon,:host([appearance=transparent][color=blue]) button:active .calcite-button--icon,:host([appearance=transparent][color=blue]) button:focus .calcite-button--icon{fill:var(--calcite-button-blue-pressed)}:host([appearance=transparent][color=blue]) a .calcite-button--icon,:host([appearance=transparent][color=blue]) button .calcite-button--icon{fill:var(--calcite-button-blue)}:host([appearance=transparent][color=blue]) a calcite-loader,:host([appearance=transparent][color=blue]) button calcite-loader{color:var(--calcite-button-blue)}:host([appearance=transparent][color=red]) a,:host([appearance=transparent][color=red]) button{color:var(--calcite-button-red);background-color:transparent;border:1px solid transparent}:host([appearance=transparent][color=red]) a:hover,:host([appearance=transparent][color=red]) button:hover{color:var(--calcite-button-red-hover)}:host([appearance=transparent][color=red]) a:hover .calcite-button--icon,:host([appearance=transparent][color=red]) button:hover .calcite-button--icon{fill:var(--calcite-button-red-hover)}:host([appearance=transparent][color=red]) a:active,:host([appearance=transparent][color=red]) a:focus,:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) button:focus{color:var(--calcite-button-red-pressed)}:host([appearance=transparent][color=red]) a:active .calcite-button--icon,:host([appearance=transparent][color=red]) a:focus .calcite-button--icon,:host([appearance=transparent][color=red]) button:active .calcite-button--icon,:host([appearance=transparent][color=red]) button:focus .calcite-button--icon{fill:var(--calcite-button-red-pressed)}:host([appearance=transparent][color=red]) a .calcite-button--icon,:host([appearance=transparent][color=red]) button .calcite-button--icon{fill:var(--calcite-button-red)}:host([appearance=transparent][color=red]) a calcite-loader,:host([appearance=transparent][color=red]) button calcite-loader{color:var(--calcite-button-red)}:host([appearance=transparent][color=light]) a,:host([appearance=transparent][color=light]) button{color:#f3f3f3;background-color:transparent;border:1px solid transparent}:host([appearance=transparent][color=light]) a:hover,:host([appearance=transparent][color=light]) button:hover{color:#fff}:host([appearance=transparent][color=light]) a:hover .calcite-button--icon,:host([appearance=transparent][color=light]) button:hover .calcite-button--icon{fill:#fff}:host([appearance=transparent][color=light]) a:active,:host([appearance=transparent][color=light]) a:focus,:host([appearance=transparent][color=light]) button:active,:host([appearance=transparent][color=light]) button:focus{color:#eaeaea}:host([appearance=transparent][color=light]) a:active .calcite-button--icon,:host([appearance=transparent][color=light]) a:focus .calcite-button--icon,:host([appearance=transparent][color=light]) button:active .calcite-button--icon,:host([appearance=transparent][color=light]) button:focus .calcite-button--icon{fill:#eaeaea}:host([appearance=transparent][color=light]) a .calcite-button--icon,:host([appearance=transparent][color=light]) button .calcite-button--icon{fill:#f3f3f3}:host([appearance=transparent][color=light]) a calcite-loader,:host([appearance=transparent][color=light]) button calcite-loader{color:#f3f3f3}:host([appearance=transparent][color=dark]) a,:host([appearance=transparent][color=dark]) button{color:#2b2b2b;background-color:transparent;border:1px solid transparent}:host([appearance=transparent][color=dark]) a:hover,:host([appearance=transparent][color=dark]) button:hover{color:#404040}:host([appearance=transparent][color=dark]) a:hover .calcite-button--icon,:host([appearance=transparent][color=dark]) button:hover .calcite-button--icon{fill:#404040}:host([appearance=transparent][color=dark]) a:active,:host([appearance=transparent][color=dark]) a:focus,:host([appearance=transparent][color=dark]) button:active,:host([appearance=transparent][color=dark]) button:focus{color:#151515}:host([appearance=transparent][color=dark]) a:active .calcite-button--icon,:host([appearance=transparent][color=dark]) a:focus .calcite-button--icon,:host([appearance=transparent][color=dark]) button:active .calcite-button--icon,:host([appearance=transparent][color=dark]) button:focus .calcite-button--icon{fill:#151515}:host([appearance=transparent][color=dark]) a .calcite-button--icon,:host([appearance=transparent][color=dark]) button .calcite-button--icon{fill:#2b2b2b}:host([appearance=transparent][color=dark]) a calcite-loader,:host([appearance=transparent][color=dark]) button calcite-loader{color:#2b2b2b}:host([appearance=inline][color=blue]) a,:host([appearance=inline][color=blue]) button{display:inline;padding:0;outline:none;border:none;color:var(--calcite-button-blue);font-weight:500;font-size:inherit;white-space:normal;background-color:transparent;position:relative;background-image:-webkit-gradient(linear,left top,left bottom,from(currentColor),to(currentColor)),-webkit-gradient(linear,left top,left bottom,from(var(--calcite-button-blue-inline-underline)),to(var(--calcite-button-blue-inline-underline)));background-image:linear-gradient(currentColor,currentColor),linear-gradient(var(--calcite-button-blue-inline-underline),var(--calcite-button-blue-inline-underline));background-position:0 100%,100% 100%;background-repeat:no-repeat,no-repeat;background-size:0 1px,100% 1px;-webkit-transition:all .15s ease-in-out,background-size .3s ease-in-out;transition:all .15s ease-in-out,background-size .3s ease-in-out}:host([appearance=inline][color=blue]) a:focus,:host([appearance=inline][color=blue]) a:hover,:host([appearance=inline][color=blue]) button:focus,:host([appearance=inline][color=blue]) button:hover{color:var(--calcite-button-blue-hover);background-size:100% 1px,100% 1px}:host([appearance=inline][color=blue]) a:focus .calcite-button--icon,:host([appearance=inline][color=blue]) a:hover .calcite-button--icon,:host([appearance=inline][color=blue]) button:focus .calcite-button--icon,:host([appearance=inline][color=blue]) button:hover .calcite-button--icon{fill:var(--calcite-button-blue-hover)}:host([appearance=inline][color=blue]) a:active,:host([appearance=inline][color=blue]) button:active{color:var(--calcite-button-blue);background-size:100% 1px,100% 1px}:host([appearance=inline][color=blue]) a .calcite-button--icon,:host([appearance=inline][color=blue]) button .calcite-button--icon{fill:var(--calcite-button-blue)}:host([appearance=inline][color=blue]) a calcite-loader,:host([appearance=inline][color=blue]) button calcite-loader{color:var(--calcite-button-blue)}:host([appearance=inline][color=red]) a,:host([appearance=inline][color=red]) button{display:inline;padding:0;outline:none;border:none;color:var(--calcite-button-red);font-weight:500;font-size:inherit;white-space:normal;background-color:transparent;position:relative;background-image:-webkit-gradient(linear,left top,left bottom,from(currentColor),to(currentColor)),-webkit-gradient(linear,left top,left bottom,from(var(--calcite-button-red-inline-underline)),to(var(--calcite-button-red-inline-underline)));background-image:linear-gradient(currentColor,currentColor),linear-gradient(var(--calcite-button-red-inline-underline),var(--calcite-button-red-inline-underline));background-position:0 100%,100% 100%;background-repeat:no-repeat,no-repeat;background-size:0 1px,100% 1px;-webkit-transition:all .15s ease-in-out,background-size .3s ease-in-out;transition:all .15s ease-in-out,background-size .3s ease-in-out}:host([appearance=inline][color=red]) a:focus,:host([appearance=inline][color=red]) a:hover,:host([appearance=inline][color=red]) button:focus,:host([appearance=inline][color=red]) button:hover{color:var(--calcite-button-red-hover);background-size:100% 1px,100% 1px}:host([appearance=inline][color=red]) a:focus .calcite-button--icon,:host([appearance=inline][color=red]) a:hover .calcite-button--icon,:host([appearance=inline][color=red]) button:focus .calcite-button--icon,:host([appearance=inline][color=red]) button:hover .calcite-button--icon{fill:var(--calcite-button-red-hover)}:host([appearance=inline][color=red]) a:active,:host([appearance=inline][color=red]) button:active{color:var(--calcite-button-red);background-size:100% 1px,100% 1px}:host([appearance=inline][color=red]) a .calcite-button--icon,:host([appearance=inline][color=red]) button .calcite-button--icon{fill:var(--calcite-button-red)}:host([appearance=inline][color=red]) a calcite-loader,:host([appearance=inline][color=red]) button calcite-loader{color:var(--calcite-button-red)}:host([appearance=inline][color=light]) a,:host([appearance=inline][color=light]) button{display:inline;padding:0;outline:none;border:none;color:#f3f3f3;font-weight:500;font-size:inherit;white-space:normal;background-color:transparent;position:relative;background-image:-webkit-gradient(linear,left top,left bottom,from(currentColor),to(currentColor)),-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.2)),to(hsla(0,0%,100%,.2)));background-image:linear-gradient(currentColor,currentColor),linear-gradient(hsla(0,0%,100%,.2),hsla(0,0%,100%,.2));background-position:0 100%,100% 100%;background-repeat:no-repeat,no-repeat;background-size:0 1px,100% 1px;-webkit-transition:all .15s ease-in-out,background-size .3s ease-in-out;transition:all .15s ease-in-out,background-size .3s ease-in-out}:host([appearance=inline][color=light]) a:focus,:host([appearance=inline][color=light]) a:hover,:host([appearance=inline][color=light]) button:focus,:host([appearance=inline][color=light]) button:hover{color:#fff;background-size:100% 1px,100% 1px}:host([appearance=inline][color=light]) a:focus .calcite-button--icon,:host([appearance=inline][color=light]) a:hover .calcite-button--icon,:host([appearance=inline][color=light]) button:focus .calcite-button--icon,:host([appearance=inline][color=light]) button:hover .calcite-button--icon{fill:#fff}:host([appearance=inline][color=light]) a:active,:host([appearance=inline][color=light]) button:active{color:#f3f3f3;background-size:100% 1px,100% 1px}:host([appearance=inline][color=light]) a .calcite-button--icon,:host([appearance=inline][color=light]) button .calcite-button--icon{fill:#f3f3f3}:host([appearance=inline][color=light]) a calcite-loader,:host([appearance=inline][color=light]) button calcite-loader{color:#f3f3f3}:host([appearance=inline][color=dark]) a,:host([appearance=inline][color=dark]) button{display:inline;padding:0;outline:none;border:none;color:#2b2b2b;font-weight:500;font-size:inherit;white-space:normal;background-color:transparent;position:relative;background-image:-webkit-gradient(linear,left top,left bottom,from(currentColor),to(currentColor)),-webkit-gradient(linear,left top,left bottom,from(rgba(64,64,64,.2)),to(rgba(64,64,64,.2)));background-image:linear-gradient(currentColor,currentColor),linear-gradient(rgba(64,64,64,.2),rgba(64,64,64,.2));background-position:0 100%,100% 100%;background-repeat:no-repeat,no-repeat;background-size:0 1px,100% 1px;-webkit-transition:all .15s ease-in-out,background-size .3s ease-in-out;transition:all .15s ease-in-out,background-size .3s ease-in-out}:host([appearance=inline][color=dark]) a:focus,:host([appearance=inline][color=dark]) a:hover,:host([appearance=inline][color=dark]) button:focus,:host([appearance=inline][color=dark]) button:hover{color:#404040;background-size:100% 1px,100% 1px}:host([appearance=inline][color=dark]) a:focus .calcite-button--icon,:host([appearance=inline][color=dark]) a:hover .calcite-button--icon,:host([appearance=inline][color=dark]) button:focus .calcite-button--icon,:host([appearance=inline][color=dark]) button:hover .calcite-button--icon{fill:#404040}:host([appearance=inline][color=dark]) a:active,:host([appearance=inline][color=dark]) button:active{color:#2b2b2b;background-size:100% 1px,100% 1px}:host([appearance=inline][color=dark]) a .calcite-button--icon,:host([appearance=inline][color=dark]) button .calcite-button--icon{fill:#2b2b2b}:host([appearance=inline][color=dark]) a calcite-loader,:host([appearance=inline][color=dark]) button calcite-loader{color:#2b2b2b}:host([appearance=inline][dir=rtl]) a,:host([appearance=inline][dir=rtl]) button{background-position:100% 100%,100% 100%}:host([scale=xs]:not([appearance=inline])) a,:host([scale=xs]:not([appearance=inline])) button{padding:calc(1.5rem/ 6) calc(1.5rem* .3);font-size:.8125rem;line-height:1.5}:host([scale=s]:not([appearance=inline])) a,:host([scale=s]:not([appearance=inline])) button{padding:calc(1.5rem/ 4) calc(1.5rem* .5);font-size:.875rem;line-height:1.5}:host([scale=m]:not([appearance=inline])) a,:host([scale=m]:not([appearance=inline])) button{padding:calc(1.5rem/ 3) calc(1.5rem* .75);font-size:.9375rem;line-height:1.5}:host([scale=l]:not([appearance=inline])) a,:host([scale=l]:not([appearance=inline])) button{padding:calc(1.5rem / 2) calc(1.5rem* 1);font-size:1.2019rem;line-height:1.5}\@media screen and (max-width:859px){:host([scale=l]:not([appearance=inline])) a,:host([scale=l]:not([appearance=inline])) button{font-size:1.1305rem}}\@media screen and (max-width:479px){:host([scale=l]:not([appearance=inline])) a,:host([scale=l]:not([appearance=inline])) button{font-size:1.0625rem}}:host([scale=xl]:not([appearance=inline])) a,:host([scale=xl]:not([appearance=inline])) button{padding:calc(1.5rem / 1.5) calc(1.5rem* 1.25);font-size:1.414rem;line-height:1.5}\@media screen and (max-width:859px){:host([scale=xl]:not([appearance=inline])) a,:host([scale=xl]:not([appearance=inline])) button{font-size:1.33rem}}\@media screen and (max-width:479px){:host([scale=xl]:not([appearance=inline])) a,:host([scale=xl]:not([appearance=inline])) button{font-size:1.25rem}}"; }
};

exports.calcite_button = CalciteButton;
