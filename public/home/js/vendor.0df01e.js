!
function(e) {
    function t(n) {
        if (a[n]) return a[n].exports;
        var r = a[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(i, o) {
        for (var s, c, l = 0,
        u = []; l < i.length; l++) c = i[l],
        r[c] && u.push.apply(u, r[c]),
        r[c] = 0;
        for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
        for (n && n(i, o); u.length;) u.shift().call(null, t);
        if (o[0]) return a[0] = 0,
        t(0)
    };
    var a = {},
    r = {
        6 : 0
    };
    return t.e = function(e, n) {
        if (0 === r[e]) return n.call(null, t);
        if (void 0 !== r[e]) r[e].push(n);
        else {
            r[e] = [n];
            var a = document.getElementsByTagName("head")[0],
            i = document.createElement("script");
            i.type = "text/javascript",
            i.charset = "utf-8",
            i.async = !0,
            i.src = t.p + "" + e + "." + ({
                0 : "404",
                1 : "gift",
                2 : "home",
                3 : "main",
                4 : "profile",
                5 : "support"
            } [e] || e) + "." + {
                0 : "6359c9",
                1 : "bcd70d",
                2 : "2adc74",
                3 : "f37a6b",
                4 : "fb1b4e",
                5 : "f7d04b"
            } [e] + ".js",
            a.appendChild(i)
        }
    },
    t.m = e,
    t.c = a,
    t.p = "//faas.elemecdn.com/desktop/",
    t(0)
} ([function(e, t) {},
function(e, t) {},
, , , , , , , , ,
function(e, t, n) {
    "use strict";
    n(12),
    n(15),
    n(17),
    n(19),
    n(21),
    n(23),
    n(25),
    n(27),
    n(29),
    window.Geohash = n(31)
},
function(e, t, n) {
    n(13)(n(14))
},
function(e, t) {
    e.exports = function(e) {
        "function" == typeof execScript ? execScript(e) : eval.call(null, e)
    }
},
function(e, t) {
    e.exports = '/*\n AngularJS v1.2.28\n (c) 2010-2014 Google, Inc. http://angularjs.org\n License: MIT\n*/\n(function(W,X,u){\'use strict\';function z(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.28/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \\{[\\s\\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Sa(b){if(null==b||Ja(b))return!1;\nvar a=b.length;return 1===b.nodeType&&a?!0:G(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(N(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(L(b)||Sa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Xb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,\na,c){for(var d=Xb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Yb(b){return function(a,c){b(c,a)}}function ib(){for(var b=na.length,a;b;){b--;a=na[b].charCodeAt(0);if(57==a)return na[b]="A",na.join("");if(90==a)na[b]="0";else return na[b]=String.fromCharCode(a+1),na.join("")}na.unshift("0");return na.join("")}function Zb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Zb(b,a);return b}function U(b){return parseInt(b,\n10)}function $b(b,a){return E(new (E(function(){},{prototype:b})),a)}function v(){}function ga(b){return b}function aa(b){return function(){return b}}function F(b){return"undefined"===typeof b}function D(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function G(b){return"string"===typeof b}function jb(b){return"number"===typeof b}function va(b){return"[object Date]"===Ba.call(b)}function N(b){return"function"===typeof b}function kb(b){return"[object RegExp]"===Ba.call(b)}\nfunction Ja(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ta(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ua(b,a){var c=Ta(b,a);0<=c&&b.splice(c,1);return a}function Ka(b,a,c,d){if(Ja(b)||b&&b.$evalAsync&&b.$watch)throw Va("cpws");if(a){if(b===a)throw Va("cpi");c=c||[];\nd=d||[];if(T(b)){var e=Ta(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;L(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;Zb(a,g)}}else if(a=b)L(b)?a=Ka(b,[],c,d):va(b)?a=new Date(b.getTime()):kb(b)?(a=RegExp(b.source,b.toString().match(/[^\\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ka(b,{},c,d));\nreturn a}function ha(b,a){if(L(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!lb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Ca(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ca(b[d],a[d]))return!1;return!0}}else{if(va(b))return va(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===\na.getTime():!1;if(kb(b)&&kb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ja(b)||Ja(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!N(b[d])){if(!Ca(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!N(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?wa.call(arguments,2):[];return!N(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(wa.call(arguments,\n0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=u:Ja(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?u:JSON.stringify(b,Vc,a?"  ":null)}function ac(b){return G(b)?JSON.parse(b):b}function Wa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;\nreturn b}function ia(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\\w\\-]+)/,function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function bc(b){try{return decodeURIComponent(b)}catch(a){}}function cc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\\+/g,"%20").split("="),d=bc(c[0]),D(d)&&(b=D(c[1])?bc(c[1]):!0,lb.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=\n[];r(b,function(b,d){L(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function mb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",\n"data-ng-app"],h=/\\sng[:\\-]app(:\\s*([\\w\\d_]+);?)?\\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function dc(b,a){var c=function(){b=A(b);if(b.injector()){var c=b[0]===X?\n"document":ia(b);throw Va("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ec(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Xa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function nb(b,a){a=\na||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Va("areq",a||"?",c||"required");return b}function Ya(b,a,c){c&&L(b)&&(b=b[b.length-1]);Db(N(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ea(b,a){if("hasOwnProperty"===b)throw Va("badname",a);}function fc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&N(b)?Bb(e,b):b}function Eb(b){var a=\nb[0];b=b[b.length-1];if(a===b)return A(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function Yc(b){var a=z("$injector"),c=z("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||z;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",\ne);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}\nfunction Zc(b){E(b,{bootstrap:dc,copy:Ka,extend:E,equals:Ca,element:A,forEach:r,injector:ec,noop:v,bind:Bb,toJson:oa,fromJson:ac,identity:ga,isUndefined:F,isDefined:D,isString:G,isFunction:N,isObject:T,isNumber:jb,isElement:Tc,isArray:L,version:$c,isDate:va,lowercase:x,uppercase:La,callbacks:{counter:0},$$minErr:z,$$csp:Za});$a=Yc(W);try{$a("ngLocale")}catch(a){$a("ngLocale",[]).provider("$locale",ad)}$a("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",\ngc).directive({a:cd,input:hc,textarea:hc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ic,ngRequired:ic,ngValue:Id}).directive({ngInclude:Jd}).directive(Fb).directive(jc);\na.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:kc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function ab(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:\n[this],k=a,m,l,n,q,p,s;if(!d||null!=b)for(;e.length;)for(m=e.shift(),l=0,n=m.length;l<n;l++)for(q=A(m[l]),k?q.triggerHandler("$destroy"):k=!k,p=0,q=(s=q.children()).length;p<q;p++)e.push(Fa(s[p]));return f.apply(this,arguments)}var f=Fa.fn[b],f=f.$original||f;e.$original=f;Fa.fn[b]=e}function S(b){if(b instanceof S)return b;G(b)&&(b=$(b));if(!(this instanceof S)){if(G(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(G(b)){var a=b;b=X;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=\nb,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=da[e]||da._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);A(X.createDocumentFragment()).append(this)}else Jb(this,\nb)}function Kb(b){return b.cloneNode(!0)}function Ma(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ma(b[a])}function lc(b,a,c,d){if(D(d))throw Hb("offargs");var e=pa(b,"events");pa(b,"handle")&&(F(a)?r(e,function(a,c){bb(b,c,a);delete e[c]}):r(a.split(" "),function(a){F(c)?(bb(b,a,e[a]),delete e[a]):Ua(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=cb[c];d&&(a?delete cb[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),lc(b)),delete cb[c],b.ng339=u))}function pa(b,a,c){var d=\nb.ng339,d=cb[d||-1];if(D(c))d||(b.ng339=d=++me,d=cb[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=pa(b,"data"),e=D(c),f=!e&&D(a),g=f&&!T(a);d||g||pa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];E(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\\n\\t]/g," ").indexOf(" "+a+" "):!1}function ob(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",$((" "+(b.getAttribute("class")||"")+" ").replace(/[\\n\\t]/g,\n" ").replace(" "+$(a)+" "," ")))})}function pb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\\n\\t]/g," ");r(a.split(" "),function(a){a=$(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",$(c))}}function Jb(b,a){if(a){a=a.nodeName||!D(a.length)||Ja(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function mc(b,a){return qb(b,"$"+(a||"ngController")+"Controller")}function qb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=\n0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function nc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ma(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function oc(b,a){var c=rb[a.toLowerCase()];return c&&pc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(F(c.defaultPrevented)){var f=\nc.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=R?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Na(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=\nb.$$hashKey)?d=b.$$hashKey():d===u&&(d=b.$$hashKey=(a||ib)()):d=b;return c+":"+d}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function qc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,""),c=c.match(pe),r(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Ya(b[c],"fn"),a=b.slice(0,c)):Ya(b,"fn",!0);return a}function ec(b){function a(a){return function(b,c){if(T(b))r(b,\nYb(a));else return a(b,c)}}function c(a,b){Ea(a,"service");if(N(b)||L(b))b=n.instantiate(b);if(!b.$get)throw eb("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;r(a,function(a){if(!m.get(a)){m.put(a,!0);try{if(G(a))for(c=$a(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],k=n.get(g[0]);k[g[1]].apply(k,g[2])}else N(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Ya(a,"module")}catch(p){throw L(a)&&(a=\na[a.length-1]),p.message&&(p.stack&&-1==p.stack.indexOf(p.message))&&(p=p.message+"\\n"+p.stack),eb("modulerr",a,p.stack||p.message||p);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw eb("cdep",d+" <- "+k.join(" <- "));return a[d]}try{return k.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{k.shift()}}function d(a,b,e){var f=[],h=qc(a),g,k,p;k=0;for(g=h.length;k<g;k++){p=h[k];if("string"!==typeof p)throw eb("itkn",p);f.push(e&&e.hasOwnProperty(p)?\ne[p]:c(p))}L(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||N(e)?e:c},get:c,annotate:qc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",k=[],m=new db([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,\nb){Ea(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw eb("unpr",k.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||v)});return p}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;\nr(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,\nwa.call(arguments,1))}finally{if(s--,0===s)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ea(){r(w,function(a){a()});t=b(ea,a)})()}function g(){y!=h.url()&&(y=h.url(),r(ba,function(a){a(h.url())}))}var h=this,k=a[0],m=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};h.isMock=!1;var s=0,J=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){s++};h.notifyWhenNoOutstandingRequests=function(a){r(w,function(a){a()});0===s?a():J.push(a)};\nvar w=[],t;h.addPollFn=function(a){F(t)&&f(100,n);w.push(a);return a};var y=m.href,K=a.find("base"),B=null;h.url=function(a,c){m!==b.location&&(m=b.location);l!==b.history&&(l=b.history);if(a){if(y!=a){var e=y&&Ga(y)===Ga(a);y=a;!e&&d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),K.attr("href",K.attr("href"))):(e||(B=a),c?m.replace(a):m.href=a);return h}}else return B||m.href.replace(/%27/g,"\'")};var ba=[],O=!1;h.onUrlChange=function(a){if(!O){if(d.history)A(b).on("popstate",g);if(d.hashchange)A(b).on("hashchange",\ng);else h.addPollFn(g);O=!0}ba.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=K.attr("href");return a?a.replace(/^(https?\\:)?\\/\\/[^\\/]*/,""):""};var M={},ca="",P=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===u?k.cookie=escape(a)+"=;path="+P+";expires=Thu, 01 Jan 1970 00:00:00 GMT":G(b)&&(d=(k.cookie=escape(a)+"="+escape(b)+";path="+P).length+1,4096<d&&c.warn("Cookie \'"+a+"\' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==\nca)for(ca=k.cookie,d=ca.split("; "),M={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),M[a]===u&&(M[a]=unescape(e.substring(h+1))));return M}};h.defer=function(a,b){var c;s++;c=n(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(v),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=\nn&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=E({},d,{id:b}),k={},m=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;return a[b]={put:function(a,b){if(m<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!F(b))return a in k||g++,k[a]=b,g>m&&this.remove(q.key),b},get:function(a){if(m<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(m<Number.MAX_VALUE){var b=\nl[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete k[a];g--},removeAll:function(){k={};g=0;l={};n=q=null},destroy:function(){l=h=k=null;delete a[b]},info:function(){return E({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\\s*directive\\:\\s*([\\d\\w_\\-]+)\\s+(.*)$/,f=/(([\\d\\w_\\-]+)(?:\\:([^;]+))?;?)/,\ng=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){Ea(a,"directive");G(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);N(g)?g={compile:aa(g)}:!g.compile&&g.link&&(g.compile=aa(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(k){d(k)}});return e}])),c[a].push(e)):r(a,Yb(k));\nreturn this};this.aHrefSanitizationWhitelist=function(b){return D(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,q,p,s,J,w,t,y,K){function B(a,b,c,d,e){a instanceof\nA||(a=A(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);ba(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?Oa.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var k=g.length;d<k;d++){var p=g[d].nodeType;1!==p&&9!==p||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ba(a,b){try{a.addClass(b)}catch(c){}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,p,l,m,q,\nn,w;f=c.length;var s=Array(f);for(m=0;m<f;m++)s[m]=c[m];n=m=0;for(q=k.length;m<q;n++)p=s[n],c=k[m++],f=k[m++],c?(c.scope?(l=a.$new(),A.data(p,"$scope",l)):l=a,w=c.transcludeOnThisElement?M(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?M(a,b):null,c(f,l,p,d,w)):f&&f(a,p.childNodes,u,e)}for(var k=[],p,l,m,q,n=0;n<a.length;n++)p=new Ob,l=ca(a[n],[],p,0===n?d:u,e),(f=l.length?I(l,a[n],p,b,c,null,[],[],f):null)&&f.scope&&ba(p.$$element,"ng-scope"),p=f&&f.terminal||!(m=a[n].childNodes)||!m.length?\nnull:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),k.push(f,p),q=q||f||p,f=null;return q?g:null}function M(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function ca(a,b,c,d,g){var k=c.$attr,p;switch(a.nodeType){case 1:ea(b,qa(Pa(a).toLowerCase()),"E",d,g);for(var l,m,q,n=a.attributes,w=0,s=n&&n.length;w<s;w++){var t=!1,J=!1;l=n[w];if(!R||8<=R||l.specified){p=l.name;m=\n$(l.value);l=qa(p);if(q=U.test(l))p=nb(l.substr(6),"-");var y=l.replace(/(Start|End)$/,"");l===y+"Start"&&(t=p,J=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));l=qa(p.toLowerCase());k[l]=p;if(q||!c.hasOwnProperty(l))c[l]=m,oc(a,l)&&(c[l]=!0);S(a,b,m,l);ea(b,l,"A",d,g,t,J)}}a=a.className;if(G(a)&&""!==a)for(;p=f.exec(a);)l=qa(p[2]),ea(b,l,"C",d,g)&&(c[l]=$(p[3])),a=a.substr(p.index+p[0].length);break;case 3:x(b,a.nodeValue);break;case 8:try{if(p=e.exec(a.nodeValue))l=qa(p[1]),ea(b,l,"M",d,\ng)&&(c[l]=$(p[2]))}catch(B){}}b.sort(F);return b}function P(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function C(a,b,c){return function(d,e,f,g,k){e=P(e[0],b,c);return a(d,e,f,g,k)}}function I(a,c,d,e,f,g,k,q,n){function w(a,b,c,d){if(a){c&&(a=C(a,c,d));a.require=H.require;a.directiveName=z;if(K===H||H.$$isolateScope)a=rc(a,\n{isolateScope:!0});k.push(a)}if(b){c&&(b=C(b,c,d));b.require=H.require;b.directiveName=z;if(K===H||H.$$isolateScope)b=rc(b,{isolateScope:!0});q.push(b)}}function t(a,b,c,d){var e,f="data",g=!1;if(G(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else L(b)&&(e=[],r(b,function(b){e.push(t(a,b,c,d))}));return e}function J(a,e,f,g,n){function w(a,b){var c;2>arguments.length&&\n(b=a,a=u);Ia&&(c=ca);return n(a,b,c)}var y,Q,B,M,C,P,ca={},ra;y=c===f?d:ha(d,new Ob(A(f),d.$attr));Q=y.$$element;if(K){var ue=/^\\s*([@=&])(\\??)\\s*(\\w*)\\s*$/;P=e.$new(!0);!I||I!==K&&I!==K.$$originalDirective?Q.data("$isolateScopeNoTemplate",P):Q.data("$isolateScope",P);ba(Q,"ng-isolate-scope");r(K.scope,function(a,c){var d=a.match(ue)||[],f=d[3]||c,g="?"==d[2],d=d[1],k,l,n,q;P.$$isolateBindings[c]=d+f;switch(d){case "@":y.$observe(f,function(a){P[c]=a});y.$$observers[f].$$scope=e;y[f]&&(P[c]=b(y[f])(e));\nbreak;case "=":if(g&&!y[f])break;l=p(y[f]);q=l.literal?Ca:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){k=P[c]=l(e);throw ja("nonassign",y[f],K.name);};k=P[c]=l(e);P.$watch(function(){var a=l(e);q(a,P[c])||(q(a,k)?n(e,a=P[c]):P[c]=a);return k=a},null,l.literal);break;case "&":l=p(y[f]);P[c]=function(a){return l(e,a)};break;default:throw ja("iscp",K.name,c,a);}})}ra=n&&w;O&&r(O,function(a){var b={$scope:a===K||a.$$isolateScope?P:e,$element:Q,$attrs:y,$transclude:ra},c;C=a.controller;\n"@"==C&&(C=y[a.name]);c=s(C,b);ca[a.name]=c;Ia||Q.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(B=k.length;g<B;g++)try{M=k[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(H){l(H,ia(Q))}g=e;K&&(K.template||null===K.templateUrl)&&(g=P);a&&a(g,f.childNodes,u,n);for(g=q.length-1;0<=g;g--)try{M=q[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(D){l(D,ia(Q))}}n=n||{};for(var y=-Number.MAX_VALUE,\nM,O=n.controllerDirectives,K=n.newIsolateScopeDirective,I=n.templateDirective,ea=n.nonTlbTranscludeDirective,F=!1,E=!1,Ia=n.hasElementTranscludeDirective,x=d.$$element=A(c),H,z,V,S=e,R,Ha=0,sa=a.length;Ha<sa;Ha++){H=a[Ha];var U=H.$$start,Y=H.$$end;U&&(x=P(c,U,Y));V=u;if(y>H.priority)break;if(V=H.scope)M=M||H,H.templateUrl||(fb("new/isolated scope",K,H,x),T(V)&&(K=H));z=H.name;!H.templateUrl&&H.controller&&(V=H.controller,O=O||{},fb("\'"+z+"\' controller",O[z],H,x),O[z]=H);if(V=H.transclude)F=!0,H.$$tlb||\n(fb("transclusion",ea,H,x),ea=H),"element"==V?(Ia=!0,y=H.priority,V=x,x=d.$$element=A(X.createComment(" "+z+": "+d[z]+" ")),c=x[0],ra(f,wa.call(V,0),c),S=B(V,e,y,g&&g.name,{nonTlbTranscludeDirective:ea})):(V=A(Kb(c)).contents(),x.empty(),S=B(V,e));if(H.template)if(E=!0,fb("template",I,H,x),I=H,V=N(H.template)?H.template(x,d):H.template,V=W(V),H.replace){g=H;V=Ib.test(V)?A($(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",z,"");ra(f,x,c);sa={$attr:{}};V=ca(c,[],sa);var Z=a.splice(Ha+\n1,a.length-(Ha+1));K&&D(V);a=a.concat(V).concat(Z);v(d,sa);sa=a.length}else x.html(V);if(H.templateUrl)E=!0,fb("template",I,H,x),I=H,H.replace&&(g=H),J=te(a.splice(Ha,a.length-Ha),x,d,f,F&&S,k,q,{controllerDirectives:O,newIsolateScopeDirective:K,templateDirective:I,nonTlbTranscludeDirective:ea}),sa=a.length;else if(H.compile)try{R=H.compile(x,d,S),N(R)?w(null,R,U,Y):R&&w(R.pre,R.post,U,Y)}catch(ve){l(ve,ia(x))}H.terminal&&(J.terminal=!0,y=Math.max(y,H.priority))}J.scope=M&&!0===M.scope;J.transcludeOnThisElement=\nF;J.templateOnThisElement=E;J.transclude=S;n.hasElementTranscludeDirective=Ia;return J}function D(a){for(var b=0,c=a.length;b<c;b++)a[b]=$b(a[b],{$$isolateScope:!0})}function ea(b,e,f,g,p,m,n){if(e===p)return null;p=null;if(c.hasOwnProperty(e)){var q;e=a.get(e+d);for(var w=0,s=e.length;w<s;w++)try{q=e[w],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(m&&(q=$b(q,{$$start:m,$$end:n})),b.push(q),p=q)}catch(y){l(y)}}return p}function v(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=\ne.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ba(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function te(a,b,c,d,e,f,g,k){var p=[],l,m,w=b[0],s=a.shift(),y=E({},s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),J=N(s.templateUrl)?s.templateUrl(b,c):s.templateUrl;\nb.empty();n.get(t.getTrustedResourceUrl(J),{cache:q}).success(function(q){var n,t;q=W(q);if(s.replace){q=Ib.test(q)?A($(q)):[];n=q[0];if(1!=q.length||1!==n.nodeType)throw ja("tplrt",s.name,J);q={$attr:{}};ra(d,b,n);var B=ca(n,[],q);T(s.scope)&&D(B);a=B.concat(a);v(c,q)}else n=w,b.html(q);a.unshift(y);l=I(a,n,c,e,b,s,f,g,k);r(d,function(a,c){a==n&&(d[c]=b[0])});for(m=O(b[0].childNodes,e);p.length;){q=p.shift();t=p.shift();var K=p.shift(),C=p.shift(),B=b[0];if(t!==w){var P=t.className;k.hasElementTranscludeDirective&&\ns.replace||(B=Kb(n));ra(K,A(t),B);ba(A(B),P)}t=l.transcludeOnThisElement?M(q,l.transclude,C):C;l(m,q,B,d,t)}p=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;p?(p.push(b),p.push(c),p.push(d),p.push(a)):(l.transcludeOnThisElement&&(a=M(b,l.transclude,e)),l(m,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function fb(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function x(a,\nc){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ba(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ba(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function z(a,b){if("srcdoc"==b)return t.HTML;var c=Pa(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return t.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===\nPa(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(k[e],!0,z(a,e)))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function ra(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,k;if(a)for(g=0,k=a.length;g<k;g++)if(a[g]==d){a[g++]=c;k=g+e-1;for(var p=a.length;g<\np;g++,k++)k<p?a[g]=a[k]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[A.expando]=d[A.expando];d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function rc(a,b){return E(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:qa,$addClass:function(a){a&&0<a.length&&y.addClass(this.$$element,a)},$removeClass:function(a){a&&0<\na.length&&y.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sc(a,b),d=sc(b,a);0===c.length?y.removeClass(this.$$element,d):0===d.length?y.addClass(this.$$element,c):y.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=oc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=nb(a,"-"));e=Pa(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=K(b,"src"===a);!1!==c&&(null===b||b===u?this.$$element.removeAttr(d):\nthis.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);J.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var sa=b.startSymbol(),Ia=b.endSymbol(),W="{{"==sa||"}}"==Ia?ga:function(a){return a.replace(/\\{\\{/g,sa).replace(/}}/g,Ia)},U=/^ngAttr[A-Z]/;return B}]}function qa(b){return ab(b.replace(we,""))}function sc(b,a){var c="",d=b.split(/\\s+/),e=a.split(/\\s+/),\nf=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Od(){var b={},a=/^(\\S+)(\\s+as\\s+(\\w+))?$/;this.register=function(a,d){Ea(a,"controller");T(a)?E(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,k;G(e)&&(g=e.match(a),h=g[1],k=g[3],e=b.hasOwnProperty(h)?b[h]:fc(f.$scope,h,!0)||fc(d,h,!0),Ya(e,h,!0));g=c.instantiate(e,f);if(k){if(!f||"object"!==typeof f.$scope)throw z("$controller")("noscp",\nh||e.name,k);f.$scope[k]=g}return g}}]}function Pd(){this.$get=["$window",function(b){return A(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function tc(b){var a={},c,d,e;if(!b)return a;r(b.split("\\n"),function(b){e=b.indexOf(":");c=x($(b.substr(0,e)));d=$(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function uc(b){var a=T(b)?b:u;return function(c){a||(a=tc(b));return c?a[x(c)]||null:a}}function vc(b,a,c){if(N(c))return c(b,\na);r(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\\s*(\\[|\\{[^\\{])/,a=/[\\}\\]]\\s*$/,c=/^\\)\\]\\}\',?\\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){G(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ac(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==Ba.call(a)&&"[object Blob]"!==Ba.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",\nxsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function b(a){var d=E({},a,{data:vc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[x(a.method)]);\na:for(d in b){a=x(d);for(f in c)if(x(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){N(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=La(c.method);var f=[function(a){d=a.headers;var c=vc(a.data,uc(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===x(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},u],g=n.when(c);for(r(t,function(a){(a.request||a.requestError)&&\nf.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function m(a,b,c,e){C&&(200<=a&&300>a?C.put(A,[a,b,tc(c),e]):C.remove(A));q(b,a,c,e);d.$$phase||d.$apply()}function q(a,b,d,e){b=Math.max(b,0);(200<=\nb&&300>b?t.resolve:t.reject)({data:a,status:b,headers:uc(d),config:c,statusText:e})}function s(){var a=Ta(p.pendingRequests,c);-1!==a&&p.pendingRequests.splice(a,1)}var t=n.defer(),r=t.promise,C,I,A=J(c.url,c.params);p.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(C=T(c.cache)?c.cache:T(e.cache)?e.cache:w);if(C)if(I=C.get(A),D(I)){if(I&&N(I.then))return I.then(s,s),I;L(I)?q(I[1],I[0],ha(I[2]),I[3]):q(I,200,{},"OK")}else C.put(A,r);F(I)&&\n((I=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:u)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=I),a(c.method,A,f,m,g,c.timeout,c.withCredentials,c.responseType));return r}function J(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||F(a)||(L(a)||(a=[a]),r(a,function(a){T(a)&&(a=va(a)?a.toISOString():oa(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),t=[];r(f,function(a){t.unshift(G(a)?q.get(a):q.invoke(a))});r(g,\nfunction(a,b){var c=G(a)?q.get(a):q.invoke(a);t.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");p.defaults=e;return p}]}function xe(b){if(8>=R&&(!b.match(/^(get|post|head|put|delete|options)$/i)||\n!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw z("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){bb(f,"load",g);bb(f,"error",g);e.body.removeChild(f);f=null;var h=-1,s="unknown";a&&("load"!==\na.type||d[b].called||(a={type:"error"}),s=a.type,h="error"===a.type?404:200);c&&c(h,s)};sb(f,"load",g);sb(f,"error",g);8>=R&&(f.onreadystatechange=function(){G(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,k,m,l,n,q,p,s){function J(){t=g;K&&K();B&&B.abort()}function w(a,d,e,f,g){O&&c.cancel(O);K=B=null;0===d&&(d=e?200:"file"==xa(k).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(v)}\nvar t;b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==x(e)){var y="_"+(d.counter++).toString(36);d[y]=function(a){d[y].data=a;d[y].called=!0};var K=f(k.replace("JSON_CALLBACK","angular.callbacks."+y),y,function(a,b){w(l,a,d[y].data,"",b);d[y]=v})}else{var B=a(e);B.open(e,k,!0);r(n,function(a,b){D(a)&&B.setRequestHeader(b,a)});B.onreadystatechange=function(){if(B&&4==B.readyState){var a=null,b=null,c="";t!==g&&(a=B.getAllResponseHeaders(),b="response"in B?B.response:B.responseText);t===g&&\n10>R||(c=B.statusText);w(l,t||B.status,b,a,c)}};p&&(B.withCredentials=!0);if(s)try{B.responseType=s}catch(ba){if("json"!==s)throw ba;}B.send(m||null)}if(0<q)var O=c(J,q);else q&&N(q.then)&&q.then(J)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,m,l){for(var n,q,p=0,s=[],J=f.length,w=!1,t=[];p<J;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,\nn+g))?(p!=n&&s.push(f.substring(p,n)),s.push(p=c(w=f.substring(n+g,q))),p.exp=w,p=q+h,w=!0):(p!=J&&s.push(f.substring(p)),p=J);(J=s.length)||(s.push(""),J=1);if(l&&1<s.length)throw wc("noconcat",f);if(!m||w)return t.length=J,p=function(a){try{for(var b=0,c=J,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=oa(g)}t[b]=g}return t.join("")}catch(h){a=wc("interr",f,h.toString()),\nd(a)}},p.exp=f,p.parts=s,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,k){var m=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,s=D(k)&&!k;h=D(h)?h:0;q.then(null,null,d);q.$$intervalId=m(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);s||b.$apply()},g);e[q.$$intervalId]=n;return q}var e={};d.cancel=\nfunction(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\\u00a4",posSuf:"",negPre:"(\\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),\nSHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=\nmb(b[a]);return b.join("/")}function xc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=cc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ta(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=\nb.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);xc(b,this,b);this.$$parse=function(a){var e=ta(c,a);if(!G(e))throw Sb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,\ne){var f,g;(f=ta(b,d))!==u?(g=f,g=(f=ta(a,f))!==u?c+(ta("/",f)||f):b+g):(f=ta(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Tb(b,a){var c=Rb(b);xc(b,this,b);this.$$parse=function(d){var e=ta(b,d)||ta(c,d),e="#"==e.charAt(0)?ta(a,e):this.$$html5?e:"";if(!G(e))throw Sb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var f=/^\\/[A-Z]:(\\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),\ne=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function Ac(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$parseLinkUrl=function(d,e){var f,g;b==Ga(d)?f=d:(g=ta(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+\n(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return D(a)?(b=a,this):b};this.html5Mode=function(b){return D(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,k=d.baseHref(),m=d.url();\na?(k=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(k||"/"),e=e.history?zc:Ac):(k=Ga(m),e=Tb);h=new e(k,"#"+b);h.$$parseLinkUrl(m,m);var l=/^\\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=A(a.target);"a"!==x(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");T(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=xa(e.animVal).href);l.test(e)||(!e||(b.attr("target")||a.isDefaultPrevented())||\n!h.$$parseLinkUrl(e,g))||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url(),b=h.$$replace;n&&a==h.absUrl()||(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",\nh.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return n});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return D(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(k){}return a?\nfunction(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ma(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&\nb.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){ma(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),d);var h=ma(b[f],d);h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(ya(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===u&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);ma(b[f],d);return b[f]=c}function Qa(b){return"constructor"==\nb}function Cc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);var h=function(a){return ma(a,f)},k=g.expensiveChecks,m=k||Qa(b)?h:ga,l=k||Qa(a)?h:ga,n=k||Qa(c)?h:ga,q=k||Qa(d)?h:ga,p=k||Qa(e)?h:ga;return g.unwrapPromises?function(g,h){var k=h&&h.hasOwnProperty(b)?h:g,t;if(null==k)return k;(k=m(k[b]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=m(a)})),k=m(k.$$v));if(!a)return k;if(null==k)return u;(k=l(k[a]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=\nl(a)})),k=l(k.$$v));if(!c)return k;if(null==k)return u;(k=n(k[c]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=n(a)})),k=n(k.$$v));if(!d)return k;if(null==k)return u;(k=q(k[d]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=q(a)})),k=q(k.$$v));if(!e)return k;if(null==k)return u;(k=p(k[e]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=p(a)})),k=p(k.$$v));return k}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=m(h[b]);\nif(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=n(h[c]);if(!d)return h;if(null==h)return u;h=q(h[d]);return e?null==h?u:h=p(h[e]):h}}function Ae(b,a){return function(c,d){return b(c,d,ya,ma,a)}}function Dc(b,a,c){var d=a.expensiveChecks,e=d?Be:Ce;if(e.hasOwnProperty(b))return e[b];var f=b.split("."),g=f.length,h;if(a.csp)h=6>g?Cc(f[0],f[1],f[2],f[3],f[4],c,a):function(b,d){var e=0,h;do h=Cc(f[e++],f[e++],f[e++],f[e++],f[e++],c,a)(b,d),d=u,b=h;while(e<g);return h};\nelse{var k="var p;\\n";d&&(k+="s = eso(s, fe);\\nl = eso(l, fe);\\n");var m=d;r(f,function(b,e){ka(b,c);var f=(e?"s":\'((l&&l.hasOwnProperty("\'+b+\'"))?l:s)\')+\'["\'+b+\'"]\',g=d||Qa(b);g&&(f="eso("+f+", fe)",m=!0);k+="if(s == null) return undefined;\\ns="+f+";\\n";a.unwrapPromises&&(k+=\'if (s && s.then) {\\n pw("\'+c.replace(/(["\\r\\n])/g,"\\\\$1")+\'");\\n if (!("$$v" in s)) {\\n p=s;\\n p.$$v = undefined;\\n p.then(function(v) {p.$$v=\'+(g?"eso(v)":"v")+";});\\n}\\n s="+(g?"eso(s.$$v)":"s.$$v")+"\\n}\\n")});k+="return s;";\nh=new Function("s","l","pw","eso","fe",k);h.toString=aa(k);if(m||a.unwrapPromises)h=Ae(h,c)}"hasOwnProperty"!==b&&(e[b]=h);return h}function Xd(){var b={},a={},c={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0,expensiveChecks:!1};this.unwrapPromises=function(a){return D(a)?(c.unwrapPromises=!!a,this):c.unwrapPromises};this.logPromiseWarnings=function(a){return D(a)?(c.logPromiseWarnings=a,this):c.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(d,e,f){c.csp=e.csp;var g={csp:c.csp,\nunwrapPromises:c.unwrapPromises,logPromiseWarnings:c.logPromiseWarnings,expensiveChecks:!0};ya=function(a){c.logPromiseWarnings&&!Ec.hasOwnProperty(a)&&(Ec[a]=!0,f.warn("[$parse] Promise found in the expression `"+a+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(e,f){var m;switch(typeof e){case "string":var l=f?a:b;if(l.hasOwnProperty(e))return l[e];m=f?g:c;var n=new Ub(m);m=(new gb(n,d,m)).parse(e);"hasOwnProperty"!==e&&(l[e]=m);return m;case "function":return e;\ndefault:return v}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return De(function(a){b.$evalAsync(a)},a)}]}function De(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],m,l;return l={resolve:function(a){if(g){var c=g;g=u;m=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=\nc[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),J=function(d){try{l.resolve((N(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},w=function(b){try{l.resolve((N(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},t=function(b){try{l.notify((N(h)?h:c)(b))}catch(d){a(d)}};g?g.push([J,w,t]):m.then(J,w,t);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,\n!1)}return g&&N(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&N(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((N(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,\nwhen:function(h,m,l,n){var q=e(),p,s=function(b){try{return(N(m)?m:c)(b)}catch(d){return a(d),g(d)}},J=function(b){try{return(N(l)?l:d)(b)}catch(c){return a(c),g(c)}},w=function(b){try{return(N(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){p||(p=!0,q.resolve(f(a).then(s,J,w)))},function(a){p||(p=!0,q.resolve(J(a)))},function(a){p||q.notify(w(a))})});return q.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,\n--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=\ne;return f}]}function Yd(){var b=10,a=z("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=ib();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=\n{}}function k(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function m(a,b){var c=f(a);Ya(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=\nthis.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=ib();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=m(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!N(b)){var h=m(b||v,"listener");g.fn=function(a,\nb,c){h(c)}}if("string"==typeof a&&e.constant){var k=g.fn;g.fn=function(a,b,c){k.call(this,a,b,c);Ua(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ua(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,l=f(a),m=[],n={},q=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Sa(d))for(e!==m&&(e=m,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,\nk++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b])):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=!1,b(d,d,c)):b(d,g,c);if(h)if(T(d))if(Sa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)lb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,h,l,m=this.$$asyncQueue,r=this.$$postDigestQueue,\nK,B,u=b,O,M=[],A,P,C;k("$digest");g.$$checkUrlChange();c=null;do{B=!1;for(O=this;m.length;){try{C=m.shift(),C.scope.$eval(C.expression)}catch(I){q.$$phase=null,e(I)}c=null}a:do{if(l=O.$$watchers)for(K=l.length;K--;)try{if(d=l[K])if((f=d.get(O))!==(h=d.last)&&!(d.eq?Ca(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))B=!0,c=d,d.last=d.eq?Ka(f,null):f,d.fn(f,h===n?f:h,O),5>u&&(A=4-u,M[A]||(M[A]=[]),P=N(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,P+="; newVal: "+oa(f)+"; oldVal: "+\noa(h),M[A].push(P));else if(d===c){B=!1;break a}}catch(D){q.$$phase=null,e(D)}if(!(l=O.$$childHead||O!==this&&O.$$nextSibling))for(;O!==this&&!(l=O.$$nextSibling);)O=O.$parent}while(O=l);if((B||m.length)&&!u--)throw q.$$phase=null,a("infdig",b,oa(M));}while(B||m.length);for(q.$$phase=null;r.length;)try{r.shift()()}catch(x){e(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,Bb(null,l,this)),a.$$childHead==\nthis&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=v,this.$on=this.$watch=function(){return v})}},\n$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||g.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||\n(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=Ta(c,b);-1!==d&&(c[d]=null,l(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(wa.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;\nf=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(wa.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new h;\nreturn q}]}function bd(){var b=/^\\s*(https?|ftp|mailto|tel|file):/,a=/^\\s*((https?|ftp|file):|data:image\\/)/;this.aHrefSanitizationWhitelist=function(a){return D(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!R||8<=R)if(f=xa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ee(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw za("iwcard",b);b=b.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,\n"\\\\$1").replace(/\\x08/g,"\\\\x08").replace("\\\\*\\\\*",".*").replace("\\\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(kb(b))return RegExp("^"+b.source+"$");throw za("imatcher");}function Fc(b){var a=[];D(b)&&r(b,function(b){a.push(Ee(b))});return a}function ae(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Fc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Fc(b));return a};this.$get=["$injector",function(c){function d(a){var b=\nfunction(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw za("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw za("icontext",\na,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===u||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=xa(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw za("insecurl",\nd.toString());}if(c===fa.HTML)return e(d);throw za("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw za("iequirks");var e=ha(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},\ne.valueOf=ga);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(fa,function(a,b){var c=x(b);e[ab("parse_as_"+c)]=function(b){return f(a,b)};e[ab("get_trusted_"+c)]=function(b){return g(a,b)};e[ab("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||\n{}).userAgent),f=a[0]||{},g=f.documentMode,h,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,m=f.body&&f.body.style,l=!1,n=!1;if(m){for(var q in m)if(l=k.exec(q)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in m&&"webkit");l=!!("transition"in m||h+"Transition"in m);n=!!("animation"in m||h+"Animation"in m);!d||l&&n||(l=G(f.body.style.webkitTransition),n=G(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<\ng),hasEvent:function(a){if("input"==a&&9==R)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Za(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:R,msieDocumentMode:g}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,k){var m=c.defer(),l=m.promise,n=D(k)&&!k;h=a.defer(function(){try{m.resolve(e())}catch(a){m.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=m;\nreturn l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;R&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:\n"/"+Y.pathname}}function Pb(b){b=G(b)?xa(b):b;return b.protocol===Gc.protocol&&b.host===Gc.host}function ee(){this.$get=aa(W)}function kc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Hc);a("date",Ic);a("filter",Fe);a("json",Ge);a("limitTo",He);a("lowercase",Ie);a("number",Jc);a("orderBy",Kc);a("uppercase",Je)}function Fe(){return function(b,\na,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Xa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&lb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,\nb);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=\nb[g];e.check(h)&&d.push(h)}return d}}function Hc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return Lc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\\u00A4/g,d)}}function Jc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Lc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Lc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],m=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\\d\\.]+)e(-?)(\\d+)/);l&&"-"==l[2]&&\nl[3]>e+1?(g="0",b=0):(h=g,m=!0)}if(m)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Mc)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Mc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(g.length>=n+q)for(l=g.length-n,m=0;m<l;m++)0===(l-m)%q&&0!==m&&(h+=c),h+=g.charAt(m);for(m=l;m<g.length;m++)0===(g.length-m)%n&&0!==m&&(h+=c),h+=g.charAt(m);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,\ne))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function Vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Vb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=La(a?"SHORT"+b:b);return d[f][e]}}function Ic(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?\na.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));h.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;h=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\\d{4})-?(\\d\\d)-?(\\d\\d)(?:T(\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:\\.(\\d+))?)?)?(Z|([+-])(\\d\\d):?(\\d\\d))?)?$/;return function(c,e){var f="",g=[],h,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=Ke.test(c)?U(c):a(c));jb(c)&&(c=new Date(c));\nif(!va(c))return c;for(;e;)(k=Le.exec(e))?(g=g.concat(wa.call(k,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Me[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^\'|\'$)/g,"").replace(/\'\'/g,"\'")});return f}}function Ge(){return function(b){return oa(b,!0)}}function He(){return function(b,a){if(!L(b)&&!G(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(G(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=\nb.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Kc(b){return function(a,c,d){function e(a,b){return Wa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(va(a)&&va(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=L(c)?c:[c];0===c.length&&(c=["+"]);c=Uc(c,function(a){var c=!1,d=a||ga;if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);\nif(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var m=d();return e(function(a,b){return f(a[m],b[m])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return wa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Aa(b){N(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Nc(b,a,c,d){function e(a,c){c=c?"-"+nb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||\nyb,h=0,k=f.$error={},m=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ra);e(!0);f.$addControl=function(a){Ea(a.$name,"input");m.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(k,function(b,c){f.$setValidity(c,!0,a)});Ua(m,a)};f.$setValidity=function(a,b,c){var d=k[a];if(b)d&&(Ua(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),k[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||\ne(b);if(d){if(-1!=Ta(d,c))return}else k[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Ra);f.$dirty=!1;f.$pristine=!0;r(m,function(a){a.$setPristine()})}}function ua(b,a,c,d){b.$setValidity(a,c);return c?d:u}function Oc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ne(b,\na,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||Oc(e,d)||!Oc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Oe),h=a[0].placeholder,k={},m=x(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(R&&"input"===(e||k).type&&a[0].placeholder!==h)h=a[0].placeholder;else if("password"!==m&&Wa(c.ngTrim||"T")&&\n(f=$(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var q,p=function(){q||(q=f.defer(function(){n();q=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\\/(.*)\\/([gim]*)$/))?\n(s=RegExp(e[1],e[2]),e=function(a){return ua(d,"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw z("ngPattern")("noregexp",s,e,ia(a));return ua(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return ua(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var w=U(c.ngMaxlength);e=function(a){return ua(d,"maxlength",d.$isEmpty(a)||\na.length<=w,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Wb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(G(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<\nb||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(b){if(!0===a||f.$index%2===a){var m=e(b||[]);if(!l){var p=k(m,1);h.$addClass(p)}else if(!Ca(b,l)){var s=e(l),p=d(m,s),m=d(s,m),m=k(m,-1),p=k(p,1);0===p.length?c.removeClass(g,m):0===m.length?c.addClass(g,p):c.setClass(g,p,m)}}l=ha(b)}var l;f.$watch(h[b],m,!0);h.$observe("class",function(a){m(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));\ng===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Oe="validity",x=function(b){return G(b)?b.toLowerCase():b},lb=Object.prototype.hasOwnProperty,La=function(b){return G(b)?b.toUpperCase():b},R,A,Fa,wa=[].slice,Pe=[].push,Ba=Object.prototype.toString,Va=z("ng"),Xa=W.angular||(W.angular={}),$a,Pa,na=["0","0","0"];R=U((/msie (\\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(R)&&(R=U((/trident\\/.*; rv:(\\d+)/.exec(x(navigator.userAgent))||[])[1]));v.$inject=[];ga.$inject=[];var L=\nfunction(){return N(Array.isArray)?Array.isArray:function(b){return"[object Array]"===Ba.call(b)}}(),$=function(){return String.prototype.trim?function(b){return G(b)?b.trim():b}:function(b){return G(b)?b.replace(/^\\s\\s*/,"").replace(/\\s\\s*$/,""):b}}();Pa=9>R?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?La(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Za=function(){if(D(Za.isActive_))return Za.isActive_;var b=!(!X.querySelector("[ng-csp]")&&\n!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Za.isActive_=b},Xc=/[A-Z]/g,$c={full:"1.2.28",major:1,minor:2,dot:28,codeName:"finnish-disembarkation"};S.expando="ng339";var cb=S.cache={},me=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},bb=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||\n{}};var he=/([\\:\\-\\_]+(.))/g,ie=/^moz([A-Z])/,Hb=z("jqLite"),je=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,Ib=/<|&#?\\w+;/,ke=/<([\\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi,da={option:[1,\'<select multiple="multiple">\',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=\nda.caption=da.thead;da.th=da.td;var Oa=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?A(this[b]):A(this[this.length+b])},length:0,push:Pe,sort:[].sort,splice:[].splice},rb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){rb[x(b)]=b});\nvar pc={};r("input select option textarea button form details".split(" "),function(b){pc[La(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:qb,scope:function(b){return A.data(b,"$scope")||qb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:mc,injector:function(b){return qb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,\na,c){a=ab(a);if(D(c))b.style[a]=c;else{var d;8>=R&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=R&&(d=""===d?u:d);return d}},attr:function(b,a,c){var d=x(a);if(rb[d])if(D(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:u;else if(D(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(D(c))b[a]=c;else return b[a]},text:function(){function b(b,\nd){var e=a[b.nodeType];if(F(d))return e?b[e]:"";b[e]=d}var a=[];9>R?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(F(a)){if("SELECT"===Pa(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ma(d[c]);b.innerHTML=a},empty:nc},function(b,a){S.prototype[a]=function(a,d){var e,\nf,g=this.length;if(b!==nc&&(2==b.length&&b!==Nb&&b!==mc?a:d)===u){if(T(a)){for(e=0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ma,on:function a(c,d,e,f){if(D(f))throw Hb("onargs");var g=pa(c,"events"),h=pa(c,"handle");g||pa(c,"events",g={});h||pa(c,"handle",h=ne(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==\nd||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else sb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},\noff:lc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ma(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,\nc){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ma(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:pb,removeClass:ob,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;F(f)&&(f=!Nb(a,c));(f?pb:ob)(a,c)})},parent:function(a){return(a=\na.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(pa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:v,type:e,target:a},\nc.type&&(e=E(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)F(g)?(g=a(this[h],c,e,f),D(g)&&(g=A(g))):Jb(g,a(this[h],c,e,f));return D(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var pe=\n/^function\\s*[^\\(]*\\(\\s*([^\\)]*)\\)/m,qe=/,/,re=/^\\s*(_?)(\\S+?)\\1\\s*$/,oe=/((\\/\\/.*$)|(\\/\\*[\\s\\S]*?\\*\\/))/mg,eb=z("$injector"),Qe=z("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qe("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",\nfunction(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){pb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},setClass:function(a,c,g,h){r(a,function(a){pb(a,c);ob(a,g)});h&&d(h)},enabled:v}}]}],ja=z("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];\nvar we=/^(x[\\:\\-_]|data[\\:\\-_])/i,wc=z("$interpolate"),Re=/^([^\\?#]*)(\\?([^#]*))?(#(.*))?$/,ze={http:80,https:443,ftp:21},Sb=z("$location");Ac.prototype=Tb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(F(a))return this.$$url;a=Re.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Bc("$$path",function(a){a=null!==a?a.toString():\n"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||jb(a))a=a.toString(),this.$$search=cc(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=z("$parse"),Ec=\n{},ya,Se=Function.prototype.call,Te=Function.prototype.apply,Pc=Function.prototype.bind,hb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:v,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return D(d)?D(e)?d+e:d:D(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(D(d)?d:0)-(D(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^\ne(a,c)},"=":v,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,\nc)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ue={n:"\\n",f:"\\f",r:"\\r",t:"\\t",v:"\\v","\'":"\'",\'"\':\'"\'},Ub=function(a){this.options=a};Ub.prototype={constructor:Ub,lex:function(a){this.text=a;this.index=0;this.ch=u;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\\"\'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();\nelse if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=hb[this.ch],e=hb[a],f=hb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+\n1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\\r"===a||"\\t"===a||"\\n"===a||"\\v"===a||"\\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},\nthrowError:function(a,c,d){d=d||this.index;c=D(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-\n1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;\nelse break}d={index:d,text:c};if(hb.hasOwnProperty(c))d.fn=hb[c],d.literal=!0,d.constant=!0;else{var k=Dc(c,this.options,this.text);d.fn=E(function(a,c){return k(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+\n1,this.index+5),f.match(/[\\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ue[g]||g,f=!1;else if("\\\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var gb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};gb.ZERO=E(function(){return 0},{constant:!0});gb.prototype={constructor:gb,\nparse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=\n!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===\na||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,\nf,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());\nelse{var e=function(a,e,h){h=[h];for(var k=0;k<d.length;k++)h.push(d[k](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();\nif(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},\nrelational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(gb.ZERO,a.fn,\nthis.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return E(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return ub(h,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),h=d(e,f),k;ka(h,c.text);if(!g)return u;(g=ma(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&\n(k=g,"$$v"in g||(k.$$v=u,k.then(function(a){k.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var h=ka(d(e,g),c.text);(g=ma(a(e,g),c.text))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],k=c?c(f,g):f,m=0;m<d.length;m++)h.push(ma(d[m](f,g),e.text));m=a(f,g,k)||v;ma(k,e.text);var l=e.text;if(m){if(m.constructor===m)throw la("isecfn",\nl);if(m===Se||m===Te||Pc&&m===Pc)throw la("isecff",l);}h=m.apply?m.apply(k,h):m(h[0],h[1],h[2],h[3],h[4]);return ma(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;\nvar d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},k=0;k<a.length;k++){var m=a[k];e[m.key]=m.value(c,d)}return e},{literal:!0,constant:c})}};var Ce={},Be={},za=z("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Gc=xa(W.location.href,!0);kc.$inject=["$provide"];Hc.$inject=["$locale"];Jc.$inject=["$locale"];\nvar Mc=".",Me={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Vb(Math[0<\na?"floor":"ceil"](a/60),2)+Vb(Math.abs(a%60),2))}},Le=/((?:[^yMdHhmsaZE\']+)|(?:\'(?:[^\']|\'\')*\')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ke=/^\\-?\\d+$/;Ic.$inject=["$locale"];var Ie=aa(x),Je=aa(La);Kc.$inject=["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=R&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ba.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||\na.preventDefault()})}}}),Fb={};r(rb,function(a,c){if("multiple"!=a){var d=qa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=qa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ba.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),R&&g&&e.prop(g,f[h])):"href"===\na&&f.$set(h,null)})}}}});var yb={$addControl:v,$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v};Nc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Nc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",h);e.on("$destroy",function(){c(function(){bb(e[0],"submit",h)},0,!1)})}var k=e.parent().controller("form"),\nm=f.name||f.ngForm;m&&ub(a,m,g,m);if(k)e.on("$destroy",function(){k.$removeControl(g);m&&ub(a,m,u,m);E(g,yb)})}}}}}]},dd=Qc(),qd=Qc(!0),Ve=/^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$/,We=/^[a-z0-9!#$%&\'*+\\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Xe=/^\\s*(\\-|\\+)?(\\d+|(\\d*(\\.\\d*)))\\s*$/,Rc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Xe.test(a))return e.$setValidity("number",\n!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return u});Ne(e,"number",Ye,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ua(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ua(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ua(e,"number",e.$isEmpty(a)||\njb(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"url",e.$isEmpty(a)||Ve.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"email",e.$isEmpty(a)||We.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){F(d.name)&&c.attr("name",ib());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};\nd.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;G(f)||(f=!0);G(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:v,button:v,submit:v,reset:v,file:v},Ye=["badInput"],hc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",\nlink:function(d,e,f,g){g&&(Rc[x(f.type)]||Rc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Ra="ng-pristine",zb="ng-dirty",Ze=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+nb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=\nd.name;var k=f(d.ngModel),m=k.assign;if(!m)throw z("ngModel")("nonassign",d.ngModel,ia(e));this.$render=v;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,q=this.$error={};e.addClass(Ra);h(!0);this.$setValidity=function(a,c){q[a]!==!c&&(c?(q[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=\n!0;g.removeClass(e,zb);g.addClass(e,Ra)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Ra),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=k(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=\nc,p.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Ze,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ic=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",\n!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\\/(.*)\\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push($(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):u});e.$isEmpty=function(a){return!a||!a.length}}}},$e=/^(true|false|\\d+)$/,Id=function(){return{priority:100,\ncompile:function(a,c){return $e.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},id=Aa({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==u?"":a)})}}}),kd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],\njd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var h=c(g.ngBindHtml);d.$watch(function(){return(h(d)||"").toString()},function(c){f.html(a.getTrustedHtml(h(d))||"")})}}}}],ld=Wb("",!0),nd=Wb("Odd",0),md=Wb("Even",1),od=Aa({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),pd=[function(){return{scope:!0,controller:"@",priority:500}}],jc={},af={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),\nfunction(a){var c=qa("ng-"+a);jc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var h=d(g[c],!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};af[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,m;c.$watch(e.ngIf,function(f){Wa(f)?k||(k=c.$new(),g(k,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+\n" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.remove(),m=null),k&&(k.$destroy(),k=null),h&&(m=Eb(h.clone),a.leave(m,function(){m=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Xa.noop,compile:function(g,h){var k=h.ngInclude||h.src,m=h.onload||"",l=h.autoscroll;return function(g,h,p,r,J){var w=0,t,y,u,B=function(){y&&(y.remove(),y=null);t&&(t.$destroy(),t=null);\nu&&(e.leave(u,function(){y=null}),y=u,u=null)};g.$watch(f.parseAsResourceUrl(k),function(f){var k=function(){!D(l)||l&&!g.$eval(l)||d()},p=++w;f?(a.get(f,{cache:c}).success(function(a){if(p===w){var c=g.$new();r.template=a;a=J(c,function(a){B();e.enter(a,null,h,k)});t=c;u=a;t.$emit("$includeContentLoaded");g.$eval(m)}}).error(function(){p===w&&B()}),g.$emit("$includeContentRequested")):(B(),r.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",\nlink:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],ud=Aa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=Aa({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),m=g.offset||0,l=e.$eval(k)||{},n={},q=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[x(c.replace("when","").replace("Minus","-"))]=\nf.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+h+"-"+m+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-m));return n[c](e,f,!0)},function(a){f.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=z("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,k){var m=g.ngRepeat,l=m.match(/^\\s*([\\s\\S]+?)\\s+in\\s+([\\s\\S]+?)(?:\\s+track\\s+by\\s+([\\s\\S]+?))?\\s*$/),n,q,p,s,u,w,t={$id:Na};if(!l)throw d("iexp",\nm);g=l[1];h=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){w&&(t[w]=a);t[u]=c;t.$index=d;return n(e,t)}):(p=function(a,c){return Na(c)},s=function(a){return a});l=g.match(/^(?:([\\$\\w]+)|\\(([\\$\\w]+)\\s*,\\s*([\\$\\w]+)\\))$/);if(!l)throw d("iidexp",g);u=l[3]||l[1];w=l[2];var y={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,t={},D,C,I,x,G,v,z,F=[];if(Sa(a))v=a,G=q||p;else{G=q||s;v=[];for(I in a)a.hasOwnProperty(I)&&"$"!=I.charAt(0)&&v.push(I);v.sort()}D=v.length;h=F.length=v.length;for(g=0;g<h;g++)if(I=a===\nv?g:v[g],x=a[I],n=G(I,x,g),Ea(n,"`track by` id"),y.hasOwnProperty(n))z=y[n],delete y[n],t[n]=z,F[g]=z;else{if(t.hasOwnProperty(n))throw r(F,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",m,n,oa(x));F[g]={id:n};t[n]=!1}for(I in y)y.hasOwnProperty(I)&&(z=y[I],g=Eb(z.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),z.scope.$destroy());g=0;for(h=v.length;g<h;g++){I=a===v?g:v[g];x=a[I];z=F[g];F[g-1]&&(l=F[g-1].clone[F[g-1].clone.length-1]);if(z.scope){C=z.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);\nz.clone[0]!=n&&c.move(Eb(z.clone),null,A(l));l=z.clone[z.clone.length-1]}else C=e.$new();C[u]=x;w&&(C[w]=I);C.$index=g;C.$first=0===g;C.$last=g===D-1;C.$middle=!(C.$first||C.$last);C.$odd=!(C.$even=0===(g&1));z.scope||k(C,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+m+" ");c.enter(a,null,A(l));l=a;z.scope=C;z.clone=a;t[z.id]=z})}y=t})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Wa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",\nfunction(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Wa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=Aa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],m=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q;n=0;for(q=k.length;n<q;++n)k[n].remove();n=k.length=0;for(q=\nm.length;n<q;++n){var p=h[n];m[n].$destroy();k[n]=p;a.leave(p,function(){k.splice(n,1)})}h.length=0;m.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=Aa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Cd=\nAa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ed=Aa({link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],bf=z("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=\n/^\\s*([\\s\\S]+?)(?:\\s+as\\s+([\\s\\S]+?))?(?:\\s+group\\s+by\\s+([\\s\\S]+?))?\\s+for\\s+(?:([\\$\\w][\\$\\w]*)|(?:\\(\\s*([\\$\\w][\\$\\w]*)\\s*,\\s*([\\$\\w][\\$\\w]*)\\s*\\)))\\s+in\\s+([\\s\\S]+?)(?:\\s+track\\s+by\\s+([\\s\\S]+?))?$/,e={$setViewValue:v};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,m={},l=e,n;k.databound=d.ngModel;k.init=function(a,c,d){l=a;n=d};k.addOption=function(c){Ea(c,\'"option value"\');m[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};\nk.removeOption=function(a){this.hasOption(a)&&(delete m[a],l.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Na(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};k.hasOption=function(a){return m.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=v})}],link:function(e,g,h,k){function m(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),""===a&&w.prop("selected",!0)):F(a)&&w?c.val(""):e.renderUnknownOption(a)};\nc.on("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new db(d.$viewValue);r(c.find("option"),function(c){c.selected=D(a.get(c.value))})};a.$watch(function(){Ca(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,\ns,u,v;s=g.$modelValue;u=A(e)||[];var F=n?Xb(u):u,G,Q,C;Q={};C=!1;if(p)if(k=g.$modelValue,w&&L(k))for(C=new db([]),d={},v=0;v<k.length;v++)d[m]=k[v],C.put(w(e,d),k[v]);else C=new db(k);v=C;var E,K;for(C=0;G=F.length,C<G;C++){k=C;if(n){k=F[C];if("$"===k.charAt(0))continue;Q[n]=k}Q[m]=u[k];d=r(e,Q)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=D(v.remove(w?w(e,Q):x(e,Q))):(w?(d={},d[m]=s,d=w(e,d)===w(e,Q)):d=s===x(e,Q),v=v||d);E=l(e,Q);E=D(E)?E:"";k.push({id:w?w(e,Q):n?F[C]:C,label:E,selected:d})}p||(z||null===\ns?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));Q=0;for(F=c.length;Q<F;Q++){d=c[Q];k=a[d];B.length<=Q?(s={element:y.clone().attr("label",d),label:k.label},u=[s],B.push(u),f.append(s.element)):(u=B[Q],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));E=null;C=0;for(G=k.length;C<G;C++)d=k[C],(v=u[C+1])?(E=v.element,v.label!==d.label&&(E.text(v.label=d.label),E.prop("label",v.label)),v.id!==d.id&&E.val(v.id=d.id),E[0].selected!==d.selected&&(E.prop("selected",\nv.selected=d.selected),R&&E.prop("selected",v.selected))):(""===d.id&&z?K=z:(K=t.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),u.push({element:K,label:d.label,id:d.id,selected:d.selected}),q.addOption(d.label,K),E?E.after(K):s.element.append(K),E=K);for(C++;u.length>C;)d=u.pop(),q.removeOption(d.label),d.element.remove()}for(;B.length>Q;)B.pop()[0].element.remove()}var k;if(!(k=s.match(d)))throw bf("iexp",s,ia(f));var l=c(k[2]||k[1]),\nm=k[4]||k[6],n=k[5],r=c(k[3]||""),x=c(k[2]?k[1]:m),A=c(k[7]),w=k[8]?c(k[8]):null,B=[[{element:f,label:""}]];z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},k,l,q,r,s,t,v;if(p)for(l=[],r=0,t=B.length;r<t;r++)for(a=B[r],q=1,s=a.length;q<s;q++){if((k=a[q].element)[0].selected){k=k.val();n&&(d[n]=k);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=k);v++);else d[m]=c[k];l.push(x(e,d))}}else if(k=f.val(),"?"==k)l=u;else if(""===\nk)l=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==k){l=x(e,d);break}}else d[m]=c[k],n&&(d[n]=k),l=x(e,d);g.$setViewValue(l);h()})});g.$render=h;e.$watchCollection(A,h);e.$watchCollection(function(){var a={},c=A(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},h);p&&e.$watchCollection(function(){return g.$modelValue},h)}if(k[1]){var q=k[0];k=k[1];var p=h.multiple,s=h.ngOptions,z=!1,w,t=A(X.createElement("option")),y=A(X.createElement("optgroup")),\nx=t.clone();h=0;for(var B=g.children(),v=B.length;h<v;h++)if(""===B[h].value){w=z=B.eq(h);break}q.init(k,z,x);p&&(k.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,k):p?l(e,g,k):m(e,g,k,q)}}}}],hd=["$interpolate",function(a){var c={addOption:v,removeOption:v};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var m=d.parent(),l=m.data("$selectController")||m.parent().data("$selectController");l&&l.databound?\nd.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],gd=aa({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Fa=W.jQuery)&&Fa.fn.on?(A=Fa,E(Fa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",\n!1,!1,!1),Gb("html",!1,!1,!0)):A=S,Xa.element=A,Zc(Xa),A(X).ready(function(){Wc(X,dc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend(\'<style type="text/css">@charset "UTF-8";[ng\\\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>\');\n//\n';
},
function(e, t, n) {
    n(13)(n(16))
},
function(e, t) {
    e.exports = '/*\n AngularJS v1.2.0\n (c) 2010-2012 Google, Inc. http://angularjs.org\n License: MIT\n*/\n(function(t,c,B){\'use strict\';function w(s,r,g,a,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(k,d,A){return function(u,k,d){function v(){l&&(l.$destroy(),l=null);m&&(h.leave(m),m=null)}function x(){var f=s.current&&s.current.locals,y=f&&f.$template;if(y){var z=u.$new();A(z,function(e){e.html(y);h.enter(e,null,m||k,function(){!c.isDefined(n)||n&&!u.$eval(n)||r()});v();var p=g(e.contents()),q=s.current;l=q.scope=z;m=e;if(q.controller){f.$scope=l;var d=a(q.controller,\nf);q.controllerAs&&(l[q.controllerAs]=d);e.data("$ngControllerController",d);e.children().data("$ngControllerController",d)}p(l);l.$emit("$viewContentLoaded");l.$eval(b)})}else v()}var l,m,n=d.autoscroll,b=d.onload||"";u.$on("$routeChangeSuccess",x);x()}}}}t=c.module("ngRoute",["ng"]).provider("$route",function(){function s(a,h){return c.extend(new (c.extend(function(){},{prototype:a})),h)}function r(a,c){var k=c.caseInsensitiveMatch,d={originalPath:a,regexp:a},g=d.keys=[];a=a.replace(/([().])/g,\n"\\\\$1").replace(/(\\/)?:(\\w+)([\\?|\\*])?/g,function(a,c,h,d){a="?"===d?d:null;d="*"===d?d:null;g.push({name:h,optional:!!a});c=c||"";return""+(a?"":c)+"(?:"+(a?c:"")+(d&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\\/$\\*])/g,"\\\\$1");d.regexp=RegExp("^"+a+"$",k?"i":"");return d}var g={};this.when=function(a,h){g[a]=c.extend({reloadOnSearch:!0},h,a&&r(a,h));if(a){var k="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[k]=c.extend({redirectTo:a},r(k,h))}return this};this.otherwise=function(a){this.when(null,\na);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,h,k,d,r,u,t,w){function v(){var b=x(),f=n.current;if(b&&f&&b.$$route===f.$$route&&c.equals(b.pathParams,f.pathParams)&&!b.reloadOnSearch&&!m)f.params=b.params,c.copy(f.params,k),a.$broadcast("$routeUpdate",f);else if(b||f)m=!1,a.$broadcast("$routeChangeStart",b,f),(n.current=b)&&b.redirectTo&&(c.isString(b.redirectTo)?h.path(l(b.redirectTo,b.params)).search(b.params).replace():\nh.url(b.redirectTo(b.pathParams,h.path(),h.search())).replace()),d.when(b).then(function(){if(b){var a=c.extend({},b.resolve),f,e;c.forEach(a,function(b,f){a[f]=c.isString(b)?r.get(b):r.invoke(b)});c.isDefined(f=b.template)?c.isFunction(f)&&(f=f(b.params)):c.isDefined(e=b.templateUrl)&&(c.isFunction(e)&&(e=e(b.params)),e=w.getTrustedResourceUrl(e),c.isDefined(e)&&(b.loadedTemplateUrl=e,f=u.get(e,{cache:t}).then(function(b){return b.data})));c.isDefined(f)&&(a.$template=f);return d.all(a)}}).then(function(d){b==\nn.current&&(b&&(b.locals=d,c.copy(b.params,k)),a.$broadcast("$routeChangeSuccess",b,f))},function(c){b==n.current&&a.$broadcast("$routeChangeError",b,f,c)})}function x(){var b,a;c.forEach(g,function(d,l){var e;if(e=!a){var p=h.path();e=d.keys;var q={};if(d.regexp)if(p=d.regexp.exec(p)){for(var g=1,k=p.length;g<k;++g){var m=e[g-1],n="string"==typeof p[g]?decodeURIComponent(p[g]):p[g];m&&n&&(q[m.name]=n)}e=q}else e=null;else e=null;e=b=e}e&&(a=s(d,{params:c.extend({},h.search(),b),pathParams:b}),a.$$route=\nd)});return a||g[null]&&s(g[null],{params:{},pathParams:{}})}function l(a,d){var g=[];c.forEach((a||"").split(":"),function(a,b){if(0===b)g.push(a);else{var c=a.match(/(\\w+)(.*)/),h=c[1];g.push(d[h]);g.push(c[2]||"");delete d[h]}});return g.join("")}var m=!1,n={routes:g,reload:function(){m=!0;a.$evalAsync(v)}};a.$on("$locationChangeSuccess",v);return n}]});t.provider("$routeParams",function(){this.$get=function(){return{}}});t.directive("ngView",w);w.$inject=["$route","$anchorScroll","$compile","$controller",\n"$animate"]})(window,window.angular);\n//\n'
},
function(e, t, n) {
    n(13)(n(18))
},
function(e, t) {
    e.exports = '/*\n AngularJS v1.2.0\n (c) 2010-2012 Google, Inc. http://angularjs.org\n License: MIT\n*/\n(function(p,f,n){\'use strict\';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(d,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&d.$apply())})();k=!0;d.$watch(function(){var a,e,d;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)(e=c[a],f.isString(e))?e!==g[a]&&(b.cookies(a,e),d=!0):f.isDefined(g[a])?c[a]=g[a]:delete c[a];if(d)for(a in e=b.cookies(),c)c[a]!==e[a]&&(m(e[a])?delete c[a]:c[a]=e[a])});\nreturn c}]).factory("$cookieStore",["$cookies",function(d){return{get:function(b){return(b=d[b])?f.fromJson(b):b},put:function(b,c){d[b]=f.toJson(c)},remove:function(b){delete d[b]}}}])})(window,window.angular);\n//\n'
},
function(e, t, n) {
    n(13)(n(20))
},
function(e, t) {
    e.exports = '/*\n AngularJS v1.3.15\n (c) 2010-2014 Google, Inc. http://angularjs.org\n License: MIT\n*/\n(function(I,d,B){\'use strict\';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr("$resource"),C=/^(\\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};\nthis.$get=["$http","$q",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||\n{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),\nA={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=\ng)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,\ne,q=m.urlParams={};r(c.split(/\\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\\\\\]):"+b+"(\\\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+\nk+"(\\\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\\/+$/,"")||"/");c=c.replace(/\\/\\.(?=\\w+($|\\?))/,".");f.url=c.replace(/\\/\\\\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);\n//\n'
},
function(e, t, n) {
    n(13)(n(22))
},
function(e, t) {
    e.exports = "/**/ void function() {\n\n// The internal Hooks class (return an array)\nvar Hooks = function() {\n  var hooks = [];\n  // To compare matcher and target, RegExp may be used\n  var compare = function(matcher, target) {\n    if(matcher.test) return matcher.test(target);\n    return matcher === target;\n  };\n  // Solve hooks\n  hooks.solve = function(type, method, url, req, res, done, fail) {\n    // A recursive function\n    var walker = function(i) {\n      // Call the 'done' function, if all hooks solved\n      var hook = hooks[i];\n      if(!hook) return done();\n      var next = function(e) {\n        switch(e) {\n          // Ignore subsequent hooks, if true\n          case true: return walker(-1);\n          // Call the 'fail' function, if false\n          case false: return fail();\n          // Recur\n          default: walker(i + 1);\n        };\n      }\n      // Check hook match\n      if(typeof hook[type] !== 'function') return next();\n      if(!compare(hook.method, req.method)) return next();\n      if(!compare(hook.url, req.url)) return next();\n      // Call the hook handler function\n      var result = hook[type].call(null, req, res);\n      // Consider promise object\n      if(result && typeof result.then === 'function') {\n        result.then(next);\n      } else {\n        next(result);\n      }\n    };\n    walker(0);\n  };\n  return hooks;\n};\n\nangular.module('httphook', ['httphook.provider'], ['$httpBackendProvider', 'httphookProvider', function($httpBackendProvider, httphookProvider) {\n  // Intercept the $httpBackend\n  var $handler = $httpBackendProvider.$get.splice(-1, 1, function () {\n    // Call the original $httpBackend, that return an internal http interface of angular\n    var $delegate = $handler.apply(this, arguments);\n    // Intercept the internal http interface of angular\n    return function(method, url, data, callback, headers, timeout, withCredentials) {\n      httphookProvider.trigger({ method: method, url: url, data: data, callback: callback, headers: headers, timeout: timeout, withCredentials: withCredentials }, $delegate);\n    };\n  })[0];\n}]);\n\n// Create an angular module to define the 'httphook' provider\nangular.module('httphook.provider', []).provider('httphook', function() {\n  var hooks = new Hooks();\n  // Set a 'trigger' method for httphookProvider\n  this.trigger = function(request, $delegate) {\n    // Initialize 'req' and 'res'\n    var req = {};\n    // MUST be shallow copy, because `request.data` may be a native object such as FormData\n    for(var i in request) req[i] = request[i];\n    var res = { status: 204, data: null, headers: '', statusText: 'OK' };\n    delete req.callback;\n    // Execute this function on request complete whatever launch\n    var complete = function(status, data, headers, statusText) {\n      // Save parameters to 'res'\n      res.status = status;\n      res.data = data;\n      res.headers = headers;\n      res.statusText = statusText;\n      // Solve response handlers of hooks\n      hooks.solve('resHandler', request.method, request.url, req, res, function() {\n        // Last, call the callback function to finish the whole hook\n        request.callback(res.status, res.data, res.headers, res.statusText);\n      }, angular.noop);\n    };\n    // Solve request handlers of hooks\n    hooks.solve('reqHandler', request.method, request.url, req, res, function() {\n      // Launch and receive by 'complete' function\n      $delegate(req.method, req.url, req.data, complete, req.headers, req.timeout, req.withCredentials);\n    }, function() {\n      // Call the 'complete' function directly\n      complete(res.status, res.data, res.headers, res.statusText);\n    });\n  };\n  // Set the 'hooks' as hooks storage\n  this.$get = [function() {\n    // Initialize the hooks storage\n    // Initialize the 'interface' function\n    var interface = function(method, url, reqHandler, resHandler) {\n      hooks.push({ method: method, url: url, reqHandler: reqHandler, resHandler: resHandler });\n      return interface;\n    };\n    // Initialize some shortcuts\n    interface.get = angular.bind(null, interface, 'GET');\n    interface.post = angular.bind(null, interface, 'POST');\n    interface.put = angular.bind(null, interface, 'PUT');\n    interface.patch = angular.bind(null, interface, 'PATCH');\n    interface['delete'] = angular.bind(null, interface, 'DELETE');\n    return interface;\n  }];\n});\n\n/**/ }();\n"
},
function(e, t, n) {
    n(13)(n(24))
},
function(e, t) {
    e.exports = "angular.module('ie8provider', []).provider('ie8', function() {\n  this.$get = angular.noop;\n  var customTags = this.customTags = [];\n  var createDocumentFragment = document.createDocumentFragment;\n  if(createDocumentFragment.call(document).createElement) {\n    document.createDocumentFragment = function () {\n      var fragment = createDocumentFragment.call(document);\n      for (var i = 0; i < customTags.length; i++) {\n        fragment.createElement(customTags[i]);\n      }\n      return fragment;\n    };\n  }\n});\n\n"
},
function(e, t, n) {
    n(13)(n(26))
},
function(e, t) {
    e.exports = 'var UBT=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(5),n(14),n(19),n(18)},function(t,e,n){var r=n(11),o="https://web-ubt.ele.me/par.gif",i="https://web-ubt.ele.me/tracking.gif",a=function(t,e){this.type=t||"UNKNOWN",this.params=e||{}};a.prototype.bindData=function(){var t=function(){};t.prototype=this.params;for(var e=new t,n=0;n<arguments.length;n++){var r=arguments[n];for(var o in r)e[o]=r[o]}return new a(this.type,e)},a.prototype.bindType=function(t){return new a(t,this.params)},a.prototype.bind=function(){var t=Array.prototype.slice.call(arguments),e="string"==typeof t[0]?t.shift():this.type,n=this.bindData.apply(this,t).params;return new a(e,n)},a.prototype.send=function(){var t,e=this.bind.apply(this,arguments),n=e.params,a=n.type=e.type;"PV"===a?(t=i,u.params.pvhash=r()):t=o;for(var c in n){var s=n[c];"function"==typeof s?n[c]=s():n[c]=n[c]}if("debug"===document.cookie.match(/(?:; |^)UBT=([^;]*)|$/)[1])console.log(n);else{var d=encodeURIComponent(JSON.stringify(n));(new Image).src=t+"?"+d}};var u=new a("DEFAULT",new function(){var t=/(?:[\\w-]+\\.)?[\\w-]+$|$/i.exec(document.domain||"")[0];if(t)this.ssid=document.cookie.match(/(?:^|; )ubt_ssid=(.*?)(?:; |$)|$/)[1];else try{this.ssid=localStorage.getItem("ubt_ssid")}catch(e){setTimeout(function(){throw e})}if(!this.ssid){var n=new Date((new Date).getTime()+288e5);if(this.ssid=r()+"_"+[n.getUTCFullYear(),n.getUTCMonth()+1,n.getUTCDate()].join("-").replace(/\\b\\d\\b/g,"0$&"),t)document.cookie="ubt_ssid="+this.ssid+"; Expires=Wed, 31 Dec 2098 16:00:00 GMT; Domain="+t+"; Path=/";else try{localStorage.setItem("ubt_ssid",this.ssid)}catch(e){setTimeout(function(){throw e})}}this.timestamp=function(){return(new Date).getTime().toString(36)}}),c=document.documentElement;u.send("PV",{resolution:Math.max(c.clientWidth,window.innerWidth||0)+"x"+Math.max(c.clientHeight,window.innerHeight||0),location:location.href,referrer:document.referrer}),t.exports=u},function(t,e,n){var r=n(10),o=n(9);t.exports=function(t){var e,n,i={value:r(t),message:o(t)},a=t.attributes;for(n=0;n<a.length;n++)e=a[n],/^ubt-data-(\\w+)/.test(e.name)&&(i[RegExp.$1]=e.value);return i}},function(t,e){t.exports=function(t,e,n){var r=function(t){t=t||event;var e={target:t.target||t.srcElement};n.call(e.target,e)};t.addEventListener?t.addEventListener(e,r,!0):t.attachEvent&&t.attachEvent("on"+e,r)}},function(t,e){t.exports=function(t,e){for(var n=t;n&&1===n.nodeType&&e(n)!==!1;n=n.parentNode);}},function(t,e,n){t.exports=n(1),n(13),n(12),n(7),n(6),n(8)},function(t,e,n){var r=n(1),o=n(3),i=n(4),a=n(2),u="ubt-change",c=u+"-installed",s=function(t,e){o(t,"change",function(t){r.send("EVENT",{id:t.target.getAttribute(u),params:a(t.target)})})},d=["input","textarea","select"],f=function(t){t[c]||(t[c]=!0,s(t,t.getAttribute(u)))},m=function(t){var e=t.target;if(!new RegExp(d.join("|"),"i").test(e.tagName)){var n="LABEL"===e.tagName&&e;if(n||i(e,function(t){return n="LABEL"===t.tagName&&t,n?!1:void 0}),n)var r=n.getAttribute("for"),e=r?document.getElementById(r):n.querySelector(d)}e&&e.hasAttribute(u)&&f(e)};o(document,"mousedown",m),o(document,"keydown",m)},function(t,e,n){var r=n(1),o=n(3),i=n(4),a=n(2),u="ubt-click",c=function(t){r.send("EVENT",{id:t.getAttribute(u),params:a(t)})};o(document,"click",function(t){var e=t.target;"LABEL"===e.tagName&&e.querySelector("input,textarea")||i(e,function(t){t.hasAttribute(u)&&c(t)})})},function(t,e,n){var r=n(1),o=n(2),i="ubt-visit",a={},u=function(t){var e=t.getAttribute(i);a[e]||(r.send("EVENT",{id:e,params:o(t)}),a[e]=!0),t.removeAttribute(i)},c=function(t){t.offsetWidth+t.offsetHeight&&u(t)},s=function(){for(var t=document.querySelectorAll("["+i+"]"),e=0;e<t.length;e++)c(t[e]);setTimeout(s,800)};s()},function(t,e,n){var r=n(4);t.exports=function(t){var e;"INPUT"===t.tagName&&(e=t.id&&document.querySelector(\'[for="\'+t.id+\'"]\'),e||r(t,function(t){return"LABEL"===t.tagName||t.hasAttribute("ubt-label")?(e=t,!1):void 0}),e&&(t=e));var n;return/TEXTAREA|SELECT/.test(t.tagName)||(n=String(t.textContent||t.innerText||"").replace(/^\\s+|\\s+$/g,"")),n||t.title||t.alt||t.name||t.getAttribute("placeholder")}},function(t,e){var n=function(t){var e;switch(t.tagName){case"A":return t.getAttribute("href");case"INPUT":if(/checkbox|radio/.test(t.type))return t.checked;case"TEXTAREA":return t.value;case"SELECT":for(var r=t.getElementsByTagName("option"),o=0;o<r.length;o++)if(r[o].selected)return r[o].hasAttribute("value")?r[o].getAttribute("value"):r[o].innerHTML;return null;default:if("LABEL"===t.tagName||t.hasAttribute("ubt-label")){var i=t.getAttribute("for"),e=i?document.getElementById(i):t.querySelector("input,textarea");return e?n(e):null}}};t.exports=n},function(t,e){t.exports=function(){for(var t="",e=0;4>e;e++)t+="0000000".concat(Math.floor(2821109907456*Math.random()).toString(36)).slice(-8);return t}},function(t,e,n){var r=n(1),o={},i=10,a=function(t){!t||o[t]||0>=i||(r.send("JSERROR",{message:t}),o[t]=!0,i--)};window.addEventListener?addEventListener("error",function(t){a(t.error&&t.error.stack)}):window.attachEvent&&attachEvent("onerror",function(t,e,n){a([t,"url: "+e,"line: "+n].join("\\r\\n"))})},function(t,e,n){var r=n(1),o=n(3),i=function(){setTimeout(function(){for(var t=performance.timing,e=["fetchStart","connectEnd","connectStart","domComplete","domContentLoadedEventEnd","domContentLoadedEventStart","domInteractive","domLoading","domainLookupEnd","domainLookupStart","loadEventEnd","loadEventStart","requestStart","responseEnd","responseStart"],n={},o=0;o<e.length;o++)n[e[o]]=t[e[o]]-t.navigationStart;r.send("TIMING",n)})};window.performance&&window.performance.timing&&o(window,"load",i)},function(t,e,n){var r=n(17);t.exports=r.module("UBT",[]).factory("UBT",["$rootScope",function(t){return n(5).bindData({user_id:function(){return t.user&&t.user.id},geohash:function(){try{return localStorage.getItem("GEOHASH")||""}catch(t){return""}}})}])},,,function(t,e){t.exports=new Function("return this")().angular},function(t,e,n){n(14).config(["$httpProvider",function(t){var e=5e3;t.interceptors.push(["$q","UBT",function(t,n){var r=function(t){return t.customData={beginstamp:new Date,config:t,timer:setTimeout(function(){n.send("APITIMEOUT",{url:t.url,timeout:e})},e)},t},o=function(e){var r=e.config,o=n.bind({status:e.status,url:r.url,duration:new Date-r.customData.beginstamp});clearTimeout(r.customData.timer),[/^\\/v1\\/restaurant$/,/^\\/restapi\\/v1\\/user$/].some(function(t){return t.test(r.url)})&&setTimeout(function(){return o.send("API")});var i=t.defer(),a=e.status/100|0;return 2===a?i.resolve(e):(5===a&&setTimeout(function(){return o.send("SERVERERROR")}),i.reject(e)),i.promise};return{request:r,response:o,responseError:o}}])}])},function(t,e,n){n(14).run(["UBT","$rootScope",function(t,e){var n=document.referrer,r=document.documentElement,o=function(){t.send("PV",{resolution:Math.max(r.clientWidth,window.innerWidth||0)+"x"+Math.max(r.clientHeight,window.innerHeight||0),location:location.href,referrer:n}),n=location.href};e.$on("$routeChangeSuccess",o),e.$on("$stateChangeSuccess",o)}])}]);'
},
function(e, t, n) {
    n(13)(n(28))
},
function(e, t) {
    e.exports = "(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\nvar POPUP_NAME = 'Popup';\nvar POPOVER_NAME = 'Popover';\n\nvar Popup = require('./popup');\nvar Popover = require('./popover');\n\nif (typeof define === 'function' && define.amd) { // For AMD\n  define(POPUP_NAME, function() {\n    return Popup;\n  });\n  define(POPOVER_NAME, function() {\n    return Popover;\n  });\n} else if (typeof angular === 'object' && !!angular.version) {\n  angular.module('popover.js', []).factory(POPUP_NAME, function() {\n    return Popup;\n  }).factory(POPOVER_NAME, function() {\n    return Popover;\n  });\n}\nNumber(document.documentMode) < 9 && window.execScript('var ' + POPUP_NAME + ',' + POPOVER_NAME + ';');\nwindow[POPUP_NAME] = Popup;\nwindow[POPOVER_NAME] = Popover;\n\n},{\"./popover\":5,\"./popup\":6}],2:[function(require,module,exports){\nvar domUtil = require('./dom-util');\nvar transition = require('./transition');\n\nvar transitionProperty = transition.prefix + 'transition';\nvar transformProperty = transition.prefix + 'transform';\n\nmodule.exports = {\n  'fade': {\n    duration: 200,\n    show: function(popover) {\n      domUtil.setStyle(popover.dom, 'opacity', 0);\n\n      popover.dom.style.visibility = '';\n\n      setTimeout(function() {\n        domUtil.bindOnce(popover.dom, transition.event, function() {\n          domUtil.setStyle(popover.dom, transitionProperty, '');\n          domUtil.setStyle(popover.dom, 'opacity', '');\n        });\n        domUtil.setStyle(popover.dom, transitionProperty, 'opacity 200ms linear');\n        domUtil.setStyle(popover.dom, 'opacity', 1);\n      }, 10);\n    },\n    hide: function(popover) {\n      domUtil.setStyle(popover.dom, 'opacity', 1);\n\n      setTimeout(function() {\n        domUtil.bindOnce(popover.dom, transition.event, function() {\n          popover.afterHide();\n          domUtil.setStyle(popover.dom, transitionProperty, '');\n          domUtil.setStyle(popover.dom, 'opacity', '');\n        });\n        domUtil.setStyle(popover.dom, transitionProperty, 'opacity 200ms linear');\n        domUtil.setStyle(popover.dom, 'opacity', 0);\n      }, 10);\n    }\n  },\n  'pop': {\n    duration: 200,\n    show: function(popover) {\n      domUtil.setStyle(popover.dom, transformProperty, 'scale(0.8)');\n\n      popover.dom.style.visibility = '';\n\n      setTimeout(function() {\n        domUtil.bindOnce(popover.dom, transition.event, function() {\n          domUtil.setStyle(popover.dom, transitionProperty, '');\n          domUtil.setStyle(popover.dom, transformProperty, '');\n        });\n        domUtil.setStyle(popover.dom, transitionProperty, transformProperty + ' 200ms cubic-bezier(0.3, 0, 0, 1.5)');\n        domUtil.setStyle(popover.dom, transformProperty, 'none');\n      }, 10);\n    },\n    hide: function(popover) {\n      domUtil.setStyle(popover.dom, transformProperty, 'none');\n\n      setTimeout(function() {\n        domUtil.bindOnce(popover.dom, transition.event, function() {\n          popover.afterHide();\n          domUtil.setStyle(popover.dom, transitionProperty, '');\n          domUtil.setStyle(popover.dom, transformProperty, '');\n        });\n        domUtil.setStyle(popover.dom, transitionProperty, transformProperty + ' 200ms cubic-bezier(0.3, 0, 0, 1.5)');\n        domUtil.setStyle(popover.dom, transformProperty, 'scale(0.8)');\n      }, 10);\n    }\n  }\n};\n},{\"./dom-util\":3,\"./transition\":7}],3:[function(require,module,exports){\nvar SPECIAL_CHARS_REGEXP = /([\\:\\-\\_]+(.))/g;\nvar MOZ_HACK_REGEXP = /^moz([A-Z])/;\n\nfunction camelCase(name) {\n  return name.\n    replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {\n      return offset ? letter.toUpperCase() : letter;\n    }).\n    replace(MOZ_HACK_REGEXP, 'Moz$1');\n}\n\nvar ieVersion = Number(document.documentMode);\nvar getStyle = ieVersion < 9 ? function(element, styleName) {\n  if (!element || !styleName) return null;\n  styleName = camelCase(styleName);\n  if (styleName === 'float') {\n    styleName = 'styleFloat';\n  }\n  try {\n    switch (styleName) {\n      case 'opacity':\n        try {\n          return element.filters.item('alpha').opacity / 100;\n        }\n        catch (e) {\n          return 1.0;\n        }\n        break;\n      default:\n        return ( element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null );\n    }\n  } catch(e) {\n    return element.style[styleName];\n  }\n} : function(element, styleName) {\n  if (!element || !styleName) return null;\n  styleName = camelCase(styleName);\n  if (styleName === 'float') {\n    styleName = 'cssFloat';\n  }\n  try {\n    var computed = document.defaultView.getComputedStyle(element, '');\n    return element.style[styleName] || computed ? computed[styleName] : null;\n  } catch(e) {\n    return element.style[styleName];\n  }\n};\n\nvar setStyle = function(element, styleName, value) {\n  if (!element || !styleName) return;\n\n  if (typeof styleName === 'object') {\n    for (var prop in styleName) {\n      if (styleName.hasOwnProperty(prop)) {\n        setStyle(element, prop, styleName[prop]);\n      }\n    }\n  } else {\n    styleName = camelCase(styleName);\n    if (styleName === 'opacity' && ieVersion < 9) {\n      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';\n    } else {\n      element.style[styleName] = value;\n    }\n  }\n};\n\nvar getRect = function(element) {\n  if (ieVersion < 9) {\n    var rect = element.getBoundingClientRect();\n\n    return {\n      width: element.offsetWidth,\n      height: element.offsetHeight,\n      left: rect.left,\n      right: rect.right,\n      top: rect.top,\n      bottom: rect.bottom\n    };\n  }\n  return element.getBoundingClientRect();\n};\n\nvar positionElement = function(element, target, placement, alignment) {\n  if (!element || !target || !placement) {\n    return null;\n  }\n\n  alignment = alignment || 'center';\n  var targetRect = getRect(target);\n  var selfRect = getRect(element);\n  var position = {};\n\n  switch (placement) {\n    case 'left':\n      position.left = targetRect.left - selfRect.width;\n      break;\n    case 'right':\n      position.left = targetRect.right;\n      break;\n    case 'innerLeft':\n      position.left = targetRect.left;\n      break;\n    case 'innerRight':\n      position.left = targetRect.right - selfRect.width;\n      break;\n    case 'center':\n      position.left = (targetRect.right - selfRect.width) / 2;\n      break;\n    case 'top':\n      position.top = targetRect.top - selfRect.height;\n      break;\n    case 'bottom':\n      position.top = targetRect.bottom;\n      break;\n  }\n\n  if (placement == 'left' || placement == 'right' || placement == 'innerLeft' || placement == 'innerRight') {\n    switch (alignment) {\n      case 'start':\n        position.top = targetRect.top;\n        break;\n      case 'center':\n        position.top = (targetRect.top + targetRect.bottom) / 2 - selfRect.height / 2;\n        break;\n      case 'end':\n        position.top = targetRect.bottom - selfRect.height;\n        break;\n    }\n  } else {\n    switch (alignment) {\n      case 'start':\n        position.left = targetRect.left;\n        break;\n      case 'center':\n        position.left = (targetRect.left + targetRect.right) / 2 - selfRect.width / 2;\n        break;\n      case 'end':\n        position.left = targetRect.right - selfRect.width;\n        break;\n    }\n  }\n\n  var currentNode = element.parentNode;\n\n  while (currentNode && currentNode.nodeName !== 'HTML') {\n    if (getStyle(currentNode, 'position') !== 'static') {\n      break;\n    }\n    currentNode = currentNode.parentNode;\n  }\n\n  if (currentNode) {\n    var parentRect = getRect(currentNode);\n\n    position.left = position.left - parentRect.left;\n    position.top = position.top - parentRect.top;\n  }\n\n  return position;\n};\n\nvar isElementOutside = function(element) {\n  var rect = element.getBoundingClientRect();\n  var leftOutside = false;\n  var topOutside = false;\n\n  if (rect.top < 0 || rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) {\n    topOutside = true;\n  }\n\n  if (rect.left < 0 || rect.right > (window.innerWidth || document.documentElement.clientWidth)) {\n    leftOutside = true;\n  }\n\n  if (leftOutside && topOutside) {\n    return 'both';\n  } else if (leftOutside) {\n    return 'left';\n  } else if (topOutside) {\n    return 'top';\n  }\n\n  return 'none';\n};\n\nvar bindEvent = (function() {\n  if(document.addEventListener) {\n    return function(element, event, handler) {\n      element.addEventListener(event, handler, false);\n    };\n  } else {\n    return function(element, event, handler) {\n      element.attachEvent('on' + event, handler);\n    };\n  }\n})();\n\nvar unbindEvent = (function() {\n  if(document.removeEventListener) {\n    return function(element, event, handler) {\n      element.removeEventListener(event, handler);\n    };\n  } else {\n    return function(element, event, handler) {\n      element.detachEvent('on' + event, handler);\n    };\n  }\n})();\n\nvar bindOnce = function(el, event, fn) {\n  var listener = function() {\n    if (fn) {\n      fn.apply(this, arguments);\n    }\n    unbindEvent(el, event, listener);\n  };\n  bindEvent(el, event, listener);\n};\n\n''.trim || (String.prototype.trim = function(){ return this.replace(/^[\\s\\uFEFF]+|[\\s\\uFEFF]+$/g,''); });\n\nvar hasClass = function(el, cls) {\n  if (el.classList) {\n    return el.classList.contains(cls);\n  } else {\n    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;\n  }\n};\n\nvar addClass = function(el, cls) {\n  var classes = cls.split(' ');\n  var curClass = el.className;\n\n  for (var i = 0, j = classes.length; i < j; i++) {\n    var clsName = classes[i];\n    if (!clsName) continue;\n\n    if (el.classList) {\n      el.classList.add(clsName);\n    } else {\n      if (!hasClass(el, clsName)) {\n        curClass += ' ' + clsName;\n      }\n    }\n  }\n  if (!el.classList) {\n    el.className = curClass;\n  }\n};\n\nvar removeClass = function(el, cls) {\n  if (!cls) return;\n  var classes = cls.split(' ');\n  var curClass = ' ' + el.className + ' ';\n\n  for (var i = 0, j = classes.length; i < j; i++) {\n    var clsName = classes[i];\n    if (!clsName) continue;\n\n    if (el.classList) {\n      el.classList.remove(clsName);\n    } else {\n      if (hasClass(el, clsName)) {\n        curClass = curClass.replace(' ' + clsName + ' ', ' ');\n      }\n    }\n  }\n  if (!el.classList) {\n    el.className = curClass.trim();\n  }\n};\n\nmodule.exports = {\n  getStyle: getStyle,\n  setStyle: setStyle,\n  hasClass: hasClass,\n  addClass: addClass,\n  camelCase: camelCase,\n  removeClass: removeClass,\n  bindEvent: bindEvent,\n  unbindEvent: unbindEvent,\n  bindOnce: bindOnce,\n  positionElement: positionElement,\n  isElementOutside: isElementOutside\n};\n},{}],4:[function(require,module,exports){\nvar domUtil = require('./dom-util');\n\nvar getModal = function() {\n  var modalDom = ModalManager.modalDom;\n  if (!modalDom) {\n    modalDom = document.createElement('div');\n    ModalManager.modalDom = modalDom;\n\n    domUtil.bindEvent(modalDom, 'click', function() {\n      ModalManager.doOnClick && ModalManager.doOnClick();\n    });\n  }\n\n  return modalDom;\n};\n\nvar ModalManager = {\n  stack: [],\n  doOnClick: function() {\n  },\n  show: function(id, zIndex) {\n    if (!id || zIndex === undefined) return;\n\n    var modalDom = getModal();\n\n    var style = {\n      position: 'fixed',\n      left: 0,\n      top: 0,\n      width: '100%',\n      height: '100%',\n      opacity: '0.5',\n      background: '#000'\n    };\n\n    domUtil.setStyle(modalDom, style);\n\n    if (!modalDom.parentNode || modalDom.parentNode.nodeType === 11)\n      document.body.appendChild(modalDom);\n\n    if (zIndex) {\n      modalDom.style.zIndex = zIndex;\n    }\n    modalDom.style.display = '';\n\n    this.stack.push({ id: id, zIndex: zIndex });\n  },\n  hide: function(id) {\n    var stack = this.stack;\n    var modalDom = getModal();\n\n    if (stack.length > 0) {\n      var topItem = stack[stack.length - 1];\n      if (topItem.id === id) {\n        stack.pop();\n        if (stack.length > 0) {\n          modalDom.style.zIndex = stack[stack.length - 1].zIndex;\n        }\n      } else {\n        for (var i = stack.length - 1; i >= 0; i--) {\n          if (stack[i].id === id) {\n            stack.splice(i, 1);\n            break;\n          }\n        }\n      }\n    }\n\n    if (stack.length === 0) {\n      modalDom.style.display = 'none';\n\n      modalDom.parentNode.removeChild(modalDom);\n    }\n  }\n};\n\nmodule.exports = ModalManager;\n},{\"./dom-util\":3}],5:[function(require,module,exports){\nvar domUtil = require('./dom-util');\nvar bindEvent = domUtil.bindEvent;\nvar unbindEvent = domUtil.unbindEvent;\n\nvar Popup = require('./popup');\n\nvar Popover = Popup.extend({\n  defaults: {\n    trigger: 'mouseenter',\n\n    //not implement yet\n    followMouse: false\n  },\n  constructor: function() {\n    Popup.apply(this, arguments);\n    var target = this.options.target;\n\n    if (target !== null) {\n      this.bindTarget();\n    }\n  },\n  destroy: function() {\n    var target = this.options.target;\n    if (target) {\n      this.unbindTarget();\n    }\n    Popup.prototype.destroy.apply(this, arguments);\n  },\n  bindTarget: function() {\n    var popover = this;\n    var target = popover.get('target');\n    if (!target) return;\n\n    var trigger = popover.get('trigger');\n\n    if (trigger === 'click') {\n      var toggle = function() {\n        if (popover.visible) {\n          popover.hide();\n        } else {\n          popover.show();\n        }\n      };\n      popover.toggleListener = toggle;\n\n      bindEvent(target, 'click', toggle);\n    } else {\n      var show = function () {\n        popover.show();\n      };\n      var hide = function () {\n        popover.hide();\n      };\n      popover.showListener = show;\n      popover.hideListener = hide;\n\n      if (trigger === 'mouseenter') {\n        bindEvent(target, 'mouseenter', show);\n        bindEvent(target, 'mouseleave', hide);\n      } else if (trigger === 'focus') {\n        bindEvent(target, 'focus', show);\n        bindEvent(target, 'blur', hide);\n      }\n    }\n  },\n  unbindTarget: function() {\n    var popover = this;\n    var target = popover.get('target');\n    if (!target) return;\n\n    var trigger = popover.get('trigger');\n\n    if (trigger === 'click') {\n      var toggle = popover.toggleListener;\n      if (toggle) {\n        bindEvent(target, 'click', toggle);\n      }\n    } else {\n      var show = popover.showListener;\n      var hide = popover.hideListener;\n      if (!show) return;\n\n      if (trigger === 'mouseenter') {\n        unbindEvent(target, 'mouseenter', show);\n        unbindEvent(target, 'mouseleave', hide);\n      } else if (trigger === 'focus') {\n        unbindEvent(target, 'focus', show);\n        unbindEvent(target, 'blur', hide);\n      }\n    }\n  }\n});\n\nmodule.exports = Popover;\n},{\"./dom-util\":3,\"./popup\":6}],6:[function(require,module,exports){\nvar domUtil = require('./dom-util');\nvar positionElement = domUtil.positionElement;\nvar isElementOutside = domUtil.isElementOutside;\n\nvar transition = require('./transition');\n\nvar extend = function(dst) {\n  for (var i = 1, j = arguments.length; i < j; i++) {\n    var src = arguments[i];\n    for (var prop in src) {\n      if (src.hasOwnProperty(prop)) {\n        var value = src[prop];\n        if (value !== undefined) {\n          dst[prop] = value;\n        }\n      }\n    }\n  }\n\n  return dst;\n};\n\nvar modalManager = require('./modal-manager');\n\nvar seed = 1;\n\nvar Popup = function (options) {\n  options = options || {};\n  this.options = extend({}, this.defaults, options);\n\n  //inside use only\n  this.$id = '$popup_' + seed++;\n\n  Popup.register(this.$id, this);\n\n  this.shouldRefreshOnVisible = false;\n  this.visible = false;\n  this.showTimer = null;\n  this.hideTimer = null;\n};\n\nvar instances = {};\n\nPopup.getInstance = function(id) {\n  return instances[id];\n};\n\nPopup.register = function(id, instance) {\n  if (id && instance) {\n    instances[id] = instance;\n  }\n};\n\nPopup.unregister = function(id) {\n  if (id) {\n    instances[id] = null;\n    delete instances[id];\n  }\n};\n\nvar getExtendFn = function(parentClass) {\n  return function(options) {\n    var subClass;\n    if (options.hasOwnProperty('constructor')) {\n      subClass = options.constructor;\n\n      delete options.constructor;\n    } else {\n      subClass = function() {\n        parentClass.apply(this, arguments);\n      };\n    }\n\n    subClass.prototype = new parentClass();\n    subClass.constructor = subClass;\n    subClass.extend = getExtendFn(subClass);\n\n    var defaults = options.defaults || {};\n    subClass.prototype.defaults = extend({}, parentClass.prototype.defaults, defaults);\n    delete options.defaults;\n\n    for (var prop in options) {\n      if (options.hasOwnProperty(prop)) {\n        subClass.prototype[prop] = options[prop];\n      }\n    }\n\n    return subClass;\n  }\n};\n\nPopup.extend = getExtendFn(Popup);\n\nvar animations = {};\n\nPopup.registerAnimation = function(name, config) {\n  animations[name] = config;\n};\n\nPopup.getAnimation = function(name) {\n  return animations[name];\n};\n\nPopup.zIndex = 1000;\n\nPopup.nextZIndex = function() {\n  return Popup.zIndex++;\n};\n\nvar supportAnimations = require('./animation');\n\nfor (var prop in supportAnimations) {\n  if (supportAnimations.hasOwnProperty(prop)) {\n    Popup.registerAnimation(prop, supportAnimations[prop]);\n  }\n}\n\nvar PLACEMENT_REVERSE = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };\nvar ALIGNMENT_REVERSE = { start: 'end', end: 'start', center: 'center' };\n\nPopup.prototype = {\n  defaults: {\n    showDelay: 0,\n    hideDelay: 0,\n\n    placement: 'top',\n    alignment: 'center',\n\n    attachToBody: false,\n    detachAfterHide: true,\n\n    target: null,\n\n    adjustLeft: 0,\n    adjustTop: 0,\n\n    animation: false,\n    showAnimation: undefined,\n    hideAnimation: undefined,\n\n    modal: false,\n    zIndex: null,\n\n    hideOnPressEscape: false,\n    hideOnClickModal: false,\n\n    viewport: 'window',\n    updatePositionOnResize: false\n\n    // Not Implement:\n    //updatePositionOnScroll: false\n  },\n  set: function(prop, value) {\n    if (prop !== null && typeof prop === 'object') {\n      var props = prop;\n      for (var p in props) {\n        if (props.hasOwnProperty(p)) {\n          this.set(p, props[p]);\n        }\n      }\n    } else if (typeof prop === 'string') {\n      this.options[prop] = value;\n    }\n    if (this.dom) {\n      if (this.visible) {\n        this.refresh();\n      } else {\n        this.shouldRefreshOnVisible = true;\n      }\n    }\n  },\n  get: function(prop) {\n    return this.options[prop];\n  },\n  render: function() {\n    return document.createElement('div');\n  },\n  refresh: function() {\n  },\n  destroy: function() {\n    var dom = this.dom;\n    if (dom && dom.parentNode) {\n      dom.parentNode.removeChild(dom);\n    }\n    this.dom = null;\n    this.options = null;\n    Popup.unregister(this.$id);\n    this.$id = null;\n  },\n  locate: function() {\n    var popup = this;\n    var dom = popup.dom;\n    var target = popup.get('target');\n    var adjustTop = popup.get('adjustTop') || 0;\n    var adjustLeft = popup.get('adjustLeft') || 0;\n    var afterLocateArgs = {};\n\n    if (target && target.nodeType) {\n      var placement = popup.get('placement');\n      var alignment = popup.get('alignment') || 'center';\n\n      var positionCache = {};\n\n      var tryLocate = function(placement, alignment, adjustLeft, adjustTop) {\n        var key = placement + ',' + alignment;\n        var position = positionCache[key];\n\n        if (!position) {\n          position = positionElement(dom, target, placement, alignment);\n          positionCache[key] = position;\n        }\n\n        dom.style.left = position.left + adjustLeft + 'px';\n        dom.style.top = position.top + adjustTop + 'px';\n      };\n\n      tryLocate(placement, alignment, adjustLeft, adjustTop);\n\n      var outside = isElementOutside(dom);\n      var finalPlacement = placement;\n      var finalAlignment = alignment;\n\n      if (outside !== 'none') {\n        var needReversePlacement = false;\n        var needReverseAlignment = false;\n        var reverseAdjustLeft = false;\n        var reverseAdjustTop = false;\n\n        if (outside === 'left') {\n          if (placement === 'left' || placement === 'right') {\n            needReversePlacement = true;\n            reverseAdjustLeft = true;\n          } else {\n            needReverseAlignment = true;\n            reverseAdjustTop = true;\n          }\n        } else if (outside === 'top') {\n          if (placement === 'top' || placement === 'bottom') {\n            needReversePlacement = true;\n            reverseAdjustTop = true;\n          } else {\n            needReverseAlignment = true;\n            reverseAdjustLeft = true;\n          }\n        }\n\n        if (outside === 'both') {\n          needReversePlacement = true;\n          needReverseAlignment = true;\n          reverseAdjustTop = true;\n          reverseAdjustLeft = true;\n        }\n\n        if (needReversePlacement) {\n          var reversedPlacement = PLACEMENT_REVERSE[placement];\n          tryLocate(reversedPlacement, alignment, reverseAdjustLeft ? -adjustLeft : adjustLeft, reverseAdjustTop ? -adjustTop : adjustTop);\n          outside = isElementOutside(dom);\n\n          if ((placement === 'left' || placement === 'right') && outside !== 'left') {\n            finalPlacement = reversedPlacement;\n          } else if ((placement === 'top' || placement === 'bottom') && outside !== 'top') {\n            finalPlacement = reversedPlacement;\n          }\n        }\n\n        if (needReverseAlignment && outside !== 'none') {\n          var reversedAlignment = ALIGNMENT_REVERSE[alignment];\n          tryLocate(finalPlacement, reversedAlignment, reverseAdjustLeft ? -adjustLeft : adjustLeft, reverseAdjustTop ? -adjustTop : adjustTop);\n          outside = isElementOutside(dom);\n\n          if (outside !== 'none') {\n            tryLocate(finalPlacement, alignment, reverseAdjustLeft ? -adjustLeft : adjustLeft, reverseAdjustTop ? -adjustTop : adjustTop);\n          } else {\n            finalAlignment = reversedAlignment;\n          }\n        }\n      }\n\n      afterLocateArgs = {\n        placement: finalPlacement,\n        alignment: finalAlignment,\n        isOutside: outside !== 'none'\n      };\n    } else if (target instanceof Array && target.length === 2) {\n      dom.style.left = target[0] + adjustLeft + 'px';\n      dom.style.top = target[1] + adjustTop + 'px';\n    } else if (target && target.target) {\n      dom.style.left = target.pageX + adjustLeft + 'px';\n      dom.style.top = target.pageY + adjustTop + 'px';\n    } else if (target === 'center') {\n      var selfWidth = dom.offsetWidth;\n      var selfHeight = dom.offsetHeight;\n\n      var windowWidth = window.innerWidth || document.documentElement.clientWidth;\n      var windowHeight = window.innerHeight || document.documentElement.clientHeight;\n\n      var scrollTop = Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);\n\n      if (domUtil.getStyle(dom, 'position') === 'fixed') {\n        scrollTop = 0;\n      }\n\n      dom.style.left = (windowWidth - selfWidth) / 2 + adjustLeft + 'px';\n      dom.style.top = Math.max((windowHeight - selfHeight) / 2 + scrollTop + adjustTop, 0) + 'px';\n    }\n    popup.afterLocate(afterLocateArgs);\n  },\n  afterLocate: function() {\n  },\n  willShow: function() {\n    return true;\n  },\n  show: function() {\n    var popup = this;\n\n    if (!popup.willShow()) return;\n\n    if (popup.hideTimer) {\n      clearTimeout(popup.hideTimer);\n      popup.hideTimer = null;\n    }\n\n    if (popup.visible) return;\n\n    if (popup.showTimer) {\n      clearTimeout(popup.showTimer);\n      popup.showTimer = null;\n    }\n\n    var showDelay = popup.get('showDelay');\n\n    if (Number(showDelay) > 0) {\n      popup.showTimer = setTimeout(function() {\n        popup.showTimer = null;\n        popup.doShow();\n      }, showDelay);\n    } else {\n      popup.doShow();\n    }\n  },\n  doShow: function() {\n    var popup = this;\n\n    popup.visible = true;\n\n    var dom = popup.dom;\n\n    function attach() {\n      if (popup.get('attachToBody')) {\n        document.body.appendChild(dom);\n      } else {\n        var target = popup.get('target');\n        if (target && target.nodeType && target.nodeName !== 'BODY') {\n          target.parentNode.appendChild(dom);\n        } else {\n          document.body.appendChild(dom);\n        }\n      }\n    }\n\n    var modal = this.get('modal');\n    if (modal) {\n      modalManager.show(popup.$id, Popup.nextZIndex());\n    }\n\n    if (!dom) {\n      popup.dom = dom = popup.render();\n      attach();\n      popup.refresh();\n    } else if (!dom.parentNode || dom.parentNode.nodeType === 11) { //detached element's parentNode is a DocumentFragment in IE8\n      attach();\n\n      if (popup.shouldRefreshOnVisible) {\n        popup.refresh();\n        popup.shouldRefreshOnVisible = false;\n      }\n    }\n\n    dom.style.display = '';\n\n    dom.style.visibility = 'hidden';\n    dom.style.display = '';\n\n    if (domUtil.getStyle(dom, 'position') === 'static') {\n      domUtil.setStyle(dom, 'position', 'absolute');\n    }\n\n    popup.locate();\n\n    var zIndex = this.get('zIndex');\n    if (modal) {\n      dom.style.zIndex = Popup.nextZIndex();\n    } else if (zIndex) {\n      dom.style.zIndex = zIndex;\n    }\n\n    var animation = popup.get('animation');\n    var showAnimation = popup.get('showAnimation');\n    if (showAnimation === undefined) {\n      showAnimation = animation;\n    }\n    if (transition.support && showAnimation !== false) {\n      var config = Popup.getAnimation(showAnimation);\n      if (config.show) {\n        config.show.apply(null, [popup]);\n      }\n    }\n\n    dom.style.visibility = '';\n  },\n  willHide: function() {\n    return true;\n  },\n  hide: function() {\n    var popup = this;\n\n    if (!popup.willHide()) return;\n\n    if (popup.showTimer !== null) {\n      clearTimeout(popup.showTimer);\n      popup.showTimer = null;\n    }\n\n    if (!popup.visible) return;\n\n    if (popup.hideTimer) {\n      clearTimeout(popup.hideTimer);\n      popup.hideTimer = null;\n    }\n\n    var hideDelay = popup.get('hideDelay');\n\n    if (Number(hideDelay) > 0) {\n      popup.hideTimer = setTimeout(function() {\n        popup.hideTimer = null;\n        popup.doHide();\n      }, hideDelay);\n    } else {\n      popup.doHide();\n    }\n  },\n  doHide: function() {\n    var popup = this;\n\n    popup.visible = false;\n\n    var dom = popup.dom;\n    if (dom) {\n\n      var animation = popup.get('animation');\n      var hideAnimation = popup.get('hideAnimation');\n      if (hideAnimation === undefined) {\n        hideAnimation = animation;\n      }\n      if (transition.support && hideAnimation !== false) {\n        var config = Popup.getAnimation(hideAnimation);\n        if (config.hide) {\n          config.hide.apply(null, [popup]);\n        }\n      } else {\n        popup.afterHide();\n      }\n    }\n  },\n  afterHide: function() {\n    var dom = this.dom;\n    dom.style.display = 'none';\n    dom.style.left = '';\n    dom.style.top = '';\n\n    if (this.get('modal')) {\n      modalManager.hide(this.$id);\n    }\n\n    if (this.get('detachAfterHide')) {\n      dom.parentNode && dom.parentNode.removeChild(dom);\n    }\n  }\n};\n\nPopup.prototype.constructor = Popup;\n\ndomUtil.bindEvent(window, 'keydown', function(event) {\n  if (event.keyCode === 27) { // ESC\n    if (modalManager.stack.length > 0) {\n      var topId = modalManager.stack[modalManager.stack.length - 1].id;\n      var instance = Popup.getInstance(topId);\n      if (instance.get('hideOnPressEscape')) {\n        instance.hide();\n      }\n    }\n  }\n});\n\ndomUtil.bindEvent(window, 'resize', function() {\n  for (var id in instances) {\n    if (instances.hasOwnProperty(id)) {\n      var instance = Popup.getInstance(id);\n      if (instance.visible && instance.get('updatePositionOnResize')) {\n        instance.locate();\n      }\n    }\n  }\n});\n\nmodalManager.doOnClick = function() {\n  var topId = modalManager.stack[modalManager.stack.length - 1].id;\n  var instance = Popup.getInstance(topId);\n  if (instance.get('hideOnClickModal')) {\n    instance.hide();\n  }\n};\n\nmodule.exports = Popup;\n},{\"./animation\":2,\"./dom-util\":3,\"./modal-manager\":4,\"./transition\":7}],7:[function(require,module,exports){\nvar prefixMap = {\n  'MozTransition': {\n    prefix: '-moz-',\n    event: 'transitionend'\n  },\n  'oTransition': {\n    prefix:'-o-',\n    event: 'oTransitionEnd'\n  },\n  'webkitTransition': {\n    prefix: '-webkit-',\n    event: 'webkitTransitionEnd'\n  }\n};\n\nvar testEl = document.body ? document.body : document.createElement('div');\n\nvar result;\n\nfor (var prop in prefixMap) {\n  if (prefixMap.hasOwnProperty(prop)) {\n    if (prop in testEl.style) {\n      result = prefixMap[prop];\n\n      break;\n    }\n  }\n}\n\nif (result === undefined) {\n  result = {\n    support: false\n  }\n} else {\n  result.support = true;\n}\n\nmodule.exports = result;\n},{}]},{},[1]);\n";
},
function(e, t, n) {
    n(13)(n(30))
},
function(e, t) {
    e.exports = "(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\nvar buildDom = require('./build-dom');\nvar draggable = require('./draggable');\n\nvar configMap = {\n  'n':  { top: true, height: -1 },\n  'w':  { left: true, width: -1 },\n  'e':  { width: 1 },\n  's':  { height: 1 },\n  'nw': { left: true, top: true, width: -1, height: -1 },\n  'ne': { top: true, width: 1, height: -1 },\n  'sw': { left: true, width: -1, height: 1 },\n  'se': { width: 1, height: 1 }\n};\n\nvar getPosition = function (element) {\n  var selfRect = element.getBoundingClientRect();\n  var parentRect = element.offsetParent.getBoundingClientRect();\n\n  return {\n    left: selfRect.left - parentRect.left,\n    top: selfRect.top - parentRect.top\n  };\n};\n\nvar Resizer = function() {\n};\n\nResizer.prototype.doOnStateChange = function(state) {\n};\n\nResizer.prototype.makeDraggable = function(dom) {\n  var self = this;\n  var dragState = {};\n  var containment;\n\n  draggable(dom, {\n    start: function (event) {\n      var parentNode = dom.parentNode;\n      containment = {\n        left: 0,\n        top: 0,\n        width: parentNode.clientWidth,\n        height: parentNode.clientHeight,\n        right: parentNode.clientWidth,\n        bottom: parentNode.clientHeight\n      };\n\n      dragState.startLeft = event.clientX;\n      dragState.startTop = event.clientY;\n\n      var position = getPosition(dom);\n\n      dragState.resizerStartLeft = position.left;\n      dragState.resizerStartTop = position.top;\n      dragState.resizerStartWidth = dom.offsetWidth;\n      dragState.resizerStartHeight = dom.offsetHeight;\n    },\n    drag: function (event) {\n      var offsetLeft = event.clientX - dragState.startLeft;\n      var offsetTop = event.clientY - dragState.startTop;\n\n      var left = dragState.resizerStartLeft + offsetLeft;\n      var top = dragState.resizerStartTop + offsetTop;\n\n      if (left < containment.left) {\n        left = containment.left;\n      }\n\n      if (top < containment.top) {\n        top = containment.top;\n      }\n\n      //console.log(offsetLeft, offsetTop);\n\n      if (left + dragState.resizerStartWidth > containment.right) {\n        left = containment.right - dragState.resizerStartWidth;\n      }\n\n      if (top + dragState.resizerStartHeight > containment.bottom) {\n        top = containment.bottom - dragState.resizerStartHeight;\n      }\n\n      dom.style.left = left + 'px';\n      dom.style.top = top + 'px';\n\n      self.doOnStateChange();\n    },\n    end: function () {\n      dragState = {};\n      if (self.doOnDragEnd) {\n        self.doOnDragEnd();\n      }\n    }\n  });\n};\n\nResizer.prototype.bindResizeEvent = function(dom) {\n  var self = this;\n  var resizeState = {};\n\n  var makeResizable = function (bar) {\n    var type = bar.className.split(' ')[0];\n    var transformMap = configMap[type.substr(4)];\n\n    var containment;\n\n    draggable(bar, {\n      start: function (event) {\n        var parentNode = dom.parentNode;\n        containment = {\n          left: 0,\n          top: 0,\n          width: parentNode.clientWidth,\n          height: parentNode.clientHeight,\n          right: parentNode.clientWidth,\n          bottom: parentNode.clientHeight\n        };\n\n        resizeState.startWidth = dom.clientWidth;\n        resizeState.startHeight = dom.clientHeight;\n        resizeState.startLeft = event.clientX;\n        resizeState.startTop = event.clientY;\n\n        var position = getPosition(dom);\n        resizeState.resizerStartLeft = position.left;\n        resizeState.resizerStartTop = position.top;\n\n        //console.log(resizeState);\n      },\n      drag: function (event) {\n        var widthRatio = transformMap.width;\n        var heightRatio = transformMap.height;\n\n        var aspectRatio = 1;\n\n        var offsetLeft = event.clientX - resizeState.startLeft;\n        var offsetTop = event.clientY - resizeState.startTop;\n\n        var width, height, minWidth = 50, maxWidth = 10000, minHeight = 50, maxHeight = 10000;\n\n        if (widthRatio !== undefined) {\n          width = resizeState.startWidth + widthRatio * offsetLeft;\n          if (width < minWidth) {\n            width = minWidth;\n          }\n\n          if (maxWidth && width > maxWidth) {\n            width = maxWidth;\n          }\n        }\n\n        if (heightRatio !== undefined) {\n          height = resizeState.startHeight + heightRatio * offsetTop;\n          if (height < minHeight) {\n            height = minHeight;\n          }\n\n          if (maxHeight && height > maxHeight) {\n            height = maxHeight;\n          }\n        }\n\n        if (aspectRatio !== undefined) {\n          //width = height = Math.max(width, height);\n          if (type === 'ord-n' || type === 'ord-s') {\n            width = height * aspectRatio;\n          } else if (type === 'ord-w' || type === 'ord-e') {\n            height = width / aspectRatio;\n          } else {\n            if (width / height < aspectRatio) {\n              height = width / aspectRatio;\n            } else {\n              width = height * aspectRatio;\n            }\n          }\n        }\n\n        var position = {\n          left: resizeState.resizerStartLeft,\n          top: resizeState.resizerStartTop\n        };\n\n        if (transformMap.left !== undefined) {\n          position.left = resizeState.resizerStartLeft + (width - resizeState.startWidth) * widthRatio;\n        }\n\n        if (transformMap.top !== undefined) {\n          position.top = resizeState.resizerStartTop + (height - resizeState.startHeight) * heightRatio;\n        }\n\n        //=== containment start\n\n        if (width + position.left > containment.right) {\n          width = containment.right - position.left;\n        }\n\n        if (position.left < containment.left) {\n          width -= containment.left - position.left;\n          position.left = containment.left;\n        }\n\n        if (height + position.top > containment.bottom) {\n          height = containment.bottom - position.top;\n        }\n\n        if (position.top < containment.top) {\n          height -= containment.top - position.top;\n          position.top = containment.top;\n        }\n\n        //=== containment end\n\n        if (aspectRatio !== undefined) {\n          if (width / height < aspectRatio) {\n            height = width / aspectRatio;\n          } else {\n            width = height * aspectRatio;\n          }\n        }\n\n        if (transformMap.left !== undefined) {\n          position.left = resizeState.resizerStartLeft + (width - resizeState.startWidth) * widthRatio;\n        }\n\n        if (transformMap.top !== undefined) {\n          position.top = resizeState.resizerStartTop + (height - resizeState.startHeight) * heightRatio;\n        }\n\n        dom.style.width = width + 'px';\n        dom.style.height = height + 'px';\n\n        if (position.left !== undefined) {\n          dom.style.left = position.left + 'px';\n        }\n\n        if (position.top !== undefined) {\n          dom.style.top = position.top + 'px';\n        }\n\n        self.doOnStateChange();\n      },\n      end: function () {\n        if (self.doOnDragEnd) {\n          self.doOnDragEnd();\n        }\n      }\n    });\n  };\n\n  var bars = dom.querySelectorAll('.resize-bar');\n  var handles = dom.querySelectorAll('.resize-handle');\n\n  var i, j;\n\n  for (i = 0, j = bars.length; i < j; i++) {\n    makeResizable(bars[i]);\n  }\n\n  for (i = 0, j = handles.length; i < j; i++) {\n    makeResizable(handles[i]);\n  }\n};\n\nResizer.prototype.render = function(container) {\n  var self = this;\n\n  var dom = buildDom({\n    tag: 'div',\n    className: 'resizer',\n    content: [\n      { tag: 'div', className: 'ord-n resize-bar' },\n      { tag: 'div', className: 'ord-s resize-bar' },\n      { tag: 'div', className: 'ord-w resize-bar' },\n      { tag: 'div', className: 'ord-e resize-bar' },\n      { tag: 'div', className: 'ord-nw resize-handle' },\n      { tag: 'div', className: 'ord-n resize-handle' },\n      { tag: 'div', className: 'ord-ne resize-handle' },\n      { tag: 'div', className: 'ord-w resize-handle' },\n      { tag: 'div', className: 'ord-e resize-handle' },\n      { tag: 'div', className: 'ord-sw resize-handle' },\n      { tag: 'div', className: 'ord-s resize-handle' },\n      { tag: 'div', className: 'ord-se resize-handle' }\n    ]\n  });\n\n  self.dom = dom;\n\n  self.bindResizeEvent(dom);\n  self.makeDraggable(dom);\n\n  if (container) {\n    container.appendChild(dom);\n  }\n\n  return dom;\n};\n\nmodule.exports = Resizer;\n},{\"./build-dom\":2,\"./draggable\":4}],2:[function(require,module,exports){\nvar buildDOM = function(config, refs) {\n  if (!config) return null;\n  var dom, childElement;\n  if (config.tag) {\n    dom = document.createElement(config.tag);\n    for (var prop in config) {\n      if (config.hasOwnProperty(prop)) {\n        if (prop === 'content' || prop === 'tag') continue;\n        if (prop === 'key' && refs) {\n          var key = config[prop];\n          if (key) {\n            refs[key] = dom;\n          }\n        }\n        dom[prop] = config[prop];\n      }\n    }\n    var content = config.content;\n    if (content instanceof Array) {\n      for (var i = 0, j = content.length; i < j; i++) {\n        var child = content[i];\n        childElement = buildDOM(child, refs);\n        dom.appendChild(childElement);\n      }\n    } else if (typeof content === 'string') {\n      childElement = document.createTextNode(content);\n      dom.appendChild(childElement);\n    }\n  }\n  return dom;\n};\n\nmodule.exports = buildDOM;\n},{}],3:[function(require,module,exports){\nvar Resizer = require('./Resizer');\nvar buildDom = require('./build-dom');\n\nvar blankImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';\n\nvar preLoadElement;\n\nvar ieVersion = Number(document.documentMode);\n\nvar getImageSize = function(src, callback) {\n  if (ieVersion < 10) {\n    if (!preLoadElement) {\n      preLoadElement = document.createElement(\"div\");\n      preLoadElement.style.position = \"absolute\";\n      preLoadElement.style.width = \"1px\";\n      preLoadElement.style.height = \"1px\";\n      preLoadElement.style.left = \"-9999px\";\n      preLoadElement.style.top = \"-9999px\";\n      preLoadElement.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image)';\n      document.body.insertBefore(preLoadElement, document.body.firstChild);\n    }\n\n    preLoadElement.filters.item(\"DXImageTransform.Microsoft.AlphaImageLoader\").src = src;\n\n    var size = {\n      width: preLoadElement.offsetWidth,\n      height: preLoadElement.offsetHeight\n    };\n\n    if (typeof callback === 'function') {\n      callback(size);\n    }\n  } else {\n    var image = new Image();\n    image.onload = function() {\n      var size = {\n        width: image.width,\n        height: image.height\n      };\n      if (typeof callback === 'function') {\n        callback(size);\n      }\n    };\n    image.src = src;\n  }\n};\n\nvar Cropper = function(options) {\n  var cropper = this;\n  if (!(this instanceof Cropper)) {\n    cropper = new Cropper();\n  }\n  for (var prop in options) {\n    if (options.hasOwnProperty(prop)) cropper[prop] = options[prop];\n  }\n\n  if (cropper.element) {\n    cropper.render(cropper.element);\n  }\n\n  return cropper;\n};\n\nCropper.prototype.resetResizer = function() {\n  var resizer = this.resizer;\n  var cropperRect = this.cropperRect;\n\n  var resizerDom = resizer.dom;\n  resizerDom.style.width = '100px';\n  resizerDom.style.height = '100px';\n\n  if (cropperRect) {\n    resizerDom.style.left = (cropperRect.width - 100) / 2 + 'px';\n    resizerDom.style.top = (cropperRect.height - 100) / 2 + 'px';\n  } else {\n    resizerDom.style.left = resizerDom.style.top = '';\n  }\n\n  resizer.doOnStateChange();\n  resizer.doOnDragEnd();\n};\n\nCropper.prototype.setImage = function(src) {\n  var element = this.element;\n  var sourceImage = element.querySelector('img');\n  var resizeImage = this.refs.image;\n\n  var self = this;\n\n  if (src === undefined || src === null) {\n    resizeImage.src = sourceImage.src = blankImage;\n    resizeImage.style.width = resizeImage.style.height = resizeImage.style.left = resizeImage.style.top = '';\n    sourceImage.style.width = sourceImage.style.height = sourceImage.style.left = sourceImage.style.top = '';\n\n    self.updatePreview(blankImage);\n\n    self.dom.style.display = 'none';\n    self.resetResizer();\n\n    self.dom.style.left = self.dom.style.top = '';\n    self.dom.style.width = element.offsetWidth + 'px';\n    self.dom.style.height = element.offsetHeight + 'px';\n\n    self.croppedRect = {\n      width: 0,\n      height: 0,\n      left: 0,\n      top: 0\n    };\n\n    self.onCroppedRectChange && self.onCroppedRectChange(self.croppedRect);\n\n    return;\n  }\n\n  getImageSize(src, function(size) {\n    if (ieVersion < 10) {\n      resizeImage.src = sourceImage.src = blankImage;\n      resizeImage.style.filter = sourceImage.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)';\n\n      sourceImage.filters.item(\"DXImageTransform.Microsoft.AlphaImageLoader\").src = src;\n      resizeImage.filters.item(\"DXImageTransform.Microsoft.AlphaImageLoader\").src = src;\n    }\n\n    self.imageSize = size;\n\n    var elementWidth = element.offsetWidth;\n    var elementHeight = element.offsetHeight;\n\n    var dom = self.dom;\n\n    var cropperRect = {};\n\n    if (size.width / size.height > elementWidth / elementHeight) {\n      cropperRect.width = elementWidth;\n      cropperRect.height = elementWidth * size.height / size.width;\n      cropperRect.top = (elementHeight - cropperRect.height) / 2;\n      cropperRect.left = 0;\n    } else {\n      cropperRect.height = elementHeight;\n      cropperRect.width = elementHeight * size.width / size.height;\n      cropperRect.top = 0;\n      cropperRect.left = (elementWidth - cropperRect.width) / 2;\n    }\n\n    self.cropperRect = cropperRect;\n\n    for (var style in cropperRect) {\n      if (cropperRect.hasOwnProperty(style)) {\n        dom.style[style] = cropperRect[style] + 'px';\n        sourceImage.style[style] = cropperRect[style] + 'px';\n        resizeImage.style[style] = cropperRect[style] + 'px';\n      }\n    }\n\n    if (!ieVersion || ieVersion > 9) {\n      sourceImage.src = src;\n      resizeImage.src = src;\n    }\n\n    self.dom.style.display = '';\n    self.resetResizer();\n\n    self.updatePreview(src);\n  });\n};\n\nCropper.prototype.addPreview = function(preview) {\n  var previews = this.previews;\n  if (!previews) {\n    previews = this.previews = [];\n  }\n  previews.push(preview);\n};\n\nCropper.prototype.render = function(container) {\n  var resizer = new Resizer();\n  var refs = {};\n\n  var dom = buildDom({\n    tag: 'div',\n    className: 'cropper',\n    content: [{\n      tag: 'div',\n      className: 'mask'\n    }]\n  }, refs);\n\n  var resizerDom = resizer.render(dom);\n\n  var img = buildDom({\n    tag: 'div',\n    className: 'wrapper',\n    content: [{\n      tag: 'img',\n      key: 'image',\n      src: blankImage\n    }]\n  }, refs);\n\n  var self = this;\n  self.refs = refs;\n\n  resizer.doOnStateChange = function() {\n    var left = parseInt(resizerDom.style.left, 10) || 0;\n    var top = parseInt(resizerDom.style.top, 10) || 0;\n\n    var image = refs.image;\n\n    image.style.left = -left + 'px';\n    image.style.top = -top + 'px';\n\n    self.updatePreview();\n  };\n\n  resizer.doOnDragEnd = function() {\n    var left = parseInt(resizerDom.style.left, 10) || 0;\n    var top = parseInt(resizerDom.style.top, 10) || 0;\n    var resizerWidth = resizerDom.offsetWidth;\n    var resizerHeight = resizerDom.offsetHeight;\n\n    var imageSize = self.imageSize;\n    var cropperRect = self.cropperRect;\n    if (cropperRect) {\n      var scale = cropperRect.width / imageSize.width;\n\n      self.croppedRect = {\n        width: Math.floor(resizerWidth / scale),\n        height: Math.floor(resizerHeight / scale),\n        left: Math.floor(left / scale),\n        top: Math.floor(top / scale)\n      };\n\n      self.onCroppedRectChange && self.onCroppedRectChange(self.croppedRect);\n    }\n  };\n  self.resizer = resizer;\n  self.dom = dom;\n\n  resizerDom.insertBefore(img, resizerDom.firstChild);\n\n  container.appendChild(dom);\n\n  self.dom.style.display = 'none';\n};\n\nCropper.prototype.updatePreview = function(src) {\n  var imageSize = this.imageSize;\n  var cropperRect = this.cropperRect;\n  if (!imageSize || !cropperRect) return;\n\n  var previews = this.previews || [];\n\n  var resizerDom = this.resizer.dom;\n  var resizerLeft = parseInt(resizerDom.style.left, 10) || 0;\n  var resizerTop = parseInt(resizerDom.style.top, 10) || 0;\n\n  var resizerWidth = resizerDom.offsetWidth;\n\n  for (var i = 0, j = previews.length; i < j; i++) {\n    var item = previews[i];\n    var itemImg = item.querySelector('img');\n    if (!itemImg) continue;\n\n    if (src === blankImage) {\n      itemImg.style.width = itemImg.style.height = itemImg.style.left = itemImg.style.top = '';\n      itemImg.src = blankImage;\n    } else {\n      if (ieVersion < 10) {\n        if (src) {\n          itemImg.src = blankImage;\n\n          itemImg.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)';\n          itemImg.filters.item(\"DXImageTransform.Microsoft.AlphaImageLoader\").src = src;\n          itemImg.style.width = cropperRect.width + 'px';\n          itemImg.style.height = cropperRect.height + 'px';\n        }\n      } else if (src) {\n        itemImg.src = src;\n      }\n      var scale = item.offsetWidth / resizerWidth;\n\n      itemImg.style.width = scale * cropperRect.width + 'px';\n      itemImg.style.height = scale * cropperRect.height + 'px';\n      itemImg.style.left = -resizerLeft * scale + 'px';\n      itemImg.style.top = -resizerTop * scale + 'px';\n    }\n  }\n};\n\nmodule.exports = Cropper;\n},{\"./Resizer\":1,\"./build-dom\":2}],4:[function(require,module,exports){\nvar bind = function(element, event, fn) {\n  if (element.attachEvent) {\n    element.attachEvent('on' + event, fn);\n  } else {\n    element.addEventListener(event, fn, false);\n  }\n};\n\nvar unbind = function(element, event, fn) {\n  if (element.detachEvent) {\n    element.detachEvent('on' + event, fn);\n  } else {\n    element.removeEventListener(event, fn);\n  }\n};\n\nvar isDragging = false;\n\nmodule.exports = function(element, options) {\n  var moveFn = function(event) {\n    if (options.drag) {\n      options.drag(event);\n    }\n  };\n  var upFn = function(event) {\n    unbind(document, 'mousemove', moveFn);\n    unbind(document, 'mouseup', upFn);\n    document.onselectstart = null;\n    document.ondragstart = null;\n\n    isDragging = false;\n\n    if (options.end) {\n      options.end(event);\n    }\n  };\n  bind(element, 'mousedown', function(event) {\n    if (isDragging) return;\n    document.onselectstart = function() { return false; };\n    document.ondragstart = function() { return false; };\n\n    bind(document, 'mousemove', moveFn);\n    bind(document, 'mouseup', upFn);\n    isDragging = true;\n\n    if (options.start) {\n      options.start(event);\n    }\n  });\n};\n},{}],5:[function(require,module,exports){\nvar Cropper = require('./cropper');\n\nif (typeof angular !== 'undefined') {\n  var cropperInstances = {};\n\n  Cropper.getInstance = function(id) {\n    return cropperInstances[id];\n  };\n\n  angular.module('cropper', [])\n  .factory('Cropper', function() {\n    return Cropper;\n  })\n  .directive('cropper', function() {\n    return {\n      restrict: 'A',\n      scope: {\n        cropperContext: '='\n      },\n      link: function(scope, element, attrs) {\n        var id = attrs.cropper;\n        if (!id) throw new Error('cropper id is required');\n        var cropper = Cropper({ element: element[0] });\n\n        cropperInstances[id] = cropper;\n\n        var cropperContext = scope.cropperContext;\n\n        cropper.onCroppedRectChange = function(rect) {\n          if (cropperContext) {\n            cropperContext.left = rect.left;\n            cropperContext.top = rect.top;\n            cropperContext.width = rect.width;\n            cropperContext.height = rect.height;\n          }\n          try { scope.$apply(); } catch(e) {}\n        };\n\n        scope.$on('$destroy', function() {\n          cropperInstances[id] = null;\n          delete cropperInstances[id];\n        });\n      }\n    };\n  }).directive('cropperPreview', function(){\n    return {\n      restrict: 'A',\n      link: function(scope, element, attrs) {\n        var id = attrs.cropperPreview;\n        if (!id) throw new Error('cropper id is required');\n\n        var cropper = cropperInstances[id];\n\n        if (cropper) {\n          cropper.addPreview(element[0]);\n        }\n      }\n    }\n  }).directive('cropperSource', function() {\n    return {\n      restrict: 'A',\n      link: function ($scope, $el, attrs) {\n        var id = attrs.cropperSource;\n        if (!id) throw new Error('cropper id is required');\n\n        var fileValidateRegex = /\\.(jpg|png|gif|jpeg)$/i;\n        var fileTypes = attrs.cropperFileTypes;\n\n        if (fileTypes) {\n          var types = fileTypes.split(',');\n          if (types.length > 0) {\n            fileValidateRegex = new RegExp('\\.(' + types.join('|') + ')$', 'i');\n          }\n        }\n\n        $el.on('change', function () {\n          var input = this;\n          var cropper = cropperInstances[id];\n\n          var fileName = input.value;\n          if (!fileValidateRegex.test(fileName)) {\n            cropper.setImage();\n            return;\n          }\n\n          if (typeof FileReader !== 'undefined') {\n            var reader = new FileReader();\n            reader.onload = function (event) {\n              cropper.setImage(event.target.result);\n            };\n            if (input.files && input.files[0]) {\n              reader.readAsDataURL(input.files[0]);\n            }\n          } else {\n            input.select();\n            input.blur();\n\n            var src = document.selection.createRange().text;\n            cropper.setImage(src);\n          }\n        });\n      }\n    };\n  });\n}\n\nif (typeof module !== 'undefined') {\n  module.exports = Cropper;\n} else {\n  window.Cropper = Cropper;\n}\n\n},{\"./cropper\":3}]},{},[5]);\n"
},
function(e, t, n) {
    var a = new
    function() {
        var e = Math.round,
        t = Math.max,
        n = Math.pow,
        a = Math.log,
        r = "0123456789bcdefghjkmnpqrstuvwxyz",
        i = new RegExp("^[" + r + "]+$"),
        o = function() {};
        o.prototype = {
            minlat: -90,
            maxlat: 90,
            minlng: -180,
            maxlng: 180,
            halfLat: function() {
                return (this.minlat + this.maxlat) / 2
            },
            halfLng: function() {
                return (this.minlng + this.maxlng) / 2
            }
        },
        this.encode = function(e, a) {
            if (e instanceof Array && null == a && (a = e[1], e = e[0]), e *= 1, a *= 1, e !== e) throw new Error("Geohash.encode: lat must be a Number");
            if (a !== a) throw new Error("Geohash.encode: lng must be a Number");
            for (var i, s, c = e.toString().length - e.toFixed().length - 2, l = a.toString().length - e.toFixed().length - 2, u = n(10, -t(c, l, 0)) / 2, d = new o, f = [], p = 180, h = !0, m = 0, g = 4; p >= u;) if (h ? (i = d.halfLng(), a > i ? (m |= 1 << g, d.minlng = i) : d.maxlng = i) : (i = d.halfLat(), e > i ? (m |= 1 << g, d.minlat = i) : d.maxlat = i), h = !h, g) g--;
            else {
                if (s = p, p = t(d.maxlng - d.minlng, d.maxlat - d.minlat), s === p) break;
                f.push(r[m]),
                g = 4,
                m = 0
            }
            return f.join("")
        },
        this.decode = function(s) {
            if (!i.test(s)) throw new Error("Geohash.decode: hash must be a geohash string");
            for (var c = new o,
            l = 90,
            u = 180,
            d = function(e, t, n) {
                var a = 1 << e; ! (1 & e) ^ !(1 & n) ? a & t ? c.minlat = c.halfLat() : c.maxlat = c.halfLat() : a & t ? c.minlng = c.halfLng() : c.maxlng = c.halfLng()
            },
            f = 0, p = s.length; f < p; f++) {
                for (var h = r.indexOf(s[f]), m = 1 & f, g = 4; g >= 0; g--) d(g, h, m);
                m ? (l /= 8, u /= 4) : (l /= 4, u /= 8)
            }
            var b = n(10, t(1, -e(a(l) / a(10))) - 1),
            v = n(10, t(1, -e(a(u) / a(10))) - 1);
            return [e(c.halfLat() * b) / b, e(c.halfLng() * v) / v]
        }
    };
    e.exports = a,
    e.exports = a
},
function(e, t, n) {
    "use strict";
    void
    function() {
        var e = window.navigator.userAgent;
        if (e.match(/(iphone|android|micromessenger)/i)) {
            var t = "//h5." + document.domain.replace(/www\./, "");
            if (/\/shop\/\d+/.test(location.href)) {
                var n = location.href.match(/\d+/)[0];
                location.href = t + "/shop/#id=" + n
            } else location.href = t + "/msite/"
        }
    } (),
    e.exports = angular.module("eleme", ["ngRoute", "ngCookies", n(33).name, n(60).name, n(61).name, "UBT", n(191).name, "ie8provider", "popover.js", "cropper"]).config(["$interpolateProvider", "$provide", "ZeroProvider", "ie8Provider",
    function(e, t, n, a) {
        t.decorator("$sniffer", ["$delegate",
        function(e) {
            var t = Number(document.documentMode),
            n = document.createElement("div"),
            a = {};
            return e.hasEvent = function(e) {
                return ! ("input" === e && t <= 11) && (angular.isUndefined(a[e]) && (a[e] = "on" + e in n), a[e])
            },
            e
        }]),
        a.customTags.push("header", "footer", "location", "eleme-sidebar", "eleme-topbar", "excavator", "rst-block", "carousel", "slide", "search-input", "rst-view", "order-block")
    }])
},
function(e, t, n) {
    "use strict";
    n(34),
    n(35),
    n(37);
    var a = angular.module("eleme.components", []).directive("carousel", n(38).carousel).directive("slide", n(38).slide).directive("dialog", n(41).dialog).directive("dialogTrigger", n(41).dialogTrigger).directive("dialogCloser", n(41).dialogCloser).factory("Dialog", n(41).factory).directive("dropdown", n(44).dropdown).directive("dropdownToggle", n(44).dropdownToggle).factory("MessageBox", n(45)).factory("Pagination", n(48).factory).directive("pagination", n(48).directive).directive("simplepagination", n(51)).directive("sticky", n(55)).factory("templateParser", n(56).templateParser).factory("templateBuilder", n(56).templateBuilder).directive("tooltip", n(57));
    e.exports = a
},
function(e, t) {
    "use strict";
    function n(e) {
        return e.replace(a,
        function(e, t, n, a) {
            return a ? n.toUpperCase() : n
        }).replace(r, "Moz$1")
    }
    angular.$ = function(e) {
        return e = angular.isString(e) ? document.querySelectorAll(e) : e,
        angular.element(e)
    },
    angular.element.prototype.parents = function(e) {
        if (!e) return angular.$(this[0].parentNode);
        for (var t = document.querySelectorAll(e), n = [], a = 0; a < t.length; a++) n.push(t[a]);
        for (var r, i = this[0]; i && "HTML" !== i.nodeName;) {
            i = i.parentNode;
            var o = n.indexOf(i);
            o === -1 || (r = i, i = document.documentElement)
        }
        return angular.$(r)
    },
    angular.element.prototype.param = function(e) {
        if (e) {
            var t = "";
            for (var n in e) / ^\$ / .test(n) || (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&");
            return t.slice(0, -1)
        }
    },
    angular.element.prototype.find = function(e) {
        if (!e) return angular.$();
        var t, n = document.querySelectorAll(e),
        a = [];
        for (t = 0; t < n.length; t++) a.push(n[t]);
        var r = this[0].getElementsByTagName("*"),
        i = [];
        for (t = 0; t < r.length; t++) i.push(r[t]);
        var o = [];
        for (t = 0; t < a.length; t++) i.indexOf(a[t]) !== -1 && o.push(a[t]);
        return angular.$(o)
    },
    angular.element.prototype.getStyle = function(e) {
        return "undefined" != typeof getComputedStyle ? window.getComputedStyle(this[0])[e] : this[0].currentStyle[e]
    };
    var a = /([\:\-\_]+(.))/g,
    r = /^moz([A-Z])/,
    i = Number(document.documentMode),
    o = i < 9 ?
    function(e, t) {
        if (!e || !t) return null;
        t = n(t),
        "float" === t && (t = "styleFloat");
        try {
            switch (t) {
            case "opacity":
                try {
                    return e.filters.item("alpha").opacity / 100
                } catch(e) {
                    return 1
                }
                break;
            default:
                return e.style[t] || e.currentStyle ? e.currentStyle[t] : null
            }
        } catch(n) {
            return e.style[t]
        }
    }: function(e, t) {
        if (!e || !t) return null;
        t = n(t),
        "float" === t && (t = "cssFloat");
        try {
            var a = document.defaultView.getComputedStyle(e, "");
            return e.style[t] || a ? a[t] : null
        } catch(n) {
            return e.style[t]
        }
    },
    s = function(e) {
        var t = e.getBoundingClientRect();
        return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
    },
    c = function(e) {
        var t, n = document.documentElement.scrollTop || document.body.scrollTop,
        a = document.documentElement.clientHeight,
        r = e.offsetHeight,
        i = e.offsetTop;
        return i > n && (t = a - (i - n)),
        n > i && (t = a),
        i + r - n < a && (t = r + i - n),
        t < 0 ? 0 : t
    },
    l = function(e, t) {
        var n;
        return function() {
            var a = this,
            r = arguments;
            n && (clearTimeout(n), n = null),
            n = setTimeout(function() {
                e.apply(a, r),
                n = null
            },
            t)
        }
    },
    u = function(e, t) {
        function n() {
            e.apply(o, s),
            r = a
        }
        var a, r, i, o, s;
        return function() {
            if (o = this, s = arguments, a = Date.now(), i && (clearTimeout(i), i = null), r) {
                var e = t - (a - r);
                e < 0 ? n() : i = setTimeout(function() {
                    n()
                },
                e)
            } else n()
        }
    };
    window.DomUtil = {
        msieVersion: i,
        debounce: l,
        throttle: u,
        getStyle: o,
        isElementInViewport: s,
        theElementViewHeight: c
    }
},
function(e, t, n) {
    "use strict";
    for (var a = n(36), r = ["moz", "webkit"], i = 0; i < r.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[r[i] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[r[i] + "CancelAnimationFrame"] || window[r[i] + "CancelRequestAnimationFrame"];
    var o = 0;
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        var t = (new Date).getTime(),
        n = Math.max(0, 16 - (t - o)),
        a = window.setTimeout(function() {
            e(window.performance && window.performance.now ? window.performance.now() + n: t + n)
        },
        n);
        return o = t + n,
        a
    }),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }),
    a.startAnimation = function() {
        var e = function e(t) {
            a.getAll().length > 0 && (requestAnimationFrame(e), a.update(t))
        };
        e()
    };
    var s = a.Easing;
    s.Swing = {
        None: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    };
    var c = {
        linear: s.Linear.None,
        swing: s.Swing.None,
        easeInQuad: s.Quadratic.In,
        easeOutQuad: s.Quadratic.Out,
        easeInOutQuad: s.Quadratic.InOut,
        easeInCubic: s.Cubic.In,
        easeOutCubic: s.Cubic.Out,
        easeInOutCubic: s.Cubic.InOut,
        easeInQuart: s.Quartic.In,
        easeOutQuart: s.Quartic.Out,
        easeInOutQuart: s.Quartic.InOut,
        easeInQuint: s.Quintic.In,
        easeOutQuint: s.Quintic.Out,
        easeInOutQuint: s.Quintic.InOut,
        easeInExpo: s.Exponential.In,
        easeOutExpo: s.Exponential.Out,
        easeInOutExpo: s.Exponential.InOut,
        easeInSine: s.Sinusoidal.In,
        easeOutSine: s.Sinusoidal.Out,
        easeInOutSine: s.Sinusoidal.InOut,
        easeInCirc: s.Circular.In,
        easeOutCirc: s.Circular.Out,
        easeInOutCirc: s.Circular.InOut,
        easeInElastic: s.Elastic.In,
        easeOutElastic: s.Elastic.Out,
        easeInOutElastic: s.Elastic.InOut,
        easeInBack: s.Back.In,
        easeOutBack: s.Back.Out,
        easeInOutBack: s.Back.InOut,
        easeInBounce: s.Bounce.In,
        easeOutBounce: s.Bounce.Out,
        easeInOutBounce: s.Bounce.InOut
    },
    l = function(e, t, n) {
        var a = /^(-?\d*\.?\d*)(em|ex|px|in|cm|mm|pt|pc|%)*$/,
        r = a.exec(n);
        n = r ? parseInt(r[1], 10) : n;
        var i = a.exec(t);
        t = i ? parseInt(i[1], 10) : t;
        var o = r ? r[2] : "";
        return o || (o = i ? i[2] : ""),
        !o && /^width|height|top|right|bottom|left|margin.*|padding.*|border.*$/i.test(e) && (o = "px"),
        {
            begin: t,
            end: n,
            unit: o
        }
    };
    angular.element.prototype.animate = function(e, t, n, r) {
        var i, o, s, u = this;
        if (e = e || {},
        "object" == typeof t) {
            var d = t;
            t = d.duration || 400,
            n = d.easing,
            r = d.complete,
            i = d.start,
            o = d.step,
            s = d.updateElement
        }
        t || (t = 400),
        n || (n = "swing");
        var f = {},
        p = {},
        h = {};
        for (var m in e) if (e.hasOwnProperty(m)) {
            var g, b, v = e[m];
            v instanceof Array ? (g = v[0], b = v[1]) : (g = DomUtil.getStyle(u[0], m), b = v);
            var y = l(m, g, b);
            f[m] = y.begin,
            p[m] = y.end,
            h[m] = y.unit
        }
        new a.Tween(f).to(p, t).easing(c[n]).onStart(function() {
            "function" == typeof i && i.call(u, this)
        }).onUpdate(function() {
            if ("function" == typeof o && o.call(u, this), s !== !1) for (var e in p) p.hasOwnProperty(e) && ("scrollTop" === e || "scrollLeft" === e ? u[0][e] = this[e] : u.css(e, this[e] + h[e]))
        }).onComplete(function() {
            "function" == typeof r && r.call(u, this)
        }).start(),
        a.startAnimation()
    }
},
function(e, t) {
    void 0 === Date.now && (Date.now = function() {
        return (new Date).valueOf()
    });
    var n = n ||
    function() {
        var e = [];
        return {
            REVISION: "14",
            getAll: function() {
                return e
            },
            removeAll: function() {
                e = []
            },
            add: function(t) {
                e.push(t)
            },
            remove: function(t) {
                var n = e.indexOf(t);
                n !== -1 && e.splice(n, 1)
            },
            update: function(t) {
                if (0 === e.length) return ! 1;
                var n = 0;
                for (t = void 0 !== t ? t: "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); n < e.length;) e[n].update(t) ? n++:e.splice(n, 1);
                return ! 0
            }
        }
    } ();
    n.Tween = function(e) {
        var t = e,
        a = {},
        r = {},
        i = {},
        o = 1e3,
        s = 0,
        c = !1,
        l = !1,
        u = !1,
        d = 0,
        f = null,
        p = n.Easing.Linear.None,
        h = n.Interpolation.Linear,
        m = [],
        g = null,
        b = !1,
        v = null,
        y = null,
        $ = null;
        for (var w in e) a[w] = parseFloat(e[w], 10);
        this.to = function(e, t) {
            return void 0 !== t && (o = t),
            r = e,
            this
        },
        this.start = function(e) {
            n.add(this),
            l = !0,
            b = !1,
            f = void 0 !== e ? e: "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(),
            f += d;
            for (var o in r) {
                if (r[o] instanceof Array) {
                    if (0 === r[o].length) continue;
                    r[o] = [t[o]].concat(r[o])
                }
                a[o] = t[o],
                a[o] instanceof Array == !1 && (a[o] *= 1),
                i[o] = a[o] || 0
            }
            return this
        },
        this.stop = function() {
            return l ? (n.remove(this), l = !1, null !== $ && $.call(t), this.stopChainedTweens(), this) : this
        },
        this.stopChainedTweens = function() {
            for (var e = 0,
            t = m.length; e < t; e++) m[e].stop()
        },
        this.delay = function(e) {
            return d = e,
            this
        },
        this.repeat = function(e) {
            return s = e,
            this
        },
        this.yoyo = function(e) {
            return c = e,
            this
        },
        this.easing = function(e) {
            return p = e,
            this
        },
        this.interpolation = function(e) {
            return h = e,
            this
        },
        this.chain = function() {
            return m = arguments,
            this
        },
        this.onStart = function(e) {
            return g = e,
            this
        },
        this.onUpdate = function(e) {
            return v = e,
            this
        },
        this.onComplete = function(e) {
            return y = e,
            this
        },
        this.onStop = function(e) {
            return $ = e,
            this
        },
        this.update = function(e) {
            var n;
            if (e < f) return ! 0;
            b === !1 && (null !== g && g.call(t), b = !0);
            var l = (e - f) / o;
            l = l > 1 ? 1 : l;
            var $ = p(l);
            for (n in r) {
                var w = a[n] || 0,
                k = r[n];
                k instanceof Array ? t[n] = h(k, $) : ("string" == typeof k && (k = w + parseFloat(k, 10)), "number" == typeof k && (t[n] = w + (k - w) * $))
            }
            if (null !== v && v.call(t, $), 1 == l) {
                if (s > 0) {
                    isFinite(s) && s--;
                    for (n in i) {
                        if ("string" == typeof r[n] && (i[n] = i[n] + parseFloat(r[n], 10)), c) {
                            var x = i[n];
                            i[n] = r[n],
                            r[n] = x
                        }
                        a[n] = i[n]
                    }
                    return c && (u = !u),
                    f = e + d,
                    !0
                }
                null !== y && y.call(t);
                for (var C = 0,
                A = m.length; C < A; C++) m[C].start(e);
                return ! 1
            }
            return ! 0
        }
    },
    n.Easing = {
        Linear: {
            None: function(e) {
                return e
            }
        },
        Quadratic: {
            In: function(e) {
                return e * e
            },
            Out: function(e) {
                return e * (2 - e)
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e: -.5 * (--e * (e - 2) - 1)
            }
        },
        Cubic: {
            In: function(e) {
                return e * e * e
            },
            Out: function(e) {
                return--e * e * e + 1
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e: .5 * ((e -= 2) * e * e + 2)
            }
        },
        Quartic: {
            In: function(e) {
                return e * e * e * e
            },
            Out: function(e) {
                return 1 - --e * e * e * e
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e: -.5 * ((e -= 2) * e * e * e - 2)
            }
        },
        Quintic: {
            In: function(e) {
                return e * e * e * e * e
            },
            Out: function(e) {
                return--e * e * e * e * e + 1
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e * e: .5 * ((e -= 2) * e * e * e * e + 2)
            }
        },
        Sinusoidal: {
            In: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Out: function(e) {
                return Math.sin(e * Math.PI / 2)
            },
            InOut: function(e) {
                return.5 * (1 - Math.cos(Math.PI * e))
            }
        },
        Exponential: {
            In: function(e) {
                return 0 === e ? 0 : Math.pow(1024, e - 1)
            },
            Out: function(e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            },
            InOut: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * ( - Math.pow(2, -10 * (e - 1)) + 2)
            }
        },
        Circular: {
            In: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Out: function(e) {
                return Math.sqrt(1 - --e * e)
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }
        },
        Elastic: {
            In: function(e) {
                var t, n = .1,
                a = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = a / 4) : t = a * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a)))
            },
            Out: function(e) {
                var t, n = .1,
                a = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = a / 4) : t = a * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / a) + 1)
            },
            InOut: function(e) {
                var t, n = .1,
                a = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = a / 4) : t = a * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * .5 + 1)
            }
        },
        Back: {
            In: function(e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            },
            Out: function(e) {
                var t = 1.70158;
                return--e * e * ((t + 1) * e + t) + 1
            },
            InOut: function(e) {
                var t = 2.5949095;
                return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }
        },
        Bounce: {
            In: function(e) {
                return 1 - n.Easing.Bounce.Out(1 - e)
            },
            Out: function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e: e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            },
            InOut: function(e) {
                return e < .5 ? .5 * n.Easing.Bounce.In(2 * e) : .5 * n.Easing.Bounce.Out(2 * e - 1) + .5
            }
        }
    },
    n.Interpolation = {
        Linear: function(e, t) {
            var a = e.length - 1,
            r = a * t,
            i = Math.floor(r),
            o = n.Interpolation.Utils.Linear;
            return t < 0 ? o(e[0], e[1], r) : t > 1 ? o(e[a], e[a - 1], a - r) : o(e[i], e[i + 1 > a ? a: i + 1], r - i)
        },
        Bezier: function(e, t) {
            var a, r = 0,
            i = e.length - 1,
            o = Math.pow,
            s = n.Interpolation.Utils.Bernstein;
            for (a = 0; a <= i; a++) r += o(1 - t, i - a) * o(t, a) * e[a] * s(i, a);
            return r
        },
        CatmullRom: function(e, t) {
            var a = e.length - 1,
            r = a * t,
            i = Math.floor(r),
            o = n.Interpolation.Utils.CatmullRom;
            return e[0] === e[a] ? (t < 0 && (i = Math.floor(r = a * (1 + t))), o(e[(i - 1 + a) % a], e[i], e[(i + 1) % a], e[(i + 2) % a], r - i)) : t < 0 ? e[0] - (o(e[0], e[0], e[1], e[1], -r) - e[0]) : t > 1 ? e[a] - (o(e[a], e[a], e[a - 1], e[a - 1], r - a) - e[a]) : o(e[i ? i - 1 : 0], e[i], e[a < i + 1 ? a: i + 1], e[a < i + 2 ? a: i + 2], r - i)
        },
        Utils: {
            Linear: function(e, t, n) {
                return (t - e) * n + e
            },
            Bernstein: function(e, t) {
                var a = n.Interpolation.Utils.Factorial;
                return a(e) / a(t) / a(e - t)
            },
            Factorial: function() {
                var e = [1];
                return function(t) {
                    var n, a = 1;
                    if (e[t]) return e[t];
                    for (n = t; n > 1; n--) a *= n;
                    return e[t] = a
                }
            } (),
            CatmullRom: function(e, t, n, a, r) {
                var i = .5 * (n - e),
                o = .5 * (a - t),
                s = r * r,
                c = r * s;
                return (2 * t - 2 * n + i + o) * c + ( - 3 * t + 3 * n - 2 * i - o) * s + i * r + t
            }
        }
    },
    e.exports = n
},
function(e, t) {
    "use strict";
    void
    function() {
        var e = Date.parse;
        Date.parse = function(t) {
            var n = String(t).match(/^(\d+)-(\d+)-(\d+)T(\d+):(\d+)(?::(\d+)(?:\.(\d\d\d))?)?(z|[+-]\d\d:?\d\d)$/i);
            if (n) {
                var a = n[8].match(/\d\d/g) || [];
                return a[0] = 0 | a[0],
                a[1] = 0 | a[1],
                "-" === n[8].charAt(0) && (a[0] = -a[0], a[1] = -a[1]),
                Date.UTC(n[1], n[2] - 1, n[3], n[4] - a[0], n[5] - a[1], 0 | n[6], 0 | n[7])
            }
            return e.apply(this, arguments)
        }
    } ()
},
function(e, t, n) {
    "use strict";
    n(39);
    var a = function() {
        return {
            restrict: "EA",
            transclude: !0,
            scope: {},
            controller: ["$scope", "$element",
            function(e, t) {
                var n, a = e.slides = [],
                r = 0,
                i = function t() {
                    n = setTimeout(function() {
                        var n = r + 1;
                        n > a.length - 1 && (n = 0),
                        e.setActiveSlide(n),
                        e.$digest(),
                        t()
                    },
                    5e3)
                },
                o = function() {
                    clearTimeout(n),
                    n = null
                };
                setTimeout(function() {
                    i()
                },
                0),
                t.bind("mouseenter",
                function() {
                    o()
                }),
                t.bind("mouseleave",
                function() {
                    i()
                });
                var s = t.find("ul");
                e.setActiveSlide = function(e, t) {
                    angular.forEach(a,
                    function(e) {
                        e.active = !1
                    });
                    var n;
                    "number" == typeof e ? (n = e, e = a[n], e && (e.active = !0)) : (n = a.indexOf(e), e.active = !0),
                    n >= 0 && n < a.length && (r = n);
                    var i = s.parent()[0].clientHeight;
                    t !== !1 && DomUtil.msieVersion < 10 ? s.animate({
                        top: -1 * i * r
                    }) : s.css("top", -1 * i * r + "px")
                },
                angular.$(window).on("resize", DomUtil.debounce(function() {
                    var e = s.parent()[0].clientHeight;
                    s.css("top", -1 * e * r + "px")
                },
                300)),
                this.addSlide = function(t) {
                    0 === a.length && e.setActiveSlide(t, !1),
                    a.push(t)
                }
            }],
            template: '<div class="carousel-wrapper"><ul class="carousel-list" ng-transclude></ul><ol class="carousel-pager"><li class="page-number" ng-repeat="slide in slides" ng-class="{active: slide.active}" ng-click="setActiveSlide($index)">{{$index + 1}}</li></ol></div>',
            replace: !0
        }
    },
    r = function() {
        return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            scope: {},
            link: function(e, t, n, a) {
                a.addSlide(e)
            },
            template: '<li class="carousel-block" ng-transclude></li>',
            replace: !0
        }
    };
    e.exports = {
        carousel: a,
        slide: r
    }
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    n(42);
    var a = {},
    r = function() {
        return {
            show: function(e) {
                var t = a[e];
                t && t.show()
            },
            close: function(e) {
                var t = a[e];
                t && t.hide()
            }
        }
    },
    i = ["Dialog",
    function(e) {
        return {
            restrict: "A",
            link: function(t, n, a) {
                var r = a.dialogTrigger;
                if (!r) throw new Error("dialog id is required!");
                n.on("click",
                function() {
                    e.show(r)
                })
            }
        }
    }],
    o = ["Dialog",
    function(e) {
        return {
            restrict: "A",
            link: function(t, n, a) {
                var r = a.dialogCloser;
                if (!r) throw new Error("dialog id is required!");
                n.on("click",
                function() {
                    e.close(r)
                })
            }
        }
    }],
    s = ["Popup",
    function(e) {
        return {
            restrict: "A",
            transclude: !0,
            link: function(t, n, r) {
                var i = r.dialog;
                if (!i) throw new Error("dialog id is required!");
                n.css("display", "none");
                var o = e.extend({
                    defaults: {
                        modal: !0,
                        target: "center",
                        showAnimation: "pop",
                        hideOnPressEscape: !0,
                        hideOnClickModal: !0,
                        updatePositionOnResize: !0
                    },
                    render: function() {
                        var e = this;
                        return n.find(".dialog-close").on("click",
                        function() {
                            e.hide()
                        }),
                        n[0]
                    }
                }),
                s = new o;
                a[i] = s,
                t.$on("$destroy",
                function() {
                    s.hide(),
                    s.destroy(),
                    a[i] = null,
                    delete a[i]
                })
            },
            template: '<div class="dialog" role="dialog"><div class="dialog-close icon-close"></div><div class="dialog-content" ng-transclude></div></div>',
            replace: !0
        }
    }];
    e.exports = {
        dialog: s,
        dialogTrigger: i,
        dialogCloser: o,
        factory: r
    }
},
function(e, t) {},
,
function(e, t) {
    "use strict";
    var n = ["$document",
    function(e) {
        var t = [],
        n = function(e, t) {
            for (var n = e; n && "HTML" !== n.nodeName;) {
                if (n === t) return ! 0;
                n = n.parentNode
            }
            return ! 1
        };
        return e.on("click",
        function(e) {
            t.forEach(function(t) {
                var a = n(e.target || e.srcElement, t.element[0]);
                a || t.close()
            })
        }),
        {
            restrict: "A",
            controller: ["$scope", "$element",
            function(e, n) {
                var a = this;
                a.element = n,
                a.isOpened = !1;
                var r = function(e) {
                    e.stopPropagation(),
                    a.isOpened ? a.close() : a.open()
                };
                a.initToggleElement = function(e) {
                    a.toggleElement = e,
                    e.on("click", r)
                },
                a.open = function() {
                    a.isOpened = !0,
                    n.addClass("open"),
                    t.push(a)
                },
                a.close = function() {
                    a.isOpened = !1;
                    var e = t.indexOf(this);
                    e !== -1 && (a.element.removeClass("open"), t.splice(e, 1))
                },
                e.$on("$destroy",
                function() {
                    a.toggleElement && a.toggleElement.off("click", r)
                })
            }]
        }
    }],
    a = function() {
        return {
            require: "^dropdown",
            restrict: "A",
            link: function(e, t, n, a) {
                a.initToggleElement(t)
            }
        }
    };
    e.exports = {
        dropdown: n,
        dropdownToggle: a
    }
},
function(e, t, n) {
    "use strict";
    n(46);
    var a = ["Popup",
    function(e) {
        var t = function(e, t, n) {
            e && t && n && angular.$(e).on(t, n)
        },
        n = function e(t, n) {
            if (!t) return null;
            var a, r;
            if (t.tag) {
                a = document.createElement(t.tag);
                for (var i in t) if (t.hasOwnProperty(i)) {
                    if ("content" === i || "tag" === i) continue;
                    if ("key" === i && n) {
                        var o = t[i];
                        o && (n[o] = a)
                    }
                    a[i] = t[i]
                }
                var s = t.content;
                if (s instanceof Array) for (var c = 0,
                l = s.length; c < l; c++) {
                    var u = s[c];
                    r = e(u, n),
                    a.appendChild(r)
                } else "string" == typeof s && (r = document.createTextNode(s), a.appendChild(r))
            }
            return a
        },
        a = function(e, t) {
            e && (t = !!t, e.style.display = t ? "": "none")
        },
        r = "确定",
        i = "取消",
        o = {
            "": "",
            success: "icon-dot-success",
            warning: "icon-dot-warning",
            error: "icon-dot-error"
        },
        s = [],
        c = "btn-primary btn-lg msgbox-confirm",
        l = e.extend({
            defaults: {
                target: "center",
                modal: !0,
                updatePositionOnResize: !0,
                showAnimation: "pop",
                hideDelay: 1,
                title: "",
                message: "",
                type: "",
                showConfirmButton: !0,
                showCancelButton: !1,
                confirmButtonText: r,
                cancelButtonText: i,
                confirmButtonClass: "",
                confirmButtonDisabled: !1,
                cancelButtonClass: "",
                hideOnPressEscape: !0,
                hideOnClickModal: !0,
                callback: null
            },
            refresh: function() {
                var e = this.refs;
                e.title.innerHTML = this.get("title"),
                e.message.innerHTML = this.get("message"),
                e.status.className = "msgbox-status " + o[this.get("type")],
                e.confirm.innerHTML = this.get("confirmButtonText") || r,
                e.cancel.innerHTML = this.get("cancelButtonText") || i;
                var n = this.get("confirmButtonClass") || "",
                l = this.get("cancelButtonClass") || "";
                e.confirm.className = n ? c + " " + n: c,
                e.cancel.className = l ? "msgbox-cancel " + l: "msgbox-cancel",
                e.confirm.disabled = this.get("confirmButtonDisabled") || !1,
                a(e.confirm, this.get("showConfirmButton")),
                a(e.cancel, this.get("showCancelButton"));
                for (var u = e.buttonRefNode.nextSibling; u;) {
                    var d = u.nextSibling;
                    e.btns.removeChild(u),
                    u = d
                }
                for (var f = this.get("buttons") || s, p = this, h = function(n) {
                    if (!n.action || !n.content) throw new Error("content and action is required when define a custom button.");
                    e.btns.insertAdjacentHTML("beforeend", n.content);
                    var a = e.btns.lastChild;
                    t(a, "click",
                    function() {
                        p.handleAction(n.action)
                    })
                },
                m = 0, g = f.length; m < g; m++) {
                    var b = f[m];
                    h(b)
                }
            },
            handleAction: function(e) {
                var t, n = this,
                a = n.get("callback");
                "function" == typeof a && (t = a(e)),
                t !== !1 && n.hide()
            },
            render: function() {
                var e = this,
                a = {},
                o = n({
                    tag: "div",
                    className: "msgbox",
                    content: [{
                        tag: "div",
                        className: "msgbox-close icon-close",
                        key: "close"
                    },
                    {
                        tag: "div",
                        className: "msgbox-content",
                        content: [{
                            tag: "div",
                            className: "msgbox-status icon-dot-check",
                            key: "status"
                        },
                        {
                            tag: "div",
                            className: "msgbox-title",
                            key: "title"
                        },
                        {
                            tag: "div",
                            className: "msgbox-message",
                            key: "message"
                        }]
                    },
                    {
                        tag: "div",
                        className: "msgbox-btns",
                        key: "btns",
                        content: [{
                            tag: "button",
                            className: "btn-primary btn-lg msgbox-confirm",
                            content: r,
                            key: "confirm"
                        },
                        {
                            tag: "button",
                            className: "msgbox-cancel",
                            content: i,
                            key: "cancel"
                        }]
                    }]
                },
                a),
                s = document.createComment("custom buttons");
                return a.btns.appendChild(s),
                a.buttonRefNode = s,
                e.refs = a,
                t(a.close, "click",
                function() {
                    e.handleAction("close")
                }),
                t(a.confirm, "click",
                function() {
                    e.handleAction("confirm")
                }),
                t(a.cancel, "click",
                function() {
                    e.handleAction("cancel")
                }),
                o
            }
        }),
        u = {
            title: "",
            message: "",
            type: "success",
            showConfirmButton: !0,
            showCancelButton: !1,
            confirmButtonText: r,
            cancelButtonText: i,
            confirmButtonDisabled: !1,
            confirmButtonClass: "",
            cancelButtonClass: "",
            buttons: null
        },
        d = new l,
        f = null,
        p = [];
        d.set("callback",
        function(e) {
            var t;
            if (f) {
                var n = f.callback;
                "function" == typeof n && (t = n(e))
            }
            return t !== !1 && void h()
        });
        var h = function() {
            if ((!d.visible || d.hideTimer) && p.length > 0) {
                f = p.shift();
                var e = d.visible;
                d.visible = !1,
                d.set(f.options),
                d.visible = e,
                d.show(),
                d.refresh()
            }
        },
        m = function e(t, n) {
            "string" == typeof t ? (t = {
                title: t
            },
            arguments[1] && (t.message = arguments[1]), arguments[2] && (t.type = arguments[2])) : t.callback && !n && (n = t.callback),
            p.push({
                options: angular.extend({},
                u, e.defaults || {},
                t),
                callback: n
            }),
            h()
        };
        return m.setDefaults = function(e) {
            m.defaults = e
        },
        m.close = function() {
            d.hide(),
            p = [],
            f = null
        },
        m
    }];
    e.exports = a
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    function a(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n),
            a && e(t, a),
            t
        }
    } ();
    n(49);
    var i = function(e, t, n) {
        n = n || 5;
        var a = !1,
        r = !1,
        i = t > n;
        t > n && (e > n - 2 && (a = !0), e < t - 2 && (r = !0));
        var o, s = i ? ["<"] : [];
        if (a && !r) for (s.push(1), s.push("."), o = t - 3; o <= t; o++) s.push(o);
        else if (!a && r) {
            for (o = 1; o < n; o++) s.push(o);
            s.push("."),
            s.push(t)
        } else if (a && r) {
            for (s.push(1), s.push("."), o = e - 1; o <= e + 1; o++) s.push(o);
            s.push("."),
            s.push(t)
        } else for (o = 1; o <= t; o++) s.push(o);
        return i && s.push(">"),
        s
    },
    o = function(e, t, n) {
        e && t && n && angular.$(e).on(t, n)
    },
    s = function() {
        function e(t) {
            a(this, e),
            this.pageCount = 0,
            this.pageSize = 10,
            this.currentPage = -1,
            this.hideWhenOnePage = !0;
            for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
            this.updateTimer = null,
            this.rendered = !1
        }
        return r(e, [{
            key: "set",
            value: function(e, t) {
                if ("object" == typeof e) {
                    var n = e;
                    for (var a in n) n.hasOwnProperty(a) && this.set(a, n[a])
                } else if (this[e] = t, this.rendered) {
                    var r = this;
                    clearTimeout(r.updateTimer),
                    r.updateTimer = setTimeout(function() {
                        r.update(),
                        r.updateTimer = null
                    },
                    16)
                }
            }
        },
        {
            key: "render",
            value: function(e) {
                if (e) {
                    var t = document.createElement("div");
                    t.className = "pagination",
                    t.appendChild(this.createListElement()),
                    e.appendChild(t),
                    this.element = t,
                    this.update()
                }
            }
        },
        {
            key: "createListElement",
            value: function() {
                var e = this.listElement = document.createElement("ul");
                this.rendered = !0;
                var t = this;
                return o(e, "click",
                function(e) {
                    var n = e.target || e.srcElement;
                    if ("LI" === n.tagName) {
                        var a, r = n.className;
                        if ("prev-btn" === r) a = t.currentPage - 1;
                        else if ("next-btn" === r) a = t.currentPage + 1;
                        else if ("more" !== r && "current" !== r) {
                            var i = parseInt(n.textContent || n.innerText, 10);
                            isNaN(i) || (a = i)
                        }
                        void 0 !== a && (a < 1 && (a = 1), a > t.pageCount && (a = t.pageCount), a !== t.currentPage && (t.currentPage = a, t.onCurrentChange && t.onCurrentChange(a)))
                    }
                }),
                e
            }
        },
        {
            key: "renderOn",
            value: function(e) {
                e.className += " pagination",
                e.appendChild(this.createListElement()),
                this.element = e,
                this.update()
            }
        },
        {
            key: "update",
            value: function() {
                if (this.hideWhenOnePage && this.pageCount < 2) return void(this.listElement.innerHTML = "");
                for (var e = i(this.currentPage, this.pageCount), t = "", n = 0, a = e.length; n < a; n++) {
                    var r = e[n];
                    t += "<" === r ? '<li class="prev-btn"></li>': ">" === r ? '<li class="next-btn"></li>': "." === r ? '<li class="more">...</li>': r === this.currentPage ? '<li class="current">' + r + "</li>": "<li>" + r + "</li>"
                }
                this.listElement.innerHTML = t
            }
        }]),
        e
    } (),
    c = {},
    l = function() {
        return {
            getInstance: function(e) {
                return c[e]
            }
        }
    },
    u = ["$parse",
    function(e) {
        return {
            restrict: "A",
            link: function(t, n, a) {
                var r, i = a.pagination,
                o = a.paginationContext,
                l = t[o] || {},
                u = Number(a.paginationPagesize) || l.pageSize || 10,
                d = a.paginationOnchange;
                d && (r = e(d));
                var f = function() {
                    var e = l.data || [],
                    t = l.currentPage || 1,
                    n = l.pageCount = Math.ceil(e.length / u);
                    t > n && (t = 1);
                    var a = (t - 1) * u,
                    r = Math.min(e.length, t * u);
                    l.pageData = e.slice(a, r),
                    h.set({
                        currentPage: t,
                        pageCount: n
                    })
                },
                p = a.paginationData;
                p ? t.$watchCollection(p,
                function(e) {
                    l.data = e,
                    f()
                }) : t.$watchCollection(o + ".data",
                function() {
                    f()
                });
                var h = new s({
                    pageCount: 0,
                    currentPage: l.currentPage || 1,
                    hideWhenOnePage: l.hideWhenOnePage !== !1,
                    onCurrentChange: function(e) {
                        l.currentPage = e,
                        r && r(t),
                        t.$apply(function() {
                            f()
                        })
                    }
                });
                f(),
                h.renderOn(n[0]),
                i && (c[i] = h, t.$on("$destroy",
                function() {
                    delete c[i]
                }))
            }
        }
    }];
    e.exports = {
        directive: u,
        factory: l
    }
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    var a = n(52);
    n(53);
    var r = function() {
        return {
            restrict: "A",
            templateUrl: a,
            scope: !0,
            link: function(e, t, n) {
                var a = n.paginationContext,
                r = e[a],
                i = r.itemsPerPage || 10,
                o = function() {
                    var t = r.data || [];
                    e.currentPage = r.currentPage || 1,
                    e.pageCount = r.pageCount = Math.ceil(t.length / i),
                    e.currentPage > e.pageCount && (e.currentPage = 1);
                    var n = (e.currentPage - 1) * i,
                    a = Math.min(t.length, e.currentPage * i);
                    r.pageData = r.data.slice(n, a)
                };
                e.$watchCollection(a + ".data",
                function() {
                    o()
                }),
                o(),
                angular.$("span").on("click",
                function(t) {
                    var n = t.target || t.srcElement,
                    a = n.className;
                    if (a && /pre-btn/.test(a)) {
                        if (1 === e.currentPage) return;
                        r.currentPage--
                    } else if (a && /next-btn/.test(a)) {
                        var i = e.currentPage;
                        if (i === e.pageCount) return;
                        i++,
                        r.currentPage = i
                    }
                    e.$apply(function() {
                        o()
                    })
                }),
                t.addClass("simplepagination")
            }
        }
    };
    e.exports = r
},
function(e, t) {
    var n = "/common/components/simplepagination/simplepagination.html",
    a = '{{currentPage}}/{{pageCount}} <span class="pre-btn icon-profile-left-arrow" ng-class="{\'disable\':currentPage===1}"></span> <span class="next-btn icon-profile-right-arrow" ng-class="{\'disable\':currentPage===pageCount}"></span>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t) {
    "use strict";
    var n = function() {
        function e(e) {
            var t = e.element;
            e.stickyBodyClass && n.removeClass(e.stickyBodyClass),
            e.stickyClass && t.removeClass(e.stickyClass),
            e.active = !1,
            e.deactiveScrollTop = null
        }
        var t = [],
        n = angular.element(document.body);
        return angular.element(window).on("scroll", DomUtil.throttle(function() {
            for (var a = Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0), r = 0, i = t.length; r < i; r++) {
                var o = t[r],
                s = o.element,
                c = s[0].getBoundingClientRect(),
                l = s.getStyle("display"); ! o.active && c.top <= 0 && "none" !== l ? (o.stickyBodyClass && n.addClass(o.stickyBodyClass), o.stickyClass && s.addClass(o.stickyClass), o.scope.stickyFn && o.scope.stickyFn(!0), o.active = !0, o.deactiveScrollTop = a + c.top) : a < o.deactiveScrollTop && (e(o), o.scope.stickyFn && o.scope.stickyFn(!1))
            }
        },
        100)),
        {
            restrict: "A",
            scope: {
                stickyFn: "="
            },
            link: function(n, a, r) {
                t.push({
                    element: a,
                    active: !1,
                    scope: n,
                    stickyBodyClass: r.stickyBodyClass,
                    stickyClass: r.stickyClass
                }),
                n.$on("$destroy",
                function() {
                    for (var n = 0,
                    r = t.length; n < r; n++) {
                        var i = t[n];
                        if (i.element === a) {
                            e(i),
                            t.splice(n, 1);
                            break
                        }
                    }
                })
            }
        }
    };
    e.exports = n
},
function(e, t) {
    "use strict";
    var n = ["$parse", "$interpolate",
    function(e, t) {
        function n(r) {
            if (1 === r.nodeType) {
                var i, o, s, c, l = [],
                u = {
                    tagName: r.tagName.toLowerCase()
                },
                d = r.attributes;
                for (s = 0, c = d.length; s < c; s++) {
                    var f = d[s],
                    p = f.name,
                    h = f.nodeValue;
                    if (p && "ng-" === p.substr(0, 3)) if (o || (o = {}), p.length > 8 && "ng-attr-" === p.substr(0, 8)) i || (i = {}),
                    i[p.substr(9)] = e(h);
                    else if ("ng-repeat" === p) {
                        var m = /(\w+)\s+in(.*?)$/.exec(h);
                        m && (o[p] = {
                            itemName: m[1],
                            getArray: e(m[2])
                        })
                    } else o[p] = a[p] ? t(h) : e(h);
                    else i || (i = {}),
                    /\s*({{\s*(.+?)\s*}})\s*/gi.test(h) ? i[p] = t(h) : i[p] = h
                }
                var g = r.childNodes;
                for (s = 0, c = g.length; s < c; s++) {
                    var b = g[s];
                    if (3 !== b.nodeType) l.push(n(b));
                    else {
                        var v = b.nodeValue;
                        v && (/\s*({{\s*(.+?)\s*}})\s*/gi.test(v) ? l.push(t(v)) : (v = v.replace(/(\r\n|\n|\r|\s)/gm, ""), v.length && l.push(v)))
                    }
                }
                return l.length > 0 && (u.children = l),
                i && (u.attrs = i),
                o && (u.dirs = o),
                u
            }
        }
        var a = {
            "ng-src": !0,
            "ng-href": !0
        };
        return {
            parse: function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e,
                n(t).children
            }
        }
    }],
    a = [function() {
        function e(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }
        function t(e) {
            var t = function() {};
            return t.prototype = e,
            new t
        }
        function n(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            return t
        }
        function a(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && e[n] && t.push(n);
            return t.join(" ")
        }
        function r(t) {
            var n = e(t);
            return n.dirs = e(t.dirs),
            n.dirs["ng-repeat"] = null,
            delete n.dirs["ng-repeat"],
            n
        }
        function i(e, l) {
            var u, d, f;
            if (e instanceof Array) {
                for (u = "", d = 0, f = e.length; d < f; d++) u += i(e[d], l);
                return u
            }
            if ("string" == typeof e) return e;
            if ("function" == typeof e) return e(l);
            var p = e.tagName,
            h = e.children,
            m = e.attrs,
            g = e.dirs,
            b = e.textContent,
            v = "",
            y = "";
            if (g && g["ng-repeat"]) {
                var $ = r(e),
                w = g["ng-repeat"],
                k = w.getArray(l) || c,
                x = w.itemName;
                for (u = "", d = 0, f = k.length; d < f; d++) {
                    var C = t(l);
                    C.$index = d,
                    C.$first = 0 === d,
                    C.$last = d === f - 1,
                    C.$middle = !(C.$first || C.$last),
                    C[x] = k[d],
                    u += i($, C)
                }
                return u
            }
            u = "<" + p;
            for (var A in g) if (g.hasOwnProperty(A)) {
                var E, S = g[A];
                if ("function" == typeof S && (E = S(l)), "ng-if" === A) {
                    if (!E) return ""
                } else o[A] ? u += " " + A.substr(3) + '="' + E + '"': s[A] ? b = E: "ng-style" === A ? y = n(E) + y: "ng-class" === A ? v += a(E) : "ng-show" !== A && "ng-hide" !== A || E && (v += " " + A)
            }
            for (var T in m) if (m.hasOwnProperty(T)) {
                var I = m[T];
                "function" == typeof I && (I = I(l)),
                "class" === T ? v += " " + I: u += " " + T + '="' + I + '"'
            }
            if (v && (u += ' class="' + v.trim() + '"'), y && (u += ' style="' + y + '"'), u += ">", b && (u += b), h) for (d = 0, f = h.length; d < f; d++) {
                var M = h[d];
                u += i(M, l)
            }
            return u += "</" + p + ">"
        }
        var o = {
            "ng-src": !0,
            "ng-href": !0,
            "ng-alt": !0,
            "ng-title": !0,
            "ng-id": !0,
            "ng-disabled": !0,
            "ng-value": !0
        },
        s = {
            "ng-html": !0,
            "ng-bind": !0,
            "ng-text": !0
        },
        c = [];
        return {
            build: i
        }
    }];
    e.exports = {
        templateParser: n,
        templateBuilder: a
    }
},
function(e, t, n) {
    "use strict";
    n(58);
    var a = ["Popover",
    function(e) {
        var t = {
            left: !0,
            right: !0,
            top: !0,
            bottom: !0
        },
        n = {
            mouseenter: !0,
            click: !0,
            focus: !0
        },
        a = "tooltip-placetop tooltip-placebottom tooltip-placeleft tooltip-placeright",
        r = e.extend({
            defaults: {
                content: null,
                enable: !0,
                showDelay: 200,
                animation: "fade"
            },
            render: function() {
                var e = document.createElement("div"),
                t = document.createElement("div"),
                n = document.createElement("div");
                return e.className = "tooltip",
                t.className = "tooltip-arrow",
                n.className = "tooltip-content",
                e.appendChild(t),
                e.appendChild(n),
                n.textContent = this.get("content"),
                this.dom = e,
                this.contentDom = n,
                e
            },
            willShow: function() {
                var e = this;
                if (e.get("enable")) {
                    var t = e.get("content");
                    return void 0 !== t && null !== t && "" !== t
                }
            },
            afterLocate: function(e) {
                var t = this,
                n = e.placement,
                r = t.dom;
                angular.$(r).removeClass(a).addClass("tooltip-place" + n)
            },
            refresh: function() {
                var e = this,
                t = e.dom;
                e.contentDom.textContent = e.get("content");
                var n = e.get("placement");
                angular.$(t).addClass("tooltip-place" + n)
            }
        });
        return {
            restrict: "EA",
            link: function(e, a, i) {
                var o = parseInt(i.tooltipShowDelay, 10),
                s = i.tooltipPlacement,
                c = i.tooltipTrigger,
                l = {
                    content: i.tooltip,
                    animation: "false" !== i.tooltipAnimation && "fade",
                    enable: "false" !== i.tooltipEnable,
                    placement: t[s] ? s: void 0,
                    showDelay: isNaN(o) ? void 0 : o,
                    trigger: n[c] ? c: void 0,
                    target: a[0]
                },
                u = new r(l);
                i.$observe("tooltip",
                function(e) {
                    u.set("content", e)
                }),
                i.$observe("tooltipEnable",
                function(e) {
                    "string" == typeof e && (e = "false" !== e),
                    void 0 !== e && u.set("enable", e)
                }),
                e.$on("$destroy",
                function() {
                    u.destroy()
                })
            }
        }
    }];
    e.exports = a
},
function(e, t) {},
,
function(e, t) {
    "use strict";
    var n = function(e, t) {
        this.host = e.replace(/^https?:/, window.location.protocol),
        this.machine = t
    },
    a = function(e, t) {
        var n = arguments.length <= 2 || void 0 === arguments[2] ? {}: arguments[2],
        a = t(),
        r = localStorage.getItem("GEOHASH");
        n.orderId && (a["x-shard"] = "eosid=" + n.orderId),
        n.shopId && (a["x-shard"] = "shopid=" + n.shopId);
        var i = a["x-shard"];
        if (r) {
            var o = Geohash.decode(r)[0],
            s = Geohash.decode(r)[1];
            a["x-shard"] ? a["x-shard"] = i + ";loc=" + s + "," + o: a["x-shard"] = "loc=" + s + "," + o
        }
    },
    r = n.prototype;
    r._fetch = function() {
        var e = [].slice.call(arguments);
        return e[0] = this.host + e[0],
        this.machine.apply(this, e)
    },
    r.registerProvider = function() {
        return this.loginProvider("register")
    },
    r.biddingProvider = function() {
        return this._fetch("shopping/restaurant/:restaurant_id/menu/click", {
            restaurant_id: "@rstId"
        })
    },
    r.loginProvider = function(e) {
        return e = e || "login",
        this._fetch("v1/" + e + "/:mobile", {
            mobile: "@mobile"
        })
    },
    r.logoutProvider = function() {
        return this.loginProvider("logout")
    },
    r.reverseGeoProvider = function() {
        return this._fetch("bgs/poi/reverse_geo_coding")
    },
    r.profileProvider = function() {
        return this._fetch("v1/user/:action", {
            action: "@action"
        })
    },
    r.existsProvider = function() {
        return this._fetch("v1/users/exists", {
            type: "@type"
        })
    },
    r.hongbaoProvider = function() {
        return this._fetch("v1/users/:userId/hongbao/:action", {
            userId: "@userId",
            action: "@action"
        })
    },
    r.messageProvider = function() {
        return this._fetch("v1/users/:userId/messages/:messageId/:action", {
            userId: "@userId",
            messageId: "@messageId"
        })
    },
    r.mobileVerifyProvider = function() {
        return this._fetch(":version/mobile/verify_code/:action", {
            action: "@action",
            version: "@version"
        })
    },
    r.emailVerifyProvider = function() {
        return this._fetch("v1/email/verify_code/:action", {
            action: "@action"
        })
    },
    r.captchaProvider = function() {
        return this._fetch("v1/captchas/:hash")
    },
    r.vipProvider = function() {
        return this._fetch("v1/premium_vips/:action", {
            action: "@action"
        })
    },
    r.activityProvider = function() {
        return this._fetch("v1/activities/:nameForUrl", {},
        {
            query: {
                method: "GET",
                cache: 1,
                isArray: 1,
                withCredentials: !0
            }
        })
    },
    r.contentProvider = function() {
        return this._fetch("v1/content")
    },
    r.templateProvider = function() {
        return this._fetch("v1/template/:id")
    },
    r.foodProvider = function() {
        return this._fetch("v1/foods/:nameForUrl")
    },
    r.foodRatingProvider = function() {
        return this._fetch("v1/foods/:foodId/ratings/:method")
    },
    r.ugcFoodRatingProvider = function() {
        return this._fetch("ugc/v2/food/ratings")
    },
    r.shoppingFoodProvider = function() {
        return this._fetch("shopping/v1/foods")
    },
    r.foodPhotoProvider = function() {
        return this._fetch("v1/foods/:foodId/photos/:method")
    },
    r.addressProvider = function() {
        return this._fetch("v1/users/:userId/addresses/:addressId", {
            userId: "@userId",
            addressId: "@addressId"
        })
    },
    r.cartAddressProvider = function() {
        return this._fetch("v1/carts/:cartId/addresses", {
            cartId: "@cartId"
        })
    },
    r.placeProvider = function() {
        return this._fetch("v1/users/:userId/places/", {
            userId: "@userId"
        },
        {
            query: {
                method: "GET",
                cache: 1,
                isArray: 1,
                withCredentials: !0
            }
        })
    },
    r.poiProvider = function() {
        return this._fetch(":version/pois/:extra", {
            extra: "@extra",
            version: "v1"
        },
        {
            query: {
                method: "GET",
                cache: 1,
                isArray: 1,
                withCredentials: !0
            }
        })
    },
    r.orderProvider = function() {
        var e = this;
        return function(t) {
            return e._fetch(":version/users/:userId/orders/:filter/:action/:extra", {
                userId: "@userId",
                filter: "@filter",
                action: "@action",
                extra: "@extra",
                version: "v1"
            },
            {
                get: {
                    withCredentials: !0,
                    transformRequest: function(e, n) {
                        return t && a(e, n, {
                            orderId: t
                        }),
                        angular.toJson(e)
                    }
                },
                post: {
                    method: "POST",
                    withCredentials: !0,
                    transformRequest: function(e, n) {
                        return t && a(e, n, {
                            orderId: t
                        }),
                        angular.toJson(e)
                    }
                }
            })
        }
    },
    r.refundingProvider = function() {
        return this._fetch("v1/users/:userId/orders/:filter/refunding", {
            userId: "@userId",
            filter: "@filter"
        })
    },
    r.complaintProvider = function() {
        return this._fetch("v1/users/:userId/orders/:orderId/complaint", {
            userId: "@userId",
            orderId: "@orderId"
        })
    },
    r.ratingProvider = function() {
        return this._fetch(":version/users/:userId/orders/:orderId/ratings", {
            version: "v2",
            userId: "@userId",
            orderId: "@orderId"
        })
    },
    r.unratePointProvider = function() {
        return this._fetch("v4/users/:userId/total_point")
    },
    r.favorProvider = function() {
        return this._fetch("v1/users/:userId/favor/:filter/:filterId", {
            userId: "@userId",
            filter: "@filter",
            filterId: "@filterId"
        },
        {
            query: {
                method: "GET",
                cache: 1,
                isArray: 1,
                withCredentials: !0
            }
        })
    },
    r.ugcFavorProvider = function() {
        return this._fetch("ugc/v2/user/:userId/favor/restaurants", {
            userId: "@userId"
        },
        {
            query: {
                method: "GET",
                cache: 1,
                isArray: 1,
                withCredentials: !0
            }
        })
    },
    r.cityProvider = function() {
        return this._fetch("v1/cities/:cityId")
    },
    r.citiesProvider = function() {
        return this._fetch("shopping/v1/cities/:extra", {
            extra: "@extra"
        })
    },
    r.restaurantProvider = function() {
        return this._fetch(":version/restaurants/:nameForUrl/:id/:action", {
            version: "v3"
        })
    },
    r.shopComplaintProvider = function() {
        return this._fetch("ugc/users/:userId/restaurants/:rstId/complaints", {
            userId: "@userId",
            rstId: "@rstId"
        })
    },
    r.shoppingRestaurantsProvider = function() {
        return this._fetch("shopping/restaurants/:action/:extra", {
            action: "@action",
            extra: "@extra",
            terminal: "web"
        })
    },
    r.shoppingRestaurantProvider = function() {
        var e = this;
        return function(t) {
            return e._fetch("shopping/restaurant/:id", {},
            {
                get: {
                    transformRequest: function(e, n) {
                        return a(e, n, {
                            shopId: t
                        }),
                        angular.toJson(e)
                    }
                }
            })
        }
    },
    r.shoppingRstProvider = function() {
        var e = this;
        return function(t) {
            return e._fetch("shopping/v2/menu", {},
            {
                query: {
                    method: "get",
                    isArray: !0,
                    transformRequest: function(e, n) {
                        return a(e, n, {
                            shopId: t
                        }),
                        angular.toJson(e)
                    }
                }
            })
        }
    },
    r.ugcProvider = function() {
        var e = this;
        return function(t) {
            return e._fetch("ugc/v1/restaurant/:id/:action", {},
            {
                query: {
                    method: "get",
                    withCredentials: !0,
                    isArray: !0,
                    transformRequest: function(e, n) {
                        return a(e, n, {
                            shopId: t
                        }),
                        angular.toJson(e)
                    }
                }
            })
        }
    },
    r.rstCategoryProvider = function() {
        return this._fetch("shopping/v2/restaurant/category/")
    },
    r.cartProvider = function() {
        var e = localStorage.getItem("CURRENT_RESTAURANT_ID");
        return this._fetch("v1/carts/:cartId/:listName/:action", {
            cartId: "@cartId",
            action: "@action",
            _method: "@_method"
        },
        {
            post: {
                method: "post",
                withCredentials: !0,
                transformRequest: function(t, n) {
                    return a(t, n, {
                        shopId: e
                    }),
                    angular.toJson(t)
                }
            }
        })
    },
    r.cartOrderProvider = function() {
        var e = localStorage.getItem("CURRENT_RESTAURANT_ID");
        return this._fetch("v1/users/:userId/carts/:cartId/orders", {
            userId: "@userId",
            cartId: "@cartId"
        },
        {
            post: {
                method: "post",
                withCredentials: !0,
                transformRequest: function(t, n) {
                    return a(t, n, {
                        shopId: e
                    }),
                    angular.toJson(t)
                }
            }
        })
    },
    r.paymentsProvider = function() {
        var e = localStorage.getItem("CURRENT_RESTAURANT_ID");
        return this._fetch("bos/v1/users/:user_id/orders/:order_id/mainsite_payments", {},
        {
            getText: {
                transformResponse: function(e) {
                    return {
                        data: angular.fromJson(e)
                    }
                },
                transformRequest: function(t, n) {
                    a(t, n, {
                        shopId: e
                    })
                },
                withCredentials: !0
            }
        })
    },
    r.historyProvider = function() {
        return this._fetch("v1/users/:userId/places")
    },
    r.csrfProvider = function() {
        return this._fetch("v1/csrf_token")
    },
    r.balanceRecordsProvider = function() {
        return this._fetch("v1/users/:userId/balance_records")
    },
    r.chargeProvider = function() {
        return this._fetch("v1/user/balance/charge")
    },
    r.withdrawProvider = function() {
        return this._fetch("v1/user/balance/withdraw/:action", {
            action: "@action"
        })
    },
    r.giftProvider = function() {
        return this._fetch("member/v1/gifts/:giftId", {
            giftId: "@giftId"
        })
    },
    r.giftActionProvider = function() {
        return this._fetch("member/v1/users/:userId/gifts/:giftId/:action", {
            userId: "@userId",
            giftId: "@giftId",
            action: "@action"
        })
    },
    r.inviteProvider = function() {
        return this._fetch("v1/users/:userId/invitations/:action")
    },
    r.pointRecordsProvider = function() {
        return this._fetch("v1/users/:userId/point_change_records", {
            userId: "@userId"
        })
    },
    r.feedbackProvider = function() {
        return this._fetch("v1/users/:userId/feedbacks", {
            userId: "@userId"
        })
    },
    r.payRecordProvider = function() {
        return this._fetch("v1/users/:userId/payrecords/:payId", {
            userId: "@userId",
            payId: "@payId"
        })
    },
    r.invoiceProvider = function() {
        var e = localStorage.getItem("CURRENT_RESTAURANT_ID");
        return this._fetch("v1/users/:userId/invoices/:invoiceId", {
            userId: "@userId",
            invoiceId: "@invoiceId"
        },
        {
            query: {
                method: "GET",
                isArray: !0,
                transformRequest: function(t, n) {
                    return a(t, n, {
                        shopId: e
                    }),
                    angular.toJson(t)
                }
            }
        })
    },
    r.shopRatingScoreProvider = function() {
        var e = this;
        return function(t) {
            return e._fetch("ugc/v1/restaurants/:restaurant_id/rating_scores", {
                restaurant_id: "@restaurant_id"
            },
            {
                get: {
                    transformRequest: function(e, n) {
                        return a(e, n, {
                            shopId: t
                        }),
                        angular.toJson(e)
                    }
                }
            })
        }
    };
    var i = "ele.me";
    /alpha/.test(document.domain) && (i = "alpha.elenet.me"),
    /beta/.test(document.domain) && (i = "beta.elenet.me");
    var o = angular.module("eleme.zero", ["ngResource"]),
    s = "//mainsite-restapi." + i + "/",
    c = window.API_CONFIG || {};
    c.API_PREFIX && (s = c.API_PREFIX + "/"),
    o.config(["$resourceProvider",
    function(e) {
        e.defaults.actions.put = {
            method: "PUT"
        },
        e.defaults.actions.post = {
            method: "POST"
        },
        e.defaults.actions.patch = {
            method: "PATCH"
        };
        for (var t in e.defaults.actions) e.defaults.actions[t].withCredentials = !0,
        e.defaults.actions[t].transformRequest = function(e, t) {
            return a(e, t),
            angular.toJson(e)
        }
    }]).provider("Zero", {
        host: s,
        setHost: function(e) {
            e && (this.host = e)
        },
        $get: ["$resource",
        function(e) {
            var t = new n(this.host, e),
            a = {};
            for (var r in t) / Provider$ / .test(r) && (a[r.slice(0, -8)] = t[r]());
            return a
        }]
    }),
    e.exports = o
},
function(e, t, n) {
    "use strict";
    console.info("看代码，来投简历啊~\n\n %cguanghui.ren@ele.me", "color: #3190e8; font-size: 30px; font-family: sans-serif");
    var a = angular.module("eleme.page", []).factory("RestaurantWrapper", n(62)).factory("PlaceStorage", n(63)).factory("User", n(65)).factory("Address", n(66)).factory("Loading", n(90)).factory("LocalCart", n(91)).factory("MessageManager", n(92).MessageManager).factory("MessageManager.Message", n(92).Message).factory("getFootPrint", n(93).getFootPrint).factory("setFootPrint", n(93).setFootPrint).factory("FormModel", n(94).FormModel).factory("bindValidateEvent", n(94).bindValidateEvent).directive("formField", n(94).formFiled).factory("SEO",
    function() {
        return {
            title: "饿了么-网上订餐_外卖_饿了么订餐官网",
            description: "饿了么是中国专业的网上订餐平台，目前已覆盖北京、上海、杭州、广州等300多个城市，提供各类中式、日式、韩式、西式、下午茶、夜宵等优质美食，并提供送餐上门服务，让订餐更加轻松，叫外卖就上饿了么！",
            keywords: "饿了么，网上订餐，外卖，快餐外卖，外卖网"
        }
    }).directive("elemeTopbar", n(98)).directive("elemeSidebar", n(113)).directive("elemeFooter", n(126)).directive("rateStar", n(132)).directive("rstView", n(136)).directive("rstBlock", n(139)).directive("showFetchTakeoutDialog", n(142)).directive("mobileVerifyField", n(147).mobileVerifyField).directive("emailVerifyField", n(147).emailVerifyField).directive("securityVerifyForm", n(154)).directive("countdown", n(156)).factory("captchaModal", n(157)).directive("location", n(161)).directive("onlineService", n(165)).directive("elemeImportantnotification", n(166)).directive("nodatatip", n(170)).directive("content2qrcode", n(176)).directive("loading", n(178)).directive("formselect", n(183)).directive("rate", n(187)).factory("escapeHtml",
    function() {
        return function(e) {
            return e.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }
    }).factory("notifyServerError", ["MessageBox", "escapeHtml",
    function(e, t) {
        return function(n, a, r) {
            var i = n.data;
            a = a || "服务器好像饿晕了",
            i && (i.name && "HTTP" !== i.name.substr(0, 4) ? e(t(a), t(r || i.message), "error") : (e("服务器好像饿晕了", "很抱歉，系统出现问题，请稍后再试", "error"), setTimeout(function() {
                throw JSON.stringify(n.data)
            })))
        }
    }]).filter("imgOptimize", ["$rootScope",
    function(e) {
        return function(t) {
            if (t) {
                var n = e.FUSSBASE,
                a = t.match(/\|(\d+)x(\d+)/),
                r = /\/dist|static\.alpha\.elenet\.me|static\.beta\.elenet\.me|static\.elenet\.me|static11\.elemecdn\.com|faas\.elemecdn\.com|cdn\.faas\.elenet\.me/.test(t);
                if (r) return t.replace(/\|(\d+)x(\d+)/, "");
                if (t = n + t.replace("http:", "").replace(n, "").replace(/^(\w)(\w\w)(\w{29}(\w*))(.+)?$/, "/$1/$2/$3.$4"), !a) return "" + t + (e.supportedWebp ? "?imageMogr2/format/webp/quality/85": "");
                var i = t.split("|")[0],
                o = a[1],
                s = a[2],
                c = e.isRetina ? 2 : 1;
                return i += "?imageMogr2/thumbnail/" + o * c + "x" + s * c,
                e.supportedWebp && (i += "/format/webp/quality/85"),
                i
            }
        }
    }]).filter("toTrusted", ["$sce",
    function(e) {
        return function(t) {
            return e.trustAsHtml(t)
        }
    }]).filter("mobileMask",
    function() {
        return function(e) {
            if (e) return e.replace(/^(\w{3})(\w{4})/, "$1****")
        }
    }).directive("cuteTitle", ["SEO",
    function(e) {
        return function(t, n, a) {
            var r = a.cuteTitle || "记得回来点单哦！ - 饿了么",
            i = e.title || document.title;
            t.$watch("SEO.title",
            function(e, t) {
                e !== t && (i = e)
            }),
            angular.$(document).on("visibilitychange",
            function() {
                document.title = "hidden" === document.visibilityState ? r: i
            })
        }
    }]).directive("dynamicMeta",
    function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                t.remove();
                var a = n.name,
                r = document.createElement("meta");
                r.setAttribute("name", a);
                var i = "SEO['" + a + "']";
                e.$watch(i,
                function(e) {
                    r.insert ? r.setAttribute("content", e) : (r.setAttribute("content", e), document.querySelector("head").appendChild(r), r.insert = !0)
                })
            }
        }
    }).directive("hardjump",
    function() {
        return {
            link: function(e, t, n) {
                t.on("click",
                function(e) {
                    e.preventDefault(),
                    location.href = n.href
                })
            }
        }
    }).run(["$rootScope", "$location", "User", "$q", "SEO", "$sce", "httphook", "PlaceStorage", "MessageBox", "UBT",
    function(e, t, n, a, r, i, o, s, c, l) {
        l.params.city_id = function() {
            return localStorage.getItem("CITY_ID")
        },
        e.geohash = localStorage.getItem("GEOHASH"),
        e.$watch("geohash",
        function(t) {
            e.place = s(t)
        }),
        e.isRetina = document.defaultView && document.defaultView.devicePixelRatio > 1,
        e.supportedWebp = !1;
        var u = new Image;
        u.onload = function() {
            e.supportedWebp = !0
        },
        u.onerror = function() {
            e.supportedWebp = !1
        },
        u.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA==",
        e.SEO = r,
        e.user = n,
        e.$on("$routeChangeStart",
        function(n, a) {
            c.close(),
            e.routepath = a.$$route ? a.$$route.originalPath.slice(1).split(/\W+/g) : [],
            e.locationpath = t.path().slice(1).split(/\W+/g)
        }),
        e.$on("$routeChangeSuccess",
        function() {
            return window.scrollTo(0, 0)
        });
        var d = location.protocol,
        f = document.domain.replace(/www\./, "");
        e.ROOTHOST = f,
        e.ROOTBASE = d + "//" + document.domain,
        e.PAYMENTBASE = d + "//p." + f,
        e.MOBILEBASE = d + "//m." + f,
        e.PAYMAINBASE = "https://v5." + f,
        e.ACCOUNTBASE = "//h5." + f + "/",
        /alpha/.test(document.domain) && (e.ACCOUNTBASE = "//h5.alpha.elenet.me"),
        /beta/.test(document.domain) && (e.ACCOUNTBASE = "//h5.beta.elenet.me"),
        e.LOGINFRAME = i.trustAsResourceUrl(e.ACCOUNTBASE),
        void
        function() {
            var t = ["//fuss10.elemecdn.com", "//fuss2." + e.ROOTHOST],
            n = 0;
            void
            function a() {
                var r = t[n++];
                if (r) {
                    var i = new Image;
                    i.onerror = function() {
                        e.$apply(a)
                    },
                    i.src = e.FUSSBASE = r
                }
            } ()
        } ();
        var p = 2e4;
        o(/^/, /^/,
        function(e) {
            e.creationTime = new Date,
            setTimeout(function() {
                e.creationTime && c({
                    title: "请求超时",
                    message: "您的网络有点慢，请重新刷新试试",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonText: "刷新",
                    cancelButtonText: "继续等待"
                },
                function(e) {
                    "confirm" === e && location.reload()
                })
            },
            p)
        },
        function(e) {
            delete e.creationTime
        })
    }]);
    e.exports = a
},
function(e, t) {
    "use strict";
    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0,
            n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var a = function() {
        function e(t) {
            if (t instanceof Array) angular.forEach(t, e);
            else for (var n in e) t[n] = e[n](t)
        }
        return e.activities = function(e) {
            var t, a = [],
            r = [],
            i = e.supports.reduce(function(e, t) {
                return e[t.icon_name] = t,
                e
            },
            {}); ["保", "付", "票", "赔"].forEach(function(e) {
                e in i && (r.push(i[e]), delete i[e])
            });
            var o = Object.keys(i).map(function(e) {
                return i[e]
            });
            return e.restaurant_activity = e.restaurant_activity || [],
            e.food_activity = e.food_activity || [],
            (t = a).push.apply(t, n(e.restaurant_activity).concat(n(e.food_activity), n(o))),
            e.is_new && a.push({
                name: "新开商家",
                description: "新店开张，欢迎光临",
                icon_color: "E75959",
                icon_name: "新"
            }),
            r = r.map(function(e) {
                return angular.extend({
                    style: {
                        background: "#fff",
                        color: "#" + e.icon_color,
                        border: "1px solid",
                        padding: 0
                    }
                },
                e)
            }),
            a = a.map(function(e) {
                return angular.extend({
                    style: {
                        background: "#" + e.icon_color
                    }
                },
                e)
            }),
            [].concat(n(a), n(r))
        },
        e.is_opening = function(e) {
            return /^[1356]$/.test(e.status)
        },
        e.order_lead_time = function(e) {
            return e.order_lead_time || 1 / 0
        },
        e.order_lead_time_text = function(e) {
            return e.order_lead_time && isFinite(e.order_lead_time) ? e.order_lead_time > 45 ? "45+": e.order_lead_time: ""
        },
        e.next_time = function(e) {
            var t, n = e.opening_hours,
            a = new Date(Date.now() + 288e6).toISOString().match(/..:../)[0];
            if (n.some(function(e) {
                if (a < e) return t = e.match(/..:../)[0],
                !0
            }), t) return t;
            var r = n.length && n[0].match(/..:../)[0];
            return r ? r: void setTimeout(function() {
                throw new Error('Dirty Data: "opening_hours" on restaurant id ' + e.id)
            })
        },
        e
    };
    e.exports = a
},
function(e, t, n) {
    "use strict";
    var a = n(64),
    r = ["$q", "Zero",
    function(e, t) {
        var n = "PLACESTORAGE",
        r = function(r) {
            if (r) {
                var i = n + "[" + r + "]",
                o = angular.copy(a(i));
                if (o.$resolved = !1, "name" in o && "address" in o && "plainCount" in o && "premiumCount" in o && "latitude" in o && "longitude" in o && "city_id" in o) o.$promise = e.all();
                else {
                    var s = {
                        type: "geohash",
                        geohash: r
                    };
                    o.$promise = e.all([t.poi.get({
                        version: "v2",
                        extra: r
                    }).$promise, t.restaurant.get(angular.extend({
                        is_premium: 0,
                        action: "count"
                    },
                    s)).$promise, t.restaurant.get(angular.extend({
                        is_premium: 1,
                        action: "count"
                    },
                    s)).$promise, t.poi.get({
                        extra: r
                    }).$promise]).then(function(e) {
                        var t = e[0],
                        n = a(i);
                        n = angular.extend(n, t),
                        n.adInfo = e[3].ad_info,
                        n.plainCount = e[1].count,
                        n.premiumCount = e[2].count,
                        angular.extend(o, n)
                    })
                }
                return o.$promise = o.$promise.then(function() {
                    return o.$resolved = !0,
                    o
                }),
                o
            }
        };
        return r
    }];
    e.exports = r
},
function(e, t) {
    var n;
    void
    function() {
        var e = {};
        n = function(t) {
            var n;
            if (t in e) return e[t];
            try {
                if (n = JSON.parse(localStorage.getItem(t)), !n || "object" != typeof n) throw 0
            } catch(e) {
                n = {}
            }
            return setTimeout(function() {
                delete e[t],
                localStorage.setItem(t, JSON.stringify(n))
            }),
            e[t] = n
        }
    } (),
    e.exports = n
},
function(e, t) {
    "use strict";
    var n = ["$q", "Zero", "httphook", "$rootScope", "$cookies",
    function(e, t, n, a, r) {
        var i = "USER",
        o = function() {
            var t = this,
            a = /(?:^|; )USERID=/.test(document.cookie);
            a || localStorage.removeItem(i),
            this.$promise = e.all().then(function() {
                var n = JSON.parse(localStorage.getItem(i)) || "";
                return ! n && r.USERID && (n = {
                    user_id: r.USERID
                }),
                n && n.user_id ? angular.extend(t, n) : e.reject()
            }),
            this.fetch(),
            n.get(/^\/restapi\/v1\/users/, null,
            function(e, n) {
                401 === n.status && t.reset()
            })
        };
        return o.prototype.reset = function() {
            localStorage.removeItem(i);
            for (var e in this)"$promise" !== e && this.hasOwnProperty(e) && delete this[e];
            return document.cookie = "USERID=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; Domain=" + a.ROOTHOST,
            this
        },
        o.prototype.fetch = function() {
            var n = this;
            return this.$promise = t.profile.get({
                "extras[]": ["premium_vip", "is_auto_generated"]
            }).$promise.then(function(e) {
                return delete e.$promise,
                localStorage.setItem(i, JSON.stringify(e)),
                document.cookie = ["USERID=" + e.user_id, "Domain=" + a.ROOTHOST, "Path=/", "Expires=" + new Date((new Date).getTime() + 2592e6).toGMTString()].join("; "),
                angular.extend(n, e)
            },
            function(t) {
                return n.reset(),
                e.reject(t)
            }),
            this
        },
        o.prototype.securityLevel = function() {
            return this.$promise.then(function(e) {
                var t = !e.is_auto_generated.password,
                n = e.is_mobile_valid,
                a = e.is_email_valid,
                r = e.payment_quota > 0,
                i = 0,
                o = [20, 40, 20, 10],
                s = [0, 40, 70, 100]; [t, n, a, r].forEach(function(e, t) {
                    e && (i += o[t])
                }),
                i += 10;
                var c = 0;
                return s.every(function(e, t) {
                    return ! (e >= i) || void(c = t)
                }),
                {
                    number: c,
                    score: i
                }
            })
        },
        new o
    }];
    e.exports = n
},
function(e, t, n) {
    "use strict";
    n(67);
    var a = n(69),
    r = ["$rootScope", "$q", "Zero", "User", "MessageBox", "notifyServerError",
    function(e, t, n, r, i, o) {
        var s = {};
        s.init = function(e) {
            return a.init(e)
        };
        var c = function(e, t) {
            return r.$promise.then(function(e) {
                return e.user_id
            },
            function() {
                return "anonymous"
            }).then(function(a) {
                return n.address[e]({
                    userId: a,
                    addressId: t.id,
                    name: t.name,
                    phone: t.phone,
                    phone_bk: t.phone_bk,
                    address_detail: t.address_detail,
                    address: t.address,
                    geohash: t.geohash,
                    poi_type: t.poi_type,
                    need_info: t.need_info,
                    st_geohash: t.st_geohash,
                    sex: t.sex
                }).$promise
            }).
            catch(function(e) {
                return o(e)
            })
        };
        return s.get = function(e) {
            return r.$promise.then(function(e) {
                return e.user_id
            },
            function() {
                return "anonymous"
            }).then(function(t) {
                return "anonymous" !== t ? n.address.query(angular.extend({
                    userId: t
                },
                e)).$promise: []
            }).
            catch(function(e) {
                return o(e)
            })
        },
        s.add = function(e, t) {
            return a.showFormDialog({
                title: "添加新地址",
                onConfirm: function(n) {
                    return c("post", angular.extend(n, {
                        need_info: 1
                    })).then(function(n) {
                        if (a.hideFormDialog(), e && e(n), t) {
                            var r = setTimeout(function() {
                                return i.close()
                            },
                            5e3);
                            i({
                                title: "恭喜，你的地址修改成功啦",
                                message: "5秒后自动返回",
                                type: "success"
                            },
                            function() {
                                return clearTimeout(r)
                            })
                        }
                    })
                }
            })
        },
        s.edit = function(e, t, n) {
            a.showFormDialog({
                title: "编辑地址",
                address: e,
                onConfirm: function(e) {
                    return c("put", angular.extend(e, {
                        need_info: !0
                    })).then(function(e) {
                        if (t && t(e), a.hideFormDialog(), n) {
                            var r = setTimeout(function() {
                                return i.close()
                            },
                            5e3);
                            i({
                                title: "恭喜，你的地址修改成功啦",
                                message: "5秒后自动返回",
                                type: "success"
                            },
                            function() {
                                return clearTimeout(r)
                            })
                        }
                    })
                }
            })
        },
        s.remove = function(e) {
            return c("delete", e)
        },
        s
    }];
    e.exports = r
},
function(e, t) {},
,
function(e, t, n) {
    var a = n(70),
    r = n(72),
    i = n(73),
    o = n(78),
    s = n(81),
    c = n(76),
    l = n(77),
    u = n(75),
    d = {
        init: function(e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            if (this.userId && a.init(this.userId), this.geohash && r.init(this.geohash), this.poiOnly) {
                var n = this.restaurantName;
                /肯德基/.test(n) ? this.restaurantName = "肯德基": /必胜客/.test(n) && (this.restaurantName = "必胜客")
            }
        },
        getFormDialog: function() {
            var e = this.formDialog,
            t = this;
            if (!e) {
                var n = i.extend({
                    afterHide: function() {
                        i.prototype.afterHide.apply(this, arguments),
                        t.currentFormOptions = null
                    },
                    renderContent: function() {
                        var e = this.refs,
                        n = e.content,
                        a = this,
                        r = new s({
                            restaurantName: t.restaurantName,
                            geohash: t.geohash,
                            strictMode: !!t.poiOnly,
                            onConfirm: function(e) {
                                if (t.currentFormOptions) {
                                    var n = t.currentFormOptions.onConfirm;
                                    n && n(e)
                                }
                            },
                            onCancelClick: function() {
                                a.hide()
                            }
                        });
                        t.addressForm = r,
                        r.mount(n)
                    }
                });
                e = this.formDialog = new n
            }
            return e
        },
        getListDialog: function() {
            var e = this.listDialog,
            t = this;
            if (!e) {
                var n = i.extend({
                    afterHide: function() {
                        i.prototype.afterHide.apply(this, arguments),
                        t.currentListOptions = null
                    },
                    renderContent: function() {
                        var e = this.refs,
                        n = e.element,
                        r = new o({
                            restaurantName: t.restaurantName,
                            onSelectionChange: function() {
                                var t = this.getSelectedAddress();
                                t ? u.removeClass(e.confirm, "disabled") : u.addClass(e.confirm, "disabled")
                            },
                            strictMode: !!t.poiOnly,
                            onUpdateClick: function(e) {
                                t.showFormDialog({
                                    update: !0,
                                    title: "修改地址",
                                    address: e,
                                    onConfirm: function(e) {
                                        a.update(e,
                                        function(n) {
                                            r.updateAddressForBlock(e),
                                            t.hideFormDialog()
                                        })
                                    }
                                })
                            },
                            onModifyClick: function(e) {
                                t.showFormDialog({
                                    title: "修改地址",
                                    address: e,
                                    onConfirm: function(e) {
                                        a.update(e,
                                        function(n) {
                                            r.updateAddressForBlock(e),
                                            t.hideFormDialog()
                                        })
                                    }
                                })
                            }
                        });
                        r.mount(e.content),
                        t.addressList = r;
                        var i = c({
                            tag: "div",
                            className: "addresslist-dialog-buttons",
                            content: [{
                                tag: "button",
                                className: "confirm",
                                key: "confirm",
                                content: "确认"
                            },
                            {
                                tag: "button",
                                className: "add",
                                key: "add",
                                content: "+新增地址"
                            }]
                        },
                        e);
                        l.on(e.confirm, "click",
                        function() {
                            var e = r.getSelectedAddress();
                            e && t.currentListOptions && t.currentListOptions.onConfirm && t.currentListOptions.onConfirm(e)
                        }),
                        l.on(e.add, "click",
                        function() {
                            t.showFormDialog({
                                onConfirm: function(e) {
                                    a.add(e,
                                    function(n) {
                                        e.id = n.address_id,
                                        t.addressList && (t.addressList.state.addresses.unshift(e), t.addressList.setSelectedAddress(e)),
                                        t.hideFormDialog()
                                    })
                                }
                            })
                        }),
                        n.appendChild(i),
                        n.className += " addresslist-dialog"
                    }
                });
                e = this.listDialog = new n({
                    title: "选择送达地址"
                })
            }
            return e
        },
        showDialog: function(e) {
            this.userId ? this.showListDialog(e) : this.showFormDialog(e)
        },
        hideDialog: function() {
            this.userId ? this.hideListDialog() : this.hideFormDialog()
        },
        showListDialog: function(e) {
            var t = this.getListDialog();
            if (t.show(), e = e || {},
            this.currentListOptions = e, this.userAddressLoaded) this.addressList.setSelectedAddress(e.selectedAddressId || null);
            else {
                var n = this;
                a.getList(function(t) {
                    n.addressList.setAddresses(t),
                    n.addressList.setSelectedAddress(e.selectedAddressId || null)
                }),
                this.userAddressLoaded = !0
            }
        },
        hideListDialog: function() {
            var e = this.getListDialog();
            e.hide()
        },
        showFormDialog: function(e) {
            e = e || {};
            var t = e.title || "新增地址",
            n = e.address,
            a = !!e.update;
            this.currentFormOptions = e;
            var r = this.getFormDialog();
            r.set("title", t),
            r.show(),
            this.addressForm.reset(n),
            !this.poiOnly && n && 1 === n.poi_type && n.geohash && this.addressForm.showMap(n.geohash, !1),
            a && this.addressForm.showUpdateTip()
        },
        hideFormDialog: function() {
            var e = this.getFormDialog();
            e.hide()
        }
    };
    window.UserAddress = d,
    e.exports = d
},
function(e, t, n) {
    var a = n(71),
    r = document.domain.replace(/^(.+?\.)??(?=(test\.|alpha\.|beta\.)?[^.]+\.\w+$)/, ""),
    i = {
        init: function(e) {
            this.userId = e,
            this.url = "//mainste-restapi." + r + "/v1/users/" + e + "/addresses"
        },
        send: function() {
            if (!this.userId) throw new Error("userId is required!");
            a.apply(null, arguments)
        },
        getList: function(e) {
            this.send(this.url, "get", null,
            function(t) {
                t = t || [];
                for (var n = 0,
                a = t.length; n < a; n++) {
                    var r = t[n];
                    r.geohash = r.st_geohash,
                    r.address && !r.address_detail && (r.address_detail = r.address, r.address = "")
                }
                "function" == typeof e && e(t)
            })
        },
        add: function(e, t) {
            this.send(this.url, "post", e, t)
        },
        update: function(e, t) {
            this.send(this.url + "/" + (e.id || e.addressId), "put", e, t)
        },
        remove: function(e, t) {
            this.send(this.url + "/" + e.id, "delete", null, t)
        }
    };
    e.exports = i
},
function(e, t) {
    var n = function(e, t, n, a) {
        var r = new XMLHttpRequest;
        if (t = t ? t: "get", t = t.toUpperCase(), "GET" === t) {
            var i;
            if (n) {
                var o = [];
                for (var s in n) n.hasOwnProperty(s) && o.push(s + "=" + encodeURIComponent(n[s]));
                i = o.join("&")
            } else i = +new Date;
            e += "?" + i
        }
        r.open(t, e, !0),
        r.onreadystatechange = function() {
            if (4 == r.readyState) if (r.status < 400) {
                var e = r.responseText;
                try {
                    e = JSON.parse(e)
                } catch(e) {}
                a && a(e)
            } else console && console.log && console.log("error:", r.responseText)
        },
        r.withCredentials = !0,
        n && "GET" !== t ? (r.setRequestHeader("Content-type", "application/json;charset=UTF-8"), n = n || {},
        n._method = t, r.send(JSON.stringify(n))) : r.send()
    };
    e.exports = n
},
function(e, t, n) {
    var a = n(71),
    r = document.domain.replace(/^(.+?\.)??(?=(test\.|alpha\.|beta\.)?[^.]+\.\w+$)/, ""),
    i = {
        init: function(e) {
            this.geohash = e
        },
        search: function(e, t) {
            this.geohash && !e.geohash && (e.geohash = this.geohash),
            a("//mainsite-restapi." + r + "/v1/pois", "get", e, t)
        }
    };
    e.exports = i
},
function(e, t, n) {
    var a = (n(74), n(76)),
    r = n(77),
    i = Popup.extend({
        defaults: {
            modal: !0,
            target: "center",
            updatePositionOnResize: !0,
            hideOnPressEscape: !0,
            hideOnClickModal: !0,
            showAnimation: "pop",
            title: ""
        },
        refresh: function() {
            this.refs.title.innerHTML = this.get("title")
        },
        renderContent: function() {},
        render: function() {
            var e = this.refs = {},
            t = a({
                tag: "div",
                className: "addressdialog",
                key: "element",
                content: [{
                    tag: "div",
                    className: "addressdialog-close",
                    key: "close"
                },
                {
                    tag: "div",
                    className: "addressdialog-header",
                    key: "title",
                    content: this.get("title") || ""
                },
                {
                    tag: "div",
                    className: "addressdialog-content",
                    key: "content"
                }]
            },
            e),
            n = this;
            return r.on(e.close, "click",
            function() {
                n.hide()
            }),
            n.renderContent(),
            t
        }
    });
    e.exports = i
},
function(e, t, n) {
    var a = n(75),
    r = {};
    r.text = function(e, t) {
        t = t ? t: "",
        3 === e.nodeType ? e.nodeValue = t: e.innerText = e.textContent = t
    },
    r.html = function(e, t) {
        t = t ? t: "",
        e.innerHTML = t
    },
    r.show = function(e, t) {
        t = !!t,
        e.style.display = t ? "": "none"
    },
    r.hide = function(e, t) {
        t = !!t,
        e.style.display = t ? "none": ""
    },
    r.class = function(e, t, n) {
        t = !!t,
        t ? a.addClass(e, n) : a.removeClass(e, n)
    },
    r.attr = function(e, t, n) {
        t = void 0 === t || null === t ? "": "" + t,
        n && e.setAttribute(n, t)
    };
    var i = function(e, t, n, a) {
        var i = r[e];
        i && t && i(t, n, a)
    },
    o = function(e) {
        this.state = {},
        this.updateTimer = null;
        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
        this.binders || (this.binders = {})
    };
    o.prototype = {
        constructor: o,
        markDirty: function(e) {
            var t = this;
            t.dirtyProps || (t.dirtyProps = []),
            t.dirtyProps.indexOf(e) === -1 && t.dirtyProps.push(e),
            clearTimeout(t.updateTimer),
            t.updateTimer = null,
            t.updateTimer = setTimeout(function() {
                t.update(),
                t.updateTimer = null
            },
            16)
        },
        setState: function(e, t) {
            if ("string" == typeof e) this.state[e] = t,
            this.markDirty(e);
            else for (var n in e) e.hasOwnProperty(n) && this.setState(n, e[n])
        },
        render: function() {
            return document.createElement("div")
        },
        mount: function(e, t) {
            if (!this.rendered) {
                var n = this.element = this.render();
                this.doUpdate(),
                n && e && (t ? e.insertBefore(n, t) : e.appendChild(n)),
                this.rendered = !0
            }
        },
        unmount: function() {
            var e = this.element;
            e && e.parentNode.removeChild(e)
        },
        doUpdate: function(e) {
            function t(e, t) {
                if (t instanceof Array) for (var n = 0,
                a = t.length; n < a; n++) {
                    var r = t[n];
                    o(e, r)
                } else t && t.type && o(e, t)
            }
            var n = this,
            a = this.binders,
            r = this.refs || {},
            o = function(e, t) {
                var a = t.type,
                o = t.el,
                s = t.key,
                c = t.fn;
                "string" == typeof o && (o = r[o]);
                var l;
                l = "function" == typeof c ? c.call(n.state) : n.state[e],
                i(a, o, l, s)
            };
            if (e) for (var s = 0,
            c = e.length; s < c; s++) {
                var l = e[s];
                t(l, a[l])
            } else for (var l in a) t(l, a[l])
        },
        update: function() {
            var e = this;
            this.doUpdate(e.dirtyProps),
            e.dirtyProps = []
        }
    },
    e.exports = o
},
function(e, t) {
    "".trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "")
    });
    var n = function(e, t) {
        return e.classList ? e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") > -1
    },
    a = function(e, t) {
        for (var a = t.split(" "), r = e.className, i = 0, o = a.length; i < o; i++) {
            var s = a[i];
            s && (e.classList ? e.classList.add(s) : n(e, s) || (r += " " + s))
        }
        e.classList || (e.className = r)
    },
    r = function(e, t) {
        if (t) {
            for (var a = t.split(" "), r = " " + e.className + " ", i = 0, o = a.length; i < o; i++) {
                var s = a[i];
                s && (e.classList ? e.classList.remove(s) : n(e, s) && (r = r.replace(" " + s + " ", " ")))
            }
            e.classList || (e.className = r.trim())
        }
    };
    e.exports = {
        hasClass: n,
        addClass: a,
        removeClass: r
    }
},
function(e, t) {
    var n = function(e, t) {
        if (!e) return null;
        var a, r;
        if ("string" == typeof e) return document.createTextNode(e);
        if (e.tag) {
            a = document.createElement(e.tag);
            for (var i in e) if (e.hasOwnProperty(i)) {
                if ("content" === i || "tag" === i) continue;
                if ("key" === i && t) {
                    var o = e[i];
                    o && (t[o] = a);
                    continue
                }
                a[i] = e[i]
            }
            var s = e.content;
            if (s) if ("string" == typeof s) r = document.createTextNode(s),
            a.appendChild(r);
            else {
                s instanceof Array || (s = [s]);
                for (var c = 0,
                l = s.length; c < l; c++) {
                    var u = s[c];
                    r = n(u, t),
                    a.appendChild(r)
                }
            }
        }
        return a
    };
    e.exports = n
},
function(e, t) {
    var n = function() {
        return document.addEventListener ?
        function(e, t, n) {
            e.addEventListener(t, n, !1)
        }: function(e, t, n) {
            e.attachEvent("on" + t, n)
        }
    } (),
    a = function() {
        return document.removeEventListener ?
        function(e, t, n) {
            e.removeEventListener(t, n)
        }: function(e, t, n) {
            e.detachEvent("on" + t, n)
        }
    } (),
    r = function(e, t, r) {
        var i = function() {
            r && r.apply(this, arguments),
            a(e, t, i)
        };
        n(e, t, i)
    };
    e.exports = {
        on: n,
        off: a,
        once: r
    }
},
function(e, t, n) {
    var a = n(74),
    r = n(76),
    i = (n(77), n(79)),
    o = n(80),
    s = n(70),
    c = function(e) {
        this.strictMode = !1,
        a.call(this, e);
        var t = this.state.addresses = new i,
        n = this;
        t.$onMutate = function(e) {
            n.updateContent(e)
        },
        this.addressBlockMap = {}
    };
    c.prototype = new a,
    c.prototype.constructor = c,
    c.prototype.render = function() {
        var e = this.refs = {},
        t = r({
            tag: "div",
            className: "addresslist",
            key: "element"
        },
        e);
        return this.renderContent(),
        t
    };
    var l = [];
    c.prototype.createBlock = function(e) {
        var t = new o({
            strictMode: this.strictMode,
            restaurantName: this.restaurantName
        });
        t.setAddress(e);
        var n = this;
        return t.onClick = function() {
            t.state.maskVisible !== !0 && n.setSelection(t)
        },
        t.onRemoveConfirm = function() {
            var e = n.state.addresses;
            s.remove(t.address,
            function() {
                n.getSelectedAddress() === t.address && n.setSelection(null),
                e.splice(e.indexOf(t.address), 1)
            })
        },
        t.onModifyClick = function() {
            n.onModifyClick && n.onModifyClick(t.address)
        },
        t.onUpdateClick = function() {
            n.onUpdateClick && n.onUpdateClick(t.address)
        },
        t
    },
    c.prototype.updateAddressForBlock = function(e) {
        var t = this;
        if (e) {
            var n = t.addressBlockMap[e.id];
            n && n.setAddress(e)
        }
    },
    c.prototype.getSelectedAddress = function() {
        var e = this.state.selection;
        return e ? e.address: null
    },
    c.prototype.setSelectedAddress = function(e) {
        e || this.setSelection(null);
        for (var t, n = this.state.addresses,
        a = 0,
        r = n.length; a < r; a++) {
            var i = n[a];
            if ("string" == typeof e || "number" == typeof e) {
                if (i.id === Number(e)) {
                    t = this.addressBlockMap[i.id],
                    t && this.setSelection(t);
                    break
                }
            } else if (e && i === e) {
                t = this.addressBlockMap[i.id],
                t && this.setSelection(t);
                break
            }
        }
    },
    c.prototype.setSelection = function(e) {
        if (!this.strictMode || (!e || 1 !== e.address.poi_type) && e.address.geohash) {
            var t = this.state.selection;
            t && t.setState("selected", !1),
            e && e.setState("selected", !0),
            this.state.selection = e,
            this.onSelectionChange && this.onSelectionChange()
        }
    },
    c.prototype.setAddresses = function(e) {
        var t = this.state.addresses;
        e instanceof Array && t.push.apply(t, e)
    },
    c.prototype.updateContent = function(e) {
        if (this.rendered) {
            var t, n, a, r, i = e.inserted || l,
            o = e.removed || l,
            s = this.state.addresses,
            c = this.addressBlockMap,
            u = this.refs.element,
            d = this;
            for (t = 0, n = i.length; t < n; t++) {
                a = i[t],
                r = d.createBlock(a);
                var f, p = s.indexOf(a);
                if (p > -1) {
                    var h = s[p + 1];
                    if (h) {
                        var m = c[h.id];
                        m && (f = m.element)
                    }
                }
                c[a.id] = r,
                r.mount(u, f)
            }
            for (t = 0, n = o.length; t < n; t++) a = o[t],
            r = c[a.id],
            c[a.id] = null,
            delete c[a.id],
            r && r.unmount()
        }
    },
    c.prototype.renderContent = function() {
        for (var e = this.refs,
        t = this.state.addresses,
        n = this,
        a = 0,
        r = t.length; a < r; a++) {
            var i = t[a],
            o = n.createBlock(i);
            o.mount(e.element),
            n.addressBlockMap[i.id] = o
        }
    },
    e.exports = c
},
function(e, t) {
    var n = Array.prototype,
    a = n.slice,
    r = n.indexOf;
    r || (n.indexOf = function(e) {
        for (var t = 0,
        n = this.length; t < n; t++) if (this[t] === e) return t;
        return - 1
    });
    var i = function(e) {
        return function() {
            var t, r, i = n[e].apply(this, arguments);
            return "push" === e || "unshift" === e ? t = a.call(arguments) : "pop" === e || "shift" === e ? r = [i] : "splice" === e && (t = a.call(arguments, 2), r = i),
            this.$onMutate({
                method: e,
                args: arguments,
                result: i,
                inserted: t,
                removed: r
            }),
            i
        }
    },
    o = function() {};
    o.prototype = [],
    o.prototype.constructor = o,
    o.prototype.$onMutate = function() {};
    for (var s = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"], c = 0, l = s.length; c < l; c++) {
        var u = s[c];
        o.prototype[u] = i(u)
    }
    e.exports = o
},
function(e, t, n) {
    var a = n(74),
    r = n(76),
    i = n(77),
    o = function(e) {
        this.strictMode = !1,
        a.call(this, e),
        this.state.maskVisible = !1,
        this.state.removeConfirmVisible = !1,
        this.state.updateInfoVisible = !1,
        this.state.selected = !1,
        this.binders = {
            selected: [{
                type: "show",
                el: "selectedtag"
            },
            {
                type: "class",
                key: "selected",
                el: "element"
            }],
            name: [{
                type: "text",
                el: "name"
            },
            {
                type: "show",
                el: "name"
            }],
            address: {
                type: "text",
                el: "address",
                fn: function() {
                    return this.address ? this.address + " " + this.address_detail: this.address_detail
                }
            },
            phone: {
                type: "text",
                el: "phone"
            },
            maskVisible: [{
                type: "show",
                el: "mask"
            },
            {
                type: "class",
                key: "masked",
                el: "element"
            }],
            removeConfirmVisible: {
                type: "show",
                el: "removeConfirm"
            },
            updateInfoVisible: {
                type: "show",
                el: "updateInfo"
            }
        }
    };
    o.prototype = new a,
    o.prototype.constructor = o,
    o.prototype.onClick = function() {},
    o.prototype.setAddress = function(e) {
        this.address = e,
        this.setState({
            name: e.name,
            address: e.address,
            address_detail: e.address_detail,
            phone: e.phone
        }),
        this.strictMode && 1 !== e.poi_type && e.geohash && (this.setState({
            updateInfoVisible: !1
        }), this.state.removeConfirmVisible === !1 && this.setState({
            maskVisible: !1
        }))
    },
    o.prototype.render = function() {
        var e = this.refs = {},
        t = r({
            tag: "div",
            key: "element",
            content: [{
                tag: "div",
                className: "addressblock-buttons",
                content: [{
                    tag: "span",
                    className: "addressblock-name",
                    key: "name"
                },
                {
                    tag: "span",
                    className: "addressblock-mobile",
                    key: "phone"
                },
                {
                    tag: "button",
                    content: "删除",
                    className: "addressblock-button",
                    key: "removeButton"
                },
                {
                    tag: "button",
                    content: "修改",
                    className: "addressblock-button",
                    key: "modifyButton"
                }]
            },
            {
                tag: "img",
                key: "selectedtag",
                className: "addressblock-selectedtag",
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEY1MDlBODRGODkyMTFFNEIzMTNFRUIwMEQ2M0U5MzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEY1MDlBODVGODkyMTFFNEIzMTNFRUIwMEQ2M0U5MzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RjUwOUE4MkY4OTIxMUU0QjMxM0VFQjAwRDYzRTkzMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RjUwOUE4M0Y4OTIxMUU0QjMxM0VFQjAwRDYzRTkzMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuoBwAcAAALpSURBVHja7Ns9TBRBFADgd+txx52FBR5YoESjEE0sDZYWxh8IGoyVDf6ghaG21RYbExRj1MZaDxNtSQBj/Gu1NMqphYIt7nGHwX2LB7u3CzuzOzM3P/uSTS672WTfl/fezk2y2T3j85DGety0UoMNDOe4lYJ4MPBHCuLBSEGaMEwHCWCYDBKKYSrIphgmgmyJYRpIJIZJIEQYpoAQY5gAQoWhOwg1hs4gsTB0BYmNoSNIIgzdQBJj6ATCBEMXEGYYOoAwxVAdhDmGyiBcMFQF4YahIghXDNVAuGOoBCIEQxUQYRgqgAjFkB1EOIbMIC3BkBWkZRgygrQUQzaQlmNIAVK50SMNhhQgPbcr3DCO7y/AxNBOaNuWIb4nq2ubIMaDsyUXI+8cYy9/Q/3vqtQVwg3jxIHiOgbGqd4i3BnskLpluGLcP+NvE6yM8qclaUG4YZwMwag5GKPPF2Hmiy0lSCTGwc4c1RD0YkyGYFx1MGYJMUSDRGIc6c5D+UIXPB4uUaGc7g1iLK84GFN0GCJBiDCenO+E7TkLju0ruCg5AhTEuDsUxLiGlfHVpn5QS5aZMXZ0h4vRCER5FIEy0FeEe02VUV353yYxMESAEA/Q6y8W4cOPZd85F+VcCfLZTCgGVkbW8mNgZczFxOANQvU2WaqtwsjTX0GUvQV4OOxHGXQxSj4Mu742M5Jg8ASJ9Wr9U19Def+9GkDB9ml3UBBjwsUAHwZWxqt5O/GDZzh8HpJ4nVFoy7gDtn93u+/8x581ONSVA+9YQYzRqQV4XalK+eeOyaILkxx5tgDvvvmTPLyLLwZrEKYrUEz2YjmI4r1+mTEGSxAuy/EGytsmlAbGG8YYrEC4bu5g8pfKG8nzxGABImSnq4Ew/dl2K4YXRtINIqHbfohyxUHhHZYKGCLDSjGSgWiNQQuiPQYNiBEYpCDGYJCAGIURBWIcxlYgRmJsBmIsRhiI0RjNIMZjeEFSDA9IiuGJfwIMAGwyHUgPmDOwAAAAAElFTkSuQmCC"
            },
            {
                tag: "div",
                className: "addressblock-address",
                key: "address"
            },
            {
                tag: "div",
                className: "addressblock-mask",
                key: "mask"
            },
            {
                tag: "div",
                key: "removeConfirm",
                content: [{
                    tag: "p",
                    content: "确定删除收货地址"
                },
                {
                    tag: "button",
                    content: "确定",
                    className: "confirmdelete",
                    key: "confirmDelete"
                },
                {
                    tag: "button",
                    content: "取消",
                    className: "canceldelete",
                    key: "cancelDelete"
                }],
                className: "addressblock-removebuttons"
            },
            {
                tag: "div",
                key: "updateInfo",
                content: [{
                    tag: "button",
                    content: "升级地址",
                    className: "confirmupdate",
                    key: "confirmUpdate"
                },
                {
                    tag: "p",
                    content: (this.restaurantName || "") + "未能识别你的位置信息"
                },
                {
                    tag: "p",
                    content: "你需要为商家提供准确的送货位置"
                }],
                className: "addressblock-updateinfo"
            }],
            className: "addressblock"
        },
        e),
        n = this;
        i.on(e.element, "click",
        function(e) {
            n.strictMode && n.address && (1 !== n.address.poi_type && n.address.geohash || n.setState({
                maskVisible: !0,
                updateInfoVisible: !0
            })),
            n.onClick(e)
        }),
        i.on(e.element, "mouseleave",
        function(e) {
            n.state.updateInfoVisible && n.setState({
                updateInfoVisible: !1,
                maskVisible: !1
            })
        });
        var a = function(e) {
            e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0
        };
        return i.on(e.modifyButton, "click",
        function(e) {
            a(e),
            n.onModifyClick && n.onModifyClick()
        }),
        i.on(e.confirmUpdate, "click",
        function() {
            a(i),
            n.onUpdateClick && n.onUpdateClick()
        }),
        i.on(e.removeButton, "click",
        function(e) {
            a(e),
            n.setState({
                maskVisible: !0,
                removeConfirmVisible: !0
            })
        }),
        i.on(e.updateInfo, "click",
        function(e) {
            a(e)
        }),
        i.on(e.removeConfirm, "click",
        function(e) {
            a(e)
        }),
        i.on(e.confirmDelete, "click",
        function() {
            n.setState({
                maskVisible: !1,
                removeConfirmVisible: !1
            }),
            n.onRemoveConfirm && n.onRemoveConfirm()
        }),
        i.on(e.cancelDelete, "click",
        function() {
            n.setState({
                maskVisible: !1,
                removeConfirmVisible: !1
            })
        }),
        t
    },
    e.exports = o
},
function(e, t, n) {
    var a = n(74),
    r = n(76),
    i = n(77),
    o = (n(75), n(82)),
    s = n(83),
    c = n(84),
    l = n(85),
    u = n(87),
    d = n(88),
    f = n(89),
    p = function(e) {
        this.strictMode = !1,
        a.call(this, e),
        this.binders = {
            phonebkVisible: {
                type: "show",
                el: "phonebk"
            }
        },
        this.state.phonebkVisible = !1;
        var t = this;
        this.address = new f,
        this.address.strictMode = this.strictMode,
        this.address.$on("change",
        function(e) {
            "poi_type" === e.property ? 0 === e.value && (t.hideMap(), t.fields.address.setState("tipVisible", !1)) : "geohash" === e.property && !e.value && e.oldValue && (t.hideMap(), t.fields.address.setState("tipVisible", !0))
        })
    };
    p.prototype = new a,
    p.prototype.constructor = p,
    p.prototype.reset = function(e) {
        var t = this.address;
        t.$reset(),
        this.map && this.hideMap(),
        e && t.$set(e);
        var n = !!t.$get("phone_bk");
        this.setState("phonebkVisible", n),
        this.fields.phone.setState("buttonVisible", !n),
        this.fields.address.setState("tipVisible", !1),
        this.fields.address.setState("tipDisabled", !1);
        var a = t.$validateMessage;
        this.updateValidateMessage(a)
    },
    p.prototype.updateValidateMessage = function(e) {
        var t = this.fields;
        for (var n in e) if (e.hasOwnProperty(n)) {
            var a = e[n],
            r = t[n];
            if (!r) continue;
            a ? r.setState({
                hintMessage: a,
                hintType: "error"
            }) : r.setState({
                hintMessage: "",
                hintType: ""
            })
        }
    },
    p.prototype.validate = function() {
        var e = this.address,
        t = e.$validate(),
        n = e.$validateMessage;
        return this.updateValidateMessage(n),
        t
    },
    p.prototype.showUpdateTip = function() {
        this.fields.address.setState({
            tipVisible: !0,
            firstLineText: this.restaurantName + "未能找到你的位置信息",
            secondLineText: "请修改或完善你的位置信息"
        })
    },
    p.prototype.showMap = function(e, t) {
        if (e = e || this.geohash, this.map) this.map.element.style.display = "",
        this.map.reset(),
        this.map.resetGeohash(e),
        this.map.setState("bottomVisible", !!t);
        else {
            var n = this,
            a = this.map = new d({
                geohash: e,
                onSaveClick: function(e) {
                    n.address.$set({
                        poi_type: 1,
                        geohash: e
                    })
                }
            });
            a.mount(this.element),
            a.setState("bottomVisible", !!t)
        }
        this.fields.address.setState("tipDisabled", !0)
    },
    p.prototype.hideMap = function() {
        this.map && (this.map.element.style.display = "none", this.fields.address.setState("tipDisabled", !1))
    },
    p.prototype.render = function() {
        var e = this.refs = {},
        t = r({
            tag: "div",
            className: "addressform",
            content: [{
                tag: "div",
                key: "form"
            },
            {
                tag: "div",
                className: "addressform-buttons",
                content: [{
                    tag: "button",
                    key: "saveButton",
                    content: "保存"
                },
                {
                    tag: "button",
                    key: "cancelButton",
                    content: "取消"
                }]
            }]
        },
        e),
        n = this,
        a = this.address;
        i.on(e.saveButton, "click",
        function() {
            var e = n.validate();
            e && n.onConfirm && n.onConfirm(a.toJSON())
        }),
        i.on(e.cancelButton, "click",
        function() {
            n.onCancelClick && n.onCancelClick()
        });
        var d = new o({
            model: a,
            property: "name"
        });
        d.setState({
            label: "姓名",
            placeholder: "请输入您的姓名"
        }),
        d.mount(e.form),
        e.name = d.element;
        var f = new u({
            model: a,
            property: "sex"
        });
        f.setState({
            label: "性别"
        }),
        f.mount(e.form),
        e.sex = f.element;
        var p = new l({
            strictMode: this.strictMode,
            model: a,
            property: "address",
            onShowMapLinkClick: function() {
                n.showMap(null, !0),
                p.setState("tipVisible", !1)
            }
        });
        p.setState({
            label: "位置",
            placeholder: "请输入小区、大厦或学校"
        }),
        p.mount(e.form),
        e.name = p.element;
        var h = new o({
            model: a,
            property: "address_detail"
        });
        h.setState({
            label: "详细地址",
            placeholder: "单元、门牌号"
        }),
        h.mount(e.form),
        e.name = h.element;
        var m = new s({
            model: a,
            property: "phone",
            onButtonClick: function() {
                this.setState("buttonVisible", !1),
                n.setState("phonebkVisible", !0)
            }
        });
        m.setState({
            label: "手机号",
            placeholder: "请输入您的手机号"
        }),
        m.mount(e.form),
        e.phone = m.element;
        var g = new c({
            model: a,
            property: "phone_bk",
            onButtonClick: function() {
                n.setState("phonebkVisible", !1),
                m.setState("buttonVisible", !0)
            }
        });
        return g.setState({
            placeholder: "固话、手机短号"
        }),
        g.mount(e.form),
        e.phonebk = g.element,
        this.fields = {
            name: d,
            address: p,
            sex: f,
            address_detail: h,
            phone: m,
            phone_bk: g
        },
        t
    },
    e.exports = p
},
function(e, t, n) {
    var a = n(74),
    r = n(76),
    i = n(77),
    o = function(e) {
        a.call(this, e),
        this.binders = {
            label: {
                type: "text",
                el: "label"
            },
            placeholder: {
                type: "attr",
                el: "editor",
                key: "placeholder"
            },
            hintMessage: {
                type: "html",
                el: "message"
            },
            hintType: [{
                type: "class",
                key: "validate-error",
                el: "field",
                fn: function() {
                    return "error" === this.hintType
                }
            },
            {
                type: "class",
                key: "icon-dot-error",
                el: "message",
                fn: function() {
                    return "error" === this.hintType;
                }
            }]
        }
    };
    o.prototype = new a,
    o.prototype.constructor = o,
    o.prototype.renderContent = function(e) {
        var t = this.refs,
        n = r({
            tag: "input",
            key: "editor"
        },
        t);
        return e.insertBefore(n, t.hint),
        n
    },
    o.prototype.onEditorChange = function() {},
    o.prototype.render = function() {
        var e = this.refs = {},
        t = r({
            tag: "div",
            key: "field",
            className: "addressformfield",
            content: [{
                tag: "label",
                key: "label"
            },
            {
                tag: "div",
                className: "addressformfield-hint",
                key: "hint",
                content: [{
                    tag: "span",
                    key: "message"
                }]
            }]
        },
        e);
        this.renderContent(t);
        var n = e.editor,
        a = this;
        if (n && a.model && a.property) {
            a.model.$on("change",
            function(e) {
                if (!e.property || e.property === a.property) {
                    var t = a.model.$get(a.property) || "";
                    t !== n.value && (n.value = t)
                }
            });
            var o = function() {
                var e = n.value;
                a.model.$set(a.property, e, !0),
                a.onEditorChange(e)
            };
            i.on(n, "keyup", o),
            i.on(n, "change", o)
        }
        return t
    },
    e.exports = o
},
function(e, t, n) {
    var a = n(76),
    r = n(77),
    i = n(75),
    o = n(82),
    s = function(e) {
        o.call(this, e),
        this.binders.buttonVisible = [{
            type: "show",
            el: "button"
        },
        {
            type: "class",
            el: "field",
            key: "hidebutton",
            fn: function() {
                return ! this.buttonVisible
            }
        }],
        this.state.buttonVisible = !0
    };
    s.prototype = new o,
    s.prototype.constructor = s,
    s.prototype.renderContent = function(e) {
        var t = this.refs,
        n = a({
            tag: "input",
            key: "editor"
        },
        t);
        e.insertBefore(n, t.hint);
        var o = a({
            tag: "button",
            content: "添加更多电话",
            key: "button"
        },
        t),
        s = this;
        return r.on(o, "click",
        function() {
            s.onButtonClick && s.onButtonClick()
        }),
        e.insertBefore(o, t.hint),
        i.addClass(e, "phonefield"),
        n
    },
    e.exports = s
},
function(e, t, n) {
    var a = n(76),
    r = n(77),
    i = n(75),
    o = n(82),
    s = function(e) {
        o.call(this, e)
    };
    s.prototype = new o,
    s.prototype.constructor = s,
    s.prototype.renderContent = function(e) {
        var t = this.refs,
        n = a({
            tag: "input",
            key: "editor"
        },
        t);
        e.insertBefore(n, t.hint);
        var o = a({
            tag: "button",
            content: "删除",
            key: "button"
        },
        t);
        e.insertBefore(o, t.hint);
        var s = this;
        return r.on(o, "click",
        function() {
            s.model && s.property && s.model.$set(s.property, ""),
            s.onButtonClick && s.onButtonClick()
        }),
        i.addClass(e, "phonebkfield"),
        n
    },
    e.exports = s
},
function(e, t, n) {
    var a = n(76),
    r = n(77),
    i = n(75),
    o = n(82),
    s = n(86),
    c = n(72),
    l = "没找到你的地址？",
    u = "请尝试只输入小区、大厦或学校看看。",
    d = "或尝试只输入小区、大厦或学校看看。",
    f = function(e) {
        this.strictMode = !1,
        o.call(this, e),
        this.state.tipDisabled = !1,
        this.state.tipVisible = !1,
        this.state.mapLinkVisible = !this.strictMode,
        this.state.firstLineText = l,
        this.state.secondLineText = this.strictMode ? u: d,
        this.binders.tipVisible = {
            type: "show",
            el: "userTip"
        },
        this.binders.mapLinkVisible = {
            type: "show",
            el: "showMapLink"
        },
        this.binders.firstLineText = {
            type: "text",
            el: "firstLine"
        },
        this.binders.secondLineText = {
            type: "text",
            el: "secondLine"
        }
    };
    f.prototype = new o,
    f.prototype.constructor = f,
    f.prototype.resetTipText = function() {
        this.setState({
            firstLineText: l,
            secondLineText: this.strictMode ? u: d
        })
    },
    f.prototype.onEditorChange = function(e) {
        var t = this;
        if (t.model && t.property) {
            var n = t.state.tipDisabled;
            t.resetTipText(),
            t.state.tipVisible === !1 && t.setState("tipVisible", !0),
            e && !n || t.setState("tipVisible", !1);
            var a = t.lastSelectAddress;
            a ? e !== a && (t.lastSelectAddress = null, t.model.$set({
                poi_type: 1,
                geohash: ""
            }), t.lastSelectAddress = null) : t.model.$set({
                poi_type: 1,
                geohash: ""
            })
        }
    },
    f.prototype.renderContent = function(e) {
        var t = this.refs,
        n = a({
            tag: "input",
            key: "editor"
        },
        t),
        o = a({
            tag: "div",
            className: "address-suggestlist",
            content: [{
                tag: "ul"
            }]
        },
        t),
        l = a({
            tag: "div",
            className: "addressform-tip",
            key: "userTip",
            content: [{
                tag: "p",
                content: [{
                    tag: "span",
                    key: "firstLine"
                },
                {
                    tag: "a",
                    key: "showMapLink",
                    content: "去地图看看吧！"
                }]
            },
            {
                tag: "p",
                key: "secondLine"
            },
            {
                tag: "div",
                className: "arrow"
            }]
        },
        t),
        u = this;
        r.on(t.showMapLink, "click",
        function() {
            u.onShowMapLinkClick && u.onShowMapLinkClick()
        }),
        i.addClass(e, "addressfield");
        var d = a({
            tag: "img",
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEY1MDlBODBGODkyMTFFNEIzMTNFRUIwMEQ2M0U5MzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEY1MDlBODFGODkyMTFFNEIzMTNFRUIwMEQ2M0U5MzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RjUwOUE3RUY4OTIxMUU0QjMxM0VFQjAwRDYzRTkzMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RjUwOUE3RkY4OTIxMUU0QjMxM0VFQjAwRDYzRTkzMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiMwn/YAAAMuSURBVHjanJZ9aM1RGMd/9+easItZXuY1YkUtpFCkVuKPyfKauzZKFCtmrIg/5G1NWltJVqaQl7iul6jRTfxhm5fyXgvDsibk5U5uUXOv77O+vzpOv3Pv796nPvf87vmd8zzn95znPOfxRSIRK4mMAqvAfDAD5IE4+AzegjvgAmg3KfAZDEwC+6i8j5VcxGAY7ADv9Ze2y4R14BkIgr8gBEpoNBv0AxPYJ4p7wErwApTqyvza/13gIJ+vgG2gw2URHeQ8DdeA5eA0GAFq3b6ghMrlkyvBMoNyXcT/K0AV/x/m1/9nQDazgc9bQb2VvtTSAz5wFIxVDewFAbrliDYxC2wC90AU/AQtYDPfqVJDHTn8kt4oGo62kwMmgw/KhNHgBphuWLUEQxHoUvpk5a8YDPk2d15WcllT3hdco/J2RoqsbDB9/hpMA01U5ogs9iK9E5SfBXwR1la3AcwE78AscElxkYydDdpAAdiozb3OttCmEpGH2iAnpneCHy7uiXJTLZf4f8y2QPYgobikRxkUAwPolqhhDwaCX+A36K9mCIZ7r59i7BxkUJLIIGSz2Xbb3CyRiS4RYil75CaFbF9q/VPYvhEDt/hniTbonBLbOS7Kh4BDfD6rvXN0NdsMKZH12sE5Dp4w1zxg6giQYh62qYykBi2BOpsesqnkLnN9UBn4BywGT3kAwwxR4SrdIG5cxE12RJLeeM5rdlJFnZJN1Qz7kfFeAe4zIGJ8ruD56NSiZzefq9ULR160Ulk5OGZlJmvBSfCcN2DcVkKxku1+kJuB8oCzat4jcf0+aGXk5CrRkY7UM+1LTrttujLF8ldemwvTUF7EOd1gS7I7+QtdJXtywqOrhoJGPldpqdv10j/DS2MMOEVjxqqEykfy3mj0UlU4h66Ln749iQH52qXgE+dYXg18B2UsW6QQmOMyZh7TiETeGhZjng1YrNr2MH1I9TZMeZfHPknxB4CxPLRTbGA1r8RxvNGySIghGWHBYBR/CgMJ5qdHrE/ruKi5vKed6i9jAxZju5gHsVzpk5T8LdVk2+NBalNWK6xmX0rxp3Fam1hsSYly0+ukfwIMANgIvXWVNn37AAAAAElFTkSuQmCC"
        },
        t);
        e.insertBefore(d, t.hint),
        e.insertBefore(n, t.hint),
        e.insertBefore(o, t.hint),
        e.appendChild(l);
        new s({
            editor: n,
            popup: o,
            onMatchesChange: function() {
                for (var e = this.currentMatches,
                t = this.popup,
                n = "",
                a = 0,
                r = e.length; a < r && !(a > 9); a++) {
                    var i = e[a];
                    n += '<li><div class="name">' + i.name + '</div><div class="address">' + i.address + "</div></li>"
                }
                t.querySelector("ul").innerHTML = n
            },
            getListItemIndex: function(e) {
                for (var t = this.popup,
                n = t.querySelectorAll("li"), a = 0, r = n.length; a < r; a++) {
                    var i = n[a];
                    if (i === e) return a
                }
                return - 1
            },
            onPopupClick: function(e) {
                var t, n = this.popup,
                a = e.target || e.srcElement;
                if (a) for (var r = a; r && r !== n;) {
                    if ("LI" === r.tagName) {
                        t = r;
                        break
                    }
                    r = r.parentNode
                }
                if (t) {
                    var i = this.getListItemIndex(t);
                    if (i != -1) {
                        var o = this.getMatchItem(i);
                        this.selectAddress(o)
                    }
                }
            },
            selectAddress: function(e) {
                e && (this.editor.value = e.name, u.lastSelectAddress = e.name, u.model.$set({
                    poi_type: 0,
                    address: e.name,
                    geohash: e.geohash
                }))
            },
            onPressEnter: function(e) {
                var t = this.activeItemIndex;
                if (t >= 0) {
                    var n = this.getMatchItem(t);
                    this.selectAddress(n),
                    this.togglePopup(!1)
                }
            },
            queryMatches: function() {
                var e = this,
                t = e.editor,
                n = t.value;
                c.search({
                    type: "nearby",
                    keyword: n || "",
                    limit: 10
                },
                function(t) {
                    e.setMatches(n, t)
                })
            },
            onActiveItemChange: function(e, t) {
                var n = this.popup,
                a = n.querySelectorAll("li");
                if (null !== t && a[t] && (a[t].className = ""), null !== e) {
                    var r = a[e];
                    if (r) {
                        r.className = "active";
                        var i = r.getBoundingClientRect(),
                        o = n.getBoundingClientRect(); (i.bottom > o.bottom || i.top < o.top) && r.scrollIntoView()
                    }
                }
            }
        });
        return n
    },
    e.exports = f
},
function(e, t, n) {
    function a(e) {
        this.popupVisible = !1,
        this.activeItemIndex = null,
        this.matchesCache = {},
        this.currentMatches = null,
        this.throttle = 500,
        this.editorFocused = !1,
        c.push(this),
        l();
        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
        this.editor && this.bindEditorEvent(),
        this.popup && this.bindPopupEvent();
        var n = this.queryMatches,
        a = this;
        "function" == typeof n && "number" == typeof this.throttle && (this.queryMatches = o(function() {
            var e = a.editor.value || "",
            t = a.matchesCache[e];
            t ? a.setMatches(e, t) : n.call(a)
        },
        this.throttle))
    }
    var r = n(77),
    i = r.on,
    o = function(e, t) {
        function n() {
            e.apply(o, s),
            r = a
        }
        var a, r, i, o, s;
        return function() {
            if (o = this, s = arguments, a = +new Date, i && (clearTimeout(i), i = null), r) {
                var e = t - (a - r);
                e < 0 ? n() : i = setTimeout(function() {
                    n()
                },
                e)
            } else n()
        }
    },
    s = !1,
    c = [],
    l = function() {
        s || i(document, "click",
        function() {
            for (var e = 0,
            t = c.length; e < t; e++) {
                var n = c[e];
                n.popupVisible && !n.editorFocused && n.togglePopup(!1)
            }
        }),
        s = !0
    };
    a.prototype.bindEditorEvent = function() {
        var e = this,
        t = this.editor;
        i(t, "focus",
        function() {
            e.editorFocused = !0,
            e.queryMatches()
        }),
        i(t, "blur",
        function() {
            e.editorFocused = !1
        }),
        i(t, "keyup",
        function(n) {
            var a = n.which || n.keyCode;
            if (40 === a) return void e.setActionItem("next");
            if (38 === a) return void e.setActionItem("prev");
            if (13 === a) return void(e.onPressEnter && e.onPressEnter(n));
            if (27 === a) return e.togglePopup(!1),
            void e.editor.blur();
            var r = t.value;
            e.queryMatches(r)
        })
    },
    a.prototype.bindPopupEvent = function() {
        var e = this.popup,
        t = this;
        i(e, "click",
        function(e) {
            t.onPopupClick && t.onPopupClick(e)
        })
    },
    a.prototype.togglePopup = function(e) {
        var t, n = this.popup,
        a = this.popupVisible;
        n && (t = void 0 === e ? !this.popupVisible: !!e, this.popupVisible = t, a !== t && (n.style.display = t ? "block": "none"))
    },
    a.prototype.queryMatches = function(e) {},
    a.prototype.setMatches = function(e, t) {
        if (void 0 !== e) {
            var n = this.matchesCache;
            n[e] || (n[e] = t),
            this.currentMatches = t,
            t && 0 !== t.length ? this.editorFocused && this.togglePopup(!0) : this.togglePopup(!1),
            this.setActionItem(null),
            this.onMatchesChange && this.onMatchesChange()
        }
    },
    a.prototype.getMatchItem = function(e) {
        var t = this.currentMatches;
        return t ? t[e] : null
    },
    a.prototype.getMatchesCount = function() {
        return this.currentMatches.length
    },
    a.prototype.destroy = function() {
        this.editor = null,
        this.popup = null,
        c.splice(c.indexOf(this), 1)
    },
    a.prototype.setActionItem = function(e) {
        var t, n = this.activeItemIndex,
        a = this.getMatchesCount();
        "prev" === e ? t = null !== n ? n - 1 : a - 1 : "next" === e ? t = null !== n ? n + 1 : 0 : "number" == typeof e ? t = e: e || (t = null),
        null !== t && (t < 0 ? t = a - 1 : t >= a && (t = 0)),
        this.activeItemIndex = t,
        t !== n && this.onActiveItemChange && this.onActiveItemChange(t, n)
    },
    e.exports = a
},
function(e, t, n) {
    var a = n(76),
    r = n(77),
    i = n(75),
    o = n(82),
    s = 1,
    c = function(e) {
        o.call(this, e)
    };
    c.prototype = new o,
    c.prototype.constructor = c,
    c.prototype.renderContent = function(e) {
        var t = this.refs,
        n = "sexfield-" + s+++"-",
        o = n + "male",
        c = n + "female",
        l = a({
            tag: "div",
            content: [{
                id: o,
                tag: "input",
                name: "sex",
                type: "radio",
                key: "male",
                value: "1"
            },
            {
                tag: "label",
                content: "先生",
                htmlFor: o
            },
            {
                id: c,
                tag: "input",
                type: "radio",
                name: "sex",
                key: "female",
                value: "2"
            },
            {
                tag: "label",
                content: "女士",
                htmlFor: c
            }]
        },
        t),
        u = this;
        if (u.model && u.property) {
            u.model.$on("change",
            function(e) {
                if (!e.property || e.property === u.property) {
                    var n = u.model.$get(u.property) || "";
                    1 === n ? t.male.checked = !0 : 2 === n ? t.female.checked = !0 : t.male.checked = t.female.checked = !1
                }
            });
            var d = function() {
                var e = null;
                t.male.checked ? e = 1 : t.female.checked && (e = 2),
                u.model.$set(u.property, e, !0),
                u.onEditorChange(e)
            };
            r.on(t.male, "change", d),
            r.on(t.female, "change", d)
        }
        return e.insertBefore(l, t.hint),
        i.addClass(e, "sexfield"),
        l
    },
    e.exports = c
},
function(e, t, n) {
    var a = n(74),
    r = n(76),
    i = n(77),
    o = n(75),
    s = "收货位置已经成功标注，拖动可继续调整",
    c = "我们将送货到当前位置，拖动地图可调整",
    l = function(e) {
        a.call(this, e),
        this.state = {
            tipVisible: !0,
            resetVisible: !1,
            bottomVisible: !0,
            tipText: c
        },
        this.binders = {
            tipText: {
                type: "text",
                el: "tipContent"
            },
            bottomVisible: [{
                el: "bottomMask",
                type: "show"
            },
            {
                el: "bottomButtons",
                type: "show"
            }],
            tipVisible: {
                type: "show",
                el: "tip"
            },
            resetVisible: {
                type: "show",
                el: "resetButton"
            }
        }
    };
    l.prototype = new a,
    l.prototype.constructor = l,
    l.prototype.render = function() {
        var e = this.refs = {},
        t = r({
            tag: "div",
            className: "addressmap",
            content: [{
                tag: "div",
                className: "pin"
            },
            {
                tag: "div",
                className: "zoomin",
                content: "+",
                key: "zoomIn"
            },
            {
                tag: "div",
                className: "zoomout",
                content: "-",
                key: "zoomOut"
            },
            {
                tag: "div",
                className: "bottom-mask",
                key: "bottomMask"
            },
            {
                tag: "div",
                className: "bottom-buttons",
                key: "bottomButtons",
                content: [{
                    tag: "button",
                    className: "save",
                    key: "saveButton",
                    content: "保存位置"
                },
                {
                    tag: "button",
                    key: "resetButton",
                    className: "reset",
                    content: "回到原位"
                }]
            },
            {
                tag: "div",
                className: "addressmap-tip",
                key: "tip",
                content: [{
                    tag: "div",
                    className: "arrow"
                },
                {
                    tag: "div",
                    className: "close",
                    key: "close",
                    content: "x"
                },
                {
                    tag: "p",
                    key: "tipContent",
                    content: ""
                }]
            }]
        },
        e),
        n = this;
        return i.on(e.close, "click",
        function() {
            n.setState("tipVisible", !1)
        }),
        i.on(e.saveButton, "click",
        function() {
            var e = n.getGeohash();
            n.onSaveClick && n.onSaveClick(e),
            n.setState("tipText", s),
            n.lastSaveGeohash = e,
            n.setState("bottomVisible", !1),
            n.setState("resetVisible", !1)
        }),
        i.on(e.resetButton, "click",
        function() {
            n.resetGeohash(n.lastSaveGeohash),
            n.setState("tipText", c)
        }),
        t
    };
    var u = !1,
    d = 0,
    f = function() {
        var e = document.createElement("script");
        e.type = "text/javascript",
        e.src = "http://map.qq.com/api/js?v=2.exp&callback=qqmapCallback" + d,
        document.body.appendChild(e),
        u = !0
    };
    l.prototype.getGeohash = function() {
        var e = this.map;
        if (e) {
            var t = e.getCenter();
            if (t) return Geohash.encode(t.lat.toFixed(5), t.lng.toFixed(5))
        }
        return ""
    },
    l.prototype.reset = function() {
        this.resetGeohash(),
        this.setState({
            tipVisible: !0,
            tipText: c
        })
    },
    l.prototype.resetGeohash = function(e) {
        e = e || this.geohash;
        var t = this.map;
        if (e && t) {
            var n, a = Geohash.decode(e);
            n = new qq.maps.LatLng(a[0], a[1]),
            t.setCenter(n)
        }
        this.setState("resetVisible", !1)
    },
    l.prototype.mount = function() {
        a.prototype.mount.apply(this, arguments);
        var e = this,
        t = this.element,
        n = this.refs,
        r = function() {
            var a, r = e.geohash;
            if (r) {
                var s = Geohash.decode(r);
                a = new qq.maps.LatLng(s[0], s[1])
            }
            var l = new qq.maps.Map(t, {
                zoom: 16,
                center: a,
                mapTypeId: qq.maps.MapTypeId.ROADMAP,
                panControl: !1,
                zoomControl: !1,
                mapTypeControl: !1
            });
            e.map = l;
            var u;
            qq.maps.event.addListener(l, "dragstart",
            function() {
                o.addClass(t, "dragging"),
                u = e.state.tipVisible,
                e.setState({
                    tipVisible: !1,
                    bottomVisible: !1
                })
            }),
            qq.maps.event.addListener(l, "dragend",
            function() {
                o.removeClass(t, "dragging"),
                e.setState({
                    tipVisible: u,
                    bottomVisible: !0,
                    resetVisible: !0,
                    tipText: c
                })
            }),
            qq.maps.event.addListener(l, "center_changed",
            function() {});
            var d = n.zoomIn,
            f = n.zoomOut;
            i.on(d, "click",
            function() {
                l.zoomBy(1)
            }),
            i.on(f, "click",
            function() {
                l.zoomBy( - 1)
            })
        };
        u && window.qq ? r() : (d++, window["qqmapCallback" + d] = function() {
            r()
        },
        f())
    },
    e.exports = l
},
function(e, t) {
    var n = function(e) {
        var t = this.props = {};
        for (var n in e) e.hasOwnProperty(n) && ("st_geohash" === n && (n = "geohash"), t[n] = e[n]);
        this.$validateMessage = {},
        this.$listeners = []
    };
    n.prototype = {
        constructor: n,
        $set: function(e, t, n) {
            var a = this.props;
            if ("string" == typeof e) {
                "st_geohash" === e && (e = "geohash");
                var r = a[e];
                a[e] = t,
                n || this.$emit("change", {
                    property: e,
                    value: t,
                    oldValue: r
                })
            } else if ("object" == typeof e) {
                n = !!t;
                for (var i in e) e.hasOwnProperty(i) && this.$set(i, e[i], n)
            }
        },
        $emit: function(e, t) {
            if ("change" === e) for (var n = this.$listeners,
            a = 0,
            r = n.length; a < r; a++) {
                var i = n[a];
                i.call(this, t)
            }
        },
        $on: function(e, t) {
            this.$listeners.push(t)
        },
        $get: function(e) {
            return this.props[e]
        },
        $reset: function() {
            this.props = {},
            this.$resetValidate(),
            this.$emit("change", {})
        },
        $resetValidate: function() {
            var e = this.$validateMessage;
            for (var t in e) e.hasOwnProperty(t) && (e[t] = "")
        },
        $validate: function() {
            var e = !0,
            t = this.props;
            return t.name ? t.name.length > 8 ? (e = !1, this.$validateMessage.name = "姓名最长为8位") : this.$validateMessage.name = "": (e = !1, this.$validateMessage.name = "请输入收外卖人的姓名"),
            t.address ? t.geohash ? this.$validateMessage.address = "": (e = !1, this.$validateMessage.address = this.strictMode ? "请输入位置信息并在下拉框中选择": "请在下拉框或地图中选择位置信息") : (e = !1, this.$validateMessage.address = "请输入位置信息并在下拉框中选择"),
            t.address_detail ? this.$validateMessage.address_detail = "": (e = !1, this.$validateMessage.address_detail = "请输入详细地址信息"),
            t.phone && /^1[3|4|5|7|8]\d{9}$/.test(t.phone) ? this.$validateMessage.phone = "": (e = !1, this.$validateMessage.phone = "输入正确的手机号码"),
            t.phone_bk && !/^1[34578]\d{9}$|^[2-9]\d{6,7}(-\d{1,4})?$|^6[1-9]{2,5}$/.test(t.phone_bk) ? (e = !1, this.$validateMessage.phone_bk = "备用电话的格式有误，请输入手机号或者固定电话号码") : this.$validateMessage.phone_bk = "",
            e
        },
        toJSON: function() {
            return this.props
        }
    },
    e.exports = n
},
function(e, t) {
    "use strict";
    function n(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n),
            a && e(t, a),
            t
        }
    } ();
    e.exports = function() {
        return function() {
            function e() {
                n(this, e);
                var t = document.createElement("div");
                t.className = "ui-loading",
                this.dom = t
            }
            return a(e, [{
                key: "init",
                value: function(e) {
                    if (e) {
                        var t = document.createTextNode(e);
                        return this.dom.appendChild(t),
                        this
                    }
                }
            },
            {
                key: "show",
                value: function() {
                    document.body.appendChild(this.dom)
                }
            },
            {
                key: "hide",
                value: function() {
                    document.body.removeChild(this.dom)
                }
            }]),
            e
        } ()
    }
},
function(e, t) {
    "use strict";
    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0,
            n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function a(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n),
            a && e(t, a),
            t
        }
    } (),
    i = function() {
        function e() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0],
            n = arguments.length <= 1 || void 0 === arguments[1] ? "": arguments[1],
            r = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
            i = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3],
            o = arguments.length <= 4 || void 0 === arguments[4] ? [] : arguments[4];
            a(this, e),
            this.id = t,
            this.quantity = r,
            this.name = n,
            this.price = i,
            this.specs = o
        }
        return r(e, [{
            key: "set",
            value: function(e, t, n) {
                return this.quantity = e,
                this.name = t,
                this.price = n,
                e
            }
        }]),
        e
    } (),
    o = function() {
        function e() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
            a(this, e),
            this.entities = t.map(function(e) {
                return new i(e.id, e.name, e.quantity, e.price, e.specs)
            }).filter(function(e) {
                return e.name
            })
        }
        return r(e, [{
            key: "set",
            value: function(e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? "": arguments[2],
                a = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3],
                r = this.find(e);
                r || (r = new i(e, n, 0, a), this.entities.push(r));
                var o = r.quantity,
                s = r.set(t, n, a);
                return s <= 0 ? (this.entities = this.entities.filter(function(e) {
                    return e.id !== r.id
                }), {
                    entity: r,
                    action: "ENTITY_DESTROY"
                }) : 0 === o ? {
                    entity: r,
                    action: "ENTITY_CREATE"
                }: s > o ? {
                    entity: r,
                    action: "ENTITY_ADD"
                }: {
                    entity: r,
                    action: "ENTITY_SUB"
                }
            }
        },
        {
            key: "find",
            value: function(e) {
                return this.entities.filter(function(t) {
                    return e === t.id
                })[0]
            }
        }]),
        e
    } ();
    e.exports = ["$q", "$location", "Zero",
    function(e, t, i) {
        return function() {
            function e(t) {
                a(this, e),
                this.restaurant_id = t || this.getCurrentRestaurantId(),
                this.setCurrentRestaurantId(this.restaurant_id),
                this.cartMap = {},
                this.load(),
                this.groups = this.cartMap[this.restaurant_id].map(function(e) {
                    return new o(e.entities)
                }),
                this.quantity = 0,
                this.total = 0,
                this.count()
            }
            return r(e, [{
                key: "getCurrentRestaurantId",
                value: function() {
                    var e = localStorage.getItem("CURRENT_RESTAURANT_ID");
                    return + e || -1
                }
            },
            {
                key: "setCurrentRestaurantId",
                value: function(e) {
                    localStorage.setItem("CURRENT_RESTAURANT_ID", e)
                }
            },
            {
                key: "load",
                value: function() {
                    var e = localStorage.getItem("CART_MAP");
                    if (!e) return void this.update([{
                        entities: []
                    }]);
                    try {
                        this.cartMap = JSON.parse(e)
                    } catch(e) {}
                    this.cartMap[this.restaurant_id] || this.update([{
                        entities: []
                    }])
                }
            },
            {
                key: "update",
                value: function(e) {
                    this.cartMap[this.restaurant_id] = e,
                    localStorage.setItem("CART_MAP", JSON.stringify(this.cartMap))
                }
            },
            {
                key: "updateFromCartData",
                value: function(e) {
                    return this.groups = e.group.map(function(e) {
                        return new o(e)
                    }),
                    this.update(this.groups),
                    this.groups
                }
            },
            {
                key: "updateFromCheckout",
                value: function(e) {
                    var t = this;
                    e.$promise || (e = this.checkout()),
                    e.then(function(e) {
                        var n = e.cart;
                        t.updateFromCartData(n)
                    })
                }
            },
            {
                key: "count",
                value: function() {
                    var e, t = 0,
                    a = 0;
                    return (e = []).concat.apply(e, n(this.groups.map(function(e) {
                        return e.entities
                    }))).forEach(function(e) {
                        t += e.quantity,
                        a += e.quantity * e.price
                    },
                    0),
                    this.quantity = t,
                    this.total = a,
                    {
                        quantity: t,
                        total: a
                    }
                }
            },
            {
                key: "createGroup",
                value: function() {
                    var e = new o;
                    return this.groups.push(e),
                    this.update(this.groups),
                    {
                        group: e,
                        action: "GROUP_CREATE"
                    }
                }
            },
            {
                key: "removeGroup",
                value: function(e) {
                    var t = this.groups[e];
                    return this.groups = this.groups.filter(function(t, n) {
                        return n !== e
                    }),
                    this.update(this.groups),
                    {
                        group: t,
                        action: "GROUP_DESTROY"
                    }
                }
            },
            {
                key: "clearGroup",
                value: function(e) {
                    var t = this.groups[e] = new o;
                    return this.update(this.groups),
                    {
                        group: t,
                        action: "GROUP_CLEAR"
                    }
                }
            },
            {
                key: "clearCart",
                value: function() {
                    this.groups = [];
                    var e = this.createGroup(),
                    t = e.group;
                    return {
                        group: t,
                        action: "CART_CLEAR"
                    }
                }
            },
            {
                key: "setEntity",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1],
                    n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                    a = arguments.length <= 3 || void 0 === arguments[3] ? "": arguments[3],
                    r = arguments.length <= 4 || void 0 === arguments[4] ? 0 : arguments[4];
                    if (!e) return {
                        entity: {},
                        action: "ENTITY_NOTSET"
                    };
                    var i = this.groups[n] || this.clearCart().group,
                    o = i.set(e, t, a, r),
                    s = o.entity,
                    c = o.action;
                    return this.update(this.groups),
                    {
                        entity: s,
                        action: c
                    }
                }
            },
            {
                key: "toCheckPage",
                value: function() {
                    location.href = "/cart/checkout"
                }
            },
            {
                key: "checkout",
                value: function() {
                    return i.cart.post({
                        action: "checkout",
                        come_from: "web",
                        geohash: localStorage.getItem("GEOHASH"),
                        entities: this.groups.map(function(e) {
                            return e.entities
                        }).filter(function(e) {
                            return e.length
                        })
                    }).$promise
                }
            },
            {
                key: "getOrderState",
                value: function(e, t, n) {
                    if (e) return {
                        text: "购物车是空的",
                        disabled: !0,
                        name: "EMPTY_CART"
                    };
                    var a = void 0,
                    r = void 0,
                    i = void 0;
                    switch (n) {
                    case 1:
                    case 5:
                    case 9:
                        t > 0 ? (a = "还差 " + t + " 元起送", r = !0, i = "NEED_MORE") : (a = "去结算 >", r = !1, i = "CAN_ORDER");
                        break;
                    case 2:
                        a = "当前过于繁忙，不支持下单",
                        r = !0,
                        i = "TOO_BUSY";
                        break;
                    case 8:
                        a = "休息中 ",
                        r = !0,
                        i = "RESTING";
                        break;
                    case 3:
                    case 6:
                        a = "暂时只能通过手机订购",
                        r = !0,
                        i = "NEED_MOBILE";
                        break;
                    case 4:
                        a = "商家已歇业",
                        r = !0,
                        i = "OUT_BUSINESS"
                    }
                    return {
                        text: a,
                        name: i,
                        disabled: r
                    }
                }
            }]),
            e
        } ()
    }]
},
function(e, t) {
    "use strict";
    var n = {};
    n.MessageManager = ["Zero", "User", "MessageManager.Message",
    function(e, t, n) {
        var a, r, i = {
            $user: t
        };
        return i.$invoke = function(n, a) {
            return t.$promise.then(function(t) {
                return a = angular.extend({
                    userId: t.user_id || "anonymous"
                },
                a),
                e.message[n](a).$promise
            })
        },
        i.$removeChild = function(e) {
            a.splice(a.indexOf(e), 1),
            r.count--
        },
        i.getMessageList = function() {
            return a ? a: (a = [], a.$resolved = !1, a.$promise = i.$invoke("query", {
                is_read: 0
            }).then(function(e) {
                return a.$resolved = !0,
                e.forEach(function(e) {
                    a.push(new n(e, i))
                }),
                a
            },
            function() {
                return a.$resolved = !0,
                a
            }), a)
        },
        i.getMessageCount = function() {
            return r ? r: (r = {},
            r.$resolved = !1, r.$promise = i.$invoke("get", {
                action: "count"
            }).then(function(e) {
                return r.$resolved = !0,
                r.count = e.count,
                r
            },
            function() {
                return r.$resolved = !0,
                r.count = 0,
                r
            }), r)
        },
        i.markAllAsRead = function() {
            return i.$invoke("patch", {
                is_read: 1
            }).then(function() {
                a.length = r.count = 0
            })
        },
        i
    }],
    n.Message = [function() {
        var e = function(e, t) {
            this.$manager = t,
            angular.extend(this, e)
        };
        return e.prototype.markAsRead = function() {
            var e = this;
            return this.$manager.$invoke("patch", {
                messageId: this.id,
                is_read: 1
            }).then(function() {
                e.$manager.$removeChild(e)
            })
        },
        e
    }],
    e.exports = n
},
function(e, t) {
    "use strict";
    var n = function(e) {
        var t = [];
        try {
            if (t = JSON.parse(e || "[]"), !(t instanceof Array)) throw 0
        } catch(e) {
            t = []
        }
        return t
    },
    a = ["Zero", "RestaurantWrapper", "$q",
    function(e, t, a) {
        var r = n(localStorage.getItem("MYFOOTPRINT"));
        return "object" != typeof r[0] && localStorage.removeItem("MYFOOTPRINT"),
        function(e) {
            var n = a.defer();
            return e ? r: (t(r), n.resolve(r || []), n.promise)
        }
    }],
    r = function() {
        var e = localStorage.getItem("NEW_FOOT");
        return e || (localStorage.setItem("NEW_FOOT", !0), localStorage.removeItem("MYFOOTPRINT")),
        function(e) {
            var t = localStorage.getItem("MYFOOTPRINT"),
            a = n(t).filter(function(e) {
                return e.id !== e.id
            });
            a.unshift(e),
            localStorage.setItem("MYFOOTPRINT", JSON.stringify(a))
        }
    };
    e.exports = {
        getFootPrint: a,
        setFootPrint: r
    }
},
function(e, t, n) {
    "use strict";
    var a = n(95);
    n(96);
    var r = function() {
        var e = {
            required: function(e) {
                return ! (null === e || void 0 === e || "" === e)
            },
            length: function(e, t) {
                t = t || {};
                var n = t.min,
                a = t.max,
                r = "";
                return null !== e && void 0 !== e && (r = "" + e),
                !("number" == typeof n && r.length < n) && !("number" == typeof a && r.length > a)
            },
            mobile: function(e) {
                return /^1[3|4|5|7|8]\d{9}$/.test(e)
            },
            phone: function(e) {
                return /^1[34578]\d{9}$|^[2-9]\d{6,7}(-\d{1,4})?$|^6[1-9]{2,5}$/.test(e)
            },
            email: function(e) {
                return /[\w!#$%&'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(e)
            },
            pattern: function e(t, n) {
                n = n || {};
                var e = n.pattern;
                if (!e) throw new Error("pattern is required!");
                return e.test(t)
            },
            custom: function(e, t) {
                t = t || {};
                var n = t.validate;
                if ("function" == typeof n) return n(e);
                throw new Error("validate must be a function.")
            }
        };
        return function(t) {
            function n(e) {
                var n, a = t.$validators,
                r = a[e];
                if (r instanceof Array) for (var i = 0,
                o = r.length; i < o; i++) {
                    var s = r[i];
                    s.hintMessage && (n = s.hintMessage)
                } else r && r.hintMessage && (n = r.hintMessage);
                return n
            }
            return t.$hints = {},
            t.$hintTypes = {},
            t.$validators || (t.$validators = {}),
            t.$validateProperty = function(n) {
                function a(n, a) {
                    var r = e[a.type];
                    return ! ("function" == typeof r && !r(t[n], a)) || (t.$hints[n] = a.errorMessage, t.$hintTypes[n] = "error", !1)
                }
                var r = t.$validators,
                i = r[n];
                if (i instanceof Array) for (var o = 0,
                s = i.length; o < s; o++) {
                    var c = i[o];
                    if (!a(n, c)) return ! 1
                } else if (i && !a(n, i)) return ! 1;
                return t.$hints[n] = "",
                t.$hintTypes[n] = "",
                !0
            },
            t.$validate = function() {
                t.$hints = {},
                t.$hintTypes = {};
                var e = t.$validators,
                n = !0;
                for (var a in e) e.hasOwnProperty(a) && (t.$validateProperty(a) || (n = !1));
                return n
            },
            t.$resetValidate = function() {
                var e = t.$hints,
                n = t.$hintTypes;
                for (var a in e) e.hasOwnProperty(a) && (e[a] = "", n[a] = "")
            },
            t.$showErrorMessage = function(e, n) {
                e && (t.$hints[e] = n, t.$hintTypes[e] = "error")
            },
            t.$hideErrorMessage = function(e) {
                e && (t.$hints[e] = "", t.$hintTypes[e] = "")
            },
            t.$showHintMessage = function(e) {
                var a = n(e);
                a && (t.$hints[e] = a, t.$hintTypes[e] = "warning")
            },
            t.$hideHintMessage = function(e) {
                var a = n(e);
                a && (t.$hints[e] = "", t.$hintTypes[e] = "")
            },
            t
        }
    },
    i = function() {
        return function(e, t, n, a) {
            if (t && t.$validators) {
                var r = t.$validators[n];
                if (r) {
                    var i = !1,
                    o = !1;
                    if (r instanceof Array) for (var s = 0,
                    c = r.length; s < c; s++) {
                        var l = r[s];
                        "blur" === l.method && (i = !0),
                        l.hintMessage && (o = !0)
                    } else "blur" === r.method && (i = !0, r.hintMessage && (o = !0));
                    o && e.on("focus",
                    function() {
                        a.$apply(function() {
                            t.$showHintMessage(n)
                        })
                    }),
                    i && e.on("blur",
                    function() {
                        a.$apply(function() {
                            o && t.$hideHintMessage(n),
                            t.$validateProperty(n)
                        })
                    })
                }
            }
        }
    },
    o = ["bindValidateEvent",
    function(e) {
        return {
            restrict: "A",
            replace: !0,
            transclude: !0,
            scope: {
                model: "=",
                property: "@",
                label: "@"
            },
            link: function(t, n, a, r, i) {
                n.find(".to-replace").replaceWith(i());
                var o = t.model,
                s = t.property,
                c = n.find("input");
                c && o && s && e(c, o, s, t)
            },
            templateUrl: a
        }
    }];
    e.exports = {
        FormModel: r,
        bindValidateEvent: i,
        formFiled: o
    }
},
function(e, t) {
    var n = "/common/page/_block/formfield/formfield.html",
    a = "<div class=formfield ng-class=\"{ 'validate-error': model.$hintTypes[property] === 'error' }\"><label ng-bind=label></label><span class=to-replace></span><div class=formfield-hint><span ng-class=\"{ 'icon-dot-error': model.$hintTypes[property] === 'error', 'icon-dot-warning': model.$hintTypes[property] === 'warning' }\" ng-bind=model.$hints[property]></span></div></div>";
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    var a = n(99);
    angular.module("eleme.page").directive("topbarProfilebox", n(100)).directive("topbarCheckout", n(104)).directive("topbarDefault", n(108)),
    e.exports = function() {
        return {
            templateUrl: a,
            scope: {
                state: "=state"
            },
            restrict: "E",
            replace: !0
        }
    }
},
function(e, t) {
    var n = "/common/page/_block/topbar/topbar.html",
    a = "<div ng-switch=state.type><div ng-switch-when=checkout topbar-checkout state=state></div><div ng-switch-default topbar-default state=state></div></div>";
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t, n) {
    "use strict";
    var a = n(101);
    n(102),
    e.exports = ["$rootScope", "Zero",
    function(e, t) {
        return {
            templateUrl: a,
            link: function(n) {
                n.loginURL = e.ACCOUNTBASE + "/login/#redirect=" + encodeURIComponent(location.href),
                n.logout = function() {
                    return t.logout.post().$promise.then(function() {
                        e.user.reset(),
                        window.location.reload()
                    }).
                    catch(function(e) {
                        "ACCOUNT_HAS_LOGOUT" === e.data.name && window.location.reload()
                    })
                }
            }
        }
    }]
},
function(e, t) {
    var n = "/common/page/_block/topbar/topbar-profilebox/topbar-profilebox.html",
    a = '<div class=topbar-profilebox><img class=topbar-profilebox-avatar ng-src="{{$root.user.avatar + \'|26x26\' | imgOptimize}}" ng-if="$root.user.avatar && $root.topbarType !== \'checkout\'" alt=个人头像> <span class="topbar-profilebox-avatar icon-profile" ng-show=!$root.user.username></span> <span ng-show=!$root.user.username><a ng-href={{loginURL}} target=_blank>登录/注册</a></span> <span class=topbar-profilebox-wrapper ng-show=$root.user.username><span class=topbar-profilebox-welcome ng-if="$root.topbarType === \'checkout\'">欢迎你，</span> <span class=topbar-profilebox-username>{{$root.user.username}}</span> <span class="carttopbar-arrow icon-uniE029" ng-if="$root.topbarType === \'checkout\'"></span> <span class="topbar-profilebox-btn icon-arrow-down" ng-if="$root.topbarType !== \'checkout\'"></span><div class="dropbox topbar-profilebox-dropbox"><a class=icon-profile href=/profile hardjump>个人中心</a> <a class=icon-star href=/profile/favor hardjump>我的收藏</a> <a class=icon-location href=/profile/address hardjump>我的地址</a> <a class=icon-setting href=/profile/security hardjump>安全设置</a> <a class=icon-logout href=JavaScript: ng-click=logout()>退出登录</a></div></span></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    var a = n(105);
    n(106),
    e.exports = function() {
        return {
            templateUrl: a,
            replace: !0
        }
    }
},
function(e, t) {
    var n = "/common/page/_block/topbar/topbar-checkout/topbar-checkout.html",
    a = '<header class=carttopbar><div class="carttopbar-nav container clearfix"><span class=carttopbar-nav-path>当前位置：<a ng-href=/place/{{$root.geohash}} ng-bind="$root.place.name || $root.place.address"></a> <i class=icon-arrow-right></i> <a class=inherit ng-href=/shop/{{state.rstUrl}} ng-bind=state.rstName ng-show=state.rstName></a> <i class=icon-arrow-right ng-show=state.rstName></i> 订单信息</span><div topbar-profilebox></div></div></header>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    n(109);
    var a = n(111);
    e.exports = function() {
        return {
            templateUrl: a,
            scope: {
                state: "="
            }
        }
    }
},
function(e, t) {},
,
function(e, t, n) {
    var a = "/common/page/_block/topbar/topbar-default/topbar-default.html",
    r = '<header class=topbar role=navigation ng-class="{shoptopbar: state.type === \'shop\'}"><div class="container clearfix"><h1><a href="/" hardjump class="topbar-logo icon-logo"><span>饿了么</span></a></h1><a href="/" hardjump class="topbar-item topbar-homepage" ng-class="{\'focus\': $root.locationpath[0] === \'place\'}">首页</a> <a href=/profile/order hardjump class=topbar-item ng-class="{\'focus\': $root.locationpath[1] === \'order\'}">我的订单</a> <a href="//h5.ele.me/service/cooperation/" target=_blank class="topbar-item cooperation">加盟合作</a><nav class=topbar-nav><a href=/support/center hardjump class=topbar-nav-link target=_blank><i class="topbar-nav-icon icon-service"></i>服务中心</a> <a href=/support/rules/default hardjump class=topbar-nav-link target=_blank>规则中心</a><div class=topbar-nav-link><i class="topbar-nav-icon icon-mobile"></i>手机应用<div class="dropbox topbar-mobile-dropbox"><span>扫一扫, 手机订餐更方便</span> <img src=' + n(112) + ' class=topbar-nav-qrcode alt="扫一扫下载饿了么手机 App"></div></div><div topbar-profilebox></div></nav></div></header>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(a, r)
    }]),
    e.exports = a
},
function(e, t, n) {
    e.exports = n.p + "media/img/appqc.95e532.png"
},
function(e, t, n) {
    "use strict";
    n(114);
    var a = n(116);
    angular.module("eleme.page").controller("sidebarCartCtrl", n(117)).controller("sidebarMessageCtrl", n(122));
    var r = ["$rootScope", "Zero", "MessageManager", "LocalCart",
    function(e, t, n, r) {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: a,
            link: function(e, t) {
                var a = function() {
                    return Math.max(document.documentElement.scrollTop || 0, window.scrollY || 0)
                },
                i = angular.$(window);
                e.activeTemplate = null,
                e.isSidebarOpen = !1,
                void
                function() {
                    var t = localStorage.getItem("MYFOOTPRINT");
                    e.hasHistory = t && "[]" !== t
                } (),
                e.sidebarCount = {
                    uncompletedOrder: 0
                },
                e.messageCount = n.getMessageCount();
                var o = new r;
                e.localCart = o,
                e.foodCount = {},
                e.foodCount.count = o.quantity,
                angular.$("body").css({
                    "-ms-overflow-style": "scrollbar",
                    position: "relative"
                });
                var s = t.find(".sidebar-btn-backtop"),
                c = function() {
                    s.css("visibility", a() > 300 ? "visible": "hidden")
                };
                c(),
                i.on("scroll", DomUtil.throttle(c, 200)),
                s.on("click",
                function() {
                    angular.$(0 === document.body.scrollTop ? document.documentElement: document.body).animate({
                        scrollTop: [a(), 0]
                    },
                    300)
                });
                var l = function() {
                    if (Number(document.documentMode) < 10) t.animate({
                        right: [e.isSidebarOpen ? 0 : -295, e.isSidebarOpen ? -295 : 0]
                    },
                    300);
                    else {
                        var n, a = t[0];
                        n = e.isSidebarOpen ? "translate3d(0, 0, 0)": "translate3d(-295px, 0, 0)",
                        a.style.webkitTransform = n,
                        a.style.msTransform = n,
                        a.style.transform = n
                    }
                    e.isSidebarOpen = !e.isSidebarOpen
                };
                angular.$(".toolbar-btn,.toolbar-cartbtn").on("click",
                function(t) {
                    var n = angular.$(t.target);
                    if (n.hasClass("toolbar-close") && (e.isSidebarOpen = !0, l()), n.hasClass("toolbar-open")) {
                        var a = n.attr("template");
                        a === e.activeTemplate ? (l(), e.activeTemplate = a) : e.isSidebarOpen ? e.activeTemplate = a: (e.activeTemplate = a, l()),
                        e.$apply()
                    }
                }),
                e.toggleSidebar = l,
                angular.$(document).on("click",
                function(t) {
                    e.isSidebarOpen && !angular.$(t.target).parents(".sidebar").length && (l(), e.$apply())
                })
            }
        }
    }];
    e.exports = r
},
function(e, t) {},
,
function(e, t, n) {
    var a = "/common/page/_block/sidebar/sidebar.html",
    r = '<div class=sidebar role=complementary><div class=sidebar-tabs><div class=toolbar-tabs-middle><a class="toolbar-btn icon-order toolbar-close" href=/profile/order hardjump tooltip=我的订单 tooltip-placement=left ubt-click=toolbar_order><i class="toolbar-btn-dot icon-primitive-dot" ng-if="sidebarCount.uncompletedOrder > 0"></i></a><div class=toolbar-separator></div><a class="toolbar-cartbtn icon-cart toolbar-open" href=JavaScript: template=cart ng-class="{\'focus\': (activeTemplate === \'cart\' && isSidebarOpen), \'toolbar-cartbtn-shownum\': foodCount.count}" ubt-click=390>购物车<i class=toolbar-cartnum ng-if=foodCount.count ng-bind=foodCount.count></i></a><div class=toolbar-separator></div><a class="toolbar-btn icon-notice" href=JavaScript: template=message ng-class="{\'focus\': (activeTemplate === \'message\' && isSidebarOpen), \'toolbar-open\': user, \'modal-hide\': user}" tooltip=我的信息 tooltip-placement=left ubt-click=392><i class="toolbar-btn-dot icon-primitive-dot" ng-if=messageCount.count></i></a></div><div class=toolbar-tabs-bottom><div class="toolbar-btn icon-QR-code"><div class="dropbox toolbar-tabs-dropbox"><a href=http://static11.elemecdn.com/eleme/desktop/mobile/index.html target=_blank><img src=' + n(112) + " alt=下载手机应用><p>下载手机应用</p><p class=icon-QR-code-bonus>即可参加分享红包活动</p></a></div></div><a class=\"toolbar-btn icon-service\" online-service tooltip=在线客服 title=在线客服 tooltip-placement=left id=live800iconlink target=_blank href=JavaScript:></a> <a class=\"toolbar-btn sidebar-btn-backtop icon-top\" tooltip=回到顶部 title=回到顶部 href=JavaScript: tooltip-placement=left></a></div></div><div class=sidebar-content><div ng-include=\"activeTemplate ? ('/common/page/_block/sidebar/sidebar-'+ activeTemplate + '/sidebar-'+ activeTemplate + '.html') : ''\"></div></div></div>";
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(a, r)
    }]),
    e.exports = a
},
function(e, t, n) {
    "use strict";
    n(118),
    n(120);
    var a = ["$scope", "RestaurantWrapper", "getFootPrint",
    function(e, t, n) {
        e.loading = !0,
        n().then(function(t) {
            e.loading = !1;
            var n = t[0] || {},
            a = e.localCart,
            r = function(e, t, n) {
                var r = a.getOrderState(e, t, n),
                i = r.name,
                o = r.text,
                s = r.disabled;
                return "CAN_ORDER" === i && (o = "去结算"),
                {
                    text: o,
                    disabled: s
                }
            },
            i = function() {
                var t = a.count(),
                i = t.quantity,
                o = t.total;
                e.foodCount.count = e.pieces = i,
                e.total = o,
                e.agio = (n.minimum_order_amount - o).toFixed(2),
                e.cart = a.groups.map(function(e) {
                    return e.entities
                }),
                e.submitButton = r(!i, e.agio, n.status)
            };
            i(),
            e.update = function(e, t, n, r) {
                r && r.stopPropagation(),
                65535 < +t && (t = 65535),
                a.setEntity(e.id, +t, n, e.name, e.price),
                i()
            },
            e.clearGroup = function(e, t) {
                t.stopPropagation(),
                a.clearGroup(e),
                i()
            },
            e.settle = function() {
                return ! e.submitButton.disabled && void a.toCheckPage()
            }
        })
    }];
    e.exports = a
},
function(e, t, n) {
    var a = "/common/page/_block/sidebar/sidebar-cart/sidebar-cart.html",
    r = "<div ng-controller=sidebarCartCtrl><div class=sidebarcart-caption><a ng-href=\"{{'/shop/' + localCart.restaurant_id }}\" ng-bind=\"cart.restaurant_info.name || '购物车'\" ubt-click=394></a> <span class=icon-angle-double-right ng-click=toggleSidebar()></span></div><div class=sidebarcart-loading ng-if=loading><img src=" + n(119) + ' alt=正在加载></div><div ng-if=pieces class=sidebarcart><dl ng-if=basket.length ng-repeat="basket in cart"><dt><span ng-bind="$index + 1 + \'号购物车\'"></span> <a ng-if=basket.length ng-click="clearGroup($index, $event)" href=JavaScript: class=sidebarcart-clear>[清空]</a><dd ng-repeat="item in basket"><ul><li class=clearfix><div class=sidebarcart-name ng-bind=item.name title={{item.name}}></div><div class=sidebarcart-quantity><span ng-click="update(item, item.quantity - 1, $parent.$index, $event)">-</span> <input ng-model=item.quantity ng-change="update(item, item.quantity, $parent.$index)"> <span ng-click="update(item, item.quantity + 1, $parent.$index)">+</span></div><div class=sidebarcart-price ng-bind="item.price * item.quantity"></div></li></ul></dl><dl class=sidebarcart-extra ng-if=cart.extra><dt>其他费用(不计入起送价)<dd><ul><li ng-repeat="item in cart.extra" class=clearfix><div class=sidebarcart-name ng-bind=item.name title={{item.name}}></div><div class=sidebarcart-price ng-bind=item.price></div></li></ul></dl></div><div class=sidebarcart-summary ng-show=pieces><p>共 <span class=color-stress ng-bind=pieces></span> 份，总计 <span class=color-stress ng-bind=total class=sidebarcart-total></span></p><button ng-click=settle() class=sidebarcart-submit ng-class="{ \'sidebarcart-hasagio\': submitButton.disabled }" ng-bind=submitButton.text ubt-click=391></button></div><div ng-if="!loading && !pieces" class=sidebarcart-notice><i class=icon-history></i><h3>购物车空空如也</h3><p>快去订餐吧，总有你心仪的美食</p></div></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(a, r)
    }]),
    e.exports = a
},
function(e, t, n) {
    e.exports = n.p + "media/img/loading.0e7b2e.gif"
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    n(123),
    n(124);
    var a = ["$scope", "MessageManager",
    function(e, t) {
        e.MessageManager = t,
        e.messageList = t.getMessageList()
    }];
    e.exports = a
},
function(e, t, n) {
    var a = "/common/page/_block/sidebar/sidebar-message/sidebar-message.html",
    r = '<div ng-controller=sidebarMessageCtrl><div class=sidebarmessage-title>我的消息<span class=icon-angle-double-right ng-click=toggleSidebar()></span><a href=JavaScript: class=sidebarmessage-btn ng-click=MessageManager.markAllAsRead() ng-if="messageList.$resolved && messageList.length">清空消息</a></div><div class=sidebarmessage-loading ng-if=!messageList.$resolved><img src=' + n(119) + ' alt=正在加载></div><div ng-show="messageList.$resolved && !messageList.length" class=sidebarmessage-notice><i class=icon-notice></i>您没有新的消息哦</div><div class=sidebarmessage-list ng-repeat="item in messageList" ng-class="{\'sidebarmessage-list-even\': $index % 2}"><small class=sidebarmessage-list-time ng-bind="item.created_at | date: \'MM月dd日 hh:ss\'"></small><h3 class=sidebarmessage-list-title ng-bind=item.abstract></h3><p class=sidebarmessage-list-content ng-bind=item.content></p></div></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(a, r)
    }]),
    e.exports = a
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    n(127);
    var a = n(129),
    r = function() {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: a
        }
    };
    e.exports = r
},
function(e, t) {},
,
function(e, t, n) {
    var a = "/common/page/_block/footer/footer.html",
    r = '<footer class=footer role=contentinfo><div class="container clearfix"><div class=footer-link><h3 class=footer-link-title>用户帮助</h3><a class=footer-link-item href=/support/center target=_blank>服务中心</a> <a class=footer-link-item href=/support/question/default target=_blank>常见问题</a> <a class=footer-link-item online-service href=javascript:>在线客服</a></div><div class=footer-link><h3 class=footer-link-title>商务合作</h3><a class=footer-link-item href=//kaidian.ele.me target=_blank>我要开店</a> <a class=footer-link-item href=/support/about/jiameng target=_blank>加盟指南</a> <a class=footer-link-item href=/support/about/contact target=_blank>市场合作</a> <a class=footer-link-item href="http://openapi.eleme.io/" target=_blank>开放平台</a></div><div class=footer-link><h3 class=footer-link-title>关于我们</h3><a class=footer-link-item href=/support/about target=_blank>饿了么介绍</a> <a class=footer-link-item href="http://jobs.ele.me/" target=_blank>加入我们</a> <a class=footer-link-item href=/support/about/contact target=_blank>联系我们</a> <a class=footer-link-item href=/support/rules/default target=_blank>规则中心</a></div><div class=footer-contect><div class=footer-contect-item>24小时客服热线 : <a class=inherit href=tel:10105757>10105757</a></div><div class=footer-contect-item>意见反馈 : <a class=inherit href=mailto:feedback@ele.me>feedback@ele.me</a></div><div class=footer-contect-item>关注我们 :<div href=JavaScript: class=icon-wechat ubt-click=402><div class="dropbox dropbox-bottom footer-contect-dropbox" ubt-visit=402><img src=' + n(130) + ' alt="微信号: elemeorder"><p>微信号: elemeorder</p><p>饿了么网上订餐</p></div></div><a href=http://e.weibo.com/elemeorder class=icon-weibo target=_blank></a></div></div><div class=footer-mobile><a href=https://h.ele.me/landing target=_blank><img src=' + n(112) + ' class=footer-mobile-icon alt="扫一扫下载饿了么手机 App"></a><div class=footer-mobile-content><h3>下载手机版</h3><p>扫一扫,手机订餐方便</p></div></div><div class="footer-copyright serif"><h5 class=owner>所有方：上海拉扎斯信息科技有限公司</h5><p>增值电信业务许可证 : <a href="http://www.shca.gov.cn/" target=_blank>沪B2-20150033</a> | <a href="http://www.miibeian.gov.cn/" target=_blank>沪ICP备 09007032</a> | <a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20120305173227823" target=_blank>上海工商行政管理</a> Copyright ©2008-2017 ele.me, All Rights Reserved.</p></div><div class="footer-police container"><a href="http://www.zx110.org/picp/?sn=310100103568" rel=nofollow target=_blank><img alt="已通过沪公网备案，备案号 310100103568" src=' + n(131) + " height=30></a></div></div></footer>";
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(a, r)
    }]),
    e.exports = a
},
function(e, t, n) {
    e.exports = n.p + "media/img/wexinqc100@2x.393ade.png"
},
function(e, t, n) {
    e.exports = n.p + "media/img/picp_bg.e373b3.jpg"
},
function(e, t, n) {
    "use strict";
    var a = n(133);
    n(134),
    e.exports = function() {
        return {
            restrict: "A",
            scope: {
                rating: "="
            },
            replace: !0,
            templateUrl: a
        }
    }
},
function(e, t) {
    var n = "/common/page/_block/rate-star/rate-star.html",
    a = '<div class="starrating icon-star" title=评分{{rating.toFixed(1)}}分><span class=icon-star ng-style="{ width: (rating * 20) + \'%\' }"></span></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    var a = n(137),
    r = n(138),
    i = ["$rootScope", "$filter", "$http", "$templateCache", "templateParser", "templateBuilder", "RstPopOver",
    function(e, t, n, i, o, s, c) {
        return {
            restrict: "EA",
            replace: !0,
            template: '<div class="clearfix"></div>',
            link: function(t, l, u) {
                var d, f = n.get(a, {
                    cache: i
                }),
                p = !1;
                f.then(function(e) {
                    var t = e.data;
                    d = o.parse(t),
                    p && (N(), p = !1)
                });
                var h = {},
                m = function(t, n, a) {
                    var r = {
                        restaurant: n,
                        imgUrl: n.imgUrl,
                        $rootScope: e,
                        $index: a
                    },
                    i = h[n.id];
                    return i || (i = s.build(t, r), h[n.id] = i),
                    i
                },
                g = !1,
                b = function() {
                    g = !0,
                    w && !w.visible && w.show()
                },
                v = function() {
                    g = !1,
                    w && w.hide()
                },
                y = "undefined" == typeof l[0].addEventListener;
                y ? (l[0].attachEvent("onmouseleave", v), l[0].attachEvent("onmouseenter", b)) : (l.on("mouseleave", v), l.on("mouseenter", b));
                var $, w = new c({
                    attachToBody: !1
                });
                l.on("mouseover", DomUtil.throttle(function(e) {
                    if (y || g) {
                        var t, n = e.target || e.srcElement,
                        a = angular.$(n).parents(".rstblock"),
                        r = a[0];
                        r && (t = r.getAttribute("data-rst-id")),
                        t != $ && (w.hide(), w.reset(), w.set("target", r), w.setRst(P[R[t]]), w.show(), $ = t)
                    }
                },
                100));
                var k, x = 140,
                C = 0,
                A = function(e, t) {
                    var n = "";
                    if (P) {
                        for (var a = Math.min(P.length, e + t), i = e; i < a; i++) {
                            var o = P[i];
                            o.imgUrl = o.image_path ? o.image_path: r,
                            o.bidding && (o.bidding = o.bidding.replace(/"/g, "'")),
                            n += m(d, o, i)
                        }
                        C = a
                    }
                    return n
                },
                E = function() {
                    var e = l[0].getBoundingClientRect(),
                    t = document.documentElement.clientHeight || window.innerHeight;
                    return e.top > t ? 0 : Math.ceil((t - e.top) / x) * T
                },
                S = function() {
                    if (C < k) {
                        var e = E();
                        if (e > C) {
                            var t = A(C, Math.max(16, e - C));
                            l[0].insertAdjacentHTML("beforeend", t)
                        }
                    }
                },
                T = 4;
                l[0].offsetWidth < 1e3 && (T = 3);
                var I = function() {
                    var e = l[0].offsetWidth < 1e3 ? 3 : 4;
                    e !== T && (T = e, M(), S())
                },
                M = function() {
                    l.css("height", Math.ceil(k / T) * x + "px")
                };
                angular.element(window).on("resize", DomUtil.debounce(I, 50)).on("scroll", DomUtil.throttle(S, 50));
                var P, O, R = {},
                N = function(e) {
                    if (!d) return void(p = !0);
                    P.forEach(function(e, t) {
                        R[e.id] = t
                    }),
                    k = P.length,
                    M();
                    var t, n = Math.max(16, E());
                    if (e && P) for (var a = Math.min(n, Math.max(e.length, P.length)), r = 0; r < a; r++) {
                        var i = e[r],
                        o = P[r];
                        if (i && !o || !i && o) {
                            t = !0;
                            break
                        }
                        if (i && o && i.id !== o.id) {
                            t = !0;
                            break
                        }
                    } else t = !0;
                    t && ($ = null, w.set("target", null), l.html(A(0, n)))
                };
                t.$watchCollection(u.data,
                function(e) {
                    var t = P;
                    P = e || [],
                    N(t)
                }),
                t.$watch("rstStream.orderBy",
                function(e) {
                    O = e,
                    N()
                })
            }
        }
    }];
    e.exports = i
},
function(e, t) {
    var n = "/common/page/_block/rst-block/rst-block.html",
    a = '<a class=rstblock data-rst-id={{restaurant.id}} ng-class="{\'rstblock-closed\': !restaurant.is_opening || restaurant.in_delivery_area === false}" ng-href="{{restaurant.in_delivery_area === false ? \'JavaScript:\' : \'/shop/\' + restaurant.id}}" data-bidding={{restaurant.bidding}} target=_blank><div class=rstblock-logo><img width=70 height=70 class=rstblock-logo-icon ng-src="{{ imgUrl + \'|70x70\' | imgOptimize }}" alt={{restaurant.name}}> <span ng-if=restaurant.order_lead_time_text ng-bind="restaurant.order_lead_time_text + \' 分钟\'" ng-class="{\'rstblock-left-timeout\': restaurant.order_lead_time_text === \'45+\'}"></span><div ng-if=restaurant.is_premium class="elemeicon elemeicon-premiumsign rstblock-logo-premiumsign"></div></div><div class=rstblock-content><div class=rstblock-title ng-bind=restaurant.name></div><div class="starrating icon-star"><span class=icon-star ng-style="{ width: (restaurant.rating * 20 || 0) + \'%\' }"></span></div><span class=rstblock-monthsales ng-bind="\'月售\' + restaurant.recent_order_num + \'单\'"></span><div class=rstblock-cost ng-bind=restaurant.piecewise_agent_fee.tips></div><div ng-if="restaurant.status === 1 && restaurant.in_delivery_area !== false" class=rstblock-activity><i ng-repeat="activity in restaurant.activities | limitTo: 8" ng-bind=activity.icon_name ng-style=activity.style ng-if="activity.type === \'supprots\'"></i> <i ng-repeat="activity in restaurant.activities | limitTo: 8" ng-bind=activity.icon_name ng-style=activity.style ng-if="activity.type !== \'supprots\'"></i></div><div ng-if="restaurant.in_delivery_area === false" class=rstblock-relaxing>商家超出配送范围</div><div ng-if="!restaurant.is_opening && restaurant.in_delivery_area !== false" class=rstblock-relaxing ng-bind="restaurant.status === 2 ? \'商家繁忙,不接受新单\' : \'商家休息,暂不接单\'"></div><div ng-if="restaurant.status === 5 && restaurant.in_delivery_area !== false" class=rstblock-schedule ng-bind="\'可预订，\' + restaurant.next_time + \'后送餐\'"></div><div ng-if="(restaurant.status === 3 || restaurant.status === 6) && restaurant.in_delivery_area !== false" class=rstblock-phone>暂时只能通过电话订购</div></div></a>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t, n) {
    e.exports = n.p + "media/img/rst-logo.01fd6e.png"
},
function(e, t, n) {
    "use strict";
    var a = n(138),
    r = n(137);
    n(140);
    var i = function() {
        var e = DomUtil.debounce(function() {
            var e = Math.max(document.documentElement.scrollTop, window.scrollY || 0);
            window.scroll(0, e + 1),
            window.scroll(0, e)
        },
        50);
        return {
            restrict: "E",
            replace: !0,
            scope: {
                data: "="
            },
            templateUrl: r,
            controller: ["$scope",
            function(t) {
                t.data && (t.restaurant = t.data.$restaurant, t.imgUrl = t.restaurant.image_path ? t.restaurant.image_path: a, t.$$postDigest(function() {
                    t.$$watchers.splice(0, t.$$watchers.length),
                    t.$watch("$index", e)
                }))
            }]
        }
    };
    e.exports = i
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    var a = n(143);
    n(144);
    var r = ["$rootScope", "$http", "$templateCache", "$compile", "Popup",
    function(e, t, n, r, i) {
        var o, s = t.get(a, {
            cache: n
        });
        return {
            restrict: "A",
            scope: {},
            link: function(e, t) {
                var n = 10,
                a = i.extend({
                    defaults: {
                        modal: !0,
                        animation: !1,
                        target: "center"
                    },
                    onKeydown: function(t) {
                        var n = t.keyCode;
                        32 === n ? (e.$apply(function() {
                            e.dice(),
                            e.btnActive = !0
                        }), setTimeout(function() {
                            e.$apply(function() {
                                e.btnActive = !1
                            })
                        },
                        100)) : 27 === n && this.hide(),
                        t.preventDefault()
                    },
                    doHide: function() {
                        i.prototype.doHide.apply(this, arguments),
                        this.keyDownHandler && (angular.element(document).off("keydown", this.keyDownHandler), this.keyDownHandler = null)
                    },
                    doShow: function() {
                        i.prototype.doShow.apply(this, arguments),
                        e.$apply(function() {
                            e.minDice = -1,
                            e.diceList.splice(0, e.diceList.length)
                        });
                        var t = this.keyDownHandler = this.onKeydown.bind(this);
                        angular.element(document).on("keydown", t)
                    },
                    render: function() {
                        var t = this,
                        a = r(o)(e)[0],
                        i = e.diceList = [];
                        e.minDice = -1,
                        e.hide = function() {
                            t.hide()
                        },
                        e.btnActive = !1;
                        var s = function() {
                            for (var e = !0; e;) {
                                e = !1;
                                var t = Math.round(100 * Math.random());
                                if (i.indexOf(t) === -1) return t;
                                e = !0,
                                t = void 0
                            }
                        };
                        return e.dice = function() {
                            var t = s();
                            i.push(t),
                            e.minDice = Math.min.apply(null, i),
                            i.length > n && (i[0] === e.minDice ? i.splice(1, 1) : i.splice(0, 1))
                        },
                        a
                    }
                });
                s.then(function(e) {
                    o = e.data;
                    var n = new a;
                    t.on("click",
                    function() {
                        n.show()
                    })
                })
            }
        }
    }];
    e.exports = r
},
function(e, t) {
    var n = "/common/page/_block/fetch-takeout/fetch-takeout.html",
    a = '<div class=fetchtakeout-dialog><div class=fetchtakeout-dialog-header><a href=JavaScript: class="fetchtakeout-close icon-close" ng-click=hide()></a><h3>谁去拿外卖</h3></div><div class=fetchtakeout-dialog-body><div class=fetchtakeout-wrapper><h2 class=fetchtakeout-badge></h2><button class=fetchtakeout-btn ng-click=dice() ng-class="{ active: btnActive }"></button><div class=fetchtakeout-rules>随机到最小数字的人去拿外卖</div><div class=fetchtakeout-emptytext ng-show="diceList.length === 0">↓ Start</div><ul class=fetchtakeout-list><li ng-repeat="item in diceList track by $index" ng-class="{ \'selected\': item === minDice }">扔出了一个 {{item}}</li></ul></div></div></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
, ,
function(e, t, n) {
    "use strict";
    n(148);
    var a = n(150),
    r = n(152),
    i = function(e) {
        return {
            restrict: "A",
            replace: !0,
            transclude: !0,
            scope: {
                model: "=",
                property: "@",
                label: "@",
                link: "=",
                startVerify: "="
            },
            link: function(t, n, a, r, i) {
                n.find(".to-replace").replaceWith(i());
                var o = t.model,
                s = t.property,
                c = n.find("input");
                c && o && s && e(c, o, s, t),
                a.startCount && (t[a.startCount] = "start"),
                t.startVerify && t.getToken(a.startCount)
            }
        }
    };
    e.exports = {
        mobileVerifyField: ["bindValidateEvent",
        function(e) {
            return angular.extend(i(e), a)
        }],
        emailVerifyField: ["bindValidateEvent",
        function(e) {
            return angular.extend(i(e), r)
        }]
    }
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    var a = n(151);
    e.exports = {
        templateUrl: a,
        controller: ["$scope", "Zero", "captchaModal", "$q", "MessageBox", "notifyServerError",
        function(e, t, n, a, r, i) {
            var o = function e(r, i) {
                return a.all().then(function() {
                    return (i || t.mobileVerify.post)(r).$promise
                }).then(null,
                function(t) {
                    return t.data && "CAPTCHA_NONE_ERROR" === t.data.name ? n.noise().then(function(t) {
                        return e(angular.extend({
                            captcha_code: t
                        },
                        r), i)
                    }) : a.reject(t)
                })
            };
            e.link.sendType || (e.link.sendType = "sms"),
            e.getToken = function(t) {
                if (e.link.$validateProperty("mobile") && e.link.mobile && e.link.mobile.match(/^1[3-9]\d{9}$/) && "running" !== e[t]) {
                    e.link.validate_token = !1,
                    e.link.err = !1,
                    e[t] = "start";
                    var n = angular.extend(e.link.apiParams || {
                        action: "send",
                        mobile: e.link.mobile,
                        version: e.link.version || "v1",
                        scene: e.link.scene
                    },
                    {
                        type: t
                    });
                    angular.isFunction(e.link.apiExtra) && (n = e.link.apiExtra(n)),
                    o(n, e.link.api).then(function(t) {
                        e.link.validate_token = t.validate_token
                    },
                    function(n) {
                        if (e[t] = "stop", e.link.err = n, n.data) switch (n.data.name) {
                        case "USER_CANCEL":
                            return;
                        case "CAPTCHA_CODE_ERROR":
                            return void r("请输入正确的验证码！", "验证码错误，请重新填写", "warning");
                        default:
                            i(n)
                        }
                    })
                }
            },
            e.link.autoSend && e.getToken(e.link.sendType)
        }]
    }
},
function(e, t) {
    var n = "/common/page/_block/verify-field/mobile-verify-field/mobile-verify-field.html",
    a = "<div class=\"formfield form-field-verifymobile\" ng-class=\"{ 'validate-error': model.$hintTypes[property] === 'error' }\"><label ng-bind=label>验证码</label><input name=validate_code ng-model=link.validate_code> <button type=button ng-class=\"{ 'disabled': audio === 'running' }\" countdown status=sms mode=text time=60 tpl=\"?time秒 重新发送\" started-once-text=重新发送 ng-click=getToken(link.sendType)>获取验证码</button><div class=formfield-hint><span ng-class=\"{\n      'icon-dot-error': model.$hintTypes[property] === 'error',\n      'icon-dot-warning': model.$hintTypes[property] === 'warning',\n      'multi': audio === 'running' }\" ng-bind=model.$hints[property]></span> <span class=verifymobile-msg ng-hide=\"sms === 'running' || sms === 'end' || audio === 'running'\">为保障账号安全，请先对你的身份进行验证</span> <span class=verifymobile-msg ng-show=\"sms === 'running' && audio !== 'running'\">短信已发送，请输入短信中的验证码</span> <span class=verifymobile-msg ng-show=\"sms === 'end' && audio !== 'running'\"><span>收不到短信？请使用</span> <a href=javascript: ng-click=\"getToken('audio')\">语音验证码</a></span> <span class=\"verifymobile-msg multi\" ng-show=\"audio === 'running'\"><span>电话拨打中... 请留意你的手机来电</span> <span countdown status=audio mode=text time=60 tpl=\"(?time秒 可重新拨打)\"></span></span></div></div>";
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t, n) {
    "use strict";
    var a = n(153);
    n(148),
    e.exports = {
        templateUrl: a,
        controller: ["$scope", "Zero", "captchaModal", "$q", "MessageBox", "notifyServerError",
        function(e, t, n, a, r, i) {
            var o = function e(t, r) {
                return a.all().then(function() {
                    return t(r).$promise
                }).
                catch(function(i) {
                    return i.data && "CAPTCHA_NONE_ERROR" === i.data.name ? n.noise().then(function(n) {
                        return e(t, angular.extend({
                            captcha_code: n
                        },
                        r))
                    }) : a.reject(i)
                })
            },
            s = function(e) {
                var t = e.split("@")[1];
                switch (t) {
                case "gmail.com":
                    return "https://mail.google.com";
                default:
                    return "http://mail." + t
                }
            };
            e.getToken = function() {
                e.link.$validateProperty("email") && (e.count = "start", o(t.emailVerify.post, {
                    action: "send_with_captcha",
                    email: e.link.email
                }).then(function(t) {
                    return e.link.validate_token = t.validate_token
                }).then(function() {
                    return r({
                        title: "已发送验证码！",
                        buttons: [{
                            action: "link",
                            content: '<a href="' + s(e.link.email) + '" class="a-link" target="_blank">点击这里，跳转到邮箱，查看验证码</a>'
                        }],
                        showConfirmButton: !1,
                        type: "success"
                    })
                }).
                catch(function(t) {
                    if (e.count = "stop", e.link.err = t, t.data) switch (t.data.name) {
                    case "USER_CANCEL":
                        return;
                    case "CAPTCHA_CODE_ERROR":
                        return void r("请输入正确的验证码！", "验证码错误，请重新填写", "warning");
                    default:
                        i(t)
                    }
                }))
            }
        }]
    }
},
function(e, t) {
    var n = "/common/page/_block/verify-field/email-verify-field/email-verify-field.html",
    a = "<div class=\"formfield form-field-verifymobile\" ng-class=\"{ 'validate-error': model.$hintTypes[property] === 'error' }\"><label ng-bind=label>验证码</label><input name=validate_code ng-model=\"link.validate_code\"><button type=button ng-class=\"{ 'disabled': audio === 'running' }\" countdown status=count mode=text time=60 tpl=\"?time秒 重新发送\" started-once-text=获取验证码 ng-click=getToken()>获取验证码</button><div class=formfield-hint><span ng-class=\"{ 'icon-dot-error': model.$hintTypes[property] === 'error', 'icon-dot-warning': model.$hintTypes[property] === 'warning' }\" ng-bind=model.$hints[property]></span> <span class=verifymobile-msg ng-hide=\"count === 'running'\">为保障账号安全，请先对你的身份进行验证</span> <span class=verifymobile-msg ng-show=\"count === 'running'\">请在您绑定的邮箱中查找验证码</span></div></div>";
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t, n) {
    "use strict";
    var a = n(155);
    e.exports = function() {
        return {
            templateUrl: a,
            scope: {
                link: "="
            }
        }
    }
},
function(e, t) {
    var n = "/common/page/_block/security-verify-form/security-verify-form.html",
    a = '<form class=security-service ng-submit=link.submit() novalidate><p class=service-text ng-if=link.serviceText ng-bind=link.serviceText></p><div ng-if=link.field form-field label={{link.field.labelName}} model=link.verify.link property={{link.field.property}}><input name=link.field.name ng-model=link.verify.link[link.field.property] ng-blur="link.field.checkExist && link.field.checkExist()" placeholder={{link.field.placeholder}}></div><div ng-if=link.origin form-field label={{link.origin.labelName}} class=field-default><span class="field-default-value default-mobile" ng-bind=link.origin.content></span></div><div ng-if="link.verify.type === \'mobile\'" mobile-verify-field label=验证码 model=link.verify.link property=validate_code link=link.verify.link start-verify=link.verify.startVerify start-count={{link.verify.startCount}}></div><div ng-if="link.verify.type === \'email\'" email-verify-field label=验证码 model=link.verify.link property=validate_code link=link.verify.link start-verify=link.verify.startVerify start-count={{link.verify.startCount}}></div><div class=form-group><button type=submit class="btn-primary btn-lg security-submit" ng-bind=link.submitText></button></div></form>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {
    "use strict";
    var n = ["$timeout",
    function(e) {
        return {
            restrict: "EA",
            scope: {
                status: "=",
                mode: "@"
            },
            link: function(t, n, a) {
                var r, i, o = n.html(),
                s = +a.time,
                c = a.tpl ? a.tpl.split("?time") : ["倒计时", "秒"],
                l = a.startedOnceText || o,
                u = function a() {
                    return "stop" === t.status ? d() : (n.text(c[0] + --r + c[1]), r > 0 ? void(i = e(a, 1e3)) : d())
                },
                d = function() {
                    n.removeClass("disabled"),
                    n.html(l),
                    e.cancel(i),
                    r = -1,
                    t.status = "end"
                },
                f = function() {
                    return r > 0 ?
                    function() {
                        t.status = "running"
                    }: (t.status = "running", r = s, n.addClass("disabled"), void u())
                };
                t.mode && "button" !== t.mode || n.on("click", f),
                t.$watch("status",
                function(e) {
                    "start" === e && f(),
                    "stop" === e && d()
                }),
                t.$on("$destroy",
                function() {
                    i && e.cancel(i)
                })
            }
        }
    }];
    e.exports = n
},
function(e, t, n) {
    "use strict";
    var a = n(158);
    n(159);
    var r = ["$q", "$rootScope", "$compile", "$http", "$templateCache", "Popup", "Zero",
    function(e, t, n, r, i, o, s) {
        var c, l = t.$new(),
        u = r.get(a, {
            cache: i
        }),
        d = o.extend({
            defaults: {
                modal: !0,
                animation: !1,
                target: "center",
                updatePositionOnResize: !0
            },
            render: function() {
                return n(c)(l)[0]
            }
        });
        return l.linkData = {},
        l.captchaURL = null,
        l.changeCaptcha = function() {
            s.captcha.post("",
            function(e) {
                l.linkData.captcha_code = "",
                l.captchaURL = "//mainsite-restapi.ele.me/v1/captchas/" + e.code
            })
        },
        {
            noise: function() {
                return u.then(function(t) {
                    var n = e.defer();
                    c = t.data;
                    var a = new d;
                    return a.show(),
                    l.changeCaptcha(),
                    l.hide = function() {
                        a.hide(),
                        n.reject({
                            data: {
                                name: "USER_CANCEL"
                            }
                        })
                    },
                    l.submit = function() {
                        l.linkData.captcha_code && (l.submitting = !0, a.hide(), n.resolve(l.linkData.captcha_code))
                    },
                    n.promise
                })
            }
        }
    }];
    e.exports = r
},
function(e, t) {
    var n = "/common/page/_block/captcha-modal/captcha-modal.html",
    a = '<div class=captcha-modal><span class=close ng-click=hide()>X</span><h4 class=modal-title>请图形输入验证码！</h4><form class="formfield modal-form" ng-submit=submit() novalidate><div form-field class=captchafield><input placeholder=请输入验证码 ng-model="linkData.captcha_code"><img ng-src={{captchaURL}} ng-show=captchaURL ng-click=changeCaptcha() alt="验证码"><a href=JavaScript: ng-click=changeCaptcha()>看不清换一张</a></div><div class="form-group account-verify"><button class="btn-primary btn-lg submit" type=submit>确定</button></div></form></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            var n = [],
            a = !0,
            r = !1,
            i = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); ! (a = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0);
            } catch(e) {
                r = !0,
                i = e
            } finally {
                try { ! a && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw i
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } (),
    r = n(162);
    n(163);
    var i, o = function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            templateUrl: r,
            controller: ["$scope", "$rootScope", "$q", "Zero",
            function(e, t, n, r) {
                e.filterPlace = function(t) {
                    return t.geohash !== e.geohash
                },
                e.place && e.place.$promise.then(function(e) {
                    UBT.params.city_id = e.city_id,
                    localStorage.setItem("CITY_ID", e.city_id)
                });
                var o = e.user.user_id;
                o && (e.place && !e.place.store && e.place.$promise.then(function() {
                    e.place.store = !0,
                    r.place.post({
                        userId: e.user.user_id,
                        geohash: e.place.geohash,
                        name: e.place.name
                    })
                }), i || (i = r.place.query({
                    userId: o,
                    "extras[]": ["geohash"]
                }).$promise), i.then(function(t) {
                    t.forEach(function(e) {
                        var t = Geohash.decode(e.geohash),
                        n = a(t, 2),
                        r = n[0],
                        i = n[1];
                        e.latitude = r,
                        e.longitude = i
                    }),
                    e.userPlaces = t.filter(function(t) {
                        return t.geohash !== e.geohash
                    })
                }))
            }]
        }
    };
    e.exports = o
},
function(e, t) {
    var n = "/common/page/_block/location/location.html",
    a = '<div class=location ng-style="{visibility: geohash ? \'\' : \'hidden\'}" role=navigation><span>当前位置:</span> <span class=location-current><a class=inherit ng-href=/place/{{geohash}} ubt-click=401 ng-bind="place.name || place.address"></a></span> <span class=location-change ng-class="{ \'location-hashistory\': user.username && userPlaces && userPlaces.length > 0 }"><a ng-href={{ROOBASE}}/home ubt-click=400 hardjump>[切换地址]</a><ul class="dropbox location-dropbox" ubt-visit=398><li class=arrow></li><li ng-repeat="userPlace in userPlaces | filter:filterPlace | limitTo: 4"><a class=inherit ng-href="/place/{{userPlace.geohash}}?latitude={{userPlace.latitude}}&longitude={{userPlace.longitude}}" ng-bind=userPlace.name ubt-click=399></a></li><li class=changelocation><a ng-href={{ROOBASE}}/home hardjump>修改收货地址<span class=icon-location></span></a></li></ul></span> <span ng-transclude></span></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t) {
    "use strict";
    var n = [function() {
        window.live800_companyID = "402791",
        window.jsessionId = ";jsessionid=B7EE2BF1C99FCB7395845BDF935A3478";
        try {
            navigator.cookieEnabled && (window.jsessionId = "")
        } catch(e) {}
        return window.enterurl = null,
        window.isOldSkin = !1,
        window.server_prefix_list = ["//v2.live800.com/live800"],
        window.isNeedCheckDomainBinding = !1,
        window.globalWindowAttribute = "toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width=920,height=620",
        window.live800_chatVersion = "5",
        window.jid = "1820947377",
        window.live800_baseUrl = "v2.live800.com",
        window.live800_baseHtmlUrl = "v2.live800.com",
        window.live800_baseWebApp = "/live800",
        window.live800_baseChatHtmlDir = "/chatClient",
        window.live800_Language = "en",
        window.live800_configID = "123801",
        window.live800_codeType = "custom",
        window.live800_configContent = "live800_text=%25u5728%25u7ebf%25u5ba2%25u670d",
        window.live800_companyID = "402791",
        function(e, t) {
            t.css("visibility", "hidden");
            var n = document.createElement("script");
            n.src = "//v2.live800.com/live800/chatClient/textStatic.js";
            var a = function() {
                t.css("visibility", "visible"),
                t.on("click",
                function() {
                    return window.open("//v2.live800.com/live800/chatClient/chatbox.jsp?companyID=402791&configID=123801&jid=1820947377&enterurl=http%3A%2F%2Fr.ele.me%2Ftest-restaurant-01&pagetitle=test%5Frestaurant%5F01+%2D+%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%B9%96%E5%8D%97%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A620%E6%A0%8B3%2E%2E%2E+%2D+%E5%8F%AB%E5%A4%96%E5%8D%96%E4%B8%8Aele%2Eme&pagereferrer=http%3A%2F%2Fele%2Eme%2Fpremium%2Fgeohash%2Fwtw3djeuu587&firstEnterUrl=http%3A%2F%2Fr%2Eele%2Eme%2Fbigmama", "chatbox402791", globalWindowAttribute, this)
                })
            };
            angular.$(n).on("load", a),
            document.documentMode && (n.onreadystatechange = function() {
                "loaded" === n.readyState && a()
            }),
            document.body.appendChild(n)
        }
    }];
    e.exports = n
},
function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            var n = [],
            a = !0,
            r = !1,
            i = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); ! (a = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0);
            } catch(e) {
                r = !0,
                i = e
            } finally {
                try { ! a && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw i
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } (),
    r = n(167);
    n(168);
    var i = function() {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: r,
            link: function(e) {
                if (window.crayfish || window.crayfish.notification) {
                    var t = crayfish.notification || {},
                    n = t.enable,
                    r = t.content,
                    i = t.time,
                    o = void 0;
                    if (i) try {
                        var s = i.split("-"),
                        c = a(s, 2),
                        l = c[0],
                        u = c[1];
                        o = new Date(u).getTime() >= Date.now() >= new Date(l).getTime()
                    } catch(e) {} else o = !0;
                    n && o && (e.enable = !0),
                    e.content = r
                }
            }
        }
    };
    e.exports = i
},
function(e, t) {
    var n = "/common/page/_block/importantnotification/importantnotification.html",
    a = '<div class="importantnotification container" role=banner><div ng-if=enable>{{content}}</div></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    n(171);
    var a = n(175),
    r = function() {
        return {
            restrict: "A",
            replace: !0,
            scope: {
                expressionContent: "="
            },
            templateUrl: a,
            link: function(e, t, n) {
                e.content = n.content || e.expressionContent || "暂无记录",
                e.$watch("expressionContent",
                function(t, n) {
                    n && (e.content = t)
                })
            }
        }
    };
    e.exports = r
},
function(e, t) {},
, , ,
function(e, t) {
    var n = "/common/page/_block/nodatatip/nodatatip.html",
    a = '<div class=nodata><p class=nodata-container ng-bind-html="content | toTrusted"></p></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t, n) {
    "use strict";
    var a = n(177);
    e.exports = function() {
        return {
            restrict: "A",
            scope: {
                config: "="
            },
            link: function(e, t) {
                var n = e.$watch("config",
                function(r) {
                    void 0 !== r && (new a(t[0], {
                        text: e.config.content,
                        width: e.config.width,
                        height: e.config.height,
                        colorDark: "#000",
                        colorLight: "#fff",
                        correctLevel: a.CorrectLevel.H
                    }), n())
                })
            }
        }
    }
},
function(e, t) {
    var n; !
    function() {
        function e(e) {
            this.mode = u.MODE_8BIT_BYTE,
            this.data = e,
            this.parsedData = [];
            for (var t = 0,
            n = this.data.length; t < n; t++) {
                var a = [],
                r = this.data.charCodeAt(t);
                r > 65536 ? (a[0] = 240 | (1835008 & r) >>> 18, a[1] = 128 | (258048 & r) >>> 12, a[2] = 128 | (4032 & r) >>> 6, a[3] = 128 | 63 & r) : r > 2048 ? (a[0] = 224 | (61440 & r) >>> 12, a[1] = 128 | (4032 & r) >>> 6, a[2] = 128 | 63 & r) : r > 128 ? (a[0] = 192 | (1984 & r) >>> 6, a[1] = 128 | 63 & r) : a[0] = r,
                this.parsedData.push(a)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
            this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
        }
        function t(e, t) {
            this.typeNumber = e,
            this.errorCorrectLevel = t,
            this.modules = null,
            this.moduleCount = 0,
            this.dataCache = null,
            this.dataList = []
        }
        function a(e, t) {
            if (void 0 == e.length) throw new Error(e.length + "/" + t);
            for (var n = 0; n < e.length && 0 == e[n];) n++;
            this.num = new Array(e.length - n + t);
            for (var a = 0; a < e.length - n; a++) this.num[a] = e[a + n]
        }
        function r(e, t) {
            this.totalCount = e,
            this.dataCount = t
        }
        function i() {
            this.buffer = [],
            this.length = 0
        }
        function o() {
            return "undefined" != typeof CanvasRenderingContext2D
        }
        function s() {
            var e = !1,
            t = navigator.userAgent;
            if (/android/i.test(t)) {
                e = !0;
                var n = t.toString().match(/android ([0-9]\.[0-9])/i);
                n && n[1] && (e = parseFloat(n[1]))
            }
            return e
        }
        function c(e, t) {
            for (var n = 1,
            a = l(e), r = 0, i = g.length; r <= i; r++) {
                var o = 0;
                switch (t) {
                case d.L:
                    o = g[r][0];
                    break;
                case d.M:
                    o = g[r][1];
                    break;
                case d.Q:
                    o = g[r][2];
                    break;
                case d.H:
                    o = g[r][3]
                }
                if (a <= o) break;
                n++
            }
            if (n > g.length) throw new Error("Too long data");
            return n
        }
        function l(e) {
            var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
            return t.length + (t.length != e ? 3 : 0)
        }
        e.prototype = {
            getLength: function(e) {
                return this.parsedData.length
            },
            write: function(e) {
                for (var t = 0,
                n = this.parsedData.length; t < n; t++) e.put(this.parsedData[t], 8)
            }
        },
        t.prototype = {
            addData: function(t) {
                var n = new e(t);
                this.dataList.push(n),
                this.dataCache = null
            },
            isDark: function(e, t) {
                if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
                return this.modules[e][t]
            },
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(e, n) {
                this.moduleCount = 4 * this.typeNumber + 17,
                this.modules = new Array(this.moduleCount);
                for (var a = 0; a < this.moduleCount; a++) {
                    this.modules[a] = new Array(this.moduleCount);
                    for (var r = 0; r < this.moduleCount; r++) this.modules[a][r] = null
                }
                this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(e, n),
                this.typeNumber >= 7 && this.setupTypeNumber(e),
                null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                this.mapData(this.dataCache, n)
            },
            setupPositionProbePattern: function(e, t) {
                for (var n = -1; n <= 7; n++) if (! (e + n <= -1 || this.moduleCount <= e + n)) for (var a = -1; a <= 7; a++) t + a <= -1 || this.moduleCount <= t + a || (0 <= n && n <= 6 && (0 == a || 6 == a) || 0 <= a && a <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= a && a <= 4 ? this.modules[e + n][t + a] = !0 : this.modules[e + n][t + a] = !1)
            },
            getBestMaskPattern: function() {
                for (var e = 0,
                t = 0,
                n = 0; n < 8; n++) {
                    this.makeImpl(!0, n);
                    var a = p.getLostPoint(this); (0 == n || e > a) && (e = a, t = n)
                }
                return t
            },
            createMovieClip: function(e, t, n) {
                var a = e.createEmptyMovieClip(t, n),
                r = 1;
                this.make();
                for (var i = 0; i < this.modules.length; i++) for (var o = i * r,
                s = 0; s < this.modules[i].length; s++) {
                    var c = s * r,
                    l = this.modules[i][s];
                    l && (a.beginFill(0, 100), a.moveTo(c, o), a.lineTo(c + r, o), a.lineTo(c + r, o + r), a.lineTo(c, o + r), a.endFill())
                }
                return a
            },
            setupTimingPattern: function() {
                for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
            },
            setupPositionAdjustPattern: function() {
                for (var e = p.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) for (var n = 0; n < e.length; n++) {
                    var a = e[t],
                    r = e[n];
                    if (null == this.modules[a][r]) for (var i = -2; i <= 2; i++) for (var o = -2; o <= 2; o++) i == -2 || 2 == i || o == -2 || 2 == o || 0 == i && 0 == o ? this.modules[a + i][r + o] = !0 : this.modules[a + i][r + o] = !1
                }
            },
            setupTypeNumber: function(e) {
                for (var t = p.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                    var a = !e && 1 == (t >> n & 1);
                    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = a
                }
                for (var n = 0; n < 18; n++) {
                    var a = !e && 1 == (t >> n & 1);
                    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = a
                }
            },
            setupTypeInfo: function(e, t) {
                for (var n = this.errorCorrectLevel << 3 | t,
                a = p.getBCHTypeInfo(n), r = 0; r < 15; r++) {
                    var i = !e && 1 == (a >> r & 1);
                    r < 6 ? this.modules[r][8] = i: r < 8 ? this.modules[r + 1][8] = i: this.modules[this.moduleCount - 15 + r][8] = i
                }
                for (var r = 0; r < 15; r++) {
                    var i = !e && 1 == (a >> r & 1);
                    r < 8 ? this.modules[8][this.moduleCount - r - 1] = i: r < 9 ? this.modules[8][15 - r - 1 + 1] = i: this.modules[8][15 - r - 1] = i
                }
                this.modules[this.moduleCount - 8][8] = !e
            },
            mapData: function(e, t) {
                for (var n = -1,
                a = this.moduleCount - 1,
                r = 7,
                i = 0,
                o = this.moduleCount - 1; o > 0; o -= 2) for (6 == o && o--;;) {
                    for (var s = 0; s < 2; s++) if (null == this.modules[a][o - s]) {
                        var c = !1;
                        i < e.length && (c = 1 == (e[i] >>> r & 1));
                        var l = p.getMask(t, a, o - s);
                        l && (c = !c),
                        this.modules[a][o - s] = c,
                        r--,
                        r == -1 && (i++, r = 7)
                    }
                    if (a += n, a < 0 || this.moduleCount <= a) {
                        a -= n,
                        n = -n;
                        break
                    }
                }
            }
        },
        t.PAD0 = 236,
        t.PAD1 = 17,
        t.createData = function(e, n, a) {
            for (var o = r.getRSBlocks(e, n), s = new i, c = 0; c < a.length; c++) {
                var l = a[c];
                s.put(l.mode, 4),
                s.put(l.getLength(), p.getLengthInBits(l.mode, e)),
                l.write(s)
            }
            for (var u = 0,
            c = 0; c < o.length; c++) u += o[c].dataCount;
            if (s.getLengthInBits() > 8 * u) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * u + ")");
            for (s.getLengthInBits() + 4 <= 8 * u && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
            for (;;) {
                if (s.getLengthInBits() >= 8 * u) break;
                if (s.put(t.PAD0, 8), s.getLengthInBits() >= 8 * u) break;
                s.put(t.PAD1, 8)
            }
            return t.createBytes(s, o)
        },
        t.createBytes = function(e, t) {
            for (var n = 0,
            r = 0,
            i = 0,
            o = new Array(t.length), s = new Array(t.length), c = 0; c < t.length; c++) {
                var l = t[c].dataCount,
                u = t[c].totalCount - l;
                r = Math.max(r, l),
                i = Math.max(i, u),
                o[c] = new Array(l);
                for (var d = 0; d < o[c].length; d++) o[c][d] = 255 & e.buffer[d + n];
                n += l;
                var f = p.getErrorCorrectPolynomial(u),
                h = new a(o[c], f.getLength() - 1),
                m = h.mod(f);
                s[c] = new Array(f.getLength() - 1);
                for (var d = 0; d < s[c].length; d++) {
                    var g = d + m.getLength() - s[c].length;
                    s[c][d] = g >= 0 ? m.get(g) : 0
                }
            }
            for (var b = 0,
            d = 0; d < t.length; d++) b += t[d].totalCount;
            for (var v = new Array(b), y = 0, d = 0; d < r; d++) for (var c = 0; c < t.length; c++) d < o[c].length && (v[y++] = o[c][d]);
            for (var d = 0; d < i; d++) for (var c = 0; c < t.length; c++) d < s[c].length && (v[y++] = s[c][d]);
            return v
        };
        for (var u = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        },
        d = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        },
        f = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        },
        p = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(e) {
                for (var t = e << 10; p.getBCHDigit(t) - p.getBCHDigit(p.G15) >= 0;) t ^= p.G15 << p.getBCHDigit(t) - p.getBCHDigit(p.G15);
                return (e << 10 | t) ^ p.G15_MASK
            },
            getBCHTypeNumber: function(e) {
                for (var t = e << 12; p.getBCHDigit(t) - p.getBCHDigit(p.G18) >= 0;) t ^= p.G18 << p.getBCHDigit(t) - p.getBCHDigit(p.G18);
                return e << 12 | t
            },
            getBCHDigit: function(e) {
                for (var t = 0; 0 != e;) t++,
                e >>>= 1;
                return t
            },
            getPatternPosition: function(e) {
                return p.PATTERN_POSITION_TABLE[e - 1]
            },
            getMask: function(e, t, n) {
                switch (e) {
                case f.PATTERN000:
                    return (t + n) % 2 == 0;
                case f.PATTERN001:
                    return t % 2 == 0;
                case f.PATTERN010:
                    return n % 3 == 0;
                case f.PATTERN011:
                    return (t + n) % 3 == 0;
                case f.PATTERN100:
                    return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                case f.PATTERN101:
                    return t * n % 2 + t * n % 3 == 0;
                case f.PATTERN110:
                    return (t * n % 2 + t * n % 3) % 2 == 0;
                case f.PATTERN111:
                    return (t * n % 3 + (t + n) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + e)
                }
            },
            getErrorCorrectPolynomial: function(e) {
                for (var t = new a([1], 0), n = 0; n < e; n++) t = t.multiply(new a([1, h.gexp(n)], 0));
                return t
            },
            getLengthInBits: function(e, t) {
                if (1 <= t && t < 10) switch (e) {
                case u.MODE_NUMBER:
                    return 10;
                case u.MODE_ALPHA_NUM:
                    return 9;
                case u.MODE_8BIT_BYTE:
                    return 8;
                case u.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + e)
                } else if (t < 27) switch (e) {
                case u.MODE_NUMBER:
                    return 12;
                case u.MODE_ALPHA_NUM:
                    return 11;
                case u.MODE_8BIT_BYTE:
                    return 16;
                case u.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + e)
                } else {
                    if (! (t < 41)) throw new Error("type:" + t);
                    switch (e) {
                    case u.MODE_NUMBER:
                        return 14;
                    case u.MODE_ALPHA_NUM:
                        return 13;
                    case u.MODE_8BIT_BYTE:
                        return 16;
                    case u.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + e)
                    }
                }
            },
            getLostPoint: function(e) {
                for (var t = e.getModuleCount(), n = 0, a = 0; a < t; a++) for (var r = 0; r < t; r++) {
                    for (var i = 0,
                    o = e.isDark(a, r), s = -1; s <= 1; s++) if (! (a + s < 0 || t <= a + s)) for (var c = -1; c <= 1; c++) r + c < 0 || t <= r + c || 0 == s && 0 == c || o == e.isDark(a + s, r + c) && i++;
                    i > 5 && (n += 3 + i - 5)
                }
                for (var a = 0; a < t - 1; a++) for (var r = 0; r < t - 1; r++) {
                    var l = 0;
                    e.isDark(a, r) && l++,
                    e.isDark(a + 1, r) && l++,
                    e.isDark(a, r + 1) && l++,
                    e.isDark(a + 1, r + 1) && l++,
                    0 != l && 4 != l || (n += 3)
                }
                for (var a = 0; a < t; a++) for (var r = 0; r < t - 6; r++) e.isDark(a, r) && !e.isDark(a, r + 1) && e.isDark(a, r + 2) && e.isDark(a, r + 3) && e.isDark(a, r + 4) && !e.isDark(a, r + 5) && e.isDark(a, r + 6) && (n += 40);
                for (var r = 0; r < t; r++) for (var a = 0; a < t - 6; a++) e.isDark(a, r) && !e.isDark(a + 1, r) && e.isDark(a + 2, r) && e.isDark(a + 3, r) && e.isDark(a + 4, r) && !e.isDark(a + 5, r) && e.isDark(a + 6, r) && (n += 40);
                for (var u = 0,
                r = 0; r < t; r++) for (var a = 0; a < t; a++) e.isDark(a, r) && u++;
                var d = Math.abs(100 * u / t / t - 50) / 5;
                return n += 10 * d
            }
        },
        h = {
            glog: function(e) {
                if (e < 1) throw new Error("glog(" + e + ")");
                return h.LOG_TABLE[e]
            },
            gexp: function(e) {
                for (; e < 0;) e += 255;
                for (; e >= 256;) e -= 255;
                return h.EXP_TABLE[e]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        },
        m = 0; m < 8; m++) h.EXP_TABLE[m] = 1 << m;
        for (var m = 8; m < 256; m++) h.EXP_TABLE[m] = h.EXP_TABLE[m - 4] ^ h.EXP_TABLE[m - 5] ^ h.EXP_TABLE[m - 6] ^ h.EXP_TABLE[m - 8];
        for (var m = 0; m < 255; m++) h.LOG_TABLE[h.EXP_TABLE[m]] = m;
        a.prototype = {
            get: function(e) {
                return this.num[e]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(e) {
                for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++) for (var r = 0; r < e.getLength(); r++) t[n + r] ^= h.gexp(h.glog(this.get(n)) + h.glog(e.get(r)));
                return new a(t, 0)
            },
            mod: function(e) {
                if (this.getLength() - e.getLength() < 0) return this;
                for (var t = h.glog(this.get(0)) - h.glog(e.get(0)), n = new Array(this.getLength()), r = 0; r < this.getLength(); r++) n[r] = this.get(r);
                for (var r = 0; r < e.getLength(); r++) n[r] ^= h.gexp(h.glog(e.get(r)) + t);
                return new a(n, 0).mod(e)
            }
        },
        r.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
        r.getRSBlocks = function(e, t) {
            var n = r.getRsBlockTable(e, t);
            if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
            for (var a = n.length / 3,
            i = [], o = 0; o < a; o++) for (var s = n[3 * o + 0], c = n[3 * o + 1], l = n[3 * o + 2], u = 0; u < s; u++) i.push(new r(c, l));
            return i
        },
        r.getRsBlockTable = function(e, t) {
            switch (t) {
            case d.L:
                return r.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case d.M:
                return r.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case d.Q:
                return r.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case d.H:
                return r.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
                return
            }
        },
        i.prototype = {
            get: function(e) {
                var t = Math.floor(e / 8);
                return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
            },
            put: function(e, t) {
                for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(e) {
                var t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0),
                e && (this.buffer[t] |= 128 >>> this.length % 8),
                this.length++
            }
        };
        var g = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
        b = function() {
            var e = function(e, t) {
                this._el = e,
                this._htOption = t
            };
            return e.prototype.draw = function(e) {
                function t(e, t) {
                    var n = document.createElementNS("http://www.w3.org/2000/svg", e);
                    for (var a in t) t.hasOwnProperty(a) && n.setAttribute(a, t[a]);
                    return n
                }
                var n = this._htOption,
                a = this._el,
                r = e.getModuleCount();
                Math.floor(n.width / r),
                Math.floor(n.height / r);
                this.clear();
                var i = t("svg", {
                    viewBox: "0 0 " + String(r) + " " + String(r),
                    width: "100%",
                    height: "100%",
                    fill: n.colorLight
                });
                i.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"),
                a.appendChild(i),
                i.appendChild(t("rect", {
                    fill: n.colorLight,
                    width: "100%",
                    height: "100%"
                })),
                i.appendChild(t("rect", {
                    fill: n.colorDark,
                    width: "1",
                    height: "1",
                    id: "template"
                }));
                for (var o = 0; o < r; o++) for (var s = 0; s < r; s++) if (e.isDark(o, s)) {
                    var c = t("use", {
                        x: String(s),
                        y: String(o)
                    });
                    c.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"),
                    i.appendChild(c)
                }
            },
            e.prototype.clear = function() {
                for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
            },
            e
        } (),
        v = "svg" === document.documentElement.tagName.toLowerCase(),
        y = v ? b: o() ?
        function() {
            function e() {
                this._elImage.src = this._elCanvas.toDataURL("image/png"),
                this._elImage.style.display = "block",
                this._elCanvas.style.display = "none"
            }
            function t(e, t) {
                var n = this;
                if (n._fFail = t, n._fSuccess = e, null === n._bSupportDataURI) {
                    var a = document.createElement("img"),
                    r = function() {
                        n._bSupportDataURI = !1,
                        n._fFail && n._fFail.call(n)
                    },
                    i = function() {
                        n._bSupportDataURI = !0,
                        n._fSuccess && n._fSuccess.call(n)
                    };
                    return a.onabort = r,
                    a.onerror = r,
                    a.onload = i,
                    void(a.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                }
                n._bSupportDataURI === !0 && n._fSuccess ? n._fSuccess.call(n) : n._bSupportDataURI === !1 && n._fFail && n._fFail.call(n)
            }
            if (this._android && this._android <= 2.1) {
                var n = 1 / window.devicePixelRatio,
                a = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function(e, t, r, i, o, s, c, l, u) {
                    if ("nodeName" in e && /img/i.test(e.nodeName)) for (var d = arguments.length - 1; d >= 1; d--) arguments[d] = arguments[d] * n;
                    else "undefined" == typeof l && (arguments[1] *= n, arguments[2] *= n, arguments[3] *= n, arguments[4] *= n);
                    a.apply(this, arguments)
                }
            }
            var r = function(e, t) {
                this._bIsPainted = !1,
                this._android = s(),
                this._htOption = t,
                this._elCanvas = document.createElement("canvas"),
                this._elCanvas.width = t.width,
                this._elCanvas.height = t.height,
                e.appendChild(this._elCanvas),
                this._el = e,
                this._oContext = this._elCanvas.getContext("2d"),
                this._bIsPainted = !1,
                this._elImage = document.createElement("img"),
                this._elImage.alt = "Scan me!",
                this._elImage.style.display = "none",
                this._el.appendChild(this._elImage),
                this._bSupportDataURI = null
            };
            return r.prototype.draw = function(e) {
                var t = this._elImage,
                n = this._oContext,
                a = this._htOption,
                r = e.getModuleCount(),
                i = a.width / r,
                o = a.height / r,
                s = Math.round(i),
                c = Math.round(o);
                t.style.display = "none",
                this.clear();
                for (var l = 0; l < r; l++) for (var u = 0; u < r; u++) {
                    var d = e.isDark(l, u),
                    f = u * i,
                    p = l * o;
                    n.strokeStyle = d ? a.colorDark: a.colorLight,
                    n.lineWidth = 1,
                    n.fillStyle = d ? a.colorDark: a.colorLight,
                    n.fillRect(f, p, i, o),
                    n.strokeRect(Math.floor(f) + .5, Math.floor(p) + .5, s, c),
                    n.strokeRect(Math.ceil(f) - .5, Math.ceil(p) - .5, s, c)
                }
                this._bIsPainted = !0
            },
            r.prototype.makeImage = function() {
                this._bIsPainted && t.call(this, e)
            },
            r.prototype.isPainted = function() {
                return this._bIsPainted
            },
            r.prototype.clear = function() {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
                this._bIsPainted = !1
            },
            r.prototype.round = function(e) {
                return e ? Math.floor(1e3 * e) / 1e3: e
            },
            r
        } () : function() {
            var e = function(e, t) {
                this._el = e,
                this._htOption = t
            };
            return e.prototype.draw = function(e) {
                for (var t = this._htOption,
                n = this._el,
                a = e.getModuleCount(), r = Math.floor(t.width / a), i = Math.floor(t.height / a), o = ['<table style="border:0;border-collapse:collapse;">'], s = 0; s < a; s++) {
                    o.push("<tr>");
                    for (var c = 0; c < a; c++) o.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + i + "px;background-color:" + (e.isDark(s, c) ? t.colorDark: t.colorLight) + ';"></td>');
                    o.push("</tr>")
                }
                o.push("</table>"),
                n.innerHTML = o.join("");
                var l = n.childNodes[0],
                u = (t.width - l.offsetWidth) / 2,
                d = (t.height - l.offsetHeight) / 2;
                u > 0 && d > 0 && (l.style.margin = d + "px " + u + "px")
            },
            e.prototype.clear = function() {
                this._el.innerHTML = ""
            },
            e
        } ();
        n = function(e, t) {
            if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: d.H
            },
            "string" == typeof t && (t = {
                text: t
            }), t) for (var n in t) this._htOption[n] = t[n];
            "string" == typeof e && (e = document.getElementById(e)),
            this._htOption.useSVG && (y = b),
            this._android = s(),
            this._el = e,
            this._oQRCode = null,
            this._oDrawing = new y(this._el, this._htOption),
            this._htOption.text && this.makeCode(this._htOption.text)
        },
        n.prototype.makeCode = function(e) {
            this._oQRCode = new t(c(e, this._htOption.correctLevel), this._htOption.correctLevel),
            this._oQRCode.addData(e),
            this._oQRCode.make(),
            this._el.title = e,
            this._oDrawing.draw(this._oQRCode),
            this.makeImage()
        },
        n.prototype.makeImage = function() {
            "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
        },
        n.prototype.clear = function() {
            this._oDrawing.clear()
        },
        n.CorrectLevel = d
    } (),
    e.exports = n
},
function(e, t, n) {
    "use strict";
    n(179);
    var a = n(181),
    r = function() {
        return {
            restrict: "A",
            replace: !0,
            scope: {},
            templateUrl: a,
            link: function(e, t, n) {
                e.type = {
                    profile: "profile",
                    normal: "normal"
                } [n.type] || "profile",
                e.content = n.content || "正在载入数据..."
            }
        }
    };
    e.exports = r
},
function(e, t) {},
,
function(e, t, n) {
    var a = "/common/page/_block/loading/loading.html",
    r = "<div class=loading><img ng-if=\"type==='profile'\" src=" + n(182) + " alt=正在加载> <img ng-if=\"type==='normal'\" class=normal src=" + n(119) + " alt=正在加载>{{content}}</div>";
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(a, r)
    }]),
    e.exports = a
},
function(e, t, n) {
    e.exports = n.p + "media/img/profile-loading.4984fa.gif"
},
function(e, t, n) {
    "use strict";
    var a = n(184);
    n(185);
    var r = function() {
        return {
            restrict: "A",
            replace: !0,
            scope: {
                data: "=",
                selected: "=choosed",
                selectfn: "="
            },
            templateUrl: a,
            link: function(e, t) {
                var n = e.$watch("data",
                function(t) {
                    "undefined" != typeof t && (e.selected = t.filter(function(e) {
                        return e.select === !0
                    })[0], e.selected || (e.defaultShow = t[0]), e.selectfn && e.selectfn(e.selected), n())
                }),
                a = t.find(".formselect-data"),
                r = angular.$(document.body),
                i = "modal-enable";
                t.on("mouseenter",
                function() {
                    a.addClass("show"),
                    r.addClass(i)
                }),
                t.on("mouseleave",
                function() {
                    r.removeClass(i),
                    a.removeClass("show")
                }),
                e.select = function(t, n) {
                    return ! n.disabled && (e.selected !== n && (e.selected = n, a[0].scrollTop = t.target.offsetTop, e.selectfn && e.$$postDigest(function() {
                        return e.selectfn(n)
                    })), void a.removeClass("show"))
                },
                e.$on("$destroy",
                function() {
                    return r.removeClass(i)
                })
            }
        }
    };
    e.exports = r
},
function(e, t) {
    var n = "/common/page/_block/formselect/formselect.html",
    a = '<div class=formselect><span class=formselect-value>{{selected.text || defaultShow.text}}</span><div class="formselect-data ui-scrollbar-light"><span ng-repeat="item in data" ng-click="select($event, item)" ng-class="{active: (selected === item && !item.disabled), disabled: item.disabled}">{{item.text}}<i class=icon-check></i></span></div><i class=icon-arrow-down></i></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t, n) {
    "use strict";
    var a = n(188);
    n(189);
    var r = function() {
        return {
            restrict: "A",
            replace: !0,
            templateUrl: a,
            scope: {
                label: "=",
                value: "=",
                config: "=",
                isreadonly: "="
            },
            link: function(e) {
                var t = {
                    style: "",
                    tipText: ["", "极差", "失望", "一般", "满意", "惊喜"]
                },
                n = angular.extend(t, e.config);
                e.config = n;
                var a = "star" === n.style;
                e.starStyle = a,
                e.starClass = a ? "icon-star-rate": "icon-star-nofeel",
                e.doRate = function(t, n) {
                    if (!e.isreadonly || !t) {
                        if (e.value.virtualValue = n, t) {
                            if (n = t.target.getAttribute("data-level"), e.rateLevel = n, e.value.virtualValue = n, "mouseout" === t.type) return e.value.virtualValue = e.value.value,
                            void e.doRate(null, e.value.value);
                            "click" === t.type && (e.value.value = n)
                        } else e.rateLevel = n;
                        a || (e.starClass = ["icon-star-bad", "icon-star-bad", "icon-star-nofeel", "icon-star-good", "icon-star-good"][n - 1] || "icon-star-nofeel")
                    }
                },
                e.$watch("value",
                function(t) {
                    void 0 !== t && (e.copyVal = angular.copy(t), e.doRate(null, t.value))
                }),
                e.$watch("value.text",
                function(t) {
                    void 0 !== t && t.length > 255 && (e.value.text = t.substr(0, 255))
                }),
                e.addRate = function(t, n) {
                    e.value.text += n + " ",
                    angular.element(t.target).remove()
                }
            }
        }
    };
    e.exports = r
},
function(e, t) {
    var n = "/common/page/_block/rate/rate.html",
    a = '<div class=rate><p class="rate-star level{{rateLevel}}" ng-class="{readonly: isreadonly, star: starStyle}"><span class=rate-name ng-if=label ng-bind=label></span> <span ng-click=doRate($event) ng-mouseover=doRate($event) ng-mouseleave=doRate($event) data-level={{rateLevel}}><a class={{starClass}} href=javascript: data-level=1 ng-class="{active : rateLevel >= 1}"></a> <a class={{starClass}} href=javascript: data-level=2 ng-class="{active : rateLevel >= 2}"></a> <a class={{starClass}} href=javascript: data-level=3 ng-class="{active : rateLevel >= 3}"></a> <a class={{starClass}} href=javascript: data-level=4 ng-class="{active : rateLevel >= 4}"></a> <a class={{starClass}} href=javascript: data-level=5 ng-class="{active : rateLevel >= 5}"></a></span> <span ng-if=config.tipText class="active rate-star-text" ng-bind=config.tipText[rateLevel]></span></p><div ng-if=config.mutiContent class=rate-content ng-show="config.mutiContent && value.value > 0" ng-hide="copyVal.value || copyVal.text === \'\'"><textarea ng-attr-placeholder="{{config.placeholder[rateLevel - 1]}}" ng-model=value.text></textarea><p><span class=rate-content-text ng-repeat="text in config.textMore[rateLevel - 1]" ng-click="addRate($event, text)">{{text}}</span></p></div><div ng-if=!config.mutiContent class="rate-content simple" ng-show="!config.mutiContent && value.value > 0" ng-hide="copyVal.value || value.value === 0"><textarea ng-attr-placeholder="{{config.placeholder[rateLevel - 1]}}" ng-model=value.text></textarea></div><p class="rate-content text" ng-if=copyVal.text ng-bind=copyVal.text ng-class="{simple: !mutiContent}"></p></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {},
,
function(e, t) {
    "use strict";
    e.exports = angular.module("batchrequest", ["httphook"]).factory("batchrequest.BatchHandler", ["$http", "$q",
    function(e, t) {
        return function(n, a) {
            var r, i = [],
            o = function() {
                var t = i.splice(0, i.length);
                if (r = null, 1 === t.length) return t[0].promise.resolve();
                var o = {
                    timeout: 1e4,
                    requests: []
                };
                angular.forEach(t,
                function(e) {
                    var t = {
                        method: e.req.method,
                        url: e.req.url
                    };
                    "function" == typeof a && a(t),
                    o.requests.push(t)
                }),
                e.post(n, o).then(function(e) {
                    angular.forEach(e.data,
                    function(e, n) {
                        var a = t[n];
                        a.res.status = e.code,
                        a.res.data = e.body,
                        a.promise.resolve(!1)
                    })
                },
                function() {
                    angular.forEach(t,
                    function(e, n) {
                        t[n].promise.resolve()
                    });
                    var e = location.host.replace(/^.*?(?=[^.\d]+\.[^.\d]+$)/, "");
                    document.cookie = "BATCH=false; Domain=" + e + "; Path=/; Expires=" + new Date(Date.now() + 864e5).toGMTString()
                })
            },
            s = function(e) {
                i.push(e),
                r || (r = setTimeout(o))
            };
            return function(e, n) {
                if ("false" !== document.cookie.match(/(?:; |^)BATCH=([^;]*)|$/)[1]) {
                    var a = t.defer();
                    return s({
                        req: e,
                        res: n,
                        promise: a
                    }),
                    a.promise
                }
            }
        }
    }])
},
function(e, t, n) {
    "use strict";
    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0,
            n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var r = n(193);
    e.exports = function(e) {
        return ["$routeProvider", "$locationProvider",
        function(t, n) {
            n.html5Mode(!0),
            e.forEach(function(e) {
                return t.when.apply(t, a(e))
            }),
            t.when("/404", r),
            t.otherwise({
                redirectTo: "/404"
            })
        }]
    }
},
function(e, t, n) {
    "use strict";
    var a = n(194);
    n(195);
    var r = ["$scope",
    function(e) {
        e.SEO.title = "出错啦 | 饿了么网上订餐"
    }];
    e.exports = {
        templateUrl: a,
        controller: r
    }
},
function(e, t) {
    var n = "/entry/error/404/404.html",
    a = '<div class=error404><img class=error404-img src=http://fuss10.elemecdn.com/c/fc/0bf0f273cc4d059cd23f49c1255f1png.png alt="饿了么 404"><h2 class=error404-title>对不起，页面好像被送餐员带走了...</h2><p>出现了这个问题，也许是因为您访问了不正确的链接地址，<br>但更可能是由于我们对程序做出了更新，没有及时通知您所造成的。</p><div class=error404-action>您现在可以： <a href="/"><i class="error404-action-icon icon-404-home"></i>返回首页</a> <a href=mailto:feedback@ele.me><i class="error404-action-icon icon-404-email"></i>帮我们把它找回来</a></div></div>';
    window.angular.module("ng").run(["$templateCache",
    function(e) {
        e.put(n, a)
    }]),
    e.exports = n
},
function(e, t) {}]);