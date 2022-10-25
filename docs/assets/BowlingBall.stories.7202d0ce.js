var _=Object.defineProperty;var t=(e,n)=>_(e,"name",{value:n,configurable:!0});import{r,a as S,j as i}from"./jsx-runtime.75349372.js";import"./iframe.3ba41447.js";const v=t((e,n)=>Math.ceil(e/n)*n,"roundTo"),q=t(e=>v(e,20),"roundTo20"),u=t((e,n)=>Math.floor(Math.random()*(n-e+1)+e),"randomNumberBetween"),C=t(e=>u(0,e)===e,"occasionallyByFactor"),o=r.exports.forwardRef(({index:e,jump:n=!0,initiallyRandom:m=!1,onJump:l,rate:p=2e3,defaultHeight:g=50,width:y="100px",minHeight:B=30,maxHeight:f=120,occasionalityFactor:h=3},x)=>{const d=t(()=>q(u(B,f)),"getRandomHeight"),w=t(()=>C(h),"occasionally"),[s,b]=r.exports.useState(m?d():g);return r.exports.useEffect(()=>{const T=setInterval(()=>{if(n&&w()){const c=d();b(c),l==null||l(c)}},p);return()=>clearInterval(T)},[]),S("div",{ref:x,style:{height:`${s}px`,width:y,backgroundColor:e%2===0?"tan":"lightgreen",borderRadius:"50%",textAlign:"center"},children:[i("strong",{children:e}),i("span",{children:s})]})});try{o.displayName="BowlingBall",o.__docgenInfo={description:"",displayName:"BowlingBall",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},jump:{defaultValue:{value:"true"},description:"",name:"jump",required:!1,type:{name:"boolean"}},onJump:{defaultValue:null,description:"",name:"onJump",required:!1,type:{name:"((newHeight: number) => void)"}},initiallyRandom:{defaultValue:{value:"false"},description:"",name:"initiallyRandom",required:!1,type:{name:"boolean"}},rate:{defaultValue:{value:"2000"},description:"",name:"rate",required:!1,type:{name:"number"}},defaultHeight:{defaultValue:{value:"50"},description:"",name:"defaultHeight",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100px"},description:"",name:"width",required:!1,type:{name:"string"}},minHeight:{defaultValue:{value:"30"},description:"",name:"minHeight",required:!1,type:{name:"number"}},maxHeight:{defaultValue:{value:"120"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},occasionalityFactor:{defaultValue:{value:"3"},description:"",name:"occasionalityFactor",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/BowlingBall.tsx#BowlingBall"]={docgenInfo:o.__docgenInfo,name:"BowlingBall",path:"src/BowlingBall.tsx#BowlingBall"})}catch{}const I={parameters:{storySource:{source:`// test
import React from "react";
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

export const Third = Template.bind({});
Third.args = {
  index: 0,
};

export const Fourth = Template.bind({});
Fourth.args = {
  index: 0,
};`,locationsMap:{primary:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}},secondary:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}},third:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}},fourth:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"Example/BowlingBall",component:o,argTypes:{}},a=t(e=>i(o,{...e}),"Template"),H=a.bind({});H.args={index:0};const L=a.bind({});L.args={index:0};const R=a.bind({});R.args={index:0};const V=a.bind({});V.args={index:0};const M=["Primary","Secondary","Third","Fourth"];export{V as Fourth,H as Primary,L as Secondary,R as Third,M as __namedExportsOrder,I as default};
//# sourceMappingURL=BowlingBall.stories.7202d0ce.js.map
