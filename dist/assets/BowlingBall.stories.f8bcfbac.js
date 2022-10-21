var S=Object.defineProperty;var t=(e,n)=>S(e,"name",{value:n,configurable:!0});import{r,a as v,j as l}from"./jsx-runtime.a80f1737.js";import"./iframe.0d827842.js";const T=t((e,n)=>Math.ceil(e/n)*n,"roundTo"),q=t(e=>T(e,20),"roundTo20"),c=t((e,n)=>Math.floor(Math.random()*(n-e+1)+e),"randomNumberBetween"),C=t(e=>c(0,e)===e,"occasionallyByFactor"),o=r.exports.forwardRef(({index:e,jump:n=!0,initiallyRandom:u=!1,onJump:a,rate:m=2e3,defaultHeight:g=50,width:y="100px",minHeight:f=30,maxHeight:B=120,occasionalityFactor:h=3},x)=>{const i=t(()=>q(c(f,B)),"getRandomHeight"),w=t(()=>C(h),"occasionally"),[s,b]=r.exports.useState(u?i():g);return r.exports.useEffect(()=>{const _=setInterval(()=>{if(n&&w()){const d=i();b(d),a==null||a(d)}},m);return()=>clearInterval(_)},[]),v("div",{ref:x,style:{height:`${s}px`,width:y,backgroundColor:e%2===0?"tan":"lightgreen",borderRadius:"50%",textAlign:"center"},children:[l("strong",{children:e}),l("div",{children:s})]})});try{o.displayName="BowlingBall",o.__docgenInfo={description:"",displayName:"BowlingBall",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},jump:{defaultValue:{value:"true"},description:"",name:"jump",required:!1,type:{name:"boolean"}},onJump:{defaultValue:null,description:"",name:"onJump",required:!1,type:{name:"((newHeight: number) => void)"}},initiallyRandom:{defaultValue:{value:"false"},description:"",name:"initiallyRandom",required:!1,type:{name:"boolean"}},rate:{defaultValue:{value:"2000"},description:"",name:"rate",required:!1,type:{name:"number"}},defaultHeight:{defaultValue:{value:"50"},description:"",name:"defaultHeight",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100px"},description:"",name:"width",required:!1,type:{name:"string"}},minHeight:{defaultValue:{value:"30"},description:"",name:"minHeight",required:!1,type:{name:"number"}},maxHeight:{defaultValue:{value:"120"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},occasionalityFactor:{defaultValue:{value:"3"},description:"",name:"occasionalityFactor",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/BowlingBall.tsx#BowlingBall"]={docgenInfo:o.__docgenInfo,name:"BowlingBall",path:"src/BowlingBall.tsx#BowlingBall"})}catch{}const E={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BowlingBall } from "../BowlingBall";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/BowlingBall",
  component: BowlingBall,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BowlingBall>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BowlingBall> = (args) => (
  <BowlingBall {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  index: 0,
  // primary: true,
  // label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  index: 0,
};
`,locationsMap:{primary:{startLoc:{col:53,line:17},endLoc:{col:1,line:19},startBody:{col:53,line:17},endBody:{col:1,line:19}},secondary:{startLoc:{col:53,line:17},endLoc:{col:1,line:19},startBody:{col:53,line:17},endBody:{col:1,line:19}}}}},title:"Example/BowlingBall",component:o,argTypes:{}},p=t(e=>l(o,{...e}),"Template"),H=p.bind({});H.args={index:0};const M=p.bind({});M.args={index:0};const k=["Primary","Secondary"];export{H as Primary,M as Secondary,k as __namedExportsOrder,E as default};
//# sourceMappingURL=BowlingBall.stories.f8bcfbac.js.map
