/*! PanamaLottoWeb - v1.0 - 2013-10-05
* Copyright (c) 2013 Rogelio Morrell; Licensed  */
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(j){var N=j.$LAB,A="UseLocalXHR",B="AlwaysPreserveOrder",w="AllowDuplicates",C="CacheBust",l="Debug",D="BasePath",E=/^[^?#]*\//.exec(location.href)[0],F=/^\w+\:\/\/\/?[^\/]+/.exec(E)[0],i=document.head||document.getElementsByTagName("head"),O=(j.opera&&Object.prototype.toString.call(j.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),m=function(){},G=m,s=document.createElement("script"),H=typeof s.preload=="boolean",t=H||(s.readyState&&s.readyState=="uninitialized"),I=!t&&s.async===true,P=!t&&!I&&!O;if(j.console&&j.console.log){if(!j.console.error)j.console.error=j.console.log;m=function(a){j.console.log(a)};G=function(a,c){j.console.error(a,c)}}function J(a){return Object.prototype.toString.call(a)=="[object Function]"}function K(a){return Object.prototype.toString.call(a)=="[object Array]"}function Q(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?F:E)+a)}function u(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function R(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function v(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function L(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function S(d,g,e,f,h){setTimeout(function(){var a,c=g.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(g.type)a.type=g.type;if(g.charset)a.charset=g.charset;if(h){if(t){if(d[l])m("start script preload: "+c);e.elem=a;if(H){a.preload=true;a.onpreload=f}else{a.onreadystatechange=function(){if(a.readyState=="loaded")f()}}a.src=c}else if(h&&c.indexOf(F)==0&&d[A]){b=new XMLHttpRequest();if(d[l])m("start script preload (xhr): "+c);b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;f()}};b.open("GET",c);b.send()}else{if(d[l])m("start script preload (cache): "+c);a.type="text/cache-script";v(a,e,"ready",function(){i.removeChild(a);f()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(I){if(d[l])m("start script load (ordered async): "+c);a.async=false;v(a,e,"finished",f);a.src=c;i.insertBefore(a,i.firstChild)}else{if(d[l])m("start script load: "+c);v(a,e,"finished",f);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function M(){var o={},T=t||P,q=[],r={},p;o[A]=true;o[B]=false;o[w]=false;o[C]=false;o[l]=false;o[D]="";function U(a,c,b){var d;function g(){if(d!=null){d=null;L(b)}}if(r[c.src].finished)return;if(!a[w])r[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;v(d,b,"finished",g);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){g()}}function V(c,b,d,g){var e,f,h=function(){b.ready_cb(b,function(){U(c,b,e)})},k=function(){b.finished_cb(b,d)};b.src=Q(b.src,c[D]);b.real_src=b.src+(c[C]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!r[b.src])r[b.src]={items:[],finished:false};f=r[b.src].items;if(c[w]||f.length==0){e=f[f.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[k]};S(c,b,e,((g)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){L(e)}),g)}else{e=f[0];if(e.finished){k()}else{e.finished_listeners.push(k)}}}function x(){var e,f=u(o,{}),h=[],k=0,y=false,n;function W(a,c){if(f[l])m("script preload finished: "+a.real_src);a.ready=true;a.exec_trigger=c;z()}function X(a,c){if(f[l])m("script execution finished: "+a.real_src);a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;z()}function z(){while(k<h.length){if(J(h[k])){if(f[l])m("$LAB.wait() executing: "+h[k]);try{h[k++]()}catch(err){if(f[l])G("$LAB.wait() error caught: ",err)}continue}else if(!h[k].finished){if(R(h[k]))continue;break}k++}if(k==h.length){y=false;n=false}}function Y(){if(!n||!n.scripts){h.push(n={scripts:[],finished:true})}}e={script:function(){for(var g=0;g<arguments.length;g++){(function(a,c){var b;if(!K(a)){c=[a]}for(var d=0;d<c.length;d++){Y();a=c[d];if(J(a))a=a();if(!a)continue;if(K(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=u(a,{ready:false,ready_cb:W,finished:false,finished_cb:X});n.finished=false;n.scripts.push(a);V(f,a,n,(T&&y));y=true;if(f[B])e.wait()}})(arguments[g],arguments[g])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}n=h[h.length-1]}else n=false;z();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){u(a,f);return e}}}p={setGlobalDefaults:function(a){u(a,o);return p},setOptions:function(){return x().setOptions.apply(null,arguments)},script:function(){return x().script.apply(null,arguments)},wait:function(){return x().wait.apply(null,arguments)},queueScript:function(){q[q.length]={type:"script",args:[].slice.call(arguments)};return p},queueWait:function(){q[q.length]={type:"wait",args:[].slice.call(arguments)};return p},runQueue:function(){var a=p,c=q.length,b=c,d;for(;--b>=0;){d=q.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){j.$LAB=N;return p},sandbox:function(){return M()}};return p}j.$LAB=M();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/

(function(global){
	var _$LAB = global.$LAB,
	
		// constants for the valid keys of the options object
		_UseLocalXHR = "UseLocalXHR",
		_AlwaysPreserveOrder = "AlwaysPreserveOrder",
		_AllowDuplicates = "AllowDuplicates",
		_CacheBust = "CacheBust",
		/*!START_DEBUG*/_Debug = "Debug",/*!END_DEBUG*/
		_BasePath = "BasePath",
		
		// stateless variables used across all $LAB instances
		root_page = /^[^?#]*\//.exec(location.href)[0],
		root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
		append_to = document.head || document.getElementsByTagName("head"),
		
		// inferences... ick, but still necessary
		opera_or_gecko = (global.opera && Object.prototype.toString.call(global.opera) == "[object Opera]") || ("MozAppearance" in document.documentElement.style),

/*!START_DEBUG*/
		// console.log() and console.error() wrappers
		log_msg = function(){}, 
		log_error = log_msg,
/*!END_DEBUG*/
		
		// feature sniffs (yay!)
		test_script_elem = document.createElement("script"),
		explicit_preloading = typeof test_script_elem.preload == "boolean", // http://wiki.whatwg.org/wiki/Script_Execution_Control#Proposal_1_.28Nicholas_Zakas.29
		real_preloading = explicit_preloading || (test_script_elem.readyState && test_script_elem.readyState == "uninitialized"), // will a script preload with `src` set before DOM append?
		script_ordered_async = !real_preloading && test_script_elem.async === true, // http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
		
		// XHR preloading (same-domain) and cache-preloading (remote-domain) are the fallbacks (for some browsers)
		xhr_or_cache_preloading = !real_preloading && !script_ordered_async && !opera_or_gecko
	;

/*!START_DEBUG*/
	// define console wrapper functions if applicable
	if (global.console && global.console.log) {
		if (!global.console.error) global.console.error = global.console.log;
		log_msg = function(msg) { global.console.log(msg); };
		log_error = function(msg,err) { global.console.error(msg,err); };
	}
/*!END_DEBUG*/

	// test for function
	function is_func(func) { return Object.prototype.toString.call(func) == "[object Function]"; }

	// test for array
	function is_array(arr) { return Object.prototype.toString.call(arr) == "[object Array]"; }

	// make script URL absolute/canonical
	function canonical_uri(src,base_path) {
		var absolute_regex = /^\w+\:\/\//;
		
		// is `src` is protocol-relative (begins with // or ///), prepend protocol
		if (/^\/\/\/?/.test(src)) {
			src = location.protocol + src;
		}
		// is `src` page-relative? (not an absolute URL, and not a domain-relative path, beginning with /)
		else if (!absolute_regex.test(src) && src.charAt(0) != "/") {
			// prepend `base_path`, if any
			src = (base_path || "") + src;
		}
		// make sure to return `src` as absolute
		return absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src);
	}

	// merge `source` into `target`
	function merge_objs(source,target) {
		for (var k in source) { if (source.hasOwnProperty(k)) {
			target[k] = source[k]; // TODO: does this need to be recursive for our purposes?
		}}
		return target;
	}

	// does the chain group have any ready-to-execute scripts?
	function check_chain_group_scripts_ready(chain_group) {
		var any_scripts_ready = false;
		for (var i=0; i<chain_group.scripts.length; i++) {
			if (chain_group.scripts[i].ready && chain_group.scripts[i].exec_trigger) {
				any_scripts_ready = true;
				chain_group.scripts[i].exec_trigger();
				chain_group.scripts[i].exec_trigger = null;
			}
		}
		return any_scripts_ready;
	}

	// creates a script load listener
	function create_script_load_listener(elem,registry_item,flag,onload) {
		elem.onload = elem.onreadystatechange = function() {
			if ((elem.readyState && elem.readyState != "complete" && elem.readyState != "loaded") || registry_item[flag]) return;
			elem.onload = elem.onreadystatechange = null;
			onload();
		};
	}

	// script executed handler
	function script_executed(registry_item) {
		registry_item.ready = registry_item.finished = true;
		for (var i=0; i<registry_item.finished_listeners.length; i++) {
			registry_item.finished_listeners[i]();
		}
		registry_item.ready_listeners = [];
		registry_item.finished_listeners = [];
	}

	// make the request for a scriptha
	function request_script(chain_opts,script_obj,registry_item,onload,preload_this_script) {
		// setTimeout() "yielding" prevents some weird race/crash conditions in older browsers
		setTimeout(function(){
			var script, src = script_obj.real_src, xhr;
			
			// don't proceed until `append_to` is ready to append to
			if ("item" in append_to) { // check if `append_to` ref is still a live node list
				if (!append_to[0]) { // `append_to` node not yet ready
					// try again in a little bit -- note: will re-call the anonymous function in the outer setTimeout, not the parent `request_script()`
					setTimeout(arguments.callee,25);
					return;
				}
				// reassign from live node list ref to pure node ref -- avoids nasty IE bug where changes to DOM invalidate live node lists
				append_to = append_to[0];
			}
			script = document.createElement("script");
			if (script_obj.type) script.type = script_obj.type;
			if (script_obj.charset) script.charset = script_obj.charset;
			
			// should preloading be used for this script?
			if (preload_this_script) {
				// real script preloading?
				if (real_preloading) {
					/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script preload: "+src);/*!END_DEBUG*/
					registry_item.elem = script;
					if (explicit_preloading) { // explicit preloading (aka, Zakas' proposal)
						script.preload = true;
						script.onpreload = onload;
					}
					else {
						script.onreadystatechange = function(){
							if (script.readyState == "loaded") onload();
						};
					}
					script.src = src;
					// NOTE: no append to DOM yet, appending will happen when ready to execute
				}
				// same-domain and XHR allowed? use XHR preloading
				else if (preload_this_script && src.indexOf(root_domain) == 0 && chain_opts[_UseLocalXHR]) {
					xhr = new XMLHttpRequest(); // note: IE never uses XHR (it supports true preloading), so no more need for ActiveXObject fallback for IE <= 7
					/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script preload (xhr): "+src);/*!END_DEBUG*/
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4) {
							xhr.onreadystatechange = function(){}; // fix a memory leak in IE
							registry_item.text = xhr.responseText + "\n//@ sourceURL=" + src; // http://blog.getfirebug.com/2009/08/11/give-your-eval-a-name-with-sourceurl/
							onload();
						}
					};
					xhr.open("GET",src);
					xhr.send();
				}
				// as a last resort, use cache-preloading
				else {
					/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script preload (cache): "+src);/*!END_DEBUG*/
					script.type = "text/cache-script";
					create_script_load_listener(script,registry_item,"ready",function() {
						append_to.removeChild(script);
						onload();
					});
					script.src = src;
					append_to.insertBefore(script,append_to.firstChild);
				}
			}
			// use async=false for ordered async? parallel-load-serial-execute http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
			else if (script_ordered_async) {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script load (ordered async): "+src);/*!END_DEBUG*/
				script.async = false;
				create_script_load_listener(script,registry_item,"finished",onload);
				script.src = src;
				append_to.insertBefore(script,append_to.firstChild);
			}
			// otherwise, just a normal script element
			else {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script load: "+src);/*!END_DEBUG*/
				create_script_load_listener(script,registry_item,"finished",onload);
				script.src = src;
				append_to.insertBefore(script,append_to.firstChild);
			}
		},0);
	}
		
	// create a clean instance of $LAB
	function create_sandbox() {
		var global_defaults = {},
			can_use_preloading = real_preloading || xhr_or_cache_preloading,
			queue = [],
			registry = {},
			instanceAPI
		;
		
		// global defaults
		global_defaults[_UseLocalXHR] = true;
		global_defaults[_AlwaysPreserveOrder] = false;
		global_defaults[_AllowDuplicates] = false;
		global_defaults[_CacheBust] = false;
		/*!START_DEBUG*/global_defaults[_Debug] = false;/*!END_DEBUG*/
		global_defaults[_BasePath] = "";

		// execute a script that has been preloaded already
		function execute_preloaded_script(chain_opts,script_obj,registry_item) {
			var script;
			
			function preload_execute_finished() {
				if (script != null) { // make sure this only ever fires once
					script = null;
					script_executed(registry_item);
				}
			}
			
			if (registry[script_obj.src].finished) return;
			if (!chain_opts[_AllowDuplicates]) registry[script_obj.src].finished = true;
			
			script = registry_item.elem || document.createElement("script");
			if (script_obj.type) script.type = script_obj.type;
			if (script_obj.charset) script.charset = script_obj.charset;
			create_script_load_listener(script,registry_item,"finished",preload_execute_finished);
			
			// script elem was real-preloaded
			if (registry_item.elem) {
				registry_item.elem = null;
			}
			// script was XHR preloaded
			else if (registry_item.text) {
				script.onload = script.onreadystatechange = null;	// script injection doesn't fire these events
				script.text = registry_item.text;
			}
			// script was cache-preloaded
			else {
				script.src = script_obj.real_src;
			}
			append_to.insertBefore(script,append_to.firstChild);

			// manually fire execution callback for injected scripts, since events don't fire
			if (registry_item.text) {
				preload_execute_finished();
			}
		}
	
		// process the script request setup
		function do_script(chain_opts,script_obj,chain_group,preload_this_script) {
			var registry_item,
				registry_items,
				ready_cb = function(){ script_obj.ready_cb(script_obj,function(){ execute_preloaded_script(chain_opts,script_obj,registry_item); }); },
				finished_cb = function(){ script_obj.finished_cb(script_obj,chain_group); }
			;
			
			script_obj.src = canonical_uri(script_obj.src,chain_opts[_BasePath]);
			script_obj.real_src = script_obj.src + 
				// append cache-bust param to URL?
				(chain_opts[_CacheBust] ? ((/\?.*$/.test(script_obj.src) ? "&_" : "?_") + ~~(Math.random()*1E9) + "=") : "")
			;
			
			if (!registry[script_obj.src]) registry[script_obj.src] = {items:[],finished:false};
			registry_items = registry[script_obj.src].items;

			// allowing duplicates, or is this the first recorded load of this script?
			if (chain_opts[_AllowDuplicates] || registry_items.length == 0) {
				registry_item = registry_items[registry_items.length] = {
					ready:false,
					finished:false,
					ready_listeners:[ready_cb],
					finished_listeners:[finished_cb]
				};

				request_script(chain_opts,script_obj,registry_item,
					// which callback type to pass?
					(
					 	(preload_this_script) ? // depends on script-preloading
						function(){
							registry_item.ready = true;
							for (var i=0; i<registry_item.ready_listeners.length; i++) {
								registry_item.ready_listeners[i]();
							}
							registry_item.ready_listeners = [];
						} :
						function(){ script_executed(registry_item); }
					),
					// signal if script-preloading should be used or not
					preload_this_script
				);
			}
			else {
				registry_item = registry_items[0];
				if (registry_item.finished) {
					finished_cb();
				}
				else {
					registry_item.finished_listeners.push(finished_cb);
				}
			}
		}

		// creates a closure for each separate chain spawned from this $LAB instance, to keep state cleanly separated between chains
		function create_chain() {
			var chainedAPI,
				chain_opts = merge_objs(global_defaults,{}),
				chain = [],
				exec_cursor = 0,
				scripts_currently_loading = false,
				group
			;
			
			// called when a script has finished preloading
			function chain_script_ready(script_obj,exec_trigger) {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("script preload finished: "+script_obj.real_src);/*!END_DEBUG*/
				script_obj.ready = true;
				script_obj.exec_trigger = exec_trigger;
				advance_exec_cursor(); // will only check for 'ready' scripts to be executed
			}

			// called when a script has finished executing
			function chain_script_executed(script_obj,chain_group) {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("script execution finished: "+script_obj.real_src);/*!END_DEBUG*/
				script_obj.ready = script_obj.finished = true;
				script_obj.exec_trigger = null;
				// check if chain group is all finished
				for (var i=0; i<chain_group.scripts.length; i++) {
					if (!chain_group.scripts[i].finished) return;
				}
				// chain_group is all finished if we get this far
				chain_group.finished = true;
				advance_exec_cursor();
			}

			// main driver for executing each part of the chain
			function advance_exec_cursor() {
				while (exec_cursor < chain.length) {
					if (is_func(chain[exec_cursor])) {
						/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("$LAB.wait() executing: "+chain[exec_cursor]);/*!END_DEBUG*/
						try { chain[exec_cursor++](); } catch (err) {
							/*!START_DEBUG*/if (chain_opts[_Debug]) log_error("$LAB.wait() error caught: ",err);/*!END_DEBUG*/
						}
						continue;
					}
					else if (!chain[exec_cursor].finished) {
						if (check_chain_group_scripts_ready(chain[exec_cursor])) continue;
						break;
					}
					exec_cursor++;
				}
				// we've reached the end of the chain (so far)
				if (exec_cursor == chain.length) {
					scripts_currently_loading = false;
					group = false;
				}
			}
			
			// setup next chain script group
			function init_script_chain_group() {
				if (!group || !group.scripts) {
					chain.push(group = {scripts:[],finished:true});
				}
			}

			// API for $LAB chains
			chainedAPI = {
				// start loading one or more scripts
				script:function(){
					for (var i=0; i<arguments.length; i++) {
						(function(script_obj,script_list){
							var splice_args;
							
							if (!is_array(script_obj)) {
								script_list = [script_obj];
							}
							for (var j=0; j<script_list.length; j++) {
								init_script_chain_group();
								script_obj = script_list[j];
								
								if (is_func(script_obj)) script_obj = script_obj();
								if (!script_obj) continue;
								if (is_array(script_obj)) {
									// set up an array of arguments to pass to splice()
									splice_args = [].slice.call(script_obj); // first include the actual array elements we want to splice in
									splice_args.unshift(j,1); // next, put the `index` and `howMany` parameters onto the beginning of the splice-arguments array
									[].splice.apply(script_list,splice_args); // use the splice-arguments array as arguments for splice()
									j--; // adjust `j` to account for the loop's subsequent `j++`, so that the next loop iteration uses the same `j` index value
									continue;
								}
								if (typeof script_obj == "string") script_obj = {src:script_obj};
								script_obj = merge_objs(script_obj,{
									ready:false,
									ready_cb:chain_script_ready,
									finished:false,
									finished_cb:chain_script_executed
								});
								group.finished = false;
								group.scripts.push(script_obj);
								
								do_script(chain_opts,script_obj,group,(can_use_preloading && scripts_currently_loading));
								scripts_currently_loading = true;
								
								if (chain_opts[_AlwaysPreserveOrder]) chainedAPI.wait();
							}
						})(arguments[i],arguments[i]);
					}
					return chainedAPI;
				},
				// force LABjs to pause in execution at this point in the chain, until the execution thus far finishes, before proceeding
				wait:function(){
					if (arguments.length > 0) {
						for (var i=0; i<arguments.length; i++) {
							chain.push(arguments[i]);
						}
						group = chain[chain.length-1];
					}
					else group = false;
					
					advance_exec_cursor();
					
					return chainedAPI;
				}
			};

			// the first chain link API (includes `setOptions` only this first time)
			return {
				script:chainedAPI.script, 
				wait:chainedAPI.wait, 
				setOptions:function(opts){
					merge_objs(opts,chain_opts);
					return chainedAPI;
				}
			};
		}

		// API for each initial $LAB instance (before chaining starts)
		instanceAPI = {
			// main API functions
			setGlobalDefaults:function(opts){
				merge_objs(opts,global_defaults);
				return instanceAPI;
			},
			setOptions:function(){
				return create_chain().setOptions.apply(null,arguments);
			},
			script:function(){
				return create_chain().script.apply(null,arguments);
			},
			wait:function(){
				return create_chain().wait.apply(null,arguments);
			},

			// built-in queuing for $LAB `script()` and `wait()` calls
			// useful for building up a chain programmatically across various script locations, and simulating
			// execution of the chain
			queueScript:function(){
				queue[queue.length] = {type:"script", args:[].slice.call(arguments)};
				return instanceAPI;
			},
			queueWait:function(){
				queue[queue.length] = {type:"wait", args:[].slice.call(arguments)};
				return instanceAPI;
			},
			runQueue:function(){
				var $L = instanceAPI, len=queue.length, i=len, val;
				for (;--i>=0;) {
					val = queue.shift();
					$L = $L[val.type].apply(null,val.args);
				}
				return $L;
			},

			// rollback `[global].$LAB` to what it was before this file was loaded, the return this current instance of $LAB
			noConflict:function(){
				global.$LAB = _$LAB;
				return instanceAPI;
			},

			// create another clean instance of $LAB
			sandbox:function(){
				return create_sandbox();
			}
		};

		return instanceAPI;
	}

	// create the main instance of $LAB
	global.$LAB = create_sandbox();


	/* The following "hack" was suggested by Andrea Giammarchi and adapted from: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
	   NOTE: this hack only operates in FF and then only in versions where document.readyState is not present (FF < 3.6?).
	   
	   The hack essentially "patches" the **page** that LABjs is loaded onto so that it has a proper conforming document.readyState, so that if a script which does 
	   proper and safe dom-ready detection is loaded onto a page, after dom-ready has passed, it will still be able to detect this state, by inspecting the now hacked 
	   document.readyState property. The loaded script in question can then immediately trigger any queued code executions that were waiting for the DOM to be ready. 
	   For instance, jQuery 1.4+ has been patched to take advantage of document.readyState, which is enabled by this hack. But 1.3.2 and before are **not** safe or 
	   fixed by this hack, and should therefore **not** be lazy-loaded by script loader tools such as LABjs.
	*/ 
	(function(addEvent,domLoaded,handler){
		if (document.readyState == null && document[addEvent]){
			document.readyState = "loading";
			document[addEvent](domLoaded,handler = function(){
				document.removeEventListener(domLoaded,handler,false);
				document.readyState = "complete";
			},false);
		}
	})("addEventListener","DOMContentLoaded");

})(this);
/*!
 * Amplify Core 1.0.0
 * 
 * Copyright 2011 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 * 
 * http://amplifyjs.com
 */
(function(a,b){var c=[].slice,d={},e=a.amplify={publish:function(a){var b=c.call(arguments,1),e,f,g=0,h;if(!d[a])return!0;for(f=d[a].length;g<f;g++){e=d[a][g],h=e.callback.apply(e.context,b);if(h===!1)break}return h!==!1},subscribe:function(a,b,c,e){arguments.length===3&&typeof c=="number"&&(e=c,c=b,b=null),arguments.length===2&&(c=b,b=null),e=e||10;var f=0,g=a.split(/\s/),h=g.length;for(;f<h;f++){a=g[f],d[a]||(d[a]=[]);var i=d[a].length-1,j={callback:c,context:b,priority:e};for(;i>=0;i--)if(d[a][i].priority<=e){d[a].splice(i+1,0,j);return c}d[a].unshift(j)}return c},unsubscribe:function(a,b){if(!!d[a]){var c=d[a].length,e=0;for(;e<c;e++)if(d[a][e].callback===b){d[a].splice(e,1);break}}}}})(this)
/*!
 * Amplify Store - Persistent Client-Side Storage 1.0.0
 * 
 * Copyright 2011 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 * 
 * http://amplifyjs.com
 */
