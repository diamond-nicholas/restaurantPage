(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>a});var i=t(645),r=t.n(i)()((function(n){return n[1]}));r.push([n.id,"* {\n  color:rgb(34, 200, 206);\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu-list {\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.list {\n  margin: 0.5rem;\n}\n\n.about h6 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.about p {\n  display: flex;\n  align-items: center;\n}\n\n.hours h6 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hours ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.location h6 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.location p {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n",""]);const a=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);i&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var a={},o=[],c=0;c<n.length;c++){var s=n[c],l=i.base?s[0]+i.base:s[0],u=a[l]||0,m="".concat(l," ").concat(u);a[l]=u+1;var p=t(m),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(e[p].references++,e[p].updater(d)):e.push({identifier:m,updater:r(d,i),references:1}),o.push(m)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=i(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var c=t(a[o]);e[c].references--}for(var s=i(n,r),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i=t.css,r=t.media,a=t.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},433:(n,e,t)=>{n.exports=t.p+"6c2ab2a157764ac04663.jpg"},287:(n,e,t)=>{n.exports=t.p+"90b1d14068e7f564825e.png"},958:(n,e,t)=>{n.exports=t.p+"33842e47e82fa51f6a49.jpeg"}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={id:i,exports:{}};return n[i](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),i=t(795),r=t.n(i),a=t(695),o=t.n(a),c=t(216),s=t.n(c),l=t(28),u={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=t.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=o()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};u.domAPI=r(),u.insertStyleElement=s(),e()(l.Z,u),l.Z&&l.Z.locals&&l.Z.locals;const m=()=>{const n=document.querySelector("#content"),e=document.createElement("main");e.innerHTML='\n      <section class="about">\n        <h6>About TakeMe Away Restaurant</h6>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam a fugit consectetur, necessitatibus alias, sit doloribus impedit vel laudantium odio sequi esse facilis illo perspiciatis libero nesciunt. Beatae labore accusamus animi vitae cum totam eius dolore exercitationem officia. Nobis?</p>\n      </section>\n      <section class="hours">\n        <h6>Opening Hours</h6>\n        <ul>\n          <li>Sunday: 8am - 8pm</li>\n          <li>Monday: 6am - 6pm</li>\n          <li>Tuesday: 6am - 6pm </li>\n          <li>Wednesday: 6am - 6pm</li>\n          <li>Thursday: 6am - 10pm</li>\n          <li>Friday: 6am - 10pm</li>\n          <li>Saturday: 8am - 10pm</li>\n        </ul>\n      </section>\n      <section class="location">\n        <h6>Location</h6>\n        <p>123 Forest Drive, Forestville, Maine</p>\n      </section>',n.appendChild(e)};var p=t(433);const d=()=>{const n=document.querySelector("#content"),e=document.createElement("nav"),t=document.createElement("section"),i=new Image;i.src=p,t.classList.add("menu"),e.classList.add("nav"),e.textContent="Take Me Away Restaurant",t.innerHTML=`\n  <ul class="menu-list">\n    <li class="list">\n      <button class="home">Home</button>\n    </li>\n    <li class="list">\n      <button>Menu</button>\n    </li>\n    <li class="list">\n      <button>Contact</button>\n    </li>\n  </ul>\n  <img src="${i.src}" alt="" width=300>\n  `,n.appendChild(e),n.appendChild(t)};var f=t(958);var h=t(287);const g=document.getElementById("content");d(),m(),document.addEventListener("click",(n=>{const e=n.target.innerText;"Home"===e&&(g.innerHTML="",d(),m()),"Menu"===e&&(g.innerHTML="",d(),(()=>{const n=document.querySelector("#content"),e=document.createElement("section"),t=new Image;t.src=f,e.classList.add("main_menu"),e.innerHTML=`<h2>Menu</h2>\n    <article>\n        <h3>moi-moi</h3>\n        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>\n        <p>$1000</p>\n        <img src="${t.src}" alt="my moi">\n    </article>\n    <article>\n        <h3>moi-moi</h3>\n        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>\n        <p>$1000</p>\n        <img src="${t.src}" alt="my moi">\n    </article>\n    <article>\n        <h3>moi-moi</h3>\n        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>\n        <p>$1000</p>\n        <img src="${t.src}" alt="my moi">\n    </article>\n    <article>\n        <h3>moi-moi</h3>\n        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>\n        <p>$1000</p>\n        <img src="${t.src}" alt="my moi">\n    </article>\n    <article>\n        <h3>moi-moi</h3>\n        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>\n        <p>$1000</p>\n        <img src="${t.src}" alt="my moi">\n    </article>\n    `,n.appendChild(e)})()),"Contact"===e&&(g.innerHTML="",d(),(()=>{const n=document.querySelector("#content"),e=document.createElement("div"),t=new Image;t.src=h,e.innerHTML=`\n    <h2>Contact the staff on duty</h2>\n    <article>\n        <h3>Chef Damon</h3>\n        <p>+2348199008773</p>\n        <p>chefdamon@email.com</p>\n        <img src="${t.src}" alt="" width="100">\n    </article>\n    <article>\n        <h3>Chef Peters</h3>\n        <p>+2348199008773</p>\n        <p>chefdamon@email.com</p>\n        <img src="${t.src}" alt="" width="100">\n    </article>\n    <article>\n        <h3>Chef Susan</h3>\n        <p>+2348199008773</p>\n        <p>chefdamon@email.com</p>\n        <img src="${t.src}" alt="" width="100">\n    </article>\n    <article>\n        <h3>Chef Vena</h3>\n        <p>+2348199008773</p>\n        <p>chefdamon@email.com</p>\n        <img src="${t.src}" alt="" width="100">\n    </article>\n  `,n.appendChild(e)})())}))})()})();