function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"x-api-key":"live_M6UV2vFSAMJ9QGBGWKswSAzMFpr3cDC8Ddf5qYHPsCiUUHK1qSZiljL0xy19uYhC"}}).then((e=>e.json())).then((e=>e[0])).catch((e=>{throw console.error(e),e}))}const t=document.querySelector(".breed-select"),n=document.querySelector(".loader"),c=document.querySelector(".error"),o=document.querySelector(".cat-info");function r(){n.style.display="block"}function a(){n.style.display="none"}function i(){c.style.display="block"}function d(){c.style.display="none"}t.addEventListener("change",(function(){const n=t.value;r(),d(),e(n).then((e=>{a(),function(e){if(e.length>0){const t=document.createElement("img");t.src=e[0].url;const n=document.createElement("p");n.textContent=e[0].breeds[0].name;const c=document.createElement("p");c.textContent=e[0].breeds[0].description;const r=document.createElement("p");r.textContent=e[0].breeds[0].temperament,o.innerHTML="",o.appendChild(t),o.appendChild(n),o.appendChild(c),o.appendChild(r)}else i()}(e)})).catch((e=>{a(),i()}))})),r(),d(),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_M6UV2vFSAMJ9QGBGWKswSAzMFpr3cDC8Ddf5qYHPsCiUUHK1qSZiljL0xy19uYhC"}}).then((e=>e.json())).then((e=>e)).catch((e=>{throw console.error(e),e})).then((e=>{a(),function(e){e.forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name,t.appendChild(n)}))}(e)})).catch((e=>{a(),i()}));
//# sourceMappingURL=index.097665d3.js.map
