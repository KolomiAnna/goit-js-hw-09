!function(){"use strict";var t,e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),a=document.querySelector("body");e.addEventListener("click",(function(o){t=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),o.target&&(e.setAttribute("disabled",""),r.removeAttribute("disabled"))}),1e3)})),r.addEventListener("click",(function(a){clearInterval(t),a.target&&(e.removeAttribute("disabled"),r.setAttribute("disabled",""))}))}();
//# sourceMappingURL=01-color-switcher.ac292c9c.js.map
