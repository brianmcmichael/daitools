(this.webpackJsonpdaitools=this.webpackJsonpdaitools||[]).push([[0],{156:function(e,t,n){e.exports=n.p+"static/media/Dai126x126.76a77e86.png"},187:function(e,t,n){e.exports=n(316)},192:function(e,t,n){},195:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n.n(a),r=n(46),o=n.n(r),c=(n(192),n(193),n(194),n(195),n(328)),i=n(336),u=n(176),m=n(327),s=n(156),E=n.n(s),g=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{as:"h2",icon:!0,inverted:!0,textAlign:"center"},l.a.createElement(u.a,{src:E.a}),l.a.createElement("div",null,"Dai Tools"),l.a.createElement(i.a.Subheader,null,"Tools for Smart (Contract) Developers")),l.a.createElement(m.a,null))},f=n(114),d=n(333),b=n(331),h=n(335),v=n(329),p=n(334),w=n(330),C=Object(p.a)(w.a,{number:"BigNumber",precision:45}),S=function(e){var t=Object(a.useState)(8),n=Object(f.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(),u=Object(f.a)(i,2),m=u[0],s=(u[1],Math.pow(10,27),function(e){return r/100+1});return Object(a.useEffect)((function(){}),[r,m]),l.a.createElement(c.a,null,l.a.createElement(d.a,{fluid:!0},l.a.createElement(d.a.Content,null,l.a.createElement(d.a.Header,null,"Rate Calculator")),l.a.createElement(d.a.Content,{extra:!0},"((",s(),")^(1/(365*24*60*60)))*10^27"),l.a.createElement(d.a.Content,null,l.a.createElement(b.a,{size:"large"},l.a.createElement(h.a,null,l.a.createElement(h.a.Column,{width:3,offset:1},l.a.createElement(v.a,{label:"%",labelPosition:"right",onChange:function(e,t){o(t.value)},value:r,fluid:!0})),l.a.createElement(h.a.Column,{width:9},l.a.createElement(v.a,{fluid:!0,className:"text-right",value:function(){var e=C.bignumber(s());console.log(e.toString());var t=C.bignumber(1/31536e3);console.log(t.toString());var n=e.pow(t);console.log(n.toString());var a=C.bignumber(10).pow(27);return console.log(a),n.times(a).ceil().toFixed().toString()}()})))))))},x=function(e){return l.a.createElement(c.a,null,l.a.createElement(g,null),l.a.createElement(S,null))};var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.3cb4379f.chunk.js.map