(this["webpackJsonpterminal-project"]=this["webpackJsonpterminal-project"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/Second-Texture.c40cb5f6.gif"},,,function(e,t,a){e.exports=a.p+"static/media/First-Texture.57a8c577.gif"},function(e,t,a){e.exports=a.p+"static/media/First-Eagle.2bd76a4b.gif"},function(e,t,a){e.exports=a.p+"static/media/Second-Eagle.59c22b8e.gif"},function(e,t,a){e.exports=a.p+"static/media/Second-Button.4de95752.png"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/First-Background.7dbfd7b0.jpg"},function(e,t,a){e.exports=a.p+"static/media/Second-Background.e4ebbac2.jpg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),s=a.n(i),r=(a(17),a(1)),o=a(2),l=a(3),u=a(4),m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={isPageActive:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:this.state.isPageActive?"fadeIn":"fadeOut"},c.a.createElement("div",{className:"Directions-Wrapper"}))}}]),a}(n.Component),d=(a(18),a(8)),v=a.n(d),p=a(9),f=a.n(p),h=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={done:void 0,isPageActive:!0,isEagleActive:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.showEagle()}},{key:"render",value:function(){return c.a.createElement("div",{className:this.state.isPageActive?null:"fadeOut"},c.a.createElement("div",{className:"First-Wrapper"},this.state.isEagleActive?c.a.createElement("div",{className:"First-EagleDiv"},c.a.createElement("img",{className:"First-Eagle",onClick:this.handleEagleClick.bind(this),src:f.a})):null,c.a.createElement("img",{className:"First-Texture",src:v.a}),c.a.createElement("div",{className:"First-Background"})))}}]),a}(n.Component),g=(a(19),a(5)),E=a.n(g),b=a(10),S=a.n(b),N=a(11),j=a.n(N),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={isLoadDone:!1,isPageActive:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoadDone:!0})}),3500)}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.isLoadDone?c.a.createElement("div",{className:this.state.isPageActive?"fadeIn":"fadeOut"},c.a.createElement("div",{className:"Second-Wrapper"},c.a.createElement("div",{className:"Second-Background"}),c.a.createElement("img",{className:"Second-Texture",src:E.a}),c.a.createElement("img",{className:"Second-Eagle",src:S.a}),c.a.createElement("div",{className:"Second-ButtonDiv"},c.a.createElement("img",{className:"Second-ButtonImage",src:j.a})))):c.a.createElement("div",{className:"First-Wrapper"},c.a.createElement("div",{className:"First-Text"}," ",c.a.createElement("p",null,"LOADING...")," "),c.a.createElement("img",{className:"First-Texture",src:E.a}),c.a.createElement("div",{className:"First-Background"})))}}]),a}(n.Component),k=(a(20),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).switchScene=function(e){setTimeout((function(){n.setState({activeScene:e})}),2e3)},n.state={activeScene:"second"},n}return Object(o.a)(a,[{key:"render",value:function(){var e=null;switch(this.state.activeScene){case"directions":e=c.a.createElement(m,{switchSceneFunction:this.switchScene});break;case"first":e=c.a.createElement(h,{switchSceneFunction:this.switchScene});break;case"second":e=c.a.createElement(O,{switchSceneFunction:this.switchScene})}return c.a.createElement("div",{className:"App-Wrapper"},e)}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.6da86360.chunk.js.map