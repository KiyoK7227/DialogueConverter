(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(3),r=a(6),c=a(4),u=a(7),s=a(1),o=a(0),m=a.n(o),i=a(5),p=a.n(i),b=(a(19),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(s.a)(Object(s.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(s.a)(Object(s.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){for(var t=this,a=this.state.value.split(/\r\n|\n/),n=[],l=0;l<a.length;l++){var r=a[l];if(!(r.length<=0))if((-1===r.indexOf("\u300c")?1/0:r.indexOf("\u300c"))<(-1===r.indexOf("\uff08")?1/0:r.indexOf("\uff08"))){var c=r.split(/(?<=^[^\u300c]+?)\u300c/);c.length<=1&&c.unshift(""),c[1]=c[1].replace(/(.*)\u300d/,"$1"),n.push(c[0]+"\t"+c[1])}else{var u=r.split(/(?<=^[^\uff08]+?)\uff08/);u.length<=1?u.unshift(""):u[1]="\uff08"+u[1],n.push(u[0]+"\t"+u[1])}}n=n.join("\n"),navigator.clipboard.writeText(n).then(function(e){return t.sendResult(!0)},function(e){return t.sendResult(!1)}),e.preventDefault()}},{key:"sendResult",value:function(e){if(e){var t=document.getElementById("js-popup");if(t){t.classList.add("is-show");var a=document.getElementById("js-black-bg"),n=document.getElementById("js-close-btn");l(a),l(n)}}else window.alert("\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3002\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3078\u306e\u30b3\u30d4\u30fc\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\n\u304a\u624b\u6570\u3067\u3059\u304c\u5225\u306e\u30d6\u30e9\u30a6\u30b6\u306a\u3069\u3092\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002");function l(e){e&&e.addEventListener("click",function(){t.classList.remove("is-show")})}}},{key:"render",value:function(){var e=document.querySelector("textarea"),t=(e?e.value.split("\n").length:0)+1;return m.a.createElement(m.a.Fragment,null,m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("div",{id:"formAlign"},m.a.createElement("textarea",{className:"textArea",style:{width:"50%"},rows:t,value:this.state.value,onChange:this.handleChange})),m.a.createElement("input",{type:"submit",value:"\u5909\u63db\u3057\u3066\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3078\u30b3\u30d4\u30fc",className:"button"})))}}]),t}(m.a.Component)),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={value:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"popup_wrap"},m.a.createElement("input",{id:"trigger",type:"checkbox"}),m.a.createElement("div",{className:"popup_overlay"},m.a.createElement("label",{htmlFor:"trigger",className:"popup_trigger"}),m.a.createElement("div",{className:"popup_content"},m.a.createElement("label",{htmlFor:"trigger",className:"close_btn"},"\xd7"),m.a.createElement("h1",{className:"popup-logo"},"\u3053\u308c\u306f\u3069\u3093\u306a\u30a2\u30d7\u30ea\uff1f"),m.a.createElement("p",null,'\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30bb\u30ea\u30d5\u3092 "\u540d\u524d" \u3068 "\u30bb\u30ea\u30d5" \u3067\u30bb\u30eb\u5358\u4f4d\u3054\u3068\u306b\u5206\u5272\u3057\u3066\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b',m.a.createElement("br",null),"\u30b3\u30d4\u30fc\u3067\u304d\u308bWeb\u30a2\u30d7\u30ea\u3067\u3059\u3002"),m.a.createElement("h1",{className:"popup-logo"},"\u3069\u3046\u3044\u3046\u3053\u3068\uff1f"),m.a.createElement("p",null,"\u4f8b\u3048\u3070\u2026\u2026",m.a.createElement("br",null),"\u7530\u4e2d\u300c\u4ffa\u306e\u597d\u304d\u306a\u540d\u53f0\u8a5e\u306f\u300c\u304a\u524d\u306f\u3082\u3046\u2026\u2026\u6b7b\u3093\u3067\u3044\u308b\u30c3\uff01\uff01\u300d\u3060\u306d\uff5e\u300d\u3000\u3068\u3044\u3046\u30bb\u30ea\u30d5\u3092",m.a.createElement("br",null),"\u7530\u4e2d / \u4ffa\u306e\u597d\u304d\u306a\u540d\u53f0\u8a5e\u306f\u300c\u304a\u524d\u306f\u3082\u3046\u2026\u2026\u6b7b\u3093\u3067\u3044\u308b\u30c3\uff01\uff01\u300d\u3060\u306d\uff5e\u3000\u3068\u3044\u3046\u4e8c\u3064\u306e\u30bb\u30eb\u306b\u5206\u3051\u307e\u3059\u3002",m.a.createElement("br",null),m.a.createElement("br",null),"\u3064\u307e\u308a\u3001\u30b7\u30ca\u30ea\u30aa\u30e9\u30a4\u30bf\u30fc\u304c\u66f8\u3044\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u6587\u7ae0\u3092\u540d\u524d\u3068\u30bb\u30ea\u30d5\u306b\u5206\u5272\u3057\u3066\u30b2\u30fc\u30e0\u958b\u767a\u306a\u3069\u3067",m.a.createElement("br",null),"\u30b3\u30d4\u30da\u4f5c\u696d\u304c\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\uff01"),m.a.createElement("h1",{className:"popup-logo"},"\u4f7f\u3044\u65b9"),m.a.createElement("p",null,"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5909\u63db\u3057\u305f\u3044\u6587\u7ae0\u3092\u8cbc\u308a\u4ed8\u3051\u3066\u3001\u300c\u5909\u63db\u3057\u3066\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3078\u30b3\u30d4\u30fc\u300d\u3068\u3044\u3046\u30dc\u30bf\u30f3\u3092",m.a.createElement("br",null),"\u62bc\u3059\u3068\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u5206\u5272\u3057\u305f\u6587\u7ae0\u30c7\u30fc\u30bf\u3092\u30b3\u30d4\u30fc\u3067\u304d\u307e\u3059\u3002",m.a.createElement("br",null),"\u3042\u3068\u306f\u3001Excel\u3084\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u3078 Ctrl + V \u3067\u8cbc\u308a\u4ed8\u3051\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),m.a.createElement("h1",{className:"popup-logo"},"\uff11\u884c\u3065\u3064\u3057\u304b\u3067\u304d\u306a\u3044\u306e\uff1f\u30bb\u30ea\u30d5\u5f62\u5f0f\u306b\u306a\u3063\u3066\u306a\u3044\u5730\u306e\u6587\u306f\uff1f"),m.a.createElement("p",null,"\u4f55\u884c\u3067\u3082\u8cbc\u308a\u4ed8\u3051\u3089\u308c\u307e\u3059\u3088\u3002",m.a.createElement("br",null),"\u6587\u7ae0\u306b\u30bb\u30ea\u30d5\u306b\u306a\u3063\u3066\u306a\u3044\u5730\u306e\u6587\u304c\u6df7\u3058\u3063\u3066\u3044\u3066\u3082\u5927\u4e08\u592b\u3067\u3059\u3002")))),m.a.createElement("label",{htmlFor:"trigger",className:"open_btn"},"\u4f7f\u3044\u65b9"))}}]),t}(m.a.Component),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={value:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"popup",id:"js-popup"},m.a.createElement("div",{className:"popup-inner"},m.a.createElement("div",{className:"close-btn2",id:"js-close-btn"},m.a.createElement("label",{htmlFor:"js-close-btn",className:"close_btn"},"\xd7")),m.a.createElement("h1",{className:"popup-logo"},"\u6210\u529f\uff01"),m.a.createElement("p",null,"\u5909\u63db\u3057\u3066\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3078\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\u3002",m.a.createElement("br",null),"Excel\u3084\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u3078\u8cbc\u308a\u4ed8\u3051\u3066\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002",m.a.createElement("br",null),m.a.createElement("br",null),"\u203b\u8cbc\u308a\u4ed8\u3051\u308b\u969b\u306f\u30bb\u30eb\u3092\u30b7\u30f3\u30b0\u30eb\u30af\u30ea\u30c3\u30af\u3057\u305f\u72b6\u614b\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),m.a.createElement("div",{className:"black-background",id:"js-black-bg"})))}}]),t}(m.a.Component);p.a.createRoot(document.getElementById("root")).render(m.a.createElement(b,null)),p.a.createRoot(document.getElementById("root2")).render(m.a.createElement(d,null)),p.a.createRoot(document.getElementById("root3")).render(m.a.createElement(E,null))},19:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,2,1]]]);
//# sourceMappingURL=main.dc246271.chunk.js.map