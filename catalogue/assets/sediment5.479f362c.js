const e="647",a={647:{type:"root",name:"output",x:3310.459320087526,y:-635.757607394315,width:200,height:212,layer:698,fields:{point:{kind:"static",type:"vec3",value:{x:0,y:0,z:0},internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},color:{kind:"dynamic",type:"vec3",value:{nodeId:"648"},inputLocked:!0,anchor:{size:16,x:0,y:45.035714285714285,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},dithering:{kind:"dynamic",type:"float",value:.06,anchor:{size:16,x:0,y:75.32142857142857,type:"field",active:!1,hovered:!1}},scale:{kind:"static",type:"float",value:.0020098,min:1e-5,max:.1,excludeFromFunction:!0,anchor:{size:16,x:0,y:105.60714285714286,type:"field",active:!1,hovered:!1}},speedX:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:135.89285714285714,type:"field",active:!1,hovered:!1}},speedY:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:166.17857142857142,type:"field",active:!1,hovered:!1}},speedZ:{kind:"static",type:"float",value:.05,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:196.46428571428572,type:"field",active:!1,hovered:!1}},ditheringTextureDimensions:{kind:"static",type:"vec2",value:{x:128,y:128},hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tDithering:{kind:"static",type:"sampler2D",value:{metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:"c5b409c4-9859-4332-864b-c9d2d3d7796c",name:"",image:"3cb8cf29-2576-4cab-9b78-02a208a52922",mapping:300,repeat:[1,1],offset:[0,0],center:[0,0],rotation:0,wrap:[1e3,1e3],format:1023,type:1009,encoding:3e3,minFilter:1003,magFilter:1003,anisotropy:1,flipY:!0,premultiplyAlpha:!1,unpackAlignment:4},hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"647",hovered:!1,active:!1,elevated:!1},648:{type:"hsvToRgb",x:2110.3888757733357,y:-308.216599567383,width:200.4,height:134,anchor:{size:16,x:200.4,y:67,type:"node",hovered:!1,active:!1},layer:718,fields:{hue:{kind:"dynamic",type:"float",value:{nodeId:"716_716_735_736"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:.41},saturation:{kind:"dynamic",type:"float",value:{nodeId:"716_716"},anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1},previousStaticValue:0},value:{kind:"dynamic",type:"float",value:{nodeId:"714"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:.5}},returnType:"vec3",id:"648",hovered:!1,active:!1,elevated:!1},651:{type:"wave",x:-529.3928832021162,y:-14.656212598412848,width:200,height:264,anchor:{size:16,x:200,y:132,type:"node",hovered:!1,active:!1},layer:659,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"695"},internalOptional:!0,anchor:{size:16,x:0,y:44.08333333333333,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:16,min:0,max:100,anchor:{size:16,x:0,y:73.41666666666666,type:"field",hovered:!1,active:!1},previousStaticValue:24},xAmount:{kind:"dynamic",type:"float",value:1,min:-1,max:1,anchor:{size:16,x:0,y:102.75,type:"field",hovered:!1,active:!1}},yAmount:{kind:"dynamic",type:"float",value:.02,min:-1,max:1,anchor:{size:16,x:0,y:132.08333333333331,type:"field",active:!1,hovered:!1}},zAmount:{kind:"dynamic",type:"float",value:0,min:-1,max:1,anchor:{size:16,x:0,y:161.41666666666666,type:"field",hovered:!1,active:!1}},min:{kind:"dynamic",type:"float",value:-.02,min:-1,max:1,anchor:{size:16,x:0,y:190.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:.86,min:-1,max:1,anchor:{size:16,x:0,y:220.08333333333334,type:"field",active:!1,hovered:!1}},power:{kind:"dynamic",type:"float",value:20,min:.01,max:10,anchor:{size:16,x:0,y:249.41666666666666,type:"field",active:!1,hovered:!1},previousStaticValue:20}},returnType:"float",id:"651",elevated:!1,active:!1,hovered:!1},653:{type:"combine",x:-232.0531443413262,y:145.41830000000002,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:693,fields:{operation:{kind:"choice",type:"int",value:0,choices:{add:0,mult:1,pow:2,avg:3,mod:4},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},value1:{kind:"dynamic",type:"float",value:{nodeId:"651"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},value2:{kind:"dynamic",type:"float",value:{nodeId:"651_653"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"float",id:"653",elevated:!1,active:!1,hovered:!1},655:{type:"simplex",x:-1395.273200691113,y:535.4374366815256,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:656,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",active:!1,hovered:!1}},frequency:{kind:"dynamic",type:"float",value:.3,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",active:!1,hovered:!1}},amplitude:{kind:"dynamic",type:"float",value:9.8,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",active:!1,hovered:!1}},persistance:{kind:"dynamic",type:"float",value:.5,min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",hovered:!1,active:!1}},lacunarity:{kind:"dynamic",type:"float",value:1.5,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",active:!1,hovered:!1}},octaves:{kind:"static",type:"int",value:4,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:3.9061,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",hovered:!1,active:!1},previousStaticValue:3.9061},ridge:{kind:"dynamic",type:"float",value:1,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"655",elevated:!1,active:!1,hovered:!1},656:{type:"polarDisplace",x:-1198.8626820655677,y:231.6450176901482,width:238.79999999999998,height:160,anchor:{size:16,x:238.79999999999998,y:80,type:"node",hovered:!1,active:!1},layer:706,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",active:!1,hovered:!1},previousStaticValue:{x:0,y:0,z:0}},angle1:{kind:"dynamic",type:"float",value:1.13097335529233,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:78.75,type:"field",active:!1,hovered:!1},previousStaticValue:1.13097335529233},angle2:{kind:"dynamic",type:"float",value:{nodeId:"655"},min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:110.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},radius:{kind:"dynamic",type:"float",value:.3,min:-5,max:5,anchor:{size:16,x:0,y:142.75,type:"field",hovered:!1,active:!1},previousStaticValue:.3}},returnType:"vec3",id:"656",elevated:!1,active:!1,hovered:!1},695:{type:"polarDisplace",x:-867.5689315965016,y:139.28053981646022,width:238.79999999999998,height:160,anchor:{size:16,x:238.79999999999998,y:80,type:"node",hovered:!1,active:!1},layer:691,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"656"},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},angle1:{kind:"dynamic",type:"float",value:0,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:78.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},angle2:{kind:"dynamic",type:"float",value:1,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:110.75,type:"field",hovered:!1,active:!1},previousStaticValue:1},radius:{kind:"dynamic",type:"float",value:0,min:-5,max:5,anchor:{size:16,x:0,y:142.75,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"vec3",id:"695",elevated:!1,active:!1,hovered:!1},708:{type:"clamp",x:-717.9145567092424,y:-460.09061067510646,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:646,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"653_767_768"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},min:{kind:"dynamic",type:"float",value:0,min:-1,max:1,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:1,min:-1,max:1,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"708",elevated:!1,active:!1,hovered:!1},709:{type:"simplex",x:217.94236622583702,y:-622.1800018597585,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:708,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"719"},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:1.8,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",active:!1,hovered:!1}},amplitude:{kind:"dynamic",type:"float",value:.8,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",hovered:!1,active:!1}},persistance:{kind:"dynamic",type:"float",value:{nodeId:"715"},min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",hovered:!1,active:!1},previousStaticValue:.5},lacunarity:{kind:"dynamic",type:"float",value:1,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",hovered:!1,active:!1}},octaves:{kind:"static",type:"int",value:5,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:.2098,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",hovered:!1,active:!1}},ridge:{kind:"dynamic",type:"float",value:.83017,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"709",elevated:!1,active:!1,hovered:!0},710:{type:"simplex",x:232.8741306354191,y:-298.85993565388844,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:698,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"719"},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:3.7,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",hovered:!1,active:!1}},amplitude:{kind:"dynamic",type:"float",value:1,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",hovered:!1,active:!1}},persistance:{kind:"dynamic",type:"float",value:{nodeId:"715"},min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",hovered:!1,active:!1},previousStaticValue:.5},lacunarity:{kind:"dynamic",type:"float",value:1.6,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",active:!1,hovered:!1}},octaves:{kind:"static",type:"int",value:3,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:.6094,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",active:!1,hovered:!1}},ridge:{kind:"dynamic",type:"float",value:.98002,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"710",elevated:!1,active:!1,hovered:!1},711:{type:"simplex",x:193.8162568007823,y:-967.8236545276683,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:713,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"719"},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:1.9,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",hovered:!1,active:!1}},amplitude:{kind:"dynamic",type:"float",value:3.2,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",active:!1,hovered:!1}},persistance:{kind:"dynamic",type:"float",value:{nodeId:"715"},min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",hovered:!1,active:!1},previousStaticValue:.5},lacunarity:{kind:"dynamic",type:"float",value:2,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",hovered:!1,active:!1}},octaves:{kind:"static",type:"int",value:4,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:.8092,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",active:!1,hovered:!1}},ridge:{kind:"dynamic",type:"float",value:.51049,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"711",elevated:!1,active:!1,hovered:!1},712:{type:"combine",x:553.2003345391464,y:-270.9600330334927,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:711,fields:{operation:{kind:"choice",type:"int",value:1,choices:{add:0,mult:1,pow:2,avg:3,mod:4},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},value1:{kind:"dynamic",type:"float",value:{nodeId:"709"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},value2:{kind:"dynamic",type:"float",value:{nodeId:"710"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"float",id:"712",elevated:!1,active:!1,hovered:!1},714:{type:"remap",x:1284.3965033312818,y:-183.68017101316897,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:698,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"712_712"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:{nodeId:"716"},min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:.4},mult:{kind:"dynamic",type:"float",value:.4,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1}}},returnType:"float",id:"714",elevated:!1,active:!1,hovered:!1},715:{type:"remap",x:-344.7678850335353,y:-397.4390901814783,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:710,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"708"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:1,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},mult:{kind:"dynamic",type:"float",value:-1,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1}}},returnType:"float",id:"715",elevated:!1,active:!1,hovered:!1},716:{type:"remap",x:770.3268160400058,y:209.97797702506784,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:718,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"715"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:.2,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},mult:{kind:"dynamic",type:"float",value:0,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"716",elevated:!1,active:!1,hovered:!1},719:{type:"polarDisplace",x:-253.94167425333927,y:-992.2753946558823,width:238.79999999999998,height:160,anchor:{size:16,x:238.79999999999998,y:80,type:"node",hovered:!1,active:!1},layer:698,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",active:!1,hovered:!1},previousStaticValue:{x:0,y:0,z:0}},angle1:{kind:"dynamic",type:"float",value:{nodeId:"711_717"},min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:78.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},angle2:{kind:"dynamic",type:"float",value:1.44513262065131,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:110.75,type:"field",hovered:!1,active:!1}},radius:{kind:"dynamic",type:"float",value:.1,min:-5,max:5,anchor:{size:16,x:0,y:142.75,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"719",elevated:!1,active:!1,hovered:!1},754:{type:"feedback",x:-891.0886307502308,y:-1157.9980320251184,width:200,height:82,anchor:{size:16,x:200,y:41,type:"node",hovered:!1,active:!1},layer:753,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:55.75,type:"field",active:!1,hovered:!1}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tFeedback:{kind:"static",type:"sampler2D",hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"754",elevated:!1,active:!1,hovered:!1},"651_653":{type:"wave",x:-536.3949333229776,y:270.7527682200135,width:200,height:264,anchor:{size:16,x:200,y:132,type:"node",hovered:!1,active:!1},layer:649,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"695"},internalOptional:!0,anchor:{size:16,x:0,y:44.08333333333333,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:29,min:0,max:100,anchor:{size:16,x:0,y:73.41666666666666,type:"field",active:!1,hovered:!1},previousStaticValue:48},xAmount:{kind:"dynamic",type:"float",value:.96,min:-1,max:1,anchor:{size:16,x:0,y:102.75,type:"field",hovered:!1,active:!1}},yAmount:{kind:"dynamic",type:"float",value:-1,min:-1,max:1,anchor:{size:16,x:0,y:132.08333333333331,type:"field",active:!1,hovered:!1}},zAmount:{kind:"dynamic",type:"float",value:.16,min:-1,max:1,anchor:{size:16,x:0,y:161.41666666666666,type:"field",active:!1,hovered:!1}},min:{kind:"dynamic",type:"float",value:-.02,min:-1,max:1,anchor:{size:16,x:0,y:190.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:1,min:-1,max:1,anchor:{size:16,x:0,y:220.08333333333334,type:"field",active:!1,hovered:!1}},power:{kind:"dynamic",type:"float",value:20,min:.01,max:10,anchor:{size:16,x:0,y:249.41666666666666,type:"field",active:!1,hovered:!1},previousStaticValue:20}},returnType:"float",id:"651_653",elevated:!1,active:!1,hovered:!1},"695_769":{type:"polarDisplace",x:-892.3634407320483,y:568.3833412524732,width:238.79999999999998,height:160,anchor:{size:16,x:238.79999999999998,y:80,type:"node",hovered:!1,active:!1},layer:659,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"695"},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},angle1:{kind:"dynamic",type:"float",value:5e-16,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:78.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},angle2:{kind:"dynamic",type:"float",value:{nodeId:"655"},min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:110.75,type:"field",hovered:!1,active:!1},previousStaticValue:1},radius:{kind:"dynamic",type:"float",value:2.3,min:-5,max:5,anchor:{size:16,x:0,y:142.75,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"vec3",id:"695_769",elevated:!1,active:!1,hovered:!1},"653_767_768":{type:"combine",x:-64.93319718867062,y:298.76231899162985,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:698,fields:{operation:{kind:"choice",type:"int",value:0,choices:{add:0,mult:1,pow:2,avg:3,mod:4},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},value1:{kind:"dynamic",type:"float",value:{nodeId:"653"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},value2:{kind:"dynamic",type:"float",value:{nodeId:"653_767"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"float",id:"653_767_768",elevated:!1,active:!1,hovered:!1},"651_766":{type:"wave",x:-545.6888879451717,y:576.5138324709453,width:200,height:264,anchor:{size:16,x:200,y:132,type:"node",hovered:!1,active:!1},layer:698,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"695_769"},internalOptional:!0,anchor:{size:16,x:0,y:44.08333333333333,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:15,min:0,max:100,anchor:{size:16,x:0,y:73.41666666666666,type:"field",hovered:!1,active:!1},previousStaticValue:24},xAmount:{kind:"dynamic",type:"float",value:1,min:-1,max:1,anchor:{size:16,x:0,y:102.75,type:"field",hovered:!1,active:!1}},yAmount:{kind:"dynamic",type:"float",value:.52,min:-1,max:1,anchor:{size:16,x:0,y:132.08333333333331,type:"field",active:!1,hovered:!1}},zAmount:{kind:"dynamic",type:"float",value:0,min:-1,max:1,anchor:{size:16,x:0,y:161.41666666666666,type:"field",hovered:!1,active:!1}},min:{kind:"dynamic",type:"float",value:-.04,min:-1,max:1,anchor:{size:16,x:0,y:190.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:1,min:-1,max:1,anchor:{size:16,x:0,y:220.08333333333334,type:"field",active:!1,hovered:!1}},power:{kind:"dynamic",type:"float",value:20,min:.01,max:10,anchor:{size:16,x:0,y:249.41666666666666,type:"field",active:!1,hovered:!1},previousStaticValue:20}},returnType:"float",id:"651_766",elevated:!1,active:!1,hovered:!1},"651_653_765":{type:"wave",x:-541.4867566884252,y:876.285281547501,width:200,height:264,anchor:{size:16,x:200,y:132,type:"node",hovered:!1,active:!1},layer:698,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"695_769"},internalOptional:!0,anchor:{size:16,x:0,y:44.08333333333333,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:11,min:0,max:100,anchor:{size:16,x:0,y:73.41666666666666,type:"field",active:!1,hovered:!1},previousStaticValue:48},xAmount:{kind:"dynamic",type:"float",value:-.22,min:-1,max:1,anchor:{size:16,x:0,y:102.75,type:"field",hovered:!1,active:!1}},yAmount:{kind:"dynamic",type:"float",value:-1,min:-1,max:1,anchor:{size:16,x:0,y:132.08333333333331,type:"field",active:!1,hovered:!1}},zAmount:{kind:"dynamic",type:"float",value:.16,min:-1,max:1,anchor:{size:16,x:0,y:161.41666666666666,type:"field",active:!1,hovered:!1}},min:{kind:"dynamic",type:"float",value:-.02,min:-1,max:1,anchor:{size:16,x:0,y:190.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:1.5,min:-1,max:1,anchor:{size:16,x:0,y:220.08333333333334,type:"field",active:!1,hovered:!1}},power:{kind:"dynamic",type:"float",value:20,min:.01,max:10,anchor:{size:16,x:0,y:249.41666666666666,type:"field",active:!1,hovered:!1},previousStaticValue:20}},returnType:"float",id:"651_653_765",elevated:!1,active:!1,hovered:!1},"653_767":{type:"combine",x:-237.04406417712042,y:508.9611001239642,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:698,fields:{operation:{kind:"choice",type:"int",value:0,choices:{add:0,mult:1,pow:2,avg:3,mod:4},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},value1:{kind:"dynamic",type:"float",value:{nodeId:"651_766"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},value2:{kind:"dynamic",type:"float",value:{nodeId:"651_653_765"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"float",id:"653_767",elevated:!1,active:!1,hovered:!1},"711_717":{type:"simplex",x:-587.3405711682334,y:-842.5825363280575,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:698,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"754"},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",active:!1,hovered:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:3.6,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",active:!1,hovered:!1}},amplitude:{kind:"dynamic",type:"float",value:1.9,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",active:!1,hovered:!1}},persistance:{kind:"dynamic",type:"float",value:{nodeId:"715"},min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",hovered:!1,active:!1},previousStaticValue:.5},lacunarity:{kind:"dynamic",type:"float",value:2,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",hovered:!1,active:!1}},octaves:{kind:"static",type:"int",value:5,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:1.1089,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",active:!1,hovered:!1}},ridge:{kind:"dynamic",type:"float",value:.98002,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"711_717",elevated:!1,active:!1,hovered:!1},"716_716_735":{type:"remap",x:1316.1084707371026,y:-594.0065908750731,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:707,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"715"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:{nodeId:"714"},min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1},previousStaticValue:-2},mult:{kind:"dynamic",type:"float",value:-.2,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1},previousStaticValue:.4}},returnType:"float",id:"716_716_735",elevated:!1,active:!1,hovered:!1},"712_712":{type:"combine",x:1014.334482050806,y:-449.82207960578984,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:709,fields:{operation:{kind:"choice",type:"int",value:1,choices:{add:0,mult:1,pow:2,avg:3,mod:4},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},value1:{kind:"dynamic",type:"float",value:{nodeId:"711"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},value2:{kind:"dynamic",type:"float",value:{nodeId:"712"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"float",id:"712_712",elevated:!1,active:!1,hovered:!0},"716_716_735_736":{type:"remap",x:1710.8775319993156,y:-507.95525681621336,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:715,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"716_716_735"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:1.2,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1},previousStaticValue:-2},mult:{kind:"dynamic",type:"float",value:-.2,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1},previousStaticValue:.4}},returnType:"float",id:"716_716_735_736",elevated:!1,active:!1,hovered:!1},"716_716":{type:"remap",x:796.0819271567991,y:362.04046961799463,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:718,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"715"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:.4,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},mult:{kind:"dynamic",type:"float",value:.4,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"716_716",elevated:!1,active:!1,hovered:!1}},i={x:-1102.7562721497814,y:-44.74599977233353},t=1.1988333855940922,l={rootId:e,nodes:a,position:i,zoom:t};export{l as default,a as nodes,i as position,e as rootId,t as zoom};