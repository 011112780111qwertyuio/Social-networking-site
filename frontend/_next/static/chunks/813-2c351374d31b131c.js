"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{3197:function(e,t,s){var a=s(5893),n=s(7294),i=s(6154),l=s(2120),c=s(7088);t.Z=function(e){let{post_id:t,Poemsmanuser:s}=e,{Alldata:o,showdata:r}=(0,n.useContext)(c.A),d=o.Login_in,{t:m}=(0,l.$G)(),[p,h]=(0,n.useState)(""),[u,x]=(0,n.useState)(!0),f=()=>{let e=new FormData;e.append("usersid",d),i.Z.post("http://localhost/api/controls/scema_user.php",e).then(e=>{x(!1),h(e)})};(0,n.useEffect)(()=>{f()},[d]);let[j,g]=(0,n.useState)(""),[v,N]=(0,n.useState)(!1),[S,y]=(0,n.useState)(""),[k,w]=(0,n.useState)("none"),_=async()=>{let e=new FormData;e.append("newcomment",j),e.append("postid",t),e.append("userid",d),e.append("display",v);let s=new XMLHttpRequest;y("none"),w("but-load"),s.onreadystatechange=function(){4===this.readyState&&200===this.status&&(console.log("send this ok"),y(""),w("none"),P())},s.open("POST","http://localhost/api/controls/scema_addcomment.php",!0),s.send(e)},[b,C]=(0,n.useState)("mycomment"),[L,E]=(0,n.useState)("n"),P=()=>{var e=new FormData;e.append("poemstype",b),e.append("poemsvieow",L),e.append("Poemspostid",t),e.append("Poemsuserid",d),e.append("Poemsmanuserid",s),i.Z.post("http://localhost/api/controls/scema_iteration.php",e).then(e=>{console.log("get naitreaton")})};if(!1===u)return(0,a.jsxs)("div",{dir:m("dir"),className:"flex-send-coment",children:[(0,a.jsxs)("div",{className:"avtar",children:[null==p.data[0].urlimage&&(0,a.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),null!==p.data[0].urlimage&&(0,a.jsx)("img",{src:"http://localhost/api/files/images/"+p.data[0].urlimage,alt:""})]}),(0,a.jsxs)("div",{className:"input",children:[(0,a.jsx)("input",{type:"text",onChange:e=>{g(e.target.value)},placeholder:m("inputcreatecomment")}),(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"fl",children:(0,a.jsxs)("label",{children:[(0,a.jsx)("span",{children:"مجهول"}),(0,a.jsx)("input",{onClick:e=>{N(e.target.checked)},type:"checkbox"})]})})})]}),(0,a.jsx)("button",{className:"".concat(S," ").concat(o.color_button),onClick:_,children:m("buttsendcomment")}),(0,a.jsx)("button",{className:"but-load ".concat(k," ").concat(o.color_button),children:(0,a.jsx)("span",{className:"loade"})})]})}},4370:function(e,t,s){var a=s(5893),n=s(7294),i=s(2120);t.Z=function(e){let{post_id:t}=e,{t:s}=(0,i.$G)(),[l,c]=(0,n.useState)(!0),[o,r]=(0,n.useState)([]);if((0,n.useEffect)(()=>{let e=new FormData;e.append("postid",t);let s=new XMLHttpRequest;s.onreadystatechange=async function(){if(4===this.readyState&&200===this.status){let e=await JSON.parse(this.responseText);r(e),c(!1)}this.onerror&&console.log("erro buttoncomment")},s.open("POST","http://localhost/api/controls/scema_lengthcomment.php",!0),s.send(e)},[o]),!1===l)return(0,a.jsx)("div",{onClick:e=>{("coment"==e.target.classList||"com"==e.target.classList)&&e.target.parentElement.parentElement.parentElement.parentElement.nextSibling.classList.toggle("hide")},className:"coment",children:(0,a.jsxs)("span",{className:"com",children:[(0,a.jsx)("i",{className:"fa-solid fa-message"}),s("comment")," ",o.length]})})}},7602:function(e,t,s){s.d(t,{Z:function(){return u}});var a=s(5893),n=s(7294);s(9755);var i=s(6154),l=s(2120),c=s(7088),o=s(1664),r=s.n(o),d=function(){let{t:e}=(0,l.$G)();return(0,a.jsx)("div",{className:"print-send-comments",children:(0,a.jsx)("div",{dir:e("dir"),className:"comments",children:(0,a.jsxs)("div",{className:"show-comment",children:[!1,(0,a.jsxs)("div",{className:"avtar",children:[(0,a.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),!1]}),(0,a.jsxs)("div",{className:"flex-content",children:[(0,a.jsx)("div",{className:"name-acount",children:(0,a.jsx)(r(),{href:"/profileacountuser/}",children:"تم الرد بواسطة احمد"})}),(0,a.jsx)("div",{className:"datatime",children:"1211"}),(0,a.jsx)("div",{className:"flex-comment-date",children:(0,a.jsx)("div",{className:"comment",children:(0,a.jsx)("p",{children:"comment"})})})]})]})})})},m=function(){let{Alldata:e,showdata:t}=(0,n.useContext)(c.A),s=e.Login_in,[o,r]=(0,n.useState)(""),[m,p]=(0,n.useState)("none"),{t:h}=(0,l.$G)(),[u,x]=(0,n.useState)(""),[f,j]=(0,n.useState)(!0),g=()=>{let e=new FormData;e.append("usersid",s),i.Z.post("http://localhost/api/controls/scema_user.php",e).then(e=>{j(!1),x(e)})};if((0,n.useEffect)(()=>{g()},[s]),!1===f)return(0,a.jsxs)("div",{className:"send-comment-frinds",children:[(0,a.jsxs)("div",{dir:h("dir"),className:"flex-send-coment",children:[(0,a.jsxs)("div",{className:"avtar",children:[null==u.data[0].urlimage&&(0,a.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),null!==u.data[0].urlimage&&(0,a.jsx)("img",{src:"http://localhost/api/files/images/"+u.data[0].urlimage,alt:""})]}),(0,a.jsxs)("div",{className:"input",children:[(0,a.jsx)("input",{type:"text",placeholder:h("inputcreatecomment")}),(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"fl",children:(0,a.jsxs)("label",{children:[(0,a.jsx)("span",{children:"مجهول"}),(0,a.jsx)("input",{onClick:e=>{setcheckcomment(e.target.checked)},type:"checkbox"})]})})})]}),(0,a.jsx)("button",{className:"".concat(o," ").concat(e.color_button),children:h("sendrfindcomment")}),(0,a.jsx)("button",{className:"but-load ".concat(m," ").concat(e.color_button),children:(0,a.jsx)("span",{className:"loade"})})]}),(0,a.jsx)(d,{})]})},p=s(4803),h=s.n(p);s(3176);var u=function(e){let{post_id:t}=e,{Alldata:s}=(0,n.useContext)(c.A),[i,o]=(0,n.useState)(!0),[d,p]=(0,n.useState)([]);(0,n.useEffect)(()=>{var e=new FormData;e.append("postid",t);let s=new XMLHttpRequest;s.onreadystatechange=async function(){if(4===this.readyState&&200===this.status){let e=await JSON.parse(this.responseText);p(e),o(!1)}this.onerror&&console.log("erro comment")},s.open("POST","http://localhost/api/controls/scema_comments.php",!0),s.send(e)},[d]);let{t:u}=(0,l.$G)();if(!1===i)return(0,a.jsx)("div",{dir:u("dir"),className:"comments",children:d.map(e=>(0,a.jsxs)("div",{className:"show-comment",children:[1==e.display_comment&&(0,a.jsx)("div",{className:"avtar",children:(0,a.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""})}),0==e.display_comment&&(0,a.jsxs)("div",{className:"avtar",children:[null==e.urlimage&&(0,a.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),null!==e.urlimage&&(0,a.jsx)("img",{src:"http://localhost/api/files/images/"+e.urlimage,alt:""})]}),(0,a.jsxs)("div",{className:"flex-content",children:["0"==e.display_comment&&(0,a.jsx)("div",{className:"name-acount",children:(0,a.jsx)(r(),{href:"/profileacountuser/".concat(e.usersid),children:e.firstname+" "+e.lastname})}),"1"==e.display_comment&&(0,a.jsx)("div",{className:"name-acount",children:(0,a.jsx)(r(),{href:"/",children:u("privet")})}),(0,a.jsx)("div",{className:"datatime",children:(0,a.jsx)(h(),{fromNow:!0,date:e.data_time_comment})}),(0,a.jsx)("div",{className:"flex-comment-date",children:(0,a.jsx)("div",{className:"comment",children:e.comments})}),(0,a.jsxs)("div",{className:"navgation-comment",children:[(0,a.jsx)("div",{className:"control-send",children:(0,a.jsx)("p",{onClick:e=>{e.target.parentElement.nextSibling.classList.toggle("none")},children:u("sendrfindcomment")})}),(0,a.jsx)("div",{className:"none",children:(0,a.jsx)(m,{})})]})]})]},e.commentid))})}},4436:function(e,t,s){var a=s(5893),n=s(7294),i=s(2120),l=s(7088),c=s(6154);t.Z=function(e){let{postid:t,Poemsmanuserid:s}=e,{t:o}=(0,i.$G)(),{Alldata:r}=(0,n.useContext)(l.A),d=r.Login_in,[m,p]=(0,n.useState)("1"),[h,u]=(0,n.useState)(!0),[x,f]=(0,n.useState)("none"),[j,g]=(0,n.useState)(""),[v,N]=(0,n.useState)([]),S=()=>{var e=new FormData;e.append("poemstype","like"),e.append("poemsvieow","n"),e.append("Poemspostid",t),e.append("Poemsuserid",d),e.append("Poemsmanuserid",s),c.Z.post("http://localhost/api/controls/scema_iteration.php",e).then(e=>{console.log("get naitreaton like")})},[y,k]=(0,n.useState)([]);(0,n.useEffect)(()=>{var e=new FormData;e.append("likeuserid",d),e.append("likepostid",t);let s=new XMLHttpRequest;s.onreadystatechange=async function(){if(4===this.readyState&&200===this.status){let e=await JSON.parse(this.responseText);k(e),u(!1)}this.onerror&&console.log("erro like")},s.open("POST","http://localhost/api/controls/secma_checklike.php",!0),s.send(e)},[y]);let w=async()=>{S();var e=new FormData;e.append("postid",t),e.append("userid",d),e.append("mylike",m);let s=new XMLHttpRequest;g("none"),f(""),s.onreadystatechange=function(){4===this.readyState&&200===this.status&&(console.log("send this ok"),g(""),f("none"))},s.open("POST","http://localhost/api/controls/secma_addlike.php",!0),s.send(e)},_=async()=>{console.log("dislike");var e=new FormData;e.append("likeuserid",d),e.append("likepostid",t);let s=new XMLHttpRequest;g("none"),f(""),s.onreadystatechange=function(){4===this.readyState&&200===this.status&&(console.log("send this dislike"),g(""),f("none"))},s.open("POST","http://localhost/api/controls/scema_dislike.php",!0),s.send(e)};if((0,n.useEffect)(()=>{var e=new FormData;e.append("postid",t);let s=new XMLHttpRequest;s.onreadystatechange=async function(){if(4===this.readyState&&200===this.status){let e=await JSON.parse(this.responseText);N(e)}},s.open("POST","http://localhost/api/controls/scema_countlike.php",!0),s.send(e)},[v]),!1===h)return(0,a.jsxs)("div",{className:"horty",children:[1===y.length&&(0,a.jsxs)("span",{className:"".concat(j),onClick:_,children:[(0,a.jsx)("i",{className:"fa-solid fa-heart like acive"}),v.length," ",o("achiver")]}),0===y.length&&(0,a.jsxs)("span",{className:"".concat(j),onClick:w,children:[(0,a.jsx)("i",{className:"fa-solid fa-heart like "}),v.length," ",o("achiver")]}),(0,a.jsxs)("span",{className:"".concat(x),children:[(0,a.jsx)("i",{className:"fa-solid fa-heart like"}),v.length," ",o("achiver")]})]})}},3176:function(e,t,s){var a=s(5893);s(7294),t.Z=function(e){let{hide:t}=e;return(0,a.jsx)("div",{className:"loading-fixed ".concat(t),children:(0,a.jsx)("div",{className:"loading"})})}}}]);