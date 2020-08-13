(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=(a(84),a(37)),l=a(16),u=a.n(l),s=a(25),f=a(28),p=a(40),d=a(68),m=a(67),h=a(137),v=a(140),g=a(159),E=a(143),y=a(144),k=a(145),b=a(162),w=a(150),x=a(163),O=a(153),j=a(154),C=a(149),S=a(104),P=a(142),A=a(157),I=a(160),T=a(66),N=a(136),M=a(48),F=a(146),H=a(147),J=a(148),K=a(151),W=a(152),z=a(155),B=a(156),q=a(158),V=(a(86),"https://furigana-lychee.herokuapp.com/"),D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,n=!1;return new Promise((function(r,i){var o=setTimeout((function(){n=!0,i(new Error("Fetch timeout"))}),a);fetch(e,t).then((function(e){clearTimeout(o),n||r(e)})).catch((function(e){n||i(e)}))}))},L=function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,null,[{key:"checkServerAlive",value:function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(V,null,1e3);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(V,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({text:t})}).then((function(e){return e.json()}));case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"report",value:function(){var e=Object(s.a)(u.a.mark((function e(t,a,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(V,"/report"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({text:"".concat(t,": `").concat(a,"`\n```").concat(n,"```")})}).then((function(e){return e.text()}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),R=function e(){Object(f.a)(this,e)};R.isKanji=function(e){var t=e.charCodeAt(0);return t>=19968&&t<=40959||"\u3005"===e||"\u30f6"===e||"\u30f5"===e},R.isHiragana=function(e){var t=e.charCodeAt(0);return t>=12353&&t<=12438},R.isAlpha=function(e){var t=e.charCodeAt(0);return t>=65&&t<=122},R.isNumber=function(e){var t=e.charCodeAt(0);return t>=48&&t<=57},R.isPureAlpha=function(e){for(var t=0;t<e.length;t++)if(!R.isAlpha(e[t]))return!1;return!0},R.isPureHiragana=function(e){for(var t=0;t<e.length;t++)if(!R.isHiragana(e[t]))return!1;return!0},R.isPureKanji=function(e){for(var t=0;t<e.length;t++)if(!R.isKanji(e[t]))return!1;return!0},R.hasKanji=function(e){for(var t=0;t<e.length;t++)if(R.isKanji(e[t]))return!0;return!1};var $=R,G=a(60),Q=a.n(G),U=Object(T.a)({palette:{primary:{main:N.a[700]}}}),X=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(f.a)(this,a),(e=t.call(this)).init=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.checkServerAlive();case 2:t.sent?e.setState({loading:!1}):(e.setState({loading:!0}),setTimeout((function(){e.init()}),3e3));case 4:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){e.setState({source:t.target.value})},e.query=Object(s.a)(u.a.mark((function t(){var a,n,r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({loading:!0}),a=e.state.source.split("\n"),n=[],r=0;case 4:if(!(r<a.length)){t.next=17;break}if(0!==a[r].length){t.next=9;break}n.push([]),t.next=14;break;case 9:return t.next=11,L.query(a[r]);case 11:i=(i=t.sent).map((function(e){var t=e["\u8a9e\u5f59\u7d20"];if("\u56fa\u6709\u540d\u8a5e"===e["\u54c1\u8a5e"][1]&&$.hasKanji(e["\u57fa\u672c\u5f62"][0])&&(t=e["\u57fa\u672c\u5f62"][0]),e["\u8a9e\u5f59\u7d20"].indexOf("-")>0){var a=e["\u8a9e\u5f59\u7d20"].split("-")[1];e.okurigana="".concat(e.surface,"(").concat(a,")"),t=e["\u8a9e\u5f59\u7d20"].split("-")[0]}return e.dictionary=t,e})),n.push(i);case 14:r++,t.next=4;break;case 17:e.setState({loading:!1,paragraph:n});case 18:case"end":return t.stop()}}),t)}))),e.select=function(){var t=Object(s.a)(u.a.mark((function t(a,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==a&&void 0!==n){t.next=2;break}return t.abrupt("return");case 2:e.selectedPointer=[a,n],r=e.state.paragraph[a][n],e.setState({wordInfo:r,dialogOpen:!0}),window.history.pushState({noBackExitsApp:!0},"");case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.format=function(t,a,n){var i="clickable";return t.bookmark&&(i+=" bookmark"),r.a.createElement("div",{key:n,className:i,style:{display:"inline-block"},onClick:function(t){e.select(a,n)}},e.okuriganToFurigana(t.okurigana))},e.okuriganToFurigana=function(e){if(!e)return[];for(var t="",a="",n=!1,i=[],o=0;o<e.length;o++){var c=e[o];"("===c?n=!0:")"===c?(i.push([t,a]),a="",t="",n=!1):n?a+=c:t.length>0&&!$.isHiragana(c)&&$.isHiragana(t.substr(-1))?(i.push([t,a]),a="",t=c):t+=c}return i.push([t,a]),i.map((function(e,t){var a=e[0],n=e[1];return r.a.createElement("div",{key:t,style:{display:"inline-block"}},r.a.createElement("div",{className:"furigana"},n),r.a.createElement("div",{className:"surface"},a))}))},e.state={source:"",paragraph:[],wordInfo:null,dialogOpen:!1,loading:!0,mainFontStze:"12pt"},e.placeholder="\u3053\u3053\u3067\u6587\u7ae0\u3092\u5165\u529b\u3057\u3066\u53f3\u4e0b\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002",e.selectedPointer=[0,0],e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",(function(t){e.state.dialogOpen?e.setState({dialogOpen:!1}):window.history.back()})),this.init()}},{key:"render",value:function(){for(var e=this,t=[],a=function(a){var n=e.state.paragraph[a].map((function(t,n){return e.format(t,a,n)}));t.push(n)},n=0;n<this.state.paragraph.length;n++)a(n);var i=!1;return Q.a.parse(window.location.search).preview&&(i=!0),r.a.createElement("div",null,r.a.createElement(h.a,{fixed:!0,style:{display:"flex",flexDirection:"column"}},r.a.createElement(v.a,{theme:U},r.a.createElement("form",{noValidate:!0,autoComplete:"off",style:{marginTop:24}},r.a.createElement(g.a,{placeholder:this.placeholder,fullWidth:!0,label:"\u6587\u7ae0\u5165\u529b",multiline:!0,rows:6,variant:"outlined",value:this.state.source,onChange:this.handleChange,InputProps:{startAdornment:r.a.createElement(E.a,{position:"start"})}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(y.a,{color:"primary",disabled:this.state.loading,onClick:function(t){return e.query()}},"\u632f\u308a\u4eee\u540d"),this.state.loading&&r.a.createElement(k.a,{size:24,style:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12,color:N.a[700]}})))))),r.a.createElement(Y,{fixed:!0,style:{display:"flex"},isPrintMode:i},r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("div",{key:t,className:"paragraph"},e)})))),r.a.createElement(v.a,{theme:U},r.a.createElement(ee,{wordInfo:this.state.wordInfo,dialogOpen:this.state.dialogOpen,onClose:function(){return e.setState({dialogOpen:!1})},addBookmark:function(t){var a=e.state.wordInfo;a.bookmark=t,e.setState({wordInfo:a})},onSave:function(t,a){var n=e.state.wordInfo;if(0!==t.length&&t!==n.okurigana){var r=e.selectedPointer[0],i=e.selectedPointer[1],o=Math.max(i-1,0),c=Math.min(i+2,e.state.paragraph[r].length);L.report("\u9001\u308a\u4eee\u540d\u4fee\u6b63",t,JSON.stringify(e.state.paragraph[r].slice(o,c)))}if(0!==a.length&&a!==n.dictionary){var l=e.selectedPointer[0],u=e.selectedPointer[1],s=Math.max(u-1,0),f=Math.min(u+2,e.state.paragraph[l].length);L.report("\u5b57\u5178\u4fee\u6b63",a,JSON.stringify(e.state.paragraph[l].slice(s,f)))}n.okurigana=t,n.dictionary=a,e.setState({wordInfo:n,paragraph:e.state.paragraph,dialogOpen:!1})}})))}}]),a}(r.a.Component);function Y(e){var t=r.a.useState(16),a=Object(c.a)(t,2),n=a[0],i=a[1],o=r.a.useState(""),l=Object(c.a)(o,2),u=l[0],s=l[1],f=0!==u.length;return e.isPrintMode?r.a.createElement("div",{style:e.style},r.a.createElement(v.a,{theme:U},r.a.createElement("div",{style:{display:"flex",margin:"16px auto"}},r.a.createElement("div",null,r.a.createElement("div",{className:"pageContentSetting"},"\u5b57\u9ad4\u5927\u5c0f\uff1a",r.a.createElement(F.a,{onClick:function(e){16===n&&window.chrome&&(s("Chrome \u6709\u6700\u5c0f\u5b57\u9ad4\u9650\u5236\uff0c\u5982\u5728\u610f\u5217\u5370\u54c1\u8cea\uff0c\u8acb\u6539\u7528Firefox\u6216\u662fSafari\u700f\u89bd\u5668\u3002"),setTimeout((function(){return s("")}),5e3)),i(n-1)}}),r.a.createElement("div",{style:{fontFamily:"monospace",fontSize:"12pt"}},n,"pt"),r.a.createElement(H.a,{onClick:function(e){return i(n+1)}}),r.a.createElement("div",{style:{flex:"1 1 0"}}),r.a.createElement(J.a,{onClick:function(e){return window.print()}})),r.a.createElement("div",{className:["content",e.isPrintMode?"a4":""].join(" ")},r.a.createElement("div",{style:{fontSize:n}},e.children)))),r.a.createElement(b.a,{open:f,autoHideDuration:5e3,anchorOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(I.a,{severity:"warning",elevation:6,variant:"filled",onClose:function(e){return s("")}},u)))):r.a.createElement(h.a,{fixed:!0,style:e.style},r.a.createElement(v.a,{theme:U},r.a.createElement("div",{className:["content"]},e.children)))}var Z=r.a.forwardRef((function(e,t){return r.a.createElement(w.a,Object.assign({direction:"up",ref:t},e))})),_=function(e){for(var t=0,a=0;a<e.length;a++)if("("===e[a]){if(1!==++t)break}else")"===e[a]&&t--;return 0===t};function ee(e){var t=e.wordInfo,a=r.a.useState(""),n=Object(c.a)(a,2),i=n[0],o=n[1],l=r.a.useState(""),u=Object(c.a)(l,2),s=u[0],f=u[1];if(null==t)return r.a.createElement("div",null);var p=r.a.createElement(K.a,null);return t.bookmark&&(p=r.a.createElement(W.a,null)),r.a.createElement(x.a,{fullScreen:!0,open:e.dialogOpen,onExited:function(e){o(""),f("")},TransitionComponent:Z},r.a.createElement(O.a,{position:"relative"},r.a.createElement(j.a,null,r.a.createElement(C.a,{edge:"start",color:"inherit",onClick:function(){return e.onClose()},"aria-label":"close"},r.a.createElement(z.a,null)),r.a.createElement(S.a,{variant:"h6",style:{flex:1}},t.surface),r.a.createElement(C.a,{edge:"start",color:"inherit",onClick:function(){return e.addBookmark(!t.bookmark)},"aria-label":"close"},p),r.a.createElement(C.a,{edge:"start",color:"inherit",onClick:function(){return window.open("https://www.weblio.jp/content/".concat(s||t.dictionary))},"aria-label":"close"},r.a.createElement(B.a,null)))),r.a.createElement(h.a,{fixed:!0},r.a.createElement(P.a,{component:"nav"},r.a.createElement(A.a,null,r.a.createElement(g.a,{fullWidth:!0,label:"\u6d3b\u7528",disabled:!0,defaultValue:"".concat(t["\u54c1\u8a5e"][0],", ").concat(t["\u6d3b\u7528\u578b"][0])})),r.a.createElement(A.a,null,r.a.createElement(g.a,{error:!_(i),helperText:_(i)?" ":"\u683c\u5f0f\u932f\u8aa4",fullWidth:!0,label:"\u9001\u308a\u4eee\u540d",defaultValue:t.okurigana,onChange:function(e){return o(e.target.value)},InputProps:{endAdornment:r.a.createElement(ae,{visibility:!1,onClick:function(){}})}})),r.a.createElement(A.a,null,r.a.createElement(g.a,{fullWidth:!0,label:"\u8f9e\u66f8",defaultValue:t.dictionary,onChange:function(e){return f(e.target.value)},InputProps:{endAdornment:r.a.createElement(ae,{visibility:!1,onClick:function(){}})}})),r.a.createElement(A.a,{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(y.a,{color:"primary",onClick:function(){_(i)&&e.onSave(i||t.okurigana,s||t.dictionary)}},"\u66f4\u65b0")))))}var te=Object(T.a)({palette:{secondary:{main:M.a[500]}}});function ae(e){return r.a.createElement(v.a,{theme:te},r.a.createElement(E.a,{position:"end"},e.visibility?r.a.createElement(y.a,{onClick:e.onClick,color:"secondary",startIcon:r.a.createElement(q.a,null)},"\u56de\u5831\u932f\u8aa4"):r.a.createElement("div",null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(102)},84:function(e,t,a){},86:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.201f7270.chunk.js.map