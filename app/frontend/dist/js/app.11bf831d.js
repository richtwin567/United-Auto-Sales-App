(function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],s=0,b=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var u=a[i];0!==n[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1930e1ec"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var l=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0475":function(e,t,a){"use strict";a("71bf")},"0d22":function(e,t,a){"use strict";a("2686")},"0f74":function(e,t,a){"use strict";a("9fe7")},2686:function(e,t,a){},"272c":function(e,t,a){},"3e6c":function(e,t,a){"use strict";a("272c")},4398:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n={id:"nav"},o=Object(r["f"])("Home"),i=Object(r["f"])(" | "),c=Object(r["f"])("About"),u=Object(r["f"])(" | "),l=Object(r["f"])("Login"),s=Object(r["f"])(" | "),d=Object(r["f"])("Register ");function b(e,t){var a=Object(r["v"])("router-link"),b=Object(r["v"])("router-view");return Object(r["p"])(),Object(r["c"])("div",n,[Object(r["g"])(a,{to:"/"},{default:Object(r["B"])((function(){return[o]})),_:1}),i,Object(r["g"])(a,{to:"/about"},{default:Object(r["B"])((function(){return[c]})),_:1}),u,Object(r["g"])(a,{to:"/login"},{default:Object(r["B"])((function(){return[l]})),_:1}),s,Object(r["g"])(a,{to:"/register"},{default:Object(r["B"])((function(){return[d]})),_:1}),Object(r["g"])(b)])}a("0f74");const p={};p.render=b;var v=p,f=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),m=a("cf05"),g=a.n(m),h={class:"home"},j=Object(r["g"])("img",{alt:"Vue logo",src:g.a},null,-1);function O(e,t,a,n,o,i){var c=Object(r["v"])("HelloWorld");return Object(r["p"])(),Object(r["c"])("div",h,[j,Object(r["g"])(c,{msg:"Welcome to Your Vue.js App"})])}var w=Object(r["E"])("data-v-eb63751e");Object(r["s"])("data-v-eb63751e");var y={class:"hello"},_=Object(r["e"])('<p data-v-eb63751e> For a guide and recipes on how to configure / customize this project,<br data-v-eb63751e> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-eb63751e>vue-cli documentation</a>. </p><h3 data-v-eb63751e>Installed CLI Plugins</h3><ul data-v-eb63751e><li data-v-eb63751e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-eb63751e>babel</a></li><li data-v-eb63751e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-eb63751e>eslint</a></li></ul><h3 data-v-eb63751e>Essential Links</h3><ul data-v-eb63751e><li data-v-eb63751e><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-eb63751e>Core Docs</a></li><li data-v-eb63751e><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-eb63751e>Forum</a></li><li data-v-eb63751e><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-eb63751e>Community Chat</a></li><li data-v-eb63751e><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-eb63751e>Twitter</a></li><li data-v-eb63751e><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-eb63751e>News</a></li></ul><h3 data-v-eb63751e>Ecosystem</h3><ul data-v-eb63751e><li data-v-eb63751e><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-eb63751e>vue-router</a></li><li data-v-eb63751e><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-eb63751e>vuex</a></li><li data-v-eb63751e><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-eb63751e>vue-devtools</a></li><li data-v-eb63751e><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-eb63751e>vue-loader</a></li><li data-v-eb63751e><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-eb63751e>awesome-vue</a></li></ul>',7);Object(r["q"])();var k=w((function(e,t,a,n,o,i){return Object(r["p"])(),Object(r["c"])("div",y,[Object(r["g"])("h1",null,Object(r["x"])(a.msg),1),_])})),x={name:"HelloWorld",props:{msg:String}};a("c7c2");x.render=k,x.__scopeId="data-v-eb63751e";var P=x,S={name:"Home",components:{HelloWorld:P}};S.render=O;var q=S,E=Object(r["E"])("data-v-21087e95");Object(r["s"])("data-v-21087e95");var R={id:"login"},L=Object(r["g"])("h1",null,"Log in to your account",-1);Object(r["q"])();var C=E((function(e,t,a,n,o,i){var c=Object(r["v"])("login-form");return Object(r["p"])(),Object(r["c"])("div",R,[L,Object(r["g"])(c)])})),I=Object(r["E"])("data-v-319060a0");Object(r["s"])("data-v-319060a0");var T={id:"login-form-container"},A=Object(r["g"])("label",{for:"username"}," Username ",-1),F=Object(r["g"])("label",{for:"password"}," Password ",-1),U=Object(r["g"])("button",{class:"auth-form-btn",type:"submit"}," Login ",-1),H={key:0,class:"error"};Object(r["q"])();var B=I((function(e,t,a,n,o,i){return Object(r["p"])(),Object(r["c"])("section",T,[Object(r["g"])("form",{onSubmit:t[3]||(t[3]=Object(r["D"])((function(){return i.handleSubmit&&i.handleSubmit.apply(i,arguments)}),["prevent"])),method:"POST"},[A,Object(r["C"])(Object(r["g"])("input",{id:"username",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.username=e}),required:""},null,512),[[r["z"],o.username]]),F,Object(r["C"])(Object(r["g"])("input",{id:"password",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.password=e}),required:""},null,512),[[r["z"],o.password]]),U,o.error?(Object(r["p"])(),Object(r["c"])("div",H,Object(r["x"])(o.error),1)):Object(r["d"])("",!0)],32)])})),D=a("1da1"),M=(a("96cf"),a("bc3a")),V=a.n(M),W="http://localhost:9090/api";function z(e){return J.apply(this,arguments)}function J(){return J=Object(D["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t.username,password:t.password})},e.abrupt("return",fetch("".concat(W,"/auth/login"),a).then((function(e){if(e.ok){if(e.data.token)return localStorage.setItem("jwt"),e.data}else if(401===e.status)return e.json()})).catch((function(e){console.log(e)})));case 2:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}var N={name:"LoginForm",data:function(){return{username:"",password:"",error:""}},methods:{handleSubmit:function(e){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.preventDefault(),r={username:t.username,password:t.password},a.next=4,z(r);case 4:n=a.sent,n.error&&(console.log(n.error),t.error=n.error),console.log(n);case 7:case"end":return a.stop()}}),a)})))()}}};a("6549");N.render=B,N.__scopeId="data-v-319060a0";var Y=N,G={components:{LoginForm:Y},name:"LoginPage"};a("3e6c");G.render=C,G.__scopeId="data-v-21087e95";var K=G,Q=Object(r["E"])("data-v-41baa05f");Object(r["s"])("data-v-41baa05f");var X={id:"registration"},Z=Object(r["g"])("h1",null,"Register New User",-1);Object(r["q"])();var $=Q((function(e,t,a,n,o,i){var c=Object(r["v"])("registration-form");return Object(r["p"])(),Object(r["c"])("div",X,[Z,Object(r["g"])(c)])})),ee=Object(r["E"])("data-v-341809ea");Object(r["s"])("data-v-341809ea");var te={id:"registration-form-container"},ae=Object(r["e"])('<article class="form-fields" data-v-341809ea><div class="form-field" data-v-341809ea><label for="username" data-v-341809ea> Username </label><input id="username" type="text" required data-v-341809ea></div><div class="form-field" data-v-341809ea><label for="password" data-v-341809ea> Password </label><input id="password" type="password" required data-v-341809ea></div></article><article class="form-fields" data-v-341809ea><div class="form-field" data-v-341809ea><label for="fullname" data-v-341809ea> Fullname </label><input id="fullname" type="text" required data-v-341809ea></div><div class="form-field" data-v-341809ea><label for="email" data-v-341809ea> Email </label><input id="email" type="email" required data-v-341809ea></div></article><div class="form-field" data-v-341809ea><label for="location" data-v-341809ea>Location</label><input id="location" type="text" required data-v-341809ea></div><div class="form-field" data-v-341809ea><label for="biography" data-v-341809ea>Biography</label><textarea id="biography" rows="8" cols="50" required data-v-341809ea></textarea></div><div class="form-field" data-v-341809ea><button type="submit" id="register-btn" data-v-341809ea>Register</button></div>',5);Object(r["q"])();var re=ee((function(e,t,a,n,o,i){return Object(r["p"])(),Object(r["c"])("section",te,[Object(r["g"])("form",{onSubmit:t[1]||(t[1]=Object(r["D"])((function(){return i.handleSubmit&&i.handleSubmit.apply(i,arguments)}),["prevent"])),method:"POST",enctype:"multipart/form-data"},[ae],32)])})),ne={name:"RegistrationForm",data:function(){return{username:"",password:"",fullname:"",email:"",location:"",biography:"",photo_path:""}},methods:{handleSubmit:function(e){return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.preventDefault();case 1:case"end":return t.stop()}}),t)})))()}}};a("0475");ne.render=re,ne.__scopeId="data-v-341809ea";var oe=ne,ie={components:{RegistrationForm:oe},name:"RegistrationPage"};a("0d22");ie.render=$,ie.__scopeId="data-v-41baa05f";var ce=ie,ue={id:"explore"};function le(e,t,a,n,o,i){return Object(r["p"])(),Object(r["c"])("div",ue," Explore ")}var se={name:"ExplorePage"};se.render=le;var de=se,be=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",name:"LoginPage",component:K,meta:{guest:!0}},{path:"/register",name:"RegistrationPage",component:ce,meta:{guest:!0}},{path:"/explore",name:"ExplorePage",component:de,meta:{requiresAuth:!0}}],pe=Object(f["a"])({history:Object(f["b"])("/"),routes:be});pe.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))&&null==localStorage.getItem("jwt")?a({path:"/login",params:{nextUrl:e.fullPath}}):a()}));var ve=pe;V.a.defaults.baseURL="http://localhost:9090",Object(r["b"])(v).use(ve).mount("#app")},6549:function(e,t,a){"use strict";a("4398")},"71bf":function(e,t,a){},"7afe":function(e,t,a){},"9fe7":function(e,t,a){},c7c2:function(e,t,a){"use strict";a("7afe")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.11bf831d.js.map