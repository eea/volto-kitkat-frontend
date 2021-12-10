/*! For license information please see vendors~diff.ccef3f15.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./node_modules/diff/dist/diff.js":function(module,exports,__webpack_require__){!function webpackUniversalModuleDefinition(root,factory){module.exports=factory()}(0,(function(){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.canonicalize=exports.convertChangesToXML=exports.convertChangesToDMP=exports.merge=exports.parsePatch=exports.applyPatches=exports.applyPatch=exports.createPatch=exports.createTwoFilesPatch=exports.structuredPatch=exports.diffArrays=exports.diffJson=exports.diffCss=exports.diffSentences=exports.diffTrimmedLines=exports.diffLines=exports.diffWordsWithSpace=exports.diffWords=exports.diffChars=exports.Diff=void 0;var _base2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1)),_character=__webpack_require__(2),_word=__webpack_require__(3),_line=__webpack_require__(5),_sentence=__webpack_require__(6),_css=__webpack_require__(7),_json=__webpack_require__(8),_array=__webpack_require__(9),_apply=__webpack_require__(10),_parse=__webpack_require__(11),_merge=__webpack_require__(13),_create=__webpack_require__(14),_dmp=__webpack_require__(16),_xml=__webpack_require__(17);exports.Diff=_base2.default,exports.diffChars=_character.diffChars,exports.diffWords=_word.diffWords,exports.diffWordsWithSpace=_word.diffWordsWithSpace,exports.diffLines=_line.diffLines,exports.diffTrimmedLines=_line.diffTrimmedLines,exports.diffSentences=_sentence.diffSentences,exports.diffCss=_css.diffCss,exports.diffJson=_json.diffJson,exports.diffArrays=_array.diffArrays,exports.structuredPatch=_create.structuredPatch,exports.createTwoFilesPatch=_create.createTwoFilesPatch,exports.createPatch=_create.createPatch,exports.applyPatch=_apply.applyPatch,exports.applyPatches=_apply.applyPatches,exports.parsePatch=_parse.parsePatch,exports.merge=_merge.merge,exports.convertChangesToDMP=_dmp.convertChangesToDMP,exports.convertChangesToXML=_xml.convertChangesToXML,exports.canonicalize=_json.canonicalize},function(module,exports){"use strict";function Diff(){}function buildValues(diff,components,newString,oldString,useLongestToken){for(var componentPos=0,componentLen=components.length,newPos=0,oldPos=0;componentPos<componentLen;componentPos++){var component=components[componentPos];if(component.removed){if(component.value=diff.join(oldString.slice(oldPos,oldPos+component.count)),oldPos+=component.count,componentPos&&components[componentPos-1].added){var tmp=components[componentPos-1];components[componentPos-1]=components[componentPos],components[componentPos]=tmp}}else{if(!component.added&&useLongestToken){var value=newString.slice(newPos,newPos+component.count);value=value.map((function(value,i){var oldValue=oldString[oldPos+i];return oldValue.length>value.length?oldValue:value})),component.value=diff.join(value)}else component.value=diff.join(newString.slice(newPos,newPos+component.count));newPos+=component.count,component.added||(oldPos+=component.count)}}var lastComponent=components[componentLen-1];return componentLen>1&&"string"==typeof lastComponent.value&&(lastComponent.added||lastComponent.removed)&&diff.equals("",lastComponent.value)&&(components[componentLen-2].value+=lastComponent.value,components.pop()),components}function clonePath(path){return{newPos:path.newPos,components:path.components.slice(0)}}exports.__esModule=!0,exports.default=Diff,Diff.prototype={diff:function diff(oldString,newString){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},callback=options.callback;"function"==typeof options&&(callback=options,options={}),this.options=options;var self=this;function done(value){return callback?(setTimeout((function(){callback(void 0,value)}),0),!0):value}oldString=this.castInput(oldString),newString=this.castInput(newString),oldString=this.removeEmpty(this.tokenize(oldString));var newLen=(newString=this.removeEmpty(this.tokenize(newString))).length,oldLen=oldString.length,editLength=1,maxEditLength=newLen+oldLen,bestPath=[{newPos:-1,components:[]}],oldPos=this.extractCommon(bestPath[0],newString,oldString,0);if(bestPath[0].newPos+1>=newLen&&oldPos+1>=oldLen)return done([{value:this.join(newString),count:newString.length}]);function execEditLength(){for(var diagonalPath=-1*editLength;diagonalPath<=editLength;diagonalPath+=2){var basePath=void 0,addPath=bestPath[diagonalPath-1],removePath=bestPath[diagonalPath+1],_oldPos=(removePath?removePath.newPos:0)-diagonalPath;addPath&&(bestPath[diagonalPath-1]=void 0);var canAdd=addPath&&addPath.newPos+1<newLen,canRemove=removePath&&0<=_oldPos&&_oldPos<oldLen;if(canAdd||canRemove){if(!canAdd||canRemove&&addPath.newPos<removePath.newPos?(basePath=clonePath(removePath),self.pushComponent(basePath.components,void 0,!0)):((basePath=addPath).newPos++,self.pushComponent(basePath.components,!0,void 0)),_oldPos=self.extractCommon(basePath,newString,oldString,diagonalPath),basePath.newPos+1>=newLen&&_oldPos+1>=oldLen)return done(buildValues(self,basePath.components,newString,oldString,self.useLongestToken));bestPath[diagonalPath]=basePath}else bestPath[diagonalPath]=void 0}editLength++}if(callback)!function exec(){setTimeout((function(){if(editLength>maxEditLength)return callback();execEditLength()||exec()}),0)}();else for(;editLength<=maxEditLength;){var ret=execEditLength();if(ret)return ret}},pushComponent:function pushComponent(components,added,removed){var last=components[components.length-1];last&&last.added===added&&last.removed===removed?components[components.length-1]={count:last.count+1,added:added,removed:removed}:components.push({count:1,added:added,removed:removed})},extractCommon:function extractCommon(basePath,newString,oldString,diagonalPath){for(var newLen=newString.length,oldLen=oldString.length,newPos=basePath.newPos,oldPos=newPos-diagonalPath,commonCount=0;newPos+1<newLen&&oldPos+1<oldLen&&this.equals(newString[newPos+1],oldString[oldPos+1]);)newPos++,oldPos++,commonCount++;return commonCount&&basePath.components.push({count:commonCount}),basePath.newPos=newPos,oldPos},equals:function equals(left,right){return this.options.comparator?this.options.comparator(left,right):left===right||this.options.ignoreCase&&left.toLowerCase()===right.toLowerCase()},removeEmpty:function removeEmpty(array){for(var ret=[],i=0;i<array.length;i++)array[i]&&ret.push(array[i]);return ret},castInput:function castInput(value){return value},tokenize:function tokenize(value){return value.split("")},join:function join(chars){return chars.join("")}}},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.characterDiff=void 0,exports.diffChars=function diffChars(oldStr,newStr,options){return characterDiff.diff(oldStr,newStr,options)};var _base2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1));var characterDiff=exports.characterDiff=new _base2.default},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.wordDiff=void 0,exports.diffWords=function diffWords(oldStr,newStr,options){return options=(0,_params.generateOptions)(options,{ignoreWhitespace:!0}),wordDiff.diff(oldStr,newStr,options)},exports.diffWordsWithSpace=function diffWordsWithSpace(oldStr,newStr,options){return wordDiff.diff(oldStr,newStr,options)};var _base2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1)),_params=__webpack_require__(4);var extendedWordChars=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,reWhitespace=/\S/,wordDiff=exports.wordDiff=new _base2.default;wordDiff.equals=function(left,right){return this.options.ignoreCase&&(left=left.toLowerCase(),right=right.toLowerCase()),left===right||this.options.ignoreWhitespace&&!reWhitespace.test(left)&&!reWhitespace.test(right)},wordDiff.tokenize=function(value){for(var tokens=value.split(/(\s+|\b)/),i=0;i<tokens.length-1;i++)!tokens[i+1]&&tokens[i+2]&&extendedWordChars.test(tokens[i])&&extendedWordChars.test(tokens[i+2])&&(tokens[i]+=tokens[i+2],tokens.splice(i+1,2),i--);return tokens}},function(module,exports){"use strict";exports.__esModule=!0,exports.generateOptions=function generateOptions(options,defaults){if("function"==typeof options)defaults.callback=options;else if(options)for(var name in options)options.hasOwnProperty(name)&&(defaults[name]=options[name]);return defaults}},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.lineDiff=void 0,exports.diffLines=function diffLines(oldStr,newStr,callback){return lineDiff.diff(oldStr,newStr,callback)},exports.diffTrimmedLines=function diffTrimmedLines(oldStr,newStr,callback){var options=(0,_params.generateOptions)(callback,{ignoreWhitespace:!0});return lineDiff.diff(oldStr,newStr,options)};var _base2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1)),_params=__webpack_require__(4);var lineDiff=exports.lineDiff=new _base2.default;lineDiff.tokenize=function(value){var retLines=[],linesAndNewlines=value.split(/(\n|\r\n)/);linesAndNewlines[linesAndNewlines.length-1]||linesAndNewlines.pop();for(var i=0;i<linesAndNewlines.length;i++){var line=linesAndNewlines[i];i%2&&!this.options.newlineIsToken?retLines[retLines.length-1]+=line:(this.options.ignoreWhitespace&&(line=line.trim()),retLines.push(line))}return retLines}},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.sentenceDiff=void 0,exports.diffSentences=function diffSentences(oldStr,newStr,callback){return sentenceDiff.diff(oldStr,newStr,callback)};var _base2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1));var sentenceDiff=exports.sentenceDiff=new _base2.default;sentenceDiff.tokenize=function(value){return value.split(/(\S.+?[.!?])(?=\s+|$)/)}},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.cssDiff=void 0,exports.diffCss=function diffCss(oldStr,newStr,callback){return cssDiff.diff(oldStr,newStr,callback)};var _base2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1));var cssDiff=exports.cssDiff=new _base2.default;cssDiff.tokenize=function(value){return value.split(/([{}:;,]|\s+)/)}},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.jsonDiff=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};exports.diffJson=function diffJson(oldObj,newObj,options){return jsonDiff.diff(oldObj,newObj,options)},exports.canonicalize=canonicalize;var _base2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1)),_line=__webpack_require__(5);var objectPrototypeToString=Object.prototype.toString,jsonDiff=exports.jsonDiff=new _base2.default;function canonicalize(obj,stack,replacementStack,replacer,key){stack=stack||[],replacementStack=replacementStack||[],replacer&&(obj=replacer(key,obj));var i=void 0;for(i=0;i<stack.length;i+=1)if(stack[i]===obj)return replacementStack[i];var canonicalizedObj=void 0;if("[object Array]"===objectPrototypeToString.call(obj)){for(stack.push(obj),canonicalizedObj=new Array(obj.length),replacementStack.push(canonicalizedObj),i=0;i<obj.length;i+=1)canonicalizedObj[i]=canonicalize(obj[i],stack,replacementStack,replacer,key);return stack.pop(),replacementStack.pop(),canonicalizedObj}if(obj&&obj.toJSON&&(obj=obj.toJSON()),"object"===(void 0===obj?"undefined":_typeof(obj))&&null!==obj){stack.push(obj),canonicalizedObj={},replacementStack.push(canonicalizedObj);var sortedKeys=[],_key=void 0;for(_key in obj)obj.hasOwnProperty(_key)&&sortedKeys.push(_key);for(sortedKeys.sort(),i=0;i<sortedKeys.length;i+=1)canonicalizedObj[_key=sortedKeys[i]]=canonicalize(obj[_key],stack,replacementStack,replacer,_key);stack.pop(),replacementStack.pop()}else canonicalizedObj=obj;return canonicalizedObj}jsonDiff.useLongestToken=!0,jsonDiff.tokenize=_line.lineDiff.tokenize,jsonDiff.castInput=function(value){var _options=this.options,undefinedReplacement=_options.undefinedReplacement,_options$stringifyRep=_options.stringifyReplacer,stringifyReplacer=void 0===_options$stringifyRep?function(k,v){return void 0===v?undefinedReplacement:v}:_options$stringifyRep;return"string"==typeof value?value:JSON.stringify(canonicalize(value,null,null,stringifyReplacer),stringifyReplacer,"  ")},jsonDiff.equals=function(left,right){return _base2.default.prototype.equals.call(jsonDiff,left.replace(/,([\r\n])/g,"$1"),right.replace(/,([\r\n])/g,"$1"))}},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.arrayDiff=void 0,exports.diffArrays=function diffArrays(oldArr,newArr,callback){return arrayDiff.diff(oldArr,newArr,callback)};var _base2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1));var arrayDiff=exports.arrayDiff=new _base2.default;arrayDiff.tokenize=function(value){return value.slice()},arrayDiff.join=arrayDiff.removeEmpty=function(value){return value}},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.applyPatch=applyPatch,exports.applyPatches=function applyPatches(uniDiff,options){"string"==typeof uniDiff&&(uniDiff=(0,_parse.parsePatch)(uniDiff));var currentIndex=0;!function processIndex(){var index=uniDiff[currentIndex++];if(!index)return options.complete();options.loadFile(index,(function(err,data){if(err)return options.complete(err);var updatedContent=applyPatch(data,index,options);options.patched(index,updatedContent,(function(err){if(err)return options.complete(err);processIndex()}))}))}()};var _parse=__webpack_require__(11),_distanceIterator2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(12));function applyPatch(source,uniDiff){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof uniDiff&&(uniDiff=(0,_parse.parsePatch)(uniDiff)),Array.isArray(uniDiff)){if(uniDiff.length>1)throw new Error("applyPatch only works with a single input.");uniDiff=uniDiff[0]}var lines=source.split(/\r\n|[\n\v\f\r\x85]/),delimiters=source.match(/\r\n|[\n\v\f\r\x85]/g)||[],hunks=uniDiff.hunks,compareLine=options.compareLine||function(lineNumber,line,operation,patchContent){return line===patchContent},errorCount=0,fuzzFactor=options.fuzzFactor||0,minLine=0,offset=0,removeEOFNL=void 0,addEOFNL=void 0;function hunkFits(hunk,toPos){for(var j=0;j<hunk.lines.length;j++){var line=hunk.lines[j],operation=line.length>0?line[0]:" ",content=line.length>0?line.substr(1):line;if(" "===operation||"-"===operation){if(!compareLine(toPos+1,lines[toPos],operation,content)&&++errorCount>fuzzFactor)return!1;toPos++}}return!0}for(var i=0;i<hunks.length;i++){for(var hunk=hunks[i],maxLine=lines.length-hunk.oldLines,localOffset=0,toPos=offset+hunk.oldStart-1,iterator=(0,_distanceIterator2.default)(toPos,minLine,maxLine);void 0!==localOffset;localOffset=iterator())if(hunkFits(hunk,toPos+localOffset)){hunk.offset=offset+=localOffset;break}if(void 0===localOffset)return!1;minLine=hunk.offset+hunk.oldStart+hunk.oldLines}for(var diffOffset=0,_i=0;_i<hunks.length;_i++){var _hunk=hunks[_i],_toPos=_hunk.oldStart+_hunk.offset+diffOffset-1;diffOffset+=_hunk.newLines-_hunk.oldLines,_toPos<0&&(_toPos=0);for(var j=0;j<_hunk.lines.length;j++){var line=_hunk.lines[j],operation=line.length>0?line[0]:" ",content=line.length>0?line.substr(1):line,delimiter=_hunk.linedelimiters[j];if(" "===operation)_toPos++;else if("-"===operation)lines.splice(_toPos,1),delimiters.splice(_toPos,1);else if("+"===operation)lines.splice(_toPos,0,content),delimiters.splice(_toPos,0,delimiter),_toPos++;else if("\\"===operation){var previousOperation=_hunk.lines[j-1]?_hunk.lines[j-1][0]:null;"+"===previousOperation?removeEOFNL=!0:"-"===previousOperation&&(addEOFNL=!0)}}}if(removeEOFNL)for(;!lines[lines.length-1];)lines.pop(),delimiters.pop();else addEOFNL&&(lines.push(""),delimiters.push("\n"));for(var _k=0;_k<lines.length-1;_k++)lines[_k]=lines[_k]+delimiters[_k];return lines.join("")}},function(module,exports){"use strict";exports.__esModule=!0,exports.parsePatch=function parsePatch(uniDiff){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},diffstr=uniDiff.split(/\r\n|[\n\v\f\r\x85]/),delimiters=uniDiff.match(/\r\n|[\n\v\f\r\x85]/g)||[],list=[],i=0;function parseIndex(){var index={};for(list.push(index);i<diffstr.length;){var line=diffstr[i];if(/^(\-\-\-|\+\+\+|@@)\s/.test(line))break;var header=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);header&&(index.index=header[1]),i++}for(parseFileHeader(index),parseFileHeader(index),index.hunks=[];i<diffstr.length;){var _line=diffstr[i];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line))break;if(/^@@/.test(_line))index.hunks.push(parseHunk());else{if(_line&&options.strict)throw new Error("Unknown line "+(i+1)+" "+JSON.stringify(_line));i++}}}function parseFileHeader(index){var fileHeader=/^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);if(fileHeader){var keyPrefix="---"===fileHeader[1]?"old":"new",data=fileHeader[2].split("\t",2),fileName=data[0].replace(/\\\\/g,"\\");/^".*"$/.test(fileName)&&(fileName=fileName.substr(1,fileName.length-2)),index[keyPrefix+"FileName"]=fileName,index[keyPrefix+"Header"]=(data[1]||"").trim(),i++}}function parseHunk(){for(var chunkHeaderIndex=i,chunkHeader=diffstr[i++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),hunk={oldStart:+chunkHeader[1],oldLines:+chunkHeader[2]||1,newStart:+chunkHeader[3],newLines:+chunkHeader[4]||1,lines:[],linedelimiters:[]},addCount=0,removeCount=0;i<diffstr.length&&!(0===diffstr[i].indexOf("--- ")&&i+2<diffstr.length&&0===diffstr[i+1].indexOf("+++ ")&&0===diffstr[i+2].indexOf("@@"));i++){var operation=0==diffstr[i].length&&i!=diffstr.length-1?" ":diffstr[i][0];if("+"!==operation&&"-"!==operation&&" "!==operation&&"\\"!==operation)break;hunk.lines.push(diffstr[i]),hunk.linedelimiters.push(delimiters[i]||"\n"),"+"===operation?addCount++:"-"===operation?removeCount++:" "===operation&&(addCount++,removeCount++)}if(addCount||1!==hunk.newLines||(hunk.newLines=0),removeCount||1!==hunk.oldLines||(hunk.oldLines=0),options.strict){if(addCount!==hunk.newLines)throw new Error("Added line count did not match for hunk at line "+(chunkHeaderIndex+1));if(removeCount!==hunk.oldLines)throw new Error("Removed line count did not match for hunk at line "+(chunkHeaderIndex+1))}return hunk}for(;i<diffstr.length;)parseIndex();return list}},function(module,exports){"use strict";exports.__esModule=!0,exports.default=function(start,minLine,maxLine){var wantForward=!0,backwardExhausted=!1,forwardExhausted=!1,localOffset=1;return function iterator(){if(wantForward&&!forwardExhausted){if(backwardExhausted?localOffset++:wantForward=!1,start+localOffset<=maxLine)return localOffset;forwardExhausted=!0}if(!backwardExhausted)return forwardExhausted||(wantForward=!0),minLine<=start-localOffset?-localOffset++:(backwardExhausted=!0,iterator())}}},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.calcLineCount=calcLineCount,exports.merge=function merge(mine,theirs,base){mine=loadPatch(mine,base),theirs=loadPatch(theirs,base);var ret={};(mine.index||theirs.index)&&(ret.index=mine.index||theirs.index);(mine.newFileName||theirs.newFileName)&&(fileNameChanged(mine)?fileNameChanged(theirs)?(ret.oldFileName=selectField(ret,mine.oldFileName,theirs.oldFileName),ret.newFileName=selectField(ret,mine.newFileName,theirs.newFileName),ret.oldHeader=selectField(ret,mine.oldHeader,theirs.oldHeader),ret.newHeader=selectField(ret,mine.newHeader,theirs.newHeader)):(ret.oldFileName=mine.oldFileName,ret.newFileName=mine.newFileName,ret.oldHeader=mine.oldHeader,ret.newHeader=mine.newHeader):(ret.oldFileName=theirs.oldFileName||mine.oldFileName,ret.newFileName=theirs.newFileName||mine.newFileName,ret.oldHeader=theirs.oldHeader||mine.oldHeader,ret.newHeader=theirs.newHeader||mine.newHeader));ret.hunks=[];var mineIndex=0,theirsIndex=0,mineOffset=0,theirsOffset=0;for(;mineIndex<mine.hunks.length||theirsIndex<theirs.hunks.length;){var mineCurrent=mine.hunks[mineIndex]||{oldStart:1/0},theirsCurrent=theirs.hunks[theirsIndex]||{oldStart:1/0};if(hunkBefore(mineCurrent,theirsCurrent))ret.hunks.push(cloneHunk(mineCurrent,mineOffset)),mineIndex++,theirsOffset+=mineCurrent.newLines-mineCurrent.oldLines;else if(hunkBefore(theirsCurrent,mineCurrent))ret.hunks.push(cloneHunk(theirsCurrent,theirsOffset)),theirsIndex++,mineOffset+=theirsCurrent.newLines-theirsCurrent.oldLines;else{var mergedHunk={oldStart:Math.min(mineCurrent.oldStart,theirsCurrent.oldStart),oldLines:0,newStart:Math.min(mineCurrent.newStart+mineOffset,theirsCurrent.oldStart+theirsOffset),newLines:0,lines:[]};mergeLines(mergedHunk,mineCurrent.oldStart,mineCurrent.lines,theirsCurrent.oldStart,theirsCurrent.lines),theirsIndex++,mineIndex++,ret.hunks.push(mergedHunk)}}return ret};var _create=__webpack_require__(14),_parse=__webpack_require__(11),_array=__webpack_require__(15);function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function calcLineCount(hunk){var _calcOldNewLineCount=calcOldNewLineCount(hunk.lines),oldLines=_calcOldNewLineCount.oldLines,newLines=_calcOldNewLineCount.newLines;void 0!==oldLines?hunk.oldLines=oldLines:delete hunk.oldLines,void 0!==newLines?hunk.newLines=newLines:delete hunk.newLines}function loadPatch(param,base){if("string"==typeof param){if(/^@@/m.test(param)||/^Index:/m.test(param))return(0,_parse.parsePatch)(param)[0];if(!base)throw new Error("Must provide a base reference or pass in a patch");return(0,_create.structuredPatch)(void 0,void 0,base,param)}return param}function fileNameChanged(patch){return patch.newFileName&&patch.newFileName!==patch.oldFileName}function selectField(index,mine,theirs){return mine===theirs?mine:(index.conflict=!0,{mine:mine,theirs:theirs})}function hunkBefore(test,check){return test.oldStart<check.oldStart&&test.oldStart+test.oldLines<check.oldStart}function cloneHunk(hunk,offset){return{oldStart:hunk.oldStart,oldLines:hunk.oldLines,newStart:hunk.newStart+offset,newLines:hunk.newLines,lines:hunk.lines}}function mergeLines(hunk,mineOffset,mineLines,theirOffset,theirLines){var mine={offset:mineOffset,lines:mineLines,index:0},their={offset:theirOffset,lines:theirLines,index:0};for(insertLeading(hunk,mine,their),insertLeading(hunk,their,mine);mine.index<mine.lines.length&&their.index<their.lines.length;){var mineCurrent=mine.lines[mine.index],theirCurrent=their.lines[their.index];if("-"!==mineCurrent[0]&&"+"!==mineCurrent[0]||"-"!==theirCurrent[0]&&"+"!==theirCurrent[0])if("+"===mineCurrent[0]&&" "===theirCurrent[0]){var _hunk$lines;(_hunk$lines=hunk.lines).push.apply(_hunk$lines,_toConsumableArray(collectChange(mine)))}else if("+"===theirCurrent[0]&&" "===mineCurrent[0]){var _hunk$lines2;(_hunk$lines2=hunk.lines).push.apply(_hunk$lines2,_toConsumableArray(collectChange(their)))}else"-"===mineCurrent[0]&&" "===theirCurrent[0]?removal(hunk,mine,their):"-"===theirCurrent[0]&&" "===mineCurrent[0]?removal(hunk,their,mine,!0):mineCurrent===theirCurrent?(hunk.lines.push(mineCurrent),mine.index++,their.index++):conflict(hunk,collectChange(mine),collectChange(their));else mutualChange(hunk,mine,their)}insertTrailing(hunk,mine),insertTrailing(hunk,their),calcLineCount(hunk)}function mutualChange(hunk,mine,their){var myChanges=collectChange(mine),theirChanges=collectChange(their);if(allRemoves(myChanges)&&allRemoves(theirChanges)){var _hunk$lines3,_hunk$lines4;if((0,_array.arrayStartsWith)(myChanges,theirChanges)&&skipRemoveSuperset(their,myChanges,myChanges.length-theirChanges.length))return void(_hunk$lines3=hunk.lines).push.apply(_hunk$lines3,_toConsumableArray(myChanges));if((0,_array.arrayStartsWith)(theirChanges,myChanges)&&skipRemoveSuperset(mine,theirChanges,theirChanges.length-myChanges.length))return void(_hunk$lines4=hunk.lines).push.apply(_hunk$lines4,_toConsumableArray(theirChanges))}else if((0,_array.arrayEqual)(myChanges,theirChanges)){var _hunk$lines5;return void(_hunk$lines5=hunk.lines).push.apply(_hunk$lines5,_toConsumableArray(myChanges))}conflict(hunk,myChanges,theirChanges)}function removal(hunk,mine,their,swap){var _hunk$lines6,myChanges=collectChange(mine),theirChanges=function collectContext(state,matchChanges){var changes=[],merged=[],matchIndex=0,contextChanges=!1,conflicted=!1;for(;matchIndex<matchChanges.length&&state.index<state.lines.length;){var change=state.lines[state.index],match=matchChanges[matchIndex];if("+"===match[0])break;if(contextChanges=contextChanges||" "!==change[0],merged.push(match),matchIndex++,"+"===change[0])for(conflicted=!0;"+"===change[0];)changes.push(change),change=state.lines[++state.index];match.substr(1)===change.substr(1)?(changes.push(change),state.index++):conflicted=!0}"+"===(matchChanges[matchIndex]||"")[0]&&contextChanges&&(conflicted=!0);if(conflicted)return changes;for(;matchIndex<matchChanges.length;)merged.push(matchChanges[matchIndex++]);return{merged:merged,changes:changes}}(their,myChanges);theirChanges.merged?(_hunk$lines6=hunk.lines).push.apply(_hunk$lines6,_toConsumableArray(theirChanges.merged)):conflict(hunk,swap?theirChanges:myChanges,swap?myChanges:theirChanges)}function conflict(hunk,mine,their){hunk.conflict=!0,hunk.lines.push({conflict:!0,mine:mine,theirs:their})}function insertLeading(hunk,insert,their){for(;insert.offset<their.offset&&insert.index<insert.lines.length;){var line=insert.lines[insert.index++];hunk.lines.push(line),insert.offset++}}function insertTrailing(hunk,insert){for(;insert.index<insert.lines.length;){var line=insert.lines[insert.index++];hunk.lines.push(line)}}function collectChange(state){for(var ret=[],operation=state.lines[state.index][0];state.index<state.lines.length;){var line=state.lines[state.index];if("-"===operation&&"+"===line[0]&&(operation="+"),operation!==line[0])break;ret.push(line),state.index++}return ret}function allRemoves(changes){return changes.reduce((function(prev,change){return prev&&"-"===change[0]}),!0)}function skipRemoveSuperset(state,removeChanges,delta){for(var i=0;i<delta;i++){var changeContent=removeChanges[removeChanges.length-delta+i].substr(1);if(state.lines[state.index+i]!==" "+changeContent)return!1}return state.index+=delta,!0}function calcOldNewLineCount(lines){var oldLines=0,newLines=0;return lines.forEach((function(line){if("string"!=typeof line){var myCount=calcOldNewLineCount(line.mine),theirCount=calcOldNewLineCount(line.theirs);void 0!==oldLines&&(myCount.oldLines===theirCount.oldLines?oldLines+=myCount.oldLines:oldLines=void 0),void 0!==newLines&&(myCount.newLines===theirCount.newLines?newLines+=myCount.newLines:newLines=void 0)}else void 0===newLines||"+"!==line[0]&&" "!==line[0]||newLines++,void 0===oldLines||"-"!==line[0]&&" "!==line[0]||oldLines++})),{oldLines:oldLines,newLines:newLines}}},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.structuredPatch=structuredPatch,exports.createTwoFilesPatch=createTwoFilesPatch,exports.createPatch=function createPatch(fileName,oldStr,newStr,oldHeader,newHeader,options){return createTwoFilesPatch(fileName,fileName,oldStr,newStr,oldHeader,newHeader,options)};var _line=__webpack_require__(5);function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function structuredPatch(oldFileName,newFileName,oldStr,newStr,oldHeader,newHeader,options){options||(options={}),void 0===options.context&&(options.context=4);var diff=(0,_line.diffLines)(oldStr,newStr,options);function contextLines(lines){return lines.map((function(entry){return" "+entry}))}diff.push({value:"",lines:[]});for(var hunks=[],oldRangeStart=0,newRangeStart=0,curRange=[],oldLine=1,newLine=1,_loop=function _loop(i){var current=diff[i],lines=current.lines||current.value.replace(/\n$/,"").split("\n");if(current.lines=lines,current.added||current.removed){var _curRange;if(!oldRangeStart){var prev=diff[i-1];oldRangeStart=oldLine,newRangeStart=newLine,prev&&(curRange=options.context>0?contextLines(prev.lines.slice(-options.context)):[],oldRangeStart-=curRange.length,newRangeStart-=curRange.length)}(_curRange=curRange).push.apply(_curRange,_toConsumableArray(lines.map((function(entry){return(current.added?"+":"-")+entry})))),current.added?newLine+=lines.length:oldLine+=lines.length}else{if(oldRangeStart)if(lines.length<=2*options.context&&i<diff.length-2){var _curRange2;(_curRange2=curRange).push.apply(_curRange2,_toConsumableArray(contextLines(lines)))}else{var _curRange3,contextSize=Math.min(lines.length,options.context);(_curRange3=curRange).push.apply(_curRange3,_toConsumableArray(contextLines(lines.slice(0,contextSize))));var hunk={oldStart:oldRangeStart,oldLines:oldLine-oldRangeStart+contextSize,newStart:newRangeStart,newLines:newLine-newRangeStart+contextSize,lines:curRange};if(i>=diff.length-2&&lines.length<=options.context){var oldEOFNewline=/\n$/.test(oldStr),newEOFNewline=/\n$/.test(newStr);0!=lines.length||oldEOFNewline?oldEOFNewline&&newEOFNewline||curRange.push("\\ No newline at end of file"):curRange.splice(hunk.oldLines,0,"\\ No newline at end of file")}hunks.push(hunk),oldRangeStart=0,newRangeStart=0,curRange=[]}oldLine+=lines.length,newLine+=lines.length}},i=0;i<diff.length;i++)_loop(i);return{oldFileName:oldFileName,newFileName:newFileName,oldHeader:oldHeader,newHeader:newHeader,hunks:hunks}}function createTwoFilesPatch(oldFileName,newFileName,oldStr,newStr,oldHeader,newHeader,options){var diff=structuredPatch(oldFileName,newFileName,oldStr,newStr,oldHeader,newHeader,options),ret=[];oldFileName==newFileName&&ret.push("Index: "+oldFileName),ret.push("==================================================================="),ret.push("--- "+diff.oldFileName+(void 0===diff.oldHeader?"":"\t"+diff.oldHeader)),ret.push("+++ "+diff.newFileName+(void 0===diff.newHeader?"":"\t"+diff.newHeader));for(var i=0;i<diff.hunks.length;i++){var hunk=diff.hunks[i];ret.push("@@ -"+hunk.oldStart+","+hunk.oldLines+" +"+hunk.newStart+","+hunk.newLines+" @@"),ret.push.apply(ret,hunk.lines)}return ret.join("\n")+"\n"}},function(module,exports){"use strict";function arrayStartsWith(array,start){if(start.length>array.length)return!1;for(var i=0;i<start.length;i++)if(start[i]!==array[i])return!1;return!0}exports.__esModule=!0,exports.arrayEqual=function arrayEqual(a,b){if(a.length!==b.length)return!1;return arrayStartsWith(a,b)},exports.arrayStartsWith=arrayStartsWith},function(module,exports){"use strict";exports.__esModule=!0,exports.convertChangesToDMP=function convertChangesToDMP(changes){for(var ret=[],change=void 0,operation=void 0,i=0;i<changes.length;i++)change=changes[i],operation=change.added?1:change.removed?-1:0,ret.push([operation,change.value]);return ret}},function(module,exports){"use strict";function escapeHTML(s){var n=s;return n=(n=(n=(n=n.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")}exports.__esModule=!0,exports.convertChangesToXML=function convertChangesToXML(changes){for(var ret=[],i=0;i<changes.length;i++){var change=changes[i];change.added?ret.push("<ins>"):change.removed&&ret.push("<del>"),ret.push(escapeHTML(change.value)),change.added?ret.push("</ins>"):change.removed&&ret.push("</del>")}return ret.join("")}}])}))}}]);
//# sourceMappingURL=vendors~diff.ccef3f15.iframe.bundle.js.map