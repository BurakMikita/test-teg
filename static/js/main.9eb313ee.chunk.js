(this.webpackJsonptestovoe_minsk=this.webpackJsonptestovoe_minsk||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),o=n(7),r=n.n(o),u=(n(13),n(4)),a=n(2),s=(n(14),n(8)),l=n(0),d=function(){var t=c.a.useState([]),e=Object(a.a)(t,2),n=e[0],i=e[1],o=c.a.useState([]),r=Object(a.a)(o,2),d=r[0],j=r[1],f=c.a.useState(""),b=Object(a.a)(f,2),x=b[0],O=b[1],g=c.a.useState(null),h=Object(a.a)(g,2),p=h[0],v=h[1],m=c.a.useState(""),S=Object(a.a)(m,2),k=S[0],C=S[1];c.a.useEffect((function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e.length?i(e):i(s)}),[]),c.a.useEffect((function(){var t=JSON.stringify(n);localStorage.setItem("todos",t)}),[n]);var y=function(t){t.preventDefault(),j(n);var e=n.filter((function(t){return t.teg===x}));e.length&&i(e)},N=function(t){O(t.target.innerText),y(t)};return Object(l.jsxs)("div",{id:"todo-list",children:[Object(l.jsx)("h1",{children:"\u0417\u0430\u043c\u0435\u043d\u043a\u0438"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("button",{style:{marginRight:"5px"},onClick:function(){i(d)},children:"back"}),Object(l.jsx)("input",{type:"text",onChange:function(t){return O(t.target.value)},value:x}),Object(l.jsx)("button",{onClick:function(t){if(t.preventDefault(),!x)return null;j(n);var e=x.split(" ").filter((function(t){return 0===t.indexOf("#")})).join(""),c={id:(new Date).getTime(),text:x,teg:e};i(Object(u.a)(n).concat(c)),O("")},children:"Add Todo"}),Object(l.jsx)("button",{style:{marginLeft:"5px"},onClick:y,children:"Serch teg#"})]}),n.map((function(t){return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsxs)("div",{className:"todo-text",children:[Object(l.jsx)("input",{type:"checkbox",id:"completed",onChange:function(){return function(t){var e=Object(u.a)(n).map((function(e){return e.id===t&&(e.completed=!e.completed),e}));i(e)}(t.id)}}),t.id===p?Object(l.jsx)("input",{value:k||t.text,type:"text",onChange:function(t){return C(t.target.value)}}):Object(l.jsx)("div",{children:t.text})]}),Object(l.jsxs)("div",{className:"todo-actions",children:[t.id===p?Object(l.jsx)("button",{onClick:function(){return function(t){var e=Object(u.a)(n).map((function(e){if(e.id===t){if(""===k)return C(e.text),e;e.text=k;var n=e.text.split(" ");e.teg=n.filter((function(t){return 0===t.indexOf("#")})).join("")}return e}));i(e),v(null),C("")}(t.id)},children:"Submit Edits"}):Object(l.jsx)("button",{onClick:function(){return v(t.id)},children:"Edit"}),Object(l.jsx)("button",{onClick:function(){return function(t){var e=Object(u.a)(n).filter((function(e){return e.id!==t}));i(e)}(t.id)},children:"Delete"})]}),Object(l.jsx)("span",{onClick:N,children:t.teg})]},t.id)}))]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),i(t),c(t),o(t),r(t)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),j()},8:function(t){t.exports=JSON.parse('[{"text":"\u0417\u0430\u0432\u0442\u0440\u0430 \u043f\u043e\u0439\u0434\u0443 \u0437\u0430\u0439\u043c\u0443\u0441\u044c \u0441\u043e\u0431\u043e\u0439","id":"1"},{"text":"\u0417\u0430\u0432\u0442\u0440\u0430 \u0443 \u043c\u0435\u043d\u044f #\u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a","id":"2","teg":"#\u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a"},{"text":"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0431\u044b\u043b\u043e #\u043a\u043b\u0430\u0441\u0441\u043d\u043e","id":"3","teg":"#\u043a\u043b\u0430\u0441\u0441\u043d\u043e"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.9eb313ee.chunk.js.map