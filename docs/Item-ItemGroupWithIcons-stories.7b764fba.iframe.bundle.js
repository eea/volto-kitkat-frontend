(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./node_modules/semantic-ui-react/dist/es/views/Item/Item.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var esm_extends=__webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/esm/extends.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),lib=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/index.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),factories=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/factories.js");function ItemHeader(props){var children=props.children,className=props.className,content=props.content,classes=Object(clsx_m.default)("header",className),rest=Object(getUnhandledProps.a)(ItemHeader,props),ElementType=Object(getElementType.a)(ItemHeader,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.b.isNil(children)?content:children)}ItemHeader.handledProps=["as","children","className","content"],ItemHeader.propTypes={},ItemHeader.create=Object(factories.h)(ItemHeader,(function(content){return{content:content}}));var Item_ItemHeader=ItemHeader;function ItemDescription(props){var children=props.children,className=props.className,content=props.content,classes=Object(clsx_m.default)("description",className),rest=Object(getUnhandledProps.a)(ItemDescription,props),ElementType=Object(getElementType.a)(ItemDescription,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.b.isNil(children)?content:children)}ItemDescription.handledProps=["as","children","className","content"],ItemDescription.propTypes={},ItemDescription.create=Object(factories.h)(ItemDescription,(function(content){return{content:content}}));var Item_ItemDescription=ItemDescription;function ItemExtra(props){var children=props.children,className=props.className,content=props.content,classes=Object(clsx_m.default)("extra",className),rest=Object(getUnhandledProps.a)(ItemExtra,props),ElementType=Object(getElementType.a)(ItemExtra,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.b.isNil(children)?content:children)}ItemExtra.handledProps=["as","children","className","content"],ItemExtra.propTypes={},ItemExtra.create=Object(factories.h)(ItemExtra,(function(content){return{content:content}}));var Item_ItemExtra=ItemExtra;function ItemMeta(props){var children=props.children,className=props.className,content=props.content,classes=Object(clsx_m.default)("meta",className),rest=Object(getUnhandledProps.a)(ItemMeta,props),ElementType=Object(getElementType.a)(ItemMeta,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.b.isNil(children)?content:children)}ItemMeta.handledProps=["as","children","className","content"],ItemMeta.propTypes={},ItemMeta.create=Object(factories.h)(ItemMeta,(function(content){return{content:content}}));var Item_ItemMeta=ItemMeta;function ItemContent(props){var children=props.children,className=props.className,content=props.content,description=props.description,extra=props.extra,header=props.header,meta=props.meta,verticalAlign=props.verticalAlign,classes=Object(clsx_m.default)(Object(classNameBuilders.f)(verticalAlign),"content",className),rest=Object(getUnhandledProps.a)(ItemContent,props),ElementType=Object(getElementType.a)(ItemContent,props);return lib.b.isNil(children)?react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),Item_ItemHeader.create(header,{autoGenerateKey:!1}),Item_ItemMeta.create(meta,{autoGenerateKey:!1}),Item_ItemDescription.create(description,{autoGenerateKey:!1}),Item_ItemExtra.create(extra,{autoGenerateKey:!1}),content):react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),children)}ItemContent.handledProps=["as","children","className","content","description","extra","header","meta","verticalAlign"],ItemContent.propTypes={};var Item_ItemContent=ItemContent,objectWithoutPropertiesLoose=__webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),map=__webpack_require__("./node_modules/lodash/map.js"),map_default=__webpack_require__.n(map);function ItemGroup(props){var children=props.children,className=props.className,content=props.content,divided=props.divided,items=props.items,link=props.link,relaxed=props.relaxed,unstackable=props.unstackable,classes=Object(clsx_m.default)("ui",Object(classNameBuilders.a)(divided,"divided"),Object(classNameBuilders.a)(link,"link"),Object(classNameBuilders.a)(unstackable,"unstackable"),Object(classNameBuilders.b)(relaxed,"relaxed"),"items",className),rest=Object(getUnhandledProps.a)(ItemGroup,props),ElementType=Object(getElementType.a)(ItemGroup,props);if(!lib.b.isNil(children))return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),children);if(!lib.b.isNil(content))return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),content);var itemsJSX=map_default()(items,(function(item){var childKey=item.childKey,itemProps=Object(objectWithoutPropertiesLoose.a)(item,["childKey"]),finalKey=null!=childKey?childKey:[itemProps.content,itemProps.description,itemProps.header,itemProps.meta].join("-");return react_default.a.createElement(Item_Item,Object(esm_extends.a)({},itemProps,{key:finalKey}))}));return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),itemsJSX)}ItemGroup.handledProps=["as","children","className","content","divided","items","link","relaxed","unstackable"],ItemGroup.propTypes={};var Item_ItemGroup=ItemGroup,Image=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js");function ItemImage(props){var size=props.size,rest=Object(getUnhandledProps.a)(ItemImage,props);return react_default.a.createElement(Image.a,Object(esm_extends.a)({},rest,{size:size,ui:!!size,wrapped:!0}))}ItemImage.handledProps=["size"],ItemImage.propTypes={},ItemImage.create=Object(factories.h)(ItemImage,(function(src){return{src:src}}));var Item_ItemImage=ItemImage;function Item(props){var children=props.children,className=props.className,content=props.content,description=props.description,extra=props.extra,header=props.header,image=props.image,meta=props.meta,classes=Object(clsx_m.default)("item",className),rest=Object(getUnhandledProps.a)(Item,props),ElementType=Object(getElementType.a)(Item,props);return lib.b.isNil(children)?react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),Item_ItemImage.create(image,{autoGenerateKey:!1}),react_default.a.createElement(Item_ItemContent,{content:content,description:description,extra:extra,header:header,meta:meta})):react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),children)}Item.handledProps=["as","children","className","content","description","extra","header","image","meta"],Item.Content=Item_ItemContent,Item.Description=Item_ItemDescription,Item.Extra=Item_ItemExtra,Item.Group=Item_ItemGroup,Item.Header=Item_ItemHeader,Item.Image=Item_ItemImage,Item.Meta=Item_ItemMeta,Item.propTypes={};var Item_Item=__webpack_exports__.a=Item},"./src/addons/volto-eea-design-system/src/ui/Item/ItemGroupWithIcons.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultItem",(function(){return DefaultItem})),__webpack_require__.d(__webpack_exports__,"DefaultGroup",(function(){return DefaultGroup}));__webpack_require__("./node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/Item.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_globe_eco_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/globe-eco.svg"),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_globe_eco_svg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_globe_eco_svg__WEBPACK_IMPORTED_MODULE_4__),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_sustainable_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/sustainable.svg"),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_sustainable_svg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_sustainable_svg__WEBPACK_IMPORTED_MODULE_5__),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_data_analytics_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/data-analytics.svg"),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_data_analytics_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_data_analytics_svg__WEBPACK_IMPORTED_MODULE_6__),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_network_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/network.svg"),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_network_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_network_svg__WEBPACK_IMPORTED_MODULE_7__),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_knowledge_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/knowledge.svg"),_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_knowledge_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_knowledge_svg__WEBPACK_IMPORTED_MODULE_8__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js");function SingleItem(_ref){var image=_ref.image,imageSize=_ref.imageSize,description=_ref.description,verticalAlign=_ref.verticalAlign;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Image,{className:`ui ${imageSize}`,src:image,alt:"item image"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Content,{verticalAlign:verticalAlign,children:description})]})}__webpack_exports__.default={title:"Components/Item/Item group with icons",component:semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{}},SingleItem.displayName="SingleItem";var DefaultItem=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Group,{unstackable:!0,className:"row",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SingleItem,Object.assign({},args))})})};function ItemGroup(_ref2){var imageSize=_ref2.imageSize,verticalAlign=_ref2.verticalAlign,ColumnLeft=_ref2.ColumnLeft,ColumnRight=_ref2.ColumnRight;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Row,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Column,{mobile:12,tablet:6,computer:6,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Group,{unstackable:!0,className:"row",children:ColumnLeft.map((function(item){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SingleItem,Object.assign({},item,{imageSize:imageSize,verticalAlign:verticalAlign}),item.childKey)}))})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Column,{mobile:12,tablet:6,computer:6,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Group,{unstackable:!0,className:"row",children:ColumnRight.map((function(item){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SingleItem,Object.assign({},item,{imageSize:imageSize,verticalAlign:verticalAlign}),item.childKey)}))})})]})})})}DefaultItem.displayName="DefaultItem",DefaultItem.args={imageSize:"default",verticalAlign:"middle",image:_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_globe_eco_svg__WEBPACK_IMPORTED_MODULE_4___default.a,description:"Support Europe’s transition to a sustainable future with evidence-based knowledge and data."},DefaultItem.argTypes={imageSize:{control:{type:"select"},options:["mini","tile","tiny","small"],description:"Content can specify its vertical alignment",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},verticalAlign:{control:{type:"select"},options:["top","middle","bottom"],description:"An image can vary in size",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},image:{description:"Path or Url of the image",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},description:{description:"Item content description",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}}},ItemGroup.displayName="ItemGroup";var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ItemGroup,Object.assign({},args))};Template.displayName="Template";var DefaultGroup=Template.bind({});DefaultGroup.args={imageSize:"mini",verticalAlign:"middle",ColumnLeft:[{childKey:0,image:_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_globe_eco_svg__WEBPACK_IMPORTED_MODULE_4___default.a,description:"Support Europe’s transition to a sustainable future with evidence-based knowledge and data."},{childKey:1,image:_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_sustainable_svg__WEBPACK_IMPORTED_MODULE_5___default.a,description:"Supply input on solutions to the sustainability challenges of today – and tomorrow.  "},{childKey:2,image:_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_data_analytics_svg__WEBPACK_IMPORTED_MODULE_6___default.a,description:"Leverage the data and technology to support the EU’s decision-making processes concerning the environment and climate"}],ColumnRight:[{childKey:0,image:_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_network_svg__WEBPACK_IMPORTED_MODULE_7___default.a,description:"Build stronger networks and partnerships with state and regional governments and organisations."},{childKey:1,image:_eeacms_volto_eea_design_system_theme_themes_eea_assets_images_Svg_knowledge_svg__WEBPACK_IMPORTED_MODULE_8___default.a,description:"Strengthen the EU’s knowledge capacity and help secure the resources needed to create a sustainable Europe."}]},DefaultGroup.argTypes={imageSize:{control:{type:"select"},options:["mini","tile","tiny","small"],description:"Content can specify its vertical alignment",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},verticalAlign:{control:{type:"select"},options:["top","middle","bottom"],description:"An image can vary in size",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}}},DefaultItem.parameters=Object.assign({storySource:{source:'(args) => (\n  <Container>\n    <Item.Group unstackable className="row">\n      <SingleItem {...args}></SingleItem>\n    </Item.Group>\n  </Container>\n)'}},DefaultItem.parameters),DefaultGroup.parameters=Object.assign({storySource:{source:"(args) => <ItemGroup {...args}></ItemGroup>"}},DefaultGroup.parameters),DefaultItem.__docgenInfo={description:"",methods:[],displayName:"DefaultItem"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/addons/volto-eea-design-system/src/ui/Item/ItemGroupWithIcons.stories.js"]={name:"DefaultItem",docgenInfo:DefaultItem.__docgenInfo,path:"src/addons/volto-eea-design-system/src/ui/Item/ItemGroupWithIcons.stories.js"})},"./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/data-analytics.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/data-analytics.89230c6b.svg"},"./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/globe-eco.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/globe-eco.5f4f2b0c.svg"},"./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/knowledge.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/knowledge.713ad975.svg"},"./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/network.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/network.53a10b88.svg"},"./src/addons/volto-eea-design-system/theme/themes/eea/assets/images/Svg/sustainable.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/sustainable.cb0a2386.svg"}}]);