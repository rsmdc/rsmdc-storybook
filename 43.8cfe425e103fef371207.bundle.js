(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1009:function(module,exports){var StyleNode=function StyleNode(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};function parse(text){return function parseCss(node,text){var t=text.substring(node.start,node.end-1);if(node.parsedCssText=node.cssText=t.trim(),node.parent){var ss=node.previous?node.previous.end:node.parent.start;t=(t=(t=function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var code=arguments[1],repeat=6-code.length;repeat--;)code="0"+code;return"\\"+code}))}(t=text.substring(ss,node.start-1))).replace(RX.multipleSpaces," ")).substring(t.lastIndexOf(";")+1);var s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START),node.atRule?0===s.indexOf(MEDIA_START)?node.type=types.MEDIA_RULE:s.match(RX.keyframesRule)&&(node.type=types.KEYFRAMES_RULE,node.keyframesName=node.selector.split(RX.multipleSpaces).pop()):0===s.indexOf(VAR_START)?node.type=types.MIXIN_RULE:node.type=types.STYLE_RULE}var r$=node.rules;if(r$)for(var i=0,l=r$.length,r=void 0;i<l&&(r=r$[i]);i++)parseCss(r,text);return node}(function lex(text){var root=new StyleNode;root.start=0,root.end=text.length;for(var n=root,i=0,l=text.length;i<l;i++)if(text[i]===OPEN_BRACE){n.rules||(n.rules=[]);var p=n,previous=p.rules[p.rules.length-1]||null;(n=new StyleNode).start=i+1,n.parent=p,n.previous=previous,p.rules.push(n)}else text[i]===CLOSE_BRACE&&(n.end=i+1,n=n.parent||root);return root}(text=function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}(text)),text)}var types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@";function findRegex(regex,cssText,offset){regex.lastIndex=0;var r=cssText.substring(offset).match(regex);if(r){var start=offset+r.index;return{start:start,end:start+r[0].length}}return null}var VAR_USAGE_START=/\bvar\(/,VAR_ASSIGN_START=/\B--[\w-]+\s*:/,COMMENTS=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,TRAILING_LINES=/^[\t ]+\n/gm;function compileVar(cssText,template,offset){var varMeta=function parseVar(cssText,offset){var varPos=findRegex(VAR_USAGE_START,cssText,offset);if(!varPos)return null;var endVar=function findVarEndIndex(cssText,offset){for(var count=0,i=offset;i<cssText.length;i++){var c=cssText[i];if("("===c)count++;else if(")"===c&&--count<=0)return i+1}return i}(cssText,varPos.start),_a=cssText.substring(varPos.end,endVar-1).split(","),propName=_a[0],fallback=_a.slice(1);return{start:varPos.start,end:endVar,propName:propName.trim(),fallback:fallback.length>0?fallback.join(",").trim():void 0}}(cssText,offset);if(!varMeta)return template.push(cssText.substring(offset,cssText.length)),cssText.length;var propName=varMeta.propName,fallback=null!=varMeta.fallback?compileTemplate(varMeta.fallback):void 0;return template.push(cssText.substring(offset,varMeta.start),(function(params){return function resolveVar(props,prop,fallback){return props[prop]?props[prop]:fallback?executeTemplate(fallback,props):""}(params,propName,fallback)})),varMeta.end}function executeTemplate(template,props){for(var final="",i=0;i<template.length;i++){var s=template[i];final+="string"==typeof s?s:s(props)}return final}function findEndValue(cssText,offset){for(var onStr=!1,double=!1,i=offset;i<cssText.length;i++){var c=cssText[i];if(onStr)double&&'"'===c&&(onStr=!1),double||"'"!==c||(onStr=!1);else if('"'===c)onStr=!0,double=!0;else if("'"===c)onStr=!0,double=!1;else{if(";"===c)return i+1;if("}"===c)return i}}return i}function compileTemplate(cssText){var index=0;cssText=function removeCustomAssigns(cssText){for(var final="",offset=0;;){var assignPos=findRegex(VAR_ASSIGN_START,cssText,offset),start=assignPos?assignPos.start:cssText.length;if(final+=cssText.substring(offset,start),!assignPos)break;offset=findEndValue(cssText,start)}return final}(cssText=cssText.replace(COMMENTS,"")).replace(TRAILING_LINES,"");for(var segments=[];index<cssText.length;)index=compileVar(cssText,segments,index);return segments}function resolveValues(selectors){var props={};selectors.forEach((function(selector){selector.declarations.forEach((function(dec){props[dec.prop]=dec.value}))}));for(var propsValues={},entries=Object.entries(props),_loop_1=function(i){var dirty=!1;if(entries.forEach((function(_a){var key=_a[0],propValue=executeTemplate(_a[1],propsValues);propValue!==propsValues[key]&&(propsValues[key]=propValue,dirty=!0)})),!dirty)return"break"},i=0;i<10;i++){if("break"===_loop_1())break}return propsValues}function getSelectors(root,index){if(void 0===index&&(index=0),!root.rules)return[];var selectors=[];return root.rules.filter((function(rule){return rule.type===types.STYLE_RULE})).forEach((function(rule){var declarations=function getDeclarations(cssText){var xArray,declarations=[];for(;xArray=FIND_DECLARATIONS.exec(cssText.trim());){var _a=normalizeValue(xArray[2]),value=_a.value,important=_a.important;declarations.push({prop:xArray[1].trim(),value:compileTemplate(value),important:important})}return declarations}(rule.cssText);declarations.length>0&&rule.parsedSelector.split(",").forEach((function(selector){selector=selector.trim(),selectors.push({selector:selector,declarations:declarations,specificity:1,nu:index})})),index++})),selectors}var FIND_DECLARATIONS=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function normalizeValue(value){var important=(value=value.replace(/\s+/gim," ").trim()).endsWith("!important");return important&&(value=value.substr(0,value.length-"!important".length).trim()),{value:value,important:important}}function getSelectorsForScopes(scopes){var selectors=[];return scopes.forEach((function(scope){selectors.push.apply(selectors,scope.selectors)})),selectors}function parseCSS(original){var ast=parse(original),template=compileTemplate(original);return{original:original,template:template,selectors:getSelectors(ast),usesCssVars:template.length>1}}function addGlobalStyle(globalScopes,styleEl){var css=parseCSS(styleEl.innerHTML);css.styleEl=styleEl,globalScopes.push(css)}function replaceScope(original,oldScopeId,newScopeId){return original=function replaceAll(input,find,replace){return input.replace(new RegExp(find,"g"),replace)}(original,"\\."+oldScopeId,"."+newScopeId)}function loadDocument(doc,globalScopes){return function loadDocumentStyles(doc,globalScopes){for(var styleElms=doc.querySelectorAll("style:not([data-styles])"),i=0;i<styleElms.length;i++)addGlobalStyle(globalScopes,styleElms[i])}(doc,globalScopes),function loadDocumentLinks(doc,globalScopes){for(var promises=[],linkElms=doc.querySelectorAll('link[rel="stylesheet"][href]'),i=0;i<linkElms.length;i++)promises.push(addGlobalLink(doc,globalScopes,linkElms[i]));return Promise.all(promises)}(doc,globalScopes)}function addGlobalLink(doc,globalScopes,linkElm){var url=linkElm.href;return fetch(url).then((function(rsp){return rsp.text()})).then((function(text){if(function hasCssVariables(css){return css.indexOf("var(")>-1||CSS_VARIABLE_REGEXP.test(css)}(text)&&linkElm.parentNode){(function hasRelativeUrls(css){return CSS_URL_REGEXP.lastIndex=0,CSS_URL_REGEXP.test(css)})(text)&&(text=function fixRelativeUrls(css,originalUrl){var basePath=originalUrl.replace(/[^/]*$/,"");return css.replace(CSS_URL_REGEXP,(function(fullMatch,url){var relativeUrl=basePath+url;return fullMatch.replace(url,relativeUrl)}))}(text,url));var styleEl=doc.createElement("style");styleEl.setAttribute("data-styles",""),styleEl.innerHTML=text,addGlobalStyle(globalScopes,styleEl),linkElm.parentNode.insertBefore(styleEl,linkElm),linkElm.remove()}})).catch((function(err){console.error(err)}))}var CSS_VARIABLE_REGEXP=/[\s;{]--[-a-zA-Z0-9]+\s*:/m;var CSS_URL_REGEXP=/url[\s]*\([\s]*['"]?(?![http|/])([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;var CustomStyle=function(){function CustomStyle(win,doc){this.win=win,this.doc=doc,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map}return CustomStyle.prototype.initShim=function(){var _this=this;return new Promise((function(resolve){_this.win.requestAnimationFrame((function(){loadDocument(_this.doc,_this.globalScopes).then((function(){return resolve()}))}))}))},CustomStyle.prototype.addLink=function(linkEl){var _this=this;return addGlobalLink(this.doc,this.globalScopes,linkEl).then((function(){_this.updateGlobal()}))},CustomStyle.prototype.addGlobalStyle=function(styleEl){addGlobalStyle(this.globalScopes,styleEl),this.updateGlobal()},CustomStyle.prototype.createHostStyle=function(hostEl,cssScopeId,cssText,isScoped){if(this.hostScopeMap.has(hostEl))throw new Error("host style already created");var baseScope=this.registerHostTemplate(cssText,cssScopeId,isScoped),styleEl=this.doc.createElement("style");return baseScope.usesCssVars?isScoped?(styleEl["s-sc"]=cssScopeId=baseScope.scopeId+"-"+this.count,styleEl.innerHTML="/*needs update*/",this.hostStyleMap.set(hostEl,styleEl),this.hostScopeMap.set(hostEl,function reScope(scope,scopeId){var template=scope.template.map((function(segment){return"string"==typeof segment?replaceScope(segment,scope.scopeId,scopeId):segment})),selectors=scope.selectors.map((function(sel){return Object.assign(Object.assign({},sel),{selector:replaceScope(sel.selector,scope.scopeId,scopeId)})}));return Object.assign(Object.assign({},scope),{template:template,selectors:selectors,scopeId:scopeId})}(baseScope,cssScopeId)),this.count++):(baseScope.styleEl=styleEl,baseScope.usesCssVars||(styleEl.innerHTML=executeTemplate(baseScope.template,{})),this.globalScopes.push(baseScope),this.updateGlobal(),this.hostScopeMap.set(hostEl,baseScope)):styleEl.innerHTML=cssText,styleEl},CustomStyle.prototype.removeHost=function(hostEl){var css=this.hostStyleMap.get(hostEl);css&&css.remove(),this.hostStyleMap.delete(hostEl),this.hostScopeMap.delete(hostEl)},CustomStyle.prototype.updateHost=function(hostEl){var scope=this.hostScopeMap.get(hostEl);if(scope&&scope.usesCssVars&&scope.isScoped){var styleEl=this.hostStyleMap.get(hostEl);if(styleEl){var props=resolveValues(function getActiveSelectors(hostEl,hostScopeMap,globalScopes){var scopes=[],scopesForElement=function getScopesForElement(hostTemplateMap,node){var scopes=[];for(;node;){var scope=hostTemplateMap.get(node);scope&&scopes.push(scope),node=node.parentElement}return scopes}(hostScopeMap,hostEl);return globalScopes.forEach((function(s){return scopes.push(s)})),scopesForElement.forEach((function(s){return scopes.push(s)})),function sortSelectors(selectors){return selectors.sort((function(a,b){return a.specificity===b.specificity?a.nu-b.nu:a.specificity-b.specificity})),selectors}(getSelectorsForScopes(scopes).filter((function(selector){return function matches(el,selector){return":root"===selector||"html"===selector||el.matches(selector)}(hostEl,selector.selector)})))}(hostEl,this.hostScopeMap,this.globalScopes));styleEl.innerHTML=executeTemplate(scope.template,props)}}},CustomStyle.prototype.updateGlobal=function(){!function updateGlobalScopes(scopes){var props=resolveValues(getSelectorsForScopes(scopes));scopes.forEach((function(scope){scope.usesCssVars&&(scope.styleEl.innerHTML=executeTemplate(scope.template,props))}))}(this.globalScopes)},CustomStyle.prototype.registerHostTemplate=function(cssText,scopeId,isScoped){var scope=this.scopesMap.get(scopeId);return scope||((scope=parseCSS(cssText)).scopeId=scopeId,scope.isScoped=isScoped,this.scopesMap.set(scopeId,scope)),scope},CustomStyle}(),win=window;!win.__stencil_cssshim&&function needsShim(){return!(win.CSS&&win.CSS.supports&&win.CSS.supports("color","var(--c)"))}()&&(win.__stencil_cssshim=new CustomStyle(win,document))}}]);
//# sourceMappingURL=43.8cfe425e103fef371207.bundle.js.map