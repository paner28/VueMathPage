(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2048:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("em",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"questions"},[t._l(t.members,(function(e){return n("div",{key:e.message},[n("router-link",{attrs:{to:"/question/"+e.rink}},[n("a",{staticClass:"a choiced"},[t._v(t._s(e.name))])])],1)})),n("router-view",{staticClass:"view"})],2),n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"a",staticStyle:{"font-size":"20px","margin-top":"40px"}},[t._v("HOMEに戻る")])])],1)},r=[],s={data:function(){return{}},props:{title:String,members:Array}},i=s,o=(n("6104"),n("2877")),u=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=u.exports},"4b71":function(t,e,n){"use strict";var a=n("7322"),r=n.n(a);r.a},"5ee4":function(t,e,n){(function(e){t.exports=function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){var a=n(3)(n(2),n(4),null,null);t.exports=a.exports},function(t,n,a){"use strict";function r(t){t.component("vue-mathjax",i.a)}Object.defineProperty(n,"__esModule",{value:!0}),n.install=r;var s=a(0),i=a.n(s);a.d(n,"VueMathjax",(function(){return i.a}));var o={version:"0.0.11",install:r};n.default=o;var u=null;"undefined"!=typeof window?u=window.Vue:"undefined"!=typeof e&&(u=e.Vue),u&&u.use(o)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.default={props:{formula:{type:String},safe:{type:Boolean,default:!0},options:{type:Object,default:function(){return{}}}},watch:{formula:function(){this.renderMathJax()}},mounted:function(){this.renderMathJax()},methods:{renderContent:function(){this.safe?this.$refs.mathJaxEl.textContent=this.formula:this.$refs.mathJaxEl.innerHTML=this.formula},renderMathJax:function(){this.renderContent(),window.MathJax&&(window.MathJax.Hub.Config(a({tex2jax:{inlineMath:[["$","$"],["(",")"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{styles:{".MathJax_Display":{margin:0}},linebreaks:{automatic:!0}}},this.options)),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,this.$refs.mathJaxEl]))}}}},function(t,e){t.exports=function(t,e,n,a){var r,s=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(r=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),a){var u=o.computed||(o.computed={});Object.keys(a).forEach((function(t){var e=a[t];u[t]=function(){return e}}))}return{esModule:r,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{ref:"mathJaxEl"},[t._v(t._s(t.formula))])},staticRenderFns:[]}}])}).call(this,n("c8ba"))},6104:function(t,e,n){"use strict";var a=n("70e3"),r=n.n(a);r.a},"70e3":function(t,e,n){},7322:function(t,e,n){},"7b93":function(t,e,n){"use strict";var a=n("5ee4");n.o(a,"VueMathjax")&&n.d(e,"VueMathjax",(function(){return a["VueMathjax"]}))},e254:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"parent1"},[n("div",[n("b",{staticClass:"left"},[n("vue-mathjax",{attrs:{formula:t.title}})],1),n("div",{staticClass:"left"},[n("vue-mathjax",{attrs:{formula:t.question}})],1)])]),n("div",{staticClass:"left"},[n("vue-mathjax",{attrs:{formula:t.example}})],1),n("form",{attrs:{name:"form"}},[n("div",{staticClass:"parent2"},[n("div",{staticClass:"left"},[n("span",[t._v("答え:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",name:"answer",id:"answer",size:"12",maxlength:"20"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("input",{staticStyle:{"margin-left":"5px"},attrs:{type:"button",value:"送信",id:"send"},on:{click:t.greet}})])])]),n("div",[n("router-link",{attrs:{to:"/Page1"}},[n("div",{staticClass:"a",staticStyle:{"font-size":"20px"}},[t._v("Sectionに戻る")])])],1),n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"a",staticStyle:{"font-size":"20px","margin-top":"40px"}},[t._v("HOMEに戻る")])])],1)},r=[],s=n("7b93"),i={components:{"vue-mathjax":s["VueMathjax"]},name:"HelloWorld",data:function(){return{text:""}},props:{title:String,question:String,example:String,answer:String},methods:{greet:function(){this.answer==this.text?alert("正解です🎊"):alert("不正解です(´;ω;｀)")}}},o=i,u=(n("4b71"),n("2877")),l=Object(u["a"])(o,a,r,!1,null,null,null);e["default"]=l.exports},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],s=n("2877"),i={},o=Object(s["a"])(i,a,r,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=about.cc941568.js.map