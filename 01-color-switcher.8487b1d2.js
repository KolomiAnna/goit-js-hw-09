const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(d=>{timerId=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,d.target&&(t.setAttribute("disabled",""),e.removeAttribute("disabled"))}),1e3)})),e.addEventListener("click",(r=>{clearInterval(timerId),r.target&&(t.removeAttribute("disabled"),e.setAttribute("disabled",""))}));
//# sourceMappingURL=01-color-switcher.8487b1d2.js.map