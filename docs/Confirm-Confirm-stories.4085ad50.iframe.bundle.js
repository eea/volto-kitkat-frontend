(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/addons/volto-eea-design-system/src/ui/Confirm/Confirm.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Confirm/Confirm.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ConfirmContent(_ref){var confirmHeader=_ref.confirmHeader,cancelButton=_ref.cancelButton,confirmButton=_ref.confirmButton,content=_ref.content,size=_ref.size,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),open=_useState2[0],setOpen=_useState2[1],closeConfirm=function(){setOpen(!1)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{primary:!0,onClick:function(){setOpen(!0)},children:"Show Confirmation"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{open:open,header:confirmHeader,onCancel:closeConfirm,onConfirm:closeConfirm,cancelButton:cancelButton,confirmButton:confirmButton,content:content,size:size})]})}__webpack_exports__.default={title:"Components/Confirm",component:semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,parameters:{actions:{handles:["click"]}},argTypes:{size:{control:{type:"inline-radio"},options:["mini","tiny","small","large"],description:"confirmation modal size",table:{type:{summary:"string"},defaultValue:{summary:"small"}}},confirmHeader:{description:"modal header",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},content:{description:"modal message",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},cancelButton:{description:"cancel button text",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},confirmButton:{description:"confirmation button text",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}}}},ConfirmContent.displayName="ConfirmContent";var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ConfirmContent,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={size:"small",confirmHeader:"This is the confirm header",content:"Are you sure?",cancelButton:"Cancel",confirmButton:"OK"},Default.parameters=Object.assign({storySource:{source:"(args) => <ConfirmContent {...args}></ConfirmContent>"}},Default.parameters)}}]);