"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[2936],{22936:function(e,n,r){r.d(n,{Iy:function(){return m},Zv:function(){return T},_e:function(){return g},au:function(){return y},ZP:function(){return i}});var t=r(46417);var u=r(1413),o=r(75627);function i(e){var n=e.children,r=e.onSubmit,i=e.methods,a=e.formProps;return(0,t.jsx)(o.RV,(0,u.Z)((0,u.Z)({},i),{},{children:(0,t.jsx)("form",(0,u.Z)((0,u.Z)({onSubmit:r},a),{},{children:n}))}))}var a=r(45987),l=r(47313),c=r(35898),s=r(15082),f="undefined"!==typeof window?l.useLayoutEffect:l.useEffect;var d=function(e,n,r,t){var u=(0,l.useRef)(n);f((function(){u.current=n}),[n]),(0,l.useEffect)((function(){var n=(null===r||void 0===r?void 0:r.current)||window;if(n&&n.addEventListener){var o=function(e){return u.current(e)};return n.addEventListener(e,o,t),function(){n.removeEventListener(e,o)}}}),[e,r,t])},v=["keyName","inputs"];function m(e){var n=e.keyName,r=void 0===n?"":n,i=e.inputs,f=void 0===i?[]:i,m=(0,a.Z)(e,v),p=(0,l.useRef)(null),h=(0,o.Gc)(),x=h.control,Z=h.setValue,g=(0,l.useRef)({});return d("paste",(function(e){var n;e.preventDefault();var r=null===(n=e.clipboardData)||void 0===n?void 0:n.getData("text").split("");r&&f.map((function(e,n){return Z(e,r[n],{shouldDirty:!0,shouldValidate:!0,shouldTouch:!0})}))}),p),(0,t.jsx)(c.Z,{direction:"row",spacing:2,justifyContent:"center",ref:p,children:f.map((function(e,n){return(0,t.jsx)(o.Qr,{name:e,control:x,render:function(n){var o=n.field,i=n.fieldState.error;return void 0===g.current[e]&&(g.current[e]=(0,l.createRef)()),(0,t.jsx)(s.Z,(0,u.Z)((0,u.Z)({},o),{},{inputRef:g.current[e],error:!!i,placeholder:"-",autoComplete:"new-password",onChange:function(e){!function(e,n){var t,u=e.target,o=u.maxLength,i=u.value,a=u.name.replace(r,""),l=Number(a),c=null===(t=g.current[f[l+1]])||void 0===t?void 0:t.current;i.length>o&&(e.target.value=i[0]),i.length>=o&&l<f.length&&c&&c.focus(),n(e)}(e,o.onChange)},onFocus:function(e){return e.currentTarget.select()},InputProps:{sx:{width:{xs:36,sm:56},height:{xs:36,sm:56},"& input":{p:0,textAlign:"center"}}},inputProps:{maxLength:1,type:"number"}},m))}},e)}))})}var p=r(83929),h=r(70024),x=r(15480),Z=["name","helperText"];function g(e){var n=e.name,r=e.helperText,i=(0,a.Z)(e,Z),l=(0,o.Gc)().control;return(0,t.jsx)(o.Qr,{name:n,control:l,render:function(e){var n=e.field,o=e.fieldState.error;return(0,t.jsxs)("div",{children:[(0,t.jsx)(p.Z,(0,u.Z)({control:(0,t.jsx)(h.Z,(0,u.Z)((0,u.Z)({},n),{},{checked:n.value}))},i)),(!!o||r)&&(0,t.jsx)(x.Z,{error:!!o,children:o?null===o||void 0===o?void 0:o.message:r})]})}})}var j=["name","helperText"];function y(e){var n=e.name,r=e.helperText,i=(0,a.Z)(e,j),l=(0,o.Gc)().control;return(0,t.jsx)(o.Qr,{name:n,control:l,render:function(e){var n=e.field,o=e.fieldState.error;return(0,t.jsx)(s.Z,(0,u.Z)((0,u.Z)({},n),{},{fullWidth:!0,value:"number"===typeof n.value&&0===n.value?"":n.value,error:!!o,helperText:o?null===o||void 0===o?void 0:o.message:r},i))}})}var b=r(29439),w=r(41727),k=r(47131),_=r(10978),C=["name","label"],T=function(e){var n=e.name,r=e.label,o=(0,a.Z)(e,C),i=(0,l.useState)(!1),c=(0,b.Z)(i,2),s=c[0],f=c[1];return(0,t.jsx)(y,(0,u.Z)({name:n,label:r,type:s?"text":"password",InputProps:{endAdornment:(0,t.jsx)(w.Z,{position:"end",children:(0,t.jsx)(k.Z,{onClick:function(){return f((function(e){return!e}))},edge:"end",children:(0,t.jsx)(_.Z,{icon:s?"eva:eye-fill":"eva:eye-off-fill"})})})}},o))}}}]);