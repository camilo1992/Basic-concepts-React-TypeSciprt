(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(3),c=n.n(o),i=(n(14),n(4)),r=n.n(i),s=n(0),u=function(t){return Object(s.jsx)("li",{onClick:t.deleteText,className:r.a.item,children:t.text})},a=n(5),d=n.n(a),l=n(9),j=n(1),x=n.n(j),f=n(6),b=n(7),m=Object(f.a)((function t(e){Object(b.a)(this,t),this.text=void 0,this.id=void 0,this.text=e,this.id=(new Date).toISOString()})),O=x.a.createContext({items:[],addNote:function(t){},deleteNote:function(t){}}),h=function(t){var e=Object(j.useState)([]),n=Object(l.a)(e,2),o=n[0],c=n[1],i={items:o,addNote:function(t){var e=new m(t);c((function(t){return t.concat(e)}))},deleteNote:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}};return Object(s.jsx)(O.Provider,{value:i,children:t.children})},p=function(){var t=Object(j.useContext)(O);return Object(s.jsx)("ul",{className:d.a.todos,children:t.items.map((function(e){return Object(s.jsx)(u,{deleteText:t.deleteNote.bind(null,e.id),text:e.text},e.id)}))})},v=n(8),N=n.n(v),_=function(){var t=Object(j.useRef)(null),e=Object(j.useContext)(O);return Object(s.jsxs)("form",{className:N.a.form,onSubmit:function(n){n.preventDefault();var o=t.current.value;0!==o.trim().length&&(console.log(o),e.addNote(o))},children:[Object(s.jsx)("label",{htmlFor:"text",children:"Enter text"}),Object(s.jsx)("input",{id:"terxt",type:"text",ref:t}),Object(s.jsx)("button",{children:"Submit text"})]})};var S=function(){return Object(s.jsxs)(h,{children:[Object(s.jsx)(_,{}),Object(s.jsx)(p,{})]})};c.a.render(Object(s.jsx)(S,{}),document.getElementById("root"))},4:function(t,e,n){t.exports={item:"TodoItem_item__3ptxm"}},5:function(t,e,n){t.exports={todos:"Todos_todos__1KXkV"}},8:function(t,e,n){t.exports={form:"FormList_form__2mZZQ"}}},[[16,1,2]]]);
//# sourceMappingURL=main.eabe7511.chunk.js.map