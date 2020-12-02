(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{137:function(e,t,a){},149:function(e,t,a){e.exports=a(248)},248:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),u=a.n(c),l=a(5),o=a.n(l),s=a(6),i=a(257),m=a(83),p=a.n(m),d=function(e){var t=e.blog;return t.comments?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,t.comments.map((function(e){return r.a.createElement(i.a.Item,{key:e},r.a.createElement(p.a,null,e))})))):null},f=a(147),E=a(24),b=a.n(E),v="/api/blogs",g=null,h=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(v);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("/api/users","/").concat(t));case 2:return a=e.sent,console.log(a.data.blogs),e.abrupt("return",a.data.blogs);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:g}},e.next=3,b.a.post(v,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:g}},e.next=3,b.a.delete("".concat(v,"/").concat(t.id),a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={getAll:h,getAllFromUser:y,setToken:function(e){g="bearer ".concat(e)},create:O,updateLikes:function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:g}},e.next=3,b.a.put("".concat(v,"/").concat(t.id),t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteBlog:w,updateComments:function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("".concat(v,"/").concat(a.id,"/comments"),{comment:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},T=function(e){return{type:"FAIL_NOTIFICATION",data:e}},x=function(e){return{type:"SUCCESS_NOTIFICATION",data:e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{messageBody:"",messageType:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS_NOTIFICATION":return{messageBody:t.data,messageStyle:"success"};case"FAIL_NOTIFICATION":return{messageBody:t.data,messageStyle:"warning"};case"INFO_NOTIFICATION":return{messageBody:t.data,messageStyle:"info"};case"CLEAR_NOTIFICATION":return{messageBody:"",messageType:""};default:return e}},k=function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.deleteBlog(e);case 2:a({type:"DELETE_BLOG",data:{id:e.id}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){return function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getAll();case 2:a=e.sent,t({type:"INIT_BLOGS",data:{blogs:a}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data.blogs;case"NEW_BLOG":return[].concat(Object(f.a)(e),[t.data.newBlog]);case"LIKE_BLOG":var a=t.data.updatedBlog,n=a.id;return e.map((function(e){return e.id!==n?e:a}));case"COMMENT_BLOG":var r=t.data.updatedBlog;return e.map((function(e){return e.id!==r.id?e:r}));case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data.id}));case"CLEAR_BLOGS":return[];default:return e}},N=a(8),S=a(253),B=a(250),A=a(7),F=function(e){var t=e.addComment,a=Object(N.c)((function(e){return e.user}));return r.a.createElement(A.d,{initialValues:{comment:""},onSubmit:function(e,a){var n=a.resetForm;(0,a.setSubmitting)(!0),t(e.comment),n({values:{comment:""}})}},(function(){return r.a.createElement(A.c,null,r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Comment as ".concat(a.name),":"),r.a.createElement(A.b,{name:"comment"},(function(e){var t=e.field;return r.a.createElement(S.a.Control,Object.assign({as:"textarea",rows:4},t,{placeholder:"What are your thoughts?"}))})),r.a.createElement(S.a.Text,{className:"text-muted"},"Please follow the community's rule! This application supports markdown syntax, try it out!")),r.a.createElement(B.a,{type:"submit",id:"create-comment"},"COMMENT"))}))},_=a(258),G=a(11),U=function(e){var t=e.blog,a=e.clickLike,n=e.removeBlog,c=e.user,u=Object(N.b)(),l=Object(G.f)();if(c||l.push("/"),!t)return null;var i=function(){a(t)},m=function(){window.confirm("Remove blog ".concat(t.title," by ").concat(t.author))&&n(t)},f=function(e){u(function(e,t){return function(){var a=Object(s.a)(o.a.mark((function a(n){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C.updateComments(e,t);case 2:r=a.sent,n({type:"COMMENT_BLOG",data:{updatedBlog:r}});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e,t))};return r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,t.title),r.a.createElement(_.a.Text,null,r.a.createElement(p.a,null,t.content)),r.a.createElement(_.a.Text,null,t.likes," likes"," ",r.a.createElement(B.a,{variant:"outline-success",onClick:i,className:"likeButton"},"Like"),t.user.id===c.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"danger",onClick:m,className:"delete-button"},"remove")):null)),r.a.createElement(_.a.Body,null,r.a.createElement(F,{blog:t,addComment:f})),r.a.createElement(_.a.Body,null,r.a.createElement(d,{blog:t}))))},R=a(255),P=function(){var e=Object(N.c)((function(e){return e.notification})),t=e.messageBody,a=e.messageStyle;return""===t?null:r.a.createElement(R.a,{key:t,variant:a},t)},q=a(148),H=r.a.forwardRef((function(e,t){var a=Object(n.useState)(!1),c=Object(q.a)(a,2),u=c[0],l=c[1],o={display:u?"none":"flex"},s={display:u?"":"none"},i=function(){l(!u)};return Object(n.useImperativeHandle)(t,(function(){return{toggleVisibility:i}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement(B.a,{onClick:i,id:"showForm",style:{marginLeft:"auto"}},e.buttonLabel)),r.a.createElement("div",{style:s},e.children))})),M=function(e){var t=e.toggleForm,a=Object(N.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{variant:"primary"},r.a.createElement("h2",null,"Create a new blog")),r.a.createElement(A.d,{initialValues:{title:"",author:"",url:"",content:""},onSubmit:function(e,n){var r=n.resetForm,c=n.setSubmitting;c(!0);var u,l={title:e.title,author:e.author,url:e.url,content:e.content};a((u=l,function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.create(u);case 3:a=e.sent,t({type:"NEW_BLOG",data:{newBlog:a}}),t(x("a new blog ".concat(a.title," by ").concat(a.author," created"))),setTimeout((function(){t({type:"CLEAR_NOTIFICATION"})}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(T("Error creating a new blog ".concat(e.t0)));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),c(!1),r({values:{title:"",author:"",url:"",content:""}}),t()}},(function(){return r.a.createElement(A.c,null,r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Title:"),r.a.createElement(A.b,{name:"title",type:"input",as:S.a.Control,autoComplete:"off"})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Author:"),r.a.createElement(A.b,{name:"author",type:"input",as:S.a.Control,autoComplete:"off"})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Url:"),r.a.createElement(A.b,{name:"url",type:"input",as:S.a.Control,autoComplete:"off"})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Content:"),r.a.createElement(A.b,{name:"content"},(function(e){var t=e.field;return r.a.createElement(S.a.Control,Object.assign({as:"textarea",rows:4},t))}))),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(B.a,{variant:"secondary",id:"cancel-button",onClick:t,style:{marginRight:"auto"}},"Cancel"),r.a.createElement(B.a,{variant:"primary",id:"create-button",type:"submit",style:{marginLeft:"auto"}},"Create")))})))},V={login:function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var W=function(e,t){return function(){var a=Object(s.a)(o.a.mark((function a(n){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.login({username:e,password:t});case 3:r=a.sent,window.localStorage.setItem("loggedBlogUser",JSON.stringify(r)),C.setToken(r.token),n({type:"SUCCESS",data:{user:r}}),n(x("User ".concat(r.username," logged in"))),n(I()),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:"FAIL"}),n(T("Wrong username or password"));case 15:setTimeout((function(){n({type:"CLEAR_NOTIFICATION"})}),5e3);case 16:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS":case"TOKEN_USER":return t.data.user;case"SIGNOUT":case"FAIL":return null;default:return e}},K={fetchUsers:function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.data.users;default:return e}},D=a(19),Q=a(251),X=function(e){e.user;var t=Object(N.c)((function(e){return e.users}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),r.a.createElement(Q.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User"),r.a.createElement("th",null,"Number of blogs posted"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,r.a.createElement(D.b,{to:"/users/".concat(e.id)},e.name)),r.a.createElement("td",null,e.blogs.length))})))))},Y=a(254),Z=a(256),$={padding:5},ee={margin:5},te=function(){var e=Object(N.c)((function(e){return e.user})),t=Object(G.f)(),a=Object(G.g)(),n=Object(N.b)(),c=function(){var a=Object(s.a)(o.a.mark((function a(r){var c;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=e.name,window.localStorage.removeItem("loggedBlogUser"),t.push("/"),n({type:"SIGNOUT"}),n({type:"CLEAR_BLOGS"}),n({type:"INFO_NOTIFICATION",data:"User ".concat(c," logged out")}),setTimeout((function(){n({type:"CLEAR_NOTIFICATION"})}),3e3);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();if(!e)return r.a.createElement(Y.a,{collapseOnSelect:!0,expand:"lg",bg:"light"},r.a.createElement(Y.a.Brand,null,r.a.createElement(D.b,{style:$,to:"/"},"Hang's Blog App")),r.a.createElement(Y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(Y.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(Z.a,{className:"mr-auto"}),"/signup"===a.pathname?r.a.createElement(Z.a,{className:"justify-content-end"},r.a.createElement(Z.a.Link,{as:D.b,to:"/"},"Sign in")):r.a.createElement(Z.a,{className:"justify-content-end"},r.a.createElement(Z.a.Link,{as:D.b,to:"/signup"},"Sign up"))));return r.a.createElement(Y.a,{collapseOnSelect:!0,expand:"lg",bg:"light"},r.a.createElement(Y.a.Brand,null,r.a.createElement(D.b,{style:$,to:"/"},"Hang's Blog App")),r.a.createElement(Y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(Y.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(Z.a,{className:"mr-auto"},r.a.createElement(Z.a.Link,{as:D.b,to:"/"},"Home"),r.a.createElement(Z.a.Link,{as:D.b,to:"users"},"Users")),r.a.createElement(Z.a,{className:"justify-content-end"}," ",r.a.createElement(Y.a.Text,null,"Hi, ",e.name,r.a.createElement(B.a,{variant:"secondary",style:ee,onClick:c},"Sign out")))))},ae=function(e){var t=e.user;return t?r.a.createElement("div",null,r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,"added blogs"),t.blogs.map((function(e){return r.a.createElement("li",{key:e.id},e.title)}))):null},ne=function(){var e=Object(N.c)((function(e){return e.user})),t=Object(N.b)(),a=function(){var a=Object(s.a)(o.a.mark((function a(n,r){var c,u;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=r.resetForm,(u=r.setSubmitting)(!0),t(W(n.username,n.password)),u(!1),c(null===e?{values:{username:n.username,password:""}}:{values:{username:"",password:""}});case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement(A.d,{initialValues:{username:"",password:""},onSubmit:a},(function(e){e.values,e.isSubmitting;return r.a.createElement(A.c,null,r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Username:"),r.a.createElement(A.b,{name:"username",type:"input",as:S.a.Control})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Password:"),r.a.createElement(A.b,{name:"password",type:"password",as:S.a.Control})),r.a.createElement(B.a,{variant:"primary",type:"submit"},"Sign in"))})))},re={signUp:function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ce=a(70),ue=ce.a().shape({name:ce.b().min(8,"Too Short!").max(15,"Too Long!").required("Required"),username:ce.b().min(8,"Too Short!").max(15,"Too Long!").required("Required"),password:ce.b().min(8,"Too Short!").max(15,"Too Long").required("Required"),confirmPassword:ce.b().min(8,"Too Short!").max(15,"Too Long").required("Required")}),le=function(e){var t={};return e.password!==e.confirmPassword&&(t.confirmPassword="Must be the same as password above"),t},oe=function(){var e=Object(N.b)(),t=Object(G.f)();return r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement(A.d,{initialValues:{name:"",username:"",password:"",confirmPassword:""},validate:le,validationSchema:ue,onSubmit:function(){var a=Object(s.a)(o.a.mark((function a(n,r){var c,u,l;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c=r.resetForm,u=r.setSubmitting,n.password!==n.confirmPassword){a.next=17;break}return a.prev=2,u(!0),a.next=6,re.signUp({name:n.name,username:n.username,password:n.password});case 6:l=a.sent,e(x("New user ".concat(l.name," signed up"))),setTimeout((function(){e({type:"CLEAR_NOTIFICATION"})}),3e3),u(!1),c({values:{name:"",username:"",password:"",confirmPassword:""}}),t.push("/"),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(2),e(T(a.t0));case 17:case"end":return a.stop()}}),a,null,[[2,14]])})));return function(e,t){return a.apply(this,arguments)}}()},(function(){return r.a.createElement(A.c,null,r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Full Name:"),r.a.createElement(A.b,{name:"name",type:"input",as:S.a.Control,autoComplete:"off"}),r.a.createElement(A.a,{name:"name"})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Username:"),r.a.createElement(A.b,{name:"username",type:"input",as:S.a.Control,autoComplete:"off"}),r.a.createElement(A.a,{name:"username"})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Password:"),r.a.createElement(A.b,{name:"password",type:"password",as:S.a.Control,autoComplete:"off"}),r.a.createElement(A.a,{name:"password"})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Label,null,"Confirm Password:"),r.a.createElement(A.b,{type:"password",name:"confirmPassword",as:S.a.Control,autoComplete:"off"}),r.a.createElement(A.a,{name:"confirmPassword"})),r.a.createElement(B.a,{variant:"primary",type:"submit"},"Sign Up"))})))},se=a(252),ie=(a(137),function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e.blogs})),a=Object(N.c)((function(e){return e.user})),c=Object(N.c)((function(e){return e.users})),u=Object(G.h)("/users/:id"),l=Object(G.h)("/blogs/:id"),i=u?c.find((function(e){return e.id===u.params.id})):null,m=l?t.find((function(e){return e.id===l.params.id})):null,p=Object(n.useRef)();Object(n.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogUser");if(t){var a=JSON.parse(t);e(function(e){return C.setToken(e.token),{type:"TOKEN_USER",data:{user:e}}}(a)),e(I()),e(function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.fetchUsers();case 2:a=e.sent,t({type:"FETCH_ALL",data:{users:a}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[e]);var d=function(t){try{e(function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.updateLikes(e);case 2:n=t.sent,a({type:"LIKE_BLOG",data:{updatedBlog:n}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}catch(a){e(T("error updating the vlog")),setTimeout((function(){e({type:"CLEAR_NOTIFICATION"})}),3e3)}},f=function(){var t=Object(s.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(k(a))}catch(n){e(T("error deleting the vlog, error: ".concat(n))),setTimeout((function(){e({type:"CLEAR_NOTIFICATION"})}),3e3)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){p.current.toggleVisibility()};return r.a.createElement("div",{className:"content"},r.a.createElement(te,null),r.a.createElement(se.a,{style:{flex:"1 0 auto"}},r.a.createElement(P,null),r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/users/:id"},r.a.createElement("div",null,r.a.createElement(ae,{user:i}))),r.a.createElement(G.a,{exact:!0,path:"/users"},r.a.createElement("div",null,r.a.createElement(X,null))),r.a.createElement(G.a,{path:"/blogs/:id"},r.a.createElement("div",null,r.a.createElement(U,{blog:m,clickLike:d,removeBlog:f,user:a}))),r.a.createElement(G.a,{path:"/signup"},r.a.createElement(oe,null)),r.a.createElement(G.a,{exact:!0,path:"/"},null===a?r.a.createElement(ne,null):r.a.createElement("div",null,r.a.createElement(H,{buttonLabel:"Post a new blog",className:"newBlogToggle",ref:p},r.a.createElement("div",null,r.a.createElement(M,{toggleForm:E}))),r.a.createElement(Q.a,{striped:!0},r.a.createElement("tbody",null,t.sort((function(e,t){return t.likes-e.likes})).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(D.b,{to:"/blogs/".concat(e.id)},e.title)),r.a.createElement("td",null,e.author))})))))))))}),me=a(53),pe=a(145),de=a(146),fe=Object(me.combineReducers)({blogs:j,user:J,notification:L,users:z}),Ee=Object(me.createStore)(fe,Object(de.composeWithDevTools)(Object(me.applyMiddleware)(pe.a)));u.a.render([r.a.createElement(N.a,{store:Ee,key:"1"},r.a.createElement(D.a,null,r.a.createElement(ie,null))),r.a.createElement((function(){return r.a.createElement("footer",{className:"footer"},"Hang Chen \xa9 2020")}),{key:"2"})],document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.ac5ffbfa.chunk.js.map