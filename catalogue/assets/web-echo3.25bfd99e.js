const e="647",a={647:{type:"root",name:"output",x:1201.7879916520371,y:-162.51204298484618,width:200,height:212,layer:696,fields:{point:{kind:"static",type:"vec3",value:{x:0,y:0,z:0},internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},color:{kind:"dynamic",type:"vec3",value:{nodeId:"660"},inputLocked:!0,anchor:{size:16,x:0,y:45.035714285714285,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},dithering:{kind:"dynamic",type:"float",value:.31,anchor:{size:16,x:0,y:75.32142857142857,type:"field",active:!1,hovered:!1}},scale:{kind:"static",type:"float",value:25099e-8,min:1e-5,max:.1,excludeFromFunction:!0,anchor:{size:16,x:0,y:105.60714285714286,type:"field",active:!1,hovered:!1}},speedX:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:135.89285714285714,type:"field",active:!1,hovered:!1}},speedY:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:166.17857142857142,type:"field",active:!1,hovered:!1}},speedZ:{kind:"static",type:"float",value:.1,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:196.46428571428572,type:"field",active:!1,hovered:!1}},ditheringTextureDimensions:{kind:"static",type:"vec2",value:{x:128,y:128},hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tDithering:{kind:"static",type:"sampler2D",value:{metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:"c5b409c4-9859-4332-864b-c9d2d3d7796c",name:"",image:"3cb8cf29-2576-4cab-9b78-02a208a52922",mapping:300,repeat:[1,1],offset:[0,0],center:[0,0],rotation:0,wrap:[1e3,1e3],format:1023,type:1009,encoding:3e3,minFilter:1003,magFilter:1003,anisotropy:1,flipY:!0,premultiplyAlpha:!1,unpackAlignment:4},hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"647",hovered:!1,active:!0,elevated:!1},648:{type:"hsvToRgb",x:97.05490968558289,y:-37.23781247663027,width:200.4,height:134,anchor:{size:16,x:200.4,y:67,type:"node",hovered:!1,active:!1},layer:657,fields:{hue:{kind:"dynamic",type:"float",value:.29,anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:.74},saturation:{kind:"dynamic",type:"float",value:.17,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1},previousStaticValue:.28},value:{kind:"dynamic",type:"float",value:{nodeId:"653"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:.5}},returnType:"vec3",id:"648",hovered:!1,active:!1,elevated:!1},651:{type:"wave",x:-496.4119485926109,y:-111.33771901323571,width:200,height:264,anchor:{size:16,x:200,y:132,type:"node",hovered:!1,active:!1},layer:646,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"695"},internalOptional:!0,anchor:{size:16,x:0,y:44.08333333333333,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:31,min:0,max:100,anchor:{size:16,x:0,y:73.41666666666666,type:"field",hovered:!1,active:!1},previousStaticValue:24},xAmount:{kind:"dynamic",type:"float",value:1,min:-1,max:1,anchor:{size:16,x:0,y:102.75,type:"field",hovered:!1,active:!1}},yAmount:{kind:"dynamic",type:"float",value:.02,min:-1,max:1,anchor:{size:16,x:0,y:132.08333333333331,type:"field",active:!1,hovered:!1}},zAmount:{kind:"dynamic",type:"float",value:0,min:-1,max:1,anchor:{size:16,x:0,y:161.41666666666666,type:"field",hovered:!1,active:!1}},min:{kind:"dynamic",type:"float",value:-.02,min:-1,max:1,anchor:{size:16,x:0,y:190.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:1,min:-1,max:1,anchor:{size:16,x:0,y:220.08333333333334,type:"field",active:!1,hovered:!1}},power:{kind:"dynamic",type:"float",value:40,min:.01,max:10,anchor:{size:16,x:0,y:249.41666666666666,type:"field",active:!1,hovered:!1},previousStaticValue:20}},returnType:"float",id:"651",elevated:!1,active:!1,hovered:!1},653:{type:"combine",x:-139.9236250075523,y:174.46692485650573,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:651,fields:{operation:{kind:"choice",type:"int",value:0,choices:{add:0,mult:1,pow:2,avg:3,mod:4},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},value1:{kind:"dynamic",type:"float",value:{nodeId:"651"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},value2:{kind:"dynamic",type:"float",value:{nodeId:"651_653"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"float",id:"653",elevated:!1,active:!1,hovered:!1},655:{type:"simplex",x:-1466.667702264675,y:-126.23869501015682,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:694,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",active:!1,hovered:!1}},frequency:{kind:"dynamic",type:"float",value:.3,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",active:!1,hovered:!1}},amplitude:{kind:"dynamic",type:"float",value:8.4,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",active:!1,hovered:!1}},persistance:{kind:"dynamic",type:"float",value:.5,min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",hovered:!1,active:!1}},lacunarity:{kind:"dynamic",type:"float",value:1.7,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",active:!1,hovered:!1}},octaves:{kind:"static",type:"int",value:4,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:1.3087,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",hovered:!1,active:!1},previousStaticValue:3.9061},ridge:{kind:"dynamic",type:"float",value:1,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"655",elevated:!1,active:!1,hovered:!1},656:{type:"polarDisplace",x:-1072.3080266935397,y:-239.85952371571807,width:238.79999999999998,height:160,anchor:{size:16,x:238.79999999999998,y:80,type:"node",hovered:!1,active:!1},layer:693,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"697"},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",active:!1,hovered:!1},previousStaticValue:{x:0,y:0,z:0}},angle1:{kind:"dynamic",type:"float",value:-.942477796076938,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:78.75,type:"field",active:!1,hovered:!1},previousStaticValue:-.942477796076938},angle2:{kind:"dynamic",type:"float",value:{nodeId:"655"},min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:110.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},radius:{kind:"dynamic",type:"float",value:.6,min:-5,max:5,anchor:{size:16,x:0,y:142.75,type:"field",hovered:!1,active:!1},previousStaticValue:.6}},returnType:"vec3",id:"656",elevated:!1,active:!1,hovered:!1},657:{type:"feedback",x:-135.87405732692133,y:-297.73153819770044,width:200,height:82,anchor:{size:16,x:200,y:41,type:"node",hovered:!1,active:!1},layer:656,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"656"},internalOptional:!0,anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tFeedback:{kind:"static",type:"sampler2D",hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"657",elevated:!1,active:!1,hovered:!1},659:{type:"lerp",x:521.2638652840129,y:-208.27461278249487,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:649,fields:{value1:{kind:"dynamic",type:"vec3",value:{nodeId:"657"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},value2:{kind:"dynamic",type:"vec3",value:{nodeId:"648"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},amount:{kind:"dynamic",type:"float",value:.51,min:0,max:1,anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1}}},returnType:"vec3",id:"659",elevated:!1,active:!1,hovered:!1},660:{type:"contrast",x:849.3648076376697,y:-170.3410667700121,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:659,fields:{source:{kind:"dynamic",type:"vec3",value:{nodeId:"659"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},contrast:{kind:"dynamic",type:"float",value:2,min:0,max:2,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},brightness:{kind:"dynamic",type:"float",value:.45,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"660",elevated:!1,active:!1,hovered:!1},693:{type:"brightness",x:-1254.5396359328718,y:390.14118497956684,width:200.4,height:82,anchor:{size:16,x:200.4,y:41,type:"node",hovered:!1,active:!1},layer:694,fields:{source:{kind:"dynamic",type:"vec3",value:{nodeId:"657_689"},anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}}},returnType:"float",id:"693",elevated:!1,active:!1,hovered:!1},695:{type:"polarDisplace",x:-891.5429619457423,y:92.04855256709516,width:238.79999999999998,height:160,anchor:{size:16,x:238.79999999999998,y:80,type:"node",hovered:!1,active:!1},layer:691,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"656"},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},angle1:{kind:"dynamic",type:"float",value:-.879645943005142,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:78.75,type:"field",hovered:!1,active:!1},previousStaticValue:-.879645943005142},angle2:{kind:"dynamic",type:"float",value:{nodeId:"693"},min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:110.75,type:"field",hovered:!1,active:!1},previousStaticValue:1},radius:{kind:"dynamic",type:"float",value:-.1,min:-5,max:5,anchor:{size:16,x:0,y:142.75,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"vec3",id:"695",elevated:!1,active:!1,hovered:!1},697:{type:"displace",x:-1405.107152728691,y:-447.5998268447438,width:200,height:186,anchor:{size:16,x:200,y:93,type:"node",hovered:!1,active:!1},layer:647,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:45.75,type:"field",active:!1,hovered:!1}},x:{kind:"dynamic",type:"float",value:1.7,min:-5,max:5,anchor:{size:16,x:0,y:76.75,type:"field",active:!1,hovered:!1}},y:{kind:"dynamic",type:"float",value:4,min:-5,max:5,anchor:{size:16,x:0,y:107.75,type:"field",hovered:!1,active:!1}},z:{kind:"dynamic",type:"float",value:0,min:-5,max:5,anchor:{size:16,x:0,y:138.75,type:"field",hovered:!1,active:!1}},amount:{kind:"dynamic",type:"float",value:.61,anchor:{size:16,x:0,y:169.75,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"697",elevated:!1,active:!1,hovered:!1},"657_689":{type:"feedback",x:-1529.8967920258306,y:337.07440317422356,width:200,height:82,anchor:{size:16,x:200,y:41,type:"node",hovered:!1,active:!1},layer:655,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tFeedback:{kind:"static",type:"sampler2D",hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"657_689",elevated:!1,active:!1,hovered:!1},"651_653":{type:"wave",x:-499.2013718954171,y:375.98622981133303,width:200,height:264,anchor:{size:16,x:200,y:132,type:"node",hovered:!1,active:!1},layer:690,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"695"},internalOptional:!0,anchor:{size:16,x:0,y:44.08333333333333,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:44,min:0,max:100,anchor:{size:16,x:0,y:73.41666666666666,type:"field",active:!1,hovered:!1},previousStaticValue:78},xAmount:{kind:"dynamic",type:"float",value:.96,min:-1,max:1,anchor:{size:16,x:0,y:102.75,type:"field",hovered:!1,active:!1}},yAmount:{kind:"dynamic",type:"float",value:-1,min:-1,max:1,anchor:{size:16,x:0,y:132.08333333333331,type:"field",active:!1,hovered:!1}},zAmount:{kind:"dynamic",type:"float",value:.16,min:-1,max:1,anchor:{size:16,x:0,y:161.41666666666666,type:"field",active:!1,hovered:!1}},min:{kind:"dynamic",type:"float",value:-.02,min:-1,max:1,anchor:{size:16,x:0,y:190.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:1.5,min:-1,max:1,anchor:{size:16,x:0,y:220.08333333333334,type:"field",active:!1,hovered:!1}},power:{kind:"dynamic",type:"float",value:100,min:.01,max:10,anchor:{size:16,x:0,y:249.41666666666666,type:"field",active:!1,hovered:!1},previousStaticValue:20}},returnType:"float",id:"651_653",elevated:!1,active:!1,hovered:!1}},i={x:-453.3058921097506,y:147.03121266245597},t=1.6269191581655562,l={rootId:e,nodes:a,position:i,zoom:t};export{l as default,a as nodes,i as position,e as rootId,t as zoom};