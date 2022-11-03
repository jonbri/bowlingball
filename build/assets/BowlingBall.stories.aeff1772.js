var _=Object.defineProperty;var o=(e,n)=>_(e,"name",{value:n,configurable:!0});import{r as i,a as S,j as a}from"./jsx-runtime.76aa335a.js";import"./iframe.11285374.js";const v=o((e,n)=>Math.ceil(e/n)*n,"roundTo"),q=o(e=>v(e,20),"roundTo20"),u=o((e,n)=>Math.floor(Math.random()*(n-e+1)+e),"randomNumberBetween"),C=o(e=>u(0,e)===e,"occasionallyByFactor"),t=i.exports.forwardRef(({index:e,jump:n=!0,initiallyRandom:m=!1,onJump:r,rate:p=2e3,defaultHeight:g=50,width:y="100px",minHeight:B=30,maxHeight:f=120,occasionalityFactor:h=3},x)=>{const d=o(()=>q(u(B,f)),"getRandomHeight"),b=o(()=>C(h),"occasionally"),[s,w]=i.exports.useState(m?d():g);return i.exports.useEffect(()=>{const T=setInterval(()=>{if(n&&b()){const c=d();w(c),r==null||r(c)}},p);return()=>clearInterval(T)},[]),S("div",{ref:x,style:{height:`${s}px`,width:y,backgroundColor:e%2===0?"tan":"lightgreen",borderRadius:"50%",textAlign:"center"},children:[a("strong",{children:e}),a("br",{}),a("span",{children:s})]})});try{t.displayName="BowlingBall",t.__docgenInfo={description:"",displayName:"BowlingBall",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},jump:{defaultValue:{value:"true"},description:"",name:"jump",required:!1,type:{name:"boolean"}},onJump:{defaultValue:null,description:"",name:"onJump",required:!1,type:{name:"((newHeight: number) => void)"}},initiallyRandom:{defaultValue:{value:"false"},description:"",name:"initiallyRandom",required:!1,type:{name:"boolean"}},rate:{defaultValue:{value:"2000"},description:"",name:"rate",required:!1,type:{name:"number"}},defaultHeight:{defaultValue:{value:"50"},description:"",name:"defaultHeight",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100px"},description:"",name:"width",required:!1,type:{name:"string"}},minHeight:{defaultValue:{value:"30"},description:"",name:"minHeight",required:!1,type:{name:"number"}},maxHeight:{defaultValue:{value:"120"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},occasionalityFactor:{defaultValue:{value:"3"},description:"",name:"occasionalityFactor",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/BowlingBall.tsx#BowlingBall"]={docgenInfo:t.__docgenInfo,name:"BowlingBall",path:"src/BowlingBall.tsx#BowlingBall"})}catch{}const I={parameters:{storySource:{source:`// change1
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
};`,locationsMap:{primary:{startLoc:{col:53,line:14},endLoc:{col:1,line:16},startBody:{col:53,line:14},endBody:{col:1,line:16}},secondary:{startLoc:{col:53,line:14},endLoc:{col:1,line:16},startBody:{col:53,line:14},endBody:{col:1,line:16}},third:{startLoc:{col:53,line:14},endLoc:{col:1,line:16},startBody:{col:53,line:14},endBody:{col:1,line:16}},fourth:{startLoc:{col:53,line:14},endLoc:{col:1,line:16},startBody:{col:53,line:14},endBody:{col:1,line:16}}}}},title:"Example/BowlingBall",component:t,argTypes:{}},l=o(e=>a(t,{...e}),"Template"),H=l.bind({});H.args={index:0};const L=l.bind({});L.args={index:0};const R=l.bind({});R.args={index:0};const V=l.bind({});V.args={index:0};const M=["Primary","Secondary","Third","Fourth"];export{V as Fourth,H as Primary,L as Secondary,R as Third,M as __namedExportsOrder,I as default};
//# sourceMappingURL=BowlingBall.stories.aeff1772.js.map
