(function(e){function t(t){for(var a,o,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==n[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},c=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"982cb8dd"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var l=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,r[1](l)}n[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"01e7":function(e,t,r){},"0d22":function(e,t,r){"use strict";r("2686")},"176f":function(e,t,r){},"1cc4":function(e,t,r){},2686:function(e,t,r){},"272c":function(e,t,r){},2788:function(e,t,r){"use strict";r("f1d7")},"300c":function(e,t,r){"use strict";r("dec8")},3928:function(e,t,r){e.exports=r.p+"img/tag.c7133bb2.svg"},"3e6c":function(e,t,r){"use strict";r("272c")},4736:function(e,t,r){"use strict";r("fb3f")},"4c4a":function(e,t,r){e.exports=r.p+"img/banner.11a0e086.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n=r("c013"),c=r.n(n),o={id:"nav"},i={class:"company"},s=Object(a["g"])("span",{class:"company-name"},[Object(a["g"])("img",{src:c.a,alt:"logo"}),Object(a["g"])("p",null,"United Auto Sales")],-1),l=Object(a["f"])("Add Car"),u=Object(a["f"])("Explore"),d=Object(a["f"])("My Profile"),b=Object(a["f"])("Logout"),p=Object(a["f"])("Login"),f=Object(a["f"])("Register ");function O(e,t,r,n,c,O){var g=Object(a["w"])("router-link"),j=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])("div",o,[Object(a["g"])("div",i,[Object(a["g"])(g,{to:{path:0==c.uid.length?"/":"/explore"}},{default:Object(a["D"])((function(){return[s]})),_:1},8,["to"]),Object(a["g"])("div",{class:0==c.uid.length?"hidden":""},[Object(a["g"])(g,{to:"/cars/new"},{default:Object(a["D"])((function(){return[l]})),_:1}),Object(a["g"])(g,{to:"/explore"},{default:Object(a["D"])((function(){return[u]})),_:1}),Object(a["g"])(g,{to:{path:"/users/"+c.uid}},{default:Object(a["D"])((function(){return[d]})),_:1},8,["to"])],2)]),Object(a["g"])("div",{class:0==c.uid.length?"hidden":""},[Object(a["g"])(g,{to:"/",onClick:O.logout},{default:Object(a["D"])((function(){return[b]})),_:1},8,["onClick"])],2),Object(a["g"])("div",{class:0==c.uid.length?"":"hidden"},[Object(a["g"])(g,{to:"/login"},{default:Object(a["D"])((function(){return[p]})),_:1}),Object(a["g"])(g,{to:"/register"},{default:Object(a["D"])((function(){return[f]})),_:1})],2)]),Object(a["g"])(j)])}var g=r("1da1"),j=(r("96cf"),r("ac1f"),r("1276"),r("5319"),r("a15b"),r("d81d"),r("fb6a"),r("d3b7"),r("25f0"),r("bc3a")),m=r.n(j),h="http://localhost:9090/api";function v(e){return y.apply(this,arguments)}function y(){return y=Object(g["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t.username,password:t.password})},e.abrupt("return",fetch("".concat(h,"/auth/login"),r).then((function(e){return e.ok||401===e.status?e.json():void 0})).catch((function(e){console.log(e)})));case 2:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function A(e){return localStorage.setItem("jwt",e.token),{success:e.message}}function w(e){return C.apply(this,arguments)}function C(){return C=Object(g["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={method:"POST",body:t},e.abrupt("return",fetch("".concat(h,"/auth/register"),r).then((function(e){return e.ok||401===e.status?e.json():void 0})).catch((function(e){console.log(e)})));case 2:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function k(){return S.apply(this,arguments)}function S(){return S=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.removeItem("jwt"),e.abrupt("return",m.a.post("".concat(h,"/logout"),{}).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function _(e){var t=e.split(".")[1],r=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(r).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(a)}function P(){var e=localStorage.getItem("jwt");return e?{Authorization:"Bearer "+e}:{}}var U={name:"App",created:function(){var e=this;console.log(e.uid.length);var t=P().Authorization;t&&(e.uid=_(t).id)},data:function(){return{uid:""}},methods:{logout:function(){k(),window.location.href="/"}}};r("300c");U.render=O;var x=U,T=(r("3ca3"),r("ddb0"),r("6c02")),E=Object(a["G"])("data-v-a5f5a6aa");Object(a["s"])("data-v-a5f5a6aa");var I={class:"home"};Object(a["q"])();var M=E((function(e,t,r,n,c,o){var i=Object(a["w"])("HomePage");return Object(a["p"])(),Object(a["d"])("div",I,[Object(a["g"])(i)])})),D=r("4c4a"),R=r.n(D),B=Object(a["G"])("data-v-5de60ca6");Object(a["s"])("data-v-5de60ca6");var q=Object(a["g"])("section",{id:"home-page"},[Object(a["g"])("h1",null,"Buy and Sell Cars Online"),Object(a["g"])("p",null," United Auto Sales provides the fastest, easiest and most user friendy to buy and sell cars online. Find a great price on the vehicle you Want "),Object(a["g"])("div",{class:"btns"},[Object(a["g"])("a",{href:"/register",class:"reg-btn"}," Register "),Object(a["g"])("a",{href:"/login",class:"login-btn"},"Login")])],-1),F=Object(a["g"])("img",{src:R.a,alt:"car"},null,-1);Object(a["q"])();var N=B((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("main",null,[q,F])})),V={name:"HomePage"};r("63ef");V.render=N,V.__scopeId="data-v-5de60ca6";var L=V,J={name:"Home",components:{HomePage:L}};r("4736");J.render=M,J.__scopeId="data-v-a5f5a6aa";var G=J,Y=Object(a["G"])("data-v-21087e95");Object(a["s"])("data-v-21087e95");var Q={id:"login"},z=Object(a["g"])("h1",null,"Log in to your account",-1);Object(a["q"])();var H=Y((function(e,t,r,n,c,o){var i=Object(a["w"])("login-form");return Object(a["p"])(),Object(a["d"])("div",Q,[z,Object(a["g"])(i)])})),X=Object(a["G"])("data-v-d9a00d98");Object(a["s"])("data-v-d9a00d98");var K={id:"login-form-container"},W=Object(a["g"])("label",{for:"username"}," Username ",-1),Z=Object(a["g"])("label",{for:"password"}," Password ",-1),$=Object(a["g"])("button",{class:"auth-form-btn",type:"submit"}," Login ",-1),ee={key:0,class:"error"};Object(a["q"])();var te=X((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("section",K,[Object(a["g"])("form",{onSubmit:t[3]||(t[3]=Object(a["F"])((function(){return o.handleSubmit&&o.handleSubmit.apply(o,arguments)}),["prevent"])),method:"POST"},[W,Object(a["E"])(Object(a["g"])("input",{id:"username",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.username=e}),required:""},null,512),[[a["B"],c.username]]),Z,Object(a["E"])(Object(a["g"])("input",{id:"password",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),required:""},null,512),[[a["B"],c.password]]),$,c.error?(Object(a["p"])(),Object(a["d"])("div",ee,Object(a["y"])(c.error),1)):Object(a["e"])("",!0)],32)])})),re={name:"LoginForm",data:function(){return{username:"",password:"",error:""}},methods:{handleSubmit:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),a={username:t.username,password:t.password},r.next=4,v(a);case 4:n=r.sent,n.error?(console.log(n.error),t.error=n.error):(A(n),window.location.href="/explore"),console.log(n);case 7:case"end":return r.stop()}}),r)})))()}}};r("e389");re.render=te,re.__scopeId="data-v-d9a00d98";var ae=re,ne={components:{LoginForm:ae},name:"LoginPage"};r("3e6c");ne.render=H,ne.__scopeId="data-v-21087e95";var ce=ne,oe=Object(a["G"])("data-v-41baa05f");Object(a["s"])("data-v-41baa05f");var ie={id:"registration"},se=Object(a["g"])("h1",null,"Register New User",-1);Object(a["q"])();var le=oe((function(e,t,r,n,c,o){var i=Object(a["w"])("registration-form");return Object(a["p"])(),Object(a["d"])("div",ie,[se,Object(a["g"])(i)])})),ue=Object(a["G"])("data-v-023e0563");Object(a["s"])("data-v-023e0563");var de={id:"registration-form-container"},be={class:"form-fields"},pe={class:"form-field"},fe=Object(a["g"])("label",{for:"username"}," Username ",-1),Oe={class:"form-field"},ge=Object(a["g"])("label",{for:"password"}," Password ",-1),je={class:"form-fields"},me={class:"form-field"},he=Object(a["g"])("label",{for:"fullname"}," Fullname ",-1),ve={class:"form-field"},ye=Object(a["g"])("label",{for:"email"}," Email ",-1),Ae={class:"form-field"},we=Object(a["g"])("label",{for:"location"},"Location",-1),Ce={class:"form-field"},ke=Object(a["g"])("label",{for:"biography"},"Biography",-1),Se={class:"form-field"},_e=Object(a["g"])("div",{class:"form-field"},[Object(a["g"])("button",{type:"submit",id:"register-btn"},"Register")],-1),Pe={key:0,class:"error"};Object(a["q"])();var Ue=ue((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("section",de,[Object(a["g"])("form",{onSubmit:t[8]||(t[8]=Object(a["F"])((function(){return o.handleSubmit&&o.handleSubmit.apply(o,arguments)}),["prevent"])),method:"POST",id:"registration-form"},[Object(a["g"])("article",be,[Object(a["g"])("div",pe,[fe,Object(a["E"])(Object(a["g"])("input",{id:"username",type:"text",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.username=e})},null,512),[[a["B"],c.username]])]),Object(a["g"])("div",Oe,[ge,Object(a["E"])(Object(a["g"])("input",{id:"password",type:"password",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e})},null,512),[[a["B"],c.password]])])]),Object(a["g"])("article",je,[Object(a["g"])("div",me,[he,Object(a["E"])(Object(a["g"])("input",{id:"fullname",type:"text",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.fullname=e})},null,512),[[a["B"],c.fullname]])]),Object(a["g"])("div",ve,[ye,Object(a["E"])(Object(a["g"])("input",{id:"email",type:"email",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.email=e})},null,512),[[a["B"],c.email]])])]),Object(a["g"])("div",Ae,[we,Object(a["E"])(Object(a["g"])("input",{id:"location",type:"text",required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.location=e})},null,512),[[a["B"],c.location]])]),Object(a["g"])("div",Ce,[ke,Object(a["E"])(Object(a["g"])("textarea",{id:"biography",rows:"8",cols:"50",required:"","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.biography=e})},null,512),[[a["B"],c.biography]])]),Object(a["g"])("div",Se,[Object(a["g"])("input",{type:"file",name:"photo",ref:"photo",accept:"image/*",onChange:t[7]||(t[7]=function(e){return o.handleFileUpload()})},null,544)]),_e,c.error?(Object(a["p"])(),Object(a["d"])("div",Pe,Object(a["y"])(c.error),1)):Object(a["e"])("",!0)],32)])})),xe={name:"RegistrationForm",data:function(){return{username:"",password:"",fullname:"",email:"",location:"",biography:"",photo:"",error:""}},methods:{handleFileUpload:function(){this.photo=this.$refs.photo.files[0]},handleSubmit:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){var a,n,c,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:for(c in e.preventDefault(),a={username:t.username,password:t.password,fullname:t.fullname,email:t.email,location:t.location,biography:t.biography,photo:t.photo},n=new FormData,a)n.append(c,a[c]);return r.next=6,w(n);case 6:o=r.sent,o.error?(console.log(o.error),t.error=o.error):(i=v({username:t.username,password:t.password}),A(i),t.$router.push("/")),console.log(o);case 9:case"end":return r.stop()}}),r)})))()}}};r("2788");xe.render=Ue,xe.__scopeId="data-v-023e0563";var Te=xe,Ee={components:{RegistrationForm:Te},name:"RegistrationPage"};r("0d22");Ee.render=le,Ee.__scopeId="data-v-41baa05f";var Ie=Ee,Me={id:"explore"};function De(e,t,r,n,c,o){var i=Object(a["w"])("ExploreComponent");return Object(a["p"])(),Object(a["d"])("div",Me,[Object(a["g"])(i)])}var Re=r("3928"),Be=r.n(Re),qe=Object(a["G"])("data-v-32de7b71");Object(a["s"])("data-v-32de7b71");var Fe={id:"explore-page"},Ne=Object(a["g"])("div",{class:"heading"},[Object(a["g"])("h1",null,"Explore")],-1),Ve={class:"search-cars"},Le={class:"inputs"},Je=Object(a["g"])("label",{class:"model",for:"make"},"Make",-1),Ge={class:"inputs"},Ye=Object(a["g"])("label",{class:"model",for:"model"},"Model",-1),Qe={class:"car-cards"},ze={class:"cars-lst"},He={class:"car-card"},Xe={class:"photo"},Ke={class:"car-info"},We={class:"name-and-price"},Ze={class:"year-and-make"},$e={class:"car-price"},et=Object(a["g"])("img",{class:"tags",src:Be.a,alt:"tag"},null,-1),tt={class:"car-model"};Object(a["q"])();var rt=qe((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("section",Fe,[Ne,Object(a["g"])("div",Ve,[Object(a["g"])("div",Le,[Je,Object(a["E"])(Object(a["g"])("input",{type:"search",name:"make","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.searchTermMake=e}),onChange:t[2]||(t[2]=function(){return o.empty&&o.empty.apply(o,arguments)}),id:"make",class:"search-input"},null,544),[[a["B"],c.searchTermMake]])]),Object(a["g"])("div",Ge,[Ye,Object(a["E"])(Object(a["g"])("input",{type:"search",name:"model","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.searchTermModel=e}),onChange:t[4]||(t[4]=function(){return o.empty&&o.empty.apply(o,arguments)}),id:"model",class:"search-input"},null,544),[[a["B"],c.searchTermModel]])]),Object(a["g"])("button",{class:"btn-search",onClick:t[5]||(t[5]=function(){return o.searchCars&&o.searchCars.apply(o,arguments)})},"Search")]),Object(a["g"])("div",Qe,[Object(a["g"])("ul",ze,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(c.currentCars,(function(e){return Object(a["p"])(),Object(a["d"])("li",{key:e.id},[Object(a["g"])("div",He,[Object(a["g"])("div",Xe,[Object(a["g"])("img",{src:c.API_ENDPOINT+"/uploads/"+e.photo,alt:"car"},null,8,["src"])]),Object(a["g"])("div",Ke,[Object(a["g"])("div",null,[Object(a["g"])("span",We,[Object(a["g"])("p",Ze,Object(a["y"])(e.year+" "+e.make),1),Object(a["g"])("span",$e,[et,Object(a["g"])("p",null,"$"+Object(a["y"])(e.price),1)])]),Object(a["g"])("p",tt,Object(a["y"])(e.model),1)])]),Object(a["g"])("button",{onClick:function(t){return o.getCar(e.id)},class:"btn-details"}," View More Details ",8,["onClick"])])])})),128))])])])})),at=(r("4de4"),"http://localhost:9090/api"),nt={name:"ExploreComponent",created:function(){var e=this;fetch(at+"/cars",{headers:P()}).then((function(e){return e.json()})).then((function(t){console.log(t),t.message||(e.cars=t)})).then((function(){console.log(e.cars),e.currentCars=e.cars,console.log(e.currentCars)}))},data:function(){return{cars:[],currentCars:[],searchTermModel:"",searchTermMake:"",API_ENDPOINT:"http://localhost:9090/api"}},methods:{getCar:function(e){window.location.href="/cars/".concat(e)},empty:function(){""==this.searchTermModel&&""==this.searchTermMake&&(this.currentCars=this.cars)},searchCars:function(){var e=this;""!=this.searchTermModel&&""==this.searchTermMake?this.currentCars=this.cars.filter((function(t){return t.model.toUpperCase()==e.searchTermModel.toUpperCase()})):""==this.searchTermModel&&""!=this.searchTermMake?this.currentCars=this.cars.filter((function(t){return t.make.toUpperCase()==e.searchTermMake.toUpperCase()})):this.currentCars=this.cars.filter((function(t){return t.make.toUpperCase()==e.searchTermMake.toUpperCase()&&t.model.toUpperCase()==e.searchTermModel.toUpperCase()}))}}};r("f42a");nt.render=rt,nt.__scopeId="data-v-32de7b71";var ct=nt,ot={name:"ExplorePage",components:{ExploreComponent:ct}};ot.render=De;var it=ot,st=Object(a["G"])("data-v-2b593910");Object(a["s"])("data-v-2b593910");var lt={id:"car"};Object(a["q"])();var ut=st((function(e,t,r,n,c,o){var i=Object(a["w"])("CarComponent");return Object(a["p"])(),Object(a["d"])("div",lt,[Object(a["g"])(i)])})),dt=(r("a4d3"),r("e01a"),r("fbe8")),bt=r.n(dt),pt=r("a143"),ft=r.n(pt),Ot=Object(a["G"])("data-v-e86f78a6");Object(a["s"])("data-v-e86f78a6");var gt={class:"main-car"},jt={id:"car-page"},mt={class:"details"},ht={class:"black"},vt=Object(a["g"])("span",{class:"detail-labels"},"Colour ",-1),yt={class:"black"},At=Object(a["g"])("span",{class:"detail-labels"},"Body Type ",-1),wt={class:"black"},Ct=Object(a["g"])("span",{class:"detail-labels"},"Price ",-1),kt={class:"black"},St=Object(a["g"])("span",{class:"detail-labels"},"Transmission ",-1),_t={class:"car-btns"},Pt=Object(a["g"])("a",{href:"/login",class:"login-btn"},"Email Owner",-1);Object(a["q"])();var Ut=Ot((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("div",gt,[Object(a["g"])("img",{src:c.API_ENDPOINT+"/uploads/"+c.car.photo,alt:""},null,8,["src"]),Object(a["g"])("div",jt,[Object(a["g"])("div",null,[Object(a["g"])("h2",null,Object(a["y"])(c.car.year+" "+c.car.make),1),Object(a["g"])("h3",null,Object(a["y"])(c.car.model),1),Object(a["g"])("p",null,Object(a["y"])(c.car.description),1),Object(a["g"])("div",mt,[Object(a["g"])("p",ht,[vt,Object(a["f"])(Object(a["y"])(c.car.colour),1)]),Object(a["g"])("p",yt,[At,Object(a["f"])(Object(a["y"])(c.car.car_type),1)]),Object(a["g"])("p",wt,[Ct,Object(a["f"])("$"+Object(a["y"])(c.car.price),1)]),Object(a["g"])("p",kt,[St,Object(a["f"])(Object(a["y"])(c.car.transmission),1)])])]),Object(a["g"])("div",_t,[Pt,Object(a["g"])("button",{onClick:t[1]||(t[1]=function(){return o.setFave&&o.setFave.apply(o,arguments)}),class:"fave"},[Object(a["g"])("img",{class:c.isFavourite?"hidden":"",src:bt.a,alt:"fave"},null,2),Object(a["g"])("img",{class:c.isFavourite?"":"hidden",src:ft.a,alt:"fave"},null,2)])])])])})),xt=(r("caad"),r("2532"),{name:"ExploreComponent",created:function(){var e="http://localhost:9090/api",t=this,r=window.location.pathname.replace("/cars/",""),a=P().Authorization;function n(e){var t=e.split(".")[1],r=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(r).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(a)}t.uid=n(a).id,fetch(e+"/cars/".concat(r),{headers:P()}).then((function(e){return e.json()})).then((function(e){e.message||(t.car=e,t.pic_src="../../../../uploads/"+e.photo)})),fetch(e+"/users/".concat(t.uid,"/favourites"),{headers:P()}).then((function(e){return e.json()})).then((function(e){e.message||(t.favourites=e)})).then((function(){t.favourites.map((function(e){return e.id})).includes(t.car.id)&&(t.isFavourite=!0)}))},data:function(){return{car:{},favourites:[],isFavourite:!1,pic_src:String,uid:String,API_ENDPOINT:"http://localhost:9090/api"}},methods:{setFave:function(){var e=this,t="http://localhost:9090/api";e.isFavourite||fetch(t+"/cars/".concat(e.car.id,"/favourite"),{headers:P(),method:"POST"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.isFavourite=!0}))}}});r("a675");xt.render=Ut,xt.__scopeId="data-v-e86f78a6";var Tt=xt,Et={name:"CarPage",components:{CarComponent:Tt}};r("aba8");Et.render=ut,Et.__scopeId="data-v-2b593910";var It=Et,Mt=Object(a["G"])("data-v-7699beb9");Object(a["s"])("data-v-7699beb9");var Dt={id:"user"};Object(a["q"])();var Rt=Mt((function(e,t,r,n,c,o){var i=Object(a["w"])("UserComponent");return Object(a["p"])(),Object(a["d"])("div",Dt,[Object(a["g"])(i)])})),Bt=(r("b0c0"),Object(a["G"])("data-v-3808edf0"));Object(a["s"])("data-v-3808edf0");var qt=Object(a["g"])("h1",{id:"no-access"},"You cannot access this page",-1),Ft={class:"user-card"},Nt={class:"profile-img"},Vt=Object(a["g"])("br",null,null,-1),Lt={class:"black"},Jt=Object(a["g"])("span",{class:"user-detail-label"},"Email ",-1),Gt={class:"black"},Yt=Object(a["g"])("span",{class:"user-detail-label"},"Location ",-1),Qt={class:"black"},zt=Object(a["g"])("span",{class:"user-detail-label"},"Joined ",-1),Ht=Object(a["g"])("div",{class:"heading"},[Object(a["g"])("h1",null,"Cars Favourited")],-1),Xt={class:"car-cards"},Kt={class:"cars-lst"},Wt={class:"car-card"},Zt={class:"photo"},$t={class:"car-info"},er={class:"name-and-price"},tr={class:"year-and-make"},rr={class:"car-price"},ar=Object(a["g"])("img",{class:"tags",src:Be.a,alt:"tag"},null,-1),nr={class:"car-model"};Object(a["q"])();var cr=Bt((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("section",null,[Object(a["g"])("div",{class:c.param==c.uid?"hidden":""},[qt],2),Object(a["g"])("div",{class:c.param==c.uid?"":"hidden",id:"user-page"},[Object(a["g"])("div",Ft,[Object(a["g"])("div",Nt,[Object(a["g"])("img",{src:c.API_ENDPOINT+"/uploads/"+c.user.photo,alt:""},null,8,["src"])]),Object(a["g"])("div",null,[Object(a["g"])("h1",null,Object(a["y"])(c.user.name),1),Object(a["g"])("h3",null,Object(a["y"])(c.user.username),1),Object(a["g"])("p",null,Object(a["y"])(c.user.biography),1),Vt,Object(a["g"])("p",Lt,[Jt,Object(a["f"])(" "+Object(a["y"])(c.user.email),1)]),Object(a["g"])("p",Gt,[Yt,Object(a["f"])(" "+Object(a["y"])(c.user.location),1)]),Object(a["g"])("p",Qt,[zt,Object(a["f"])(" "+Object(a["y"])(c.user.date_joined),1)])])]),Ht,Object(a["g"])("div",Xt,[Object(a["g"])("ul",Kt,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(c.cars,(function(e){return Object(a["p"])(),Object(a["d"])("li",{key:e.id},[Object(a["g"])("div",Wt,[Object(a["g"])("div",Zt,[Object(a["g"])("img",{src:c.API_ENDPOINT+"/uploads/"+e.photo,alt:"car"},null,8,["src"])]),Object(a["g"])("div",$t,[Object(a["g"])("div",null,[Object(a["g"])("span",er,[Object(a["g"])("p",tr,Object(a["y"])(e.year+" "+e.make),1),Object(a["g"])("span",rr,[ar,Object(a["g"])("p",null,"$"+Object(a["y"])(e.price),1)])]),Object(a["g"])("p",nr,Object(a["y"])(e.model),1)])]),Object(a["g"])("button",{onClick:function(t){return o.getCar(e.id)},class:"btn-details"}," View More Details ",8,["onClick"])])])})),128))])])],2)])})),or="http://localhost:9090/api",ir={name:"UserComponent",created:function(){var e=this,t=P().Authorization,r=window.location.pathname.replace("/users/","");function a(e){var t=e.split(".")[1],r=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(r).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(a)}e.param=r,e.uid=a(t).id,fetch(or+"/users/".concat(r,"/favourites"),{headers:P()}).then((function(e){return e.json()})).then((function(t){t.message||(e.cars=t)})),fetch(or+"/users/".concat(r),{headers:P()}).then((function(e){return e.json()})).then((function(t){t.message||(e.user=t)}))},data:function(){return{cars:[],user:{},uid:String,param:String,API_ENDPOINT:"http://localhost:9090/api"}},methods:{getCar:function(e){window.location.href="/cars/".concat(e)}}};r("b7bb");ir.render=cr,ir.__scopeId="data-v-3808edf0";var sr=ir,lr={name:"CarPage",components:{UserComponent:sr}};r("59df");lr.render=Rt,lr.__scopeId="data-v-7699beb9";var ur=lr,dr=Object(a["G"])("data-v-39fc51af");Object(a["s"])("data-v-39fc51af");var br={id:"add-new-car"},pr=Object(a["g"])("h1",null,"Add New Car",-1);Object(a["q"])();var fr=dr((function(e,t,r,n,c,o){var i=Object(a["w"])("new-car-form");return Object(a["p"])(),Object(a["d"])("div",br,[pr,Object(a["g"])(i)])})),Or=Object(a["G"])("data-v-6064384b");Object(a["s"])("data-v-6064384b");var gr={id:"new-car-form-container"},jr={class:"form-fields"},mr={class:"form-field"},hr=Object(a["g"])("label",{for:"make"},"Make",-1),vr={class:"form-field"},yr=Object(a["g"])("label",{for:"model"},"Model",-1),Ar={class:"form-fields"},wr={class:"form-field"},Cr=Object(a["g"])("label",{for:"colour"},"Colour",-1),kr={class:"form-field"},Sr=Object(a["g"])("label",{for:"year"},"Year",-1),_r={class:"form-fields"},Pr={class:"form-field"},Ur=Object(a["g"])("label",{for:"price"},"Location",-1),xr={class:"form-field"},Tr=Object(a["g"])("label",{for:"car_type"},"Car Type",-1),Er=Object(a["g"])("option",null,"SUV",-1),Ir=Object(a["g"])("option",null,"Sedan",-1),Mr=Object(a["g"])("option",null,"Coupe",-1),Dr=Object(a["g"])("option",null,"Sports Car",-1),Rr=Object(a["g"])("option",null,"Hatchback",-1),Br=Object(a["g"])("option",null,"Convertible",-1),qr=Object(a["g"])("option",null,"Station Wagon",-1),Fr=Object(a["g"])("option",null,"Minivan",-1),Nr=Object(a["g"])("option",null,"Pickup Truck",-1),Vr={class:"form-field"},Lr=Object(a["g"])("label",{for:"transmission"},"Transmission",-1),Jr=Object(a["g"])("option",null,"Automatic",-1),Gr=Object(a["g"])("option",null,"Manual",-1),Yr=Object(a["g"])("option",null,"Semi-Automatic",-1),Qr=Object(a["g"])("option",null,"Dual-Clutch",-1),zr=Object(a["g"])("option",null,"Continuously Variable",-1),Hr={class:"form-field"},Xr=Object(a["g"])("label",{for:"description"},"Description",-1),Kr={class:"form-field"},Wr=Object(a["g"])("div",{class:"form-field"},[Object(a["g"])("button",{type:"submit",id:"new-car-btn"},"Register")],-1);Object(a["q"])();var Zr=Or((function(e,t,r,n,c,o){return Object(a["p"])(),Object(a["d"])("section",gr,[Object(a["g"])("form",{onSubmit:t[10]||(t[10]=Object(a["F"])((function(){return o.handleSubmit&&o.handleSubmit.apply(o,arguments)}),["prevent"])),method:"POST",enctype:"multipart/form-data",id:"new-car-form"},[Object(a["g"])("article",jr,[Object(a["g"])("div",mr,[hr,Object(a["E"])(Object(a["g"])("input",{id:"make",type:"text",name:"make",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.make=e})},null,512),[[a["B"],c.make]])]),Object(a["g"])("div",vr,[yr,Object(a["E"])(Object(a["g"])("input",{id:"model",type:"text",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.model=e})},null,512),[[a["B"],c.model]])])]),Object(a["g"])("article",Ar,[Object(a["g"])("div",wr,[Cr,Object(a["E"])(Object(a["g"])("input",{id:"colour",type:"text",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.colour=e})},null,512),[[a["B"],c.colour]])]),Object(a["g"])("div",kr,[Sr,Object(a["E"])(Object(a["g"])("input",{id:"year",type:"text",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.year=e}),pattern:"[0-9]{4}"},null,512),[[a["B"],c.year]])])]),Object(a["g"])("article",_r,[Object(a["g"])("div",Pr,[Ur,Object(a["E"])(Object(a["g"])("input",{id:"price",type:"number",min:"0.00",step:"0.01",required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.price=e})},null,512),[[a["B"],c.price]]),Object(a["g"])("div",xr,[Tr,Object(a["E"])(Object(a["g"])("select",{id:"car_type",required:"","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.car_type=e})},[Er,Ir,Mr,Dr,Rr,Br,qr,Fr,Nr],512),[[a["A"],c.car_type]])])])]),Object(a["g"])("div",Vr,[Lr,Object(a["E"])(Object(a["g"])("select",{id:"transmission",required:"","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.transmission=e})},[Jr,Gr,Yr,Qr,zr],512),[[a["A"],c.transmission]])]),Object(a["g"])("div",Hr,[Xr,Object(a["E"])(Object(a["g"])("textarea",{id:"description",rows:"8",cols:"50",required:"","onUpdate:modelValue":t[8]||(t[8]=function(e){return c.description=e})},null,512),[[a["B"],c.description]])]),Object(a["g"])("div",Kr,[Object(a["g"])("input",{type:"file",name:"photo",ref:"photo",accept:"image/*",onChange:t[9]||(t[9]=function(e){return o.handleFileUpload()})},null,544)]),Wr],32)])})),$r=r("b85c"),ea=r("5530"),ta="http://localhost:9090/api";function ra(e){return aa.apply(this,arguments)}function aa(){return aa=Object(g["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=P(),e.next=3,fetch("".concat(ta,"/cars"),{headers:Object(ea["a"])({Accept:"application/json","Content-Type":"multipart/form-data"},r),body:t}).then((function(e){return 201!=e.status?e.json():null})).catch((function(e){return console.log(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),aa.apply(this,arguments)}var na={name:"NewCarForm",data:function(){return{make:"",model:"",colour:"",year:"",price:0,car_type:"",transmission:"",description:"",photo:""}},methods:{handleFileUpload:function(){this.photo=this.$refs.photo.files[0]},handleSubmit:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){var a,n,c,o,i,s,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:for(c in e.preventDefault(),a={make:t.make,model:t.model,colour:t.colour,year:t.year,price:t.price,car_type:t.car_type,transmission:t.transmission,description:t.description,photo:t.photo},n=new FormData,a)n.append(c,a[c]);o=Object($r["a"])(n.values());try{for(o.s();!(i=o.n()).done;)s=i.value,console.log(s)}catch(u){o.e(u)}finally{o.f()}return r.next=8,ra(n);case 8:l=r.sent,l.error&&(console.log(l.error),t.error=l.error);case 10:case"end":return r.stop()}}),r)})))()}}};r("92cb");na.render=Zr,na.__scopeId="data-v-6064384b";var ca=na,oa={components:{NewCarForm:ca},name:"AddNewCarPage"};r("a618");oa.render=fr,oa.__scopeId="data-v-39fc51af";var ia=oa,sa=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/login",name:"LoginPage",component:ce,meta:{guest:!0}},{path:"/register",name:"RegistrationPage",component:Ie,meta:{guest:!0}},{path:"/explore",name:"ExplorePage",component:it,meta:{requiresAuth:!0}},{path:"/cars/:id",name:"CarPage",component:It,meta:{requiresAuth:!0}},{path:"/users/:id",name:"UserPage",component:ur,meta:{requiresAuth:!0}},{path:"/cars/new",name:"AddNewCarPage",component:ia,meta:{requiresAuth:!0}}],la=Object(T["a"])({history:Object(T["b"])("/"),routes:sa});la.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))&&null==localStorage.getItem("jwt")?r({path:"/login",params:{nextUrl:e.fullPath}}):r()}));var ua=la;m.a.defaults.baseURL="http://localhost:9090",Object(a["c"])(x).use(ua).mount("#app")},"59df":function(e,t,r){"use strict";r("fe31")},"622a":function(e,t,r){},"63ef":function(e,t,r){"use strict";r("176f")},"8a1c":function(e,t,r){},"92cb":function(e,t,r){"use strict";r("e7cd")},a143:function(e,t,r){e.exports=r.p+"img/heart-filled.7058c46c.svg"},a618:function(e,t,r){"use strict";r("622a")},a675:function(e,t,r){"use strict";r("b279")},aba8:function(e,t,r){"use strict";r("c387")},b279:function(e,t,r){},b7bb:function(e,t,r){"use strict";r("1cc4")},c013:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAA0UlEQVRIx+1SOwoCMRScJ5brBQQrEcTOO3ieBS1dwc+57LTRxsLPBQQPsYVjEySsSfZlVSzWaUJg3ryZSYA/6gmSK5I59chJLl1a4hBvA7gCWAM4KD0NAYwAdETkVuZ+YlwNIhL3zcxYQ96TPFWo9UxyV0bqkryTnFdYsDApeiHSLLYeR01ZiHSM+Dk+XGxNKSxgrHMXROSp2/BwpgASAJlCT8+1Yibm3lJU8sK1NX0JUjOYKhIEuT97g4/h6wuampga+OotJtiac1PB7DuzdcYD2c0ozxkfjCoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjZUMDA6NDY6NTArMDA6MDCAVvtSAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI2VDAwOjQ2OjUwKzAwOjAw8QtD7gAAAABJRU5ErkJggg=="},c387:function(e,t,r){},dec8:function(e,t,r){},e389:function(e,t,r){"use strict";r("01e7")},e7cd:function(e,t,r){},f1d7:function(e,t,r){},f42a:function(e,t,r){"use strict";r("8a1c")},fb3f:function(e,t,r){},fbe8:function(e,t,r){e.exports=r.p+"img/heart.bbbdb05a.svg"},fe31:function(e,t,r){}});
//# sourceMappingURL=app.1992abd5.js.map