function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var u={id:e,exports:{}};return r[e]=u,t.call(u.exports,u,u.exports),u.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=u);var o=u("7Y9D8");const i=document.querySelector("form"),l=document.querySelector("[name=delay]"),d=document.querySelector("[name=step]"),a=document.querySelector("[name=amount]"),s=document.querySelector("[type=submit]");s.setAttribute("disabled",""),i.addEventListener("input",(function(){Number(l.value)>0&&Number(d.value)>0&&Number(a.value)>0&&s.removeAttribute("disabled")})),i.addEventListener("submit",(function(t){t.preventDefault();let r=Number(l.value),n=Number(d.value),u=Number(a.value);for(let t=1;t<=u;t++)c(t,r).then((t=>e(o).Notify.success(t))).catch((t=>e(o).Notify.failure(t))),r+=n}));const c=(e,t)=>new Promise(((r,n)=>{const u=Math.random()>.3;setTimeout((()=>{u?r(`✅ Fulfilled promise ${e} in ${t}ms`):n(`❌ Rejected promise ${e} in ${t}ms`)}),t)}));
//# sourceMappingURL=03-promises.ca14a016.js.map
