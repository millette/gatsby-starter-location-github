(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{213:function(t,n,e){"use strict";var r=e(34);n.__esModule=!0,n.withPrefix=function(t){return function(t){return t.replace(/\/+/g,"/")}("/"+t)},n.navigateTo=n.replace=n.push=n.default=void 0;var o=r(e(251)),i=r(e(223)),u=r(e(222)),a=r(e(33)),f=r(e(66)),c=r(e(0)),s=r(e(1)),l=e(44),p=e(70),v=e(10),d={activeClassName:c.default.string,activeStyle:c.default.object,exact:c.default.bool,strict:c.default.bool,isActive:c.default.func,location:c.default.object},y=function(t){function n(n,e){var r;r=t.call(this)||this;var o=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(o=!0);var i=e.router.history.location,u=(0,v.createLocation)(n.to,null,null,i);return r.state={path:(0,v.createPath)(u),to:u,IOSupported:o,location:i},r.handleRef=r.handleRef.bind((0,f.default)((0,f.default)(r))),r}(0,a.default)(n,t),n.getDerivedStateFromProps=function(t,n){if(n.to===t.to)return null;var e=(0,v.createLocation)(t.to,null,null,n.location);return{path:(0,v.createPath)(e),to:e}};var e=n.prototype;return e.componentDidUpdate=function(t,n){this.props.to===t.to||this.state.IOSupported||___loader.enqueue(this.state.path)},e.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},e.handleRef=function(t){var n,e,r,o=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(n=t,e=function(){___loader.enqueue(o.state.to.pathname)},(r=new window.IntersectionObserver(function(t){t.forEach(function(t){n===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(n),r.disconnect(),e())})})).observe(n))},e.render=function(){var t,n=this,e=this.props,r=e.onClick,a=e.onMouseEnter,f=(0,u.default)(e,["onClick","onMouseEnter"]);return t=(0,i.default)(d).some(function(t){return n.props[t]})?l.NavLink:l.Link,s.default.createElement(t,(0,o.default)({onMouseEnter:function(t){a&&a(t),___loader.hovering(n.state.path)},onClick:function(t){if(r&&r(t),!(0!==t.button||n.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var e=n.state.path;if(e.split("#").length>1&&(e=e.split("#").slice(0,-1).join("")),e===window.location.pathname){var o=n.state.path.split("#").slice(1).join("#"),i=o?document.getElementById(o):null;return null!==i?(i.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___push(n.state.to)}return!0}},f,{to:this.state.to,innerRef:this.handleRef}))},n}(s.default.Component);y.propTypes=(0,o.default)({},d,{innerRef:c.default.func,onClick:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object]).isRequired}),y.contextTypes={router:c.default.object};var h=(0,p.polyfill)(y);n.default=h;var b=function(t){window.___push(t)};n.push=b,n.replace=function(t){window.___replace(t)},n.navigateTo=function(t){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),b(t)}},215:function(t,n){n.f={}.propertyIsEnumerable},216:function(t,n,e){var r=e(115)("wks"),o=e(113),i=e(32).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},217:function(t,n){n.f=Object.getOwnPropertySymbols},220:function(t,n,e){var r=e(122),o=e(67).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},221:function(t,n,e){n.f=e(216)},222:function(t,n,e){var r=e(243),o=e(223);t.exports=function(t,n){if(null==t)return{};var e,i,u={},a=o(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(u[e]=t[e]);if(r){var f=r(t);for(i=0;i<f.length;i++)e=f[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(u[e]=t[e])}return u}},223:function(t,n,e){t.exports=e(246)},224:function(t,n,e){var r=e(119);t.exports=function(t){return Object(r(t))}},231:function(t,n,e){var r=e(291).Symbol;t.exports=r},233:function(t,n,e){var r=e(215),o=e(116),i=e(64),u=e(117),a=e(62),f=e(124),c=Object.getOwnPropertyDescriptor;n.f=e(25)?c:function(t,n){if(t=i(t),n=u(n,!0),f)try{return c(t,n)}catch(t){}if(a(t,n))return o(!r.f.call(t,n),t[n])}},234:function(t,n,e){var r=e(64),o=e(220).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},235:function(t,n,e){var r=e(120);t.exports=Array.isArray||function(t){return"Array"==r(t)}},236:function(t,n,e){var r=e(112),o=e(217),i=e(215);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,a=e(t),f=i.f,c=0;a.length>c;)f.call(t,u=a[c++])&&n.push(u);return n}},237:function(t,n,e){var r=e(32),o=e(24),i=e(114),u=e(221),a=e(42).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||a(n,t,{value:u.f(t)})}},238:function(t,n,e){var r=e(42).f,o=e(62),i=e(216)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},239:function(t,n,e){var r=e(113)("meta"),o=e(43),i=e(62),u=e(42).f,a=0,f=Object.isExtensible||function(){return!0},c=!e(63)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&f(t)&&!i(t,r)&&s(t),t}}},240:function(t,n,e){t.exports=e(118)},241:function(t,n,e){"use strict";var r=e(32),o=e(62),i=e(25),u=e(65),a=e(240),f=e(239).KEY,c=e(63),s=e(115),l=e(238),p=e(113),v=e(216),d=e(221),y=e(237),h=e(236),b=e(235),g=e(45),w=e(43),O=e(64),m=e(117),j=e(116),x=e(123),S=e(234),_=e(233),P=e(42),E=e(112),k=_.f,N=P.f,I=S.f,T=r.Symbol,F=r.JSON,R=F&&F.stringify,C=v("_hidden"),M=v("toPrimitive"),A={}.propertyIsEnumerable,D=s("symbol-registry"),L=s("symbols"),K=s("op-symbols"),J=Object.prototype,q="function"==typeof T,$=r.QObject,W=!$||!$.prototype||!$.prototype.findChild,G=i&&c(function(){return 7!=x(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=k(J,n);r&&delete J[n],N(t,n,e),r&&t!==J&&N(J,n,r)}:N,U=function(t){var n=L[t]=x(T.prototype);return n._k=t,n},Y=q&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},z=function(t,n,e){return t===J&&z(K,n,e),g(t),n=m(n,!0),g(e),o(L,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=x(e,{enumerable:j(0,!1)})):(o(t,C)||N(t,C,j(1,{})),t[C][n]=!0),G(t,n,e)):N(t,n,e)},B=function(t,n){g(t);for(var e,r=h(n=O(n)),o=0,i=r.length;i>o;)z(t,e=r[o++],n[e]);return t},Q=function(t){var n=A.call(this,t=m(t,!0));return!(this===J&&o(L,t)&&!o(K,t))&&(!(n||!o(this,t)||!o(L,t)||o(this,C)&&this[C][t])||n)},V=function(t,n){if(t=O(t),n=m(n,!0),t!==J||!o(L,n)||o(K,n)){var e=k(t,n);return!e||!o(L,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},H=function(t){for(var n,e=I(O(t)),r=[],i=0;e.length>i;)o(L,n=e[i++])||n==C||n==f||r.push(n);return r},X=function(t){for(var n,e=t===J,r=I(e?K:O(t)),i=[],u=0;r.length>u;)!o(L,n=r[u++])||e&&!o(J,n)||i.push(L[n]);return i};q||(a((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(K,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),G(this,t,j(1,e))};return i&&W&&G(J,t,{configurable:!0,set:n}),U(t)}).prototype,"toString",function(){return this._k}),_.f=V,P.f=z,e(220).f=S.f=H,e(215).f=Q,e(217).f=X,i&&!e(114)&&a(J,"propertyIsEnumerable",Q,!0),d.f=function(t){return U(v(t))}),u(u.G+u.W+u.F*!q,{Symbol:T});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)v(Z[tt++]);for(var nt=E(v.store),et=0;nt.length>et;)y(nt[et++]);u(u.S+u.F*!q,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=T(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var n in D)if(D[n]===t)return n},useSetter:function(){W=!0},useSimple:function(){W=!1}}),u(u.S+u.F*!q,"Object",{create:function(t,n){return void 0===n?x(t):B(x(t),n)},defineProperty:z,defineProperties:B,getOwnPropertyDescriptor:V,getOwnPropertyNames:H,getOwnPropertySymbols:X}),F&&u(u.S+u.F*(!q||c(function(){var t=T();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(w(n)||void 0!==t)&&!Y(t))return b(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!Y(n))return n}),r[1]=n,R.apply(F,r)}}),T.prototype[M]||e(118)(T.prototype,M,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},242:function(t,n,e){e(241),t.exports=e(24).Object.getOwnPropertySymbols},243:function(t,n,e){t.exports=e(242)},244:function(t,n,e){var r=e(65),o=e(24),i=e(63);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},245:function(t,n,e){var r=e(224),o=e(112);e(244)("keys",function(){return function(t){return o(r(t))}})},246:function(t,n,e){e(245),t.exports=e(24).Object.keys},247:function(t,n,e){"use strict";var r=e(112),o=e(217),i=e(215),u=e(224),a=e(121),f=Object.assign;t.exports=!f||e(63)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=u(t),f=arguments.length,c=1,s=o.f,l=i.f;f>c;)for(var p,v=a(arguments[c++]),d=s?r(v).concat(s(v)):r(v),y=d.length,h=0;y>h;)l.call(v,p=d[h++])&&(e[p]=v[p]);return e}:f},248:function(t,n,e){var r=e(65);r(r.S+r.F,"Object",{assign:e(247)})},249:function(t,n,e){e(248),t.exports=e(24).Object.assign},250:function(t,n,e){t.exports=e(249)},251:function(t,n,e){var r=e(250);function o(){return t.exports=o=r||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},o.apply(this,arguments)}t.exports=o},252:function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},260:function(t,n,e){var r=e(287),o=e(284);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},261:function(t,n,e){var r=e(231),o=e(289),i=e(288),u=e(260),a=r?r.prototype:void 0,f=a?a.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(i(n))return o(n,t)+"";if(u(n))return f?f.call(n):"";var e=n+"";return"0"==e&&1/n==-1/0?"-0":e}},279:function(t,n,e){var r=e(261);t.exports=function(t){return null==t?"":r(t)}},280:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},281:function(t,n,e){var r=e(280),o=e(260),i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=a.test(t);return e||f.test(t)?c(t.slice(2),e?2:8):u.test(t)?NaN:+t}},282:function(t,n,e){var r=e(281);t.exports=function(t){return t?(t=r(t))===1/0||t===-1/0?1.7976931348623157e308*(t<0?-1:1):t==t?t:0:0===t?t:0}},283:function(t,n,e){var r=e(282);t.exports=function(t){var n=r(t),e=n%1;return n==n?e?n-e:n:0}},284:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},285:function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},286:function(t,n,e){var r=e(231),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,a),e=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(n?t[a]=e:delete t[a]),o}},287:function(t,n,e){var r=e(231),o=e(286),i=e(285),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},288:function(t,n){var e=Array.isArray;t.exports=e},289:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}},290:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(252))},291:function(t,n,e){var r=e(290),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},292:function(t,n){t.exports=function(t,n,e){return t==t&&(void 0!==e&&(t=t<=e?t:e),void 0!==n&&(t=t>=n?t:n)),t}},293:function(t,n,e){var r=e(292),o=e(261),i=e(283),u=e(279);t.exports=function(t,n,e){return t=u(t),e=null==e?0:r(i(e),0,t.length),n=o(n),t.slice(e,e+n.length)==n}},294:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=(r=e(293))&&r.__esModule?r:{default:r};function i(){return"undefined"==typeof window?null:window.navigator.languages&&window.navigator.languages[0]||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage||window.navigator.systemLanguage||null}function u(t){return t.toLowerCase().replace(/-/,"_")}n.default=function(t){if(!t)return i();var n=t.languages,e=t.fallback;if(!t.languages)return e;var r=u(i());if(!r)return e;var a=n.filter(function(t){return u(t)===r});return a.length>0?a[0]||e:n.filter(function(t){return(0,o.default)(r,t)})[0]||e}}}]);
//# sourceMappingURL=4-3835e9b0b4ee9504c5fd.js.map