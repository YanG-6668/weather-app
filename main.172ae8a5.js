parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e,t="e1893000db0630e29e513dd37ec06b5b",r="imperial";function c(t){e=5===t&&Number.parseInt(t)+""===t?"zip":"q"}function a(a){c(a),fetch("http://api.openweathermap.org/data/2.5/weather?".concat(e,"=").concat(a,"&APPID=").concat(t,"&units=").concat(r)).then(function(e){return e.json()}).then(function(e){n(e)})}function n(e){var t=document.querySelector(".clear"),r=document.querySelector(".cloudy"),c=document.querySelector(".storm"),a=document.querySelector(".snow"),n=document.querySelector(".rain"),o=document.querySelector(".default"),i=document.querySelectorAll(".promo-img"),u=function(){return i.forEach(function(e){e.classList.remove("active")})};switch(e.weather[0].main){case"Clear":u(),t.classList.add("active");break;case"Clouds":u(),r.classList.add("active");break;case"Rain":case"Drizzle":case"Mist":u(),n.classList.add("active");break;case"Thunderstorm":u(),c.classList.add("active");break;case"snow":u(),a.classList.add("active");break;default:u(),o.classList.add("active")}var s=document.querySelector(".weather__description-header"),d=document.querySelector(".weather__temperature"),l=document.querySelector(".weather__humidity"),m=document.querySelector(".weather__wind-speed"),h=document.querySelector(".weather__city-header"),y=document.querySelector(".weather__icon"),p=document.querySelector(".weather__container"),w=e.weather[0].description;y.src="http://openweathermap.org/img/wn/"+e.weather[0].icon+".png",s.textContent=w.charAt(0).toUpperCase()+w.slice(1),d.innerHTML=Math.round((e.main.temp-32)/1.8)+"&#8451",l.textContent="Humidity levels at "+Math.round(e.main.humidity)+"%",m.textContent="Wind at "+Math.round(e.wind.speed)+" m/s",h.textContent="".concat(e.name,", ").concat(e.sys.country),p.style.visibility="visible"}var o=document.querySelector(".weather__search-btn");o.addEventListener("click",function(){var e=document.querySelector(".weather__search-input").value;e&&a(e)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.172ae8a5.js.map