!function(){function e(e,o){return new Promise((function(t,n){var c=Math.random()>.3;setTimeout((function(){c?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}selectors={form:document.querySelector("form"),delay:document.querySelector("[name=delay]"),step:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]"),button:document.querySelector("button")},selectors.form.addEventListener("submit",(function(o){o.preventDefault();for(var t=Number(selectors.delay.value),n=Number(selectors.step.value),c=Number(selectors.amount.value),r=1;r<=c;r+=1){e(r,t+n*r).then((function(e){var o=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(e){var o=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.ad06f94d.js.map
