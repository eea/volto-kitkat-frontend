/*! For license information please see 0.4d8da8df.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/prismjs/components/prism-core.js":function(module,exports,__webpack_require__){(function(global){var Prism=function(_self){var lang=/\blang(?:uage)?-([\w-]+)\b/i,uniqueId=0,plainTextGrammar={},_={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function encode(tokens){return tokens instanceof Token?new Token(tokens.type,encode(tokens.content),tokens.alias):Array.isArray(tokens)?tokens.map(encode):tokens.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(obj){return obj.__id||Object.defineProperty(obj,"__id",{value:++uniqueId}),obj.__id},clone:function deepClone(o,visited){var clone,id;switch(visited=visited||{},_.util.type(o)){case"Object":if(id=_.util.objId(o),visited[id])return visited[id];for(var key in clone={},visited[id]=clone,o)o.hasOwnProperty(key)&&(clone[key]=deepClone(o[key],visited));return clone;case"Array":return id=_.util.objId(o),visited[id]?visited[id]:(clone=[],visited[id]=clone,o.forEach((function(v,i){clone[i]=deepClone(v,visited)})),clone);default:return o}},getLanguage:function(element){for(;element&&!lang.test(element.className);)element=element.parentElement;return element?(element.className.match(lang)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(err){var src=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack)||[])[1];if(src){var scripts=document.getElementsByTagName("script");for(var i in scripts)if(scripts[i].src==src)return scripts[i]}return null}},isActive:function(element,className,defaultActivation){for(var no="no-"+className;element;){var classList=element.classList;if(classList.contains(className))return!0;if(classList.contains(no))return!1;element=element.parentElement}return!!defaultActivation}},languages:{plain:plainTextGrammar,plaintext:plainTextGrammar,text:plainTextGrammar,txt:plainTextGrammar,extend:function(id,redef){var lang=_.util.clone(_.languages[id]);for(var key in redef)lang[key]=redef[key];return lang},insertBefore:function(inside,before,insert,root){var grammar=(root=root||_.languages)[inside],ret={};for(var token in grammar)if(grammar.hasOwnProperty(token)){if(token==before)for(var newToken in insert)insert.hasOwnProperty(newToken)&&(ret[newToken]=insert[newToken]);insert.hasOwnProperty(token)||(ret[token]=grammar[token])}var old=root[inside];return root[inside]=ret,_.languages.DFS(_.languages,(function(key,value){value===old&&key!=inside&&(this[key]=ret)})),ret},DFS:function DFS(o,callback,type,visited){visited=visited||{};var objId=_.util.objId;for(var i in o)if(o.hasOwnProperty(i)){callback.call(o,i,o[i],type||i);var property=o[i],propertyType=_.util.type(property);"Object"!==propertyType||visited[objId(property)]?"Array"!==propertyType||visited[objId(property)]||(visited[objId(property)]=!0,DFS(property,callback,i,visited)):(visited[objId(property)]=!0,DFS(property,callback,null,visited))}}},plugins:{},highlightAll:function(async,callback){_.highlightAllUnder(document,async,callback)},highlightAllUnder:function(container,async,callback){var env={callback:callback,container:container,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};_.hooks.run("before-highlightall",env),env.elements=Array.prototype.slice.apply(env.container.querySelectorAll(env.selector)),_.hooks.run("before-all-elements-highlight",env);for(var element,i=0;element=env.elements[i++];)_.highlightElement(element,!0===async,env.callback)},highlightElement:function(element,async,callback){var language=_.util.getLanguage(element),grammar=_.languages[language];element.className=element.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language;var parent=element.parentElement;parent&&"pre"===parent.nodeName.toLowerCase()&&(parent.className=parent.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language);var env={element:element,language:language,grammar:grammar,code:element.textContent};function insertHighlightedCode(highlightedCode){env.highlightedCode=highlightedCode,_.hooks.run("before-insert",env),env.element.innerHTML=env.highlightedCode,_.hooks.run("after-highlight",env),_.hooks.run("complete",env),callback&&callback.call(env.element)}if(_.hooks.run("before-sanity-check",env),(parent=env.element.parentElement)&&"pre"===parent.nodeName.toLowerCase()&&!parent.hasAttribute("tabindex")&&parent.setAttribute("tabindex","0"),!env.code)return _.hooks.run("complete",env),void(callback&&callback.call(env.element));if(_.hooks.run("before-highlight",env),env.grammar)if(async&&_self.Worker){var worker=new Worker(_.filename);worker.onmessage=function(evt){insertHighlightedCode(evt.data)},worker.postMessage(JSON.stringify({language:env.language,code:env.code,immediateClose:!0}))}else insertHighlightedCode(_.highlight(env.code,env.grammar,env.language));else insertHighlightedCode(_.util.encode(env.code))},highlight:function(text,grammar,language){var env={code:text,grammar:grammar,language:language};return _.hooks.run("before-tokenize",env),env.tokens=_.tokenize(env.code,env.grammar),_.hooks.run("after-tokenize",env),Token.stringify(_.util.encode(env.tokens),env.language)},tokenize:function(text,grammar){var rest=grammar.rest;if(rest){for(var token in rest)grammar[token]=rest[token];delete grammar.rest}var tokenList=new LinkedList;return addAfter(tokenList,tokenList.head,text),matchGrammar(text,tokenList,grammar,tokenList.head,0),function toArray(list){var array=[],node=list.head.next;for(;node!==list.tail;)array.push(node.value),node=node.next;return array}(tokenList)},hooks:{all:{},add:function(name,callback){var hooks=_.hooks.all;hooks[name]=hooks[name]||[],hooks[name].push(callback)},run:function(name,env){var callbacks=_.hooks.all[name];if(callbacks&&callbacks.length)for(var callback,i=0;callback=callbacks[i++];)callback(env)}},Token:Token};function Token(type,content,alias,matchedStr){this.type=type,this.content=content,this.alias=alias,this.length=0|(matchedStr||"").length}function matchPattern(pattern,pos,text,lookbehind){pattern.lastIndex=pos;var match=pattern.exec(text);if(match&&lookbehind&&match[1]){var lookbehindLength=match[1].length;match.index+=lookbehindLength,match[0]=match[0].slice(lookbehindLength)}return match}function matchGrammar(text,tokenList,grammar,startNode,startPos,rematch){for(var token in grammar)if(grammar.hasOwnProperty(token)&&grammar[token]){var patterns=grammar[token];patterns=Array.isArray(patterns)?patterns:[patterns];for(var j=0;j<patterns.length;++j){if(rematch&&rematch.cause==token+","+j)return;var patternObj=patterns[j],inside=patternObj.inside,lookbehind=!!patternObj.lookbehind,greedy=!!patternObj.greedy,alias=patternObj.alias;if(greedy&&!patternObj.pattern.global){var flags=patternObj.pattern.toString().match(/[imsuy]*$/)[0];patternObj.pattern=RegExp(patternObj.pattern.source,flags+"g")}for(var pattern=patternObj.pattern||patternObj,currentNode=startNode.next,pos=startPos;currentNode!==tokenList.tail&&!(rematch&&pos>=rematch.reach);pos+=currentNode.value.length,currentNode=currentNode.next){var str=currentNode.value;if(tokenList.length>text.length)return;if(!(str instanceof Token)){var match,removeCount=1;if(greedy){if(!(match=matchPattern(pattern,pos,text,lookbehind)))break;var from=match.index,to=match.index+match[0].length,p=pos;for(p+=currentNode.value.length;from>=p;)p+=(currentNode=currentNode.next).value.length;if(pos=p-=currentNode.value.length,currentNode.value instanceof Token)continue;for(var k=currentNode;k!==tokenList.tail&&(p<to||"string"==typeof k.value);k=k.next)removeCount++,p+=k.value.length;removeCount--,str=text.slice(pos,p),match.index-=pos}else if(!(match=matchPattern(pattern,0,str,lookbehind)))continue;from=match.index;var matchStr=match[0],before=str.slice(0,from),after=str.slice(from+matchStr.length),reach=pos+str.length;rematch&&reach>rematch.reach&&(rematch.reach=reach);var removeFrom=currentNode.prev;if(before&&(removeFrom=addAfter(tokenList,removeFrom,before),pos+=before.length),removeRange(tokenList,removeFrom,removeCount),currentNode=addAfter(tokenList,removeFrom,new Token(token,inside?_.tokenize(matchStr,inside):matchStr,alias,matchStr)),after&&addAfter(tokenList,currentNode,after),removeCount>1){var nestedRematch={cause:token+","+j,reach:reach};matchGrammar(text,tokenList,grammar,currentNode.prev,pos,nestedRematch),rematch&&nestedRematch.reach>rematch.reach&&(rematch.reach=nestedRematch.reach)}}}}}}function LinkedList(){var head={value:null,prev:null,next:null},tail={value:null,prev:head,next:null};head.next=tail,this.head=head,this.tail=tail,this.length=0}function addAfter(list,node,value){var next=node.next,newNode={value:value,prev:node,next:next};return node.next=newNode,next.prev=newNode,list.length++,newNode}function removeRange(list,node,count){for(var next=node.next,i=0;i<count&&next!==list.tail;i++)next=next.next;node.next=next,next.prev=node,list.length-=i}if(_self.Prism=_,Token.stringify=function stringify(o,language){if("string"==typeof o)return o;if(Array.isArray(o)){var s="";return o.forEach((function(e){s+=stringify(e,language)})),s}var env={type:o.type,content:stringify(o.content,language),tag:"span",classes:["token",o.type],attributes:{},language:language},aliases=o.alias;aliases&&(Array.isArray(aliases)?Array.prototype.push.apply(env.classes,aliases):env.classes.push(aliases)),_.hooks.run("wrap",env);var attributes="";for(var name in env.attributes)attributes+=" "+name+'="'+(env.attributes[name]||"").replace(/"/g,"&quot;")+'"';return"<"+env.tag+' class="'+env.classes.join(" ")+'"'+attributes+">"+env.content+"</"+env.tag+">"},!_self.document)return _self.addEventListener?(_.disableWorkerMessageHandler||_self.addEventListener("message",(function(evt){var message=JSON.parse(evt.data),lang=message.language,code=message.code,immediateClose=message.immediateClose;_self.postMessage(_.highlight(code,_.languages[lang],lang)),immediateClose&&_self.close()}),!1),_):_;var script=_.util.currentScript();function highlightAutomaticallyCallback(){_.manual||_.highlightAll()}if(script&&(_.filename=script.src,script.hasAttribute("data-manual")&&(_.manual=!0)),!_.manual){var readyState=document.readyState;"loading"===readyState||"interactive"===readyState&&script&&script.defer?document.addEventListener("DOMContentLoaded",highlightAutomaticallyCallback):window.requestAnimationFrame?window.requestAnimationFrame(highlightAutomaticallyCallback):window.setTimeout(highlightAutomaticallyCallback,16)}return _}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});module.exports&&(module.exports=Prism),void 0!==global&&(global.Prism=Prism)}).call(this,__webpack_require__("./node_modules/webpack/buildin/global.js"))}}]);
//# sourceMappingURL=0.4d8da8df.iframe.bundle.js.map