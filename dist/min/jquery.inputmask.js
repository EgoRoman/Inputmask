/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.4.19
*/
(function(e){if(void 0===e.fn.inputmask){var R=function(e){var g=document.createElement("input");e="on"+e;var a=e in g;a||(g.setAttribute(e,"return;"),a="function"==typeof g[e]);return a},F=function(f,g,a){return(f=a.aliases[f])?(f.alias&&F(f.alias,void 0,a),e.extend(!0,a,f),e.extend(!0,a,g),!0):!1},D=function(f){function g(a){f.numericInput&&(a=a.split("").reverse().join(""));var d=!1,g=0,m=f.greedy,n=f.repeat;"*"==n&&(m=!1);1==a.length&&!1==m&&0!=n&&(f.placeholder="");a=e.map(a.split(""),function(a,
e){var k=[];if(a==f.escapeChar)d=!0;else if(a!=f.optionalmarker.start&&a!=f.optionalmarker.end||d){var p=f.definitions[a];if(p&&!d)for(var n=0;n<p.cardinality;n++)k.push(f.placeholder.charAt((g+n)%f.placeholder.length));else k.push(a),d=!1;g+=k.length;return k}});for(var r=a.slice(),p=1;p<n&&m;p++)r=r.concat(a.slice());return{mask:r,repeat:n,greedy:m}}function a(a){f.numericInput&&(a=a.split("").reverse().join(""));var d=!1,n=!1,g=!1;return e.map(a.split(""),function(a,e){var k=[];if(a==f.escapeChar)n=
!0;else{if(a!=f.optionalmarker.start||n){if(a!=f.optionalmarker.end||n){var l=f.definitions[a];if(l&&!n){for(var q=l.prevalidator,G=q?q.length:0,x=1;x<l.cardinality;x++){var C=G>=x?q[x-1]:[],K=C.validator,C=C.cardinality;k.push({fn:K?"string"==typeof K?RegExp(K):new function(){this.test=K}:/./,cardinality:C?C:1,optionality:d,newBlockMarker:!0==d?g:!1,offset:0,casing:l.casing,def:l.definitionSymbol||a});!0==d&&(g=!1)}k.push({fn:l.validator?"string"==typeof l.validator?RegExp(l.validator):new function(){this.test=
l.validator}:/./,cardinality:l.cardinality,optionality:d,newBlockMarker:g,offset:0,casing:l.casing,def:l.definitionSymbol||a})}else k.push({fn:null,cardinality:0,optionality:d,newBlockMarker:g,offset:0,casing:null,def:a}),n=!1;g=!1;return k}d=!1}else d=!0;g=!0}})}function l(a){for(var e=a.length,d=0;d<e&&a.charAt(d)!=f.optionalmarker.start;d++);var g=[a.substring(0,d)];d<e&&g.push(a.substring(d+1,e));return g}function d(k,s,x){for(var m=0,y=0,r=s.length,p=0;p<r&&!(s.charAt(p)==f.optionalmarker.start&&
m++,s.charAt(p)==f.optionalmarker.end&&y++,0<m&&m==y);p++);m=[s.substring(0,p)];p<r&&m.push(s.substring(p+1,r));p=l(m[0]);1<p.length?(s=k+p[0]+(f.optionalmarker.start+p[1]+f.optionalmarker.end)+(1<m.length?m[1]:""),-1==e.inArray(s,n)&&""!=s&&(n.push(s),r=g(s),q.push({mask:s,_buffer:r.mask,buffer:r.mask.slice(),tests:a(s),lastValidPosition:-1,greedy:r.greedy,repeat:r.repeat,metadata:x})),s=k+p[0]+(1<m.length?m[1]:""),-1==e.inArray(s,n)&&""!=s&&(n.push(s),r=g(s),q.push({mask:s,_buffer:r.mask,buffer:r.mask.slice(),
tests:a(s),lastValidPosition:-1,greedy:r.greedy,repeat:r.repeat,metadata:x})),1<l(p[1]).length&&d(k+p[0],p[1]+m[1],x),1<m.length&&1<l(m[1]).length&&(d(k+p[0]+(f.optionalmarker.start+p[1]+f.optionalmarker.end),m[1],x),d(k+p[0],m[1],x))):(s=k+m,-1==e.inArray(s,n)&&""!=s&&(n.push(s),r=g(s),q.push({mask:s,_buffer:r.mask,buffer:r.mask.slice(),tests:a(s),lastValidPosition:-1,greedy:r.greedy,repeat:r.repeat,metadata:x})))}var q=[],n=[];e.isFunction(f.mask)&&(f.mask=f.mask.call(this,f));e.isArray(f.mask)?
e.each(f.mask,function(a,e){void 0!=e.mask?d("",e.mask.toString(),e):d("",e.toString())}):d("",f.mask.toString());return f.greedy?q:q.sort(function(a,e){return a.mask.length-e.mask.length})},da=null!==navigator.userAgent.match(/msie 10/i),ea=null!==navigator.userAgent.match(/iphone/i),fa=null!==navigator.userAgent.match(/android.*safari.*/i),W=null!==navigator.userAgent.match(/android.*chrome.*/i),ga=R("paste")?"paste":R("input")?"input":"propertychange",x=function(f,g,a,l){function d(){return f[g]}
function q(){return d().tests}function n(){return d()._buffer}function k(){return d().buffer}function s(h,c,b){function u(h,b,c,u){for(var e=y(h),d=c?1:0,w="",L=b.buffer,f=b.tests[e].cardinality;f>d;f--)w+=G(L,e-(f-1));c&&(w+=c);return null!=b.tests[e].fn?b.tests[e].fn.test(w,L,h,u,a):c==G(b._buffer,h,!0)||c==a.skipOptionalPartCharacter?{refresh:!0,c:G(b._buffer,h,!0),pos:h}:!1}if(b=!0===b){var w=u(h,d(),c,b);!0===w&&(w={pos:h});return w}var L=[],w=!1,A=g,n=k().slice(),l=d().lastValidPosition;H(h);
var s=[];e.each(f,function(a,e){if("object"==typeof e){g=a;var f=h,v=d().lastValidPosition,q;if(v==l){if(1<f-l)for(v=-1==v?0:v;v<f&&(q=u(v,d(),n[v],!0),!1!==q);v++)I(k(),v,n[v],!0),!0===q&&(q={pos:v}),q=q.pos||v,d().lastValidPosition<q&&(d().lastValidPosition=q);if(!m(f)&&!u(f,d(),c,b)){v=p(f)-f;for(q=0;q<v&&!1===u(++f,d(),c,b);q++);s.push(g)}}(d().lastValidPosition>=l||g==A)&&0<=f&&f<r()&&(w=u(f,d(),c,b),!1!==w&&(!0===w&&(w={pos:f}),q=w.pos||f,d().lastValidPosition<q&&(d().lastValidPosition=q)),
L.push({activeMasksetIndex:a,result:w}))}});g=A;return function(a,b){var w=!1;e.each(b,function(h,b){if(w=-1==e.inArray(b.activeMasksetIndex,a)&&!1!==b.result)return!1});if(w)b=e.map(b,function(h,b){if(-1==e.inArray(h.activeMasksetIndex,a))return h;f[h.activeMasksetIndex].lastValidPosition=l});else{var d=-1,L=-1,k;e.each(b,function(h,b){-1!=e.inArray(b.activeMasksetIndex,a)&&!1!==b.result&(-1==d||d>b.result.pos)&&(d=b.result.pos,L=b.activeMasksetIndex)});b=e.map(b,function(b,w){if(-1!=e.inArray(b.activeMasksetIndex,
a)){if(b.result.pos==d)return b;if(!1!==b.result){for(var A=h;A<d;A++)if(k=u(A,f[b.activeMasksetIndex],f[L].buffer[A],!0),!1===k){f[b.activeMasksetIndex].lastValidPosition=d-1;break}else I(f[b.activeMasksetIndex].buffer,A,f[L].buffer[A],!0),f[b.activeMasksetIndex].lastValidPosition=A;k=u(d,f[b.activeMasksetIndex],c,!0);!1!==k&&(I(f[b.activeMasksetIndex].buffer,d,c,!0),f[b.activeMasksetIndex].lastValidPosition=d);return b}}})}return b}(s,L)}function x(){var a=g,c={activeMasksetIndex:0,lastValidPosition:-1,
next:-1};e.each(f,function(a,h){"object"==typeof h&&(g=a,d().lastValidPosition>c.lastValidPosition?(c.activeMasksetIndex=a,c.lastValidPosition=d().lastValidPosition,c.next=p(d().lastValidPosition)):d().lastValidPosition==c.lastValidPosition&&(-1==c.next||c.next>p(d().lastValidPosition))&&(c.activeMasksetIndex=a,c.lastValidPosition=d().lastValidPosition,c.next=p(d().lastValidPosition)))});g=-1!=c.lastValidPosition&&f[a].lastValidPosition==c.lastValidPosition?a:c.activeMasksetIndex;a!=g&&(K(k(),p(c.lastValidPosition),
r()),d().writeOutBuffer=!0);t.data("_inputmask").activeMasksetIndex=g}function m(a){a=y(a);a=q()[a];return void 0!=a?a.fn:!1}function y(a){return a%q().length}function r(){return a.getMaskLength(n(),d().greedy,d().repeat,k(),a)}function p(a){var c=r();if(a>=c)return c;for(;++a<c&&!m(a););return a}function H(a){if(0>=a)return 0;for(;0<--a&&!m(a););return a}function I(a,c,b,u){u&&(c=F(a,c));u=q()[y(c)];var d=b;if(void 0!=d&&void 0!=u)switch(u.casing){case "upper":d=b.toUpperCase();break;case "lower":d=
b.toLowerCase()}a[c]=d}function G(a,c,b){b&&(c=F(a,c));return a[c]}function F(a,c){for(var b;void 0==a[c]&&a.length<r();)for(b=0;void 0!==n()[b];)a.push(n()[b++]);return c}function C(a,c,b){a._valueSet(c.join(""));void 0!=b&&z(a,b)}function K(a,c,b,d){for(var e=r();c<b&&c<e;c++)!0===d?m(c)||I(a,c,""):I(a,c,G(n().slice(),c,!0))}function D(a,c){var b=y(c);I(a,c,G(n(),b))}function N(h){return a.placeholder.charAt(h%a.placeholder.length)}function O(a,c,b,u,w){u=void 0!=u?u.slice():S(a._valueGet()).split("");
e.each(f,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1,b.p=-1)});!0!==b&&(g=0);c&&a._valueSet("");r();e.each(u,function(u,f){if(!0===w){var k=d().p,k=-1==k?k:H(k),g=-1==k?u:p(k);-1==e.inArray(f,n().slice(k+1,g))&&T.call(a,void 0,!0,f.charCodeAt(0),c,b,u)}else T.call(a,void 0,!0,f.charCodeAt(0),c,b,u)});!0===b&&-1!=d().p&&(d().lastValidPosition=H(d().p))}function R(a){return e.inputmask.escapeRegex.call(this,a)}function S(a){return a.replace(RegExp("("+R(n().join(""))+
")*$"),"")}function U(a){var c=k(),b=c.slice(),d,e;for(e=b.length-1;0<=e;e--)if(d=y(e),q()[d].optionality)if(m(e)&&s(e,c[e],!0))break;else b.pop();else break;C(a,b)}function ha(h,c){if(!q()||!0!==c&&h.hasClass("hasDatepicker"))return h[0]._valueGet();var b=e.map(k(),function(a,b){return m(b)&&s(b,a,!0)?a:null}),b=(B?b.reverse():b).join("");return void 0!=a.onUnMask?a.onUnMask.call(this,k().join(""),b):b}function J(h){!B||"number"!=typeof h||a.greedy&&""==a.placeholder||(h=k().length-h);return h}function z(h,
c,b){var d=h.jquery&&0<h.length?h[0]:h;if("number"==typeof c)c=J(c),b=J(b),e(h).is(":visible")&&(b="number"==typeof b?b:c,d.scrollLeft=d.scrollWidth,!1==a.insertMode&&c==b&&b++,d.setSelectionRange?(d.selectionStart=c,d.selectionEnd=fa?c:b):d.createTextRange&&(h=d.createTextRange(),h.collapse(!0),h.moveEnd("character",b),h.moveStart("character",c),h.select()));else{if(!e(h).is(":visible"))return{begin:0,end:0};d.setSelectionRange?(c=d.selectionStart,b=d.selectionEnd):document.selection&&document.selection.createRange&&
(h=document.selection.createRange(),c=0-h.duplicate().moveStart("character",-1E5),b=c+h.text.length);c=J(c);b=J(b);return{begin:c,end:b}}}function P(d){if("*"!=a.repeat){var c=!1,b=0,u=g;e.each(f,function(a,e){if("object"==typeof e){g=a;var u=H(r());if(e.lastValidPosition>=b&&e.lastValidPosition==u){for(var f=!0,k=0;k<=u;k++){var l=m(k),p=y(k);if(l&&(void 0==d[k]||d[k]==N(k))||!l&&d[k]!=n()[p]){f=!1;break}}if(c=c||f)return!1}b=e.lastValidPosition}});g=u;return c}}function ia(a){a=e._data(a).events;
e.each(a,function(a,b){e.each(b,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function ja(a){var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(a,"value"));if(c&&c.get){if(!a._valueGet){var b=c.get,d=c.set;a._valueGet=function(){return B?b.call(this).split("").reverse().join(""):b.call(this)};a._valueSet=function(a){d.call(this,B?
a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=e(this),d=e(this).data("_inputmask"),c=d.masksets,h=d.activeMasksetIndex;return d&&d.opts.autoUnmask?a.inputmask("unmaskedvalue"):b.call(this)!=c[h]._buffer.join("")?b.call(this):""},set:function(a){d.call(this,a);e(this).triggerHandler("setvalue.inputmask")}})}}else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(b=a.__lookupGetter__("value"),d=a.__lookupSetter__("value"),a._valueGet=
function(){return B?b.call(this).split("").reverse().join(""):b.call(this)},a._valueSet=function(a){d.call(this,B?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=e(this),d=e(this).data("_inputmask"),c=d.masksets,h=d.activeMasksetIndex;return d&&d.opts.autoUnmask?a.inputmask("unmaskedvalue"):b.call(this)!=c[h]._buffer.join("")?b.call(this):""}),a.__defineSetter__("value",function(a){d.call(this,a);e(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=
function(){return B?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=B?a.split("").reverse().join(""):a}),void 0==e.valHooks.text||!0!=e.valHooks.text.inputmaskpatch)b=e.valHooks.text&&e.valHooks.text.get?e.valHooks.text.get:function(a){return a.value},d=e.valHooks.text&&e.valHooks.text.set?e.valHooks.text.set:function(a,b){a.value=b;return a},jQuery.extend(e.valHooks,{text:{get:function(a){var d=e(a);if(d.data("_inputmask")){if(d.data("_inputmask").opts.autoUnmask)return d.inputmask("unmaskedvalue");
a=b(a);d=d.data("_inputmask");return a!=d.masksets[d.activeMasksetIndex]._buffer.join("")?a:""}return b(a)},set:function(a,b){var c=e(a),h=d(a,b);c.data("_inputmask")&&c.triggerHandler("setvalue.inputmask");return h},inputmaskpatch:!0}})}function X(a,c,b,e){var f=k();if(!1!==e)for(;!m(a)&&0<=a-1;)a--;for(e=a;e<c&&e<r();e++)if(m(e)){D(f,e);var g=p(e),l=G(f,g);if(l!=N(g))if(g<r()&&!1!==s(e,l,!0)&&q()[y(e)].def==q()[y(g)].def)I(f,e,l,!0);else if(m(e))break}else D(f,e);void 0!=b&&I(f,H(c),b);if(!1==d().greedy){c=
S(f.join("")).split("");f.length=c.length;e=0;for(b=f.length;e<b;e++)f[e]=c[e];0==f.length&&(d().buffer=n().slice())}return a}function Y(a,c,b){var e=k();if(G(e,a,!0)!=N(a))for(var f=H(c);f>a&&0<=f;f--)if(m(f)){var g=H(f),l=G(e,g);l!=N(g)&&!1!==s(g,l,!0)&&q()[y(f)].def==q()[y(g)].def&&(I(e,f,l,!0),D(e,g))}else D(e,f);void 0!=b&&G(e,a)==N(a)&&I(e,a,b);a=e.length;if(!1==d().greedy){b=S(e.join("")).split("");e.length=b.length;f=0;for(g=e.length;f<g;f++)e[f]=b[f];0==e.length&&(d().buffer=n().slice())}return c-
(a-e.length)}function Z(e,c,b){if(a.numericInput||B){switch(c){case a.keyCode.BACKSPACE:c=a.keyCode.DELETE;break;case a.keyCode.DELETE:c=a.keyCode.BACKSPACE}if(B){var g=b.end;b.end=b.begin;b.begin=g}}g=!0;b.begin==b.end?(g=c==a.keyCode.BACKSPACE?b.begin-1:b.begin,a.isNumeric&&""!=a.radixPoint&&k()[g]==a.radixPoint&&(b.begin=k().length-1==g?b.begin:c==a.keyCode.BACKSPACE?g:p(g),b.end=b.begin),g=!1,c==a.keyCode.BACKSPACE?b.begin--:c==a.keyCode.DELETE&&b.end++):1!=b.end-b.begin||a.insertMode||(g=!1,
c==a.keyCode.BACKSPACE&&b.begin--);K(k(),b.begin,b.end);var l=r();if(!1==a.greedy)X(b.begin,l,void 0,!B&&c==a.keyCode.BACKSPACE&&!g);else{for(var n=b.begin,A=b.begin;A<b.end;A++)if(m(A)||!g)n=X(b.begin,l,void 0,!B&&c==a.keyCode.BACKSPACE&&!g);g||(b.begin=n)}c=p(-1);K(k(),b.begin,b.end,!0);O(e,!1,void 0==f[1]||c>=b.end,k());d().lastValidPosition<c?(d().lastValidPosition=-1,d().p=c):d().p=b.begin}function $(f){V=!1;var c=this,b=e(c),g=f.keyCode,l=z(c);g==a.keyCode.BACKSPACE||g==a.keyCode.DELETE||ea&&
127==g||f.ctrlKey&&88==g?(f.preventDefault(),88==g&&(M=k().join("")),Z(c,g,l),x(),C(c,k(),d().p),c._valueGet()==n().join("")&&b.trigger("cleared"),a.showTooltip&&b.prop("title",d().mask)):g==a.keyCode.END||g==a.keyCode.PAGE_DOWN?setTimeout(function(){var b=p(d().lastValidPosition);a.insertMode||b!=r()||f.shiftKey||b--;z(c,f.shiftKey?l.begin:b,b)},0):g==a.keyCode.HOME&&!f.shiftKey||g==a.keyCode.PAGE_UP?z(c,0,f.shiftKey?l.begin:0):g==a.keyCode.ESCAPE||90==g&&f.ctrlKey?(O(c,!0,!1,M.split("")),b.click()):
g!=a.keyCode.INSERT||f.shiftKey||f.ctrlKey?!1!=a.insertMode||f.shiftKey||(g==a.keyCode.RIGHT?setTimeout(function(){var a=z(c);z(c,a.begin)},0):g==a.keyCode.LEFT&&setTimeout(function(){var a=z(c);z(c,a.begin-1)},0)):(a.insertMode=!a.insertMode,z(c,a.insertMode||l.begin!=r()?l.begin:l.begin-1));b=z(c);!0===a.onKeyDown.call(this,f,k(),a)&&z(c,b.begin,b.end);aa=-1!=e.inArray(g,a.ignorables)}function T(h,c,b,l,n,q){if(void 0==b&&V)return!1;V=!0;var A=e(this);h=h||window.event;b=c?b:h.which||h.charCode||
h.keyCode;if(!(!0===c||h.ctrlKey&&h.altKey)&&(h.ctrlKey||h.metaKey||aa))return!0;if(b){!0!==c&&46==b&&!1==h.shiftKey&&","==a.radixPoint&&(b=44);var m,t,y=String.fromCharCode(b);c?(b=n?q:d().lastValidPosition+1,m={begin:b,end:b}):m=z(this);q=B?1<m.begin-m.end||1==m.begin-m.end&&a.insertMode:1<m.end-m.begin||1==m.end-m.begin&&a.insertMode;var F=g;q&&(g=F,e.each(f,function(a,b){"object"==typeof b&&(g=a,d().undoBuffer=k().join(""))}),Z(this,a.keyCode.DELETE,m),a.insertMode||e.each(f,function(a,b){"object"==
typeof b&&(g=a,Y(m.begin,r()),d().lastValidPosition=p(d().lastValidPosition))}),g=F);var D=k().join("").indexOf(a.radixPoint);a.isNumeric&&!0!==c&&-1!=D&&(a.greedy&&m.begin<=D?(m.begin=H(m.begin),m.end=m.begin):y==a.radixPoint&&(m.begin=D,m.end=m.begin));var E=m.begin;b=s(E,y,n);!0===n&&(b=[{activeMasksetIndex:g,result:b}]);var v=-1;e.each(b,function(b,e){g=e.activeMasksetIndex;d().writeOutBuffer=!0;var c=e.result;if(!1!==c){var f=!1,h=k();!0!==c&&(f=c.refresh,E=void 0!=c.pos?c.pos:E,y=void 0!=c.c?
c.c:y);if(!0!==f){if(!0==a.insertMode){c=r();for(h=h.slice();G(h,c,!0)!=N(c)&&c>=E;)c=0==c?-1:H(c);c>=E?(Y(E,r(),y),h=d().lastValidPosition,c=p(h),c!=r()&&h>=E&&G(k(),c,!0)!=N(c)&&(d().lastValidPosition=c)):d().writeOutBuffer=!1}else I(h,E,y,!0);if(-1==v||v>p(E))v=p(E)}else!n&&(h=E<r()?E+1:E,-1==v||v>h)&&(v=h);v>d().p&&(d().p=v)}});!0!==n&&(g=F,x());if(!1!==l&&(e.each(b,function(a,b){if(b.activeMasksetIndex==g)return t=b,!1}),void 0!=t)){var K=this;setTimeout(function(){a.onKeyValidation.call(K,t.result,
a)},0);if(d().writeOutBuffer&&!1!==t.result){var J=k();l=c?void 0:a.numericInput?E>D?H(v):y==a.radixPoint?v-1:H(v-1):v;C(this,J,l);!0!==c&&setTimeout(function(){!0===P(J)&&A.trigger("complete");Q=!0;A.trigger("input")},0)}else q&&(d().buffer=d().undoBuffer.split(""))}a.showTooltip&&A.prop("title",d().mask);h&&(h.preventDefault?h.preventDefault():h.returnValue=!1)}}function ka(d){var c=e(this),b=d.keyCode,f=k();W&&b==a.keyCode.BACKSPACE&&ba==this._valueGet()&&$.call(this,d);a.onKeyUp.call(this,d,f,
a);b==a.keyCode.TAB&&a.showMaskOnFocus&&(c.hasClass("focus.inputmask")&&0==this._valueGet().length?(f=n().slice(),C(this,f),z(this,0),M=k().join("")):(C(this,f),f.join("")==n().join("")&&-1!=e.inArray(a.radixPoint,f)?(z(this,J(0)),c.click()):z(this,J(0),J(r()))))}function ca(a){if(!0===Q)return Q=!1,!0;a=e(this);ba=k().join("");O(this,!1,!1);C(this,k());!0===P(k())&&a.trigger("complete");a.click()}function la(h){t=e(h);if(t.is(":input")){t.data("_inputmask",{masksets:f,activeMasksetIndex:g,opts:a,
isRTL:!1});a.showTooltip&&t.prop("title",d().mask);d().greedy=d().greedy?d().greedy:0==d().repeat;if(null!=t.attr("maxLength")){var c=t.prop("maxLength");-1<c&&e.each(f,function(a,b){"object"==typeof b&&"*"==b.repeat&&(b.repeat=c)});r()>=c&&-1<c&&(c<n().length&&(n().length=c),!1==d().greedy&&(d().repeat=Math.round(c/n().length)),t.prop("maxLength",2*r()))}ja(h);a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==h.dir||a.numericInput&&a.rightAlignNumerics||a.isNumeric&&a.rightAlignNumerics)&&t.css("text-align",
"right");if("rtl"==h.dir||a.numericInput){h.dir="ltr";t.removeAttr("dir");var b=t.data("_inputmask");b.isRTL=!0;t.data("_inputmask",b);B=!0}t.unbind(".inputmask");t.removeClass("focus.inputmask");t.closest("form").bind("submit",function(){M!=k().join("")&&t.change()}).bind("reset",function(){setTimeout(function(){t.trigger("setvalue")},0)});t.bind("mouseenter.inputmask",function(){!e(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=k().join("")&&C(this,k())}).bind("blur.inputmask",
function(){var b=e(this),c=this._valueGet(),d=k();b.removeClass("focus.inputmask");M!=k().join("")&&b.change();a.clearMaskOnLostFocus&&""!=c&&(c==n().join("")?this._valueSet(""):U(this));!1===P(d)&&(b.trigger("incomplete"),a.clearIncomplete&&(e.each(f,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)}),g=0,a.clearMaskOnLostFocus?this._valueSet(""):(d=n().slice(),C(this,d))))}).bind("focus.inputmask",function(){var b=e(this),c=this._valueGet();a.showMaskOnFocus&&
!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==c)&&this._valueGet()!=k().join("")&&C(this,k(),p(d().lastValidPosition));b.addClass("focus.inputmask");M=k().join("")}).bind("mouseleave.inputmask",function(){var b=e(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||this._valueGet()==b.attr("placeholder")||(this._valueGet()==n().join("")||""==this._valueGet()?this._valueSet(""):U(this)))}).bind("click.inputmask",function(){var b=this;setTimeout(function(){var c=
z(b),f=k();if(c.begin==c.end){var c=B?J(c.begin):c.begin,g=d().lastValidPosition,f=a.isNumeric?!1===a.skipRadixDance&&""!=a.radixPoint&&-1!=e.inArray(a.radixPoint,f)?a.numericInput?p(e.inArray(a.radixPoint,f)):e.inArray(a.radixPoint,f):p(g):p(g);c<f?m(c)?z(b,c):z(b,p(c)):z(b,f)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){z(a,0,p(d().lastValidPosition))},0)}).bind(ga+".inputmask dragdrop.inputmask drop.inputmask",function(b){if(!0===Q)return Q=!1,!0;var c=this,d=e(c);
if("propertychange"==b.type&&c._valueGet().length<=r())return!0;setTimeout(function(){var b=void 0!=a.onBeforePaste?a.onBeforePaste.call(this,c._valueGet()):c._valueGet();O(c,!0,!1,b.split(""),!0);!0===P(k())&&d.trigger("complete");d.click()},0)}).bind("setvalue.inputmask",function(){O(this,!0);M=k().join("");this._valueGet()==n().join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared).bind("keyup.inputmask",
ka);W?t.bind("input.inputmask",ca):t.bind("keydown.inputmask",$).bind("keypress.inputmask",T);da&&t.bind("input.inputmask",ca);O(h,!0,!1);M=k().join("");var l;try{l=document.activeElement}catch(q){}l===h?(t.addClass("focus.inputmask"),z(h,p(d().lastValidPosition))):a.clearMaskOnLostFocus?k().join("")==n().join("")?h._valueSet(""):U(h):C(h,k());ia(h)}}var B=!1,M=k().join(""),t,ba,V=!1,Q=!1,aa=!1;if(void 0!=l)switch(l.action){case "isComplete":return P(l.buffer);case "unmaskedvalue":return B=l.$input.data("_inputmask").isRTL,
ha(l.$input,l.skipDatepickerCheck);case "mask":la(l.el);break;case "format":return t=e({}),t.data("_inputmask",{masksets:f,activeMasksetIndex:g,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,B=!0),O(t,!1,!1,l.value.split(""),!0),k().join("")}};e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,
greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:e.noop,onKeyDown:e.noop,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",
cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],
getMaskLength:function(e,g,a,l,d){d=e.length;g||("*"==a?d=l.length+1:1<a&&(d+=e.length*(a-1)));return d}},escapeRegex:function(e){return e.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(f,g){var a=e.extend(!0,{},e.inputmask.defaults,g);F(a.alias,g,a);return x(D(a),0,a,{action:"format",value:f})}};e.fn.inputmask=function(f,g){var a=e.extend(!0,{},e.inputmask.defaults,g),l,d=0;if("string"===typeof f)switch(f){case "mask":return F(a.alias,g,a),
l=D(a),0==l.length?this:this.each(function(){x(e.extend(!0,{},l),0,a,{action:"mask",el:this})});case "unmaskedvalue":var q=e(this);return q.data("_inputmask")?(l=q.data("_inputmask").masksets,d=q.data("_inputmask").activeMasksetIndex,a=q.data("_inputmask").opts,x(l,d,a,{action:"unmaskedvalue",$input:q})):q.val();case "remove":return this.each(function(){var f=e(this);if(f.data("_inputmask")){l=f.data("_inputmask").masksets;d=f.data("_inputmask").activeMasksetIndex;a=f.data("_inputmask").opts;this._valueSet(x(l,
d,a,{action:"unmaskedvalue",$input:f,skipDatepickerCheck:!0}));f.removeData("_inputmask");f.unbind(".inputmask");f.removeClass("focus.inputmask");var g;Object.getOwnPropertyDescriptor&&(g=Object.getOwnPropertyDescriptor(this,"value"));g&&g.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));
try{delete this._valueGet,delete this._valueSet}catch(q){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(l=this.data("_inputmask").masksets,d=this.data("_inputmask").activeMasksetIndex,l[d]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return l=this.data("_inputmask").masksets,d=this.data("_inputmask").activeMasksetIndex,a=this.data("_inputmask").opts,x(l,d,a,{action:"isComplete",
buffer:this[0]._valueGet().split("")});case "getmetadata":if(this.data("_inputmask"))return l=this.data("_inputmask").masksets,d=this.data("_inputmask").activeMasksetIndex,l[d].metadata;break;default:return F(f,g,a)||(a.mask=f),l=D(a),0==l.length?this:this.each(function(){x(e.extend(!0,{},l),d,a,{action:"mask",el:this})})}else{if("object"==typeof f)return a=e.extend(!0,{},e.inputmask.defaults,f),F(a.alias,f,a),l=D(a),0==l.length?this:this.each(function(){x(e.extend(!0,{},l),d,a,{action:"mask",el:this})});
if(void 0==f)return this.each(function(){var d=e(this).attr("data-inputmask");if(d&&""!=d)try{var d=d.replace(RegExp("'","g"),'"'),f=e.parseJSON("{"+d+"}");e.extend(!0,f,g);a=e.extend(!0,{},e.inputmask.defaults,f);F(a.alias,f,a);a.alias=void 0;e(this).inputmask(a)}catch(l){}})}}}})(jQuery);
