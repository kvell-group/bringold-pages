"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[6043],{65630:function(e,n,r){r.d(n,{ZP:function(){return t.Z}});var t=r(5603)},69408:function(e,n,r){r.r(n),r.d(n,{default:function(){return ce}});var t=r(65964),i=r(47825),a=r(35898),s=r(93412),o=r(1413),l=r(45987),c=r(57829),d=r(61113),u=r(3404),p=r(90891),h=r(2135),x=r(46417);function m(e){var n=e.link,r=e.activeLast,t=e.disabled,i=n.name,a=n.href,s=n.icon,l=(0,o.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},t&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),d=(0,x.jsxs)(x.Fragment,{children:[s&&(0,x.jsx)(c.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),i]});return a?(0,x.jsx)(p.Z,{component:h.rU,to:a,sx:l,children:d}):(0,x.jsxs)(c.Z,{sx:l,children:[" ",d," "]})}var f=["links","action","heading","moreLink","activeLast","sx"];function v(e){var n=e.links,r=e.action,t=e.heading,i=e.moreLink,s=e.activeLast,h=e.sx,v=(0,l.Z)(e,f),j=n[n.length-1].name;return(0,x.jsxs)(c.Z,{sx:(0,o.Z)({mb:5},h),children:[(0,x.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(c.Z,{sx:{flexGrow:1},children:[t&&(0,x.jsx)(d.Z,{variant:"h4",gutterBottom:!0,children:t}),!!n.length&&(0,x.jsx)(u.Z,(0,o.Z)((0,o.Z)({separator:(0,x.jsx)(g,{})},v),{},{children:n.map((function(e){return(0,x.jsx)(m,{link:e,activeLast:s,disabled:e.name===j},e.name||"")}))}))]}),r&&(0,x.jsxs)(c.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!i&&(0,x.jsx)(c.Z,{sx:{mt:2},children:i.map((function(e){return(0,x.jsx)(p.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function g(){return(0,x.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}var j=r(30547),b=r(74165),Z=r(15861),w=r(47313),y=r(75627),k=r(62563),P=r(32703),S=r(9019),q=r(73428),C=r(69973),R=r(65630),A=r(48148),I=r(22936),D=r(15480),L=r(17551),U=r(70501);function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e&&e.split(".").pop()||""}r(18551);var E=r(10978);function z(e){var n=e.fileRejections;return n.length?(0,x.jsx)(U.Z,{variant:"outlined",sx:{py:1,px:2,mt:3,bgcolor:function(e){return(0,L.Fq)(e.palette.error.main,.08)},borderColor:function(e){return(0,L.Fq)(e.palette.error.main,.24)}},children:n.map((function(e){var n=e.file,r=e.errors,t=function(e){return"string"===typeof e?{key:e,preview:e,name:(n=e,n.split("/").pop()),type:F(e)}:{key:e.preview,name:e.name,size:e.size,path:e.path,type:e.type,preview:e.preview,lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate};var n}(n),i=t.path,a=t.size;return(0,x.jsxs)(c.Z,{sx:{my:1},children:[(0,x.jsxs)(d.Z,{variant:"subtitle2",noWrap:!0,children:[i," - ",a?(0,A.oe)(a):""]}),r.map((function(e){return(0,x.jsxs)(c.Z,{component:"span",sx:{typography:"caption"},children:["- ",e.message]},e.code)}))]},i)}))}):null}var N=r(9651);function T(e){var n=e.file;if(!n)return null;var r="string"===typeof n?n:n.preview;return(0,x.jsx)(N.Z,{alt:"avatar",src:r,sx:{zIndex:8,overflow:"hidden",borderRadius:"50%",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})}r(24168);var _=r(17592);r(62316),(0,_.ZP)("div")((function(e){var n=e.theme;return{outline:"none",cursor:"pointer",overflow:"hidden",position:"relative",padding:n.spacing(5),borderRadius:n.shape.borderRadius,transition:n.transitions.create("padding"),backgroundColor:n.palette.background.neutral,border:"1px dashed ".concat((0,L.Fq)(n.palette.grey[500],.32)),"&:hover":{opacity:.72}}}));(0,_.ZP)("div")((function(e){var n=e.theme;return{width:64,height:64,fontSize:24,display:"flex",flexShrink:0,cursor:"pointer",alignItems:"center",justifyContent:"center",margin:n.spacing(.5),color:n.palette.text.disabled,borderRadius:n.shape.borderRadius,border:"dashed 1px ".concat(n.palette.divider),backgroundColor:(0,L.Fq)(n.palette.grey[500],.08),"&:hover":{opacity:.72}}}));var W=r(80614),O=["error","file","disabled","helperText","sx"],V=(0,_.ZP)("div")((function(e){var n=e.theme;return{width:144,height:144,margin:"auto",display:"flex",cursor:"pointer",overflow:"hidden",borderRadius:"50%",alignItems:"center",position:"relative",justifyContent:"center",border:"1px dashed ".concat((0,L.Fq)(n.palette.grey[500],.32))}})),M=(0,_.ZP)("div")((function(e){var n=e.theme;return{zIndex:7,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",width:"calc(100% - 16px)",height:"calc(100% - 16px)",color:n.palette.text.disabled,backgroundColor:n.palette.background.neutral,transition:n.transitions.create("opacity",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter})}}));function X(e){var n=e.error,r=e.file,t=e.disabled,i=e.helperText,a=e.sx,s=(0,l.Z)(e,O),c=(0,W.uI)((0,o.Z)({multiple:!1,disabled:t},s)),u=c.getRootProps,p=c.getInputProps,h=c.isDragActive,m=c.isDragReject,f=c.fileRejections,v=!!r,g=m||!!n;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(V,(0,o.Z)((0,o.Z)({},u()),{},{sx:(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},h&&{opacity:.72}),g&&(0,o.Z)({borderColor:"error.light"},v&&{bgcolor:"error.lighter"})),t&&{opacity:.48,pointerEvents:"none"}),v&&{"&:hover":{"& .placeholder":{opacity:1}}}),a),children:[(0,x.jsx)("input",(0,o.Z)({},p())),v&&(0,x.jsx)(T,{file:r}),(0,x.jsxs)(M,{className:"placeholder",sx:(0,o.Z)((0,o.Z)({"&:hover":{opacity:.72}},v&&{zIndex:9,opacity:0,color:"common.white",bgcolor:function(e){return(0,L.Fq)(e.palette.grey[900],.64)}}),g&&{color:"error.main",bgcolor:"error.lighter"}),children:[(0,x.jsx)(E.Z,{icon:"ic:round-add-a-photo",width:24,sx:{mb:1}}),(0,x.jsx)(d.Z,{variant:"caption",children:r?"Update photo":"Upload photo"})]})]})),i&&i,(0,x.jsx)(z,{fileRejections:f})]})}var G=["name"];function B(e){var n=e.name,r=(0,l.Z)(e,G),t=(0,y.Gc)().control;return(0,x.jsx)(y.Qr,{name:n,control:t,render:function(e){var n=e.field,t=e.fieldState.error;return(0,x.jsxs)("div",{children:[(0,x.jsx)(X,(0,o.Z)({accept:{"image/*":[]},error:!!t,file:n.value},r)),!!t&&(0,x.jsx)(D.Z,{error:!0,sx:{px:2,textAlign:"center"},children:t.message})]})}})}var K=r(68986),H=function(){var e=(0,K.Ds)().enqueueSnackbar,n={nickname:"Hudson Alvarez",email:"demo@.gmail.com",photoURL:R.ZP.image.avatar(0)},r=C.object().shape({nickname:C.string().required("Nickname is required"),email:C.string().required("Email is required").email("Email must be a valid email address"),photoURL:C.string().required("Avatar is required").nullable(!0)}),t={nickname:(null===n||void 0===n?void 0:n.nickname)||"",email:(null===n||void 0===n?void 0:n.email)||"",photoURL:(null===n||void 0===n?void 0:n.photoURL)||null},i=(0,y.cI)({resolver:(0,k.X)(r),defaultValues:t}),s=i.setValue,o=i.handleSubmit,l=i.formState.isSubmitting,c=function(){var n=(0,Z.Z)((0,b.Z)().mark((function n(r){return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),console.log("DATA",r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),u=(0,w.useCallback)((function(e){var n=e[0],r=Object.assign(n,{preview:URL.createObjectURL(n)});n&&s("photoURL",r,{shouldValidate:!0})}),[s]);return(0,x.jsxs)(a.Z,{spacing:3,children:[(0,x.jsx)(d.Z,{variant:"h6",children:"Profile settings"}),(0,x.jsx)(I.ZP,{methods:i,onSubmit:o(c),children:(0,x.jsxs)(S.ZP,{container:!0,spacing:3,children:[(0,x.jsx)(S.ZP,{item:!0,xs:12,md:4,children:(0,x.jsx)(q.Z,{sx:{py:3,px:3,textAlign:"center"},children:(0,x.jsx)(B,{name:"photoURL",maxSize:3145728,onDrop:u,helperText:(0,x.jsxs)(d.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,x.jsx)("br",{})," max size of ",(0,A.oe)(3145728)]})})})}),(0,x.jsx)(S.ZP,{item:!0,xs:12,md:8,children:(0,x.jsx)(q.Z,{sx:{p:3},children:(0,x.jsxs)(a.Z,{spacing:3,children:[(0,x.jsx)(I.au,{name:"nickname",label:"Nickname"}),(0,x.jsx)(I.au,{name:"email",label:"Email",disabled:!0}),(0,x.jsx)(a.Z,{alignItems:"flex-end",children:(0,x.jsx)(P.Z,{type:"submit",variant:"contained",loading:l,children:"Save Changes"})})]})})})]})})]})},Q=function(){var e=(0,K.Ds)().enqueueSnackbar,n=C.object().shape({isNewsEnabled:C.boolean(),isOrdersEnabled:C.boolean()}),r=(0,y.cI)({resolver:(0,k.X)(n),defaultValues:{isNewsEnabled:!0,isOrdersEnabled:!1}}),t=r.handleSubmit,i=r.formState.isSubmitting,s=function(){var n=(0,Z.Z)((0,b.Z)().mark((function n(r){return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),console.log("DATA",r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,x.jsx)(I.ZP,{methods:r,onSubmit:t(s),children:(0,x.jsx)(q.Z,{sx:{p:3},children:(0,x.jsxs)(a.Z,{spacing:3,children:[(0,x.jsx)(d.Z,{variant:"h6",children:"Notifications settings"}),(0,x.jsxs)(a.Z,{spacing:2,children:[(0,x.jsx)(d.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Email"}),(0,x.jsx)(I._e,{name:"isNewsEnabled",label:"I want recieve news"}),(0,x.jsx)(I._e,{name:"isOrdersEnabled",label:"I want recieve orders"})]}),(0,x.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",children:(0,x.jsx)(P.Z,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})})]})})})},$=function(){var e=(0,K.Ds)().enqueueSnackbar,n=C.object().shape({oldPassword:C.string().required("Old password is required"),newPassword:C.string().required("New password is required"),confirmPassword:C.string().required("Confirm password is required")}),r=(0,y.cI)({resolver:(0,k.X)(n),defaultValues:{oldPassword:"",newPassword:"",confirmPassword:""}}),t=r.handleSubmit,i=r.formState.isSubmitting,s=function(){var n=(0,Z.Z)((0,b.Z)().mark((function n(r){return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),console.log("DATA",r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,x.jsx)(I.ZP,{methods:r,onSubmit:t(s),children:(0,x.jsx)(q.Z,{sx:{p:3},children:(0,x.jsxs)(a.Z,{spacing:3,children:[(0,x.jsx)(d.Z,{variant:"h6",children:"Security settings"}),(0,x.jsx)(I.au,{type:"password",name:"oldPassword",label:"Old Password"}),(0,x.jsx)(I.au,{type:"password",name:"newPassword",label:"New Password"}),(0,x.jsx)(I.au,{type:"password",name:"confirmPassword",label:"Confirm New Password"}),(0,x.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",children:(0,x.jsx)(P.Z,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})})]})})})},J=r(4942),Y=r(98668),ee=r(94808),ne=r(19860),re=r(66149),te=r(96467),ie=r(86028),ae="success",se=function(){return(0,x.jsxs)(c.Z,{sx:{position:"relative"},children:[(0,x.jsx)(Y.Z,{variant:"determinate",sx:{color:"#637381"},size:40,thickness:4,value:100}),(0,x.jsx)(Y.Z,{variant:"indeterminate",disableShrink:!0,sx:(0,J.Z)({color:"#fff",animationDuration:"550ms",position:"absolute",left:0},"& .".concat(ee.Z.circle),{strokeLinecap:"round"}),size:40,thickness:4})]})},oe=function(e){var n=e.open,r=e.status,t=e.onClose,i=(0,ne.Z)();return(0,x.jsx)(re.Z,{open:n,onClose:t,maxWidth:"xs",fullWidth:!0,children:(0,x.jsx)(te.Z,{sx:{py:5,px:3,backgroundColor:r===ae?i.palette.primary.main:i.palette.background.paper},children:(0,x.jsxs)(ie.Z,{spacing:3,alignItems:"center",children:["loading"===r&&(0,x.jsxs)(w.Fragment,{children:[(0,x.jsx)(se,{}),(0,x.jsx)(d.Z,{variant:"h6",textAlign:"center",children:"Waiting Metamask"})]}),r===ae&&(0,x.jsxs)(w.Fragment,{children:[(0,x.jsx)(E.Z,{icon:"eva:checkmark-circle-2-outline",width:80,height:80}),(0,x.jsx)(d.Z,{variant:"h6",textAlign:"center",children:"Wallet changed successfully"})]})]})})})},le=function(){var e=(0,K.Ds)().enqueueSnackbar,n=C.object().shape({walletAddress:C.string().required("Wallet address is required")}),r=(0,y.cI)({resolver:(0,k.X)(n),defaultValues:{walletAddress:"0x261046486b867682d76db2b67962204168d9ab75"}}),t=r.handleSubmit,i=r.formState.isSubmitting,s=function(){var n=(0,Z.Z)((0,b.Z)().mark((function n(r){return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),console.log("DATA",r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,x.jsxs)(w.Fragment,{children:[(0,x.jsx)(I.ZP,{methods:r,onSubmit:t(s),children:(0,x.jsx)(q.Z,{sx:{p:3},children:(0,x.jsxs)(a.Z,{spacing:3,children:[(0,x.jsx)(d.Z,{variant:"h6",children:"Wallet address"}),(0,x.jsx)(I.au,{name:"walletAddress",label:"Wallet Address",disabled:!0}),(0,x.jsxs)(a.Z,{direction:"row",justifyContent:"flex-end",spacing:2,children:[(0,x.jsx)(P.Z,{type:"submit",variant:"contained",children:"Change wallet"}),(0,x.jsx)(P.Z,{type:"submit",variant:"contained",loading:i,disabled:!0,children:"Save Changes"})]})]})})}),(0,x.jsx)(oe,{open:!1,status:ae,onClose:function(){}})]})},ce=function(){var e=(0,j.K$)().themeStretch;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.ql,{children:(0,x.jsx)("title",{children:"Settings | BRINGOLD"})}),(0,x.jsxs)(i.Z,{maxWidth:!e&&"lg",children:[(0,x.jsx)(v,{heading:"Profile",links:[{name:"Profile",href:s.F6.userProfile},{name:"Edit"}]}),(0,x.jsxs)(a.Z,{spacing:3,children:[(0,x.jsx)(H,{}),(0,x.jsx)(le,{}),(0,x.jsx)($,{}),(0,x.jsx)(Q,{})]})]})]})}},48148:function(e,n,r){r.d(n,{FK:function(){return a},oe:function(){return o},uf:function(){return c},v1:function(){return s}});var t=r(31733),i=r.n(t);function a(e){return i()(e).format()}function s(e){return l(e?i()(e).format("0.00a"):"",".00")}function o(e){return l(e?i()(e).format("0.0 b"):"",".0")}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00",r=e.includes(n);return r?e.replace(n,""):e}var c=function(e){return new Intl.NumberFormat("ru-RU").format(e)}}}]);