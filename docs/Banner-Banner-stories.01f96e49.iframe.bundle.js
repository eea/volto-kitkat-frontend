(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/addons/volto-eea-design-system/src/ui/Banner/Banner.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Banner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/addons/volto-eea-design-system/src/ui/Banner/Banner.jsx"),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_banner_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/banner.png"),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_banner_png__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_banner_png__WEBPACK_IMPORTED_MODULE_2__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Popup/Popup.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/Page Header",component:_Banner__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{title:{description:"banner title",table:{defaultValue:{summary:'""'},type:{summary:"string"}}},metadata:{description:"banner metadata",table:{defaultValue:{summary:'""'},type:{summary:"object"}}},image:{description:"set or unset banner image",table:{defaultValue:{summary:'""'},type:{summary:"boolean"}}},hideShareButton:{description:"hide/show share button",table:{defaultValue:{summary:'""'},type:{summary:"boolean"}}},hideDownloadButton:{description:"hide/show download button",table:{defaultValue:{summary:'""'},type:{summary:"boolean"}}}}};var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({},args,{image_url:args.image?_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_banner_png__WEBPACK_IMPORTED_MODULE_2___default.a:null,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a.Content,{actions:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[" ",!args.hideShareButton&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{className:"share-popup",trigger:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a.Action,{icon:"ri-share-fill",title:"Share",className:"share"}),content:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"Share to:"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"actions",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a.Action,{icon:"ri-facebook-fill"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a.Action,{icon:"ri-twitter-fill"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a.Action,{icon:"ri-linkedin-fill"})]})]})},position:"top center",basic:!0}),!args.hideDownloadButton&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a.Action,{icon:"ri-download-2-line",title:"Download",className:"download"})]}),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a.Title,{children:args.title}),args.metadata&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a.Metadata,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:args.metadata.map((function(meta,index){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Banner__WEBPACK_IMPORTED_MODULE_1__.a.MetadataField,Object.assign({},meta,{key:index,__source:{fileName:"/home/runner/work/volto-kitkat-frontend/volto-kitkat-frontend/src/addons/volto-eea-design-system/src/ui/Banner/Banner.stories.jsx",lineNumber:102,columnNumber:15}}))}))})})]})}))};Template.displayName="Template";var Default=Template.bind({});Default.args={title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",metadata:[{hidden:!1,value:"Briefing",type:"type"},{hidden:!1,value:"Published Date",type:"date"},{hidden:!1,value:"Modified Date",type:"date"},{hidden:!1,value:"5 min read",type:""}],image:!0,hideShareButton:!1,hideDownloadButton:!1},Default.parameters=Object.assign({storySource:{source:'(args) => (\n  <Banner {...args} image_url={args.image ? imgUrl : null}>\n    <Banner.Content\n      actions={\n        <>\n          {\' \'}\n          {!args.hideShareButton && (\n            <Popup\n              className="share-popup"\n              trigger={\n                <Banner.Action\n                  icon="ri-share-fill"\n                  title="Share"\n                  className="share"\n                />\n              }\n              content={() => (\n                <>\n                  <p>Share to:</p>\n                  <div className="actions">\n                    <Banner.Action icon="ri-facebook-fill" />\n                    <Banner.Action icon="ri-twitter-fill" />\n                    <Banner.Action icon="ri-linkedin-fill" />\n                  </div>\n                </>\n              )}\n              position="top center"\n              basic\n            />\n          )}\n          {!args.hideDownloadButton && (\n            <Banner.Action\n              icon="ri-download-2-line"\n              title="Download"\n              className="download"\n            />\n          )}\n        </>\n      }\n    >\n      <Banner.Title>{args.title}</Banner.Title>\n      {args.metadata && (\n        <Banner.Metadata>\n          <>\n            {args.metadata.map((meta, index) => (\n              <Banner.MetadataField\n                {...meta}\n                key={index}\n              ></Banner.MetadataField>\n            ))}\n          </>\n        </Banner.Metadata>\n      )}\n    </Banner.Content>\n  </Banner>\n)'}},Default.parameters)},"./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/banner.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/banner.78d21183.png"}}]);