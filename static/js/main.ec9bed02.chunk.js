(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{167:function(e,t,a){e.exports=a(353)},172:function(e,t,a){},173:function(e,t,a){},352:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyAtSFIF7j6fP-MFqpupRBsJGvqD_WQhnjY","authDomain":"covid19-ba97a.firebaseapp.com","databaseURL":"https://covid19-ba97a.firebaseio.com","projectId":"covid19-ba97a","storageBucket":"covid19-ba97a.appspot.com","messagingSenderId":"335262016556","appId":"1:335262016556:web:5a010ee87394bb7c7a9d89","measurementId":"G-ZFWEGKZ4BT"}')},353:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(48),l=a.n(c),o=(a(172),a(173),function(e){var t=e.children;return r.a.createElement("div",{className:"header"},t)}),i=a(7),s=["europe","asia","north america","south america","total:"],u=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],u=l[1],d=Object(n.useState)("active"),m=Object(i.a)(d,2),f=m[0],h=m[1],v=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=setTimeout((function(){c(r+1)}),e);return function(){return clearTimeout(t)}}),[e,r]),r}(36e5),E=Object(n.useState)(null),b=Object(i.a)(E,2),p=b[0],y=b[1],g=Object(n.useState)(null),j=Object(i.a)(g,2),w=j[0],O=j[1],S=Object(n.useCallback)((function(){return fetch("https://coronavirus-19-api.herokuapp.com/countries/").then((function(e){return e.json()})).then(function(e){return function(t){return t.filter((function(t){return"world"===t.country.toLowerCase()?("function"===typeof e&&e(t),!1):0!==t.country.length&&!s.includes(t.country.toLowerCase())}))}}(O)).then(r).then((function(){return p&&y(null)})).catch(function(e){return function(t){console.log(t.toString())||e("The API temporary unavailable ")}}(y))}),[p]);return Object(n.useEffect)((function(){S()}),[S,v]),{error:p,cards:a,setCards:r,search:o,setSearch:u,sort:f,setSort:h,world:w,sortedCards:function(e){var t=e.cards,a=e.search,n=e.sort;return(a.length?t.filter((function(e){return e.country.match(new RegExp(a,"i"))})):t).sort((function(e,t){return e[n]>t[n]?-1:t[n]>e[n]?1:0}))}({cards:a,search:o,sort:f})}},d=["active","cases","critical","deaths","recovered","todayCases","todayDeaths"],m=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},f=function(e){var t=e.world,a=Object(n.useRef)(null),c=Object(n.useState)(0),l=Object(i.a)(c,2),o=l[0],s=l[1],u=Object(n.useState)(window.outerWidth),f=Object(i.a)(u,2),h=f[0],v=f[1];return Object(n.useEffect)((function(){var e=function(){v(window.outerWidth),s(0)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){return s((e=o,(Math.abs(e)>h?-1*e:e)+1));var e}),20);return function(){return clearTimeout(e)}}),[o,h]),t?r.a.createElement("div",{className:"worldCard"},r.a.createElement("div",{className:"world worldTitle"}),r.a.createElement("ul",{ref:a},d.map((function(e){return r.a.createElement("li",{style:{left:"".concat(-o,"px")},key:e},"".concat(m(e),": ").concat(t&&t[e]))})))):null},h=function(){return r.a.createElement("div",{className:"main-title"},r.a.createElement("div",null,"Covid-19 Live Dashboard"),r.a.createElement("div",{className:"sub-title"},"by ",r.a.createElement("a",{href:"https://github.com/nudelx"},"Nudelman Alex")),r.a.createElement("div",{className:"sub-title-2"},"DataSource:"," ",r.a.createElement("a",{href:"https://www.worldometers.info"},"www.worldometers.info")," with"," ",r.a.createElement("a",{href:"https://github.com/javieraviles/covidAPI"},"API")," by"," ",r.a.createElement("a",{href:"https://github.com/javieraviles"},"Javier Aviles")))},v=[{label:"Live",id:"live",icon:"\u26a1\ufe0f"},{label:"Graph",id:"graph",icon:"\ud83d\udcc8"},{label:"Prediction",id:"prediction",icon:"\ud83e\uddd9\ud83c\udffc\u200d\u2642\ufe0f"}],E=function(e){var t=e.tab,a=e.setTabs,n=e.tabs;return r.a.createElement("ul",{className:"tabs"},n.map((function(e){return r.a.createElement("li",{key:e.id,id:e.id,onClick:function(e){return a(e.target.id)},className:t===e.id?"active":""},"".concat(e.icon," ").concat(e.label))})))},b=function(e){var t=e.error;return r.a.createElement("div",null,r.a.createElement("div",{className:"fog"}),r.a.createElement("div",{className:"error"},r.a.createElement("div",{className:"errorMsg"},t)))},p=function(e){var t=e.onChangeSearch,a=e.search,n=e.onChangeSort;return r.a.createElement("div",{className:"tools"},r.a.createElement("div",{className:"search"},r.a.createElement("label",{htmlFor:"search"},"Search"),r.a.createElement("input",{placeholder:"...",id:"search",name:"search",onChange:function(e){e.preventDefault(),t(e.target.value)},value:a})),r.a.createElement("div",{className:"sort"},r.a.createElement("label",{htmlFor:"sort"},"Sort"),r.a.createElement("select",{id:"sort",onChange:function(e){return n(e.target.value)}},d.map((function(e){return r.a.createElement("option",{key:e,value:e},m(e))})))))},y=function(e){var t=e.country,a=e.index,c=Object(n.useState)("#"),l=Object(i.a)(c,2),o=l[0],s=l[1];return Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/name/".concat("UK"===t?"GB":t,"?fields=name;flag")).then((function(e){return e.json()})).then((function(e){return e[0]&&s(e[0].flag)}))}),[t]),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"title"},r.a.createElement("div",null,a),r.a.createElement("div",{className:"flagHolder"},r.a.createElement("div",{className:"flag ".concat("world"===t.toLowerCase()?"world":"")},"#"!==o?r.a.createElement("img",{width:"30",height:"25",alt:t,src:o}):null),r.a.createElement("div",null,t))),r.a.createElement("div",{className:"body"},r.a.createElement("ul",null,d.map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",null,"".concat(m(t),":")," "),r.a.createElement("span",null,e[t]))})))))},g=a(8),j=function(e){var t=e.x,a=e.y,n=e.width,c=e.value;return r.a.createElement("g",null,r.a.createElement("text",{x:t+n+25,y:a+10,fill:"#ccc",textAnchor:"middle",dominantBaseline:"middle"},c))},w=function(e){var t=e.data,a=e.sortedKey,n=30*t.length,c=n<100?100:n;return r.a.createElement("div",{className:"chart"},r.a.createElement(g.e,{layout:"vertical",key:(new Date).getTime(),width:900,height:c,data:t,margin:{top:10,right:80,bottom:20,left:20}},r.a.createElement(g.j,{type:"number",verticalAlign:"top",orientation:"top"}),r.a.createElement(g.k,{dataKey:"country",type:"category",interval:0}),r.a.createElement(g.i,null),r.a.createElement(g.g,{verticalAlign:"top",align:"right"}),r.a.createElement(g.a,{type:"monotone",dataKey:"deaths",fill:"#e74c3c",stroke:"#c0392b"}),r.a.createElement(g.c,{dataKey:a,barSize:100,fill:"#2980b9"},r.a.createElement(g.f,{dataKey:a,content:j})),r.a.createElement(g.h,{type:"monotone",dataKey:"cases",stroke:"#27ae60"})))},O=a(142),S=a(76),N=["as","country","city","countryCode","isp","region","regionName","timezone"],C=function(){var e=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("http://ip-api.com/json").then((function(e){return e.json()})).then(r)}),[]),{location:a,setLocation:r}}().location;return e&&r.a.createElement("div",{className:"location"},r.a.createElement("div",{className:"locationBody"},r.a.createElement("ul",{className:"locationList"},N.map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{className:"wide-title"},"".concat(m(t),":")," "),r.a.createElement("span",null,e[t]))})))))},k=a(143),A=function(e){var t=e.options,a=e.index,c=e.name,l=e.onChange,o=Object(n.useState)(null),s=Object(i.a)(o,2),u=s[0],d=s[1],m=Object(n.useState)(null),f=Object(i.a)(m,2),h=f[0],v=f[1],E=Object(n.useState)(null),b=Object(i.a)(E,2),p=b[0],y=b[1],g={width:"350px",textAlign:"center",display:"inline-block"},j=Object(n.useCallback)((function(e){"Escape"===e.key&&u&&(d(!1),y(null))}),[u]),w=p&&p.length?t.filter((function(e){return e.country.match(new RegExp(p,"i"))})):t;return Object(n.useEffect)((function(){return document.addEventListener("keydown",j,!1),function(){return document.removeEventListener("keydown",j,!1)}}),[j]),r.a.createElement("div",{className:"dropDown",style:g},r.a.createElement("div",{className:"inputHolder",style:Object(k.a)({},g,{whiteSpace:"nowrap"})},r.a.createElement("input",{style:{width:"100%"},placeholder:"Select a Country or Start Typing ...",className:"input",onChange:function(e){y(e.target.value),h&&v(null),!u&&d(!0)},value:h&&h[c]||p||""}),r.a.createElement("i",{className:"button",onClick:function(){d(!u)}})),r.a.createElement("div",{className:"menu",style:{display:u?"block":"none"}},r.a.createElement("ul",null,w&&w.map((function(e){return r.a.createElement("li",{onClick:function(e){return function(e){var n=t.filter((function(t){return t[a]===e.id})),r=n.length&&n.pop();v(r),d(!1),y(null),"function"===typeof l&&l(r)}(e.target)},id:e[a],key:e[a]},e[c])})))))},x=["#1abc9c","#3498db","#9b59b6","#e67e22","#c0392b","#f1c40f","#60a3bc","#3c6382","#0c2461","#079992","#f6b93b","#60a3bc","#eb2f06","#6a89cc","#D980FA","#C4E538","#FFC312"];var K=function(e){var t=e.data,a=e.title,n=e.dataKeys;if(console.log("DATA",t),!t)return null;var c=.7*window.screen.width;return c=c<500?500:c,console.log("graphData",t),r.a.createElement("div",{className:"chart chartCenter chartShadow"},r.a.createElement("div",{className:"chartTitle"},a),r.a.createElement(g.b,{width:c,height:400,data:t.data,margin:{top:10,right:30,left:0,bottom:40}},r.a.createElement(g.g,{verticalAlign:"top",align:"right"}),r.a.createElement(g.j,{dataKey:"date",interval:0,angle:60,padding:{right:10},dy:30,tick:{fontSize:9}}),r.a.createElement(g.k,{interval:0}),r.a.createElement(g.i,null),r.a.createElement(g.d,{strokeDasharray:"2 2",stroke:"#062d3d"}),n.map((function(e){var t,a=x[(t=x.length,Math.floor(Math.random()*Math.floor(t)))];return r.a.createElement(g.a,{key:e,fillOpacity:"0.3",type:"monotone",dataKey:e,stackId:"1",stroke:a,fill:a})}))))},T=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),s=o[0],u=o[1];Object(n.useEffect)((function(){S.default.database().ref().child("data/prediction").on("value",(function(e){c(e.val().map((function(e){var t={confidence:e.confidence,country:e.country,update:e.update};return t.data=e.growth.reduce((function(t,a,n){return[].concat(Object(O.a)(t),[{growth:a,trend:e.trend[n],date:e.dates[n],cases:e.cases[n],daily:e.daily[n]}])}),[]),t})))}))}),[]),console.log("render prediction",a),console.log("selected for prediction",s);var d={growth:["growth","trend"],daily:["daily"],cases:["cases"]};if(!a)return r.a.createElement("div",{className:"loader"},"Loading ...");var m=s?a.filter((function(e){return e.country===s.country}))[0]:a[0];return r.a.createElement("div",{className:"predictionBoard"},r.a.createElement("div",{className:"dropHolder"},r.a.createElement(A,{options:a,index:"country",name:"country",onChange:u})),r.a.createElement("ul",{className:"chartList"},r.a.createElement("li",null,r.a.createElement(K,{data:m,dataKeys:d.growth,country:m.country,title:"".concat(m.country," - ").concat(d.growth.join(" ")," Prediction")})),r.a.createElement("li",null,r.a.createElement(K,{data:m,country:m.country,dataKeys:d.daily,title:"".concat(m.country," - ").concat(d.daily.join(" "))})),r.a.createElement("li",null,r.a.createElement(K,{data:m,dataKeys:d.cases,title:"".concat(m.country," - ").concat(d.cases.join(" "))}))),r.a.createElement(C,null))},L={live:function(e){return e.sortedCards.map((function(e,t){return r.a.createElement(y,Object.assign({key:e.country},e,{index:t+1}))}))},graph:function(e){var t=e.sortedCards,a=e.sort;return r.a.createElement(w,{data:t,sortedKey:a})},prediction:function(e){return r.a.createElement(T,e)}};a(76);var D=function(e){var t=e.tab,a=e.search,n=e.setSearch,c=e.sort,l=e.setSort,o=e.sortedCards,i=e.error;return r.a.createElement("div",{className:"board"},"prediction"!==t&&r.a.createElement(p,{search:a,onChangeSearch:n,sort:c,onChangeSort:l}),i&&r.a.createElement(b,{error:i}),L[t]({sortedCards:o,sort:c}))},I=function(){var e=function(e){var t=Object(n.useState)(e),a=Object(i.a)(t,2);return{tab:a[0],setTabs:a[1],tabs:v}}("live"),t=e.tab,a=e.setTabs,c=e.tabs,l=u(),s=l.search,d=l.setSearch,m=l.sort,b=l.setSort,p=l.sortedCards,y=l.error,g=l.world;return r.a.createElement("div",null,r.a.createElement(o,null,r.a.createElement(h,null),r.a.createElement(E,{tab:t,setTabs:a,tabs:c})),r.a.createElement(D,{search:s,setSearch:d,sort:m,setSort:b,sortedCards:p,error:y,tab:t}),"prediction"!==t&&r.a.createElement(f,{world:g}))};var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(I,null)))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))},76:function(e,t,a){"use strict";a.r(t);var n=a(141),r=a.n(n),c=(a(350),a(352)),l=r.a.initializeApp(c);t.default=l}},[[167,1,2]]]);
//# sourceMappingURL=main.ec9bed02.chunk.js.map