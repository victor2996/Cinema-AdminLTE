(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d763d398"],{"1dde":function(t,e,a){var n=a("d039"),s=a("b622"),r=a("2d00"),i=s("species");t.exports=function(t){return r>=51||!n((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2c01":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-list"},[a("h3",[t._v("Список Новостей")]),t._m(0),t._l(t.newsData,(function(e,n){return a("NewsList",{key:e.id,attrs:{data:e,dataArr:t.newsData,dbRef:t.ref,dbMainImageRef:t.mainImageRef,dbGalleryRef:t.galleryRef},on:{remove:function(e){return t.deleteNews(n)}}})})),a("router-link",{staticClass:"btn btn-default news-list-add",attrs:{tag:"button",to:{name:"NewsAdd",params:{way:"news-add",dataArr:t.newsData,dbRef:t.ref,dbMainImageRef:t.mainImageRef,dbGalleryRef:t.galleryRef}}}},[a("span"),t._v(" Создать Новость ")])],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title title-main"},[a("div",{staticClass:"title__name"},[t._v("Название")]),a("div",{staticClass:"title__date"},[t._v("Дата создания")]),a("div",{staticClass:"title__status"},[t._v("Статус")])])}],r=(a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"title__name"},[t._v(t._s(t.dataSource.name))]),a("div",{staticClass:"title__date"},[t._v(t._s(t.dataSource.date))]),t.dataSource.status?a("div",{staticClass:"title__status"},[t._v("ВКЛ")]):a("div",{staticClass:"title__status"},[t._v("ВЫКЛ")]),a("router-link",{staticClass:"title__edit",attrs:{tag:"div",to:{name:"NewsAdd",params:{way:"news-add",dataOb:t.dataSource,dataArr:t.newsData,dbRef:t.ref,dbMainImageRef:t.mainImageRef,dbGalleryRef:t.galleryRef}}}},[a("div",{staticClass:"icon fas fa-pen"})]),a("div",{staticClass:"icon title__remove fas fa-trash",on:{click:function(e){return t.$emit("remove")}}})],1)}),i=[],l={name:"NewsList",props:["data","dataArr","dbRef","dbMainImageRef","dbGalleryRef"],data:function(){return{dataSource:this.data,newsData:this.dataArr,ref:this.dbRef,mainImageRef:this.dbMainImageRef,galleryRef:this.dbGalleryRef}}},d=l,f=(a("db92"),a("2877")),c=Object(f["a"])(d,r,i,!1,null,"561f3aa7",null),o=c.exports,u=a("2591"),v={name:"News",components:{NewsList:o},data:function(){return{newsData:[],ref:"news",mainImageRef:"news/main",galleryRef:"news/gallery"}},methods:{deleteNews:function(t){if(this.newsData.length>1){this.newsData.splice(t,1);var e=u["a"].database().ref(this.ref);e.set(this.newsData)}else alert("Должена оставаться минимум одна новость!")}},created:function(){var t=this,e=u["a"].database().ref(this.ref);e.on("value",(function(e){null!==e.val()&&(t.newsData=e.val())}))}},b=v,m=(a("8972"),Object(f["a"])(b,n,s,!1,null,"50fe93de",null));e["default"]=m.exports},"4c4b":function(t,e,a){},"65f0":function(t,e,a){var n=a("861d"),s=a("e8b5"),r=a("b622"),i=r("species");t.exports=function(t,e){var a;return s(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?n(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var n=a("c04e"),s=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var i=n(e);i in t?s.f(t,i,r(0,a)):t[i]=a}},8972:function(t,e,a){"use strict";a("9b4b")},"9b4b":function(t,e,a){},a434:function(t,e,a){"use strict";var n=a("23e7"),s=a("23cb"),r=a("a691"),i=a("50c4"),l=a("7b0b"),d=a("65f0"),f=a("8418"),c=a("1dde"),o=c("splice"),u=Math.max,v=Math.min,b=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!o},{splice:function(t,e){var a,n,c,o,_,w,h=l(this),p=i(h.length),g=s(t,p),R=arguments.length;if(0===R?a=n=0:1===R?(a=0,n=p-g):(a=R-2,n=v(u(r(e),0),p-g)),p+a-n>b)throw TypeError(m);for(c=d(h,n),o=0;o<n;o++)_=g+o,_ in h&&f(c,o,h[_]);if(c.length=n,a<n){for(o=g;o<p-n;o++)_=o+n,w=o+a,_ in h?h[w]=h[_]:delete h[w];for(o=p;o>p-n+a;o--)delete h[o-1]}else if(a>n)for(o=p-n;o>g;o--)_=o+n-1,w=o+a-1,_ in h?h[w]=h[_]:delete h[w];for(o=0;o<a;o++)h[o+g]=arguments[o+2];return h.length=p-n+a,c}})},db92:function(t,e,a){"use strict";a("4c4b")},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-d763d398.1fad7214.js.map