(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bf2360e"],{"001e":function(e,t,s){e.exports=s.p+"img/phone.f341cb66.svg"},"06a1":function(e,t,s){e.exports=s.p+"img/html-5.24845c5c.svg"},"0747":function(e,t,s){e.exports=s.p+"img/css-3.d3ad67fa.svg"},"07c0":function(e,t,s){e.exports=s.p+"img/reliMobile.b9fa9716.jpeg"},"0a0e":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"background",staticClass:"right-side"},["homepage"===e.mode?[s("Homepage"),e._l(e.caseStudies,(function(e,t){return s("CaseStudy",{key:t,attrs:{heading:e.heading,subHeading:e.subHeading,content:e.content,desktopImg:e.desktopImg,websiteUrl:e.iframeSrc,ctaButtonText:e.ctaButtonText,stack:e.stack}})}))]:e._e(),"about"===e.mode?[s("AboutMe")]:e._e(),"quote"===e.mode?[s("GetQuote")]:e._e()],2)},n=[],i=(s("a9e3"),s("d3b7"),s("379d")),a=void 0,o={name:"RightSide",components:{Homepage:function(){return s.e("chunk-699fa143").then(s.bind(null,"a1e1"))},AboutMe:function(){return s.e("chunk-2109df0b").then(s.bind(null,"4181"))},CaseStudy:function(){return s.e("chunk-2a9020b1").then(s.bind(null,"910b"))},GetQuote:function(){return s.e("chunk-11a8d8e6").then(s.bind(null,"e6fd"))}},props:{currentPage:Number,mode:String},methods:{nextPage:function(){if(this.showCaseStudies){if(!(this.currentCaseStudy<this.caseStudies.length-1))return;this.currentCaseStudy++}},prevPage:function(){this.showCaseStudies&&this.currentCaseStudy--}},computed:{activeCaseStudy:function(){return a.caseStudies[a.currentCaseStudy]}},data:function(){return{currentlyScrolling:!1,lastKnownScrollPosition:0,showCaseStudies:!1,currentCaseStudy:0,caseStudies:i["a"].caseStudies}}},c=o,u=s("2877"),l=Object(u["a"])(c,r,n,!1,null,null,null);t["a"]=l.exports},1429:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"leftSide",class:"left-side "+e.classNames,style:e.leftSideStyle},["carousel"===e.mode?s("Carousel",{attrs:{carouselIndex:e.currentPage-1}}):e._e(),"particles"===e.mode?s("Particles"):e._e()],1)},n=[],i=(s("a9e3"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"carousel",staticClass:"carousel"},[s("figure",{ref:"figure",style:e.figureStyle,attrs:{index:1}},e._l(e.carouselItems,(function(t,r){return s("CarouselItem",{key:r,attrs:{itemIndex:r,refProp:"carousel-item-"+r,imageSrc:t.imageSrc,currentIndex:e.currentIndex,previousIndex:e.previousIndex,iFrameSrc:t.iframeSrc,iFrameOK:t.iframeOK}})})),1)])}),a=[],o=(s("b03f"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"img-container-ref-"+e.itemIndex,class:"img-container "+e.carouselClasses,style:e.additionalStyle,on:{hover:function(t){return e.handleHover(e.ref)}}},[r("img",{attrs:{src:s("1771")("./"+e.imageSrc)}}),e.isCurrentIFrame?[e.iFrameLoading?r("LoadingSpinner",{attrs:{shade:"light"}}):e._e(),e.iFrameOK?r("iframe",{ref:"iframe-ref-"+e.itemIndex,attrs:{src:e.loadedIFrameSrc}}):e._e(),r("div",{staticClass:"scrim"}),r("span",{staticClass:"visitSiteButton",on:{click:function(t){return e.setActiveIFrame()}}},[e._v("Activate Site")])]:e._e()],2)}),c=[],u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loading-spinner"},[s("svg",{staticClass:"loading-spinner-svg",staticStyle:{margin:"auto",display:"block"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"50px",height:"50px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[s("circle",{attrs:{cx:"50",cy:"50",fill:"none",stroke:e.lightOrDark,"stroke-width":"10",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}})],1)])])},l=[],d={name:"LoadingSpinner",props:["shade"],computed:{lightOrDark:function(){return"light"===this.shade?"#ddd":"#666"}}},f=d,g=(s("f088"),s("2877")),p=Object(g["a"])(f,u,l,!1,null,null,null),m=p.exports,h={name:"CarouselItem",props:["imageSrc","iFrameSrc","iFrameOK","previousIndex","currentIndex","itemIndex"],mounted:function(){0===this.itemIndex&&(this.carouselClasses="selected",this.isCurrentIFrame=!0)},data:function(){return{carouselClasses:"not-selected",iFrameLoading:!1,loadedIFrameSrc:"",isCurrentIFrame:!1}},components:{LoadingSpinner:m},computed:{additionalStyle:function(){var e=void 0!==window.safari;return e&&0===this.itemIndex?"transform: translateZ(var(--apothem))":""}},watch:{currentIndex:function(){this.itemIndex===this.currentIndex||0===this.itemIndex&&1!==this.previousIndex?(this.carouselClasses="selected",this.iFrameOK&&(this.isCurrentIFrame=!0)):(this.isCurrentIFrame=!1,this.carouselClasses="not-selected")}},methods:{setActiveIFrame:function(){var e=this;this.loadedIFrameSrc=this.iFrameSrc,this.carouselClasses="selected active",this.iFrameLoading=!0;var t="iframe-ref-".concat(this.itemIndex),s="img-container-ref-".concat(this.itemIndex);this.$refs[s].style.zIndex=3,this.$refs[t].addEventListener("load",(function(){e.iFrameLoading=!1}))}}},v=h,x=Object(g["a"])(v,o,c,!1,null,null,null),b=x.exports,S=s("379d"),k={name:"Carousel",props:{carouselIndex:Number},components:{CarouselItem:b},mounted:function(){this.isSafari&&(this.$refs.figure.style.transformOrigin="50% 50%",this.$refs.carousel.style.transform="scale3d(0.8, 0.8, 0.8)"),window.innerWidth<750&&(this.$refs.figure.style.transformOrigin="50% 50%",this.$refs.carousel.style.transform="scale3d(0.97, 0.97, 0.97)")},computed:{figureStyle:function(){return this.isSafari?"transform-origin: 50% 50% 50%;":window.innerWidth<750?"transform-origin: 0% 0% 0%;":""},isSafari:function(){return void 0!==window.safari}},watch:{carouselIndex:function(e,t){e!==this.carouselSides&&(e<=-1||(this.goToIndex(e),this.currentIndex=e,this.previousIndex=t))}},data:function(){return{carouselSides:5,currentIndex:0,previousIndex:null,desiredIndex:1,rotationDegree:0,carouselItems:S["a"].caseStudies}},methods:{incrementIndex:function(){var e=6.283185307179586/this.carouselSides;this.$refs.figure.style.transform="rotateY(".concat(this.rotationDegree+e,"rad)"),this.rotationDegree+=e,this.currentIndex++},decrementIndex:function(){var e=6.283185307179586/this.carouselSides;this.$refs.figure.style.transform="rotateY(".concat(this.rotationDegree-e,"rad)"),this.rotationDegree-=e,this.currentIndex--},goToIndex:function(e){var t=6.283185307179586/this.carouselSides;this.$refs.figure.style.transform="rotateY(".concat(e*t,"rad)"),this.currentIndex=e,this.rotationDegree+=e*t}}},I=k,w=(s("a63b"),Object(g["a"])(I,i,a,!1,null,null,null)),y=w.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vue-particles",{staticClass:"vue-particles",attrs:{color:"#88f",particleOpacity:.7,particlesNumber:120,shapeType:"circle",particleSize:1,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:4,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})},A=[],j={name:"Particles"},M=j,F=(s("37af"),Object(g["a"])(M,C,A,!1,null,null,null)),E=F.exports,O={name:"LeftSide",props:{image:Object,currentPage:Number,mode:String},data:function(){return{classNames:"",leftSideStyle:""}},components:{Carousel:y,Particles:E}},_=O,L=(s("5f2b"),Object(g["a"])(_,r,n,!1,null,null,null));t["a"]=L.exports},1771:function(e,t,s){var r={"./Mouse.svg":"fdec","./brightLoader.svg":"e80b","./cVisionMobile.jpeg":"5d42","./cricketvision-desktop.jpeg":"5af9","./ctarrow.svg":"b717","./cult-mia-desktop.jpeg":"3650","./cultMiaMobile.jpeg":"c4fa","./email.svg":"9055","./frameworks/aws.svg":"e47b","./frameworks/bootstrap.svg":"9452","./frameworks/css-3.svg":"7654","./frameworks/html-5.svg":"06a1","./frameworks/laravel.svg":"5079","./frameworks/mysql.svg":"b7d9","./frameworks/nodejs-icon.svg":"2de4","./frameworks/react.svg":"4896","./frameworks/sass.svg":"2118","./frameworks/shopify.svg":"df60","./frameworks/squarespace.svg":"a400","./frameworks/strapi.webp":"17b9","./frameworks/vue.svg":"77be","./frameworks/woocommerce.svg":"8625","./frameworks/wordpress-icon.svg":"939c","./iPhone-Back.svg":"7294","./iPhone-Front.svg":"4b16","./languages/css-3.svg":"0747","./languages/html-5.svg":"5721","./languages/javascript.svg":"e5ed","./languages/php.svg":"d82d","./languages/sql.svg":"201e","./logo.png":"cf05","./phone.svg":"001e","./reli-desktop.jpeg":"634d","./reliMobile.jpeg":"07c0","./scroll.svg":"d4cd","./uHealthMobile.jpeg":"c790","./unique-health-desktop.jpeg":"badc","./vSafeMobile.jpeg":"3e04","./volunteersafe-desktop.jpeg":"e886"};function n(e){var t=i(e);return s(t)}function i(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id="1771"},"17b9":function(e,t){e.exports="data:image/webp;base64,UklGRlICAABXRUJQVlA4IEYCAADQFgCdASrIAMgAPlEokkYjoqGhJJlYEHAKCWdu4XExEJ7vygUAB2gNtn5gPsz9nLUQPQA/W7rXP2oI2gMTeydk7J2TsnZOydk7J2TsnZOydk7J2TsnTIA9MnmDPYArhrI+OK6FgRnVgTlxi+ZLWv8o+R9hMc6CIy4Jj/4HUHhZBywEgIyIImTSHoIqLnvMxju4EnGRlwRkfw10hiIt+8HDTIy4IIuwXE9myYEgJASA06wJASAkBICQEgJASAj8AAD+/cM3//7sn/Zr+zX+8WS8AAAAEP6ilDEFfsxFbc8K800/ff7t0L3pfKvnJeMZH8C9nHbXmgdPMq9qoK53SYEqs9ZINzbb032//SS5i80bxCUKEHv5p8PBAXGdHwAfYACU65r/c9D0elS435+zRH//9UzuNdPv+Hwj5ofK/hwMxZaP9htmzX+OpR3J3nEVHdWimfPa63ThePuZ9NqJkwVlMrrKlA90x6N8Xi2Ly6TrHxYjzJSRTekO2ijTVqQgAcNjXdxGAAnmurXpkh/E/E/n0KBtJe3qpXeDkuyl6iFnI1JyO34zDNhCidY+Llk4KEXG1FVQBaJmtjqX2/6tLTnCV9NYhviL5v7ZLFS2/v3atNwsoruiHXdfpZjGQAb9t8WPiyRD1cUuh9jnoKveJUXsffv3398u3BgSVKdxqsGMhnjXSBlO6F10+8XFKoEMkXV1npHRXtLrQq2ZL+M6FQOHcqfvo7yrgwJJxXSllnxSKaZpFbetf5nCgIRC3ErMZLeUIAAAAAA="},"201e":function(e,t,s){e.exports=s.p+"img/sql.d25f51d0.svg"},2118:function(e,t,s){e.exports=s.p+"img/sass.470548b4.svg"},"2de4":function(e,t,s){e.exports=s.p+"img/nodejs-icon.94cafb0d.svg"},3650:function(e,t,s){e.exports=s.p+"img/cult-mia-desktop.36f16baf.jpeg"},"37af":function(e,t,s){"use strict";var r=s("8032"),n=s.n(r);n.a},"3e04":function(e,t,s){e.exports=s.p+"img/vSafeMobile.f46c8839.jpeg"},4896:function(e,t,s){e.exports=s.p+"img/react.9a28da9f.svg"},"4b16":function(e,t,s){e.exports=s.p+"img/iPhone-Front.4565dda5.svg"},"4bf1":function(e,t,s){},"4d74":function(e,t,s){},5079:function(e,t,s){e.exports=s.p+"img/laravel.1c880e21.svg"},5721:function(e,t,s){e.exports=s.p+"img/html-5.24845c5c.svg"},"5af9":function(e,t,s){e.exports=s.p+"img/cricketvision-desktop.80519ab4.jpeg"},"5d42":function(e,t,s){e.exports=s.p+"img/cVisionMobile.2c04ba1e.jpeg"},"5f2b":function(e,t,s){"use strict";var r=s("b510"),n=s.n(r);n.a},"634d":function(e,t,s){e.exports=s.p+"img/reli-desktop.f118434c.jpeg"},7294:function(e,t,s){e.exports=s.p+"img/iPhone-Back.f426672f.svg"},7654:function(e,t,s){e.exports=s.p+"img/css-3.d3ad67fa.svg"},"77be":function(e,t,s){e.exports=s.p+"img/vue.22efb7c2.svg"},8032:function(e,t,s){},8625:function(e,t,s){e.exports=s.p+"img/woocommerce.2a0e4536.svg"},9055:function(e,t,s){e.exports=s.p+"img/email.006545e9.svg"},"939c":function(e,t,s){e.exports=s.p+"img/wordpress-icon.b08e20e3.svg"},9452:function(e,t,s){e.exports=s.p+"img/bootstrap.71e42b5a.svg"},"9ec8":function(e,t,s){},a400:function(e,t,s){e.exports=s.p+"img/squarespace.827cb3d6.svg"},a63b:function(e,t,s){"use strict";var r=s("4bf1"),n=s.n(r);n.a},b03f:function(e,t,s){},b510:function(e,t,s){},b717:function(e,t,s){e.exports=s.p+"img/ctarrow.d4c0cb43.svg"},b7d9:function(e,t,s){e.exports=s.p+"img/mysql.dd2a5a35.svg"},badc:function(e,t,s){e.exports=s.p+"img/unique-health-desktop.b099f2ba.jpeg"},c4fa:function(e,t,s){e.exports=s.p+"img/cultMiaMobile.e4959bd6.jpeg"},c790:function(e,t,s){e.exports=s.p+"img/uHealthMobile.09397fc9.jpeg"},cf05:function(e,t,s){e.exports=s.p+"img/logo.5e05c44a.png"},d02f:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{class:e.navClassList},[s("ul",{staticClass:"nav-list"},[s("li",[s("router-link",{attrs:{to:"/",exact:""}},[e._v("Home")])],1),s("li",[s("router-link",{attrs:{to:"/about"}},[e._v("About Me")])],1),s("li",[s("router-link",{attrs:{to:"/get-quote"}},[e._v("Get a quote")])],1)])])},n=[],i={name:"Nav",data:function(){return{navClassList:""}},methods:{handleNavClick:function(e){this.$router.currentRoute.path!==e?this.$router.push(e):document.body.scrollTop=0},isActive:function(e){if(this.$router.currentRoute.path!==e)return"actiev"}}},a=i,o=(s("d463"),s("2877")),c=Object(o["a"])(a,r,n,!1,null,null,null);t["a"]=c.exports},d463:function(e,t,s){"use strict";var r=s("9ec8"),n=s.n(r);n.a},d4cd:function(e,t,s){e.exports=s.p+"img/scroll.a98ead64.svg"},d82d:function(e,t,s){e.exports=s.p+"img/php.fa78b345.svg"},df60:function(e,t,s){e.exports=s.p+"img/shopify.d226571e.svg"},e47b:function(e,t,s){e.exports=s.p+"img/aws.5594e8bc.svg"},e5ed:function(e,t,s){e.exports=s.p+"img/javascript.87711407.svg"},e80b:function(e,t,s){e.exports=s.p+"img/brightLoader.86e88124.svg"},e886:function(e,t,s){e.exports=s.p+"img/volunteersafe-desktop.dff36d55.jpeg"},f088:function(e,t,s){"use strict";var r=s("4d74"),n=s.n(r);n.a},fdec:function(e,t,s){e.exports=s.p+"img/Mouse.d41d8cd9.svg"}}]);
//# sourceMappingURL=chunk-3bf2360e.40b51465.js.map