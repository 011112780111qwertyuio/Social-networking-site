(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7399)}])},6971:function(s,e,a){"use strict";var l=a(5893),i=a(7294),c=a(1664),n=a.n(c),t=a(2120);a(3176);var r=a(7088);e.Z=function(){let{t:s}=(0,t.$G)(),{ModilePost:e,Alldata:a,login_system:c}=(0,i.useContext)(r.A),d=a.Login_in;(0,i.useEffect)(()=>{localStorage.setItem("Login-system",a.Login_in)},[a.Login_in]);let[o,m]=(0,i.useState)("hide-effects"),[h,x]=(0,i.useState)([]),[j,p]=(0,i.useState)(!0);if((0,i.useEffect)(()=>{let s=new XMLHttpRequest,e=new FormData;e.append("usersid",d),s.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let s=JSON.parse(this.responseText);x(s),p(!1)}},s.open("POST","http://localhost/api/controls/scema_user.php",!0),s.send(e)},[h]),!1===j)return(0,l.jsx)("div",{className:"style-navpar",children:(0,l.jsx)("div",{className:"navpar header",children:(0,l.jsx)("div",{className:"content-navpar content",children:(0,l.jsxs)("div",{className:"flex-nav",children:[(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("a",{href:"/",children:s("logo")})}),(0,l.jsxs)("div",{className:"search",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-magnifying-glass"})})}),(0,l.jsx)("div",{className:"input",children:(0,l.jsx)("input",{dir:s("dir"),type:"search",placeholder:s("search")})})]}),(0,l.jsxs)("div",{className:"profile",children:[(0,l.jsx)("button",{onClick:s=>{e("out-effexts"),s.preventDefault()},children:s("create_butt")}),(0,l.jsxs)("div",{onClick:()=>{m("out-effexts"===o?"hide-effects":"out-effexts")},className:"avtar",children:[null===h[0].urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),null!==h[0].urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/images/"+h[0].urlimage,alt:""}),(0,l.jsxs)("div",{className:"drob-menue ".concat(o),children:[(0,l.jsxs)("div",{className:"title-menue",children:[(0,l.jsx)("p",{className:"name-acont",children:h[0].firstname+" "+h[0].lastname}),(0,l.jsxs)("p",{className:"email",children:[h[0].email,"@"]})]}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-user"})}),(0,l.jsx)(n(),{href:"/Profile",children:s("myprofile")})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-gear"})}),(0,l.jsx)(n(),{href:"/Editprofile",children:s("editprofile")})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-regular fa-face-smile"})}),(0,l.jsx)(n(),{href:"",children:s("help")})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-hashtag"})}),(0,l.jsxs)(n(),{href:"/sign-in",onClick:()=>{c("false"),console.log(a.Login_in)},children:[" ",s("logout")," "]})]})]})]})]})]})]})})})})}},7399:function(s,e,a){"use strict";a.r(e),a.d(e,{default:function(){return R}});var l=a(5893);a(9008);var i=a(1163),c=a(7294),n=a(7088),t=a(2120),r=function(){let{t:s,i18n:e}=(0,t.$G)(),{Alldata:a,modilecontrolthemths:i,themth_modle_dark:r,color_buttons:d}=(0,c.useContext)(n.A),o=()=>{r("")},m=()=>{r("Sub-dark-mode")},h=()=>{r("Dark-mode")},x=()=>{d("buttn-primry")},j=()=>{d("buttn-orange")},p=()=>{d("buttn-red")},u=()=>{d("buttn-green")},v=()=>{d("buttn-subprimry")},N=s=>{s.target.className==="style-stings-thems ".concat(a.modilecontrolthemth)&&i("hide-effects")};return(0,l.jsx)("div",{onClick:s=>{N(s)},className:"style-stings-thems ".concat(a.modilecontrolthemth),children:(0,l.jsx)("div",{className:"form",children:(0,l.jsxs)("div",{className:"box",children:[(0,l.jsxs)("div",{className:"content-box",children:[(0,l.jsx)("p",{className:"title",children:s("control")}),(0,l.jsx)("p",{className:"cont",children:s("contentcontrol")})]}),(0,l.jsxs)("div",{className:"sizes",children:[(0,l.jsx)("p",{className:"title",children:s("zoom")}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:"-"})}),(0,l.jsxs)("div",{className:"points",children:[(0,l.jsx)("div",{className:"pount"}),(0,l.jsx)("div",{className:"pount"}),(0,l.jsx)("div",{className:"pount"}),(0,l.jsx)("div",{className:"pount"}),(0,l.jsx)("div",{className:"pount"})]}),(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:"+"})})]})]}),(0,l.jsxs)("div",{className:"colors",children:[(0,l.jsx)("p",{children:s("colors")}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{onClick:()=>{x()},className:"pount-1"}),(0,l.jsx)("div",{onClick:()=>{j()},className:"pount-2"}),(0,l.jsx)("div",{onClick:()=>{p()},className:"pount-3"}),(0,l.jsx)("div",{onClick:()=>{u()},className:"pount-4"}),(0,l.jsx)("div",{onClick:()=>{v()},className:"pount-5"})]})]}),(0,l.jsxs)("div",{className:"buttons-mode",children:[(0,l.jsx)("p",{className:"title",children:s("colorsmode")}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("div",{onClick:()=>{o()},className:"light",children:[(0,l.jsx)("div",{}),(0,l.jsx)("p",{children:s("light")})]}),(0,l.jsxs)("div",{onClick:()=>{m()},className:"dark-sup",children:[(0,l.jsx)("div",{}),(0,l.jsx)("p",{children:s("subdark")})]}),(0,l.jsxs)("div",{onClick:()=>{h()},className:"dark",children:[(0,l.jsx)("div",{}),(0,l.jsx)("p",{children:s("dark")})]})]})]})]})})})},d=a(6154),o=a(3176),m=a(1737),h=function(){let{t:s,i18n:e}=(0,t.$G)(),{Alldata:a,ModilePost:i}=(0,c.useContext)(n.A),[r,o]=(0,c.useState)(!0),[h,x]=(0,c.useState)([]),j=a.Login_in,p=async s=>{var e=new FormData;e.append("usersid",j),await d.Z.post("http://localhost/api/controls/scema_user.php",e).then(s=>{x(s),o(!1)})};(0,c.useEffect)(()=>{p()},[]);let[u,v]=(0,c.useState)(null),[N,f]=(0,c.useState)(""),[g,b]=(0,c.useState)("none"),[y,S]=(0,c.useState)(""),[k,_]=(0,c.useState)("error"),[C,w]=(0,c.useState)("none"),Z=async s=>{if(s.preventDefault(),null!==u){if("image/jpeg"==u.type){w("");var e=new FormData;e.append("imgpost",u),e.append("dess",N),e.append("usersid",j),d.Z.post("http://localhost/api/controls/scema_createpost.php",e).then(s=>{b(""),_("success"),S("تم النشر بواسطة ".concat(h.data[0].firstname)),w("none"),v(null),f("");let e=0,a=setInterval(()=>{1==++e&&(b("none"),clearInterval(a),i("hide-effects"))},200)})}if("image/jpeg"!==u.type){console.log("الموقع لايدعم الفيديو");let s=0,e=setInterval(()=>{b(""),_("error"),S("الموقع لايدعم الفيديو"),10==++s&&(b("none"),clearInterval(e),s=0)},200)}}if(""!==N&&null!==u){if("image/jpeg"==u.type){w("");var e=new FormData;e.append("imgpost",u),e.append("dess",N),e.append("usersid",j),d.Z.post("http://localhost/api/controls/scema_createpost.php",e).then(s=>{b(""),_("success"),S("تم النشر بواسطة ".concat(h.data[0].firstname)),w("none"),v(null),f("");let e=0,a=setInterval(()=>{1==++e&&(b("none"),clearInterval(a),i("hide-effects"))},200)})}if("image/jpeg"!==u.type){console.log("الموقع لايدعم الفيديو");let s=0,e=setInterval(()=>{b(""),_("error"),S("الموقع لايدعم الفيديو"),10==++s&&(b("none"),clearInterval(e),s=0)},200)}}if(""==N&&null==u){console.log("اكتب");let s=0,e=setInterval(()=>{b(""),_("error"),S("اكتب"),10==++s&&(b("none"),clearInterval(e),s=0)},200)}if(""!==N){w("");var e=new FormData;e.append("imgpost",u),e.append("dess",N),e.append("usersid",j),v(null),d.Z.post("http://localhost/api/controls/scema_createpost.php",e).then(s=>{b(""),_("success"),S("تم النشر بواسطة ".concat(h.data[0].firstname)),w("none"),f("");let e=0,a=setInterval(()=>{5==++e&&(b("none"),clearInterval(a),i("hide-effects"))},50)})}};if(!1===r)return(0,l.jsxs)("div",{onClick:s=>{s.target.className==="style-modile-sharpost ".concat(a.modileshatepost)&&i("hide-effects")},className:"style-modile-sharpost ".concat(a.modileshatepost),children:[(0,l.jsx)("div",{className:"alerts",children:(0,l.jsx)(m.Z,{className:"".concat(g),severity:k,children:y})}),(0,l.jsx)("div",{className:"box",children:(0,l.jsxs)("form",{children:[(0,l.jsx)("div",{className:"loading-share ".concat(C)}),(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("p",{children:s("sharepost")})}),(0,l.jsxs)("div",{className:"content-post",children:[(0,l.jsxs)("div",{className:"nav-post",children:[(0,l.jsxs)("div",{className:"avtar",children:[null===h.data[0].urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),null!==h.data[0].urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/images/"+h.data[0].urlimage,alt:""})]}),(0,l.jsxs)("div",{className:"name-acount-select",children:[(0,l.jsx)("p",{className:"name",children:h.data[0].firstname+" "+h.data[0].lastname}),(0,l.jsx)("div",{children:(0,l.jsxs)("select",{children:[(0,l.jsx)("option",{className:"select-flex",children:s("acount")}),(0,l.jsx)("option",{children:s("frinds")}),(0,l.jsx)("option",{children:s("privet")})]})})]})]}),(0,l.jsxs)("div",{className:"box-text",children:[(0,l.jsx)("div",{className:"box-img",children:u&&(0,l.jsx)("div",{value:u,className:"img-file",children:(0,l.jsx)("img",{alt:"",src:URL.createObjectURL(u)})})}),(0,l.jsx)("textarea",{value:N,onChange:s=>{f(s.target.value)},dir:s("dir"),placeholder:s("createposttext")})]}),(0,l.jsxs)("div",{className:"flex-icon",children:[(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-pen"})}),(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-regular fa-face-smile"})})]}),(0,l.jsx)("div",{className:"nav-edit",children:(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"right",children:(0,l.jsx)("p",{className:"mytitle",children:"add to year post"})}),(0,l.jsxs)("div",{className:"edit",children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{type:"file",onChange:s=>{v(s.target.files[0])}}),(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-regular fa-image"})})]}),(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-wand-magic-sparkles"})}),(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-gear"})})]})]})}),(0,l.jsx)("div",{className:"share",children:(0,l.jsx)("button",{onClick:Z,className:"share-post",children:s("sharepost")})})]})]})})]})},x=a(6971),j=function(){let[s,e]=(0,c.useState)("hide-navpar-mobile"),{modilecontrolthemths:a,Alldata:i,setdialoginteraction:t}=(0,c.useContext)(n.A),r=(0,c.useRef)(null),o=i.Login_in,[m,h]=(0,c.useState)(!0),[x,j]=(0,c.useState)();setInterval(()=>{var s=new FormData;s.append("usermessage",o),d.Z.post("http://localhost/api/controls/scema_outintationuser.php",s).then(s=>{j(s),h(!1)})},200);let p=()=>{var s=new FormData;s.append("userid",o),d.Z.post("http://localhost/api/controls/scema_delemassagelogs.php",s).then(s=>{console.log("deleate messgae")})};if(!1===m)return(0,l.jsx)("div",{className:"style-navpar-mobile ".concat(s),children:(0,l.jsxs)("div",{className:"flexx",ref:r,children:[(0,l.jsxs)("div",{className:"buttons",children:[(0,l.jsx)("div",{onClick:()=>{window.scrollTo(1,-1)},className:"button ",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-house"})})}),(0,l.jsx)("div",{className:"button",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fas fa-expand"})})}),(0,l.jsxs)("div",{onClick:()=>{t(""),p()},className:"button promes",children:[(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-bell"})}),x.data.length>0&&(0,l.jsx)("p",{children:"+1"})]}),(0,l.jsx)("div",{className:"button",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"far fa-comment-alt"})})}),(0,l.jsx)("div",{onClick:()=>{a("out-effexts")},className:"button",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fab fa-themeisle"})})})]}),(0,l.jsx)("div",{onClick:()=>{e("hide-navpar-mobile"===s?"":"hide-navpar-mobile")},className:"tatch"})]})})},p=a(1664),u=a.n(p),v=function(){let{t:s,i18n:e}=(0,t.$G)(),{ModilePost:a,modilecontrolthemths:i,Alldata:r,setdialoginteraction:o}=(0,c.useContext)(n.A),m=r.Login_in,[h,x]=(0,c.useState)([]),[j,p]=(0,c.useState)(!0);(0,c.useEffect)(()=>{var s=new FormData;s.append("usersid",m);let e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let s=JSON.parse(this.responseText);x(s),p(!1)}},e.open("POST","http://localhost/api/controls/scema_user.php",!0),e.send(s)},[h]);let[u,v]=(0,c.useState)(!0),[N,f]=(0,c.useState)();setInterval(()=>{var s=new FormData;s.append("usermessage",m),d.Z.post("http://localhost/api/controls/scema_outintationuser.php",s).then(s=>{f(s),v(!1)})},200);let g=()=>{var s=new FormData;s.append("userid",m),d.Z.post("http://localhost/api/controls/scema_delemassagelogs.php",s).then(s=>{console.log("deleate messgae")})};if(!1===j&&!1===u)return(0,l.jsx)("div",{className:"style-navpar-left",children:(0,l.jsx)("div",{className:"content-navpar",children:(0,l.jsxs)("div",{className:"flex-nav",children:[(0,l.jsxs)("div",{className:"profile",children:[(0,l.jsxs)("div",{className:"avtar",children:[null===h[0].urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),null!==h[0].urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/images/"+h[0].urlimage,alt:""})]}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"name-acount",children:h[0].firstname+" "+h[0].lastname}),(0,l.jsx)("p",{className:"email-acount",children:h[0].email})]})]}),(0,l.jsxs)("div",{className:"flex-buttons",children:[(0,l.jsxs)("label",{className:"button",children:[(0,l.jsx)("input",{type:"radio",name:"i"}),(0,l.jsxs)("div",{className:"butt",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-house"})})}),(0,l.jsx)("div",{className:"name",children:(0,l.jsx)("p",{children:s("home")})})]})]}),(0,l.jsxs)("label",{className:"button",children:[(0,l.jsx)("input",{type:"radio",name:"i"}),(0,l.jsxs)("div",{className:"butt",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fas fa-expand"})})}),(0,l.jsx)("div",{className:"name",children:(0,l.jsx)("p",{children:s("explore")})})]})]}),(0,l.jsxs)("label",{className:"button iteration",onClick:g,children:[(0,l.jsx)("input",{type:"radio",name:"i"}),(0,l.jsxs)("div",{className:"butt",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-bell"})})}),(0,l.jsx)("div",{onClick:()=>{o("")},className:"name",children:(0,l.jsx)("p",{children:s("nutration")})}),N.data.length>0&&(0,l.jsx)("p",{className:"mes",children:"+1"})]})]}),(0,l.jsxs)("label",{className:"button",children:[(0,l.jsx)("input",{type:"radio",name:"i"}),(0,l.jsxs)("div",{className:"butt",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"far fa-comment-alt"})})}),(0,l.jsx)("div",{className:"name",children:(0,l.jsx)("p",{children:s("message")})})]})]}),(0,l.jsxs)("label",{onClick:()=>{i("out-effexts")},className:"button",children:[(0,l.jsx)("input",{type:"radio",name:"i"}),(0,l.jsxs)("div",{className:"butt",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fab fa-themeisle"})})}),(0,l.jsx)("div",{className:"name",children:(0,l.jsx)("p",{children:s("themth")})})]})]}),(0,l.jsxs)("label",{className:"button",children:[(0,l.jsx)("input",{type:"radio",name:"i"}),(0,l.jsxs)("div",{className:"butt",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fas fa-wrench"})})}),(0,l.jsx)("div",{className:"name",children:(0,l.jsx)("p",{children:s("stigns")})})]})]})]}),(0,l.jsx)("button",{onClick:()=>{a("out-effexts")},className:"create-post",children:s("createpost")})]})})})};a(9755);var N=a(4803),f=a.n(N),g=a(7602),b=a(3197),y=a(4370),S=a(4436);function k(){let{t:s}=(0,t.$G)(),[e,a]=(0,c.useState)(!0),[i,n]=(0,c.useState)([]);return(setInterval(()=>{var s=new XMLHttpRequest;s.onreadystatechange=function(){4==this.readyState&&200==this.status&&(a(!1),n(JSON.parse(this.responseText)))},s.open("POST","http://localhost/api/controls/scema_posts.php",!0),s.send()},1e3),!0===e)?(0,l.jsx)(o.Z,{}):!1===e?(0,l.jsx)("div",{className:"cards-posts-users",children:(0,l.jsx)("div",{className:"flex",children:i.map(e=>(0,l.jsxs)("div",{className:"card-post",children:[(0,l.jsxs)("div",{className:"nav-card",children:[(0,l.jsxs)("div",{className:"flex-profile",children:[(0,l.jsxs)("div",{className:"avtar",children:[null==e.urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),null!==e.urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/images/"+e.urlimage,alt:""})]}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"name-acount",children:(0,l.jsx)(u(),{className:"name-acount",href:"/".concat(e.usersid),children:e.firstname+" "+e.lastname})}),(0,l.jsx)("p",{className:"username",children:(0,l.jsx)(f(),{fromNow:!0,date:e.datatime})})]})]}),(0,l.jsxs)("div",{className:"menue",children:[(0,l.jsx)("p",{onClick:s=>{("submenue hide"==s.target.parentElement.nextSibling.classList||"submenue"==s.target.parentElement.nextSibling.classList)&&s.target.parentElement.nextSibling.classList.toggle("hide")},children:(0,l.jsx)("i",{className:"fa-solid fa-ellipsis-vertical"})}),(0,l.jsx)("div",{className:"submenue hide",children:e.postid})]})]}),(0,l.jsxs)("div",{dir:s("dir"),className:"content-post",children:[(0,l.jsx)("p",{children:e.content}),"string"==typeof e.imagepost&&(0,l.jsx)("div",{className:"img-post",children:(0,l.jsx)("img",{src:"http://localhost/api/files/images/"+e.imagepost,alt:""})})]}),(0,l.jsx)("div",{className:"notiflcations",children:(0,l.jsx)("div",{dir:s("dir"),className:"flex",children:(0,l.jsxs)("div",{className:"left",children:[(0,l.jsx)(y.Z,{post_id:e.postid}),(0,l.jsx)(S.Z,{postid:e.postid,Poemsmanuserid:e.user_ID})]})})}),(0,l.jsxs)("div",{className:"hide",children:[(0,l.jsx)(b.Z,{post_id:e.postid,Poemsmanuser:e.user_ID}),(0,l.jsx)(g.Z,{post_id:e.postid})]})]},e.postid))})}):void 0}var _=a(5697),C=a.n(_),w=a(6242),Z=a(8445),L=a(4267),I=a(3965),D=a(9661),E=a(8862),T=a(8078),F=a(2572),P=a(610);function A(s){let{setdialogstore:e,Alldata:a}=(0,c.useContext)(n.A),{loading:i=!1}=!0;return(0,l.jsx)("div",{className:"style-dialog-stores ".concat(a.dialogstore),children:(0,l.jsxs)(w.Z,{sx:{maxWidth:600,m:2},children:[(0,l.jsx)(Z.Z,{avatar:i?(0,l.jsx)(T.Z,{animation:"wave",variant:"circular",width:600,height:40}):(0,l.jsx)(D.Z,{alt:"Ted talk",src:"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"}),action:i?null:(0,l.jsx)(F.Z,{onClick:()=>{e("none"),console.log("hiddialog")},"aria-label":"fingerprint",color:"secondary",children:(0,l.jsx)(P.Z,{})}),title:i?(0,l.jsx)(T.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}):"Ted",subheader:i?(0,l.jsx)(T.Z,{animation:"wave",height:10,width:"40%"}):"5 hours ago"}),i?(0,l.jsx)(T.Z,{sx:{height:190},animation:"wave",variant:"rectangular"}):(0,l.jsx)(I.Z,{component:"img",height:"450",image:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",alt:"Nicola Sturgeon on a TED talk stage"}),(0,l.jsx)(L.Z,{children:i?(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(T.Z,{animation:"wave",height:10,style:{marginBottom:6}}),(0,l.jsx)(T.Z,{animation:"wave",height:10,width:"80%"})]}):(0,l.jsx)(E.Z,{variant:"body2",color:"text.secondary",component:"p",children:"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"})})]})})}A.propTypes={loading:C().bool};var O=function(){let{t:s}=(0,t.$G)(),[e,a]=(0,c.useState)(!0),{ModilePost:i,Alldata:r,setdialogstore:d}=(0,c.useContext)(n.A),m=r.Login_in,[h,x]=(0,c.useState)("none"),j=(0,c.useRef)(),[p,u]=(0,c.useState)([]);(0,c.useEffect)(()=>{var s=new FormData;s.append("usersid",m);let e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let s=JSON.parse(this.responseText);u(s),a(!1)}},e.open("POST","http://localhost/api/controls/scema_user.php",!0),e.send(s)},[p]);let[v,N]=(0,c.useState)(null),[f,g]=(0,c.useState)("");return!0===e?(0,l.jsx)(o.Z,{}):!1===e?(0,l.jsxs)("div",{className:"style-moduls",children:[(0,l.jsx)(A,{}),(0,l.jsx)("div",{className:"box-sorys",children:(0,l.jsx)("div",{className:"flex-sorys",ref:j,children:(0,l.jsxs)("div",{className:"storisusers",children:[(0,l.jsx)("div",{className:"eacount-store",children:(0,l.jsxs)("div",{className:"card-storey",children:[(0,l.jsx)("div",{className:"img-stroy",children:(0,l.jsx)("img",{src:"http://localhost/api/files/images/645cf3ae35e0cIMG20210817143150.jpg",alt:""})}),(0,l.jsxs)("div",{className:"flex-content",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("div",{className:"img",children:(0,l.jsx)("img",{src:"",alt:""})})}),(0,l.jsx)("div",{className:"name-acount",children:(0,l.jsx)("label",{className:"ublode-store",children:(0,l.jsx)("p",{className:"create-story",children:s("story")})})})]})]})}),(0,l.jsxs)("div",{onClick:()=>{d("")},className:"card-storey",children:[(0,l.jsx)("div",{className:"img-stroy",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"flex-content",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("div",{className:"img",children:(0,l.jsx)("img",{src:"",alt:""})})}),(0,l.jsx)("div",{className:"name-acount",children:(0,l.jsx)("p",{children:"AHMED"})})]})]}),(0,l.jsxs)("div",{onClick:()=>{d("")},className:"card-storey",children:[(0,l.jsx)("div",{className:"img-stroy",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"flex-content",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("div",{className:"img",children:(0,l.jsx)("img",{src:"",alt:""})})}),(0,l.jsx)("div",{className:"name-acount",children:(0,l.jsx)("p",{children:"ahmed fsd"})})]})]}),(0,l.jsxs)("div",{onClick:()=>{d("")},className:"card-storey",children:[(0,l.jsx)("div",{className:"img-stroy",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"flex-content",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("div",{className:"img",children:(0,l.jsx)("img",{src:"",alt:""})})}),(0,l.jsx)("div",{className:"name-acount",children:(0,l.jsx)("p",{children:"ahmed elaphr"})})]})]})]})})}),(0,l.jsx)("div",{className:"box-create-box",children:(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("div",{className:"name-avtar",children:[(0,l.jsxs)("div",{className:"img",children:[null==p[0].urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),null!==p[0].urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/images/"+p[0].urlimage,alt:""})]}),(0,l.jsx)("div",{className:"name-acount",children:p[0].firstname+" "+p[0].lastname})]}),(0,l.jsxs)("button",{onClick:()=>{i("out-effexts")},children:[" ",s("post")," "]})]})}),(0,l.jsx)(k,{})]}):void 0},q=function(){let{t:s,i18n:e}=(0,t.$G)(),a=(0,c.useRef)(null),[i,n]=(0,c.useState)(0),r=()=>{n(0),a.current.scrollLeft=i},d=()=>{n(280),a.current.scrollLeft=i},o=()=>{n(800),a.current.scrollLeft=i};return(0,l.jsx)("div",{className:"style-navpar-right",children:(0,l.jsxs)("div",{className:"contnet-navpar",children:[(0,l.jsxs)("div",{className:"box-message",children:[(0,l.jsxs)("div",{className:"boox-out-message",children:[(0,l.jsxs)("div",{className:"nav",children:[(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:s("message")})}),(0,l.jsx)("div",{children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-pen-to-square"})})})]}),(0,l.jsxs)("div",{className:"input-search",children:[(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa-solid fa-magnifying-glass"})})}),(0,l.jsx)("div",{className:"input",children:(0,l.jsx)("input",{dir:s("dir"),type:"search",placeholder:s("search")})})]})]}),(0,l.jsx)("div",{className:"buttons-select",children:(0,l.jsxs)("div",{className:"flex-bt",children:[(0,l.jsxs)("label",{onClick:()=>{r()},children:[(0,l.jsx)("input",{defaultChecked:!0,type:"radio",name:"i"}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:s("primry")})})]}),(0,l.jsxs)("label",{onClick:()=>{d()},children:[(0,l.jsx)("input",{type:"radio",name:"i"}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:s("genral")})})]}),(0,l.jsxs)("label",{onClick:()=>{o()},children:[(0,l.jsx)("input",{type:"radio",name:"i"}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("p",{children:s("requset")}),(0,l.jsx)("span",{children:"(2)"})]})]})]})}),(0,l.jsxs)("div",{className:"menue-out",ref:a,children:[(0,l.jsxs)("div",{className:"primaris",children:[(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"name-acount",children:"fdfds"}),(0,l.jsx)("p",{className:"cont-acount",children:"dfsdfsd"})]})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"name-acount",children:"fdfds"}),(0,l.jsx)("p",{className:"cont-acount",children:"dfsdfsd"})]})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"name-acount",children:"fdfds"}),(0,l.jsx)("p",{className:"cont-acount",children:"dfsdfsd"})]})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"name-acount",children:"fdfds"}),(0,l.jsx)("p",{className:"cont-acount",children:"dfsdfsd"})]})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"name-acount",children:"fdfds"}),(0,l.jsx)("p",{className:"cont-acount",children:"dfsdfsd"})]})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"name-acount",children:"fdfds"}),(0,l.jsx)("p",{className:"cont-acount",children:"dfsdfsd"})]})]})]}),(0,l.jsx)("div",{className:"genral",children:(0,l.jsx)("p",{children:"genral"})}),(0,l.jsx)("div",{className:"requstes",children:(0,l.jsx)("p",{children:"requstes"})})]})]}),(0,l.jsx)("p",{className:"reuest-add",children:"requsets"}),(0,l.jsxs)("div",{className:"boox-requsres",children:[(0,l.jsxs)("div",{className:"card",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content-acount",children:[(0,l.jsx)("p",{className:"name-acount",children:"name acount"}),(0,l.jsx)("p",{className:"cont-acount",children:"fsdffsd"})]})]}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("button",{className:"accept",children:s("acssept")}),(0,l.jsx)("button",{className:"delet",children:s("canse")})]})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content-acount",children:[(0,l.jsx)("p",{className:"name-acount",children:"name acount"}),(0,l.jsx)("p",{className:"cont-acount",children:"fsdffsd"})]})]}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("button",{className:"accept",children:s("acssept")}),(0,l.jsx)("button",{className:"delet",children:s("canse")})]})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content-acount",children:[(0,l.jsx)("p",{className:"name-acount",children:"name acount"}),(0,l.jsx)("p",{className:"cont-acount",children:"fsdffsd"})]})]}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("button",{className:"accept",children:s("acssept")}),(0,l.jsx)("button",{className:"delet",children:s("canse")})]})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{className:"avtar",children:(0,l.jsx)("img",{src:"",alt:""})}),(0,l.jsxs)("div",{className:"content-acount",children:[(0,l.jsx)("p",{className:"name-acount",children:"name acount"}),(0,l.jsx)("p",{className:"cont-acount",children:"fsdffsd"})]})]}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("button",{className:"accept",children:s("acssept")}),(0,l.jsx)("button",{className:"delet",children:s("canse")})]})]})]})]})})},G=function(){let{Alldata:s,setdialoginteraction:e}=(0,c.useContext)(n.A),{t:a,i18n:i}=(0,t.$G)(),[r,o]=c.useState([]),[m,h]=c.useState(!0);if(setInterval(()=>{d.Z.post("http://localhost/api/controls/scema_printinteration.php").then(s=>{o(s),h(!1)})},2e3),!1===m)return(0,l.jsxs)("div",{className:"menue-Poems ".concat(s.dialoginteraction),children:[(0,l.jsx)("span",{onClick:()=>{e("none")},children:(0,l.jsx)("i",{className:"fa-solid fa-xmark"})}),(0,l.jsx)("div",{dir:a("dir"),className:"mycards-card",children:r.data.map(s=>(0,l.jsx)("div",{className:"card",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"img-card",children:[null==s.urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/image-system/privet.jpg",alt:""}),null!==s.urlimage&&(0,l.jsx)("img",{src:"http://localhost/api/files/images/"+s.urlimage,alt:""})]}),(0,l.jsxs)("div",{className:"content-card",children:[(0,l.jsx)("a",{href:"/profileacountuser/".concat(s.Poemsuserid),className:"name-acount",children:s.firstname+" "+s.lastname}),"mycomment"===s.poemstype&&(0,l.jsx)("p",{className:"typenation",children:a("hecommentdmessage")}),"like"===s.poemstype&&(0,l.jsx)("p",{className:"typenation",children:a("helikemessage")}),(0,l.jsx)("p",{className:"data-time",children:(0,l.jsx)(f(),{fromNow:!0,date:s.datatimenotification})})]})]})},s.poemsid))})]})};function R(){let s=(0,i.useRouter)(),{Alldata:e}=(0,c.useContext)(n.A);(0,c.useEffect)(()=>{localStorage.setItem("Login-system",e.Login_in),localStorage.setItem("colorButtons",e.colorButtons),localStorage.setItem("themthmode",e.themthmode),window.document.body.className="".concat(e.colorButtons," ").concat(e.themthmode)},[e.colorButtons,e.themthmode,e.Login_in]);let[a,t]=(0,c.useState)(!0);if((0,c.useEffect)(()=>{"false"==e.Login_in&&(s.push("/sign-in"),t(!0)),"false"!==e.Login_in&&t(!1)},[]),!1===a)return(0,l.jsx)("div",{className:"layout",children:(0,l.jsxs)("div",{className:"style-home-page",children:[(0,l.jsx)(r,{}),(0,l.jsx)(h,{}),(0,l.jsxs)("div",{className:"style-home-page dark",children:[(0,l.jsx)(x.Z,{}),(0,l.jsxs)("div",{className:"flex-page",children:[(0,l.jsx)(j,{}),(0,l.jsx)(v,{}),(0,l.jsx)(O,{}),(0,l.jsx)(q,{}),(0,l.jsx)(G,{})]})]})]})})}}},function(s){s.O(0,[571,885,664,154,261,217,813,774,888,179],function(){return s(s.s=5557)}),_N_E=s.O()}]);