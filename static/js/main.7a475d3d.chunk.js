(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{12:function(t,e,n){},17:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},38:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var s=n(0),c=n(1),i=n.n(c),r=n(18),o=n.n(r),a=(n(30),n(19)),j=n(20),u=n(24),b=n(23),x=n(21),l=n(2),d=(n(31),function(t){var e=t.history;return Object(s.jsxs)("div",{className:"home_display",children:[Object(s.jsx)("center",{id:"home",children:"findyourcolor"}),Object(s.jsxs)("div",{id:"btn_group",children:[Object(s.jsx)("button",{id:"soo_btn1",onClick:function(){window.open("https://stackoverflow.com/questions/51057153/how-to-use-window-open-onclick-reactjs","Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")},children:"image"}),Object(s.jsx)("button",{id:"soo_btn2",onClick:function(){e.push("/test")},children:"test"})]})]})}),O=n(4),h=n(9),p=n.n(h),w=(n(17),function(t){var e=t.history,n=[{questionText:"\uba38\ub9ac\uce74\ub77d \uc0c9\uc774 \uac80\uc815\uc5d0 \uac00\uae5d\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!0},{answerText:"\uc544\ub2c8\uc624",isCorrect:!1}]},{questionText:"\ud53c\ubd80\uc5d0 \ubd89\uc740 \uae30\uac00 \ub9ce\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!0},{answerText:"\uc544\ub2c8\uc624",isCorrect:!1}]},{questionText:"\uc190\ubaa9 \ud608\uad00 \uc0c9\uc774 \ucd08\ub85d\uc0c9\uc774\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!1},{answerText:"\uc544\ub2c8\uc624",isCorrect:!0}]},{questionText:"\ud587\ubcd5\uc5d0 \uc7a5\uc2dc\uac04 \uc788\uc73c\uba74 \ud53c\ubd80\uac00 \ubd89\uc5b4\uc9c4\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!0},{answerText:"\uc544\ub2c8\uc624",isCorrect:!1}]},{questionText:"\uc21c\ubc31 \uc154\uce20\ubcf4\ub2e4 \uc544\uc774\ubcf4\ub9ac\uc0c9\uc774 \ub354 \uc5b4\uc6b8\ub9b0\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!1},{answerText:"\uc544\ub2c8\uc624",isCorrect:!0}]}],i=Object(c.useState)(0),r=Object(O.a)(i,2),o=r[0],a=r[1],j=Object(c.useState)(!1),u=Object(O.a)(j,2),b=u[0],x=u[1],l=Object(c.useState)(0),d=Object(O.a)(l,2),h=d[0],w=d[1],m=Object(c.useState)(0),f=Object(O.a)(m,2),C=f[0],T=f[1],v=Object(c.useState)(""),k=Object(O.a)(v,2),g=k[0],q=k[1];return Object(s.jsx)("div",{id:"test",children:b?Object(s.jsxs)("span",{className:"score-section",children:[Object(s.jsx)("button",{onClick:function(){return function(t,e){q(t>e?"cool":t<e?"warm":"restart")}(h,C)},children:"result"}),"cool"===g?Object(s.jsx)("button",{onClick:function(){e.push("/test2")},children:"next"}):Object(s.jsx)("button",{onClick:function(){e.push("/test3")},children:"next"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"question-section",children:[Object(s.jsxs)("div",{id:"question-count",children:[Object(s.jsxs)("span",{children:["Question ",o+1]}),"/",n.length]}),Object(s.jsx)("div",{id:"question-text",children:n[o].questionText})]}),Object(s.jsx)("div",{className:"answer-section",children:n[o].answerOptions.map((function(t){return Object(s.jsx)("button",{id:"btn_answer",onClick:function(){return function(t){t?(w(h+1),p.a.log("c"+h)):(T(C+1),p.a.log("w"+C));var e=o+1;e<n.length?a(e):x(!0)}(t.isCorrect)},children:t.answerText})}))})]})})}),m=function(t){var e=t.history,n=[{questionText:"\uba38\ub9ac\uce74\ub77d \uc0c9\uc774 \uac80\uc815\uc5d0 \uac00\uae5d\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!0},{answerText:"\uc544\ub2c8\uc624",isCorrect:!1}]},{questionText:"\ud53c\ubd80\uc5d0 \ubd89\uc740 \uae30\uac00 \ub9ce\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!0},{answerText:"\uc544\ub2c8\uc624",isCorrect:!1}]},{questionText:"\uc190\ubaa9 \ud608\uad00 \uc0c9\uc774 \ucd08\ub85d\uc0c9\uc774\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!1},{answerText:"\uc544\ub2c8\uc624",isCorrect:!0}]},{questionText:"\ud587\ubcd5\uc5d0 \uc7a5\uc2dc\uac04 \uc788\uc73c\uba74 \ud53c\ubd80\uac00 \ubd89\uc5b4\uc9c4\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!0},{answerText:"\uc544\ub2c8\uc624",isCorrect:!1}]}],i=Object(c.useState)(0),r=Object(O.a)(i,2),o=r[0],a=r[1],j=Object(c.useState)(!1),u=Object(O.a)(j,2),b=u[0],x=u[1],l=Object(c.useState)(0),d=Object(O.a)(l,2),h=d[0],p=d[1],w=Object(c.useState)(0),m=Object(O.a)(w,2),f=m[0],C=m[1],T=Object(c.useState)(""),v=Object(O.a)(T,2),k=v[0],g=v[1];return Object(s.jsx)("div",{id:"test",children:b?Object(s.jsxs)("span",{className:"score-section",children:[Object(s.jsx)("button",{onClick:function(){return function(t,e){g(t>e?"summer cool":t<e?"winter cool":"restart")}(h,f)},children:"result"}),"summer cool"===k?Object(s.jsx)("button",{onClick:function(){e.push("/summer")},children:"next"}):Object(s.jsx)("button",{onClick:function(){e.push("/winter")},children:"next"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"question-section",children:[Object(s.jsxs)("div",{id:"question-count",children:[Object(s.jsxs)("span",{children:["Question ",o+1]}),"/",n.length]}),Object(s.jsx)("div",{id:"question-text",children:n[o].questionText})]}),Object(s.jsx)("div",{className:"answer-section",children:n[o].answerOptions.map((function(t){return Object(s.jsx)("button",{id:"btn_answer",onClick:function(){return function(t){t?p(h+1):C(f+1);var e=o+1;e<n.length?a(e):x(!0)}(t.isCorrect)},children:t.answerText})}))})]})})},f=(n(38),function(t){var e=t.history,n=[{questionText:"\uba38\ub9ac\uce74\ub77d \uc0c9\uc774 \uac80\uc815\uc5d0 \uac00\uae5d\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!0},{answerText:"\uc544\ub2c8\uc624",isCorrect:!1}]},{questionText:"\ud53c\ubd80\uc5d0 \ubd89\uc740 \uae30\uac00 \ub9ce\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!0},{answerText:"\uc544\ub2c8\uc624",isCorrect:!1}]},{questionText:"\uc190\ubaa9 \ud608\uad00 \uc0c9\uc774 \ucd08\ub85d\uc0c9\uc774\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!1},{answerText:"\uc544\ub2c8\uc624",isCorrect:!0}]},{questionText:"\ud587\ubcd5\uc5d0 \uc7a5\uc2dc\uac04 \uc788\uc73c\uba74 \ud53c\ubd80\uac00 \ubd89\uc5b4\uc9c4\ub2e4",answerOptions:[{answerText:"\uc608",isCorrect:!0},{answerText:"\uc544\ub2c8\uc624",isCorrect:!1}]}],i=Object(c.useState)(0),r=Object(O.a)(i,2),o=r[0],a=r[1],j=Object(c.useState)(!1),u=Object(O.a)(j,2),b=u[0],x=u[1],l=Object(c.useState)(0),d=Object(O.a)(l,2),h=d[0],p=d[1],w=Object(c.useState)(0),m=Object(O.a)(w,2),f=m[0],C=m[1],T=Object(c.useState)(""),v=Object(O.a)(T,2),k=v[0],g=v[1];return Object(s.jsx)("div",{id:"test",children:b?Object(s.jsxs)("span",{className:"score-section",children:[Object(s.jsx)("button",{onClick:function(){return function(t,e){g(t>e?"spring warm":t<e?"autumn warm":"restart")}(h,f)},children:"result"}),"spring warm"===k?Object(s.jsx)("button",{onClick:function(){e.push("/spring")},children:"next"}):Object(s.jsx)("button",{onClick:function(){e.push("/autumn")},children:"next"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"question-section",children:[Object(s.jsxs)("div",{id:"question-count",children:[Object(s.jsxs)("span",{children:["Question ",o+1]}),"/",n.length]}),Object(s.jsx)("div",{id:"question-text",children:n[o].questionText})]}),Object(s.jsx)("div",{className:"answer-section",children:n[o].answerOptions.map((function(t){return Object(s.jsx)("button",{id:"btn_answer",onClick:function(){return function(t){t?p(h+1):C(f+1);var e=o+1;e<n.length?a(e):x(!0)}(t.isCorrect)},children:t.answerText})}))})]})})}),C=(n(12),n.p+"static/media/spring.40048675.jpg"),T=function(t){var e=t.history;return Object(s.jsxs)("div",{className:"season_class",children:[Object(s.jsx)("img",{src:C,width:"1300",height:"600",alt:"spring"}),Object(s.jsx)("div",{id:"btn_back",children:Object(s.jsx)("button",{id:"back_btn",onClick:function(){e.push("/")},children:"back"})})]})},v=n.p+"static/media/summer.7795f7ea.jpg",k=function(t){var e=t.history;return Object(s.jsxs)("div",{className:"season_class",children:[Object(s.jsx)("img",{src:v,width:"1300",height:"600",alt:"summer"}),Object(s.jsx)("div",{id:"btn_back",children:Object(s.jsx)("button",{id:"back_btn",onClick:function(){e.push("/")},children:"back"})})]})},g=n.p+"static/media/autumn.13a18e4d.png",q=function(t){var e=t.history;return Object(s.jsxs)("div",{className:"season_class",children:[Object(s.jsx)("img",{src:g,width:"1300",height:"600",alt:"autumn"}),Object(s.jsx)("div",{id:"btn_back",children:Object(s.jsx)("button",{id:"back_btn",onClick:function(){e.push("/")},children:"back"})})]})},_=n.p+"static/media/winter.a1978ae4.png",S=function(t){var e=t.history;return Object(s.jsxs)("div",{className:"season_class",children:[Object(s.jsx)("img",{src:_,width:"1300",height:"600",alt:"winter"}),Object(s.jsx)("div",{id:"btn_back",children:Object(s.jsx)("button",{id:"back_btn",onClick:function(){e.push("/")},children:"back"})})]})},N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(x.a,{basename:"/color",children:[Object(s.jsx)(l.a,{path:"/color",exact:!0,component:d}),Object(s.jsx)(l.a,{path:"/test",exact:!0,component:w}),Object(s.jsx)(l.a,{path:"/test2",exact:!0,component:m}),Object(s.jsx)(l.a,{path:"/test3",exact:!0,component:f}),Object(s.jsx)(l.a,{path:"/spring",exact:!0,component:T}),Object(s.jsx)(l.a,{path:"/summer",exact:!0,component:k}),Object(s.jsx)(l.a,{path:"/autumn",exact:!0,component:q}),Object(s.jsx)(l.a,{path:"/winter",exact:!0,component:S})]})})}}]),n}(c.Component);o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7a475d3d.chunk.js.map