(function(a,b){function e(a,e){c.addType(a,function(f,g,h){var i,j,k,l,m=g,n=(new Date).getTime();if(!f){m={},l=[],k=0;try{f=e.length;while(f=e.key(k++))d.test(f)&&(j=JSON.parse(e.getItem(f)),j.expires&&j.expires<=n?l.push(f):m[f.replace(d,"")]=j.data);while(f=l.pop())e.removeItem(f)}catch(o){}return m}f="__amplify__"+f;if(g===b){i=e.getItem(f),j=i?JSON.parse(i):{expires:-1};if(j.expires&&j.expires<=n)e.removeItem(f);else return j.data}else if(g===null)e.removeItem(f);else{j=JSON.stringify({data:g,expires:h.expires?n+h.expires:null});try{e.setItem(f,j)}catch(o){c[a]();try{e.setItem(f,j)}catch(o){throw c.error()}}}return m})}var c=a.store=function(a,b,d,e){var e=c.type;d&&d.type&&d.type in c.types&&(e=d.type);return c.types[e](a,b,d||{})};c.types={},c.type=null,c.addType=function(a,b){c.type||(c.type=a),c.types[a]=b,c[a]=function(b,d,e){e=e||{},e.type=a;return c(b,d,e)}},c.error=function(){return"amplify.store quota exceeded"};var d=/^__amplify__/;for(var f in{localStorage:1,sessionStorage:1})try{window[f].getItem&&e(f,window[f])}catch(g){}if(window.globalStorage)try{e("globalStorage",window.globalStorage[window.location.hostname]),c.type==="sessionStorage"&&(c.type="globalStorage")}catch(g){}(function(){if(!c.types.localStorage){var a=document.createElement("div"),d="amplify";a.style.display="none",document.getElementsByTagName("head")[0].appendChild(a),a.addBehavior&&(a.addBehavior("#default#userdata"),c.addType("userData",function(e,f,g){a.load(d);var h,i,j,k,l,m=f,n=(new Date).getTime();if(!e){m={},l=[],k=0;while(h=a.XMLDocument.documentElement.attributes[k++])i=JSON.parse(h.value),i.expires&&i.expires<=n?l.push(h.name):m[h.name]=i.data;while(e=l.pop())a.removeAttribute(e);a.save(d);return m}e=e.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-");if(f===b){h=a.getAttribute(e),i=h?JSON.parse(h):{expires:-1};if(i.expires&&i.expires<=n)a.removeAttribute(e);else return i.data}else f===null?a.removeAttribute(e):(j=a.getAttribute(e),i=JSON.stringify({data:f,expires:g.expires?n+g.expires:null}),a.setAttribute(e,i));try{a.save(d)}catch(o){j===null?a.removeAttribute(e):a.setAttribute(e,j),c.userData();try{a.setAttribute(e,i),a.save(d)}catch(o){j===null?a.removeAttribute(e):a.setAttribute(e,j);throw c.error()}}return m}))}})(),function(){function d(a){return a===b?b:JSON.parse(JSON.stringify(a))}var a={};c.addType("memory",function(c,e,f){if(!c)return d(a);if(e===b)return d(a[c]);if(e===null){delete a[c];return null}a[c]=e,f.expires&&setTimeout(function(){delete a[c]},f.expires);return e})}()})(this.amplify=this.amplify||{})
Date.CultureInfo={name:"es-PA",englishName:"Spanish (Panama)",nativeName:"Español (Panamá)",dayNames:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],abbreviatedDayNames:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],shortestDayNames:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],firstLetterDayNames:["d","l","m","m","j","v","s"],monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],abbreviatedMonthNames:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],amDesignator:"a.m.",pmDesignator:"p.m.",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"MM/dd/yyyy",longDate:"dddd, dd' de 'MMMM' de 'yyyy",shortTime:"hh:mm tt",longTime:"hh:mm:ss tt",fullDateTime:"dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"dd MMMM",yearMonth:"MMMM' de 'yyyy"},regexPatterns:{jan:/^ene(ro)?/i,feb:/^feb(rero)?/i,mar:/^mar(zo)?/i,apr:/^abr(il)?/i,may:/^may(o)?/i,jun:/^jun(io)?/i,jul:/^jul(io)?/i,aug:/^ago(sto)?/i,sep:/^sep(tiembre)?/i,oct:/^oct(ubre)?/i,nov:/^nov(iembre)?/i,dec:/^dic(iembre)?/i,sun:/^do(m(ingo)?)?/i,mon:/^lu(n(es)?)?/i,tue:/^ma(r(tes)?)?/i,wed:/^mi(�(rcoles)?)?/i,thu:/^ju(e(ves)?)?/i,fri:/^vi(e(rnes)?)?/i,sat:/^s�(b(ado)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]};
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,p=function(s,l){if(!l){l=2;}
return("000"+s).slice(l*-1);};$P.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};$P.setTimeToNow=function(){var n=new Date();this.setHours(n.getHours());this.setMinutes(n.getMinutes());this.setSeconds(n.getSeconds());this.setMilliseconds(n.getMilliseconds());return this;};$D.today=function(){return new Date().clearTime();};$D.compare=function(date1,date2){if(isNaN(date1)||isNaN(date2)){throw new Error(date1+" - "+date2);}else if(date1 instanceof Date&&date2 instanceof Date){return(date1<date2)?-1:(date1>date2)?1:0;}else{throw new TypeError(date1+" - "+date2);}};$D.equals=function(date1,date2){return(date1.compareTo(date2)===0);};$D.getDayNumberFromName=function(name){var n=$C.dayNames,m=$C.abbreviatedDayNames,o=$C.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s||o[i].toLowerCase()==s){return i;}}
return-1;};$D.getMonthNumberFromName=function(name){var n=$C.monthNames,m=$C.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};$D.isLeapYear=function(year){return((year%4===0&&year%100!==0)||year%400===0);};$D.getDaysInMonth=function(year,month){return[31,($D.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};$D.getTimezoneAbbreviation=function(offset){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].offset===offset){return z[i].name;}}
return null;};$D.getTimezoneOffset=function(name){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].name===name.toUpperCase()){return z[i].offset;}}
return null;};$P.clone=function(){return new Date(this.getTime());};$P.compareTo=function(date){return Date.compare(this,date);};$P.equals=function(date){return Date.equals(this,date||new Date());};$P.between=function(start,end){return this.getTime()>=start.getTime()&&this.getTime()<=end.getTime();};$P.isAfter=function(date){return this.compareTo(date||new Date())===1;};$P.isBefore=function(date){return(this.compareTo(date||new Date())===-1);};$P.isToday=function(){return this.isSameDay(new Date());};$P.isSameDay=function(date){return this.clone().clearTime().equals(date.clone().clearTime());};$P.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};$P.addSeconds=function(value){return this.addMilliseconds(value*1000);};$P.addMinutes=function(value){return this.addMilliseconds(value*60000);};$P.addHours=function(value){return this.addMilliseconds(value*3600000);};$P.addDays=function(value){this.setDate(this.getDate()+value);return this;};$P.addWeeks=function(value){return this.addDays(value*7);};$P.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,$D.getDaysInMonth(this.getFullYear(),this.getMonth())));return this;};$P.addYears=function(value){return this.addMonths(value*12);};$P.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.milliseconds){this.addMilliseconds(x.milliseconds);}
if(x.seconds){this.addSeconds(x.seconds);}
if(x.minutes){this.addMinutes(x.minutes);}
if(x.hours){this.addHours(x.hours);}
if(x.weeks){this.addWeeks(x.weeks);}
if(x.months){this.addMonths(x.months);}
if(x.years){this.addYears(x.years);}
if(x.days){this.addDays(x.days);}
return this;};var $y,$m,$d;$P.getWeek=function(){var a,b,c,d,e,f,g,n,s,w;$y=(!$y)?this.getFullYear():$y;$m=(!$m)?this.getMonth()+1:$m;$d=(!$d)?this.getDate():$d;if($m<=2){a=$y-1;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=0;f=$d-1+(31*($m-1));}else{a=$y;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=s+1;f=$d+((153*($m-3)+2)/5)+58+s;}
g=(a+b)%7;d=(f+g-e)%7;n=(f+3-d)|0;if(n<0){w=53-((g-s)/5|0);}else if(n>364+s){w=1;}else{w=(n/7|0)+1;}
$y=$m=$d=null;return w;};$P.getISOWeek=function(){$y=this.getUTCFullYear();$m=this.getUTCMonth()+1;$d=this.getUTCDate();return p(this.getWeek());};$P.setWeek=function(n){return this.moveToDayOfWeek(1).addWeeks(n-this.getWeek());};$D._validate=function(n,min,max,name){if(typeof n=="undefined"){return false;}else if(typeof n!="number"){throw new TypeError(n+" is not a Number.");}else if(n<min||n>max){throw new RangeError(n+" is not a valid value for "+name+".");}
return true;};$D.validateMillisecond=function(value){return $D._validate(value,0,999,"millisecond");};$D.validateSecond=function(value){return $D._validate(value,0,59,"second");};$D.validateMinute=function(value){return $D._validate(value,0,59,"minute");};$D.validateHour=function(value){return $D._validate(value,0,23,"hour");};$D.validateDay=function(value,year,month){return $D._validate(value,1,$D.getDaysInMonth(year,month),"day");};$D.validateMonth=function(value){return $D._validate(value,0,11,"month");};$D.validateYear=function(value){return $D._validate(value,0,9999,"year");};$P.set=function(config){if($D.validateMillisecond(config.millisecond)){this.addMilliseconds(config.millisecond-this.getMilliseconds());}
if($D.validateSecond(config.second)){this.addSeconds(config.second-this.getSeconds());}
if($D.validateMinute(config.minute)){this.addMinutes(config.minute-this.getMinutes());}
if($D.validateHour(config.hour)){this.addHours(config.hour-this.getHours());}
if($D.validateMonth(config.month)){this.addMonths(config.month-this.getMonth());}
if($D.validateYear(config.year)){this.addYears(config.year-this.getFullYear());}
if($D.validateDay(config.day,this.getFullYear(),this.getMonth())){this.addDays(config.day-this.getDate());}
if(config.timezone){this.setTimezone(config.timezone);}
if(config.timezoneOffset){this.setTimezoneOffset(config.timezoneOffset);}
if(config.week&&$D._validate(config.week,0,53,"week")){this.setWeek(config.week);}
return this;};$P.moveToFirstDayOfMonth=function(){return this.set({day:1});};$P.moveToLastDayOfMonth=function(){return this.set({day:$D.getDaysInMonth(this.getFullYear(),this.getMonth())});};$P.moveToNthOccurrence=function(dayOfWeek,occurrence){var shift=0;if(occurrence>0){shift=occurrence-1;}
else if(occurrence===-1){this.moveToLastDayOfMonth();if(this.getDay()!==dayOfWeek){this.moveToDayOfWeek(dayOfWeek,-1);}
return this;}
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek,+1).addWeeks(shift);};$P.moveToDayOfWeek=function(dayOfWeek,orient){var diff=(dayOfWeek-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};$P.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};$P.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1;};$P.getTimezone=function(){return $D.getTimezoneAbbreviation(this.getUTCOffset());};$P.setTimezoneOffset=function(offset){var here=this.getTimezoneOffset(),there=Number(offset)*-6/10;return this.addMinutes(there-here);};$P.setTimezone=function(offset){return this.setTimezoneOffset($D.getTimezoneOffset(offset));};$P.hasDaylightSavingTime=function(){return(Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.isDaylightSavingTime=function(){return(this.hasDaylightSavingTime()&&new Date().getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r.charAt(0)+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};$P.getElapsed=function(date){return(date||new Date())-this;};if(!$P.toISOString){$P.toISOString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z"';};}
$P._toString=$P.toString;$P.toString=function(format){var x=this;if(format&&format.length==1){var c=$C.formatPatterns;x.t=x.toString;switch(format){case"d":return x.t(c.shortDate);case"D":return x.t(c.longDate);case"F":return x.t(c.fullDateTime);case"m":return x.t(c.monthDay);case"r":return x.t(c.rfc1123);case"s":return x.t(c.sortableDateTime);case"t":return x.t(c.shortTime);case"T":return x.t(c.longTime);case"u":return x.t(c.universalSortableDateTime);case"y":return x.t(c.yearMonth);}}
var ord=function(n){switch(n*1){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};return format?format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(m){if(m.charAt(0)==="\\"){return m.replace("\\","");}
x.h=x.getHours;switch(m){case"hh":return p(x.h()<13?(x.h()===0?12:x.h()):(x.h()-12));case"h":return x.h()<13?(x.h()===0?12:x.h()):(x.h()-12);case"HH":return p(x.h());case"H":return x.h();case"mm":return p(x.getMinutes());case"m":return x.getMinutes();case"ss":return p(x.getSeconds());case"s":return x.getSeconds();case"yyyy":return p(x.getFullYear(),4);case"yy":return p(x.getFullYear());case"dddd":return $C.dayNames[x.getDay()];case"ddd":return $C.abbreviatedDayNames[x.getDay()];case"dd":return p(x.getDate());case"d":return x.getDate();case"MMMM":return $C.monthNames[x.getMonth()];case"MMM":return $C.abbreviatedMonthNames[x.getMonth()];case"MM":return p((x.getMonth()+1));case"M":return x.getMonth()+1;case"t":return x.h()<12?$C.amDesignator.substring(0,1):$C.pmDesignator.substring(0,1);case"tt":return x.h()<12?$C.amDesignator:$C.pmDesignator;case"S":return ord(x.getDate());default:return m;}}):this._toString();};}());
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype;$P._orient=+1;$P._nth=null;$P._is=false;$P._same=false;$P._isSecond=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return $D.today().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return $D.today().last();};$P.is=function(){this._is=true;return this;};$P.same=function(){this._same=true;this._isSecond=false;return this;};$P.today=function(){return this.same().day();};$P.weekday=function(){if(this._is){this._is=false;return(!this.is().sat()&&!this.is().sun());}
return false;};$P.at=function(time){return(typeof time==="string")?$D.parse(this.toString("d")+" "+time):this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),pxf=("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/),nth=("final first second third fourth fifth").split(/\s/),de;$P.toObject=function(){var o={};for(var i=0;i<px.length;i++){o[px[i].toLowerCase()]=this["get"+pxf[i]]();}
return o;};$D.fromObject=function(config){config.week=null;return Date.today().set(config);};var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+$D.getMonthName(temp.getMonth())+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.today(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){$D[dx[i].toUpperCase()]=$D[dx[i].toUpperCase().substring(0,3)]=i;$D[dx[i]]=$D[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.today().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){$D[mx[j].toUpperCase()]=$D[mx[j].toUpperCase().substring(0,3)]=j;$D[mx[j]]=$D[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(this._same){this._same=this._is=false;var o1=this.toObject(),o2=(arguments[0]||new Date()).toObject(),v="",k=j.toLowerCase();for(var m=(px.length-1);m>-1;m--){v=px[m].toLowerCase();if(o1[v]!=o2[v]){return false;}
if(k==v){break;}}
return true;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
$P._ss=ef("Second");var nthfn=function(n){return function(dayOfWeek){if(this._same){return this._ss(arguments[0]);}
if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}}());
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo;var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};$D.Grammar={};$D.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=(s.length==3)?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4:Number(s)-1;};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<$C.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
var now=new Date();if((this.hour||this.minute)&&(!this.month&&!this.year&&!this.day)){this.day=now.getDate();}
if(!this.year){this.year=now.getFullYear();}
if(!this.month&&this.month!==0){this.month=now.getMonth();}
if(!this.day){this.day=1;}
if(!this.hour){this.hour=0;}
if(!this.minute){this.minute=0;}
if(!this.second){this.second=0;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.day>$D.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
var today=$D.today();if(this.now&&!this.unit&&!this.operator){return new Date();}else if(this.now){today=new Date();}
var expression=!!(this.days&&this.days!==null||this.orient||this.operator);var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(!this.now&&"hour minute second".indexOf(this.unit)!=-1){today.setTimeToNow();}
if(this.month||this.month===0){if("year day hour minute second".indexOf(this.unit)!=-1){this.value=this.month+1;this.month=null;expression=true;}}
if(!expression&&this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(!this.month){this.month=temp.getMonth();}
this.year=temp.getFullYear();}
if(expression&&this.weekday&&this.unit!="month"){this.unit="day";gap=($D.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month&&this.unit=="day"&&this.operator){this.value=(this.month+1);this.month=null;}
if(this.value!=null&&this.month!=null&&this.year!=null){this.day=this.value*1;}
if(this.month&&!this.day&&this.value){today.set({day:this.value*1});if(!expression){this.day=this.value*1;}}
if(!this.month&&this.value&&this.unit=="month"&&!this.now){this.month=this.value;expression=true;}
if(expression&&(this.month||this.month===0)&&this.unit!="year"){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(!this.value&&this.operator&&this.operator!==null&&this[this.unit+"s"]&&this[this.unit+"s"]!==null){this[this.unit+"s"]=this[this.unit+"s"]+((this.operator=="add")?1:-1)+(this.value||0)*orient;}else if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
this[this.unit+"s"]=this.value*orient;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(temp.getMonth()!==today.getMonth()){this.month=temp.getMonth();}}
if((this.month||this.month===0)&&!this.day){this.day=1;}
if(!this.orient&&!this.operator&&this.unit=="week"&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value);}
if(expression&&this.timezone&&this.day&&this.days){this.day=this.days;}
return(expression)?today.add(this):today.set(this);}};var _=$D.Parsing.Operators,g=$D.Grammar,t=$D.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|@|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=$C.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken($C.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.m,g.s],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("second minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[$C.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw $D.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"","yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};$D._parse=$D.parse;$D.parse=function(s){var r=null;if(!s){return null;}
if(s instanceof Date){return s;}
try{r=$D.Grammar.start.call({},s.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};$D.getParseFunction=function(fx){var fn=$D.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};$D.parseExact=function(s,fx){return $D.getParseFunction(fx)(s);};}());
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]};
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,p=function(s,l){if(!l){l=2;}
return("000"+s).slice(l*-1);};$P.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};$P.setTimeToNow=function(){var n=new Date();this.setHours(n.getHours());this.setMinutes(n.getMinutes());this.setSeconds(n.getSeconds());this.setMilliseconds(n.getMilliseconds());return this;};$D.today=function(){return new Date().clearTime();};$D.compare=function(date1,date2){if(isNaN(date1)||isNaN(date2)){throw new Error(date1+" - "+date2);}else if(date1 instanceof Date&&date2 instanceof Date){return(date1<date2)?-1:(date1>date2)?1:0;}else{throw new TypeError(date1+" - "+date2);}};$D.equals=function(date1,date2){return(date1.compareTo(date2)===0);};$D.getDayNumberFromName=function(name){var n=$C.dayNames,m=$C.abbreviatedDayNames,o=$C.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s||o[i].toLowerCase()==s){return i;}}
return-1;};$D.getMonthNumberFromName=function(name){var n=$C.monthNames,m=$C.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};$D.isLeapYear=function(year){return((year%4===0&&year%100!==0)||year%400===0);};$D.getDaysInMonth=function(year,month){return[31,($D.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};$D.getTimezoneAbbreviation=function(offset){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].offset===offset){return z[i].name;}}
return null;};$D.getTimezoneOffset=function(name){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].name===name.toUpperCase()){return z[i].offset;}}
return null;};$P.clone=function(){return new Date(this.getTime());};$P.compareTo=function(date){return Date.compare(this,date);};$P.equals=function(date){return Date.equals(this,date||new Date());};$P.between=function(start,end){return this.getTime()>=start.getTime()&&this.getTime()<=end.getTime();};$P.isAfter=function(date){return this.compareTo(date||new Date())===1;};$P.isBefore=function(date){return(this.compareTo(date||new Date())===-1);};$P.isToday=function(){return this.isSameDay(new Date());};$P.isSameDay=function(date){return this.clone().clearTime().equals(date.clone().clearTime());};$P.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};$P.addSeconds=function(value){return this.addMilliseconds(value*1000);};$P.addMinutes=function(value){return this.addMilliseconds(value*60000);};$P.addHours=function(value){return this.addMilliseconds(value*3600000);};$P.addDays=function(value){this.setDate(this.getDate()+value);return this;};$P.addWeeks=function(value){return this.addDays(value*7);};$P.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,$D.getDaysInMonth(this.getFullYear(),this.getMonth())));return this;};$P.addYears=function(value){return this.addMonths(value*12);};$P.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.milliseconds){this.addMilliseconds(x.milliseconds);}
if(x.seconds){this.addSeconds(x.seconds);}
if(x.minutes){this.addMinutes(x.minutes);}
if(x.hours){this.addHours(x.hours);}
if(x.weeks){this.addWeeks(x.weeks);}
if(x.months){this.addMonths(x.months);}
if(x.years){this.addYears(x.years);}
if(x.days){this.addDays(x.days);}
return this;};var $y,$m,$d;$P.getWeek=function(){var a,b,c,d,e,f,g,n,s,w;$y=(!$y)?this.getFullYear():$y;$m=(!$m)?this.getMonth()+1:$m;$d=(!$d)?this.getDate():$d;if($m<=2){a=$y-1;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=0;f=$d-1+(31*($m-1));}else{a=$y;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=s+1;f=$d+((153*($m-3)+2)/5)+58+s;}
g=(a+b)%7;d=(f+g-e)%7;n=(f+3-d)|0;if(n<0){w=53-((g-s)/5|0);}else if(n>364+s){w=1;}else{w=(n/7|0)+1;}
$y=$m=$d=null;return w;};$P.getISOWeek=function(){$y=this.getUTCFullYear();$m=this.getUTCMonth()+1;$d=this.getUTCDate();return p(this.getWeek());};$P.setWeek=function(n){return this.moveToDayOfWeek(1).addWeeks(n-this.getWeek());};$D._validate=function(n,min,max,name){if(typeof n=="undefined"){return false;}else if(typeof n!="number"){throw new TypeError(n+" is not a Number.");}else if(n<min||n>max){throw new RangeError(n+" is not a valid value for "+name+".");}
return true;};$D.validateMillisecond=function(value){return $D._validate(value,0,999,"millisecond");};$D.validateSecond=function(value){return $D._validate(value,0,59,"second");};$D.validateMinute=function(value){return $D._validate(value,0,59,"minute");};$D.validateHour=function(value){return $D._validate(value,0,23,"hour");};$D.validateDay=function(value,year,month){return $D._validate(value,1,$D.getDaysInMonth(year,month),"day");};$D.validateMonth=function(value){return $D._validate(value,0,11,"month");};$D.validateYear=function(value){return $D._validate(value,0,9999,"year");};$P.set=function(config){if($D.validateMillisecond(config.millisecond)){this.addMilliseconds(config.millisecond-this.getMilliseconds());}
if($D.validateSecond(config.second)){this.addSeconds(config.second-this.getSeconds());}
if($D.validateMinute(config.minute)){this.addMinutes(config.minute-this.getMinutes());}
if($D.validateHour(config.hour)){this.addHours(config.hour-this.getHours());}
if($D.validateMonth(config.month)){this.addMonths(config.month-this.getMonth());}
if($D.validateYear(config.year)){this.addYears(config.year-this.getFullYear());}
if($D.validateDay(config.day,this.getFullYear(),this.getMonth())){this.addDays(config.day-this.getDate());}
if(config.timezone){this.setTimezone(config.timezone);}
if(config.timezoneOffset){this.setTimezoneOffset(config.timezoneOffset);}
if(config.week&&$D._validate(config.week,0,53,"week")){this.setWeek(config.week);}
return this;};$P.moveToFirstDayOfMonth=function(){return this.set({day:1});};$P.moveToLastDayOfMonth=function(){return this.set({day:$D.getDaysInMonth(this.getFullYear(),this.getMonth())});};$P.moveToNthOccurrence=function(dayOfWeek,occurrence){var shift=0;if(occurrence>0){shift=occurrence-1;}
else if(occurrence===-1){this.moveToLastDayOfMonth();if(this.getDay()!==dayOfWeek){this.moveToDayOfWeek(dayOfWeek,-1);}
return this;}
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek,+1).addWeeks(shift);};$P.moveToDayOfWeek=function(dayOfWeek,orient){var diff=(dayOfWeek-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};$P.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};$P.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1;};$P.getTimezone=function(){return $D.getTimezoneAbbreviation(this.getUTCOffset());};$P.setTimezoneOffset=function(offset){var here=this.getTimezoneOffset(),there=Number(offset)*-6/10;return this.addMinutes(there-here);};$P.setTimezone=function(offset){return this.setTimezoneOffset($D.getTimezoneOffset(offset));};$P.hasDaylightSavingTime=function(){return(Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.isDaylightSavingTime=function(){return(this.hasDaylightSavingTime()&&new Date().getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r.charAt(0)+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};$P.getElapsed=function(date){return(date||new Date())-this;};if(!$P.toISOString){$P.toISOString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z"';};}
$P._toString=$P.toString;$P.toString=function(format){var x=this;if(format&&format.length==1){var c=$C.formatPatterns;x.t=x.toString;switch(format){case"d":return x.t(c.shortDate);case"D":return x.t(c.longDate);case"F":return x.t(c.fullDateTime);case"m":return x.t(c.monthDay);case"r":return x.t(c.rfc1123);case"s":return x.t(c.sortableDateTime);case"t":return x.t(c.shortTime);case"T":return x.t(c.longTime);case"u":return x.t(c.universalSortableDateTime);case"y":return x.t(c.yearMonth);}}
var ord=function(n){switch(n*1){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};return format?format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(m){if(m.charAt(0)==="\\"){return m.replace("\\","");}
x.h=x.getHours;switch(m){case"hh":return p(x.h()<13?(x.h()===0?12:x.h()):(x.h()-12));case"h":return x.h()<13?(x.h()===0?12:x.h()):(x.h()-12);case"HH":return p(x.h());case"H":return x.h();case"mm":return p(x.getMinutes());case"m":return x.getMinutes();case"ss":return p(x.getSeconds());case"s":return x.getSeconds();case"yyyy":return p(x.getFullYear(),4);case"yy":return p(x.getFullYear());case"dddd":return $C.dayNames[x.getDay()];case"ddd":return $C.abbreviatedDayNames[x.getDay()];case"dd":return p(x.getDate());case"d":return x.getDate();case"MMMM":return $C.monthNames[x.getMonth()];case"MMM":return $C.abbreviatedMonthNames[x.getMonth()];case"MM":return p((x.getMonth()+1));case"M":return x.getMonth()+1;case"t":return x.h()<12?$C.amDesignator.substring(0,1):$C.pmDesignator.substring(0,1);case"tt":return x.h()<12?$C.amDesignator:$C.pmDesignator;case"S":return ord(x.getDate());default:return m;}}):this._toString();};}());
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype;$P._orient=+1;$P._nth=null;$P._is=false;$P._same=false;$P._isSecond=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return $D.today().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return $D.today().last();};$P.is=function(){this._is=true;return this;};$P.same=function(){this._same=true;this._isSecond=false;return this;};$P.today=function(){return this.same().day();};$P.weekday=function(){if(this._is){this._is=false;return(!this.is().sat()&&!this.is().sun());}
return false;};$P.at=function(time){return(typeof time==="string")?$D.parse(this.toString("d")+" "+time):this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),pxf=("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/),nth=("final first second third fourth fifth").split(/\s/),de;$P.toObject=function(){var o={};for(var i=0;i<px.length;i++){o[px[i].toLowerCase()]=this["get"+pxf[i]]();}
return o;};$D.fromObject=function(config){config.week=null;return Date.today().set(config);};var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+$D.getMonthName(temp.getMonth())+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.today(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){$D[dx[i].toUpperCase()]=$D[dx[i].toUpperCase().substring(0,3)]=i;$D[dx[i]]=$D[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.today().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){$D[mx[j].toUpperCase()]=$D[mx[j].toUpperCase().substring(0,3)]=j;$D[mx[j]]=$D[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(this._same){this._same=this._is=false;var o1=this.toObject(),o2=(arguments[0]||new Date()).toObject(),v="",k=j.toLowerCase();for(var m=(px.length-1);m>-1;m--){v=px[m].toLowerCase();if(o1[v]!=o2[v]){return false;}
if(k==v){break;}}
return true;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
$P._ss=ef("Second");var nthfn=function(n){return function(dayOfWeek){if(this._same){return this._ss(arguments[0]);}
if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}}());
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo;var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};$D.Grammar={};$D.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=(s.length==3)?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4:Number(s)-1;};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<$C.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
var now=new Date();if((this.hour||this.minute)&&(!this.month&&!this.year&&!this.day)){this.day=now.getDate();}
if(!this.year){this.year=now.getFullYear();}
if(!this.month&&this.month!==0){this.month=now.getMonth();}
if(!this.day){this.day=1;}
if(!this.hour){this.hour=0;}
if(!this.minute){this.minute=0;}
if(!this.second){this.second=0;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.day>$D.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
var today=$D.today();if(this.now&&!this.unit&&!this.operator){return new Date();}else if(this.now){today=new Date();}
var expression=!!(this.days&&this.days!==null||this.orient||this.operator);var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(!this.now&&"hour minute second".indexOf(this.unit)!=-1){today.setTimeToNow();}
if(this.month||this.month===0){if("year day hour minute second".indexOf(this.unit)!=-1){this.value=this.month+1;this.month=null;expression=true;}}
if(!expression&&this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(!this.month){this.month=temp.getMonth();}
this.year=temp.getFullYear();}
if(expression&&this.weekday&&this.unit!="month"){this.unit="day";gap=($D.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month&&this.unit=="day"&&this.operator){this.value=(this.month+1);this.month=null;}
if(this.value!=null&&this.month!=null&&this.year!=null){this.day=this.value*1;}
if(this.month&&!this.day&&this.value){today.set({day:this.value*1});if(!expression){this.day=this.value*1;}}
if(!this.month&&this.value&&this.unit=="month"&&!this.now){this.month=this.value;expression=true;}
if(expression&&(this.month||this.month===0)&&this.unit!="year"){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(!this.value&&this.operator&&this.operator!==null&&this[this.unit+"s"]&&this[this.unit+"s"]!==null){this[this.unit+"s"]=this[this.unit+"s"]+((this.operator=="add")?1:-1)+(this.value||0)*orient;}else if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
this[this.unit+"s"]=this.value*orient;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(temp.getMonth()!==today.getMonth()){this.month=temp.getMonth();}}
if((this.month||this.month===0)&&!this.day){this.day=1;}
if(!this.orient&&!this.operator&&this.unit=="week"&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value);}
if(expression&&this.timezone&&this.day&&this.days){this.day=this.days;}
return(expression)?today.add(this):today.set(this);}};var _=$D.Parsing.Operators,g=$D.Grammar,t=$D.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|@|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=$C.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken($C.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.m,g.s],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("second minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[$C.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw $D.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"","yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};$D._parse=$D.parse;$D.parse=function(s){var r=null;if(!s){return null;}
if(s instanceof Date){return s;}
try{r=$D.Grammar.start.call({},s.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};$D.getParseFunction=function(fx){var fn=$D.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};$D.parseExact=function(s,fx){return $D.getParseFunction(fx)(s);};}());
(function(d){d.jqplot.BarRenderer=function(){d.jqplot.LineRenderer.call(this)};d.jqplot.BarRenderer.prototype=new d.jqplot.LineRenderer();d.jqplot.BarRenderer.prototype.constructor=d.jqplot.BarRenderer;d.jqplot.BarRenderer.prototype.init=function(n,p){this.barPadding=8;this.barMargin=10;this.barDirection="vertical";this.barWidth=null;this.shadowOffset=2;this.shadowDepth=5;this.shadowAlpha=0.08;this.waterfall=false;this.groups=1;this.varyBarColor=false;this.highlightMouseOver=true;this.highlightMouseDown=false;this.highlightColors=[];this._type="bar";if(n.highlightMouseDown&&n.highlightMouseOver==null){n.highlightMouseOver=false}d.extend(true,this,n);this.fill=true;if(this.waterfall){this.fillToZero=false;this.disableStack=true}if(this.barDirection=="vertical"){this._primaryAxis="_xaxis";this._stackAxis="y";this.fillAxis="y"}else{this._primaryAxis="_yaxis";this._stackAxis="x";this.fillAxis="x"}this._highlightedPoint=null;this._plotSeriesInfo=null;this._dataColors=[];this._barPoints=[];var o={lineJoin:"miter",lineCap:"round",fill:true,isarc:false,strokeStyle:this.color,fillStyle:this.color,closePath:this.fill};this.renderer.shapeRenderer.init(o);var m={lineJoin:"miter",lineCap:"round",fill:true,isarc:false,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,closePath:this.fill};this.renderer.shadowRenderer.init(m);p.postInitHooks.addOnce(h);p.postDrawHooks.addOnce(i);p.eventListenerHooks.addOnce("jqplotMouseMove",b);p.eventListenerHooks.addOnce("jqplotMouseDown",a);p.eventListenerHooks.addOnce("jqplotMouseUp",k);p.eventListenerHooks.addOnce("jqplotClick",e);p.eventListenerHooks.addOnce("jqplotRightClick",l)};function g(s,o,n,v){if(this.rendererOptions.barDirection=="horizontal"){this._stackAxis="x";this._primaryAxis="_yaxis"}if(this.rendererOptions.waterfall==true){this._data=d.extend(true,[],this.data);var r=0;var t=(!this.rendererOptions.barDirection||this.rendererOptions.barDirection=="vertical")?1:0;for(var p=0;p<this.data.length;p++){r+=this.data[p][t];if(p>0){this.data[p][t]+=this.data[p-1][t]}}this.data[this.data.length]=(t==1)?[this.data.length+1,r]:[r,this.data.length+1];this._data[this._data.length]=(t==1)?[this._data.length+1,r]:[r,this._data.length+1]}if(this.rendererOptions.groups>1){this.breakOnNull=true;var m=this.data.length;var u=parseInt(m/this.rendererOptions.groups,10);var q=0;for(var p=u;p<m;p+=u){this.data.splice(p+q,0,[null,null]);q++}for(p=0;p<this.data.length;p++){if(this._primaryAxis=="_xaxis"){this.data[p][0]=p+1}else{this.data[p][1]=p+1}}}}d.jqplot.preSeriesInitHooks.push(g);d.jqplot.BarRenderer.prototype.calcSeriesNumbers=function(){var q=0;var r=0;var p=this[this._primaryAxis];var o,n,t;for(var m=0;m<p._series.length;m++){n=p._series[m];if(n===this){t=m}if(n.renderer.constructor==d.jqplot.BarRenderer){q+=n.data.length;r+=1}}return[q,r,t]};d.jqplot.BarRenderer.prototype.setBarWidth=function(){var p;var m=0;var n=0;var r=this[this._primaryAxis];var w,q,u;var v=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);m=v[0];n=v[1];var t=r.numberTicks;var o=(t-1)/2;if(r.name=="xaxis"||r.name=="x2axis"){if(this._stack){this.barWidth=(r._offsets.max-r._offsets.min)/m*n-this.barMargin}else{this.barWidth=((r._offsets.max-r._offsets.min)/o-this.barPadding*(n-1)-this.barMargin*2)/n}}else{if(this._stack){this.barWidth=(r._offsets.min-r._offsets.max)/m*n-this.barMargin}else{this.barWidth=((r._offsets.min-r._offsets.max)/o-this.barPadding*(n-1)-this.barMargin*2)/n}}return[m,n]};function f(n){var p=[];for(var r=0;r<n.length;r++){var q=d.jqplot.getColorComponents(n[r]);var m=[q[0],q[1],q[2]];var s=m[0]+m[1]+m[2];for(var o=0;o<3;o++){m[o]=(s>570)?m[o]*0.8:m[o]+0.3*(255-m[o]);m[o]=parseInt(m[o],10)}p.push("rgb("+m[0]+","+m[1]+","+m[2]+")")}return p}d.jqplot.BarRenderer.prototype.draw=function(D,J,p){var G;var z=d.extend({},p);var u=(z.shadow!=undefined)?z.shadow:this.shadow;var M=(z.showLine!=undefined)?z.showLine:this.showLine;var E=(z.fill!=undefined)?z.fill:this.fill;var o=this.xaxis;var H=this.yaxis;var x=this._xaxis.series_u2p;var I=this._yaxis.series_u2p;var C,B;this._dataColors=[];this._barPoints=[];if(this.barWidth==null){this.renderer.setBarWidth.call(this)}var L=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);var w=L[0];var v=L[1];var r=L[2];var F=[];if(this._stack){this._barNudge=0}else{this._barNudge=(-Math.abs(v/2-0.5)+r)*(this.barWidth+this.barPadding)}if(M){var t=new d.jqplot.ColorGenerator(this.negativeSeriesColors);var A=new d.jqplot.ColorGenerator(this.seriesColors);var K=t.get(this.index);if(!this.useNegativeColors){K=z.fillStyle}var s=z.fillStyle;var q;var N;var n;if(this.barDirection=="vertical"){for(var G=0;G<J.length;G++){if(this.data[G][1]==null){continue}F=[];q=J[G][0]+this._barNudge;n;if(this._stack&&this._prevGridData.length){n=this._prevGridData[G][1]}else{if(this.fillToZero){n=this._yaxis.series_u2p(0)}else{if(this.waterfall&&G>0&&G<this.gridData.length-1){n=this.gridData[G-1][1]}else{if(this.waterfall&&G==0&&G<this.gridData.length-1){if(this._yaxis.min<=0&&this._yaxis.max>=0){n=this._yaxis.series_u2p(0)}else{if(this._yaxis.min>0){n=D.canvas.height}else{n=0}}}else{if(this.waterfall&&G==this.gridData.length-1){if(this._yaxis.min<=0&&this._yaxis.max>=0){n=this._yaxis.series_u2p(0)}else{if(this._yaxis.min>0){n=D.canvas.height}else{n=0}}}else{n=D.canvas.height}}}}}if((this.fillToZero&&this._plotData[G][1]<0)||(this.waterfall&&this._data[G][1]<0)){if(this.varyBarColor&&!this._stack){if(this.useNegativeColors){z.fillStyle=t.next()}else{z.fillStyle=A.next()}}else{z.fillStyle=K}}else{if(this.varyBarColor&&!this._stack){z.fillStyle=A.next()}else{z.fillStyle=s}}if(!this.fillToZero||this._plotData[G][1]>=0){F.push([q-this.barWidth/2,n]);F.push([q-this.barWidth/2,J[G][1]]);F.push([q+this.barWidth/2,J[G][1]]);F.push([q+this.barWidth/2,n])}else{F.push([q-this.barWidth/2,J[G][1]]);F.push([q-this.barWidth/2,n]);F.push([q+this.barWidth/2,n]);F.push([q+this.barWidth/2,J[G][1]])}this._barPoints.push(F);if(u&&!this._stack){var y=d.extend(true,{},z);delete y.fillStyle;this.renderer.shadowRenderer.draw(D,F,y)}var m=z.fillStyle||this.color;this._dataColors.push(m);this.renderer.shapeRenderer.draw(D,F,z)}}else{if(this.barDirection=="horizontal"){for(var G=0;G<J.length;G++){if(this.data[G][0]==null){continue}F=[];q=J[G][1]-this._barNudge;N;if(this._stack&&this._prevGridData.length){N=this._prevGridData[G][0]}else{if(this.fillToZero){N=this._xaxis.series_u2p(0)}else{if(this.waterfall&&G>0&&G<this.gridData.length-1){N=this.gridData[G-1][1]}else{if(this.waterfall&&G==0&&G<this.gridData.length-1){if(this._xaxis.min<=0&&this._xaxis.max>=0){N=this._xaxis.series_u2p(0)}else{if(this._xaxis.min>0){N=0}else{N=D.canvas.width}}}else{if(this.waterfall&&G==this.gridData.length-1){if(this._xaxis.min<=0&&this._xaxis.max>=0){N=this._xaxis.series_u2p(0)}else{if(this._xaxis.min>0){N=0}else{N=D.canvas.width}}}else{N=0}}}}}if((this.fillToZero&&this._plotData[G][1]<0)||(this.waterfall&&this._data[G][1]<0)){if(this.varyBarColor&&!this._stack){if(this.useNegativeColors){z.fillStyle=t.next()}else{z.fillStyle=A.next()}}}else{if(this.varyBarColor&&!this._stack){z.fillStyle=A.next()}else{z.fillStyle=s}}F.push([N,q+this.barWidth/2]);F.push([N,q-this.barWidth/2]);F.push([J[G][0],q-this.barWidth/2]);F.push([J[G][0],q+this.barWidth/2]);this._barPoints.push(F);if(u&&!this._stack){var y=d.extend(true,{},z);delete y.fillStyle;this.renderer.shadowRenderer.draw(D,F,y)}var m=z.fillStyle||this.color;this._dataColors.push(m);this.renderer.shapeRenderer.draw(D,F,z)}}}}if(this.highlightColors.length==0){this.highlightColors=f(this._dataColors)}else{if(typeof(this.highlightColors)=="string"){var L=this.highlightColors;this.highlightColors=[];for(var G=0;G<this._dataColors.length;G++){this.highlightColors.push(L)}}}};d.jqplot.BarRenderer.prototype.drawShadow=function(y,E,o){var B;var v=(o!=undefined)?o:{};var r=(v.shadow!=undefined)?v.shadow:this.shadow;var G=(v.showLine!=undefined)?v.showLine:this.showLine;var z=(v.fill!=undefined)?v.fill:this.fill;var n=this.xaxis;var C=this.yaxis;var u=this._xaxis.series_u2p;var D=this._yaxis.series_u2p;var x,A,w,t,s,q;if(this._stack&&this.shadow){if(this.barWidth==null){this.renderer.setBarWidth.call(this)}var F=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);t=F[0];s=F[1];q=F[2];if(this._stack){this._barNudge=0}else{this._barNudge=(-Math.abs(s/2-0.5)+q)*(this.barWidth+this.barPadding)}if(G){if(this.barDirection=="vertical"){for(var B=0;B<E.length;B++){if(this.data[B][1]==null){continue}A=[];var p=E[B][0]+this._barNudge;var m;if(this._stack&&this._prevGridData.length){m=this._prevGridData[B][1]}else{if(this.fillToZero){m=this._yaxis.series_u2p(0)}else{m=y.canvas.height}}A.push([p-this.barWidth/2,m]);A.push([p-this.barWidth/2,E[B][1]]);A.push([p+this.barWidth/2,E[B][1]]);A.push([p+this.barWidth/2,m]);this.renderer.shadowRenderer.draw(y,A,v)}}else{if(this.barDirection=="horizontal"){for(var B=0;B<E.length;B++){if(this.data[B][0]==null){continue}A=[];var p=E[B][1]-this._barNudge;var H;if(this._stack&&this._prevGridData.length){H=this._prevGridData[B][0]}else{H=0}A.push([H,p+this.barWidth/2]);A.push([E[B][0],p+this.barWidth/2]);A.push([E[B][0],p-this.barWidth/2]);A.push([H,p-this.barWidth/2]);this.renderer.shadowRenderer.draw(y,A,v)}}}}}};function h(p,o,m){for(var n=0;n<this.series.length;n++){if(this.series[n].renderer.constructor==d.jqplot.BarRenderer){if(this.series[n].highlightMouseOver){this.series[n].highlightMouseDown=false}}}this.target.bind("mouseout",{plot:this},function(q){j(q.data.plot)})}function i(){if(this.plugins.barRenderer&&this.plugins.barRenderer.highlightCanvas){this.plugins.barRenderer.highlightCanvas.resetCanvas();this.plugins.barRenderer.highlightCanvas=null}this.plugins.barRenderer={highlightedSeriesIndex:null};this.plugins.barRenderer.highlightCanvas=new d.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.barRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-barRenderer-highlight-canvas",this._plotDimensions,this));this.plugins.barRenderer.highlightCanvas.setContext()}function c(t,r,p,o){var n=t.series[r];var m=t.plugins.barRenderer.highlightCanvas;m._ctx.clearRect(0,0,m._ctx.canvas.width,m._ctx.canvas.height);n._highlightedPoint=p;t.plugins.barRenderer.highlightedSeriesIndex=r;var q={fillStyle:n.highlightColors[p]};n.renderer.shapeRenderer.draw(m._ctx,o,q);m=null}function j(o){var m=o.plugins.barRenderer.highlightCanvas;m._ctx.clearRect(0,0,m._ctx.canvas.width,m._ctx.canvas.height);for(var n=0;n<o.series.length;n++){o.series[n]._highlightedPoint=null}o.plugins.barRenderer.highlightedSeriesIndex=null;o.target.trigger("jqplotDataUnhighlight");m=null}function b(q,p,t,s,r){if(s){var o=[s.seriesIndex,s.pointIndex,s.data];var n=jQuery.Event("jqplotDataMouseOver");n.pageX=q.pageX;n.pageY=q.pageY;r.target.trigger(n,o);if(r.series[o[0]].highlightMouseOver&&!(o[0]==r.plugins.barRenderer.highlightedSeriesIndex&&o[1]==r.series[o[0]]._highlightedPoint)){var m=jQuery.Event("jqplotDataHighlight");m.pageX=q.pageX;m.pageY=q.pageY;r.target.trigger(m,o);c(r,s.seriesIndex,s.pointIndex,s.points)}}else{if(s==null){j(r)}}}function a(p,o,s,r,q){if(r){var n=[r.seriesIndex,r.pointIndex,r.data];if(q.series[n[0]].highlightMouseDown&&!(n[0]==q.plugins.barRenderer.highlightedSeriesIndex&&n[1]==q.series[n[0]]._highlightedPoint)){var m=jQuery.Event("jqplotDataHighlight");m.pageX=p.pageX;m.pageY=p.pageY;q.target.trigger(m,n);c(q,r.seriesIndex,r.pointIndex,r.points)}}else{if(r==null){j(q)}}}function k(o,n,r,q,p){var m=p.plugins.barRenderer.highlightedSeriesIndex;if(m!=null&&p.series[m].highlightMouseDown){j(p)}}function e(p,o,s,r,q){if(r){var n=[r.seriesIndex,r.pointIndex,r.data];var m=jQuery.Event("jqplotDataClick");m.pageX=p.pageX;m.pageY=p.pageY;q.target.trigger(m,n)}}function l(q,p,t,s,r){if(s){var o=[s.seriesIndex,s.pointIndex,s.data];var m=r.plugins.barRenderer.highlightedSeriesIndex;if(m!=null&&r.series[m].highlightMouseDown){j(r)}var n=jQuery.Event("jqplotDataRightClick");n.pageX=q.pageX;n.pageY=q.pageY;r.target.trigger(n,o)}}})(jQuery);
(function(a){a.jqplot.CategoryAxisRenderer=function(b){a.jqplot.LinearAxisRenderer.call(this);this.sortMergedLabels=false};a.jqplot.CategoryAxisRenderer.prototype=new a.jqplot.LinearAxisRenderer();a.jqplot.CategoryAxisRenderer.prototype.constructor=a.jqplot.CategoryAxisRenderer;a.jqplot.CategoryAxisRenderer.prototype.init=function(e){this.groups=1;this.groupLabels=[];this._groupLabels=[];this._grouped=false;this._barsPerGroup=null;a.extend(true,this,{tickOptions:{formatString:"%d"}},e);var b=this._dataBounds;for(var f=0;f<this._series.length;f++){var g=this._series[f];if(g.groups){this.groups=g.groups}var h=g.data;for(var c=0;c<h.length;c++){if(this.name=="xaxis"||this.name=="x2axis"){if(h[c][0]<b.min||b.min==null){b.min=h[c][0]}if(h[c][0]>b.max||b.max==null){b.max=h[c][0]}}else{if(h[c][1]<b.min||b.min==null){b.min=h[c][1]}if(h[c][1]>b.max||b.max==null){b.max=h[c][1]}}}}if(this.groupLabels.length){this.groups=this.groupLabels.length}};a.jqplot.CategoryAxisRenderer.prototype.createTicks=function(){var D=this._ticks;var z=this.ticks;var F=this.name;var C=this._dataBounds;var v,A;var q,w;var d,c;var b,x;if(z.length){if(this.groups>1&&!this._grouped){var r=z.length;var p=parseInt(r/this.groups,10);var e=0;for(var x=p;x<r;x+=p){z.splice(x+e,0," ");e++}this._grouped=true}this.min=0.5;this.max=z.length+0.5;var m=this.max-this.min;this.numberTicks=2*z.length+1;for(x=0;x<z.length;x++){b=this.min+2*x*m/(this.numberTicks-1);var h=new this.tickRenderer(this.tickOptions);h.showLabel=false;h.setTick(b,this.name);this._ticks.push(h);var h=new this.tickRenderer(this.tickOptions);h.label=z[x];h.showMark=false;h.showGridline=false;h.setTick(b+0.5,this.name);this._ticks.push(h)}var h=new this.tickRenderer(this.tickOptions);h.showLabel=false;h.setTick(b+1,this.name);this._ticks.push(h)}else{if(F=="xaxis"||F=="x2axis"){v=this._plotDimensions.width}else{v=this._plotDimensions.height}if(this.min!=null&&this.max!=null&&this.numberTicks!=null){this.tickInterval=null}if(this.min!=null&&this.max!=null&&this.tickInterval!=null){if(parseInt((this.max-this.min)/this.tickInterval,10)!=(this.max-this.min)/this.tickInterval){this.tickInterval=null}}var y=[];var B=0;var q=0.5;var w,E;var f=false;for(var x=0;x<this._series.length;x++){var k=this._series[x];for(var u=0;u<k.data.length;u++){if(this.name=="xaxis"||this.name=="x2axis"){E=k.data[u][0]}else{E=k.data[u][1]}if(a.inArray(E,y)==-1){f=true;B+=1;y.push(E)}}}if(f&&this.sortMergedLabels){y.sort(function(j,i){return j-i})}this.ticks=y;for(var x=0;x<this._series.length;x++){var k=this._series[x];for(var u=0;u<k.data.length;u++){if(this.name=="xaxis"||this.name=="x2axis"){E=k.data[u][0]}else{E=k.data[u][1]}var n=a.inArray(E,y)+1;if(this.name=="xaxis"||this.name=="x2axis"){k.data[u][0]=n}else{k.data[u][1]=n}}}if(this.groups>1&&!this._grouped){var r=y.length;var p=parseInt(r/this.groups,10);var e=0;for(var x=p;x<r;x+=p+1){y[x]=" "}this._grouped=true}w=B+0.5;if(this.numberTicks==null){this.numberTicks=2*B+1}var m=w-q;this.min=q;this.max=w;var o=0;var g=parseInt(3+v/20,10);var p=parseInt(B/g,10);if(this.tickInterval==null){this.tickInterval=m/(this.numberTicks-1)}for(var x=0;x<this.numberTicks;x++){b=this.min+x*this.tickInterval;var h=new this.tickRenderer(this.tickOptions);if(x/2==parseInt(x/2,10)){h.showLabel=false;h.showMark=true}else{if(p>0&&o<p){h.showLabel=false;o+=1}else{h.showLabel=true;o=0}h.label=h.formatter(h.formatString,y[(x-1)/2]);h.showMark=false;h.showGridline=false}h.setTick(b,this.name);this._ticks.push(h)}}};a.jqplot.CategoryAxisRenderer.prototype.draw=function(b,j){if(this.show){this.renderer.createTicks.call(this);var h=0;var c;if(this._elem){this._elem.emptyForce()}this._elem=this._elem||a('<div class="jqplot-axis jqplot-'+this.name+'" style="position:absolute;"></div>');if(this.name=="xaxis"||this.name=="x2axis"){this._elem.width(this._plotDimensions.width)}else{this._elem.height(this._plotDimensions.height)}this.labelOptions.axis=this.name;this._label=new this.labelRenderer(this.labelOptions);if(this._label.show){var g=this._label.draw(b,j);g.appendTo(this._elem)}var f=this._ticks;for(var e=0;e<f.length;e++){var d=f[e];if(d.showLabel&&(!d.isMinorTick||this.showMinorTicks)){var g=d.draw(b,j);g.appendTo(this._elem)}}this._groupLabels=[];for(var e=0;e<this.groupLabels.length;e++){var g=a('<div style="position:absolute;" class="jqplot-'+this.name+'-groupLabel"></div>');g.html(this.groupLabels[e]);this._groupLabels.push(g);g.appendTo(this._elem)}}return this._elem};a.jqplot.CategoryAxisRenderer.prototype.set=function(){var e=0;var m;var k=0;var f=0;var d=(this._label==null)?false:this._label.show;if(this.show){var n=this._ticks;for(var c=0;c<n.length;c++){var g=n[c];if(g.showLabel&&(!g.isMinorTick||this.showMinorTicks)){if(this.name=="xaxis"||this.name=="x2axis"){m=g._elem.outerHeight(true)}else{m=g._elem.outerWidth(true)}if(m>e){e=m}}}var j=0;for(var c=0;c<this._groupLabels.length;c++){var b=this._groupLabels[c];if(this.name=="xaxis"||this.name=="x2axis"){m=b.outerHeight(true)}else{m=b.outerWidth(true)}if(m>j){j=m}}if(d){k=this._label._elem.outerWidth(true);f=this._label._elem.outerHeight(true)}if(this.name=="xaxis"){e+=j+f;this._elem.css({height:e+"px",left:"0px",bottom:"0px"})}else{if(this.name=="x2axis"){e+=j+f;this._elem.css({height:e+"px",left:"0px",top:"0px"})}else{if(this.name=="yaxis"){e+=j+k;this._elem.css({width:e+"px",left:"0px",top:"0px"});if(d&&this._label.constructor==a.jqplot.AxisLabelRenderer){this._label._elem.css("width",k+"px")}}else{e+=j+k;this._elem.css({width:e+"px",right:"0px",top:"0px"});if(d&&this._label.constructor==a.jqplot.AxisLabelRenderer){this._label._elem.css("width",k+"px")}}}}}};a.jqplot.CategoryAxisRenderer.prototype.pack=function(e,c){var C=this._ticks;var v=this.max;var s=this.min;var n=c.max;var l=c.min;var q=(this._label==null)?false:this._label.show;var x;for(var r in e){this._elem.css(r,e[r])}this._offsets=c;var g=n-l;var k=v-s;this.p2u=function(h){return(h-l)*k/g+s};this.u2p=function(h){return(h-s)*g/k+l};if(this.name=="xaxis"||this.name=="x2axis"){this.series_u2p=function(h){return(h-s)*g/k};this.series_p2u=function(h){return h*k/g+s}}else{this.series_u2p=function(h){return(h-v)*g/k};this.series_p2u=function(h){return h*k/g+v}}if(this.show){if(this.name=="xaxis"||this.name=="x2axis"){for(x=0;x<C.length;x++){var o=C[x];if(o.show&&o.showLabel){var b;if(o.constructor==a.jqplot.CanvasAxisTickRenderer&&o.angle){var A=(this.name=="xaxis")?1:-1;switch(o.labelPosition){case"auto":if(A*o.angle<0){b=-o.getWidth()+o._textRenderer.height*Math.sin(-o._textRenderer.angle)/2}else{b=-o._textRenderer.height*Math.sin(o._textRenderer.angle)/2}break;case"end":b=-o.getWidth()+o._textRenderer.height*Math.sin(-o._textRenderer.angle)/2;break;case"start":b=-o._textRenderer.height*Math.sin(o._textRenderer.angle)/2;break;case"middle":b=-o.getWidth()/2+o._textRenderer.height*Math.sin(-o._textRenderer.angle)/2;break;default:b=-o.getWidth()/2+o._textRenderer.height*Math.sin(-o._textRenderer.angle)/2;break}}else{b=-o.getWidth()/2}var D=this.u2p(o.value)+b+"px";o._elem.css("left",D);o.pack()}}var z=["bottom",0];if(q){var m=this._label._elem.outerWidth(true);this._label._elem.css("left",l+g/2-m/2+"px");if(this.name=="xaxis"){this._label._elem.css("bottom","0px");z=["bottom",this._label._elem.outerHeight(true)]}else{this._label._elem.css("top","0px");z=["top",this._label._elem.outerHeight(true)]}this._label.pack()}var d=parseInt(this._ticks.length/this.groups,10);for(x=0;x<this._groupLabels.length;x++){var B=0;var f=0;for(var u=x*d;u<=(x+1)*d;u++){if(this._ticks[u]._elem&&this._ticks[u].label!=" "){var o=this._ticks[u]._elem;var r=o.position();B+=r.left+o.outerWidth(true)/2;f++}}B=B/f;this._groupLabels[x].css({left:(B-this._groupLabels[x].outerWidth(true)/2)});this._groupLabels[x].css(z[0],z[1])}}else{for(x=0;x<C.length;x++){var o=C[x];if(o.show&&o.showLabel){var b;if(o.constructor==a.jqplot.CanvasAxisTickRenderer&&o.angle){var A=(this.name=="yaxis")?1:-1;switch(o.labelPosition){case"auto":case"end":if(A*o.angle<0){b=-o._textRenderer.height*Math.cos(-o._textRenderer.angle)/2}else{b=-o.getHeight()+o._textRenderer.height*Math.cos(o._textRenderer.angle)/2}break;case"start":if(o.angle>0){b=-o._textRenderer.height*Math.cos(-o._textRenderer.angle)/2}else{b=-o.getHeight()+o._textRenderer.height*Math.cos(o._textRenderer.angle)/2}break;case"middle":b=-o.getHeight()/2;break;default:b=-o.getHeight()/2;break}}else{b=-o.getHeight()/2}var D=this.u2p(o.value)+b+"px";o._elem.css("top",D);o.pack()}}var z=["left",0];if(q){var y=this._label._elem.outerHeight(true);this._label._elem.css("top",n-g/2-y/2+"px");if(this.name=="yaxis"){this._label._elem.css("left","0px");z=["left",this._label._elem.outerWidth(true)]}else{this._label._elem.css("right","0px");z=["right",this._label._elem.outerWidth(true)]}this._label.pack()}var d=parseInt(this._ticks.length/this.groups,10);for(x=0;x<this._groupLabels.length;x++){var B=0;var f=0;for(var u=x*d;u<=(x+1)*d;u++){if(this._ticks[u]._elem&&this._ticks[u].label!=" "){var o=this._ticks[u]._elem;var r=o.position();B+=r.top+o.outerHeight()/2;f++}}B=B/f;this._groupLabels[x].css({top:B-this._groupLabels[x].outerHeight()/2});this._groupLabels[x].css(z[0],z[1])}}}}})(jQuery);
(function(c){c.jqplot.PointLabels=function(e){this.show=c.jqplot.config.enablePlugins;this.location="n";this.labelsFromSeries=false;this.seriesLabelIndex=null;this.labels=[];this._labels=[];this.stackedValue=false;this.ypadding=6;this.xpadding=6;this.escapeHTML=true;this.edgeTolerance=-5;this.formatter=c.jqplot.DefaultTickFormatter;this.formatString="";this.hideZeros=false;this._elems=[];c.extend(true,this,e)};var a=["nw","n","ne","e","se","s","sw","w"];var d={nw:0,n:1,ne:2,e:3,se:4,s:5,sw:6,w:7};var b=["se","s","sw","w","nw","n","ne","e"];c.jqplot.PointLabels.init=function(i,h,f,g){var e=c.extend(true,{},f,g);e.pointLabels=e.pointLabels||{};if(this.renderer.constructor==c.jqplot.BarRenderer&&this.barDirection=="horizontal"&&!e.pointLabels.location){e.pointLabels.location="e"}this.plugins.pointLabels=new c.jqplot.PointLabels(e.pointLabels);this.plugins.pointLabels.setLabels.call(this)};c.jqplot.PointLabels.prototype.setLabels=function(){var f=this.plugins.pointLabels;var h;if(f.seriesLabelIndex!=null){h=f.seriesLabelIndex}else{if(this.renderer.constructor==c.jqplot.BarRenderer&&this.barDirection=="horizontal"){h=0}else{h=this._plotData[0].length-1}}f._labels=[];if(f.labels.length==0||f.labelsFromSeries){if(f.stackedValue){if(this._plotData.length&&this._plotData[0].length){for(var e=0;e<this._plotData.length;e++){f._labels.push(this._plotData[e][h])}}}else{var g=this._plotData;if(this.renderer.constructor==c.jqplot.BarRenderer&&this.waterfall){g=this._data}if(g.length&&g[0].length){for(var e=0;e<g.length;e++){f._labels.push(g[e][h])}}g=null}}else{if(f.labels.length){f._labels=f.labels}}};c.jqplot.PointLabels.prototype.xOffset=function(f,e,g){e=e||this.location;g=g||this.xpadding;var h;switch(e){case"nw":h=-f.outerWidth(true)-this.xpadding;break;case"n":h=-f.outerWidth(true)/2;break;case"ne":h=this.xpadding;break;case"e":h=this.xpadding;break;case"se":h=this.xpadding;break;case"s":h=-f.outerWidth(true)/2;break;case"sw":h=-f.outerWidth(true)-this.xpadding;break;case"w":h=-f.outerWidth(true)-this.xpadding;break;default:h=-f.outerWidth(true)-this.xpadding;break}return h};c.jqplot.PointLabels.prototype.yOffset=function(f,e,g){e=e||this.location;g=g||this.xpadding;var h;switch(e){case"nw":h=-f.outerHeight(true)-this.ypadding;break;case"n":h=-f.outerHeight(true)-this.ypadding;break;case"ne":h=-f.outerHeight(true)-this.ypadding;break;case"e":h=-f.outerHeight(true)/2;break;case"se":h=this.ypadding;break;case"s":h=this.ypadding;break;case"sw":h=this.ypadding;break;case"w":h=-f.outerHeight(true)/2;break;default:h=-f.outerHeight(true)-this.ypadding;break}return h};c.jqplot.PointLabels.draw=function(w,j){var t=this.plugins.pointLabels;t.setLabels.call(this);for(var v=0;v<t._elems.length;v++){t._elems[v].emptyForce()}t._elems.splice(0,t._elems.length);if(t.show){var r="_"+this._stackAxis+"axis";if(!t.formatString){t.formatString=this[r]._ticks[0].formatString;t.formatter=this[r]._ticks[0].formatter}var C=this._plotData;var z=this._xaxis;var q=this._yaxis;var y,f;for(var v=0,u=t._labels.length;v<u;v++){var o=t._labels[v];if(t.hideZeros&&parseInt(t._labels[v],10)==0){o=""}if(o!=null){o=t.formatter(t.formatString,o)}f=document.createElement("div");t._elems[v]=c(f);y=t._elems[v];y.addClass("jqplot-point-label jqplot-series-"+this.index+" jqplot-point-"+v);y.css("position","absolute");y.insertAfter(w.canvas);if(t.escapeHTML){y.text(o)}else{y.html(o)}var g=t.location;if((this.fillToZero&&C[v][1]<0)||(this.waterfall&&parseInt(o,10))<0){g=b[d[g]]}var n=z.u2p(C[v][0])+t.xOffset(y,g);var h=q.u2p(C[v][1])+t.yOffset(y,g);if(this.renderer.constructor==c.jqplot.BarRenderer){if(this.barDirection=="vertical"){n+=this._barNudge}else{h-=this._barNudge}}y.css("left",n);y.css("top",h);var k=n+y.width();var s=h+y.height();var B=t.edgeTolerance;var e=c(w.canvas).position().left;var x=c(w.canvas).position().top;var A=w.canvas.width+e;var m=w.canvas.height+x;if(n-B<e||h-B<x||k+B>A||s+B>m){y.remove()}y=null;f=null}}};c.jqplot.postSeriesInitHooks.push(c.jqplot.PointLabels.init);c.jqplot.postDrawSeriesHooks.push(c.jqplot.PointLabels.draw)})(jQuery);
(function(w){var l;w.fn.emptyForce=function(){for(var O=0,P;(P=w(this)[O])!=null;O++){if(P.nodeType===1){jQuery.cleanData(P.getElementsByTagName("*"))}if(w.jqplot_use_excanvas){P.outerHTML=""}else{while(P.firstChild){P.removeChild(P.firstChild)}}P=null}return w(this)};w.fn.removeChildForce=function(O){while(O.firstChild){this.removeChildForce(O.firstChild);O.removeChild(O.firstChild)}};w.jqplot=function(U,R,P){var Q,O;if(P==null){if(jQuery.isArray(R)){Q=R;O=null}else{if(typeof(R)==="object"){Q=null;O=R}}}else{Q=R;O=P}var T=new C();w("#"+U).removeClass("jqplot-error");if(w.jqplot.config.catchErrors){try{T.init(U,Q,O);T.draw();T.themeEngine.init.call(T);return T}catch(S){var V=w.jqplot.config.errorMessage||S.message;w("#"+U).append('<div class="jqplot-error-message">'+V+"</div>");w("#"+U).addClass("jqplot-error");document.getElementById(U).style.background=w.jqplot.config.errorBackground;document.getElementById(U).style.border=w.jqplot.config.errorBorder;document.getElementById(U).style.fontFamily=w.jqplot.config.errorFontFamily;document.getElementById(U).style.fontSize=w.jqplot.config.errorFontSize;document.getElementById(U).style.fontStyle=w.jqplot.config.errorFontStyle;document.getElementById(U).style.fontWeight=w.jqplot.config.errorFontWeight}}else{T.init(U,Q,O);T.draw();T.themeEngine.init.call(T);return T}};w.jqplot.version="1.0.0b2_r792";w.jqplot.CanvasManager=function(){if(typeof w.jqplot.CanvasManager.canvases=="undefined"){w.jqplot.CanvasManager.canvases=[];w.jqplot.CanvasManager.free=[]}var O=[];this.getCanvas=function(){var R;var Q=true;if(!w.jqplot.use_excanvas){for(var S=0,P=w.jqplot.CanvasManager.canvases.length;S<P;S++){if(w.jqplot.CanvasManager.free[S]===true){Q=false;R=w.jqplot.CanvasManager.canvases[S];w.jqplot.CanvasManager.free[S]=false;O.push(S);break}}}if(Q){R=document.createElement("canvas");O.push(w.jqplot.CanvasManager.canvases.length);w.jqplot.CanvasManager.canvases.push(R);w.jqplot.CanvasManager.free.push(false)}return R};this.initCanvas=function(P){if(w.jqplot.use_excanvas){return window.G_vmlCanvasManager.initElement(P)}return P};this.freeAllCanvases=function(){for(var Q=0,P=O.length;Q<P;Q++){this.freeCanvas(O[Q])}O=[]};this.freeCanvas=function(P){if(w.jqplot.use_excanvas){window.G_vmlCanvasManager.uninitElement(w.jqplot.CanvasManager.canvases[P]);w.jqplot.CanvasManager.canvases[P]=null}else{var Q=w.jqplot.CanvasManager.canvases[P];Q.getContext("2d").clearRect(0,0,Q.width,Q.height);w(Q).unbind().removeAttr("class").removeAttr("style");w(Q).css({left:"",top:"",position:""});Q.width=0;Q.height=0;w.jqplot.CanvasManager.free[P]=true}}};w.jqplot.log=function(){if(window.console){console.log.apply(console,arguments)}};w.jqplot.config={enablePlugins:false,defaultHeight:300,defaultWidth:400,UTCAdjust:false,timezoneOffset:new Date(new Date().getTimezoneOffset()*60000),errorMessage:"",errorBackground:"",errorBorder:"",errorFontFamily:"",errorFontSize:"",errorFontStyle:"",errorFontWeight:"",catchErrors:false,defaultTickFormatString:"%.1f",defaultColors:["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"],defaultNegativeColors:["#498991","#C08840","#9F9274","#546D61","#646C4A","#6F6621","#6E3F5F","#4F64B0","#A89050","#C45923","#187399","#945381","#959E5C","#C7AF7B","#478396","#907294"]};w.jqplot.arrayMax=function(O){return Math.max.apply(Math,O)};w.jqplot.arrayMin=function(O){return Math.min.apply(Math,O)};w.jqplot.enablePlugins=w.jqplot.config.enablePlugins;w.jqplot.support_canvas=function(){if(typeof w.jqplot.support_canvas.result=="undefined"){w.jqplot.support_canvas.result=!!document.createElement("canvas").getContext}return w.jqplot.support_canvas.result};w.jqplot.support_canvas_text=function(){if(typeof w.jqplot.support_canvas_text.result=="undefined"){w.jqplot.support_canvas_text.result=!!(document.createElement("canvas").getContext&&typeof document.createElement("canvas").getContext("2d").fillText=="function")}return w.jqplot.support_canvas_text.result};w.jqplot.use_excanvas=(w.browser.msie&&!w.jqplot.support_canvas())?true:false;w.jqplot.preInitHooks=[];w.jqplot.postInitHooks=[];w.jqplot.preParseOptionsHooks=[];w.jqplot.postParseOptionsHooks=[];w.jqplot.preDrawHooks=[];w.jqplot.postDrawHooks=[];w.jqplot.preDrawSeriesHooks=[];w.jqplot.postDrawSeriesHooks=[];w.jqplot.preDrawLegendHooks=[];w.jqplot.addLegendRowHooks=[];w.jqplot.preSeriesInitHooks=[];w.jqplot.postSeriesInitHooks=[];w.jqplot.preParseSeriesOptionsHooks=[];w.jqplot.postParseSeriesOptionsHooks=[];w.jqplot.eventListenerHooks=[];w.jqplot.preDrawSeriesShadowHooks=[];w.jqplot.postDrawSeriesShadowHooks=[];w.jqplot.ElemContainer=function(){this._elem;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null}};w.jqplot.ElemContainer.prototype.createElement=function(R,T,P,Q,U){this._offsets=T;var O=P||"jqplot";var S=document.createElement(R);this._elem=w(S);this._elem.addClass(O);this._elem.css(Q);this._elem.attr(U);S=null;return this._elem};w.jqplot.ElemContainer.prototype.getWidth=function(){if(this._elem){return this._elem.outerWidth(true)}else{return null}};w.jqplot.ElemContainer.prototype.getHeight=function(){if(this._elem){return this._elem.outerHeight(true)}else{return null}};w.jqplot.ElemContainer.prototype.getPosition=function(){if(this._elem){return this._elem.position()}else{return{top:null,left:null,bottom:null,right:null}}};w.jqplot.ElemContainer.prototype.getTop=function(){return this.getPosition().top};w.jqplot.ElemContainer.prototype.getLeft=function(){return this.getPosition().left};w.jqplot.ElemContainer.prototype.getBottom=function(){return this._elem.css("bottom")};w.jqplot.ElemContainer.prototype.getRight=function(){return this._elem.css("right")};function m(O){w.jqplot.ElemContainer.call(this);this.name=O;this._series=[];this.show=false;this.tickRenderer=w.jqplot.AxisTickRenderer;this.tickOptions={};this.labelRenderer=w.jqplot.AxisLabelRenderer;this.labelOptions={};this.label=null;this.showLabel=true;this.min=null;this.max=null;this.autoscale=false;this.pad=1.2;this.padMax=null;this.padMin=null;this.ticks=[];this.numberTicks;this.tickInterval;this.renderer=w.jqplot.LinearAxisRenderer;this.rendererOptions={};this.showTicks=true;this.showTickMarks=true;this.showMinorTicks=true;this.useSeriesColor=false;this.borderWidth=null;this.borderColor=null;this._dataBounds={min:null,max:null};this._intervalStats=[];this._offsets={min:null,max:null};this._ticks=[];this._label=null;this.syncTicks=null;this.tickSpacing=75;this._min=null;this._max=null;this._tickInterval=null;this._numberTicks=null;this.__ticks=null;this._options={}}m.prototype=new w.jqplot.ElemContainer();m.prototype.constructor=m;m.prototype.init=function(){this.renderer=new this.renderer();this.tickOptions.axis=this.name;if(this.tickOptions.showMark==null){this.tickOptions.showMark=this.showTicks}if(this.tickOptions.showMark==null){this.tickOptions.showMark=this.showTickMarks}if(this.tickOptions.showLabel==null){this.tickOptions.showLabel=this.showTicks}if(this.label==null||this.label==""){this.showLabel=false}else{this.labelOptions.label=this.label}if(this.showLabel==false){this.labelOptions.show=false}if(this.pad==0){this.pad=1}if(this.padMax==0){this.padMax=1}if(this.padMin==0){this.padMin=1}if(this.padMax==null){this.padMax=(this.pad-1)/2+1}if(this.padMin==null){this.padMin=(this.pad-1)/2+1}this.pad=this.padMax+this.padMin-1;if(this.min!=null||this.max!=null){this.autoscale=false}if(this.syncTicks==null&&this.name.indexOf("y")>-1){this.syncTicks=true}else{if(this.syncTicks==null){this.syncTicks=false}}this.renderer.init.call(this,this.rendererOptions)};m.prototype.draw=function(O,P){if(this.__ticks){this.__ticks=null}return this.renderer.draw.call(this,O,P)};m.prototype.set=function(){this.renderer.set.call(this)};m.prototype.pack=function(P,O){if(this.show){this.renderer.pack.call(this,P,O)}if(this._min==null){this._min=this.min;this._max=this.max;this._tickInterval=this.tickInterval;this._numberTicks=this.numberTicks;this.__ticks=this._ticks}};m.prototype.reset=function(){this.renderer.reset.call(this)};m.prototype.resetScale=function(O){w.extend(true,this,{min:null,max:null,numberTicks:null,tickInterval:null,_ticks:[],ticks:[]},O);this.resetDataBounds()};m.prototype.resetDataBounds=function(){var O=this._dataBounds;O.min=null;O.max=null;var R=(this.show)?true:false;for(var Q=0;Q<this._series.length;Q++){var S=this._series[Q];var V=S._plotData;var T=1,U=1;if(S._type!=null&&S._type=="ohlc"){T=3;U=2}for(var P=0;P<V.length;P++){if(this.name=="xaxis"||this.name=="x2axis"){if((V[P][0]!=null&&V[P][0]<O.min)||O.min==null){O.min=V[P][0]}if((V[P][0]!=null&&V[P][0]>O.max)||O.max==null){O.max=V[P][0]}}else{if((V[P][T]!=null&&V[P][T]<O.min)||O.min==null){O.min=V[P][T]}if((V[P][U]!=null&&V[P][U]>O.max)||O.max==null){O.max=V[P][U]}}}if(R&&S.renderer.constructor!==w.jqplot.BarRenderer){R=false}else{if(R&&this._options.hasOwnProperty("forceTickAt0")&&this._options.forceTickAt0==false){R=false}else{if(R&&S.renderer.constructor===w.jqplot.BarRenderer){if(S.barDirection=="vertical"&&this.name!="xaxis"&&this.name!="x2axis"){if(this._options.pad!=null||this._options.padMin!=null){R=false}}else{if(S.barDirection=="horizontal"&&(this.name=="xaxis"||this.name=="x2axis")){if(this._options.pad!=null||this._options.padMin!=null){R=false}}}}}}}if(R&&this.renderer.constructor===w.jqplot.LinearAxisRenderer&&O.min>=0){this.padMin=1;this.forceTickAt0=true}};function h(O){w.jqplot.ElemContainer.call(this);this.show=false;this.location="ne";this.labels=[];this.showLabels=true;this.showSwatches=true;this.placement="insideGrid";this.xoffset=0;this.yoffset=0;this.border;this.background;this.textColor;this.fontFamily;this.fontSize;this.rowSpacing="0.5em";this.renderer=w.jqplot.TableLegendRenderer;this.rendererOptions={};this.preDraw=false;this.marginTop=null;this.marginRight=null;this.marginBottom=null;this.marginLeft=null;this.escapeHtml=false;this._series=[];w.extend(true,this,O)}h.prototype=new w.jqplot.ElemContainer();h.prototype.constructor=h;h.prototype.setOptions=function(O){w.extend(true,this,O);if(this.placement=="inside"){this.placement="insideGrid"}if(this.xoffset>0){if(this.placement=="insideGrid"){switch(this.location){case"nw":case"w":case"sw":if(this.marginLeft==null){this.marginLeft=this.xoffset+"px"}this.marginRight="0px";break;case"ne":case"e":case"se":default:if(this.marginRight==null){this.marginRight=this.xoffset+"px"}this.marginLeft="0px";break}}else{if(this.placement=="outside"){switch(this.location){case"nw":case"w":case"sw":if(this.marginRight==null){this.marginRight=this.xoffset+"px"}this.marginLeft="0px";break;case"ne":case"e":case"se":default:if(this.marginLeft==null){this.marginLeft=this.xoffset+"px"}this.marginRight="0px";break}}}this.xoffset=0}if(this.yoffset>0){if(this.placement=="outside"){switch(this.location){case"sw":case"s":case"se":if(this.marginTop==null){this.marginTop=this.yoffset+"px"}this.marginBottom="0px";break;case"ne":case"n":case"nw":default:if(this.marginBottom==null){this.marginBottom=this.yoffset+"px"}this.marginTop="0px";break}}else{if(this.placement=="insideGrid"){switch(this.location){case"sw":case"s":case"se":if(this.marginBottom==null){this.marginBottom=this.yoffset+"px"}this.marginTop="0px";break;case"ne":case"n":case"nw":default:if(this.marginTop==null){this.marginTop=this.yoffset+"px"}this.marginBottom="0px";break}}}this.yoffset=0}};h.prototype.init=function(){this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions)};h.prototype.draw=function(P){for(var O=0;O<w.jqplot.preDrawLegendHooks.length;O++){w.jqplot.preDrawLegendHooks[O].call(this,P)}return this.renderer.draw.call(this,P)};h.prototype.pack=function(O){this.renderer.pack.call(this,O)};function n(O){w.jqplot.ElemContainer.call(this);this.text=O;this.show=true;this.fontFamily;this.fontSize;this.textAlign;this.textColor;this.renderer=w.jqplot.DivTitleRenderer;this.rendererOptions={}}n.prototype=new w.jqplot.ElemContainer();n.prototype.constructor=n;n.prototype.init=function(){this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions)};n.prototype.draw=function(O){return this.renderer.draw.call(this,O)};n.prototype.pack=function(){this.renderer.pack.call(this)};function D(){w.jqplot.ElemContainer.call(this);this.show=true;this.xaxis="xaxis";this._xaxis;this.yaxis="yaxis";this._yaxis;this.gridBorderWidth=2;this.renderer=w.jqplot.LineRenderer;this.rendererOptions={};this.data=[];this.gridData=[];this.label="";this.showLabel=true;this.color;this.lineWidth=2.5;this.lineJoin="round";this.lineCap="round";this.shadow=true;this.shadowAngle=45;this.shadowOffset=1.25;this.shadowDepth=3;this.shadowAlpha="0.1";this.breakOnNull=false;this.markerRenderer=w.jqplot.MarkerRenderer;this.markerOptions={};this.showLine=true;this.showMarker=true;this.index;this.fill=false;this.fillColor;this.fillAlpha;this.fillAndStroke=false;this.disableStack=false;this._stack=false;this.neighborThreshold=4;this.fillToZero=false;this.fillToValue=0;this.fillAxis="y";this.useNegativeColors=true;this._stackData=[];this._plotData=[];this._plotValues={x:[],y:[]};this._intervals={x:{},y:{}};this._prevPlotData=[];this._prevGridData=[];this._stackAxis="y";this._primaryAxis="_xaxis";this.canvas=new w.jqplot.GenericCanvas();this.shadowCanvas=new w.jqplot.GenericCanvas();this.plugins={};this._sumy=0;this._sumx=0;this._type=""}D.prototype=new w.jqplot.ElemContainer();D.prototype.constructor=D;D.prototype.init=function(Q,U,S){this.index=Q;this.gridBorderWidth=U;var T=this.data;var P=[],R;for(R=0;R<T.length;R++){if(!this.breakOnNull){if(T[R]==null||T[R][0]==null||T[R][1]==null){continue}else{P.push(T[R])}}else{P.push(T[R])}}this.data=P;if(!this.fillColor){this.fillColor=this.color}if(this.fillAlpha){var O=w.jqplot.normalize2rgb(this.fillColor);var O=w.jqplot.getColorComponents(O);this.fillColor="rgba("+O[0]+","+O[1]+","+O[2]+","+this.fillAlpha+")"}this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions,S);this.markerRenderer=new this.markerRenderer();if(!this.markerOptions.color){this.markerOptions.color=this.color}if(this.markerOptions.show==null){this.markerOptions.show=this.showMarker}this.showMarker=this.markerOptions.show;this.markerRenderer.init(this.markerOptions)};D.prototype.draw=function(U,R,T){var P=(R==l)?{}:R;U=(U==l)?this.canvas._ctx:U;var O,S,Q;for(O=0;O<w.jqplot.preDrawSeriesHooks.length;O++){w.jqplot.preDrawSeriesHooks[O].call(this,U,P)}if(this.show){this.renderer.setGridData.call(this,T);if(!P.preventJqPlotSeriesDrawTrigger){w(U.canvas).trigger("jqplotSeriesDraw",[this.data,this.gridData])}S=[];if(P.data){S=P.data}else{if(!this._stack){S=this.data}else{S=this._plotData}}Q=P.gridData||this.renderer.makeGridData.call(this,S,T);this.renderer.draw.call(this,U,Q,P,T)}for(O=0;O<w.jqplot.postDrawSeriesHooks.length;O++){w.jqplot.postDrawSeriesHooks[O].call(this,U,P)}U=R=T=O=S=Q=null};D.prototype.drawShadow=function(U,R,T){var P=(R==l)?{}:R;U=(U==l)?this.shadowCanvas._ctx:U;var O,S,Q;for(O=0;O<w.jqplot.preDrawSeriesShadowHooks.length;O++){w.jqplot.preDrawSeriesShadowHooks[O].call(this,U,P)}if(this.shadow){this.renderer.setGridData.call(this,T);S=[];if(P.data){S=P.data}else{if(!this._stack){S=this.data}else{S=this._plotData}}Q=P.gridData||this.renderer.makeGridData.call(this,S,T);this.renderer.drawShadow.call(this,U,Q,P)}for(O=0;O<w.jqplot.postDrawSeriesShadowHooks.length;O++){w.jqplot.postDrawSeriesShadowHooks[O].call(this,U,P)}U=R=T=O=S=Q=null};D.prototype.toggleDisplay=function(P){var O,Q;if(P.data.series){O=P.data.series}else{O=this}if(P.data.speed){Q=P.data.speed}if(Q){if(O.canvas._elem.is(":hidden")){if(O.shadowCanvas._elem){O.shadowCanvas._elem.fadeIn(Q)}O.canvas._elem.fadeIn(Q);O.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+O.index).fadeIn(Q)}else{if(O.shadowCanvas._elem){O.shadowCanvas._elem.fadeOut(Q)}O.canvas._elem.fadeOut(Q);O.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+O.index).fadeOut(Q)}}else{if(O.canvas._elem.is(":hidden")){if(O.shadowCanvas._elem){O.shadowCanvas._elem.show()}O.canvas._elem.show();O.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+O.index).show()}else{if(O.shadowCanvas._elem){O.shadowCanvas._elem.hide()}O.canvas._elem.hide();O.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+O.index).hide()}}};function x(){w.jqplot.ElemContainer.call(this);this.drawGridlines=true;this.gridLineColor="#cccccc";this.gridLineWidth=1;this.background="#fffdf6";this.borderColor="#999999";this.borderWidth=2;this.drawBorder=true;this.shadow=true;this.shadowAngle=45;this.shadowOffset=1.5;this.shadowWidth=3;this.shadowDepth=3;this.shadowColor=null;this.shadowAlpha="0.07";this._left;this._top;this._right;this._bottom;this._width;this._height;this._axes=[];this.renderer=w.jqplot.CanvasGridRenderer;this.rendererOptions={};this._offsets={top:null,bottom:null,left:null,right:null}}x.prototype=new w.jqplot.ElemContainer();x.prototype.constructor=x;x.prototype.init=function(){this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions)};x.prototype.createElement=function(O,P){this._offsets=O;return this.renderer.createElement.call(this,P)};x.prototype.draw=function(){this.renderer.draw.call(this)};w.jqplot.GenericCanvas=function(){w.jqplot.ElemContainer.call(this);this._ctx};w.jqplot.GenericCanvas.prototype=new w.jqplot.ElemContainer();w.jqplot.GenericCanvas.prototype.constructor=w.jqplot.GenericCanvas;w.jqplot.GenericCanvas.prototype.createElement=function(S,Q,P,T){this._offsets=S;var O="jqplot";if(Q!=l){O=Q}var R;R=T.canvasManager.getCanvas();if(P!=null){this._plotDimensions=P}R.width=this._plotDimensions.width-this._offsets.left-this._offsets.right;R.height=this._plotDimensions.height-this._offsets.top-this._offsets.bottom;this._elem=w(R);this._elem.css({position:"absolute",left:this._offsets.left,top:this._offsets.top});this._elem.addClass(O);R=T.canvasManager.initCanvas(R);R=null;return this._elem};w.jqplot.GenericCanvas.prototype.setContext=function(){this._ctx=this._elem.get(0).getContext("2d");return this._ctx};w.jqplot.GenericCanvas.prototype.resetCanvas=function(){if(this._elem){if(w.jqplot.use_excanvas){window.G_vmlCanvasManager.uninitElement(this._elem.get(0))}this._elem.emptyForce()}this._ctx=null};w.jqplot.HooksManager=function(){this.hooks=[]};w.jqplot.HooksManager.prototype.addOnce=function(P){var Q=false,O;for(O=0;O<this.hooks.length;O++){if(this.hooks[O][0]==P){Q=true}}if(!Q){this.hooks.push(P)}};w.jqplot.HooksManager.prototype.add=function(O){this.hooks.push(O)};w.jqplot.EventListenerManager=function(){this.hooks=[]};w.jqplot.EventListenerManager.prototype.addOnce=function(R,Q){var S=false,P,O;for(O=0;O<this.hooks.length;O++){P=this.hooks[O];if(P[0]==R&&P[1]==Q){S=true}}if(!S){this.hooks.push([R,Q])}};w.jqplot.EventListenerManager.prototype.add=function(P,O){this.hooks.push([P,O])};function C(){this.data=[];this.dataRenderer;this.dataRendererOptions;this.noDataIndicator={show:false,indicator:"Loading Data...",axes:{xaxis:{min:0,max:10,tickInterval:2,show:true},yaxis:{min:0,max:12,tickInterval:3,show:true}}};this.targetId=null;this.target=null;this.defaults={axesDefaults:{},axes:{xaxis:{},yaxis:{},x2axis:{},y2axis:{},y3axis:{},y4axis:{},y5axis:{},y6axis:{},y7axis:{},y8axis:{},y9axis:{}},seriesDefaults:{},series:[]};this.series=[];this.axes={xaxis:new m("xaxis"),yaxis:new m("yaxis"),x2axis:new m("x2axis"),y2axis:new m("y2axis"),y3axis:new m("y3axis"),y4axis:new m("y4axis"),y5axis:new m("y5axis"),y6axis:new m("y6axis"),y7axis:new m("y7axis"),y8axis:new m("y8axis"),y9axis:new m("y9axis")};this.grid=new x();this.legend=new h();this.baseCanvas=new w.jqplot.GenericCanvas();this.seriesStack=[];this.previousSeriesStack=[];this.eventCanvas=new w.jqplot.GenericCanvas();this._width=null;this._height=null;this._plotDimensions={height:null,width:null};this._gridPadding={top:null,right:null,bottom:null,left:null};this._defaultGridPadding={top:10,right:10,bottom:23,left:10};this.syncXTicks=true;this.syncYTicks=true;this.seriesColors=w.jqplot.config.defaultColors;this.negativeSeriesColors=w.jqplot.config.defaultNegativeColors;this.sortData=true;var Q=0;this.textColor;this.fontFamily;this.fontSize;this.title=new n();this.options={};this.stackSeries=false;this.defaultAxisStart=1;this._stackData=[];this._plotData=[];this.plugins={};this._drawCount=0;this.drawIfHidden=false;this.captureRightClick=false;this.themeEngine=new w.jqplot.ThemeEngine();this._sumy=0;this._sumx=0;this.preInitHooks=new w.jqplot.HooksManager();this.postInitHooks=new w.jqplot.HooksManager();this.preParseOptionsHooks=new w.jqplot.HooksManager();this.postParseOptionsHooks=new w.jqplot.HooksManager();this.preDrawHooks=new w.jqplot.HooksManager();this.postDrawHooks=new w.jqplot.HooksManager();this.preDrawSeriesHooks=new w.jqplot.HooksManager();this.postDrawSeriesHooks=new w.jqplot.HooksManager();this.preDrawLegendHooks=new w.jqplot.HooksManager();this.addLegendRowHooks=new w.jqplot.HooksManager();this.preSeriesInitHooks=new w.jqplot.HooksManager();this.postSeriesInitHooks=new w.jqplot.HooksManager();this.preParseSeriesOptionsHooks=new w.jqplot.HooksManager();this.postParseSeriesOptionsHooks=new w.jqplot.HooksManager();this.eventListenerHooks=new w.jqplot.EventListenerManager();this.preDrawSeriesShadowHooks=new w.jqplot.HooksManager();this.postDrawSeriesShadowHooks=new w.jqplot.HooksManager();this.colorGenerator=w.jqplot.ColorGenerator;this.canvasManager=new w.jqplot.CanvasManager();this.init=function(Z,W,ab){ab=ab||{};for(var X=0;X<w.jqplot.preInitHooks.length;X++){w.jqplot.preInitHooks[X].call(this,Z,W,ab)}for(var X=0;X<this.preInitHooks.hooks.length;X++){this.preInitHooks.hooks[X].call(this,Z,W,ab)}this.targetId="#"+Z;this.target=w("#"+Z);this.target.removeClass("jqplot-error");if(!this.target.get(0)){throw"No plot target specified"}if(this.target.css("position")=="static"){this.target.css("position","relative")}if(!this.target.hasClass("jqplot-target")){this.target.addClass("jqplot-target")}if(!this.target.height()){var Y;if(ab&&ab.height){Y=parseInt(ab.height,10)}else{if(this.target.attr("data-height")){Y=parseInt(this.target.attr("data-height"),10)}else{Y=parseInt(w.jqplot.config.defaultHeight,10)}}this._height=Y;this.target.css("height",Y+"px")}else{this._height=Y=this.target.height()}if(!this.target.width()){var aa;if(ab&&ab.width){aa=parseInt(ab.width,10)}else{if(this.target.attr("data-width")){aa=parseInt(this.target.attr("data-width"),10)}else{aa=parseInt(w.jqplot.config.defaultWidth,10)}}this._width=aa;this.target.css("width",aa+"px")}else{this._width=aa=this.target.width()}this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Canvas dimension not set"}if(ab.dataRenderer&&jQuery.isFunction(ab.dataRenderer)){if(ab.dataRendererOptions){this.dataRendererOptions=ab.dataRendererOptions}this.dataRenderer=ab.dataRenderer;W=this.dataRenderer(W,this,this.dataRendererOptions)}if(ab.noDataIndicator&&jQuery.isPlainObject(ab.noDataIndicator)){w.extend(true,this.noDataIndicator,ab.noDataIndicator)}if(W==null||jQuery.isArray(W)==false||W.length==0||jQuery.isArray(W[0])==false||W[0].length==0){if(this.noDataIndicator.show==false){throw {name:"DataError",message:"No data to plot."}}else{for(var S in this.noDataIndicator.axes){for(var U in this.noDataIndicator.axes[S]){this.axes[S][U]=this.noDataIndicator.axes[S][U]}}this.postDrawHooks.add(function(){var ah=this.eventCanvas.getHeight();var ae=this.eventCanvas.getWidth();var ad=w('<div class="jqplot-noData-container" style="position:absolute;"></div>');this.target.append(ad);ad.height(ah);ad.width(ae);ad.css("top",this.eventCanvas._offsets.top);ad.css("left",this.eventCanvas._offsets.left);var ag=w('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');ad.append(ag);ag.html(this.noDataIndicator.indicator);var af=ag.height();var ac=ag.width();ag.height(af);ag.width(ac);ag.css("top",(ah-af)/2+"px")})}}this.data=W;this.parseOptions(ab);if(this.textColor){this.target.css("color",this.textColor)}if(this.fontFamily){this.target.css("font-family",this.fontFamily)}if(this.fontSize){this.target.css("font-size",this.fontSize)}this.title.init();this.legend.init();this._sumy=0;this._sumx=0;for(var X=0;X<this.series.length;X++){this.seriesStack.push(X);this.previousSeriesStack.push(X);this.series[X].shadowCanvas._plotDimensions=this._plotDimensions;this.series[X].canvas._plotDimensions=this._plotDimensions;for(var V=0;V<w.jqplot.preSeriesInitHooks.length;V++){w.jqplot.preSeriesInitHooks[V].call(this.series[X],Z,W,this.options.seriesDefaults,this.options.series[X],this)}for(var V=0;V<this.preSeriesInitHooks.hooks.length;V++){this.preSeriesInitHooks.hooks[V].call(this.series[X],Z,W,this.options.seriesDefaults,this.options.series[X],this)}this.populatePlotData(this.series[X],X);this.series[X]._plotDimensions=this._plotDimensions;this.series[X].init(X,this.grid.borderWidth,this);for(var V=0;V<w.jqplot.postSeriesInitHooks.length;V++){w.jqplot.postSeriesInitHooks[V].call(this.series[X],Z,W,this.options.seriesDefaults,this.options.series[X],this)}for(var V=0;V<this.postSeriesInitHooks.hooks.length;V++){this.postSeriesInitHooks.hooks[V].call(this.series[X],Z,W,this.options.seriesDefaults,this.options.series[X],this)}this._sumy+=this.series[X]._sumy;this._sumx+=this.series[X]._sumx}for(var T in this.axes){this.axes[T]._plotDimensions=this._plotDimensions;this.axes[T].init()}if(this.sortData){O(this.series)}this.grid.init();this.grid._axes=this.axes;this.legend._series=this.series;for(var X=0;X<w.jqplot.postInitHooks.length;X++){w.jqplot.postInitHooks[X].call(this,Z,W,ab)}for(var X=0;X<this.postInitHooks.hooks.length;X++){this.postInitHooks.hooks[X].call(this,Z,W,ab)}};this.resetAxesScale=function(X,T){var V=T||{};var W=X||this.axes;if(W===true){W=this.axes}if(jQuery.isArray(W)){for(var U=0;U<W.length;U++){this.axes[W[U]].resetScale(V[W[U]])}}else{if(typeof(W)==="object"){for(var S in W){this.axes[S].resetScale(V[S])}}}};this.reInitialize=function(){this._height=this.target.height();this._width=this.target.width();if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Target dimension not set"}this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;for(var W in this.axes){this.axes[W]._plotWidth=this._width;this.axes[W]._plotHeight=this._height}this.title._plotWidth=this._width;if(this.textColor){this.target.css("color",this.textColor)}if(this.fontFamily){this.target.css("font-family",this.fontFamily)}if(this.fontSize){this.target.css("font-size",this.fontSize)}this._sumy=0;this._sumx=0;for(var U=0;U<this.series.length;U++){this.populatePlotData(this.series[U],U);this.series[U]._plotDimensions=this._plotDimensions;this.series[U].canvas._plotDimensions=this._plotDimensions;this._sumy+=this.series[U]._sumy;this._sumx+=this.series[U]._sumx}for(var S in this.axes){var T=this.axes[S]._ticks;for(var U=0;U<T.length;U++){var V=T[U]._elem;if(V){if(w.jqplot.use_excanvas){window.G_vmlCanvasManager.uninitElement(V.get(0))}V.emptyForce();V=null;T._elem=null}}T=null;this.axes[S]._plotDimensions=this._plotDimensions;this.axes[S]._ticks=[];this.axes[S].renderer.init.call(this.axes[S],{})}if(this.sortData){O(this.series)}this.grid._axes=this.axes;this.legend._series=this.series};function O(W){var aa,ab,ac,S,Z;for(var X=0;X<W.length;X++){var T;var Y=[W[X].data,W[X]._stackData,W[X]._plotData,W[X]._prevPlotData];for(var U=0;U<4;U++){T=true;aa=Y[U];if(W[X]._stackAxis=="x"){for(var V=0;V<aa.length;V++){if(typeof(aa[V][1])!="number"){T=false;break}}if(T){aa.sort(function(ae,ad){return ae[1]-ad[1]})}}else{for(var V=0;V<aa.length;V++){if(typeof(aa[V][0])!="number"){T=false;break}}if(T){aa.sort(function(ae,ad){return ae[0]-ad[0]})}}}}}this.populatePlotData=function(W,X){this._plotData=[];this._stackData=[];W._stackData=[];W._plotData=[];var aa={x:[],y:[]};if(this.stackSeries&&!W.disableStack){W._stack=true;var Y=W._stackAxis=="x"?0:1;var Z=Y?0:1;var ab=w.extend(true,[],W.data);var ac=w.extend(true,[],W.data);for(var U=0;U<X;U++){var S=this.series[U].data;for(var T=0;T<S.length;T++){ab[T][0]+=S[T][0];ab[T][1]+=S[T][1];ac[T][Y]+=S[T][Y]}}for(var V=0;V<ac.length;V++){aa.x.push(ac[V][0]);aa.y.push(ac[V][1])}this._plotData.push(ac);this._stackData.push(ab);W._stackData=ab;W._plotData=ac;W._plotValues=aa}else{for(var V=0;V<W.data.length;V++){aa.x.push(W.data[V][0]);aa.y.push(W.data[V][1])}this._stackData.push(W.data);this.series[X]._stackData=W.data;this._plotData.push(W.data);W._plotData=W.data;W._plotValues=aa}if(X>0){W._prevPlotData=this.series[X-1]._plotData}W._sumy=0;W._sumx=0;for(V=W.data.length-1;V>-1;V--){W._sumy+=W.data[V][1];W._sumx+=W.data[V][0]}};this.getNextSeriesColor=(function(T){var S=0;var U=T.seriesColors;return function(){if(S<U.length){return U[S++]}else{S=0;return U[S++]}}})(this);this.parseOptions=function(aa){for(var X=0;X<this.preParseOptionsHooks.hooks.length;X++){this.preParseOptionsHooks.hooks[X].call(this,aa)}for(var X=0;X<w.jqplot.preParseOptionsHooks.length;X++){w.jqplot.preParseOptionsHooks[X].call(this,aa)}this.options=w.extend(true,{},this.defaults,aa);this.stackSeries=this.options.stackSeries;if(this.options.seriesColors){this.seriesColors=this.options.seriesColors}if(this.options.negativeSeriesColors){this.negativeSeriesColors=this.options.negativeSeriesColors}if(this.options.captureRightClick){this.captureRightClick=this.options.captureRightClick}this.defaultAxisStart=(aa&&aa.defaultAxisStart!=null)?aa.defaultAxisStart:this.defaultAxisStart;var S=new this.colorGenerator(this.seriesColors);w.extend(true,this._gridPadding,this.options.gridPadding);this.sortData=(this.options.sortData!=null)?this.options.sortData:this.sortData;for(var T in this.axes){var V=this.axes[T];V._options=w.extend(true,{},this.options.axesDefaults,this.options.axes[T]);w.extend(true,V,this.options.axesDefaults,this.options.axes[T]);V._plotWidth=this._width;V._plotHeight=this._height}var Y=function(ae,ac,af){var ab=[];var ad;ac=ac||"vertical";if(!jQuery.isArray(ae[0])){for(ad=0;ad<ae.length;ad++){if(ac=="vertical"){ab.push([af+ad,ae[ad]])}else{ab.push([ae[ad],af+ad])}}}else{w.extend(true,ab,ae)}return ab};for(var X=0;X<this.data.length;X++){var Z=new D();for(var W=0;W<w.jqplot.preParseSeriesOptionsHooks.length;W++){w.jqplot.preParseSeriesOptionsHooks[W].call(Z,this.options.seriesDefaults,this.options.series[X])}for(var W=0;W<this.preParseSeriesOptionsHooks.hooks.length;W++){this.preParseSeriesOptionsHooks.hooks[W].call(Z,this.options.seriesDefaults,this.options.series[X])}w.extend(true,Z,{seriesColors:this.seriesColors,negativeSeriesColors:this.negativeSeriesColors},this.options.seriesDefaults,this.options.series[X]);var U="vertical";if(Z.renderer===w.jqplot.BarRenderer&&Z.rendererOptions&&Z.rendererOptions.barDirection=="horizontal"){U="horizontal"}Z.data=Y(this.data[X],U,this.defaultAxisStart);switch(Z.xaxis){case"xaxis":Z._xaxis=this.axes.xaxis;break;case"x2axis":Z._xaxis=this.axes.x2axis;break;default:break}Z._yaxis=this.axes[Z.yaxis];Z._xaxis._series.push(Z);Z._yaxis._series.push(Z);if(Z.show){Z._xaxis.show=true;Z._yaxis.show=true}if(!Z.color&&Z.show!=false){Z.color=S.next()}if(!Z.label){Z.label="Series "+(X+1).toString()}this.series.push(Z);for(var W=0;W<w.jqplot.postParseSeriesOptionsHooks.length;W++){w.jqplot.postParseSeriesOptionsHooks[W].call(this.series[X],this.options.seriesDefaults,this.options.series[X])}for(var W=0;W<this.postParseSeriesOptionsHooks.hooks.length;W++){this.postParseSeriesOptionsHooks.hooks[W].call(this.series[X],this.options.seriesDefaults,this.options.series[X])}}w.extend(true,this.grid,this.options.grid);for(var T in this.axes){var V=this.axes[T];if(V.borderWidth==null){V.borderWidth=this.grid.borderWidth}if(V.borderColor==null){if(T!="xaxis"&&T!="x2axis"&&V.useSeriesColor===true&&V.show){V.borderColor=V._series[0].color}else{V.borderColor=this.grid.borderColor}}}if(typeof this.options.title=="string"){this.title.text=this.options.title}else{if(typeof this.options.title=="object"){w.extend(true,this.title,this.options.title)}}this.title._plotWidth=this._width;this.legend.setOptions(this.options.legend);for(var X=0;X<w.jqplot.postParseOptionsHooks.length;X++){w.jqplot.postParseOptionsHooks[X].call(this,aa)}for(var X=0;X<this.postParseOptionsHooks.hooks.length;X++){this.postParseOptionsHooks.hooks[X].call(this,aa)}};this.destroy=function(){this.canvasManager.freeAllCanvases();this.target[0].innerHTML=""};this.replot=function(T){var U=T||{};var S=U.clear||true;var V=U.resetAxes||false;this.target.trigger("jqplotPreReplot");if(S){this.canvasManager.freeAllCanvases();if(this._eventCanvas){this.eventCanvas._elem.unbind()}this.target.unbind();this.target.empty()}this.reInitialize();if(V){this.resetAxesScale(V,U.axes)}this.draw();this.target.trigger("jqplotPostReplot")};this.redraw=function(S){S=(S!=null)?S:true;this.target.trigger("jqplotPreRedraw");if(S){this.canvasManager.freeAllCanvases();this.eventCanvas._elem.unbind();this.target.unbind();this.target.empty()}for(var U in this.axes){this.axes[U]._ticks=[]}for(var T=0;T<this.series.length;T++){this.populatePlotData(this.series[T],T)}this._sumy=0;this._sumx=0;for(T=0;T<this.series.length;T++){this._sumy+=this.series[T]._sumy;this._sumx+=this.series[T]._sumx}this.draw();this.target.trigger("jqplotPostRedraw")};this.draw=function(){if(this.drawIfHidden||this.target.is(":visible")){this.target.trigger("jqplotPreDraw");var Y,X;for(Y=0;Y<w.jqplot.preDrawHooks.length;Y++){w.jqplot.preDrawHooks[Y].call(this)}for(Y=0;Y<this.preDrawHooks.hooks.length;Y++){this.preDrawHooks.hooks[Y].call(this)}this.target.append(this.baseCanvas.createElement({left:0,right:0,top:0,bottom:0},"jqplot-base-canvas",null,this));this.baseCanvas.setContext();this.target.append(this.title.draw());this.title.pack({top:0,left:0});var ad=this.legend.draw();var ac={top:0,left:0,bottom:0,right:0};if(this.legend.placement=="outsideGrid"){this.target.append(ad);switch(this.legend.location){case"n":ac.top+=this.legend.getHeight();break;case"s":ac.bottom+=this.legend.getHeight();break;case"ne":case"e":case"se":ac.right+=this.legend.getWidth();break;case"nw":case"w":case"sw":ac.left+=this.legend.getWidth();break;default:ac.right+=this.legend.getWidth();break}ad=ad.detach()}var S=this.axes;for(var U in S){this.target.append(S[U].draw(this.baseCanvas._ctx,this));S[U].set()}if(S.yaxis.show){ac.left+=S.yaxis.getWidth()}var V=["y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];var T=[0,0,0,0,0,0,0,0];var aa=0;var W;for(W=0;W<8;W++){if(S[V[W]].show){aa+=S[V[W]].getWidth();T[W]=aa}}ac.right+=aa;if(S.x2axis.show){ac.top+=S.x2axis.getHeight()}if(this.title.show){ac.top+=this.title.getHeight()}if(S.xaxis.show){ac.bottom+=S.xaxis.getHeight()}var Z=["top","bottom","left","right"];for(var W in Z){if(this._gridPadding[Z[W]]==null&&ac[Z[W]]>0){this._gridPadding[Z[W]]=ac[Z[W]]}else{if(this._gridPadding[Z[W]]==null){this._gridPadding[Z[W]]=this._defaultGridPadding[Z[W]]}}}var ab=(this.legend.placement=="outsideGrid")?{top:this.title.getHeight(),left:0,right:0,bottom:0}:this._gridPadding;S.xaxis.pack({position:"absolute",bottom:this._gridPadding.bottom-S.xaxis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});S.yaxis.pack({position:"absolute",top:0,left:this._gridPadding.left-S.yaxis.getWidth(),height:this._height},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});S.x2axis.pack({position:"absolute",top:this._gridPadding.top-S.x2axis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});for(Y=8;Y>0;Y--){S[V[Y-1]].pack({position:"absolute",top:0,right:this._gridPadding.right-T[Y-1]},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top})}this.target.append(this.grid.createElement(this._gridPadding,this));this.grid.draw();for(Y=0;Y<this.series.length;Y++){X=this.seriesStack[Y];this.target.append(this.series[X].shadowCanvas.createElement(this._gridPadding,"jqplot-series-shadowCanvas",null,this));this.series[X].shadowCanvas.setContext();this.series[X].shadowCanvas._elem.data("seriesIndex",X)}for(Y=0;Y<this.series.length;Y++){X=this.seriesStack[Y];this.target.append(this.series[X].canvas.createElement(this._gridPadding,"jqplot-series-canvas",null,this));this.series[X].canvas.setContext();this.series[X].canvas._elem.data("seriesIndex",X)}this.target.append(this.eventCanvas.createElement(this._gridPadding,"jqplot-event-canvas",null,this));this.eventCanvas.setContext();this.eventCanvas._ctx.fillStyle="rgba(0,0,0,0)";this.eventCanvas._ctx.fillRect(0,0,this.eventCanvas._ctx.canvas.width,this.eventCanvas._ctx.canvas.height);this.bindCustomEvents();if(this.legend.preDraw){this.eventCanvas._elem.before(ad);this.legend.pack(ab);if(this.legend._elem){this.drawSeries({legendInfo:{location:this.legend.location,placement:this.legend.placement,width:this.legend.getWidth(),height:this.legend.getHeight(),xoffset:this.legend.xoffset,yoffset:this.legend.yoffset}})}else{this.drawSeries()}}else{this.drawSeries();if(this.series.length){w(this.series[this.series.length-1].canvas._elem).after(ad)}this.legend.pack(ab)}for(var Y=0;Y<w.jqplot.eventListenerHooks.length;Y++){this.eventCanvas._elem.bind(w.jqplot.eventListenerHooks[Y][0],{plot:this},w.jqplot.eventListenerHooks[Y][1])}for(var Y=0;Y<this.eventListenerHooks.hooks.length;Y++){this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[Y][0],{plot:this},this.eventListenerHooks.hooks[Y][1])}for(var Y=0;Y<w.jqplot.postDrawHooks.length;Y++){w.jqplot.postDrawHooks[Y].call(this)}for(var Y=0;Y<this.postDrawHooks.hooks.length;Y++){this.postDrawHooks.hooks[Y].call(this)}if(this.target.is(":visible")){this._drawCount+=1}this.target.trigger("jqplotPostDraw",[this])}};this.bindCustomEvents=function(){this.eventCanvas._elem.bind("click",{plot:this},this.onClick);this.eventCanvas._elem.bind("dblclick",{plot:this},this.onDblClick);this.eventCanvas._elem.bind("mousedown",{plot:this},this.onMouseDown);this.eventCanvas._elem.bind("mousemove",{plot:this},this.onMouseMove);this.eventCanvas._elem.bind("mouseenter",{plot:this},this.onMouseEnter);this.eventCanvas._elem.bind("mouseleave",{plot:this},this.onMouseLeave);if(this.captureRightClick){this.eventCanvas._elem.bind("mouseup",{plot:this},this.onRightClick);this.eventCanvas._elem.get(0).oncontextmenu=function(){return false}}else{this.eventCanvas._elem.bind("mouseup",{plot:this},this.onMouseUp)}};function P(aa){var Z=aa.data.plot;var V=Z.eventCanvas._elem.offset();var Y={x:aa.pageX-V.left,y:aa.pageY-V.top};var W={xaxis:null,yaxis:null,x2axis:null,y2axis:null,y3axis:null,y4axis:null,y5axis:null,y6axis:null,y7axis:null,y8axis:null,y9axis:null};var X=["xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];var S=Z.axes;var T,U;for(T=11;T>0;T--){U=X[T-1];if(S[U].show){W[U]=S[U].series_p2u(Y[U.charAt(0)])}}return{offsets:V,gridPos:Y,dataPos:W}}function R(S,T){var X=T.series;var aC,aB,aA,av,aw,ap,ao,ac,aa,af,ag,aq;var az,aD,ax,Y,an,at;var U,au;for(aA=T.seriesStack.length-1;aA>=0;aA--){aC=T.seriesStack[aA];av=X[aC];switch(av.renderer.constructor){case w.jqplot.BarRenderer:ap=S.x;ao=S.y;for(aB=0;aB<av._barPoints.length;aB++){an=av._barPoints[aB];ax=av.gridData[aB];if(ap>an[0][0]&&ap<an[2][0]&&ao>an[2][1]&&ao<an[0][1]){return{seriesIndex:av.index,pointIndex:aB,gridData:ax,data:av.data[aB],points:av._barPoints[aB]}}}break;case w.jqplot.DonutRenderer:af=av.startAngle/180*Math.PI;ap=S.x-av._center[0];ao=S.y-av._center[1];aw=Math.sqrt(Math.pow(ap,2)+Math.pow(ao,2));if(ap>0&&-ao>=0){ac=2*Math.PI-Math.atan(-ao/ap)}else{if(ap>0&&-ao<0){ac=-Math.atan(-ao/ap)}else{if(ap<0){ac=Math.PI-Math.atan(-ao/ap)}else{if(ap==0&&-ao>0){ac=3*Math.PI/2}else{if(ap==0&&-ao<0){ac=Math.PI/2}else{if(ap==0&&ao==0){ac=0}}}}}}if(af){ac-=af;if(ac<0){ac+=2*Math.PI}else{if(ac>2*Math.PI){ac-=2*Math.PI}}}aa=av.sliceMargin/180*Math.PI;if(aw<av._radius&&aw>av._innerRadius){for(aB=0;aB<av.gridData.length;aB++){ag=(aB>0)?av.gridData[aB-1][1]+aa:aa;aq=av.gridData[aB][1];if(ac>ag&&ac<aq){return{seriesIndex:av.index,pointIndex:aB,gridData:av.gridData[aB],data:av.data[aB]}}}}break;case w.jqplot.PieRenderer:af=av.startAngle/180*Math.PI;ap=S.x-av._center[0];ao=S.y-av._center[1];aw=Math.sqrt(Math.pow(ap,2)+Math.pow(ao,2));if(ap>0&&-ao>=0){ac=2*Math.PI-Math.atan(-ao/ap)}else{if(ap>0&&-ao<0){ac=-Math.atan(-ao/ap)}else{if(ap<0){ac=Math.PI-Math.atan(-ao/ap)}else{if(ap==0&&-ao>0){ac=3*Math.PI/2}else{if(ap==0&&-ao<0){ac=Math.PI/2}else{if(ap==0&&ao==0){ac=0}}}}}}if(af){ac-=af;if(ac<0){ac+=2*Math.PI}else{if(ac>2*Math.PI){ac-=2*Math.PI}}}aa=av.sliceMargin/180*Math.PI;if(aw<av._radius){for(aB=0;aB<av.gridData.length;aB++){ag=(aB>0)?av.gridData[aB-1][1]+aa:aa;aq=av.gridData[aB][1];if(ac>ag&&ac<aq){return{seriesIndex:av.index,pointIndex:aB,gridData:av.gridData[aB],data:av.data[aB]}}}}break;case w.jqplot.BubbleRenderer:ap=S.x;ao=S.y;var al=null;if(av.show){for(var aB=0;aB<av.gridData.length;aB++){ax=av.gridData[aB];aD=Math.sqrt((ap-ax[0])*(ap-ax[0])+(ao-ax[1])*(ao-ax[1]));if(aD<=ax[2]&&(aD<=az||az==null)){az=aD;al={seriesIndex:aC,pointIndex:aB,gridData:ax,data:av.data[aB]}}}if(al!=null){return al}}break;case w.jqplot.FunnelRenderer:ap=S.x;ao=S.y;var ar=av._vertices,W=ar[0],V=ar[ar.length-1],Z,ak,ae;function ay(aG,aI,aH){var aF=(aI[1]-aH[1])/(aI[0]-aH[0]);var aE=aI[1]-aF*aI[0];var aJ=aG+aI[1];return[(aJ-aE)/aF,aJ]}Z=ay(ao,W[0],V[3]);ak=ay(ao,W[1],V[2]);for(aB=0;aB<ar.length;aB++){ae=ar[aB];if(ao>=ae[0][1]&&ao<=ae[3][1]&&ap>=Z[0]&&ap<=ak[0]){return{seriesIndex:av.index,pointIndex:aB,gridData:null,data:av.data[aB]}}}break;case w.jqplot.LineRenderer:ap=S.x;ao=S.y;aw=av.renderer;if(av.show){if(av.fill){var ad=false;if(ap>av._boundingBox[0][0]&&ap<av._boundingBox[1][0]&&ao>av._boundingBox[1][1]&&ao<av._boundingBox[0][1]){var aj=av._areaPoints.length;var am;var aB=aj-1;for(var am=0;am<aj;am++){var ai=[av._areaPoints[am][0],av._areaPoints[am][1]];var ah=[av._areaPoints[aB][0],av._areaPoints[aB][1]];if(ai[1]<ao&&ah[1]>=ao||ah[1]<ao&&ai[1]>=ao){if(ai[0]+(ao-ai[1])/(ah[1]-ai[1])*(ah[0]-ai[0])<ap){ad=!ad}}aB=am}}if(ad){return{seriesIndex:aC,pointIndex:null,gridData:av.gridData,data:av.data,points:av._areaPoints}}break}else{au=av.markerRenderer.size/2+av.neighborThreshold;U=(au>0)?au:0;for(var aB=0;aB<av.gridData.length;aB++){ax=av.gridData[aB];if(aw.constructor==w.jqplot.OHLCRenderer){if(aw.candleStick){var ab=av._yaxis.series_u2p;if(ap>=ax[0]-aw._bodyWidth/2&&ap<=ax[0]+aw._bodyWidth/2&&ao>=ab(av.data[aB][2])&&ao<=ab(av.data[aB][3])){return{seriesIndex:aC,pointIndex:aB,gridData:ax,data:av.data[aB]}}}else{if(!aw.hlc){var ab=av._yaxis.series_u2p;if(ap>=ax[0]-aw._tickLength&&ap<=ax[0]+aw._tickLength&&ao>=ab(av.data[aB][2])&&ao<=ab(av.data[aB][3])){return{seriesIndex:aC,pointIndex:aB,gridData:ax,data:av.data[aB]}}}else{var ab=av._yaxis.series_u2p;if(ap>=ax[0]-aw._tickLength&&ap<=ax[0]+aw._tickLength&&ao>=ab(av.data[aB][1])&&ao<=ab(av.data[aB][2])){return{seriesIndex:aC,pointIndex:aB,gridData:ax,data:av.data[aB]}}}}}else{if(ax[0]!=null&&ax[1]!=null){aD=Math.sqrt((ap-ax[0])*(ap-ax[0])+(ao-ax[1])*(ao-ax[1]));if(aD<=U&&(aD<=az||az==null)){az=aD;return{seriesIndex:aC,pointIndex:aB,gridData:ax,data:av.data[aB]}}}}}}}break;default:ap=S.x;ao=S.y;aw=av.renderer;if(av.show){au=av.markerRenderer.size/2+av.neighborThreshold;U=(au>0)?au:0;for(var aB=0;aB<av.gridData.length;aB++){ax=av.gridData[aB];if(aw.constructor==w.jqplot.OHLCRenderer){if(aw.candleStick){var ab=av._yaxis.series_u2p;if(ap>=ax[0]-aw._bodyWidth/2&&ap<=ax[0]+aw._bodyWidth/2&&ao>=ab(av.data[aB][2])&&ao<=ab(av.data[aB][3])){return{seriesIndex:aC,pointIndex:aB,gridData:ax,data:av.data[aB]}}}else{if(!aw.hlc){var ab=av._yaxis.series_u2p;if(ap>=ax[0]-aw._tickLength&&ap<=ax[0]+aw._tickLength&&ao>=ab(av.data[aB][2])&&ao<=ab(av.data[aB][3])){return{seriesIndex:aC,pointIndex:aB,gridData:ax,data:av.data[aB]}}}else{var ab=av._yaxis.series_u2p;if(ap>=ax[0]-aw._tickLength&&ap<=ax[0]+aw._tickLength&&ao>=ab(av.data[aB][1])&&ao<=ab(av.data[aB][2])){return{seriesIndex:aC,pointIndex:aB,gridData:ax,data:av.data[aB]}}}}}else{aD=Math.sqrt((ap-ax[0])*(ap-ax[0])+(ao-ax[1])*(ao-ax[1]));if(aD<=U&&(aD<=az||az==null)){az=aD;return{seriesIndex:aC,pointIndex:aB,gridData:ax,data:av.data[aB]}}}}}break}}return null}this.onClick=function(U){var T=P(U);var W=U.data.plot;var V=R(T.gridPos,W);var S=jQuery.Event("jqplotClick");S.pageX=U.pageX;S.pageY=U.pageY;w(this).trigger(S,[T.gridPos,T.dataPos,V,W])};this.onDblClick=function(U){var T=P(U);var W=U.data.plot;var V=R(T.gridPos,W);var S=jQuery.Event("jqplotDblClick");S.pageX=U.pageX;S.pageY=U.pageY;w(this).trigger(S,[T.gridPos,T.dataPos,V,W])};this.onMouseDown=function(U){var T=P(U);var W=U.data.plot;var V=R(T.gridPos,W);var S=jQuery.Event("jqplotMouseDown");S.pageX=U.pageX;S.pageY=U.pageY;w(this).trigger(S,[T.gridPos,T.dataPos,V,W])};this.onMouseUp=function(U){var T=P(U);var S=jQuery.Event("jqplotMouseUp");S.pageX=U.pageX;S.pageY=U.pageY;w(this).trigger(S,[T.gridPos,T.dataPos,null,U.data.plot])};this.onRightClick=function(U){var T=P(U);var W=U.data.plot;var V=R(T.gridPos,W);if(W.captureRightClick){if(U.which==3){var S=jQuery.Event("jqplotRightClick");S.pageX=U.pageX;S.pageY=U.pageY;w(this).trigger(S,[T.gridPos,T.dataPos,V,W])}else{var S=jQuery.Event("jqplotMouseUp");S.pageX=U.pageX;S.pageY=U.pageY;w(this).trigger(S,[T.gridPos,T.dataPos,V,W])}}};this.onMouseMove=function(U){var T=P(U);var W=U.data.plot;var V=R(T.gridPos,W);var S=jQuery.Event("jqplotMouseMove");S.pageX=U.pageX;S.pageY=U.pageY;w(this).trigger(S,[T.gridPos,T.dataPos,V,W])};this.onMouseEnter=function(U){var T=P(U);var V=U.data.plot;var S=jQuery.Event("jqplotMouseEnter");S.pageX=U.pageX;S.pageY=U.pageY;w(this).trigger(S,[T.gridPos,T.dataPos,null,V])};this.onMouseLeave=function(U){var T=P(U);var V=U.data.plot;var S=jQuery.Event("jqplotMouseLeave");S.pageX=U.pageX;S.pageY=U.pageY;w(this).trigger(S,[T.gridPos,T.dataPos,null,V])};this.drawSeries=function(U,S){var W,V,T;S=(typeof(U)==="number"&&S==null)?U:S;U=(typeof(U)==="object")?U:{};if(S!=l){V=this.series[S];T=V.shadowCanvas._ctx;T.clearRect(0,0,T.canvas.width,T.canvas.height);V.drawShadow(T,U,this);T=V.canvas._ctx;T.clearRect(0,0,T.canvas.width,T.canvas.height);V.draw(T,U,this);if(V.renderer.constructor==w.jqplot.BezierCurveRenderer){if(S<this.series.length-1){this.drawSeries(S+1)}}}else{for(W=0;W<this.series.length;W++){V=this.series[W];T=V.shadowCanvas._ctx;T.clearRect(0,0,T.canvas.width,T.canvas.height);V.drawShadow(T,U,this);T=V.canvas._ctx;T.clearRect(0,0,T.canvas.width,T.canvas.height);V.draw(T,U,this)}}U=S=W=V=T=null};this.moveSeriesToFront=function(T){T=parseInt(T,10);var W=w.inArray(T,this.seriesStack);if(W==-1){return}if(W==this.seriesStack.length-1){this.previousSeriesStack=this.seriesStack.slice(0);return}var S=this.seriesStack[this.seriesStack.length-1];var V=this.series[T].canvas._elem.detach();var U=this.series[T].shadowCanvas._elem.detach();this.series[S].shadowCanvas._elem.after(U);this.series[S].canvas._elem.after(V);this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack.splice(W,1);this.seriesStack.push(T)};this.moveSeriesToBack=function(T){T=parseInt(T,10);var W=w.inArray(T,this.seriesStack);if(W==0||W==-1){return}var S=this.seriesStack[0];var V=this.series[T].canvas._elem.detach();var U=this.series[T].shadowCanvas._elem.detach();this.series[S].shadowCanvas._elem.before(U);this.series[S].canvas._elem.before(V);this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack.splice(W,1);this.seriesStack.unshift(T)};this.restorePreviousSeriesOrder=function(){var Y,X,W,V,U,S,T;if(this.seriesStack==this.previousSeriesStack){return}for(Y=1;Y<this.previousSeriesStack.length;Y++){S=this.previousSeriesStack[Y];T=this.previousSeriesStack[Y-1];W=this.series[S].canvas._elem.detach();V=this.series[S].shadowCanvas._elem.detach();this.series[T].shadowCanvas._elem.after(V);this.series[T].canvas._elem.after(W)}U=this.seriesStack.slice(0);this.seriesStack=this.previousSeriesStack.slice(0);this.previousSeriesStack=U};this.restoreOriginalSeriesOrder=function(){var W,V,S=[],U,T;for(W=0;W<this.series.length;W++){S.push(W)}if(this.seriesStack==S){return}this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack=S;for(W=1;W<this.seriesStack.length;W++){U=this.series[W].canvas._elem.detach();T=this.series[W].shadowCanvas._elem.detach();this.series[W-1].shadowCanvas._elem.after(T);this.series[W-1].canvas._elem.after(U)}};this.activateTheme=function(S){this.themeEngine.activate(this,S)}}w.jqplot.computeHighlightColors=function(P){var R;if(jQuery.isArray(P)){R=[];for(var T=0;T<P.length;T++){var S=w.jqplot.getColorComponents(P[T]);var O=[S[0],S[1],S[2]];var U=O[0]+O[1]+O[2];for(var Q=0;Q<3;Q++){O[Q]=(U>570)?O[Q]*0.8:O[Q]+0.3*(255-O[Q]);O[Q]=parseInt(O[Q],10)}R.push("rgb("+O[0]+","+O[1]+","+O[2]+")")}}else{var S=w.jqplot.getColorComponents(P);var O=[S[0],S[1],S[2]];var U=O[0]+O[1]+O[2];for(var Q=0;Q<3;Q++){O[Q]=(U>570)?O[Q]*0.8:O[Q]+0.3*(255-O[Q]);O[Q]=parseInt(O[Q],10)}R="rgb("+O[0]+","+O[1]+","+O[2]+")"}return R};w.jqplot.ColorGenerator=function(P){P=P||w.jqplot.config.defaultColors;var O=0;this.next=function(){if(O<P.length){return P[O++]}else{O=0;return P[O++]}};this.previous=function(){if(O>0){return P[O--]}else{O=P.length-1;return P[O]}};this.get=function(R){var Q=R-P.length*Math.floor(R/P.length);return P[Q]};this.setColors=function(Q){P=Q};this.reset=function(){O=0}};w.jqplot.hex2rgb=function(Q,O){Q=Q.replace("#","");if(Q.length==3){Q=Q.charAt(0)+Q.charAt(0)+Q.charAt(1)+Q.charAt(1)+Q.charAt(2)+Q.charAt(2)}var P;P="rgba("+parseInt(Q.slice(0,2),16)+", "+parseInt(Q.slice(2,4),16)+", "+parseInt(Q.slice(4,6),16);if(O){P+=", "+O}P+=")";return P};w.jqplot.rgb2hex=function(T){var Q=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/;var O=T.match(Q);var S="#";for(var R=1;R<4;R++){var P;if(O[R].search(/%/)!=-1){P=parseInt(255*O[R]/100,10).toString(16);if(P.length==1){P="0"+P}}else{P=parseInt(O[R],10).toString(16);if(P.length==1){P="0"+P}}S+=P}return S};w.jqplot.normalize2rgb=function(P,O){if(P.search(/^ *rgba?\(/)!=-1){return P}else{if(P.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/)!=-1){return w.jqplot.hex2rgb(P,O)}else{throw"invalid color spec"}}};w.jqplot.getColorComponents=function(T){T=w.jqplot.colorKeywordMap[T]||T;var R=w.jqplot.normalize2rgb(T);var Q=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/;var O=R.match(Q);var P=[];for(var S=1;S<4;S++){if(O[S].search(/%/)!=-1){P[S-1]=parseInt(255*O[S]/100,10)}else{P[S-1]=parseInt(O[S],10)}}P[3]=parseFloat(O[4])?parseFloat(O[4]):1;return P};w.jqplot.colorKeywordMap={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb( 0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb( 0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb( 0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb( 95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(220, 20, 60)",cyan:"rgb( 0, 255, 255)",darkblue:"rgb( 0, 0, 139)",darkcyan:"rgb( 0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgreen:"rgb( 0, 100, 0)",darkgrey:"rgb(169, 169, 169)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb( 85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb( 72, 61, 139)",darkslategray:"rgb( 47, 79, 79)",darkslategrey:"rgb( 47, 79, 79)",darkturquoise:"rgb( 0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb( 0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb( 30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb( 34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb( 0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb( 75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgray:"rgb(211, 211, 211)",lightgreen:"rgb(144, 238, 144)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb( 32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb( 0, 255, 0)",limegreen:"rgb( 50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb( 0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb( 60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb( 0, 250, 154)",mediumturquoise:"rgb( 72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb( 25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb( 0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb( 65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb( 46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb( 0, 255, 127)",steelblue:"rgb( 70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb( 0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb( 64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)"};w.jqplot.AxisLabelRenderer=function(O){w.jqplot.ElemContainer.call(this);this.axis;this.show=true;this.label="";this.fontFamily=null;this.fontSize=null;this.textColor=null;this._elem;this.escapeHTML=false;w.extend(true,this,O)};w.jqplot.AxisLabelRenderer.prototype=new w.jqplot.ElemContainer();w.jqplot.AxisLabelRenderer.prototype.constructor=w.jqplot.AxisLabelRenderer;w.jqplot.AxisLabelRenderer.prototype.init=function(O){w.extend(true,this,O)};w.jqplot.AxisLabelRenderer.prototype.draw=function(O,P){if(this._elem){this._elem.emptyForce();this._elem=null}this._elem=w('<div style="position:absolute;" class="jqplot-'+this.axis+'-label"></div>');if(Number(this.label)){this._elem.css("white-space","nowrap")}if(!this.escapeHTML){this._elem.html(this.label)}else{this._elem.text(this.label)}if(this.fontFamily){this._elem.css("font-family",this.fontFamily)}if(this.fontSize){this._elem.css("font-size",this.fontSize)}if(this.textColor){this._elem.css("color",this.textColor)}return this._elem};w.jqplot.AxisLabelRenderer.prototype.pack=function(){};w.jqplot.AxisTickRenderer=function(O){w.jqplot.ElemContainer.call(this);this.mark="outside";this.axis;this.showMark=true;this.showGridline=true;this.isMinorTick=false;this.size=4;this.markSize=6;this.show=true;this.showLabel=true;this.label="";this.value=null;this._styles={};this.formatter=w.jqplot.DefaultTickFormatter;this.prefix="";this.formatString="";this.fontFamily;this.fontSize;this.textColor;this.escapeHTML=false;this._elem;this._breakTick=false;w.extend(true,this,O)};w.jqplot.AxisTickRenderer.prototype.init=function(O){w.extend(true,this,O)};w.jqplot.AxisTickRenderer.prototype=new w.jqplot.ElemContainer();w.jqplot.AxisTickRenderer.prototype.constructor=w.jqplot.AxisTickRenderer;w.jqplot.AxisTickRenderer.prototype.setTick=function(O,Q,P){this.value=O;this.axis=Q;if(P){this.isMinorTick=true}return this};w.jqplot.AxisTickRenderer.prototype.draw=function(){if(!this.label){this.label=this.prefix+this.formatter(this.formatString,this.value)}var P={position:"absolute"};if(Number(this.label)){P.whitSpace="nowrap"}if(this._elem){this._elem.emptyForce();this._elem=null}this._elem=w(document.createElement("div"));this._elem.addClass("jqplot-"+this.axis+"-tick");if(!this.escapeHTML){this._elem.html(this.label)}else{this._elem.text(this.label)}this._elem.css(P);for(var O in this._styles){this._elem.css(O,this._styles[O])}if(this.fontFamily){this._elem.css("font-family",this.fontFamily)}if(this.fontSize){this._elem.css("font-size",this.fontSize)}if(this.textColor){this._elem.css("color",this.textColor)}if(this._breakTick){this._elem.addClass("jqplot-breakTick")}return this._elem};w.jqplot.DefaultTickFormatter=function(O,P){if(typeof P=="number"){if(!O){O=w.jqplot.config.defaultTickFormatString}return w.jqplot.sprintf(O,P)}else{return String(P)}};w.jqplot.AxisTickRenderer.prototype.pack=function(){};w.jqplot.CanvasGridRenderer=function(){this.shadowRenderer=new w.jqplot.ShadowRenderer()};w.jqplot.CanvasGridRenderer.prototype.init=function(P){this._ctx;w.extend(true,this,P);var O={lineJoin:"miter",lineCap:"round",fill:false,isarc:false,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.shadowWidth,closePath:false,strokeStyle:this.shadowColor};this.renderer.shadowRenderer.init(O)};w.jqplot.CanvasGridRenderer.prototype.createElement=function(R){var Q;if(this._elem){if(w.jqplot.use_excanvas){Q=this._elem.get(0);window.G_vmlCanvasManager.uninitElement(Q);Q=null}this._elem.emptyForce();this._elem=null}Q=R.canvasManager.getCanvas();var O=this._plotDimensions.width;var P=this._plotDimensions.height;Q.width=O;Q.height=P;this._elem=w(Q);this._elem.addClass("jqplot-grid-canvas");this._elem.css({position:"absolute",left:0,top:0});Q=R.canvasManager.initCanvas(Q);this._top=this._offsets.top;this._bottom=P-this._offsets.bottom;this._left=this._offsets.left;this._right=O-this._offsets.right;this._width=this._right-this._left;this._height=this._bottom-this._top;Q=null;return this._elem};w.jqplot.CanvasGridRenderer.prototype.draw=function(){this._ctx=this._elem.get(0).getContext("2d");var Y=this._ctx;var ab=this._axes;Y.save();Y.clearRect(0,0,this._plotDimensions.width,this._plotDimensions.height);Y.fillStyle=this.backgroundColor||this.background;Y.fillRect(this._left,this._top,this._width,this._height);if(true){Y.save();Y.lineJoin="miter";Y.lineCap="butt";Y.lineWidth=this.gridLineWidth;Y.strokeStyle=this.gridLineColor;var ae,ad,W,X;var T=["xaxis","yaxis","x2axis","y2axis"];for(var ac=4;ac>0;ac--){var ag=T[ac-1];var O=ab[ag];var af=O._ticks;if(O.show){for(var Z=af.length;Z>0;Z--){var U=af[Z-1];if(U.show){var R=Math.round(O.u2p(U.value))+0.5;switch(ag){case"xaxis":if(U.showGridline&&this.drawGridlines){V(R,this._top,R,this._bottom)}if(U.showMark&&U.mark){W=U.markSize;X=U.mark;var R=Math.round(O.u2p(U.value))+0.5;switch(X){case"outside":ae=this._bottom;ad=this._bottom+W;break;case"inside":ae=this._bottom-W;ad=this._bottom;break;case"cross":ae=this._bottom-W;ad=this._bottom+W;break;default:ae=this._bottom;ad=this._bottom+W;break}if(this.shadow){this.renderer.shadowRenderer.draw(Y,[[R,ae],[R,ad]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false})}V(R,ae,R,ad)}break;case"yaxis":if(U.showGridline&&this.drawGridlines){V(this._right,R,this._left,R)}if(U.showMark&&U.mark){W=U.markSize;X=U.mark;var R=Math.round(O.u2p(U.value))+0.5;switch(X){case"outside":ae=this._left-W;ad=this._left;break;case"inside":ae=this._left;ad=this._left+W;break;case"cross":ae=this._left-W;ad=this._left+W;break;default:ae=this._left-W;ad=this._left;break}if(this.shadow){this.renderer.shadowRenderer.draw(Y,[[ae,R],[ad,R]],{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})}V(ae,R,ad,R,{strokeStyle:O.borderColor})}break;case"x2axis":if(U.showGridline&&this.drawGridlines){V(R,this._bottom,R,this._top)}if(U.showMark&&U.mark){W=U.markSize;X=U.mark;var R=Math.round(O.u2p(U.value))+0.5;switch(X){case"outside":ae=this._top-W;ad=this._top;break;case"inside":ae=this._top;ad=this._top+W;break;case"cross":ae=this._top-W;ad=this._top+W;break;default:ae=this._top-W;ad=this._top;break}if(this.shadow){this.renderer.shadowRenderer.draw(Y,[[R,ae],[R,ad]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false})}V(R,ae,R,ad)}break;case"y2axis":if(U.showGridline&&this.drawGridlines){V(this._left,R,this._right,R)}if(U.showMark&&U.mark){W=U.markSize;X=U.mark;var R=Math.round(O.u2p(U.value))+0.5;switch(X){case"outside":ae=this._right;ad=this._right+W;break;case"inside":ae=this._right-W;ad=this._right;break;case"cross":ae=this._right-W;ad=this._right+W;break;default:ae=this._right;ad=this._right+W;break}if(this.shadow){this.renderer.shadowRenderer.draw(Y,[[ae,R],[ad,R]],{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})}V(ae,R,ad,R,{strokeStyle:O.borderColor})}break;default:break}}}U=null}O=null;af=null}T=["y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];for(var ac=7;ac>0;ac--){var O=ab[T[ac-1]];var af=O._ticks;if(O.show){var P=af[O.numberTicks-1];var S=af[0];var Q=O.getLeft();var aa=[[Q,P.getTop()+P.getHeight()/2],[Q,S.getTop()+S.getHeight()/2+1]];if(this.shadow){this.renderer.shadowRenderer.draw(Y,aa,{lineCap:"butt",fill:false,closePath:false})}V(aa[0][0],aa[0][1],aa[1][0],aa[1][1],{lineCap:"butt",strokeStyle:O.borderColor,lineWidth:O.borderWidth});for(var Z=af.length;Z>0;Z--){var U=af[Z-1];W=U.markSize;X=U.mark;var R=Math.round(O.u2p(U.value))+0.5;if(U.showMark&&U.mark){switch(X){case"outside":ae=Q;ad=Q+W;break;case"inside":ae=Q-W;ad=Q;break;case"cross":ae=Q-W;ad=Q+W;break;default:ae=Q;ad=Q+W;break}aa=[[ae,R],[ad,R]];if(this.shadow){this.renderer.shadowRenderer.draw(Y,aa,{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})}V(ae,R,ad,R,{strokeStyle:O.borderColor})}U=null}S=null}O=null;af=null}Y.restore()}function V(al,ak,ai,ah,aj){Y.save();aj=aj||{};if(aj.lineWidth==null||aj.lineWidth!=0){w.extend(true,Y,aj);Y.beginPath();Y.moveTo(al,ak);Y.lineTo(ai,ah);Y.stroke();Y.restore()}}if(this.shadow){var aa=[[this._left,this._bottom],[this._right,this._bottom],[this._right,this._top]];this.renderer.shadowRenderer.draw(Y,aa)}if(this.borderWidth!=0&&this.drawBorder){V(this._left,this._top,this._right,this._top,{lineCap:"round",strokeStyle:ab.x2axis.borderColor,lineWidth:ab.x2axis.borderWidth});V(this._right,this._top,this._right,this._bottom,{lineCap:"round",strokeStyle:ab.y2axis.borderColor,lineWidth:ab.y2axis.borderWidth});V(this._right,this._bottom,this._left,this._bottom,{lineCap:"round",strokeStyle:ab.xaxis.borderColor,lineWidth:ab.xaxis.borderWidth});V(this._left,this._bottom,this._left,this._top,{lineCap:"round",strokeStyle:ab.yaxis.borderColor,lineWidth:ab.yaxis.borderWidth})}Y.restore();Y=null;ab=null};w.jqplot.DivTitleRenderer=function(){};w.jqplot.DivTitleRenderer.prototype.init=function(O){w.extend(true,this,O)};w.jqplot.DivTitleRenderer.prototype.draw=function(){if(this._elem){this._elem.emptyForce();this._elem=null}var R=this.renderer;var Q=document.createElement("div");this._elem=w(Q);this._elem.addClass("jqplot-title");if(!this.text){this.show=false;this._elem.height(0);this._elem.width(0)}else{if(this.text){var O;if(this.color){O=this.color}else{if(this.textColor){O=this.textColor}}var P={position:"absolute",top:"0px",left:"0px"};if(this._plotWidth){P.width=this._plotWidth+"px"}if(this.fontSize){P.fontSize=this.fontSize}if(this.textAlign){P.textAlign=this.textAlign}else{P.textAlign="center"}if(O){P.color=O}if(this.paddingBottom){P.paddingBottom=this.paddingBottom}if(this.fontFamily){P.fontFamily=this.fontFamily}this._elem.css(P);this._elem.text(this.text)}}Q=null;return this._elem};w.jqplot.DivTitleRenderer.prototype.pack=function(){};w.jqplot.LineRenderer=function(){this.shapeRenderer=new w.jqplot.ShapeRenderer();this.shadowRenderer=new w.jqplot.ShadowRenderer()};w.jqplot.LineRenderer.prototype.init=function(P,T){P=P||{};this._type="line";var R={highlightMouseOver:P.highlightMouseOver,highlightMouseDown:P.highlightMouseDown,highlightColor:P.highlightColor};delete (P.highlightMouseOver);delete (P.highlightMouseDown);delete (P.highlightColor);w.extend(true,this.renderer,P);var S={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:false,strokeStyle:this.color,fillStyle:this.fillColor,lineWidth:this.lineWidth,closePath:this.fill};this.renderer.shapeRenderer.init(S);if(this.lineWidth>2.5){var Q=this.shadowOffset*(1+(Math.atan((this.lineWidth/2.5))/0.785398163-1)*0.6)}else{var Q=this.shadowOffset*Math.atan((this.lineWidth/2.5))/0.785398163}var O={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:false,angle:this.shadowAngle,offset:Q,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.lineWidth,closePath:this.fill};this.renderer.shadowRenderer.init(O);this._areaPoints=[];this._boundingBox=[[],[]];if(!this.isTrendline&&this.fill){this.highlightMouseOver=true;this.highlightMouseDown=false;this.highlightColor=null;if(R.highlightMouseDown&&R.highlightMouseOver==null){R.highlightMouseOver=false}w.extend(true,this,{highlightMouseOver:R.highlightMouseOver,highlightMouseDown:R.highlightMouseDown,highlightColor:R.highlightColor});if(!this.highlightColor){this.highlightColor=w.jqplot.computeHighlightColors(this.fillColor)}if(this.highlighter){this.highlighter.show=false}}if(!this.isTrendline&&T){T.plugins.lineRenderer={};T.postInitHooks.addOnce(o);T.postDrawHooks.addOnce(M);T.eventListenerHooks.addOnce("jqplotMouseMove",d);T.eventListenerHooks.addOnce("jqplotMouseDown",a);T.eventListenerHooks.addOnce("jqplotMouseUp",L);T.eventListenerHooks.addOnce("jqplotClick",c);T.eventListenerHooks.addOnce("jqplotRightClick",j)}};w.jqplot.LineRenderer.prototype.setGridData=function(T){var P=this._xaxis.series_u2p;var S=this._yaxis.series_u2p;var Q=this._plotData;var R=this._prevPlotData;this.gridData=[];this._prevGridData=[];for(var O=0;O<this.data.length;O++){if(Q[O][0]!=null&&Q[O][1]!=null){this.gridData.push([P.call(this._xaxis,Q[O][0]),S.call(this._yaxis,Q[O][1])])}else{if(Q[O][0]==null){this.gridData.push([null,S.call(this._yaxis,Q[O][1])])}else{if(Q[O][1]==null){this.gridData.push([P.call(this._xaxis,Q[O][0]),null])}}}if(R[O]!=null&&R[O][0]!=null&&R[O][1]!=null){this._prevGridData.push([P.call(this._xaxis,R[O][0]),S.call(this._yaxis,R[O][1])])}else{if(R[O]!=null&&R[O][0]==null){this._prevGridData.push([null,S.call(this._yaxis,R[O][1])])}else{if(R[O]!=null&&R[O][0]!=null&&R[O][1]==null){this._prevGridData.push([P.call(this._xaxis,R[O][0]),null])}}}}};w.jqplot.LineRenderer.prototype.makeGridData=function(R,T){var Q=this._xaxis.series_u2p;var S=this._yaxis.series_u2p;var P=[];var U=[];for(var O=0;O<R.length;O++){if(R[O][0]!=null&&R[O][1]!=null){P.push([Q.call(this._xaxis,R[O][0]),S.call(this._yaxis,R[O][1])])}else{if(R[O][0]==null){P.push([null,S.call(this._yaxis,R[O][1])])}else{if(R[O][1]==null){P.push([Q.call(this._xaxis,R[O][0]),null])}}}}return P};w.jqplot.LineRenderer.prototype.draw=function(ad,an,P){var ah;var X=(P!=l)?P:{};var R=(X.shadow!=l)?X.shadow:this.shadow;var ao=(X.showLine!=l)?X.showLine:this.showLine;var ag=(X.fill!=l)?X.fill:this.fill;var O=(X.fillAndStroke!=l)?X.fillAndStroke:this.fillAndStroke;var Y,ae,ab,aj;ad.save();if(an.length){if(ao){if(ag){if(this.fillToZero){var S=new w.jqplot.ColorGenerator(this.negativeSeriesColors);var ak=S.get(this.index);if(!this.useNegativeColors){ak=X.fillStyle}var V=false;var W=X.fillStyle;if(O){var am=an.slice(0)}if(this.index==0||!this._stack){var ac=[];this._areaPoints=[];var al=this._yaxis.series_u2p(this.fillToValue);var Q=this._xaxis.series_u2p(this.fillToValue);if(this.fillAxis=="y"){ac.push([an[0][0],al]);this._areaPoints.push([an[0][0],al]);for(var ah=0;ah<an.length-1;ah++){ac.push(an[ah]);this._areaPoints.push(an[ah]);if(this._plotData[ah][1]*this._plotData[ah+1][1]<0){if(this._plotData[ah][1]<0){V=true;X.fillStyle=ak}else{V=false;X.fillStyle=W}var U=an[ah][0]+(an[ah+1][0]-an[ah][0])*(al-an[ah][1])/(an[ah+1][1]-an[ah][1]);ac.push([U,al]);this._areaPoints.push([U,al]);if(R){this.renderer.shadowRenderer.draw(ad,ac,X)}this.renderer.shapeRenderer.draw(ad,ac,X);ac=[[U,al]]}}if(this._plotData[an.length-1][1]<0){V=true;X.fillStyle=ak}else{V=false;X.fillStyle=W}ac.push(an[an.length-1]);this._areaPoints.push(an[an.length-1]);ac.push([an[an.length-1][0],al]);this._areaPoints.push([an[an.length-1][0],al])}if(R){this.renderer.shadowRenderer.draw(ad,ac,X)}this.renderer.shapeRenderer.draw(ad,ac,X)}else{var aa=this._prevGridData;for(var ah=aa.length;ah>0;ah--){an.push(aa[ah-1])}if(R){this.renderer.shadowRenderer.draw(ad,an,X)}this._areaPoints=an;this.renderer.shapeRenderer.draw(ad,an,X)}}else{if(O){var am=an.slice(0)}if(this.index==0||!this._stack){var T=ad.canvas.height;an.unshift([an[0][0],T]);var ai=an.length;an.push([an[ai-1][0],T])}else{var aa=this._prevGridData;for(var ah=aa.length;ah>0;ah--){an.push(aa[ah-1])}}this._areaPoints=an;if(R){this.renderer.shadowRenderer.draw(ad,an,X)}this.renderer.shapeRenderer.draw(ad,an,X)}if(O){var af=w.extend(true,{},X,{fill:false,closePath:false});this.renderer.shapeRenderer.draw(ad,am,af);if(this.markerRenderer.show){for(ah=0;ah<am.length;ah++){this.markerRenderer.draw(am[ah][0],am[ah][1],ad,X.markerOptions)}}}}else{if(R){this.renderer.shadowRenderer.draw(ad,an,X)}this.renderer.shapeRenderer.draw(ad,an,X)}}var Y=ab=ae=aj=null;for(ah=0;ah<this._areaPoints.length;ah++){var Z=this._areaPoints[ah];if(Y>Z[0]||Y==null){Y=Z[0]}if(aj<Z[1]||aj==null){aj=Z[1]}if(ab<Z[0]||ab==null){ab=Z[0]}if(ae>Z[1]||ae==null){ae=Z[1]}}this._boundingBox=[[Y,aj],[ab,ae]];if(this.markerRenderer.show&&!ag){for(ah=0;ah<an.length;ah++){if(an[ah][0]!=null&&an[ah][1]!=null){this.markerRenderer.draw(an[ah][0],an[ah][1],ad,X.markerOptions)}}}}ad.restore()};w.jqplot.LineRenderer.prototype.drawShadow=function(O,Q,P){};function o(R,Q,O){for(var P=0;P<this.series.length;P++){if(this.series[P].renderer.constructor==w.jqplot.LineRenderer){if(this.series[P].highlightMouseOver){this.series[P].highlightMouseDown=false}}}this.target.bind("mouseout",{plot:this},function(S){I(S.data.plot)})}function M(){if(this.plugins.lineRenderer&&this.plugins.lineRenderer.highlightCanvas){this.plugins.lineRenderer.highlightCanvas.resetCanvas();this.plugins.lineRenderer.highlightCanvas=null}this.plugins.lineRenderer.highlightedSeriesIndex=null;this.plugins.lineRenderer.highlightCanvas=new w.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-lineRenderer-highlight-canvas",this._plotDimensions,this));this.plugins.lineRenderer.highlightCanvas.setContext()}function K(U,T,R,Q){var P=U.series[T];var O=U.plugins.lineRenderer.highlightCanvas;O._ctx.clearRect(0,0,O._ctx.canvas.width,O._ctx.canvas.height);P._highlightedPoint=R;U.plugins.lineRenderer.highlightedSeriesIndex=T;var S={fillStyle:P.highlightColor};P.renderer.shapeRenderer.draw(O._ctx,Q,S);O=null}function I(Q){var O=Q.plugins.lineRenderer.highlightCanvas;O._ctx.clearRect(0,0,O._ctx.canvas.width,O._ctx.canvas.height);for(var P=0;P<Q.series.length;P++){Q.series[P]._highlightedPoint=null}Q.plugins.lineRenderer.highlightedSeriesIndex=null;Q.target.trigger("jqplotDataUnhighlight");O=null}function d(S,R,V,U,T){if(U){var Q=[U.seriesIndex,U.pointIndex,U.data];var P=jQuery.Event("jqplotDataMouseOver");P.pageX=S.pageX;P.pageY=S.pageY;T.target.trigger(P,Q);if(T.series[Q[0]].highlightMouseOver&&!(Q[0]==T.plugins.lineRenderer.highlightedSeriesIndex)){var O=jQuery.Event("jqplotDataHighlight");O.pageX=S.pageX;O.pageY=S.pageY;T.target.trigger(O,Q);K(T,U.seriesIndex,U.pointIndex,U.points)}}else{if(U==null){I(T)}}}function a(R,Q,U,T,S){if(T){var P=[T.seriesIndex,T.pointIndex,T.data];if(S.series[P[0]].highlightMouseDown&&!(P[0]==S.plugins.lineRenderer.highlightedSeriesIndex)){var O=jQuery.Event("jqplotDataHighlight");O.pageX=R.pageX;O.pageY=R.pageY;S.target.trigger(O,P);K(S,T.seriesIndex,T.pointIndex,T.points)}}else{if(T==null){I(S)}}}function L(Q,P,T,S,R){var O=R.plugins.lineRenderer.highlightedSeriesIndex;if(O!=null&&R.series[O].highlightMouseDown){I(R)}}function c(R,Q,U,T,S){if(T){var P=[T.seriesIndex,T.pointIndex,T.data];var O=jQuery.Event("jqplotDataClick");O.pageX=R.pageX;O.pageY=R.pageY;S.target.trigger(O,P)}}function j(S,R,V,U,T){if(U){var Q=[U.seriesIndex,U.pointIndex,U.data];var O=T.plugins.lineRenderer.highlightedSeriesIndex;if(O!=null&&T.series[O].highlightMouseDown){I(T)}var P=jQuery.Event("jqplotDataRightClick");P.pageX=S.pageX;P.pageY=S.pageY;T.target.trigger(P,Q)}}w.jqplot.LinearAxisRenderer=function(){};w.jqplot.LinearAxisRenderer.prototype.init=function(O){this.breakPoints=null;this.breakTickLabel="&asymp;";this.forceTickAt0=false;this.forceTickAt100=false;this._autoFormatString="";this._overrideFormatString=false;w.extend(true,this,O);if(this.breakPoints){if(!w.isArray(this.breakPoints)){this.breakPoints=null}else{if(this.breakPoints.length<2||this.breakPoints[1]<=this.breakPoints[0]){this.breakPoints=null}}}this.resetDataBounds()};w.jqplot.LinearAxisRenderer.prototype.draw=function(O,V){if(this.show){this.renderer.createTicks.call(this);var U=0;var P;if(this._elem){this._elem.emptyForce();this._elem=null}this._elem=w(document.createElement("div"));this._elem.addClass("jqplot-axis jqplot-"+this.name);this._elem.css("posiiton","absolute");if(this.name=="xaxis"||this.name=="x2axis"){this._elem.width(this._plotDimensions.width)}else{this._elem.height(this._plotDimensions.height)}this.labelOptions.axis=this.name;this._label=new this.labelRenderer(this.labelOptions);if(this._label.show){var T=this._label.draw(O,V);T.appendTo(this._elem);T=null}var S=this._ticks;var R;for(var Q=0;Q<S.length;Q++){R=S[Q];if(R.show&&R.showLabel&&(!R.isMinorTick||this.showMinorTicks)){this._elem.append(R.draw(O,V))}}R=null;S=null}return this._elem};w.jqplot.LinearAxisRenderer.prototype.reset=function(){this.min=this._min;this.max=this._max;this.tickInterval=this._tickInterval;this.numberTicks=this._numberTicks;this._autoFormatString="";if(this._overrideFormatString&&this.tickOptions&&this.tickOptions.formatString){this.tickOptions.formatString=""}};w.jqplot.LinearAxisRenderer.prototype.set=function(){var V=0;var Q;var P=0;var U=0;var O=(this._label==null)?false:this._label.show;if(this.show){var T=this._ticks;var S;for(var R=0;R<T.length;R++){S=T[R];if(!S._breakTick&&S.show&&S.showLabel&&(!S.isMinorTick||this.showMinorTicks)){if(this.name=="xaxis"||this.name=="x2axis"){Q=S._elem.outerHeight(true)}else{Q=S._elem.outerWidth(true)}if(Q>V){V=Q}}}S=null;T=null;if(O){P=this._label._elem.outerWidth(true);U=this._label._elem.outerHeight(true)}if(this.name=="xaxis"){V=V+U;this._elem.css({height:V+"px",left:"0px",bottom:"0px"})}else{if(this.name=="x2axis"){V=V+U;this._elem.css({height:V+"px",left:"0px",top:"0px"})}else{if(this.name=="yaxis"){V=V+P;this._elem.css({width:V+"px",left:"0px",top:"0px"});if(O&&this._label.constructor==w.jqplot.AxisLabelRenderer){this._label._elem.css("width",P+"px")}}else{V=V+P;this._elem.css({width:V+"px",right:"0px",top:"0px"});if(O&&this._label.constructor==w.jqplot.AxisLabelRenderer){this._label._elem.css("width",P+"px")}}}}}};w.jqplot.LinearAxisRenderer.prototype.createTicks=function(){var ax=this._ticks;var an=this.ticks;var ae=this.name;var ag=this._dataBounds;var O,T;var aJ,al;var V,U;var aH,aE;var ak=this.min;var aI=this.max;var aA=this.numberTicks;var aM=this.tickInterval;if(an.length){for(aE=0;aE<an.length;aE++){var aq=an[aE];var ay=new this.tickRenderer(this.tickOptions);if(aq.constructor==Array){ay.value=aq[0];if(this.breakPoints){if(aq[0]==this.breakPoints[0]){ay.label=this.breakTickLabel;ay._breakTick=true;ay.showGridline=false;ay.showMark=false}else{if(aq[0]>this.breakPoints[0]&&aq[0]<=this.breakPoints[1]){ay.show=false;ay.showGridline=false;ay.label=aq[1]}else{ay.label=aq[1]}}}else{ay.label=aq[1]}ay.setTick(aq[0],this.name);this._ticks.push(ay)}else{ay.value=aq;if(this.breakPoints){if(aq==this.breakPoints[0]){ay.label=this.breakTickLabel;ay._breakTick=true;ay.showGridline=false;ay.showMark=false}else{if(aq>this.breakPoints[0]&&aq<=this.breakPoints[1]){ay.show=false;ay.showGridline=false}}}ay.setTick(aq,this.name);this._ticks.push(ay)}}this.numberTicks=an.length;this.min=this._ticks[0].value;this.max=this._ticks[this.numberTicks-1].value;this.tickInterval=(this.max-this.min)/(this.numberTicks-1)}else{if(ae=="xaxis"||ae=="x2axis"){O=this._plotDimensions.width}else{O=this._plotDimensions.height}aJ=((this.min!=null)?this.min:ag.min);al=((this.max!=null)?this.max:ag.max);var aa=al-aJ;var aw,ad;var Y;if(this.min==null&&this.max==null&&this.numberTicks==null&&this.tickInterval==null&&!this.autoscale){if(this.tickOptions==null||!this.tickOptions.formatString){this._overrideFormatString=true}if(this.forceTickAt0){if(aJ>0){aJ=0}if(al<0){al=0}}if(this.forceTickAt100){if(aJ>100){aJ=100}if(al<100){al=100}}var S=30;var at=Math.max(O,S+1);var ab=(at-S)/300;var ar=w.jqplot.LinearTickGenerator(aJ,al,ab);var ac=aJ+aa*(this.padMin-1);var au=al-aa*(this.padMax-1);if(aJ<=ac||al>=au){ac=aJ-aa*(this.padMin-1);au=al+aa*(this.padMax-1);ar=w.jqplot.LinearTickGenerator(ac,au,ab)}this.min=ar[0];this.max=ar[1];this.numberTicks=ar[2];this._autoFormatString=ar[3];this.tickInterval=ar[4]}else{if(aJ==al){var P=0.05;if(aJ>0){P=Math.max(Math.log(aJ)/Math.LN10,0.05)}aJ-=P;al+=P}if(this.autoscale&&this.min==null&&this.max==null){var Q,R,X;var ah=false;var ap=false;var af={min:null,max:null,average:null,stddev:null};for(var aE=0;aE<this._series.length;aE++){var az=this._series[aE];var ai=(az.fillAxis=="x")?az._xaxis.name:az._yaxis.name;if(this.name==ai){var av=az._plotValues[az.fillAxis];var aj=av[0];var aF=av[0];for(var aD=1;aD<av.length;aD++){if(av[aD]<aj){aj=av[aD]}else{if(av[aD]>aF){aF=av[aD]}}}var Z=(aF-aj)/aF;if(az.renderer.constructor==w.jqplot.BarRenderer){if(aj>=0&&(az.fillToZero||Z>0.1)){ah=true}else{ah=false;if(az.fill&&az.fillToZero&&aj<0&&aF>0){ap=true}else{ap=false}}}else{if(az.fill){if(aj>=0&&(az.fillToZero||Z>0.1)){ah=true}else{if(aj<0&&aF>0&&az.fillToZero){ah=false;ap=true}else{ah=false;ap=false}}}else{if(aj<0){ah=false}}}}}if(ah){this.numberTicks=2+Math.ceil((O-(this.tickSpacing-1))/this.tickSpacing);this.min=0;ak=0;R=al/(this.numberTicks-1);Y=Math.pow(10,Math.abs(Math.floor(Math.log(R)/Math.LN10)));if(R/Y==parseInt(R/Y,10)){R+=Y}this.tickInterval=Math.ceil(R/Y)*Y;this.max=this.tickInterval*(this.numberTicks-1)}else{if(ap){this.numberTicks=2+Math.ceil((O-(this.tickSpacing-1))/this.tickSpacing);var am=Math.ceil(Math.abs(aJ)/aa*(this.numberTicks-1));var aL=this.numberTicks-1-am;R=Math.max(Math.abs(aJ/am),Math.abs(al/aL));Y=Math.pow(10,Math.abs(Math.floor(Math.log(R)/Math.LN10)));this.tickInterval=Math.ceil(R/Y)*Y;this.max=this.tickInterval*aL;this.min=-this.tickInterval*am}else{if(this.numberTicks==null){if(this.tickInterval){this.numberTicks=3+Math.ceil(aa/this.tickInterval)}else{this.numberTicks=2+Math.ceil((O-(this.tickSpacing-1))/this.tickSpacing)}}if(this.tickInterval==null){R=aa/(this.numberTicks-1);if(R<1){Y=Math.pow(10,Math.abs(Math.floor(Math.log(R)/Math.LN10)))}else{Y=1}this.tickInterval=Math.ceil(R*Y*this.pad)/Y}else{Y=1/this.tickInterval}Q=this.tickInterval*(this.numberTicks-1);X=(Q-aa)/2;if(this.min==null){this.min=Math.floor(Y*(aJ-X))/Y}if(this.max==null){this.max=this.min+Q}}}}else{aw=(this.min!=null)?this.min:aJ-aa*(this.padMin-1);ad=(this.max!=null)?this.max:al+aa*(this.padMax-1);this.min=aw;this.max=ad;aa=this.max-this.min;if(this.numberTicks==null){if(this.tickInterval!=null){this.numberTicks=Math.ceil((this.max-this.min)/this.tickInterval)+1;this.max=this.min+this.tickInterval*(this.numberTicks-1)}else{if(O>100){this.numberTicks=parseInt(3+(O-100)/75,10)}else{this.numberTicks=2}}}if(this.tickInterval==null){this.tickInterval=aa/(this.numberTicks-1)}}if(this.renderer.constructor==w.jqplot.LinearAxisRenderer&&this._autoFormatString==""){aa=this.max-this.min;var aK=new this.tickRenderer(this.tickOptions);var ao=aK.formatString||w.jqplot.config.defaultTickFormatString;var ao=ao.match(w.jqplot.sprintf.regex)[0];var aG=0;if(ao){if(ao.search(/[fFeEgGpP]/)>-1){var aC=ao.match(/\%\.(\d{0,})?[eEfFgGpP]/);if(aC){aG=parseInt(aC[1],10)}else{aG=6}}else{if(ao.search(/[di]/)>-1){aG=0}}var W=Math.pow(10,-aG);if(this.tickInterval<W){if(aA==null&&aM==null){this.tickInterval=W;if(aI==null&&ak==null){this.min=Math.floor(this._dataBounds.min/W)*W;if(this.min==this._dataBounds.min){this.min=this._dataBounds.min-this.tickInterval}this.max=Math.ceil(this._dataBounds.max/W)*W;if(this.max==this._dataBounds.max){this.max=this._dataBounds.max+this.tickInterval}var aB=(this.max-this.min)/this.tickInterval;aB=aB.toFixed(11);aB=Math.ceil(aB);this.numberTicks=aB+1}else{if(aI==null){var aB=(this._dataBounds.max-this.min)/this.tickInterval;aB=aB.toFixed(11);this.numberTicks=Math.ceil(aB)+2;this.max=this.min+this.tickInterval*(this.numberTicks-1)}else{if(ak==null){var aB=(this.max-this._dataBounds.min)/this.tickInterval;aB=aB.toFixed(11);this.numberTicks=Math.ceil(aB)+2;this.min=this.max-this.tickInterval*(this.numberTicks-1)}else{this.numberTicks=Math.ceil((aI-ak)/this.tickInterval)+1;this.min=Math.floor(ak*Math.pow(10,aG))/Math.pow(10,aG);this.max=Math.ceil(aI*Math.pow(10,aG))/Math.pow(10,aG);this.numberTicks=Math.ceil((this.max-this.min)/this.tickInterval)+1}}}}}}}}if(this._overrideFormatString&&this._autoFormatString!=""){this.tickOptions=this.tickOptions||{};this.tickOptions.formatString=this._autoFormatString}for(var aE=0;aE<this.numberTicks;aE++){aH=this.min+aE*this.tickInterval;var ay=new this.tickRenderer(this.tickOptions);ay.setTick(aH,this.name);this._ticks.push(ay);ay=null}}ax=null};w.jqplot.LinearAxisRenderer.prototype.resetTickValues=function(Q){if(w.isArray(Q)&&Q.length==this._ticks.length){var P;for(var O=0;O<Q.length;O++){P=this._ticks[O];P.value=Q[O];P.label=P.formatter(P.formatString,Q[O]);P.label=P.prefix+P.label;P._elem.html(P.label)}P=null;this.min=w.jqplot.arrayMin(Q);this.max=w.jqplot.arrayMax(Q);this.pack()}};w.jqplot.LinearAxisRenderer.prototype.pack=function(Q,P){Q=Q||{};P=P||this._offsets;var ae=this._ticks;var aa=this.max;var Z=this.min;var V=P.max;var T=P.min;var X=(this._label==null)?false:this._label.show;for(var Y in Q){this._elem.css(Y,Q[Y])}this._offsets=P;var R=V-T;var S=aa-Z;if(this.breakPoints){S=S-this.breakPoints[1]+this.breakPoints[0];this.p2u=function(ag){return(ag-T)*S/R+Z};this.u2p=function(ag){if(ag>this.breakPoints[0]&&ag<this.breakPoints[1]){ag=this.breakPoints[0]}if(ag<=this.breakPoints[0]){return(ag-Z)*R/S+T}else{return(ag-this.breakPoints[1]+this.breakPoints[0]-Z)*R/S+T}};if(this.name.charAt(0)=="x"){this.series_u2p=function(ag){if(ag>this.breakPoints[0]&&ag<this.breakPoints[1]){ag=this.breakPoints[0]}if(ag<=this.breakPoints[0]){return(ag-Z)*R/S}else{return(ag-this.breakPoints[1]+this.breakPoints[0]-Z)*R/S}};this.series_p2u=function(ag){return ag*S/R+Z}}else{this.series_u2p=function(ag){if(ag>this.breakPoints[0]&&ag<this.breakPoints[1]){ag=this.breakPoints[0]}if(ag>=this.breakPoints[1]){return(ag-aa)*R/S}else{return(ag+this.breakPoints[1]-this.breakPoints[0]-aa)*R/S}};this.series_p2u=function(ag){return ag*S/R+aa}}}else{this.p2u=function(ag){return(ag-T)*S/R+Z};this.u2p=function(ag){return(ag-Z)*R/S+T};if(this.name=="xaxis"||this.name=="x2axis"){this.series_u2p=function(ag){return(ag-Z)*R/S};this.series_p2u=function(ag){return ag*S/R+Z}}else{this.series_u2p=function(ag){return(ag-aa)*R/S};this.series_p2u=function(ag){return ag*S/R+aa}}}if(this.show){if(this.name=="xaxis"||this.name=="x2axis"){for(var ab=0;ab<ae.length;ab++){var W=ae[ab];if(W.show&&W.showLabel){var O;if(W.constructor==w.jqplot.CanvasAxisTickRenderer&&W.angle){var ad=(this.name=="xaxis")?1:-1;switch(W.labelPosition){case"auto":if(ad*W.angle<0){O=-W.getWidth()+W._textRenderer.height*Math.sin(-W._textRenderer.angle)/2}else{O=-W._textRenderer.height*Math.sin(W._textRenderer.angle)/2}break;case"end":O=-W.getWidth()+W._textRenderer.height*Math.sin(-W._textRenderer.angle)/2;break;case"start":O=-W._textRenderer.height*Math.sin(W._textRenderer.angle)/2;break;case"middle":O=-W.getWidth()/2+W._textRenderer.height*Math.sin(-W._textRenderer.angle)/2;break;default:O=-W.getWidth()/2+W._textRenderer.height*Math.sin(-W._textRenderer.angle)/2;break}}else{O=-W.getWidth()/2}var af=this.u2p(W.value)+O+"px";W._elem.css("left",af);W.pack()}}if(X){var U=this._label._elem.outerWidth(true);this._label._elem.css("left",T+R/2-U/2+"px");if(this.name=="xaxis"){this._label._elem.css("bottom","0px")}else{this._label._elem.css("top","0px")}this._label.pack()}}else{for(var ab=0;ab<ae.length;ab++){var W=ae[ab];if(W.show&&W.showLabel){var O;if(W.constructor==w.jqplot.CanvasAxisTickRenderer&&W.angle){var ad=(this.name=="yaxis")?1:-1;switch(W.labelPosition){case"auto":case"end":if(ad*W.angle<0){O=-W._textRenderer.height*Math.cos(-W._textRenderer.angle)/2}else{O=-W.getHeight()+W._textRenderer.height*Math.cos(W._textRenderer.angle)/2}break;case"start":if(W.angle>0){O=-W._textRenderer.height*Math.cos(-W._textRenderer.angle)/2}else{O=-W.getHeight()+W._textRenderer.height*Math.cos(W._textRenderer.angle)/2}break;case"middle":O=-W.getHeight()/2;break;default:O=-W.getHeight()/2;break}}else{O=-W.getHeight()/2}var af=this.u2p(W.value)+O+"px";W._elem.css("top",af);W.pack()}}if(X){var ac=this._label._elem.outerHeight(true);this._label._elem.css("top",V-R/2-ac/2+"px");if(this.name=="yaxis"){this._label._elem.css("left","0px")}else{this._label._elem.css("right","0px")}this._label.pack()}}}ae=null};function e(O){O=Math.abs(O);if(O>1){return"%d"}var P=-Math.floor(Math.log(O)/Math.LN10);return"%."+P+"f"}function B(P,O){var Q=Math.floor(Math.log(P)/Math.LN10);var S=Math.pow(10,Q);var R=P/S;R=R/O;if(R<=0.38){return 0.1*S}if(R<=1.6){return 0.2*S}if(R<=4){return 0.5*S}if(R<=8){return S}if(R<=16){return 2*S}return 5*S}w.jqplot.LinearTickGenerator=function(Q,T,P){if(Q==T){T=(T)?0:1}P=P||1;if(T<Q){var O=T;T=Q;Q=O}var R=B(T-Q,P);var S=[];S[0]=Math.floor(Q/R)*R;S[1]=Math.ceil(T/R)*R;S[2]=Math.round((S[1]-S[0])/R+1);S[3]=e(R);S[4]=R;return S};w.jqplot.MarkerRenderer=function(O){this.show=true;this.style="filledCircle";this.lineWidth=2;this.size=9;this.color="#666666";this.shadow=true;this.shadowAngle=45;this.shadowOffset=1;this.shadowDepth=3;this.shadowAlpha="0.07";this.shadowRenderer=new w.jqplot.ShadowRenderer();this.shapeRenderer=new w.jqplot.ShapeRenderer();w.extend(true,this,O)};w.jqplot.MarkerRenderer.prototype.init=function(O){w.extend(true,this,O);var Q={angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,lineWidth:this.lineWidth,depth:this.shadowDepth,closePath:true};if(this.style.indexOf("filled")!=-1){Q.fill=true}if(this.style.indexOf("ircle")!=-1){Q.isarc=true;Q.closePath=false}this.shadowRenderer.init(Q);var P={fill:false,isarc:false,strokeStyle:this.color,fillStyle:this.color,lineWidth:this.lineWidth,closePath:true};if(this.style.indexOf("filled")!=-1){P.fill=true}if(this.style.indexOf("ircle")!=-1){P.isarc=true;P.closePath=false}this.shapeRenderer.init(P)};w.jqplot.MarkerRenderer.prototype.drawDiamond=function(Q,P,T,S,V){var O=1.2;var W=this.size/2/O;var U=this.size/2*O;var R=[[Q-W,P],[Q,P+U],[Q+W,P],[Q,P-U]];if(this.shadow){this.shadowRenderer.draw(T,R)}this.shapeRenderer.draw(T,R,V)};w.jqplot.MarkerRenderer.prototype.drawPlus=function(R,Q,U,T,X){var P=1;var Y=this.size/2*P;var V=this.size/2*P;var W=[[R,Q-V],[R,Q+V]];var S=[[R+Y,Q],[R-Y,Q]];var O=w.extend(true,{},this.options,{closePath:false});if(this.shadow){this.shadowRenderer.draw(U,W,{closePath:false});this.shadowRenderer.draw(U,S,{closePath:false})}this.shapeRenderer.draw(U,W,O);this.shapeRenderer.draw(U,S,O)};w.jqplot.MarkerRenderer.prototype.drawX=function(R,Q,U,T,X){var P=1;var Y=this.size/2*P;var V=this.size/2*P;var O=w.extend(true,{},this.options,{closePath:false});var W=[[R-Y,Q-V],[R+Y,Q+V]];var S=[[R-Y,Q+V],[R+Y,Q-V]];if(this.shadow){this.shadowRenderer.draw(U,W,{closePath:false});this.shadowRenderer.draw(U,S,{closePath:false})}this.shapeRenderer.draw(U,W,O);this.shapeRenderer.draw(U,S,O)};w.jqplot.MarkerRenderer.prototype.drawDash=function(Q,P,T,S,V){var O=1;var W=this.size/2*O;var U=this.size/2*O;var R=[[Q-W,P],[Q+W,P]];if(this.shadow){this.shadowRenderer.draw(T,R)}this.shapeRenderer.draw(T,R,V)};w.jqplot.MarkerRenderer.prototype.drawLine=function(T,S,O,R,P){var Q=[T,S];if(this.shadow){this.shadowRenderer.draw(O,Q)}this.shapeRenderer.draw(O,Q,P)};w.jqplot.MarkerRenderer.prototype.drawSquare=function(Q,P,T,S,V){var O=1;var W=this.size/2/O;var U=this.size/2*O;var R=[[Q-W,P-U],[Q-W,P+U],[Q+W,P+U],[Q+W,P-U]];if(this.shadow){this.shadowRenderer.draw(T,R)}this.shapeRenderer.draw(T,R,V)};w.jqplot.MarkerRenderer.prototype.drawCircle=function(P,V,R,U,S){var O=this.size/2;var Q=2*Math.PI;var T=[P,V,O,0,Q,true];if(this.shadow){this.shadowRenderer.draw(R,T)}this.shapeRenderer.draw(R,T,S)};w.jqplot.MarkerRenderer.prototype.draw=function(O,R,P,Q){Q=Q||{};if(Q.show==null||Q.show!=false){if(Q.color&&!Q.fillStyle){Q.fillStyle=Q.color}if(Q.color&&!Q.strokeStyle){Q.strokeStyle=Q.color}switch(this.style){case"diamond":this.drawDiamond(O,R,P,false,Q);break;case"filledDiamond":this.drawDiamond(O,R,P,true,Q);break;case"circle":this.drawCircle(O,R,P,false,Q);break;case"filledCircle":this.drawCircle(O,R,P,true,Q);break;case"square":this.drawSquare(O,R,P,false,Q);break;case"filledSquare":this.drawSquare(O,R,P,true,Q);break;case"x":this.drawX(O,R,P,true,Q);break;case"plus":this.drawPlus(O,R,P,true,Q);break;case"dash":this.drawDash(O,R,P,true,Q);break;case"line":this.drawLine(O,R,P,false,Q);break;default:this.drawDiamond(O,R,P,false,Q);break}}};w.jqplot.ShadowRenderer=function(O){this.angle=45;this.offset=1;this.alpha=0.07;this.lineWidth=1.5;this.lineJoin="miter";this.lineCap="round";this.closePath=false;this.fill=false;this.depth=3;this.strokeStyle="rgba(0,0,0,0.1)";this.isarc=false;w.extend(true,this,O)};w.jqplot.ShadowRenderer.prototype.init=function(O){w.extend(true,this,O)};w.jqplot.ShadowRenderer.prototype.draw=function(Y,W,aa){Y.save();var O=(aa!=null)?aa:{};var X=(O.fill!=null)?O.fill:this.fill;var V=(O.closePath!=null)?O.closePath:this.closePath;var S=(O.offset!=null)?O.offset:this.offset;var Q=(O.alpha!=null)?O.alpha:this.alpha;var U=(O.depth!=null)?O.depth:this.depth;var Z=(O.isarc!=null)?O.isarc:this.isarc;Y.lineWidth=(O.lineWidth!=null)?O.lineWidth:this.lineWidth;Y.lineJoin=(O.lineJoin!=null)?O.lineJoin:this.lineJoin;Y.lineCap=(O.lineCap!=null)?O.lineCap:this.lineCap;Y.strokeStyle=O.strokeStyle||this.strokeStyle||"rgba(0,0,0,"+Q+")";Y.fillStyle=O.fillStyle||this.fillStyle||"rgba(0,0,0,"+Q+")";for(var R=0;R<U;R++){Y.translate(Math.cos(this.angle*Math.PI/180)*S,Math.sin(this.angle*Math.PI/180)*S);Y.beginPath();if(Z){Y.arc(W[0],W[1],W[2],W[3],W[4],true)}else{if(W&&W.length){var P=true;for(var T=0;T<W.length;T++){if(W[T][0]!=null&&W[T][1]!=null){if(P){Y.moveTo(W[T][0],W[T][1]);P=false}else{Y.lineTo(W[T][0],W[T][1])}}else{P=true}}}}if(V){Y.closePath()}if(X){Y.fill()}else{Y.stroke()}}Y.restore()};w.jqplot.ShapeRenderer=function(O){this.lineWidth=1.5;this.lineJoin="miter";this.lineCap="round";this.closePath=false;this.fill=false;this.isarc=false;this.fillRect=false;this.strokeRect=false;this.clearRect=false;this.strokeStyle="#999999";this.fillStyle="#999999";w.extend(true,this,O)};w.jqplot.ShapeRenderer.prototype.init=function(O){w.extend(true,this,O)};w.jqplot.ShapeRenderer.prototype.draw=function(X,V,Z){X.save();var O=(Z!=null)?Z:{};var W=(O.fill!=null)?O.fill:this.fill;var T=(O.closePath!=null)?O.closePath:this.closePath;var U=(O.fillRect!=null)?O.fillRect:this.fillRect;var R=(O.strokeRect!=null)?O.strokeRect:this.strokeRect;var P=(O.clearRect!=null)?O.clearRect:this.clearRect;var Y=(O.isarc!=null)?O.isarc:this.isarc;X.lineWidth=O.lineWidth||this.lineWidth;X.lineJoin=O.lineJoin||this.lineJoin;X.lineCap=O.lineCap||this.lineCap;X.strokeStyle=(O.strokeStyle||O.color)||this.strokeStyle;X.fillStyle=O.fillStyle||this.fillStyle;X.beginPath();if(Y){X.arc(V[0],V[1],V[2],V[3],V[4],true);if(T){X.closePath()}if(W){X.fill()}else{X.stroke()}X.restore();return}else{if(P){X.clearRect(V[0],V[1],V[2],V[3]);X.restore();return}else{if(U||R){if(U){X.fillRect(V[0],V[1],V[2],V[3])}if(R){X.strokeRect(V[0],V[1],V[2],V[3]);X.restore();return}}else{if(V&&V.length){var Q=true;for(var S=0;S<V.length;S++){if(V[S][0]!=null&&V[S][1]!=null){if(Q){X.moveTo(V[S][0],V[S][1]);Q=false}else{X.lineTo(V[S][0],V[S][1])}}else{Q=true}}if(T){X.closePath()}if(W){X.fill()}else{X.stroke()}}}}}X.restore()};w.jqplot.TableLegendRenderer=function(){};w.jqplot.TableLegendRenderer.prototype.init=function(O){w.extend(true,this,O)};w.jqplot.TableLegendRenderer.prototype.addrow=function(X,R,O,V){var S=(O)?this.rowSpacing+"px":"0px";var W;var Q;var P;var U;var T;P=document.createElement("tr");W=w(P);W.addClass("jqplot-table-legend");P=null;if(V){W.prependTo(this._elem)}else{W.appendTo(this._elem)}if(this.showSwatches){Q=w(document.createElement("td"));Q.addClass("jqplot-table-legend");Q.css({textAlign:"center",paddingTop:S});U=w(document.createElement("div"));T=w(document.createElement("div"));T.addClass("jqplot-table-legend-swatch");T.css({backgroundColor:R,borderColor:R});W.append(Q.append(U.append(T)))}if(this.showLabels){Q=w(document.createElement("td"));Q.addClass("jqplot-table-legend");Q.css("paddingTop",S);W.append(Q);if(this.escapeHtml){Q.text(X)}else{Q.html(X)}}Q=null;U=null;T=null;W=null;P=null};w.jqplot.TableLegendRenderer.prototype.draw=function(){if(this._elem){this._elem.emptyForce();this._elem=null}if(this.show){var T=this._series;var P=document.createElement("table");this._elem=w(P);this._elem.addClass("jqplot-table-legend");var Y={position:"absolute"};if(this.background){Y.background=this.background}if(this.border){Y.border=this.border}if(this.fontSize){Y.fontSize=this.fontSize}if(this.fontFamily){Y.fontFamily=this.fontFamily}if(this.textColor){Y.textColor=this.textColor}if(this.marginTop!=null){Y.marginTop=this.marginTop}if(this.marginBottom!=null){Y.marginBottom=this.marginBottom}if(this.marginLeft!=null){Y.marginLeft=this.marginLeft}if(this.marginRight!=null){Y.marginRight=this.marginRight}var O=false,V=false,X;for(var U=0;U<T.length;U++){X=T[U];if(X._stack||X.renderer.constructor==w.jqplot.BezierCurveRenderer){V=true}if(X.show&&X.showLabel){var S=this.labels[U]||X.label.toString();if(S){var Q=X.color;if(V&&U<T.length-1){O=true}else{if(V&&U==T.length-1){O=false}}this.renderer.addrow.call(this,S,Q,O,V);O=true}for(var R=0;R<w.jqplot.addLegendRowHooks.length;R++){var W=w.jqplot.addLegendRowHooks[R].call(this,X);if(W){this.renderer.addrow.call(this,W.label,W.color,O);O=true}}S=null}}}return this._elem};w.jqplot.TableLegendRenderer.prototype.pack=function(Q){if(this.show){if(this.placement=="insideGrid"){switch(this.location){case"nw":var P=Q.left;var O=Q.top;this._elem.css("left",P);this._elem.css("top",O);break;case"n":var P=(Q.left+(this._plotDimensions.width-Q.right))/2-this.getWidth()/2;var O=Q.top;this._elem.css("left",P);this._elem.css("top",O);break;case"ne":var P=Q.right;var O=Q.top;this._elem.css({right:P,top:O});break;case"e":var P=Q.right;var O=(Q.top+(this._plotDimensions.height-Q.bottom))/2-this.getHeight()/2;this._elem.css({right:P,top:O});break;case"se":var P=Q.right;var O=Q.bottom;this._elem.css({right:P,bottom:O});break;case"s":var P=(Q.left+(this._plotDimensions.width-Q.right))/2-this.getWidth()/2;var O=Q.bottom;this._elem.css({left:P,bottom:O});break;case"sw":var P=Q.left;var O=Q.bottom;this._elem.css({left:P,bottom:O});break;case"w":var P=Q.left;var O=(Q.top+(this._plotDimensions.height-Q.bottom))/2-this.getHeight()/2;this._elem.css({left:P,top:O});break;default:var P=Q.right;var O=Q.bottom;this._elem.css({right:P,bottom:O});break}}else{if(this.placement=="outside"){switch(this.location){case"nw":var P=this._plotDimensions.width-Q.left;var O=Q.top;this._elem.css("right",P);this._elem.css("top",O);break;case"n":var P=(Q.left+(this._plotDimensions.width-Q.right))/2-this.getWidth()/2;var O=this._plotDimensions.height-Q.top;this._elem.css("left",P);this._elem.css("bottom",O);break;case"ne":var P=this._plotDimensions.width-Q.right;var O=Q.top;this._elem.css({left:P,top:O});break;case"e":var P=this._plotDimensions.width-Q.right;var O=(Q.top+(this._plotDimensions.height-Q.bottom))/2-this.getHeight()/2;this._elem.css({left:P,top:O});break;case"se":var P=this._plotDimensions.width-Q.right;var O=Q.bottom;this._elem.css({left:P,bottom:O});break;case"s":var P=(Q.left+(this._plotDimensions.width-Q.right))/2-this.getWidth()/2;var O=this._plotDimensions.height-Q.bottom;this._elem.css({left:P,top:O});break;case"sw":var P=this._plotDimensions.width-Q.left;var O=Q.bottom;this._elem.css({right:P,bottom:O});break;case"w":var P=this._plotDimensions.width-Q.left;var O=(Q.top+(this._plotDimensions.height-Q.bottom))/2-this.getHeight()/2;this._elem.css({right:P,top:O});break;default:var P=Q.right;var O=Q.bottom;this._elem.css({right:P,bottom:O});break}}else{switch(this.location){case"nw":this._elem.css({left:0,top:Q.top});break;case"n":var P=(Q.left+(this._plotDimensions.width-Q.right))/2-this.getWidth()/2;this._elem.css({left:P,top:Q.top});break;case"ne":this._elem.css({right:0,top:Q.top});break;case"e":var O=(Q.top+(this._plotDimensions.height-Q.bottom))/2-this.getHeight()/2;this._elem.css({right:Q.right,top:O});break;case"se":this._elem.css({right:Q.right,bottom:Q.bottom});break;case"s":var P=(Q.left+(this._plotDimensions.width-Q.right))/2-this.getWidth()/2;this._elem.css({left:P,bottom:Q.bottom});break;case"sw":this._elem.css({left:Q.left,bottom:Q.bottom});break;case"w":var O=(Q.top+(this._plotDimensions.height-Q.bottom))/2-this.getHeight()/2;this._elem.css({left:Q.left,top:O});break;default:this._elem.css({right:Q.right,bottom:Q.bottom});break}}}}};w.jqplot.ThemeEngine=function(){this.themes={};this.activeTheme=null};w.jqplot.ThemeEngine.prototype.init=function(){var R=new w.jqplot.Theme({_name:"Default"});var U,P,T;for(U in R.target){if(U=="textColor"){R.target[U]=this.target.css("color")}else{R.target[U]=this.target.css(U)}}if(this.title.show&&this.title._elem){for(U in R.title){if(U=="textColor"){R.title[U]=this.title._elem.css("color")}else{R.title[U]=this.title._elem.css(U)}}}for(U in R.grid){R.grid[U]=this.grid[U]}if(R.grid.backgroundColor==null&&this.grid.background!=null){R.grid.backgroundColor=this.grid.background}if(this.legend.show&&this.legend._elem){for(U in R.legend){if(U=="textColor"){R.legend[U]=this.legend._elem.css("color")}else{R.legend[U]=this.legend._elem.css(U)}}}var Q;for(P=0;P<this.series.length;P++){Q=this.series[P];if(Q.renderer.constructor==w.jqplot.LineRenderer){R.series.push(new i())}else{if(Q.renderer.constructor==w.jqplot.BarRenderer){R.series.push(new E())}else{if(Q.renderer.constructor==w.jqplot.PieRenderer){R.series.push(new b())}else{if(Q.renderer.constructor==w.jqplot.DonutRenderer){R.series.push(new t())}else{if(Q.renderer.constructor==w.jqplot.FunnelRenderer){R.series.push(new H())}else{if(Q.renderer.constructor==w.jqplot.MeterGaugeRenderer){R.series.push(new r())}else{R.series.push({})}}}}}}for(U in R.series[P]){R.series[P][U]=Q[U]}}var O,S;for(U in this.axes){S=this.axes[U];O=R.axes[U]=new A();O.borderColor=S.borderColor;O.borderWidth=S.borderWidth;if(S._ticks&&S._ticks[0]){for(T in O.ticks){if(S._ticks[0].hasOwnProperty(T)){O.ticks[T]=S._ticks[0][T]}else{if(S._ticks[0]._elem){O.ticks[T]=S._ticks[0]._elem.css(T)}}}}if(S._label&&S._label.show){for(T in O.label){if(S._label[T]){O.label[T]=S._label[T]}else{if(S._label._elem){if(T=="textColor"){O.label[T]=S._label._elem.css("color")}else{O.label[T]=S._label._elem.css(T)}}}}}}this.themeEngine._add(R);this.themeEngine.activeTheme=this.themeEngine.themes[R._name]};w.jqplot.ThemeEngine.prototype.get=function(O){if(!O){return this.activeTheme}else{return this.themes[O]}};function z(P,O){return P-O}w.jqplot.ThemeEngine.prototype.getThemeNames=function(){var O=[];for(var P in this.themes){O.push(P)}return O.sort(z)};w.jqplot.ThemeEngine.prototype.getThemes=function(){var P=[];var O=[];for(var R in this.themes){P.push(R)}P.sort(z);for(var Q=0;Q<P.length;Q++){O.push(this.themes[P[Q]])}return O};w.jqplot.ThemeEngine.prototype.activate=function(ab,ag){var O=false;if(!ag&&this.activeTheme&&this.activeTheme._name){ag=this.activeTheme._name}if(!this.themes.hasOwnProperty(ag)){throw new Error("No theme of that name")}else{var T=this.themes[ag];this.activeTheme=T;var af,Z=false,Y=false;var P=["xaxis","x2axis","yaxis","y2axis"];for(ac=0;ac<P.length;ac++){var U=P[ac];if(T.axesStyles.borderColor!=null){ab.axes[U].borderColor=T.axesStyles.borderColor}if(T.axesStyles.borderWidth!=null){ab.axes[U].borderWidth=T.axesStyles.borderWidth}}for(var ae in ab.axes){var R=ab.axes[ae];if(R.show){var X=T.axes[ae]||{};var V=T.axesStyles;var S=w.jqplot.extend(true,{},X,V);af=(T.axesStyles.borderColor!=null)?T.axesStyles.borderColor:S.borderColor;if(S.borderColor!=null){R.borderColor=S.borderColor;O=true}af=(T.axesStyles.borderWidth!=null)?T.axesStyles.borderWidth:S.borderWidth;if(S.borderWidth!=null){R.borderWidth=S.borderWidth;O=true}if(R._ticks&&R._ticks[0]){for(var Q in S.ticks){af=S.ticks[Q];if(af!=null){R.tickOptions[Q]=af;R._ticks=[];O=true}}}if(R._label&&R._label.show){for(var Q in S.label){af=S.label[Q];if(af!=null){R.labelOptions[Q]=af;O=true}}}}}for(var aa in T.grid){if(T.grid[aa]!=null){ab.grid[aa]=T.grid[aa]}}if(!O){ab.grid.draw()}if(ab.legend.show){for(aa in T.legend){if(T.legend[aa]!=null){ab.legend[aa]=T.legend[aa]}}}if(ab.title.show){for(aa in T.title){if(T.title[aa]!=null){ab.title[aa]=T.title[aa]}}}var ac;for(ac=0;ac<T.series.length;ac++){var W={};var ad=false;for(aa in T.series[ac]){af=(T.seriesStyles[aa]!=null)?T.seriesStyles[aa]:T.series[ac][aa];if(af!=null){W[aa]=af;if(aa=="color"){ab.series[ac].renderer.shapeRenderer.fillStyle=af;ab.series[ac].renderer.shapeRenderer.strokeStyle=af;ab.series[ac][aa]=af}else{if(aa=="lineWidth"){ab.series[ac].renderer.shapeRenderer.lineWidth=af;ab.series[ac][aa]=af}else{if(aa=="markerOptions"){F(ab.series[ac].markerOptions,af);F(ab.series[ac].markerRenderer,af)}else{ab.series[ac][aa]=af}}}O=true}}}if(O){ab.target.empty();ab.draw()}for(aa in T.target){if(T.target[aa]!=null){ab.target.css(aa,T.target[aa])}}}};w.jqplot.ThemeEngine.prototype._add=function(P,O){if(O){P._name=O}if(!P._name){P._name=Date.parse(new Date())}if(!this.themes.hasOwnProperty(P._name)){this.themes[P._name]=P}else{throw new Error("jqplot.ThemeEngine Error: Theme already in use")}};w.jqplot.ThemeEngine.prototype.remove=function(O){if(O=="Default"){return false}return delete this.themes[O]};w.jqplot.ThemeEngine.prototype.newTheme=function(O,Q){if(typeof(O)=="object"){Q=Q||O;O=null}if(Q&&Q._name){O=Q._name}else{O=O||Date.parse(new Date())}var P=this.copy(this.themes.Default._name,O);w.jqplot.extend(P,Q);return P};function p(Q){if(Q==null||typeof(Q)!="object"){return Q}var O=new Q.constructor();for(var P in Q){O[P]=p(Q[P])}return O}w.jqplot.clone=p;function F(Q,P){if(P==null||typeof(P)!="object"){return}for(var O in P){if(O=="highlightColors"){Q[O]=p(P[O])}if(P[O]!=null&&typeof(P[O])=="object"){if(!Q.hasOwnProperty(O)){Q[O]={}}F(Q[O],P[O])}else{Q[O]=P[O]}}}w.jqplot.merge=F;w.jqplot.extend=function(){var T=arguments[0]||{},R=1,S=arguments.length,O=false,Q;if(typeof T==="boolean"){O=T;T=arguments[1]||{};R=2}if(typeof T!=="object"&&!toString.call(T)==="[object Function]"){T={}}for(;R<S;R++){if((Q=arguments[R])!=null){for(var P in Q){var U=T[P],V=Q[P];if(T===V){continue}if(O&&V&&typeof V==="object"&&!V.nodeType){T[P]=w.jqplot.extend(O,U||(V.length!=null?[]:{}),V)}else{if(V!==l){T[P]=V}}}}}return T};w.jqplot.ThemeEngine.prototype.rename=function(P,O){if(P=="Default"||O=="Default"){throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default")}if(this.themes.hasOwnProperty(O)){throw new Error("jqplot.ThemeEngine Error: New name already in use.")}else{if(this.themes.hasOwnProperty(P)){var Q=this.copy(P,O);this.remove(P);return Q}}throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid")};w.jqplot.ThemeEngine.prototype.copy=function(O,Q,S){if(Q=="Default"){throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme")}if(!this.themes.hasOwnProperty(O)){var P="jqplot.ThemeEngine Error: Source name invalid";throw new Error(P)}if(this.themes.hasOwnProperty(Q)){var P="jqplot.ThemeEngine Error: Target name invalid";throw new Error(P)}else{var R=p(this.themes[O]);R._name=Q;w.jqplot.extend(true,R,S);this._add(R);return R}};w.jqplot.Theme=function(O,P){if(typeof(O)=="object"){P=P||O;O=null}O=O||Date.parse(new Date());this._name=O;this.target={backgroundColor:null};this.legend={textColor:null,fontFamily:null,fontSize:null,border:null,background:null};this.title={textColor:null,fontFamily:null,fontSize:null,textAlign:null};this.seriesStyles={};this.series=[];this.grid={drawGridlines:null,gridLineColor:null,gridLineWidth:null,backgroundColor:null,borderColor:null,borderWidth:null,shadow:null};this.axesStyles={label:{},ticks:{}};this.axes={};if(typeof(P)=="string"){this._name=P}else{if(typeof(P)=="object"){w.jqplot.extend(true,this,P)}}};var A=function(){this.borderColor=null;this.borderWidth=null;this.ticks=new g();this.label=new k()};var g=function(){this.show=null;this.showGridline=null;this.showLabel=null;this.showMark=null;this.size=null;this.textColor=null;this.whiteSpace=null;this.fontSize=null;this.fontFamily=null};var k=function(){this.textColor=null;this.whiteSpace=null;this.fontSize=null;this.fontFamily=null;this.fontWeight=null};var i=function(){this.color=null;this.lineWidth=null;this.shadow=null;this.fillColor=null;this.showMarker=null;this.markerOptions=new v()};var v=function(){this.show=null;this.style=null;this.lineWidth=null;this.size=null;this.color=null;this.shadow=null};var E=function(){this.color=null;this.seriesColors=null;this.lineWidth=null;this.shadow=null;this.barPadding=null;this.barMargin=null;this.barWidth=null;this.highlightColors=null};var b=function(){this.seriesColors=null;this.padding=null;this.sliceMargin=null;this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;this.highlightColors=null};var t=function(){this.seriesColors=null;this.padding=null;this.sliceMargin=null;this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;this.innerDiameter=null;this.thickness=null;this.ringMargin=null;this.highlightColors=null};var H=function(){this.color=null;this.lineWidth=null;this.shadow=null;this.padding=null;this.sectionMargin=null;this.seriesColors=null;this.highlightColors=null};var r=function(){this.padding=null;this.backgroundColor=null;this.ringColor=null;this.tickColor=null;this.ringWidth=null;this.intervalColors=null;this.intervalInnerRadius=null;this.intervalOuterRadius=null;this.hubRadius=null;this.needleThickness=null;this.needlePad=null};var N=function(){this.syntax=N.config.syntax;this._type="jsDate";this.utcOffset=new Date().getTimezoneOffset*60000;this.proxy=new Date();this.options={};this.locale=N.regional.getLocale();this.formatString="";this.defaultCentury=N.config.defaultCentury;switch(arguments.length){case 0:break;case 1:if(f(arguments[0])=="[object Object]"&&arguments[0]._type!="jsDate"){var Q=this.options=arguments[0];this.syntax=Q.syntax||this.syntax;this.defaultCentury=Q.defaultCentury||this.defaultCentury;this.proxy=N.createDate(Q.date)}else{this.proxy=N.createDate(arguments[0])}break;default:var O=[];for(var P=0;P<arguments.length;P++){O.push(arguments[P])}this.proxy=new Date(this.utcOffset);this.proxy.setFullYear.apply(this.proxy,O.slice(0,3));if(O.slice(3).length){this.proxy.setHours.apply(this.proxy,O.slice(3))}break}};N.config={defaultLocale:"en",syntax:"perl",defaultCentury:1900};N.prototype.add=function(Q,P){var O=s[P]||s.day;if(typeof O=="number"){this.proxy.setTime(this.proxy.getTime()+(O*Q))}else{O.add(this,Q)}return this};N.prototype.clone=function(){return new N(this.proxy.getTime())};N.prototype.diff=function(P,S,O){P=new N(P);if(P===null){return null}var Q=s[S]||s.day;if(typeof Q=="number"){var R=(this.proxy.getTime()-P.proxy.getTime())/Q}else{var R=Q.diff(this.proxy,P.proxy)}return(O?R:Math[R>0?"floor":"ceil"](R))};N.prototype.getAbbrDayName=function(){return N.regional[this.locale]["dayNamesShort"][this.proxy.getDay()]};N.prototype.getAbbrMonthName=function(){return N.regional[this.locale]["monthNamesShort"][this.proxy.getMonth()]};N.prototype.getAMPM=function(){return this.proxy.getHours()>=12?"PM":"AM"};N.prototype.getAmPm=function(){return this.proxy.getHours()>=12?"pm":"am"};N.prototype.getCentury=function(){return parseInt(this.proxy.getFullYear()/100,10)};N.prototype.getDate=function(){return this.proxy.getDate()};N.prototype.getDay=function(){return this.proxy.getDay()};N.prototype.getDayOfWeek=function(){var O=this.proxy.getDay();return O===0?7:O};N.prototype.getDayOfYear=function(){var P=this.proxy;var O=P-new Date(""+P.getFullYear()+"/1/1 GMT");O+=P.getTimezoneOffset()*60000;P=null;return parseInt(O/60000/60/24,10)+1};N.prototype.getDayName=function(){return N.regional[this.locale]["dayNames"][this.proxy.getDay()]};N.prototype.getFullWeekOfYear=function(){var R=this.proxy;var O=this.getDayOfYear();var Q=6-R.getDay();var P=parseInt((O+Q)/7,10);return P};N.prototype.getFullYear=function(){return this.proxy.getFullYear()};N.prototype.getGmtOffset=function(){var O=this.proxy.getTimezoneOffset()/60;var P=O<0?"+":"-";O=Math.abs(O);return P+y(Math.floor(O),2)+":"+y((O%1)*60,2)};N.prototype.getHours=function(){return this.proxy.getHours()};N.prototype.getHours12=function(){var O=this.proxy.getHours();return O>12?O-12:(O==0?12:O)};N.prototype.getIsoWeek=function(){var R=this.proxy;var Q=R.getWeekOfYear();var O=(new Date(""+R.getFullYear()+"/1/1")).getDay();var P=Q+(O>4||O<=1?0:1);if(P==53&&(new Date(""+R.getFullYear()+"/12/31")).getDay()<4){P=1}else{if(P===0){R=new N(new Date(""+(R.getFullYear()-1)+"/12/31"));P=R.getIsoWeek()}}R=null;return P};N.prototype.getMilliseconds=function(){return this.proxy.getMilliseconds()};N.prototype.getMinutes=function(){return this.proxy.getMinutes()};N.prototype.getMonth=function(){return this.proxy.getMonth()};N.prototype.getMonthName=function(){return N.regional[this.locale]["monthNames"][this.proxy.getMonth()]};N.prototype.getMonthNumber=function(){return this.proxy.getMonth()+1};N.prototype.getSeconds=function(){return this.proxy.getSeconds()};N.prototype.getShortYear=function(){return this.proxy.getYear()%100};N.prototype.getTime=function(){return this.proxy.getTime()};N.prototype.getTimezoneAbbr=function(){return this.proxy.toString().replace(/^.*\(([^)]+)\)$/,"$1")};N.prototype.getTimezoneName=function(){var O=/(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());return O[1]||O[2]||"GMT"+this.getGmtOffset()};N.prototype.getTimezoneOffset=function(){return this.proxy.getTimezoneOffset()};N.prototype.getWeekOfYear=function(){var O=this.getDayOfYear();var Q=7-this.getDayOfWeek();var P=parseInt((O+Q)/7,10);return P};N.prototype.getUnix=function(){return Math.round(this.proxy.getTime()/1000,0)};N.prototype.getYear=function(){return this.proxy.getYear()};N.prototype.next=function(O){O=O||"day";return this.clone().add(1,O)};N.prototype.set=function(){switch(arguments.length){case 0:this.proxy=new Date();break;case 1:if(f(arguments[0])=="[object Object]"&&arguments[0]._type!="jsDate"){var Q=this.options=arguments[0];this.syntax=Q.syntax||this.syntax;this.defaultCentury=Q.defaultCentury||this.defaultCentury;this.proxy=N.createDate(Q.date)}else{this.proxy=N.createDate(arguments[0])}break;default:var O=[];for(var P=0;P<arguments.length;P++){O.push(arguments[P])}this.proxy=new Date(this.utcOffset);this.proxy.setFullYear.apply(this.proxy,O.slice(0,3));if(O.slice(3).length){this.proxy.setHours.apply(this.proxy,O.slice(3))}break}};N.prototype.setDate=function(O){return this.proxy.setDate(O)};N.prototype.setFullYear=function(){return this.proxy.setFullYear.apply(this.proxy,arguments)};N.prototype.setHours=function(){return this.proxy.setHours.apply(this.proxy,arguments)};N.prototype.setMilliseconds=function(O){return this.proxy.setMilliseconds(O)};N.prototype.setMinutes=function(){return this.proxy.setMinutes.apply(this.proxy,arguments)};N.prototype.setMonth=function(){return this.proxy.setMonth.apply(this.proxy,arguments)};N.prototype.setSeconds=function(){return this.proxy.setSeconds.apply(this.proxy,arguments)};N.prototype.setTime=function(O){return this.proxy.setTime(O)};N.prototype.setYear=function(){return this.proxy.setYear.apply(this.proxy,arguments)};N.prototype.strftime=function(O){O=O||this.formatString||N.regional[this.locale]["formatString"];return N.strftime(this,O,this.syntax)};N.prototype.toString=function(){return this.proxy.toString()};N.prototype.toYmdInt=function(){return(this.proxy.getFullYear()*10000)+(this.getMonthNumber()*100)+this.proxy.getDate()};N.regional={en:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],formatString:"%Y-%m-%d %H:%M:%S"},fr:{monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthNamesShort:["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],formatString:"%Y-%m-%d %H:%M:%S"},de:{monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],formatString:"%Y-%m-%d %H:%M:%S"},es:{monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],dayNames:["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"],dayNamesShort:["Dom","Lun","Mar","Mi&eacute;","Juv","Vie","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},ru:{monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],formatString:"%Y-%m-%d %H:%M:%S"},ar:{monthNames:["كانون الثاني","شباط","آذار","نيسان","آذار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"],dayNamesShort:["سبت","أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة"],formatString:"%Y-%m-%d %H:%M:%S"},pt:{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},"pt-BR":{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"}};N.regional["en-US"]=N.regional["en-GB"]=N.regional.en;N.regional.getLocale=function(){var O=N.config.defaultLocale;if(document&&document.getElementsByTagName("html")&&document.getElementsByTagName("html")[0].lang){O=document.getElementsByTagName("html")[0].lang;if(!N.regional.hasOwnProperty(O)){O=N.config.defaultLocale}}return O};var q=24*60*60*1000;var y=function(O,R){O=String(O);var P=R-O.length;var Q=String(Math.pow(10,P)).slice(1);return Q.concat(O)};var s={millisecond:1,second:1000,minute:60*1000,hour:60*60*1000,day:q,week:7*q,month:{add:function(Q,O){s.year.add(Q,Math[O>0?"floor":"ceil"](O/12));var P=Q.getMonth()+(O%12);if(P==12){P=0;Q.setYear(Q.getFullYear()+1)}else{if(P==-1){P=11;Q.setYear(Q.getFullYear()-1)}}Q.setMonth(P)},diff:function(S,Q){var O=S.getFullYear()-Q.getFullYear();var P=S.getMonth()-Q.getMonth()+(O*12);var R=S.getDate()-Q.getDate();return P+(R/30)}},year:{add:function(P,O){P.setYear(P.getFullYear()+Math[O>0?"floor":"ceil"](O))},diff:function(P,O){return s.month.diff(P,O)/12}}};for(var G in s){if(G.substring(G.length-1)!="s"){s[G+"s"]=s[G]}}var u=function(S,R,P){if(N.formats[P]["shortcuts"][R]){return N.strftime(S,N.formats[P]["shortcuts"][R],P)}else{var O=(N.formats[P]["codes"][R]||"").split(".");var Q=S["get"+O[0]]?S["get"+O[0]]():"";if(O[1]){Q=y(Q,O[1])}return Q}};N.strftime=function(U,R,Q,V){var P="perl";var T=N.regional.getLocale();if(Q&&N.formats.hasOwnProperty(Q)){P=Q}else{if(Q&&N.regional.hasOwnProperty(Q)){T=Q}}if(V&&N.formats.hasOwnProperty(V)){P=V}else{if(V&&N.regional.hasOwnProperty(V)){T=V}}if(f(U)!="[object Object]"||U._type!="jsDate"){U=new N(U);U.locale=T}if(!R){R=U.formatString||N.regional[T]["formatString"]}var O=R||"%Y-%m-%d",W="",S;while(O.length>0){if(S=O.match(N.formats[P].codes.matcher)){W+=O.slice(0,S.index);W+=(S[1]||"")+u(U,S[2],P);O=O.slice(S.index+S[0].length)}else{W+=O;O=""}}return W};N.formats={ISO:"%Y-%m-%dT%H:%M:%S.%N%G",SQL:"%Y-%m-%d %H:%M:%S"};N.formats.perl={codes:{matcher:/()%(#?(%|[a-z]))/i,Y:"FullYear",y:"ShortYear.2",m:"MonthNumber.2","#m":"MonthNumber",B:"MonthName",b:"AbbrMonthName",d:"Date.2","#d":"Date",e:"Date",A:"DayName",a:"AbbrDayName",w:"Day",H:"Hours.2","#H":"Hours",I:"Hours12.2","#I":"Hours12",p:"AMPM",M:"Minutes.2","#M":"Minutes",S:"Seconds.2","#S":"Seconds",s:"Unix",N:"Milliseconds.3","#N":"Milliseconds",O:"TimezoneOffset",Z:"TimezoneName",G:"GmtOffset"},shortcuts:{F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",D:"%m/%d/%y","#c":"%a %b %e %H:%M:%S %Y",v:"%e-%b-%Y",R:"%H:%M",r:"%I:%M:%S %p",t:"\t",n:"\n","%":"%"}};N.formats.php={codes:{matcher:/()%((%|[a-z]))/i,a:"AbbrDayName",A:"DayName",d:"Date.2",e:"Date",j:"DayOfYear.3",u:"DayOfWeek",w:"Day",U:"FullWeekOfYear.2",V:"IsoWeek.2",W:"WeekOfYear.2",b:"AbbrMonthName",B:"MonthName",m:"MonthNumber.2",h:"AbbrMonthName",C:"Century.2",y:"ShortYear.2",Y:"FullYear",H:"Hours.2",I:"Hours12.2",l:"Hours12",p:"AMPM",P:"AmPm",M:"Minutes.2",S:"Seconds.2",s:"Unix",O:"TimezoneOffset",z:"GmtOffset",Z:"TimezoneAbbr"},shortcuts:{D:"%m/%d/%y",F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",R:"%H:%M",r:"%I:%M:%S %p",t:"\t",n:"\n","%":"%"}};N.createDate=function(Q){if(Q==null){return new Date()}if(Q instanceof Date){return Q}if(typeof Q=="number"){return new Date(Q)}var V=String(Q).replace(/^\s*(.+)\s*$/g,"$1");V=V.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/,"$1/$2/$3");V=V.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i,"$1 $2 $3");var U=V.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);if(U&&U.length>3){var Z=parseFloat(U[3]);var T=N.config.defaultCentury+Z;T=String(T);V=V.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i,U[1]+" "+U[2]+" "+T)}U=V.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/);function Y(ad,ac){var ai=parseFloat(ac[1]);var ah=parseFloat(ac[2]);var ag=parseFloat(ac[3]);var af=N.config.defaultCentury;var ab,aa,aj,ae;if(ai>31){aa=ag;aj=ah;ab=af+ai}else{aa=ah;aj=ai;ab=af+ag}ae=aj+"/"+aa+"/"+ab;return ad.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/,ae)}if(U&&U.length>3){V=Y(V,U)}var U=V.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);if(U&&U.length>3){V=Y(V,U)}var S=0;var P=N.matchers.length;var X,O,W=V;while(S<P){O=Date.parse(W);if(!isNaN(O)){return new Date(O)}X=N.matchers[S];if(typeof X=="function"){var R=X.call(N,W);if(R instanceof Date){return R}}else{W=V.replace(X[0],X[1])}S++}return NaN};N.daysInMonth=function(O,P){if(P==2){return new Date(O,1,29).getDate()==29?29:28}return[l,31,l,31,30,31,30,31,31,30,31,30,31][P]};N.matchers=[[/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/,"$2/$1/$3"],[/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/,"$2/$3/$1"],function(R){var P=R.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);if(P){if(P[1]){var Q=this.createDate(P[1]);if(isNaN(Q)){return}}else{var Q=new Date();Q.setMilliseconds(0)}var O=parseFloat(P[2]);if(P[6]){O=P[6].toLowerCase()=="am"?(O==12?0:O):(O==12?12:O+12)}Q.setHours(O,parseInt(P[3]||0,10),parseInt(P[4]||0,10),((parseFloat(P[5]||0))||0)*1000);return Q}else{return R}},function(R){var P=R.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);if(P){if(P[1]){var Q=this.createDate(P[1]);if(isNaN(Q)){return}}else{var Q=new Date();Q.setMilliseconds(0)}var O=parseFloat(P[2]);Q.setHours(O,parseInt(P[3],10),parseInt(P[4],10),parseFloat(P[5])*1000);return Q}else{return R}},function(S){var Q=S.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);if(Q){var R=new Date();var T=N.config.defaultCentury;var V=parseFloat(Q[1]);var U=parseFloat(Q[3]);var P,O,W;if(V>31){O=U;P=T+V}else{O=V;P=T+U}var W=J(Q[2],N.regional[this.locale]["monthNamesShort"]);if(W==-1){W=J(Q[2],N.regional[this.locale]["monthNames"])}R.setFullYear(P,W,O);R.setHours(0,0,0,0);return R}else{return S}}];function J(Q,R){if(R.indexOf){return R.indexOf(Q)}for(var O=0,P=R.length;O<P;O++){if(R[O]===Q){return O}}return -1}function f(O){if(O===null){return"[object Null]"}return Object.prototype.toString.call(O)}w.jsDate=N;w.jqplot.sprintf=function(){function U(aa,W,X,Z){var Y=(aa.length>=W)?"":Array(1+W-aa.length>>>0).join(X);return Z?aa+Y:Y+aa}function R(Y){var X=new String(Y);for(var W=10;W>0;W--){if(X==(X=X.replace(/^(\d+)(\d{3})/,"$1"+w.jqplot.sprintf.thousandsSeparator+"$2"))){break}}return X}function Q(ab,aa,ad,Y,Z,X){var ac=Y-ab.length;if(ac>0){var W=" ";if(X){W="&nbsp;"}if(ad||!Z){ab=U(ab,Y,W,ad)}else{ab=ab.slice(0,aa.length)+U("",ac,"0",true)+ab.slice(aa.length)}}return ab}function V(ae,X,ac,Y,W,ab,ad,aa){var Z=ae>>>0;ac=ac&&Z&&{"2":"0b","8":"0","16":"0x"}[X]||"";ae=ac+U(Z.toString(X),ab||0,"0",false);return Q(ae,ac,Y,W,ad,aa)}function O(aa,ab,Y,W,Z,X){if(W!=null){aa=aa.slice(0,W)}return Q(aa,"",ab,Y,Z,X)}var P=arguments,S=0,T=P[S++];return T.replace(w.jqplot.sprintf.regex,function(ar,ad,ae,ah,au,ao,ab){if(ar=="%%"){return"%"}var ai=false,af="",ag=false,aq=false,ac=false,aa=false;for(var an=0;ae&&an<ae.length;an++){switch(ae.charAt(an)){case" ":af=" ";break;case"+":af="+";break;case"-":ai=true;break;case"0":ag=true;break;case"#":aq=true;break;case"&":ac=true;break;case"'":aa=true;break}}if(!ah){ah=0}else{if(ah=="*"){ah=+P[S++]}else{if(ah.charAt(0)=="*"){ah=+P[ah.slice(1,-1)]}else{ah=+ah}}}if(ah<0){ah=-ah;ai=true}if(!isFinite(ah)){throw new Error("$.jqplot.sprintf: (minimum-)width must be finite")}if(!ao){ao="fFeE".indexOf(ab)>-1?6:(ab=="d")?0:void (0)}else{if(ao=="*"){ao=+P[S++]}else{if(ao.charAt(0)=="*"){ao=+P[ao.slice(1,-1)]}else{ao=+ao}}}var ak=ad?P[ad.slice(0,-1)]:P[S++];switch(ab){case"s":if(ak==null){return""}return O(String(ak),ai,ah,ao,ag,ac);case"c":return O(String.fromCharCode(+ak),ai,ah,ao,ag,ac);case"b":return V(ak,2,aq,ai,ah,ao,ag,ac);case"o":return V(ak,8,aq,ai,ah,ao,ag,ac);case"x":return V(ak,16,aq,ai,ah,ao,ag,ac);case"X":return V(ak,16,aq,ai,ah,ao,ag,ac).toUpperCase();case"u":return V(ak,10,aq,ai,ah,ao,ag,ac);case"i":var Y=parseInt(+ak,10);if(isNaN(Y)){return""}var am=Y<0?"-":af;var ap=aa?R(String(Math.abs(Y))):String(Math.abs(Y));ak=am+U(ap,ao,"0",false);return Q(ak,am,ai,ah,ag,ac);case"d":var Y=Math.round(+ak);if(isNaN(Y)){return""}var am=Y<0?"-":af;var ap=aa?R(String(Math.abs(Y))):String(Math.abs(Y));ak=am+U(ap,ao,"0",false);return Q(ak,am,ai,ah,ag,ac);case"e":case"E":case"f":case"F":case"g":case"G":var Y=+ak;if(isNaN(Y)){return""}var am=Y<0?"-":af;var Z=["toExponential","toFixed","toPrecision"]["efg".indexOf(ab.toLowerCase())];var at=["toString","toUpperCase"]["eEfFgG".indexOf(ab)%2];var ap=Math.abs(Y)[Z](ao);ap=aa?R(ap):ap;ak=am+ap;return Q(ak,am,ai,ah,ag,ac)[at]();case"p":case"P":var Y=+ak;if(isNaN(Y)){return""}var am=Y<0?"-":af;var aj=String(Number(Math.abs(Y)).toExponential()).split(/e|E/);var X=(aj[0].indexOf(".")!=-1)?aj[0].length-1:aj[0].length;var al=(aj[1]<0)?-aj[1]-1:0;if(Math.abs(Y)<1){if(X+al<=ao){ak=am+Math.abs(Y).toPrecision(X)}else{if(X<=ao-1){ak=am+Math.abs(Y).toExponential(X-1)}else{ak=am+Math.abs(Y).toExponential(ao-1)}}}else{var W=(X<=ao)?X:ao;ak=am+Math.abs(Y).toPrecision(W)}var at=["toString","toUpperCase"]["pP".indexOf(ab)%2];return Q(ak,am,ai,ah,ag,ac)[at]();case"n":return"";default:return ar}})};w.jqplot.sprintf.thousandsSeparator=",";w.jqplot.sprintf.regex=/%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g})(jQuery);
/*!
 * jQuery Templates Plugin
 * http://github.com/jquery/jquery-tmpl
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function( jQuery, undefined ){
	var oldManip = jQuery.fn.domManip, tmplItmAtt = "_tmplitem", htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
		newTmplItems = {}, wrappedItems = {}, appendToTmplItems, topTmplItem = { key: 0, data: {} }, itemKey = 0, cloneIndex = 0, stack = [];

	function newTmplItem( options, parentItem, fn, data ) {
		// Returns a template item data structure for a new rendered instance of a template (a 'template item').
		// The content field is a hierarchical array of strings and nested items (to be
		// removed and replaced by nodes field of dom elements, once inserted in DOM).
		var newItem = {
			data: data || (parentItem ? parentItem.data : {}),
			_wrap: parentItem ? parentItem._wrap : null,
			tmpl: null,
			parent: parentItem || null,
			nodes: [],
			calls: tiCalls,
			nest: tiNest,
			wrap: tiWrap,
			html: tiHtml,
			update: tiUpdate
		};
		if ( options ) {
			jQuery.extend( newItem, options, { nodes: [], parent: parentItem } );
		}
		if ( fn ) {
			// Build the hierarchical content to be used during insertion into DOM
			newItem.tmpl = fn;
			newItem._ctnt = newItem._ctnt || newItem.tmpl( jQuery, newItem );
			newItem.key = ++itemKey;
			// Keep track of new template item, until it is stored as jQuery Data on DOM element
			(stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
		}
		return newItem;
	}

	// Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var ret = [], insert = jQuery( selector ), elems, i, l, tmplItems,
				parent = this.length === 1 && this[0].parentNode;

			appendToTmplItems = newTmplItems || {};
			if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
				insert[ original ]( this[0] );
				ret = this;
			} else {
				for ( i = 0, l = insert.length; i < l; i++ ) {
					cloneIndex = i;
					elems = (i > 0 ? this.clone(true) : this).get();
					jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
					ret = ret.concat( elems );
				}
				cloneIndex = 0;
				ret = this.pushStack( ret, name, insert.selector );
			}
			tmplItems = appendToTmplItems;
			appendToTmplItems = null;
			jQuery.tmpl.complete( tmplItems );
			return ret;
		};
	});

	jQuery.fn.extend({
		// Use first wrapped element as template markup.
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( data, options, parentItem ) {
			return jQuery.tmpl( this[0], data, options, parentItem );
		},

		// Find which rendered template item the first wrapped DOM element belongs to
		tmplItem: function() {
			return jQuery.tmplItem( this[0] );
		},
		
		tmplElement: function() {
			return jQuery.tmplElement( this[0] );
		},

		// Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
		template: function( name ) {
			return jQuery.template( name, this[0] );
		},

		domManip: function( args, table, callback, options ) {
			// This appears to be a bug in the appendTo, etc. implementation
			// it should be doing .call() instead of .apply(). See #6227
			if ( args[0] && args[0].nodeType ) {
				var dmArgs = jQuery.makeArray( arguments ), argsLength = args.length, i = 0, tmplItem;
				while ( i < argsLength && !(tmplItem = jQuery.data( args[i++], "tmplItem" ))) {}
				if ( argsLength > 1 ) {
					dmArgs[0] = [jQuery.makeArray( args )];
				}
				if ( tmplItem && cloneIndex ) {
					dmArgs[2] = function( fragClone ) {
						// Handler called by oldManip when rendered template has been inserted into DOM.
						jQuery.tmpl.afterManip( this, fragClone, callback );
					};
				}
				oldManip.apply( this, dmArgs );
			} else {
				oldManip.apply( this, arguments );
			}
			cloneIndex = 0;
			if ( !appendToTmplItems ) {
				jQuery.tmpl.complete( newTmplItems );
			}
			return this;
		}
	});

	jQuery.extend({
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( tmpl, data, options, parentItem ) {
			var ret, topLevel = !parentItem;
			if ( topLevel ) {
				// This is a top-level tmpl call (not from a nested template using {{tmpl}})
				parentItem = topTmplItem;
				if ( typeof tmpl != "function" )
  				tmpl = jQuery.template[tmpl] || jQuery.template( null, tmpl );
				wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
			} else if ( !tmpl ) {
				// The template item is already associated with DOM - this is a refresh.
				// Re-evaluate rendered template for the parentItem
				tmpl = parentItem.tmpl;
				newTmplItems[parentItem.key] = parentItem;
				parentItem.nodes = [];
				if ( parentItem.wrapped ) {
					updateWrapped( parentItem, parentItem.wrapped );
				}
				// Rebuild, without creating a new template item
				return jQuery( build( parentItem, null, parentItem.tmpl( jQuery, parentItem ) ));
			}
			if ( !tmpl ) {
				return []; // Could throw...
			}
			if ( typeof data === "function" ) {
				data = data.call( parentItem || {} );
			}
			if ( options && options.wrapped ) {
				updateWrapped( options, options.wrapped );
			}
			ret = jQuery.isArray( data ) ? 
				jQuery.map( data, function( dataItem ) {
					return dataItem ? newTmplItem( options, parentItem, tmpl, dataItem ) : null;
				}) :
				[ newTmplItem( options, parentItem, tmpl, data ) ];
			return topLevel ? jQuery( build( parentItem, null, ret ) ) : ret;
		},

		// Return rendered template item for an element.
		tmplItem: function( elem ) {
			var tmplItem;
			if ( elem instanceof jQuery ) {
				elem = elem[0];
			}
			while ( elem && elem.nodeType === 1 && !(tmplItem = jQuery.data( elem, "tmplItem" )) && (elem = elem.parentNode) ) {}
			return tmplItem || topTmplItem;
		},
		
		tmplElement: function( elem ) {
			var tmplItem;
			if ( elem instanceof jQuery ) {
				elem = elem[0];
			}
			while ( elem && elem.nodeType === 1 && !jQuery.data( elem, "tmplItem" ) && (elem = elem.parentNode) ) {}
			return elem;
		},

		// Set:
		// Use $.template( name, tmpl ) to cache a named template,
		// where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
		// Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

		// Get:
		// Use $.template( name ) to access a cached template.
		// Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
		// will return the compiled template, without adding a name reference.
		// If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
		// to $.template( null, templateString )
		template: function( name, tmpl ) {
			if (tmpl) {
				// Compile template and associate with name
				if ( typeof tmpl === "string" ) {
					// This is an HTML string being passed directly in.
					tmpl = buildTmplFn( tmpl )
				} else if ( tmpl instanceof jQuery ) {
					tmpl = tmpl[0] || {};
				}
				if ( tmpl.nodeType ) {
					// If this is a template block, use cached copy, or generate tmpl function and cache.
					tmpl = jQuery.data( tmpl, "tmpl" ) || jQuery.data( tmpl, "tmpl", buildTmplFn( tmpl.innerHTML ));
				}
				return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
			}
			// Return named compiled template
			return name ? (typeof name !== "string" ? jQuery.template( null, name ): 
				(jQuery.template[name] || 
					// If not in map, treat as a selector. (If integrated with core, use quickExpr.exec) 
					jQuery.template( null, htmlExpr.test( name ) ? name : jQuery( name )))) : null; 
		},

		encode: function( text ) {
			// Do HTML encoding replacing < > & and ' and " by corresponding entities.
			return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
		}
	});

	jQuery.extend( jQuery.tmpl, {
		tag: {
			"tmpl": {
				_default: { $2: "null" },
				open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
				// tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
				// This means that {{tmpl foo}} treats foo as a template (which IS a function). 
				// Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
			},
			"wrap": {
				_default: { $2: "null" },
				open: "$item.calls(_,$1,$2);_=[];",
				close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
			},
			"each": {
				_default: { $2: "$index, $value" },
				open: "if($notnull_1){$.each($1a,function($2){with(this){",
				close: "}});}"
			},
			"if": {
				open: "if(($notnull_1) && $1a){",
				close: "}"
			},
			"else": {
				_default: { $1: "true" },
				open: "}else if(($notnull_1) && $1a){"
			},
			"html": {
				// Unecoded expression evaluation. 
				open: "if($notnull_1){_.push($1a);}"
			},
			"=": {
				// Encoded expression evaluation. Abbreviated form is ${}.
				_default: { $1: "$data" },
				open: "if($notnull_1){_.push($.encode($1a));}"
			},
			"!": {
				// Comment tag. Skipped by parser
				open: ""
			}
		},

		// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
		complete: function( items ) {
			newTmplItems = {};
		},

		// Call this from code which overrides domManip, or equivalent
		// Manage cloning/storing template items etc.
		afterManip: function afterManip( elem, fragClone, callback ) {
			// Provides cloned fragment ready for fixup prior to and after insertion into DOM
			var content = fragClone.nodeType === 11 ?
				jQuery.makeArray(fragClone.childNodes) :
				fragClone.nodeType === 1 ? [fragClone] : [];

			// Return fragment to original caller (e.g. append) for DOM insertion
			callback.call( elem, fragClone );

			// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
			storeTmplItems( content );
			cloneIndex++;
		}
	});

	//========================== Private helper functions, used by code above ==========================

	function build( tmplItem, nested, content ) {
		// Convert hierarchical content into flat string array 
		// and finally return array of fragments ready for DOM insertion
		var frag, ret = content ? jQuery.map( content, function( item ) {
			return (typeof item === "string") ? 
				// Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
				(tmplItem.key ? item.replace( /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2" ) : item) :
				// This is a child template item. Build nested template.
				build( item, tmplItem, item._ctnt );
		}) : 
		// If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}. 
		tmplItem;
		if ( nested ) {
			return ret;
		}

		// top-level template
		ret = ret.join("");

		// Support templates which have initial or final text nodes, or consist only of text
		// Also support HTML entities within the HTML markup.
		ret.replace( /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function( all, before, middle, after) {
			frag = jQuery( middle ).get();

			storeTmplItems( frag );
			if ( before ) {
				frag = unencode( before ).concat(frag);
			}
			if ( after ) {
				frag = frag.concat(unencode( after ));
			}
		});
		return frag ? frag : unencode( ret );
	}

	function unencode( text ) {
		// Use createElement, since createTextNode will not render HTML entities correctly
		var el = document.createElement( "div" );
		el.innerHTML = text;
		return jQuery.makeArray(el.childNodes);
	}

	// Generate a reusable function that will serve to render a template against data
	function buildTmplFn( markup ) {
		return new Function("jQuery","$item",
			"var $=jQuery,call,_=[],$data=$item.data;" +

			// Introduce the data as local variables using with(){}
			"with($data){_.push('" +

			// Convert the template into pure JavaScript
			jQuery.trim(markup)
				.replace( /([\\'])/g, "\\$1" )
				.replace( /[\r\t\n]/g, " " )
				.replace( /\$\{([^\}]*)\}/g, "{{= $1}}" )
				.replace( /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
				function( all, slash, type, fnargs, target, parens, args ) {
					var tag = jQuery.tmpl.tag[ type ], def, expr, exprAutoFnDetect;
					if ( !tag ) {
						throw "Template command not found: " + type;
					}
					def = tag._default || [];
					if ( parens && !/\w$/.test(target)) {
						target += parens;
						parens = "";
					}
					if ( target ) {
						target = unescape( target ); 
						args = args ? ("," + unescape( args ) + ")") : (parens ? ")" : "");
						// Support for target being things like a.toLowerCase();
						// In that case don't call with template item as 'this' pointer. Just evaluate...
						expr = parens ? (target.indexOf(".") > -1 ? target + parens : ("(" + target + ").call($data" + args)) : target;
						exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
					} else {
						exprAutoFnDetect = expr = def.$1 || "null";
					}
					fnargs = unescape( fnargs );
					return "');" + 
						tag[ slash ? "close" : "open" ]
							.split( "$notnull_1" ).join( target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true" )
							.split( "$1a" ).join( exprAutoFnDetect )
							.split( "$1" ).join( expr )
							.split( "$2" ).join( fnargs ?
								fnargs.replace( /\s*([^\(]+)\s*(\((.*?)\))?/g, function( all, name, parens, params ) {
									params = params ? ("," + params + ")") : (parens ? ")" : "");
									return params ? ("(" + name + ").call($item" + params) : all;
								})
								: (def.$2||"")
							) +
						"_.push('";
				}) +
			"');}return _;"
		);
	}
	function updateWrapped( options, wrapped ) {
		// Build the wrapped content. 
		options._wrap = build( options, true, 
			// Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
			jQuery.isArray( wrapped ) ? wrapped : [htmlExpr.test( wrapped ) ? wrapped : jQuery( wrapped ).html()]
		).join("");
	}

	function unescape( args ) {
		return args ? args.replace( /\\'/g, "'").replace(/\\\\/g, "\\" ) : null;
	}
	function outerHtml( elem ) {
		var div = document.createElement("div");
		div.appendChild( elem.cloneNode(true) );
		return div.innerHTML;
	}

	// Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
	function storeTmplItems( content ) {
		var keySuffix = "_" + cloneIndex, elem, elems, newClonedItems = {}, i, l, m;
		for ( i = 0, l = content.length; i < l; i++ ) {
			if ( (elem = content[i]).nodeType !== 1 ) {
				continue;
			}
			elems = elem.getElementsByTagName("*");
			for ( m = elems.length - 1; m >= 0; m-- ) {
				processItemKey( elems[m] );
			}
			processItemKey( elem );
		}
		function processItemKey( el ) {
			var pntKey, pntNode = el, pntItem, tmplItem, key;
			// Ensure that each rendered template inserted into the DOM has its own template item,
			if ( (key = el.getAttribute( tmplItmAtt ))) {
				while ( pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute( tmplItmAtt ))) { }
				if ( pntKey !== key ) {
					// The next ancestor with a _tmplitem expando is on a different key than this one.
					// So this is a top-level element within this template item
					// Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
					pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute( tmplItmAtt ) || 0)) : 0;
					if ( !(tmplItem = newTmplItems[key]) ) {
						// The item is for wrapped content, and was copied from the temporary parent wrappedItem.
						tmplItem = wrappedItems[key];
						tmplItem = newTmplItem( tmplItem, newTmplItems[pntNode]||wrappedItems[pntNode], null, true );
						tmplItem.key = ++itemKey;
						newTmplItems[itemKey] = tmplItem;
					}
					if ( cloneIndex ) {
						cloneTmplItem( key );
					}
				}
				el.removeAttribute( tmplItmAtt );
			} else if ( cloneIndex && (tmplItem = jQuery.data( el, "tmplItem" )) ) {
				// This was a rendered element, cloned during append or appendTo etc.
				// TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
				cloneTmplItem( tmplItem.key );
				newTmplItems[tmplItem.key] = tmplItem;
				pntNode = jQuery.data( el.parentNode, "tmplItem" );
				pntNode = pntNode ? pntNode.key : 0;
			}
			if ( tmplItem ) {
				pntItem = tmplItem;
				// Find the template item of the parent element. 
				// (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
				while ( pntItem && pntItem.key != pntNode ) { 
					// Add this element as a top-level node for this rendered template item, as well as for any
					// ancestor items between this item and the item of its parent element
					pntItem.nodes.push( el );
					pntItem = pntItem.parent;
				}
				// Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
				delete tmplItem._ctnt;
				delete tmplItem._wrap;
				// Store template item as jQuery data on the element
				jQuery.data( el, "tmplItem", tmplItem );
			}
			function cloneTmplItem( key ) {
				key = key + keySuffix;
				tmplItem = newClonedItems[key] = 
					(newClonedItems[key] || newTmplItem( tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent, null, true ));
			}
		}
	}

	//---- Helper functions for template item ----

	function tiCalls( content, tmpl, data, options ) {
		if ( !content ) {
			return stack.pop();
		}
		stack.push({ _: content, tmpl: tmpl, item:this, data: data, options: options });
	}

	function tiNest( tmpl, data, options ) {
		// nested template, using {{tmpl}} tag
		return jQuery.tmpl( jQuery.template( tmpl ), data, options, this );
	}

	function tiWrap( call, wrapped ) {
		// nested template, using {{wrap}} tag
		var options = call.options || {};
		options.wrapped = wrapped;
		// Apply the template, which may incorporate wrapped content, 
		return jQuery.tmpl( jQuery.template( call.tmpl ), call.data, options, call.item );
	}

	function tiHtml( filter, textOnly ) {
		var wrapped = this._wrap;
		return jQuery.map(
			jQuery( jQuery.isArray( wrapped ) ? wrapped.join("") : wrapped ).filter( filter || "*" ),
			function(e) {
				return textOnly ?
					e.innerText || e.textContent :
					e.outerHTML || outerHtml(e);
			});
	}

	function tiUpdate() {
		var coll = this.nodes;
		jQuery.tmpl( null, null, null, this).insertBefore( coll[0] );
		jQuery( coll ).remove();
	}
})( jQuery );
/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
(function() {
  var $, Ajax, Base, Collection, Include, Model, Singleton;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  if (typeof Spine === "undefined" || Spine === null) {
    Spine = require("spine");
  }
  $ = Spine.$;
  Model = Spine.Model;
  Ajax = {
    enabled: true,
    pending: false,
    requests: [],
    getURL: function(object) {
      return object && (typeof object.url === "function" ? object.url() : void 0) || object.url;
    },
    disable: function(callback) {
      this.enabled = false;
      callback();
      return this.enabled = true;
    },
    requestNext: function() {
      var next;
      next = this.requests.shift();
      if (next) {
        return this.request.apply(this, next);
      } else {
        return this.pending = false;
      }
    },
    request: function(params) {
      var error, success;
      success = params.success;
      error = params.error;
      params.error = __bind(function() {
        if (typeof error === "function") {
          error.apply(null, arguments);
        }
        return this.requestNext();
      }, this);
      params.success = __bind(function() {
        if (typeof success === "function") {
          success.apply(null, arguments);
        }
        return this.requestNext();
      }, this);
      return $.ajax(params);
    },
    send: function() {
      if (!this.enabled) {
        return;
      }
      if (this.pending) {
        return this.requests.push(arguments);
      } else {
        this.pending = true;
        return this.request.apply(this, arguments);
      }
    }
  };
  Base = (function() {
    function Base() {}
    Base.prototype.defaults = {
      contentType: "application/json",
      dataType: "json",
      processData: false
    };
    Base.prototype.send = function(params, defaults) {
      return Ajax.send($.extend({}, this.defaults, defaults, params));
    };
    return Base;
  })();
  Collection = (function() {
    __extends(Collection, Base);
    function Collection(model) {
      this.model = model;
      this.errorResponse = __bind(this.errorResponse, this);
      this.recordsResponse = __bind(this.recordsResponse, this);
      Collection.__super__.constructor.apply(this, arguments);
      this.url = Ajax.getURL(this.model);
    }
    Collection.prototype.findAll = function(params) {
      return this.send(params, {
        type: "GET",
        url: this.url,
        success: this.recordsResponse(params),
        error: this.errorResponse(params)
      });
    };
    Collection.prototype.fetch = function() {
      return this.findAll({
        success: __bind(function(records) {
          return this.model.refresh(records);
        }, this)
      });
    };
    Collection.prototype.recordsResponse = function(params) {
      var success;
      success = params.success;
      return __bind(function(data, status, xhr) {
        this.model.trigger("ajaxSuccess", null, status, xhr);
        return typeof success === "function" ? success(this.model.fromJSON(data)) : void 0;
      }, this);
    };
    Collection.prototype.errorResponse = function(params) {
      var error;
      if (params == null) {
        params = {};
      }
      error = params.error;
      return __bind(function(jqXHR, statusText, error) {
        this.model.trigger("ajaxError", null, jqXHR, statusText, error);
        return typeof error === "function" ? error(this.model) : void 0;
      }, this);
    };
    return Collection;
  })();
  Singleton = (function() {
    __extends(Singleton, Base);
    function Singleton(record) {
      this.record = record;
      this.errorResponse = __bind(this.errorResponse, this);
      this.blankResponse = __bind(this.blankResponse, this);
      this.recordResponse = __bind(this.recordResponse, this);
      Singleton.__super__.constructor.apply(this, arguments);
      this.model = this.record.constructor;
      this.url = Ajax.getURL(this.record);
      this.base = Ajax.getURL(this.model);
    }
    Singleton.prototype.find = function(params) {
      return this.send(params, {
        type: "GET",
        url: this.url
      });
    };
    Singleton.prototype.create = function(params) {
      return this.send(params, {
        type: "POST",
        data: JSON.stringify(this.record),
        url: this.base,
        success: this.recordResponse(params),
        error: this.errorResponse(params)
      });
    };
    Singleton.prototype.update = function(params) {
      return this.send(params, {
        type: "PUT",
        data: JSON.stringify(this.record),
        url: this.url,
        success: this.recordResponse(params),
        error: this.errorResponse(params)
      });
    };
    Singleton.prototype.destroy = function(params) {
      return this.send(params, {
        type: "DELETE",
        url: this.url,
        success: this.blankResponse(params),
        error: this.errorResponse(params)
      });
    };
    Singleton.prototype.recordResponse = function(params) {
      var success;
      if (params == null) {
        params = {};
      }
      success = params.success;
      return __bind(function(data, status, xhr) {
        this.record.trigger("ajaxSuccess", this.record, status, xhr);
        if (!data || params.data === data) {
          return;
        }
        data = this.model.fromJSON(data);
        Ajax.disable(__bind(function() {
          if (data.id && this.record.id !== data.id) {
            this.record.changeID(data.id);
          }
          return this.record.updateAttributes(data.attributes());
        }, this));
        return typeof success === "function" ? success(this.record) : void 0;
      }, this);
    };
    Singleton.prototype.blankResponse = function(params) {
      var success;
      if (params == null) {
        params = {};
      }
      success = params.success;
      return __bind(function(data, status, xhr) {
        this.record.trigger("ajaxSuccess", this.record, status, xhr);
        return typeof success === "function" ? success(this.record) : void 0;
      }, this);
    };
    Singleton.prototype.errorResponse = function(params) {
      var error;
      if (params == null) {
        params = {};
      }
      error = params.error;
      return __bind(function(jqXHR, statusText, error) {
        this.record.trigger("ajaxError", this.record, jqXHR, statusText, error);
        return typeof error === "function" ? error(this.record) : void 0;
      }, this);
    };
    return Singleton;
  })();
  Model.host = "";
  Include = {
    ajax: function() {
      return new Singleton(this);
    },
    url: function() {
      var base;
      base = Ajax.getURL(this.constructor);
      if (base.charAt(base.length - 1) !== "/") {
        base += "/";
      }
      base += encodeURIComponent(this.id);
      return base;
    }
  };
  Model.Ajax = {
    ajax: function() {
      return new Collection(this);
    },
    extended: function() {
      this.change(function(record, type) {
        return record.ajax()[type]();
      });
      this.fetch(function() {
        var _ref;
        return (_ref = this.ajax()).fetch.apply(_ref, arguments);
      });
      return this.include(Include);
    },
    url: function() {
      return "" + Model.host + "/" + (this.className.toLowerCase()) + "s";
    }
  };
  Spine.Ajax = Ajax;
  if (typeof module !== "undefined" && module !== null) {
    module.exports = Ajax;
  }
}).call(this);

(function() {
  var $, Controller, Events, Log, Model, Module, Spine, guid, isArray, makeArray, moduleKeywords;
  var __slice = Array.prototype.slice, __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Events = {
    bind: function(ev, callback) {
      var calls, evs, name, _i, _len;
      evs = ev.split(' ');
      calls = this.hasOwnProperty('_callbacks') && this._callbacks || (this._callbacks = {});
      for (_i = 0, _len = evs.length; _i < _len; _i++) {
        name = evs[_i];
        calls[name] || (calls[name] = []);
        calls[name].push(callback);
      }
      return this;
    },
    trigger: function() {
      var args, callback, ev, list, _i, _len, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      ev = args.shift();
      list = this.hasOwnProperty('_callbacks') && ((_ref = this._callbacks) != null ? _ref[ev] : void 0);
      if (!list) {
        return false;
      }
      for (_i = 0, _len = list.length; _i < _len; _i++) {
        callback = list[_i];
        if (callback.apply(this, args) === false) {
          break;
        }
      }
      return true;
    },
    unbind: function(ev, callback) {
      var cb, i, list, _len, _ref;
      if (!ev) {
        this._callbacks = {};
        return this;
      }
      list = (_ref = this._callbacks) != null ? _ref[ev] : void 0;
      if (!list) {
        return this;
      }
      if (!callback) {
        delete this._callbacks[ev];
        return this;
      }
      for (i = 0, _len = list.length; i < _len; i++) {
        cb = list[i];
        if (cb === callback) {
          list = list.slice();
          list.splice(i, 1);
          this._callbacks[ev] = list;
          break;
        }
      }
      return this;
    }
  };
  Log = {
    trace: true,
    logPrefix: '(App)',
    log: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (!this.trace) {
        return;
      }
      if (typeof console === 'undefined') {
        return;
      }
      if (this.logPrefix) {
        args.unshift(this.logPrefix);
      }
      console.log.apply(console, args);
      return this;
    }
  };
  moduleKeywords = ['included', 'extended'];
  Module = (function() {
    Module.include = function(obj) {
      var included, key, value;
      if (!obj) {
        throw 'include(obj) requires obj';
      }
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(moduleKeywords, key) < 0) {
          this.prototype[key] = value;
        }
      }
      included = obj.included;
      if (included) {
        included.apply(this);
      }
      return this;
    };
    Module.extend = function(obj) {
      var extended, key, value;
      if (!obj) {
        throw 'extend(obj) requires obj';
      }
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(moduleKeywords, key) < 0) {
          this[key] = value;
        }
      }
      extended = obj.extended;
      if (extended) {
        extended.apply(this);
      }
      return this;
    };
    Module.proxy = function(func) {
      return __bind(function() {
        return func.apply(this, arguments);
      }, this);
    };
    Module.prototype.proxy = function(func) {
      return __bind(function() {
        return func.apply(this, arguments);
      }, this);
    };
    function Module() {
      if (typeof this.init === "function") {
        this.init.apply(this, arguments);
      }
    }
    return Module;
  })();
  Model = (function() {
    __extends(Model, Module);
    Model.extend(Events);
    Model.records = {};
    Model.attributes = [];
    Model.configure = function() {
      var attributes, name;
      name = arguments[0], attributes = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      this.className = name;
      this.records = {};
      if (attributes.length) {
        this.attributes = attributes;
      }
      this.attributes && (this.attributes = makeArray(this.attributes));
      this.attributes || (this.attributes = []);
      this.unbind();
      return this;
    };
    Model.toString = function() {
      return "" + this.className + "(" + (this.attributes.join(", ")) + ")";
    };
    Model.find = function(id) {
      var record;
      record = this.records[id];
      if (!record) {
        throw 'Unknown record';
      }
      return record.clone();
    };
    Model.exists = function(id) {
      try {
        return this.find(id);
      } catch (e) {
        return false;
      }
    };
    Model.refresh = function(values, options) {
      var record, _i, _len, _ref;
      if (options == null) {
        options = {};
      }
      if (options.clear) {
        this.records = {};
      }
      _ref = this.fromJSON(values);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        record.newRecord = false;
        record.id || (record.id = guid());
        this.records[record.id] = record;
      }
      this.trigger('refresh');
      return this;
    };
    Model.select = function(callback) {
      var id, record, result;
      result = (function() {
        var _ref, _results;
        _ref = this.records;
        _results = [];
        for (id in _ref) {
          record = _ref[id];
          if (callback(record)) {
            _results.push(record);
          }
        }
        return _results;
      }).call(this);
      return this.cloneArray(result);
    };
    Model.findByAttribute = function(name, value) {
      var id, record, _ref;
      _ref = this.records;
      for (id in _ref) {
        record = _ref[id];
        if (record[name] === value) {
          return record.clone();
        }
      }
      return null;
    };
    Model.findAllByAttribute = function(name, value) {
      return this.select(function(item) {
        return item[name] === value;
      });
    };
    Model.each = function(callback) {
      var key, value, _ref, _results;
      _ref = this.records;
      _results = [];
      for (key in _ref) {
        value = _ref[key];
        _results.push(callback(value.clone()));
      }
      return _results;
    };
    Model.all = function() {
      return this.cloneArray(this.recordsValues());
    };
    Model.first = function() {
      var record;
      record = this.recordsValues()[0];
      return record != null ? record.clone() : void 0;
    };
    Model.last = function() {
      var record, values;
      values = this.recordsValues();
      record = values[values.length - 1];
      return record != null ? record.clone() : void 0;
    };
    Model.count = function() {
      return this.recordsValues().length;
    };
    Model.deleteAll = function() {
      var key, value, _ref, _results;
      _ref = this.records;
      _results = [];
      for (key in _ref) {
        value = _ref[key];
        _results.push(delete this.records[key]);
      }
      return _results;
    };
    Model.destroyAll = function() {
      var key, value, _ref, _results;
      _ref = this.records;
      _results = [];
      for (key in _ref) {
        value = _ref[key];
        _results.push(this.records[key].destroy());
      }
      return _results;
    };
    Model.update = function(id, atts) {
      return this.find(id).updateAttributes(atts);
    };
    Model.create = function(atts) {
      var record;
      record = new this(atts);
      return record.save();
    };
    Model.destroy = function(id) {
      return this.find(id).destroy();
    };
    Model.change = function(callbackOrParams) {
      if (typeof callbackOrParams === 'function') {
        return this.bind('change', callbackOrParams);
      } else {
        return this.trigger('change', callbackOrParams);
      }
    };
    Model.fetch = function(callbackOrParams) {
      if (typeof callbackOrParams === 'function') {
        return this.bind('fetch', callbackOrParams);
      } else {
        return this.trigger('fetch', callbackOrParams);
      }
    };
    Model.toJSON = function() {
      return this.recordsValues();
    };
    Model.fromJSON = function(objects) {
      var value, _i, _len, _results;
      if (!objects) {
        return;
      }
      if (typeof objects === 'string') {
        objects = JSON.parse(objects);
      }
      if (isArray(objects)) {
        _results = [];
        for (_i = 0, _len = objects.length; _i < _len; _i++) {
          value = objects[_i];
          _results.push(new this(value));
        }
        return _results;
      } else {
        return new this(objects);
      }
    };
    Model.recordsValues = function() {
      var key, result, value, _ref;
      result = [];
      _ref = this.records;
      for (key in _ref) {
        value = _ref[key];
        result.push(value);
      }
      return result;
    };
    Model.cloneArray = function(array) {
      var value, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        value = array[_i];
        _results.push(value.clone());
      }
      return _results;
    };
    Model.prototype.newRecord = true;
    function Model(atts) {
      Model.__super__.constructor.apply(this, arguments);
      this.ids = [];
      if (atts) {
        this.load(atts);
      }
    }
    Model.prototype.isNew = function() {
      return this.newRecord;
    };
    Model.prototype.isValid = function() {
      return !this.validate();
    };
    Model.prototype.validate = function() {};
    Model.prototype.load = function(atts) {
      var key, value, _results;
      _results = [];
      for (key in atts) {
        value = atts[key];
        _results.push(this[key] = value);
      }
      return _results;
    };
    Model.prototype.attributes = function() {
      var key, result, _i, _len, _ref;
      result = {};
      _ref = this.constructor.attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        result[key] = this[key];
      }
      result.id = this.id;
      return result;
    };
    Model.prototype.eql = function(rec) {
      var _ref, _ref2;
      return rec && rec.constructor === this.constructor && (rec.id === this.id || (_ref = this.id, __indexOf.call(rec.ids, _ref) >= 0) || (_ref2 = rec.id, __indexOf.call(this.ids, _ref2) >= 0));
    };
    Model.prototype.save = function() {
      var error;
      error = this.validate();
      if (error) {
        this.trigger('error', this, error);
        return false;
      }
      this.trigger('beforeSave', this);
      if (this.newRecord) {
        this.create();
      } else {
        this.update();
      }
      this.trigger('save', this);
      return this;
    };
    Model.prototype.updateAttribute = function(name, value) {
      this[name] = value;
      return this.save();
    };
    Model.prototype.updateAttributes = function(atts) {
      this.load(atts);
      return this.save();
    };
    Model.prototype.changeID = function(id) {
      var records;
      this.ids.push(this.id);
      records = this.constructor.records;
      records[id] = records[this.id];
      delete records[this.id];
      this.id = id;
      return this.save();
    };
    Model.prototype.destroy = function() {
      this.trigger('beforeDestroy', this);
      delete this.constructor.records[this.id];
      this.destroyed = true;
      this.trigger('destroy', this);
      this.trigger('change', this, 'destroy');
      this.unbind();
      return this;
    };
    Model.prototype.dup = function(newRecord) {
      var result;
      result = new this.constructor(this.attributes());
      if (newRecord === false) {
        result.newRecord = this.newRecord;
      } else {
        delete result.id;
      }
      return result;
    };
    Model.prototype.clone = function() {
      return Object.create(this);
    };
    Model.prototype.reload = function() {
      var original;
      if (this.newRecord) {
        return this;
      }
      original = this.constructor.find(this.id);
      this.load(original.attributes());
      return original;
    };
    Model.prototype.toJSON = function() {
      return this.attributes();
    };
    Model.prototype.toString = function() {
      return "<" + this.constructor.className + " (" + (JSON.stringify(this)) + ")>";
    };
    Model.prototype.exists = function() {
      return this.id && this.id in this.constructor.records;
    };
    Model.prototype.update = function() {
      var clone, records;
      this.trigger('beforeUpdate', this);
      records = this.constructor.records;
      records[this.id].load(this.attributes());
      clone = records[this.id].clone();
      this.trigger('update', clone);
      return this.trigger('change', clone, 'update');
    };
    Model.prototype.create = function() {
      var clone, records;
      this.trigger('beforeCreate', this);
      if (!this.id) {
        this.id = guid();
      }
      this.newRecord = false;
      records = this.constructor.records;
      records[this.id] = this.dup(false);
      clone = records[this.id].clone();
      this.trigger('create', clone);
      return this.trigger('change', clone, 'create');
    };
    Model.prototype.bind = function(events, callback) {
      var binder, unbinder;
      this.constructor.bind(events, binder = __bind(function(record) {
        if (record && this.eql(record)) {
          return callback.apply(this, arguments);
        }
      }, this));
      this.constructor.bind('unbind', unbinder = __bind(function(record) {
        if (record && this.eql(record)) {
          this.constructor.unbind(events, binder);
          return this.constructor.unbind('unbind', unbinder);
        }
      }, this));
      return binder;
    };
    Model.prototype.trigger = function() {
      var _ref;
      return (_ref = this.constructor).trigger.apply(_ref, arguments);
    };
    Model.prototype.unbind = function() {
      return this.trigger('unbind', this);
    };
    return Model;
  })();
  Controller = (function() {
    __extends(Controller, Module);
    Controller.include(Events);
    Controller.include(Log);
    Controller.prototype.eventSplitter = /^(\w+)\s*(.*)$/;
    Controller.prototype.tag = 'div';
    function Controller(options) {
      var key, value, _ref;
      this.options = options;
      _ref = this.options;
      for (key in _ref) {
        value = _ref[key];
        this[key] = value;
      }
      if (!this.el) {
        this.el = document.createElement(this.tag);
      }
      this.el = $(this.el);
      if (this.className) {
        this.el.addClass(this.className);
      }
      this.destroy(function() {
        return this.el.remove();
      });
      if (!this.events) {
        this.events = this.constructor.events;
      }
      if (!this.elements) {
        this.elements = this.constructor.elements;
      }
      if (this.events) {
        this.delegateEvents();
      }
      if (this.elements) {
        this.refreshElements();
      }
      Controller.__super__.constructor.apply(this, arguments);
    }
    Controller.prototype.destroy = function(callback) {
      if (typeof callback === 'function') {
        return this.bind('destroy', callback);
      } else {
        return this.trigger('destroy');
      }
    };
    Controller.prototype.$ = function(selector) {
      return $(selector, this.el);
    };
    Controller.prototype.delegateEvents = function() {
      var eventName, key, match, method, selector, _ref, _results;
      _ref = this.events;
      _results = [];
      for (key in _ref) {
        method = _ref[key];
        if (typeof method !== 'function') {
          method = this.proxy(this[method]);
        }
        match = key.match(this.eventSplitter);
        eventName = match[1];
        selector = match[2];
        _results.push(selector === '' ? this.el.bind(eventName, method) : this.el.delegate(selector, eventName, method));
      }
      return _results;
    };
    Controller.prototype.refreshElements = function() {
      var key, value, _ref, _results;
      _ref = this.elements;
      _results = [];
      for (key in _ref) {
        value = _ref[key];
        _results.push(this[value] = this.$(key));
      }
      return _results;
    };
    Controller.prototype.delay = function(func, timeout) {
      return setTimeout(this.proxy(func), timeout || 0);
    };
    Controller.prototype.html = function(element) {
      this.el.html(element.el || element);
      this.refreshElements();
      return this.el;
    };
    Controller.prototype.append = function() {
      var e, elements, _ref;
      elements = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      elements = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          e = elements[_i];
          _results.push(e.el || e);
        }
        return _results;
      })();
      return (_ref = this.el).append.apply(_ref, elements);
    };
    Controller.prototype.appendTo = function(element) {
      return this.el.appendTo(element.el || element);
    };
    Controller.prototype.prepend = function() {
      var e, elements, _ref;
      elements = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      elements = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          e = elements[_i];
          _results.push(e.el || e);
        }
        return _results;
      })();
      return (_ref = this.el).prepend.apply(_ref, elements);
    };
    Controller.prototype.replace = function(element) {
      var previous, _ref;
      _ref = [this.el, element.el || element], previous = _ref[0], this.el = _ref[1];
      previous.replaceWith(this.el);
      this.delegateEvents();
      this.refreshElements();
      return this.el;
    };
    return Controller;
  })();
  $ = this.jQuery || this.Zepto || function(element) {
    return element;
  };
  if (typeof Object.create !== 'function') {
    Object.create = function(o) {
      var Func;
      Func = function() {};
      Func.prototype = o;
      return new Func();
    };
  }
  isArray = function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  };
  makeArray = function(args) {
    return Array.prototype.slice.call(args, 0);
  };
  guid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r, v;
      r = Math.random() * 16 | 0;
      v = c === 'x' ? r : r & 3 | 8;
      return v.toString(16);
    }).toUpperCase();
  };
  Spine = this.Spine = {};
  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine;
  }
  Spine.version = '2.0.1';
  Spine.isArray = isArray;
  Spine.$ = $;
  Spine.Events = Events;
  Spine.Log = Log;
  Spine.Module = Module;
  Spine.Controller = Controller;
  Spine.Model = Model;
  Module.extend.call(Spine, Events);
  Module.create = Module.sub = Controller.create = Controller.sub = Model.sub = function(instances, statics) {
    var result;
    result = (function() {
      __extends(result, this);
      function result() {
        result.__super__.constructor.apply(this, arguments);
      }
      return result;
    }).call(this);
    if (instances) {
      result.include(instances);
    }
    if (statics) {
      result.extend(statics);
    }
    if (typeof result.unbind === "function") {
      result.unbind();
    }
    return result;
  };
  Model.setup = function(name, attributes) {
    var Instance;
    if (attributes == null) {
      attributes = [];
    }
    Instance = (function() {
      __extends(Instance, this);
      function Instance() {
        Instance.__super__.constructor.apply(this, arguments);
      }
      return Instance;
    }).call(this);
    Instance.configure.apply(Instance, [name].concat(__slice.call(attributes)));
    return Instance;
  };
  Module.init = Controller.init = Model.init = function(a1, a2, a3, a4, a5) {
    return new this(a1, a2, a3, a4, a5);
  };
  Spine.Class = Module;
}).call(this);

(function(Spine, $){
  
  Spine.List = Spine.Controller.create({
    events: {
      "click .item": "click"
    },
    
    proxied: ["change"],
    
    init: function(){
      this.bind("change", this.change);
    },
    
    template: function(){ return arguments[0] },
        
    change: function(item){
      if ( !item ) return;
      this.current = item;

      this.children().removeClass("current");
      this.children().forItem(this.current).addClass("current");
    },
        
    render: function(items){
      if (items) this.items = items;
      this.el.html(this.template(this.items));
      this.change(this.current);
      if ( !this.children(".current").length || !this.current )
        this.children(":first").click();
    },
    
    children: function(sel){
      return this.el.children(sel);
    },
    
    click: function(e){
      var item = $(e.target).item();
      this.trigger("change", item);
    }
  });
  
})(Spine, Spine.$);
(function() {
  if (typeof Spine === "undefined" || Spine === null) {
    Spine = require("spine");
  }
  Spine.Model.Local = {
    extended: function() {
      this.change(this.saveLocal);
      return this.fetch(this.loadLocal);
    },
    saveLocal: function() {
      var result;
      //result = JSON.stringify(this);
      //return localStorage[this.className] = result;
      return amplify.store(this.className, this);
    },
    loadLocal: function() {
      var result;
      result = amplify.store(this.className);
      return this.refresh(result || [], {
        clear: true
      });
    }
  };
  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Model.Local;
  }
}).call(this);

(function() {
  if (typeof Spine === "undefined" || Spine === null) {
    Spine = require("spine");
  }
  Spine.Model.Local = {
    extended: function() {
      this.change(this.saveLocal);
      return this.fetch(this.loadLocal);
    },
    saveLocal: function() {
      var result;
      //result = JSON.stringify(this);
      //return localStorage[this.className] = result;
      return amplify.store(this.className, this);
    },
    loadLocal: function() {
      var result;
      result = amplify.store(this.className);
      return this.refresh(result || [], {
        clear: true
      });
    }
  };
  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Model.Local;
  }
}).call(this);

(function() {
  var $;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __slice = Array.prototype.slice, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  if (typeof Spine === "undefined" || Spine === null) {
    Spine = require('spine');
  }
  $ = Spine.$;
  Spine.Manager = (function() {
    __extends(Manager, Spine.Module);
    Manager.include(Spine.Events);
    function Manager() {
      this.controllers = [];
      this.add.apply(this, arguments);
      this.bind('change', this.change);
    }
    Manager.prototype.add = function() {
      var cont, controllers, _i, _len, _results;
      controllers = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      _results = [];
      for (_i = 0, _len = controllers.length; _i < _len; _i++) {
        cont = controllers[_i];
        _results.push(this.addOne(cont));
      }
      return _results;
    };
    Manager.prototype.addOne = function(controller) {
      controller.bind('active', __bind(function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return this.trigger('change', controller, args);
      }, this));
      controller.bind('destroy', __bind(function() {
        return this.controllers.splice(this.controllers.indexOf(controller), 1);
      }, this));
      return this.controllers.push(controller);
    };
    Manager.prototype.deactivate = function() {
      return this.trigger('change', false, arguments);
    };
    Manager.prototype.change = function(current, args) {
      var cont, _i, _len, _ref, _results;
      _ref = this.controllers;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cont = _ref[_i];
        _results.push(cont === current ? cont.activate.apply(cont, args) : cont.deactivate.apply(cont, args));
      }
      return _results;
    };
    return Manager;
  })();
  Spine.Controller.include({
    active: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (typeof args[0] === 'function') {
        this.bind('active', args[0]);
      } else {
        args.unshift('active');
        this.trigger.apply(this, args);
      }
      return this;
    },
    isActive: function() {
      return this.el.hasClass('active');
    },
    activate: function() {
      this.el.addClass('active');
      return this;
    },
    deactivate: function() {
      this.el.removeClass('active');
      return this;
    }
  });
  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Manager;
  }
}).call(this);

(function($){

var getUrl = function(object){
  if (!(object && object.url)) return null;
  return $.isFunction(object.url) ? object.url() : object.url;
};

var methodMap = {
  "create":  "POST",
  "update":  "PUT",
  "destroy": "DELETE",
  "read":    "GET"
};

var urlError = function() {
  throw new Error("A 'url' property or function must be specified");
};

var ajaxSync = function(method, record){  
  
  var params = {
    type:          methodMap[method],
    contentType:  "application/json",
    dataType:     "json",
    processData:  false
  };
        
  if (Spine.Model._noSync) return;
    
  params.url = getUrl(record);
  if (!params.url) throw("Invalid URL");
  
  if (method == "create" || method == "update")
    params.data = JSON.stringify(record);
    
  if (method == "read")
    params.success = function(data){
      (record.populate || record.load)(data);
    };

  params.error = function(e){
    record.trigger("error", e);
  };
  
  $.ajax(params);
};

Spine.Model.Ajax = {
  extended: function(){    
    this.sync(ajaxSync);
    this.fetch(this.proxy(function(){
      ajaxSync("read", this);
    }));
  }
};

Spine.Model.extend({
  url: function() {
    return "/" + this.name.toLowerCase() + "s"
  },
  
  noSync: function(callback){
    Spine.Model._noSync = true;
    callback.apply(callback, arguments);
    Spine.Model._noSync = false;
  }
});

Spine.Model.include({
  url: function(){
    var base = getUrl(this.parent);
    base += (base.charAt(base.length - 1) == "/" ? "" : "/");
    base += encodeURIComponent(this.id);
    return base;        
  }  
});

})(jQuery);
(function(){

  var extend = {
    filter: function(query){
      if ( !query )
        return this.all();
      else
        return(this.select(function(item){
          return item.select(query);
        }));
    }
  };

  var include = {
    select: function(query){
      query = query.toLowerCase();
      var atts = (this.selectAttributes || this.attributes).apply(this);
      for(var key in atts) {
        var value = atts[key].toLowerCase();
        if (value && value.indexOf(query) != -1)
          return true;
      }
      return false;
    }
  };

  Spine.Model.Filter = {
    extended: function(){
      this.extend(extend);
      this.include(include);
    }
  };

})();
Spine.Model.Local = {
  extended: function(){
    this.sync(this.proxy(this.saveLocal));
    this.fetch(this.proxy(this.loadLocal));
  },
    
  saveLocal: function(){
    //var result = JSON.stringify(this);
    //localStorage[this.name] = result;
	  amplify.store(this.name, this);
  },

  loadLocal: function(){
    //var result = localStorage[this.name];
    var result = amplify.store(this.name);
	if ( !result ) return;
    //var result = JSON.parse(result);
    this.refresh(result);
  }
};
(function() {
  var Collection, Instance, singularize, underscore;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  if (typeof Spine === "undefined" || Spine === null) {
    Spine = require("spine");
  }
  Collection = (function() {
    function Collection(options) {
      var key, value;
      if (options == null) {
        options = {};
      }
      for (key in options) {
        value = options[key];
        this[key] = value;
      }
    }
    Collection.prototype.all = function() {
      return this.model.select(__bind(function(rec) {
        return this.associated(rec);
      }, this));
    };
    Collection.prototype.first = function() {
      return this.all()[0];
    };
    Collection.prototype.last = function() {
      var values;
      values = this.all();
      return values[values.length - 1];
    };
    Collection.prototype.find = function(id) {
      var records;
      records = this.model.select(__bind(function(rec) {
        return this.associated(rec) && rec.id === id;
      }, this));
      if (!records[0]) {
        throw "Unknown record";
      }
      return records[0];
    };
    Collection.prototype.select = function(cb) {
      return this.model.select(__bind(function(rec) {
        return this.associated(rec) && cb(rec);
      }, this));
    };
    Collection.prototype.refresh = function(values) {
      var record, records, value, _i, _j, _len, _len2;
      records = this.all();
      for (_i = 0, _len = records.length; _i < _len; _i++) {
        record = records[_i];
        delete this.model.records[record.id];
      }
      values = this.model.fromJSON(values);
      for (_j = 0, _len2 = values.length; _j < _len2; _j++) {
        value = values[_j];
        value.newRecord = false;
        value[this.fkey] = this.record.id;
        this.model.records[value.id] = value;
      }
      return this.model.trigger("refresh");
    };
    Collection.prototype.create = function(record) {
      record[this.fkey] = this.record.id;
      return this.model.create(record);
    };
    Collection.prototype.associated = function(record) {
      return record[this.fkey] === this.record.id;
    };
    return Collection;
  })();
  Instance = (function() {
    function Instance(options) {
      var key, value;
      if (options == null) {
        options = {};
      }
      for (key in options) {
        value = options[key];
        this[key] = value;
      }
    }
    Instance.prototype.find = function() {
      return this.record[this.fkey] && this.model.find(this.record[this.fkey]);
    };
    Instance.prototype.update = function(value) {
      return this.record[this.fkey] = value && value.id;
    };
    return Instance;
  })();
  singularize = function(str) {
    return str.replace(/s$/, '');
  };
  underscore = function(str) {
    return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/-/g, '_').toLowerCase();
  };
  Spine.Model.extend({
    many: function(name, model, fkey) {
      var association;
      if (fkey == null) {
        fkey = "" + (underscore(this.className)) + "_id";
      }
      association = function(record) {
        if (typeof model === "string") {
          model = require(model);
        }
        return new Collection({
          name: name,
          model: model,
          record: record,
          fkey: fkey
        });
      };
      this.prototype.__defineGetter__(name, function() {
        return association(this);
      });
      return this.prototype.__defineSetter__(name, function(value) {
        return association(this).refresh(value);
      });
    },
    belongs: function(name, model, fkey) {
      var association;
      if (fkey == null) {
        fkey = "" + (singularize(name)) + "_id";
      }
      association = function(record) {
        if (typeof model === "string") {
          model = require(model);
        }
        return new Instance({
          name: name,
          model: model,
          record: record,
          fkey: fkey
        });
      };
      this.prototype.__defineGetter__(name, function() {
        return association(this).find();
      });
      this.prototype.__defineSetter__(name, function(value) {
        return association(this).update(value);
      });
      return this.attributes.push(fkey);
    }
  });
}).call(this);
