(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64f1cd02"],{1700:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-block"},[e("div",{staticClass:"create"},[e("div",{staticClass:"create__status"},[e("div",{staticClass:"custom-control custom-switch custom-switch-on-success"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainPageData.status,expression:"mainPageData.status"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitch3"},domProps:{checked:Array.isArray(t.mainPageData.status)?t._i(t.mainPageData.status,null)>-1:t.mainPageData.status},on:{change:function(a){var e=t.mainPageData.status,n=a.target,i=!!n.checked;if(Array.isArray(e)){var o=null,s=t._i(e,o);n.checked?s<0&&t.$set(t.mainPageData,"status",e.concat([o])):s>-1&&t.$set(t.mainPageData,"status",e.slice(0,s).concat(e.slice(s+1)))}else t.$set(t.mainPageData,"status",i)}}}),t.mainPageData.status?e("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch3"}},[t._v(" Показывать ")]):e("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch3"}},[t._v("Не показывать ")])])]),e("div",{staticClass:"create__phone d-flex"},[e("p",[t._v("Телефон")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainPageData.phone1,expression:"mainPageData.phone1"}],attrs:{type:"text",placeholder:"777 85 98"},domProps:{value:t.mainPageData.phone1},on:{input:function(a){a.target.composing||t.$set(t.mainPageData,"phone1",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainPageData.phone2,expression:"mainPageData.phone2"}],attrs:{type:"text",placeholder:"777 85 98"},domProps:{value:t.mainPageData.phone2},on:{input:function(a){a.target.composing||t.$set(t.mainPageData,"phone2",a.target.value)}}})]),e("div",{staticClass:"create__description d-flex"},[e("p",[t._v("SEO текст")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mainPageData.SEOBlock,expression:"mainPageData.SEOBlock"}],attrs:{type:"text",placeholder:"Текст"},domProps:{value:t.mainPageData.SEOBlock},on:{input:function(a){a.target.composing||t.$set(t.mainPageData,"SEOBlock",a.target.value)}}})]),e("div",{staticClass:"create__seo d-flex"},[e("p",[t._v("SEO блок:")]),e("div",{staticClass:"create__seo-info"},[e("div",{staticClass:"create__seo-info-block d-flex"},[e("p",[t._v("URL:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainPageData.SEO.url,expression:"mainPageData.SEO.url"}],attrs:{type:"text",placeholder:"URL"},domProps:{value:t.mainPageData.SEO.url},on:{input:function(a){a.target.composing||t.$set(t.mainPageData.SEO,"url",a.target.value)}}})]),e("div",{staticClass:"create__seo-info-block d-flex"},[e("p",[t._v("Title:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainPageData.SEO.title,expression:"mainPageData.SEO.title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.mainPageData.SEO.title},on:{input:function(a){a.target.composing||t.$set(t.mainPageData.SEO,"title",a.target.value)}}})]),e("div",{staticClass:"create__seo-info-block d-flex"},[e("p",[t._v("Keywords:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainPageData.SEO.keyword,expression:"mainPageData.SEO.keyword"}],attrs:{type:"text",placeholder:"word"},domProps:{value:t.mainPageData.SEO.keyword},on:{input:function(a){a.target.composing||t.$set(t.mainPageData.SEO,"keyword",a.target.value)}}})]),e("div",{staticClass:"create__seo-info-block d-flex"},[e("p",[t._v("Description:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainPageData.SEO.description,expression:"mainPageData.SEO.description"}],attrs:{type:"text",placeholder:"Description"},domProps:{value:t.mainPageData.SEO.description},on:{input:function(a){a.target.composing||t.$set(t.mainPageData.SEO,"description",a.target.value)}}})])])])]),e("button",{ref:"btnSave",staticClass:"btn btn-default btn-save",on:{click:t.onUpload}},[t._v(" Сохранить ")])])},i=[],o=(e("d3b7"),e("25f0"),e("99af"),e("b64b"),e("2591")),s={name:"PagesAddMain",props:["dataOb","dbRef"],data:function(){return{ref:this.dbRef,mainPageData:{id:"",phone1:"",phone2:"",date:"",status:!1,SEOBlock:"",SEO:{url:"",title:"",keyword:"",description:""}}}},methods:{onUpload:function(){this.$refs.btnSave.classList.add("show"),this.$refs.btnSave.textContent="Сохраняется";var t,a,e=new Date;1===e.getDate().toString().length&&(t="0"+e.getDate()),1===e.getMonth().toString().length&&(a="0"+e.getMonth());var n=e.getFullYear(),i="".concat(t,".").concat(a,".").concat(n);this.mainPageData.date=i,this.mainPageData.id=Math.floor(1e4*Math.random());var s=o["a"].database().ref(this.ref);s.set(this.mainPageData).then(this.$refs.btnSave.textContent="Сохранено").then(this.$refs.btnSave.classList.remove("show")).then(this.$router.push("/admin/pages"))}},created:function(){void 0!==this.dataOb&&0!==Object.keys(this.dataOb).length&&(this.mainPageData=this.dataOb)}},r=s,c=(e("e277"),e("2877")),l=Object(c["a"])(r,n,i,!1,null,"459d7ce7",null);a["default"]=l.exports},"1dde":function(t,a,e){var n=e("d039"),i=e("b622"),o=e("2d00"),s=i("species");t.exports=function(t){return o>=51||!n((function(){var a=[],e=a.constructor={};return e[s]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},"25f0":function(t,a,e){"use strict";var n=e("6eeb"),i=e("825a"),o=e("d039"),s=e("ad6d"),r="toString",c=RegExp.prototype,l=c[r],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=r;(u||d)&&n(RegExp.prototype,r,(function(){var t=i(this),a=String(t.source),e=t.flags,n=String(void 0===e&&t instanceof RegExp&&!("flags"in c)?s.call(t):e);return"/"+a+"/"+n}),{unsafe:!0})},"65f0":function(t,a,e){var n=e("861d"),i=e("e8b5"),o=e("b622"),s=o("species");t.exports=function(t,a){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?n(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},6644:function(t,a,e){},8418:function(t,a,e){"use strict";var n=e("c04e"),i=e("9bf2"),o=e("5c6c");t.exports=function(t,a,e){var s=n(a);s in t?i.f(t,s,o(0,e)):t[s]=e}},"99af":function(t,a,e){"use strict";var n=e("23e7"),i=e("d039"),o=e("e8b5"),s=e("861d"),r=e("7b0b"),c=e("50c4"),l=e("8418"),u=e("65f0"),d=e("1dde"),p=e("b622"),m=e("2d00"),v=p("isConcatSpreadable"),g=9007199254740991,f="Maximum allowed index exceeded",h=m>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=d("concat"),P=function(t){if(!s(t))return!1;var a=t[v];return void 0!==a?!!a:o(t)},D=!h||!b;n({target:"Array",proto:!0,forced:D},{concat:function(t){var a,e,n,i,o,s=r(this),d=u(s,0),p=0;for(a=-1,n=arguments.length;a<n;a++)if(o=-1===a?s:arguments[a],P(o)){if(i=c(o.length),p+i>g)throw TypeError(f);for(e=0;e<i;e++,p++)e in o&&l(d,p,o[e])}else{if(p>=g)throw TypeError(f);l(d,p++,o)}return d.length=p,d}})},ad6d:function(t,a,e){"use strict";var n=e("825a");t.exports=function(){var t=n(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},b64b:function(t,a,e){var n=e("23e7"),i=e("7b0b"),o=e("df75"),s=e("d039"),r=s((function(){o(1)}));n({target:"Object",stat:!0,forced:r},{keys:function(t){return o(i(t))}})},e277:function(t,a,e){"use strict";e("6644")},e8b5:function(t,a,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-64f1cd02.827ac196.js.map