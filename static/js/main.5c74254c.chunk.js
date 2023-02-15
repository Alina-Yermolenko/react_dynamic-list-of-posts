(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var a=s(9),n=s.n(a),c=s(4),r=s(2),i=s(3),o=s.n(i),l=s(1),d=(s(16),s(17),s(18),s(10)),j=s.n(d),m="https://mate.academy/students-api";function u(e){return new Promise((function(t){setTimeout(t,e)}))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return s&&(a.body=JSON.stringify(s),a.headers={"Content-Type":"application/json; charset=UTF-8"}),u(300).then((function(){return fetch(m+e,a)})).then((function(e){return e.json()}))}var h=function(e){return b(e)},O=function(e,t){return b(e,"POST",t)},x=function(e){return b(e,"DELETE")},p=s(0),f=function(e){var t=e.post,s=e.setPost,a=e.userPosts,n=e.detailsSeen,r=e.setDetailsSeen,i=e.setIsLoadingComments,l=e.setPostComments,d=function(e){return n&&t.id===e.id?"Close":"Open"},j=function(){var e=Object(c.a)(o.a.mark((function e(a){var c,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,c=h("/comments"),e.next=5,c;case 5:if(d=e.sent,!Array.isArray(d)||!d){e.next=9;break}return e.next=9,l(d.filter((function(e){return e.postId===a.id})));case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(1),Error("An error occured");case 14:i(!1),s(a),r(!0),n&&t.id===a.id&&r(!1);case 18:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{"data-cy":"PostsList",children:[Object(p.jsx)("p",{className:"title",children:"Posts:"}),Object(p.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{className:"has-background-link-light",children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:" "})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{"data-cy":"Post",children:[Object(p.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(p.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(p.jsx)("td",{className:"has-text-right is-vcentered",children:Object(p.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link \n                      ".concat("Open"===d(e)&&"is-light"),onClick:function(){j(e)},children:d(e)})})]},e.id)}))})]})]})},N=(s(20),function(){return Object(p.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(p.jsx)("div",{className:"Loader__content"})})}),v=s(8),y=function(e){var t=e.post,s=e.comments,a=e.setComments,n=e.setPostComments,i=e.postComments,d=Object(l.useState)(""),j=Object(r.a)(d,2),m=j[0],u=j[1],b=Object(l.useState)(""),h=Object(r.a)(b,2),x=h[0],f=h[1],N=Object(l.useState)(""),y=Object(r.a)(N,2),g=y[0],C=y[1],S=Object(l.useState)(!1),k=Object(r.a)(S,2),w=k[0],P=k[1],E=Object(l.useState)(!1),L=Object(r.a)(E,2),T=L[0],D=L[1],F=Object(l.useState)(!1),I=Object(r.a)(F,2),A=I[0],B=I[1],U=Object(l.useState)(!1),M=Object(r.a)(U,2),_=M[0],J=M[1],q=function(){var e=Object(c.a)(o.a.mark((function e(){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m.length<=0)){e.next=3;break}return P(!0),e.abrupt("return");case 3:if(!(x.length<=0)){e.next=6;break}return D(!0),e.abrupt("return");case 6:if(!(g.length<=0)){e.next=9;break}return B(!0),e.abrupt("return");case 9:return J(!0),c=O("/comments",{postId:t.id,name:m,email:x,body:g}),e.next=13,c;case 13:r=e.sent,a([].concat(Object(v.a)(s),[r])),n([].concat(Object(v.a)(i),[r])),C(""),J(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{"data-cy":"NewCommentForm",children:[Object(p.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(p.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(p.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(p.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:"input ".concat(w&&"is-danger"),value:m,onChange:function(e){P(!1),u(e.target.value)}}),Object(p.jsx)("span",{className:"icon is-small is-left",children:Object(p.jsx)("i",{className:"fas fa-user"})}),w&&Object(p.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(p.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),w&&Object(p.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(p.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(p.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(p.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(p.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:"input ".concat(T&&"is-danger"),value:x,onChange:function(e){D(!1),f(e.target.value)}}),Object(p.jsx)("span",{className:"icon is-small is-left",children:Object(p.jsx)("i",{className:"fas fa-envelope"})}),T&&Object(p.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(p.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),T&&Object(p.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(p.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(p.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(p.jsx)("div",{className:"control",children:Object(p.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:"textarea ".concat(A&&"is-danger"),value:g,onChange:function(e){B(!1),C(e.target.value)}})}),A&&Object(p.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(p.jsxs)("div",{className:"field is-grouped",children:[Object(p.jsx)("div",{className:"control",children:Object(p.jsx)("button",{onClick:function(){q()},type:"button",className:"button is-link ".concat(_&&"is-loading"),children:"Add"})}),Object(p.jsx)("div",{className:"control",children:Object(p.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){u(""),f(""),C("")},children:"Clear"})})]})]})},g=function(e){var t=e.post,s=e.comments,a=e.setComments,n=e.isLoadingComments,i=e.postComments,d=e.setPostComments,j=Object(l.useState)(!1),m=Object(r.a)(j,2),u=m[0],b=m[1],h=Object(l.useState)(!1),O=Object(r.a)(h,2),f=O[0],v=O[1],g=function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x("/comments/".concat(t.id)),e.next=3,n;case 3:if(1!==e.sent){e.next=8;break}return a(s.filter((function(e){return e.id!==t.id}))),d(i.filter((function(e){return e.id!==t.id}))),e.abrupt("return");case 8:v(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){b(!1)}),[t]),Object(p.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(p.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(p.jsxs)("div",{className:"block",children:[Object(p.jsxs)("h2",{"data-cy":"PostTitle",children:["#",t.id,":"," ",t.title]}),Object(p.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),n&&Object(p.jsx)(N,{}),!n&&Object(p.jsxs)("div",{className:"block",children:[f&&Object(p.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),i.length>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"title is-4",children:"Comments:"}),i.map((function(e){return Object(p.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(p.jsxs)("div",{className:"message-header",children:[Object(p.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(p.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){g(e)},children:"delete button"})]}),Object(p.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),0===i.length&&Object(p.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!u&&Object(p.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){b(!0)},children:"Write a comment"})]}),u&&Object(p.jsx)(y,{post:t,comments:s,setComments:a,setPostComments:d,postComments:i})]})})},C=function(e){var t=e.selectedUser,s=e.users,a=e.setUser,n=e.setPosts,i=e.getDataFromApi,d=e.setDetailsSeen,j=e.setIsLoading,m=Object(l.useState)("Choose a user"),u=Object(r.a)(m,2),b=u[0],h=u[1],O=Object(l.useState)(!1),x=Object(r.a)(O,2),f=x[0],N=x[1],v=function(){var e=Object(c.a)(o.a.mark((function e(t,s){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),N(!1),s.name!==b){e.next=4;break}return e.abrupt("return");case 4:return j(!0),d(!1),e.next=8,i("/posts",n);case 8:h(s.name),a(s);case 10:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown ".concat(f&&"is-active"),children:[Object(p.jsx)("div",{className:"dropdown-trigger",children:Object(p.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){N(!f)},onBlur:function(){setTimeout((function(){N(!1)}),500)},children:[Object(p.jsx)("span",{children:b}),Object(p.jsx)("span",{className:"icon is-small",children:Object(p.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(p.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(p.jsx)("div",{className:"dropdown-content",children:s.map((function(e){return Object(p.jsx)("a",{href:e.id,className:"dropdown-item ".concat(t&&t.id===e.id&&"is-active"),onClick:function(t){v(t,e)},children:e.name},e.id)}))})})]})},S=function(){var e=Object(l.useState)(null),t=Object(r.a)(e,2),s=t[0],a=t[1],n=Object(l.useState)([]),i=Object(r.a)(n,2),d=i[0],m=i[1],u=Object(l.useState)(void 0),b=Object(r.a)(u,2),O=b[0],x=b[1],v=Object(l.useState)([]),y=Object(r.a)(v,2),S=y[0],k=y[1],w=Object(l.useState)([]),P=Object(r.a)(w,2),E=P[0],L=P[1],T=Object(l.useState)([]),D=Object(r.a)(T,2),F=D[0],I=D[1],A=Object(l.useState)(!1),B=Object(r.a)(A,2),U=B[0],M=B[1],_=Object(l.useState)(!1),J=Object(r.a)(_,2),q=J[0],W=J[1],G=Object(l.useState)(!1),Y=Object(r.a)(G,2),z=Y[0],H=Y[1],K=Object(l.useState)(!1),Q=Object(r.a)(K,2),R=Q[0],V=Q[1],X=Object(l.useState)([]),Z=Object(r.a)(X,2),$=Z[0],ee=Z[1],te=function(){var e=Object(c.a)(o.a.mark((function e(t,s){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=h(t),e.next=4,a;case 4:n=e.sent,s(n),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),M(!0),new Error("An error occured");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,s){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){W(!0),te("/users",m),W(!1)}),[]),Object(l.useEffect)((function(){s&&(L(S.filter((function(e){return e.userId===s.id}))),W(!1))}),[s]),Object(p.jsx)("main",{className:"section",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"tile is-ancestor",children:[Object(p.jsx)("div",{className:"tile is-parent",children:Object(p.jsxs)("div",{className:"tile is-child box is-success",children:[Object(p.jsx)("div",{className:"block",children:Object(p.jsx)(C,{selectedUser:s,users:d,setUser:a,getDataFromApi:te,setPosts:k,setDetailsSeen:H,setIsLoading:W})}),Object(p.jsxs)("div",{className:"block","data-cy":"MainContent",children:[q&&Object(p.jsx)(N,{}),U&&Object(p.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),s&&0===E.length&&!q&&!U&&Object(p.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),s&&!U&&E.length>0&&!q&&Object(p.jsx)(f,{post:O,setPost:x,userPosts:E,detailsSeen:z,setDetailsSeen:H,setIsLoadingComments:V,postComments:$,setPostComments:ee}),!s&&!U&&!q&&Object(p.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"})]})]})}),O&&Object(p.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar","Sidebar--open"),children:z&&Object(p.jsx)("div",{className:"tile is-child box is-success ",children:Object(p.jsx)(g,{post:O,comments:F,setComments:I,isLoadingComments:R,postComments:$,setPostComments:ee})})})]})})})};n.a.render(Object(p.jsx)(S,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5c74254c.chunk.js.map