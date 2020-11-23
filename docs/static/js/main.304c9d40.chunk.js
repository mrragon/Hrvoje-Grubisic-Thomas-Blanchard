(this["webpackJsonpcargo-logistics-react"]=this["webpackJsonpcargo-logistics-react"]||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(14),o=n.n(i),s=(n(23),n(1)),c=n(2),l=n(5),u=n(3),d=n(4),f=n(13),m=n.n(f),h=n(6),p=n(16);var v=function(){return a.a.createElement("svg",{style:{display:"none"}},a.a.createElement("defs",null,a.a.createElement("symbol",{id:"arrow-left",viewBox:"0 0 241 241"},a.a.createElement("desc",null,"Arrow pointing to the left"),a.a.createElement("path",{d:"M58 129l108 108c5 5 12 5 17 0 5-4 5-12 0-17L83 120l100-99a12 12 0 10-17-17L58 112c-5 5-5 12 0 17z"})),a.a.createElement("symbol",{id:"arrow-right",viewBox:"0 0 241 241"},a.a.createElement("desc",null,"Arrow pointing to the right"),a.a.createElement("path",{d:"M183 112L75 4c-5-5-13-5-17 0-5 4-5 12 0 17l99 99-99 100a12 12 0 1017 17l108-108c5-5 5-13 0-17z"})),a.a.createElement("symbol",{id:"arrow-down",viewBox:"0 0 241 241"},a.a.createElement("desc",null,"Arrow pointing down"),a.a.createElement("path",{d:"M220 58l-100 99-99-99A12 12 0 104 75l108 108c5 5 12 5 17 0L237 75c5-5 5-13 0-17-4-5-12-5-17 0z"}))))},g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).ref=Object(r.createRef)(),a.onClick=a.onClick.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"onClick",value:function(){this.props.onToggle()}},{key:"render",value:function(){return a.a.createElement("button",{className:"burger-button ".concat(this.props.active?"active":""),onClick:this.onClick,tabIndex:this.props.focusable?0:-1,ref:this.ref},a.a.createElement("div",{className:"slices-container"},a.a.createElement("div",{className:"slice top"}),a.a.createElement("div",{className:"slice middle"}),a.a.createElement("div",{className:"slice bottom"})))}}]),n}(r.Component),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).logoRef=Object(r.createRef)(),a.menuTriggerRef=Object(r.createRef)(),a.buttonRef=Object(r.createRef)(),a}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("header",{className:"header"},a.a.createElement("div",{className:"header-column"},a.a.createElement("button",{href:"#",className:"logo",ref:this.logoRef},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"logo-svg"},a.a.createElement("path",{d:"M12 2a10 10 0 110 20 10 10 0 010-20zm0-2a12 12 0 100 24 12 12 0 000-24zm5.5 14a8.4 8.4 0 01-5.5 1.9c-2.3 0-4-.8-5.5-2l-.5.5c1.1 1.8 3.2 3.6 6 3.6s4.9-1.8 6-3.6l-.5-.5zm-9-6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}))),a.a.createElement(g,{ref:this.menuTriggerRef,onToggle:this.props.onToggleMenu,active:this.props.menuOpen,focusable:!0})),a.a.createElement("div",{className:"header-column"},a.a.createElement("button",{className:"button right",ref:this.buttonRef},"Button")))}}]),n}(r.Component),R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).ref=Object(r.createRef)(),a.labelRef=Object(r.createRef)(),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.TL=h.a.timeline({paused:!0,delay:this.props.delay}),this.TL.to(this.ref.current,{clipPath:"inset(0 0% 0 0)",ease:"power4.out",duration:1}),this.TL.to(this.labelRef.current,{y:"0%",ease:"power2.out",duration:1},"-=.75")}},{key:"animateIn",value:function(){this.TL.timeScale(1).restart(!0)}},{key:"animateOut",value:function(){this.TL.timeScale(2).reverse()}},{key:"render",value:function(){return a.a.createElement("li",{className:"menu-entry",ref:this.ref},a.a.createElement("button",{className:"menu-entry-link",tabIndex:this.props.focusable?0:-1,onClick:this.props.onClick},a.a.createElement("img",{className:"menu-entry-picture",src:this.props.src,alt:this.props.alt}),a.a.createElement("div",{className:"menu-entry-label-container"},a.a.createElement("div",{className:"menu-entry-label",ref:this.labelRef},this.props.label))))}}]),n}(r.Component),y=n(17),x=n.n(y),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).ref=Object(r.createRef)(),a.entriesRefs=a.props.slides.map((function(){return Object(r.createRef)()})),a.entriesReverseAnimationsCompletedCount=0,a}return Object(c.a)(n,[{key:"open",value:function(){this.entriesRefs.forEach((function(e){e.current.animateIn()}))}},{key:"close",value:function(){this.setState({open:!1}),this.entriesRefs.forEach((function(e){e.current.animateOut()}))}},{key:"render",value:function(){var e=this;return a.a.createElement(r.Fragment,null,a.a.createElement(x.a,{active:this.props.active,focusTrapOptions:{escapeDeactivates:!1,clickOutsideDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!0}},a.a.createElement("nav",{className:"menu ".concat(this.props.active?"active":""),ref:this.ref},a.a.createElement(g,{onToggle:this.props.onToggle,active:this.props.active,focusable:this.props.active}),a.a.createElement("ul",{className:"menu-entries-list"},this.props.slides.map((function(t,n){return a.a.createElement(R,{label:t.caption,src:t.poster,alt:"",key:n,ref:e.entriesRefs[n],focusable:e.props.active,delay:.1*n+.1,onClick:function(){e.props.onToggle(n)}})}))))),a.a.createElement("div",{className:"menu-overlay",onClick:this.props.onToggle}))}}]),n}(r.Component),w=Object(r.forwardRef)((function(e,t){return a.a.createElement("div",{className:"column",ref:t},e.children)})),E=n(18),k=n.n(E),T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).ref=Object(r.createRef)(),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){k()({target:this.ref.current})}},{key:"render",value:function(){return a.a.createElement("p",{className:"slideshow-caption",ref:this.ref},this.props.caption)}}]),n}(r.Component),C=n(33),j=n(37),S=n(34),A=n(35),N=n(36),P=2.25,I=3,L=function(){function e(t){Object(s.a)(this,e),this.transitionProgress=0,this.currentSlideIndex=0,this.nextSlideIndex=0,this.render=this.render.bind(this),this.initRenderer(t.canvas),this.initGl(),this.initTransparentTexture(),this.initProgram(),this.initGeometry(),this.initMesh(),this.initTextures(t.slidesCount),requestAnimationFrame(this.render)}return Object(c.a)(e,[{key:"initRenderer",value:function(e){this.renderer=new C.a({canvas:e,alpha:!0})}},{key:"initGl",value:function(){this.gl=this.renderer.gl,this.gl.clearColor(.0666,.098,.1686,1)}},{key:"initGeometry",value:function(){this.geometry=new j.a(this.gl)}},{key:"initTransparentTexture",value:function(){var e=this;this.transparentPixelTexture=new S.a(this.gl);var t=new Image;t.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=",t.onload=function(){return e.transparentPixelTexture.image=t}}},{key:"initTextures",value:function(e){this.textures=[];for(var t=0;t<e;t++)this.textures.push(new S.a(this.gl,{generateMipmaps:!1,width:1920,height:1080}))}},{key:"initProgram",value:function(){this.program=new A.a(this.gl,{vertex:"attribute vec2 uv;\r\nattribute vec2 position;\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n    vUv = uv;\r\n    gl_Position = vec4(position, 0, 1);\r\n}",fragment:"precision mediump float;\r\nvarying vec2 vUv;\r\nuniform sampler2D uTexture1;\r\nuniform sampler2D uTexture2;\r\nuniform float uOffsetAmount;\r\nuniform float uColumnsCount;\r\nuniform float uTransitionProgress;\r\nuniform float uAngle;\r\nuniform float uScale;\r\nuniform vec2 uInputResolution;\r\nuniform vec2 uOutputResolution;\r\n\r\n// Rewritten version of this snippet ->\r\n// https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44\r\nvec2 backgroundCover(vec2 coords) {\r\n    // Aliases for readability\r\n    vec2 inRes = uInputResolution;\r\n    vec2 outRes = uOutputResolution;\r\n\r\n    vec2 new = vec2(inRes.x * outRes.y / inRes.y, outRes.y);\r\n    vec2 offset = vec2((new.x - outRes.x) / 2.0, 0.0);\r\n    \r\n    float outputAspect = outRes.x / outRes.y;\r\n    float inputAspect = inRes.x / inRes.y;\r\n    if (outputAspect >= inputAspect) {\r\n        new = vec2(outRes.x, inRes.y * outRes.x / inRes.x);\r\n        offset = vec2(0.0, (new.y - outRes.y) / 2.0);\r\n    }\r\n    \r\n    offset = offset / new;\r\n\r\n    return coords * outRes / new + offset;\r\n}\r\n\r\nvec2 rotate2D(vec2 p, float theta) {\r\n    return p * mat2(cos(theta), -sin(theta), sin(theta), cos(theta));\r\n}\r\n\r\nvoid main() {\r\n    vec2 uv = backgroundCover(vUv);\r\n    gl_FragColor = texture2D(uTexture1, uv);\r\n\r\n    // Compute the index of the current column, based on the X position and the total number of columns\r\n    // Make sure to use vUv and not the uv, otherwise the end stripes might be cropped\r\n    float currentColumnIndex = floor(vUv.x * uColumnsCount) / uColumnsCount;\r\n\r\n    float progress = 1. - uTransitionProgress;\r\n    \r\n    // Compute the columns vertical offset based on X position \r\n    float columnYOff = currentColumnIndex * uOffsetAmount;\r\n    \r\n    // Use the transition progress to modulate the amount of offset applied\r\n    float yOff = progress + columnYOff * progress;\r\n    \r\n    vec2 coords = vec2(uv.x, uv.y + yOff);\r\n\r\n    if (coords.y < 1.) {\r\n        // Compute rotation angle based on transition progression\r\n        float angle = uAngle * (1. - uTransitionProgress);\r\n        float scale = (uScale - 1.) * (1. - uTransitionProgress) + 1.;\r\n    \r\n        // Move origin\r\n        coords -= vec2(0.5);\r\n\r\n        // Apply scale\r\n        coords = coords / scale;\r\n\r\n        // Apply rotation\r\n        // Credits -> https://www.shadertoy.com/view/3dXBR7\r\n\t    coords.x *= uInputResolution.x / uInputResolution.y;\r\n\t    coords = rotate2D(coords, angle);\r\n\t    coords.x *= 1.0 / (uInputResolution.x / uInputResolution.y);\r\n\t\r\n        // Reset origin\r\n        coords += vec2(0.5);\r\n\r\n        gl_FragColor = texture2D(uTexture2, coords);\r\n    }\r\n}",uniforms:{uTexture1:{value:this.transparentPixelTexture},uTexture2:{value:this.transparentPixelTexture},uOffsetAmount:{value:P},uColumnsCount:{value:I},uTransitionProgress:{value:this.transitionProgress},uInputResolution:{value:[16,9]},uOutputResolution:{value:[0,0]},uAngle:{value:45*Math.PI/180},uScale:{value:3}}})}},{key:"initMesh",value:function(){this.mesh=new N.a(this.gl,{geometry:this.geometry,program:this.program})}},{key:"updateSize",value:function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.program.uniforms.uOutputResolution.value=[window.innerWidth,window.innerHeight]}},{key:"attachVideosToEmptyTextures",value:function(e){var t=this;e.forEach((function(e,n){t.textures[n].image=e}))}},{key:"isTransitionRunning",value:function(){return 0!==this.transitionProgress}},{key:"goToSlide",value:function(e){var t=this;this.nextSlideIndex=e,this.program.uniforms.uTexture2.value=this.textures[e],h.a.killTweensOf(this),h.a.to(this,{transitionProgress:1,duration:1.5,ease:"power2.out",onUpdate:function(){t.updateTransitionProgressUniform()},onComplete:function(){t.transitionProgress=0,t.currentSlideIndex=e,t.program.uniforms.uTexture1.value=t.textures[e],t.updateTransitionProgressUniform()}})}},{key:"updateTransitionProgressUniform",value:function(){this.program.uniforms.uTransitionProgress.value=this.transitionProgress}},{key:"dispose",value:function(){this.program.remove(),this.geometry.remove()}},{key:"render",value:function(){requestAnimationFrame(this.render),this.textures&&this.textures[this.currentSlideIndex].image&&(this.textures[this.currentSlideIndex].needsUpdate=!0),this.textures&&this.isTransitionRunning()&&this.textures[this.nextSlideIndex].image&&(this.textures[this.nextSlideIndex].needsUpdate=!0),this.renderer.render({scene:this.mesh})}}]),e}(),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).canvasRef=Object(r.createRef)(),a.ref=Object(r.createRef)(),a.captionsRefs=a.props.slides.map((function(){return Object(r.createRef)()})),a.goToPreviousSlide=a.goToPreviousSlide.bind(Object(l.a)(a)),a.goToNextSlide=a.goToNextSlide.bind(Object(l.a)(a)),a.onResize=a.onResize.bind(Object(l.a)(a)),a.preload=m()(),a.currentSlideIndex=0,a.nextSlideIndex=0,a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.gl=new L({canvas:this.canvasRef.current,slidesCount:this.props.slides.length}),this.onResize(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.preload.cancel(),this.gl.dispose()}},{key:"goToNextSlide",value:function(){var e=this.currentSlideIndex===this.props.slides.length-1?0:this.currentSlideIndex+1;this.goToSlide(e)}},{key:"goToPreviousSlide",value:function(){var e=0===this.currentSlideIndex?this.props.slides.length-1:this.currentSlideIndex-1;this.goToSlide(e)}},{key:"goToSlide",value:function(e){if(this.props.slidesLoaded&&!this.gl.isTransitionRunning()){var t=this.currentSlideIndex;this.currentSlideIndex=e,this.animateCaptions(t,this.currentSlideIndex),this.props.updateCounter(this.currentSlideIndex+1),this.gl.goToSlide(this.currentSlideIndex)}}},{key:"animateCaptions",value:function(e,t){this.animateOutPreviousCaptions(e,t),this.animateInNextCaption(t)}},{key:"animateOutPreviousCaptions",value:function(e,t){if(e!==t){var n=this.captionsRefs[e].current.ref.current,r=n.querySelectorAll(".char");h.a.killTweensOf(r),h.a.fromTo(r,{opacity:1},{opacity:0,duration:.5,ease:"power2.out",onComplete:function(){n.classList.remove("active")}})}}},{key:"animateInNextCaption",value:function(e){var t=this.captionsRefs[e].current.ref.current;t.classList.add("active");var n=t.querySelectorAll(".char");h.a.killTweensOf(n),h.a.fromTo(n,{y:"100%",opacity:1},{y:"0%",stagger:.025,duration:1,ease:"power2.out"})}},{key:"onResize",value:function(){this.gl.updateSize()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"slideshow",ref:this.ref},a.a.createElement("canvas",{ref:this.canvasRef,className:"gl"}),a.a.createElement("div",{className:"slideshow-captions-container"},this.props.slides.map((function(t,n){return a.a.createElement(T,{caption:t.caption,key:n,ref:e.captionsRefs[n]})}))))}}]),n}(r.Component),B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).ref=Object(r.createRef)(),a.buttonRef=Object(r.createRef)(),a.state={buttonActive:!1,percentLoaded:0},a}return Object(c.a)(n,[{key:"updatePercentLoaded",value:function(e){this.setState({percentLoaded:e})}},{key:"displayPercent",value:function(){return"".concat(this.state.percentLoaded,"%")}},{key:"animateOut",value:function(){h.a.to(this.ref.current,{y:"-100%",opacity:0,duration:1,ease:"power2.out"})}},{key:"displayPlayButton",value:function(){var e=this,t=h.a.timeline();t.to(this.ref.current,{"--beforeScaleY":1,duration:.5,ease:"power2.out",onComplete:function(){e.setState({buttonActive:!0})}}),t.to(this.buttonRef.current,{opacity:1,duration:1,ease:"power2.out"},"-=.5")}},{key:"render",value:function(){return a.a.createElement("div",{className:"loader",ref:this.ref},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 513.6 513.6",className:"loader-svg"},a.a.createElement("g",{transform:"translate(-162.95 -200.47)"},a.a.createElement("circle",{cx:"419.75",cy:"457.27",r:"249.3",strokeWidth:"1.4"}),a.a.createElement("path",{style:{strokeDashoffset:100-this.state.percentLoaded},className:"loader-svg-path",pathLength:"100",strokeWidth:"15",d:"M170.45 457.27a249.3 249.3 0 01249.3-249.3 249.3 249.3 0 01249.3 249.3 249.3 249.3 0 01-249.3 249.3 249.3 249.3 0 01-249.3-249.3z"}))),a.a.createElement("div",{className:"loader-percent"},this.displayPercent()),a.a.createElement("button",{className:"loader-play-button ".concat(this.state.buttonActive?"active":""),ref:this.buttonRef,onClick:this.props.onClickButton},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 320"},a.a.createElement("path",{d:"M296 146L40 2a16 16 0 00-24 14v288a16 16 0 0024 14l256-144a16 16 0 000-28z"}))))}}]),n}(r.Component),z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onTransitionComplete=a.onTransitionComplete.bind(Object(l.a)(a)),a.format=a.format.bind(Object(l.a)(a)),a.ref=Object(r.createRef)(),a.containerRef=Object(r.createRef)(),a.state={currentSlideIndex:0,nextSlideIndex:0},a}return Object(c.a)(n,[{key:"goToSlide",value:function(e){this.setState({nextSlideIndex:e}),h.a.killTweensOf(this.containerRef.current),h.a.to(this.containerRef.current,{y:"-100%",duration:1,ease:"power2.out",onComplete:this.onTransitionComplete,onCompleteParams:[e]})}},{key:"onTransitionComplete",value:function(e){this.setState({currentSlideIndex:e}),h.a.set(this.containerRef.current,{y:"0%"})}},{key:"format",value:function(e){return("0"+e).slice(-2)}},{key:"render",value:function(){return a.a.createElement("div",{className:"slideshow-counter",ref:this.ref},a.a.createElement("div",{className:"current-slide-number-container",ref:this.containerRef},a.a.createElement("div",{className:"slideshow-counter-number current-slide-number-current"},this.format(this.state.currentSlideIndex)),a.a.createElement("div",{className:"slideshow-counter-number current-slide-number-next"},this.format(this.state.nextSlideIndex))),a.a.createElement("div",{className:"total-slides-number slideshow-counter-number"},this.format(this.props.slidesCount)))}}]),n}(r.Component);function U(e){return a.a.createElement("button",{className:"slideshow-controls-button",onClick:e.onClick},a.a.createElement("svg",{className:"slideshow-controls-icon"},a.a.createElement("use",{xlinkHref:"#".concat(e.icon)})))}var D=Object(r.forwardRef)((function(e,t){return a.a.createElement("div",{className:"slideshow-controls",ref:t},a.a.createElement(U,{icon:"arrow-left",onClick:e.previous}),a.a.createElement(U,{icon:"arrow-right",onClick:e.next}))})),F=n.p+"static/media/mini-planets.bd14c578.jpg",G=n.p+"static/media/galaxy-gates.66014612.jpg",W=n.p+"static/media/kingdom-of-colors.439da5b7.jpg",Y=[{src:n.p+"static/media/mini-planets.e50c448a.mp4",poster:F,caption:"Mini Planets"},{src:n.p+"static/media/galaxy-gates.8fb1d702.mp4",poster:G,caption:"Galaxy Gates"},{src:n.p+"static/media/kingdom-of-colours.fa694201.mp4",poster:W,caption:"Kingom of Colours"}],J=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).menuRef=Object(r.createRef)(),a.loaderRef=Object(r.createRef)(),a.slideshowRef=Object(r.createRef)(),a.counterRef=Object(r.createRef)(),a.line1Ref=Object(r.createRef)(),a.line2Ref=Object(r.createRef)(),a.headerRef=Object(r.createRef)(),a.slideshowControlsRef=Object(r.createRef)(),a.animatedLineRef=Object(r.createRef)(),a.infosRef=Object(r.createRef)(),a.onLoadProgress=a.onLoadProgress.bind(Object(l.a)(a)),a.onLoadComplete=a.onLoadComplete.bind(Object(l.a)(a)),a.onToggleMenu=a.onToggleMenu.bind(Object(l.a)(a)),a.goToPreviousSlide=a.goToPreviousSlide.bind(Object(l.a)(a)),a.goToNextSlide=a.goToNextSlide.bind(Object(l.a)(a)),a.updateCounter=a.updateCounter.bind(Object(l.a)(a)),a.start=a.start.bind(Object(l.a)(a)),a.state={menuOpen:!1,slidesLoaded:!1},a.slides=Y,a.entriesReverseAnimationsCompletedCount=0,a.preloader=m()(),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.preloadSlides()}},{key:"preloadSlides",value:function(){var e=this;this.preloader.fetch(this.slides.map((function(e){return e.src}))),this.preloader.oncomplete=function(){var t=[];e.slides.forEach((function(n){n.video=document.createElement("video"),n.video.src=e.preloader.getItemByUrl(n.src).blobUrl,n.video.loop=!0,n.video.muted=!0,t.push(new Promise((function(e){n.video.addEventListener("canplay",e)})))})),e.slideshowRef.current.gl.attachVideosToEmptyTextures(e.slides.map((function(e){return e.video}))),Promise.all(t).then((function(){e.setState({slidesLoaded:!0},e.onLoadComplete)}))},this.preloader.onprogress=function(t){e.onLoadProgress(t.progress)}}},{key:"onLoadProgress",value:function(e){this.loaderRef.current.updatePercentLoaded(e)}},{key:"onLoadComplete",value:function(){var e=this;p.a.video().then((function(t){t.result?e.start():e.loaderRef.current.displayPlayButton()}))}},{key:"start",value:function(){this.slides.forEach((function(e){e.video.play()})),this.loaderRef.current.animateOut(),this.slideshowRef.current.goToSlide(0),this.animateIn()}},{key:"animateIn",value:function(){var e=this,t=h.a.timeline();t.to([this.line1Ref.current,this.line2Ref.current],{scaleY:1,duration:1.5,stagger:.225,ease:"power2.out"}),t.to([this.headerRef.current.logoRef.current,this.headerRef.current.menuTriggerRef.current.ref.current,this.headerRef.current.buttonRef.current,this.counterRef.current.ref.current,this.slideshowControlsRef.current,this.infosRef.current,this.animatedLineRef.current],{opacity:1,y:0,"--pseudoElementScaleX":function(t,n){return!!n.isSameNode(e.animatedLineRef.current)&&1},duration:1,stagger:.05,ease:"power2.out"})}},{key:"onToggleMenu",value:function(e){var t=this;this.setState({menuOpen:!this.state.menuOpen}),this.state.menuOpen?(this.menuRef.current.close(),"number"===typeof e&&window.setTimeout((function(){t.slideshowRef.current.goToSlide(e)}),800)):this.menuRef.current.open()}},{key:"goToNextSlide",value:function(){this.slideshowRef.current.goToNextSlide()}},{key:"goToPreviousSlide",value:function(){this.slideshowRef.current.goToPreviousSlide()}},{key:"updateCounter",value:function(e){this.counterRef.current.goToSlide(e)}},{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(v,null),a.a.createElement(b,{onToggleMenu:this.onToggleMenu,menuOpen:this.state.menuOpen,ref:this.headerRef}),a.a.createElement(B,{ref:this.loaderRef,onClickButton:this.start}),a.a.createElement(M,{onLoadProgress:this.onLoadProgress,onLoadComplete:this.onLoadComplete,updateCounter:this.updateCounter,ref:this.slideshowRef,slides:this.slides,slidesLoaded:this.state.slidesLoaded}),a.a.createElement("div",{className:"line",ref:this.line1Ref}),a.a.createElement("div",{className:"line line-last",ref:this.line2Ref}),a.a.createElement(O,{ref:this.menuRef,active:this.state.menuOpen,onToggle:this.onToggleMenu,slides:this.slides}),a.a.createElement("footer",{className:"footer"},a.a.createElement(w,{ref:this.animatedLineRef},a.a.createElement("div",{className:"slideshow-ui"},a.a.createElement(z,{ref:this.counterRef,slidesCount:this.slides.length}),a.a.createElement(D,{ref:this.slideshowControlsRef,previous:this.goToPreviousSlide,next:this.goToNextSlide}))),a.a.createElement(w,null,a.a.createElement("div",{className:"infos",ref:this.infosRef},a.a.createElement("p",null,"UI experiment based on dribbble shots designed by"," ",a.a.createElement("a",{href:"https://dribbble.com/hrvoje-grubisic",className:"link",target:"_blank",rel:"noreferrer"},"Hrvoje Grubisic"),"."),a.a.createElement("p",null,"Visuals belong to"," ",a.a.createElement("a",{href:"https://thomas-blanchard.com/",className:"link",target:"_blank",rel:"noreferrer"},"Thomas Blanchard"),".")))))}}]),n}(r.Component);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(J,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.304c9d40.chunk.js.map