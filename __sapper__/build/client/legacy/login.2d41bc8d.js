import{_ as t,a as n,b as r,c as a,i as e,s,d as o,S as i,f as c,t as u,j as f,k as p,l,g as h,n as v,o as d,r as m,e as y,E,h as b,m as g,F as P,G as A,w,H as S,u as k,p as x,x as L,y as N,B as R,C as T,D as j,A as B}from"./client.5b898764.js";function O(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,s=n(t);if(a){var o=n(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return r(this,e)}}function D(t){var n,r;return{c:function(){n=c("p"),r=u(t[2])},l:function(a){n=f(a,"P",{});var e=p(n);r=l(e,t[2]),e.forEach(h)},m:function(t,a){v(t,n,a),d(n,r)},p:function(t,n){4&n&&m(r,t[2])},d:function(t){t&&h(n)}}}function U(t){var n,r,a,e,s,o,i,m,L,N,R,T,j,B,O,U,q,C,F,I,G=t[2]&&D(t);return{c:function(){n=c("form"),r=c("label"),a=u("Email: "),e=c("input"),s=y(),o=c("label"),i=u("Password: "),m=c("input"),L=y(),N=c("button"),R=u("Login"),T=y(),j=c("p"),B=u("Sin aún no estás registrado,ven por "),O=c("span"),U=c("a"),q=u("Aquí"),C=y(),G&&G.c(),F=E(),this.h()},l:function(t){n=f(t,"FORM",{method:!0});var c=p(n);r=f(c,"LABEL",{});var u=p(r);a=l(u,"Email: "),e=f(u,"INPUT",{type:!0}),u.forEach(h),s=b(c),o=f(c,"LABEL",{});var v=p(o);i=l(v,"Password: "),m=f(v,"INPUT",{type:!0}),v.forEach(h),L=b(c),N=f(c,"BUTTON",{type:!0,onclick:!0});var d=p(N);R=l(d,"Login"),d.forEach(h),T=b(c),j=f(c,"P",{});var y=p(j);B=l(y,"Sin aún no estás registrado,ven por "),O=f(y,"SPAN",{});var g=p(O);U=f(g,"A",{href:!0});var P=p(U);q=l(P,"Aquí"),P.forEach(h),g.forEach(h),y.forEach(h),c.forEach(h),C=b(t),G&&G.l(t),F=E(),this.h()},h:function(){g(e,"type","email"),g(m,"type","password"),g(N,"type","submit"),g(N,"onclick","submit"),g(U,"href","signup"),g(n,"method","post")},m:function(c,u,f){v(c,n,u),d(n,r),d(r,a),d(r,e),P(e,t[1]),d(n,s),d(n,o),d(o,i),d(o,m),P(m,t[0]),d(n,L),d(n,N),d(N,R),d(n,T),d(n,j),d(j,B),d(j,O),d(O,U),d(U,q),v(c,C,u),G&&G.m(c,u),v(c,F,u),f&&A(I),I=[w(e,"input",t[6]),w(m,"input",t[7]),w(n,"submit",S(t[4]))]},p:function(t,n){var r=k(n,1)[0];2&r&&e.value!==t[1]&&P(e,t[1]),1&r&&m.value!==t[0]&&P(m,t[0]),t[2]?G?G.p(t,r):((G=D(t)).c(),G.m(F.parentNode,F)):G&&(G.d(1),G=null)},i:x,o:x,d:function(t){t&&h(n),t&&h(C),G&&G.d(t),t&&h(F),A(I)}}}function q(t,n,r){var a,e=L().session;N(t,e,(function(t){return r(5,a=t)}));var s,o="",i="",c=function(){var t=R(T.mark((function t(){var n,c;return T.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:i,password:o})});case 2:return n=t.sent,t.next=5,n.json();case 5:(c=t.sent).error?r(2,s=c.error):(j(e,a.token=c.token,a),j(e,a.user=c.user,a),B("/profile"));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return[o,i,s,e,c,a,function(){i=this.value,r(1,i)},function(){o=this.value,r(0,o)}]}var C=function(n){t(c,i);var r=O(c);function c(t){var n;return a(this,c),n=r.call(this),e(o(n),t,q,U,s,{}),n}return c}();export default C;
