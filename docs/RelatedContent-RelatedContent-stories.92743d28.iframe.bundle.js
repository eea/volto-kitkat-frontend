(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"./src/addons/volto-eea-design-system/src/ui/RelatedContent/RelatedContent.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultEven",(function(){return DefaultEven})),__webpack_require__.d(__webpack_exports__,"DefaultOdd",(function(){return DefaultOdd}));var react=__webpack_require__("./node_modules/react/index.js"),Container=(__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js")),Grid=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),PublicationCard=__webpack_require__("./src/addons/volto-eea-design-system/src/ui/PublicationCard/PublicationCard.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function RelatedContent(_ref){var publicationCards=_ref.publicationCards,cards=publicationCards;publicationCards.length>4&&(cards=cards.slice(0,4));var rows=cards.reduce((function(rows,key,index){return(index%2==0?rows.push([key]):rows[rows.length-1].push(key))&&rows}),[]);return Object(jsx_runtime.jsx)("div",{className:"related-content-wrapper",children:Object(jsx_runtime.jsxs)(Container.a,{children:[Object(jsx_runtime.jsx)(Grid.a,{columns:2,className:"tablet or lower hidden",children:cards.length>2?rows.map((function(row,rowIndex){return Object(jsx_runtime.jsx)(Grid.a.Column,{stretched:!0,children:row.map((function(item,index){return Object(react.createElement)(PublicationCard.a,Object.assign({},item,{key:index,__source:{fileName:"/home/runner/work/volto-kitkat-frontend/volto-kitkat-frontend/src/addons/volto-eea-design-system/src/ui/RelatedContent/RelatedContent.jsx",lineNumber:26,columnNumber:21}}),Object(jsx_runtime.jsx)(PublicationCard.a.Header,{}),Object(jsx_runtime.jsx)(PublicationCard.a.Info,{description:item.description,tag:item.tag}))}))},rowIndex)})):cards.map((function(item,index){return Object(jsx_runtime.jsx)(Grid.a.Column,{stretched:!0,children:Object(jsx_runtime.jsxs)(PublicationCard.a,Object.assign({},item,{children:[Object(jsx_runtime.jsx)(PublicationCard.a.Header,{}),Object(jsx_runtime.jsx)(PublicationCard.a.Info,{description:item.description,tag:item.tag})]}))},index)}))}),Object(jsx_runtime.jsx)(Grid.a,{className:"mobile only",columns:1,children:cards.map((function(item,index){return Object(jsx_runtime.jsx)(Grid.a.Column,{children:Object(jsx_runtime.jsxs)(PublicationCard.a,Object.assign({},item,{children:[Object(jsx_runtime.jsx)(PublicationCard.a.Header,{}),Object(jsx_runtime.jsx)(PublicationCard.a.Info,{description:item.description,tag:item.tag})]}))},index)}))}),Object(jsx_runtime.jsx)(Grid.a,{className:"tablet only",children:cards.map((function(item,index){return Object(jsx_runtime.jsx)(Grid.a.Column,{tablet:cards.length%2!=0&&index===cards.length-1?"12":"6",children:Object(jsx_runtime.jsxs)(PublicationCard.a,Object.assign({},item,{children:[Object(jsx_runtime.jsx)(PublicationCard.a.Header,{}),Object(jsx_runtime.jsx)(PublicationCard.a.Info,{description:item.description,tag:item.tag})]}))},index)}))})]})})}RelatedContent.displayName="RelatedContent",RelatedContent.__docgenInfo={description:"",methods:[],displayName:"RelatedContent"};var RelatedContent_RelatedContent=RelatedContent;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/addons/volto-eea-design-system/src/ui/RelatedContent/RelatedContent.jsx"]={name:"RelatedContent",docgenInfo:RelatedContent.__docgenInfo,path:"src/addons/volto-eea-design-system/src/ui/RelatedContent/RelatedContent.jsx"});__webpack_exports__.default={title:"Components/Related Content",component:RelatedContent_RelatedContent,argTypes:{publicationCards:{description:"publication cards data",table:{type:{summary:"Object"},defaultValue:{summary:""}}}}};var Template=function(args){return Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)(RelatedContent_RelatedContent,Object.assign({},args))})};Template.displayName="Template";var DefaultEven=Template.bind({});DefaultEven.args={publicationCards:[{tag:"Publication",description:"Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.",href:"/#"},{tag:"Publication",description:"Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.",href:"/#"},{tag:"Publication",description:"Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.",href:"/#"},{tag:"Publication",description:"Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.",href:"/#"}]};var DefaultOdd=Template.bind({});DefaultOdd.args={publicationCards:[{tag:"Publication",description:"Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.",href:"/#"},{tag:"Publication",description:"Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.",href:"/#"},{tag:"Publication",description:"Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.",href:"/#"}]},DefaultEven.parameters=Object.assign({storySource:{source:"(args) => (\n  <div>\n    <RelatedContent {...args}></RelatedContent>\n  </div>\n)"}},DefaultEven.parameters),DefaultOdd.parameters=Object.assign({storySource:{source:"(args) => (\n  <div>\n    <RelatedContent {...args}></RelatedContent>\n  </div>\n)"}},DefaultOdd.parameters)}}]);