(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+1nu":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz");t.a=function(e){var t=e.title,n=e.btnLink;return a.a.createElement(o.a,{to:n,className:"the__btnIcon"},a.a.createElement("div",{className:"block__reveal"},a.a.createElement("div",{className:"reveal__item"},t,a.a.createElement("svg",{className:"arrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 359.96 135.05"}," ",a.a.createElement("path",{d:"M320,55.76L264.5,0.24c1-.11,1.66-0.22,2.29-0.23,7.92,0,15.83,0,23.75,0a4.45,4.45,0,0,1,2.85,1.07Q326.24,33.85,359,66.67c0.23,0.23.42,0.51,1,1.2a18.61,18.61,0,0,0-2.18,1.64q-31.84,31.79-63.62,63.64a5.8,5.8,0,0,1-4.57,1.91c-7.41-.1-14.83,0-22.25,0h-2.71l55.53-55.53-0.42-.61H0V56.38H319.76Z"})," "))))}},"7oih":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("78ew"),i=n("rY4l"),c=n("JwsL");n("IMnL");t.a=function(e){var t=e.children,n="/"===e.location.pathname;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"main__layout"},a.a.createElement("div",{className:"main__nav"},a.a.createElement(o.a,null)),n?a.a.createElement("div",{className:"main__header"},a.a.createElement(i.a,null)):null,t),a.a.createElement("footer",{className:"main__footer"},a.a.createElement(c.a,null)),a.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"}))}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function E(){s=e(u.map((function(e){return e.props}))),T.canUseDOM?t(s):n&&(s=n(s))}var T=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){u.push(this),E()},c.componentDidUpdate=function(){E()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),E()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(T,"canUseDOM",l),T}}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("TJpk"),c=n("7oih"),l=n("HOj8"),s=n("+1nu"),u=n("xRvx"),E=n.n(u),T=n("rVw7"),f=n.n(T),m=n("qRgO");t.default=function(e){var t=e.location;return a.a.createElement(c.a,{location:t},a.a.createElement(i.Helmet,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null," xalamis. | A Brand Strategy Design and Web Development Studio."),a.a.createElement("meta",{name:"description",content:"We are a brand strategy design and Web development studio."}),a.a.createElement("link",{rel:"canonical",href:"https://xalamis.co"})),a.a.createElement("section",{className:"the__section"},a.a.createElement("div",{className:"main__container"},a.a.createElement("div",{className:"main__about"},a.a.createElement(l.a,{title:"about us"}),a.a.createElement("div",{className:"main__wrapper"},a.a.createElement("div",{className:"the__column"},a.a.createElement("h3",{className:"the__headline"},"A brand strategy design and development studio crafting extraordinary brand experiences for people that matter."),a.a.createElement("p",{className:"the__body1"},"We help businesses grow, launch products, and succeed in the digital era through strategic thinking and creative vision make us the ideal partner for fast-moving companies"),a.a.createElement(s.a,{title:"our studio",btnLink:"/about"})))))),a.a.createElement("section",{className:"the__section"},a.a.createElement("div",{className:"main__container"},a.a.createElement("div",{className:"main__projects"},a.a.createElement(l.a,{title:"projects"}),a.a.createElement("div",{className:"main__wrapper"},a.a.createElement("div",{className:"the__column"},a.a.createElement("p",{className:"the__body1"},"Explore some of our latest projects"))),a.a.createElement("div",{className:"main__wrapper"},a.a.createElement("div",{className:"the__column __projects"},a.a.createElement("div",{className:"card"},a.a.createElement(o.a,{to:"/",className:"the__link"},a.a.createElement("div",{className:"card__header"},a.a.createElement("img",{src:E.a,className:"card__img",alt:"balbo Philippines"})),a.a.createElement("div",{className:"card__body"},a.a.createElement("h4",{className:"the__headline"},"Balbo PH - Versatile, Sustainable Balance Board"),a.a.createElement("span",{className:"the__tag"},"Design, Branding, Development")))),a.a.createElement("div",{className:"card"},a.a.createElement(o.a,{to:"/",className:"the__link"},a.a.createElement("div",{className:"card__header"},a.a.createElement("img",{src:f.a,className:"card__img",alt:"group of developers in a table"})),a.a.createElement("div",{className:"card__body"},a.a.createElement("h4",{className:"the__headline"},"Manila Startup"),a.a.createElement("span",{className:"the__tag"},"Design, Branding, Development"))))))))),a.a.createElement("section",{className:"the__section"},a.a.createElement("div",{className:"main__container__fluid"},a.a.createElement("div",{className:"main__services"},a.a.createElement("div",{className:"main__container"},a.a.createElement("p",{className:"the__overline"},"Services")),a.a.createElement("div",{className:"main__wrapper"},a.a.createElement("div",{className:"services__list"},a.a.createElement("div",{className:"services__wrapper"},a.a.createElement("span",null,a.a.createElement(o.a,{to:"/",className:"the__link"},"Branding. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"Back-End Development. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"Web Design. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"UI. UX. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"Single Page App. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"WordPress. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"eCommerce. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"UI. UX. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"Branding. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"Front-End Development. "),a.a.createElement(o.a,{to:"/",className:"the__link"},"eCommerce. ")))))))),a.a.createElement(m.a,null))}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=E(n("q1tI")),i=E(n("17x9")),c=E(n("8+s/")),l=E(n("bmMU")),s=n("v1p5"),u=n("hFT/");function E(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var f,m,d,p=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),_=(f=p,d=m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=T(a,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(f,a)},a(t,null,[{key:"canUseDOM",set:function(e){f.canUseDOM=e}}]),t}(o.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=f.peek,m.rewind=function(){var e=f.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},d);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,s,u=r(t),E=r(n);if(u&&E){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=E)return!1;var T=t instanceof Date,f=n instanceof Date;if(T!=f)return!1;if(T&&f)return t.getTime()==n.getTime();var m=t instanceof RegExp,d=n instanceof RegExp;if(m!=d)return!1;if(m&&d)return t.toString()==n.toString();var p=a(t);if((l=p.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,p[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(s=p[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},qRgO:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("+1nu");t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"the__section"},a.a.createElement("div",{className:"main__container"},a.a.createElement("div",{className:"main__cta"},a.a.createElement("div",{className:"the__column"},a.a.createElement("p",{className:"the__body1"},"We collaborate with ambitious brands and people"),a.a.createElement("h2",{className:"the__headline"},"Let's build something amazing together"),a.a.createElement(o.a,{title:"Contact us",btnLink:"/"}))))))}},rVw7:function(e,t,n){e.exports=n.p+"static/group-of-developers-in-a-table-99d807359e7101283b4f04865aca67a8.jpeg"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n("q1tI")),i=l(n("MgzW")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},E=function(e){var t=p(e,c.TAG_NAMES.TITLE),n=p(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=p(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return p(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},d=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],s=l.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),l=0;l<o.length;l++){var s=o[l],u=(0,i.default)({},a[s],r[s]);a[s]=u}return e}),[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},_=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){_(e)}),0)}),A=function(e){return clearTimeout(e)},h="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||_:e.requestAnimationFrame||_,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,y=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,E=e.styleTags,T=e.title,f=e.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,a),g(T,f);var m={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,o),metaTags:P(c.TAG_NAMES.META,i),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,l),scriptTags:P(c.TAG_NAMES.SCRIPT,u),styleTags:P(c.TAG_NAMES.STYLE,E)},d={},p={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(p[e]=m[e].oldTags)})),t&&t(),s(e,d,p)},N=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){void 0!==e&&document.title!==e&&(document.title=N(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var E=o.indexOf(s);-1!==E&&o.splice(E,1)}for(var T=o.length-1;T>=0;T--)n.removeAttribute(o[T]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},w=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=M(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),o=N(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&S(b),e.defer?b=h((function(){y(e,(function(){b=null}))})):(y(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,E=e.title,T=void 0===E?"":E,f=e.titleAttributes;return{base:w(c.TAG_NAMES.BASE,t,r),bodyAttributes:w(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(c.ATTRIBUTE_NAMES.HTML,a,r),link:w(c.TAG_NAMES.LINK,o,r),meta:w(c.TAG_NAMES.META,i,r),noscript:w(c.TAG_NAMES.NOSCRIPT,l,r),script:w(c.TAG_NAMES.SCRIPT,s,r),style:w(c.TAG_NAMES.STYLE,u,r),title:w(c.TAG_NAMES.TITLE,{title:T,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:p(e,c.HELMET_PROPS.DEFER),encode:p(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:d(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:d(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:E(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=h,t.warn=v}).call(this,n("yLpj"))},xRvx:function(e,t,n){e.exports=n.p+"static/balboph-a45edef313613b756a47bc56f1e2681f.jpeg"},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-7039157d6f694cee021c.js.map