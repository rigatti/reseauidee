/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
;
/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 27.02.2015
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.12
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.rampinteractive.co.uk/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010-2015 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/

/*
*
* Changelog
* $Date: 2010-12-12 (Wed, 12 Dec 2010) $
* $version: 1.0.0
* $version: 1.0.1 - removed multibyte comments
*
* $Date: 2011-21-02 (Mon, 21 Feb 2011) $
* $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
*					- changed handler signatures so one handler can be used for multiple events
* $Date: 2011-23-02 (Wed, 23 Feb 2011) $
* $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
*					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
* $version: 1.2.1 	- removed console log!
*
* $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
*
* $Date: 2011-28-04 (Thurs, 28 April 2011) $
* $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
*
* $Date: 2011-27-09 (Tues, 27 September 2011) $
* $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
*
* $Date: 2012-14-05 (Mon, 14 May 2012) $
* $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
*
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
*
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
*
* $Date: 2012-06-06 (Wed, 06 June 2012) $
* $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
*
* $Date: 2012-05-06 (Fri, 05 June 2012) $
* $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
*
* $Date: 2012-29-07 (Sun, 29 July 2012) $
* $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
* 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
*
* $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
* $version: 1.3.3	- Code tidy prep for minefied version
*
* $Date: 2012-04-10 (wed, 4 Oct 2012) $
* $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
*
* $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
* $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.
*
* $Date: 2012-22-10 (Mon, 22 Oct 2012) $
* $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
*					- Fixed bug with IE and eventPreventDefault()
* $Date: 2013-01-12 (Fri, 12 Jan 2013) $
* $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
*					- made the demo site all static local HTML pages so they can be run locally by a developer
*					- added jsDoc comments and added documentation for the plugin	
*					- code tidy
*					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
* $Date: 2013-03-23 (Sat, 23 Mar 2013) $
* $version: 1.6.1	- Added support for ie8 touch events
* $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
*                   - Deprecated the 'click' handler in favour of tap.
*                   - added cancelThreshold property
*                   - added option method to update init options at runtime
* $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
*
* $Date: 2013-04-04 (Thurs, 04 April 2013) $
* $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
*
* $Date: 2013-08-24 (Sat, 24 Aug 2013) $
* $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
*
* $Date: 2014-06-04 (Wed, 04 June 2014) $
* $version 1.6.6 	- Merge of pull requests.
*    				- IE10 touch support 
*    				- Only prevent default event handling on valid swipe
*    				- Separate license/changelog comment
*    				- Detect if the swipe is valid at the end of the touch event.
*    				- Pass fingerdata to event handlers. 
*    				- Add 'hold' gesture 
*    				- Be more tolerant about the tap distance
*    				- Typos and minor fixes
*
* $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
* $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
*
* $Date: 2015-2-2 (Mon, 2 Feb 2015) $
* $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
*					- Fixed issue with swipe and pinch not triggering at the same time
*
* $Date: 2015-9-6 (Tues, 9 June 2015) $
* $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
*					- Added scrolling demo
*					- Added version property to plugin
*
* $Date: 2015-1-10 (Wed, 1 October 2015) $
* $version 1.6.10    - Added PR from beatspace to fix tap events
* $version 1.6.11    - Added PRs from indri-indri ( Doc tidyup), kkirsche ( Bower tidy up ), UziTech (preventDefaultEvents fixes )
*					 - Allowed setting multiple options via .swipe("options", options_hash) and more simply .swipe(options_hash) or exisitng instances 				
* $version 1.6.12    - Fixed bug with multi finger releases above 2 not triggering events
*/

/**
 * See (http://jquery.com/).
 * @name $
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */
 
/**
 * See (http://jquery.com/)
 * @name fn
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */



(function (factory) {
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {
	"use strict";

	//Constants
	var VERSION = "1.6.12",
		LEFT = "left",
		RIGHT = "right",
		UP = "up",
		DOWN = "down",
		IN = "in",
		OUT = "out",

		NONE = "none",
		AUTO = "auto",
		
		SWIPE = "swipe",
		PINCH = "pinch",
		TAP = "tap",
		DOUBLE_TAP = "doubletap",
		LONG_TAP = "longtap",
		HOLD = "hold",
		
		HORIZONTAL = "horizontal",
		VERTICAL = "vertical",

		ALL_FINGERS = "all",
		
		DOUBLE_TAP_THRESHOLD = 10,

		PHASE_START = "start",
		PHASE_MOVE = "move",
		PHASE_END = "end",
		PHASE_CANCEL = "cancel",

		SUPPORTS_TOUCH = 'ontouchstart' in window,
		
		SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
		
		SUPPORTS_POINTER = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,

		PLUGIN_NS = 'TouchSwipe';



	/**
	* The default configuration, and available options to configure touch swipe with.
	* You can set the default values by updating any of the properties prior to instantiation.
	* @name $.fn.swipe.defaults
	* @namespace
	* @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
	* @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe. 
	* @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
	* @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch. 
	* @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe. 
	* @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release. 
	* @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
	* @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
	* @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
	* @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
	* @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
	* @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
	* @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
	* @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
	* @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
	* @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
	* @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
	* @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not. 
	* @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
	* @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#longTapThreshold}
	* @property (function) [hold=null] A handler triggered when a user reaches longTapThreshold on the item. See {@link $.fn.swipe.defaults#longTapThreshold}
	* @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically. 
	* @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers. 
	* @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
										<code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
										<code>"none"</code> : the page will not scroll when user swipes. <br/>
										<code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
										<code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
	* @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices. 
	* @property {string} [excludedElements="button, input, select, textarea, a, .noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes all form, input, select, button, anchor and .noSwipe elements. 
	* @property {boolean} [preventDefaultEvents=true] by default default events are cancelled, so the page doesn't move.  You can dissable this so both native events fire as well as your handlers. 
	
	*/
	var defaults = {
		fingers: 1, 		
		threshold: 75, 	
		cancelThreshold:null,	
		pinchThreshold:20,
		maxTimeThreshold: null, 
		fingerReleaseThreshold:250, 
		longTapThreshold:500,
		doubleTapThreshold:200,
		swipe: null, 		
		swipeLeft: null, 	
		swipeRight: null, 	
		swipeUp: null, 		
		swipeDown: null, 	
		swipeStatus: null, 	
		pinchIn:null,		
		pinchOut:null,		
		pinchStatus:null,	
		click:null, //Deprecated since 1.6.2
		tap:null,
		doubleTap:null,
		longTap:null, 		
		hold:null, 
		triggerOnTouchEnd: true, 
		triggerOnTouchLeave:false, 
		allowPageScroll: "auto", 
		fallbackToMouseEvents: true,	
		excludedElements:"label, button, input, select, textarea, a, .noSwipe",
		preventDefaultEvents:true
	};



	/**
	* Applies TouchSwipe behaviour to one or more jQuery objects.
	* The TouchSwipe plugin can be instantiated via this method, or methods within 
	* TouchSwipe can be executed via this method as per jQuery plugin architecture.
	* An existing plugin can have its options changed simply by re calling .swipe(options)
	* @see TouchSwipe
	* @class
	* @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
	* the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
	* If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the 
	* configuration properties defined in the object. See TouchSwipe
	*
	*/
	$.fn.swipe = function (method) {
		var $this = $(this),
			plugin = $this.data(PLUGIN_NS);

		//Check if we are already instantiated and trying to execute a method	
		if (plugin && typeof method === 'string') {
			if (plugin[method]) {
				return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.swipe');
			}
		}

		//Else update existing plugin with new options hash
		else if (plugin && typeof method === 'object') {
			plugin['option'].apply(this, arguments);
		}

		//Else not instantiated and trying to pass init object (or nothing)
		else if (!plugin && (typeof method === 'object' || !method)) {
			return init.apply(this, arguments);
		} 

		return $this;
	};
	
	/**
	 * The version of the plugin
	 * @readonly
	 */
	$.fn.swipe.version = VERSION;



	//Expose our defaults so a user could override the plugin defaults
	$.fn.swipe.defaults = defaults;

	/**
	* The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers. 
	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	* @namespace
	* @readonly
	* @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
	* @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
	* @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
	* @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
	*/
	$.fn.swipe.phases = {
		PHASE_START: PHASE_START,
		PHASE_MOVE: PHASE_MOVE,
		PHASE_END: PHASE_END,
		PHASE_CANCEL: PHASE_CANCEL
	};

	/**
	* The direction constants that are passed to the event handlers. 
	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	* @namespace
	* @readonly
	* @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
	* @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
	* @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
	* @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
	* @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
	* @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
	*/
	$.fn.swipe.directions = {
		LEFT: LEFT,
		RIGHT: RIGHT,
		UP: UP,
		DOWN: DOWN,
		IN : IN,
		OUT: OUT
	};
	
	/**
	* The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
	* These properties are read only
	* @namespace
	* @readonly
	* @see $.fn.swipe.defaults#allowPageScroll
	* @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
	* @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
	* @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
	* @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
	*/
	$.fn.swipe.pageScroll = {
		NONE: NONE,
		HORIZONTAL: HORIZONTAL,
		VERTICAL: VERTICAL,
		AUTO: AUTO
	};

	/**
	* Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the 
	* options object, as well as the value of the <code>fingers</code> event property.
	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	* @namespace
	* @readonly
	* @see $.fn.swipe.defaults#fingers
	* @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
	* @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>2</code>.
	* @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>3</code>.
	* @property {string} FOUR Constant indicating 4 finger are to be detected / were detected. Not all devices support this. Value is <code>4</code>.
	* @property {string} FIVE Constant indicating 5 finger are to be detected / were detected. Not all devices support this. Value is <code>5</code>.
	* @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
	*/
	$.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		FOUR: 4,
		FIVE: 5,
		ALL: ALL_FINGERS
	};

	/**
	* Initialise the plugin for each DOM element matched
	* This creates a new instance of the main TouchSwipe class for each DOM element, and then
	* saves a reference to that instance in the elements data property.
	* @internal
	*/
	function init(options) {
		//Prep and extend the options
		if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
			options.allowPageScroll = NONE;
		}
		
        //Check for deprecated options
		//Ensure that any old click handlers are assigned to the new tap, unless we have a tap
		if(options.click!==undefined && options.tap===undefined) {
		    options.tap = options.click;
		}

		if (!options) {
			options = {};
		}
		
        //pass empty object so we dont modify the defaults
		options = $.extend({}, $.fn.swipe.defaults, options);

		//For each element instantiate the plugin
		return this.each(function () {
			var $this = $(this);

			//Check we havent already initialised the plugin
			var plugin = $this.data(PLUGIN_NS);

			if (!plugin) {
				plugin = new TouchSwipe(this, options);
				$this.data(PLUGIN_NS, plugin);
			}
		});
	}

	/**
	* Main TouchSwipe Plugin Class.
	* Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
	* @private
	* @name TouchSwipe
	* @param {DOMNode} element The HTML DOM object to apply to plugin to
	* @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
	* @see $.fh.swipe.defaults
	* @see $.fh.swipe
    * @class
	*/
	function TouchSwipe(element, options) {

		//take a local/instacne level copy of the options - should make it this.options really...
		var options = $.extend({}, options);

		var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents),
            START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
            MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
            END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
            LEAVE_EV = useTouchEvents ? null : 'mouseleave', //we manually detect leave on touch devices, so null event here
            CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');



		//touch properties
		var distance = 0,
			direction = null,
			duration = 0,
			startTouchesDistance = 0,
			endTouchesDistance = 0,
			pinchZoom = 1,
			pinchDistance = 0,
			pinchDirection = 0,
			maximumsMap=null;

		
		
		//jQuery wrapped element for this instance
		var $element = $(element);
		
		//Current phase of th touch cycle
		var phase = "start";

		// the current number of fingers being used.
		var fingerCount = 0; 			

		//track mouse points / delta
		var fingerData = {};

		//track times
		var startTime = 0,
			endTime = 0,
			previousTouchEndTime=0,
			fingerCountAtRelease=0,
			doubleTapStartTime=0;

		//Timeouts
		var singleTapTimeout=null,
			holdTimeout=null;
        
		// Add gestures to all swipable areas if supported
		try {
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
		}
		catch (e) {
			$.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
		}

		//
		//Public methods
		//
		
		/**
		* re-enables the swipe plugin with the previous configuration
		* @function
		* @name $.fn.swipe#enable
		* @return {DOMNode} The Dom element that was registered with TouchSwipe 
		* @example $("#element").swipe("enable");
		*/
		this.enable = function () {
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
			return $element;
		};

		/**
		* disables the swipe plugin
		* @function
		* @name $.fn.swipe#disable
		* @return {DOMNode} The Dom element that is now registered with TouchSwipe
	    * @example $("#element").swipe("disable");
		*/
		this.disable = function () {
			removeListeners();
			return $element;
		};

		/**
		* Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
		* @function
		* @name $.fn.swipe#destroy
		* @example $("#element").swipe("destroy");
		*/
		this.destroy = function () {
			removeListeners();
			$element.data(PLUGIN_NS, null);
			$element = null;
		};

		
        /**
         * Allows run time updating of the swipe configuration options.
         * @function
    	 * @name $.fn.swipe#option
    	 * @param {String} property The option property to get or set, or a has of multiple options to set
         * @param {Object} [value] The value to set the property to
		 * @return {Object} If only a property name is passed, then that property value is returned. If nothing is passed the current options hash is returned.
		 * @example $("#element").swipe("option", "threshold"); // return the threshold
         * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
         * @example $("#element").swipe("option", {threshold:100, fingers:3} ); // set multiple properties after init
         * @example $("#element").swipe({threshold:100, fingers:3} ); // set multiple properties after init - the "option" method is optional!
         * @example $("#element").swipe("option"); // Return the current options hash
         * @see $.fn.swipe.defaults
         *
         */
        this.option = function (property, value) {
			
			if(typeof property === 'object') {
        		options = $.extend(options, property);
        	} else if(options[property]!==undefined) {
                if(value===undefined) {
                    return options[property];
                } else {
                    options[property] = value;
                }
            } else if (!property) {
            	return options;   
            } else {
                $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
            }

            return null;
        }

       

		//
		// Private methods
		//
		
		//
		// EVENTS
		//
		/**
		* Event handler for a touch start event.
		* Stops the default click event from triggering and stores where we touched
		* @inner
		* @param {object} jqEvent The normalised jQuery event object.
		*/
		function touchStart(jqEvent) {

			//If we already in a touch event (a finger already in use) then ignore subsequent ones..
			if( getTouchInProgress() )
				return;
			
			//Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
			if( $(jqEvent.target).closest( options.excludedElements, $element ).length>0 ) 
				return;
				
			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			
			var ret,
				touches = event.touches,
				evt = touches ? touches[0] : event;

			phase = PHASE_START;

			//If we support touches, get the finger count
			if (touches) {
				// get the total number of fingers touching the screen
				fingerCount = touches.length;
			}
			//Else this is the desktop, so stop the browser from dragging content
			else if(options.preventDefaultEvents !== false) {
				jqEvent.preventDefault(); //call this on jq event so we are cross browser
			}

			//clear vars..
			distance = 0;
			direction = null;
			pinchDirection=null;
			duration = 0;
			startTouchesDistance=0;
			endTouchesDistance=0;
			pinchZoom = 1;
			pinchDistance = 0;
			maximumsMap=createMaximumsData();
			cancelMultiFingerRelease();

			//Create the default finger data
			createFingerData( 0, evt );

			// check the number of fingers is what we are looking for, or we are capturing pinches
			if (!touches || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
				// get the coordinates of the touch
				startTime = getTimeStamp();
				
				if(fingerCount==2) {
					//Keep track of the initial pinch distance, so we can calculate the diff later
					//Store second finger data as start
					createFingerData( 1, touches[1] );
					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
				}
				
				if (options.swipeStatus || options.pinchStatus) {
					ret = triggerHandler(event, phase);
				}
			}
			else {
				//A touch with more or less than the fingers we are looking for, so cancel
				ret = false; 
			}

			//If we have a return value from the users handler, then return and cancel
			if (ret === false) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
				return ret;
			}
			else {
				if (options.hold) {
					holdTimeout = setTimeout($.proxy(function() {
						//Trigger the event
						$element.trigger('hold', [event.target]);
						//Fire the callback
						if(options.hold) {
							ret = options.hold.call($element, event, event.target);
						}
					}, this), options.longTapThreshold );
				}

				setTouchInProgress(true);
			}

            return null;
		};
		
		
		
		/**
		* Event handler for a touch move event. 
		* If we change fingers during move, then cancel the event
		* @inner
		* @param {object} jqEvent The normalised jQuery event object.
		*/
		function touchMove(jqEvent) {
			
			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			
			//If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
			if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
				return;

			var ret,
				touches = event.touches,
				evt = touches ? touches[0] : event;
			

			//Update the  finger data 
			var currentFinger = updateFingerData(evt);
			endTime = getTimeStamp();
			
			if (touches) {
				fingerCount = touches.length;
			}

			if (options.hold)
				clearTimeout(holdTimeout);

			phase = PHASE_MOVE;

			//If we have 2 fingers get Touches distance as well
			if(fingerCount==2) {
				
				//Keep track of the initial pinch distance, so we can calculate the diff later
				//We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
				if(startTouchesDistance==0) {
					//Create second finger if this is the first time...
					createFingerData( 1, touches[1] );
					
					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
				} else {
					//Else just update the second finger
					updateFingerData(touches[1]);
				
					endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
					pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
				}
				
				
				pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
				pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
			}
			
			
			

			if ( (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !touches || hasPinches() ) {
				
				direction = calculateDirection(currentFinger.start, currentFinger.end);
				
				//Check if we need to prevent default event (page scroll / pinch zoom) or not
				validateDefaultEvent(jqEvent, direction);

				//Distance and duration are all off the main finger
				distance = calculateDistance(currentFinger.start, currentFinger.end);
				duration = calculateDuration();

                //Cache the maximum distance we made in this direction
                setMaxDistance(direction, distance);


				if (options.swipeStatus || options.pinchStatus) {
					ret = triggerHandler(event, phase);
				}
				
				
				//If we trigger end events when threshold are met, or trigger events when touch leaves element
				if(!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
					
					var inBounds = true;
					
					//If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
					if(options.triggerOnTouchLeave) {
						var bounds = getbounds( this );
						inBounds = isInBounds( currentFinger.end, bounds );
					}
					
					//Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
					if(!options.triggerOnTouchEnd && inBounds) {
						phase = getNextPhase( PHASE_MOVE );
					} 
					//We end if out of bounds here, so set current phase to END, and check if its modified 
					else if(options.triggerOnTouchLeave && !inBounds ) {
						phase = getNextPhase( PHASE_END );
					}
						
					if(phase==PHASE_CANCEL || phase==PHASE_END)	{
						triggerHandler(event, phase);
					}				
				}
			}
			else {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}

			if (ret === false) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}
		}




		/**
		* Event handler for a touch end event. 
		* Calculate the direction and trigger events
		* @inner
		* @param {object} jqEvent The normalised jQuery event object.
		*/
		function touchEnd(jqEvent) {
			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
			    touches = event.touches;

			//If we are still in a touch with the device wait a fraction and see if the other finger comes up
			//if it does within the threshold, then we treat it as a multi release, not a single release and end the touch / swipe
			if (touches) {
				if(touches.length && !inMultiFingerRelease()) {
					startMultiFingerRelease();
					return true;
				} else if (touches.length && inMultiFingerRelease()) {
					return true;
				}
			}

			//If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
			//This is used to allow 2 fingers to release fractionally after each other, whilst maintainig the event as containg 2 fingers, not 1
			if(inMultiFingerRelease()) {	
				fingerCount=fingerCountAtRelease;
			}	

			//Set end of swipe
			endTime = getTimeStamp();
			
			//Get duration incase move was never fired
			duration = calculateDuration();
			
			//If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
			if(didSwipeBackToCancel() || !validateSwipeDistance()) {
			    phase = PHASE_CANCEL;
                triggerHandler(event, phase);
			} else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd == false && phase === PHASE_MOVE)) {
				//call this on jq event so we are cross browser 
				if(options.preventDefaultEvents !== false) {
					jqEvent.preventDefault(); 
				}
				phase = PHASE_END;
                triggerHandler(event, phase);
			}
			//Special cases - A tap should always fire on touch end regardless,
			//So here we manually trigger the tap end handler by itself
			//We dont run trigger handler as it will re-trigger events that may have fired already
			else if (!options.triggerOnTouchEnd && hasTap()) {
                //Trigger the pinch events...
			    phase = PHASE_END;
			    triggerHandlerForGesture(event, phase, TAP);
			}
			else if (phase === PHASE_MOVE) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}

			setTouchInProgress(false);

            return null;
		}



		/**
		* Event handler for a touch cancel event. 
		* Clears current vars
		* @inner
		*/
		function touchCancel() {
			// reset the variables back to default values
			fingerCount = 0;
			endTime = 0;
			startTime = 0;
			startTouchesDistance=0;
			endTouchesDistance=0;
			pinchZoom=1;
			
			//If we were in progress of tracking a possible multi touch end, then re set it.
			cancelMultiFingerRelease();
			
			setTouchInProgress(false);
		}
		
		
		/**
		* Event handler for a touch leave event. 
		* This is only triggered on desktops, in touch we work this out manually
		* as the touchleave event is not supported in webkit
		* @inner
		*/
		function touchLeave(jqEvent) {
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			
			//If we have the trigger on leave property set....
			if(options.triggerOnTouchLeave) {
				phase = getNextPhase( PHASE_END );
				triggerHandler(event, phase);
			}
		}
		
		/**
		* Removes all listeners that were associated with the plugin
		* @inner
		*/
		function removeListeners() {
			$element.unbind(START_EV, touchStart);
			$element.unbind(CANCEL_EV, touchCancel);
			$element.unbind(MOVE_EV, touchMove);
			$element.unbind(END_EV, touchEnd);
			
			//we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
			if(LEAVE_EV) { 
				$element.unbind(LEAVE_EV, touchLeave);
			}
			
			setTouchInProgress(false);
		}

		
		/**
		 * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
		 */
		function getNextPhase(currentPhase) {
			
			var nextPhase = currentPhase;
			
			// Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
			var validTime = validateSwipeTime();
			var validDistance = validateSwipeDistance();
			var didCancel = didSwipeBackToCancel();
						
			//If we have exceeded our time, then cancel	
			if(!validTime || didCancel) {
				nextPhase = PHASE_CANCEL;
			}
			//Else if we are moving, and have reached distance then end
			else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) ) {
				nextPhase = PHASE_END;
			} 
			//Else if we have ended by leaving and didn't reach distance, then cancel
			else if (!validDistance && currentPhase==PHASE_END && options.triggerOnTouchLeave) {
				nextPhase = PHASE_CANCEL;
			}
			
			return nextPhase;
		}
		
		
		/**
		* Trigger the relevant event handler
		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
		* @param {object} event the original event object
		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
		* @inner
		*/
		function triggerHandler(event, phase) {

			var ret,
				touches = event.touches;
			
			//Swipes and pinches are not mutually exclusive - can happend at same time, so need to trigger 2 events potentially
			if( (didSwipe() && hasSwipes()) || (didPinch() && hasPinches()) ) {
				// SWIPE GESTURES
				if(didSwipe() && hasSwipes()) { //hasSwipes as status needs to fire even if swipe is invalid
					//Trigger the swipe events...
					ret = triggerHandlerForGesture(event, phase, SWIPE);
				}	

				// PINCH GESTURES (if the above didn't cancel)
				if((didPinch() && hasPinches()) && ret!==false) {
					//Trigger the pinch events...
					ret = triggerHandlerForGesture(event, phase, PINCH);
				}
			} 
			else {
			 
				// CLICK / TAP (if the above didn't cancel)
				if(didDoubleTap() && ret!==false) {
					//Trigger the tap events...
					ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
				}
				
				// CLICK / TAP (if the above didn't cancel)
				else if(didLongTap() && ret!==false) {
					//Trigger the tap events...
					ret = triggerHandlerForGesture(event, phase, LONG_TAP);
				}

				// CLICK / TAP (if the above didn't cancel)
				else if(didTap() && ret!==false) {
					//Trigger the tap event..
					ret = triggerHandlerForGesture(event, phase, TAP);
				}
			}
			
			// If we are cancelling the gesture, then manually trigger the reset handler
			if (phase === PHASE_CANCEL) {
				if(hasSwipes() ) {
					ret = triggerHandlerForGesture(event, phase, SWIPE);
				}
			
				if(hasPinches()) {
					ret = triggerHandlerForGesture(event, phase, PINCH);
				}
				touchCancel(event);
			}
			
			// If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
			if(phase === PHASE_END) {
				//If we support touch, then check that all fingers are off before we cancel
				if (touches) {
					if(!touches.length) {
						touchCancel(event);	
					}
				} 
				else {
					touchCancel(event);
				}
			}
					
			return ret;
		}
		
		
		
		/**
		* Trigger the relevant event handler
		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
		* @param {object} event the original event object
		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
		* @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
		* @return Boolean False, to indicate that the event should stop propagation, or void.
		* @inner
		*/
		function triggerHandlerForGesture(event, phase, gesture) {	
			
			var ret;
			
			//SWIPES....
			if(gesture==SWIPE) {
				//Trigger status every time..
				
				//Trigger the event...
				$element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData]);
				
				//Fire the callback
				if (options.swipeStatus) {
					ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData);
					//If the status cancels, then dont run the subsequent event handlers..
					if(ret===false) return false;
				}
				
				
				
				
				if (phase == PHASE_END && validateSwipe()) {
					//Fire the catch all event
					$element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData]);
					
					//Fire catch all callback
					if (options.swipe) {
						ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData);
						//If the status cancels, then dont run the subsequent event handlers..
						if(ret===false) return false;
					}
					
					//trigger direction specific event handlers	
					switch (direction) {
						case LEFT:
							//Trigger the event
							$element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeLeft) {
								ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
	
						case RIGHT:
							//Trigger the event
					        $element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeRight) {
								ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
	
						case UP:
							//Trigger the event
					        $element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeUp) {
								ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
	
						case DOWN:
							//Trigger the event
					        $element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeDown) {
								ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
					}
				}
			}
			
			
			//PINCHES....
			if(gesture==PINCH) {
				//Trigger the event
			     $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
					
                //Fire the callback
				if (options.pinchStatus) {
					ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
					//If the status cancels, then dont run the subsequent event handlers..
					if(ret===false) return false;
				}
				
				if(phase==PHASE_END && validatePinch()) {
					
					switch (pinchDirection) {
						case IN:
							//Trigger the event
                            $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
                    
                            //Fire the callback
                            if (options.pinchIn) {
								ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
							}
							break;
						
						case OUT:
							//Trigger the event
                            $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
                    
                            //Fire the callback
                            if (options.pinchOut) {
								ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
							}
							break;	
					}
				}
			}
			


                
	    		
			if(gesture==TAP) {
				if(phase === PHASE_CANCEL || phase === PHASE_END) {
					
    			    
    			    //Cancel any existing double tap
				    clearTimeout(singleTapTimeout);
    			    //Cancel hold timeout
				    clearTimeout(holdTimeout);
				           
					//If we are also looking for doubelTaps, wait incase this is one...
				    if(hasDoubleTap() && !inDoubleTap()) {
				        //Cache the time of this tap
                        doubleTapStartTime = getTimeStamp();
                       
				        //Now wait for the double tap timeout, and trigger this single tap
				        //if its not cancelled by a double tap
				        singleTapTimeout = setTimeout($.proxy(function() {
        			        doubleTapStartTime=null;
        			        //Trigger the event
                			$element.trigger('tap', [event.target]);

                        
                            //Fire the callback
                            if(options.tap) {
                                ret = options.tap.call($element, event, event.target);
                            }
    			        }, this), options.doubleTapThreshold );
    			    	
    			    } else {
                        doubleTapStartTime=null;
                        
                        //Trigger the event
                        $element.trigger('tap', [event.target]);

                        
                        //Fire the callback
                        if(options.tap) {
                            ret = options.tap.call($element, event, event.target);
                        }
	    		    }
	    		}
			}
			
			else if (gesture==DOUBLE_TAP) {
				if(phase === PHASE_CANCEL || phase === PHASE_END) {
					//Cancel any pending singletap 
				    clearTimeout(singleTapTimeout);
				    doubleTapStartTime=null;
				        
                    //Trigger the event
                    $element.trigger('doubletap', [event.target]);
                
                    //Fire the callback
                    if(options.doubleTap) {
                        ret = options.doubleTap.call($element, event, event.target);
                    }
	    		}
			}
			
			else if (gesture==LONG_TAP) {
				if(phase === PHASE_CANCEL || phase === PHASE_END) {
					//Cancel any pending singletap (shouldnt be one)
				    clearTimeout(singleTapTimeout);
				    doubleTapStartTime=null;
				        
                    //Trigger the event
                    $element.trigger('longtap', [event.target]);
                
                    //Fire the callback
                    if(options.longTap) {
                        ret = options.longTap.call($element, event, event.target);
                    }
	    		}
			}				
				
			return ret;
		}



		
		//
		// GESTURE VALIDATION
		//
		
		/**
		* Checks the user has swipe far enough
		* @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
		* If no threshold was set, then we return true.
		* @inner
		*/
		function validateSwipeDistance() {
			var valid = true;
			//If we made it past the min swipe distance..
			if (options.threshold !== null) {
				valid = distance >= options.threshold;
			}
			
            return valid;
		}
		
		/**
		* Checks the user has swiped back to cancel.
		* @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
		* If no cancelThreshold was set, then we return true.
		* @inner
		*/
		function didSwipeBackToCancel() {
            var cancelled = false;
    		if(options.cancelThreshold !== null && direction !==null)  {
    		    cancelled =  (getMaxDistance( direction ) - distance) >= options.cancelThreshold;
			}
			
			return cancelled;
		}

		/**
		* Checks the user has pinched far enough
		* @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
		* If no threshold was set, then we return true.
		* @inner
		*/
		function validatePinchDistance() {
			if (options.pinchThreshold !== null) {
				return pinchDistance >= options.pinchThreshold;
			}
			return true;
		}

		/**
		* Checks that the time taken to swipe meets the minimum / maximum requirements
		* @return Boolean
		* @inner
		*/
		function validateSwipeTime() {
			var result;
			//If no time set, then return true

			if (options.maxTimeThreshold) {
				if (duration >= options.maxTimeThreshold) {
					result = false;
				} else {
					result = true;
				}
			}
			else {
				result = true;
			}

			return result;
		}

	

		/**
		* Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
		* This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
		* @param {object} jqEvent The normalised jQuery representation of the event object.
		* @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
		* @see $.fn.swipe.directions
		* @inner
		*/
		function validateDefaultEvent(jqEvent, direction) {

			//If we have no pinches, then do this
			//If we have a pinch, and we we have 2 fingers or more down, then dont allow page scroll.

			//If the option is set, allways allow the event to bubble up (let user handle wiredness)
			if( options.preventDefaultEvents === false) {
				return;
			}

			if (options.allowPageScroll === NONE) {
				jqEvent.preventDefault();
			} else {
				var auto = options.allowPageScroll === AUTO;

				switch (direction) {
					case LEFT:
						if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
							jqEvent.preventDefault();
						}
						break;

					case RIGHT:
						if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
							jqEvent.preventDefault();
						}
						break;

					case UP:
						if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
							jqEvent.preventDefault();
						}
						break;

					case DOWN:
						if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
							jqEvent.preventDefault();
						}
						break;
				}
			}

		}


		// PINCHES
		/**
		 * Returns true of the current pinch meets the thresholds
		 * @return Boolean
		 * @inner
		*/
		function validatePinch() {
		    var hasCorrectFingerCount = validateFingers();
		    var hasEndPoint = validateEndPoint();
			var hasCorrectDistance = validatePinchDistance();
			return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
			
		}
		
		/**
		 * Returns true if any Pinch events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasPinches() {
			//Enure we dont return 0 or null for false values
			return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
		}
		
		/**
		 * Returns true if we are detecting pinches, and have one
		 * @return Boolean
		 * @inner
		 */
		function didPinch() {
			//Enure we dont return 0 or null for false values
			return !!(validatePinch() && hasPinches());
		}




		// SWIPES
		/**
		 * Returns true if the current swipe meets the thresholds
		 * @return Boolean
		 * @inner
		*/
		function validateSwipe() {
			//Check validity of swipe
			var hasValidTime = validateSwipeTime();
			var hasValidDistance = validateSwipeDistance();	
			var hasCorrectFingerCount = validateFingers();
		    var hasEndPoint = validateEndPoint();
		    var didCancel = didSwipeBackToCancel();	
		    
			// if the user swiped more than the minimum length, perform the appropriate action
			// hasValidDistance is null when no distance is set 
			var valid =  !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
			
			return valid;
		}
		
		/**
		 * Returns true if any Swipe events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasSwipes() {
			//Enure we dont return 0 or null for false values
			return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
		}
		
		
		/**
		 * Returns true if we are detecting swipes and have one
		 * @return Boolean
		 * @inner
		*/
		function didSwipe() {
			//Enure we dont return 0 or null for false values
			return !!(validateSwipe() && hasSwipes());
		}

        /**
		 * Returns true if we have matched the number of fingers we are looking for
		 * @return Boolean
		 * @inner
		*/
        function validateFingers() {
            //The number of fingers we want were matched, or on desktop we ignore
    		return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
    	}
        
        /**
		 * Returns true if we have an end point for the swipe
		 * @return Boolean
		 * @inner
		*/
        function validateEndPoint() {
            //We have an end value for the finger
		    return fingerData[0].end.x !== 0;
        }

		// TAP / CLICK
		/**
		 * Returns true if a click / tap events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.tap) ;
		}
		
		/**
		 * Returns true if a double tap events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasDoubleTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.doubleTap) ;
		}
		
		/**
		 * Returns true if any long tap events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasLongTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.longTap) ;
		}
		
		/**
		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
		 * @return Boolean
		 * @inner
		*/
		function validateDoubleTap() {
		    if(doubleTapStartTime==null){
		        return false;
		    }
		    var now = getTimeStamp();
		    return (hasDoubleTap() && ((now-doubleTapStartTime) <= options.doubleTapThreshold));
		}
		
		/**
		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
		 * @return Boolean
		 * @inner
		*/
		function inDoubleTap() {
		    return validateDoubleTap();
		}
		
		
		/**
		 * Returns true if we have a valid tap
		 * @return Boolean
		 * @inner
		*/
		function validateTap() {
		    return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold));
		}
		
		/**
		 * Returns true if we have a valid long tap
		 * @return Boolean
		 * @inner
		*/
		function validateLongTap() {
		    //slight threshold on moving finger
            return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD)); 
		}
		
		/**
		 * Returns true if we are detecting taps and have one
		 * @return Boolean
		 * @inner
		*/
		function didTap() {
		    //Enure we dont return 0 or null for false values
			return !!(validateTap() && hasTap());
		}
		
		
		/**
		 * Returns true if we are detecting double taps and have one
		 * @return Boolean
		 * @inner
		*/
		function didDoubleTap() {
		    //Enure we dont return 0 or null for false values
			return !!(validateDoubleTap() && hasDoubleTap());
		}
		
		/**
		 * Returns true if we are detecting long taps and have one
		 * @return Boolean
		 * @inner
		*/
		function didLongTap() {
		    //Enure we dont return 0 or null for false values
			return !!(validateLongTap() && hasLongTap());
		}
		
		
		
		
		// MULTI FINGER TOUCH
		/**
		 * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
		 * @inner
		*/
		function startMultiFingerRelease() {
			previousTouchEndTime = getTimeStamp();
			fingerCountAtRelease = event.touches.length+1;
		}
		
		/**
		 * Cancels the tracking of time between 2 finger releases, and resets counters
		 * @inner
		*/
		function cancelMultiFingerRelease() {
			previousTouchEndTime = 0;
			fingerCountAtRelease = 0;
		}
		
		/**
		 * Checks if we are in the threshold between 2 fingers being released 
		 * @return Boolean
		 * @inner
		*/
		function inMultiFingerRelease() {
			
			var withinThreshold = false;
			
			if(previousTouchEndTime) {	
				var diff = getTimeStamp() - previousTouchEndTime	
				if( diff<=options.fingerReleaseThreshold ) {
					withinThreshold = true;
				}
			}
			
			return withinThreshold;	
		}
		

		/**
		* gets a data flag to indicate that a touch is in progress
		* @return Boolean
		* @inner
		*/
		function getTouchInProgress() {
			//strict equality to ensure only true and false are returned
			return !!($element.data(PLUGIN_NS+'_intouch') === true);
		}
		
		/**
		* Sets a data flag to indicate that a touch is in progress
		* @param {boolean} val The value to set the property to
		* @inner
		*/
		function setTouchInProgress(val) {
			
			//Add or remove event listeners depending on touch status
			if(val===true) {
				$element.bind(MOVE_EV, touchMove);
				$element.bind(END_EV, touchEnd);

				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
				if(LEAVE_EV) { 
					$element.bind(LEAVE_EV, touchLeave);
				}
			} else {

				$element.unbind(MOVE_EV, touchMove, false);
				$element.unbind(END_EV, touchEnd, false);
			
				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
				if(LEAVE_EV) { 
					$element.unbind(LEAVE_EV, touchLeave, false);
				}
			}
			
		
			//strict equality to ensure only true and false can update the value
			$element.data(PLUGIN_NS+'_intouch', val === true);
		}
		
		
		/**
		 * Creates the finger data for the touch/finger in the event object.
		 * @param {int} id The id to store the finger data under (usually the order the fingers were pressed)
		 * @param {object} evt The event object containing finger data
		 * @return finger data object
		 * @inner
		*/
		function createFingerData(id, evt) {
			var f = {
				start:{ x: 0, y: 0 },
				end:{ x: 0, y: 0 }
			};
			f.start.x = f.end.x = evt.pageX||evt.clientX;
			f.start.y = f.end.y = evt.pageY||evt.clientY;
			fingerData[id] = f;
			return f;
		}
		
		/**
		 * Updates the finger data for a particular event object
		 * @param {object} evt The event object containing the touch/finger data to upadte
		 * @return a finger data object.
		 * @inner
		*/
		function updateFingerData(evt) {
			var id = evt.identifier!==undefined ? evt.identifier : 0; 
			var f = getFingerData( id );
			
			if (f === null) {
				f = createFingerData(id, evt);
			}

			f.end.x = evt.pageX||evt.clientX;
			f.end.y = evt.pageY||evt.clientY;

			return f;
		}
		
		/**
		 * Returns a finger data object by its event ID.
		 * Each touch event has an identifier property, which is used 
		 * to track repeat touches
		 * @param {int} id The unique id of the finger in the sequence of touch events.
		 * @return a finger data object.
		 * @inner
		*/
		function getFingerData(id) {
			return fingerData[id] || null;
		}

		
		/**
		 * Sets the maximum distance swiped in the given direction. 
		 * If the new value is lower than the current value, the max value is not changed.
		 * @param {string}  direction The direction of the swipe
		 * @param {int}  distance The distance of the swipe
		 * @inner
		*/
		function setMaxDistance(direction, distance) {
    		distance = Math.max(distance, getMaxDistance(direction) );
    		maximumsMap[direction].distance = distance;
		}
        
        /**
		 * gets the maximum distance swiped in the given direction. 
		 * @param {string}  direction The direction of the swipe
		 * @return int  The distance of the swipe
		 * @inner
		*/        
		function getMaxDistance(direction) {
			if (maximumsMap[direction]) return maximumsMap[direction].distance;
			return undefined;
		}
		
		/**
		 * Creats a map of directions to maximum swiped values.
		 * @return Object A dictionary of maximum values, indexed by direction.
		 * @inner
		*/
		function createMaximumsData() {
			var maxData={};
			maxData[LEFT]=createMaximumVO(LEFT);
			maxData[RIGHT]=createMaximumVO(RIGHT);
			maxData[UP]=createMaximumVO(UP);
			maxData[DOWN]=createMaximumVO(DOWN);
			
			return maxData;
		}
		
		/**
		 * Creates a map maximum swiped values for a given swipe direction
		 * @param {string} The direction that these values will be associated with
		 * @return Object Maximum values
		 * @inner
		*/
		function createMaximumVO(dir) {
		    return { 
		        direction:dir, 
		        distance:0
		    }
		}
		
		
		//
		// MATHS / UTILS
		//

		/**
		* Calculate the duration of the swipe
		* @return int
		* @inner
		*/
		function calculateDuration() {
			return endTime - startTime;
		}
		
		/**
		* Calculate the distance between 2 touches (pinch)
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return int;
		* @inner
		*/
		function calculateTouchesDistance(startPoint, endPoint) {
			var diffX = Math.abs(startPoint.x - endPoint.x);
			var diffY = Math.abs(startPoint.y - endPoint.y);
				
			return Math.round(Math.sqrt(diffX*diffX+diffY*diffY));
		}
		
		/**
		* Calculate the zoom factor between the start and end distances
		* @param {int} startDistance Distance (between 2 fingers) the user started pinching at
	    * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
	    * @return float The zoom value from 0 to 1.
		* @inner
		*/
		function calculatePinchZoom(startDistance, endDistance) {
			var percent = (endDistance/startDistance) * 1;
			return percent.toFixed(2);
		}
		
		
		/**
		* Returns the pinch direction, either IN or OUT for the given points
		* @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
		* @see $.fn.swipe.directions
		* @inner
		*/
		function calculatePinchDirection() {
			if(pinchZoom<1) {
				return OUT;
			}
			else {
				return IN;
			}
		}
		
		
		/**
		* Calculate the length / distance of the swipe
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return int
		* @inner
		*/
		function calculateDistance(startPoint, endPoint) {
			return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
		}

		/**
		* Calculate the angle of the swipe
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return int
		* @inner
		*/
		function calculateAngle(startPoint, endPoint) {
			var x = startPoint.x - endPoint.x;
			var y = endPoint.y - startPoint.y;
			var r = Math.atan2(y, x); //radians
			var angle = Math.round(r * 180 / Math.PI); //degrees

			//ensure value is positive
			if (angle < 0) {
				angle = 360 - Math.abs(angle);
			}

			return angle;
		}

		/**
		* Calculate the direction of the swipe
		* This will also call calculateAngle to get the latest angle of swipe
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
		* @see $.fn.swipe.directions
		* @inner
		*/
		function calculateDirection(startPoint, endPoint ) {
			var angle = calculateAngle(startPoint, endPoint);

			if ((angle <= 45) && (angle >= 0)) {
				return LEFT;
			} else if ((angle <= 360) && (angle >= 315)) {
				return LEFT;
			} else if ((angle >= 135) && (angle <= 225)) {
				return RIGHT;
			} else if ((angle > 45) && (angle < 135)) {
				return DOWN;
			} else {
				return UP;
			}
		}
		

		/**
		* Returns a MS time stamp of the current time
		* @return int
		* @inner
		*/
		function getTimeStamp() {
			var now = new Date();
			return now.getTime();
		}
		
		
		
		/**
		 * Returns a bounds object with left, right, top and bottom properties for the element specified.
		 * @param {DomNode} The DOM node to get the bounds for.
		 */
		function getbounds( el ) {
			el = $(el);
			var offset = el.offset();
			
			var bounds = {	
					left:offset.left,
					right:offset.left+el.outerWidth(),
					top:offset.top,
					bottom:offset.top+el.outerHeight()
					}
			
			return bounds;	
		}
		
		
		/**
		 * Checks if the point object is in the bounds object.
		 * @param {object} point A point object.
		 * @param {int} point.x The x value of the point.
		 * @param {int} point.y The x value of the point.
		 * @param {object} bounds The bounds object to test
		 * @param {int} bounds.left The leftmost value
		 * @param {int} bounds.right The righttmost value
		 * @param {int} bounds.top The topmost value
		* @param {int} bounds.bottom The bottommost value
		 */
		function isInBounds(point, bounds) {
			return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
		};
	
	
	}
	
	


/**
 * A catch all handler that is triggered for all swipe directions. 
 * @name $.fn.swipe#swipe
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 



/**
 * A handler that is triggered for "left" swipes.
 * @name $.fn.swipe#swipeLeft
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler that is triggered for "right" swipes.
 * @name $.fn.swipe#swipeRight
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */

/**
 * A handler that is triggered for "up" swipes.
 * @name $.fn.swipe#swipeUp
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler that is triggered for "down" swipes.
 * @name $.fn.swipe#swipeDown
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
 * This is triggered regardless of swipe thresholds.
 * @name $.fn.swipe#swipeStatus
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
 * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler triggered for pinch in events.
 * @name $.fn.swipe#pinchIn
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 * @param {object} fingerData The coordinates of fingers in event
 */

/**
 * A handler triggered for pinch out events.
 * @name $.fn.swipe#pinchOut
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 * @param {object} fingerData The coordinates of fingers in event
 */ 

/**
 * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
 * @name $.fn.swipe#pinchStatus
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 * @param {object} fingerData The coordinates of fingers in event
 */

/**
 * A click handler triggered when a user simply clicks, rather than swipes on an element.
 * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
 * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
 * Use the <code>tap</code> event instead.
 * @name $.fn.swipe#click
 * @event
 * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead 
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
 /**
 * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
 * @name $.fn.swipe#tap
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
/**
 * A double tap handler triggered when a user double clicks or taps on an element.
 * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property. 
 * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
 * as the script needs to check if its a double tap.
 * @name $.fn.swipe#doubleTap
 * @see  $.fn.swipe.defaults#doubleTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
 /**
 * A long tap handler triggered once a tap has been release if the tap was longer than the longTapThreshold.
 * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property. 
 * @name $.fn.swipe#longTap
 * @see  $.fn.swipe.defaults#longTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */

  /**
 * A hold tap handler triggered as soon as the longTapThreshold is reached
 * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property. 
 * @name $.fn.swipe#hold
 * @see  $.fn.swipe.defaults#longTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */

}));


// THEMEPUNCH INTERNAL HANDLINGS
if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

// THEMEPUNCH LOGS
if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }

// SANDBOX GREENSOCK
var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}

/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-03
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(window, moduleName) {

		"use strict";
		var _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function(ns) {
				var a = ns.split("."),
					p = _globals, i;
				for (i = 0; i < a.length; i++) {
					p[a[i]] = p = p[a[i]] || {};
				}
				return p;
			},
			gs = _namespace("com.greensock"),
			_tinyNum = 0.0000000001,
			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			_emptyFunc = function() {},
			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
				var toString = Object.prototype.toString,
					array = toString.call([]);
				return function(obj) {
					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
				};
			}()),
			a, i, p, _ticker, _tickerActive,
			_defLookup = {},

			/**
			 * @constructor
			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
			 *
			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
			 * sandbox the banner one like:
			 *
			 * <script>
			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
			 * </script>
			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
			 * <script>
			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
			 * </script>
			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
			 * <script>
			 *     gs.TweenLite.to(...); //would use v1.7
			 *     TweenLite.to(...); //would use v1.6
			 * </script>
			 *
			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
			 */
			Definition = function(ns, dependencies, func, global) {
				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
				_defLookup[ns] = this;
				this.gsClass = null;
				this.func = func;
				var _classes = [];
				this.check = function(init) {
					var i = dependencies.length,
						missing = i,
						cur, a, n, cl, hasModule;
					while (--i > -1) {
						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
							_classes[i] = cur.gsClass;
							missing--;
						} else if (init) {
							cur.sc.push(this);
						}
					}
					if (missing === 0 && func) {
						a = ("com.greensock." + ns).split(".");
						n = a.pop();
						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

						//exports to multiple environments
						if (global) {
							_globals[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
							hasModule = (typeof(module) !== "undefined" && module.exports);
							if (!hasModule && typeof(define) === "function" && define.amd){ //AMD
								define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
							} else if (ns === moduleName && hasModule){ //node
								module.exports = cl;
							}
						}
						for (i = 0; i < this.sc.length; i++) {
							this.sc[i].check();
						}
					}
				};
				this.check(true);
			},

			//used to create Definition instances (which basically registers a class that has dependencies).
			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
				return new Definition(ns, dependencies, func, global);
			},

			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
			_class = gs._class = function(ns, func, global) {
				func = func || function() {};
				_gsDefine(ns, [], function(){ return func; }, global);
				return func;
			};

		_gsDefine.globals = _globals;



/*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
		var _baseParams = [0, 0, 1, 1],
			_blankArray = [],
			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
				this._func = func;
				this._type = type || 0;
				this._power = power || 0;
				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
			}, true),
			_easeMap = Ease.map = {},
			_easeReg = Ease.register = function(ease, names, types, create) {
				var na = names.split(","),
					i = na.length,
					ta = (types || "easeIn,easeOut,easeInOut").split(","),
					e, name, j, type;
				while (--i > -1) {
					name = na[i];
					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
					j = ta.length;
					while (--j > -1) {
						type = ta[j];
						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
					}
				}
			};

		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function(p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
				pw = this._power,
				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
		};

		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i]+",Power"+i;
			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


/*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
		var EventDispatcher = _class("events.EventDispatcher", function(target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;

		p.addEventListener = function(type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
				index = 0,
				listener, i;
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
		};

		p.removeEventListener = function(type, callback) {
			var list = this._listeners[type], i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};

		p.dispatchEvent = function(type) {
			var list = this._listeners[type],
				i, t, listener;
			if (list) {
				i = list.length;
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener) {
						if (listener.up) {
							listener.c.call(listener.s || t, {type:type, target:t});
						} else {
							listener.c.call(listener.s || t);
						}
					}
				}
			}
		};


/*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
 		var _reqAnimFrame = window.requestAnimationFrame,
			_cancelAnimFrame = window.cancelAnimationFrame,
			_getTime = Date.now || function() {return new Date().getTime();},
			_lastUpdate = _getTime();

		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms","moz","webkit","o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}

		_class("Ticker", function(fps, useRAF) {
			var _self = this,
				_startTime = _getTime(),
				_useRAF = (useRAF !== false && _reqAnimFrame),
				_lagThreshold = 500,
				_adjustedLag = 33,
				_tickWord = "tick", //helps reduce gc burden
				_fps, _req, _id, _gap, _nextTime,
				_tick = function(manual) {
					var elapsed = _getTime() - _lastUpdate,
						overlap, dispatch;
					if (elapsed > _lagThreshold) {
						_startTime += elapsed - _adjustedLag;
					}
					_lastUpdate += elapsed;
					_self.time = (_lastUpdate - _startTime) / 1000;
					overlap = _self.time - _nextTime;
					if (!_fps || overlap > 0 || manual === true) {
						_self.frame++;
						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
						dispatch = true;
					}
					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
						_id = _req(_tick);
					}
					if (dispatch) {
						_self.dispatchEvent(_tickWord);
					}
				};

			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function() {
				_tick(true);
			};

			_self.lagSmoothing = function(threshold, adjustedLag) {
				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
			};

			_self.sleep = function() {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};

			_self.wake = function() {
				if (_id !== null) {
					_self.sleep();
				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
					_lastUpdate = _getTime() - _lagThreshold + 5;
				}
				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};

			_self.fps = function(value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};

			_self.useRAF = function(value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);

			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function() {
				if (_useRAF && _self.frame < 5) {
					_self.useRAF(false);
				}
			}, 1500);
		});

		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;


/*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
		var Animation = _class("core.Animation", function(duration, vars) {
				this.vars = vars = vars || {};
				this._duration = this._totalDuration = duration || 0;
				this._delay = Number(vars.delay) || 0;
				this._timeScale = 1;
				this._active = (vars.immediateRender === true);
				this.data = vars.data;
				this._reversed = (vars.reversed === true);

				if (!_rootTimeline) {
					return;
				}
				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
					_ticker.wake();
				}

				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
				tl.add(this, tl._time);

				if (this.vars.paused) {
					this.paused(true);
				}
			});

		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;


		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function() {
				if (_tickerActive && _getTime() - _lastUpdate > 2000) {
					_ticker.wake();
				}
				setTimeout(_checkTimeout, 2000);
			};
		_checkTimeout();


		p.play = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};

		p.pause = function(atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};

		p.resume = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};

		p.seek = function(time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};

		p.restart = function(includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
		};

		p.reverse = function(from, suppressEvents) {
			if (from != null) {
				this.seek((from || this.totalDuration()), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};

		p.render = function(time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};

		p.invalidate = function() {
			this._time = this._totalTime = 0;
			this._initted = this._gc = false;
			this._rawPrevTime = -1;
			if (this._gc || !this.timeline) {
				this._enabled(true);
			}
			return this;
		};

		p.isActive = function() {
			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
				startTime = this._startTime,
				rawTime;
			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale));
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};


		p._kill = function(vars, target) {
			return this._enabled(false, false);
		};

		p.kill = function(vars, target) {
			this._kill(vars, target);
			return this;
		};

		p._uncache = function(includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};

		p._swapSelfInParams = function(params) {
			var i = params.length,
				copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};

		p._callback = function(type) {
			var v = this.vars;
			v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
		};

//----Animation getters/setters --------------------------------------------------------

		p.eventCallback = function(type, callback, params, scope) {
			if ((type || "").substr(0,2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};

		p.delay = function(value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime( this._startTime + value - this._delay );
			}
			this._delay = value;
			return this;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};

		p.totalDuration = function(value) {
			this._dirty = false;
			return (!arguments.length) ? this._totalDuration : this.duration(value);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
						tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					if (_lazyTweens.length) {
						_lazyRender();
					}
					this.render(time, suppressEvents, false);
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
						_lazyRender();
					}
				}
			}
			return this;
		};

		p.progress = p.totalProgress = function(value, suppressEvents) {
			var duration = this.duration();
			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
		};

		p.startTime = function(value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};

		p.endTime = function(includeRepeats) {
			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
		};

		p.timeScale = function(value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				var pauseTime = this._pauseTime,
					t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
			}
			this._timeScale = value;
			return this._uncache(false);
		};

		p.reversed = function(value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
			}
			return this;
		};

		p.paused = function(value) {
			if (!arguments.length) {
				return this._paused;
			}
			var tl = this._timeline,
				raw, elapsed;
			if (value != this._paused) if (tl) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				raw = tl.rawTime();
				elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};


/*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});

		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = p._recent = null;
		p._sortChildren = false;

		p.add = p.insert = function(child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale);
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			this._recent = child;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};

		p._remove = function(tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}

				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}
				tween._next = tween._prev = tween.timeline = null;
				if (tween === this._recent) {
					this._recent = this._last;
				}

				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			var tween = this._first,
				next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || (time >= tween._startTime && !tween._paused)) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
					}
				}
				tween = next;
			}
		};

		p.rawTime = function() {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};

/*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
		var TweenLite = _class("TweenLite", function(target, duration, vars) {
				Animation.call(this, duration, vars);
				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

				if (target == null) {
					throw "Cannot tween a null target.";
				}

				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
					overwrite = this.vars.overwrite,
					i, targ, targets;

				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					this._propLookup = [];
					this._siblings = [];
					for (i = 0; i < targets.length; i++) {
						targ = targets[i];
						if (!targ) {
							targets.splice(i--, 1);
							continue;
						} else if (typeof(targ) === "string") {
							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
							if (typeof(targ) === "string") {
								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
							}
							continue;
						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
							targets.splice(i--, 1);
							this._targets = targets = targets.concat(_slice(targ));
							continue;
						}
						this._siblings[i] = _register(targ, this, false);
						if (overwrite === 1) if (this._siblings[i].length > 1) {
							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
						}
					}

				} else {
					this._propLookup = {};
					this._siblings = _register(target, this, false);
					if (overwrite === 1) if (this._siblings.length > 1) {
						_applyOverwrite(target, this, null, 1, this._siblings);
					}
				}
				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(-this._delay);
				}
			}, true),
			_isSelector = function(v) {
				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
			},
			_autoCSS = function(vars, target) {
				var css = {},
					p;
				for (p in vars) {
					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
						css[p] = vars[p];
						delete vars[p];
					}
				}
				vars.css = css;
			};

		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = p._lazy = false;

		TweenLite.version = "1.18.0";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = 120;
		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
			_ticker.lagSmoothing(threshold, adjustedLag);
		};

		TweenLite.selector = window.$ || window.jQuery || function(e) {
			var selector = window.$ || window.jQuery;
			if (selector) {
				TweenLite.selector = selector;
				return selector(e);
			}
			return (typeof(document) === "undefined") ? e : (document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
		};

		var _lazyTweens = [],
			_lazyLookup = {},
			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
			_setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val;
				while (pt) {
					val = !pt.blob ? pt.c * v + pt.s : v ? this.join("") : this.start;
					if (pt.r) {
						val = Math.round(val);
					} else if (val < min) if (val > -min) { //prevents issues with converting very small numbers to strings in the browser
						val = 0;
					}
					if (!pt.f) {
						pt.t[pt.p] = val;
					} else if (pt.fp) {
						pt.t[pt.p](pt.fp, val);
					} else {
						pt.t[pt.p](val);
					}
					pt = pt._next;
				}
			},
			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
			_blobDif = function(start, end, filter, pt) {
				var a = [start, end],
					charIndex = 0,
					s = "",
					color = 0,
					startNums, endNums, num, i, l, nonNumbers, currentNum;
				a.start = start;
				if (filter) {
					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
					start = a[0];
					end = a[1];
				}
				a.length = 0;
				startNums = start.match(_numbersExp) || [];
				endNums = end.match(_numbersExp) || [];
				if (pt) {
					pt._next = null;
					pt.blob = 1;
					a._firstPT = pt; //apply last in the linked list (which means inserting it first)
				}
				l = endNums.length;
				for (i = 0; i < l; i++) {
					currentNum = endNums[i];
					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
					charIndex += nonNumbers.length;
					if (color) { //sense rgba() values and round them.
						color = (color + 1) % 5;
					} else if (nonNumbers.substr(-5) === "rgba(") {
						color = 1;
					}
					if (currentNum === startNums[i] || startNums.length <= i) {
						s += currentNum;
					} else {
						if (s) {
							a.push(s);
							s = "";
						}
						num = parseFloat(startNums[i]);
						a.push(num);
						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, r:(color && color < 4)};
						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
					}
					charIndex += currentNum.length;
				}
				s += end.substr(charIndex);
				if (s) {
					a.push(s);
				}
				a.setRatio = _setRatio;
				return a;
			},
			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
			_addPropTween = function(target, prop, start, end, overwriteProp, round, funcParam, stringFilter) {
				var s = (start === "get") ? target[prop] : start,
					type = typeof(target[prop]),
					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, r:round, pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
					blob, getterName;
				if (type !== "number") {
					if (type === "function" && start === "get") {
						getterName = ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3));
						pt.s = s = funcParam ? target[getterName](funcParam) : target[getterName]();
					}
					if (typeof(s) === "string" && (funcParam || isNaN(s))) {
						//a blob (string that has multiple numbers in it)
						pt.fp = funcParam;
						blob = _blobDif(s, end, stringFilter || TweenLite.defaultStringFilter, pt);
						pt = {t:blob, p:"setRatio", s:0, c:1, f:2, pg:0, n:overwriteProp || prop, pr:0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
					} else if (!isRelative) {
						pt.c = (parseFloat(end) - parseFloat(s)) || 0;
					}
				}
				if (pt.c) { //only add it to the linked list if there's a change.
					if ((pt._next = this._firstPT)) {
						pt._next._prev = pt;
					}
					this._firstPT = pt;
					return pt;
				}
			},
			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
			_plugins = TweenLite._plugins = {},
			_tweenLookup = _internals.tweenLookup = {},
			_tweenLookupNum = 0,
			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1},
			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
			_nextGCFrame = 30,
			_lazyRender = _internals.lazyRender = function() {
				var i = _lazyTweens.length,
					tween;
				_lazyLookup = {};
				while (--i > -1) {
					tween = _lazyTweens[i];
					if (tween && tween._lazy !== false) {
						tween.render(tween._lazy[0], tween._lazy[1], true);
						tween._lazy = false;
					}
				}
				_lazyTweens.length = 0;
			};

		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;
		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

		Animation._updateRoot = TweenLite.render = function() {
				var i, a, p;
				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
					_lazyRender();
				}
				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
				if (_lazyTweens.length) {
					_lazyRender();
				}
				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
					for (p in _tweenLookup) {
						a = _tweenLookup[p].tweens;
						i = a.length;
						while (--i > -1) {
							if (a[i]._gc) {
								a.splice(i, 1);
							}
						}
						if (a.length === 0) {
							delete _tweenLookup[p];
						}
					}
					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
					p = _rootTimeline._first;
					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
						while (p && p._paused) {
							p = p._next;
						}
						if (!p) {
							_ticker.sleep();
						}
					}
				}
			};

		_ticker.addEventListener("tick", Animation._updateRoot);

		var _register = function(target, tween, scrub) {
				var id = target._gsTweenID, a, i;
				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
					_tweenLookup[id] = {target:target, tweens:[]};
				}
				if (tween) {
					a = _tweenLookup[id].tweens;
					a[(i = a.length)] = tween;
					if (scrub) {
						while (--i > -1) {
							if (a[i] === tween) {
								a.splice(i, 1);
							}
						}
					}
				}
				return _tweenLookup[id].tweens;
			},
			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
				var func = overwrittenTween.vars.onOverwrite, r1, r2;
				if (func) {
					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				func = TweenLite.onOverwrite;
				if (func) {
					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				return (r1 !== false && r2 !== false);
			},
			_applyOverwrite = function(target, tween, props, mode, siblings) {
				var i, changed, curTween, l;
				if (mode === 1 || mode >= 4) {
					l = siblings.length;
					for (i = 0; i < l; i++) {
						if ((curTween = siblings[i]) !== tween) {
							if (!curTween._gc) {
								if (curTween._kill(null, target, tween)) {
									changed = true;
								}
							}
						} else if (mode === 5) {
							break;
						}
					}
					return changed;
				}
				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
				var startTime = tween._startTime + _tinyNum,
					overlaps = [],
					oCount = 0,
					zeroDur = (tween._duration === 0),
					globalStart;
				i = siblings.length;
				while (--i > -1) {
					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
						//ignore
					} else if (curTween._timeline !== tween._timeline) {
						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
							overlaps[oCount++] = curTween;
						}
					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
						overlaps[oCount++] = curTween;
					}
				}

				i = oCount;
				while (--i > -1) {
					curTween = overlaps[i];
					if (mode === 2) if (curTween._kill(props, target, tween)) {
						changed = true;
					}
					if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
							continue;
						}
						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
							changed = true;
						}
					}
				}
				return changed;
			},
			_checkOverlap = function(tween, reference, zeroDur) {
				var tl = tween._timeline,
					ts = tl._timeScale,
					t = tween._startTime;
				while (tl._timeline) {
					t += tl._startTime;
					ts *= tl._timeScale;
					if (tl._paused) {
						return -100;
					}
					tl = tl._timeline;
				}
				t /= ts;
				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
			};


//---- TweenLite instance methods -----------------------------------------------------------------------------

		p._init = function() {
			var v = this.vars,
				op = this._overwrittenProps,
				dur = this._duration,
				immediate = !!v.immediateRender,
				ease = v.ease,
				i, initPlugins, pt, p, startVars;
			if (v.startAt) {
				if (this._startAt) {
					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
					this._startAt.kill();
				}
				startVars = {};
				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
					startVars[p] = v.startAt[p];
				}
				startVars.overwrite = false;
				startVars.immediateRender = true;
				startVars.lazy = (immediate && v.lazy !== false);
				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
				this._startAt = TweenLite.to(this.target, 0, startVars);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (this._startAt) {
					this._startAt.render(-1, true);
					this._startAt.kill();
					this._startAt = null;
				} else {
					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
						immediate = false;
					}
					pt = {};
					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					pt.lazy = (immediate && v.lazy !== false);
					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!immediate) {
						this._startAt._init(); //ensures that the initial values are recorded
						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
						if (this.vars.immediateRender) {
							this._startAt = null;
						}
					} else if (this._time === 0) {
						return;
					}
				}
			}
			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			if (v.easeParams instanceof Array && ease.config) {
				this._ease = ease.config.apply(ease, v.easeParams);
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;

			if (this._targets) {
				i = this._targets.length;
				while (--i > -1) {
					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null)) ) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op);
			}

			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};

		p._initProps = function(target, propLookup, siblings, overwrittenProps) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}

			if (_lazyLookup[target._gsTweenID]) {
				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
			}

			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}

				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this)) {

					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority};
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}
					if (pt._next) {
						pt._next._prev = pt;
					}

				} else {
					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter);
				}
			}

			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps);
			}
			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
				_lazyLookup[target._gsTweenID] = true;
			}
			return initPlugins;
		};

		p.render = function(time, suppressEvents, force) {
			var prevTime = this._time,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, rawPrevTime;
			if (time >= duration) {
				this._totalTime = this._time = duration;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				if (!this._reversed ) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (time === 0 || prevRawPrevTime < 0 || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;

				if (this._easeType) {
					var r = time / duration, type = this._easeType, pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else {
					this.ratio = this._ease.getRatio(time / duration);
				}
			}

			if (this._time === prevTime && !force) {
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
					this._time = this._totalTime = prevTime;
					this._rawPrevTime = prevRawPrevTime;
					_lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
				this._lazy = false;
			}
			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, suppressEvents, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._time !== prevTime || isComplete) {
					this._callback("onUpdate");
				}
			}
			if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
					this._startAt.render(time, suppressEvents, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};

		p._kill = function(vars, target, overwritingTween) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				this._lazy = false;
				return this._enabled(false, false);
			}
			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i], overwritingTween)) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}

				if (propLookup) {
					killProps = vars || propLookup;
					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
						for (p in killProps) {
							if (propLookup[p]) {
								if (!killed) {
									killed = [];
								}
								killed.push(p);
							}
						}
						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
							return false;
						}
					}

					for (p in killProps) {
						if ((pt = propLookup[p])) {
							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
								if (pt.f) {
									pt.t[pt.p](pt.s);
								} else {
									pt.t[pt.p] = pt.s;
								}
								changed = true;
							}
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};

		p.invalidate = function() {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
			this._propLookup = (this._targets) ? {} : [];
			Animation.prototype.invalidate.call(this);
			if (this.vars.immediateRender) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(-this._delay);
			}
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
					i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
			}
			return false;
		};


//----TweenLite static methods -----------------------------------------------------

		TweenLite.to = function(target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};

		TweenLite.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenLite(target, duration, vars);
		};

		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenLite(target, duration, toVars);
		};

		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
		};

		TweenLite.set = function(target, vars) {
			return new TweenLite(target, 0, vars);
		};

		TweenLite.getTweensOf = function(target, onlyActive) {
			if (target == null) { return []; }
			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
						a.splice(i, 1);
					}
				}
			}
			return a;
		};

		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
			if (typeof(onlyActive) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
				i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};



/*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
					this._overwriteProps = (props || "").split(",");
					this._propName = this._overwriteProps[0];
					this._priority = priority || 0;
					this._super = TweenPlugin.prototype;
				}, true);

		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.18.0";
		TweenPlugin.API = 2;
		p._firstPT = null;
		p._addTween = _addPropTween;
		p.setRatio = _setRatio;

		p._kill = function(lookup) {
			var a = this._overwriteProps,
				pt = this._firstPT,
				i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};

		p._roundProps = function(lookup, value) {
			var pt = this._firstPT;
			while (pt) {
				if (lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ])) { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					pt.r = value;
				}
				pt = pt._next;
			}
		};

		TweenLite._onPluginEvent = function(type, tween) {
			var pt = tween._firstPT,
				changed, pt2, first, last, next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};

		TweenPlugin.activate = function(plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[(new plugins[i]())._propName] = plugins[i];
				}
			}
			return true;
		};

		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function(config) {
			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
			var propName = config.propName,
				priority = config.priority || 0,
				overwriteProps = config.overwriteProps,
				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_roundProps", initAll:"_onInitAllProps"},
				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
					function() {
						TweenPlugin.call(this, propName, priority);
						this._overwriteProps = overwriteProps || [];
					}, (config.global === true)),
				p = Plugin.prototype = new TweenPlugin(propName),
				prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof(config[prop]) === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};


		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: com.greensock." + p);
				}
			}
		}

		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

})((typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window, "TweenLite");

/*!
 * VERSION: 1.18.0
 * DATE: 2015-08-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	_gsScope._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {

		var TimelineLite = function(vars) {
				SimpleTimeline.call(this, vars);
				this._labels = {};
				this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
				this.smoothChildTiming = (this.vars.smoothChildTiming === true);
				this._sortChildren = true;
				this._onUpdate = this.vars.onUpdate;
				var v = this.vars,
					val, p;
				for (p in v) {
					val = v[p];
					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
						v[p] = this._swapSelfInParams(val);
					}
				}
				if (_isArray(v.tweens)) {
					this.add(v.tweens, 0, v.align, v.stagger);
				}
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = TweenLite._internals,
			_internals = TimelineLite._internals = {},
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _gsScope._gsDefine.globals,
			_copy = function(vars) {
				var copy = {}, p;
				for (p in vars) {
					copy[p] = vars[p];
				}
				return copy;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val.call(targets[i], i) : val[i % val.length];
				}
				delete vars.cycle;
			},
			_pauseCallback = _internals.pauseCallback = function() {},
			_slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			p = TimelineLite.prototype = new SimpleTimeline();

		TimelineLite.version = "1.18.0";
		p.constructor = TimelineLite;
		p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

		/* might use later...
		//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
		function localToGlobal(time, animation) {
			while (animation) {
				time = (time / animation._timeScale) + animation._startTime;
				animation = animation.timeline;
			}
			return time;
		}

		//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
		function globalToLocal(time, animation) {
			var scale = 1;
			time -= localToGlobal(0, animation);
			while (animation) {
				scale *= animation._timeScale;
				animation = animation.timeline;
			}
			return time * scale;
		}
		*/

		p.to = function(target, duration, vars, position) {
			var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
			return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
		};

		p.from = function(target, duration, vars, position) {
			return this.add( ((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position);
		};

		p.fromTo = function(target, duration, fromVars, toVars, position) {
			var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
			return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
		};

		p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, callbackScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
				cycle = vars.cycle,
				copy, i;
			if (typeof(targets) === "string") {
				targets = TweenLite.selector(targets) || targets;
			}
			targets = targets || [];
			if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
				targets = _slice(targets);
			}
			stagger = stagger || 0;
			if (stagger < 0) {
				targets = _slice(targets);
				targets.reverse();
				stagger *= -1;
			}
			for (i = 0; i < targets.length; i++) {
				copy = _copy(vars);
				if (copy.startAt) {
					copy.startAt = _copy(copy.startAt);
					if (copy.startAt.cycle) {
						_applyCycle(copy.startAt, targets, i);
					}
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
				}
				tl.to(targets[i], duration, copy, i * stagger);
			}
			return this.add(tl, position);
		};

		p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.immediateRender = (vars.immediateRender != false);
			vars.runBackwards = true;
			return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.call = function(callback, params, scope, position) {
			return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
		};

		p.set = function(target, vars, position) {
			position = this._parseTimeOrLabel(position, 0, true);
			if (vars.immediateRender == null) {
				vars.immediateRender = (position === this._time && !this._paused);
			}
			return this.add( new TweenLite(target, 0, vars), position);
		};

		TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
			vars = vars || {};
			if (vars.smoothChildTiming == null) {
				vars.smoothChildTiming = true;
			}
			var tl = new TimelineLite(vars),
				root = tl._timeline,
				tween, next;
			if (ignoreDelayedCalls == null) {
				ignoreDelayedCalls = true;
			}
			root._remove(tl, true);
			tl._startTime = 0;
			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
			tween = root._first;
			while (tween) {
				next = tween._next;
				if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
					tl.add(tween, tween._startTime - tween._delay);
				}
				tween = next;
			}
			root.add(tl, 0);
			return tl;
		};

		p.add = function(value, position, align, stagger) {
			var curTime, l, i, child, tl, beforeRawTime;
			if (typeof(position) !== "number") {
				position = this._parseTimeOrLabel(position, 0, true, value);
			}
			if (!(value instanceof Animation)) {
				if ((value instanceof Array) || (value && value.push && _isArray(value))) {
					align = align || "normal";
					stagger = stagger || 0;
					curTime = position;
					l = value.length;
					for (i = 0; i < l; i++) {
						if (_isArray(child = value[i])) {
							child = new TimelineLite({tweens:child});
						}
						this.add(child, curTime);
						if (typeof(child) !== "string" && typeof(child) !== "function") {
							if (align === "sequence") {
								curTime = child._startTime + (child.totalDuration() / child._timeScale);
							} else if (align === "start") {
								child._startTime -= child.delay();
							}
						}
						curTime += stagger;
					}
					return this._uncache(true);
				} else if (typeof(value) === "string") {
					return this.addLabel(value, position);
				} else if (typeof(value) === "function") {
					value = TweenLite.delayedCall(0, value);
				} else {
					throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
				}
			}

			SimpleTimeline.prototype.add.call(this, value, position);

			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
			if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
				//in case any of the ancestors had completed but should now be enabled...
				tl = this;
				beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
				while (tl._timeline) {
					if (beforeRawTime && tl._timeline.smoothChildTiming) {
						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
					} else if (tl._gc) {
						tl._enabled(true, false);
					}
					tl = tl._timeline;
				}
			}

			return this;
		};

		p.remove = function(value) {
			if (value instanceof Animation) {
				this._remove(value, false);
				var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
				value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
				return this;
			} else if (value instanceof Array || (value && value.push && _isArray(value))) {
				var i = value.length;
				while (--i > -1) {
					this.remove(value[i]);
				}
				return this;
			} else if (typeof(value) === "string") {
				return this.removeLabel(value);
			}
			return this.kill(null, value);
		};

		p._remove = function(tween, skipDisable) {
			SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
			var last = this._last;
			if (!last) {
				this._time = this._totalTime = this._duration = this._totalDuration = 0;
			} else if (this._time > last._startTime + last._totalDuration / last._timeScale) {
				this._time = this.duration();
				this._totalTime = this._totalDuration;
			}
			return this;
		};

		p.append = function(value, offsetOrLabel) {
			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
		};

		p.insert = p.insertMultiple = function(value, position, align, stagger) {
			return this.add(value, position || 0, align, stagger);
		};

		p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
		};

		p.addLabel = function(label, position) {
			this._labels[label] = this._parseTimeOrLabel(position);
			return this;
		};

		p.addPause = function(position, callback, params, scope) {
			var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
			t.vars.onComplete = t.vars.onReverseComplete = callback;
			t.data = "isPause";
			this._hasPause = true;
			return this.add(t, position);
		};

		p.removeLabel = function(label) {
			delete this._labels[label];
			return this;
		};

		p.getLabelTime = function(label) {
			return (this._labels[label] != null) ? this._labels[label] : -1;
		};

		p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
			var i;
			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
			if (ignore instanceof Animation && ignore.timeline === this) {
				this.remove(ignore);
			} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
				i = ignore.length;
				while (--i > -1) {
					if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
						this.remove(ignore[i]);
					}
				}
			}
			if (typeof(offsetOrLabel) === "string") {
				return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - this.duration() : 0, appendIfAbsent);
			}
			offsetOrLabel = offsetOrLabel || 0;
			if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
				i = timeOrLabel.indexOf("=");
				if (i === -1) {
					if (this._labels[timeOrLabel] == null) {
						return appendIfAbsent ? (this._labels[timeOrLabel] = this.duration() + offsetOrLabel) : offsetOrLabel;
					}
					return this._labels[timeOrLabel] + offsetOrLabel;
				}
				offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
				timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : this.duration();
			} else if (timeOrLabel == null) {
				timeOrLabel = this.duration();
			}
			return Number(timeOrLabel) + offsetOrLabel;
		};

		p.seek = function(position, suppressEvents) {
			return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
		};

		p.stop = function() {
			return this.paused(true);
		};

		p.gotoAndPlay = function(position, suppressEvents) {
			return this.play(position, suppressEvents);
		};

		p.gotoAndStop = function(position, suppressEvents) {
			return this.pause(position, suppressEvents);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevTime = this._time,
				prevStart = this._startTime,
				prevTimeScale = this._timeScale,
				prevPaused = this._paused,
				tween, isComplete, next, callback, internalForce, pauseTween;
			if (time >= totalDur) {
				this._totalTime = this._time = totalDur;
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (this._duration === 0) if (time === 0 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
						internalForce = true;
						if (this._rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._timeline.autoRemoveChildren && this._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (this._rawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = this._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}

			} else {

				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
					if (time >= prevTime) {
						tween = this._first;
						while (tween && tween._startTime <= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
								pauseTween = tween;
							}
							tween = tween._next;
						}
					} else {
						tween = this._last;
						while (tween && tween._startTime >= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
								pauseTween = tween;
							}
							tween = tween._prev;
						}
					}
					if (pauseTween) {
						this._time = time = pauseTween._startTime;
						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
					}
				}

				this._totalTime = this._time = this._rawPrevTime = time;
			}
			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0) if (!suppressEvents) {
				this._callback("onStart");
			}

			if (this._time >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
						break;
					} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > this._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}

			if (this._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				this._callback("onUpdate");
			}

			if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
			}
		};

		p._hasPausedChild = function() {
			var tween = this._first;
			while (tween) {
				if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
					return true;
				}
				tween = tween._next;
			}
			return false;
		};

		p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
			var a = [],
				tween = this._first,
				cnt = 0;
			while (tween) {
				if (tween._startTime < ignoreBeforeTime) {
					//do nothing
				} else if (tween instanceof TweenLite) {
					if (tweens !== false) {
						a[cnt++] = tween;
					}
				} else {
					if (timelines !== false) {
						a[cnt++] = tween;
					}
					if (nested !== false) {
						a = a.concat(tween.getChildren(true, tweens, timelines));
						cnt = a.length;
					}
				}
				tween = tween._next;
			}
			return a;
		};

		p.getTweensOf = function(target, nested) {
			var disabled = this._gc,
				a = [],
				cnt = 0,
				tweens, i;
			if (disabled) {
				this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
			}
			tweens = TweenLite.getTweensOf(target);
			i = tweens.length;
			while (--i > -1) {
				if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
					a[cnt++] = tweens[i];
				}
			}
			if (disabled) {
				this._enabled(false, true);
			}
			return a;
		};

		p.recent = function() {
			return this._recent;
		};

		p._contains = function(tween) {
			var tl = tween.timeline;
			while (tl) {
				if (tl === this) {
					return true;
				}
				tl = tl.timeline;
			}
			return false;
		};

		p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || 0;
			var tween = this._first,
				labels = this._labels,
				p;
			while (tween) {
				if (tween._startTime >= ignoreBeforeTime) {
					tween._startTime += amount;
				}
				tween = tween._next;
			}
			if (adjustLabels) {
				for (p in labels) {
					if (labels[p] >= ignoreBeforeTime) {
						labels[p] += amount;
					}
				}
			}
			return this._uncache(true);
		};

		p._kill = function(vars, target) {
			if (!vars && !target) {
				return this._enabled(false, false);
			}
			var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
				i = tweens.length,
				changed = false;
			while (--i > -1) {
				if (tweens[i]._kill(vars, target)) {
					changed = true;
				}
			}
			return changed;
		};

		p.clear = function(labels) {
			var tweens = this.getChildren(false, true, true),
				i = tweens.length;
			this._time = this._totalTime = 0;
			while (--i > -1) {
				tweens[i]._enabled(false, false);
			}
			if (labels !== false) {
				this._labels = {};
			}
			return this._uncache(true);
		};

		p.invalidate = function() {
			var tween = this._first;
			while (tween) {
				tween.invalidate();
				tween = tween._next;
			}
			return Animation.prototype.invalidate.call(this);;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (enabled === this._gc) {
				var tween = this._first;
				while (tween) {
					tween._enabled(enabled, true);
					tween = tween._next;
				}
			}
			return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			this._forcingPlayhead = true;
			var val = Animation.prototype.totalTime.apply(this, arguments);
			this._forcingPlayhead = false;
			return val;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					this.totalDuration(); //just triggers recalculation
				}
				return this._duration;
			}
			if (this.duration() !== 0 && value !== 0) {
				this.timeScale(this._duration / value);
			}
			return this;
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					var max = 0,
						tween = this._last,
						prevStart = 999999999999,
						prev, end;
					while (tween) {
						prev = tween._prev; //record it here in case the tween changes position in the sequence...
						if (tween._dirty) {
							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
						}
						if (tween._startTime > prevStart && this._sortChildren && !tween._paused) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
							this.add(tween, tween._startTime - tween._delay);
						} else {
							prevStart = tween._startTime;
						}
						if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
							max -= tween._startTime;
							if (this._timeline.smoothChildTiming) {
								this._startTime += tween._startTime / this._timeScale;
							}
							this.shiftChildren(-tween._startTime, false, -9999999999);
							prevStart = 0;
						}
						end = tween._startTime + (tween._totalDuration / tween._timeScale);
						if (end > max) {
							max = end;
						}
						tween = prev;
					}
					this._duration = this._totalDuration = max;
					this._dirty = false;
				}
				return this._totalDuration;
			}
			if (this.totalDuration() !== 0) if (value !== 0) {
				this.timeScale(this._totalDuration / value);
			}
			return this;
		};

		p.paused = function(value) {
			if (!value) { //if there's a pause directly at the spot from where we're unpausing, skip it.
				var tween = this._first,
					time = this._time;
				while (tween) {
					if (tween._startTime === time && tween.data === "isPause") {
						tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
					}
					tween = tween._next;
				}
			}
			return Animation.prototype.paused.apply(this, arguments);
		};

		p.usesFrames = function() {
			var tl = this._timeline;
			while (tl._timeline) {
				tl = tl._timeline;
			}
			return (tl === Animation._rootFramesTimeline);
		};

		p.rawTime = function() {
			return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
		};

		return TimelineLite;

	}, true);


}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(define) === "function" && define.amd) { //AMD
		define(["TweenLite"], getGlobal);
	} else if (typeof(module) !== "undefined" && module.exports) { //node
		require("./TweenLite.js"); //dependency
		module.exports = getGlobal();
	}
}("TimelineLite"));

/*!
 * VERSION: beta 1.15.2
 * DATE: 2015-01-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	_gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
		
		var w = (_gsScope.GreenSockGlobals || _gsScope),
			gs = w.com.greensock,
			_2PI = Math.PI * 2,
			_HALF_PI = Math.PI / 2,
			_class = gs._class,
			_create = function(n, f) {
				var C = _class("easing." + n, function(){}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			_easeReg = Ease.register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class("easing."+name, {
					easeOut:new EaseOut(),
					easeIn:new EaseIn(),
					easeInOut:new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			EasePoint = function(time, value, next) {
				this.t = time;
				this.v = value;
				if (next) {
					this.next = next;
					next.prev = this;
					this.c = next.v - value;
					this.gap = next.t - time;
				}
			},

			//Back
			_createBack = function(n, f) {
				var C = _class("easing." + n, function(overshoot) {
						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
						this._p2 = this._p1 * 1.525;
					}, true), 
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(overshoot) {
					return new C(overshoot);
				};
				return C;
			},

			Back = _wrap("Back",
				_createBack("BackOut", function(p) {
					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
				}),
				_createBack("BackIn", function(p) {
					return p * p * ((this._p1 + 1) * p - this._p1);
				}),
				_createBack("BackInOut", function(p) {
					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
				})
			),


			//SlowMo
			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
				power = (power || power === 0) ? power : 0.7;
				if (linearRatio == null) {
					linearRatio = 0.7;
				} else if (linearRatio > 1) {
					linearRatio = 1;
				}
				this._p = (linearRatio !== 1) ? power : 0;
				this._p1 = (1 - linearRatio) / 2;
				this._p2 = linearRatio;
				this._p3 = this._p1 + this._p2;
				this._calcEnd = (yoyoMode === true);
			}, true),
			p = SlowMo.prototype = new Ease(),
			SteppedEase, RoughEase, _createElastic;
			
		p.constructor = SlowMo;
		p.getRatio = function(p) {
			var r = p + (0.5 - p) * this._p;
			if (p < this._p1) {
				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
			} else if (p > this._p3) {
				return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p);
			}
			return this._calcEnd ? 1 : r;
		};
		SlowMo.ease = new SlowMo(0.7, 0.7);
		
		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
			return new SlowMo(linearRatio, power, yoyoMode);
		};


		//SteppedEase
		SteppedEase = _class("easing.SteppedEase", function(steps) {
				steps = steps || 1;
				this._p1 = 1 / steps;
				this._p2 = steps + 1;
			}, true);
		p = SteppedEase.prototype = new Ease();	
		p.constructor = SteppedEase;
		p.getRatio = function(p) {
			if (p < 0) {
				p = 0;
			} else if (p >= 1) {
				p = 0.999999999;
			}
			return ((this._p2 * p) >> 0) * this._p1;
		};
		p.config = SteppedEase.config = function(steps) {
			return new SteppedEase(steps);
		};


		//RoughEase
		RoughEase = _class("easing.RoughEase", function(vars) {
			vars = vars || {};
			var taper = vars.taper || "none",
				a = [],
				cnt = 0,
				points = (vars.points || 20) | 0,
				i = points,
				randomize = (vars.randomize !== false),
				clamp = (vars.clamp === true),
				template = (vars.template instanceof Ease) ? vars.template : null,
				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
				x, y, bump, invX, obj, pnt;
			while (--i > -1) {
				x = randomize ? Math.random() : (1 / points) * i;
				y = template ? template.getRatio(x) : x;
				if (taper === "none") {
					bump = strength;
				} else if (taper === "out") {
					invX = 1 - x;
					bump = invX * invX * strength;
				} else if (taper === "in") {
					bump = x * x * strength;
				} else if (x < 0.5) {  //"both" (start)
					invX = x * 2;
					bump = invX * invX * 0.5 * strength;
				} else {				//"both" (end)
					invX = (1 - x) * 2;
					bump = invX * invX * 0.5 * strength;
				}
				if (randomize) {
					y += (Math.random() * bump) - (bump * 0.5);
				} else if (i % 2) {
					y += bump * 0.5;
				} else {
					y -= bump * 0.5;
				}
				if (clamp) {
					if (y > 1) {
						y = 1;
					} else if (y < 0) {
						y = 0;
					}
				}
				a[cnt++] = {x:x, y:y};
			}
			a.sort(function(a, b) {
				return a.x - b.x;
			});

			pnt = new EasePoint(1, 1, null);
			i = points;
			while (--i > -1) {
				obj = a[i];
				pnt = new EasePoint(obj.x, obj.y, pnt);
			}

			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
		}, true);
		p = RoughEase.prototype = new Ease();
		p.constructor = RoughEase;
		p.getRatio = function(p) {
			var pnt = this._prev;
			if (p > pnt.t) {
				while (pnt.next && p >= pnt.t) {
					pnt = pnt.next;
				}
				pnt = pnt.prev;
			} else {
				while (pnt.prev && p <= pnt.t) {
					pnt = pnt.prev;
				}
			}
			this._prev = pnt;
			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
		};
		p.config = function(vars) {
			return new RoughEase(vars);
		};
		RoughEase.ease = new RoughEase();


		//Bounce
		_wrap("Bounce",
			_create("BounceOut", function(p) {
				if (p < 1 / 2.75) {
					return 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				}
				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
			}),
			_create("BounceIn", function(p) {
				if ((p = 1 - p) < 1 / 2.75) {
					return 1 - (7.5625 * p * p);
				} else if (p < 2 / 2.75) {
					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
				} else if (p < 2.5 / 2.75) {
					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
				}
				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
			}),
			_create("BounceInOut", function(p) {
				var invert = (p < 0.5);
				if (invert) {
					p = 1 - (p * 2);
				} else {
					p = (p * 2) - 1;
				}
				if (p < 1 / 2.75) {
					p = 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				} else {
					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}
				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
			})
		);


		//CIRC
		_wrap("Circ",
			_create("CircOut", function(p) {
				return Math.sqrt(1 - (p = p - 1) * p);
			}),
			_create("CircIn", function(p) {
				return -(Math.sqrt(1 - (p * p)) - 1);
			}),
			_create("CircInOut", function(p) {
				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
			})
		);


		//Elastic
		_createElastic = function(n, f, def) {
			var C = _class("easing." + n, function(amplitude, period) {
					this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
					this._p2 = _2PI / this._p2; //precalculate to optimize
				}, true),
				p = C.prototype = new Ease();
			p.constructor = C;
			p.getRatio = f;
			p.config = function(amplitude, period) {
				return new C(amplitude, period);
			};
			return C;
		};
		_wrap("Elastic",
			_createElastic("ElasticOut", function(p) {
				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
			}, 0.3),
			_createElastic("ElasticIn", function(p) {
				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
			}, 0.3),
			_createElastic("ElasticInOut", function(p) {
				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
			}, 0.45)
		);


		//Expo
		_wrap("Expo",
			_create("ExpoOut", function(p) {
				return 1 - Math.pow(2, -10 * p);
			}),
			_create("ExpoIn", function(p) {
				return Math.pow(2, 10 * (p - 1)) - 0.001;
			}),
			_create("ExpoInOut", function(p) {
				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			})
		);


		//Sine
		_wrap("Sine",
			_create("SineOut", function(p) {
				return Math.sin(p * _HALF_PI);
			}),
			_create("SineIn", function(p) {
				return -Math.cos(p * _HALF_PI) + 1;
			}),
			_create("SineInOut", function(p) {
				return -0.5 * (Math.cos(Math.PI * p) - 1);
			})
		);

		_class("easing.EaseLookup", {
				find:function(s) {
					return Ease.map[s];
				}
			}, true);

		//register the non-standard eases
		_easeReg(w.SlowMo, "SlowMo", "ease,");
		_easeReg(RoughEase, "RoughEase", "ease,");
		_easeReg(SteppedEase, "SteppedEase", "ease,");
		
		return Back;
		
	}, true);

}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }


/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function(TweenPlugin, TweenLite) {

		/** @constructor **/
		var CSSPlugin = function() {
				TweenPlugin.call(this, "css");
				this._overwriteProps.length = 0;
				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_globals = _gsScope._gsDefine.globals,
			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
			_specialProps = {},
			p = CSSPlugin.prototype = new TweenPlugin("css");

		p.constructor = CSSPlugin;
		CSSPlugin.version = "1.18.0";
		CSSPlugin.API = 2;
		CSSPlugin.defaultTransformPerspective = 0;
		CSSPlugin.defaultSkewType = "compensated";
		CSSPlugin.defaultSmoothOrigin = true;
		p = "px"; //we'll reuse the "p" variable to keep file size down
		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


		var _numExp = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			_opacityExp = /opacity *= *([^)]*)/i,
			_opacityValExp = /opacity:([^;]*)/i,
			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
			_rgbhslExp = /^(rgb|hsl)/,
			_capsExp = /([A-Z])/g,
			_camelExp = /-([a-z])/gi,
			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
			_camelFunc = function(s, g) { return g.toUpperCase(); },
			_horizExp = /(?:Left|Right|Width)/i,
			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			_forcePT = {},
			_doc = document,
			_createElement = function(type) {
				return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
			},
			_tempDiv = _createElement("div"),
			_tempImg = _createElement("img"),
			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
			_agent = navigator.userAgent,
			_autoRound,
			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

			_isSafari,
			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
			_ieVers,
			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
				var i = _agent.indexOf("Android"),
					a = _createElement("a");
				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || Number(_agent.substr(i+8, 1)) > 3));
				_isSafariLT6 = (_isSafari && (Number(_agent.substr(_agent.indexOf("Version/")+8, 1)) < 6));
				_isFirefox = (_agent.indexOf("Firefox") !== -1);
				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
					_ieVers = parseFloat( RegExp.$1 );
				}
				if (!a) {
					return false;
				}
				a.style.cssText = "top:1px;opacity:.55;";
				return /^0.55/.test(a.style.opacity);
			}()),
			_getIEOpacity = function(v) {
				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
			},
			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
				if (window.console) {
					console.log(s);
				}
			},

			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
			_checkPropPrefix = function(p, e) {
				e = e || _tempDiv;
				var s = e.style,
					a, i;
				if (s[p] !== undefined) {
					return p;
				}
				p = p.charAt(0).toUpperCase() + p.substr(1);
				a = ["O","Moz","ms","Ms","Webkit"];
				i = 5;
				while (--i > -1 && s[a[i]+p] === undefined) { }
				if (i >= 0) {
					_prefix = (i === 3) ? "ms" : a[i];
					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
					return _prefix + p;
				}
				return null;
			},

			_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},

			/**
			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
			 *
			 * @param {!Object} t Target element whose style property you want to query
			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
			 * @return {?string} The current property value
			 */
			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
				var rv;
				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
					return _getIEOpacity(t);
				}
				if (!calc && t.style[p]) {
					rv = t.style[p];
				} else if ((cs = cs || _getComputedStyle(t))) {
					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				} else if (t.currentStyle) {
					rv = t.currentStyle[p];
				}
				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
			},

			/**
			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
			 * @param {!Object} t Target element
			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
			 * @param {!number} v Value
			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
			 * @return {number} value in pixels
			 */
			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
				if (sfx === "px" || !sfx) { return v; }
				if (sfx === "auto" || !v) { return 0; }
				var horiz = _horizExp.test(p),
					node = t,
					style = _tempDiv.style,
					neg = (v < 0),
					pix, cache, time;
				if (neg) {
					v = -v;
				}
				if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
						node = t.parentNode || _doc.body;
						cache = node._gsCache;
						time = TweenLite.ticker.frame;
						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
							return cache.width * v / 100;
						}
						style[(horiz ? "width" : "height")] = v + sfx;
					} else {
						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
					node.removeChild(_tempDiv);
					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
						cache = node._gsCache = node._gsCache || {};
						cache.time = time;
						cache.width = pix / v * 100;
					}
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				return neg ? -pix : pix;
			},
			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
				var dim = ((p === "left") ? "Left" : "Top"),
					v = _getStyle(t, "margin" + dim, cs);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
			},

			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
			_getAllStyles = function(t, cs) {
				var s = {},
					i, tr, p;
				if ((cs = cs || _getComputedStyle(t, null))) {
					if ((i = cs.length)) {
						while (--i > -1) {
							p = cs[i];
							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
							}
						}
					} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
						for (i in cs) {
							if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[i] = cs[i];
							}
						}
					}
				} else if ((cs = t.currentStyle || t.style)) {
					for (i in cs) {
						if (typeof(i) === "string" && s[i] === undefined) {
							s[i.replace(_camelExp, _camelFunc)] = cs[i];
						}
					}
				}
				if (!_supportsOpacity) {
					s.opacity = _getIEOpacity(t);
				}
				tr = _getTransform(t, cs, false);
				s.rotation = tr.rotation;
				s.skewX = tr.skewX;
				s.scaleX = tr.scaleX;
				s.scaleY = tr.scaleY;
				s.x = tr.x;
				s.y = tr.y;
				if (_supports3D) {
					s.z = tr.z;
					s.rotationX = tr.rotationX;
					s.rotationY = tr.rotationY;
					s.scaleZ = tr.scaleZ;
				}
				if (s.filters) {
					delete s.filters;
				}
				return s;
			},

			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
			_cssDif = function(t, s1, s2, vars, forceLookup) {
				var difs = {},
					style = t.style,
					val, p, mpt;
				for (p in s2) {
					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
							mpt = new MiniPropTween(style, p, style[p], mpt);
						}
					}
				}
				if (vars) {
					for (p in vars) { //copy properties (except className)
						if (p !== "className") {
							difs[p] = vars[p];
						}
					}
				}
				return {difs:difs, firstMPT:mpt};
			},
			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

			/**
			 * @private Gets the width or height of an element
			 * @param {!Object} t Target element
			 * @param {!string} p Property name ("width" or "height")
			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
			 * @return {number} Dimension (in pixels)
			 */
			_getDimension = function(t, p, cs) {
				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
					a = _dimensions[p],
					i = a.length;
				cs = cs || _getComputedStyle(t, null);
				while (--i > -1) {
					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
				}
				return v;
			},

			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
			_parsePosition = function(v, recObj) {
				if (v === "contain" || v === "auto" || v === "auto auto") {
					return v + " ";
				}
				if (v == null || v === "") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
					v = "0 0";
				}
				var a = v.split(" "),
					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1];
				if (y == null) {
					y = (x === "center") ? "50%" : "0";
				} else if (y === "center") {
					y = "50%";
				}
				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
				if (recObj) {
					recObj.oxp = (x.indexOf("%") !== -1);
					recObj.oyp = (y.indexOf("%") !== -1);
					recObj.oxr = (x.charAt(1) === "=");
					recObj.oyr = (y.charAt(1) === "=");
					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
					recObj.v = v;
				}
				return recObj || v;
			},

			/**
			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
			 * @param {(number|string)} e End value which is typically a string, but could be a number
			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
			 */
			_parseChange = function(e, b) {
				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b);
			},

			/**
			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @return {number} Parsed value
			 */
			_parseVal = function(v, d) {
				return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v);
			},

			/**
			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
			 * @return {number} parsed angle in radians
			 */
			_parseAngle = function(v, d, p, directionalEnd) {
				var min = 0.000001,
					cap, split, dif, result, isRelative;
				if (v == null) {
					result = d;
				} else if (typeof(v) === "number") {
					result = v;
				} else {
					cap = 360;
					split = v.split("_");
					isRelative = (v.charAt(1) === "=");
					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
					if (split.length) {
						if (directionalEnd) {
							directionalEnd[p] = d + dif;
						}
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					result = d + dif;
				}
				if (result < min && result > -min) {
					result = 0;
				}
				return result;
			},

			_colorLookup = {aqua:[0,255,255],
				lime:[0,255,0],
				silver:[192,192,192],
				black:[0,0,0],
				maroon:[128,0,0],
				teal:[0,128,128],
				blue:[0,0,255],
				navy:[0,0,128],
				white:[255,255,255],
				fuchsia:[255,0,255],
				olive:[128,128,0],
				yellow:[255,255,0],
				orange:[255,165,0],
				gray:[128,128,128],
				purple:[128,0,128],
				green:[0,128,0],
				red:[255,0,0],
				pink:[255,192,203],
				cyan:[0,255,255],
				transparent:[255,255,255,0]},

			_hue = function(h, m1, m2) {
				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
			},

			/**
			 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
			 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
			 */
			_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
				var a, r, g, b, h, s, l, max, min, d, wasHSL;
				if (!v) {
					a = _colorLookup.black;
				} else if (typeof(v) === "number") {
					a = [v >> 16, (v >> 8) & 255, v & 255];
				} else {
					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
						v = v.substr(0, v.length - 1);
					}
					if (_colorLookup[v]) {
						a = _colorLookup[v];
					} else if (v.charAt(0) === "#") {
						if (v.length === 4) { //for shorthand like #9F0
							r = v.charAt(1);
							g = v.charAt(2);
							b = v.charAt(3);
							v = "#" + r + r + g + g + b + b;
						}
						v = parseInt(v.substr(1), 16);
						a = [v >> 16, (v >> 8) & 255, v & 255];
					} else if (v.substr(0, 3) === "hsl") {
						a = wasHSL = v.match(_numExp);
						if (!toHSL) {
							h = (Number(a[0]) % 360) / 360;
							s = Number(a[1]) / 100;
							l = Number(a[2]) / 100;
							g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
							r = l * 2 - g;
							if (a.length > 3) {
								a[3] = Number(v[3]);
							}
							a[0] = _hue(h + 1 / 3, r, g);
							a[1] = _hue(h, r, g);
							a[2] = _hue(h - 1 / 3, r, g);
						} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
							return v.match(_relNumExp);
						}
					} else {
						a = v.match(_numExp) || _colorLookup.transparent;
					}
					a[0] = Number(a[0]);
					a[1] = Number(a[1]);
					a[2] = Number(a[2]);
					if (a.length > 3) {
						a[3] = Number(a[3]);
					}
				}
				if (toHSL && !wasHSL) {
					r = a[0] / 255;
					g = a[1] / 255;
					b = a[2] / 255;
					max = Math.max(r, g, b);
					min = Math.min(r, g, b);
					l = (max + min) / 2;
					if (max === min) {
						h = s = 0;
					} else {
						d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
						h *= 60;
					}
					a[0] = (h + 0.5) | 0;
					a[1] = (s * 100 + 0.5) | 0;
					a[2] = (l * 100 + 0.5) | 0;
				}
				return a;
			},
			_formatColors = function(s, toHSL) {
				var colors = s.match(_colorExp) || [],
					charIndex = 0,
					parsed = colors.length ? "" : s,
					i, color, temp;
				for (i = 0; i < colors.length; i++) {
					color = colors[i];
					temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
					charIndex += temp.length + color.length;
					color = _parseColor(color, toHSL);
					if (color.length === 3) {
						color.push(1);
					}
					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
				}
				return parsed;
			},
			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

		for (p in _colorLookup) {
			_colorExp += "|" + p + "\\b";
		}
		_colorExp = new RegExp(_colorExp+")", "gi");

		CSSPlugin.colorStringFilter = function(a) {
			var combined = a[0] + a[1],
				toHSL;
			_colorExp.lastIndex = 0;
			if (_colorExp.test(combined)) {
				toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
				a[0] = _formatColors(a[0], toHSL);
				a[1] = _formatColors(a[1], toHSL);
			}
		};

		if (!TweenLite.defaultStringFilter) {
			TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
		}

		/**
		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
		 * @return {Function} formatter function
		 */
		var _getFormatter = function(dflt, clr, collapsible, multi) {
				if (dflt == null) {
					return function(v) {return v;};
				}
				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
					numVals = dVals.length,
					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
					formatter;
				if (!numVals) {
					return function(v) {return v;};
				}
				if (clr) {
					formatter = function(v) {
						var color, vals, i, a;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						color = (v.match(_colorExp) || [dColor])[0];
						vals = v.split(color).join("").match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
					};
					return formatter;

				}
				formatter = function(v) {
					var vals, a, i;
					if (typeof(v) === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = formatter(a[i]);
						}
						return a.join(",");
					}
					vals = v.match(_valuesExp) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
						}
					}
					return pfx + vals.join(delim) + sfx;
				};
				return formatter;
			},

			/**
			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
			 * @return {Function} a formatter function
			 */
			_getEdgeParser = function(props) {
				props = props.split(",");
				return function(t, e, p, cssp, pt, plugin, vars) {
					var a = (e + "").split(" "),
						i;
					vars = {};
					for (i = 0; i < 4; i++) {
						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
					}
					return cssp.parse(t, vars, pt, plugin);
				};
			},

			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens  which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
			_setPluginRatio = _internals._setPluginRatio = function(v) {
				this.plugin.setRatio(v);
				var d = this.data,
					proxy = d.proxy,
					mpt = d.firstMPT,
					min = 0.000001,
					val, pt, i, str;
				while (mpt) {
					val = proxy[mpt.v];
					if (mpt.r) {
						val = Math.round(val);
					} else if (val < min && val > -min) {
						val = 0;
					}
					mpt.t[mpt.p] = val;
					mpt = mpt._next;
				}
				if (d.autoRotate) {
					d.autoRotate.rotation = proxy.rotation;
				}
				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method.
				if (v === 1) {
					mpt = d.firstMPT;
					while (mpt) {
						pt = mpt.t;
						if (!pt.type) {
							pt.e = pt.s + pt.xs0;
						} else if (pt.type === 1) {
							str = pt.xs0 + pt.s + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.e = str;
						}
						mpt = mpt._next;
					}
				}
			},

			/**
			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
			 * @param {!string} p property name
			 * @param {(number|string|object)} v value
			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
			 */
			MiniPropTween = function(t, p, v, next, r) {
				this.t = t;
				this.p = p;
				this.v = v;
				this.r = r;
				if (next) {
					next._prev = this;
					this._next = next;
				}
			},

			/**
			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
			 * This method returns an object that has the following properties:
			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
			 *  - firstMPT: the first MiniPropTween in the linked list
			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
			 * @param {!Object} t target object to be tweened
			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
			 * @param {!CSSPlugin} cssp The CSSPlugin instance
			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
			 */
			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
				var bpt = pt,
					start = {},
					end = {},
					transform = cssp._transform,
					oldForce = _forcePT,
					i, p, xp, mpt, firstPT;
				cssp._transform = null;
				_forcePT = vars;
				pt = firstPT = cssp.parse(t, vars, pt, plugin);
				_forcePT = oldForce;
				//break off from the linked list so the new ones are isolated.
				if (shallow) {
					cssp._transform = transform;
					if (bpt) {
						bpt._prev = null;
						if (bpt._prev) {
							bpt._prev._next = null;
						}
					}
				}
				while (pt && pt !== bpt) {
					if (pt.type <= 1) {
						p = pt.p;
						end[p] = pt.s + pt.c;
						start[p] = pt.s;
						if (!shallow) {
							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
							pt.c = 0;
						}
						if (pt.type === 1) {
							i = pt.l;
							while (--i > 0) {
								xp = "xn" + i;
								p = pt.p + "_" + xp;
								end[p] = pt.data[xp];
								start[p] = pt[xp];
								if (!shallow) {
									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
								}
							}
						}
					}
					pt = pt._next;
				}
				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
			},



			/**
			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
			 * @param {number} s Starting numeric value
			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
			 * @param {boolean=} r If true, the value(s) should be rounded
			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
			 */
			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
				this.t = t; //target
				this.p = p; //property
				this.s = s; //starting value
				this.c = c; //change value
				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
				if (!(t instanceof CSSPropTween)) {
					_overwriteProps.push(this.n);
				}
				this.r = r; //round (boolean)
				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
				if (pr) {
					this.pr = pr;
					_hasPriority = true;
				}
				this.b = (b === undefined) ? s : b;
				this.e = (e === undefined) ? s + c : e;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},

			_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
				pt.b = start;
				pt.e = pt.xs0 = end;
				return pt;
			},

			/**
			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
			 *
			 * @param {!Object} t Target whose property will be tweened
			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
			 * @param {string} b Beginning value
			 * @param {string} e Ending value
			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
			 */
			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
				b = b || dflt || "";
				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
				e += ""; //ensures it's a string
				var ba = b.split(", ").join(",").split(" "), //beginning array
					ea = e.split(", ").join(",").split(" "), //ending array
					l = ba.length,
					autoRound = (_autoRound !== false),
					i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
					ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					l = ba.length;
				}
				if (l !== ea.length) {
					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
					ba = (dflt || "").split(" ");
					l = ba.length;
				}
				pt.plugin = plugin;
				pt.setRatio = setRatio;
				_colorExp.lastIndex = 0;
				for (i = 0; i < l; i++) {
					bv = ba[i];
					ev = ea[i];
					bn = parseFloat(bv);
					//if the value begins with a number (most common). It's fine if it has a suffix like px
					if (bn || bn === 0) {
						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true);

					//if the value is a color
					} else if (clrs && _colorExp.test(bv)) {
						str = ev.charAt(ev.length - 1) === "," ? ")," : ")"; //if there's a comma at the end, retain it.
						useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
						bv = _parseColor(bv, useHSL);
						ev = _parseColor(ev, useHSL);
						hasAlpha = (bv.length + ev.length > 6);
						if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
							pt.e = pt.e.split(ea[i]).join("transparent");
						} else {
							if (!_supportsOpacity) { //old versions of IE don't support rgba().
								hasAlpha = false;
							}
							if (useHSL) {
								pt.appendXtra((hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
									.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
									.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
							} else {
								pt.appendXtra((hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true)
									.appendXtra("", bv[1], ev[1] - bv[1], ",", true)
									.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), true);
							}

							if (hasAlpha) {
								bv = (bv.length < 4) ? 1 : bv[3];
								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
							}
						}
						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

					} else {
						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
						if (!bnums) {
							pt["xs" + pt.l] += pt.l ? " " + bv : bv;

						//loop through all the numbers that are found and construct the extra values on the pt.
						} else {
							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
							if (!enums || enums.length !== bnums.length) {
								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
								return pt;
							}
							ni = 0;
							for (xi = 0; xi < bnums.length; xi++) {
								cv = bnums[xi];
								temp = bv.indexOf(cv, ni);
								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
								ni = temp + cv.length;
							}
							pt["xs" + pt.l] += bv.substr(ni);
						}
					}
				}
				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
				if (e.indexOf("=") !== -1) if (pt.data) {
					str = pt.xs0 + pt.data.s;
					for (i = 1; i < pt.l; i++) {
						str += pt["xs" + i] + pt.data["xn" + i];
					}
					pt.e = str + pt["xs" + i];
				}
				if (!pt.l) {
					pt.type = -1;
					pt.xs0 = pt.e;
				}
				return pt.xfirst || pt;
			},
			i = 9;


		p = CSSPropTween.prototype;
		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
		while (--i > 0) {
			p["xn" + i] = 0;
			p["xs" + i] = "";
		}
		p.xs0 = "";
		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


		/**
		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
		 * @param {string=} pfx Prefix (if any)
		 * @param {!number} s Starting value
		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
		 * @param {string=} sfx Suffix (if any)
		 * @param {boolean=} r Round (if true).
		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
		 */
		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
			var pt = this,
				l = pt.l;
			pt["xs" + l] += (pad && l) ? " " + pfx : pfx || "";
			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
				pt["xs" + l] += s + (sfx || "");
				return pt;
			}
			pt.l++;
			pt.type = pt.setRatio ? 2 : 1;
			pt["xs" + pt.l] = sfx || "";
			if (l > 0) {
				pt.data["xn" + l] = s + c;
				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
				pt["xn" + l] = s;
				if (!pt.plugin) {
					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
				}
				return pt;
			}
			pt.data = {s:s + c};
			pt.rxp = {};
			pt.s = s;
			pt.c = c;
			pt.r = r;
			return pt;
		};

		/**
		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
		 * @param {Object=} options An object containing any of the following configuration options:
		 *                      - defaultValue: the default value
		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
		 */
		var SpecialProp = function(p, options) {
				options = options || {};
				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
				_specialProps[p] = _specialProps[this.p] = this;
				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
				if (options.parser) {
					this.parse = options.parser;
				}
				this.clrs = options.color;
				this.multi = options.multi;
				this.keyword = options.keyword;
				this.dflt = options.defaultValue;
				this.pr = options.priority || 0;
			},

			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
				if (typeof(options) !== "object") {
					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
				}
				var a = p.split(","),
					d = options.defaultValue,
					i, temp;
				defaults = defaults || [d];
				for (i = 0; i < a.length; i++) {
					options.prefix = (i === 0 && options.prefix);
					options.defaultValue = defaults[i] || d;
					temp = new SpecialProp(a[i], options);
				}
			},

			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
			_registerPluginProp = function(p) {
				if (!_specialProps[p]) {
					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
						var pluginClass = _globals.com.greensock.plugins[pluginName];
						if (!pluginClass) {
							_log("Error: " + pluginName + " js file not loaded.");
							return pt;
						}
						pluginClass._cssRegister();
						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
					}});
				}
			};


		p = SpecialProp.prototype;

		/**
		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
		 * @param {!Object} t target element
		 * @param {(string|number|object)} b beginning value
		 * @param {(string|number|object)} e ending (destination) value
		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
		 * @return {CSSPropTween=} First CSSPropTween in the linked list
		 */
		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
			var kwd = this.keyword,
				i, ba, ea, l, bi, ei;
			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
				ba = b.replace(_commasOutsideParenExp, "|").split("|");
				ea = e.replace(_commasOutsideParenExp, "|").split("|");
			} else if (kwd) {
				ba = [b];
				ea = [e];
			}
			if (ea) {
				l = (ea.length > ba.length) ? ea.length : ba.length;
				for (i = 0; i < l; i++) {
					b = ba[i] = ba[i] || this.dflt;
					e = ea[i] = ea[i] || this.dflt;
					if (kwd) {
						bi = b.indexOf(kwd);
						ei = e.indexOf(kwd);
						if (bi !== ei) {
							if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
								ba[i] = ba[i].split(kwd).join("");
							} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
								ba[i] += " " + kwd;
							}
						}
					}
				}
				b = ba.join(", ");
				e = ea.join(", ");
			}
			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
		};

		/**
		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
		 * @param {!Object} t Target object whose property is being tweened
		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
		 * @param {!string} p Property name
		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
		 * @param {Object=} vars Original vars object that contains the data for parsing.
		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
		 */
		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
		};

		/**
		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
		 *  1) Target object whose property should be tweened (typically a DOM element)
		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
		 *
		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
		 *
		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
		 *      var start = target.style.width;
		 *      return function(ratio) {
		 *              target.style.width = (start + value * ratio) + "px";
		 *              console.log("set width to " + target.style.width);
		 *          }
		 * }, 0);
		 *
		 * Then, when I do this tween, it will trigger my special property:
		 *
		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
		 *
		 * In the example, of course, we're just changing the width, but you can do anything you want.
		 *
		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
		 */
		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
				rv.plugin = plugin;
				rv.setRatio = onInitTween(t, e, cssp._tween, p);
				return rv;
			}, priority:priority});
		};






		//transform-related methods and properties
		CSSPlugin.useSVGTransformAttr = _isSafari || _isFirefox; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
			_transformPropCSS = _prefixCSS + "transform",
			_transformOriginProp = _checkPropPrefix("transformOrigin"),
			_supports3D = (_checkPropPrefix("perspective") !== null),
			Transform = _internals.Transform = function() {
				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
				this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
			},
			_SVGElement = window.SVGElement,
			_useSVGTransformAttr,
			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

			_createSVG = function(type, container, attributes) {
				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
					reg = /([a-z])([A-Z])/g,
					p;
				for (p in attributes) {
					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
				}
				container.appendChild(element);
				return element;
			},
			_docElement = _doc.documentElement,
			_forceSVGTransformAttr = (function() {
				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
				var force = _ieVers || (/Android/i.test(_agent) && !window.chrome),
					svg, rect, width;
				if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
					svg = _createSVG("svg", _docElement);
					rect = _createSVG("rect", svg, {width:100, height:50, x:100});
					width = rect.getBoundingClientRect().width;
					rect.style[_transformOriginProp] = "50% 50%";
					rect.style[_transformProp] = "scaleX(0.5)";
					force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
					_docElement.removeChild(svg);
				}
				return force;
			})(),
			_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin) {
				var tm = e._gsTransform,
					m = _getMatrix(e, true),
					v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
				if (tm) {
					xOriginOld = tm.xOrigin; //record the original values before we alter them.
					yOriginOld = tm.yOrigin;
				}
				if (!absolute || (v = absolute.split(" ")).length < 2) {
					b = e.getBBox();
					local = _parsePosition(local).split(" ");
					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
						 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
				}
				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
				if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					determinant = (a * d - b * c);
					x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
					y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
					xOrigin = decoratee.xOrigin = v[0] = x;
					yOrigin = decoratee.yOrigin = v[1] = y;
				}
				if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
					if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
						x = xOrigin - xOriginOld;
						y = yOrigin - yOriginOld;
						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
						//tm.x -= x - (x * m[0] + y * m[2]);
						//tm.y -= y - (x * m[1] + y * m[3]);
						tm.xOffset += (x * m[0] + y * m[2]) - x;
						tm.yOffset += (x * m[1] + y * m[3]) - y;
					} else {
						tm.xOffset = tm.yOffset = 0;
					}
				}
				e.setAttribute("data-svg-origin", v.join(" "));
			},
			_isSVG = function(e) {
				return !!(_SVGElement && typeof(e.getBBox) === "function" && e.getCTM && (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM)));
			},
			_identity2DMatrix = [1,0,0,1,0,0],
			_getMatrix = function(e, force2D) {
				var tm = e._gsTransform || new Transform(),
					rnd = 100000,
					isDefault, s, m, n, dec;
				if (_transformProp) {
					s = _getStyle(e, _transformPropCSS, null, true);
				} else if (e.currentStyle) {
					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
					s = e.currentStyle.filter.match(_ieGetMatrixExp);
					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
				}
				isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
				if (tm.svg || (e.getBBox && _isSVG(e))) {
					if (isDefault && (e.style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
						s = e.style[_transformProp];
						isDefault = 0;
					}
					m = e.getAttribute("transform");
					if (isDefault && m) {
						if (m.indexOf("matrix") !== -1) { //just in case there's a "transform" value specified as an attribute instead of CSS style. Accept either a matrix() or simple translate() value though.
							s = m;
							isDefault = 0;
						} else if (m.indexOf("translate") !== -1) {
							s = "matrix(1,0,0,1," + m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")";
							isDefault = 0;
						}
					}
				}
				if (isDefault) {
					return _identity2DMatrix;
				}
				//split the matrix values out into an array (m for matrix)
				m = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
				i = m.length;
				while (--i > -1) {
					n = Number(m[i]);
					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
				}
				return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
			},

			/**
			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
			 * @param {!Object} t target element
			 * @param {Object=} cs computed style object (optional)
			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
			 */
			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
				if (t._gsTransform && rec && !parse) {
					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
				}
				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
					min = 0.00002,
					rnd = 100000,
					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
					defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
					m, i, scaleX, scaleY, rotation, skewX;

				tm.svg = !!(t.getBBox && _isSVG(t));
				if (tm.svg) {
					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, _cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
				}
				m = _getMatrix(t);
				if (m !== _identity2DMatrix) {

					if (m.length === 16) {
						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
							a13 = m[8], a23 = m[9], a33 = m[10],
							a14 = m[12], a24 = m[13], a34 = m[14],
							a43 = m[11],
							angle = Math.atan2(a32, a33),
							t1, t2, t3, t4, cos, sin;

						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
						if (tm.zOrigin) {
							a34 = -tm.zOrigin;
							a14 = a13*a34-m[12];
							a24 = a23*a34-m[13];
							a34 = a33*a34+tm.zOrigin-m[14];
						}
						tm.rotationX = angle * _RAD2DEG;
						//rotationX
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a12*cos+a13*sin;
							t2 = a22*cos+a23*sin;
							t3 = a32*cos+a33*sin;
							a13 = a12*-sin+a13*cos;
							a23 = a22*-sin+a23*cos;
							a33 = a32*-sin+a33*cos;
							a43 = a42*-sin+a43*cos;
							a12 = t1;
							a22 = t2;
							a32 = t3;
						}
						//rotationY
						angle = Math.atan2(a13, a33);
						tm.rotationY = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a11*cos-a13*sin;
							t2 = a21*cos-a23*sin;
							t3 = a31*cos-a33*sin;
							a23 = a21*sin+a23*cos;
							a33 = a31*sin+a33*cos;
							a43 = a41*sin+a43*cos;
							a11 = t1;
							a21 = t2;
							a31 = t3;
						}
						//rotationZ
						angle = Math.atan2(a21, a11);
						tm.rotation = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							a11 = a11*cos+a12*sin;
							t2 = a21*cos+a22*sin;
							a22 = a21*-sin+a22*cos;
							a32 = a31*-sin+a32*cos;
							a21 = t2;
						}

						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
							tm.rotationX = tm.rotation = 0;
							tm.rotationY += 180;
						}

						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5) | 0) / rnd;
						tm.scaleY = ((Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5) | 0) / rnd;
						tm.scaleZ = ((Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5) | 0) / rnd;
						tm.skewX = 0;
						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
						tm.x = a14;
						tm.y = a24;
						tm.z = a34;
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
						}

					} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY)) && !(tm.x !== undefined && _getStyle(t, "display", cs) === "none")) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
						var k = (m.length >= 6),
							a = k ? m[0] : 1,
							b = m[1] || 0,
							c = m[2] || 0,
							d = k ? m[3] : 1;
						tm.x = m[4] || 0;
						tm.y = m[5] || 0;
						scaleX = Math.sqrt(a * a + b * b);
						scaleY = Math.sqrt(d * d + c * c);
						rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
						skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
						if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
							if (invX) {
								scaleX *= -1;
								skewX += (rotation <= 0) ? 180 : -180;
								rotation += (rotation <= 0) ? 180 : -180;
							} else {
								scaleY *= -1;
								skewX += (skewX <= 0) ? 180 : -180;
							}
						}
						tm.scaleX = scaleX;
						tm.scaleY = scaleY;
						tm.rotation = rotation;
						tm.skewX = skewX;
						if (_supports3D) {
							tm.rotationX = tm.rotationY = tm.z = 0;
							tm.perspective = defaultTransformPerspective;
							tm.scaleZ = 1;
						}
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
						}
					}
					tm.zOrigin = zOrigin;
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
					for (i in tm) {
						if (tm[i] < min) if (tm[i] > -min) {
							tm[i] = 0;
						}
					}
				}
				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
				if (rec) {
					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
					if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
						if (_useSVGTransformAttr && t.style[_transformProp]) {
							TweenLite.delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
								_removeProp(t.style, _transformProp);
							});
						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
							TweenLite.delayedCall(0.001, function(){
								t.removeAttribute("transform");
							});
						}
					}
				}
				return tm;
			},

			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
			_setIETransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					ang = -t.rotation * _DEG2RAD,
					skew = ang + t.skewX * _DEG2RAD,
					rnd = 100000,
					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
					style = this.t.style,
					cs = this.t.currentStyle,
					filters, val;
				if (!cs) {
					return;
				}
				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
				b = -c;
				c = -val;
				filters = cs.filter;
				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
				var w = this.t.offsetWidth,
					h = this.t.offsetHeight,
					clip = (cs.position !== "absolute"),
					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
					ox = t.x + (w * t.xPercent / 100),
					oy = t.y + (h * t.yPercent / 100),
					dx, dy;

				//if transformOrigin is being used, adjust the offset x and y
				if (t.ox != null) {
					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
					ox += dx - (dx * a + dy * b);
					oy += dy - (dx * c + dy * d);
				}

				if (!clip) {
					m += ", sizingMethod='auto expand')";
				} else {
					dx = (w / 2);
					dy = (h / 2);
					//translate to ensure that transformations occur around the correct origin (default is center).
					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
				}
				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
					style.filter = filters.replace(_ieSetMatrixExp, m);
				} else {
					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
				}

				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
					style.removeAttribute("filter");
				}

				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
				if (!clip) {
					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
						marg, prop, dif;
					dx = t.ieOffsetX || 0;
					dy = t.ieOffsetY || 0;
					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
					for (i = 0; i < 4; i++) {
						prop = _margins[i];
						marg = cs[prop];
						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
						if (val !== t[prop]) {
							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
						} else {
							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
						}
						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
					}
				}
			},

			/* translates a super small decimal to a string WITHOUT scientific notation
			_safeDecimal = function(n) {
				var s = (n < 0 ? -n : n) + "",
					a = s.split("e-");
				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
			},
			*/

			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					style = this.t.style,
					angle = t.rotation,
					rotationX = t.rotationX,
					rotationY = t.rotationY,
					sx = t.scaleX,
					sy = t.scaleY,
					sz = t.scaleZ,
					x = t.x,
					y = t.y,
					z = t.z,
					isSVG = t.svg,
					perspective = t.perspective,
					force3D = t.force3D,
					a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
					zOrigin, min, cos, sin, t1, t2, transform, comma, zero, skew, rnd;
				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
				if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

					//2D
					if (angle || t.skewX || isSVG) {
						angle *= _DEG2RAD;
						skew = t.skewX * _DEG2RAD;
						rnd = 100000;
						a11 = Math.cos(angle) * sx;
						a21 = Math.sin(angle) * sx;
						a12 = Math.sin(angle - skew) * -sy;
						a22 = Math.cos(angle - skew) * sy;
						if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(skew);
							t1 = Math.sqrt(1 + t1 * t1);
							a12 *= t1;
							a22 *= t1;
							if (t.skewY) {
								a11 *= t1;
								a21 *= t1;
							}
						}
						if (isSVG) {
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
								min = this.t.getBBox();
								x += t.xPercent * 0.01 * min.width;
								y += t.yPercent * 0.01 * min.height;
							}
							min = 0.000001;
							if (x < min) if (x > -min) {
								x = 0;
							}
							if (y < min) if (y > -min) {
								y = 0;
							}
						}
						transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
						if (isSVG && _useSVGTransformAttr) {
							this.t.setAttribute("transform", "matrix(" + transform);
						} else {
							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
						}
					} else {
						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
					}
					return;

				}
				if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
					min = 0.0001;
					if (sx < min && sx > -min) {
						sx = sz = 0.00002;
					}
					if (sy < min && sy > -min) {
						sy = sz = 0.00002;
					}
					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
						perspective = 0;
					}
				}
				if (angle || t.skewX) {
					angle *= _DEG2RAD;
					cos = a11 = Math.cos(angle);
					sin = a21 = Math.sin(angle);
					if (t.skewX) {
						angle -= t.skewX * _DEG2RAD;
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(t.skewX * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							cos *= t1;
							sin *= t1;
							if (t.skewY) {
								a11 *= t1;
								a21 *= t1;
							}
						}
					}
					a12 = -sin;
					a22 = cos;

				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
					style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
					return;
				} else {
					a11 = a22 = 1;
					a12 = a21 = 0;
				}
				// KEY  INDEX   AFFECTS
				// a11  0       rotation, rotationY, scaleX
				// a21  1       rotation, rotationY, scaleX
				// a31  2       rotationY, scaleX
				// a41  3       rotationY, scaleX
				// a12  4       rotation, skewX, rotationX, scaleY
				// a22  5       rotation, skewX, rotationX, scaleY
				// a32  6       rotationX, scaleY
				// a42  7       rotationX, scaleY
				// a13  8       rotationY, rotationX, scaleZ
				// a23  9       rotationY, rotationX, scaleZ
				// a33  10      rotationY, rotationX, scaleZ
				// a43  11      rotationY, rotationX, perspective, scaleZ
				// a14  12      x, zOrigin, svgOrigin
				// a24  13      y, zOrigin, svgOrigin
				// a34  14      z, zOrigin
				// a44  15
				// rotation: Math.atan2(a21, a11)
				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
				// rotationX: Math.atan2(a32, a33)
				a33 = 1;
				a13 = a23 = a31 = a32 = a41 = a42 = 0;
				a43 = (perspective) ? -1 / perspective : 0;
				zOrigin = t.zOrigin;
				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
				comma = ",";
				zero = "0";
				angle = rotationY * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a31 = -sin;
					a41 = a43*-sin;
					a13 = a11*sin;
					a23 = a21*sin;
					a33 = cos;
					a43 *= cos;
					a11 *= cos;
					a21 *= cos;
				}
				angle = rotationX * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a12*cos+a13*sin;
					t2 = a22*cos+a23*sin;
					a32 = a33*sin;
					a42 = a43*sin;
					a13 = a12*-sin+a13*cos;
					a23 = a22*-sin+a23*cos;
					a33 = a33*cos;
					a43 = a43*cos;
					a12 = t1;
					a22 = t2;
				}
				if (sz !== 1) {
					a13*=sz;
					a23*=sz;
					a33*=sz;
					a43*=sz;
				}
				if (sy !== 1) {
					a12*=sy;
					a22*=sy;
					a32*=sy;
					a42*=sy;
				}
				if (sx !== 1) {
					a11*=sx;
					a21*=sx;
					a31*=sx;
					a41*=sx;
				}

				if (zOrigin || isSVG) {
					if (zOrigin) {
						x += a13*-zOrigin;
						y += a23*-zOrigin;
						z += a33*-zOrigin+zOrigin;
					}
					if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
					}
					if (x < min && x > -min) {
						x = zero;
					}
					if (y < min && y > -min) {
						y = zero;
					}
					if (z < min && z > -min) {
						z = 0; //don't use string because we calculate perspective later and need the number.
					}
				}

				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
				transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
				transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
				transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
				if (rotationX || rotationY) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
					transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
					transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
				} else {
					transform += ",0,0,0,0,1,0,";
				}
				transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

				style[_transformProp] = transform;
			};

		p = Transform.prototype;
		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
		p.scaleX = p.scaleY = p.scaleZ = 1;

		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
			cssp._lastParsedTransform = vars;
			var originalGSTransform = t._gsTransform,
				style = t.style,
				min = 0.000001,
				i = _transformProps.length,
				v = vars,
				endRotations = {},
				transformOriginString = "transformOrigin",
				m1, m2, skewY, copy, orig, has3D, hasChange, dr, x, y;
			if (vars.display) { //if the user is setting display during this tween, it may not be instantiated yet but we must force it here in order to get accurate readings. If display is "none", some browsers refuse to report the transform properties correctly.
				copy = _getStyle(t, "display");
				style.display = "block";
				m1 = _getTransform(t, _cs, true, vars.parseTransform);
				style.display = copy;
			} else {
				m1 = _getTransform(t, _cs, true, vars.parseTransform);
			}
			cssp._transform = m1;
			if (typeof(v.transform) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
				copy[_transformProp] = v.transform;
				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
				copy.position = "absolute";
				_doc.body.appendChild(_tempDiv);
				m2 = _getTransform(_tempDiv, null, false);
				_doc.body.removeChild(_tempDiv);
				if (!m2.perspective) {
					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
				}
				if (v.xPercent != null) {
					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
				}
				if (v.yPercent != null) {
					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
				}
			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
					x:_parseVal(v.x, m1.x),
					y:_parseVal(v.y, m1.y),
					z:_parseVal(v.z, m1.z),
					xPercent:_parseVal(v.xPercent, m1.xPercent),
					yPercent:_parseVal(v.yPercent, m1.yPercent),
					perspective:_parseVal(v.transformPerspective, m1.perspective)};
				dr = v.directionalRotation;
				if (dr != null) {
					if (typeof(dr) === "object") {
						for (copy in dr) {
							v[copy] = dr[copy];
						}
					} else {
						v.rotation = dr;
					}
				}
				if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
					m2.x = 0;
					m2.xPercent = _parseVal(v.x, m1.xPercent);
				}
				if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
					m2.y = 0;
					m2.yPercent = _parseVal(v.y, m1.yPercent);
				}

				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
				if (_supports3D) {
					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
				}
				m2.skewX = (v.skewX == null) ? m1.skewX : _parseAngle(v.skewX, m1.skewX);

				//note: for performance reasons, we combine all skewing into the skewX and rotation values, ignoring skewY but we must still record it so that we can discern how much of the overall skew is attributed to skewX vs. skewY. Otherwise, if the skewY would always act relative (tween skewY to 10deg, for example, multiple times and if we always combine things into skewX, we can't remember that skewY was 10 from last time). Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of -10 degrees.
				m2.skewY = (v.skewY == null) ? m1.skewY : _parseAngle(v.skewY, m1.skewY);
				if ((skewY = m2.skewY - m1.skewY)) {
					m2.skewX += skewY;
					m2.rotation += skewY;
				}
			}
			if (_supports3D && v.force3D != null) {
				m1.force3D = v.force3D;
				hasChange = true;
			}

			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;

			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
			if (!has3D && v.scale != null) {
				m2.scaleZ = 1; //no need to tween scaleZ.
			}

			while (--i > -1) {
				p = _transformProps[i];
				orig = m2[p] - m1[p];
				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
					hasChange = true;
					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
					if (p in endRotations) {
						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
					}
					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
					pt.plugin = plugin;
					cssp._overwriteProps.push(pt.n);
				}
			}

			orig = v.transformOrigin;
			if (m1.svg && (orig || v.svgOrigin)) {
				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
				y = m1.yOffset;
				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
				if (x !== m1.xOffset || y !== m1.yOffset) {
					pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
					pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
				}
				orig = _useSVGTransformAttr ? null : "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
			}
			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
				if (_transformProp) {
					hasChange = true;
					p = _transformOriginProp;
					orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
					pt.b = style[p];
					pt.plugin = plugin;
					if (_supports3D) {
						copy = m1.zOrigin;
						orig = orig.split(" ");
						m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
						pt.b = copy;
						pt.xs0 = pt.e = m1.zOrigin;
					} else {
						pt.xs0 = pt.e = orig;
					}

					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
				} else {
					_parsePosition(orig + "", m1);
				}
			}
			if (hasChange) {
				cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
			}
			return pt;
		}, prefix:true});

		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			e = this.format(e);
			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
				style = t.style,
				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
			w = parseFloat(t.offsetWidth);
			h = parseFloat(t.offsetHeight);
			ea1 = e.split(" ");
			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
				if (this.p.indexOf("border")) { //older browsers used a prefix
					props[i] = _checkPropPrefix(props[i]);
				}
				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
				if (bs.indexOf(" ") !== -1) {
					bs2 = bs.split(" ");
					bs = bs2[0];
					bs2 = bs2[1];
				}
				es = es2 = ea1[i];
				bn = parseFloat(bs);
				bsfx = bs.substr((bn + "").length);
				rel = (es.charAt(1) === "=");
				if (rel) {
					en = parseInt(es.charAt(0)+"1", 10);
					es = es.substr(2);
					en *= parseFloat(es);
					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
				} else {
					en = parseFloat(es);
					esfx = es.substr((en + "").length);
				}
				if (esfx === "") {
					esfx = _suffixMap[p] || bsfx;
				}
				if (esfx !== bsfx) {
					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
					if (esfx === "%") {
						bs = (hn / w * 100) + "%";
						bs2 = (vn / h * 100) + "%";
					} else if (esfx === "em") {
						em = _convertToPixels(t, "borderLeft", 1, "em");
						bs = (hn / em) + "em";
						bs2 = (vn / em) + "em";
					} else {
						bs = hn + "px";
						bs2 = vn + "px";
					}
					if (rel) {
						es = (parseFloat(bs) + en) + esfx;
						es2 = (parseFloat(bs2) + en) + esfx;
					}
				}
				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
			}
			return pt;
		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
			var bp = "background-position",
				cs = (_cs || _getComputedStyle(t, null)),
				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
				es = this.format(e),
				ba, ea, i, pct, overlap, src;
			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1)) {
				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
				if (src && src !== "none") {
					ba = bs.split(" ");
					ea = es.split(" ");
					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
					i = 2;
					while (--i > -1) {
						bs = ba[i];
						pct = (bs.indexOf("%") !== -1);
						if (pct !== (ea[i].indexOf("%") !== -1)) {
							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
						}
					}
					bs = ba.join(" ");
				}
			}
			return this.parseComplex(t.style, bs, es, pt, plugin);
		}, formatter:_parsePosition});
		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:_parsePosition});
		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
		_registerComplexSpecialProp("transformStyle", {prefix:true});
		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
		_registerComplexSpecialProp("userSelect", {prefix:true});
		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
			var b, cs, delim;
			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
				cs = t.currentStyle;
				delim = _ieVers < 8 ? " " : ",";
				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
				e = this.format(e).split(",").join(delim);
			} else {
				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
				e = this.format(e);
			}
			return this.parseComplex(t.style, b, e, pt, plugin);
		}});
		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
				return this.parseComplex(t.style, this.format(_getStyle(t, "borderTopWidth", _cs, false, "0px") + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), this.format(e), pt, plugin);
			}, color:true, formatter:function(v) {
				var a = v.split(" ");
				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
			}});
		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
			var s = t.style,
				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
		}});

		//opacity-related
		var _setIEOpacityRatio = function(v) {
				var t = this.t, //refers to the element's style property
					filters = t.filter || _getStyle(this.data, "filter") || "",
					val = (this.s + this.c * v) | 0,
					skip;
				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
						t.removeAttribute("filter");
						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
					} else {
						t.filter = filters.replace(_alphaFilterExp, "");
						skip = true;
					}
				}
				if (!skip) {
					if (this.xn1) {
						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
					}
					if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
						}
					} else {
						t.filter = filters.replace(_opacityExp, "opacity=" + val);
					}
				}
			};
		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
				style = t.style,
				isAutoAlpha = (p === "autoAlpha");
			if (typeof(e) === "string" && e.charAt(1) === "=") {
				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
			}
			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
				b = 0;
			}
			if (_supportsOpacity) {
				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
			} else {
				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
				style.zoom = 1; //helps correct an IE issue.
				pt.type = 2;
				pt.b = "alpha(opacity=" + pt.s + ")";
				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
				pt.data = t;
				pt.plugin = plugin;
				pt.setRatio = _setIEOpacityRatio;
			}
			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
				pt.xs0 = "inherit";
				cssp._overwriteProps.push(pt.n);
				cssp._overwriteProps.push(p);
			}
			return pt;
		}});


		var _removeProp = function(s, p) {
				if (p) {
					if (s.removeProperty) {
						if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
							p = "-" + p;
						}
						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				}
			},
			_setClassNameRatio = function(v) {
				this.t._gsClassPT = this;
				if (v === 1 || v === 0) {
					this.t.setAttribute("class", (v === 0) ? this.b : this.e);
					var mpt = this.data, //first MiniPropTween
						s = this.t.style;
					while (mpt) {
						if (!mpt.v) {
							_removeProp(s, mpt.p);
						} else {
							s[mpt.p] = mpt.v;
						}
						mpt = mpt._next;
					}
					if (v === 1 && this.t._gsClassPT === this) {
						this.t._gsClassPT = null;
					}
				} else if (this.t.getAttribute("class") !== this.e) {
					this.t.setAttribute("class", this.e);
				}
			};
		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
				cssText = t.style.cssText,
				difData, bs, cnpt, cnptLookup, mpt;
			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClassNameRatio;
			pt.pr = -11;
			_hasPriority = true;
			pt.b = b;
			bs = _getAllStyles(t, _cs);
			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
			cnpt = t._gsClassPT;
			if (cnpt) {
				cnptLookup = {};
				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
				while (mpt) {
					cnptLookup[mpt.p] = 1;
					mpt = mpt._next;
				}
				cnpt.setRatio(1);
			}
			t._gsClassPT = pt;
			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
			t.setAttribute("class", pt.e);
			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
			t.setAttribute("class", b);
			pt.data = difData.firstMPT;
			t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
			return pt;
		}});


		var _setClearPropsRatio = function(v) {
			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
				var s = this.t.style,
					transformParse = _specialProps.transform.parse,
					a, p, i, clearTransform, transform;
				if (this.e === "all") {
					s.cssText = "";
					clearTransform = true;
				} else {
					a = this.e.split(" ").join("").split(",");
					i = a.length;
					while (--i > -1) {
						p = a[i];
						if (_specialProps[p]) {
							if (_specialProps[p].parse === transformParse) {
								clearTransform = true;
							} else {
								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
							}
						}
						_removeProp(s, p);
					}
				}
				if (clearTransform) {
					_removeProp(s, _transformProp);
					transform = this.t._gsTransform;
					if (transform) {
						if (transform.svg) {
							this.t.removeAttribute("data-svg-origin");
						}
						delete this.t._gsTransform;
					}
				}

			}
		};
		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClearPropsRatio;
			pt.e = e;
			pt.pr = -10;
			pt.data = cssp._tween;
			_hasPriority = true;
			return pt;
		}});

		p = "bezier,throwProps,physicsProps,physics2D".split(",");
		i = p.length;
		while (i--) {
			_registerPluginProp(p[i]);
		}








		p = CSSPlugin.prototype;
		p._firstPT = p._lastParsedTransform = p._transform = null;

		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
		p._onInitTween = function(target, vars, tween) {
			if (!target.nodeType) { //css is only for dom elements
				return false;
			}
			this._target = target;
			this._tween = tween;
			this._vars = vars;
			_autoRound = vars.autoRound;
			_hasPriority = false;
			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
			_cs = _getComputedStyle(target, "");
			_overwriteProps = this._overwriteProps;
			var style = target.style,
				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
			if (_reqSafariFix) if (style.zIndex === "") {
				v = _getStyle(target, "zIndex", _cs);
				if (v === "auto" || v === "") {
					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
					this._addLazySet(style, "zIndex", 0);
				}
			}

			if (typeof(vars) === "string") {
				first = style.cssText;
				v = _getAllStyles(target, _cs);
				style.cssText = first + ";" + vars;
				v = _cssDif(target, v, _getAllStyles(target)).difs;
				if (!_supportsOpacity && _opacityValExp.test(vars)) {
					v.opacity = parseFloat( RegExp.$1 );
				}
				vars = v;
				style.cssText = first;
			}

			if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
			} else {
				this._firstPT = pt = this.parse(target, vars, null);
			}

			if (this._transformType) {
				threeD = (this._transformType === 3);
				if (!_transformProp) {
					style.zoom = 1; //helps correct an IE issue.
				} else if (_isSafari) {
					_reqSafariFix = true;
					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
					if (style.zIndex === "") {
						zIndex = _getStyle(target, "zIndex", _cs);
						if (zIndex === "auto" || zIndex === "") {
							this._addLazySet(style, "zIndex", 0);
						}
					}
					//Setting WebkitBackfaceVisibility corrects 3 bugs:
					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
					if (_isSafariLT6) {
						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
					}
				}
				pt2 = pt;
				while (pt2 && pt2._next) {
					pt2 = pt2._next;
				}
				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
				this._linkCSSP(tpt, null, pt2);
				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
				tpt.data = this._transform || _getTransform(target, _cs, true);
				tpt.tween = tween;
				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
			}

			if (_hasPriority) {
				//reorders the linked list in order of pr (priority)
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				this._firstPT = first;
			}
			return true;
		};


		p.parse = function(target, vars, pt, plugin) {
			var style = target.style,
				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
			for (p in vars) {
				es = vars[p]; //ending value string
				sp = _specialProps[p]; //SpecialProp lookup.
				if (sp) {
					pt = sp.parse(target, es, p, this, pt, plugin, vars);

				} else {
					bs = _getStyle(target, p, _cs) + "";
					isStr = (typeof(es) === "string");
					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
						if (!isStr) {
							es = _parseColor(es);
							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
						}
						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

					} else if (isStr && (es.indexOf(" ") !== -1 || es.indexOf(",") !== -1)) {
						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

					} else {
						bn = parseFloat(bs);
						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

						if (bs === "" || bs === "auto") {
							if (p === "width" || p === "height") {
								bn = _getDimension(target, p, _cs);
								bsfx = "px";
							} else if (p === "left" || p === "top") {
								bn = _calculateOffset(target, p, _cs);
								bsfx = "px";
							} else {
								bn = (p !== "opacity") ? 0 : 1;
								bsfx = "";
							}
						}

						rel = (isStr && es.charAt(1) === "=");
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.replace(_suffixExp, "");
						} else {
							en = parseFloat(es);
							esfx = isStr ? es.replace(_suffixExp, "") : "";
						}

						if (esfx === "") {
							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
						}

						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.

						//if the beginning/ending suffixes don't match, normalize them...
						if (bsfx !== esfx) if (esfx !== "") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
							bn = _convertToPixels(target, p, bn, bsfx);
							if (esfx === "%") {
								bn /= _convertToPixels(target, p, 100, "%") / 100;
								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
									bs = bn + "%";
								}

							} else if (esfx === "em" || esfx === "rem") {
								bn /= _convertToPixels(target, p, 1, esfx);

							//otherwise convert to pixels.
							} else if (esfx !== "px") {
								en = _convertToPixels(target, p, en, esfx);
								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
							}
							if (rel) if (en || en === 0) {
								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
							}
						}

						if (rel) {
							en += bn;
						}

						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
							pt.xs0 = esfx;
							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
							_log("invalid " + p + " tween value: " + vars[p]);
						} else {
							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
						}
					}
				}
				if (plugin) if (pt && !pt.plugin) {
					pt.plugin = plugin;
				}
			}
			return pt;
		};


		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
		p.setRatio = function(v) {
			var pt = this._firstPT,
				min = 0.000001,
				val, str, i;
			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
				while (pt) {
					if (pt.type !== 2) {
						if (pt.r && pt.type !== -1) {
							val = Math.round(pt.s + pt.c);
							if (!pt.type) {
								pt.t[pt.p] = val + pt.xs0;
							} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
								i = pt.l;
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.t[pt.p] = str;
							}
						} else {
							pt.t[pt.p] = pt.e;
						}
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = Math.round(val);
					} else if (val < min) if (val > -min) {
						val = 0;
					}
					if (!pt.type) {
						pt.t[pt.p] = val + pt.xs0;
					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
						i = pt.l;
						if (i === 2) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
						} else if (i === 3) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
						} else if (i === 4) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
						} else if (i === 5) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
						} else {
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.t[pt.p] = str;
						}

					} else if (pt.type === -1) { //non-tweening value
						pt.t[pt.p] = pt.xs0;

					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
			} else {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.b;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			}
		};

		/**
		 * @private
		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
		 * want and it won't create duplicate CSSPropTweens.
		 *
		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
		 */
		p._enableTransforms = function(threeD) {
			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
			this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
		};

		var lazySet = function(v) {
			this.t[this.p] = this.e;
			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
		};
		/** @private Gives us a way to set a value on the first render (and only the first render). **/
		p._addLazySet = function(t, p, v) {
			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
			pt.e = v;
			pt.setRatio = lazySet;
			pt.data = this;
		};

		/** @private **/
		p._linkCSSP = function(pt, next, prev, remove) {
			if (pt) {
				if (next) {
					next._prev = pt;
				}
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
				}
				if (prev) {
					prev._next = pt;
				} else if (!remove && this._firstPT === null) {
					this._firstPT = pt;
				}
				pt._next = next;
				pt._prev = prev;
			}
			return pt;
		};

		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
		p._kill = function(lookup) {
			var copy = lookup,
				pt, p, xfirst;
			if (lookup.autoAlpha || lookup.alpha) {
				copy = {};
				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
					copy[p] = lookup[p];
				}
				copy.opacity = 1;
				if (copy.autoAlpha) {
					copy.visibility = 1;
				}
			}
			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
				xfirst = pt.xfirst;
				if (xfirst && xfirst._prev) {
					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
				} else if (xfirst === this._firstPT) {
					this._firstPT = pt._next;
				}
				if (pt._next) {
					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
				}
				this._classNamePT = null;
			}
			return TweenPlugin.prototype._kill.call(this, copy);
		};



		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
		var _getChildStyles = function(e, props, targets) {
				var children, i, child, type;
				if (e.slice) {
					i = e.length;
					while (--i > -1) {
						_getChildStyles(e[i], props, targets);
					}
					return;
				}
				children = e.childNodes;
				i = children.length;
				while (--i > -1) {
					child = children[i];
					type = child.type;
					if (child.style) {
						props.push(_getAllStyles(child));
						if (targets) {
							targets.push(child);
						}
					}
					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
						_getChildStyles(child, props, targets);
					}
				}
			};

		/**
		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
		 * and it would create other problems. For example:
		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
		 *
		 * @param {Object} target object to be tweened
		 * @param {number} Duration in seconds (or frames for frames-based tweens)
		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
		 * @return {Array} An array of TweenLite instances
		 */
		CSSPlugin.cascadeTo = function(target, duration, vars) {
			var tween = TweenLite.to(target, duration, vars),
				results = [tween],
				b = [],
				e = [],
				targets = [],
				_reservedProps = TweenLite._internals.reservedProps,
				i, difs, p, from;
			target = tween._targets || tween.target;
			_getChildStyles(target, b, targets);
			tween.render(duration, true, true);
			_getChildStyles(target, e);
			tween.render(0, true, true);
			tween._enabled(true);
			i = targets.length;
			while (--i > -1) {
				difs = _cssDif(targets[i], b[i], e[i]);
				if (difs.firstMPT) {
					difs = difs.difs;
					for (p in vars) {
						if (_reservedProps[p]) {
							difs[p] = vars[p];
						}
					}
					from = {};
					for (p in difs) {
						from[p] = b[i][p];
					}
					results.push(TweenLite.fromTo(targets[i], duration, from, difs));
				}
			}
			return results;
		};

		TweenPlugin.activate([CSSPlugin]);
		return CSSPlugin;

	}, true);
	
}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(define) === "function" && define.amd) { //AMD
		define(["TweenLite"], getGlobal);
	} else if (typeof(module) !== "undefined" && module.exports) { //node
		require("../TweenLite.js");
		module.exports = getGlobal();
	}
}("CSSPlugin"));



/*!
 * VERSION: beta 0.3.4
 * DATE: 2015-08-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(function(window) {
	
	"use strict";
	var _globals = window.GreenSockGlobals || window,
		_namespace = function(ns) {
			var a = ns.split("."),
				p = _globals, i;
			for (i = 0; i < a.length; i++) {
				p[a[i]] = p = p[a[i]] || {};
			}
			return p;
		},
		pkg = _namespace("com.greensock.utils"),
		_getText = function(e) {
			var type = e.nodeType,
				result = "";
			if (type === 1 || type === 9 || type === 11) {
				if (typeof(e.textContent) === "string") {
					return e.textContent;
				} else {
					for ( e = e.firstChild; e; e = e.nextSibling ) {
						result += _getText(e);
					}
				}
			} else if (type === 3 || type === 4) {
				return e.nodeValue;
			}
			return result;
		},
		_doc = document,
		_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},
		_capsExp = /([A-Z])/g,
		_getStyle = function(t, p, cs, str) {
			var result;
			if ((cs = cs || _getComputedStyle(t, null))) {
				t = cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				result = (t || cs.length) ? t : cs[p]; //Opera behaves VERY strangely - length is usually 0 and cs[p] is the only way to get accurate results EXCEPT when checking for -o-transform which only works with cs.getPropertyValue()!
			} else if (t.currentStyle) {
				cs = t.currentStyle;
				result = cs[p];
			}
			return str ? result : parseInt(result, 10) || 0;
		},
		_isArrayLike = function(e) {
			return (e.length && e[0] && ((e[0].nodeType && e[0].style && !e.nodeType) || (e[0].length && e[0][0]))) ? true : false; //could be an array of jQuery objects too, so accommodate that.
		},
		_flattenArray = function(a) {
			var result = [],
				l = a.length,
				i, e, j;
			for (i = 0; i < l; i++) {
				e = a[i];
				if (_isArrayLike(e)) {
					j = e.length;
					for (j = 0; j < e.length; j++) {
						result.push(e[j]);
					}
				} else {
					result.push(e);
				}
			}
			return result;
		},
		_brSwap = ")eefec303079ad17405c",
		_brExp = /(?:<br>|<br\/>|<br \/>)/gi,
		_isOldIE = (_doc.all && !_doc.addEventListener),
		_divStart = "<div style='position:relative;display:inline-block;" + (_isOldIE ? "*display:inline;*zoom:1;'" : "'"), //note: we must use both display:inline-block and *display:inline for IE8 and earlier, otherwise it won't flow correctly (and if we only use display:inline, IE won't render most of the property tweens - very odd).
		_cssClassFunc = function(cssClass) {
			cssClass = cssClass || "";
			var iterate = (cssClass.indexOf("++") !== -1),
				num = 1;
			if (iterate) {
				cssClass = cssClass.split("++").join("");
			}
			return function() {
				return _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
			};
		},
		SplitText = pkg.SplitText = _globals.SplitText = function(element, vars) {
			if (typeof(element) === "string") {
				element = SplitText.selector(element);
			}
			if (!element) {
				throw("cannot split a null element.");
			}
			this.elements = _isArrayLike(element) ? _flattenArray(element) : [element];
			this.chars = [];
			this.words = [];
			this.lines = [];
			this._originals = [];
			this.vars = vars || {};
			this.split(vars);
		},
		_swapText = function(element, oldText, newText) {
			var type = element.nodeType;
			if (type === 1 || type === 9 || type === 11) {
				for ( element = element.firstChild; element; element = element.nextSibling ) {
					_swapText(element, oldText, newText);
				}
			} else if (type === 3 || type === 4) {
				element.nodeValue = element.nodeValue.split(oldText).join(newText);
			}
		},
		_pushReversed = function(a, merge) {
			var i = merge.length;
			while (--i > -1) {
				a.push(merge[i]);
			}
		},
		_split = function(element, vars, allChars, allWords, allLines) {
			if (_brExp.test(element.innerHTML)) {
				element.innerHTML = element.innerHTML.replace(_brExp, _brSwap); //swap in a unique string for <br/> tags so that we can identify it when we loop through later, and replace it appropriately
			}
			var text = _getText(element),
				types = vars.type || vars.split || "chars,words,lines",
				lines = (types.indexOf("lines") !== -1) ? [] : null,
				words = (types.indexOf("words") !== -1),
				chars = (types.indexOf("chars") !== -1),
				absolute = (vars.position === "absolute" || vars.absolute === true),
				space = absolute ? "&#173; " : " ",
				lineOffsetY = -999,
				cs = _getComputedStyle(element),
				paddingLeft = _getStyle(element, "paddingLeft", cs),
				borderTopAndBottom = _getStyle(element, "borderBottomWidth", cs) + _getStyle(element, "borderTopWidth", cs),
				borderLeftAndRight = _getStyle(element, "borderLeftWidth", cs) + _getStyle(element, "borderRightWidth", cs),
				padTopAndBottom = _getStyle(element, "paddingTop", cs) + _getStyle(element, "paddingBottom", cs),
				padLeftAndRight = _getStyle(element, "paddingLeft", cs) + _getStyle(element, "paddingRight", cs),
				textAlign = _getStyle(element, "textAlign", cs, true),
				origHeight = element.clientHeight,
				origWidth = element.clientWidth,
				wordEnd = "</div>",
				wordStart = _cssClassFunc(vars.wordsClass),
				charStart = _cssClassFunc(vars.charsClass),
				iterateLine = ((vars.linesClass || "").indexOf("++") !== -1),
				linesClass = vars.linesClass,
				hasTagStart = text.indexOf("<") !== -1,
				wordIsOpen = true,
				charArray = [],
				wordArray = [],
				lineArray = [],
				l, curLine, isChild, splitText, i, j, character, nodes, node, offset, lineNode, style, lineWidth, addWordSpaces;

			if (iterateLine) {
				linesClass = linesClass.split("++").join("");
			}
			if (hasTagStart) {
				text = text.split("<").join("{{LT}}"); //we can't leave "<" in the string, or when we set the innerHTML, it can be interpreted as
			}
			l = text.length;

			splitText = wordStart();
			for (i = 0; i < l; i++) {
				character = text.charAt(i);
				if (character === ")" && text.substr(i, 20) === _brSwap) {
					splitText += (wordIsOpen ? wordEnd : "") + "<BR/>";
					wordIsOpen = false;
					if (i !== l - 20 && text.substr(i+20, 20) !== _brSwap) {
						splitText += " " + wordStart();
						wordIsOpen = true;
					}
					i += 19;

				} else if (character === " " && text.charAt(i-1) !== " " && i !== l-1 && text.substr(i-20, 20) !== _brSwap) {
					splitText += wordIsOpen ? wordEnd : "";
					wordIsOpen = false;
					while (text.charAt(i + 1) === " ") { //skip over empty spaces (to avoid making them words)
						splitText += space;
						i++;
					}
					if (text.charAt(i + 1) !== ")" || text.substr(i + 1, 20) !== _brSwap) {
						splitText += space + wordStart();
						wordIsOpen = true;
					}

				} else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
					splitText +=  chars ? charStart() + "{{LT}}" + "</div>" : "{{LT}}";
					i += 5;
				} else {
					splitText += (chars && character !== " ") ? charStart() + character + "</div>" : character;
				}
			}
			element.innerHTML = splitText + (wordIsOpen ? wordEnd : "");

			if (hasTagStart) {
				_swapText(element, "{{LT}}", "<");
			}
			//copy all the descendant nodes into an array (we can't use a regular nodeList because it's live and we may need to renest things)
			j = element.getElementsByTagName("*");
			l = j.length;
			nodes = [];
			for (i = 0; i < l; i++) {
				nodes[i] = j[i];
			}

			//for absolute positioning, we need to record the x/y offsets and width/height for every <div>. And even if we're not positioning things absolutely, in order to accommodate lines, we must figure out where the y offset changes so that we can sense where the lines break, and we populate the lines array.
			if (lines || absolute) {
				for (i = 0; i < l; i++) {
					node = nodes[i];
					isChild = (node.parentNode === element);
					if (isChild || absolute || (chars && !words)) {
					 	offset = node.offsetTop;
						if (lines && isChild && offset !== lineOffsetY && node.nodeName !== "BR") {
							curLine = [];
							lines.push(curLine);
							lineOffsetY = offset;
						}
						if (absolute) { //record offset x and y, as well as width and height so that we can access them later for positioning. Grabbing them at once ensures we don't trigger a browser paint & we maximize performance.
							node._x = node.offsetLeft;
							node._y = offset;
							node._w = node.offsetWidth;
							node._h = node.offsetHeight;
						}
						if (lines) {
							if (words === isChild || !chars) {
								curLine.push(node);
								node._x -= paddingLeft;
							}
							if (isChild && i) {
								nodes[i-1]._wordEnd = true;
							}
							if (node.nodeName === "BR" && node.nextSibling && node.nextSibling.nodeName === "BR") { //two consecutive <br> tags signify a new [empty] line.
								lines.push([]);
							}
						}
					}
				}
			}

			for (i = 0; i < l; i++) {
				node = nodes[i];
				isChild = (node.parentNode === element);
				if (node.nodeName === "BR") {
					if (lines || absolute) {
						element.removeChild(node);
						nodes.splice(i--, 1);
						l--;
					} else if (!words) {
						element.appendChild(node);
					}
					continue;
				}

				if (absolute) {
					style = node.style;
					if (!words && !isChild) {
						node._x += node.parentNode._x;
						node._y += node.parentNode._y;
					}
					style.left = node._x + "px";
					style.top = node._y + "px";
					style.position = "absolute";
					style.display = "block";
					//if we don't set the width/height, things collapse in older versions of IE and the origin for transforms is thrown off in all browsers.
					style.width = (node._w + 1) + "px"; //IE is 1px short sometimes. Avoid wrapping
					style.height = node._h + "px";
				}

				if (!words) {
					//we always start out wrapping words in their own <div> so that line breaks happen correctly, but here we'll remove those <div> tags if necessary and renest the characters directly into the element rather than inside the word <div>
					if (isChild) {
						element.removeChild(node);
						nodes.splice(i--, 1);
						l--;
					} else if (!isChild && chars) {
						offset = (!lines && !absolute && node.nextSibling); //if this is the last letter in the word (and we're not breaking by lines and not positioning things absolutely), we need to add a space afterwards so that the characters don't just mash together
						element.appendChild(node);
						if (!offset) {
							element.appendChild(_doc.createTextNode(" "));
						}
						charArray.push(node); //TODO: push()
					}
				} else if (isChild && node.innerHTML !== "") {
					wordArray.push(node);  //TODO: push()
				} else if (chars) {
					charArray.push(node);  //TODO: push()
				}
			}

			if (lines) {
				//the next 7 lines just give us the line width in the most reliable way and figure out the left offset (if position isn't relative or absolute). We must set the width along with text-align to ensure everything works properly for various alignments.
				if (absolute) {
					lineNode = _doc.createElement("div");
					element.appendChild(lineNode);
					lineWidth = lineNode.offsetWidth + "px";
					offset = (lineNode.offsetParent === element) ? 0 : element.offsetLeft;
					element.removeChild(lineNode);
				}
				style = element.style.cssText;
				element.style.cssText = "display:none;"; //to improve performance, set display:none on the element so that the browser doesn't have to worry about reflowing or rendering while we're renesting things. We'll revert the cssText later.
				//we can't use element.innerHTML = "" because that causes IE to literally delete all the nodes and their content even though we've stored them in an array! So we must loop through the children and remove them.
				while (element.firstChild) {
					element.removeChild(element.firstChild);
				}
				addWordSpaces = (!absolute || (!words && !chars));
				for (i = 0; i < lines.length; i++) {
					curLine = lines[i];
					lineNode = _doc.createElement("div");
					lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
					if (linesClass) {
						lineNode.className = linesClass + (iterateLine ? i+1 : "");
					}
					lineArray.push(lineNode);  //TODO: push()
					l = curLine.length;
					for (j = 0; j < l; j++) {
						if (curLine[j].nodeName !== "BR") {
							node = curLine[j];
							lineNode.appendChild(node);
							if (addWordSpaces && (node._wordEnd || words)) {
								lineNode.appendChild(_doc.createTextNode(" "));
							}
							if (absolute) {
								if (j === 0) {
									lineNode.style.top = node._y + "px";
									lineNode.style.left = (paddingLeft + offset) + "px";
								}
								node.style.top = "0px";
								if (offset) {
									node.style.left = (node._x - offset) + "px";
								}
							}
						}
					}
					if (l === 0) { //if there are no nodes in the line (typically meaning there were two consecutive <br> tags, just add a non-breaking space so that things display properly.
						lineNode.innerHTML = "&nbsp;";
					}
					if (!words && !chars) {
						lineNode.innerHTML = _getText(lineNode).split(String.fromCharCode(160)).join(" ");
					}
					if (absolute) {
						lineNode.style.width = lineWidth;
						lineNode.style.height = node._h + "px";
					}
					element.appendChild(lineNode);
				}
				element.style.cssText = style;
			}

			//if everything shifts to being position:absolute, the container can collapse in terms of height or width, so fix that here.
			if (absolute) {
				if (origHeight > element.clientHeight) {
					element.style.height = (origHeight - padTopAndBottom) + "px";
					if (element.clientHeight < origHeight) { //IE8 and earlier use a different box model - we must include padding and borders
						element.style.height = (origHeight + borderTopAndBottom)+ "px";
					}
				}
				if (origWidth > element.clientWidth) {
					element.style.width = (origWidth - padLeftAndRight) + "px";
					if (element.clientWidth < origWidth) { //IE8 and earlier use a different box model - we must include padding and borders
						element.style.width = (origWidth + borderLeftAndRight)+ "px";
					}
				}
			}
			_pushReversed(allChars, charArray);
			_pushReversed(allWords, wordArray);
			_pushReversed(allLines, lineArray);
		},
		p = SplitText.prototype;

	p.split = function(vars) {
		if (this.isSplit) {
			this.revert();
		}
		this.vars = vars || this.vars;
		this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
		var i = this.elements.length;
		//we split in reversed order so that if/when we position:absolute elements, they don't affect the position of the ones after them in the document flow (shifting them up as they're taken out of the document flow).
		while (--i > -1) {
			this._originals[i] = this.elements[i].innerHTML;
			_split(this.elements[i], this.vars, this.chars, this.words, this.lines);
		}
		this.chars.reverse();
		this.words.reverse();
		this.lines.reverse();
		this.isSplit = true;
		return this;
	};

	p.revert = function() {
		if (!this._originals) {
			throw("revert() call wasn't scoped properly.");
		}
		var i = this._originals.length;
		while (--i > -1) {
			this.elements[i].innerHTML = this._originals[i];
		}
		this.chars = [];
		this.words = [];
		this.lines = [];
		this.isSplit = false;
		return this;
	};

	SplitText.selector = window.$ || window.jQuery || function(e) {
		var selector = window.$ || window.jQuery;
		if (selector) {
			SplitText.selector = selector;
			return selector(e);
		}
		return (typeof(document) === "undefined") ? e : (document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
	};
	SplitText.version = "0.3.4";
	
})(_gsScope);

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(define) === "function" && define.amd) { //AMD
		define(["TweenLite"], getGlobal);
	} else if (typeof(module) !== "undefined" && module.exports) { //node
		module.exports = getGlobal();
	}
}("SplitText"));


// Sandboxing Greensock
try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}


;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS / nodejs module
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // CSS properties which contain references to images.
    $.waitForImages = {
        hasImageProperties: [
            'backgroundImage',
            'listStyleImage',
            'borderImage',
            'borderCornerImage',
            'cursor'
        ],
        hasImageAttributes: ['srcset']
    };

    // Custom selector to find all `img` elements with a valid `src` attribute.
    $.expr[':']['has-src'] = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        return $(obj).is('img[src][src!=""]');
    };

    // Custom selector to find images which are not already cached by the
    // browser.
    $.expr[':'].uncached = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        if (!$(obj).is(':has-src')) {
            return false;
        }

        return !obj.complete;
    };

    $.fn.waitForImages = function () {

        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();

        var finishedCallback;
        var eachCallback;
        var waitForAll;

        // Handle options object (if passed).
        if ($.isPlainObject(arguments[0])) {

            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished;

        } else {

            // Handle if using deferred object and only one param was passed in.
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0];
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2];
            }

        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }

        this.each(function () {
            // Build a list of all imgs, dependent on what images will
            // be considered.
            var obj = $(this);
            var allImgs = [];
            // CSS properties which may contain an image.
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
            // Element attributes which may contain an image.
            var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
            // To match `url()` references.
            // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

            if (waitForAll) {

                // Get all elements (including the original), as any one of
                // them could have a background image.
                obj.find('*').addBack().each(function () {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in
                    // case it has a background image too.
                    if (element.is('img:has-src')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        var match;

                        // If it doesn't contain this property, skip.
                        if (!propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        }
                    });

                    $.each(hasImageAttributes, function (i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;

                        // If it doesn't contain this property, skip.
                        if (!attributeValue) {
                            return true;
                        }

                        // Check for multiple comma separated images
                        attributeValues = attributeValue.split(',');

                        $.each(attributeValues, function(i, value) {
                            // Trim value and get string before first
                            // whitespace (for use with srcset).
                            value = $.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            });
                        });
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj.find('img:has-src')
                    .each(function () {
                    allImgs.push({
                        src: this.src,
                        element: this
                    });
                });
            }

            allImgsLength = allImgs.length;
            allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0]);
            }

            $.each(allImgs, function (i, img) {

                var image = new Image();
                var events =
                  'load.' + eventNamespace + ' error.' + eventNamespace;

                // Handle the image loading and error with the same callback.
                $(image).one(events, function me (event) {
                    // If an error occurred with loading the image, set the
                    // third argument accordingly.
                    var eachArguments = [
                        allImgsLoaded,
                        allImgsLength,
                        event.type == 'load'
                    ];
                    allImgsLoaded++;

                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);

                    // Unbind the event listeners. I use this in addition to
                    // `one` as one of those events won't be called (either
                    // 'load' or 'error' will be called).
                    $(this).off(events, me);

                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false;
                    }

                });

                image.src = img.src;
            });
        });

        return deferred.promise();

    };
}));

;
/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.2.5.3 (30.05.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
(function(jQuery,undefined){
	"use strict";
		
	jQuery.fn.extend({

		revolution: function(options) {

			// SET DEFAULT VALUES OF ITEM //
			var defaults = {
				delay:9000,
				responsiveLevels:4064,					// Single or Array for Responsive Levels i.e.: 4064 or i.e. [2048, 1024, 768, 480]					
				visibilityLevels:[2048,1024,778,480],	// Single or Array for Responsive Visibility Levels i.e.: 4064 or i.e. [2048, 1024, 768, 480]					
				gridwidth:960,							// Single or Array i.e. 960 or [960, 840,760,460]
				gridheight:500,							// Single or Array i.e. 500 or [500, 450,400,350]
				minHeight:0,
				autoHeight:"off",					
				sliderType : "standard",				// standard, carousel, hero					
				sliderLayout : "auto",					// auto, fullwidth, fullscreen				

				fullScreenAutoWidth:"off",				// Turns the FullScreen Slider to be a FullHeight but auto Width Slider
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer:"",			// Size for FullScreen Slider minimising Calculated on the Container sizes
				fullScreenOffset:"0",					// Size for FullScreen Slider minimising					

				hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
				hideAllCaptionAtLimit:0,				// Hide all The Captions if Width of Browser is less then this value
				hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value										
				disableProgressBar:"off",				// Hides Progress Bar if is set to "on"
				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
				shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
				dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite
				startDelay:0,							// Delay before the first Animation starts.										
				lazyType : "smart",						//full, smart, single
				spinner:"spinner0",
				shuffle:"off",							// Random Order of Slides,

				
				viewPort:{
					enable:false,						// if enabled, slider wait with start or wait at first slide.
					outof:"wait",						// wait,pause						
					visible_area:"60%"					
				},

				fallbacks:{
					isJoomla:false,
					panZoomDisableOnMobile:"off",
					simplifyAll:"on",
					nextSlideOnWindowFocus:"off",	
					disableFocusListener:true,
					ignoreHeightChanges:"off",  // off, mobile, always
					ignoreHeightChangesSize:0
				},
				
				parallax : {
					type : "off",						// off, mouse, scroll, mouse+scroll
					levels: [5, 10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
					origo:"slidercenter",			// slidercenter or enterpoint
					speed:500,
					bgparallax:"off",
					opacity:"off",
					disable_onmobile:"off",
					ddd_shadow:"on",
					ddd_bgfreeze:"off",
					ddd_overflow:"visible",
					ddd_layer_overflow:"visible",
					ddd_z_correction:65,
					ddd_path:"mouse"
				},
				
				carousel : {
					horizontal_align : "center",
					vertical_align : "center",
					infinity : "on",
					space : 0,
					maxVisibleItems : 3,						
					stretch:"off",						
					fadeout:"on",						
					maxRotation:0,						
					minScale:0,
					vary_fade:"off",
					vary_rotation:"on",
					vary_scale:"off",						
					border_radius:"0px",
					padding_top:0,
					padding_bottom:0
				},

				navigation : {
					keyboardNavigation:"off",	
					keyboard_direction:"horizontal",		//	horizontal - left/right arrows,  vertical - top/bottom arrows
					mouseScrollNavigation:"off",			// on, off, carousel					
					onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

					touch:{
						touchenabled:"off",						// Enable Swipe Function : on/off
						swipe_treshold : 75,					// The number of pixels that the user must move their finger by before it is considered a swipe.
						swipe_min_touches : 1,					// Min Finger (touch) used for swipe							
						drag_block_vertical:false,				// Prevent Vertical Scroll during Swipe
						swipe_direction:"horizontal"
					},
					arrows: {
						style:"",
						enable:false,
						hide_onmobile:false,							
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						hide_under:0,
						hide_over:9999,
						tmp:'',
						rtl:false,
						left : {															
							h_align:"left",
							v_align:"center",
							h_offset:20,
							v_offset:0,	
							container:"slider",							
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:20,
							v_offset:0,
							container:"slider",
						}
					},
					bullets: {
						container:"slider",
						rtl:false,
						style:"",
						enable:false,
						hide_onmobile:false,							
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						hide_under:0,
						hide_over:9999,
						direction:"horizontal",
						h_align:"left",
						v_align:"center",
						space:0,
						h_offset:20,
						v_offset:0,
						tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
					},
					thumbnails: {
						container:"slider",
						rtl:false,
						style:"",
						enable:false,
						width:100,
						height:50,
						min_width:100,
						wrapper_padding:2,
						wrapper_color:"#f5f5f5",
						wrapper_opacity:1,
						tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
						visibleAmount:5,
						hide_onmobile:false,							
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						hide_under:0,
						hide_over:9999,
						direction:"horizontal",
						span:false,
						position:"inner",							
						space:2,
						h_align:"left",
						v_align:"center",
						h_offset:20,
						v_offset:0
					},
					tabs: {
						container:"slider",
						rtl:false,
						style:"",
						enable:false,
						width:100,
						min_width:100,
						height:50,
						wrapper_padding:10,
						wrapper_color:"#f5f5f5",
						wrapper_opacity:1,
						tmp:'<span class="tp-tab-image"></span>',
						visibleAmount:5,
						hide_onmobile:false,							
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile: 1200,
						hide_under:0,
						hide_over:9999,
						direction:"horizontal",
						span:false,
						space:0,
						position:"inner",							
						h_align:"left",
						v_align:"center",
						h_offset:20,
						v_offset:0
					}
				},					
				extensions:"extensions/",			//example extensions/ or extensions/source/
				extensions_suffix:".min.js",
				//addons:[{fileprefix:"revolution.addon.whiteboard",init:"initWhiteBoard",params:"opt",handel:"whiteboard"}],
				debugMode:false
			};
				
			// Merge of Defaults									
			options = jQuery.extend(true,{},defaults, options);
			
			return this.each(function() {	

				
				var c = jQuery(this);
				
				// Prepare maxHeight
				options.minHeight = options.minHeight!=undefined ? parseInt(options.minHeight,0) : options.minHeight;

				//REMOVE SLIDES IF SLIDER IS HERO
				if (options.sliderType=="hero") {
					c.find('>ul>li').each(function(i) {
						if (i>0) jQuery(this).remove();
					})
				}
				options.jsFileLocation = options.jsFileLocation || getScriptLocation("themepunch.revolution.min.js");						
				options.jsFileLocation = options.jsFileLocation + options.extensions;
				options.scriptsneeded = getNeededScripts(options,c);
				options.curWinRange = 0;

				options.rtl = true; //jQuery('body').hasClass("rtl"); 	

				  if (options.navigation!=undefined && options.navigation.touch!=undefined) 
       				 options.navigation.touch.swipe_min_touches = options.navigation.touch.swipe_min_touches >5 ? 1 : options.navigation.touch.swipe_min_touches;
   


				jQuery(this).on("scriptsloaded",function() {
					if (options.modulesfailing ) {
						c.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.'+options.errorm+'</div>').show();
						return false;
					}

					// CHECK FOR MIGRATION
					if (_R.migration!=undefined) options = _R.migration(c,options);			
					punchgs.force3D = true;
					if (options.simplifyAll!=="on") punchgs.TweenLite.lagSmoothing(1000,16);													
					prepareOptions(c,options);
					initSlider(c,options);
				});						
				c.data('opt',options);
				waitForScripts(c,options);
			})
		},

		// Remove a Slide from the Slider
		revremoveslide : function(sindex) {

			return this.each(function() {	
				
				var container=jQuery(this);
				if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
					var bt = container.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');					
					if (opt && opt.li.length>0) {
						if (sindex>0 || sindex<=opt.li.length) {
							
							var li = jQuery(opt.li[sindex]),
								ref = li.data("index"),
								nextslideafter = false;
										
							opt.slideamount = opt.slideamount-1;										
							removeNavWithLiref('.tp-bullet',ref,opt);
							removeNavWithLiref('.tp-tab',ref,opt);
							removeNavWithLiref('.tp-thumb',ref,opt);	
							if (li.hasClass('active-revslide')) 
								nextslideafter = true;													
							li.remove();
							opt.li = removeArray(opt.li,sindex);	
							if (opt.carousel && opt.carousel.slides)
								opt.carousel.slides = removeArray(opt.carousel.slides,sindex)
							opt.thumbs = removeArray(opt.thumbs,sindex);	
							if (_R.updateNavIndexes) _R.updateNavIndexes(opt); 
							if (nextslideafter) container.revnext();
							punchgs.TweenLite.set(opt.li,{minWidth:"99%"});														
							punchgs.TweenLite.set(opt.li,{minWidth:"100%"});
						}
					}
				}
			});
			
		},

		// Add a New Call Back to some Module
		revaddcallback: function(callback) {
			return this.each(function() {						
				var container=jQuery(this);
				if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
					var bt = container.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');
					if (opt.callBackArray === undefined)
						opt.callBackArray = new Array();
					opt.callBackArray.push(callback);						
				}
			})
		},

		// Get Current Parallax Proc
		revgetparallaxproc : function() {		
			var container=jQuery(this);
			if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
				var bt = container.parent().find('.tp-bannertimer'),
					opt = bt.data('opt');
				return opt.scrollproc;
			}
			
		},

		// ENABLE DEBUG MODE
		revdebugmode: function() {
			return this.each(function() {						
				var container=jQuery(this);
				if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
					var bt = container.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');
						opt.debugMode = true;
					containerResized(container,opt);
				}
			})
		},

		// METHODE SCROLL
		revscroll: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0)
							jQuery('body,html').animate({scrollTop:(container.offset().top+(container.height())-oy)+"px"},{duration:400});
					})
				},

		// METHODE PAUSE
		revredraw: function(oy) {
					return this.each(function() {
						
						var container=jQuery(this);
						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
							var bt = container.parent().find('.tp-bannertimer');
							var opt = bt.data('opt');
							containerResized(container,opt);																	
						}
					})
				},
		// METHODE PAUSE
		revkill: function(oy) {

						var self = this,
							container=jQuery(this);

							punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements);
							if (_R.endMoveCaption)
								if (opt.endtimeouts && opt.endtimeouts.length>0) 
									jQuery.each(opt.endtimeouts,function(i,timeo) {	clearTimeout(timeo);});
								
								//punchgs.TweenLite.killDelayedCallsTo(_R.endMoveCaption);

						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {

							container.data('conthover',1);
							container.data('conthover-changed',1);
							container.trigger('revolution.slide.onpause');
							var bt = container.parent().find('.tp-bannertimer'),
								opt = bt.data('opt');
							opt.tonpause = true;
							container.trigger('stoptimer');

							punchgs.TweenLite.killTweensOf(container.find('*'),false);
							punchgs.TweenLite.killTweensOf(container,false);
							container.unbind('hover, mouseover, mouseenter,mouseleave, resize');
							var resizid = "resize.revslider-"+container.attr('id');
							jQuery(window).off(resizid);
							container.find('*').each(function() {
									var el = jQuery(this);

									el.unbind('on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer');
									el.off('on, hover, mouseenter,mouseleave,mouseover, resize');
									el.data('mySplitText',null);
									el.data('ctl',null);
									if (el.data('tween')!=undefined)
										el.data('tween').kill();
									if (el.data('kenburn')!=undefined)
										el.data('kenburn').kill();
									if (el.data('timeline_out')!=undefined)											
										el.data('timeline_out').kill();	
									if (el.data('timeline')!=undefined)											
										el.data('timeline').kill();													
										
									el.remove();
									el.empty();
									el=null;
							})


							punchgs.TweenLite.killTweensOf(container.find('*'),false);
							punchgs.TweenLite.killTweensOf(container,false);
							bt.remove();
							try{container.closest('.forcefullwidth_wrapper_tp_banner').remove();} catch(e) {}
							try{container.closest('.rev_slider_wrapper').remove()} catch(e) {}
							try{container.remove();} catch(e) {}
							container.empty();
							container.html();
							container = null;

							opt = null;
							delete(self.c);
							delete(self.opt);

							return true;
						} else {
							return false;
						}


				},

		// METHODE PAUSE
		revpause: function() {
			return this.each(function() {
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					c.data('conthover',1);
					c.data('conthover-changed',1);
					c.trigger('revolution.slide.onpause');
					var bt = c.parent().find('.tp-bannertimer');
					var opt = bt.data('opt');					
					opt.tonpause = true;
					c.trigger('stoptimer');
				}
			})
		},

		// METHODE RESUME
		revresume: function() {
			return this.each(function() {
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					c.data('conthover',0);
					c.data('conthover-changed',1);
					c.trigger('revolution.slide.onresume');
					var bt = c.parent().find('.tp-bannertimer');
					var opt = bt.data('opt');
					opt.tonpause = false;					
					c.trigger('starttimer');
				}
			})
		},

		revstart: function() {
			//return this.each(function() {
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0 && c.data('opt')) {		
					if (!c.data('opt')["sliderisrunning"]) {
						runSlider(c,c.data('opt'));
						return true;
					}
					else {
						console.log("Slider Is Running Already");
						return false;
					}

				}
			//})

		},

		// METHODE NEXT
		revnext: function() {
			return this.each(function() {
				// CATCH THE CONTAINER
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					var bt = c.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');					
					_R.callingNewSlide(opt,c,1);
				}
			})
		},

		// METHODE RESUME
		revprev: function() {
			return this.each(function() {
				// CATCH THE CONTAINER
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					var bt = c.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');					
					_R.callingNewSlide(opt,c,-1);
				}
			})
		},

		// METHODE LENGTH
		revmaxslide: function() {
			// CATCH THE CONTAINER
			return jQuery(this).find('.tp-revslider-mainul >li').length;
		},


		// METHODE CURRENT
		revcurrentslide: function() {
			// CATCH THE CONTAINER
			var c=jQuery(this);
			if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
				var bt = c.parent().find('.tp-bannertimer');
				var opt = bt.data('opt');
				return parseInt(opt.act,0)+1;
			}
		},

		// METHODE CURRENT
		revlastslide: function() {
			// CATCH THE CONTAINER
			return jQuery(this).find('.tp-revslider-mainul >li').length;
		},


		// METHODE JUMP TO SLIDE
		revshowslide: function(slide) {
			return this.each(function() {
				// CATCH THE CONTAINER
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					var bt = c.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');							
					_R.callingNewSlide(opt,c,"to"+(slide-1));
				}
			})
		},
		revcallslidewithid: function(slide) {
			return this.each(function() {
				// CATCH THE CONTAINER
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					var bt = c.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');										
					_R.callingNewSlide(opt,c,slide);
				}
			})
		}		
});



//////////////////////////////////////////////////////////////
// -	REVOLUTION FUNCTION EXTENSIONS FOR GLOBAL USAGE  -  //	
//////////////////////////////////////////////////////////////
var _R = jQuery.fn.revolution;

jQuery.extend(true, _R, {
	
	simp : function(a,b,basic) {
		var c = Math.abs(a) - (Math.floor(Math.abs(a / b))*b);																			
		if (basic)
			return c;
		else 
			return a<0 ? -1*c : c;
	},

	//	-	IS IOS VERSION OLDER THAN 5 ??	
 	iOSVersion : function() {
		var oldios = false;
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
	        if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) {
	        	oldios = true;
			}
	    } else {
			   oldios = false;
	    }
		return oldios;
	},


	//	-	CHECK IF BROWSER IS IE		-		
	isIE : function( version, comparison ){
	    var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
	    $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
	    var ieTest = $div.find('a').length;
	    $div.remove();
	    return ieTest;
	},

	// 	-	IS MOBILE ?? 
	is_mobile : function() {
	    var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
		var ismobile=false;
	    for(var i in agents) {
	
		    if (navigator.userAgent.split(agents[i]).length>1) {
	            ismobile = true;
	
	          }
	    }
	    return ismobile;		    
	},

	// -  CALL BACK HANDLINGS - //
	 callBackHandling : function(opt,type,position) {
	 	try{
			if (opt.callBackArray)
				jQuery.each(opt.callBackArray,function(i,c) {				
					if (c) {
						if (c.inmodule && c.inmodule === type)
							if (c.atposition && c.atposition === position)
								if (c.callback) 
									c.callback.call();											
					}
				});
		} catch(e) {
			console.log("Call Back Failed");
		}
	},

	get_browser : function(){
	    var N=navigator.appName, ua=navigator.userAgent, tem;
	    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
	    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
	    return M[0];
    },

	get_browser_version  : function(){
	    var N=navigator.appName, ua=navigator.userAgent, tem;
	    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
	    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
	    return M[1];
    },

    // GET THE HORIZONTAL OFFSET OF SLIDER BASED ON THE THU`MBNAIL AND TABS LEFT AND RIGHT SIDE
	getHorizontalOffset : function(container,side) {
		var thumbloff = gWiderOut(container,'.outer-left'),
			thumbroff = gWiderOut(container,'.outer-right');
							
		switch (side) {
			case "left":
				return thumbloff;
			break;
			case "right":
				return thumbroff;
			break;
			case "both":
				return thumbloff+thumbroff;
			break;
		}
	},


	// 	-	CALLING THE NEW SLIDE 	-	//		
	callingNewSlide : function(opt,container,direction) {
		
		
		var aindex = container.find('.next-revslide').length>0 ? container.find('.next-revslide').index() : container.find('.processing-revslide').length>0 ? container.find('.processing-revslide').index() : container.find('.active-revslide').index(),
			nindex = 0;
	
		container.find('.next-revslide').removeClass("next-revslide");
		
		// IF WE ARE ON AN INVISIBLE SLIDE CURRENTLY
		if (container.find('.active-revslide').hasClass("tp-invisible-slide"))
			aindex = opt.last_shown_slide;
		
		// SET NEXT DIRECTION
		if (direction && jQuery.isNumeric(direction) || direction.match(/to/g)) {			
			if (direction===1 || direction === -1) {
				
				nindex = aindex + direction;
				nindex = nindex<0 ? opt.slideamount-1 : nindex>=opt.slideamount ? 0 : nindex;						
			} else {							

				direction=jQuery.isNumeric(direction) ? direction : parseInt(direction.split("to")[1],0);
				nindex = direction<0 ? 0 : direction>opt.slideamount-1 ? opt.slideamount-1 : direction;						
			}
			container.find('.tp-revslider-slidesli:eq('+nindex+')').addClass("next-revslide");
		} else 		
		if (direction) {
			
			container.find('.tp-revslider-slidesli').each(function() {
				var li=jQuery(this);				
				if (li.data('index')===direction) li.addClass("next-revslide");									
			})			
		}

		
		nindex = container.find('.next-revslide').index();				
		container.trigger("revolution.nextslide.waiting");
				

		if ((aindex===nindex && aindex === opt.last_shown_slide) || (nindex !== aindex && nindex!=-1))
			swapSlide(container,opt);	
		else
			container.find('.next-revslide').removeClass("next-revslide");
	},

	slotSize : function(img,opt) {
		opt.slotw=Math.ceil(opt.width/opt.slots);

		if (opt.sliderLayout=="fullscreen")
			opt.sloth=Math.ceil(jQuery(window).height()/opt.slots);
		else
			opt.sloth=Math.ceil(opt.height/opt.slots);

		if (opt.autoHeight=="on" && img!==undefined && img!=="")
		 	opt.sloth=Math.ceil(img.height()/opt.slots);


	},

	setSize : function(opt) {
	
		var ofh = (opt.top_outer || 0) + (opt.bottom_outer || 0),
			cpt = parseInt((opt.carousel.padding_top||0),0),
			cpb = parseInt((opt.carousel.padding_bottom||0),0),
			maxhei = opt.gridheight[opt.curWinRange];

			opt.paddings = opt.paddings === undefined ? {top:(parseInt(opt.c.parent().css("paddingTop"),0) || 0), bottom:(parseInt(opt.c.parent().css("paddingBottom"),0) || 0)} : opt.paddings; 
			
		maxhei = maxhei<opt.minHeight ? opt.minHeight : maxhei;		
		if (opt.sliderLayout=="fullwidth" && opt.autoHeight=="off")	punchgs.TweenLite.set(opt.c,{maxHeight:maxhei+"px"});	
		opt.c.css({marginTop:cpt,marginBottom:cpb});					
		opt.width=opt.ul.width();
		opt.height=opt.ul.height();	
		setScale(opt);
			
		opt.height = Math.round(opt.gridheight[opt.curWinRange] * (opt.width/opt.gridwidth[opt.curWinRange]));

		if (opt.height>opt.gridheight[opt.curWinRange] && opt.autoHeight!="on") opt.height=opt.gridheight[opt.curWinRange];

		if (opt.sliderLayout=="fullscreen" || opt.infullscreenmode) {
			opt.height = opt.bw * opt.gridheight[opt.curWinRange];
			var cow = opt.c.parent().width();
			var coh = jQuery(window).height();

			if (opt.fullScreenOffsetContainer!=undefined) {
				try{
					var offcontainers = opt.fullScreenOffsetContainer.split(",");
					if (offcontainers)
						jQuery.each(offcontainers,function(index,searchedcont) {
							coh = jQuery(searchedcont).length>0 ? coh - jQuery(searchedcont).outerHeight(true) : coh;										
						});
				} catch(e) {}
				try{
					if (opt.fullScreenOffset.split("%").length>1 && opt.fullScreenOffset!=undefined && opt.fullScreenOffset.length>0) 
							coh = coh - (jQuery(window).height()* parseInt(opt.fullScreenOffset,0)/100);
					else
					if (opt.fullScreenOffset!=undefined && opt.fullScreenOffset.length>0)
					 		coh = coh - parseInt(opt.fullScreenOffset,0);								
				} catch(e) {}
			}

			coh = coh<opt.minHeight ? opt.minHeight : coh;	
			coh = coh - ofh;			
			opt.c.parent().height(coh);

			opt.c.closest('.rev_slider_wrapper').height(coh);
			opt.c.css({'height':'100%'});

			opt.height=coh;
			if (opt.minHeight!=undefined && opt.height<opt.minHeight)
				opt.height = opt.minHeight;
		} else {

			if (opt.minHeight!=undefined && opt.height<opt.minHeight)
				opt.height = opt.minHeight;			
			opt.c.height(opt.height);

		}
		var si = {	height:(cpt+cpb+ofh+opt.height+opt.paddings.top+opt.paddings.bottom)};	
		
		opt.c.closest('.forcefullwidth_wrapper_tp_banner').find('.tp-fullwidth-forcer').css(si);
		opt.c.closest('.rev_slider_wrapper').css(si);		
		setScale(opt);		
	},

	enterInViewPort : function(opt) {
		// START COUNTER IF VP ENTERED, AND COUNTDOWN WAS NOT ON YET
		if (opt.waitForCountDown) {
			countDown(opt.c,opt);		
			opt.waitForCountDown=false;			
		}
		// START FIRST SLIDE IF NOT YET STARTED AND VP ENTERED
		if (opt.waitForFirstSlide) {
			swapSlide(opt.c,opt);		
			opt.waitForFirstSlide=false;			
		}			

		if (opt.sliderlaststatus == "playing" || opt.sliderlaststatus==undefined) {
			opt.c.trigger("starttimer");
		}			

		
		if (opt.lastplayedvideos != undefined && opt.lastplayedvideos.length>0) {
			
			jQuery.each(opt.lastplayedvideos,function(i,_nc) {
				
				_R.playVideo(_nc,opt);
			});
		}	
	},

	leaveViewPort : function(opt) {		
		opt.sliderlaststatus = opt.sliderstatus;
		opt.c.trigger("stoptimer");		
		if (opt.playingvideos != undefined && opt.playingvideos.length>0) { 
			opt.lastplayedvideos = jQuery.extend(true,[],opt.playingvideos);
			if (opt.playingvideos)
				jQuery.each(opt.playingvideos,function(i,_nc) {		
					opt.leaveViewPortBasedStop = true;		
					if (_R.stopVideo) _R.stopVideo(_nc,opt);
				});
		}
	},

	unToggleState : function(a) {			
		if (a!=undefined && a.length>0)
			jQuery.each(a,function(i,layer) {
				layer.removeClass("rs-toggle-content-active");
			});		
	},

	toggleState : function(a) {
		if (a!=undefined && a.length>0)
			jQuery.each(a,function(i,layer) {
				layer.addClass("rs-toggle-content-active");
			});
	},
	lastToggleState : function(a) {
		var state = 0;
		if (a!=undefined && a.length>0)
			jQuery.each(a,function(i,layer) {
				state = layer.hasClass("rs-toggle-content-active");
			});
		return state;
	}

});


var	_ISM = _R.is_mobile();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
var removeArray = function(arr,i) {
				var newarr = [];
				jQuery.each(arr,function(a,b) {
					if (a!=i) newarr.push(b);
				})
				return newarr;
			}

var removeNavWithLiref = function(a,ref,opt) {
	opt.c.find(a).each(function() {
		var a = jQuery(this);
		if (a.data('liref')===ref)
			a.remove();
	})
}


var lAjax = function(s,o) {
	if (jQuery('body').data(s)) return false;
	if (o.filesystem) {
		if (o.errorm===undefined) 
			o.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:";
		console.warn('Local Filesystem detected !');
		o.errorm = o.errorm+'<br>&lt;script type="text/javascript" src="'+o.jsFileLocation+s+o.extensions_suffix+'"&gt;&lt;/script&gt;';
		console.warn(o.jsFileLocation+s+o.extensions_suffix+' could not be loaded !');
		console.warn('Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document.');
		console.log(" ");
		o.modulesfailing = true;
		return false;
	}
	jQuery.ajax({
		url:o.jsFileLocation+s+o.extensions_suffix,
		'dataType':'script',
		'cache':true,
		"error":function(e) {
			console.warn("Slider Revolution 5.0 Error !")
			console.error("Failure at Loading:"+s+o.extensions_suffix+" on Path:"+o.jsFileLocation)
			console.info(e);
		}			
	});
	jQuery('body').data(s,true);
}

var getNeededScripts = function(o,c) {	
	var n = new Object(),
		_n = o.navigation;
	
	n.kenburns = false;
	n.parallax = false;
	n.carousel = false;
	n.navigation = false;
	n.videos = false;
	n.actions = false;
	n.layeranim = false;
	n.migration = false;

	


	// MIGRATION EXTENSION
	if (!c.data('version') || !c.data('version').toString().match(/5./gi)) {
		n.kenburns = true;
		n.parallax = true;
		n.carousel = false;
		n.navigation = true;
		n.videos = true;
		n.actions = true;
		n.layeranim = true;
		n.migration = true;		
	}
	else {
		// KEN BURN MODUL
		c.find('img').each(function(){			
			if (jQuery(this).data('kenburns')=="on") n.kenburns = true;
		});						

		// NAVIGATION EXTENSTION
		if (o.sliderType =="carousel" || _n.keyboardNavigation=="on" || _n.mouseScrollNavigation=="on" || _n.touch.touchenabled=="on" || _n.arrows.enable || _n.bullets.enable || _n.thumbnails.enable || _n.tabs.enable )
			n.navigation = true;
		
		// LAYERANIM, VIDEOS, ACTIONS EXTENSIONS
		c.find('.tp-caption, .tp-static-layer, .rs-background-video-layer').each(function(){
			var _nc = jQuery(this);
			if ((_nc.data('ytid')!=undefined  || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('youtube')>0))			
				n.videos = true;			
			if ((_nc.data('vimeoid')!=undefined || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('vimeo')>0))
				n.videos = true;		
			if (_nc.data('actions')!==undefined) 
				n.actions = true;
			n.layeranim = true;
		});


		c.find('li').each(function() {
			if (jQuery(this).data('link') && jQuery(this).data('link')!=undefined) {
				n.layeranim = true;
				n.actions = true;
			}
		})

		// VIDEO EXTENSION
		if (!n.videos && (c.find('.rs-background-video-layer').length>0 || c.find(".tp-videolayer").length>0 || c.find(".tp-audiolayer").length>0 || c.find('iframe').length>0 || c.find('video').length>0))						
			n.videos = true;
		

		// VIDEO EXTENSION
		if (o.sliderType =="carousel")
			n.carousel = true;

		

		if (o.parallax.type!=="off" || o.viewPort.enable || o.viewPort.enable=="true")
			n.parallax = true;
	}
	
	if (o.sliderType=="hero") {
		n.carousel = false;
		n.navigation = false;
	}
	
	if (window.location.href.match(/file:/gi)) {
		n.filesystem = true;
		o.filesystem = true;
	}

	
	// LOAD THE NEEDED LIBRARIES
	//if (n.videos && typeof _R.isVideoPlaying=='undefined') lAjax('revolution.extension.video',o);
	//if (n.carousel && typeof _R.prepareCarousel=='undefined') lAjax('revolution.extension.carousel',o);								
	//if (!n.carousel && typeof _R.animateSlide=='undefined') lAjax('revolution.extension.slideanims',o);								
	//if (n.actions && typeof _R.checkActions=='undefined') lAjax('revolution.extension.actions',o);						
	//if (n.layeranim && typeof _R.handleStaticLayers=='undefined') lAjax('revolution.extension.layeranimation',o);						
	//if (n.kenburns && typeof _R.stopKenBurn=='undefined') lAjax('revolution.extension.kenburn',o); 
	//if (n.navigation && typeof _R.createNavigation=='undefined') lAjax('revolution.extension.navigation',o);					
	//if (n.migration && typeof _R.migration=='undefined') lAjax('revolution.extension.migration',o);					
	//if (n.parallax && typeof _R.checkForParallax=='undefined') lAjax('revolution.extension.parallax',o);					
	
	if (o.addons!=undefined && o.addons.length>0) {		
		jQuery.each(o.addons, function(i,obj) {			
			if (typeof obj === "object" && obj.fileprefix!=undefined) 
				lAjax(obj.fileprefix,o);			
		})
	}
	

	return n;
}

///////////////////////////////////
//   -  WAIT FOR SCRIPT LOADS  - //
///////////////////////////////////	
var waitForScripts = function(c,o) {
	// CHECK KEN BURN DEPENDENCIES
	var addonsloaded = true,
		n = o.scriptsneeded;
	
	// CHECK FOR ADDONS
	if (o.addons!=undefined && o.addons.length>0) {		
		jQuery.each(o.addons, function(i,obj) {			
			if (typeof obj === "object" && obj.init!=undefined) {				
				if (_R[obj.init]===undefined) addonsloaded = false;
			}
		})
	}
	 
	if (n.filesystem || 
		(typeof punchgs !== 'undefined' &&
		(addonsloaded) &&
		(!n.kenburns || (n.kenburns && typeof _R.stopKenBurn !== 'undefined')) &&
		(!n.navigation || (n.navigation && typeof _R.createNavigation !== 'undefined')) &&
		(!n.carousel || (n.carousel && typeof _R.prepareCarousel !== 'undefined')) &&
		(!n.videos || (n.videos && typeof _R.resetVideo !== 'undefined')) &&
		(!n.actions || (n.actions && typeof _R.checkActions !== 'undefined')) &&
		(!n.layeranim || (n.layeranim && typeof _R.handleStaticLayers !== 'undefined')) &&
		(!n.migration || (n.migration && typeof _R.migration !== 'undefined')) &&
		(!n.parallax || (n.parallax && typeof _R.checkForParallax !== 'undefined')) &&
		(n.carousel || (!n.carousel && typeof _R.animateSlide !== 'undefined'))
	   ))
		c.trigger("scriptsloaded");
	else			
		setTimeout(function() {
			waitForScripts(c,o);
		},50);
		
}

//////////////////////////////////
//	-	GET SCRIPT LOCATION	-	//
//////////////////////////////////
var getScriptLocation = function(a) {

	var srcexp = new RegExp("themepunch.revolution.min.js","gi"),
		ret = "";
	jQuery("script").each(function() {
		var src = jQuery(this).attr("src");
		if (src && src.match(srcexp)) 								
			ret = src;							
	});
	
	ret = ret.replace('jquery.themepunch.revolution.min.js', ''); 
	ret = ret.replace('jquery.themepunch.revolution.js', ''); 	
	ret = ret.split("?")[0];		
	return ret;
}

//////////////////////////////////////////
//	-	ADVANCED RESPONSIVE LEVELS	-	//
//////////////////////////////////////////
var setCurWinRange = function(opt,vis) {		
	var curlevel = 0,
		curwidth = 9999,
		lastmaxlevel = 0,
		lastmaxid = 0,
		curid = 0,
		winw = jQuery(window).width(),
		l = vis && opt.responsiveLevels==9999 ? opt.visibilityLevels : opt.responsiveLevels;
	
	 if (l && l.length)
		jQuery.each(l,function(index,level) {				
			if (winw<level) {
				if (lastmaxlevel==0 || lastmaxlevel>level) {					
					curwidth = level;
					curid = index;
					lastmaxlevel = level;
				}
			}
		
		if (winw>level && lastmaxlevel<level) {
			lastmaxlevel = level;
			lastmaxid = index;
		}
	});

	if (lastmaxlevel<curwidth) 
		curid = lastmaxid;		

	
	if (!vis)
		opt.curWinRange = curid;				
	else
		opt.forcedWinRange = curid;

	
}




//////////////////////////////////////////
//	-	INITIALISATION OF OPTIONS 	-	//
//////////////////////////////////////////
var prepareOptions = function(container,opt) {		
	opt.carousel.maxVisibleItems = opt.carousel.maxVisibleItems < 1 ? 999 : opt.carousel.maxVisibleItems; // === 1 ? 2 : opt.carousel.maxVisibleItems;
	opt.carousel.vertical_align = opt.carousel.vertical_align === "top" ? "0%" : opt.carousel.vertical_align==="bottom" ? "100%" : "50%";
}

var gWiderOut = function(c,cl) {
	var r = 0;
	c.find(cl).each(function() {
		var a = jQuery(this);
		if (!a.hasClass("tp-forcenotvisible") && r<a.outerWidth())
			r = a.outerWidth();			
	});
	return r;
}




//////////////////////////////////////////
//	-	INITIALISATION OF SLIDER	-	//
//////////////////////////////////////////
var initSlider = function (container,opt) {
	if (container==undefined) return false;

	// CHECK FOR ALTERNATIVE IMAGE, AND IFRAM EXIST, AND WE ARE IN IE8, MOBILE, DRAW IT SIMPLE
	if (container.data('aimg')!=undefined) 
		if ((container.data('aie8')=="enabled" && _R.isIE(8)) || (container.data('amobile')=="enabled" && _ISM))
			container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">');
	
	// PREPRARE SOME CLASSES AND VARIABLES
	container.find('>ul').addClass("tp-revslider-mainul");

	
	// CREATE SOME DEFAULT OPTIONS FOR LATER			
	opt.c=container;
	opt.ul = container.find('.tp-revslider-mainul');

	 // Remove Not Needed Slides for Mobile Devices
    opt.ul.find('>li').each(function(i) {
    	var li = jQuery(this);    	
    	if (li.data('hideslideonmobile')=="on" && _ISM) li.remove();
    	if (li.data('invisible') || li.data('invisible')===true) {
    		li.addClass("tp-invisible-slide");
    		li.appendTo(opt.ul);
    	}
   	});


   	if (opt.addons!=undefined && opt.addons.length>0) {		
		jQuery.each(opt.addons, function(i,obj) {			
			if (typeof obj === "object" && obj.init!=undefined) {				
				_R[obj.init](eval(obj.params));
			}
		})
	}

	

	opt.cid = container.attr('id');
	opt.ul.css({visibility:"visible"});
    opt.slideamount = opt.ul.find('>li').not('.tp-invisible-slide').length;
    opt.slayers = container.find('.tp-static-layers');

    if (opt.waitForInit == true) 
    	return;
    else {
    	container.data('opt',opt);
    	runSlider(container,opt);
    }

 }

 var onFullScreenChange = function() {
			 jQuery("body").data('rs-fullScreenMode',!jQuery("body").data('rs-fullScreenMode'));
		     if (jQuery("body").data('rs-fullScreenMode')) {
			     setTimeout(function() {
			     	jQuery(window).trigger("resize");
			     },200);
		     }
		}

 var runSlider = function(container,opt) {


 	opt.sliderisrunning = true;
    // Save Original Index of Slides
    opt.ul.find('>li').each(function(i) {
    	jQuery(this).data('originalindex',i);
    });
	
	


	// RANDOMIZE THE SLIDER SHUFFLE MODE
	if (opt.shuffle=="on") {		
		var fsa = new Object,
			fli = opt.ul.find('>li:first-child');
		fsa.fstransition = fli.data('fstransition');
		fsa.fsmasterspeed = fli.data('fsmasterspeed');
		fsa.fsslotamount = fli.data('fsslotamount');

		for (var u=0;u<opt.slideamount;u++) {
			var it = Math.round(Math.random()*opt.slideamount);			
			opt.ul.find('>li:eq('+it+')').prependTo(opt.ul);			
		}

		var newfli = opt.ul.find('>li:first-child');
		newfli.data('fstransition',fsa.fstransition);
		newfli.data('fsmasterspeed',fsa.fsmasterspeed);
		newfli.data('fsslotamount',fsa.fsslotamount);

		 // COLLECT ALL LI INTO AN ARRAY
		opt.li = opt.ul.find('>li').not('.tp-invisible-slide');
	}

	opt.allli = opt.ul.find('>li');
	opt.li = opt.ul.find('>li').not('.tp-invisible-slide');
	opt.inli = opt.ul.find('>li.tp-invisible-slide');


	opt.thumbs = new Array();		
	
	opt.slots=4;
	opt.act=-1;					
	opt.firststart=1;
	opt.loadqueue = new Array();
	opt.syncload = 0;
	opt.conw = container.width();
	opt.conh = container.height();

	if (opt.responsiveLevels.length>1) 
		opt.responsiveLevels[0] = 9999;
	else
		opt.responsiveLevels = 9999;
	
	// RECORD THUMBS AND SET INDEXES
	jQuery.each(opt.allli,function(index,li) {
		var li = jQuery(li),
			img = li.find('.rev-slidebg') || li.find('img').first(),
			i = 0;		
		
	
		li.addClass("tp-revslider-slidesli");
		if (li.data('index')===undefined) li.data('index','rs-'+Math.round(Math.random()*999999));

		var obj = new Object;
		obj.params = new Array();
		
		obj.id = li.data('index');
		obj.src = li.data('thumb')!==undefined ? li.data('thumb') : img.data('lazyload') !== undefined ? img.data('lazyload') : img.attr('src');					
		if (li.data('title') !== undefined) obj.params.push({from:RegExp("\\{\\{title\\}\\}","g"), to:li.data("title")})		
		if (li.data('description') !== undefined) obj.params.push({from:RegExp("\\{\\{description\\}\\}","g"), to:li.data("description")})		
		for (var i=1;i<=10;i++) {
			if (li.data("param"+i)!==undefined) 
				obj.params.push({from:RegExp("\\{\\{param"+i+"\\}\\}","g"), to:li.data("param"+i)})
		}			
		opt.thumbs.push(obj);	

		li.data('origindex',li.index());
		
		// IF LINK ON SLIDE EXISTS, NEED TO CREATE A PROPER LAYER FOR IT.
		if (li.data('link')!=undefined) {
			var link = li.data('link'),
				target= li.data('target') || "_self",
				zindex= li.data('slideindex')==="back" ? 0 : 60,					
				linktoslide=li.data('linktoslide'),
				checksl = linktoslide;	
			
			if (linktoslide != undefined) 
				if (linktoslide!="next" && linktoslide!="prev")
					opt.allli.each(function() {
						var t = jQuery(this);
						if (t.data('origindex')+1==checksl) linktoslide = t.data('index');
					});
			
			
			if (link!="slide") linktoslide="no";
			
			var apptxt = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:'+zindex+';" data-x="center" data-y="center" data-basealign="slide" ',
				jts = linktoslide==="scroll_under" ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : 
					 linktoslide==="prev" ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : 
					 linktoslide==="next" ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"'+linktoslide+'","delay":"0.2"}]'
			
			apptxt = linktoslide=="no" ? apptxt +' data-start="0">' : apptxt + 'data-actions='+"'"+jts + "'"+' data-start="0">';
			apptxt = apptxt + '<a style="width:100%;height:100%;display:block"';					
			apptxt = link!="slide" ? apptxt + ' target="'+target+'" href="'+link+'"' : apptxt;
			apptxt = apptxt + '><span style="width:100%;height:100%;display:block"></span></a></div>';
			li.append(apptxt);
		}			
	});

	
	// CREATE GRID WIDTH AND HEIGHT ARRAYS		
	opt.rle = opt.responsiveLevels.length || 1;
	opt.gridwidth = cArray(opt.gridwidth,opt.rle);
	opt.gridheight = cArray(opt.gridheight,opt.rle);																														
	// END OF VERSION 5.0 INIT MODIFICATION



	// SIMPLIFY ANIMATIONS ON OLD IOS AND IE8 IF NEEDED
	if (opt.simplifyAll=="on" && (_R.isIE(8) || _R.iOSVersion())) {
		container.find('.tp-caption').each(function() {
			var tc = jQuery(this);
			tc.removeClass("customin customout").addClass("fadein fadeout");
			tc.data('splitin',"");
			tc.data('speed',400);
		})
		opt.allli.each(function() {
			var li= jQuery(this);				
			li.data('transition',"fade");
			li.data('masterspeed',500);
			li.data('slotamount',1);
			var img = li.find('.rev-slidebg') || li.find('>img').first();
			img.data('kenburns',"off");
		});
	}

	opt.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);

	// SOME OPTIONS WHICH SHOULD CLOSE OUT SOME OTHER SETTINGS		
	opt.autoHeight = opt.sliderLayout=="fullscreen" ? "on" : opt.autoHeight;		

	if (opt.sliderLayout=="fullwidth" && opt.autoHeight=="off") container.css({maxHeight:opt.gridheight[opt.curWinRange]+"px"});
	
	// BUILD A FORCE FULLWIDTH CONTAINER, TO SPAN THE FULL SLIDER TO THE FULL WIDTH OF BROWSER
	if (opt.sliderLayout!="auto" && container.closest('.forcefullwidth_wrapper_tp_banner').length==0) {
		if (opt.sliderLayout!=="fullscreen" || opt.fullScreenAutoWidth!="on") {			
			var cp = container.parent(),				
				mb = cp.css('marginBottom'),
				mt = cp.css('marginTop'),
				cid = container.attr('id')+"_forcefullwidth";
			mb = mb===undefined ? 0 : mb;
			mt = mt===undefined ? 0 : mt;

			cp.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="'+cid+'" style="position:relative;width:100%;height:auto;margin-top:'+mt+';margin-bottom:'+mb+'"></div>');
			container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+container.height()+'px"></div>');
			container.parent().css({marginTop:"0px",marginBottom:"0px"});
			//container.css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
			container.parent().css({position:'absolute'});						
		}
	}



	// SHADOW ADD ONS
	if (opt.shadow!==undefined && opt.shadow>0) {
		container.parent().addClass('tp-shadow'+opt.shadow);			
		container.parent().append('<div class="tp-shadowcover"></div>');
		container.parent().find('.tp-shadowcover').css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
	}

	// ESTIMATE THE CURRENT WINDOWS RANGE INDEX
	setCurWinRange(opt);
	setCurWinRange(opt,true);
	
	// IF THE CONTAINER IS NOT YET INITIALISED, LETS GO FOR IT
	if (!container.hasClass("revslider-initialised")) {
		// MARK THAT THE CONTAINER IS INITIALISED WITH SLIDER REVOLUTION ALREADY
		container.addClass("revslider-initialised");

		// FOR BETTER SELECTION, ADD SOME BASIC CLASS
		container.addClass("tp-simpleresponsive");

		// WE DONT HAVE ANY ID YET ? WE NEED ONE ! LETS GIVE ONE RANDOMLY FOR RUNTIME
		if (container.attr('id')==undefined) container.attr('id',"revslider-"+Math.round(Math.random()*1000+5));

		// CHECK IF FIREFOX 13 IS ON WAY.. IT HAS A STRANGE BUG, CSS ANIMATE SHOULD NOT BE USED
		opt.firefox13 = false;
		opt.ie = !jQuery.support.opacity;
		opt.ie9 = (document.documentMode == 9);

		opt.origcd=opt.delay;



		// CHECK THE jQUERY VERSION
		var version = jQuery.fn.jquery.split('.'),
			versionTop = parseFloat(version[0]),
			versionMinor = parseFloat(version[1]),
			versionIncrement = parseFloat(version[2] || '0');
		if (versionTop==1 && versionMinor < 7) 
			container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+version+' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>');									
		if (versionTop>1) opt.ie=false;
		 		
					

		// PREPARE VIDEO PLAYERS
		var addedApis = new Object();				
		addedApis.addedyt=0;
		addedApis.addedvim=0;
		addedApis.addedvid=0;
		
		container.find('.tp-caption, .rs-background-video-layer').each(function(i) {
			var _nc = jQuery(this),
				an = _nc.data('autoplayonlyfirsttime'),
				ap = _nc.data('autoplay'),
				al = _nc.hasClass("tp-audiolayer"),
				loop = _nc.data('videoloop');


			if (_nc.hasClass("tp-static-layer") && _R.handleStaticLayers)
				_R.handleStaticLayers(_nc,opt);

			var pom = _nc.data('noposteronmobile') || _nc.data('noPosterOnMobile') ||  _nc.data('posteronmobile') || _nc.data('posterOnMobile') || _nc.data('posterOnMObile');
			_nc.data('noposteronmobile',pom);

			// FIX VISIBLE IFRAME BUG IN SAFARI
			var iff = 0;
			_nc.find('iframe').each(function() {
				punchgs.TweenLite.set(jQuery(this),{autoAlpha:0});
				iff++;
			})
			if (iff>0)
				_nc.data('iframes',true)

			if (_nc.hasClass("tp-caption")) {
				// PREPARE LAYERS AND WRAP THEM WITH PARALLAX, LOOP, MASK HELP CONTAINERS
				var ec = _nc.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
				_nc.wrap('<div class="tp-parallax-wrap" style="'+ec+'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="'+ec+'position:absolute;"><div class="tp-mask-wrap" style="'+ec+'position:absolute" ></div></div></div>');				
				var lar = ['pendulum', 'rotate','slideloop','pulse','wave'],
					_lc = _nc.closest('.tp-loop-wrap');
				
				jQuery.each(lar,function(i,k) {	
					var lw = _nc.find('.rs-'+k),
						f = lw.data() || "";
					if (f!="") {			
						_lc.data(f);
						_lc.addClass("rs-"+k);									
						lw.children(0).unwrap();
						_nc.data('loopanimation',"on");
					}
				});	
				punchgs.TweenLite.set(_nc,{visibility:"hidden"});
			}

			var as = _nc.data('actions');
			if (as!==undefined) _R.checkActions(_nc,opt,as);

			checkHoverDependencies(_nc,opt);

			if (_R.checkVideoApis)
				addedApis = _R.checkVideoApis(_nc,opt,addedApis);

			// REMOVE VIDEO AUTOPLAYS FOR MOBILE DEVICES 
			if (_ISM) {
				if (an == true || an=="true") {
						_nc.data('autoplayonlyfirsttime',"false");
						an=false;
				}
				if (ap==true || ap=="true" || ap=="on" || ap=="1sttime") {
					 _nc.data('autoplay',"off");
					 ap="off";
				}
			}

			//loop =  loop=="none" && _nc.hasClass('rs-background-video-layer') ?  "loopandnoslidestop" : loop;

			_nc.data('videoloop',loop);
			

			// PREPARE TIMER BEHAVIOUR BASED ON AUTO PLAYED VIDEOS IN SLIDES
			if (!al && (an == true || an=="true" || ap == "1sttime") && loop !="loopandnoslidestop") 
				_nc.closest('li.tp-revslider-slidesli').addClass("rs-pause-timer-once");
				
			
			if (!al && (ap==true || ap=="true" || ap == "on" || ap == "no1sttime") && loop !="loopandnoslidestop")  
				_nc.closest('li.tp-revslider-slidesli').addClass("rs-pause-timer-always");
				
			
				
				
		});
		
		container[0].addEventListener('mouseenter',function() {				
			container.trigger('tp-mouseenter');										
			opt.overcontainer=true;
		},{passive:true});

		container[0].addEventListener('mouseover',function() {												
			container.trigger('tp-mouseover');
			opt.overcontainer=true;
		},{passive:true});

		container[0].addEventListener('mouseleave',function() {				
			container.trigger('tp-mouseleft');												
			opt.overcontainer=false;
		},{passive:true});

		// REMOVE ANY VIDEO JS SETTINGS OF THE VIDEO  IF NEEDED  (OLD FALL BACK, AND HELP FOR 3THD PARTY PLUGIN CONFLICTS)
		container.find('.tp-caption video').each(function(i) {
			var v = jQuery(this);
			v.removeClass("video-js vjs-default-skin");
			v.attr("preload","");
			v.css({display:"none"});
		});

		//PREPARE LOADINGS ALL IN SEQUENCE
		if (opt.sliderType!=="standard") opt.lazyType = "all";
		
		
		// PRELOAD STATIC LAYERS			
		loadImages(container.find('.tp-static-layers'),opt,0,true);

		waitForCurrentImages(container.find('.tp-static-layers'),opt,function() {
			container.find('.tp-static-layers img').each(function() {								
				var e = jQuery(this),
					src = e.data('lazyload') != undefined ? e.data('lazyload') : e.attr('src'),
					loadobj = getLoadObj(opt,src);								
				e.attr('src',loadobj.src)				
			})
		})



		// SET ALL LI AN INDEX AND INIT LAZY LOADING
		opt.allli.each(function(i) {
			var li = jQuery(this);
			
			if (opt.lazyType=="all" || (opt.lazyType=="smart" && (i==0 || i == 1 || i == opt.slideamount || i == opt.slideamount-1))) { 								
				loadImages(li,opt,i);	
				waitForCurrentImages(li,opt,function() { 
					if (opt.sliderType=="carousel") 
						punchgs.TweenLite.to(li,1,{autoAlpha:1,ease:punchgs.Power3.easeInOut});
				});					
			}

		});

		

		// IF DEEPLINK HAS BEEN SET
		var deeplink = getUrlVars("#")[0];
		if (deeplink.length<9) {
			if (deeplink.split('slide').length>1) {
				var dslide=parseInt(deeplink.split('slide')[1],0);
				if (dslide<1) dslide=1;
				if (dslide>opt.slideamount) dslide=opt.slideamount;
				opt.startWithSlide=dslide-1;
			}
		}
		
		// PREPARE THE SPINNER
		container.append(	'<div class="tp-loader '+opt.spinner+'">'+
					  		'<div class="dot1"></div>'+
					  	    '<div class="dot2"></div>'+
					  	    '<div class="bounce1"></div>'+
							'<div class="bounce2"></div>'+
							'<div class="bounce3"></div>'+
						 '</div>');
		

		// RESET THE TIMER
		if (container.find('.tp-bannertimer').length===0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
		container.find('.tp-bannertimer').css({'width':'0%'});
		container.find('.tp-bannertimer').data('opt',opt);

		
		// PREPARE THE SLIDES
		opt.ul.css({'display':'block'});
		prepareSlides(container,opt);
		if (opt.parallax.type!=="off" && _R.checkForParallax) _R.checkForParallax(container,opt);

		
		// PREPARE SLIDER SIZE			
		_R.setSize(opt);
		

		// Call the Navigation Builder
		if (opt.sliderType!=="hero" && _R.createNavigation) _R.createNavigation(container,opt);
		if (_R.resizeThumbsTabs && _R.resizeThumbsTabs) _R.resizeThumbsTabs(opt);
		contWidthManager(opt);
		var _v = opt.viewPort;
		opt.inviewport = false;
		
		if (_v !=undefined && _v.enable) {
			if (!jQuery.isNumeric(_v.visible_area))
			 if (_v.visible_area.indexOf('%')!==-1) 
				_v.visible_area = parseInt(_v.visible_area)/100;
				
			if (_R.scrollTicker) _R.scrollTicker(opt,container);
		}
		


		// START THE SLIDER
		setTimeout(function() {
			if ( opt.sliderType =="carousel" && _R.prepareCarousel) _R.prepareCarousel(opt);	
			
			if (!_v.enable || (_v.enable && opt.inviewport) || (_v.enable &&  !opt.inviewport && !_v.outof=="wait")) {
				swapSlide(container,opt);	
			}
			else
				opt.waitForFirstSlide = true;

			if (_R.manageNavigation) _R.manageNavigation(opt);	


			// START COUNTDOWN
			if (opt.slideamount>1) {
				if (!_v.enable || (_v.enable && opt.inviewport)) 
					countDown(container,opt);
				else
					opt.waitForCountDown = true;
			}
			setTimeout(function() {					
				container.trigger('revolution.slide.onloaded');					
			},100);
		},opt.startDelay);
		opt.startDelay=0;

		

		/******************************
			-	FULLSCREEN CHANGE	-
		********************************/
		// FULLSCREEN MODE TESTING
		jQuery("body").data('rs-fullScreenMode',false);

		
		window.addEventListener('fullscreenchange',onFullScreenChange,{passive:true});
		window.addEventListener('mozfullscreenchange',onFullScreenChange,{passive:true});
		window.addEventListener('webkitfullscreenchange',onFullScreenChange,{passive:true});

		

		var resizid = "resize.revslider-"+container.attr('id');

		// IF RESIZED, NEED TO STOP ACTUAL TRANSITION AND RESIZE ACTUAL IMAGES
		jQuery(window).on(resizid,function() {
			console.log("happening")
			if (container==undefined) return false;
			
			if (jQuery('body').find(container)!=0) 				
				contWidthManager(opt);							
				
				var hchange = false;

				if (opt.sliderLayout=="fullscreen") {
					var jwh = jQuery(window).height();
					if ((opt.fallbacks.ignoreHeightChanges=="mobile" && _ISM) || opt.fallbacks.ignoreHeightChanges=="always") {
						opt.fallbacks.ignoreHeightChangesSize = opt.fallbacks.ignoreHeightChangesSize == undefined ? 0 : opt.fallbacks.ignoreHeightChangesSize;
						hchange = (jwh!=opt.lastwindowheight) && (Math.abs(jwh-opt.lastwindowheight) > opt.fallbacks.ignoreHeightChangesSize)							
					} else {
						hchange = (jwh!=opt.lastwindowheight) 
					}
				}
				
	
				if (container.outerWidth(true)!=opt.width || container.is(":hidden") || (hchange)) {
						opt.lastwindowheight = jQuery(window).height();
						containerResized(container,opt);
				}


		});
		
		hideSliderUnder(container,opt);	
		contWidthManager(opt);		
		if (!opt.fallbacks.disableFocusListener && opt.fallbacks.disableFocusListener != "true" && opt.fallbacks.disableFocusListener !== true) tabBlurringCheck(container,opt);
	}
}

/*************************************
	-	 CREATE SIMPLE ARRAYS	-
**************************************/
var cArray = function(b,l) {		
	if (!jQuery.isArray(b)) {
		var t = b;
		b = new Array();
		b.push(t);
	}		
	if (b.length<l) {			
		var t = b[b.length-1];
		for (var i=0;i<(l-b.length)+2;i++)
			b.push(t)
	}		
	return b;
}



var checkHoverDependencies = function(_nc,opt) {
	
	if (_nc.data('start')==="sliderenter") {		
		if (opt.layersonhover===undefined) {					
			opt.c.on('tp-mouseenter',function() {								
				if (opt.layersonhover)					
					jQuery.each(opt.layersonhover,function(i,tnc) {											
						tnc.data('animdirection',"in");
						var otl = tnc.data('timeline_out'),
							base_offsetx = opt.sliderType==="carousel" ? 0 : opt.width/2 - (opt.gridwidth[opt.curWinRange]*opt.bw)/2,
							base_offsety=0,
							cli = tnc.closest('.tp-revslider-slidesli'),
							stl = tnc.closest('.tp-static-layers');

						if ((cli.length>0 && (cli.hasClass("active-revslide")) || cli.hasClass("processing-revslide")) || (stl.length>0)) {

							if (otl!=undefined) {										
								otl.pause(0);
								otl.kill();													
							}							
							_R.animateSingleCaption(tnc,opt,base_offsetx,base_offsety,0,false,true);	
							var tl = tnc.data('timeline');
							tnc.data('triggerstate',"on");																															
							tl.play(0);										
						}
					});
			});
			opt.c.on('tp-mouseleft',function() {
				if (opt.layersonhover)
					jQuery.each(opt.layersonhover,function(i,tnc) {
						tnc.data('animdirection',"out");
						tnc.data('triggered',true);
						tnc.data('triggerstate',"off");
						if (_R.stopVideo) _R.stopVideo(tnc,opt);												
						if (_R.endMoveCaption) _R.endMoveCaption(tnc,null,null,opt);	
					});
			});			
			opt.layersonhover = new Array;
		} 				
		opt.layersonhover.push(_nc);
	}
}



var contWidthManager = function(opt) {	

	var rl = _R.getHorizontalOffset(opt.c,"left");

	if (opt.sliderLayout!="auto" && (opt.sliderLayout!=="fullscreen" || opt.fullScreenAutoWidth!="on")) {		
		var loff = Math.ceil(opt.c.closest('.forcefullwidth_wrapper_tp_banner').offset().left - rl);																
		punchgs.TweenLite.set(opt.c.parent(),{'left':(0-loff)+"px",'width':jQuery(window).width()-_R.getHorizontalOffset(opt.c,"both")});		
	} else {		
		if (opt.sliderLayout=="fullscreen" && opt.fullScreenAutoWidth=="on")
			punchgs.TweenLite.set(opt.ul,{left:0,width:opt.c.width()});		
		else
			punchgs.TweenLite.set(opt.ul,{left:rl,width:opt.c.width()-_R.getHorizontalOffset(opt.c,"both")});		
	}	


	// put Static Layer Wrapper in Position	
	if (opt.slayers && (opt.sliderLayout!="fullwidth" && opt.sliderLayout!="fullscreen"))
		punchgs.TweenLite.set(opt.slayers,{left:rl});
}


var cv = function(a,d) {
  	return a===undefined ? d : a;
}


var hideSliderUnder = function(container,opt,resized) {
	// FIRST TIME STOP/START HIDE / SHOW SLIDER
	//REMOVE AND SHOW SLIDER ON DEMAND
	var contpar= container.parent();
	if (jQuery(window).width()<opt.hideSliderAtLimit) {
		container.trigger('stoptimer');
		if (contpar.css('display')!="none")
			contpar.data('olddisplay',contpar.css('display'));
		contpar.css({display:"none"});
	} else {
		if (container.is(":hidden") && resized) {
			if (contpar.data('olddisplay')!=undefined && contpar.data('olddisplay')!="undefined" && contpar.data('olddisplay') != "none")
				contpar.css({display:contpar.data('olddisplay')});
			else
				contpar.css({display:"block"});
			container.trigger('restarttimer');
			setTimeout(function() {
				containerResized(container,opt);
			},150)
		}
	}
	if (_R.hideUnHideNav) _R.hideUnHideNav(opt);	
}


//////////////////////////
//	CONTAINER RESIZED	//
/////////////////////////
var containerResized = function (c,opt) {								
	if (opt.infullscreenmode == true)
		opt.minHeight = jQuery(window).height();							
	
	
	setCurWinRange(opt);
	setCurWinRange(opt,true);
	if (!_R.resizeThumbsTabs || _R.resizeThumbsTabs(opt)===true) {
		
		hideSliderUnder(c,opt,true);
		contWidthManager(opt);
		
		if ( opt.sliderType =="carousel") _R.prepareCarousel(opt,true);		

		if (c===undefined) return false;
								
		_R.setSize(opt);
		
		opt.conw = opt.c.width();
		opt.conh = opt.infullscreenmode ? opt.minHeight : opt.c.height();
		
		
		var actsh = c.find('.active-revslide .slotholder'),
			nextsh = c.find('.processing-revslide .slotholder');
		
		removeSlots(c,opt,c,2);

		if (opt.sliderType==="standard") {
			punchgs.TweenLite.set(nextsh.find('.defaultimg'),{opacity:0});		
			actsh.find('.defaultimg').css({'opacity':1});
		} 

		
		if ( opt.sliderType =="carousel" && opt.lastconw != opt.conw)  {
			clearTimeout(opt.pcartimer);
			opt.pcartimer = setTimeout(function() {
				_R.prepareCarousel(opt,true);		
			},100);
			opt.lastconw = opt.conw;
		}

		if (_R.manageNavigation) _R.manageNavigation(opt);


		if (_R.animateTheCaptions) _R.animateTheCaptions(c.find('.active-revslide'), opt,true);
		
		if (nextsh.data('kenburns')=="on") 				
			_R.startKenBurn(nextsh,opt,nextsh.data('kbtl').progress());

		if (actsh.data('kenburns')=="on") 				
			_R.startKenBurn(actsh,opt,actsh.data('kbtl').progress());

		// DOUBLE CALL FOR SOME FUNCTION TO AVOID PORTRAIT/LANDSCAPE ISSUES, AND TO AVOID FULLSCREEN/NORMAL SWAP ISSUES
		if (_R.animateTheCaptions) _R.animateTheCaptions(nextsh.closest('li'), opt,true);
		if (_R.manageNavigation) _R.manageNavigation(opt);
		
	}	
	
}

	
	
	
	

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////       PREPARING / REMOVING		////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
var setScale = function(opt) {
	opt.bw = (opt.width / opt.gridwidth[opt.curWinRange]);
	opt.bh = (opt.height / opt.gridheight[opt.curWinRange]);
	
	
	if (opt.bh>opt.bw) 
		opt.bh=opt.bw
	else
		opt.bw = opt.bh;
	
	if (opt.bh>1 || opt.bw>1) { opt.bw=1; opt.bh=1; }
}

	



/////////////////////////////////////////
//	-	PREPARE THE SLIDES / SLOTS -  //
///////////////////////////////////////
var prepareSlides = function(container,opt) {

	container.find('.tp-caption').each(function() { 
		var c = jQuery(this);
		if (c.data('transition')!==undefined) c.addClass(c.data('transition')); 
	});

	// PREPARE THE UL CONTAINER TO HAVEING MAX HEIGHT AND HEIGHT FOR ANY SITUATION
	opt.ul.css({overflow:'hidden',width:'100%',height:'100%',maxHeight:container.parent().css('maxHeight')})
	if (opt.autoHeight=="on") {
	   opt.ul.css({overflow:'hidden',width:'100%',height:'100%',maxHeight:"none"});
	   container.css({'maxHeight':'none'});
	   container.parent().css({'maxHeight':'none'});
	 }
	//_R.setSize("",opt);
	opt.allli.each(function(j) {
		var li=jQuery(this),
			originalIndex = li.data('originalindex');
					
		//START WITH CORRECT SLIDE
		if ((opt.startWithSlide !=undefined && originalIndex==opt.startWithSlide) || opt.startWithSlide ===undefined && j==0)
			li.addClass("next-revslide");
		

		// MAKE LI OVERFLOW HIDDEN FOR FURTHER ISSUES
		li.css({'width':'100%','height':'100%','overflow':'hidden'});
					
	});

	if (opt.sliderType === "carousel") {
		//SET CAROUSEL				
		opt.ul.css({overflow:"visible"}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
		var apt = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
		opt.c.parent().prepend(apt);
		opt.c.parent().append(apt);
		_R.prepareCarousel(opt);				
	}

	// RESOLVE OVERFLOW HIDDEN OF MAIN CONTAINER
	container.parent().css({'overflow':'visible'});
    
	opt.allli.find('>img').each(function(j) {

		var img=jQuery(this),
			bgvid = img.closest('li').find('.rs-background-video-layer');

		bgvid.addClass("defaultvid").css({zIndex:30});

		img.addClass('defaultimg');				
						
		// TURN OF KEN BURNS IF WE ARE ON MOBILE AND IT IS WISHED SO
		if (opt.fallbacks.panZoomDisableOnMobile == "on"  && _ISM) {
			img.data('kenburns',"off");
			img.data('bgfit',"cover");
		}

		img.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>');
		bgvid.appendTo(img.closest('li').find('.slotholder'));
		var dts = img.data();
		img.closest('.slotholder').data(dts);
									
		if (bgvid.length>0 && dts.bgparallax!=undefined)
			bgvid.data('bgparallax',dts.bgparallax);

		if (opt.dottedOverlay!="none" && opt.dottedOverlay!=undefined)
				img.closest('.slotholder').append('<div class="tp-dottedoverlay '+opt.dottedOverlay+'"></div>');

		var src=img.attr('src');		
		dts.src = src;		
		dts.bgfit = dts.bgfit || "cover";
		dts.bgrepeat = dts.bgrepeat || "no-repeat",
		dts.bgposition = dts.bgposition || "center center";

		var pari = img.closest('.slotholder');
		img.parent().append('<div class="tp-bgimg defaultimg" style="background-color:'+img.css("backgroundColor")+';background-repeat:'+dts.bgrepeat+';background-image:url('+src+');background-size:'+dts.bgfit+';background-position:'+dts.bgposition+';width:100%;height:100%;"></div>');
		var comment = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + img.get(0).outerHTML);
		img.replaceWith(comment);
		img = pari.find('.tp-bgimg');			
		img.data(dts);
		img.attr("src",src);

		if (opt.sliderType === "standard" || opt.sliderType==="undefined") 				
			img.css({'opacity':0});
	
	})

	
}


//	REMOVE SLOTS	//
var removeSlots = function(container,opt,where,addon) {
	opt.removePrepare = opt.removePrepare + addon;
	where.find('.slot, .slot-circle-wrapper').each(function() {
		jQuery(this).remove();
	});	
	opt.transition = 0;	
	opt.removePrepare = 0;	
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////       SLIDE SWAPS			////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


// THE IMAGE IS LOADED, WIDTH, HEIGHT CAN BE SAVED
var cutParams = function(a) {
	var b = a;
	if (a!=undefined && a.length>0)
		b = a.split("?")[0];
	return b;
}

var relativeRedir = function(redir){
  return location.pathname.replace(/(.*)\/[^/]*/, "$1/"+redir);
}

var abstorel = function (base, relative) {
    var stack = base.split("/"),
        parts = relative.split("/");
    stack.pop(); // remove current file name (or empty string)
                 // (omit if "base" is the current folder without trailing slash)
    for (var i=0; i<parts.length; i++) {
        if (parts[i] == ".")
            continue;
        if (parts[i] == "..")
            stack.pop();
        else
            stack.push(parts[i]);
    }
    return stack.join("/");
}

var imgLoaded = function(img,opt,progress) {
	opt.syncload--;	
	if (opt.loadqueue)
		jQuery.each(opt.loadqueue, function(index,queue) {		

			var mqsrc = queue.src.replace(/\.\.\/\.\.\//gi,""),
				fullsrc = self.location.href,
				origin = document.location.origin,
				fullsrc_b = fullsrc.substring(0,fullsrc.length-1)+"/"+mqsrc,
				origin_b = origin+"/"+mqsrc,
				absolute = abstorel(self.location.href,queue.src);
						
			fullsrc = fullsrc.substring(0,fullsrc.length-1)+mqsrc;						
			origin = origin+mqsrc;
						
			if (cutParams(origin) === cutParams(decodeURIComponent(img.src)) || 
				cutParams(fullsrc)=== cutParams(decodeURIComponent(img.src)) || 
				cutParams(absolute)=== cutParams(decodeURIComponent(img.src)) || 
				cutParams(origin_b) === cutParams(decodeURIComponent(img.src)) || 
				cutParams(fullsrc_b)=== cutParams(decodeURIComponent(img.src)) || 
				cutParams(queue.src) === cutParams(decodeURIComponent(img.src)) || 
				cutParams(queue.src).replace(/^.*\/\/[^\/]+/, '') === cutParams(decodeURIComponent(img.src)).replace(/^.*\/\/[^\/]+/, '') || 
				(window.location.origin==="file://" && cutParams(img.src).match(new RegExp(mqsrc)))) {																	
					queue.progress = progress;
					queue.width = img.width;
					queue.height = img.height;
			} 
		});		
	progressImageLoad(opt);
}

// PRELOAD IMAGES 3 PIECES ON ONE GO, CHECK LOAD PRIORITY
var progressImageLoad = function(opt) {		
	if (opt.syncload == 3) return;
	if (opt.loadqueue)
		jQuery.each(opt.loadqueue, function(index,queue) {	
			if (queue.progress.match(/prepared/g)) {				
			 	 if (opt.syncload<=3) {			 	 	
					opt.syncload++;	
					if (queue.type=="img") {				
						var img = new Image();
						
						img.onload = function() {											
						 	imgLoaded(this,opt,"loaded");
						 	queue.error = false;				
						};
						img.onerror = function() {
							imgLoaded(this,opt,"failed");					
							queue.error = true;
						};		
						
						img.src=queue.src;
					} else {
						jQuery.get(queue.src, function(data) {						  
						  queue.innerHTML = new XMLSerializer().serializeToString(data.documentElement);						  
						  queue.progress="loaded";
						  opt.syncload--;
						  progressImageLoad(opt);
						}).fail(function() {					      
						  queue.progress="failed";
						  opt.syncload--;
						  progressImageLoad(opt);
						});
					}
					queue.progress="inload";
				}
			}				
		});
}



// ADD TO QUEUE THE NOT LOADED IMAGES YES
var addToLoadQueue = function(src,opt,prio,type,staticlayer) {		
	var alreadyexist = false;	
	if (opt.loadqueue)	
		jQuery.each(opt.loadqueue, function(index,queue) {			
			if (queue.src === src) alreadyexist = true;
		});


	if (!alreadyexist) {		
			var loadobj = new Object();			
			loadobj.src = src;
			loadobj.starttoload = jQuery.now();
			loadobj.type = type || "img";
			loadobj.prio = prio;
			loadobj.progress = "prepared";
			loadobj.static = staticlayer;
			opt.loadqueue.push(loadobj);		
	}				

}

// LOAD THE IMAGES OF THE PREDEFINED CONTAINER
var loadImages = function(container,opt,prio,staticlayer) {	
	
	container.find('img,.defaultimg, .tp-svg-layer').each(function() {
		var element = jQuery(this),
			src = element.data('lazyload') !== undefined && element.data('lazyload')!=="undefined" ? element.data('lazyload') : element.data('svg_src') !=undefined ? element.data('svg_src')  : element.attr('src'),
			type = element.data('svg_src') !=undefined ? "svg" : "img";
		
		element.data('start-to-load',jQuery.now());
		addToLoadQueue(src,opt,prio,type,staticlayer);
	});
	progressImageLoad(opt);
}


// FIND SEARCHED IMAGE/SRC IN THE LOAD QUEUE
var getLoadObj = function(opt,src) {	
	var obj = new Object();
	if (opt.loadqueue)
		jQuery.each(opt.loadqueue, function(index,queue) {			
			if (queue.src == src) obj = queue;
		});
	return obj;
}

// WAIT PROGRESS TILL THE PREDEFINED CONTAINER HAS ALL IMAGES LOADED INSIDE
var waitForCurrentImages = function(nextli,opt,callback) {

	var waitforload = false;
	

	// PRELOAD ALL IMAGES
	nextli.find('img,.defaultimg, .tp-svg-layer').each(function() {
		var element = jQuery(this),
			src = element.data('lazyload') != undefined ? element.data('lazyload') : element.data('svg_src') !=undefined ? element.data('svg_src')  : element.attr('src'),
			loadobj = getLoadObj(opt,src);
		

		// IF ELEMENTS IS NOT LOADED YET, AND IT IS NOW LOADED
		if (element.data('loaded')===undefined && loadobj !==undefined && loadobj.progress && loadobj.progress.match(/loaded/g)) {
			
			element.attr('src',loadobj.src);

			
			// IF IT IS A DEFAULT IMG, WE NEED TO ASSIGN SOME SPECIAL VALUES TO IT
			if (loadobj.type=="img") {
				if (element.hasClass("defaultimg")) {		
					if (!_R.isIE(8))
						element.css({backgroundImage:'url("'+loadobj.src+'")'});
					else {
						defimg.attr('src',loadobj.src);
					}			
					nextli.data('owidth',loadobj.width);
					nextli.data('oheight',loadobj.height);
					nextli.find('.slotholder').data('owidth',loadobj.width);
					nextli.find('.slotholder').data('oheight',loadobj.height);
				} else { 
					var w = element.data('ww'),
						h = element.data('hh');
					
					element.data('owidth',loadobj.width);
					element.data('oheight',loadobj.height);

					w = w==undefined || w =="auto" || w=="" ? loadobj.width : w;
					h = h==undefined || h =="auto" || h=="" ? loadobj.height : h;
					
					
					element.data('ww',w);
					element.data('hh',h); 
					
				}
			} else  

			if (loadobj.type=="svg" && loadobj.progress=="loaded") {				

				element.append('<div class="tp-svg-innercontainer"></div>');
				element.find('.tp-svg-innercontainer').append(loadobj.innerHTML);
			}
			// ELEMENT IS NOW FULLY LOADED
			element.data('loaded',true);
		} 		


		if (loadobj && loadobj.progress && loadobj.progress.match(/inprogress|inload|prepared/g)) 
			if (!loadobj.error && jQuery.now()-element.data('start-to-load')<5000) 
					waitforload = true;			
			else {
				loadobj.progress="failed";
				if (!loadobj.reported_img) {
					loadobj.reported_img = true;
					console.warn(src+"  Could not be loaded !");
				}
			}
		
		// WAIT FOR VIDEO API'S					
		if (opt.youtubeapineeded == true && (!window['YT'] || YT.Player==undefined)) {		
			waitforload = true;			
			if (jQuery.now()-opt.youtubestarttime>5000 && opt.youtubewarning!=true) {
				opt.youtubewarning = true;
				var txt = "YouTube Api Could not be loaded !";
				if (location.protocol === 'https:') txt = txt + " Please Check and Renew SSL Certificate !";
				console.error(txt); 
				opt.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+txt+'</strong></div>')				 				
			}
		}

		if (opt.vimeoapineeded == true && !window['Froogaloop']) {
			waitforload = true;
			if (jQuery.now()-opt.vimeostarttime>5000 && opt.vimeowarning!=true) {
				opt.vimeowarning= true;
				var txt = "Vimeo Froogaloop Api Could not be loaded !";
				if (location.protocol === 'https:') txt = txt + " Please Check and Renew SSL Certificate !";
				console.error(txt); 
				opt.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+txt+'</strong></div>')				 
			}
		}	
			
	});

	if (!_ISM && opt.audioqueue && opt.audioqueue.length>0) {		
		jQuery.each(opt.audioqueue,function(i,obj) {
			if (obj.status && obj.status==="prepared")
				if (jQuery.now() - obj.start<obj.waittime)
					waitforload = true;			
		});		
	}
	
	jQuery.each(opt.loadqueue,function(i,o) {				
		if (o.static===true && (o.progress!="loaded" || o.progress==="failed")) {
			if (o.progress=="failed") {
				if (!o.reported) {
					o.reported = true;
					console.warn("Static Image "+o.src+"  Could not be loaded in time. Error Exists:"+o.error);
				}
			}
			else
			if (!o.error && jQuery.now()-o.starttoload<5000) {
				waitforload = true;			
			}
			else {
				if (!o.reported) {
					o.reported = true;
					console.warn("Static Image "+o.src+"  Could not be loaded within 5s! Error Exists:"+o.error);
				}
			}
			
		}
	});
		
	if (waitforload) 
		setTimeout(function() {
				waitForCurrentImages(nextli,opt,callback) ;
			},19);
	else 		
		setTimeout(callback,19);
	
}




//////////////////////////////////////
//	-	CALL TO SWAP THE SLIDES -  //
/////////////////////////////////////
var swapSlide = function(container,opt) {	

	clearTimeout(opt.waitWithSwapSlide);



	if (container.find('.processing-revslide').length>0) {			
		opt.waitWithSwapSlide = setTimeout(function() {
			swapSlide(container,opt);
			
		},150);
		return false;
	}	

	var actli = container.find('.active-revslide'),
		nextli = container.find('.next-revslide'),
		defimg= nextli.find('.defaultimg');
	
	
	if (nextli.index() === actli.index()) {
		nextli.removeClass("next-revslide");
		return false;
	}


	nextli.removeClass("next-revslide").addClass("processing-revslide");
		
	nextli.data('slide_on_focus_amount',(nextli.data('slide_on_focus_amount')+1) || 1);
	// CHECK IF WE ARE ALREADY AT LAST ITEM TO PLAY IN REAL LOOP SESSION
	if (opt.stopLoop=="on" && nextli.index()==opt.lastslidetoshow-1) {
		container.find('.tp-bannertimer').css({'visibility':'hidden'});
		container.trigger('revolution.slide.onstop');
		opt.noloopanymore = 1;
	} 

	// INCREASE LOOP AMOUNTS
	if (nextli.index()===opt.slideamount-1) {
		opt.looptogo=opt.looptogo-1;
		if (opt.looptogo<=0)
				opt.stopLoop="on";
	}	
   
	opt.tonpause = true;
	container.trigger('stoptimer');
	opt.cd=0;
	if (opt.spinner==="off")
		container.find('.tp-loader').css({display:"none"});
	else
		container.find('.tp-loader').css({display:"block"});

	
	loadImages(nextli,opt,1);	
	if (_R.preLoadAudio) _R.preLoadAudio(nextli,opt,1);

	// WAIT FOR SWAP SLIDE PROGRESS
	waitForCurrentImages(nextli,opt,function() {				 


		// MANAGE BG VIDEOS
		nextli.find('.rs-background-video-layer').each(function() {
			var _nc = jQuery(this);				
			if (!_nc.hasClass("HasListener")) {
				_nc.data('bgvideo',1);
				if (_R.manageVideoLayer) _R.manageVideoLayer(_nc,opt);
			}
			if (_nc.find('.rs-fullvideo-cover').length==0)
				_nc.append('<div class="rs-fullvideo-cover"></div>')
		});
		swapSlideProgress(opt,defimg,container)
	});			

}

//////////////////////////////////////
//	-	PROGRESS SWAP THE SLIDES -  //
/////////////////////////////////////
var swapSlideProgress = function(opt,defimg,container) {
	
	var actli = container.find('.active-revslide'),	
		nextli = container.find('.processing-revslide'),		
		actsh = actli.find('.slotholder'),
		nextsh = nextli.find('.slotholder');
	
	
	opt.tonpause=false;
    
    opt.cd=0;    
    
    
    
    
    container.find('.tp-loader').css({display:"none"});	
   // if ( opt.sliderType =="carousel") _R.prepareCarousel(opt);
	_R.setSize(opt);
	_R.slotSize(defimg,opt);
	
   	if (_R.manageNavigation) _R.manageNavigation(opt);
   	var data={};
   	data.nextslide=nextli;
    data.currentslide=actli;
	container.trigger('revolution.slide.onbeforeswap',data);

	opt.transition = 1;
	opt.videoplaying = false;

	// IF DELAY HAS BEEN SET VIA THE SLIDE, WE TAKE THE NEW VALUE, OTHER WAY THE OLD ONE...
	if (nextli.data('delay')!=undefined) {
				opt.cd=0;
				opt.delay=nextli.data('delay');
	} else 
		opt.delay=opt.origcd;

	
	if (nextli.data('ssop')=="true" || nextli.data('ssop')===true)
		opt.ssop = true
	else
		opt.ssop = false;

	

	container.trigger('nulltimer');

	var ai = actli.index(),
		ni = nextli.index();
	opt.sdir = ni<ai ? 1 : 0;
	
	if (opt.sc_indicator=="arrow") {	
		if (ai==0 && ni==opt.slideamount-1) opt.sdir = 1;
		if (ai==opt.slideamount-1 && ni==0) opt.sdir = 0;	
	}

	opt.lsdir = opt.lsdir === undefined ? opt.sdir : opt.lsdir; 
	opt.dirc = opt.lsdir != opt.sdir;
	opt.lsdir = opt.sdir;

	///////////////////////////
	//	REMOVE THE CAPTIONS //
	///////////////////////////


	
	if (actli.index() != nextli.index() && opt.firststart!=1) 	
		if (_R.removeTheCaptions) _R.removeTheCaptions(actli,opt);
    
	
	if (!nextli.hasClass('rs-pause-timer-once') && !nextli.hasClass("rs-pause-timer-always")) 	
    	container.trigger('restarttimer');		
    else
    	opt.videoplaying = true;   
	
    nextli.removeClass("rs-pause-timer-once");
		
	var nexttrans,
		direction=-1,
		mtl;
		
	// SELECT SLIDER TYPE
	if ( opt.sliderType =="carousel") {									
		mtl = new punchgs.TimelineLite();
		_R.prepareCarousel(opt,mtl);		
		letItFree(container,opt,nextsh,actsh,nextli,actli,mtl);
		opt.transition = 0;
		opt.firststart = 0;
	} else {	
		mtl = new punchgs.TimelineLite({onComplete:function() {				
			letItFree(container,opt,nextsh,actsh,nextli,actli,mtl);
		}});	
		mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'),{opacity:0}));
		mtl.pause();

		if (opt.firststart==1) {
			punchgs.TweenLite.set(actli,{autoAlpha:0});			
			opt.firststart=0;
		}

		
		punchgs.TweenLite.set(actli,{zIndex:18});
		punchgs.TweenLite.set(nextli,{autoAlpha:0,zIndex:20});
		
				
		// IF THERE IS AN OTHER FIRST SLIDE START HAS BEED SELECTED
		if (nextli.data('differentissplayed') =='prepared') {
			nextli.data('differentissplayed','done');
			nextli.data('transition',nextli.data('savedtransition'));
			nextli.data('slotamount',nextli.data('savedslotamount'));
			nextli.data('masterspeed',nextli.data('savedmasterspeed'));
		}


		if (nextli.data('fstransition') != undefined && nextli.data('differentissplayed') !="done") {

			nextli.data('savedtransition',nextli.data('transition'));
			nextli.data('savedslotamount',nextli.data('slotamount'));
			nextli.data('savedmasterspeed',nextli.data('masterspeed'));
			nextli.data('transition',nextli.data('fstransition'));
			nextli.data('slotamount',nextli.data('fsslotamount'));
			nextli.data('masterspeed',nextli.data('fsmasterspeed'));
			nextli.data('differentissplayed','prepared');
		}

		if (nextli.data('transition')==undefined) nextli.data('transition',"random");
		
		nexttrans = 0;		
		var transtext = nextli.data('transition') !== undefined ? nextli.data('transition').split(",") : "fade",
			curtransid = nextli.data('nexttransid') == undefined ? -1 : nextli.data('nexttransid');		
		if (nextli.data('randomtransition')=="on")
			curtransid = Math.round(Math.random()*transtext.length);
		else
			curtransid=curtransid+1;

		if (curtransid==transtext.length) curtransid=0;
		nextli.data('nexttransid',curtransid);

		var comingtransition = transtext[curtransid];

		if (opt.ie) {
			if (comingtransition=="boxfade") comingtransition = "boxslide";
			if (comingtransition=="slotfade-vertical") comingtransition = "slotzoom-vertical";
			if (comingtransition=="slotfade-horizontal") comingtransition = "slotzoom-horizontal";
		}

		if (_R.isIE(8)) 
			comingtransition = 11;	
		

						
		mtl = _R.animateSlide(nexttrans, comingtransition, container,  opt, nextli, actli, nextsh, actsh,  mtl);	
		if (nextsh.data('kenburns')=="on") {
			_R.startKenBurn(nextsh,opt);				
			mtl.add(punchgs.TweenLite.set(nextsh,{autoAlpha:0}))
		}
		
		// SHOW FIRST LI && ANIMATE THE CAPTIONS
		mtl.pause();
	}

	if (_R.scrollHandling) {
		_R.scrollHandling(opt, true);
		mtl.eventCallback("onUpdate",function() {
			_R.scrollHandling(opt, true);
		});
	}
	
	// START PARALLAX IF NEEDED		
	if (opt.parallax.type!="off" && opt.parallax.firstgo==undefined && _R.scrollHandling) {
		opt.parallax.firstgo = true;
		opt.lastscrolltop = -999;
		_R.scrollHandling(opt,true);
		setTimeout(function() {
			opt.lastscrolltop = -999;
			_R.scrollHandling(opt,true);
		},210);
		setTimeout(function() {
			opt.lastscrolltop = -999;
			_R.scrollHandling(opt,true);
		},420);
	}
	
	
	if (_R.animateTheCaptions) {
		_R.animateTheCaptions(nextli, opt,null,mtl);	
	} else {
		if (mtl != undefined) setTimeout(function() {			
			mtl.resume();
		},30);
	}
	punchgs.TweenLite.to(nextli,0.001,{autoAlpha:1});

	
	//if (_R.callStaticDDDParallax) _R.callStaticDDDParallax(container,opt,nextli);	
	
}


//////////////////////////////////////////
//	GIVE FREE THE TRANSITIOSN			//
//////////////////////////////////////////
var letItFree = function(container,opt,nextsh,actsh,nextli,actli,mtl) {
		
	if (opt.sliderType==="carousel") {
		// CAROUSEL SLIDER
	}  else {
		opt.removePrepare = 0;
		punchgs.TweenLite.to(nextsh.find('.defaultimg'),0.001,{zIndex:20,autoAlpha:1,onComplete:function() {
			removeSlots(container,opt,nextli,1);

		}});
		if (nextli.index()!=actli.index()) {
			punchgs.TweenLite.to(actli,0.2,{zIndex:18,autoAlpha:0,onComplete:function() {
				removeSlots(container,opt,actli,1);							
			}});
		}
	}


	container.find('.active-revslide').removeClass("active-revslide");	
	container.find('.processing-revslide').removeClass("processing-revslide").addClass("active-revslide");
	opt.act=nextli.index();
	
	opt.c.attr('data-slideactive',container.find('.active-revslide').data('index'));	
	
	
	if (opt.parallax.type=="scroll" || opt.parallax.type=="scroll+mouse" || opt.parallax.type=="mouse+scroll") {
		opt.lastscrolltop = -999;
		_R.scrollHandling(opt);
	}
	
	mtl.clear();		
	
	
	if (actsh.data('kbtl')!=undefined) {
		actsh.data('kbtl').reverse();
		actsh.data('kbtl').timeScale(25);
	}	
	if (nextsh.data('kenburns')=="on") {		
		if (nextsh.data('kbtl')!=undefined) {
			nextsh.data('kbtl').timeScale(1);	
			nextsh.data('kbtl').play();						
		}
		else
			_R.startKenBurn(nextsh,opt);						
	}

	nextli.find('.rs-background-video-layer').each(function(i) {		
		if (_ISM) return false;
		var _nc = jQuery(this)
		_R.resetVideo(_nc,opt);								
		
		punchgs.TweenLite.fromTo(_nc,1,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:0.2,onComplete:function() {		
			if (_R.animcompleted) _R.animcompleted(_nc,opt);
		}});
	});
	

	actli.find('.rs-background-video-layer').each(function(i) {		
		if (_ISM) return false;
		var _nc = jQuery(this);
		if (_R.stopVideo) {
			_R.resetVideo(_nc,opt);
			_R.stopVideo(_nc,opt);					
		}
		punchgs.TweenLite.to(_nc,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:0.2});
	});
	// TIRGGER THE ON CHANGE EVENTS
	var data={};
	data.slideIndex=nextli.index()+1;
	data.slideLIIndex=nextli.index();
	data.slide = nextli;
	data.currentslide=nextli;
	data.prevslide = actli;
	opt.last_shown_slide = actli.index();

	container.trigger('revolution.slide.onchange',data);
	container.trigger('revolution.slide.onafterswap',data);	

	opt.duringslidechange = false;

	var lastSlideLoop = actli.data('slide_on_focus_amount'),
		lastSlideMaxLoop = actli.data('hideafterloop');	
	if (lastSlideMaxLoop!=0 && lastSlideMaxLoop<=lastSlideLoop) {		
		opt.c.revremoveslide(actli.index());
	}
	//if (_R.callStaticDDDParallax) _R.callStaticDDDParallax(container,opt,nextli);		
	
}





///////////////////////////
//	REMOVE THE LISTENERS //
///////////////////////////
var removeAllListeners = function(container,opt) {
	container.children().each(function() {
	  try{ jQuery(this).die('click'); } catch(e) {}
	  try{ jQuery(this).die('mouseenter');} catch(e) {}
	  try{ jQuery(this).die('mouseleave');} catch(e) {}
	  try{ jQuery(this).unbind('hover');} catch(e) {}
	})
	try{ container.die('click','mouseenter','mouseleave');} catch(e) {}
	clearInterval(opt.cdint);
	container=null;
}

///////////////////////////
//	-	countDown	-	//
/////////////////////////
var countDown = function(container,opt) {
	opt.cd=0;
	opt.loop=0;
	if (opt.stopAfterLoops!=undefined && opt.stopAfterLoops>-1)
			opt.looptogo=opt.stopAfterLoops;
	else
		opt.looptogo=9999999;

	if (opt.stopAtSlide!=undefined && opt.stopAtSlide>-1)
			opt.lastslidetoshow=opt.stopAtSlide;
	else
			opt.lastslidetoshow=999;

	opt.stopLoop="off";

	if (opt.looptogo==0) opt.stopLoop="on";

	
	var bt=container.find('.tp-bannertimer');

	// LISTENERS  //container.trigger('stoptimer');
	container.on('stoptimer',function() {		
	
		var bt = jQuery(this).find('.tp-bannertimer');
		bt.data('tween').pause();
		if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
		opt.sliderstatus = "paused";
		_R.unToggleState(opt.slidertoggledby);
	});


	container.on('starttimer',function() {			
		if (opt.forcepause_viatoggle) return;
		if (opt.conthover!=1 && opt.videoplaying!=true && opt.width>opt.hideSliderAtLimit && opt.tonpause != true && opt.overnav !=true && opt.ssop!=true)
			if (opt.noloopanymore !== 1 && (!opt.viewPort.enable || opt.inviewport)) {	
				
				bt.css({visibility:"visible"});
				bt.data('tween').resume();
				opt.sliderstatus = "playing";
			}

			if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
			_R.toggleState(opt.slidertoggledby);
	});


	container.on('restarttimer',function() {	
		if (opt.forcepause_viatoggle) return;		
		var bt = jQuery(this).find('.tp-bannertimer');
		if (opt.mouseoncontainer && opt.navigation.onHoverStop=="on" && (!_ISM)) return false; 
		if (opt.noloopanymore !== 1 && (!opt.viewPort.enable || opt.inviewport) && opt.ssop!=true) {
			bt.css({visibility:"visible"});
			bt.data('tween').kill();			
		
			bt.data('tween',punchgs.TweenLite.fromTo(bt,opt.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:countDownNext,delay:1}));
			opt.sliderstatus = "playing";
		}
		if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
		_R.toggleState(opt.slidertoggledby);
	});

	container.on('nulltimer',function() {						
			bt.data('tween').kill();			
			bt.data('tween',punchgs.TweenLite.fromTo(bt,opt.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:countDownNext,delay:1}));
			bt.data('tween').pause(0);
			if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
			opt.sliderstatus = "paused";
	});

	var countDownNext = function() {
		if (jQuery('body').find(container).length==0) {
			removeAllListeners(container,opt);
			clearInterval(opt.cdint);
		}

		container.trigger("revolution.slide.slideatend");

		//STATE OF API CHANGED -> MOVE TO AIP BETTER
		if (container.data('conthover-changed') == 1) {
			opt.conthover=	container.data('conthover');
			container.data('conthover-changed',0);
		}

		_R.callingNewSlide(opt,container,1);												
	}

	bt.data('tween',punchgs.TweenLite.fromTo(bt,opt.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:countDownNext,delay:1}));
	bt.data('opt',opt);

	if (opt.slideamount >1 && !(opt.stopAfterLoops==0 && opt.stopAtSlide==1)) {
		container.trigger("starttimer");
	}
	else {
		opt.noloopanymore = 1;
		
		container.trigger("nulltimer");		
	}

	container.on('tp-mouseenter',function() {	
		    opt.mouseoncontainer = true;			
			if (opt.navigation.onHoverStop=="on" && (!_ISM)) {
				container.trigger('stoptimer');
				container.trigger('revolution.slide.onpause');								
			}
	});
	container.on('tp-mouseleft',function() {
			opt.mouseoncontainer = false;
			if (container.data('conthover')!=1 && opt.navigation.onHoverStop=="on" && ((opt.viewPort.enable==true && opt.inviewport) || opt.viewPort.enable==false)) {
				container.trigger('revolution.slide.onresume');
				container.trigger('starttimer');									
			}
	});
	
}


 

//////////////////////////////////////////////////////
// * Revolution Slider - NEEDFULL FUNCTIONS
// * @version: 1.0 (30.10.2014)
// * @author ThemePunch
//////////////////////////////////////////////////////



// 	-	BLUR / FOXUS FUNCTIONS ON BROWSER 

var vis = (function(){
	    var stateKey,
	        eventKey,
	        keys = {
	                hidden: "visibilitychange",
	                webkitHidden: "webkitvisibilitychange",
	                mozHidden: "mozvisibilitychange",
	                msHidden: "msvisibilitychange"
	    };
	    for (stateKey in keys) {
	        if (stateKey in document) {
	            eventKey = keys[stateKey];
	            break;
	        }
	    }
	    return function(c) {
	        if (c) document.addEventListener(eventKey, c,{pasive:true});
	        return !document[stateKey];
	    }
	})();

var restartOnFocus = function(opt) {
	if (opt==undefined || opt.c==undefined) return false;
	if (opt.windowfocused!=true) {
		opt.windowfocused = true;
	    punchgs.TweenLite.delayedCall(0.3,function(){        	
	        // TAB IS ACTIVE, WE CAN START ANY PART OF THE SLIDER        
	        if (opt.fallbacks.nextSlideOnWindowFocus=="on") opt.c.revnext();
	        opt.c.revredraw();
	        if (opt.lastsliderstatus=="playing")								
			opt.c.revresume();
	    });
	}
}

var lastStatBlur = function(opt) {
	opt.windowfocused = false;
	opt.lastsliderstatus = opt.sliderstatus;	
	opt.c.revpause();	
	var actsh = opt.c.find('.active-revslide .slotholder'),
		nextsh = opt.c.find('.processing-revslide .slotholder');

	if (nextsh.data('kenburns')=="on") 				
		_R.stopKenBurn(nextsh,opt);

	if (actsh.data('kenburns')=="on") 				
		_R.stopKenBurn(actsh,opt);
	
	
}

var tabBlurringCheck = function(container,opt) {
	var notIE = (document.documentMode === undefined),
	    isChromium = window.chrome;

	if (notIE && !isChromium) {
	    // checks for Firefox and other  NON IE Chrome versions
	    jQuery(window).on("focusin", function () {
			restartOnFocus(opt);
	    }).on("focusout", function () {
	    	lastStatBlur(opt);	    					
	    });
	} else {
	    // checks for IE and Chromium versions
	    if (window.addEventListener) {			    	
	        // bind focus event
	        window.addEventListener("focus", function (event) {
				restartOnFocus(opt);
	        }, {capture:false,passive:true});
	        // bind blur event
	        window.addEventListener("blur", function (event) {
				lastStatBlur(opt);	  
	        }, {capture:false,passive:true});

	    } else {
	        // bind focus event
	        window.attachEvent("focus", function (event) {
	        	restartOnFocus(opt);
	        });
	        // bind focus event
	        window.attachEvent("blur", function (event) {
				lastStatBlur(opt);	  
	        });
	    }
	}
}


// 	-	GET THE URL PARAMETER //

var getUrlVars = function (hashdivider){
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
	for(var i = 0; i < hashes.length; i++)
	{
		hashes[i] = hashes[i].replace('%3D',"=");
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}
})(jQuery);;
/********************************************
 * REVOLUTION 5.3 EXTENSION - ACTIONS
 * @version: 1.3.2 (12.04.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function($){var _R=jQuery.fn.revolution,_ISM=_R.is_mobile();jQuery.extend(!0,_R,{checkActions:function(e,t,o){checkActions_intern(e,t,o)}});var checkActions_intern=function(e,t,o){o&&jQuery.each(o,function(o,a){a.delay=parseInt(a.delay,0)/1e3,e.addClass("noSwipe"),t.fullscreen_esclistener||("exitfullscreen"==a.action||"togglefullscreen"==a.action)&&(jQuery(document).keyup(function(t){27==t.keyCode&&jQuery("#rs-go-fullscreen").length>0&&e.trigger(a.event)}),t.fullscreen_esclistener=!0);var l="backgroundvideo"==a.layer?jQuery(".rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".tp-revslider-slidesli").find(".tp-videolayer"):jQuery("#"+a.layer);switch(-1!=jQuery.inArray(a.action,["toggleslider","toggle_mute_video","toggle_global_mute_video","togglefullscreen"])&&e.data("togglelisteners",!0),a.action){case"togglevideo":jQuery.each(l,function(t,o){o=jQuery(o);var a=o.data("videotoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videotoggledby",a)});break;case"togglelayer":jQuery.each(l,function(t,o){o=jQuery(o);var a=o.data("layertoggledby");void 0==a&&(a=new Array),a.push(e),o.data("layertoggledby",a)});break;case"toggle_mute_video":jQuery.each(l,function(t,o){o=jQuery(o);var a=o.data("videomutetoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videomutetoggledby",a)});break;case"toggle_global_mute_video":jQuery.each(l,function(t,o){o=jQuery(o);var a=o.data("videomutetoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videomutetoggledby",a)});break;case"toggleslider":void 0==t.slidertoggledby&&(t.slidertoggledby=new Array),t.slidertoggledby.push(e);break;case"togglefullscreen":void 0==t.fullscreentoggledby&&(t.fullscreentoggledby=new Array),t.fullscreentoggledby.push(e)}switch(e.on(a.event,function(){var o="backgroundvideo"==a.layer?jQuery(".active-revslide .slotholder .rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".active-revslide .tp-videolayer").first():jQuery("#"+a.layer);if("stoplayer"==a.action||"togglelayer"==a.action||"startlayer"==a.action){if(o.length>0)if("startlayer"==a.action||"togglelayer"==a.action&&"in"!=o.data("animdirection")){o.data("animdirection","in");var l=o.data("timeline_out"),i="carousel"===t.sliderType?0:t.width/2-t.gridwidth[t.curWinRange]*t.bw/2,r=0;void 0!=l&&l.pause(0).kill(),_R.animateSingleCaption&&_R.animateSingleCaption(o,t,i,r,0,!1,!0);var n=o.data("timeline");o.data("triggerstate","on"),_R.toggleState(o.data("layertoggledby")),punchgs.TweenLite.delayedCall(a.delay,function(){n.play(0)},[n])}else("stoplayer"==a.action||"togglelayer"==a.action&&"out"!=o.data("animdirection"))&&(o.data("animdirection","out"),o.data("triggered",!0),o.data("triggerstate","off"),_R.stopVideo&&_R.stopVideo(o,t),_R.endMoveCaption&&punchgs.TweenLite.delayedCall(a.delay,_R.endMoveCaption,[o,null,null,t]),_R.unToggleState(o.data("layertoggledby")))}else!_ISM||"playvideo"!=a.action&&"stopvideo"!=a.action&&"togglevideo"!=a.action&&"mutevideo"!=a.action&&"unmutevideo"!=a.action&&"toggle_mute_video"!=a.action&&"toggle_global_mute_video"!=a.action?punchgs.TweenLite.delayedCall(a.delay,function(){actionSwitches(o,t,a,e)},[o,t,a,e]):actionSwitches(o,t,a,e)}),a.action){case"togglelayer":case"startlayer":case"playlayer":case"stoplayer":var l=jQuery("#"+a.layer);"bytrigger"!=l.data("start")&&(l.data("triggerstate","on"),l.data("animdirection","in"))}})},actionSwitches=function(tnc,opt,a,_nc){switch(a.action){case"scrollbelow":_nc.addClass("tp-scrollbelowslider"),_nc.data("scrolloffset",a.offset),_nc.data("scrolldelay",a.delay);var off=getOffContH(opt.fullScreenOffsetContainer)||0,aof=parseInt(a.offset,0)||0;off=off-aof||0,jQuery("body,html").animate({scrollTop:opt.c.offset().top+jQuery(opt.li[0]).height()-off+"px"},{duration:400});break;case"callback":eval(a.callback);break;case"jumptoslide":switch(a.slide.toLowerCase()){case"+1":case"next":opt.sc_indicator="arrow",_R.callingNewSlide(opt,opt.c,1);break;case"previous":case"prev":case"-1":opt.sc_indicator="arrow",_R.callingNewSlide(opt,opt.c,-1);break;default:var ts=jQuery.isNumeric(a.slide)?parseInt(a.slide,0):a.slide;_R.callingNewSlide(opt,opt.c,ts)}break;case"simplelink":window.open(a.url,a.target);break;case"toggleslider":opt.noloopanymore=0,"playing"==opt.sliderstatus?(opt.c.revpause(),opt.forcepause_viatoggle=!0,_R.unToggleState(opt.slidertoggledby)):(opt.forcepause_viatoggle=!1,opt.c.revresume(),_R.toggleState(opt.slidertoggledby));break;case"pauseslider":opt.c.revpause(),_R.unToggleState(opt.slidertoggledby);break;case"playslider":opt.noloopanymore=0,opt.c.revresume(),_R.toggleState(opt.slidertoggledby);break;case"playvideo":tnc.length>0&&_R.playVideo(tnc,opt);break;case"stopvideo":tnc.length>0&&_R.stopVideo&&_R.stopVideo(tnc,opt);break;case"togglevideo":tnc.length>0&&(_R.isVideoPlaying(tnc,opt)?_R.stopVideo&&_R.stopVideo(tnc,opt):_R.playVideo(tnc,opt));break;case"mutevideo":tnc.length>0&&_R.muteVideo(tnc,opt);break;case"unmutevideo":tnc.length>0&&_R.unMuteVideo&&_R.unMuteVideo(tnc,opt);break;case"toggle_mute_video":tnc.length>0&&(_R.isVideoMuted(tnc,opt)?_R.unMuteVideo(tnc,opt):_R.muteVideo&&_R.muteVideo(tnc,opt)),_nc.toggleClass("rs-toggle-content-active");break;case"toggle_global_mute_video":_nc.hasClass("rs-toggle-content-active")?(opt.globalmute=!1,void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.unMuteVideo&&_R.unMuteVideo(t,opt)})):(opt.globalmute=!0,void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.muteVideo&&_R.muteVideo(t,opt)})),_nc.toggleClass("rs-toggle-content-active");break;case"simulateclick":tnc.length>0&&tnc.click();break;case"toggleclass":tnc.length>0&&(tnc.hasClass(a.classname)?tnc.removeClass(a.classname):tnc.addClass(a.classname));break;case"gofullscreen":case"exitfullscreen":case"togglefullscreen":if(jQuery("#rs-go-fullscreen").length>0&&("togglefullscreen"==a.action||"exitfullscreen"==a.action)){jQuery("#rs-go-fullscreen").appendTo(jQuery("#rs-was-here"));var paw=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper");paw.unwrap(),paw.unwrap(),opt.minHeight=opt.oldminheight,opt.infullscreenmode=!1,opt.c.revredraw(),void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.playVideo(t,opt)}),_R.unToggleState(opt.fullscreentoggledby)}else if(0==jQuery("#rs-go-fullscreen").length&&("togglefullscreen"==a.action||"gofullscreen"==a.action)){var paw=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper");paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"></div></div>');var gf=jQuery("#rs-go-fullscreen");gf.appendTo(jQuery("body")),gf.css({position:"fixed",width:"100%",height:"100%",top:"0px",left:"0px",zIndex:"9999999",background:"#ffffff"}),opt.oldminheight=opt.minHeight,opt.minHeight=jQuery(window).height(),opt.infullscreenmode=!0,opt.c.revredraw(),void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.playVideo(t,opt)}),_R.toggleState(opt.fullscreentoggledby)}break;default:var obj={};obj.event=a,obj.layer=_nc,opt.c.trigger("layeraction",[obj])}},getOffContH=function(e){if(void 0==e)return 0;if(e.split(",").length>1){oc=e.split(",");var t=0;return oc&&jQuery.each(oc,function(e,o){jQuery(o).length>0&&(t+=jQuery(o).outerHeight(!0))}),t}return jQuery(e).height()}}(jQuery);;
/********************************************
 * REVOLUTION 5.0 EXTENSION - CAROUSEL
 * @version: 1.0.2 (01.10.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(){var e=jQuery.fn.revolution;jQuery.extend(!0,e,{prepareCarousel:function(i,l,o){o=i.carousel.lastdirection=a(o,i.carousel.lastdirection),t(i),i.carousel.slide_offset_target=r(i),void 0==l?e.carouselToEvalPosition(i,o):s(i,o,!1)},carouselToEvalPosition:function(i,t){var l=i.carousel;t=l.lastdirection=a(t,l.lastdirection);var o="center"===l.horizontal_align?(l.wrapwidth/2-l.slide_width/2-l.slide_globaloffset)/l.slide_width:(0-l.slide_globaloffset)/l.slide_width,r=e.simp(o,i.slideamount,!1),n=r-Math.floor(r),d=0,f=-1*(Math.ceil(r)-r),h=-1*(Math.floor(r)-r);d=n>=.3&&"left"===t||n>=.7&&"right"===t?f:.3>n&&"left"===t||.7>n&&"right"===t?h:d,d="off"===l.infinity?0>r?r:o>i.slideamount-1?o-(i.slideamount-1):d:d,l.slide_offset_target=d*l.slide_width,0!==Math.abs(l.slide_offset_target)?s(i,t,!0):e.organiseCarousel(i,t)},organiseCarousel:function(e,i,t,a){i=void 0===i||"down"==i||"up"==i||null===i||jQuery.isEmptyObject(i)?"left":i;for(var s=e.carousel,l=new Array,o=s.slides.length,r="right"===s.horizontal_align?r=e.width:0,n=0;o>n;n++){var d=n*s.slide_width+s.slide_offset;"on"===s.infinity&&(d=d>s.wrapwidth-s.inneroffset&&"right"==i?s.slide_offset-(s.slides.length-n)*s.slide_width:d,d=d<0-s.inneroffset-s.slide_width&&"left"==i?d+s.maxwidth:d),l[n]=d}var f=999;s.slides&&jQuery.each(s.slides,function(a,r){var n=l[a];"on"===s.infinity&&(n=n>s.wrapwidth-s.inneroffset&&"left"===i?l[0]-(o-a)*s.slide_width:n,n=n<0-s.inneroffset-s.slide_width?"left"==i?n+s.maxwidth:"right"===i?l[o-1]+(a+1)*s.slide_width:n:n);var d=new Object;d.left=n+s.inneroffset;var h="center"===s.horizontal_align?(Math.abs(s.wrapwidth/2)-(d.left+s.slide_width/2))/s.slide_width:(s.inneroffset-d.left)/s.slide_width,w="center"===s.horizontal_align?2:1;if((t&&Math.abs(h)<f||0===h)&&(f=Math.abs(h),s.focused=a),d.width=s.slide_width,d.x=0,d.transformPerspective=1200,d.transformOrigin="50% "+s.vertical_align,"on"===s.fadeout)if("on"===s.vary_fade)d.autoAlpha=1-Math.abs(1/Math.ceil(s.maxVisibleItems/w)*h);else switch(s.horizontal_align){case"center":d.autoAlpha=Math.abs(h)<Math.ceil(s.maxVisibleItems/w-1)?1:1-(Math.abs(h)-Math.floor(Math.abs(h)));break;case"left":d.autoAlpha=1>h&&h>0?1-h:Math.abs(h)>s.maxVisibleItems-1?1-(Math.abs(h)-(s.maxVisibleItems-1)):1;break;case"right":d.autoAlpha=h>-1&&0>h?1-Math.abs(h):h>s.maxVisibleItems-1?1-(Math.abs(h)-(s.maxVisibleItems-1)):1}else d.autoAlpha=Math.abs(h)<Math.ceil(s.maxVisibleItems/w)?1:0;if(void 0!==s.minScale&&s.minScale>0)if("on"===s.vary_scale){d.scale=1-Math.abs(s.minScale/100/Math.ceil(s.maxVisibleItems/w)*h);var c=(s.slide_width-s.slide_width*d.scale)*Math.abs(h)}else{d.scale=h>=1||-1>=h?1-s.minScale/100:(100-s.minScale*Math.abs(h))/100;var c=(s.slide_width-s.slide_width*(1-s.minScale/100))*Math.abs(h)}void 0!==s.maxRotation&&0!=Math.abs(s.maxRotation)&&("on"===s.vary_rotation?(d.rotationY=Math.abs(s.maxRotation)-Math.abs((1-Math.abs(1/Math.ceil(s.maxVisibleItems/w)*h))*s.maxRotation),d.autoAlpha=Math.abs(d.rotationY)>90?0:d.autoAlpha):d.rotationY=h>=1||-1>=h?s.maxRotation:Math.abs(h)*s.maxRotation,d.rotationY=0>h?-1*d.rotationY:d.rotationY),d.x=-1*s.space*h,d.left=Math.floor(d.left),d.x=Math.floor(d.x),void 0!==d.scale?0>h?d.x-c:d.x+c:d.x,d.zIndex=Math.round(100-Math.abs(5*h)),d.transformStyle="3D"!=e.parallax.type&&"3d"!=e.parallax.type?"flat":"preserve-3d",punchgs.TweenLite.set(r,d)}),a&&(e.c.find(".next-revslide").removeClass("next-revslide"),jQuery(s.slides[s.focused]).addClass("next-revslide"),e.c.trigger("revolution.nextslide.waiting"));s.wrapwidth/2-s.slide_offset,s.maxwidth+s.slide_offset-s.wrapwidth/2}});var i=function(e){var i=e.carousel;i.infbackup=i.infinity,i.maxVisiblebackup=i.maxVisibleItems,i.slide_globaloffset="none",i.slide_offset=0,i.wrap=e.c.find(".tp-carousel-wrapper"),i.slides=e.c.find(".tp-revslider-slidesli"),0!==i.maxRotation&&("3D"!=e.parallax.type&&"3d"!=e.parallax.type?punchgs.TweenLite.set(i.wrap,{perspective:1200,transformStyle:"flat"}):punchgs.TweenLite.set(i.wrap,{perspective:1600,transformStyle:"preserve-3d"})),void 0!==i.border_radius&&parseInt(i.border_radius,0)>0&&punchgs.TweenLite.set(e.c.find(".tp-revslider-slidesli"),{borderRadius:i.border_radius})},t=function(t){void 0===t.bw&&e.setSize(t);var a=t.carousel,s=e.getHorizontalOffset(t.c,"left"),l=e.getHorizontalOffset(t.c,"right");void 0===a.wrap&&i(t),a.slide_width="on"!==a.stretch?t.gridwidth[t.curWinRange]*t.bw:t.c.width(),a.maxwidth=t.slideamount*a.slide_width,a.maxVisiblebackup>a.slides.length+1&&(a.maxVisibleItems=a.slides.length+2),a.wrapwidth=a.maxVisibleItems*a.slide_width+(a.maxVisibleItems-1)*a.space,a.wrapwidth="auto"!=t.sliderLayout?a.wrapwidth>t.c.closest(".tp-simpleresponsive").width()?t.c.closest(".tp-simpleresponsive").width():a.wrapwidth:a.wrapwidth>t.ul.width()?t.ul.width():a.wrapwidth,a.infinity=a.wrapwidth>=a.maxwidth?"off":a.infbackup,a.wrapoffset="center"===a.horizontal_align?(t.c.width()-l-s-a.wrapwidth)/2:0,a.wrapoffset="auto"!=t.sliderLayout&&t.outernav?0:a.wrapoffset<s?s:a.wrapoffset;var o="hidden";("3D"==t.parallax.type||"3d"==t.parallax.type)&&(o="visible"),"right"===a.horizontal_align?punchgs.TweenLite.set(a.wrap,{left:"auto",right:a.wrapoffset+"px",width:a.wrapwidth,overflow:o}):punchgs.TweenLite.set(a.wrap,{right:"auto",left:a.wrapoffset+"px",width:a.wrapwidth,overflow:o}),a.inneroffset="right"===a.horizontal_align?a.wrapwidth-a.slide_width:0,a.realoffset=Math.abs(a.wrap.position().left),a.windhalf=jQuery(window).width()/2},a=function(e,i){return null===e||jQuery.isEmptyObject(e)?i:void 0===e?"right":e},s=function(i,t,s){var l=i.carousel;t=l.lastdirection=a(t,l.lastdirection);var o=new Object;o.from=0,o.to=l.slide_offset_target,void 0!==l.positionanim&&l.positionanim.pause(),l.positionanim=punchgs.TweenLite.to(o,1.2,{from:o.to,onUpdate:function(){l.slide_offset=l.slide_globaloffset+o.from,l.slide_offset=e.simp(l.slide_offset,l.maxwidth),e.organiseCarousel(i,t,!1,!1)},onComplete:function(){l.slide_globaloffset="off"===l.infinity?l.slide_globaloffset+l.slide_offset_target:e.simp(l.slide_globaloffset+l.slide_offset_target,l.maxwidth),l.slide_offset=e.simp(l.slide_offset,l.maxwidth),e.organiseCarousel(i,t,!1,!0);var a=jQuery(i.li[l.focused]);i.c.find(".next-revslide").removeClass("next-revslide"),s&&e.callingNewSlide(i,i.c,a.data("index"))},ease:punchgs.Expo.easeOut})},l=function(e,i){return Math.abs(e)>Math.abs(i)?e>0?e-Math.abs(Math.floor(e/i)*i):e+Math.abs(Math.floor(e/i)*i):e},o=function(e,i,t){var t,t,a=i-e,s=i-t-e;return a=l(a,t),s=l(s,t),Math.abs(a)>Math.abs(s)?s:a},r=function(i){var t=0,a=i.carousel;if(void 0!==a.positionanim&&a.positionanim.kill(),"none"==a.slide_globaloffset)a.slide_globaloffset=t="center"===a.horizontal_align?a.wrapwidth/2-a.slide_width/2:0;else{a.slide_globaloffset=a.slide_offset,a.slide_offset=0;var s=i.c.find(".processing-revslide").index(),l="center"===a.horizontal_align?(a.wrapwidth/2-a.slide_width/2-a.slide_globaloffset)/a.slide_width:(0-a.slide_globaloffset)/a.slide_width;l=e.simp(l,i.slideamount,!1),s=s>=0?s:i.c.find(".active-revslide").index(),s=s>=0?s:0,t="off"===a.infinity?l-s:-o(l,s,i.slideamount),t*=a.slide_width}return t}}(jQuery);;
/********************************************
 * REVOLUTION 5.0 EXTENSION - KEN BURN
 * @version: 1.0.0 (03.08.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(){var t=jQuery.fn.revolution;jQuery.extend(!0,t,{stopKenBurn:function(t){void 0!=t.data("kbtl")&&t.data("kbtl").pause()},startKenBurn:function(t,e,a){var r=t.data(),n=t.find(".defaultimg"),s=n.data("lazyload")||n.data("src"),i=(r.owidth/r.oheight,"carousel"===e.sliderType?e.carousel.slide_width:e.ul.width()),o=e.ul.height();t.data("kbtl")&&t.data("kbtl").kill(),a=a||0,0==t.find(".tp-kbimg").length&&(t.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="'+s+'" style="position:absolute;" width="'+r.owidth+'" height="'+r.oheight+'"></div>'),t.data("kenburn",t.find(".tp-kbimg")));var d=function(t,e,a,r,n,s,i){var o=t*a,d=e*a,l=Math.abs(r-o),h=Math.abs(n-d),p=new Object;return p.l=(0-s)*l,p.r=p.l+o,p.t=(0-i)*h,p.b=p.t+d,p.h=s,p.v=i,p},l=function(t,e,a,r,n){var s=t.bgposition.split(" ")||"center center",i="center"==s[0]?"50%":"left"==s[0]||"left"==s[1]?"0%":"right"==s[0]||"right"==s[1]?"100%":s[0],o="center"==s[1]?"50%":"top"==s[0]||"top"==s[1]?"0%":"bottom"==s[0]||"bottom"==s[1]?"100%":s[1];i=parseInt(i,0)/100||0,o=parseInt(o,0)/100||0;var l=new Object;return l.start=d(n.start.width,n.start.height,n.start.scale,e,a,i,o),l.end=d(n.start.width,n.start.height,n.end.scale,e,a,i,o),l},h=function(t,e,a){var r=a.scalestart/100,n=a.scaleend/100,s=void 0!=a.oofsetstart?a.offsetstart.split(" ")||[0,0]:[0,0],i=void 0!=a.offsetend?a.offsetend.split(" ")||[0,0]:[0,0];a.bgposition="center center"==a.bgposition?"50% 50%":a.bgposition;{var o=new Object,d=t*r,h=(d/a.owidth*a.oheight,t*n);h/a.owidth*a.oheight}if(o.start=new Object,o.starto=new Object,o.end=new Object,o.endo=new Object,o.start.width=t,o.start.height=o.start.width/a.owidth*a.oheight,o.start.height<e){var p=e/o.start.height;o.start.height=e,o.start.width=o.start.width*p}o.start.transformOrigin=a.bgposition,o.start.scale=r,o.end.scale=n,o.start.rotation=a.rotatestart+"deg",o.end.rotation=a.rotateend+"deg";var g=l(a,t,e,s,o);s[0]=parseFloat(s[0])+g.start.l,i[0]=parseFloat(i[0])+g.end.l,s[1]=parseFloat(s[1])+g.start.t,i[1]=parseFloat(i[1])+g.end.t;var c=g.start.r-g.start.l,b=g.start.b-g.start.t,u=g.end.r-g.end.l,f=g.end.b-g.end.t;return s[0]=s[0]>0?0:c+s[0]<t?t-c:s[0],i[0]=i[0]>0?0:u+i[0]<t?t-u:i[0],s[1]=s[1]>0?0:b+s[1]<e?e-b:s[1],i[1]=i[1]>0?0:f+i[1]<e?e-f:i[1],o.starto.x=s[0]+"px",o.starto.y=s[1]+"px",o.endo.x=i[0]+"px",o.endo.y=i[1]+"px",o.end.ease=o.endo.ease=a.ease,o.end.force3D=o.endo.force3D=!0,o};void 0!=t.data("kbtl")&&(t.data("kbtl").kill(),t.removeData("kbtl"));var p=t.data("kenburn"),g=p.parent(),c=h(i,o,r),b=new punchgs.TimelineLite;b.pause(),c.start.transformOrigin="0% 0%",c.starto.transformOrigin="0% 0%",b.add(punchgs.TweenLite.fromTo(p,r.duration/1e3,c.start,c.end),0),b.add(punchgs.TweenLite.fromTo(g,r.duration/1e3,c.starto,c.endo),0),b.progress(a),b.play(),t.data("kbtl",b)}})}(jQuery);;
/************************************************
 * REVOLUTION 5.2 EXTENSION - LAYER ANIMATION
 * @version: 2.6 (30.05.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/

!function(a){function e(a,e,t,i,n,o,r){var d=a.find(e);d.css("borderWidth",o+"px"),d.css(t,0-o+"px"),d.css(i,"0px solid transparent"),d.css(n,r)}var t=jQuery.fn.revolution;t.is_mobile();jQuery.extend(!0,t,{animcompleted:function(a,e){var i=a.data("videotype"),n=a.data("autoplay"),o=a.data("autoplayonlyfirsttime");void 0!=i&&"none"!=i&&(1==n||"true"==n||"on"==n||"1sttime"==n||o?(t.playVideo(a,e),t.toggleState(a.data("videotoggledby")),(o||"1sttime"==n)&&(a.data("autoplayonlyfirsttime",!1),a.data("autoplay","off"))):("no1sttime"==n&&a.data("autoplay","on"),t.unToggleState(a.data("videotoggledby"))))},handleStaticLayers:function(a,e){var t=parseInt(a.data("startslide"),0),i=parseInt(a.data("endslide"),0);0>t&&(t=0),0>i&&(i=e.slideamount),0===t&&i===e.slideamount-1&&(i=e.slideamount+1),a.data("startslide",t),a.data("endslide",i)},animateTheCaptions:function(a,e,i,n){var o="carousel"===e.sliderType?0:e.width/2-e.gridwidth[e.curWinRange]*e.bw/2,r=0,d=a.data("index");e.layers=e.layers||new Object,e.layers[d]=e.layers[d]||a.find(".tp-caption"),e.layers["static"]=e.layers["static"]||e.c.find(".tp-static-layers").find(".tp-caption");var s=new Array;if(e.conh=e.c.height(),e.conw=e.c.width(),e.ulw=e.ul.width(),e.ulh=e.ul.height(),e.debugMode){a.addClass("indebugmode"),a.find(".helpgrid").remove(),e.c.find(".hglayerinfo").remove(),a.append('<div class="helpgrid" style="width:'+e.gridwidth[e.curWinRange]*e.bw+"px;height:"+e.gridheight[e.curWinRange]*e.bw+'px;"></div>');var l=a.find(".helpgrid");l.append('<div class="hginfo">Zoom:'+Math.round(100*e.bw)+"% &nbsp;&nbsp;&nbsp; Device Level:"+e.curWinRange+"&nbsp;&nbsp;&nbsp; Grid Preset:"+e.gridwidth[e.curWinRange]+"x"+e.gridheight[e.curWinRange]+"</div>"),e.c.append('<div class="hglayerinfo"></div>'),l.append('<div class="tlhg"></div>')}s&&jQuery.each(s,function(a){var e=jQuery(this);punchgs.TweenLite.set(e.find(".tp-videoposter"),{autoAlpha:1}),punchgs.TweenLite.set(e.find("iframe"),{autoAlpha:0})}),e.layers[d]&&jQuery.each(e.layers[d],function(a,e){s.push(e)}),e.layers["static"]&&jQuery.each(e.layers["static"],function(a,e){s.push(e)}),s&&jQuery.each(s,function(a){t.animateSingleCaption(jQuery(this),e,o,r,a,i)});var p=jQuery("body").find("#"+e.c.attr("id")).find(".tp-bannertimer");p.data("opt",e),void 0!=n&&setTimeout(function(){n.resume()},30)},animateSingleCaption:function(a,r,s,f,b,x,T){var L=x,W=g(a,r,"in",!0),j=a.data("_pw")||a.closest(".tp-parallax-wrap"),I=a.data("_lw")||a.closest(".tp-loop-wrap"),C=a.data("_mw")||a.closest(".tp-mask-wrap"),R=a.data("responsive")||"on",k=a.data("responsive_offset")||"on",_=a.data("basealign")||"grid",z="grid"===_?r.width:r.ulw,Q="grid"===_?r.height:r.ulh,S=jQuery("body").hasClass("rtl");if(a.data("_pw")||(a.data("staticlayer")?a.data("_li",a.closest(".tp-static-layers")):a.data("_li",a.closest(".tp-revslider-slidesli")),a.data("slidelink",a.hasClass("slidelink")),a.data("_pw",j),a.data("_lw",I),a.data("_mw",C)),!a.data("togglelisteners")&&a.find(".rs-toggled-content")&&(a.on("click",function(){a.toggleClass("rs-toggle-content-active")}),a.data("togglelisteners",!0)),"fullscreen"==r.sliderLayout&&(f=Q/2-r.gridheight[r.curWinRange]*r.bh/2),("on"==r.autoHeight||void 0!=r.minHeight&&r.minHeight>0)&&(f=r.conh/2-r.gridheight[r.curWinRange]*r.bh/2),0>f&&(f=0),r.debugMode){a.closest("li").find(".helpgrid").css({top:f+"px",left:s+"px"});var M=r.c.find(".hglayerinfo");a.on("hover, mouseenter",function(){var e="";a.data()&&jQuery.each(a.data(),function(a,t){"object"!=typeof t&&(e=e+'<span style="white-space:nowrap"><span style="color:#27ae60">'+a+":</span>"+t+"</span>&nbsp; &nbsp; ")}),M.html(e)})}var O=c(a.data("visibility"),r)[r.forcedWinRange]||c(a.data("visibility"),r)||"on";if("off"==O||z<r.hideCaptionAtLimit&&"on"==a.data("captionhidden")||z<r.hideAllCaptionAtLimit?a.addClass("tp-hidden-caption"):a.removeClass("tp-hidden-caption"),a.data("layertype","html"),0>s&&(s=0),void 0!=a.data("thumbimage")&&void 0==a.data("videoposter")&&a.data("videoposter",a.data("thumbimage")),a.find("img").length>0){var H=a.find("img");a.data("layertype","image"),0==H.width()&&H.css({width:"auto"}),0==H.height()&&H.css({height:"auto"}),void 0==H.data("ww")&&H.width()>0&&H.data("ww",H.width()),void 0==H.data("hh")&&H.height()>0&&H.data("hh",H.height());var B=H.data("ww"),P=H.data("hh"),A="slide"==_?r.ulw:r.gridwidth[r.curWinRange],D="slide"==_?r.ulh:r.gridheight[r.curWinRange],B=c(H.data("ww"),r)[r.curWinRange]||c(H.data("ww"),r)||"auto",P=c(H.data("hh"),r)[r.curWinRange]||c(H.data("hh"),r)||"auto",F="full"===B||"full-proportional"===B,X="full"===P||"full-proportional"===P;if("full-proportional"===B){var Y=H.data("owidth"),V=H.data("oheight");V/D>Y/A?(B=A,P=V*(A/Y)):(P=D,B=Y*(D/V))}else B=F?A:parseFloat(B),P=X?D:parseFloat(P);void 0==B&&(B=0),void 0==P&&(P=0),"off"!==R?("grid"!=_&&F?H.width(B):H.width(B*r.bw),"grid"!=_&&X?H.height(P):H.height(P*r.bh)):(H.width(B),H.height(P))}"slide"===_&&(s=0,f=0);var N="html5"==a.data("audio")?"audio":"video";if(a.hasClass("tp-videolayer")||a.hasClass("tp-audiolayer")||a.find("iframe").length>0||a.find(N).length>0){if(a.data("layertype","video"),t.manageVideoLayer&&t.manageVideoLayer(a,r,x,L),!x&&!L){a.data("videotype");t.resetVideo&&t.resetVideo(a,r)}var $=a.data("aspectratio");void 0!=$&&$.split(":").length>1&&t.prepareCoveredVideo($,r,a);var H=a.find("iframe")?a.find("iframe"):H=a.find(N),Z=a.find("iframe")?!1:!0,G=a.hasClass("coverscreenvideo");H.css({display:"block"}),void 0==a.data("videowidth")&&(a.data("videowidth",H.width()),a.data("videoheight",H.height()));var U,B=c(a.data("videowidth"),r)[r.curWinRange]||c(a.data("videowidth"),r)||"auto",P=c(a.data("videoheight"),r)[r.curWinRange]||c(a.data("videoheight"),r)||"auto";B=parseFloat(B),P=parseFloat(P),void 0===a.data("cssobj")&&(U=v(a,0),a.data("cssobj",U));var q=u(a.data("cssobj"),r);if("auto"==q.lineHeight&&(q.lineHeight=q.fontSize+4),a.hasClass("fullscreenvideo")||G){s=0,f=0,a.data("x",0),a.data("y",0);var E=Q;"on"==r.autoHeight&&(E=r.conh),a.css({width:z,height:E})}else punchgs.TweenLite.set(a,{paddingTop:Math.round(q.paddingTop*r.bh)+"px",paddingBottom:Math.round(q.paddingBottom*r.bh)+"px",paddingLeft:Math.round(q.paddingLeft*r.bw)+"px",paddingRight:Math.round(q.paddingRight*r.bw)+"px",marginTop:q.marginTop*r.bh+"px",marginBottom:q.marginBottom*r.bh+"px",marginLeft:q.marginLeft*r.bw+"px",marginRight:q.marginRight*r.bw+"px",borderTopWidth:Math.round(q.borderTopWidth*r.bh)+"px",borderBottomWidth:Math.round(q.borderBottomWidth*r.bh)+"px",borderLeftWidth:Math.round(q.borderLeftWidth*r.bw)+"px",borderRightWidth:Math.round(q.borderRightWidth*r.bw)+"px",width:B*r.bw+"px",height:P*r.bh+"px"});(0==Z&&!G||1!=a.data("forcecover")&&!a.hasClass("fullscreenvideo")&&!G)&&(H.width(B*r.bw),H.height(P*r.bh))}var J=a.data("slidelink")||!1;a.find(".tp-resizeme, .tp-resizeme *").each(function(){w(jQuery(this),r,"rekursive",R)}),a.hasClass("tp-resizeme")&&a.find("*").each(function(){w(jQuery(this),r,"rekursive",R)}),w(a,r,0,R);var K=a.outerHeight(),aa=a.css("backgroundColor");e(a,".frontcorner","left","borderRight","borderTopColor",K,aa),e(a,".frontcornertop","left","borderRight","borderBottomColor",K,aa),e(a,".backcorner","right","borderLeft","borderBottomColor",K,aa),e(a,".backcornertop","right","borderLeft","borderTopColor",K,aa),"on"==r.fullScreenAlignForce&&(s=0,f=0);var ea=a.data("arrobj");if(void 0===ea){var ea=new Object;ea.voa=c(a.data("voffset"),r)[r.curWinRange]||c(a.data("voffset"),r)[0],ea.hoa=c(a.data("hoffset"),r)[r.curWinRange]||c(a.data("hoffset"),r)[0],ea.elx=c(a.data("x"),r)[r.curWinRange]||c(a.data("x"),r)[0],ea.ely=c(a.data("y"),r)[r.curWinRange]||c(a.data("y"),r)[0]}var ta=0==ea.voa.length?0:ea.voa,ia=0==ea.hoa.length?0:ea.hoa,na=0==ea.elx.length?0:ea.elx,oa=0==ea.ely.length?0:ea.ely,ra=a.outerWidth(!0),da=a.outerHeight(!0);0==ra&&0==da&&(ra=r.ulw,da=r.ulh);var sa="off"!==k?parseInt(ta,0)*r.bw:parseInt(ta,0),la="off"!==k?parseInt(ia,0)*r.bw:parseInt(ia,0),pa="grid"===_?r.gridwidth[r.curWinRange]*r.bw:z,ha="grid"===_?r.gridheight[r.curWinRange]*r.bw:Q;"on"==r.fullScreenAlignForce&&(pa=r.ulw,ha=r.ulh),na="center"===na||"middle"===na?pa/2-ra/2+la:"left"===na?la:"right"===na?pa-ra-la:"off"!==k?na*r.bw:na,oa="center"==oa||"middle"==oa?ha/2-da/2+sa:"top"==oa?sa:"bottom"==oa?ha-da-sa:"off"!==k?oa*r.bw:oa,S&&!J&&(na+=ra),J&&(na=0);var ca=a.data("lasttriggerstate"),ga=a.data("triggerstate"),ma=void 0!=a.data("start")?a.data("start"):100,va=a.data("end"),ua=T?0:"bytrigger"===ma||"sliderenter"===ma?0:parseFloat(ma)/1e3,fa=na+s,wa=oa+f,ya=a.css("z-Index");T||("reset"==ca&&"bytrigger"!=ma?(a.data("triggerstate","on"),a.data("animdirection","in"),ga="on"):"reset"==ca&&"bytrigger"==ma&&(a.data("triggerstate","off"),a.data("animdirection","out"),ga="off")),punchgs.TweenLite.set(j,{zIndex:ya,top:wa,left:fa,overwrite:"auto"}),0==W&&(L=!0),void 0==a.data("timeline")||L||(2!=W&&a.data("timeline").gotoAndPlay(0),L=!0),!x&&a.data("timeline_out")&&2!=W&&0!=W&&(a.data("timeline_out").kill(),a.data("outstarted",0)),T&&void 0!=a.data("timeline")&&(a.removeData("$anims"),a.data("timeline").pause(0),a.data("timeline").kill(),void 0!=a.data("newhoveranim")&&(a.data("newhoveranim").progress(0),a.data("newhoveranim").kill()),a.removeData("timeline"),punchgs.TweenLite.killTweensOf(a),a.unbind("hover"),a.removeClass("rs-hover-ready"),a.removeData("newhoveranim"));var ba=a.data("timeline")?a.data("timeline").time():0,xa=void 0!==a.data("timeline")?a.data("timeline").progress():0,Ta=a.data("timeline")||new punchgs.TimelineLite({smoothChildTiming:!0});xa=jQuery.isNumeric(xa)?xa:0,Ta.pause();var La={};if(La.svg=void 0!=a.data("svg_src")?a.find("svg"):!1,1>xa&&1!=a.data("outstarted")||2==W||T){var Wa=a;if(void 0!=a.data("mySplitText")&&a.data("mySplitText").revert(),void 0!=a.data("splitin")&&a.data("splitin").match(/chars|words|lines/g)||void 0!=a.data("splitout")&&a.data("splitout").match(/chars|words|lines/g)){var ja=a.find("a").length>0?a.find("a"):a;a.data("mySplitText",new punchgs.SplitText(ja,{type:"lines,words,chars",charsClass:"tp-splitted tp-charsplit",wordsClass:"tp-splitted tp-wordsplit",linesClass:"tp-splitted tp-linesplit"})),a.addClass("splitted")}void 0!==a.data("mySplitText")&&a.data("splitin")&&a.data("splitin").match(/chars|words|lines/g)&&(Wa=a.data("mySplitText")[a.data("splitin")]);var Ia=new Object;La.svg&&(La.idle=o(a.data("svg_idle"),n()),punchgs.TweenLite.set(La.svg,La.idle.anim));var Ca=void 0!=a.data("transform_in")?a.data("transform_in").match(/\(R\)/gi):!1;if(!a.data("$anims")||T||Ca){var Ra=i(),ka=i(),_a=d(),za=void 0!==a.data("transform_hover")||void 0!==a.data("style_hover");ka=p(ka,a.data("transform_idle")),Ra=p(ka,a.data("transform_in"),1==r.sdir),za&&(_a=p(_a,a.data("transform_hover")),_a=m(_a,a.data("style_hover")),La.svg&&($svghover=o(a.data("svg_hover"),n()),void 0!=_a.anim.color&&($svghover.anim.fill=_a.anim.color),a.data("hoversvg",$svghover)),a.data("hover",_a)),Ra.elemdelay=void 0==a.data("elementdelay")?0:a.data("elementdelay"),ka.anim.ease=Ra.anim.ease=Ra.anim.ease||punchgs.Power1.easeInOut,za&&!a.hasClass("rs-hover-ready")&&(a.addClass("rs-hover-ready"),a.hover(function(a){var e=jQuery(a.currentTarget),t=e.data("hover"),i=e.data("timeline");i&&1==i.progress()&&(void 0===e.data("newhoveranim")||"none"===e.data("newhoveranim")?(e.data("newhoveranim",punchgs.TweenLite.to(e,t.speed,t.anim)),t.anim&&t.anim.zIndex&&e.data("newhoverparanim",punchgs.TweenLite.to(e.data("_pw"),t.speed,{zIndex:t.anim.zIndex})),La.svg&&e.data("newsvghoveranim",punchgs.TweenLite.to(La.svg,t.speed,e.data("hoversvg").anim))):(e.data("newhoveranim").progress(0).play(),(t.anim&&t.anim.zIndex||t.anim.css&&t.anim.css.zIndex)&&e.data("newhoverparanim").progress(0).play(),La.svg&&e.data("newsvghoveranim").progress(0).play()))},function(a){var e=jQuery(a.currentTarget),t=e.data("timeline");t&&1==t.progress()&&void 0!=e.data("newhoveranim")&&(e.data("newhoveranim").reverse(),e.data("newhoverparanim")&&e.data("newhoverparanim").reverse(),La.svg&&e.data("newsvghoveranim").reverse())})),Ia=new Object,Ia.f=Ra,Ia.r=ka,a.data("$anims")}else Ia=a.data("$anims");var Qa=h(a.data("mask_in")),Sa=new punchgs.TimelineLite;if(Ia.f.anim.x=Ia.f.anim.x*r.bw||l(Ia.f.anim.x,r,ra,da,wa,fa,"horizontal"),Ia.f.anim.y=Ia.f.anim.y*r.bw||l(Ia.f.anim.y,r,ra,da,wa,fa,"vertical"),2!=W||T){if(Wa!=a){var Ma=Ia.r.anim.ease;Ta.add(punchgs.TweenLite.set(a,Ia.r.anim)),Ia.r=i(),Ia.r.anim.ease=Ma}if(Ia.f.anim.visibility="hidden",a.data("eow",ra),a.data("eoh",da),a.data("speed",Ia.f.speed),a.data("ease",Ia.r.anim.ease),Sa.eventCallback("onStart",function(){punchgs.TweenLite.set(a,{visibility:"visible"}),a.data("iframes")&&a.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:1})}),punchgs.TweenLite.set(j,{visibility:"visible"});var e={};e.layer=a,e.eventtype="enterstage",e.layertype=a.data("layertype"),a.data("active",!0),e.layersettings=a.data(),r.c.trigger("revolution.layeraction",[e])}),Sa.eventCallback("onComplete",function(){var e={};e.layer=a,e.eventtype="enteredstage",e.layertype=a.data("layertype"),e.layersettings=a.data(),r.c.trigger("revolution.layeraction",[e]),t.animcompleted(a,r)}),"sliderenter"==ma&&r.overcontainer&&(ua=.6),Ta.add(Sa.staggerFromTo(Wa,Ia.f.speed,Ia.f.anim,Ia.r.anim,Ia.f.elemdelay),ua),Qa){var Oa=new Object;Oa.ease=Ia.r.anim.ease,Oa.overflow=Qa.anim.overflow="hidden",Oa.overwrite="all",Oa.x=Oa.y=0,Qa.anim.x=Qa.anim.x*r.bw||l(Qa.anim.x,r,ra,da,wa,fa,"horizontal"),Qa.anim.y=Qa.anim.y*r.bw||l(Qa.anim.y,r,ra,da,wa,fa,"vertical"),Ta.add(punchgs.TweenLite.fromTo(C,Ia.f.speed,Qa.anim,Oa,Ra.elemdelay),ua)}else Ta.add(punchgs.TweenLite.set(C,{overflow:"visible"},Ra.elemdelay),0)}if(a.data("timeline",Ta),r.sliderscrope=void 0===r.sliderscrope?Math.round(99999*Math.random()):r.sliderscrope,W=g(a,r,"in"),void 0===r.endtimeouts&&(r.endtimeouts=[]),(0===xa||2==W)&&"bytrigger"!==va&&!T&&"sliderleave"!=va){if(void 0!=va&&(-1==W||2==W)&&"bytriger"!==va)var Ha=setTimeout(function(){t.endMoveCaption(a,C,j,r)},parseInt(a.data("end"),0));r.endtimeouts.push(Ha)}Ta=a.data("timeline"),"on"==a.data("loopanimation")&&y(I,r.bw),("sliderenter"!=ma||"sliderenter"==ma&&r.overcontainer)&&(-1==W||1==W||T||0==W&&1>xa&&a.hasClass("rev-static-visbile"))&&(1>xa&&xa>0||0==xa&&"bytrigger"!=ma&&"keep"!=ca||0==xa&&"bytrigger"!=ma&&"keep"==ca&&"on"==ga||"bytrigger"==ma&&"keep"==ca&&"on"==ga)&&(Ta.resume(ba),t.toggleState(a.data("layertoggledby")))}"on"==a.data("loopanimation")&&punchgs.TweenLite.set(I,{minWidth:ra,minHeight:da}),0==a.data("slidelink")||1!=a.data("slidelink")&&!a.hasClass("slidelink")?(punchgs.TweenLite.set(C,{width:"auto",height:"auto"}),a.data("slidelink",0)):(punchgs.TweenLite.set(C,{width:"100%",height:"100%"}),a.data("slidelink",1))},endMoveCaption:function(a,e,n,o){if(e=void 0!=e?e:a.data("_mw"),n=void 0!=n?n:a.data("_pw"),a.data("outstarted",1),a.data("timeline"))a.data("timeline").pause();else if(void 0===a.data("_pw"))return;var d=new punchgs.TimelineLite,s=new punchgs.TimelineLite,c=new punchgs.TimelineLite,g=p(i(),a.data("transform_in"),1==o.sdir),m=a.data("transform_out")?p(r(),a.data("transform_out"),1==o.sdir):p(r(),a.data("transform_in"),1==o.sdir),v=a.data("splitout")&&a.data("splitout").match(/words|chars|lines/g)?a.data("mySplitText")[a.data("splitout")]:a,u=void 0==a.data("endelementdelay")?0:a.data("endelementdelay"),f=a.innerWidth(),w=a.innerHeight(),y=n.position();a.data("transform_out")&&a.data("transform_out").match(/auto:auto/g)&&(g.speed=m.speed,g.anim.ease=m.anim.ease,m=g);var b=h(a.data("mask_out"));m.anim.x=m.anim.x*o.bw||l(m.anim.x,o,f,w,y.top,y.left,"horizontal"),m.anim.y=m.anim.y*o.bw||l(m.anim.y,o,f,w,y.top,y.left,"vertical"),s.eventCallback("onStart",function(){var e={};e.layer=a,e.eventtype="leavestage",e.layertype=a.data("layertype"),e.layersettings=a.data(),a.data("active",!1),o.c.trigger("revolution.layeraction",[e])}),s.eventCallback("onComplete",function(){punchgs.TweenLite.set(a,{visibility:"hidden"}),punchgs.TweenLite.set(n,{visibility:"hidden"});var e={};e.layer=a,e.eventtype="leftstage",a.data("active",!1),e.layertype=a.data("layertype"),e.layersettings=a.data(),o.c.trigger("revolution.layeraction",[e]),t.stopVideo&&t.stopVideo(a,o)}),d.add(s.staggerTo(v,m.speed,m.anim,u),0),b?(b.anim.ease=m.anim.ease,b.anim.overflow="hidden",b.anim.x=b.anim.x*o.bw||l(b.anim.x,o,f,w,y.top,y.left,"horizontal"),b.anim.y=b.anim.y*o.bw||l(b.anim.y,o,f,w,y.top,y.left,"vertical"),d.add(c.to(e,m.speed,b.anim,u),0)):d.add(c.set(e,{overflow:"visible",overwrite:"auto"},u),0),a.data("timeline_out",d)},removeTheCaptions:function(a,e){var i=a.data("index"),n=new Array;e.layers[i]&&jQuery.each(e.layers[i],function(a,e){n.push(e)}),e.layers["static"]&&jQuery.each(e.layers["static"],function(a,e){n.push(e)}),e.endtimeouts&&e.endtimeouts.length>0&&jQuery.each(e.endtimeouts,function(a,e){clearTimeout(e)}),e.endtimeouts=new Array,n&&jQuery.each(n,function(a){var i=jQuery(this),n=g(i,e,"out");0!=n&&(b(i),clearTimeout(i.data("videoplaywait")),t.stopVideo&&t.stopVideo(i,e),t.endMoveCaption(i,null,null,e),t.removeMediaFromList&&t.removeMediaFromList(i,e),e.lastplayedvideos=[])})}});var i=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a.anim.rotationX=0,a.anim.rotationY=0,a.anim.rotationZ=0,a.anim.scaleX=1,a.anim.scaleY=1,a.anim.skewX=0,a.anim.skewY=0,a.anim.opacity=1,a.anim.transformOrigin="50% 50%",a.anim.transformPerspective=600,a.anim.rotation=0,a.anim.ease=punchgs.Power3.easeOut,a.anim.force3D="auto",a.speed=.3,a.anim.autoAlpha=1,a.anim.visibility="visible",a.anim.overwrite="all",a},n=function(){var a=new Object;return a.anim=new Object,a.anim.stroke="none",a.anim.strokeWidth=0,a.anim.strokeDasharray="none",a.anim.strokeDashoffset="0",a},o=function(a,e){var t=a.split(";");return t&&jQuery.each(t,function(a,t){var i=t.split(":"),n=i[0],o=i[1];"sc"==n&&(e.anim.stroke=o),"sw"==n&&(e.anim.strokeWidth=o),"sda"==n&&(e.anim.strokeDasharray=o),"sdo"==n&&(e.anim.strokeDashoffset=o)}),e},r=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a},d=function(){var a=new Object;return a.anim=new Object,a.speed=.2,a},s=function(a,e){if(jQuery.isNumeric(parseFloat(a)))return parseFloat(a);if(void 0===a||"inherit"===a)return e;if(a.split("{").length>1){var t=a.split(","),i=parseFloat(t[1].split("}")[0]);t=parseFloat(t[0].split("{")[1]),a=Math.random()*(i-t)+t}return a},l=function(a,e,t,i,n,o,r){return!jQuery.isNumeric(a)&&a.match(/%]/g)?(a=a.split("[")[1].split("]")[0],"horizontal"==r?a=(t+2)*parseInt(a,0)/100:"vertical"==r&&(a=(i+2)*parseInt(a,0)/100)):(a="layer_left"===a?0-t:"layer_right"===a?t:a,a="layer_top"===a?0-i:"layer_bottom"===a?i:a,a="left"===a||"stage_left"===a?0-t-o:"right"===a||"stage_right"===a?e.conw-o:"center"===a||"stage_center"===a?e.conw/2-t/2-o:a,a="top"===a||"stage_top"===a?0-i-n:"bottom"===a||"stage_bottom"===a?e.conh-n:"middle"===a||"stage_middle"===a?e.conh/2-i/2-n:a),a},p=function(a,e,t){var i=new Object;if(i=jQuery.extend(!0,{},i,a),void 0===e)return i;var n=e.split(";");return n&&jQuery.each(n,function(a,e){var n=e.split(":"),o=n[0],r=n[1];t&&void 0!=r&&r.length>0&&r.match(/\(R\)/)&&(r=r.replace("(R)",""),r="right"===r?"left":"left"===r?"right":"top"===r?"bottom":"bottom"===r?"top":r,"["===r[0]&&"-"===r[1]?r=r.replace("[-","["):"["===r[0]&&"-"!==r[1]?r=r.replace("[","[-"):"-"===r[0]?r=r.replace("-",""):r[0].match(/[1-9]/)&&(r="-"+r)),void 0!=r&&(r=r.replace(/\(R\)/,""),("rotationX"==o||"rX"==o)&&(i.anim.rotationX=s(r,i.anim.rotationX)+"deg"),("rotationY"==o||"rY"==o)&&(i.anim.rotationY=s(r,i.anim.rotationY)+"deg"),("rotationZ"==o||"rZ"==o)&&(i.anim.rotation=s(r,i.anim.rotationZ)+"deg"),("scaleX"==o||"sX"==o)&&(i.anim.scaleX=s(r,i.anim.scaleX)),("scaleY"==o||"sY"==o)&&(i.anim.scaleY=s(r,i.anim.scaleY)),("opacity"==o||"o"==o)&&(i.anim.opacity=s(r,i.anim.opacity)),i.anim.opacity=0==i.anim.opacity?1e-4:i.anim.opacity,("skewX"==o||"skX"==o)&&(i.anim.skewX=s(r,i.anim.skewX)),("skewY"==o||"skY"==o)&&(i.anim.skewY=s(r,i.anim.skewY)),"x"==o&&(i.anim.x=s(r,i.anim.x)),"y"==o&&(i.anim.y=s(r,i.anim.y)),"z"==o&&(i.anim.z=s(r,i.anim.z)),("transformOrigin"==o||"tO"==o)&&(i.anim.transformOrigin=r.toString()),("transformPerspective"==o||"tP"==o)&&(i.anim.transformPerspective=parseInt(r,0)),("speed"==o||"s"==o)&&(i.speed=parseFloat(r)/1e3),("ease"==o||"e"==o)&&(i.anim.ease=r))}),i},h=function(a){if(void 0===a)return!1;var e=new Object;e.anim=new Object;var t=a.split(";");return t&&jQuery.each(t,function(a,t){t=t.split(":");var i=t[0],n=t[1];"x"==i&&(e.anim.x=n),"y"==i&&(e.anim.y=n),"s"==i&&(e.speed=parseFloat(n)/1e3),("e"==i||"ease"==i)&&(e.anim.ease=n)}),e},c=function(a,e,t){if(void 0==a&&(a=0),!jQuery.isArray(a)&&"string"===jQuery.type(a)&&(a.split(",").length>1||a.split("[").length>1)){a=a.replace("[",""),a=a.replace("]","");var i=a.match(/'/g)?a.split("',"):a.split(",");a=new Array,i&&jQuery.each(i,function(e,t){t=t.replace("'",""),t=t.replace("'",""),a.push(t)})}else{var n=a;jQuery.isArray(a)||(a=new Array,a.push(n))}var n=a[a.length-1];if(a.length<e.rle)for(var o=1;o<=e.curWinRange;o++)a.push(n);return a},g=function(a,e,t,i){var n=-1;if(a.hasClass("tp-static-layer")){a.data("staticlayer",!0);var o=parseInt(a.data("startslide"),0),r=parseInt(a.data("endslide"),0),d=e.c.find(".processing-revslide").index(),s=-1!=d?d:e.c.find(".active-revslide").index();s=-1==s?0:s,"in"===t?a.hasClass("rev-static-visbile")?n=r==s||o>s||s>r?2:0:s>=o&&r>=s||o==s||r==s?(i||(a.addClass("rev-static-visbile"),a.removeClass("rev-static-hidden")),n=1):n=0:a.hasClass("rev-static-visbile")?o>s||s>r?(n=2,i||(a.removeClass("rev-static-visbile"),a.addClass("rev-static-hidden"))):n=0:n=2}return n},m=function(a,e){if(void 0===e)return a;e=e.replace("c:","color:"),e=e.replace("bg:","background-color:"),e=e.replace("bw:","border-width:"),e=e.replace("bc:","border-color:"),e=e.replace("br:","borderRadius:"),e=e.replace("bs:","border-style:"),e=e.replace("td:","text-decoration:"),e=e.replace("zi:","zIndex:");var t=e.split(";");return t&&jQuery.each(t,function(e,t){var i=t.split(":");i[0].length>0&&(a.anim[i[0]]=i[1])}),a},v=function(a,e){var t,i=new Object,n=!1;if("rekursive"==e&&(t=a.closest(".tp-caption"),t&&a.css("fontSize")===t.css("fontSize")&&(n=!0)),i.basealign=a.data("basealign")||"grid",i.fontSize=n?void 0===t.data("fontsize")?parseInt(t.css("fontSize"),0)||0:t.data("fontsize"):void 0===a.data("fontsize")?parseInt(a.css("fontSize"),0)||0:a.data("fontsize"),i.fontWeight=n?void 0===t.data("fontweight")?parseInt(t.css("fontWeight"),0)||0:t.data("fontweight"):void 0===a.data("fontweight")?parseInt(a.css("fontWeight"),0)||0:a.data("fontweight"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whitespace")||"normal":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whitespace")||"normal":a.data("whitespace"),i.zIndex=n?void 0===t.data("zIndex")?t.css("zIndex")||"inherit":t.data("zIndex"):void 0===a.data("zIndex")?a.css("zIndex")||"inherit":a.data("zIndex"),-1!==jQuery.inArray(a.data("layertype"),["video","image","audio"])||a.is("img")?i.lineHeight=0:i.lineHeight=n?void 0===t.data("lineheight")?parseInt(t.css("lineHeight"),0)||0:t.data("lineheight"):void 0===a.data("lineheight")?parseInt(a.css("lineHeight"),0)||0:a.data("lineheight"),i.letterSpacing=n?void 0===t.data("letterspacing")?parseFloat(t.css("letterSpacing"),0)||0:t.data("letterspacing"):void 0===a.data("letterspacing")?parseFloat(a.css("letterSpacing"))||0:a.data("letterspacing"),i.paddingTop=void 0===a.data("paddingtop")?parseInt(a.css("paddingTop"),0)||0:a.data("paddingtop"),i.paddingBottom=void 0===a.data("paddingbottom")?parseInt(a.css("paddingBottom"),0)||0:a.data("paddingbottom"),i.paddingLeft=void 0===a.data("paddingleft")?parseInt(a.css("paddingLeft"),0)||0:a.data("paddingleft"),i.paddingRight=void 0===a.data("paddingright")?parseInt(a.css("paddingRight"),0)||0:a.data("paddingright"),i.marginTop=void 0===a.data("margintop")?parseInt(a.css("marginTop"),0)||0:a.data("margintop"),i.marginBottom=void 0===a.data("marginbottom")?parseInt(a.css("marginBottom"),0)||0:a.data("marginbottom"),i.marginLeft=void 0===a.data("marginleft")?parseInt(a.css("marginLeft"),0)||0:a.data("marginleft"),i.marginRight=void 0===a.data("marginright")?parseInt(a.css("marginRight"),0)||0:a.data("marginright"),i.borderTopWidth=void 0===a.data("bordertopwidth")?parseInt(a.css("borderTopWidth"),0)||0:a.data("bordertopwidth"),i.borderBottomWidth=void 0===a.data("borderbottomwidth")?parseInt(a.css("borderBottomWidth"),0)||0:a.data("borderbottomwidth"),i.borderLeftWidth=void 0===a.data("borderleftwidth")?parseInt(a.css("borderLeftWidth"),0)||0:a.data("borderleftwidth"),i.borderRightWidth=void 0===a.data("borderrightwidth")?parseInt(a.css("borderRightWidth"),0)||0:a.data("borderrightwidth"),"rekursive"!=e){if(i.color=void 0===a.data("color")?"nopredefinedcolor":a.data("color"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whiteSpace")||"nowrap":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whiteSpace")||"nowrap":a.data("whitespace"),i.minWidth=void 0===a.data("width")?parseInt(a.css("minWidth"),0)||0:a.data("width"),i.minHeight=void 0===a.data("height")?parseInt(a.css("minHeight"),0)||0:a.data("height"),void 0!=a.data("videowidth")&&void 0!=a.data("videoheight")){var o=a.data("videowidth"),r=a.data("videoheight");o="100%"===o?"none":o,r="100%"===r?"none":r,a.data("width",o),a.data("height",r)}i.maxWidth=void 0===a.data("width")?parseInt(a.css("maxWidth"),0)||"none":a.data("width"),i.maxHeight=void 0===a.data("height")?parseInt(a.css("maxHeight"),0)||"none":a.data("height"),i.wan=void 0===a.data("wan")?parseInt(a.css("-webkit-transition"),0)||"none":a.data("wan"),i.moan=void 0===a.data("moan")?parseInt(a.css("-moz-animation-transition"),0)||"none":a.data("moan"),i.man=void 0===a.data("man")?parseInt(a.css("-ms-animation-transition"),0)||"none":a.data("man"),i.ani=void 0===a.data("ani")?parseInt(a.css("transition"),0)||"none":a.data("ani")}return i.styleProps=a.css(["background-color","border-top-color","border-bottom-color","border-right-color","border-left-color","border-top-style","border-bottom-style","border-left-style","border-right-style","border-left-width","border-right-width","border-bottom-width","border-top-width","color","text-decoration","font-style","borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]),i},u=function(a,e){var t=new Object;return a&&jQuery.each(a,function(i,n){t[i]=c(n,e)[e.curWinRange]||a[i]}),t},f=function(a,e,t,i){return a=jQuery.isNumeric(a)?a*e+"px":a,a="full"===a?i:"auto"===a||"none"===a?t:a},w=function(a,e,t,i){var n;try{if("BR"==a[0].nodeName||"br"==a[0].tagName)return!1}catch(o){}void 0===a.data("cssobj")?(n=v(a,t),a.data("cssobj",n)):n=a.data("cssobj");var r=u(n,e),d=e.bw,s=e.bh;if("off"===i&&(d=1,s=1),"auto"==r.lineHeight&&(r.lineHeight=r.fontSize+4),!a.hasClass("tp-splitted")){a.css("-webkit-transition","none"),a.css("-moz-transition","none"),a.css("-ms-transition","none"),a.css("transition","none");var l=void 0!==a.data("transform_hover")||void 0!==a.data("style_hover");if(l&&punchgs.TweenLite.set(a,r.styleProps),punchgs.TweenLite.set(a,{fontSize:Math.round(r.fontSize*d)+"px",fontWeight:r.fontWeight,letterSpacing:Math.floor(r.letterSpacing*d)+"px",paddingTop:Math.round(r.paddingTop*s)+"px",paddingBottom:Math.round(r.paddingBottom*s)+"px",paddingLeft:Math.round(r.paddingLeft*d)+"px",paddingRight:Math.round(r.paddingRight*d)+"px",marginTop:r.marginTop*s+"px",marginBottom:r.marginBottom*s+"px",marginLeft:r.marginLeft*d+"px",marginRight:r.marginRight*d+"px",borderTopWidth:Math.round(r.borderTopWidth*s)+"px",borderBottomWidth:Math.round(r.borderBottomWidth*s)+"px",borderLeftWidth:Math.round(r.borderLeftWidth*d)+"px",borderRightWidth:Math.round(r.borderRightWidth*d)+"px",lineHeight:Math.round(r.lineHeight*s)+"px",overwrite:"auto"}),"rekursive"!=t){var p="slide"==r.basealign?e.ulw:e.gridwidth[e.curWinRange],h="slide"==r.basealign?e.ulh:e.gridheight[e.curWinRange],c=f(r.maxWidth,d,"none",p),g=f(r.maxHeight,s,"none",h),m=f(r.minWidth,d,"0px",p),w=f(r.minHeight,s,"0px",h);if(punchgs.TweenLite.set(a,{maxWidth:c,maxHeight:g,minWidth:m,minHeight:w,whiteSpace:r.whiteSpace,overwrite:"auto"}),"nopredefinedcolor"!=r.color&&punchgs.TweenLite.set(a,{color:r.color,overwrite:"auto"}),void 0!=a.data("svg_src")){var y="nopredefinedcolor"!=r.color&&void 0!=r.color?r.color:void 0!=r.css&&"nopredefinedcolor"!=r.css.color&&void 0!=r.css.color?r.css.color:void 0!=r.styleProps.color?r.styleProps.color:void 0!=r.styleProps.css&&void 0!=r.styleProps.css.color?r.styleProps.css.color:!1;0!=y&&punchgs.TweenLite.set(a.find("svg"),{fill:y,overwrite:"auto"})}}setTimeout(function(){a.css("-webkit-transition",a.data("wan")),a.css("-moz-transition",a.data("moan")),a.css("-ms-transition",a.data("man")),a.css("transition",a.data("ani"))},30)}},y=function(a,e){if(a.hasClass("rs-pendulum")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?-20:a.data("startdeg"),i=void 0==a.data("enddeg")?20:a.data("enddeg"),n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("ease");t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:i,transformOrigin:o},{rotation:t,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-rotate")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?0:a.data("startdeg"),i=void 0==a.data("enddeg")?360:a.data("enddeg");n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing"),t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-slideloop")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var d=void 0==a.data("xs")?0:a.data("xs"),s=void 0==a.data("ys")?0:a.data("ys"),l=void 0==a.data("xe")?0:a.data("xe"),p=void 0==a.data("ye")?0:a.data("ye"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");d*=e,s*=e,l*=e,p*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:d,y:s},{x:l,y:p,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:l,y:p},{x:d,y:s,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-pulse")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var h=void 0==a.data("zoomstart")?0:a.data("zoomstart"),c=void 0==a.data("zoomend")?0:a.data("zoomend"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:h},{scale:c,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:c},{scale:h,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-wave")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var g=void 0==a.data("angle")?10:parseInt(a.data("angle"),0),m=void 0==a.data("radius")?10:parseInt(a.data("radius"),0),n=void 0==a.data("speed")?-20:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),v=o.split(" "),u=new Object;v.length>=1?(u.x=v[0],u.y=v[1]):(u.x="50%",u.y="50%"),g*=e,m*=e;var f=0-a.height()/2+m*(-1+parseInt(u.y,0)/100),w=a.width()*(-.5+parseInt(u.x,0)/100),y={a:0,ang:g,element:a,unit:m,xoffset:w,yoffset:f};a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(y,n,{
a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var a=(y.a+y.ang)*(Math.PI/180);punchgs.TweenLite.to(y.element,.1,{force3D:"auto",x:y.xoffset+Math.cos(a)*y.unit,y:y.unit*(1-Math.sin(a))+y.yoffset/.5})},onComplete:function(){a.data("loop-timeline").restart()}}))}},b=function(a){a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var a=jQuery(this);void 0!=a.data("loop-timeline")&&(a.data("loop-timeline").pause(),a.data("loop-timeline",null))})}}(jQuery);;
/*****************************************************************************************************
 * jquery.themepunch.revmigrate.js - jQuery Plugin for Revolution Slider Migration from 4.x to 5.0   
 * @version: 1.0.2 (20.01.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
*****************************************************************************************************/
!function(t){var a=jQuery.fn.revolution;jQuery.extend(!0,a,{migration:function(t,a){return a=o(a),e(t,a),a}});var o=function(t){if(t.parallaxLevels||t.parallaxBgFreeze){var a=new Object;a.type=t.parallax,a.levels=t.parallaxLevels,a.bgparallax="on"==t.parallaxBgFreeze?"off":"on",a.disable_onmobile=t.parallaxDisableOnMobile,t.parallax=a}if(void 0===t.disableProgressBar&&(t.disableProgressBar=t.hideTimerBar||"off"),(t.startwidth||t.startheight)&&(t.gridwidth=t.startwidth,t.gridheight=t.startheight),void 0===t.sliderType&&(t.sliderType="standard"),"on"===t.fullScreen&&(t.sliderLayout="fullscreen"),"on"===t.fullWidth&&(t.sliderLayout="fullwidth"),void 0===t.sliderLayout&&(t.sliderLayout="auto"),void 0===t.navigation){var o=new Object;if("solo"==t.navigationArrows||"nextto"==t.navigationArrows){var e=new Object;e.enable=!0,e.style=t.navigationStyle||"",e.hide_onmobile="on"===t.hideArrowsOnMobile?!0:!1,e.hide_onleave=t.hideThumbs>0?!0:!1,e.hide_delay=t.hideThumbs>0?t.hideThumbs:200,e.hide_delay_mobile=t.hideNavDelayOnMobile||1500,e.hide_under=0,e.tmp="",e.left={h_align:t.soloArrowLeftHalign,v_align:t.soloArrowLeftValign,h_offset:t.soloArrowLeftHOffset,v_offset:t.soloArrowLeftVOffset},e.right={h_align:t.soloArrowRightHalign,v_align:t.soloArrowRightValign,h_offset:t.soloArrowRightHOffset,v_offset:t.soloArrowRightVOffset},o.arrows=e}if("bullet"==t.navigationType){var r=new Object;r.style=t.navigationStyle||"",r.enable=!0,r.hide_onmobile="on"===t.hideArrowsOnMobile?!0:!1,r.hide_onleave=t.hideThumbs>0?!0:!1,r.hide_delay=t.hideThumbs>0?t.hideThumbs:200,r.hide_delay_mobile=t.hideNavDelayOnMobile||1500,r.hide_under=0,r.direction="horizontal",r.h_align=t.navigationHAlign||"center",r.v_align=t.navigationVAlign||"bottom",r.space=5,r.h_offset=t.navigationHOffset||0,r.v_offset=t.navigationVOffset||20,r.tmp='<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',o.bullets=r}if("thumb"==t.navigationType){var i=new Object;i.style=t.navigationStyle||"",i.enable=!0,i.width=t.thumbWidth||100,i.height=t.thumbHeight||50,i.min_width=t.thumbWidth||100,i.wrapper_padding=2,i.wrapper_color="#f5f5f5",i.wrapper_opacity=1,i.visibleAmount=t.thumbAmount||3,i.hide_onmobile="on"===t.hideArrowsOnMobile?!0:!1,i.hide_onleave=t.hideThumbs>0?!0:!1,i.hide_delay=t.hideThumbs>0?t.hideThumbs:200,i.hide_delay_mobile=t.hideNavDelayOnMobile||1500,i.hide_under=0,i.direction="horizontal",i.span=!1,i.position="inner",i.space=2,i.h_align=t.navigationHAlign||"center",i.v_align=t.navigationVAlign||"bottom",i.h_offset=t.navigationHOffset||0,i.v_offset=t.navigationVOffset||20,i.tmp='<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',o.thumbnails=i}t.navigation=o,t.navigation.keyboardNavigation=t.keyboardNavigation||"on",t.navigation.onHoverStop=t.onHoverStop||"on",t.navigation.touch={touchenabled:t.touchenabled||"on",swipe_treshold:t.swipe_treshold||75,swipe_min_touches:t.swipe_min_touches||1,drag_block_vertical:t.drag_block_vertical||!1}}return void 0==t.fallbacks&&(t.fallbacks={isJoomla:t.isJoomla||!1,panZoomDisableOnMobile:t.parallaxDisableOnMobile||"off",simplifyAll:t.simplifyAll||"on",nextSlideOnWindowFocus:t.nextSlideOnWindowFocus||"off",disableFocusListener:t.disableFocusListener||!0}),t},e=function(t,a){var o=new Object,e=t.width(),r=t.height();o.skewfromleftshort="x:-50;skX:85;o:0",o.skewfromrightshort="x:50;skX:-85;o:0",o.sfl="x:-50;o:0",o.sfr="x:50;o:0",o.sft="y:-50;o:0",o.sfb="y:50;o:0",o.skewfromleft="x:top;skX:85;o:0",o.skewfromright="x:bottom;skX:-85;o:0",o.lfl="x:top;o:0",o.lfr="x:bottom;o:0",o.lft="y:left;o:0",o.lfb="y:right;o:0",o.fade="o:0";720*Math.random()-360;t.find(".tp-caption").each(function(){var t=jQuery(this),a=(Math.random()*(2*e)-e,Math.random()*(2*r)-r,3*Math.random(),720*Math.random()-360,70*Math.random()-35,70*Math.random()-35,t.attr("class"));o.randomrotate="x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;",a.match("randomrotate")?t.data("transform_in",o.randomrotate):a.match(/\blfl\b/)?t.data("transform_in",o.lfl):a.match(/\blfr\b/)?t.data("transform_in",o.lfr):a.match(/\blft\b/)?t.data("transform_in",o.lft):a.match(/\blfb\b/)?t.data("transform_in",o.lfb):a.match(/\bsfl\b/)?t.data("transform_in",o.sfl):a.match(/\bsfr\b/)?t.data("transform_in",o.sfr):a.match(/\bsft\b/)?t.data("transform_in",o.sft):a.match(/\bsfb\b/)?t.data("transform_in",o.sfb):a.match(/\bskewfromleftshort\b/)?t.data("transform_in",o.skewfromleftshort):a.match(/\bskewfromrightshort\b/)?t.data("transform_in",o.skewfromrightshort):a.match(/\bskewfromleft\b/)?t.data("transform_in",o.skewfromleft):a.match(/\bskewfromright\b/)?t.data("transform_in",o.skewfromright):a.match(/\bfade\b/)&&t.data("transform_in",o.fade),a.match(/\brandomrotateout\b/)?t.data("transform_out",o.randomrotate):a.match(/\bltl\b/)?t.data("transform_out",o.lfl):a.match(/\bltr\b/)?t.data("transform_out",o.lfr):a.match(/\bltt\b/)?t.data("transform_out",o.lft):a.match(/\bltb\b/)?t.data("transform_out",o.lfb):a.match(/\bstl\b/)?t.data("transform_out",o.sfl):a.match(/\bstr\b/)?t.data("transform_out",o.sfr):a.match(/\bstt\b/)?t.data("transform_out",o.sft):a.match(/\bstb\b/)?t.data("transform_out",o.sfb):a.match(/\bskewtoleftshortout\b/)?t.data("transform_out",o.skewfromleftshort):a.match(/\bskewtorightshortout\b/)?t.data("transform_out",o.skewfromrightshort):a.match(/\bskewtoleftout\b/)?t.data("transform_out",o.skewfromleft):a.match(/\bskewtorightout\b/)?t.data("transform_out",o.skewfromright):a.match(/\bfadeout\b/)&&t.data("transform_out",o.fade),void 0!=t.data("customin")&&t.data("transform_in",t.data("customin")),void 0!=t.data("customout")&&t.data("transform_out",t.data("customout"))})}}(jQuery);;
/********************************************
 * REVOLUTION 5.2 EXTENSION - NAVIGATION
 * @version: 1.2.4 (10.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(t){var e=jQuery.fn.revolution,i=e.is_mobile();jQuery.extend(!0,e,{hideUnHideNav:function(t){var e=t.c.width(),i=t.navigation.arrows,a=t.navigation.bullets,n=t.navigation.thumbnails,r=t.navigation.tabs;p(i)&&T(t.c.find(".tparrows"),i.hide_under,e,i.hide_over),p(a)&&T(t.c.find(".tp-bullets"),a.hide_under,e,a.hide_over),p(n)&&T(t.c.parent().find(".tp-thumbs"),n.hide_under,e,n.hide_over),p(r)&&T(t.c.parent().find(".tp-tabs"),r.hide_under,e,r.hide_over),y(t)},resizeThumbsTabs:function(t,e){if(t.navigation&&t.navigation.tabs.enable||t.navigation&&t.navigation.thumbnails.enable){var i=(jQuery(window).width()-480)/500,a=new punchgs.TimelineLite,r=t.navigation.tabs,s=t.navigation.thumbnails,o=t.navigation.bullets;if(a.pause(),i=i>1?1:0>i?0:i,p(r)&&(e||r.width>r.min_width)&&n(i,a,t.c,r,t.slideamount,"tab"),p(s)&&(e||s.width>s.min_width)&&n(i,a,t.c,s,t.slideamount,"thumb"),p(o)&&e){var d=t.c.find(".tp-bullets");d.find(".tp-bullet").each(function(t){var e=jQuery(this),i=t+1,a=e.outerWidth()+parseInt(void 0===o.space?0:o.space,0),n=e.outerHeight()+parseInt(void 0===o.space?0:o.space,0);"vertical"===o.direction?(e.css({top:(i-1)*n+"px",left:"0px"}),d.css({height:(i-1)*n+e.outerHeight(),width:e.outerWidth()})):(e.css({left:(i-1)*a+"px",top:"0px"}),d.css({width:(i-1)*a+e.outerWidth(),height:e.outerHeight()}))})}a.play(),y(t)}return!0},updateNavIndexes:function(t){function i(t){a.find(t).lenght>0&&a.find(t).each(function(t){jQuery(this).data("liindex",t)})}var a=t.c;i(".tp-tab"),i(".tp-bullet"),i(".tp-thumb"),e.resizeThumbsTabs(t,!0),e.manageNavigation(t)},manageNavigation:function(t){var i=e.getHorizontalOffset(t.c.parent(),"left"),n=e.getHorizontalOffset(t.c.parent(),"right");p(t.navigation.bullets)&&("fullscreen"!=t.sliderLayout&&"fullwidth"!=t.sliderLayout&&(t.navigation.bullets.h_offset_old=void 0===t.navigation.bullets.h_offset_old?t.navigation.bullets.h_offset:t.navigation.bullets.h_offset_old,t.navigation.bullets.h_offset="center"===t.navigation.bullets.h_align?t.navigation.bullets.h_offset_old+i/2-n/2:t.navigation.bullets.h_offset_old+i-n),b(t.c.find(".tp-bullets"),t.navigation.bullets,t)),p(t.navigation.thumbnails)&&b(t.c.parent().find(".tp-thumbs"),t.navigation.thumbnails,t),p(t.navigation.tabs)&&b(t.c.parent().find(".tp-tabs"),t.navigation.tabs,t),p(t.navigation.arrows)&&("fullscreen"!=t.sliderLayout&&"fullwidth"!=t.sliderLayout&&(t.navigation.arrows.left.h_offset_old=void 0===t.navigation.arrows.left.h_offset_old?t.navigation.arrows.left.h_offset:t.navigation.arrows.left.h_offset_old,t.navigation.arrows.left.h_offset="right"===t.navigation.arrows.left.h_align?t.navigation.arrows.left.h_offset_old+n:t.navigation.arrows.left.h_offset_old+i,t.navigation.arrows.right.h_offset_old=void 0===t.navigation.arrows.right.h_offset_old?t.navigation.arrows.right.h_offset:t.navigation.arrows.right.h_offset_old,t.navigation.arrows.right.h_offset="right"===t.navigation.arrows.right.h_align?t.navigation.arrows.right.h_offset_old+n:t.navigation.arrows.right.h_offset_old+i),b(t.c.find(".tp-leftarrow.tparrows"),t.navigation.arrows.left,t),b(t.c.find(".tp-rightarrow.tparrows"),t.navigation.arrows.right,t)),p(t.navigation.thumbnails)&&a(t.c.parent().find(".tp-thumbs"),t.navigation.thumbnails),p(t.navigation.tabs)&&a(t.c.parent().find(".tp-tabs"),t.navigation.tabs)},createNavigation:function(t,e){var n=t.parent(),r=e.navigation.arrows,d=e.navigation.bullets,u=e.navigation.thumbnails,f=e.navigation.tabs,m=p(r),b=p(d),_=p(u),y=p(f);s(t,e),o(t,e),m&&v(t,r,e),e.li.each(function(i){var a=jQuery(e.li[e.li.length-1-i]),n=jQuery(this);b&&(e.navigation.bullets.rtl?w(t,d,a,e):w(t,d,n,e)),_&&(e.navigation.thumbnails.rtl?x(t,u,a,"tp-thumb",e):x(t,u,n,"tp-thumb",e)),y&&(e.navigation.tabs.rtl?x(t,f,a,"tp-tab",e):x(t,f,n,"tp-tab",e))}),t.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){var i=0==t.find(".next-revslide").length?t.find(".active-revslide").data("index"):t.find(".next-revslide").data("index");t.find(".tp-bullet").each(function(){var t=jQuery(this);t.data("liref")===i?t.addClass("selected"):t.removeClass("selected")}),n.find(".tp-thumb, .tp-tab").each(function(){var t=jQuery(this);t.data("liref")===i?(t.addClass("selected"),t.hasClass("tp-tab")?a(n.find(".tp-tabs"),f):a(n.find(".tp-thumbs"),u)):t.removeClass("selected")});var s=0,o=!1;e.thumbs&&jQuery.each(e.thumbs,function(t,e){s=o===!1?t:s,o=e.id===i||t===i?!0:o});var d=s>0?s-1:e.slideamount-1,l=s+1==e.slideamount?0:s+1;if(r.enable===!0){var h=r.tmp;if(jQuery.each(e.thumbs[d].params,function(t,e){h=h.replace(e.from,e.to)}),r.left.j.html(h),h=r.tmp,l>e.slideamount)return;jQuery.each(e.thumbs[l].params,function(t,e){h=h.replace(e.from,e.to)}),r.right.j.html(h),punchgs.TweenLite.set(r.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+e.thumbs[d].src+")"}),punchgs.TweenLite.set(r.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+e.thumbs[l].src+")"})}}),h(r),h(d),h(u),h(f),n.on("mouseenter mousemove",function(){n.hasClass("tp-mouseover")||(n.addClass("tp-mouseover"),punchgs.TweenLite.killDelayedCallsTo(g),m&&r.hide_onleave&&g(n.find(".tparrows"),r,"show"),b&&d.hide_onleave&&g(n.find(".tp-bullets"),d,"show"),_&&u.hide_onleave&&g(n.find(".tp-thumbs"),u,"show"),y&&f.hide_onleave&&g(n.find(".tp-tabs"),f,"show"),i&&(n.removeClass("tp-mouseover"),c(t,e)))}),n.on("mouseleave",function(){n.removeClass("tp-mouseover"),c(t,e)}),m&&r.hide_onleave&&g(n.find(".tparrows"),r,"hide",0),b&&d.hide_onleave&&g(n.find(".tp-bullets"),d,"hide",0),_&&u.hide_onleave&&g(n.find(".tp-thumbs"),u,"hide",0),y&&f.hide_onleave&&g(n.find(".tp-tabs"),f,"hide",0),_&&l(n.find(".tp-thumbs"),e),y&&l(n.find(".tp-tabs"),e),"carousel"===e.sliderType&&l(t,e,!0),"on"==e.navigation.touch.touchenabled&&l(t,e,"swipebased")}});var a=function(t,e){var i=(t.hasClass("tp-thumbs")?".tp-thumbs":".tp-tabs",t.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),a=t.hasClass("tp-thumbs")?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",n=t.hasClass("tp-thumbs")?".tp-thumb":".tp-tab",r=t.find(i),s=r.find(a),o=e.direction,d="vertical"===o?r.find(n).first().outerHeight(!0)+e.space:r.find(n).first().outerWidth(!0)+e.space,l="vertical"===o?r.height():r.width(),h=parseInt(r.find(n+".selected").data("liindex"),0),p=l/d,u="vertical"===o?r.height():r.width(),c=0-h*d,g="vertical"===o?s.height():s.width(),v=0-(g-u)>c?0-(g-u):v>0?0:c,f=s.data("offset");p>2&&(v=0>=c-(f+d)?0-d>c-(f+d)?f:v+d:v,v=d>c-d+f+l&&c+(Math.round(p)-2)*d<f?c+(Math.round(p)-2)*d:v),v=0-(g-u)>v?0-(g-u):v>0?0:v,"vertical"!==o&&r.width()>=s.width()&&(v=0),"vertical"===o&&r.height()>=s.height()&&(v=0),t.hasClass("dragged")||("vertical"===o?s.data("tmmove",punchgs.TweenLite.to(s,.5,{top:v+"px",ease:punchgs.Power3.easeInOut})):s.data("tmmove",punchgs.TweenLite.to(s,.5,{left:v+"px",ease:punchgs.Power3.easeInOut})),s.data("offset",v))},n=function(t,e,i,a,n,r){var s=i.parent().find(".tp-"+r+"s"),o=s.find(".tp-"+r+"s-inner-wrapper"),d=s.find(".tp-"+r+"-mask"),l=a.width*t<a.min_width?a.min_width:Math.round(a.width*t),h=Math.round(l/a.width*a.height),p="vertical"===a.direction?l:l*n+a.space*(n-1),u="vertical"===a.direction?h*n+a.space*(n-1):h,c="vertical"===a.direction?{width:l+"px"}:{height:h+"px"};e.add(punchgs.TweenLite.set(s,c)),e.add(punchgs.TweenLite.set(o,{width:p+"px",height:u+"px"})),e.add(punchgs.TweenLite.set(d,{width:p+"px",height:u+"px"}));var g=o.find(".tp-"+r);return g&&jQuery.each(g,function(t,i){"vertical"===a.direction?e.add(punchgs.TweenLite.set(i,{top:t*(h+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"})):"horizontal"===a.direction&&e.add(punchgs.TweenLite.set(i,{left:t*(l+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"}))}),e},r=function(t){var e=0,i=0,a=0,n=0,r=1,s=1,o=1;return"detail"in t&&(i=t.detail),"wheelDelta"in t&&(i=-t.wheelDelta/120),"wheelDeltaY"in t&&(i=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=i,i=0),a=e*r,n=i*r,"deltaY"in t&&(n=t.deltaY),"deltaX"in t&&(a=t.deltaX),(a||n)&&t.deltaMode&&(1==t.deltaMode?(a*=s,n*=s):(a*=o,n*=o)),a&&!e&&(e=1>a?-1:1),n&&!i&&(i=1>n?-1:1),n=navigator.userAgent.match(/mozilla/i)?10*n:n,(n>300||-300>n)&&(n/=10),{spinX:e,spinY:i,pixelX:a,pixelY:n}},s=function(t,i){"on"===i.navigation.keyboardNavigation&&jQuery(document).keydown(function(a){("horizontal"==i.navigation.keyboard_direction&&39==a.keyCode||"vertical"==i.navigation.keyboard_direction&&40==a.keyCode)&&(i.sc_indicator="arrow",i.sc_indicator_dir=0,e.callingNewSlide(i,t,1)),("horizontal"==i.navigation.keyboard_direction&&37==a.keyCode||"vertical"==i.navigation.keyboard_direction&&38==a.keyCode)&&(i.sc_indicator="arrow",i.sc_indicator_dir=1,e.callingNewSlide(i,t,-1))})},o=function(t,i){if("on"===i.navigation.mouseScrollNavigation||"carousel"===i.navigation.mouseScrollNavigation){i.isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),i.isSafari=!!navigator.userAgent.match(/safari/i),i.ischrome=!!navigator.userAgent.match(/chrome/i);var a=i.ischrome?-49:i.isIEEleven||i.isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,n=i.ischrome?49:i.isIEEleven||i.isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;t.on("mousewheel DOMMouseScroll",function(s){var o=r(s.originalEvent),d=t.find(".tp-revslider-slidesli.active-revslide").index(),l=t.find(".tp-revslider-slidesli.processing-revslide").index(),h=-1!=d&&0==d||-1!=l&&0==l?!0:!1,p=-1!=d&&d==i.slideamount-1||1!=l&&l==i.slideamount-1?!0:!1,u=!0;"carousel"==i.navigation.mouseScrollNavigation&&(h=p=!1),-1==l?o.pixelY<a?(h||(i.sc_indicator="arrow","reverse"!==i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=0,e.callingNewSlide(i,t,-1)),u=!1),p||(i.sc_indicator="arrow","reverse"===i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=1,e.callingNewSlide(i,t,1)),u=!1)):o.pixelY>n&&(p||(i.sc_indicator="arrow","reverse"!==i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=1,e.callingNewSlide(i,t,1)),u=!1),h||(i.sc_indicator="arrow","reverse"===i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=0,e.callingNewSlide(i,t,-1)),u=!1)):u=!1;var c=i.c.offset().top-jQuery("body").scrollTop(),g=c+i.c.height();return"carousel"!=i.navigation.mouseScrollNavigation?("reverse"!==i.navigation.mouseScrollReverse&&(c>0&&o.pixelY>0||g<jQuery(window).height()&&o.pixelY<0)&&(u=!0),"reverse"===i.navigation.mouseScrollReverse&&(0>c&&o.pixelY<0||g>jQuery(window).height()&&o.pixelY>0)&&(u=!0)):u=!1,0==u?(s.preventDefault(s),!1):void 0})}},d=function(t,e,a){return t=i?jQuery(a.target).closest("."+t).length||jQuery(a.srcElement).closest("."+t).length:jQuery(a.toElement).closest("."+t).length||jQuery(a.originalTarget).closest("."+t).length,t===!0||1===t?1:0},l=function(t,a,n){t.data("opt",a);var r=a.carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),r.Limit="endless";var s=(i||"Firefox"===e.get_browser(),t),o="vertical"===a.navigation.thumbnails.direction||"vertical"===a.navigation.tabs.direction?"none":"vertical",l=a.navigation.touch.swipe_direction||"horizontal";o="swipebased"==n&&"vertical"==l?"none":n?"vertical":o,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults=new Object),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",s.swipetp({allowPageScroll:o,triggerOnTouchLeave:!0,treshold:a.navigation.touch.swipe_treshold,fingers:a.navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(i,n,s,o,h,p,u){var c=d("rev_slider_wrapper",t,i),g=d("tp-thumbs",t,i),v=d("tp-tabs",t,i),f=jQuery(this).attr("class"),m=f.match(/tp-tabs|tp-thumb/gi)?!0:!1;if("carousel"===a.sliderType&&(("move"===n||"end"===n||"cancel"==n)&&a.dragStartedOverSlider&&!a.dragStartedOverThumbs&&!a.dragStartedOverTabs||"start"===n&&c>0&&0===g&&0===v))switch(a.dragStartedOverSlider=!0,o=s&&s.match(/left|up/g)?Math.round(-1*o):o=Math.round(1*o),n){case"start":void 0!==r.positionanim&&(r.positionanim.kill(),r.slide_globaloffset="off"===r.infinity?r.slide_offset:e.simp(r.slide_offset,r.maxwidth)),r.overpull="none",r.wrap.addClass("dragged");break;case"move":if(r.slide_offset="off"===r.infinity?r.slide_globaloffset+o:e.simp(r.slide_globaloffset+o,r.maxwidth),"off"===r.infinity){var b="center"===r.horizontal_align?(r.wrapwidth/2-r.slide_width/2-r.slide_offset)/r.slide_width:(0-r.slide_offset)/r.slide_width;"none"!==r.overpull&&0!==r.overpull||!(0>b||b>a.slideamount-1)?b>=0&&b<=a.slideamount-1&&(b>=0&&o>r.overpull||b<=a.slideamount-1&&o<r.overpull)&&(r.overpull=0):r.overpull=o,r.slide_offset=0>b?r.slide_offset+(r.overpull-o)/1.1+Math.sqrt(Math.abs((r.overpull-o)/1.1)):b>a.slideamount-1?r.slide_offset+(r.overpull-o)/1.1-Math.sqrt(Math.abs((r.overpull-o)/1.1)):r.slide_offset}e.organiseCarousel(a,s,!0,!0);break;case"end":case"cancel":r.slide_globaloffset=r.slide_offset,r.wrap.removeClass("dragged"),e.carouselToEvalPosition(a,s),a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1}else{if(("move"!==n&&"end"!==n&&"cancel"!=n||a.dragStartedOverSlider||!a.dragStartedOverThumbs&&!a.dragStartedOverTabs)&&!("start"===n&&c>0&&(g>0||v>0))){if("end"==n&&!m){if(a.sc_indicator="arrow","horizontal"==l&&"left"==s||"vertical"==l&&"up"==s)return a.sc_indicator_dir=0,e.callingNewSlide(a,a.c,1),!1;if("horizontal"==l&&"right"==s||"vertical"==l&&"down"==s)return a.sc_indicator_dir=1,e.callingNewSlide(a,a.c,-1),!1}return a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1,!0}g>0&&(a.dragStartedOverThumbs=!0),v>0&&(a.dragStartedOverTabs=!0);var w=a.dragStartedOverThumbs?".tp-thumbs":".tp-tabs",_=a.dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",x=a.dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",y=a.dragStartedOverThumbs?".tp-thumb":".tp-tab",T=a.dragStartedOverThumbs?a.navigation.thumbnails:a.navigation.tabs;o=s&&s.match(/left|up/g)?Math.round(-1*o):o=Math.round(1*o);var S=t.parent().find(_),j=S.find(x),C=T.direction,L="vertical"===C?j.height():j.width(),Q="vertical"===C?S.height():S.width(),k="vertical"===C?S.find(y).first().outerHeight(!0)+T.space:S.find(y).first().outerWidth(!0)+T.space,I=void 0===j.data("offset")?0:parseInt(j.data("offset"),0),O=0;switch(n){case"start":t.parent().find(w).addClass("dragged"),I="vertical"===C?j.position().top:j.position().left,j.data("offset",I),j.data("tmmove")&&j.data("tmmove").pause();break;case"move":if(Q>=L)return!1;O=I+o,O=O>0?"horizontal"===C?O-j.width()*(O/j.width()*O/j.width()):O-j.height()*(O/j.height()*O/j.height()):O;var H="vertical"===C?0-(j.height()-S.height()):0-(j.width()-S.width());O=H>O?"horizontal"===C?O+j.width()*(O-H)/j.width()*(O-H)/j.width():O+j.height()*(O-H)/j.height()*(O-H)/j.height():O,"vertical"===C?punchgs.TweenLite.set(j,{top:O+"px"}):punchgs.TweenLite.set(j,{left:O+"px"});break;case"end":case"cancel":if(m)return O=I+o,O="vertical"===C?O<0-(j.height()-S.height())?0-(j.height()-S.height()):O:O<0-(j.width()-S.width())?0-(j.width()-S.width()):O,O=O>0?0:O,O=Math.abs(o)>k/10?0>=o?Math.floor(O/k)*k:Math.ceil(O/k)*k:0>o?Math.ceil(O/k)*k:Math.floor(O/k)*k,O="vertical"===C?O<0-(j.height()-S.height())?0-(j.height()-S.height()):O:O<0-(j.width()-S.width())?0-(j.width()-S.width()):O,O=O>0?0:O,"vertical"===C?punchgs.TweenLite.to(j,.5,{top:O+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(j,.5,{left:O+"px",ease:punchgs.Power3.easeOut}),O=O?O:"vertical"===C?j.position().top:j.position().left,j.data("offset",O),j.data("distance",o),setTimeout(function(){a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1},100),t.parent().find(w).removeClass("dragged"),!1}}}})},h=function(t){t.hide_delay=jQuery.isNumeric(parseInt(t.hide_delay,0))?t.hide_delay/1e3:.2,t.hide_delay_mobile=jQuery.isNumeric(parseInt(t.hide_delay_mobile,0))?t.hide_delay_mobile/1e3:.2},p=function(t){return t&&t.enable},u=function(t){return t&&t.enable&&t.hide_onleave===!0&&(void 0===t.position?!0:!t.position.match(/outer/g))},c=function(t,e){var a=t.parent();u(e.navigation.arrows)&&punchgs.TweenLite.delayedCall(i?e.navigation.arrows.hide_delay_mobile:e.navigation.arrows.hide_delay,g,[a.find(".tparrows"),e.navigation.arrows,"hide"]),u(e.navigation.bullets)&&punchgs.TweenLite.delayedCall(i?e.navigation.bullets.hide_delay_mobile:e.navigation.bullets.hide_delay,g,[a.find(".tp-bullets"),e.navigation.bullets,"hide"]),u(e.navigation.thumbnails)&&punchgs.TweenLite.delayedCall(i?e.navigation.thumbnails.hide_delay_mobile:e.navigation.thumbnails.hide_delay,g,[a.find(".tp-thumbs"),e.navigation.thumbnails,"hide"]),u(e.navigation.tabs)&&punchgs.TweenLite.delayedCall(i?e.navigation.tabs.hide_delay_mobile:e.navigation.tabs.hide_delay,g,[a.find(".tp-tabs"),e.navigation.tabs,"hide"])},g=function(t,e,i,a){switch(a=void 0===a?.5:a,i){case"show":punchgs.TweenLite.to(t,a,{autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});break;case"hide":punchgs.TweenLite.to(t,a,{autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"})}},v=function(t,e,i){e.style=void 0===e.style?"":e.style,e.left.style=void 0===e.left.style?"":e.left.style,e.right.style=void 0===e.right.style?"":e.right.style,0===t.find(".tp-leftarrow.tparrows").length&&t.append('<div class="tp-leftarrow tparrows '+e.style+" "+e.left.style+'">'+e.tmp+"</div>"),0===t.find(".tp-rightarrow.tparrows").length&&t.append('<div class="tp-rightarrow tparrows '+e.style+" "+e.right.style+'">'+e.tmp+"</div>");var a=t.find(".tp-leftarrow.tparrows"),n=t.find(".tp-rightarrow.tparrows");e.rtl?(a.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=0,t.revnext()}),n.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=1,t.revprev()})):(n.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=0,t.revnext()}),a.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=1,t.revprev()})),e.right.j=t.find(".tp-rightarrow.tparrows"),e.left.j=t.find(".tp-leftarrow.tparrows"),e.padding_top=parseInt(i.carousel.padding_top||0,0),e.padding_bottom=parseInt(i.carousel.padding_bottom||0,0),b(a,e.left,i),b(n,e.right,i),e.left.opt=i,e.right.opt=i,("outer-left"==e.position||"outer-right"==e.position)&&(i.outernav=!0)},f=function(t,e,i){var a=t.outerHeight(!0),n=(t.outerWidth(!0),void 0==e.opt?0:0==i.conh?i.height:i.conh),r="layergrid"==e.container?"fullscreen"==i.sliderLayout?i.height/2-i.gridheight[i.curWinRange]*i.bh/2:"on"==i.autoHeight||void 0!=i.minHeight&&i.minHeight>0?n/2-i.gridheight[i.curWinRange]*i.bh/2:0:0,s="top"===e.v_align?{top:"0px",y:Math.round(e.v_offset+r)+"px"}:"center"===e.v_align?{top:"50%",y:Math.round(0-a/2+e.v_offset)+"px"}:{top:"100%",y:Math.round(0-(a+e.v_offset+r))+"px"};t.hasClass("outer-bottom")||punchgs.TweenLite.set(t,s)},m=function(t,e,i){var a=(t.outerHeight(!0),t.outerWidth(!0)),n="layergrid"==e.container?"carousel"===i.sliderType?0:i.width/2-i.gridwidth[i.curWinRange]*i.bw/2:0,r="left"===e.h_align?{left:"0px",x:Math.round(e.h_offset+n)+"px"}:"center"===e.h_align?{left:"50%",x:Math.round(0-a/2+e.h_offset)+"px"}:{left:"100%",x:Math.round(0-(a+e.h_offset+n))+"px"};punchgs.TweenLite.set(t,r)},b=function(t,e,i){var a=t.closest(".tp-simpleresponsive").length>0?t.closest(".tp-simpleresponsive"):t.closest(".tp-revslider-mainul").length>0?t.closest(".tp-revslider-mainul"):t.closest(".rev_slider_wrapper").length>0?t.closest(".rev_slider_wrapper"):t.parent().find(".tp-revslider-mainul"),n=a.width(),r=a.height();if(f(t,e,i),m(t,e,i),"outer-left"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout?"outer-right"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout||punchgs.TweenLite.set(t,{right:0-t.outerWidth()+"px",x:e.h_offset+"px"}):punchgs.TweenLite.set(t,{left:0-t.outerWidth()+"px",x:e.h_offset+"px"}),t.hasClass("tp-thumbs")||t.hasClass("tp-tabs")){var s=t.data("wr_padding"),o=t.data("maxw"),d=t.data("maxh"),l=t.hasClass("tp-thumbs")?t.find(".tp-thumb-mask"):t.find(".tp-tab-mask"),h=parseInt(e.padding_top||0,0),p=parseInt(e.padding_bottom||0,0);o>n&&"outer-left"!==e.position&&"outer-right"!==e.position?(punchgs.TweenLite.set(t,{left:"0px",x:0,maxWidth:n-2*s+"px"}),punchgs.TweenLite.set(l,{maxWidth:n-2*s+"px"})):(punchgs.TweenLite.set(t,{maxWidth:o+"px"}),punchgs.TweenLite.set(l,{maxWidth:o+"px"})),d+2*s>r&&"outer-bottom"!==e.position&&"outer-top"!==e.position?(punchgs.TweenLite.set(t,{top:"0px",y:0,maxHeight:h+p+(r-2*s)+"px"}),punchgs.TweenLite.set(l,{maxHeight:h+p+(r-2*s)+"px"})):(punchgs.TweenLite.set(t,{maxHeight:d+"px"}),punchgs.TweenLite.set(l,{maxHeight:d+"px"})),"outer-left"!==e.position&&"outer-right"!==e.position&&(h=0,p=0),e.span===!0&&"vertical"===e.direction?(punchgs.TweenLite.set(t,{maxHeight:h+p+(r-2*s)+"px",height:h+p+(r-2*s)+"px",top:0-h,y:0}),f(l,e,i)):e.span===!0&&"horizontal"===e.direction&&(punchgs.TweenLite.set(t,{maxWidth:"100%",width:n-2*s+"px",left:0,x:0}),m(l,e,i))}},w=function(t,e,i,a){0===t.find(".tp-bullets").length&&(e.style=void 0===e.style?"":e.style,t.append('<div class="tp-bullets '+e.style+" "+e.direction+'"></div>'));var n=t.find(".tp-bullets"),r=i.data("index"),s=e.tmp;jQuery.each(a.thumbs[i.index()].params,function(t,e){s=s.replace(e.from,e.to)}),n.append('<div class="justaddedbullet tp-bullet">'+s+"</div>");var o=t.find(".justaddedbullet"),d=t.find(".tp-bullet").length,l=o.outerWidth()+parseInt(void 0===e.space?0:e.space,0),h=o.outerHeight()+parseInt(void 0===e.space?0:e.space,0);"vertical"===e.direction?(o.css({top:(d-1)*h+"px",left:"0px"}),n.css({height:(d-1)*h+o.outerHeight(),width:o.outerWidth()})):(o.css({left:(d-1)*l+"px",top:"0px"}),n.css({width:(d-1)*l+o.outerWidth(),height:o.outerHeight()})),o.find(".tp-bullet-image").css({backgroundImage:"url("+a.thumbs[i.index()].src+")"}),o.data("liref",r),o.click(function(){a.sc_indicator="bullet",t.revcallslidewithid(r),t.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),o.removeClass("justaddedbullet"),e.padding_top=parseInt(a.carousel.padding_top||0,0),e.padding_bottom=parseInt(a.carousel.padding_bottom||0,0),e.opt=a,("outer-left"==e.position||"outer-right"==e.position)&&(a.outernav=!0),n.addClass("nav-pos-hor-"+e.h_align),n.addClass("nav-pos-ver-"+e.v_align),n.addClass("nav-dir-"+e.direction),b(n,e,a)},_=function(t,e){e=parseFloat(e),t=t.replace("#","");var i=parseInt(t.substring(0,2),16),a=parseInt(t.substring(2,4),16),n=parseInt(t.substring(4,6),16),r="rgba("+i+","+a+","+n+","+e+")";return r},x=function(t,e,i,a,n){var r="tp-thumb"===a?".tp-thumbs":".tp-tabs",s="tp-thumb"===a?".tp-thumb-mask":".tp-tab-mask",o="tp-thumb"===a?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",d="tp-thumb"===a?".tp-thumb":".tp-tab",l="tp-thumb"===a?".tp-thumb-image":".tp-tab-image";if(e.visibleAmount=e.visibleAmount>n.slideamount?n.slideamount:e.visibleAmount,e.sliderLayout=n.sliderLayout,0===t.parent().find(r).length){e.style=void 0===e.style?"":e.style;var h=e.span===!0?"tp-span-wrapper":"",p='<div class="'+a+"s "+h+" "+e.position+" "+e.style+'"><div class="'+a+'-mask"><div class="'+a+'s-inner-wrapper" style="position:relative;"></div></div></div>';"outer-top"===e.position?t.parent().prepend(p):"outer-bottom"===e.position?t.after(p):t.append(p),e.padding_top=parseInt(n.carousel.padding_top||0,0),e.padding_bottom=parseInt(n.carousel.padding_bottom||0,0),("outer-left"==e.position||"outer-right"==e.position)&&(n.outernav=!0)}var u=i.data("index"),c=t.parent().find(r),g=c.find(s),v=g.find(o),f="horizontal"===e.direction?e.width*e.visibleAmount+e.space*(e.visibleAmount-1):e.width,m="horizontal"===e.direction?e.height:e.height*e.visibleAmount+e.space*(e.visibleAmount-1),w=e.tmp;jQuery.each(n.thumbs[i.index()].params,function(t,e){w=w.replace(e.from,e.to)}),v.append('<div data-liindex="'+i.index()+'" data-liref="'+u+'" class="justaddedthumb '+a+'" style="width:'+e.width+"px;height:"+e.height+'px;">'+w+"</div>");var x=c.find(".justaddedthumb"),y=c.find(d).length,T=x.outerWidth()+parseInt(void 0===e.space?0:e.space,0),S=x.outerHeight()+parseInt(void 0===e.space?0:e.space,0);x.find(l).css({backgroundImage:"url("+n.thumbs[i.index()].src+")"}),"vertical"===e.direction?(x.css({top:(y-1)*S+"px",left:"0px"}),v.css({height:(y-1)*S+x.outerHeight(),width:x.outerWidth()})):(x.css({left:(y-1)*T+"px",top:"0px"}),v.css({width:(y-1)*T+x.outerWidth(),height:x.outerHeight()})),c.data("maxw",f),c.data("maxh",m),c.data("wr_padding",e.wrapper_padding);var j="outer-top"===e.position||"outer-bottom"===e.position?"relative":"absolute";"outer-top"!==e.position&&"outer-bottom"!==e.position||"center"!==e.h_align?"0":"auto";g.css({maxWidth:f+"px",maxHeight:m+"px",overflow:"hidden",position:"relative"}),c.css({maxWidth:f+"px",maxHeight:m+"px",overflow:"visible",position:j,background:_(e.wrapper_color,e.wrapper_opacity),padding:e.wrapper_padding+"px",boxSizing:"contet-box"}),x.click(function(){n.sc_indicator="bullet";var e=t.parent().find(o).data("distance");e=void 0===e?0:e,Math.abs(e)<10&&(t.revcallslidewithid(u),t.parent().find(r).removeClass("selected"),jQuery(this).addClass("selected"))}),x.removeClass("justaddedthumb"),e.opt=n,c.addClass("nav-pos-hor-"+e.h_align),c.addClass("nav-pos-ver-"+e.v_align),c.addClass("nav-dir-"+e.direction),b(c,e,n)},y=function(t){var e=t.c.parent().find(".outer-top"),i=t.c.parent().find(".outer-bottom");t.top_outer=e.hasClass("tp-forcenotvisible")?0:e.outerHeight()||0,t.bottom_outer=i.hasClass("tp-forcenotvisible")?0:i.outerHeight()||0},T=function(t,e,i,a){e>i||i>a?t.addClass("tp-forcenotvisible"):t.removeClass("tp-forcenotvisible")}}(jQuery);;
/********************************************
 * REVOLUTION 5.2.6 EXTENSION - PARALLAX
 * @version: 1.5 (23.06.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(e){function r(e,r){e.lastscrolltop=r}var t=jQuery.fn.revolution,a=t.is_mobile();jQuery.extend(!0,t,{checkForParallax:function(e,r){function o(e){if("3D"==s.type||"3d"==s.type){e.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),e.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+s.ddd_layer_overflow+';"></div>'),e.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var t=e.find(".dddwrapper"),a=e.find(".dddwrapper-layer"),o=e.find(".dddwrapper-layertobggroup");o.appendTo(t),"carousel"==r.sliderType&&("on"==s.ddd_shadow&&t.addClass("dddwrappershadow"),punchgs.TweenLite.set(t,{borderRadius:r.carousel.border_radius})),punchgs.TweenLite.set(e,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(t,{force3D:"auto",transformOrigin:"50% 50%"}),punchgs.TweenLite.set(a,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5}),punchgs.TweenLite.set(r.ul,{transformStyle:"preserve-3d",transformPerspective:1600})}}var s=r.parallax;if(!s.done){if(s.done=!0,a&&"on"==s.disable_onmobile)return!1;("3D"==s.type||"3d"==s.type)&&(punchgs.TweenLite.set(r.c,{overflow:s.ddd_overflow}),punchgs.TweenLite.set(r.ul,{overflow:s.ddd_overflow}),"carousel"!=r.sliderType&&"on"==s.ddd_shadow&&(r.c.prepend('<div class="dddwrappershadow"></div>'),punchgs.TweenLite.set(r.c.find(".dddwrappershadow"),{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}))),r.li.each(function(){o(jQuery(this))}),("3D"==s.type||"3d"==s.type&&r.c.find(".tp-static-layers").length>0)&&(punchgs.TweenLite.set(r.c.find(".tp-static-layers"),{top:0,left:0,width:"100%",height:"100%"}),o(r.c.find(".tp-static-layers"))),s.pcontainers=new Array,s.pcontainer_depths=new Array,s.bgcontainers=new Array,s.bgcontainer_depths=new Array,r.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function(){var e=jQuery(this),t=e.data("bgparallax")||r.parallax.bgparallax;t="on"==t?1:t,void 0!==t&&"off"!==t&&(s.bgcontainers.push(e),s.bgcontainer_depths.push(r.parallax.levels[parseInt(t,0)-1]/100))});for(var i=1;i<=s.levels.length;i++)r.c.find(".rs-parallaxlevel-"+i).each(function(){var e=jQuery(this),r=e.closest(".tp-parallax-wrap");r.data("parallaxlevel",s.levels[i-1]),r.addClass("tp-parallax-container"),s.pcontainers.push(r),s.pcontainer_depths.push(s.levels[i-1])});("mouse"==s.type||"scroll+mouse"==s.type||"mouse+scroll"==s.type||"3D"==s.type||"3d"==s.type)&&(e.mouseenter(function(r){var t=e.find(".active-revslide"),a=e.offset().top,o=e.offset().left,s=r.pageX-o,i=r.pageY-a;t.data("enterx",s),t.data("entery",i)}),e.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(t,a){var o=a&&a.li?a.li:e.find(".active-revslide");if("enterpoint"==s.origo){var i=e.offset().top,l=e.offset().left;void 0==o.data("enterx")&&o.data("enterx",t.pageX-l),void 0==o.data("entery")&&o.data("entery",t.pageY-i);var n=o.data("enterx")||t.pageX-l,d=o.data("entery")||t.pageY-i,p=n-(t.pageX-l),c=d-(t.pageY-i),h=s.speed/1e3||.4}else var i=e.offset().top,l=e.offset().left,p=r.conw/2-(t.pageX-l),c=r.conh/2-(t.pageY-i),h=s.speed/1e3||3;"mouseleave"==t.type&&(p=s.ddd_lasth||0,c=s.ddd_lastv||0,h=1.5);for(var u=0;u<s.pcontainers.length;u++){var w=s.pcontainers[u],f=s.pcontainer_depths[u],v="3D"==s.type||"3d"==s.type?f/200:f/100,g=p*v,y=c*v;"scroll+mouse"==s.type||"mouse+scroll"==s.type?punchgs.TweenLite.to(w,h,{force3D:"auto",x:g,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(w,h,{force3D:"auto",x:g,y:y,ease:punchgs.Power3.easeOut,overwrite:"all"})}if("3D"==s.type||"3d"==s.type){var x=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===r.sliderType&&(x=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),r.c.find(x).each(function(){var e=jQuery(this),a=s.levels[s.levels.length-1]/200,o=p*a,i=c*a,l=0==r.conw?0:Math.round(p/r.conw*a*100)||0,n=0==r.conh?0:Math.round(c/r.conh*a*100)||0,d=e.closest("li"),u=0,w=!1;e.hasClass("dddwrapper-layer")&&(u=s.ddd_z_correction||65,w=!0),e.hasClass("dddwrapper-layer")&&(o=0,i=0),d.hasClass("active-revslide")||"carousel"!=r.sliderType?"on"!=s.ddd_bgfreeze||w?punchgs.TweenLite.to(e,h,{rotationX:n,rotationY:-l,x:o,z:u,y:i,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==t.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),a&&(window.ondeviceorientation=function(t){var a=Math.round(t.beta||0)-70,o=Math.round(t.gamma||0),i=e.find(".active-revslide");if(jQuery(window).width()>jQuery(window).height()){var l=o;o=a,a=l}var n=e.width(),d=e.height(),p=360/n*o,c=180/d*a,h=s.speed/1e3||3,u=[];if(i.find(".tp-parallax-container").each(function(e){u.push(jQuery(this))}),e.find(".tp-static-layers .tp-parallax-container").each(function(){u.push(jQuery(this))}),jQuery.each(u,function(){var e=jQuery(this),r=parseInt(e.data("parallaxlevel"),0),t=r/100,a=p*t*2,o=c*t*4;punchgs.TweenLite.to(e,h,{force3D:"auto",x:a,y:o,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==s.type||"3d"==s.type){var w=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===r.sliderType&&(w=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),r.c.find(w).each(function(){var e=jQuery(this),a=s.levels[s.levels.length-1]/200;offsh=p*a,offsv=c*a*3,offrv=0==r.conw?0:Math.round(p/r.conw*a*500)||0,offrh=0==r.conh?0:Math.round(c/r.conh*a*700)||0,li=e.closest("li"),zz=0,itslayer=!1,e.hasClass("dddwrapper-layer")&&(zz=s.ddd_z_correction||65,itslayer=!0),e.hasClass("dddwrapper-layer")&&(offsh=0,offsv=0),li.hasClass("active-revslide")||"carousel"!=r.sliderType?"on"!=s.ddd_bgfreeze||itslayer?punchgs.TweenLite.to(e,h,{rotationX:offrh,rotationY:-offrv,x:offsh,z:zz,y:offsv,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==t.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}})),t.scrollTicker(r,e)}},scrollTicker:function(e,r){1!=e.scrollTicker&&(e.scrollTicker=!0,a?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){t.scrollHandling(e)},r,!1,1)):document.addEventListener("scroll",function(r){t.scrollHandling(e,!0)},{passive:!0})),t.scrollHandling(e,!0)},scrollHandling:function(e,o){if(e.lastwindowheight=e.lastwindowheight||window.innerHeight,e.lastscrolltop==window.scrollY&&!e.duringslidechange&&!o)return!1;punchgs.TweenLite.delayedCall(.2,r,[e,window.scrollY]);var s=e.c[0].getBoundingClientRect(),i=e.viewPort,l=e.parallax,n=s.top<0||s.height>e.lastwindowheight?s.top/s.height:s.bottom>e.lastwindowheight?(s.bottom-e.lastwindowheight)/s.height:0;if(e.scrollproc=n,t.callBackHandling&&t.callBackHandling(e,"parallax","start"),i.enable){var d=1-Math.abs(n);d=0>d?0:d,jQuery.isNumeric(i.visible_area)||-1!==i.visible_area.indexOf("%")&&(i.visible_area=parseInt(i.visible_area)/100),1-i.visible_area<=d?e.inviewport||(e.inviewport=!0,t.enterInViewPort(e)):e.inviewport&&(e.inviewport=!1,t.leaveViewPort(e))}if(a&&"on"==l.disable_onmobile)return!1;if("3d"!=l.type&&"3D"!=l.type){if(("scroll"==l.type||"scroll+mouse"==l.type||"mouse+scroll"==l.type)&&l.pcontainers)for(var p=0;p<l.pcontainers.length;p++)if(l.pcontainers[p].length>0){var c=l.pcontainers[p],h=l.pcontainer_depths[p]/100,u=Math.round(n*-(h*e.conh)*10)/10||0;c.data("parallaxoffset",u),punchgs.TweenLite.set(c,{overwrite:"auto",force3D:"auto",y:u})}if(l.bgcontainers)for(var p=0;p<l.bgcontainers.length;p++){var w=l.bgcontainers[p],f=l.bgcontainer_depths[p],u=n*-(f*e.conh)||0;punchgs.TweenLite.set(w,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:u+"px"})}}t.callBackHandling&&t.callBackHandling(e,"parallax","end")}})}(jQuery);;
/************************************************
 * REVOLUTION 5.2 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.1.2 (23.02.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/
!function(t){var e=jQuery.fn.revolution;jQuery.extend(!0,e,{animateSlide:function(t,e,o,a,i,r,s,l,d){return n(t,e,o,a,i,r,s,l,d)}});var o=function(t,o,a,i){var n=t,r=n.find(".defaultimg"),s=n.data("zoomstart"),l=n.data("rotationstart");void 0!=r.data("currotate")&&(l=r.data("currotate")),void 0!=r.data("curscale")&&"box"==i?s=100*r.data("curscale"):void 0!=r.data("curscale")&&(s=r.data("curscale")),e.slotSize(r,o);var d=r.attr("src"),h=r.css("backgroundColor"),f=o.width,c=o.height,p=r.data("fxof"),u=0;"on"==o.autoHeight&&(c=o.c.height()),void 0==p&&(p=0);var g=0,w=r.data("bgfit"),v=r.data("bgrepeat"),m=r.data("bgposition");switch(void 0==w&&(w="cover"),void 0==v&&(v="no-repeat"),void 0==m&&(m="center center"),i){case"box":for(var x=0,y=0,T=0;T<o.slots;T++){y=0;for(var z=0;z<o.slots;z++)n.append('<div class="slot" style="position:absolute;top:'+(u+y)+"px;left:"+(p+x)+"px;width:"+o.slotw+"px;height:"+o.sloth+'px;overflow:hidden;"><div class="slotslide" data-x="'+x+'" data-y="'+y+'" style="position:absolute;top:0px;left:0px;width:'+o.slotw+"px;height:"+o.sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-y)+"px;left:"+(0-x)+"px;width:"+f+"px;height:"+c+"px;background-color:"+h+";background-image:url("+d+");background-repeat:"+v+";background-size:"+w+";background-position:"+m+';"></div></div></div>'),y+=o.sloth,void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l});x+=o.slotw}break;case"vertical":case"horizontal":if("horizontal"==i){if(!a)var g=0-o.slotw;for(var z=0;z<o.slots;z++)n.append('<div class="slot" style="position:absolute;top:'+(0+u)+"px;left:"+(p+z*o.slotw)+"px;overflow:hidden;width:"+(o.slotw+.6)+"px;height:"+c+'px"><div class="slotslide" style="position:absolute;top:0px;left:'+g+"px;width:"+(o.slotw+.6)+"px;height:"+c+'px;overflow:hidden;"><div style="background-color:'+h+";position:absolute;top:0px;left:"+(0-z*o.slotw)+"px;width:"+f+"px;height:"+c+"px;background-image:url("+d+");background-repeat:"+v+";background-size:"+w+";background-position:"+m+';"></div></div></div>'),void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l})}else{if(!a)var g=0-o.sloth;for(var z=0;z<o.slots+2;z++)n.append('<div class="slot" style="position:absolute;top:'+(u+z*o.sloth)+"px;left:"+p+"px;overflow:hidden;width:"+f+"px;height:"+o.sloth+'px"><div class="slotslide" style="position:absolute;top:'+g+"px;left:0px;width:"+f+"px;height:"+o.sloth+'px;overflow:hidden;"><div style="background-color:'+h+";position:absolute;top:"+(0-z*o.sloth)+"px;left:0px;width:"+f+"px;height:"+c+"px;background-image:url("+d+");background-repeat:"+v+";background-size:"+w+";background-position:"+m+';"></div></div></div>'),void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l})}}},a=function(t,e,o,a,i){function n(){jQuery.each(y,function(t,e){(e[0]==o||e[8]==o)&&(w=e[1],v=e[2],m=x),x+=1})}var r=punchgs.Power1.easeIn,s=punchgs.Power1.easeOut,l=punchgs.Power1.easeInOut,d=punchgs.Power2.easeIn,h=punchgs.Power2.easeOut,f=punchgs.Power2.easeInOut,c=(punchgs.Power3.easeIn,punchgs.Power3.easeOut),p=punchgs.Power3.easeInOut,u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],g=[16,17,18,19,20,21,22,23,24,25,27],w=0,v=1,m=0,x=0,y=(new Array,[["boxslide",0,1,10,0,"box",!1,null,0,s,s,500,6],["boxfade",1,0,10,0,"box",!1,null,1,l,l,700,5],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2,f,f,700,3],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3,f,f,700,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4,s,s,300,5],["curtain-2",5,3,0,0,"horizontal",!0,!0,5,s,s,300,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6,s,s,300,5],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7,s,s,300,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8,h,h,500,8],["slotfade-horizontal",9,0,0,500,"horizontal",!0,null,9,h,h,500,25],["slotfade-vertical",10,0,0,500,"vertical",!0,null,10,h,h,500,25],["fade",11,0,1,300,"horizontal",!0,null,11,f,f,1e3,1],["crossfade",11,1,1,300,"horizontal",!0,null,11,f,f,1e3,1],["fadethroughdark",11,2,1,300,"horizontal",!0,null,11,f,f,1e3,1],["fadethroughlight",11,3,1,300,"horizontal",!0,null,11,f,f,1e3,1],["fadethroughtransparent",11,4,1,300,"horizontal",!0,null,11,f,f,1e3,1],["slideleft",12,0,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideup",13,0,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slidedown",14,0,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideright",15,0,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["slideoverleft",12,7,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideoverup",13,7,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slideoverdown",14,7,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideoverright",15,7,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["slideremoveleft",12,8,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideremoveup",13,8,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slideremovedown",14,8,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideremoveright",15,8,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["papercut",16,0,0,600,"",null,null,16,p,p,1e3,2],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17,l,l,500,7],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18,l,l,500,5],["cubic",19,0,20,600,"horizontal",!1,!0,19,p,p,500,1],["cube",19,0,20,600,"horizontal",!1,!0,20,p,p,500,1],["flyin",20,0,4,600,"vertical",!1,!0,21,c,p,500,1],["turnoff",21,0,1,500,"horizontal",!1,!0,22,p,p,500,1],["incube",22,0,20,200,"horizontal",!1,!0,23,f,f,500,1],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24,h,h,500,1],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25,h,h,500,1],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26,f,f,500,1],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27,f,f,500,1],["fadefromright",12,1,1,0,"horizontal",!0,!0,28,f,f,1e3,1],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29,f,f,1e3,1],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30,f,f,1e3,1],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31,f,f,1e3,1],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32,f,f,1e3,1],["fadetorightfadefromleft",15,2,1,0,"horizontal",!0,!0,33,f,f,1e3,1],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34,f,f,1e3,1],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35,f,f,1e3,1],["parallaxtoright",12,3,1,0,"horizontal",!0,!0,36,f,d,1500,1],["parallaxtoleft",15,3,1,0,"horizontal",!0,!0,37,f,d,1500,1],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38,f,r,1500,1],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39,f,r,1500,1],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40,f,d,1e3,1],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41,f,d,1e3,1],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42,f,d,1e3,1],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43,f,d,1e3,1],["zoomout",13,5,1,0,"horizontal",!0,!0,44,f,d,1e3,1],["zoomin",13,6,1,0,"horizontal",!0,!0,45,f,d,1e3,1],["slidingoverlayup",27,0,1,0,"horizontal",!0,!0,47,l,s,2e3,1],["slidingoverlaydown",28,0,1,0,"horizontal",!0,!0,48,l,s,2e3,1],["slidingoverlayright",30,0,1,0,"horizontal",!0,!0,49,l,s,2e3,1],["slidingoverlayleft",29,0,1,0,"horizontal",!0,!0,50,l,s,2e3,1],["parallaxcirclesup",31,0,1,0,"horizontal",!0,!0,51,f,r,1500,1],["parallaxcirclesdown",32,0,1,0,"horizontal",!0,!0,52,f,r,1500,1],["parallaxcirclesright",33,0,1,0,"horizontal",!0,!0,53,f,r,1500,1],["parallaxcirclesleft",34,0,1,0,"horizontal",!0,!0,54,f,r,1500,1],["notransition",26,0,1,0,"horizontal",!0,null,46,f,d,1e3,1],["parallaxright",12,3,1,0,"horizontal",!0,!0,55,f,d,1500,1],["parallaxleft",15,3,1,0,"horizontal",!0,!0,56,f,d,1500,1],["parallaxup",14,3,1,0,"horizontal",!0,!0,57,f,r,1500,1],["parallaxdown",13,3,1,0,"horizontal",!0,!0,58,f,r,1500,1]]);e.duringslidechange=!0,e.testanims=!1,1==e.testanims&&(e.nexttesttransform=void 0===e.nexttesttransform?34:e.nexttesttransform+1,e.nexttesttransform=e.nexttesttransform>70?0:e.nexttesttransform,o=y[e.nexttesttransform][0],console.log(o+"  "+e.nexttesttransform+"  "+y[e.nexttesttransform][1]+"  "+y[e.nexttesttransform][2])),jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax"],function(t,e){o==e+"horizontal"&&(o=1!=i?e+"left":e+"right"),o==e+"vertical"&&(o=1!=i?e+"up":e+"down")}),"random"==o&&(o=Math.round(Math.random()*y.length-1),o>y.length-1&&(o=y.length-1)),"random-static"==o&&(o=Math.round(Math.random()*u.length-1),o>u.length-1&&(o=u.length-1),o=u[o]),"random-premium"==o&&(o=Math.round(Math.random()*g.length-1),o>g.length-1&&(o=g.length-1),o=g[o]);var T=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(1==e.isJoomla&&void 0!=window.MooTools&&-1!=T.indexOf(o)){var z=Math.round(Math.random()*(g.length-2))+1;z>g.length-1&&(z=g.length-1),0==z&&(z=1),o=g[z]}n(),w>30&&(w=30),0>w&&(w=0);var L=new Object;return L.nexttrans=w,L.STA=y[m],L.specials=v,L},i=function(t,e){return void 0==e||jQuery.isNumeric(t)?t:void 0==t?t:t.split(",")[e]},n=function(t,e,n,r,s,l,d,h,f){function c(t,e,o,a,i){var n=t.find(".slot"),r=6,s=[2,1.2,.9,.7,.55,.42],l=t.width(),h=t.height();n.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');for(var c=0;r>c;c++)n.parent().clone(!1).appendTo(d);t.find(".slot-circle-wrapper").each(function(t){if(r>t){var a=jQuery(this),n=a.find(".slot"),d=l>h?s[t]*l:s[t]*h,c=d,p=0+(c/2-l/2),u=0+(d/2-h/2),g=0!=t?"50%":"0",w=31==o?h/2-d/2:32==o?h/2-d/2:h/2-d/2,v=33==o?l/2-c/2:34==o?l-c:l/2-c/2,m={scale:1,transformOrigo:"50% 50%",width:c+"px",height:d+"px",top:w+"px",left:v+"px",borderRadius:g},x={scale:1,top:h/2-d/2,left:l/2-c/2,ease:i},y=31==o?u:32==o?u:u,T=33==o?p:34==o?p+l/2:p,z={width:l,height:h,autoAlpha:1,top:y+"px",position:"absolute",left:T+"px"},L={top:u+"px",left:p+"px",ease:i},b=e,D=0;f.add(punchgs.TweenLite.fromTo(a,b,m,x),D),f.add(punchgs.TweenLite.fromTo(n,b,z,L),D),f.add(punchgs.TweenLite.fromTo(a,.001,{autoAlpha:0},{autoAlpha:1}),0)}})}var p=l.index(),u=s.index(),g=p>u?1:0;"arrow"==r.sc_indicator&&(g=r.sc_indicator_dir);var w=a(n,r,e,d,g),v=w.STA,m=w.specials,t=w.nexttrans;"on"==d.data("kenburns")&&(t=11);var x=s.data("nexttransid")||0,y=i(s.data("masterspeed"),x);y="default"===y?v[11]:"random"===y?Math.round(1e3*Math.random()+300):void 0!=y?parseInt(y,0):v[11],y=y>r.delay?r.delay:y,y+=v[4],r.slots=i(s.data("slotamount"),x),r.slots=void 0==r.slots||"default"==r.slots?v[12]:"random"==r.slots?Math.round(12*Math.random()+4):r.slots,r.slots=r.slots<1?"boxslide"==e?Math.round(6*Math.random()+3):"flyin"==e?Math.round(4*Math.random()+1):r.slots:r.slots,r.slots=(4==t||5==t||6==t)&&r.slots<3?3:r.slots,r.slots=0!=v[3]?Math.min(r.slots,v[3]):r.slots,r.slots=9==t?r.width/20:10==t?r.height/20:r.slots,r.rotate=i(s.data("rotate"),x),r.rotate=void 0==r.rotate||"default"==r.rotate?0:999==r.rotate||"random"==r.rotate?Math.round(360*Math.random()):r.rotate,r.rotate=!jQuery.support.transition||r.ie||r.ie9?0:r.rotate,11!=t&&(null!=v[7]&&o(h,r,v[7],v[5]),null!=v[6]&&o(d,r,v[6],v[5])),f.add(punchgs.TweenLite.set(d.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),f.add(punchgs.TweenLite.set(h.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),f.add(punchgs.TweenLite.set(d.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),f.add(punchgs.TweenLite.set(h.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),f.add(punchgs.TweenLite.set(d,{autoAlpha:1,y:"+0%",x:"+0%"}),0),f.add(punchgs.TweenLite.set(h,{autoAlpha:1,y:"+0%",x:"+0%"}),0),f.add(punchgs.TweenLite.set(d.parent(),{backgroundColor:"transparent"}),0),f.add(punchgs.TweenLite.set(h.parent(),{backgroundColor:"transparent"}),0);var T=i(s.data("easein"),x),z=i(s.data("easeout"),x);if(T="default"===T?v[9]||punchgs.Power2.easeInOut:T||v[9]||punchgs.Power2.easeInOut,z="default"===z?v[10]||punchgs.Power2.easeInOut:z||v[10]||punchgs.Power2.easeInOut,0==t){var L=Math.ceil(r.height/r.sloth),b=0;d.find(".slotslide").each(function(t){var e=jQuery(this);b+=1,b==L&&(b=0),f.add(punchgs.TweenLite.from(e,y/600,{opacity:0,top:0-r.sloth,left:0-r.slotw,rotation:r.rotate,force3D:"auto",ease:T}),(15*t+30*b)/1500)})}if(1==t){var D,A=0;d.find(".slotslide").each(function(t){var e=jQuery(this),o=Math.random()*y+300,a=500*Math.random()+200;o+a>D&&(D=a+a,A=t),f.add(punchgs.TweenLite.from(e,o/1e3,{autoAlpha:0,force3D:"auto",rotation:r.rotate,ease:T}),a/1e3)})}if(2==t){var j=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this);j.add(punchgs.TweenLite.to(t,y/1e3,{left:r.slotw,ease:T,force3D:"auto",rotation:0-r.rotate}),0),f.add(j,0)}),d.find(".slotslide").each(function(){var t=jQuery(this);j.add(punchgs.TweenLite.from(t,y/1e3,{left:0-r.slotw,ease:T,force3D:"auto",rotation:r.rotate}),0),f.add(j,0)})}if(3==t){var j=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this);j.add(punchgs.TweenLite.to(t,y/1e3,{top:r.sloth,ease:T,rotation:r.rotate,force3D:"auto",transformPerspective:600}),0),f.add(j,0)}),d.find(".slotslide").each(function(){var t=jQuery(this);j.add(punchgs.TweenLite.from(t,y/1e3,{top:0-r.sloth,rotation:r.rotate,ease:z,force3D:"auto",transformPerspective:600}),0),f.add(j,0)})}if(4==t||5==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var k=y/1e3,j=new punchgs.TimelineLite;h.find(".slotslide").each(function(e){var o=jQuery(this),a=e*k/r.slots;5==t&&(a=(r.slots-e-1)*k/r.slots/1.5),j.add(punchgs.TweenLite.to(o,3*k,{transformPerspective:600,force3D:"auto",top:0+r.height,opacity:.5,rotation:r.rotate,ease:T,delay:a}),0),f.add(j,0)}),d.find(".slotslide").each(function(e){var o=jQuery(this),a=e*k/r.slots;5==t&&(a=(r.slots-e-1)*k/r.slots/1.5),j.add(punchgs.TweenLite.from(o,3*k,{top:0-r.height,opacity:.5,rotation:r.rotate,force3D:"auto",ease:punchgs.eo,delay:a}),0),f.add(j,0)})}if(6==t){r.slots<2&&(r.slots=2),r.slots%2&&(r.slots=r.slots+1);var j=new punchgs.TimelineLite;setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),h.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<r.slots/2)var o=90*(t+2);else var o=90*(2+r.slots-t);j.add(punchgs.TweenLite.to(e,(y+o)/1e3,{top:0+r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:T}),0),f.add(j,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<r.slots/2)var o=90*(t+2);else var o=90*(2+r.slots-t);j.add(punchgs.TweenLite.from(e,(y+o)/1e3,{top:0-r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:z}),0),f.add(j,0)})}if(7==t){y=2*y,y>r.delay&&(y=r.delay);var j=new punchgs.TimelineLite;setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),h.find(".slotslide").each(function(){var t=jQuery(this).find("div");j.add(punchgs.TweenLite.to(t,y/1e3,{left:0-r.slotw/2+"px",top:0-r.height/2+"px",width:2*r.slotw+"px",height:2*r.height+"px",opacity:0,rotation:r.rotate,force3D:"auto",ease:T}),0),f.add(j,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this).find("div");j.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*r.slotw+"px",ease:z,force3D:"auto",top:"0px",width:r.width,height:r.height,opacity:1,rotation:0,delay:.1}),0),f.add(j,0)})}if(8==t){y=3*y,y>r.delay&&(y=r.delay);var j=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this).find("div");j.add(punchgs.TweenLite.to(t,y/1e3,{left:0-r.width/2+"px",top:0-r.sloth/2+"px",width:2*r.width+"px",height:2*r.sloth+"px",force3D:"auto",ease:T,opacity:0,rotation:r.rotate}),0),f.add(j,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this).find("div");j.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-t*r.sloth+"px",width:d.find(".defaultimg").data("neww")+"px",height:d.find(".defaultimg").data("newh")+"px",opacity:1,ease:z,rotation:0}),0),f.add(j,0)})}if(9==t||10==t){var M=0;d.find(".slotslide").each(function(t){var e=jQuery(this);M++,f.add(punchgs.TweenLite.fromTo(e,y/1e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:T,delay:5*t/1e3}),0)})}if(27==t||28==t||29==t||30==t){var P=d.find(".slot"),Q=27==t||28==t?1:2,O=27==t||29==t?"-100%":"+100%",I=27==t||29==t?"+100%":"-100%",X=27==t||29==t?"-80%":"80%",Y=27==t||29==t?"80%":"-80%",S=27==t||29==t?"10%":"-10%",_={overwrite:"all"},C={autoAlpha:0,zIndex:1,force3D:"auto",ease:T},V={position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},Z={autoAlpha:1,force3D:"auto",ease:z},H={overwrite:"all",zIndex:2},J={autoAlpha:1,force3D:"auto",overwrite:"all",ease:T},N={overwrite:"all",zIndex:2},R={autoAlpha:1,force3D:"auto",ease:T},q=1==Q?"y":"x";_[q]="0px",C[q]=O,V[q]=S,Z[q]="0%",H[q]=I,J[q]=O,N[q]=X,R[q]=Y,P.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'),f.add(punchgs.TweenLite.fromTo(h,y/1e3,_,C),0),f.add(punchgs.TweenLite.fromTo(d.find(".defaultimg"),y/2e3,V,Z),y/2e3),f.add(punchgs.TweenLite.fromTo(P,y/1e3,H,J),0),f.add(punchgs.TweenLite.fromTo(P.find(".slotslide div"),y/1e3,N,R),0)}if(31==t||32==t||33==t||34==t){y=6e3,T=punchgs.Power3.easeInOut;var B=y/1e3;mas=B-B/5,_nt=t,fy=31==_nt?"+100%":32==_nt?"-100%":"0%",fx=33==_nt?"+100%":34==_nt?"-100%":"0%",ty=31==_nt?"-100%":32==_nt?"+100%":"0%",tx=33==_nt?"-100%":34==_nt?"+100%":"0%",f.add(punchgs.TweenLite.fromTo(h,B-.2*B,{y:0,x:0},{y:ty,x:tx,ease:z}),.2*B),f.add(punchgs.TweenLite.fromTo(d,B,{y:fy,x:fx},{y:"0%",x:"0%",ease:T}),0),d.find(".slot").remove(),d.find(".defaultimg").clone().appendTo(d).addClass("slot"),c(d,B,_nt,"in",T)}if(11==t){m>4&&(m=0);var M=0,E=2==m?"#000000":3==m?"#ffffff":"transparent";switch(m){case 0:f.add(punchgs.TweenLite.fromTo(d,y/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:T}),0);break;case 1:f.add(punchgs.TweenLite.fromTo(d,y/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:T}),0),f.add(punchgs.TweenLite.fromTo(h,y/1e3,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:T}),0);break;case 2:case 3:case 4:f.add(punchgs.TweenLite.set(h.parent(),{backgroundColor:E,force3D:"auto"}),0),f.add(punchgs.TweenLite.set(d.parent(),{backgroundColor:"transparent",force3D:"auto"}),0),f.add(punchgs.TweenLite.to(h,y/2e3,{autoAlpha:0,force3D:"auto",ease:T}),0),f.add(punchgs.TweenLite.fromTo(d,y/2e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:T}),y/2e3)}f.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),f.add(punchgs.TweenLite.set(h.find("defaultimg"),{autoAlpha:1}),0)}if(26==t){var M=0;y=0,f.add(punchgs.TweenLite.fromTo(d,y/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:T}),0),f.add(punchgs.TweenLite.to(h,y/1e3,{autoAlpha:0,force3D:"auto",ease:T}),0),f.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),f.add(punchgs.TweenLite.set(h.find("defaultimg"),{autoAlpha:1}),0)}if(12==t||13==t||14==t||15==t){y=y,y>r.delay&&(y=r.delay),setTimeout(function(){punchgs.TweenLite.set(h.find(".defaultimg"),{autoAlpha:0})},100);var F=r.width,G=r.height,K=d.find(".slotslide, .defaultvid"),U=0,W=0,$=1,tt=1,et=1,ot=y/1e3,at=ot;("fullwidth"==r.sliderLayout||"fullscreen"==r.sliderLayout)&&(F=K.width(),G=K.height()),12==t?U=F:15==t?U=0-F:13==t?W=G:14==t&&(W=0-G),1==m&&($=0),2==m&&($=0),3==m&&(ot=y/1300),(4==m||5==m)&&(tt=.6),6==m&&(tt=1.4),(5==m||6==m)&&(et=1.4,$=0,F=0,G=0,U=0,W=0),6==m&&(et=.6);7==m&&(F=0,G=0);var it=d.find(".slotslide"),nt=h.find(".slotslide, .defaultvid");if(f.add(punchgs.TweenLite.set(l,{zIndex:15}),0),f.add(punchgs.TweenLite.set(s,{zIndex:20}),0),8==m?(f.add(punchgs.TweenLite.set(l,{zIndex:20}),0),f.add(punchgs.TweenLite.set(s,{zIndex:15}),0),f.add(punchgs.TweenLite.set(it,{left:0,top:0,scale:1,opacity:1,rotation:0,ease:T,force3D:"auto"}),0)):f.add(punchgs.TweenLite.from(it,ot,{left:U,top:W,scale:et,opacity:$,rotation:r.rotate,ease:T,force3D:"auto"}),0),(4==m||5==m)&&(F=0,G=0),1!=m)switch(t){case 12:f.add(punchgs.TweenLite.to(nt,at,{left:0-F+"px",force3D:"auto",scale:tt,opacity:$,rotation:r.rotate,ease:z}),0);break;case 15:f.add(punchgs.TweenLite.to(nt,at,{left:F+"px",force3D:"auto",scale:tt,opacity:$,rotation:r.rotate,ease:z}),0);break;case 13:f.add(punchgs.TweenLite.to(nt,at,{top:0-G+"px",force3D:"auto",scale:tt,opacity:$,rotation:r.rotate,ease:z}),0);break;case 14:f.add(punchgs.TweenLite.to(nt,at,{top:G+"px",force3D:"auto",scale:tt,opacity:$,rotation:r.rotate,ease:z}),0)}}if(16==t){var j=new punchgs.TimelineLite;f.add(punchgs.TweenLite.set(l,{position:"absolute","z-index":20}),0),f.add(punchgs.TweenLite.set(s,{position:"absolute","z-index":15}),0),l.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),l.find(".tp-half-one").clone(!0).appendTo(l).addClass("tp-half-two"),l.find(".tp-half-two").removeClass("tp-half-one");var F=r.width,G=r.height;"on"==r.autoHeight&&(G=n.height()),l.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+F+"px;height:"+G+'px;"></div>'),l.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+F+"px;height:"+G+'px;"></div>'),l.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),l.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),f.add(punchgs.TweenLite.set(l.find(".tp-half-two"),{width:F,height:G,overflow:"hidden",zIndex:15,position:"absolute",top:G/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),f.add(punchgs.TweenLite.set(l.find(".tp-half-one"),{width:F,height:G/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var rt=(l.find(".defaultimg"),Math.round(20*Math.random()-10)),st=Math.round(20*Math.random()-10),lt=Math.round(20*Math.random()-10),dt=.4*Math.random()-.2,ht=.4*Math.random()-.2,ft=1*Math.random()+1,ct=1*Math.random()+1,pt=.3*Math.random()+.3;f.add(punchgs.TweenLite.set(l.find(".tp-half-one"),{overflow:"hidden"}),0),f.add(punchgs.TweenLite.fromTo(l.find(".tp-half-one"),y/800,{width:F,height:G/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:ft,rotation:rt,y:0-G-G/4,autoAlpha:0,ease:T}),0),f.add(punchgs.TweenLite.fromTo(l.find(".tp-half-two"),y/800,{width:F,height:G,overflow:"hidden",position:"absolute",top:G/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:ct,rotation:st,y:G+G/4,ease:T,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(l,{position:"absolute","z-index":15}),punchgs.TweenLite.set(s,{position:"absolute","z-index":20}),l.find(".tp-half-one").length>0&&(l.find(".tp-half-one .defaultimg").unwrap(),l.find(".tp-half-one .slotholder").unwrap()),l.find(".tp-half-two").remove()}}),0),j.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),null!=l.html()&&f.add(punchgs.TweenLite.fromTo(s,(y-200)/1e3,{scale:pt,x:r.width/4*dt,y:G/4*ht,rotation:lt,force3D:"auto",transformOrigin:"center center",ease:z},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),f.add(j,0)}if(17==t&&d.find(".slotslide").each(function(t){var e=jQuery(this);f.add(punchgs.TweenLite.fromTo(e,y/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:T,delay:.06*t}),0)}),18==t&&d.find(".slotslide").each(function(t){var e=jQuery(this);f.add(punchgs.TweenLite.fromTo(e,y/500,{autoAlpha:0,rotationY:110,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:T,delay:.06*t}),0)}),19==t||22==t){var j=new punchgs.TimelineLite;f.add(punchgs.TweenLite.set(l,{zIndex:20}),0),f.add(punchgs.TweenLite.set(s,{zIndex:20}),0),setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var ut=90,$=1,gt="center center ";1==g&&(ut=-90),19==t?(gt=gt+"-"+r.height/2,$=0):gt+=r.height/2,punchgs.TweenLite.set(n,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),d.find(".slotslide").each(function(t){var e=jQuery(this);j.add(punchgs.TweenLite.fromTo(e,y/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:r.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:gt,rotationX:ut},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*t/1e3,ease:T}),0),j.add(punchgs.TweenLite.to(e,.1,{autoAlpha:1,delay:50*t/1e3}),0),f.add(j)}),h.find(".slotslide").each(function(t){var e=jQuery(this),o=-90;1==g&&(o=90),j.add(punchgs.TweenLite.fromTo(e,y/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:gt,rotationX:0},{autoAlpha:1,rotationY:r.rotate,top:0,z:10,scale:1,rotationX:o,delay:50*t/1e3,force3D:"auto",ease:z}),0),f.add(j)}),f.add(punchgs.TweenLite.set(l,{zIndex:18}),0)}if(20==t){if(setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),1==g)var wt=-r.width,ut=80,gt="20% 70% -"+r.height/2;else var wt=r.width,ut=-80,gt="80% 70% -"+r.height/2;d.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;f.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:wt,rotationX:40,z:-600,opacity:$,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:gt,transformStyle:"flat",rotationY:ut},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:o,ease:T}),0)}),h.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;if(o=t>0?o+y/9e3:0,1!=g)var a=-r.width/2,i=30,n="20% 70% -"+r.height/2;else var a=r.width/2,i=-30,n="80% 70% -"+r.height/2;z=punchgs.Power2.easeInOut,f.add(punchgs.TweenLite.fromTo(e,y/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:n,transformStyle:"flat",rotationY:0},{opacity:1,rotationX:20,top:0,z:-600,left:a,force3D:"auto",rotationY:i,delay:o,ease:z}),0)})}if(21==t||25==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var ut=90,wt=-r.width,vt=-ut;if(1==g)if(25==t){var gt="center top 0";ut=r.rotate}else{var gt="left center 0";vt=r.rotate}else if(wt=r.width,ut=-90,25==t){var gt="center bottom 0";vt=-ut,ut=r.rotate}else{var gt="right center 0";vt=r.rotate}d.find(".slotslide").each(function(t){var e=jQuery(this),o=y/1.5/3;f.add(punchgs.TweenLite.fromTo(e,2*o/1e3,{left:0,transformStyle:"flat",rotationX:vt,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:gt,rotationY:ut},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",delay:o/1e3,ease:T}),0)}),1!=g?(wt=-r.width,ut=90,25==t?(gt="center top 0",vt=-ut,ut=r.rotate):(gt="left center 0",vt=r.rotate)):(wt=r.width,ut=-90,25==t?(gt="center bottom 0",vt=-ut,ut=r.rotate):(gt="right center 0",vt=r.rotate)),h.find(".slotslide").each(function(t){var e=jQuery(this);f.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:gt,rotationY:0},{left:0,rotationX:vt,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:ut,ease:z}),0)})}if(23==t||24==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var ut=-90,$=1,mt=0;if(1==g&&(ut=90),23==t){var gt="center center -"+r.width/2;$=0}else var gt="center center "+r.width/2;punchgs.TweenLite.set(n,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),d.find(".slotslide").each(function(t){var e=jQuery(this);f.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:mt,rotationX:r.rotate,force3D:"auto",opacity:$,top:0,scale:1,transformPerspective:1200,transformOrigin:gt,rotationY:ut},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*t/500,ease:T}),0)}),ut=90,1==g&&(ut=-90),h.find(".slotslide").each(function(e){var o=jQuery(this);f.add(punchgs.TweenLite.fromTo(o,y/1e3,{left:0,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformStyle:"flat",transformPerspective:1200,transformOrigin:gt,rotationY:0},{left:mt,rotationX:r.rotate,top:0,scale:1,rotationY:ut,delay:50*e/500,ease:z}),0),23==t&&f.add(punchgs.TweenLite.fromTo(o,y/2e3,{autoAlpha:1},{autoAlpha:0,delay:50*e/500+y/3e3,ease:z}),0)})}return f}}(jQuery);;
/********************************************
 * REVOLUTION 5.2.5.1 EXTENSION - VIDEO FUNCTIONS
 * @version: 1.8 (05.04.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
(function($) {
var _R = jQuery.fn.revolution,
   _ISM = _R.is_mobile();



///////////////////////////////////////////
//    EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
///////////////////////////////////////////
jQuery.extend(true,_R, {

   
   preLoadAudio : function(li,opt) {
      li.find('.tp-audiolayer').each(function() {

         var element = jQuery(this),
            obj = {};
         if (element.find('audio').length===0) {
            obj.src =  element.data('videomp4') !=undefined ? element.data('videomp4')  : '',
            obj.pre = element.data('videopreload') || '';
            if (element.attr('id')===undefined) element.attr('audio-layer-'+Math.round(Math.random()*199999));
            obj.id = element.attr('id');
            obj.status = "prepared";
            obj.start = jQuery.now();
            obj.waittime = element.data('videopreloadwait')*1000 || 5000;


            if (obj.pre=="auto" || obj.pre=="canplaythrough" || obj.pre=="canplay" || obj.pre=="progress") {            
               if (opt.audioqueue===undefined) opt.audioqueue = [];              
               opt.audioqueue.push(obj);
               _R.manageVideoLayer(element,opt);
            }
         }
      });   
   },

   preLoadAudioDone : function(nc,opt,event) {  
      
      if (opt.audioqueue && opt.audioqueue.length>0)
         jQuery.each(opt.audioqueue,function(i,obj) {
            if (nc.data('videomp4') === obj.src && (obj.pre === event || obj.pre==="auto")) {            
               obj.status = "loaded";
            }
         });
   },

   resetVideo : function(_nc,opt) {    
      switch (_nc.data('videotype')) {
         case "youtube":
            var player=_nc.data('player');
            try{
               if (_nc.data('forcerewind')=="on") {  //Removed Force Rewind Protection for Handy here !!!
                  var s = getStartSec(_nc.data('videostartat'));
                  s= s==-1 ? 0 : s;                
                  if (_nc.data('player')!=undefined) {               
                     _nc.data('player').seekTo(s);                                     
                     _nc.data('player').pauseVideo();
                  }
               }              
            } catch(e) {}
            if (_nc.find('.tp-videoposter').length==0)
               punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});   
         break;

         case "vimeo":
            var f = $f(_nc.find('iframe').attr("id"));   
            try{
               if (_nc.data('forcerewind')=="on")  {    //Removed Force Rewind Protection for Handy here !!!               
                  var s = getStartSec(_nc.data('videostartat')),
                     ct = 0;
                  s= s==-1 ? 0 : s;                                     
                  f.api("seekTo",s);                        
                  f.api("pause");            
                  
               }
               
            } catch(e) {}
            if (_nc.find('.tp-videoposter').length==0)
               punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});
         break;

         case "html5":
            if (_ISM && _nc.data('disablevideoonmobile')==1) return false;       
      
            var tag = _nc.data('audio')=="html5" ? "audio" : "video",
               jvideo = _nc.find(tag),
               video = jvideo[0];

            
            punchgs.TweenLite.to(jvideo,0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});
            
            if (_nc.data('forcerewind')=="on" && !_nc.hasClass("videoisplaying")) {
               try{
                  
                  var s = getStartSec(_nc.data('videostartat'));              
                  video.currentTime = s == -1 ? 0 : s;   
               } catch(e) {}
            }

            if (_nc.data('volume')=="mute" || _R.lastToggleState(_nc.data('videomutetoggledby')) || opt.globalmute===true)
               video.muted = true;        
         break;
      }
   },


   isVideoMuted : function(_nc,opt) {
      var muted = false;
      switch (_nc.data('videotype')) {
         case "youtube":
            try{
               var player=_nc.data('player');   
               muted = player.isMuted();                             
            } catch(e) {}
         break;
         case "vimeo":
            try{
               var f = $f(_nc.find('iframe').attr("id"));
               if (_nc.data('volume')=="mute")
                  muted = true;  
               
            } catch(e) {}
         break;
         case "html5":
            var tag = _nc.data('audio')=="html5" ? "audio" : "video",
               jvideo = _nc.find(tag),
               video = jvideo[0];

            if (video.muted)
               muted = true;                    
         break;
      }  
      return muted;  
   },

   muteVideo : function(_nc,opt) {        
      switch (_nc.data('videotype')) {
         case "youtube":
            try{
               var player=_nc.data('player');   
               
               player.mute();                            
            } catch(e) {}
         break;
         case "vimeo":
            try{
               var f = $f(_nc.find('iframe').attr("id"));
               _nc.data('volume',"mute");
               f.api('setVolume',0);
            } catch(e) {}
         break;
         case "html5":
            var tag = _nc.data('audio')=="html5" ? "audio" : "video",
               jvideo = _nc.find(tag),
               video = jvideo[0];
            video.muted = true;
         break;
      }     
   },

   unMuteVideo : function(_nc,opt) {   
      if (opt.globalmute===true) return;
      switch (_nc.data('videotype')) {
         case "youtube":
            try{
               var player=_nc.data('player');                  
               player.unMute();                             
            } catch(e) {}
         break;
         case "vimeo":
            try{
               var f = $f(_nc.find('iframe').attr("id"));
               _nc.data('volume',"1");
               f.api('setVolume',1);               
            } catch(e) {}
         break;
         case "html5":
            var tag = _nc.data('audio')=="html5" ? "audio" : "video",
               jvideo = _nc.find(tag),
               video = jvideo[0];
            video.muted = false;
         break;
      }     
   },

   



   stopVideo : function(_nc,opt) {  
      
      if (!opt.leaveViewPortBasedStop) 
         opt.lastplayedvideos = [];

      opt.leaveViewPortBasedStop = false;

      switch (_nc.data('videotype')) {
         case "youtube":
            try{
               var player=_nc.data('player');                  
               player.pauseVideo();                            
            } catch(e) {}
         break;
         case "vimeo":
            try{
               var f = $f(_nc.find('iframe').attr("id"));
               f.api("pause");
               
            } catch(e) {}
         break;
         case "html5":
            var tag = _nc.data('audio')=="html5" ? "audio" : "video",
               jvideo = _nc.find(tag),
               video = jvideo[0];
            if (jvideo!=undefined && video!=undefined) video.pause();                  
         break;
      }     
   },

   playVideo : function(_nc,opt) {     

      clearTimeout(_nc.data('videoplaywait'));     
      switch (_nc.data('videotype')) {
         case "youtube":            

            if (_nc.find('iframe').length==0) {
               _nc.append(_nc.data('videomarkup'));                  
               addVideoListener(_nc,opt,true);
            } else {                            
               if (_nc.data('player').playVideo !=undefined) {                         
                  
                  var s = getStartSec(_nc.data('videostartat')),
                     ct = _nc.data('player').getCurrentTime();
                     if (_nc.data('nextslideatend-triggered')==1) {
                        ct=-1;
                        _nc.data('nextslideatend-triggered',0);
                     }
                  if (s!=-1 && s>ct) _nc.data('player').seekTo(s);         
                  _nc.data('player').playVideo();
               } else {
                  _nc.data('videoplaywait',setTimeout(function() {                     
                     _R.playVideo(_nc,opt);
                  },50));
               }
            }
         break;
         case "vimeo":     
            
            if (_nc.find('iframe').length==0) {                   
               _nc.append(_nc.data('videomarkup'));         
               addVideoListener(_nc,opt,true);
               
            } else { 
                  if (_nc.hasClass("rs-apiready")) {
                     var id = _nc.find('iframe').attr("id"),
                        f = $f(id);                                  
                        if (f.api("play")==undefined) {                                               
                              _nc.data('videoplaywait',setTimeout(function() {   
                                 
                                 _R.playVideo(_nc,opt);
                              },50));                       
                        } else {                                                                                                                               
                           setTimeout(function() {       
                           
                              f.api("play");
                              var s = getStartSec(_nc.data('videostartat')),
                                 ct = _nc.data('currenttime');                            
                              if (_nc.data('nextslideatend-triggered')==1) {
                                 ct=-1;
                                 _nc.data('nextslideatend-triggered',0);
                              }
                              if (s!=-1 && s>ct) f.api("seekTo",s);     
                           },510);  
                        }                                                  
                  } else {
                     _nc.data('videoplaywait',setTimeout(function() {   
                        
                        _R.playVideo(_nc,opt);
                     },50));
                  }
            }
         break;
         case "html5":
            if (_ISM && _nc.data('disablevideoonmobile')==1) return false;       


            var tag = _nc.data('audio')=="html5" ? "audio" : "video",
               jvideo = _nc.find(tag),
               video = jvideo[0],
               html5vid = jvideo.parent();

            if (html5vid.data('metaloaded') != 1) {                  
               addEvent(video,'loadedmetadata',function(_nc) {                      
                  _R.resetVideo(_nc,opt);
                  video.play();
                  var s = getStartSec(_nc.data('videostartat')),
                     ct = video.currentTime;
                  if (_nc.data('nextslideatend-triggered')==1) {
                        ct=-1;
                        _nc.data('nextslideatend-triggered',0);
                     }
                  if (s!=-1 && s>ct) video.currentTime = s;
               }(_nc));
            } else {    
               video.play();              
               var s = getStartSec(_nc.data('videostartat')),
                  ct = video.currentTime;
               if (_nc.data('nextslideatend-triggered')==1) {
                     ct=-1;
                     _nc.data('nextslideatend-triggered',0);
                  }
               if (s!=-1 && s>ct) video.currentTime = s;                            
            }
         break;
      }
   },

   isVideoPlaying : function(_nc,opt) {
      
      var ret = false;
      if (opt.playingvideos != undefined) {
         jQuery.each(opt.playingvideos,function(i,nc) {
            if (_nc.attr('id') == nc.attr('id'))               
               ret = true;                                     
         });
      }     
      return ret;
   },

   removeMediaFromList : function(_nc,opt) {
      remVidfromList(_nc,opt);
   },

   prepareCoveredVideo : function(asprat,opt,nextcaption) {    
      var ifr = nextcaption.find('iframe, video'),
         wa = asprat.split(':')[0],
         ha = asprat.split(':')[1],
         li = nextcaption.closest('.tp-revslider-slidesli'),
         od = li.width()/li.height(),
         vd = wa/ha,
         nvh = (od/vd)*100,
         nvw = (vd/od)*100;   

      if (od>vd)                                               
         punchgs.TweenLite.to(ifr,0.001,{height:nvh+"%", width:"100%", top:-(nvh-100)/2+"%",left:"0px",position:"absolute"});
      else 
         punchgs.TweenLite.to(ifr,0.001,{width:nvw+"%", height:"100%", left:-(nvw-100)/2+"%",top:"0px",position:"absolute"});
      
      if (!ifr.hasClass("resizelistener")) {       
         ifr.addClass("resizelistener");     
         jQuery(window).resize(function() {
            clearTimeout(ifr.data('resizelistener'));
            ifr.data('resizelistener',setTimeout(function() {
               _R.prepareCoveredVideo(asprat,opt,nextcaption);
            },30));           
         })
      }
   },

   checkVideoApis : function(_nc,opt,addedApis) {     
      var httpprefix = location.protocol === 'https:' ? "https" : "http";
            
      if ((_nc.data('ytid')!=undefined  || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('youtube')>0)) opt.youtubeapineeded = true;
      if ((_nc.data('ytid')!=undefined  || _nc.find('iframe').length>0 &&  _nc.find('iframe').attr('src').toLowerCase().indexOf('youtube')>0) && addedApis.addedyt==0) {
         opt.youtubestarttime = jQuery.now();
         addedApis.addedyt=1;
         var s = document.createElement("script");                      
         s.src = "https://www.youtube.com/iframe_api"; /* Load Player API*/
         var before = document.getElementsByTagName("script")[0],
            loadit = true;
         jQuery('head').find('*').each(function(){
            if (jQuery(this).attr('src') == "https://www.youtube.com/iframe_api")
               loadit = false;
         });
         if (loadit) before.parentNode.insertBefore(s, before);

      }



      if ((_nc.data('vimeoid')!=undefined || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('vimeo')>0)) opt.vimeoapineeded = true;   
      if ((_nc.data('vimeoid')!=undefined || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('vimeo')>0) && addedApis.addedvim==0) {
         opt.vimeostarttime = jQuery.now();
         addedApis.addedvim=1;
         var f = document.createElement("script"),
            before = document.getElementsByTagName("script")[0],
            loadit = true;
         f.src = "https://secure-a.vimeocdn.com/js/froogaloop2.min.js"; /* Load Player API*/                   

         jQuery('head').find('*').each(function(){
            if (jQuery(this).attr('src') == "https://secure-a.vimeocdn.com/js/froogaloop2.min.js")
               loadit = false;
         });
         if (loadit)
            before.parentNode.insertBefore(f, before);
      }
      return addedApis;
   },

   manageVideoLayer : function(_nc,opt,recalled,internrecalled) {          
      // YOUTUBE AND VIMEO LISTENRES INITIALISATION      
      var vida = _nc.data("videoattributes"),
         vidytid = _nc.data('ytid'),
         vimeoid = _nc.data('vimeoid'),
         videopreload = _nc.data('videopreload') === "auto" || _nc.data('videopreload') === "canplay" || _nc.data('videopreload') === "canplaythrough" || _nc.data('videopreload') === "progress" ? "auto" : _nc.data('videopreload'),
         videomp = _nc.data('videomp4'),
         videowebm = _nc.data('videowebm'),
         videoogv = _nc.data('videoogv'),
         videoafs = _nc.data('allowfullscreenvideo'),
         videocontrols = _nc.data('videocontrols'),
         httpprefix = "http",
         videoloop = _nc.data('videoloop')=="loop" ? "loop" : _nc.data('videoloop')=="loopandnoslidestop" ? "loop" : "",
         videotype = (videomp!=undefined || videowebm!=undefined) ? "html5" : 
                  (vidytid!=undefined && String(vidytid).length>1) ? "youtube" : 
                  (vimeoid!=undefined && String(vimeoid).length>1) ? "vimeo" : "none",
         tag = _nc.data('audio')=="html5" ? "audio" : "video",
         newvideotype = (videotype=="html5" && _nc.find(tag).length==0) ? "html5" : 
                  (videotype=="youtube" && _nc.find('iframe').length==0) ? "youtube" : 
                  (videotype=="vimeo" && _nc.find('iframe').length==0) ? "vimeo" : "none";

         // VideLoop reset if Next Slide at End is set ! 
         videoloop = _nc.data('nextslideatend') === true ? "" : videoloop;


      _nc.data('videotype',videotype);
      // ADD HTML5 VIDEO IF NEEDED
      switch (newvideotype) {
         case "html5":

            if (videocontrols!="controls") videocontrols="";
            var tag = "video"

            //_nc.data('audio',"html5");
            if (_nc.data('audio')=="html5") {
               tag = "audio";
               _nc.addClass("tp-audio-html5");
            }
            
            var apptxt = '<'+tag+' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+videoloop+' preload="'+videopreload+'">';

            if (videopreload=="auto") opt.mediapreload = true;
            //if (_nc.data('videoposter')!=undefined) apptxt = apptxt + 'poster="'+_nc.data('videoposter')+'">';
            if (videowebm!=undefined && _R.get_browser().toLowerCase()=="firefox") apptxt = apptxt + '<source src="'+videowebm+'" type="video/webm" />';
            if (videomp!=undefined) apptxt = apptxt + '<source src="'+videomp+'" type="video/mp4" />';
            if (videoogv!=undefined) apptxt = apptxt + '<source src="'+videoogv+'" type="video/ogg" />';
            apptxt = apptxt + '</'+tag+'>';
            var hfm ="";
            if (videoafs==="true" ||  videoafs===true)
               hfm = '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>';

            if (videocontrols=="controls")
               apptxt = apptxt + ('<div class="tp-video-controls">'+
                                '<div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div>'+
                                '<div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div>'+
                                '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div>'+
                                '<div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+
                                hfm+
                                '</div>');
            
            _nc.data('videomarkup',apptxt)
            _nc.append(apptxt);

            // START OF HTML5 VIDEOS
            if ((_ISM && _nc.data('disablevideoonmobile')==1) ||_R.isIE(8)) _nc.find(tag).remove();

            // ADD HTML5 VIDEO CONTAINER           
            _nc.find(tag).each(function(i) {
               var video = this,
                  jvideo = jQuery(this);

               if (!jvideo.parent().hasClass("html5vid"))
                  jvideo.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>');

               var html5vid = jvideo.parent();
               if (html5vid.data('metaloaded') != 1) {
                  addEvent(video,'loadedmetadata',function(_nc) {    
                     htmlvideoevents(_nc,opt);
                     _R.resetVideo(_nc,opt);                
                  }(_nc));
               }                       
            });         
         break;
         case "youtube":
            httpprefix = "https"; 
            if (location.protocol === 'https:') 
               httpprefix = "https";      
            if (videocontrols=="none") {              
               vida = vida.replace("controls=1","controls=0");
               if (vida.toLowerCase().indexOf('controls')==-1)
                 vida = vida+"&controls=0";
            }
            
            var   s = getStartSec(_nc.data('videostartat')),
               e = getStartSec(_nc.data('videoendat'));
                        
            if (s!=-1) vida=vida+"&start="+s;
            if (e!=-1) vida=vida+"&end="+e;

            // CHECK VIDEO ORIGIN, AND EXTEND WITH WWW IN CASE IT IS MISSING !
            var orig = vida.split('origin='+httpprefix+'://'),
               vida_new = "";
                        
            if (orig.length>1) {
               vida_new = orig[0]+'origin='+httpprefix+'://';
               if (self.location.href.match(/www/gi) && !orig[1].match(/www/gi))                                              
                     vida_new=vida_new+"www."
               vida_new=vida_new+orig[1];
            } else {
               vida_new = vida;
            }  
            
            var yafv = videoafs==="true" ||  videoafs===true ? "allowfullscreen" : "";       
            _nc.data('videomarkup','<iframe style="visible:hidden" src="'+httpprefix+'://www.youtube.com/embed/'+vidytid+'?'+vida_new+'" '+yafv+' allow="autoplay; encrypted-media" width="100%" height="100%" style="width:100%;height:100%"></iframe>');
         break;

         case "vimeo":
            if (location.protocol === 'https:')
               httpprefix = "https";                                    
            _nc.data('videomarkup','<iframe style="visible:hidden" src="'+httpprefix+'://player.vimeo.com/video/'+vimeoid+'?autoplay=0&'+vida+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="100%;height:100%"></iframe>');
            
         break;
      }
      
      //if (videotype=="vimeo" || videotype=="youtube") {
      
      // IF VIDEOPOSTER EXISTING    
      var noposteronmobile = _ISM && _nc.data('noposteronmobile')=="on";
      
      if (_nc.data('videoposter')!=undefined && _nc.data('videoposter').length>2 && !noposteronmobile) {
         if (_nc.find('.tp-videoposter').length==0)
            _nc.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+_nc.data('videoposter')+'); background-size:cover;background-position:center center;"></div>');          
         if (_nc.find('iframe').length==0)
         _nc.find('.tp-videoposter').click(function() {              
            _R.playVideo(_nc,opt);                                            
            if (_ISM) {
               if (_nc.data('disablevideoonmobile')==1) return false;                  
               punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});
               punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});
            }
         })
      } else {
         if  (_ISM && _nc.data('disablevideoonmobile')==1) return false;         
         if (_nc.find('iframe').length==0 && (videotype=="youtube" || videotype=="vimeo")) {          
            _nc.append(_nc.data('videomarkup'));
            addVideoListener(_nc,opt,false);
         }
      }
      
      // ADD DOTTED OVERLAY IF NEEDED
      if (_nc.data('dottedoverlay')!="none" && _nc.data('dottedoverlay')!=undefined && _nc.find('.tp-dottedoverlay').length!=1)
         _nc.append('<div class="tp-dottedoverlay '+_nc.data('dottedoverlay')+'"></div>');
      
      _nc.addClass("HasListener");  

      if (_nc.data('bgvideo')==1) {
         punchgs.TweenLite.set(_nc.find('video, iframe'),{autoAlpha:0});
      }
   }
   
});





//////////////////////////////////////////////////////
// * Revolution Slider - VIDEO / API FUNCTIONS     //
// * @version: 1.0 (30.10.2014)                 //
// * @author ThemePunch                      //
//////////////////////////////////////////////////////

function getStartSec(st) {                
   return st == undefined ? -1 :jQuery.isNumeric(st) ? st : st.split(":").length>1 ? parseInt(st.split(":")[0],0)*60 + parseInt(st.split(":")[1],0) : st;
};

//    -  VIMEO ADD EVENT /////
var addEvent = function(element, eventName, callback) {
   if (element.addEventListener)
      element.addEventListener(eventName, callback, {capture:false,passive:true});
   else
      element.attachEvent(eventName, callback, {capture:false,passive:true});
};

var getVideoDatas = function(p,t,d) {
   var a = {};
   a.video = p;
   a.videotype = t;
   a.settings = d;
   return a;
}


var addVideoListener = function(_nc,opt,startnow) {
   
   var ifr = _nc.find('iframe'),
      frameID = "iframe"+Math.round(Math.random()*100000+1),
      loop = _nc.data('videoloop'),
      pforv = loop != "loopandnoslidestop";

   loop = loop =="loop" ||  loop =="loopandnoslidestop";

   // CARE ABOUT ASPECT RATIO

   if (_nc.data('forcecover')==1) {
      _nc.removeClass("fullscreenvideo").addClass("coverscreenvideo");        
      var asprat = _nc.data('aspectratio');                                         
      if (asprat!=undefined && asprat.split(":").length>1)        
         _R.prepareCoveredVideo(asprat,opt,_nc);
   }
   
   if (_nc.data('bgvideo')==1) {
      var asprat = _nc.data('aspectratio');                                         
      if (asprat!=undefined && asprat.split(":").length>1)        
         _R.prepareCoveredVideo(asprat,opt,_nc);
   }



   // IF LISTENER DOES NOT EXIST YET         
   ifr.attr('id',frameID);    

   if (startnow) _nc.data('startvideonow',true);

   if (_nc.data('videolistenerexist')!==1) { 
      switch (_nc.data('videotype')) {
         // YOUTUBE LISTENER
         case "youtube":

            var player = new YT.Player(frameID, {
               events: {
                  "onStateChange": function(event) {     
                                          
                     var container = _nc.closest('.tp-simpleresponsive'),
                        videorate = _nc.data('videorate'),
                        videostart = _nc.data('videostart'),                                                
                        fsmode = checkfullscreenEnabled();
                        
                     if (event.data == YT.PlayerState.PLAYING) {
                        punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});
                        punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});                     
                        if (_nc.data('volume')=="mute" || _R.lastToggleState(_nc.data('videomutetoggledby')) || opt.globalmute===true) {
                             player.mute();                            
                         } else {
                             player.unMute();
                             player.setVolume(parseInt(_nc.data('volume'),0) || 75);
                        }

                        opt.videoplaying=true;                          
                        addVidtoList(_nc,opt);  
                        if (pforv) 
                           opt.c.trigger('stoptimer');
                        else
                           opt.videoplaying=false;                      
                                                   
                        opt.c.trigger('revolution.slide.onvideoplay',getVideoDatas(player,"youtube",_nc.data()));
                        _R.toggleState(_nc.data('videotoggledby'));                                      
                     } else {                   
                        if (event.data==0 && loop) {
                           //player.playVideo();
                           var s = getStartSec(_nc.data('videostartat'));
                           if (s!=-1) player.seekTo(s);
                           player.playVideo();     
                           _R.toggleState(_nc.data('videotoggledby'));                    
                        }
                        
                        if (!fsmode && (event.data==0 || event.data==2) && _nc.data('showcoveronpause')=="on" && _nc.find('.tp-videoposter').length>0) {                            
                           punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut});
                           punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut});                                                       
                        } 
                        if ((event.data!=-1 && event.data!=3)) {
                                                      
                           opt.videoplaying=false;                         
                           opt.tonpause = false;
                           
                           remVidfromList(_nc,opt);
                           container.trigger('starttimer');
                           opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(player,"youtube",_nc.data()));
                           
                           if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))                          
                              _R.unToggleState(_nc.data('videotoggledby'));
                           
                        } 
                        
                        if (event.data==0 && _nc.data('nextslideatend')==true) {
                           exitFullscreen();
                           _nc.data('nextslideatend-triggered',1);
                           opt.c.revnext();
                           remVidfromList(_nc,opt);
                        } else {                         
                           remVidfromList(_nc,opt);
                           opt.videoplaying=false;
                           container.trigger('starttimer');
                           opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(player,"youtube",_nc.data()));
                           if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))                          
                              _R.unToggleState(_nc.data('videotoggledby'));
                        }
                     }
                  },
                  'onReady': function(event) {  
                     
                     
                     var videorate = _nc.data('videorate'),
                        videostart = _nc.data('videostart');
                        
                     _nc.addClass("rs-apiready");
                     if (videorate!=undefined)
                        event.target.setPlaybackRate(parseFloat(videorate));
                     
                     // PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
                     _nc.find('.tp-videoposter').unbind("click");
                     _nc.find('.tp-videoposter').click(function() {                             
                         if (!_ISM) {
                            player.playVideo();
                        }
                     })

                     if (_nc.data('startvideonow')) {
                        
                        _nc.data('player').playVideo();  
                        var s = getStartSec(_nc.data('videostartat'));
                        if (s!=-1) _nc.data('player').seekTo(s);
                        //_nc.find('.tp-videoposter').click();
                     }
                     _nc.data('videolistenerexist',1);               
                  }
               }
            });         
            _nc.data('player',player);
         break;

         // VIMEO LISTENER
         case "vimeo":
            var isrc = ifr.attr('src'),
               queryParameters = {}, queryString = isrc,
               re = /([^&=]+)=([^&]*)/g, m;
            // Creates a map with the query string parameters
            while (m = re.exec(queryString)) {
               queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            }
            if (queryParameters['player_id']!=undefined)
               isrc = isrc.replace(queryParameters['player_id'],frameID);
            else
               isrc=isrc+"&player_id="+frameID;
            try{ isrc = isrc.replace('api=0','api=1'); } catch(e) {}
            isrc=isrc+"&api=1";
            ifr.attr('src',isrc);
            
         
            var player = _nc.find('iframe')[0],
               vimcont = jQuery('#'+frameID),
               f = $f(frameID);           

            f.addEvent('ready', function(){  
                  
               _nc.addClass("rs-apiready");
               f.addEvent('play', function(data) {                   
                  _nc.data('nextslidecalled',0);
                  punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});
                  punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});                     
                  opt.c.trigger('revolution.slide.onvideoplay',getVideoDatas(f,"vimeo",_nc.data()));
                  opt.videoplaying=true;
                  
                  addVidtoList(_nc,opt);
                  if (pforv) 
                     opt.c.trigger('stoptimer');
                  else
                     opt.videoplaying=false;
                  if (_nc.data('volume')=="mute" || _R.lastToggleState(_nc.data('videomutetoggledby')) || opt.globalmute===true)
                    f.api('setVolume',"0")
                  else
                    f.api('setVolume',(parseInt(_nc.data('volume'),0)/100 || 0.75));
                  _R.toggleState(_nc.data('videotoggledby'));
               });

               f.addEvent('playProgress',function(data) {               
                  var et = getStartSec(_nc.data('videoendat'))                   
                  
                  _nc.data('currenttime',data.seconds);
                  if (et!=0 && (Math.abs(et-data.seconds) <0.3 && et>data.seconds) && _nc.data('nextslidecalled') != 1) {                                               
                     if (loop) {                      
                        
                        f.api("play");                      
                        var s = getStartSec(_nc.data('videostartat'));
                        if (s!=-1) f.api("seekTo",s);          
                     } else {                         
                        if (_nc.data('nextslideatend')==true) {   
                           _nc.data('nextslideatend-triggered',1);         
                           _nc.data('nextslidecalled',1);         
                           opt.c.revnext();                    
                        }
                        f.api("pause");
                     }
                  }
               });

               f.addEvent('finish', function(data) {
                     remVidfromList(_nc,opt);
                     opt.videoplaying=false;
                     opt.c.trigger('starttimer');
                     opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(f,"vimeo",_nc.data())); 
                     if (_nc.data('nextslideatend')==true) {
                        _nc.data('nextslideatend-triggered',1);
                        opt.c.revnext();
                     }
                     if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))
                        _R.unToggleState(_nc.data('videotoggledby'));
                     
               });

               f.addEvent('pause', function(data) {

                     if (_nc.find('.tp-videoposter').length>0 && _nc.data('showcoveronpause')=="on") {
                        punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut});
                        punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut});
                     } 
                     opt.videoplaying=false;
                     opt.tonpause = false;
                     
                     remVidfromList(_nc,opt);
                     opt.c.trigger('starttimer');
                     opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(f,"vimeo",_nc.data())); 
                     if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))
                        _R.unToggleState(_nc.data('videotoggledby'));
               });
               
               
               
               _nc.find('.tp-videoposter').unbind("click");
               _nc.find('.tp-videoposter').click(function() {                     
                   if (!_ISM) { 
                     
                     f.api("play");
                     return false;
                   }
               })
               if (_nc.data('startvideonow')) { 
                     
                     f.api("play");
                     var s = getStartSec(_nc.data('videostartat'));
                     if (s!=-1) f.api("seekTo",s);             
               }
               _nc.data('videolistenerexist',1);
            });
         break;
      }
   } else {
      var s = getStartSec(_nc.data('videostartat'));
      switch (_nc.data('videotype')) {
         // YOUTUBE LISTENER
         case "youtube":
            if (startnow) {
               _nc.data('player').playVideo();  
               if (s!=-1) _nc.data('player').seekTo()
            }
         break;
         case "vimeo":
            if (startnow) {
               
               var f = $f(_nc.find('iframe').attr("id"));   
               f.api("play");             
               if (s!=-1) f.api("seekTo",s);             
            }
         break;
      }
   }
}


var exitFullscreen = function() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}


var checkfullscreenEnabled = function() {
   try{
       // FF provides nice flag, maybe others will add support for this later on?
       if(window['fullScreen'] !== undefined) {
         return window.fullScreen;
       }
       // 5px height margin, just in case (needed by e.g. IE)
       var heightMargin = 5;
       if(jQuery.browser.webkit && /Apple Computer/.test(navigator.vendor)) {
         // Safari in full screen mode shows the navigation bar, 
         // which is 40px  
         heightMargin = 42;
       }
       return screen.width == window.innerWidth &&
           Math.abs(screen.height - window.innerHeight) < heightMargin;
     } catch(e) {

     }
  }
///////////////////////////////////////// HTML5 VIDEOS   ///////////////////////////////////////////  

var htmlvideoevents = function(_nc,opt,startnow) {



   if (_ISM && _nc.data('disablevideoonmobile')==1) return false;       
   var tag = _nc.data('audio')=="html5" ? "audio" : "video",
      jvideo = _nc.find(tag),
      video = jvideo[0],
      html5vid = jvideo.parent(),
      loop = _nc.data('videoloop'),
      pforv = loop != "loopandnoslidestop";

   loop = loop =="loop" ||  loop =="loopandnoslidestop";

   html5vid.data('metaloaded',1);
   // FIRST TIME LOADED THE HTML5 VIDEO

   if (_nc.data('bgvideo')==1 && (_nc.data('videoloop')==="none" || _nc.data('videoloop')===false))      
      pforv = false;
   
   
                        
   
   //PLAY, STOP VIDEO ON CLICK OF PLAY, POSTER ELEMENTS
   if (jvideo.attr('control') == undefined ) {
      if (_nc.find('.tp-video-play-button').length==0 && !_ISM)
         _nc.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>');
      _nc.find('video, .tp-poster, .tp-video-play-button').click(function() {
         if (_nc.hasClass("videoisplaying"))
            video.pause();
         else
            video.play();
      })
   }

   // PRESET FULLCOVER VIDEOS ON DEMAND
   if (_nc.data('forcecover')==1 || _nc.hasClass('fullscreenvideo') || _nc.data('bgvideo')==1)  {
      if (_nc.data('forcecover')==1 || _nc.data('bgvideo')==1) {
         html5vid.addClass("fullcoveredvideo"); 
         var asprat = _nc.data('aspectratio') || "4:3";           
         _R.prepareCoveredVideo(asprat,opt,_nc);
      }
      else
         html5vid.addClass("fullscreenvideo");           
   }
   

   // FIND CONTROL BUTTONS IN VIDEO, AND ADD EVENT LISTENERS ON THEM
   var playButton = _nc.find('.tp-vid-play-pause')[0],
      muteButton = _nc.find('.tp-vid-mute')[0],
      fullScreenButton = _nc.find('.tp-vid-full-screen')[0],
      seekBar = _nc.find('.tp-seek-bar')[0],
      volumeBar = _nc.find('.tp-volume-bar')[0];

   if (playButton!=undefined) {
      // Event listener for the play/pause button
      addEvent(playButton,"click", function() {
         if (video.paused == true) 
            video.play();
         else
            video.pause();
      });
   }

   if (muteButton!=undefined) {

      // Event listener for the mute button
      addEvent(muteButton,"click", function() {
         if (video.muted == false) {
            video.muted = true;
            muteButton.innerHTML = "Unmute";
         } else {
            video.muted = false;
            muteButton.innerHTML = "Mute";
         }
      });
   }

   if (fullScreenButton!=undefined) {

      // Event listener for the full-screen button
      if (fullScreenButton)
         addEvent(fullScreenButton,"click", function() {
            if (video.requestFullscreen) {
               video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
               video.mozRequestFullScreen(); // Firefox
            } else if (video.webkitRequestFullscreen) {
               video.webkitRequestFullscreen(); // Chrome and Safari
            }
         });

   }

   if (seekBar !=undefined) {

      // Event listener for the seek bar
      addEvent(seekBar,"change", function() {                     
         var time = video.duration * (seekBar.value / 100);                   
         video.currentTime = time;                                

      });

      // Pause the video when the seek handle is being dragged
      addEvent(seekBar,"mousedown", function() {
         _nc.addClass("seekbardragged");
         video.pause();

      });

      // Play the video when the seek handle is dropped
      addEvent(seekBar,"mouseup", function() {
         _nc.removeClass("seekbardragged");
         video.play();

      });
   }

   addEvent(video,"canplaythrough", function() {
      _R.preLoadAudioDone(_nc,opt,"canplaythrough");
   });

   addEvent(video,"canplay", function() {
      _R.preLoadAudioDone(_nc,opt,"canplay");
   });

   addEvent(video,"progress", function() {
      _R.preLoadAudioDone(_nc,opt,"progress");
   });

   // Update the seek bar as the video plays
   addEvent(video,"timeupdate", function() {                
   
      var value = (100 / video.duration) * video.currentTime,
         et = getStartSec(_nc.data('videoendat')),
         cs  =video.currentTime; 
      if (seekBar != undefined)  
         seekBar.value = value;  
      
      if (et!=0 && et!=-1 && (Math.abs(et-cs) <=0.3 && et>cs) && _nc.data('nextslidecalled') != 1) {        
         if (loop) {
            video.play();
            var s = getStartSec(_nc.data('videostartat'));
            if (s!=-1) video.currentTime = s;            
         } else {

            
            if (_nc.data('nextslideatend')==true) {                     
               _nc.data('nextslideatend-triggered',1);      
               _nc.data('nextslidecalled',1);                  
               opt.just_called_nextslide_at_htmltimer = true; 
               opt.c.revnext();                 
               setTimeout(function() {
                  opt.just_called_nextslide_at_htmltimer = false;
               },1000);
            }
            video.pause();
         }
      }
   });

   
   if (volumeBar != undefined) {    

      // Event listener for the volume bar
      addEvent(volumeBar,"change", function() {
         // Update the video volume
         video.volume = volumeBar.value;
      });
   }


   // VIDEO EVENT LISTENER FOR "PLAY"
   addEvent(video,"play",function() {

      
      _nc.data('nextslidecalled',0);
      
      var vol = _nc.data('volume');
      vol = vol!=undefined && vol!="mute" ?parseFloat(vol)/100 : vol;
      
      if (opt.globalmute===true) 
         video.muted = true;
      else
         video.muted = false;

      if (vol>1) vol = vol/100;
      if (vol=="mute")
         video.muted=true;
      else
      if (vol!=undefined) 
         video.volume = vol;



      _nc.addClass("videoisplaying");

      var tag = _nc.data('audio')=="html5" ? "audio" : "video";

      addVidtoList(_nc,opt);

      if (!pforv || tag=="audio") {          
         opt.videoplaying=false;
         if (tag!="audio")  opt.c.trigger('starttimer');
         opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(video,"html5",_nc.data()));
      } else {          
         opt.videoplaying=true;
         opt.c.trigger('stoptimer');
         opt.c.trigger('revolution.slide.onvideoplay',getVideoDatas(video,"html5",_nc.data()));          
      }

      punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});
      punchgs.TweenLite.to(_nc.find(tag),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});  

      var playButton = _nc.find('.tp-vid-play-pause')[0],
         muteButton = _nc.find('.tp-vid-mute')[0];
      if (playButton!=undefined)
         playButton.innerHTML = "Pause";
      if (muteButton!=undefined && video.muted)
         muteButton.innerHTML = "Unmute";

      _R.toggleState(_nc.data('videotoggledby'));
   });

   // VIDEO EVENT LISTENER FOR "PAUSE"
   addEvent(video,"pause",function() {
      
      var tag = _nc.data('audio')=="html5" ? "audio" : "video",
         fsmode = checkfullscreenEnabled();
      

      if (!fsmode && _nc.find('.tp-videoposter').length>0 && _nc.data('showcoveronpause')=="on" && !_nc.hasClass("seekbardragged")) {
         punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut});
         punchgs.TweenLite.to(_nc.find(tag),0.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut});
      } 
      
      _nc.removeClass("videoisplaying");
      opt.videoplaying=false;
      remVidfromList(_nc,opt);
      if (tag!="audio")  opt.c.trigger('starttimer');
      opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(video,"html5",_nc.data()));
      var playButton = _nc.find('.tp-vid-play-pause')[0];
      if (playButton!=undefined)
         playButton.innerHTML = "Play";      

      if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))
         _R.unToggleState(_nc.data('videotoggledby'));
   });

   // VIDEO EVENT LISTENER FOR "END"
   

   addEvent(video,"ended",function() {    
      exitFullscreen();
      
      remVidfromList(_nc,opt);
      opt.videoplaying=false;
      remVidfromList(_nc,opt);
      if (tag!="audio") opt.c.trigger('starttimer');
      opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(video,"html5",_nc.data()));


      if (_nc.data('nextslideatend')===true && video.currentTime>0) {   
         
         if (!opt.just_called_nextslide_at_htmltimer==true) {
            _nc.data('nextslideatend-triggered',1);
            opt.c.revnext();
            opt.just_called_nextslide_at_htmltimer = true;
         }        
         setTimeout(function() {          
            opt.just_called_nextslide_at_htmltimer = false;
         },1500)
      }
      _nc.removeClass("videoisplaying");
      
      
   });      
}



var addVidtoList = function(_nc,opt) {

   if (opt.playingvideos == undefined) opt.playingvideos = new Array();    
   
   // STOP OTHER VIDEOS
   if (_nc.data('stopallvideos')) {    
      if (opt.playingvideos != undefined && opt.playingvideos.length>0) { 
         opt.lastplayedvideos = jQuery.extend(true,[],opt.playingvideos);
         jQuery.each(opt.playingvideos,function(i,_nc) {
            _R.stopVideo(_nc,opt);
         });
      }        
   }  
   opt.playingvideos.push(_nc);  
   opt.currentLayerVideoIsPlaying = _nc;     
   
}


var remVidfromList = function(_nc,opt) {        
   if (opt.playingvideos != undefined && jQuery.inArray(_nc,opt.playingvideos)>=0)
      opt.playingvideos.splice(jQuery.inArray(_nc,opt.playingvideos),1);      
}





   

})(jQuery);;
