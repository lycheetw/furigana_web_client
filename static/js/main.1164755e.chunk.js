(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=(a(84),a(26)),l=a(16),s=a.n(l),u=a(25),p=a(29),f=a(40),m=a(68),d=a(67),h=a(137),v=a(140),g=a(161),E=a(143),y=a(144),k=a(145),b=a(164),w=a(152),x=a(165),O=a(155),j=a(156),S=a(146),C=a(104),P=a(142),A=a(159),I=a(162),T=a(66),N=a(136),H=a(48),M=a(147),z=a(148),F=a(149),B=a(150),J=a(151),K=a(153),W=a(154),q=a(157),D=a(158),V=a(160),L=(a(86),"https://furigana-lychee.herokuapp.com/"),R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,n=!1;return new Promise((function(r,i){var o=setTimeout((function(){n=!0,i(new Error("Fetch timeout"))}),a);fetch(e,t).then((function(e){clearTimeout(o),n||r(e)})).catch((function(e){n||i(e)}))}))},$=function(){function e(){Object(p.a)(this,e)}return Object(f.a)(e,null,[{key:"checkServerAlive",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(L,null,1500);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(L,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({text:t})}).then((function(e){return e.json()}));case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"report",value:function(){var e=Object(u.a)(s.a.mark((function e(t,a,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(L,"/report"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({text:"".concat(t,": `").concat(a,"`\n```").concat(n,"```")})}).then((function(e){return e.text()}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),G=function e(){Object(p.a)(this,e)};G.isKanji=function(e){var t=e.charCodeAt(0);return t>=19968&&t<=40959||"\u3005"===e||"\u30f6"===e||"\u30f5"===e},G.isHiragana=function(e){var t=e.charCodeAt(0);return t>=12353&&t<=12438},G.isAlpha=function(e){var t=e.charCodeAt(0);return t>=65&&t<=122},G.isNumber=function(e){var t=e.charCodeAt(0);return t>=48&&t<=57},G.isPureAlpha=function(e){for(var t=0;t<e.length;t++)if(!G.isAlpha(e[t]))return!1;return!0},G.isPureHiragana=function(e){for(var t=0;t<e.length;t++)if(!G.isHiragana(e[t]))return!1;return!0},G.isPureKanji=function(e){for(var t=0;t<e.length;t++)if(!G.isKanji(e[t]))return!1;return!0},G.hasKanji=function(e){for(var t=0;t<e.length;t++)if(G.isKanji(e[t]))return!0;return!1};var Q=G,U=a(60),X=a.n(U),Y=Object(T.a)({palette:{primary:{main:N.a[700]}}}),Z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).init=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.checkServerAlive();case 2:t.sent?(e.setState({loading:!1}),e.setState({message:""})):(e.first&&(e.setState({message:"\u7cfb\u7d71\u555f\u52d5\u4e2d\uff0c\u7d0430\u79d2\uff0c\u8acb\u7a0d\u5f85\u3002\u5728\u6b64\u671f\u9593\u60a8\u4ecd\u7136\u53ef\u4ee5\u7e7c\u7e8c\u8f38\u5165\u6587\u7ae0\u3002"}),e.first=!1),e.setState({loading:!0}),setTimeout((function(){e.init()}),3e3));case 4:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){e.setState({source:t.target.value})},e.query=Object(u.a)(s.a.mark((function t(){var a,n,r,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({loading:!0}),a=e.state.source.split("\n"),n=[],r=0;case 4:if(!(r<a.length)){t.next=17;break}if(0!==a[r].length){t.next=9;break}n.push([]),t.next=14;break;case 9:return t.next=11,$.query(a[r]);case 11:i=(i=t.sent).map((function(e){var t=e["\u8a9e\u5f59\u7d20"];return"\u56fa\u6709\u540d\u8a5e"===e["\u54c1\u8a5e"][1]&&Q.hasKanji(e["\u57fa\u672c\u5f62"][0])&&(t=e["\u57fa\u672c\u5f62"][0]),e["\u8a9e\u5f59\u7d20"].indexOf("-")>0&&(t=e["\u8a9e\u5f59\u7d20"].split("-")[0]),e.dictionary=t,e})),n.push(i);case 14:r++,t.next=4;break;case 17:e.setState({loading:!1,paragraph:n});case 18:case"end":return t.stop()}}),t)}))),e.select=function(){var t=Object(u.a)(s.a.mark((function t(a,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==a&&void 0!==n){t.next=2;break}return t.abrupt("return");case 2:e.selectedPointer=[a,n],r=e.state.paragraph[a][n],e.setState({wordInfo:r,dialogOpen:!0}),window.history.pushState({noBackExitsApp:!0},"");case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.format=function(t,a,n){var i="clickable";return t.bookmark&&(i+=" bookmark"),r.a.createElement("div",{key:n,className:i,style:{display:"inline-block"},onClick:function(e){window.open("https://dictionary.goo.ne.jp/srch/jn/".concat(t.dictionary,"/m1u"))}},e.okuriganToFurigana(t.okurigana))},e.okuriganToFurigana=function(e){if(!e)return[];for(var t="",a="",n=!1,i=[],o=0;o<e.length;o++){var c=e[o];"("===c?n=!0:")"===c?(i.push([t,a]),a="",t="",n=!1):n?a+=c:t.length>0&&!Q.isHiragana(c)&&Q.isHiragana(t.substr(-1))?(i.push([t,a]),a="",t=c):t+=c}return i.push([t,a]),i.map((function(e,t){var a=e[0],n=e[1];return n||(n="\xa0"),r.a.createElement("div",{key:t,style:{display:"inline-block"}},r.a.createElement("div",{className:"furigana"},n),r.a.createElement("div",{className:"surface"},a))}))},e.state={source:"",paragraph:[],wordInfo:null,dialogOpen:!1,loading:!0,message:""},e.placeholder="\u3053\u3053\u3067\u6587\u7ae0\u3092\u5165\u529b\u3057\u3066\u53f3\u4e0b\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002",e.selectedPointer=[0,0],e.first=!0,e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",(function(t){e.state.dialogOpen?e.setState({dialogOpen:!1}):window.history.back()})),this.init()}},{key:"render",value:function(){for(var e=this,t=[],a=function(a){var n=e.state.paragraph[a].map((function(t,n){return e.format(t,a,n)}));t.push(n)},n=0;n<this.state.paragraph.length;n++)a(n);var i=!1;return X.a.parse(window.location.search).preview&&(i=!0),r.a.createElement("div",null,r.a.createElement(h.a,{fixed:!0,style:{display:"flex",flexDirection:"column"}},r.a.createElement(v.a,{theme:Y},r.a.createElement("form",{noValidate:!0,autoComplete:"off",style:{marginTop:24}},r.a.createElement(g.a,{placeholder:this.placeholder,fullWidth:!0,label:"\u6587\u7ae0\u5165\u529b",multiline:!0,rows:6,variant:"outlined",value:this.state.source,onChange:this.handleChange,InputProps:{startAdornment:r.a.createElement(E.a,{position:"start"})}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(y.a,{color:"primary",disabled:this.state.loading,onClick:function(t){return e.query()}},"\u632f\u308a\u4eee\u540d"),this.state.loading&&r.a.createElement(k.a,{size:24,style:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12,color:N.a[700]}})))))),r.a.createElement(_,{fixed:!0,style:{display:"flex"},isPrintMode:i,paragraphs:t}),r.a.createElement(v.a,{theme:Y},r.a.createElement(ae,{wordInfo:this.state.wordInfo,dialogOpen:this.state.dialogOpen,onClose:function(){return e.setState({dialogOpen:!1})},addBookmark:function(t){var a=e.state.wordInfo;a.bookmark=t,e.setState({wordInfo:a})},onSave:function(t,a){var n=e.state.wordInfo;if(0!==t.length&&t!==n.okurigana){var r=e.selectedPointer[0],i=e.selectedPointer[1],o=Math.max(i-1,0),c=Math.min(i+2,e.state.paragraph[r].length);$.report("\u9001\u308a\u4eee\u540d\u4fee\u6b63",t,JSON.stringify(e.state.paragraph[r].slice(o,c)))}if(0!==a.length&&a!==n.dictionary){var l=e.selectedPointer[0],s=e.selectedPointer[1],u=Math.max(s-1,0),p=Math.min(s+2,e.state.paragraph[l].length);$.report("\u5b57\u5178\u4fee\u6b63",a,JSON.stringify(e.state.paragraph[l].slice(u,p)))}n.okurigana=t,n.dictionary=a,e.setState({wordInfo:n,paragraph:e.state.paragraph,dialogOpen:!1})}})),r.a.createElement(b.a,{open:0!=this.state.message.length,autoHideDuration:1e4,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:function(t){return e.setState({message:""})}},r.a.createElement(I.a,{severity:"info",elevation:6,variant:"filled",onClose:function(t){return e.setState({message:""})}},this.state.message)))}}]),a}(r.a.Component);function _(e){var t=r.a.useState(12),a=Object(c.a)(t,2),n=a[0],i=a[1],o=r.a.useState(14),l=Object(c.a)(o,2),s=l[0],u=l[1],p=r.a.useState(10),f=Object(c.a)(p,2),m=(f[0],f[1],r.a.useState("")),d=Object(c.a)(m,2),g=d[0],E=d[1],y=r.a.useState(!0),k=Object(c.a)(y,2),w=k[0],x=k[1],O=0!==g.length;return e.isPrintMode?r.a.createElement("div",{style:e.style},r.a.createElement(v.a,{theme:Y},r.a.createElement("div",{style:{display:"flex",margin:"16px auto"}},r.a.createElement("div",null,r.a.createElement("div",{className:"pageContentSetting"},r.a.createElement("div",null,"\u5b57\u9ad4\u5927\u5c0f\uff1a",r.a.createElement(M.a,{onClick:function(e){12===n&&window.chrome&&(E("Chrome \u6709\u6700\u5c0f\u5b57\u9ad4\u9650\u5236\uff0c\u5982\u5728\u610f\u5217\u5370\u54c1\u8cea\uff0c\u8acb\u6539\u7528Firefox\u6216\u662fSafari\u700f\u89bd\u5668\u3002"),setTimeout((function(){return E("")}),5e3)),i(n-.5)}}),r.a.createElement("div",{style:{fontFamily:"monospace",fontSize:"12pt"}},n.toFixed(1),"pt"),r.a.createElement(z.a,{onClick:function(e){return i(n+.5)}})),r.a.createElement("div",null,"\u884c\u9ad8\uff1a",r.a.createElement(M.a,{onClick:function(e){u(s-1)}}),r.a.createElement("div",{style:{fontFamily:"monospace",fontSize:"12pt"}},s,"px"),r.a.createElement(z.a,{onClick:function(e){return u(s+1)}})),r.a.createElement("div",{style:{flex:"1 1 0"}}),r.a.createElement("div",{onClick:function(e){return x(!w)}},w?r.a.createElement(F.a,null):r.a.createElement(B.a,null)),r.a.createElement("div",null,r.a.createElement(J.a,{onClick:function(e){return window.print()}}))),r.a.createElement("div",{className:["content",e.isPrintMode?"a4":"",w?"":"furiganaHidden"].join(" ")},r.a.createElement("div",{style:{fontSize:"".concat(n,"pt")}},r.a.createElement("div",null,e.paragraphs.map((function(e,t){return r.a.createElement("div",{key:t,className:"paragraph",style:{lineHeight:"".concat(s,"px")}},e)}))))))),r.a.createElement(b.a,{open:O,autoHideDuration:5e3,anchorOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(I.a,{severity:"warning",elevation:6,variant:"filled",onClose:function(e){return E("")}},g)))):r.a.createElement(h.a,{fixed:!0,style:e.style},r.a.createElement(v.a,{theme:Y},r.a.createElement("div",{className:["content"]},0!==e.paragraphs.length?r.a.createElement("div",{style:{fontSize:8,marginBottom:8}},"\u9ede\u9078\u55ae\u5b57\u53ef\u4ee5\u67e5\u8a62\u5b57\u5178"):r.a.createElement("div",null),r.a.createElement("div",null,e.paragraphs.map((function(e,t){return r.a.createElement("div",{key:t,className:"paragraph"},e)}))))))}var ee=r.a.forwardRef((function(e,t){return r.a.createElement(w.a,Object.assign({direction:"up",ref:t},e))})),te=function(e){for(var t=0,a=0;a<e.length;a++)if("("===e[a]){if(1!==++t)break}else")"===e[a]&&t--;return 0===t};function ae(e){var t=e.wordInfo,a=r.a.useState(""),n=Object(c.a)(a,2),i=n[0],o=n[1],l=r.a.useState(""),s=Object(c.a)(l,2),u=s[0],p=s[1];if(null==t)return r.a.createElement("div",null);var f=r.a.createElement(K.a,null);return t.bookmark&&(f=r.a.createElement(W.a,null)),r.a.createElement(x.a,{fullScreen:!0,open:e.dialogOpen,onExited:function(e){o(""),p("")},TransitionComponent:ee},r.a.createElement(O.a,{position:"relative"},r.a.createElement(j.a,null,r.a.createElement(S.a,{edge:"start",color:"inherit",onClick:function(){return e.onClose()},"aria-label":"close"},r.a.createElement(q.a,null)),r.a.createElement(C.a,{variant:"h6",style:{flex:1}},t.surface),r.a.createElement(S.a,{edge:"start",color:"inherit",onClick:function(){return e.addBookmark(!t.bookmark)},"aria-label":"close"},f),r.a.createElement(S.a,{edge:"start",color:"inherit",onClick:function(){return window.open("https://www.weblio.jp/content/".concat(u||t.dictionary))},"aria-label":"close"},r.a.createElement(D.a,null)))),r.a.createElement(h.a,{fixed:!0},r.a.createElement(P.a,{component:"nav"},r.a.createElement(A.a,null,r.a.createElement(g.a,{fullWidth:!0,label:"\u6d3b\u7528",disabled:!0,defaultValue:"".concat(t["\u54c1\u8a5e"][0],", ").concat(t["\u6d3b\u7528\u578b"][0])})),r.a.createElement(A.a,null,r.a.createElement(g.a,{error:!te(i),helperText:te(i)?" ":"\u683c\u5f0f\u932f\u8aa4",fullWidth:!0,label:"\u9001\u308a\u4eee\u540d",defaultValue:t.okurigana,onChange:function(e){return o(e.target.value)},InputProps:{endAdornment:r.a.createElement(re,{visibility:!1,onClick:function(){}})}})),r.a.createElement(A.a,null,r.a.createElement(g.a,{fullWidth:!0,label:"\u8f9e\u66f8",defaultValue:t.dictionary,onChange:function(e){return p(e.target.value)},InputProps:{endAdornment:r.a.createElement(re,{visibility:!1,onClick:function(){}})}})))))}var ne=Object(T.a)({palette:{secondary:{main:H.a[500]}}});function re(e){return r.a.createElement(v.a,{theme:ne},r.a.createElement(E.a,{position:"end"},e.visibility?r.a.createElement(y.a,{onClick:e.onClick,color:"secondary",startIcon:r.a.createElement(V.a,null)},"\u56de\u5831\u932f\u8aa4"):r.a.createElement("div",null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(102)},84:function(e,t,a){},86:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.1164755e.chunk.js.map