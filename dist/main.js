!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},8533:function(t,n,e){"use strict";var r=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,n,e){var r=e(5656),o=e(7466),i=e(1400),s=function(t){return function(n,e,s){var c,a=r(n),u=o(a.length),f=i(s,u);if(t&&e!=e){for(;u>f;)if((c=a[f++])!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},2092:function(t,n,e){var r=e(9974),o=e(8361),i=e(7908),s=e(7466),c=e(5417),a=[].push,u=function(t){var n=1==t,e=2==t,u=3==t,f=4==t,l=6==t,h=7==t,p=5==t||l;return function(v,d,g,y){for(var m,x,b=i(v),w=o(b),S=r(d,g,3),P=s(w.length),E=0,T=y||c,L=n?T(v,P):e||h?T(v,0):void 0;P>E;E++)if((p||E in w)&&(x=S(m=w[E],E,b),t))if(n)L[E]=x;else if(x)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:a.call(L,m)}else switch(t){case 4:return!1;case 7:a.call(L,m)}return l?-1:u||f?f:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},1194:function(t,n,e){var r=e(7293),o=e(5112),i=e(7392),s=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[s]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},9341:function(t,n,e){"use strict";var r=e(7293);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},7475:function(t,n,e){var r=e(111),o=e(3157),i=e(5112)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),void 0===n?Array:n}},5417:function(t,n,e){var r=e(7475);t.exports=function(t,n){return new(r(t))(0===n?0:n)}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,e){var r=e(1694),o=e(4326),i=e(5112)("toStringTag"),s="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:s?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},9920:function(t,n,e){var r=e(6656),o=e(3887),i=e(1236),s=e(3070);t.exports=function(t,n){for(var e=o(n),c=s.f,a=i.f,u=0;u<e.length;u++){var f=e[u];r(t,f)||c(t,f,a(n,f))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:function(t,n,e){"use strict";var r=e(4948),o=e(3070),i=e(9114);t.exports=function(t,n,e){var s=r(n);s in t?o.f(t,s,i(0,e)):t[s]=e}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),s=e(8113),c=i.process,a=i.Deno,u=c&&c.versions||a&&a.version,f=u&&u.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),s=e(1320),c=e(3505),a=e(9920),u=e(4705);t.exports=function(t,n){var e,f,l,h,p,v=t.target,d=t.global,g=t.stat;if(e=d?r:g?r[v]||c(v,{}):(r[v]||{}).prototype)for(f in n){if(h=n[f],l=t.noTargetGet?(p=o(e,f))&&p.value:e[f],!u(d?f:v+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof h==typeof l)continue;a(h,l)}(t.sham||l&&l.sham)&&i(h,"sham",!0),s(e,f,h,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,n,e){var r=e(3099);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},5005:function(t,n,e){var r=e(7854),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(r[t]):r[t]&&r[t][n]}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:function(t,n,e){var r=e(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(r(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7293),o=e(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,e){var r=e(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,n,e){var r,o,i,s=e(8536),c=e(7854),a=e(111),u=e(8880),f=e(6656),l=e(5465),h=e(6200),p=e(3501),v="Object already initialized",d=c.WeakMap;if(s||l.state){var g=l.state||(l.state=new d),y=g.get,m=g.has,x=g.set;r=function(t,n){if(m.call(g,t))throw new TypeError(v);return n.facade=t,x.call(g,t,n),n},o=function(t){return y.call(g,t)||{}},i=function(t){return m.call(g,t)}}else{var b=h("state");p[b]=!0,r=function(t,n){if(f(t,b))throw new TypeError(v);return n.facade=t,u(t,b,n),n},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},3157:function(t,n,e){var r=e(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,n,e){var r=e(7293),o=/#|\.prototype\./,i=function(t,n){var e=c[s(t)];return e==u||e!=a&&("function"==typeof n?r(n):!!n)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(5005),o=e(3307);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return"function"==typeof n&&Object(t)instanceof n}},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(9670),s=e(4948),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=s(n),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(5296),i=e(9114),s=e(5656),c=e(4948),a=e(6656),u=e(4664),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=s(t),n=c(n),u)try{return f(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,e){var r=e(6656),o=e(5656),i=e(1318).indexOf,s=e(3501);t.exports=function(t,n){var e,c=o(t),a=0,u=[];for(e in c)!r(s,e)&&r(c,e)&&u.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(u,e)||u.push(e));return u}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},288:function(t,n,e){"use strict";var r=e(1694),o=e(648);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(t,n,e){var r=e(111);t.exports=function(t,n){var e,o;if("string"===n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if("string"!==n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(8006),i=e(5181),s=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(s(t)),e=i.f;return e?n.concat(e(t)):n}},1320:function(t,n,e){var r=e(7854),o=e(8880),i=e(6656),s=e(3505),c=e(2788),a=e(9909),u=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var a,u=!!c&&!!c.unsafe,h=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=f(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(u?!p&&t[n]&&(h=!0):delete t[n],h?t[n]=e:o(t,n,e)):h?t[n]=e:s(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},7066:function(t,n,e){"use strict";var r=e(9670);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854);t.exports=function(t,n){try{Object.defineProperty(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.16.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,n,e){var r=e(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:function(t,n,e){var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,n,e){var r=e(111),o=e(2190),i=e(2140),s=e(5112)("toPrimitive");t.exports=function(t,n){if(!r(t)||o(t))return t;var e,c=t[s];if(void 0!==c){if(void 0===n&&(n="default"),e=c.call(t,n),!r(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),i(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:String(n)}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,n,e){var r=e(2190);t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},9711:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(6656),s=e(9711),c=e(133),a=e(3307),u=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||s;t.exports=function(t){return i(u,t)&&(c||"string"==typeof u[t])||(c&&i(f,t)?u[t]=f[t]:u[t]=l("Symbol."+t)),u[t]}},561:function(t,n,e){"use strict";var r=e(2109),o=e(1400),i=e(9958),s=e(7466),c=e(7908),a=e(5417),u=e(6135),f=e(1194)("splice"),l=Math.max,h=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(t,n){var e,r,f,d,g,y,m=c(this),x=s(m.length),b=o(t,x),w=arguments.length;if(0===w?e=r=0:1===w?(e=0,r=x-b):(e=w-2,r=h(l(i(n),0),x-b)),x+e-r>p)throw TypeError(v);for(f=a(m,r),d=0;d<r;d++)(g=b+d)in m&&u(f,d,m[g]);if(f.length=r,e<r){for(d=b;d<x-r;d++)y=d+e,(g=d+r)in m?m[y]=m[g]:delete m[y];for(d=x;d>x-r+e;d--)delete m[d-1]}else if(e>r)for(d=x-r;d>b;d--)y=d+e-1,(g=d+r-1)in m?m[y]=m[g]:delete m[y];for(d=0;d<e;d++)m[d+b]=arguments[d+2];return m.length=x-r+e,f}})},1539:function(t,n,e){var r=e(1694),o=e(1320),i=e(288);r||o(Object.prototype,"toString",i,{unsafe:!0})},9714:function(t,n,e){"use strict";var r=e(1320),o=e(9670),i=e(1340),s=e(7293),c=e(7066),a="toString",u=RegExp.prototype,f=u.toString,l=s((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),h=f.name!=a;(l||h)&&r(RegExp.prototype,a,(function(){var t=o(this),n=i(t.source),e=t.flags;return"/"+n+"/"+i(void 0===e&&t instanceof RegExp&&!("flags"in u)?c.call(t):e)}),{unsafe:!0})},4747:function(t,n,e){var r=e(7854),o=e(8324),i=e(8533),s=e(8880);for(var c in o){var a=r[c],u=a&&a.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(t){u.forEach=i}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(4747),e(561),e(1539),e(9714);var n=function(){function n(t){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.canvas=t,this.ctx=t.getContext("2d"),this.dimensions={height:t.height,width:t.width},this.starPos=[],this.generateStars(),this.resetStars()}var e,r;return e=n,(r=[{key:"generateStars",value:function(){var t=this,n=document.getElementById("star-img");this.starPos=[[Math.floor(3*Math.random()+1),Math.floor(4*Math.random())+3],[Math.floor(3*Math.random())+4,Math.floor(4*Math.random())+3]];for(var e=this.starPos[1][0]-this.starPos[0][0],r=this.starPos[1][1]-this.starPos[0][1];this.starPos.length<3;){if(this.starPos[this.starPos.length-1][0]>15||this.starPos[this.starPos.length-1][1]<0||this.starPos[this.starPos.length-1][1]>11){this.starPos.pop();break}this.starPos.push([this.starPos[this.starPos.length-1][0]+e,this.starPos[this.starPos.length-1][1]+r])}this.starPos.forEach((function(e){t.ctx.drawImage(n,50*e[0]-10,50*e[1]-10,20,20)}))}},{key:"regenerateStars",value:function(){var t=this,n=document.getElementById("star-img");this.starPos.forEach((function(e){t.ctx.drawImage(n,50*e[0]-10,50*e[1]-10,20,20)}))}},{key:"resetStars",value:function(){var t=this,n=document.querySelector(".regen-star"),e=document.querySelector("#equation");n.addEventListener("click",(function(){t.ctx.clearRect(0,0,t.dimensions.width,t.dimensions.height);var n=new o(t.canvas);n.drawAxis(),n.drawGrid(),e.value="",t.generateStars(),document.getElementById("car-img").style.visibility="visible"}))}}])&&t(e.prototype,r),n}();function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=n,this.ctx=n.getContext("2d"),this.dimensions={height:n.height,width:n.width},this.startPos=[],this.endPos=[],this.drawAxis(),this.drawGrid()}var n,e;return n=t,(e=[{key:"drawAxis",value:function(){this.ctx.strokeStyle="black",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(this.dimensions.width/2,0),this.ctx.lineTo(this.dimensions.width/2,this.dimensions.height),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(0,this.dimensions.height/2),this.ctx.lineTo(this.dimensions.width,this.dimensions.height/2),this.ctx.stroke()}},{key:"drawGrid",value:function(){var t=this.dimensions.height/12,n=this.dimensions.width/16,e=this.dimensions.height/2,r=this.dimensions.width/2;this.ctx.strokeStyle="grey",this.ctx.lineWidth=.5;for(var o=-8;o<=8;o++)this.ctx.beginPath(),this.ctx.moveTo(n*o+r,0),this.ctx.lineTo(n*o+r,this.dimensions.height),this.ctx.stroke(),this.ctx.fillText(o.toString(),n*o+r+3,e+12);for(var i=-6;i<=6;i++)this.ctx.beginPath(),this.ctx.moveTo(0,t*i+e),this.ctx.lineTo(this.dimensions.width,t*i+e),this.ctx.stroke(),0!==i&&this.ctx.fillText(-1*i.toString(),r+5,t*i+e-3)}},{key:"drawLine",value:function(t,n){this.ctx.strokeStyle="rgb(128, 206, 214)",this.ctx.lineWidth=5,this.startPos=[this.dimensions.width/2+50*t[0],this.dimensions.height/2-50*t[1]],this.endPos=[this.dimensions.width/2+50*n[0],this.dimensions.height/2-50*n[1]],this.ctx.beginPath(),this.ctx.moveTo(this.startPos[0],this.startPos[1]),this.ctx.lineTo(this.endPos[0],this.endPos[1]),this.ctx.stroke()}},{key:"calculateFunction",value:function(){document.querySelector("#equation"),document.querySelector("#create-btn")}}])&&r(n.prototype,e),t}();function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=n,this.ctx=n.getContext("2d"),this.dimensions={height:n.height,width:n.width}}var n,e;return n=t,(e=[{key:"startCar",value:function(){document.getElementById("car-img").style.visibility="hidden"}},{key:"getDistance",value:function(t,n,e,r){var o=e-t,i=r-n;return Math.sqrt(Math.pow(o,2)+Math.pow(i,2))}},{key:"getAngle",value:function(t,n){return Math.atan(n/t)}}])&&i(n.prototype,e),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas"),e=new o(t),r=new n(t),i=new s(t),c=new Audio("./src/sounds/coin.wav"),a=0,u=0,f=0,l=0,h=document.querySelector("#equation"),p=document.querySelector("#reset-btn"),v=document.querySelector("#create-btn");function d(){a<800&&requestAnimationFrame(d),i.ctx.clearRect(0,0,i.dimensions.width,i.dimensions.height),e.drawAxis(),e.drawGrid(),h.value="",r.regenerateStars(),e.drawLine([-8,f],[8,l]);var t=e.endPos[0]-e.startPos[0],n=e.endPos[1]-e.startPos[1],o=i.getAngle(t,n),s=document.getElementById("car-img");i.ctx.save(),i.ctx.translate(a,u),i.ctx.rotate(o),i.ctx.translate(-s.width/2,-s.height/2),i.ctx.drawImage(s,0,0,60,60),i.ctx.restore(),r.starPos.forEach((function(t,n){i.getDistance(a,u,50*t[0],50*t[1])<=5.33&&(c.play(),r.starPos.splice(n,1),0===r.starPos.length&&alert("Great! You got all stars!"))})),a+=t/200,u+=n/200}p.addEventListener("click",(function(){e.ctx.clearRect(0,0,e.dimensions.width,e.dimensions.height),e.drawAxis(),e.drawGrid(),h.value="",r.regenerateStars()})),v.addEventListener("click",(function(){var t=h.value,n=math.parse(t).compile();f=n.evaluate({x:-8}),l=n.evaluate({x:8}),e.drawLine([-8,f],[8,l]),a=e.startPos[0],u=e.startPos[1]})),document.querySelector("#car-img").addEventListener("click",(function(){i.startCar(),d()}));var g=document.querySelector("#popup"),y=document.querySelector(".instruction-btn"),m=document.querySelector("#closePopup"),x=document.querySelectorAll("body > div:not(#popup)");y.onclick=function(){g.classList.remove("invisible"),g.classList.add("visible-popup"),x.forEach((function(t){t.classList.add("filter")}))},m.onclick=function(){g.classList.add("invisible"),g.classList.remove("visible-popup"),x.forEach((function(t){t.classList.remove("filter")}))}}))}()}();
//# sourceMappingURL=main.js.map