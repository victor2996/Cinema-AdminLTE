(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdd7e070"],{"0cbd":function(t,e,a){"use strict";a("8099")},1935:function(t,e,a){},"1dde":function(t,e,a){var r=a("d039"),s=a("b622"),n=a("2d00"),i=s("species");t.exports=function(t){return n>=51||!r((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"31b2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shares-list"},[a("h3",[t._v("Список Акций")]),t._m(0),t._l(t.sharesData,(function(e,r){return a("SharesList",{key:e.id,attrs:{data:e,dataArr:t.sharesData,dbRef:t.ref,dbMainImageRef:t.mainImageRef,dbGalleryRef:t.galleryRef},on:{remove:function(e){return t.deleteShares(r)}}})})),a("router-link",{staticClass:"btn btn-default shares-list-add",attrs:{tag:"button",to:{name:"SharesAdd",params:{way:"shares-add",dataArr:t.sharesData,dbRef:t.ref,dbMainImageRef:t.mainImageRef,dbGalleryRef:t.galleryRef}}}},[a("span"),t._v(" Создать Акцию ")])],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title title-main"},[a("div",{staticClass:"title__name"},[t._v("Название")]),a("div",{staticClass:"title__date"},[t._v("Дата создания")]),a("div",{staticClass:"title__status"},[t._v("Статус")])])}],n=(a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"title__name"},[t._v(t._s(t.dataSource.name))]),a("div",{staticClass:"title__date"},[t._v(t._s(t.dataSource.date))]),t.dataSource.status?a("div",{staticClass:"title__status"},[t._v("ВКЛ")]):a("div",{staticClass:"title__status"},[t._v("ВЫКЛ")]),a("router-link",{staticClass:"title__edit",attrs:{tag:"div",to:{name:"SharesAdd",params:{way:"shares-add",dataOb:t.dataSource,dataArr:t.newsData,dbRef:t.ref,dbMainImageRef:t.mainImageRef,dbGalleryRef:t.galleryRef}}}},[a("div",{staticClass:"icon fas fa-pen"})]),a("div",{staticClass:"icon title__remove fas fa-trash",on:{click:function(e){return t.$emit("remove")}}})],1)}),i=[],l={name:"SharesList",props:["data","dataArr","dbRef","dbMainImageRef","dbGalleryRef"],data:function(){return{dataSource:this.data,newsData:this.dataArr,ref:this.dbRef,mainImageRef:this.dbMainImageRef,galleryRef:this.dbGalleryRef}}},d=l,f=(a("0cbd"),a("2877")),c=Object(f["a"])(d,n,i,!1,null,"1291e52c",null),o=c.exports,u=a("2591"),h={name:"Shares",components:{SharesList:o},data:function(){return{sharesData:[],ref:"shares",mainImageRef:"shares/main",galleryRef:"shares/gallery"}},methods:{deleteShares:function(t){if(this.sharesData.length>1){this.sharesData.splice(t,1);var e=u["a"].database().ref(this.ref);e.set(this.sharesData)}else alert("Должена оставаться минимум одна акция!")}},created:function(){var t=this,e=u["a"].database().ref(this.ref);e.on("value",(function(e){null!==e.val()&&(t.sharesData=e.val())}))}},v=h,m=(a("df4d"),Object(f["a"])(v,r,s,!1,null,"0bf79cc6",null));e["default"]=m.exports},"65f0":function(t,e,a){var r=a("861d"),s=a("e8b5"),n=a("b622"),i=n("species");t.exports=function(t,e){var a;return s(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?r(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8099:function(t,e,a){},8418:function(t,e,a){"use strict";var r=a("c04e"),s=a("9bf2"),n=a("5c6c");t.exports=function(t,e,a){var i=r(e);i in t?s.f(t,i,n(0,a)):t[i]=a}},a434:function(t,e,a){"use strict";var r=a("23e7"),s=a("23cb"),n=a("a691"),i=a("50c4"),l=a("7b0b"),d=a("65f0"),f=a("8418"),c=a("1dde"),o=c("splice"),u=Math.max,h=Math.min,v=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!o},{splice:function(t,e){var a,r,c,o,b,_,p=l(this),g=i(p.length),R=s(t,g),y=arguments.length;if(0===y?a=r=0:1===y?(a=0,r=g-R):(a=y-2,r=h(u(n(e),0),g-R)),g+a-r>v)throw TypeError(m);for(c=d(p,r),o=0;o<r;o++)b=R+o,b in p&&f(c,o,p[b]);if(c.length=r,a<r){for(o=R;o<g-r;o++)b=o+r,_=o+a,b in p?p[_]=p[b]:delete p[_];for(o=g;o>g-r+a;o--)delete p[o-1]}else if(a>r)for(o=g-r;o>R;o--)b=o+r-1,_=o+a-1,b in p?p[_]=p[b]:delete p[_];for(o=0;o<a;o++)p[o+R]=arguments[o+2];return p.length=g-r+a,c}})},df4d:function(t,e,a){"use strict";a("1935")},e8b5:function(t,e,a){var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-fdd7e070.20e88155.js.map