parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"v8UH":[function(require,module,exports) {
window.mailgo=function(e){var a={};function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=a,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(t,n,function(a){return e[a]}.bind(null,n));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="",o(o.s=4)}([function(e){e.exports=JSON.parse('{"languages":["en","it","es","de","fr","pt","nl","ru","sv","no","dk","is","zh"],"translations":{"en":{"open_in_":"open in ","cc_":"cc ","bcc_":"bcc ","subject_":"subject ","body_":"body ","gmail":"Gmail","outlook":"Outlook","yahoo":"Yahoo Mail","telegram":"Telegram","whatsapp":"WhatsApp","skype":"Skype","call":"call","open":"open","_default":" default","_as_default":" as default","copy":"copy","copied":"copied"},"it":{"open_in_":"apri con ","bcc_":"ccn ","subject_":"oggetto ","body_":"testo ","call":"chiama","open":"apri","_default":" ","_as_default":" ","copy":"copia","copied":"copiato"},"es":{"open_in_":"abrir con ","bcc_":"cco ","subject_":"asunto ","body_":"cuerpo ","call":"llamar","open":"abrir","_default":" predefinido","_as_default":" por defecto","copy":"copiar"},"de":{"open_in_":"Öffnen in ","subject_":"Betreff ","body_":"Nachricht ","call":"Anrufen","open":"Öffnen","_default":" mit Standard","_as_default":" mit Standard","copy":"kopieren"},"pt":{"open_in_":"abrir com ","bcc_":"cco ","subject_":"assunto ","body_":"corpo ","call":"ligar","open":"abrir","_default":" padrão","_as_default":" por padrão","copy":"copiar"},"fr":{"open_in_":"Ouvrir dans ","bcc_":"cci ","subject_":"sujet ","body_":"contenu ","call":"Appeler","open":"Ouvrir","_default":" par défaut","_as_default":" par défaut","copy":"Copier"},"nl":{"subject_":"onderwerp ","body_":"bericht ","call":"bellen","open":"openen","_default":" standaard","_as_default":" als standaard","copy":"kopiëren"},"ru":{"open_in_":"открыть в ","subject_":"тема ","body_":"тело ","call":"позвонить","open":"открыть","_default":" по умолчанию","_as_default":" по умолчанию","copy":"скопировать"},"sv":{"open_in_":"öppna i ","subject_":"ämne ","body_":"meddelandetext ","call":"ring","open":"öppna","_default":" förval","_as_default":" som förval","copy":"kopiera"},"no":{"open_in_":"åpne i ","subject_":"emne ","call":"ringe","open":"åpne","_as_default":" som standard","copy":"kopiere"},"dk":{"open_in_":"åpne i ","subject_":"emne ","call":"ringe op","open":"åben","_as_default":" som standard","copy":"kopi"},"is":{"open_in_":"opið inn ","subject_":"viðfangsefni ","body_":"líkami ","call":"hringja","open":"opið","_default":" sjálfgefið","_as_default":" sem sjálfgefið","copy":"afrita"},"zh":{"open_in_":"開啟 ","cc_":"副本 ","bcc_":"密件副本 ","subject_":"主旨 ","body_":"內文 ","call":"通話","open":"開啟","_default":" 預設","_as_default":" 預設","copy":"複製"}}}')},function(e,a,o){var t=o(2);e.exports="string"==typeof t?t:t.toString()},function(e,a,o){var t=o(3)(!1);t.push([e.i,'.m-modal{position:fixed;top:0;right:0;bottom:0;left:0;justify-content:center;align-items:center;flex-direction:column;overflow:hidden;font-size:16.5px;z-index:10000}.m-modal p,.m-modal span,.m-modal strong,.m-modal a{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}.m-modal strong{font-weight:700}.m-modal .m-modal-back{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:#20232a;opacity:0.8}.m-modal .m-modal-content{position:relative;z-index:10002;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:0.95;border-radius:20px;box-shadow:0 3px 20px rgba(32,35,42,0.5);color:#4a4a4a;display:flex;flex-direction:column;overflow:auto;padding:24px;transition:0.5s box-shadow}.m-modal .m-modal-content:hover,.m-modal .m-modal-content:focus,.m-modal .m-modal-content:active{opacity:1}.m-modal .m-modal-content .m-title{margin-bottom:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1.2em}.m-modal .m-modal-content .m-details{margin-bottom:10px}.m-modal .m-modal-content .m-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.m-modal .m-modal-content a{cursor:pointer;padding:10px;color:#4a4a4a;border-radius:20px;text-decoration:none}.m-modal .m-modal-content a.m-gmail{color:#c0372a}.m-modal .m-modal-content a.m-gmail:hover,.m-modal .m-modal-content a.m-gmail:focus,.m-modal .m-modal-content a.m-gmail:active{background-color:rgba(212,70,56,0.08);color:#c0372a}.m-modal .m-modal-content a.m-outlook{color:#0967aa}.m-modal .m-modal-content a.m-outlook:hover,.m-modal .m-modal-content a.m-outlook:focus,.m-modal .m-modal-content a.m-outlook:active{background-color:rgba(0,114,198,0.08);color:#0967aa}.m-modal .m-modal-content a.m-yahoo{color:#4a00a0}.m-modal .m-modal-content a.m-yahoo:hover,.m-modal .m-modal-content a.m-yahoo:focus,.m-modal .m-modal-content a.m-yahoo:active{background-color:rgba(74,0,160,0.08);color:#4a00a0}.m-modal .m-modal-content a.m-tg{color:#086da0}.m-modal .m-modal-content a.m-tg:hover,.m-modal .m-modal-content a.m-tg:focus,.m-modal .m-modal-content a.m-tg:active{background-color:rgba(0,136,204,0.08);color:#086da0}.m-modal .m-modal-content a.m-wa{color:#067466}.m-modal .m-modal-content a.m-wa:hover,.m-modal .m-modal-content a.m-wa:focus,.m-modal .m-modal-content a.m-wa:active{background-color:rgba(0,191,165,0.08);color:#067466}.m-modal .m-modal-content a.m-skype{color:#076d92}.m-modal .m-modal-content a.m-skype:hover,.m-modal .m-modal-content a.m-skype:focus,.m-modal .m-modal-content a.m-skype:active{background-color:rgba(0,175,240,0.08);color:#076d92}.m-modal .m-modal-content a.m-copy{padding:16px 10px;font-size:16px}.m-modal .m-modal-content a.m-default:hover,.m-modal .m-modal-content a.m-default:focus,.m-modal .m-modal-content a.m-default:active,.m-modal .m-modal-content a.m-copy:hover,.m-modal .m-modal-content a.m-copy:focus,.m-modal .m-modal-content a.m-copy:active{background-color:rgba(0,0,0,0.08);color:#4a4a4a}.m-modal .m-modal-content a.m-by{font-size:12px;margin-top:0.8rem;padding:5px;color:#4a4a4a}.m-modal .m-modal-content a.m-by:hover,.m-modal .m-modal-content a.m-by:focus,.m-modal .m-modal-content a.m-by:active{color:#3d3d3d}.m-modal .m-modal-content .w-500{font-weight:500}.m-modal.m-dark .m-modal-content{background-color:#20232a}.m-modal.m-dark .m-modal-content,.m-modal.m-dark .m-modal-content p,.m-modal.m-dark .m-modal-content p span,.m-modal.m-dark .m-modal-content strong{color:#fff}.m-modal.m-dark .m-modal-content a{color:#eaeaea}.m-modal.m-dark .m-modal-content a:not(.m-by):hover,.m-modal.m-dark .m-modal-content a:not(.m-by):focus,.m-modal.m-dark .m-modal-content a:not(.m-by):active{background-color:rgba(134,134,134,0.08);color:#eaeaea}.m-modal.m-dark .m-modal-content a.m-gmail{color:#e07d73}.m-modal.m-dark .m-modal-content a.m-gmail:hover,.m-modal.m-dark .m-modal-content a.m-gmail:focus,.m-modal.m-dark .m-modal-content a.m-gmail:active{background-color:rgba(212,70,56,0.08);color:#e07d73}.m-modal.m-dark .m-modal-content a.m-outlook{color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-outlook:hover,.m-modal.m-dark .m-modal-content a.m-outlook:focus,.m-modal.m-dark .m-modal-content a.m-outlook:active{background-color:rgba(0,114,198,0.08);color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-yahoo{color:#a079cd}.m-modal.m-dark .m-modal-content a.m-yahoo:hover,.m-modal.m-dark .m-modal-content a.m-yahoo:focus,.m-modal.m-dark .m-modal-content a.m-yahoo:active{background-color:rgba(146,102,198,0.08);color:#a079cd}.m-modal.m-dark .m-modal-content a.m-tg{color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-tg:hover,.m-modal.m-dark .m-modal-content a.m-tg:focus,.m-modal.m-dark .m-modal-content a.m-tg:active{background-color:rgba(0,136,204,0.08);color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-wa{color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-wa:hover,.m-modal.m-dark .m-modal-content a.m-wa:focus,.m-modal.m-dark .m-modal-content a.m-wa:active{background-color:rgba(0,191,165,0.08);color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-skype{color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-skype:hover,.m-modal.m-dark .m-modal-content a.m-skype:focus,.m-modal.m-dark .m-modal-content a.m-skype:active{background-color:rgba(0,175,240,0.08);color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-by:hover,.m-modal.m-dark .m-modal-content a.m-by:focus,.m-modal.m-dark .m-modal-content a.m-by:active{color:#fff}\n',""]),e.exports=t},function(e,a,o){"use strict";e.exports=function(e){var a=[];return a.toString=function(){return this.map(function(a){var o=function(e,a){var o,t,n,d=e[1]||"",l=e[3];if(!l)return d;if(a&&"function"==typeof btoa){var i=(o=l,t=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(n," */")),m=l.sources.map(function(e){return"/*# sourceURL=".concat(l.sourceRoot||"").concat(e," */")});return[d].concat(m).concat([i]).join("\n")}return[d].join("\n")}(a,e);return a[2]?"@media ".concat(a[2]," {").concat(o,"}"):o}).join("")},a.i=function(e,o,t){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(t)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(n[l]=!0)}for(var i=0;i<e.length;i++){var m=[].concat(e[i]);t&&n[m[0]]||(o&&(m[2]?m[2]="".concat(o," and ").concat(m[2]):m[2]=o),a.push(m))}},a}},function(e,a,o){"use strict";function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,t)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach(function(a){d(e,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))})}return e}function d(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}o.r(a);var l,i,m,c,r,s,p,u,f,b,v,g,h,y,k,_,w,C,L,x,j,A,E,O,S,N=o(0),D=N.translations,R=D.en,I=o(1).toString(),P="mailto:",U="tel:",T="callto:",z=!0,M=!0,W=!0,H=!0,B="en",F="",q="",J="",K="",Z="",$="",G="",Y="",Q="",V=function(){if(!document.getElementById("mailgo")){var e,a;(m=ve()).style.display="none",m.id="mailgo",m.classList.add("m-modal"),m.setAttribute("role","dialog"),m.setAttribute("tabindex","-1"),m.setAttribute("aria-labelledby","m-title"),(null===(e=i)||void 0===e?void 0:e.dark)?je("mail"):Ae("mail");var o=ve();o.className="m-modal-back",m.appendChild(o);var t=ve();t.className="m-modal-content",m.appendChild(t),(r=ve("strong")).id="m-title",r.className="m-title",t.appendChild(r);var n=ve();n.id="m-details",n.className="m-details",(p=ve("p")).id="m-cc";var d=ve("span");d.className="w-500",d.appendChild(ge(l.cc_||R.cc_)),(v=ve("span")).id="m-cc-value",p.appendChild(d),p.appendChild(v),n.appendChild(p),(u=ve("p")).id="m-bcc";var k=ve("span");k.className="w-500",k.appendChild(ge(l.bcc_||R.bcc_)),(g=ve("span")).id="m-bcc-value",u.appendChild(k),u.appendChild(g),n.appendChild(u),(f=ve("p")).id="m-subject";var N=ve("span");N.className="w-500",N.appendChild(ge(l.subject_||R.subject_)),(h=ve("span")).id="m-subject-value",f.appendChild(N),f.appendChild(h),n.appendChild(f),(b=ve("p")).id="m-body";var D=ve("span");D.className="w-500",D.appendChild(ge(l.body_||R.body_)),(y=ve("span")).id="m-body-value",b.appendChild(D),b.appendChild(y),n.appendChild(b),t.appendChild(n),(_=ve("a")).id="m-gmail",_.href="#mailgo-gmail",_.classList.add("m-open"),_.classList.add("m-gmail"),_.appendChild(ge(l.open_in_||R.open_in_));var I=ve("span");I.className="w-500",I.appendChild(ge(l.gmail||R.gmail)),_.appendChild(I),t.appendChild(_),(w=ve("a")).id="m-outlook",w.href="#mailgo-outlook",w.classList.add("m-open"),w.classList.add("m-outlook"),w.appendChild(ge(l.open_in_||R.open_in_));var P=ve("span");P.className="w-500",P.appendChild(ge(l.outlook||R.outlook)),w.appendChild(P),t.appendChild(w),(C=ve("a")).id="m-outlook",C.href="#mailgo-yahoo",C.classList.add("m-open"),C.classList.add("m-yahoo"),C.appendChild(ge(l.open_in_||R.open_in_));var U=ve("span");U.className="w-500",U.appendChild(ge(l.yahoo||R.yahoo)),C.appendChild(U),t.appendChild(C),(L=ve("a")).id="m-open",L.href="#mailgo-open",L.classList.add("m-open"),L.classList.add("m-default");var T=ve("span");T.className="w-500",T.appendChild(ge(l.open||R.open)),L.appendChild(T),L.appendChild(ge(l._default||R._default)),t.appendChild(L),(O=ve("a")).id="m-copy",O.href="#mailgo-copy",O.classList.add("m-copy"),O.classList.add("w-500"),O.appendChild(ge(l.copy||R.copy)),t.appendChild(O),void 0===(null===(a=i)||void 0===a?void 0:a.showFooter)&&(W=i.showFooter),W&&t.appendChild(be()),document.body.appendChild(m),o.addEventListener("click",ue)}if(!document.getElementById("mailgo-tel")){var z,M,H;(c=ve()).style.display="none",c.id="mailgo-tel",c.classList.add("m-modal"),c.setAttribute("role","dialog"),c.setAttribute("tabindex","-1"),c.setAttribute("aria-labelledby","m-tel-title"),(null===(z=i)||void 0===z?void 0:z.dark)?je("tel"):Ae("tel");var B=ve();B.className="m-modal-back",c.appendChild(B);var F=ve();F.className="m-modal-content",c.appendChild(F),(s=ve("strong")).id="m-tel-title",s.className="m-title",F.appendChild(s),(x=ve("a")).id="m-tg",x.href="#mailgo-telegram",x.classList.add("m-open"),x.classList.add("m-tg"),x.style.display="none",x.appendChild(ge(l.open_in_||R.open_in_));var q=ve("span");q.className="w-500",q.appendChild(ge(l.telegram||R.telegram)),x.appendChild(q),F.appendChild(x),(j=ve("a")).id="m-wa",j.href="#mailgo-whatsapp",j.classList.add("m-open"),j.classList.add("m-wa"),j.appendChild(ge(l.open_in_||R.open_in_));var J=ve("span");J.className="w-500",J.appendChild(ge(l.whatsapp||R.whatsapp)),j.appendChild(J),F.appendChild(j),(A=ve("a")).id="m-skype",A.href="#mailgo-skype",A.classList.add("m-open"),A.classList.add("m-skype"),A.appendChild(ge(l.open_in_||R.open_in_));var K=ve("span");K.className="w-500",K.appendChild(ge(l.skype||R.skype)),A.appendChild(K),F.appendChild(A),(E=ve("a")).id="m-call",E.href="#mailgo-open",E.classList.add("m-open"),E.classList.add("m-default");var Z=ve("span");Z.className="w-500",Z.appendChild(ge(l.call||R.call)),E.appendChild(Z),E.appendChild(ge(l._as_default||R._as_default)),F.appendChild(E),(S=ve("a")).id="m-tel-copy",S.href="#mailgo-copy",S.classList.add("m-copy"),S.classList.add("w-500"),S.appendChild(ge(l.copy||R.copy)),F.appendChild(S),void 0!==(null===(M=i)||void 0===M?void 0:M.showFooter)&&!1===(null===(H=i)||void 0===H?void 0:H.showFooter)||F.appendChild(be()),document.body.appendChild(c),B.addEventListener("click",ue)}document.addEventListener("click",re)};function X(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mail",o=arguments.length>1?arguments[1]:void 0;if("mail"===a){var t;if(o.href&&o.href.toLowerCase().startsWith(P)){F=decodeURIComponent(o.href.split("?")[0].split(P)[1].trim());var n=new URL(o.href).searchParams;J=n.get("cc"),K=n.get("bcc"),Z=n.get("subject"),$=n.get("body")}else F=o.getAttribute("data-address")+"@"+o.getAttribute("data-domain"),new URL(P+encodeURIComponent(F)),J=o.getAttribute("data-cc-address")+"@"+o.getAttribute("data-cc-domain"),K=o.getAttribute("data-bcc-address")+"@"+o.getAttribute("data-bcc-domain"),Z=o.getAttribute("data-subject"),$=o.getAttribute("data-body");if(void 0!==(null===(t=i)||void 0===t?void 0:t.validateEmail)&&(z=i.validateEmail),z){if(!Se(F.split(",")))return;J&&!Se(J.split(","))&&(J=""),K&&!Se(K.split(","))&&(K="")}r.innerHTML=F.split(",").join("<br/>"),J?(p.style.display="block",v.innerHTML=J.split(",").join("<br/>")):p.style.display="none",K?(u.style.display="block",g.innerHTML=K.split(",").join("<br/>")):u.style.display="none",Z?(f.style.display="block",h.textContent=Z):f.style.display="none",$?(b.style.display="block",y.textContent=$):b.style.display="none",_.addEventListener("click",ee),w.addEventListener("click",ae),C.addEventListener("click",oe),q=ye(F),L.addEventListener("click",te),O.addEventListener("click",function(e){e.preventDefault(),me(F)})}else if("tel"===a){var d;if(o.href&&o.href.toLowerCase().startsWith(U)?G=decodeURIComponent(o.href.split("?")[0].split(U)[1].trim()):o.href&&o.href.toLowerCase().startsWith(T)?G=decodeURIComponent(o.href.split("?")[0].split(T)[1].trim()):o.hasAttribute("data-tel")&&(G=o.getAttribute("data-tel"),o.getAttribute("data-msg")),void 0!==(null===(d=i)||void 0===d?void 0:d.validateTel)&&(M=i.validateTel),M&&!Ne(G))return;Y=o.hasAttribute("data-telegram")?o.getAttribute("data-telegram"):null,o.hasAttribute("data-skype")&&(Q=o.getAttribute("data-skype")),s.innerHTML=G,j.addEventListener("click",le),Y?(document.getElementById("m-tg").style.display="block",x.addEventListener("click",ne)):document.getElementById("m-tg").style.display="none",A.addEventListener("click",de),E.addEventListener("click",ie),S.addEventListener("click",function(e){e.preventDefault(),me(G)})}(null===(e=i)||void 0===e?void 0:e.dark)||(o.classList.contains("dark")?je(a):Ae(a)),pe(a),document.addEventListener("keydown",se)}var ee=function(e){e.preventDefault();var a="https://mail.google.com/mail/u/0/?view=cm&source=mailto&to="+encodeURIComponent(F);J&&(a=a.concat("&cc="+encodeURIComponent(J))),K&&(a=a.concat("&bcc="+encodeURIComponent(K))),Z&&(a=a.concat("&subject="+Z)),$&&(a=a.concat("&body="+$)),window.open(a,"_blank"),ue()},ae=function(e){e.preventDefault();var a="https://outlook.live.com/owa/?path=/mail/action/compose&to="+encodeURIComponent(F);Z&&(a=a.concat("&subject="+Z)),$&&(a=a.concat("&body="+$)),window.open(a,"_blank"),ue()},oe=function(e){e.preventDefault();var a="https://compose.mail.yahoo.com/?to="+encodeURIComponent(F);Z&&(a=a.concat("&subject="+Z)),$&&(a=a.concat("&body="+$)),window.open(a,"_blank"),ue()},te=function(e){e.preventDefault(),he(q),ue()},ne=function(e){e.preventDefault();var a="https://t.me/"+Y;window.open(a,"_blank"),ue()},de=function(e){e.preventDefault();var a="skype:"+(""!==Q?Q:G);window.open(a,"_blank"),ue()},le=function(e){e.preventDefault();var a="https://wa.me/"+G;window.open(a,"_blank"),ue()},ie=function(e){e.preventDefault();var a=U+G;window.open(a),ue()},me=function(e){var a;De(e),(a=fe("mail")?O:S).textContent=l.copied||R.copied,setTimeout(function(){a.textContent=l.copy||R.copy,ue()},999)};function ce(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mail",o=e.href;return"mail"===a?o&&o.toLowerCase().startsWith(P)&&!e.classList.contains("no-mailgo")||e.hasAttribute("data-address")&&(o&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo")):"tel"===a&&(o&&(o.toLowerCase().startsWith(U)||o.toLowerCase().startsWith(T))&&!e.classList.contains("no-mailgo")||e.hasAttribute("data-tel")&&o&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo"))}function re(e){if(!document.contains(m)||!document.contains(c))return!1;if(fe("mail")||fe("tel"))return!1;var a=e.composedPath&&e.composedPath()||Ee(e.target);return a&&a.forEach(function(a){return!(a instanceof HTMLDocument||a instanceof Window)&&(ce(a,"mail")?(e.preventDefault(),X("mail",a),!0):ce(a,"tel")?(e.preventDefault(),X("tel",a),!0):void 0)}),!1}var se=function(e){if(fe("mail"))switch(e.keyCode){case 27:ue();break;case 71:ee();break;case 79:ae();break;case 32:case 13:te();break;case 67:me(F);break;default:return}else if(fe("tel"))switch(e.keyCode){case 27:ue();break;case 84:ne();break;case 87:le();break;case 32:case 13:ie();break;case 67:me(G);break;default:return}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mail";we(e,"flex")},ue=function(){we("mail","none"),we("tel","none"),document.removeEventListener("keydown",se)},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mail";return"flex"===_e(e)},be=function(){var e=ve("a");return e.href="https://mailgo.dev?ref=mailgo-modal",e.className="m-by",e.target="_blank",e.rel="noopener noreferrer",e.appendChild(ge("mailgo.dev")),e},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(e)},ge=function(e){return document.createTextNode(e)},he=function(e){return window.location.href=P+atob(e)},ye=function(e){return btoa(e)},ke=function(){return"tel"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mail")?c:m},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mail";return ke(e).style.display},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mail",a=arguments.length>1?arguments[1]:void 0,o=ke(e);o.style.display=a,"flex"===a?(k=document.activeElement,o.setAttribute("aria-hidden","false"),o.setAttribute("tabindex","0"),o.focus(),Ce(o)):(o.setAttribute("aria-hidden","true"),o.setAttribute("tabindex","-1"),k.focus())},Ce=function(e){var a=e;a.querySelector(".m-modal-content a:last-of-type").addEventListener("keydown",Le),a.querySelector(".m-modal-content a:first-of-type").addEventListener("keydown",xe)},Le=function(e){"Tab"===e.code&&!1===e.shiftKey&&(e.preventDefault(),e.target.closest("div").querySelector("a:first-of-type").focus())},xe=function(e){"Tab"===e.code&&!0===e.shiftKey&&(e.preventDefault(),e.target.closest("div").querySelector("a:last-of-type").focus())},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mail";return ke(e).classList.add("m-dark")},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mail";return ke(e).classList.remove("m-dark")},Ee=function(e){for(var a=[];e;){if(a.push(e),"HTML"===e.tagName)return a.push(document),a.push(window),a;e=e.parentElement}},Oe=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},Se=function(e){return e.every(Oe)},Ne=function(e){return/^[+]{0,1}[\s0-9]{0,}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(e)},De=function(e){var a=ve("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);var o=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);return a.select(),document.execCommand("copy"),document.body.removeChild(a),!!o&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(o),!0)};!function(e){var a,o;if(i=n(n({},e),(null===(a=window)||void 0===a?void 0:a.mailgoConfig)||null),window&&"undefined"!=typeof window){var t,d,m,c,r;if(void 0!==(null===(t=i)||void 0===t?void 0:t.loadCSS)&&(H=i.loadCSS),(null===(d=i)||void 0===d?void 0:d.lang)&&-1!==N.languages.indexOf(i.lang)&&(B=i.lang),!(null===(m=i)||void 0===m?void 0:m.forceLang)){var s=document.documentElement.lang,p=N.languages.findIndex(function(e){return s.startsWith(e)});-1!==p&&(B=N.languages[p])}l=D[B],H&&((o=ve("style")).id="mailgo-style",o.type="text/css",o.appendChild(ge(I)),document.head.appendChild(o)),(null===(c=i)||void 0===c?void 0:c.initEvent)?(null===(r=i)||void 0===r?void 0:r.listenerOptions)?document.addEventListener(i.initEvent,V,i.listenerOptions):document.addEventListener(i.initEvent,V):V()}}({initEvent:"DOMContentLoaded"})}]);
},{}],"JkW8":[function(require,module,exports) {
"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function e(i){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t(this,e),!(i instanceof Node))throw"Can't initialize VanillaTilt because "+i+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=i,this.settings=this.extendSettings(s),this.reverse=this.settings.reverse?-1:1,this.glare=e.isSettingTrue(this.settings.glare),this.glarePrerender=e.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=e.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=e.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}return e.isSettingTrue=function(t){return""===t||!0===t||1===t},e.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){var t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},e.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},e.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},e.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},e.prototype.onDeviceOrientation=function(t){if(null!==t.gamma&&null!==t.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=e/this.width,n=i/this.height,a=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/s,l=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/n;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:a+this.left,clientY:l+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},e.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},e.prototype.onMouseMove=function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)},e.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},e.prototype.reset=function(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()},e.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},e.prototype.updateInitialPosition=function(){if(0!==this.settings.startX||0!==this.settings.startY){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}},e.prototype.getValues=function(){var t=void 0,e=void 0;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},e.prototype.updateElementPosition=function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top},e.prototype.update=function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+t.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null},e.prototype.prepareGlare=function(){if(!this.glarePrerender){var t=document.createElement("div");t.classList.add("js-tilt-glare");var e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:2*this.element.offsetWidth+"px",height:2*this.element.offsetWidth+"px",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))},e.prototype.updateGlareSize=function(){this.glare&&Object.assign(this.glareElement.style,{width:""+2*this.element.offsetWidth,height:""+2*this.element.offsetWidth})},e.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},e.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},e.prototype.setTransition=function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout(function(){t.element.style.transition="",t.glare&&(t.glareElement.style.transition="")},this.settings.speed)},e.prototype.extendSettings=function(t){var e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){var n=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(n)}catch(a){i[s]=n}}else i[s]=e[s];return i},e.init=function(t,i){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(function(t){"vanillaTilt"in t||(t.vanillaTilt=new e(t,i))})},e}();"undefined"!=typeof document&&(window.VanillaTilt=e,e.init(document.querySelectorAll("[data-tilt]"))),module.exports=e;
},{}],"MgTz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=void 0;var e=function(e,o,r){var t;return function(){for(var n=arguments.length,u=new Array(n),i=0;i<n;i++)u[i]=arguments[i];e&&e();clearTimeout(t),t=setTimeout(function(){clearTimeout(t),o.apply(void 0,u)},r)}};exports.debounce=e;
},{}],"QvaY":[function(require,module,exports) {
"use strict";require("mailgo/dist/mailgo.min.js");var e=l(require("vanilla-tilt")),t=require("./utils");function l(e){return e&&e.__esModule?e:{default:e}}e.default.init(document.querySelector(".avatar"),{max:10,speed:3e3,glare:!0,"max-glare":.4,scale:1.2}),e.default.init(document.querySelector(".header--tilt"),{max:5,speed:5e3,scale:1.1}),e.default.init(document.querySelectorAll(".project__image"),{max:5,speed:5e3,scale:1.1});var o=document.querySelector("body"),i=(0,t.debounce)(function(){o.classList.contains("on-scrolling")||o.classList.add("on-scrolling")},function(){o.classList.remove("on-scrolling")},1500);window.addEventListener("scroll",i,!1);var r=document.querySelector(".btn-back-to-top");r.addEventListener("click",function(){window.scroll({top:0,behavior:"smooth"})});
},{"mailgo/dist/mailgo.min.js":"v8UH","vanilla-tilt":"JkW8","./utils":"MgTz"}]},{},["QvaY"], null)
//# sourceMappingURL=/dinhhau1807/js.4fe173b1.js.map