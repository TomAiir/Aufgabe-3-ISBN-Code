(()=>{var e={734:e=>{function t(e){var t=0;null!==e&&(e=e.replace(/-/g,"").replace(/ /g,"").slice(0,9));for(var o=0,n=e.length+1;o<e.length;o++,n--)t+=e[o]*n;var r=(11-t%11)%11;return 0===r?" ":10===r?"X":r.toString()}e.exports={checkISBN:t,connectedInputs:function(e,o,n,r){var u=o,l=n,c=r;return t(e.concat(u,l,c))}}}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}(()=>{const{checkISBN:e,connectedInputs:t}=o(734);function n(){var o=document.querySelector("#firstInput").value,n=document.querySelector("#secondInput").value,r=document.querySelector("#thirdInput").value,u=document.querySelector("#fourthInput").value,l=t(o,n,r,u),c=l.split(""),s=c[c.length-1];console.log(l),console.log(e(l)),e(l)===s?(console.log("grüner Fall"),output.classList.remove("color-red"),output.classList.add("color-green"),output.textContent="ISBN OK"):""===e(l)?(console.log("grüner Fall 2"),output.classList.remove("color-green"),output.classList.add("color-red"),output.textContent="ISBN corrupt"):(console.log("roter Fall"),output.classList.remove("color-green"),output.classList.add("color-red"),output.textContent="ISBN corrupt")}document.getElementsByClassName("container")[0].onkeyup=function(e){var t=e.srcElement,o=parseInt(t.attributes.maxlength.value,10),n=t.value.length;if(n>=o){for(var r=t;(r=r.nextElementSibling)&&null!=r;)if("input"==r.tagName.toLowerCase()){r.focus();break}}else if(0===n)for(var u=t;(u=u.previousElementSibling)&&null!=u;)if("input"===u.tagName.toLowerCase()){u.focus();break}},document.querySelector("#firstInput").addEventListener("input",n),document.querySelector("#secondInput").addEventListener("input",n),document.querySelector("#thirdInput").addEventListener("input",n),document.querySelector("#fourthInput").addEventListener("input",n)})()})();