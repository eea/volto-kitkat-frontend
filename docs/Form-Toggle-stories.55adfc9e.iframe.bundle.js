(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/addons/volto-eea-design-system/src/ui/Form/Toggle.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled}));var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js")),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Toggle(_ref){var args=_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},_ref);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({toggle:!0},args))})}__webpack_exports__.default={title:"Components/Forms/Toggle",component:Toggle,parameters:{actions:{handles:["click"]}},argTypes:{label:{description:"Label of the toggle",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},name:{description:"name for the toggle input",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},id:{description:"id for the toggle input, also controls label for attribute",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},disabled:{description:"controls the state of the toggle",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},Toggle.displayName="Toggle";var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Toggle,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={id:"example",label:"Toggle label",name:"example",disabled:!1};var Disabled=Template.bind({});Disabled.args={id:"disabled",label:"Disabled Toggle",name:"disabled",disabled:!0},Default.parameters=Object.assign({storySource:{source:"(args) => <Toggle {...args}></Toggle>"}},Default.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => <Toggle {...args}></Toggle>"}},Disabled.parameters)}}]);