(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"./src/addons/volto-eea-design-system/src/ui/PublicationCard/PublicationCard.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"PublicationCardWithImage",(function(){return PublicationCardWithImage}));__webpack_require__("./node_modules/react/index.js");var _PublicationCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/addons/volto-eea-design-system/src/ui/PublicationCard/PublicationCard.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/PublicationCard",component:_PublicationCard__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{tag:{description:"publication tags",table:{type:{summary:"string"},defaultValue:{summary:""}}},description:{description:"publication description",table:{type:{summary:"string"},defaultValue:{summary:""}}},href:{description:"publication link url",table:{type:{summary:"string"},defaultValue:{summary:""}}}}};var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_PublicationCard__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({},args,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PublicationCard__WEBPACK_IMPORTED_MODULE_1__.a.Header,{image_url:args.image?"https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini":null,image:args.image}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PublicationCard__WEBPACK_IMPORTED_MODULE_1__.a.Info,{description:args.description,tag:args.tag})]}))};Template.displayName="Template";var Default=Template.bind({});Default.args={tag:"Publication",description:"Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.",href:"/#"};var PublicationCardWithImage=Template.bind({});PublicationCardWithImage.args={tag:"Publication",description:"Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.",image:!0,href:"/#"},PublicationCardWithImage.argTypes={image:{description:"set or unset publication backgroung image",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},Default.parameters=Object.assign({storySource:{source:"(args) => (\n  <PublicationCard {...args}>\n    <PublicationCard.Header\n      image_url={args.image ? imageUrl : null}\n      image={args.image}\n    />\n    <PublicationCard.Info description={args.description} tag={args.tag} />\n  </PublicationCard>\n)"}},Default.parameters),PublicationCardWithImage.parameters=Object.assign({storySource:{source:"(args) => (\n  <PublicationCard {...args}>\n    <PublicationCard.Header\n      image_url={args.image ? imageUrl : null}\n      image={args.image}\n    />\n    <PublicationCard.Info description={args.description} tag={args.tag} />\n  </PublicationCard>\n)"}},PublicationCardWithImage.parameters)}}]);