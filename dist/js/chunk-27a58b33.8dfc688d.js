(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27a58b33"],{"1d69":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"movies"},[a("div",{staticClass:"movies__title"},[a("h3",[e._v("Список текущих фильмов")]),a("div",{staticClass:"movies__blocks"},[a("MoviesCurrent")],1)]),a("div",{staticClass:"movies__blocks"},[a("h3",[e._v("Список фильмов которые покажут скоро")]),a("MoviesNew")],1)])},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-block"},[e._l(e.dataBlocks,(function(t,n){return a("MoviesCurrentBlocks",{key:t.id,attrs:{data:t,dataBlocks:e.dataBlocks},on:{remove:function(t){return e.deleteMovie(n)}}})})),a("router-link",{ref:"createMovie",staticClass:"btn btn-default btn-add",attrs:{tag:"button",to:{name:"MoviesAddCurrent",params:{way:"add-current",dataArr:e.dataBlocks,dataOb:e.movieUpDate,dbRef:"movies/current",dbMainImageRef:"movies/current/main",dbGalleryRef:"movies/current/gallery"}}}},[e._v(" Добавить фильм ")])],2)},r=[],s=(a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-block"},[a("div",{staticClass:"btn btn-default info-block__close",on:{click:function(t){return e.$emit("remove")}}},[a("svg",{staticClass:"info-block__close-img",attrs:{viewBox:"0 0 8 8"}},[a("path",{attrs:{d:"M1.406 0l-1.406 1.406.688.719 1.781 1.781-1.781 1.781-.688.719 1.406 1.406.719-.688 1.781-1.781 1.781 1.781.719.688 1.406-1.406-.688-.719-1.781-1.781 1.781-1.781.688-.719-1.406-1.406-.719.688-1.781 1.781-1.781-1.781-.719-.688z",id:"x",fill:"rgba(0,0,0,0.7)"}})])]),a("router-link",{staticClass:"info-block__image",attrs:{tag:"img",src:e.movieData.mainImage.imageUrl,to:{name:"MoviesAddCurrent",params:{way:"add-current",dataArr:e.movieDataArr,dataOb:e.movieData,dataImg:e.movieData.mainImage.imageUrl,dbRef:"movies/current",dbMainImageRef:"movies/current/main",dbGalleryRef:"movies/current/gallery"}}}}),a("div",{staticClass:"info-block__image-name"},[e._v(e._s(e.movieData.name))])],1)}),c=[],l={name:"MoviesCurrentBlocks",props:["data","dataBlocks"],data:function(){return{movieData:this.data,movieDataArr:this.dataBlocks}}},d=l,u=(a("52cc"),a("2877")),f=Object(u["a"])(d,s,c,!1,null,"7ca55db2",null),v=f.exports,m=a("2591"),b=(a("66ce"),a("588e"),{name:"Movies",components:{MoviesCurrentBlocks:v},data:function(){return{ref:"movies/current",dataBlocks:[],movieUpDate:{}}},methods:{deleteMovie:function(e){this.dataBlocks.splice(e,1);var t=m["a"].database().ref(this.ref);t.set(this.dataBlocks)},onRead:function(){var e=this,t=m["a"].database().ref(this.ref);t.on("value",(function(t){null!==t.val()&&(e.dataBlocks=t.val())}))}},created:function(){this.onRead()}}),k=b,p=(a("7097"),Object(u["a"])(k,o,r,!1,null,"1bb3545d",null)),_=p.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-block"},[e._l(e.dataBlocks,(function(t,n){return a("MoviesNewBlocks",{key:t.id,attrs:{data:t,dataBlocks:e.dataBlocks},on:{remove:function(t){return e.deleteMovie(n)}}})})),a("router-link",{ref:"createMovie",staticClass:"btn btn-default btn-add",attrs:{tag:"button",to:{name:"MoviesAddCurrent",params:{way:"add-current",dataArr:e.dataBlocks,dataOb:e.movieUpDate,dbRef:"movies/new",dbMainImageRef:"movies/new/main",dbGalleryRef:" movies/new/gallery"}}}},[e._v(" Добавить фильм ")])],2)},h=[],M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-block"},[a("div",{staticClass:"btn btn-default info-block__close",on:{click:function(t){return e.$emit("remove")}}},[a("svg",{staticClass:"info-block__close-img",attrs:{viewBox:"0 0 8 8"}},[a("path",{attrs:{d:"M1.406 0l-1.406 1.406.688.719 1.781 1.781-1.781 1.781-.688.719 1.406 1.406.719-.688 1.781-1.781 1.781 1.781.719.688 1.406-1.406-.688-.719-1.781-1.781 1.781-1.781.688-.719-1.406-1.406-.719.688-1.781 1.781-1.781-1.781-.719-.688z",id:"x",fill:"rgba(0,0,0,0.7)"}})])]),a("router-link",{staticClass:"info-block__image",attrs:{tag:"img",src:e.movieData.mainImage.imageUrl,to:{name:"MoviesAddCurrent",params:{way:"add-current",dataArr:e.movieDataArr,dataOb:e.movieData,dataImg:e.movieData.mainImage.imageUrl,dbRef:"movies/new",dbMainImageRef:"movies/new/main",dbGalleryRef:"movies/new/gallery"}}}}),a("div",{staticClass:"info-block__image-name"},[e._v(e._s(e.movieData.name))])],1)},B=[],w={name:"MoviesNewBlocks",props:["data","dataBlocks"],data:function(){return{movieData:this.data,movieDataArr:this.dataBlocks}}},C=w,y=(a("f4e9"),Object(u["a"])(C,M,B,!1,null,"3ac93983",null)),A=y.exports,D={name:"Movies",components:{MoviesNewBlocks:A},data:function(){return{ref:"movies/new",dataBlocks:[],movieUpDate:{}}},methods:{deleteMovie:function(e){this.dataBlocks.splice(e,1);var t=m["a"].database().ref(this.ref);t.set(this.dataBlocks)},onRead:function(){var e=this,t=m["a"].database().ref(this.ref);t.on("value",(function(t){null!==t.val()&&(e.dataBlocks=t.val())}))}},created:function(){this.onRead()}},x=D,R=(a("451f"),Object(u["a"])(x,g,h,!1,null,"0a1fb4f2",null)),I=R.exports,O={name:"Movies",components:{MoviesCurrent:_,MoviesNew:I}},U=O,$=(a("bc86"),Object(u["a"])(U,n,i,!1,null,"359b1468",null));t["default"]=$.exports},"1dde":function(e,t,a){var n=a("d039"),i=a("b622"),o=a("2d00"),r=i("species");e.exports=function(e){return o>=51||!n((function(){var t=[],a=t.constructor={};return a[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2ed5":function(e,t,a){},"451f":function(e,t,a){"use strict";a("4740")},4740:function(e,t,a){},"52cc":function(e,t,a){"use strict";a("5828")},5828:function(e,t,a){},"5ed8":function(e,t,a){},"65f0":function(e,t,a){var n=a("861d"),i=a("e8b5"),o=a("b622"),r=o("species");e.exports=function(e,t){var a;return i(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?n(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},7097:function(e,t,a){"use strict";a("2ed5")},8418:function(e,t,a){"use strict";var n=a("c04e"),i=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var r=n(t);r in e?i.f(e,r,o(0,a)):e[r]=a}},"9c88":function(e,t,a){},a434:function(e,t,a){"use strict";var n=a("23e7"),i=a("23cb"),o=a("a691"),r=a("50c4"),s=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),u=d("splice"),f=Math.max,v=Math.min,m=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var a,n,d,u,k,p,_=s(this),g=r(_.length),h=i(e,g),M=arguments.length;if(0===M?a=n=0:1===M?(a=0,n=g-h):(a=M-2,n=v(f(o(t),0),g-h)),g+a-n>m)throw TypeError(b);for(d=c(_,n),u=0;u<n;u++)k=h+u,k in _&&l(d,u,_[k]);if(d.length=n,a<n){for(u=h;u<g-n;u++)k=u+n,p=u+a,k in _?_[p]=_[k]:delete _[p];for(u=g;u>g-n+a;u--)delete _[u-1]}else if(a>n)for(u=g-n;u>h;u--)k=u+n-1,p=u+a-1,k in _?_[p]=_[k]:delete _[p];for(u=0;u<a;u++)_[u+h]=arguments[u+2];return _.length=g-n+a,d}})},bc86:function(e,t,a){"use strict";a("9c88")},e8b5:function(e,t,a){var n=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},f4e9:function(e,t,a){"use strict";a("5ed8")}}]);
//# sourceMappingURL=chunk-27a58b33.8dfc688d.js.map