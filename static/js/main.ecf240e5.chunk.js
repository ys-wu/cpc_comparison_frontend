(this.webpackJsonpcpc_comparison_frontend=this.webpackJsonpcpc_comparison_frontend||[]).push([[0],{168:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(10),i=n.n(c),r=(n(62),n(12)),s=n(25),u=n(57),f=n(55),l=n.n(f),m=n(14);var h=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)([]),i=Object(s.a)(c,2),f=i[0],h=i[1];function p(t,e){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=t})),Object(a.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){return clearInterval(t)}}}),[e])}function g(t){fetch(t,{method:"GET","Content-Type":"application/json"}).then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){return{name:t.dttm,value:[t.dttm,t.conc]}}));o([].concat(Object(r.a)(n),Object(r.a)(e)))})).catch(console.error)}function d(t){fetch(t,{method:"GET","Content-Type":"application/json"}).then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){return{name:t.dttm,value:[t.dttm,t.conc]}}));h([].concat(Object(r.a)(f),Object(r.a)(e)))})).catch(console.error)}var b=function(){var t=new Date;return t.setHours(t.getHours()+2),t.setDate(t.getDate()-1),t.toISOString().slice(0,19)},j=function(t){return"http://atm-dev.site:1337/api/raw_mini?start=".concat(t)},v=function(t){return"http://atm-dev.site:1337/api/raw_tsi?start=".concat(t)};function O(t,e){for(t=t.toString();t.length<e;)t="0"+t;return t}return Object(a.useEffect)((function(){var t=b();g(j(t)),d(v(t))}),[]),p((function(){var t=n.slice(-1)[0].name.slice(0,19),e=f.slice(-1)[0].name.slice(0,19);g(j(t)),d(v(e))}),6e4),p((function(){var t,e=b();if(n.length){for(t=Object(r.a)(n);new Date(e)>new Date(t[0].name);)t.shift();t.length!==n.length&&o(t)}if(f.length){for(t=Object(r.a)(f);new Date(e)>new Date(t[0].name);)t.shift();t.length!==f.length&&h(t)}}),6e5),Object(m.jsx)(l.a,{style:{padding:20},children:Object(m.jsx)(u.a,{option:{title:{text:"SMEAR III CPC comparison"},tooltip:{trigger:"axis",formatter:function(t){t=t[0];var e=new Date(t.name);return e.getFullYear()+"-"+O(e.getMonth()+1,2)+"-"+O(e.getDate(),2)+" "+O(e.getHours(),2)+":"+O(e.getMinutes(),2)+":"+O(e.getSeconds(),2)+", "+parseInt(t.value[1])},axisPointer:{animation:!1}},legend:{data:["mini_CPC","Tsi_CPC"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},saveAsImage:{}}},xAxis:{type:"time",splitLine:{show:!0}},yAxis:{type:"value",name:"cn (cm-3)",boundaryGap:[0,"100%"],splitLine:{show:!0}},series:[{name:"mini_CPC",type:"line",showSymbol:!1,data:n},{name:"Tsi_CPC",type:"line",showSymbol:!1,data:f}]}})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),o(t),c(t),i(t)}))};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),p()},62:function(t,e,n){}},[[168,1,2]]]);
//# sourceMappingURL=main.ecf240e5.chunk.js.map