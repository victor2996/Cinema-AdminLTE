(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f8e4c04"],{"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),a=r("2d00"),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3b36":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-block"},t._l(t.allMovies,(function(t){return r("PosterList",{key:t.id,attrs:{movieData:t}})})),1)},o=[],a=(r("99af"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{staticClass:"info-block__image",attrs:{tag:"img",src:t.movieData.mainImage.imageUrl,to:{name:"PosterMovie",params:{way:"poster-movie",movieData:t.movieData}}}})],1)}),i=[],c={name:"PosterList",props:{movieData:{type:Object,default:function(){}}},data:function(){return{}}},s=c,u=r("2877"),f=Object(u["a"])(s,a,i,!1,null,"02fc4742",null),l=f.exports,v=r("2591"),d={name:"Poster",components:{PosterList:l},data:function(){return{moviesData:[]}},computed:{allMovies:function(){return this.moviesData.current.concat(this.moviesData.new)}},created:function(){var t=this,e=v["a"].database().ref("movies");e.on("value",(function(e){null!==e.val()&&(t.moviesData=e.val())}))}},m=d,p=Object(u["a"])(m,n,o,!1,null,"55c23a3a",null);e["default"]=p.exports},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),a=r("b622"),i=a("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),a=r("e8b5"),i=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),f=r("65f0"),l=r("1dde"),v=r("b622"),d=r("2d00"),m=v("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",h=d>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),y=l("concat"),w=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)},g=!h||!y;n({target:"Array",proto:!0,forced:g},{concat:function(t){var e,r,n,o,a,i=c(this),l=f(i,0),v=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?i:arguments[e],w(a)){if(o=s(a.length),v+o>p)throw TypeError(b);for(r=0;r<o;r++,v++)r in a&&u(l,v,a[r])}else{if(v>=p)throw TypeError(b);u(l,v++,a)}return l.length=v,l}})},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-0f8e4c04.8c211a05.js.map