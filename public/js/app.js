(function(){var t,e,n,i,r,o=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1};e=function(){function t(){}t.prototype.extend=function(t,e){var n,i;for(n in e){i=e[n];if(t[n]==null){t[n]=i}}return t};t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)};t.prototype.createEvent=function(t,e,n,i){var r;if(e==null){e=false}if(n==null){n=false}if(i==null){i=null}if(document.createEvent!=null){r=document.createEvent("CustomEvent");r.initCustomEvent(t,e,n,i)}else if(document.createEventObject!=null){r=document.createEventObject();r.eventType=t}else{r.eventName=t}return r};t.prototype.emitEvent=function(t,e){if(t.dispatchEvent!=null){return t.dispatchEvent(e)}else if(e in(t!=null)){return t[e]()}else if("on"+e in(t!=null)){return t["on"+e]()}};t.prototype.addEvent=function(t,e,n){if(t.addEventListener!=null){return t.addEventListener(e,n,false)}else if(t.attachEvent!=null){return t.attachEvent("on"+e,n)}else{return t[e]=n}};t.prototype.removeEvent=function(t,e,n){if(t.removeEventListener!=null){return t.removeEventListener(e,n,false)}else if(t.detachEvent!=null){return t.detachEvent("on"+e,n)}else{return delete t[e]}};t.prototype.innerHeight=function(){if("innerHeight"in window){return window.innerHeight}else{return document.documentElement.clientHeight}};return t}();n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[];this.values=[]}t.prototype.get=function(t){var e,n,i,r,o;o=this.keys;for(e=i=0,r=o.length;i<r;e=++i){n=o[e];if(n===t){return this.values[e]}}};t.prototype.set=function(t,e){var n,i,r,o,s;s=this.keys;for(n=r=0,o=s.length;r<o;n=++r){i=s[n];if(i===t){this.values[n]=e;return}}this.keys.push(t);return this.values.push(e)};return t}());t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){if(typeof console!=="undefined"&&console!==null){console.warn("MutationObserver is not supported by your browser.")}if(typeof console!=="undefined"&&console!==null){console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}}t.notSupported=true;t.prototype.observe=function(){};return t}());i=this.getComputedStyle||function(t,e){this.getPropertyValue=function(e){var n;if(e==="float"){e="styleFloat"}if(r.test(e)){e.replace(r,function(t,e){return e.toUpperCase()})}return((n=t.currentStyle)!=null?n[e]:void 0)||null};return this};r=/(\-([a-z]){1})/g;this.WOW=function(){r.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:true,live:true,callback:null};function r(t){if(t==null){t={}}this.scrollCallback=o(this.scrollCallback,this);this.scrollHandler=o(this.scrollHandler,this);this.resetAnimation=o(this.resetAnimation,this);this.start=o(this.start,this);this.scrolled=true;this.config=this.util().extend(t,this.defaults);this.animationNameCache=new n;this.wowEvent=this.util().createEvent(this.config.boxClass)}r.prototype.init=function(){var t;this.element=window.document.documentElement;if((t=document.readyState)==="interactive"||t==="complete"){this.start()}else{this.util().addEvent(document,"DOMContentLoaded",this.start)}return this.finished=[]};r.prototype.start=function(){var e,n,i,r;this.stopped=false;this.boxes=function(){var t,n,i,r;i=this.element.querySelectorAll("."+this.config.boxClass);r=[];for(t=0,n=i.length;t<n;t++){e=i[t];r.push(e)}return r}.call(this);this.all=function(){var t,n,i,r;i=this.boxes;r=[];for(t=0,n=i.length;t<n;t++){e=i[t];r.push(e)}return r}.call(this);if(this.boxes.length){if(this.disabled()){this.resetStyle()}else{r=this.boxes;for(n=0,i=r.length;n<i;n++){e=r[n];this.applyStyle(e,true)}}}if(!this.disabled()){this.util().addEvent(window,"scroll",this.scrollHandler);this.util().addEvent(window,"resize",this.scrollHandler);this.interval=setInterval(this.scrollCallback,50)}if(this.config.live){return new t(function(t){return function(e){var n,i,r,o,s;s=[];for(n=0,i=e.length;n<i;n++){o=e[n];s.push(function(){var t,e,n,i;n=o.addedNodes||[];i=[];for(t=0,e=n.length;t<e;t++){r=n[t];i.push(this.doSync(r))}return i}.call(t))}return s}}(this)).observe(document.body,{childList:true,subtree:true})}};r.prototype.stop=function(){this.stopped=true;this.util().removeEvent(window,"scroll",this.scrollHandler);this.util().removeEvent(window,"resize",this.scrollHandler);if(this.interval!=null){return clearInterval(this.interval)}};r.prototype.sync=function(e){if(t.notSupported){return this.doSync(this.element)}};r.prototype.doSync=function(t){var e,n,i,r,o;if(t==null){t=this.element}if(t.nodeType!==1){return}t=t.parentNode||t;r=t.querySelectorAll("."+this.config.boxClass);o=[];for(n=0,i=r.length;n<i;n++){e=r[n];if(s.call(this.all,e)<0){this.boxes.push(e);this.all.push(e);if(this.stopped||this.disabled()){this.resetStyle()}else{this.applyStyle(e,true)}o.push(this.scrolled=true)}else{o.push(void 0)}}return o};r.prototype.show=function(t){this.applyStyle(t);t.className=t.className+" "+this.config.animateClass;if(this.config.callback!=null){this.config.callback(t)}this.util().emitEvent(t,this.wowEvent);this.util().addEvent(t,"animationend",this.resetAnimation);this.util().addEvent(t,"oanimationend",this.resetAnimation);this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation);this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation);return t};r.prototype.applyStyle=function(t,e){var n,i,r;i=t.getAttribute("data-wow-duration");n=t.getAttribute("data-wow-delay");r=t.getAttribute("data-wow-iteration");return this.animate(function(o){return function(){return o.customStyle(t,e,i,n,r)}}(this))};r.prototype.animate=function(){if("requestAnimationFrame"in window){return function(t){return window.requestAnimationFrame(t)}}else{return function(t){return t()}}}();r.prototype.resetStyle=function(){var t,e,n,i,r;i=this.boxes;r=[];for(e=0,n=i.length;e<n;e++){t=i[e];r.push(t.style.visibility="visible")}return r};r.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0){e=t.target||t.srcElement;return e.className=e.className.replace(this.config.animateClass,"").trim()}};r.prototype.customStyle=function(t,e,n,i,r){if(e){this.cacheAnimationName(t)}t.style.visibility=e?"hidden":"visible";if(n){this.vendorSet(t.style,{animationDuration:n})}if(i){this.vendorSet(t.style,{animationDelay:i})}if(r){this.vendorSet(t.style,{animationIterationCount:r})}this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)});return t};r.prototype.vendors=["moz","webkit"];r.prototype.vendorSet=function(t,e){var n,i,r,o;i=[];for(n in e){r=e[n];t[""+n]=r;i.push(function(){var e,i,s,a;s=this.vendors;a=[];for(e=0,i=s.length;e<i;e++){o=s[e];a.push(t[""+o+n.charAt(0).toUpperCase()+n.substr(1)]=r)}return a}.call(this))}return i};r.prototype.vendorCSS=function(t,e){var n,r,o,s,a,u;a=i(t);s=a.getPropertyCSSValue(e);o=this.vendors;for(n=0,r=o.length;n<r;n++){u=o[n];s=s||a.getPropertyCSSValue("-"+u+"-"+e)}return s};r.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}if(e==="none"){return""}else{return e}};r.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))};r.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)};r.prototype.scrollHandler=function(){return this.scrolled=true};r.prototype.scrollCallback=function(){var t;if(this.scrolled){this.scrolled=false;this.boxes=function(){var e,n,i,r;i=this.boxes;r=[];for(e=0,n=i.length;e<n;e++){t=i[e];if(!t){continue}if(this.isVisible(t)){this.show(t);continue}r.push(t)}return r}.call(this);if(!(this.boxes.length||this.config.live)){return this.stop()}}};r.prototype.offsetTop=function(t){var e;while(t.offsetTop===void 0){t=t.parentNode}e=t.offsetTop;while(t=t.offsetParent){e+=t.offsetTop}return e};r.prototype.isVisible=function(t){var e,n,i,r,o;n=t.getAttribute("data-wow-offset")||this.config.offset;o=window.pageYOffset;r=o+Math.min(this.element.clientHeight,this.util().innerHeight())-n;i=this.offsetTop(t);e=i+t.clientHeight;return i<=r&&e>=o};r.prototype.util=function(){return this._util!=null?this._util:this._util=new e};r.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)};return r}()}).call(this);(function(t,e,n){var i=function(){"use strict";var i=[],r=false,o=[],s=false,a,u,l,c={swing:function(t,e,n,i){return this.easeOutQuad(t,e,n,i)},easeInQuad:function(t,e,n,i){return n*(t/=i)*t+e},easeOutQuad:function(t,e,n,i){return-n*(t/=i)*(t-2)+e},easeInOutQuad:function(t,e,n,i){if((t/=i/2)<1)return n/2*t*t+e;return-n/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,i){return n*(t/=i)*t*t+e},easeOutCubic:function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,i){if((t/=i/2)<1)return n/2*t*t*t+e;return n/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,i){return n*(t/=i)*t*t*t+e},easeOutQuart:function(t,e,n,i){return-n*((t=t/i-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,i){if((t/=i/2)<1)return n/2*t*t*t*t+e;return-n/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,i){return n*(t/=i)*t*t*t*t+e},easeOutQuint:function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,i){if((t/=i/2)<1)return n/2*t*t*t*t*t+e;return n/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+e},easeOutSine:function(t,e,n,i){return n*Math.sin(t/i*(Math.PI/2))+e},easeInOutSine:function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e},easeInExpo:function(t,e,n,i){return t==0?e:n*Math.pow(2,10*(t/i-1))+e},easeOutExpo:function(t,e,n,i){return t==i?e+n:n*(-Math.pow(2,-10*t/i)+1)+e},easeInOutExpo:function(t,e,n,i){if(t==0)return e;if(t==i)return e+n;if((t/=i/2)<1)return n/2*Math.pow(2,10*(t-1))+e;return n/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(t,e,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+e},easeOutCirc:function(t,e,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+e},easeInOutCirc:function(t,e,n,i){if((t/=i/2)<1)return-n/2*(Math.sqrt(1-t*t)-1)+e;return n/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,i){var r=1.70158;var o=0;var s=n;if(t==0)return e;if((t/=i)==1)return e+n;if(!o)o=i*.3;if(s<Math.abs(n)){s=n;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(n/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/o))+e},easeOutElastic:function(t,e,n,i){var r=1.70158;var o=0;var s=n;if(t==0)return e;if((t/=i)==1)return e+n;if(!o)o=i*.3;if(s<Math.abs(n)){s=n;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*t)*Math.sin((t*i-r)*(2*Math.PI)/o)+n+e},easeInOutElastic:function(t,e,n,i){var r=1.70158;var o=0;var s=n;if(t==0)return e;if((t/=i/2)==2)return e+n;if(!o)o=i*(.3*1.5);if(s<Math.abs(n)){s=n;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(n/s);if(t<1)return-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/o))+e;return s*Math.pow(2,-10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/o)*.5+n+e},easeInBack:function(t,e,i,r,o){if(o==n)o=1.70158;return i*(t/=r)*t*((o+1)*t-o)+e},easeOutBack:function(t,e,i,r,o){if(o==n)o=1.70158;return i*((t=t/r-1)*t*((o+1)*t+o)+1)+e},easeInOutBack:function(t,e,i,r,o){if(o==n)o=1.70158;if((t/=r/2)<1)return i/2*(t*t*(((o*=1.525)+1)*t-o))+e;return i/2*((t-=2)*t*(((o*=1.525)+1)*t+o)+2)+e},easeInBounce:function(t,e,n,i){return n-this.easeOutBounce(i-t,0,n,i)+e},easeOutBounce:function(t,e,n,i){if((t/=i)<1/2.75){return n*(7.5625*t*t)+e}else if(t<2/2.75){return n*(7.5625*(t-=1.5/2.75)*t+.75)+e}else if(t<2.5/2.75){return n*(7.5625*(t-=2.25/2.75)*t+.9375)+e}else{return n*(7.5625*(t-=2.625/2.75)*t+.984375)+e}},easeInOutBounce:function(t,e,n,i){if(t<i/2)return this.easeInBounce(t*2,0,n,i)*.5+e;return this.easeOutBounce(t*2-i,0,n,i)*.5+n*.5+e}},f={swing:function(){return this.easeOutQuad()},easeInQuad:function(){return"0.55, 0.085, 0.68, 0.53"},easeOutQuad:function(){return"0.25, 0.46, 0.45, 0.94"},easeInOutQuad:function(){return"0.455, 0.03, 0.515, 0.955"},easeInCubic:function(){return"0.55, 0.055, 0.675, 0.19"},easeOutCubic:function(){return"0.215, 0.61, 0.355, 1"},easeInOutCubic:function(){return"0.645, 0.045, 0.355, 1"},easeInQuart:function(){return"0.895, 0.03, 0.685, 0.22"},easeOutQuart:function(){return"0.165, 0.84, 0.44, 1"},easeInOutQuart:function(){return"0.77, 0, 0.175, 1"},easeInQuint:function(){return"0.755, 0.05, 0.855, 0.06"},easeOutQuint:function(){return"0.23, 1, 0.32, 1"},easeInOutQuint:function(){return"0.86, 0, 0.07, 1"},easeInSine:function(){return"0.47, 0, 0.745, 0.715"},easeOutSine:function(){return"0.39, 0.575, 0.565, 1"},easeInOutSine:function(){return"0.445, 0.05, 0.55, 0.95"},easeInExpo:function(){return"0.95, 0.05, 0.795, 0.035"},easeOutExpo:function(){return"0.19, 1, 0.22, 1"},easeInOutExpo:function(){return"1, 0, 0, 1"},easeInCirc:function(){return"0.6, 0.04, 0.98, 0.335"},easeOutCirc:function(){return"0.075, 0.82, 0.165, 1"},easeInOutCirc:function(){return"0.785, 0.135, 0.15, 0.86"}},h={hashLinkPattern:'a[href*="#"]:not([href="#"])',frames:60,valueUnitRegEx:/^([\-]{0,1}[0-9\.]+)([a-z%]{0,3})$/,moveDuration:1e3,moveEasing:"swing",jumpDuration:1e3,scrollEasing:"swing",cacheJumps:true,cssTransitions:true},p=function(t){t&&Object.keys(t).forEach(function(e){h[e]=t[e]})},d=function(){var t=e.documentElement.style;return t.webkitTransition!==n||t.MozTransition!==n||t.OTransition!==n||t.MsTransition!==n||t.transition!==n},v=function(t,e){t.style.webkitTransition!==n&&(t.style.webkitTransition=e);t.style.MozTransition!==n&&(t.style.MozTransition=e);t.style.OTransition!==n&&(t.style.OTransition=e);t.style.MsTransition!==n&&(t.style.MsTransition=e);t.style.transition!==n&&(t.style.transition=e)},m=function(t){return t in e.documentElement.style},y=function(t){return t.replace(/(\-[a-z]{1})/g,function(t){return t.slice(-1).toUpperCase()})},g=function(n,l,p,w){var E;if(l.isJump){!h.cacheJumps&&s&&clearInterval(a);if(h.cacheJumps&&s){i.push({target:n});return}s=true;E=function(){s=false;if(h.cacheJumps&&i.length>0){var t=i.shift();b(t.target)}}}else{if(r){o.push({target:n,options:l,duration:p,done:w});return}r=true;E=function(){r=false;var t=o.shift();t&&g(t.target,t.options,t.duration,t.done)}}var O=typeof n==="string"?e.querySelector(n):n;var M={};M.properties=l.properties||l;M.duration=p||l.duration||(l.isJump?h.jumpDuration:h.moveDuration);M.done=w||l.done;M.easing=l.easing||(l.isJump?h.scrollEasing:h.moveEasing);M.isJump=l.isJump;typeof l.target==="string"?l.target=e.querySelector(l.target):M.target=l.target;var I=true;Object.keys(M.properties).forEach(function(t){I=m(t)});if(h.cssTransitions&&I&&d()&&M.easing in f){Object.keys(M.properties).forEach(function(t){var e="all "+M.duration+"ms cubic-bezier("+f[M.easing]()+")";v(O,e);var n=y(t);O.style[y(t)]=M.properties[t];clearTimeout(u);u=setTimeout(function(){v(O,"");E();M.done&&M.done()},M.duration)});return}var S=[],C=0;Object.keys(M.properties).forEach(function(t){var e=M.properties[t].match(h.valueUnitRegEx);S.push({style:y(t),value:parseInt(e[1]),suffix:e[2]||"",duration:M.duration,rawValue:M.properties[t]})});S.forEach(function(e){var n=0,i;if(I)i=O.style[e.style].match(h.valueUnitRegEx);else i=(O[e.style]+"").match(h.valueUnitRegEx);if(!i)i=["0","0",""];var r=I?parseInt(i[1])||0:t.scrollY,o=e.value-(r||0),s=0,u=Math.ceil(e.duration/h.frames),l;l=setInterval(function(){if(n<h.frames){var i=c[M.easing](s,r,o,e.duration);if(I)O.style[e.style]=i+e.suffix;else if(e.style in O){if(M.target)if(e.style=="scrollTop"){t.scrollTo(0,i)}else{M.target[e.style]=i+e.suffix}else O[e.style]=i+e.suffix}else s=h.frames}else{clearInterval(l);C++;E();C===S.length&&M.done&&M.done()}s+=u;n++},u);M.isJump&&(a=l)})},b=function(n,i){var r=typeof n==="string"?e.querySelector(n):n;var o=i||{};g(r,{properties:{scrollTop:r.offsetTop+""},duration:o.duration||h.jumpDuration,easing:o.easing||h.scrollEasing,done:o.setHash?function(){t.location.hash=r.id;o.done&&o.done()}:o.done,target:e.body,isJump:true})},w=function(){l=e.querySelectorAll(h.hashLinkPattern);[].forEach.call(l,function(n){n.addEventListener("click",function(n){if(t.location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&t.location.hostname==this.hostname){var i=e.querySelector(this.hash);i&&b(i);n.preventDefault()}},false)})},E=function(){[].forEach.call(l,function(t){t.removeEventListener("click")});l=null};return{opt:h,config:p,hasTransitionSupport:d,toJsStyle:y,move:g,jump:b,bindHashes:w,unbindHashes:E,setTransition:v}}();var r=t.$||t.jQuery;r&&r.fn.extend({move:function(t,e,n){return this.each(function(){i.move(this,t,e,n)})},jump:function(t){return this.each(function(){i.jump(this,t)})}});if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=i}else{t.force=i;if(typeof define==="function"&&define.amd){define("force",[],function(){return i})}}})(window,document);console.info("Hey! Looking for something? Let me know if you need graphic/web designer or developer.");console.warn("My email: puagardian@gmail.com skype: fldeoze");(new WOW).init();$(window).scroll(function(){if($(this).scrollTop()>=2){$("header").addClass("header--is-fixed")}else{$("header").removeClass("header--is-fixed")}});$(window).scroll(function(){if($(window).scrollTop()>=800){$("a#to-top").fadeIn({duration:200,easing:"linear"})}else{$("a#to-top").fadeOut({duration:200,easing:"linear"})}});force.bindHashes();$("#menu-toggle").click(function(){$("#main-nav").toggle("fast","linear",function(){$("#menu-toggle--on").toggle();$("#menu-toggle--off").toggle()})});