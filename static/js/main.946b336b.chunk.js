(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{22:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(3),s=t.n(u),c=t(1),i=t(5),m=t(4),l=(t(22),function(e){var n=e.res;return a.a.createElement(m.Textfit,{className:"screen-wrapper",mode:"single",max:70},n)}),o=function(e){var n=e.className,t=e.onClick,r=e.value;return a.a.createElement("button",{className:n,onClick:t},r)},g=[["C","+-","%","/"],[7,8,9,"X"],[4,5,6,"-"],[1,2,3,"+"],[0,".","="]],b=function(e,n,t){var r,a,u=(""+e).split("."),s="";for(n||(n=" "),t||0===t||(t=3),r=u[0].length;r>t;)a=r-t,s=n+u[0].slice(a,r)+s,r=a;return s=u[0].slice(0,r)+s,u[0]=s,u.join(".")},p=function(e){return e.toString().replace(/\s/g,"")},f=function(){var e=Object(r.useState)({sign:"",num:0,res:0}),n=Object(i.a)(e,2),t=n[0],u=n[1],s=function(e){var n=e.target.innerHTML;"0"===t.num&&"0"===n||t.num.toString().includes(".")&&"."===n||t.res&&!t.num&&"."===n||(t.sign||(t.res=0),p(t.num).length<16&&u(Object(c.a)(Object(c.a)({},t),{},{num:t.num||"."!==n?t.num&&"."===n?t.num+".":b((t.num&&"0"!==t.num?t.num+=n:n).toString().replace(/\s/g,"")):"0."})))},m=function(){u(Object(c.a)(Object(c.a)({},t),{},{num:t.num?b(-1*p(t.num)):0,res:t.res?b(-1*p(t.res)):0,sign:""}))},f=function(){var e=t.num?parseFloat(p(t.num)):0,n=t.res?parseFloat(p(t.res)):0;u(Object(c.a)(Object(c.a)({},t),{},{num:e/=Math.pow(100,1),res:n/=Math.pow(100,1),sign:""}))},j=function(){u(Object(c.a)(Object(c.a)({},t),{},{sign:"",num:0,res:0}))},O=function(){var e,n,r,a=[Number(t.sign&&t.num?p(t.num):0),Number(t.res?p(t.res):0)],s=(e=a[1],n=a[0],"+"===(r=t.sign)?e+n:"-"===r?e-n:"X"===r?e*n:e/n);if(t.sign&&t.num&&u(Object(c.a)(Object(c.a)({},t),{},{res:"0"===t.num&&"/"===t.sign?"Can't divide with 0":b(s),num:!t.res||!t.res&&"X"===t.sign||!t.res&&"/"===t.sign?t.num:0,sign:""})),t.num&&1===t.sign.length)return s},v=function(e){u(Object(c.a)(Object(c.a)({},t),{},{sign:e.target.innerHTML,res:!t.res&&t.num?b(Number(p(t.num))):t.res&&t.num&&t.sign?b(O()):t.res,num:0}))};return a.a.createElement("div",{className:"calc-wrapper"},a.a.createElement(l,{res:t.num?t.num:t.res}),a.a.createElement("div",{className:"button-wrapper"},g.flat().map((function(e,n){return a.a.createElement(o,{key:n,className:"="===e?"equals":"",value:e,onClick:"C"===e?j:"+-"===e?m:"%"===e?f:"="===e?O:"/"===e||"X"===e||"-"===e||"+"===e?v:s})}))))},j=document.getElementById("root");s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),j)},6:function(e,n,t){e.exports=t(23)}},[[6,1,2]]]);
//# sourceMappingURL=main.946b336b.chunk.js.map