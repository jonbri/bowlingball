var S=Object.defineProperty;var a=(e,n)=>S(e,"name",{value:n,configurable:!0});import{r as l,a as v,j as r}from"./jsx-runtime.6585b73e.js";import"./iframe.1a0b6fc4.js";const T=a((e,n)=>Math.ceil(e/n)*n,"roundTo"),q=a(e=>T(e,20),"roundTo20"),c=a((e,n)=>Math.floor(Math.random()*(n-e+1)+e),"randomNumberBetween"),C=a(e=>c(0,e)===e,"occasionallyByFactor"),t=l.exports.forwardRef(({index:e,jump:n=!0,initiallyRandom:u=!1,onJump:o,rate:p=2e3,defaultHeight:g=50,width:y="100px",minHeight:B=30,maxHeight:f=120,occasionalityFactor:h=3},x)=>{const i=a(()=>q(c(B,f)),"getRandomHeight"),w=a(()=>C(h),"occasionally"),[s,b]=l.exports.useState(u?i():g);return l.exports.useEffect(()=>{const _=setInterval(()=>{if(n&&w()){const d=i();b(d),o==null||o(d)}},p);return()=>clearInterval(_)},[]),v("div",{ref:x,style:{height:`${s}px`,width:y,backgroundColor:e%2===0?"tan":"lightgreen",borderRadius:"50%",textAlign:"center"},children:[r("strong",{children:e}),r("span",{children:s})]})});try{t.displayName="BowlingBall",t.__docgenInfo={description:"",displayName:"BowlingBall",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},jump:{defaultValue:{value:"true"},description:"",name:"jump",required:!1,type:{name:"boolean"}},onJump:{defaultValue:null,description:"",name:"onJump",required:!1,type:{name:"((newHeight: number) => void)"}},initiallyRandom:{defaultValue:{value:"false"},description:"",name:"initiallyRandom",required:!1,type:{name:"boolean"}},rate:{defaultValue:{value:"2000"},description:"",name:"rate",required:!1,type:{name:"number"}},defaultHeight:{defaultValue:{value:"50"},description:"",name:"defaultHeight",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100px"},description:"",name:"width",required:!1,type:{name:"string"}},minHeight:{defaultValue:{value:"30"},description:"",name:"minHeight",required:!1,type:{name:"number"}},maxHeight:{defaultValue:{value:"120"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},occasionalityFactor:{defaultValue:{value:"3"},description:"",name:"occasionalityFactor",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/BowlingBall.tsx#BowlingBall"]={docgenInfo:t.__docgenInfo,name:"BowlingBall",path:"src/BowlingBall.tsx#BowlingBall"})}catch{}const I={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BowlingBall } from "../BowlingBall";

export default {
  title: "Example/BowlingBall",
  component: BowlingBall,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BowlingBall>;

const Template: ComponentStory<typeof BowlingBall> = (args) => (
  <BowlingBall {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  index: 0,
};

export const Secondary = Template.bind({});
Secondary.args = {
  index: 0,
};
`,locationsMap:{primary:{startLoc:{col:53,line:14},endLoc:{col:1,line:16},startBody:{col:53,line:14},endBody:{col:1,line:16}},secondary:{startLoc:{col:53,line:14},endLoc:{col:1,line:16},startBody:{col:53,line:14},endBody:{col:1,line:16}}}}},title:"Example/BowlingBall",component:t,argTypes:{}},m=a(e=>r(t,{...e}),"Template"),H=m.bind({});H.args={index:0};const R=m.bind({});R.args={index:0};const L=["Primary","Secondary"];export{H as Primary,R as Secondary,L as __namedExportsOrder,I as default};
//# sourceMappingURL=BowlingBall.stories.b51e4c51.js.map
