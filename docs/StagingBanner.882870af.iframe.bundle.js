(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/addons/volto-banner/src/less/stagingBanner.less":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([module.i,"/* Helper to load variables */\n.stagingBanner {\n  padding: 0 !important;\n  margin-top: 0 !important;\n}\n.stagingBanner p {\n  color: rgba(0, 0, 0, 0.87);\n}\n.skiplinks-wrapper {\n  position: relative !important;\n  top: 0 !important;\n}\n.skiplinks-wrapper a.skiplink {\n  position: absolute !important;\n  top: -100px !important;\n}\n","",{version:3,sources:["stagingBanner.less","/home/runner/work/volto-kitkat-frontend/volto-kitkat-frontend/src/addons/volto-banner/src/less/stagingBanner.less"],names:[],mappings:"AAAA,6BAA6B;ACQ7B;EAIE,qBAAA;EACA,wBAAA;ADTF;ACIA;EAEI,0BAAA;ADHJ;ACSA;EACE,6BAAA;EACA,iBAAA;ADPF;ACKA;EAKI,6BAAA;EACA,sBAAA;ADPJ",file:"stagingBanner.less",sourcesContent:["/* Helper to load variables */\n.stagingBanner {\n  padding: 0 !important;\n  margin-top: 0 !important;\n}\n.stagingBanner p {\n  color: rgba(0, 0, 0, 0.87);\n}\n.skiplinks-wrapper {\n  position: relative !important;\n  top: 0 !important;\n}\n.skiplinks-wrapper a.skiplink {\n  position: absolute !important;\n  top: -100px !important;\n}\n","@import 'globals.less';\n\n@addon: 'theme';\n@addontype: 'stagingbanner';\n@addonelement: 'banner';\n\n.loadAddonVariables();\n\n.stagingBanner {\n  p {\n    color: @bannerTextColor;\n  }\n  padding: 0 !important;\n  margin-top: 0 !important;\n}\n\n.skiplinks-wrapper when (@overrideSkipLinks = true) {\n  position: relative !important;\n  top: 0 !important;\n\n  a.skiplink {\n    position: absolute !important;\n    top: -100px !important;\n  }\n}\n"]}]),module.exports=exports},"./src/addons/volto-banner/src/StagingBanner.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_portal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-portal/es/PortalCompat.js"),_plone_volto_registry__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/addons/volto-banner/src/less/stagingBanner.less"),__webpack_require__("./node_modules/@plone/volto/src/registry.js")),classnames__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__),_plone_volto_runtime_config__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@plone/volto/src/runtime_config.js"),_plone_volto_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@plone/volto/src/components/index.js"),_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@plone/volto/src/helpers/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js"),StagingBanner=function(){var stagingBannerConfig=_plone_volto_registry__WEBPACK_IMPORTED_MODULE_4__.a.settings.stagingBanner,bannerHeader=_plone_volto_runtime_config__WEBPACK_IMPORTED_MODULE_6__.a[stagingBannerConfig.envBannerHeader],bannerMessage=_plone_volto_runtime_config__WEBPACK_IMPORTED_MODULE_6__.a[stagingBannerConfig.envBannerMessage],_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),_React$useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState,2),node=_React$useState2[0],setNode=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect((function(){setNode(document.querySelector(stagingBannerConfig.parentNodeSelector))}),[stagingBannerConfig.parentNodeSelector]),node?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_portal__WEBPACK_IMPORTED_MODULE_2__.a,{node:node,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_8__.b,{className:"has-banner"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_5___default()("stagingBanner",stagingBannerConfig.extraClasses),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_5___default()("container icon",stagingBannerConfig.extraClasses),children:[stagingBannerConfig.bannerIcon?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_plone_volto_components__WEBPACK_IMPORTED_MODULE_7__.L,{name:stagingBannerConfig.bannerIcon,size:"24px"}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i",{"aria-hidden":"true",className:"exclamation circle icon"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"content",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"header",children:bannerHeader||"This is a demo/test instance"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p",{dangerouslySetInnerHTML:{__html:bannerMessage||"Do not use it for operational purposes. All changes will be regularly overwritten"}})]})]})})]}):null};StagingBanner.__docgenInfo={description:"",methods:[],displayName:"StagingBanner"},__webpack_exports__.default=StagingBanner,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/addons/volto-banner/src/StagingBanner.jsx"]={name:"StagingBanner",docgenInfo:StagingBanner.__docgenInfo,path:"src/addons/volto-banner/src/StagingBanner.jsx"})},"./src/addons/volto-banner/src/less/stagingBanner.less":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/addons/volto-banner/src/less/stagingBanner.less");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}}}]);