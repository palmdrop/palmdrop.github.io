const e="710",a={710:{type:"root",name:"output",x:796.5781911203286,y:-313.5684506929702,width:200,height:212,layer:921,fields:{point:{kind:"static",type:"vec3",value:{x:0,y:0,z:0},internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},color:{kind:"dynamic",type:"vec3",value:{nodeId:"880"},inputLocked:!0,anchor:{size:16,x:0,y:45.035714285714285,type:"field",active:!1,hovered:!1},previousStaticValue:{x:0,y:0,z:0}},dithering:{kind:"dynamic",type:"float",value:0,anchor:{size:16,x:0,y:75.32142857142857,type:"field",active:!1,hovered:!1},previousStaticValue:0},scale:{kind:"static",type:"float",value:.0040096,min:1e-5,max:.1,excludeFromFunction:!0,anchor:{size:16,x:0,y:105.60714285714286,type:"field",active:!1,hovered:!1}},speedX:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:135.89285714285714,type:"field",active:!1,hovered:!1}},speedY:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:166.17857142857142,type:"field",active:!1,hovered:!1}},speedZ:{kind:"static",type:"float",value:.72,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:196.46428571428572,type:"field",active:!1,hovered:!1}},ditheringTextureDimensions:{kind:"static",type:"vec2",value:{x:128,y:128},hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tDithering:{kind:"static",type:"sampler2D",value:{metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:"475066f3-29cc-44ba-8ab5-359aa8365e08",name:"",image:"b8c10fb3-06a5-4d0e-97ac-5580af22e2ea",mapping:300,repeat:[1,1],offset:[0,0],center:[0,0],rotation:0,wrap:[1e3,1e3],format:1023,type:1009,encoding:3e3,minFilter:1003,magFilter:1003,anisotropy:1,flipY:!0,premultiplyAlpha:!1,unpackAlignment:4},hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"710",hovered:!1,active:!1,elevated:!1},711:{type:"hsvToRgb",x:-430.59241108964176,y:-142.38967342053152,width:200.4,height:134,anchor:{size:16,x:200.4,y:67,type:"node",active:!1,hovered:!1},layer:823,fields:{hue:{kind:"dynamic",type:"float",value:{nodeId:"923_923"},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1},previousStaticValue:.44},saturation:{kind:"dynamic",type:"float",value:{nodeId:"923"},anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1},previousStaticValue:.09},value:{kind:"dynamic",type:"float",value:{nodeId:"718"},anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1},previousStaticValue:.5}},returnType:"vec3",id:"711",hovered:!1,active:!1,elevated:!1},718:{type:"circles",x:-888.9865997496465,y:302.48453205298824,width:258,height:212,anchor:{size:16,x:258,y:106,type:"node",hovered:!1,active:!1},layer:880,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:45.035714285714285,type:"field",active:!1,hovered:!1},previousStaticValue:{x:0,y:0,z:0}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},radius:{kind:"dynamic",type:"float",value:70,min:0,max:1e3,anchor:{size:16,x:0,y:75.32142857142857,type:"field",active:!1,hovered:!1},previousStaticValue:70},padding:{kind:"dynamic",type:"float",value:{nodeId:"761"},min:0,max:1,anchor:{size:16,x:0,y:105.60714285714286,type:"field",active:!1,hovered:!1},previousStaticValue:.22},outsideBrightness:{kind:"dynamic",type:"float",value:0,min:0,max:1,anchor:{size:16,x:0,y:135.89285714285714,type:"field",active:!1,hovered:!1},previousStaticValue:.77},insideBrightness:{kind:"dynamic",type:"float",value:.34,min:0,max:1,anchor:{size:16,x:0,y:166.17857142857142,type:"field",active:!1,hovered:!1},previousStaticValue:1},softness:{kind:"dynamic",type:"float",value:1,min:0,max:1,anchor:{size:16,x:0,y:196.46428571428572,type:"field",active:!1,hovered:!1},previousStaticValue:1}},returnType:"float",id:"718",elevated:!1,active:!1,hovered:!1},719:{type:"feedback",x:-1636.0012435143392,y:-350.6046402948914,width:200,height:82,anchor:{size:16,x:200,y:41,type:"node",hovered:!1,active:!1},layer:878,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tFeedback:{kind:"static",type:"sampler2D",hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"719",elevated:!1,active:!1,hovered:!1},720:{type:"lerp",x:2.7874600963476612,y:-282.076803665785,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:845,fields:{value1:{kind:"dynamic",type:"vec3",value:{nodeId:"719"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},value2:{kind:"dynamic",type:"vec3",value:{nodeId:"711"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},amount:{kind:"dynamic",type:"float",value:.41,min:0,max:1,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1},previousStaticValue:.39}},returnType:"vec3",id:"720",elevated:!1,active:!1,hovered:!1},725:{type:"brightness",x:-2011.5435611141497,y:180.16086900628213,width:200.4,height:82,anchor:{size:16,x:200.4,y:41,type:"node",hovered:!1,active:!1},layer:719,fields:{source:{kind:"dynamic",type:"vec3",value:{nodeId:"719_723"},anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}}},returnType:"float",id:"725",elevated:!1,active:!1,hovered:!1},761:{type:"remap",x:-1229.6726541747114,y:345.90721835922733,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:842,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"725"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:-.2,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},mult:{kind:"dynamic",type:"float",value:{nodeId:"845"},min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:.8}},returnType:"float",id:"761",elevated:!1,active:!1,hovered:!1},845:{type:"voronoi",x:-1480.472295212093,y:492.98599588863067,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:721,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"881"},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:.3,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",hovered:!1,active:!1},previousStaticValue:.3},amplitude:{kind:"dynamic",type:"float",value:{nodeId:"955"},min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",hovered:!1,active:!1},previousStaticValue:1},persistance:{kind:"dynamic",type:"float",value:.43,min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",active:!1,hovered:!1}},lacunarity:{kind:"dynamic",type:"float",value:1.2,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",active:!1,hovered:!1},previousStaticValue:1.2},octaves:{kind:"static",type:"int",value:5,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:2.5075,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",active:!1,hovered:!1},previousStaticValue:8.8012},ridge:{kind:"dynamic",type:"float",value:.18082,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"845",elevated:!1,active:!1,hovered:!1},880:{type:"contrast",x:332.0845960557117,y:-165.62388229782917,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:880,fields:{source:{kind:"dynamic",type:"vec3",value:{nodeId:"720"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},contrast:{kind:"dynamic",type:"float",value:1.32,min:0,max:2,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},brightness:{kind:"dynamic",type:"float",value:.11,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"880",elevated:!1,active:!1,hovered:!1},881:{type:"polarDisplace",x:-1863.3789383606215,y:571.653401978851,width:238.79999999999998,height:160,anchor:{size:16,x:238.79999999999998,y:80,type:"node",hovered:!1,active:!1},layer:1065,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},angle1:{kind:"dynamic",type:"float",value:1.31946891450771,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:78.75,type:"field",hovered:!1,active:!1},previousStaticValue:-.879645943005142},angle2:{kind:"dynamic",type:"float",value:.879645943005143,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:110.75,type:"field",hovered:!1,active:!1}},radius:{kind:"dynamic",type:"float",value:{nodeId:"725"},min:-5,max:5,anchor:{size:16,x:0,y:142.75,type:"field",hovered:!1,active:!1},previousStaticValue:1}},returnType:"vec3",id:"881",elevated:!1,active:!0,hovered:!1},922:{type:"brightness",x:-1370.6477181247315,y:-231.35841073402497,width:200.4,height:82,anchor:{size:16,x:200.4,y:41,type:"node",hovered:!1,active:!1},layer:761,fields:{source:{kind:"dynamic",type:"vec3",value:{nodeId:"719"},anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}}},returnType:"float",id:"922",elevated:!1,active:!1,hovered:!1},923:{type:"remap",x:-982.5918207822981,y:134.37068999800036,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:879,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"922"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:{nodeId:"845"},min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1},previousStaticValue:0},mult:{kind:"dynamic",type:"float",value:.2,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"923",elevated:!1,active:!1,hovered:!1},955:{type:"remap",x:-1731.4289687204434,y:388.4679050748181,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:760,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"725"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:.5,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},mult:{kind:"dynamic",type:"float",value:-.5,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"955",elevated:!1,active:!1,hovered:!1},"719_723":{type:"feedback",x:-2395.1485138267476,y:124.52165471773466,width:200,height:82,anchor:{size:16,x:200,y:41,type:"node",hovered:!1,active:!1},layer:822,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tFeedback:{kind:"static",type:"sampler2D",hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"719_723",elevated:!1,active:!1,hovered:!1},"923_923":{type:"remap",x:-977.2407633114176,y:-171.44519051842087,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:954,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"725"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:0,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},mult:{kind:"dynamic",type:"float",value:.6,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:1}},returnType:"float",id:"923_923",elevated:!1,active:!1,hovered:!1}},i={x:1012.704853689681,y:-198.3228566852011},t=2.1366165774935766,l={rootId:e,nodes:a,position:i,zoom:t};export{l as default,a as nodes,i as position,e as rootId,t as zoom};