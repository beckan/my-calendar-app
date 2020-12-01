(this["webpackJsonpmy-awesome-calendar"]=this["webpackJsonpmy-awesome-calendar"]||[]).push([[0],{28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(2),s=t.n(c),r=t(17),d=t.n(r),i=t(8),o=t.n(i),j=t(18),l=t(4),u=(t(28),t(29),t(1)),b=t.n(u),v=function(e){for(var a=[],t=0;t<7;t++)b.a.isDayjs(e)&&a.push(e.add(t,"day"));return a},x=t(21),f=(t(30),t(31),function(e){var a=e.title;return Object(n.jsx)("div",{className:"c-calendar-event",children:a})}),O=(t(32),function(e){var a=e.text;return Object(n.jsx)("div",{className:"screen-reader-text",children:a})}),h=function(e){var a=e.date,t=e.events,c=["c-calendar-day"],s=0===a.weekday(),r=a.isSame(b()(),"date");return s&&c.push("c-calendar-day--is-sunday"),r&&c.push("c-calendar-day--is-today"),Object(n.jsxs)("div",{className:c.join(" "),children:[Object(n.jsx)("div",{className:"c-calendar-day__head",children:a.format("ddd DD")}),Object(n.jsxs)("div",{className:"c-calendar-day__body",children:[t.map((function(e,a){return Object(n.jsx)(f,Object(x.a)({},e),a)})),!t.length&&Object(n.jsx)(O,{text:"No events"})]})]})},m=t(5),y=t.n(m),p=t(6),_=t.n(p);b.a.extend(y.a),b.a.extend(_.a);var N=Object(c.forwardRef)((function(e,a){var t=e.startDate,s=e.isLoading,r=e.events,d=Object(c.useState)([]),i=Object(l.a)(d,2),o=i[0],j=i[1];Object(c.useEffect)((function(){j(v(t))}),[t]);var u=["c-calendar-body"];s&&u.push("c-calendar-body--is-loading");var x=o.map((function(e,a){var t=[];return b.a.isDayjs(e)&&(t=r[e.format("YYYY-MM-DD")]||[]),Object(n.jsx)(h,{date:e,events:t},a)}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:u.join(" "),tabIndex:-1,ref:a,children:[Object(n.jsx)(O,{text:b.a.isDayjs(t)?t.format("[Viewing week ] w [of] YYYY"):""}),o&&x]})})})),w=t(19),k=t.n(w);b.a.extend(k.a);var Y=function(e){return b()(e).weekday(1)},D=t(20),g=t.n(D);b.a.extend(y.a),b.a.extend(_.a);var M=b()(),S=function(e){var a=e.title,t=Object(c.useState)(Y(M)),s=Object(l.a)(t,2),r=s[0],d=s[1],i=Object(c.useState)({}),u=Object(l.a)(i,2),v=u[0],x=u[1],f=Object(c.useState)(!0),h=Object(l.a)(f,2),m=h[0],y=h[1],p=Object(c.useRef)(null);return Object(c.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x({}),y(!0),e.prev=2,e.next=5,g.a.get("/my-calendar-app/events.json");case 5:t=e.sent,x(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.prev=12,y(!1),e.finish(12);case 15:null===p||void 0===p||null===(a=p.current)||void 0===a||a.focus();case 16:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))()}),[r,p]),b.a.isDayjs(r)?Object(n.jsxs)("div",{className:"c-calendar","aria-label":a,children:[Object(n.jsxs)("div",{className:"c-calendar__head",children:[Object(n.jsx)("div",{className:"c-calendar__head-title",children:r.format("MMM YYYY")}),Object(n.jsxs)("div",{className:"c-calendar__head-nav",children:[Object(n.jsxs)("button",{onClick:function(){var e=b()(r).subtract(7,"day");d(Y(e))},className:"c-calendar__head-nav-button",children:["<",Object(n.jsx)(O,{text:"Go to previous week"})]}),Object(n.jsxs)("button",{onClick:function(){d(Y(M))},className:"c-calendar__head-nav-button c-calendar__head-nav-button--today",children:[Object(n.jsx)(O,{text:"Go to "})," Today"]}),Object(n.jsxs)("button",{onClick:function(){var e=b()(r).add(7,"day");d(Y(e))},className:"c-calendar__head-nav-button",children:[">",Object(n.jsx)(O,{text:"Go to next week"})]})]})]}),Object(n.jsx)(N,{isLoading:m,startDate:r,events:v,ref:p})]}):Object(n.jsx)("div",{children:"Error: No start date is set..."})};var E=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(S,{title:"My calendar"})})};t(50);d.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.4f62b7b0.chunk.js.map