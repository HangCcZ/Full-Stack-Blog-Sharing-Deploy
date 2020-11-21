(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{68:function(e,t,a){e.exports=a(97)},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),u=a.n(c),l=a(5),o=a.n(l),s=a(6),i=a(106),m=function(e){var t=e.blog;return t.comments?r.a.createElement("div",null,r.a.createElement(i.a,null,t.comments.map((function(e){return r.a.createElement(i.a.Item,{key:e},e)})))):null},p=a(67),d=a(14),f=a.n(d),E="/api/blogs",v=null,b=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(E);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("/api/users","/").concat(t));case 2:return a=e.sent,console.log(a.data.blogs),e.abrupt("return",a.data.blogs);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,f.a.post(E,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,f.a.delete("".concat(E,"/").concat(t.id),a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={getAll:b,getAllFromUser:g,setToken:function(e){v="bearer ".concat(e)},create:h,updateLikes:function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,f.a.put("".concat(E,"/").concat(t.id),t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteBlog:O,updateComments:function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(E,"/").concat(a.id,"/comments"),{comment:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.deleteBlog(e);case 2:a({type:"DELETE_BLOG",data:{id:e.id}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(){return function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAll();case 2:a=e.sent,t({type:"INIT_BLOGS",data:{blogs:a}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data.blogs;case"NEW_BLOG":return[].concat(Object(p.a)(e),[t.data.newBlog]);case"LIKE_BLOG":var a=t.data.updatedBlog,n=a.id;return e.map((function(e){return e.id!==n?e:a}));case"COMMENT_BLOG":var r=t.data.updatedBlog;return e.map((function(e){return e.id!==r.id?e:r}));case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data.id}));case"CLEAR_BLOGS":return[];default:return e}},j=a(9),k=a(26),I=a(103),L=a(99),x=function(e){var t=e.addComment,a=Object(n.useState)(""),c=Object(k.a)(a,2),u=c[0],l=c[1];return r.a.createElement("div",null,r.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),l(""),t(u)}},r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Control,{id:"comment",type:"text",value:u,name:"comment",onChange:function(e){l(e.target.value)},placeholder:"Add your comment here"}),r.a.createElement(I.a.Text,{className:"text-muted"},"Please follow the community's rule!")),r.a.createElement(L.a,{type:"submit",id:"create-comment"},"add comment")))},N=a(104),S=a(7),A=function(e){var t=e.blog,a=e.clickLike,n=e.removeBlog,c=e.user,u=Object(j.b)(),l=Object(S.f)();if(c||l.push("/"),!t)return null;var i=function(){a(t)},p=function(){window.confirm("Remove blog ".concat(t.title," by ").concat(t.author))&&n(t)},d=function(e){u(function(e,t){return function(){var a=Object(s.a)(o.a.mark((function a(n){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.updateComments(e,t);case 2:r=a.sent,n({type:"COMMENT_BLOG",data:{updatedBlog:r}});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e,t))};return r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,t.title),r.a.createElement(N.a.Text,null,t.likes," likes"," ",r.a.createElement(L.a,{variant:"outline-success",onClick:i,className:"likeButton"},"Like"),t.user.id===c.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{variant:"danger",onClick:p,className:"delete-button"},"remove")):null)),r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,"Comments"),r.a.createElement(m,{blog:t}),r.a.createElement(x,{blog:t,addComment:d}))))},U=function(e){var t=e.message;return null===t?null:r.a.createElement("h2",{className:"error"},t)},B=r.a.forwardRef((function(e,t){var a=Object(n.useState)(!1),c=Object(k.a)(a,2),u=c[0],l=c[1],o={display:u?"none":""},s={display:u?"":"none"},i=function(){l(!u)};return Object(n.useImperativeHandle)(t,(function(){return{toggleVisibility:i}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement(L.a,{onClick:i,id:"showForm"},e.buttonLabel)),r.a.createElement("div",{style:s},e.children,r.a.createElement(L.a,{variant:"secondary",onClick:i,id:"hideForm"},"cancel")))})),_=function(e){var t=e.createBlog,a=Object(n.useState)(""),c=Object(k.a)(a,2),u=c[0],l=c[1],o=Object(n.useState)(""),s=Object(k.a)(o,2),i=s[0],m=s[1],p=Object(n.useState)(""),d=Object(k.a)(p,2),f=d[0],E=d[1],v=function(e){switch(e.target.name){case"title":l(e.target.value);break;case"author":m(e.target.value);break;case"url":E(e.target.value)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Create a new blog"),r.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),t({title:u,author:i,url:f}),l(""),E(""),m("")}},r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"title:"),r.a.createElement(I.a.Control,{id:"title",type:"text",value:u,name:"title",onChange:v}),r.a.createElement(I.a.Label,null,"author:"),r.a.createElement(I.a.Control,{type:"text",id:"author",value:i,name:"author",onChange:v}),r.a.createElement(I.a.Label,null,"url:"),r.a.createElement(I.a.Control,{type:"text",value:f,name:"url",id:"url",onChange:v})),r.a.createElement(L.a,{variant:"primary",id:"create-button",type:"submit"},"create")))},P={login:function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=a(48),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"",password:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_INPUT_USERNAME":return Object(F.a)({},e,{username:t.data});case"UPDATE_INPUT_PASSWORD":return Object(F.a)({},e,{password:t.data});case"CLEAR_INPUTS":return{username:"",password:""};default:return e}},R=function(e){return{type:"FAIL_NOTIFICATION",data:e}},D=function(e){return{type:"SUCCESS_NOTIFICATION",data:e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS_NOTIFICATION":case"FAIL_NOTIFICATION":return t.data;case"CLEAR_NOTIFICATION":return"";default:return e}};var M=function(e,t){return function(){var a=Object(s.a)(o.a.mark((function a(n){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P.login({username:e,password:t});case 3:r=a.sent,window.localStorage.setItem("loggedBlogUser",JSON.stringify(r)),y.setToken(r.token),n({type:"SUCCESS",data:{user:r}}),n(D("user ".concat(r.username," logged in"))),n(C()),n({type:"CLEAR_INPUTS"}),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(0),n({type:"FAIL"}),n(R("Wrong username or password"));case 16:setTimeout((function(){n({type:"CLEAR_NOTIFICATION"})}),5e3);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS":case"TOKEN_USER":return t.data.user;case"SIGNOUT":case"FAIL":return null;default:return e}},J={fetchUsers:function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.data.users;default:return e}},z=a(10),V=a(100),q=function(e){e.user;var t=Object(j.c)((function(e){return e.users}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),r.a.createElement(V.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User"),r.a.createElement("th",null,"Number of blogs posted"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,r.a.createElement(z.b,{to:"/users/".concat(e.id)},e.name)),r.a.createElement("td",null,e.blogs.length))})))))},Q=a(102),X=a(105),Y={padding:5},Z={margin:5},$=function(e){var t=e.handleLogOut,a=Object(j.c)((function(e){return e.user}));if(!a)return r.a.createElement(Q.a,{collapseOnSelect:!0,expand:"lg",bg:"light"},r.a.createElement(Q.a.Brand,null,r.a.createElement(z.b,{style:Y,to:"/"},"Hang's Blog App")),r.a.createElement(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(Q.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(X.a,{className:"mr-auto"}),r.a.createElement(X.a,{className:"justify-content-end"},r.a.createElement(z.b,{style:Y,to:"/signup"},"SIGN UP"))));return r.a.createElement(Q.a,{collapseOnSelect:!0,expand:"lg",bg:"light"},r.a.createElement(Q.a.Brand,null,r.a.createElement(z.b,{style:Y,to:"/"},"Hang's Blog App")),r.a.createElement(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(Q.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(X.a,{className:"mr-auto"},r.a.createElement(X.a.Link,{as:z.b,to:"/"},"Home"),r.a.createElement(X.a.Link,{as:z.b,to:"users"},"Users")),r.a.createElement(X.a,{className:"justify-content-end"}," ",r.a.createElement(Q.a.Text,null,"Hi, ",a.name,r.a.createElement(L.a,{variant:"secondary",style:Z,onClick:t},"LOG OUT")))))},ee=function(e){var t=e.user;return t?r.a.createElement("div",null,r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,"added blogs"),t.blogs.map((function(e){return r.a.createElement("li",{key:e.id},e.title)}))):null},te=function(){var e=Object(j.c)((function(e){return e.loginInfo})),t=e.username,a=e.password,n=Object(j.b)(),c=function(){var e=Object(s.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),n(M(t,a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(I.a,{onSubmit:c},r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Username:"),r.a.createElement(I.a.Control,{type:"text",value:t,id:"username",name:"Username",onChange:function(e){var t=e.target;return n(function(e){return{type:"UPDATE_INPUT_USERNAME",data:e}}(t.value))}}),r.a.createElement(I.a.Label,null,"Password:"),r.a.createElement(I.a.Control,{type:"password",id:"password",value:a,name:"Password",onChange:function(e){var t=e.target;return n(function(e){return{type:"UPDATE_INPUT_PASSWORD",data:e}}(t.value))}})),r.a.createElement(L.a,{variant:"primary",type:"submit"},"login"))},ae={signUp:function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ne=a(29),re=function(){var e=Object(S.f)();return r.a.createElement("div",null,r.a.createElement(ne.c,{initialValues:{name:"",username:"",password:"",confirmPassowrd:""},onSubmit:function(){var t=Object(s.a)(o.a.mark((function t(a,n){var r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.resetForm,c=n.setSubmitting,a.password!==a.confirmPassowrd){t.next=10;break}return c(!0),t.next=5,ae.signUp({name:a.name,username:a.username,password:a.password});case 5:c(!1),r({name:"",username:"",password:"",confirmPassowrd:""}),e.push("/"),t.next=11;break;case 10:console.log("bad match");case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},(function(e){e.values,e.isSubmitting;return r.a.createElement(ne.b,null,r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Full Name:"),r.a.createElement(ne.a,{name:"name",type:"input",as:I.a.Control})),r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Username:"),r.a.createElement(ne.a,{name:"username",type:"input",as:I.a.Control})),r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Password:"),r.a.createElement(ne.a,{name:"password",type:"password",as:I.a.Control})),r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Confirm Password:"),r.a.createElement(ne.a,{type:"password",name:"confirmPassowrd",as:I.a.Control})),r.a.createElement(L.a,{variant:"primary",type:"submit"},"Sign Up"))})))},ce=a(101),ue=function(){var e=Object(j.b)(),t=Object(S.f)(),a=Object(j.c)((function(e){return e.blogs})),c=Object(j.c)((function(e){return e.user})),u=Object(j.c)((function(e){return e.users})),l=Object(j.c)((function(e){return e.notification})),i=Object(S.g)("/users/:id"),m=Object(S.g)("/blogs/:id"),p=i?u.find((function(e){return e.id===i.params.id})):null,d=m?a.find((function(e){return e.id===m.params.id})):null,f=Object(n.useRef)();Object(n.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogUser");if(t){var a=JSON.parse(t);e(function(e){return y.setToken(e.token),{type:"TOKEN_USER",data:{user:e}}}(a)),e(C()),e(function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.fetchUsers();case 2:a=e.sent,t({type:"FETCH_ALL",data:{users:a}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[e]);var E=function(){var a=Object(s.a)(o.a.mark((function a(n){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:window.localStorage.removeItem("loggedBlogUser"),t.push("/"),e({type:"SIGNOUT"}),e({type:"CLEAR_BLOGS"}),e({type:"CLEAR_INPUTS"});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),v=function(t){try{e(function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.create(e);case 2:n=t.sent,a({type:"NEW_BLOG",data:{newBlog:n}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)),f.current.toggleVisibility(),e(D("a new blog ".concat(t.title," by ").concat(t.author," created"))),setTimeout((function(){e({type:"CLEAR_NOTIFICATION"})}),3e3)}catch(a){e(R("Error creating a new blog "))}},b=function(t){try{e(function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.updateLikes(e);case 2:n=t.sent,a({type:"LIKE_BLOG",data:{updatedBlog:n}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}catch(a){e(R("error updating the vlog")),setTimeout((function(){e({type:"CLEAR_NOTIFICATION"})}),3e3)}},g=function(){var t=Object(s.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(w(a))}catch(n){e(R("error deleting the vlog, error: ".concat(n))),setTimeout((function(){e({type:"CLEAR_NOTIFICATION"})}),3e3)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement($,{handleLogOut:E}),r.a.createElement(ce.a,null,r.a.createElement(U,{message:l}),r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/users/:id"},r.a.createElement("div",null,r.a.createElement(ee,{user:p}))),r.a.createElement(S.a,{exact:!0,path:"/users"},r.a.createElement("div",null,r.a.createElement(q,null))),r.a.createElement(S.a,{path:"/blogs/:id"},r.a.createElement("div",null,r.a.createElement(A,{blog:d,clickLike:b,removeBlog:g,user:c}))),r.a.createElement(S.a,{path:"/signup"},r.a.createElement(re,null)),r.a.createElement(S.a,{exact:!0,path:"/"},null===c?r.a.createElement(te,null):r.a.createElement("div",null,r.a.createElement(B,{buttonLabel:"Post a new blog",className:"newBlogToggle",ref:f},r.a.createElement("div",null,r.a.createElement(_,{createBlog:v}))),r.a.createElement(V.a,{striped:!0},r.a.createElement("tbody",null,a.sort((function(e,t){return t.likes-e.likes})).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(z.b,{to:"/blogs/".concat(e.id)},e.title)),r.a.createElement("td",null,e.author))})))))))))},le=a(28),oe=a(65),se=a(66),ie=Object(le.combineReducers)({blogs:T,user:W,notification:H,users:K,loginInfo:G}),me=Object(le.createStore)(ie,Object(se.composeWithDevTools)(Object(le.applyMiddleware)(oe.a)));u.a.render(r.a.createElement(j.a,{store:me},r.a.createElement(z.a,null,r.a.createElement(ue,null))),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.1d4d67bc.chunk.js.map