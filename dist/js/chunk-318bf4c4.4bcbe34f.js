(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-318bf4c4"],{"159b":function(t,e,i){var s=i("da84"),n=i("fdbc"),a=i("17c2"),r=i("9112");for(var o in n){var l=s[o],h=l&&l.prototype;if(h&&h.forEach!==a)try{r(h,"forEach",a)}catch(c){h.forEach=a}}},"17c2":function(t,e,i){"use strict";var s=i("b727").forEach,n=i("a640"),a=n("forEach");t.exports=a?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"264f":function(t,e,i){"use strict";i("ed9f")},"51c4":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider_case"},[i("v-slider",t._b({},"v-slider",t.options,!1),t._l(t.gallery,(function(t){return i("div",{key:t.id,staticClass:"item"},[i("img",{staticClass:"item-img",attrs:{src:t.imageUrl}})])})),0)],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v_slider"},[i("div",{ref:"list",staticClass:"v_slider__list"},[i("div",{ref:"track",staticClass:"v_slider__track",style:{width:t.width.track+"px",transform:"translate(-"+t.transform+"px)",transition:"transform "+t.settings.timing+" "+t.settings.speed+"ms"}},[t._t("default")],2)]),t.dots?i("ul",{staticClass:"v_slider__dots"},t._l(t.numDot,(function(e){return i("li",{key:e,class:{active:e==t.numDotActive},on:{click:function(i){return t.setDot(e)}}},[i("span")])})),0):t._e(),t.nav?i("button",{staticClass:"v_slider__prev",domProps:{innerHTML:t._s(t.prevNav)},on:{click:t.prevSlide}}):t._e(),t.nav?i("button",{staticClass:"v_slider__next",domProps:{innerHTML:t._s(t.nextNav)},on:{click:t.nextSlide}}):t._e()])},r=[],o=(i("a9e3"),i("b64b"),i("159b"),{name:"slider",props:{items:{type:Number,default:3},margin:{type:Number,default:20},nav:{type:Boolean,default:!1},dots:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},prevNav:{type:String,default:""},nextNav:{type:String,default:""},speed:{type:Number,default:300},timing:{type:String,default:"ease"},offset:{type:Number,default:1},sibling:{type:Boolean,default:!1}},data:function(){return{el:{track:null,slides:null},width:{document:0,container:0,slide:0,track:0},itemActive:0,numItemReal:0,numItemAll:0,breakpoints:[],numDot:0,numDotActive:0,transform:0,settings:{items:this.items,margin:this.margin,nav:this.nav,dots:this.dots,loop:this.loop,prevNav:this.prevNav,nextNav:this.nextNav,speed:this.speed,timing:this.timing,offset:this.offset,responsive:this.responsive},mouseDown:!1,swipeDistance:50,dragDistance:0}},mounted:function(){this.$nextTick((function(){this.el.list=this.$refs.list,this.el.track=this.$refs.track,this.el.slides=this.el.track.children,this.numItemReal=this.el.slides.length;for(var t=0;t<this.numItemReal;++t)this.el.slides[t].classList.add("v_slider__item");if(this.settings.loop){for(var e=this.el.track.getElementsByClassName("v_slider__item"),i=0;i<this.numItemReal;++i){var s=e[i].cloneNode(!0);s.classList.add("cloned"),this.el.track.insertBefore(s,this.el.slides[this.numItemReal-1+i].nextSibling)}for(var n=this.numItemReal;n>0;--n){var a=e[this.numItemReal-1].cloneNode(!0);a.classList.add("cloned"),this.el.track.insertBefore(a,this.el.slides[0])}}this.settings.loop?this.numItemAll=3*this.numItemReal:this.numItemAll=this.numItemReal,window.addEventListener("resize",this.getWidthDocument),"ontouchstart"in window?(this.el.track.addEventListener("touchstart",this.handleMouseDown),this.el.track.addEventListener("touchend",this.handleMouseUp),this.el.track.addEventListener("touchmove",this.handleMouseMove)):(this.el.track.addEventListener("mousedown",this.handleMouseDown),this.el.track.addEventListener("mouseup",this.handleMouseUp),this.el.track.addEventListener("mousemove",this.handleMouseMove)),this.getWidthDocument()}))},beforeDestroy:function(){window.removeEventListener("resize",this.getWidthDocument),"ontouchstart"in window?(this.el.track.removeEventListener("touchstart",this.handleMouseDown),this.el.track.removeEventListener("touchend",this.handleMouseUp),this.el.track.removeEventListener("touchmove",this.handleMouseMove)):(this.el.track.removeEventListener("mousedown",this.handleMouseDown),this.el.track.removeEventListener("mouseup",this.handleMouseUp),this.el.track.removeEventListener("mousemove",this.handleMouseMove))},methods:{getWidthDocument:function(){this.width.document=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},getWidth:function(){this.width.container=this.el.list.clientWidth,1==this.settings.items?(this.width.slide=this.width.container,this.width.track=this.width.container*this.numItemAll):(this.width.slide=this.width.container/this.settings.items-(this.settings.items-1)*this.settings.margin/this.settings.items,this.width.track=(this.width.container+this.settings.margin)*this.numItemAll)},reload:function(){var t=this;this.responsive&&(this.breakpoints=Object.keys(this.responsive)),this.breakpoints&&this.breakpoints.forEach((function(e){if(e<=t.width.document)for(var i in t.responsive[e])t.settings[i]=t.responsive[e][i]})),this.getWidth(),1==this.settings.items?this.settings.margin=0:this.settings.margin=this.margin;for(var e=0;e<this.numItemAll;++e)this.el.slides[e].style.width=this.width.slide+"px",this.el.slides[e].style.marginRight=this.settings.margin+"px";for(var i=0;i<this.numItemAll-1;++i)this.el.slides[i].classList.remove("active");this.settings.loop?this.transform=this.numItemReal*(this.width.slide+this.settings.margin):this.transform=0,this.addActiveClass(this.itemActive),this.numDot=Math.ceil(this.numItemReal/this.settings.items)},addActiveClass:function(t){this.settings.loop&&(t+=this.numItemReal);var e=t+Math.floor(this.settings.items/2);this.el.slides[e].classList.add("super");for(var i=0;i<this.settings.items;++i)this.el.slides[t].classList.add("active"),++t},setSlide:function(t){for(var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=0;s<this.numItemAll-1;++s)this.el.slides[s].classList.remove("active","super");this.settings.loop?this.transform=(t+this.numItemReal-1)*(this.width.slide+this.settings.margin):this.transform=t*(this.width.slide+this.settings.margin),this.transform+=this.width.slide+this.settings.margin,this.settings.speed=i?this.speed:0,this.settings.loop?(t<0?(this.itemActive=this.numItemReal-1,setTimeout((function(){e.setSlide(e.itemActive,!1)}),this.speed)):t>=this.numItemReal?(this.itemActive=0,setTimeout((function(){e.setSlide(0,!1)}),this.speed)):this.itemActive=t,this.addActiveClass(this.itemActive)):(t<0?this.itemActive=0:t>=this.numItemReal-this.settings.items?this.itemActive=this.numItemReal-this.settings.items:this.itemActive=t,this.transform=this.itemActive*(this.width.slide+this.settings.margin),this.addActiveClass(this.itemActive))},nextSlide:function(){this.setSlide(this.itemActive+this.settings.offset)},prevSlide:function(){this.setSlide(this.itemActive-this.settings.offset)},setDot:function(t){if(this.settings.loop)this.setSlide((t-1)*this.settings.items);else if(t==this.numDot){var e=this.numItemReal%this.settings.items;0==e?this.setSlide((t-1)*this.settings.items):this.setSlide(this.numItemReal-this.settings.items)}else this.setSlide((t-1)*this.settings.items)},handleMouseDown:function(t){t.touches||t.preventDefault(),this.mouseDown=!0,this.dragStartX="ontouchstart"in window?t.touches[0].clientX:t.clientX,this.dragStartY="ontouchstart"in window?t.touches[0].clientY:t.clientY},handleMouseMove:function(t){var e="ontouchstart"in window?t.touches[0].clientX:t.clientX,i="ontouchstart"in window?t.touches[0].clientY:t.clientY,s=Math.abs(e-this.dragStartX),n=Math.abs(i-this.dragStartY);s>3*n&&(this.dragDistance=e-this.dragStartX,this.disableScroll())},handleMouseUp:function(){this.mouseDown=!1,this.enableScroll()},disableScroll:function(){document.ontouchmove=function(t){t.preventDefault()}},enableScroll:function(){document.ontouchmove=function(){return!0}}},computed:{documentWidth:function(){return this.width.document}},watch:{documentWidth:function(){this.reload()},dragDistance:function(){this.mouseDown&&(this.dragDistance>this.swipeDistance&&(this.prevSlide(),this.handleMouseUp()),this.dragDistance<-1*this.swipeDistance&&(this.nextSlide(),this.handleMouseUp()))}},updated:function(){this.$nextTick((function(){if(this.settings.loop)this.numDotActive=Math.ceil(this.itemActive/this.settings.items+.1);else{var t=this.numItemReal%this.settings.items;0==t?this.numDotActive=Math.ceil(this.itemActive/this.settings.items+.1):this.itemActive>=this.numItemReal-this.settings.items?this.numDotActive=this.numDot:this.numDotActive=Math.ceil(this.itemActive/this.settings.items+.1)}if(this.sibling){this.el.activeItem=this.$el.getElementsByClassName("v_slider__track")[0];for(var e=0;e<this.el.activeItem.children.length;++e)this.el.activeItem.children[e].removeEventListener("click",this.nextSlide),this.el.activeItem.children[e].removeEventListener("click",this.prevSlide);this.el.activeItem=this.el.activeItem.getElementsByClassName("super")[0],this.el.activeItem.nextElementSibling.addEventListener("click",this.nextSlide),this.el.activeItem.previousElementSibling.addEventListener("click",this.prevSlide)}}))}}),l=o,h=(i("d507"),i("2877")),c=Object(h["a"])(l,a,r,!1,null,"7c36e42c",null),d=c.exports,m={name:"SliderMain",components:{"v-slider":d},props:{gallery:{type:Array,default:function(){return[]}}},data:function(){return{options:{items:1,margin:20,nav:!0,dots:!0,loop:!0,timing:"cubic-bezier(0, 0.72, 0.64, 1.06)",offset:1,prevNav:"<i class='fas fa-chevron-left fa-2x'></i>",nextNav:"<i class='fas fa-chevron-right fa-2x'></i>",sibling:!1,responsive:{0:{items:1},768:{items:3},999:{items:5}}}}}},u=m,v=(i("b8a0"),Object(h["a"])(u,s,n,!1,null,"cd7c878c",null));e["a"]=v.exports},"65f0":function(t,e,i){var s=i("861d"),n=i("e8b5"),a=i("b622"),r=a("species");t.exports=function(t,e){var i;return n(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?s(i)&&(i=i[r],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},7561:function(t,e,i){},"9d20":function(t,e,i){},a640:function(t,e,i){"use strict";var s=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,i){var s=i("23e7"),n=i("7b0b"),a=i("df75"),r=i("d039"),o=r((function(){a(1)}));s({target:"Object",stat:!0,forced:o},{keys:function(t){return a(n(t))}})},b727:function(t,e,i){var s=i("0366"),n=i("44ad"),a=i("7b0b"),r=i("50c4"),o=i("65f0"),l=[].push,h=function(t){var e=1==t,i=2==t,h=3==t,c=4==t,d=6==t,m=7==t,u=5==t||d;return function(v,f,p,g){for(var _,w,b=a(v),k=n(b),A=s(f,p,3),y=r(k.length),I=0,D=g||o,S=e?D(v,y):i||m?D(v,0):void 0;y>I;I++)if((u||I in k)&&(_=k[I],w=A(_,I,b),t))if(e)S[I]=w;else if(w)switch(t){case 3:return!0;case 5:return _;case 6:return I;case 2:l.call(S,_)}else switch(t){case 4:return!1;case 7:l.call(S,_)}return d?-1:h||c?c:S}};t.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterOut:h(7)}},b8a0:function(t,e,i){"use strict";i("7561")},d2f5:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cinema__description"},[i("div",{staticClass:"cinema__description-banner"},[i("img",{attrs:{src:t.data.topBanner.imageUrl}})]),i("div",{staticClass:"container cinema__description-info"},[t._m(0),i("div",{staticClass:"cinema__about"},[i("div",{staticClass:"cinema__about-name"},[i("h3",[t._v(t._s(t.data.name))]),i("img",{attrs:{src:t.data.mainImage.imageUrl}}),i("div",{staticClass:"schedule"},[t._v("Расписание")])]),i("div",{staticClass:"cinema__about-description"},[i("p",[t._v(t._s(t.data.description))])]),i("div",{staticClass:"condition"},[i("h3",[t._v("Условия")]),i("p",[t._v(t._s(t.data.conditions))])]),i("div",{staticClass:"gallery"},[i("h3",[t._v("ФОТОГАЛЕРЕЯ")]),i("div",{staticClass:"gallery-slider"},[i("Slider",{attrs:{gallery:t.data.galleryImages}})],1)])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aside"},[i("div",{staticClass:"ad"},[t._v("Ad")]),i("div",{staticClass:"hall-list"})])}],a=i("51c4"),r={name:"Cinema",components:{Slider:a["a"]},props:["data"],data:function(){return{}},created:function(){void 0==this.data&&this.$router.push("/cinema")}},o=r,l=(i("264f"),i("2877")),h=Object(l["a"])(o,s,n,!1,null,"ca5395ee",null);e["default"]=h.exports},d507:function(t,e,i){"use strict";i("9d20")},e8b5:function(t,e,i){var s=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}},ed9f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-318bf4c4.4bcbe34f.js.map