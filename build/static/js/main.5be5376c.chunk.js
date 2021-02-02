(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{142:function(e,t,a){},179:function(e,t,a){e.exports=a(279)},279:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),l=a(29),u=a(294),s=a(108),i=a.n(s),m=function(e){var t=e.blog;return t.comments?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,t.comments.map((function(e){return r.a.createElement(u.a.Item,{key:e},r.a.createElement(i.a,null,e))})))):null},d=a(6),p=a.n(d),f=a(8),E=a(66),b=a(28),g=a.n(b),v="/api/blogs",h=null,O=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(v);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("/api/users","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.blogs);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h,"Content-Type":"multipart/form-data"}},e.next=3,g.a.post(v,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,g.a.delete("".concat(v,"/").concat(t.id),a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,g.a.put("".concat(v,"/").concat(t.id,"/like"),{userID:a.id},n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,g.a.put("".concat(v,"/").concat(t.id,"/unlike"),{userID:a.id},n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j={getAll:O,getAllFromUser:y,setToken:function(e){h="bearer ".concat(e)},create:w,updateLikes:k,deleteBlog:T,updateComments:function(){var e=Object(f.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat(v,"/").concat(a.id,"/comments"),{comment:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),updateUnlikes:C},L=function(e){return{type:"FAIL_NOTIFICATION",data:e}},S=function(e){return{type:"SUCCESS_NOTIFICATION",data:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{messageBody:"",messageType:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS_NOTIFICATION":return{messageBody:t.data,messageStyle:"success"};case"FAIL_NOTIFICATION":return{messageBody:t.data,messageStyle:"warning"};case"INFO_NOTIFICATION":return{messageBody:t.data,messageStyle:"info"};case"CLEAR_NOTIFICATION":return{messageBody:"",messageType:""};default:return e}},I=function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getAll();case 2:a=e.sent,t({type:"INIT_BLOGS",data:{blogs:a}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data.blogs;case"NEW_BLOG":return[].concat(Object(E.a)(e),[t.data.newBlog]);case"LIKE_BLOG":var a=t.data.updatedBlog,n=a.id;return e.map((function(e){return e.id!==n?e:a}));case"UNLIKE_BLOG":var r=t.data.updatedBlog,c=r.id;return e.map((function(e){return e.id!==c?e:r}));case"COMMENT_BLOG":var o=t.data.updatedBlog;return e.map((function(e){return e.id!==o.id?e:o}));case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data.id}));case"CLEAR_BLOGS":return[];default:return e}},B=a(9),F=a(290),A=a(174),P=a(11),_=function(e){var t=e.addComment,a=Object(B.c)((function(e){return e.user}));return r.a.createElement(P.d,{initialValues:{comment:""},onSubmit:function(e,a){var n=a.resetForm;(0,a.setSubmitting)(!0),t(e.comment),n({values:{comment:""}})}},(function(){return r.a.createElement(P.c,null,r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Label,null,"Comment as ".concat(a.username),":"),r.a.createElement(P.b,{name:"comment"},(function(e){var t=e.field;return r.a.createElement(F.a.Control,Object.assign({as:"textarea",rows:4},t,{placeholder:"What are your thoughts?"}))})),r.a.createElement(F.a.Text,{className:"text-muted"},"Please follow the community's rule! This application supports"," ",r.a.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer"},"markdown syntax"),", try it out!")),r.a.createElement(A.a,{type:"submit",id:"create-comment"},"COMMENT"))}))},U=a(289),R=a(284),G=a(291),M=a(295),D=a(14),H=function(e){var t=e.blog,a=Object(B.b)(),c=Object(D.f)(),o=Object(n.useState)(!1),u=Object(l.a)(o,2),s=u[0],d=u[1],E=function(){return d(!1)},b=function(){return d(!0)},g=Object(B.c)((function(e){return e.user}));if(Object(n.useEffect)((function(){var e=setTimeout((function(){g||c.push("/")}),1e3);return function(){return clearTimeout(e)}}),[g,c]),!t)return null;var v=function(){var e,n;a((e=t,n=g,function(){var t=Object(f.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.updateLikes(e,n);case 3:r=t.sent,a({type:"LIKE_BLOG",data:{updatedBlog:r}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a(L("error updating the vlog, error:".concat(t.t0))),setTimeout((function(){a({type:"CLEAR_NOTIFICATION"})}),3e3);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))},h=function(){var e,n;a((e=t,n=g,function(){var t=Object(f.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.updateUnlikes(e,n);case 3:r=t.sent,a({type:"UNLIKE_BLOG",data:{updatedBlog:r}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a(L("error updating the vlog, error:".concat(t.t0))),setTimeout((function(){a({type:"CLEAR_NOTIFICATION"})}),3e3);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))},O=function(){var e;a((e=t,function(){var t=Object(f.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.deleteBlog(e);case 3:a(S("The blog ".concat(e.title," has been deleted."))),a({type:"DELETE_BLOG",data:{id:e.id}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a(L("error deleting the vlog, error: ".concat(t.t0))),setTimeout((function(){a({type:"CLEAR_NOTIFICATION"})}),3e3);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())),c.push("/")},y=function(e){a(function(e,t){return function(){var a=Object(f.a)(p.a.mark((function a(n){var r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j.updateComments(e,t);case 2:r=a.sent,n({type:"COMMENT_BLOG",data:{updatedBlog:r}});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e,t))};return r.a.createElement("div",null,r.a.createElement(M.a,null,r.a.createElement(M.a.Header,null,t.title),r.a.createElement(M.a.Body,null,r.a.createElement(i.a,null,t.content)),r.a.createElement(M.a.Body,null,0!==t.images.length?r.a.createElement(G.a,{indicators:!1,interval:3e3,controls:1!==t.images.length},t.images.map((function(e){return r.a.createElement(G.a.Item,{key:e.url},r.a.createElement("img",{className:"d-block w-100",style:{maxHeight:"25rem",objectFit:"contain"},src:e.thumbnail,alt:e.filename}))}))):null),r.a.createElement(M.a.Body,null,r.a.createElement(M.a.Text,null,t.likes.length," likes ",t.likes.find((function(e){return e.username===g.username}))?r.a.createElement(A.a,{variant:"secondary",onClick:h,className:"likeButton"},"UNLIKE"):r.a.createElement(A.a,{variant:"success",onClick:v,className:"likeButton"},"LIKE"),t.user.id===g.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{variant:"danger",onClick:b,className:"delete-button"},"DELETE")):null)),r.a.createElement(M.a.Body,null,r.a.createElement(_,{blog:t,addComment:y})),r.a.createElement(M.a.Body,null,r.a.createElement(m,{blog:t}))),r.a.createElement(U.a,{show:s,onHide:E},r.a.createElement(U.a.Header,{closeButton:!0},r.a.createElement(U.a.Title,{as:"h4"},"Delete")),r.a.createElement(U.a.Body,null,r.a.createElement(R.a,{variant:"danger"},"Do you want to delete this blog? This process cannot be undone.")),r.a.createElement(U.a.Footer,null,r.a.createElement(A.a,{variant:"secondary",onClick:E},"No! Take me back!"),r.a.createElement(A.a,{variant:"danger",onClick:O},"Yes Sir!"))))},q=function(){var e=Object(B.c)((function(e){return e.notification})),t=e.messageBody,a=e.messageStyle;return""===t?null:r.a.createElement(R.a,{key:t,variant:a},t)},K=r.a.forwardRef((function(e,t){var a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=c[0],u=c[1],s={display:o?"none":""},i={display:o?"":"none"},m=function(){e.setShowSortButton(o),u(!o)};return Object(n.useImperativeHandle)(t,(function(){return{toggleVisibility:m,visible:o}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:s},r.a.createElement(A.a,{onClick:m,id:"showForm"},e.buttonLabel)),r.a.createElement("div",{style:i},e.children))})),V=a(52),W=V.a().shape({title:V.b().min(8,"Too Short!").required("Required"),content:V.b().min(8,"Too Short!").required("Required")}),z=function(e){var t=e.toggleForm,a=Object(B.b)(),c=Object(n.useState)(null),o=Object(l.a)(c,2),u=o[0],s=o[1],i=Object(n.useRef)(null),m=function(e){s(e.target.files)};return r.a.createElement("div",null,r.a.createElement(R.a,{variant:"primary"},r.a.createElement("h2",null,"CREATE")),r.a.createElement(P.d,{initialValues:{title:"",content:""},validationSchema:W,onSubmit:function(e,n){var r=n.resetForm,c=n.setSubmitting;c(!0);var o=new FormData;for(var m in u)o.append("files",u[m]);for(var d,E={title:e.title,content:e.content,date:Date.now()},b=0,g=Object.entries(E);b<g.length;b++){var v=Object(l.a)(g[b],2),h=v[0],O=v[1];o.append(h,O)}a((d=o,function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.create(d);case 3:a=e.sent,t({type:"NEW_BLOG",data:{newBlog:a}}),t(S("a new blog ".concat(a.title," by ").concat(a.author," created"))),setTimeout((function(){t({type:"CLEAR_NOTIFICATION"})}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(L("Error creating a new blog ".concat(e.t0)));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),c(!1),s(null),i.current.value="",r({values:{title:"",content:""}}),t()}},(function(){return r.a.createElement(P.c,null,r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Label,null,"Title:"),r.a.createElement(P.b,{name:"title",type:"input",as:F.a.Control,autoComplete:"off"}),r.a.createElement(P.a,{name:"title"},(function(e){return r.a.createElement(R.a,{variant:"warning"},e)}))),r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Label,null,"Content:"),r.a.createElement(P.b,{name:"content"},(function(e){var t=e.field;return r.a.createElement(F.a.Control,Object.assign({as:"textarea",rows:4},t))})),r.a.createElement(P.a,{name:"content"},(function(e){return r.a.createElement(R.a,{variant:"warning"},e)}))),r.a.createElement(F.a.Group,null,r.a.createElement(F.a.File,{id:"image",label:"Upload images",onChange:m,ref:i,multiple:!0})),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(A.a,{variant:"secondary",id:"cancel-button",onClick:t,style:{marginRight:"auto"}},"Cancel"),r.a.createElement(A.a,{variant:"primary",id:"create-button",type:"submit",style:{marginLeft:"auto"}},"Create")))})))},J={login:function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var Y=function(e,t){return function(){var a=Object(f.a)(p.a.mark((function a(n){var r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,J.login({username:e,password:t});case 3:r=a.sent,window.localStorage.setItem("loggedBlogUser",JSON.stringify(r)),j.setToken(r.token),n({type:"SUCCESS",data:{user:r}}),n(S("User ".concat(r.username," logged in"))),n(I()),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:"FAIL"}),n(L("Wrong username or password"));case 15:setTimeout((function(){n({type:"CLEAR_NOTIFICATION"})}),2e3);case 16:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS":case"TOKEN_USER":return t.data.user;case"SIGNOUT":case"FAIL":return null;default:return e}},Q={fetchUsers:function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.data.users;default:return e}},$=a(18),ee=a(285),te=function(){var e=Object(B.c)((function(e){return e.users}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),r.a.createElement(ee.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User"),r.a.createElement("th",null,"Number of blogs posted"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement($.b,{to:"/users/".concat(e.id)},e.name)),r.a.createElement("td",null,e.blogs.length))})))))},ae=a(292),ne=a(293),re=a(173),ce={padding:5},oe={margin:5},le=function(e){var t=e.setSearchTerm,a=e.setCurrentPage,n=Object(B.c)((function(e){return e.user})),c=Object(D.f)(),o=Object(D.g)(),l=Object(B.b)(),u=function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.username,window.localStorage.removeItem("loggedBlogUser"),c.push("/"),l({type:"SIGNOUT"}),l({type:"CLEAR_BLOGS"}),l({type:"INFO_NOTIFICATION",data:"User ".concat(a," logged out")}),setTimeout((function(){l({type:"CLEAR_NOTIFICATION"})}),3e3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!n)return r.a.createElement(ae.a,{collapseOnSelect:!0,expand:"lg",bg:"light"},r.a.createElement(ae.a.Brand,null,r.a.createElement($.b,{style:ce,to:"/"},"HIFORUM")),r.a.createElement(ae.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(ae.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(ne.a,{className:"mr-auto"}),"/signup"===o.pathname?r.a.createElement(ne.a,{className:"justify-content-end"},r.a.createElement(ne.a.Link,{as:$.b,to:"/"},"Sign in")):r.a.createElement(ne.a,{className:"justify-content-end"},r.a.createElement(ne.a.Link,{as:$.b,to:"/signup"},"Sign up"))));return r.a.createElement(ae.a,{collapseOnSelect:!0,expand:"lg",bg:"light"},r.a.createElement(ae.a.Brand,null,r.a.createElement($.b,{style:ce,to:"/"},"HIFORUM")),r.a.createElement(ae.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(ae.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(ne.a,null,r.a.createElement(ne.a.Link,{as:$.b,to:"/"},"HOME"),r.a.createElement(ne.a.Link,{as:$.b,to:"/users/".concat(n.id)},"MY POSTS")),r.a.createElement(F.a,{inline:!0,style:{margin:"0 auto"}},"/"===o.pathname?r.a.createElement(re.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){t(e.target.value),a(1)}}):null),r.a.createElement(ne.a,null," ",r.a.createElement(ae.a.Text,null,"Hi, ",n.username,r.a.createElement(A.a,{variant:"secondary",style:oe,onClick:u},"Sign out")))))},ue=a(72),se=a.n(ue),ie=function(e){var t=e.user,a=e.indexOfFirstPost,c=e.indexOfLastPost,o=e.setTotalBlogs;if(Object(n.useEffect)((function(){o(t?t.blogs.length:0)}),[t,o]),!t)return"Loading...";return r.a.createElement("div",null,r.a.createElement("h2",null,"All Blogs By ".concat(t.username)),r.a.createElement(ee.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"BLOG"),r.a.createElement("th",null,"DATE"))),r.a.createElement("tbody",null,t.blogs.slice(a,c).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement($.b,{to:"/blogs/".concat(e.id)},e.title)),r.a.createElement("td",null," ".concat(se()(e.date).fromNow())))})))))},me=function(){var e=Object(B.c)((function(e){return e.user})),t=Object(B.b)(),a=function(){var a=Object(f.a)(p.a.mark((function a(n,r){var c,o;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=r.resetForm,(o=r.setSubmitting)(!0),t(Y(n.username,n.password)),o(!1),c(null===e?{values:{username:n.username,password:""}}:{values:{username:"",password:""}});case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement(P.d,{initialValues:{username:"",password:""},onSubmit:a},(function(e){e.values,e.isSubmitting;return r.a.createElement(P.c,null,r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Label,null,"Username:"),r.a.createElement(P.b,{name:"username",type:"input",as:F.a.Control})),r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Label,null,"Password:"),r.a.createElement(P.b,{name:"password",type:"password",as:F.a.Control})),r.a.createElement(A.a,{variant:"primary",type:"submit"},"Sign in"))})))},de={signUp:function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe=V.a().shape({username:V.b().min(8,"Too Short!").max(15,"Too Long!").required("Required"),password:V.b().min(8,"Too Short!").max(15,"Too Long").required("Required"),confirmPassword:V.b().min(8,"Too Short!").max(15,"Too Long").required("Required")}),fe=function(e){var t={};return e.password!==e.confirmPassword&&(t.confirmPassword="Must be the same as password above"),t},Ee=function(){var e=Object(B.b)(),t=Object(D.f)();return r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement(P.d,{initialValues:{username:"",password:"",confirmPassword:""},validate:fe,validationSchema:pe,onSubmit:function(){var a=Object(f.a)(p.a.mark((function a(n,r){var c,o,l;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c=r.resetForm,o=r.setSubmitting,n.password!==n.confirmPassword){a.next=17;break}return a.prev=2,o(!0),a.next=6,de.signUp({username:n.username,password:n.password});case 6:l=a.sent,e(S("New user ".concat(l.username," signed up"))),setTimeout((function(){e({type:"CLEAR_NOTIFICATION"})}),3e3),o(!1),c({values:{username:"",password:"",confirmPassword:""}}),t.push("/"),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(2),e(L(a.t0));case 17:case"end":return a.stop()}}),a,null,[[2,14]])})));return function(e,t){return a.apply(this,arguments)}}()},(function(){return r.a.createElement(P.c,null,r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Label,null,"Username:"),r.a.createElement(P.b,{name:"username",type:"input",as:F.a.Control,autoComplete:"off"}),r.a.createElement(P.a,{name:"username"},(function(e){return r.a.createElement(R.a,{variant:"warning"},e)}))),r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Label,null,"Password:"),r.a.createElement(P.b,{name:"password",type:"password",as:F.a.Control,autoComplete:"off"}),r.a.createElement(P.a,{name:"password"},(function(e){return r.a.createElement(R.a,{variant:"warning"},e)}))),r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Label,null,"Confirm Password:"),r.a.createElement(P.b,{type:"password",name:"confirmPassword",as:F.a.Control,autoComplete:"off"}),r.a.createElement(P.a,{name:"confirmPassword"},(function(e){return r.a.createElement(R.a,{variant:"warning"},e)}))),r.a.createElement(A.a,{variant:"primary",type:"submit"},"Sign Up"))})))},be=a(123),ge=a.n(be),ve=a(286);se.a.extend(ge.a);var he=function(e){var t=e.sortBy,a=e.searchTerm,c=void 0===a?"":a,o=e.indexOfFirstPost,l=e.indexOfLastPost,u=e.setTotalBlogs,s=Object(B.c)((function(e){return e.blogs})),i=function(){return Object(E.a)(s).sort((function(e,t){return t.date-e.date}))},m=function(){switch(t){case"Newest to Oldest":return i();case"Oldest to Newest":return Object(E.a)(s).sort((function(e,t){return e.date-t.date}));case"Least to Most Likes":return Object(E.a)(s).sort((function(e,t){return e.likes.length-t.likes.length}));case"Most to Least Likes":return Object(E.a)(s).sort((function(e,t){return t.likes.length-e.likes.length}));default:return i()}}(),d=m.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return Object(n.useEffect)((function(){u(d.length)}),[d.length,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(ee.a,{striped:!0},r.a.createElement("tbody",null,function(){var e=""!==c?d:m;return Object(E.a)(e).slice(o,l).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(ve.a,{variant:"light"},e.likes.length," LIKES")),r.a.createElement("td",null,r.a.createElement($.b,{to:"/blogs/".concat(e.id)},e.title)),r.a.createElement("td",null,"Posted by ",function(e){var t=e.user;return r.a.createElement($.b,{to:"/users/".concat(t.id)},t.username)}(e)," ".concat(se()(e.date).fromNow())))}))}()))))},Oe=a(287),ye=a(178),we=(a(142),function(e){var t=e.showSortButton,a=e.setSortBy,n=e.sortBy;return r.a.createElement("div",{className:!0===t?"displaySortButton":"hide"},r.a.createElement(Oe.a,{id:"dropdown-basic-button",title:"SORT BY: ".concat(n),variant:"dark"},r.a.createElement(ye.a.Item,{onClick:function(){a("Newest to Oldest")}},"Newest to Oldest"),r.a.createElement(ye.a.Item,{onClick:function(){a("Oldest to Newest")}},"Oldest to Newest"),r.a.createElement(ye.a.Item,{onClick:function(){a("Least to Most Likes")}},"Least Likes to Most Likes"),r.a.createElement(ye.a.Item,{onClick:function(){a("Most to Least Likes")}},"Most Likes to Least Likes")))}),Te=a(296),ke=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.currentPage,c=e.setCurrentPage,o=[],l=1;l<=Math.ceil(a/t);l++)o.push(r.a.createElement(Te.a.Item,{key:l,active:l===n,onClick:function(e){c(e.target.text)}},l));return r.a.createElement("div",null,r.a.createElement(Te.a,null,o))},Ce=a(288);se.a.extend(ge.a);var je=function(){var e=Object(B.b)(),t=Object(B.c)((function(e){return e.blogs})),a=Object(B.c)((function(e){return e.user})),c=Object(B.c)((function(e){return e.users})),o=Object(D.h)("/users/:id"),u=Object(D.h)("/blogs/:id"),s=o?c.find((function(e){return e.id===o.params.id})):null,i=u?t.find((function(e){return e.id===u.params.id})):null,m=Object(n.useRef)(),d=Object(n.useState)(""),E=Object(l.a)(d,2),b=E[0],g=E[1],v=Object(n.useState)(!0),h=Object(l.a)(v,2),O=h[0],y=h[1],w=Object(n.useState)("Newest to Oldest"),T=Object(l.a)(w,2),k=T[0],C=T[1],L=Object(n.useState)(1),S=Object(l.a)(L,2),x=S[0],N=S[1],F=Object(n.useState)(10),A=Object(l.a)(F,1)[0],P=Object(n.useState)(t.length),_=Object(l.a)(P,2),U=_[0],R=_[1],G=x*A,M=G-A;Object(n.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogUser");if(t){var a=JSON.parse(t);e(function(e){return j.setToken(e.token),{type:"TOKEN_USER",data:{user:e}}}(a)),e(I()),e(function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.fetchUsers();case 2:a=e.sent,t({type:"FETCH_ALL",data:{users:a}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[e]);var V=function(){m.current.toggleVisibility()};return r.a.createElement("div",{className:"content"},r.a.createElement(le,{setSearchTerm:g,setCurrentPage:N}),r.a.createElement(Ce.a,{style:{flex:"1 0 auto"}},r.a.createElement(q,null),r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/users/:id"},r.a.createElement("div",null,r.a.createElement(ie,{user:s,sortBy:k,indexOfFirstPost:M,indexOfLastPost:G,searchTerm:b,setTotalBlogs:R}),r.a.createElement(ke,{postsPerPage:A,totalPosts:U,currentPage:x,setCurrentPage:N}))),r.a.createElement(D.a,{exact:!0,path:"/users"},r.a.createElement("div",null,r.a.createElement(te,null))),r.a.createElement(D.a,{path:"/blogs/:id"},r.a.createElement("div",null,r.a.createElement(H,{blog:i,user:a}))),r.a.createElement(D.a,{path:"/signup"},r.a.createElement(Ee,null)),r.a.createElement(D.a,{exact:!0,path:"/"},null===a?r.a.createElement(me,null):r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("div",{className:!0===O?"showFlexButtons":""},r.a.createElement(we,{showSortButton:O,setSortBy:C,sortBy:k}),r.a.createElement(K,{buttonLabel:"CREATE POST",className:"newBlogToggle",ref:m,setShowSortButton:y},r.a.createElement("div",null,r.a.createElement(z,{toggleForm:V})))),r.a.createElement(he,{sortBy:k,indexOfFirstPost:M,indexOfLastPost:G,searchTerm:b,setTotalBlogs:R}),r.a.createElement(ke,{postsPerPage:A,totalPosts:U,currentPage:x,setCurrentPage:N}))))))},Le=a(68),Se=a(176),xe=a(177),Ie=Object(Le.combineReducers)({blogs:N,user:Z,notification:x,users:X}),Ne=Object(Le.createStore)(Ie,Object(xe.composeWithDevTools)(Object(Le.applyMiddleware)(Se.a)));o.a.render([r.a.createElement(B.a,{store:Ne,key:"1"},r.a.createElement($.a,null,r.a.createElement(je,null))),r.a.createElement((function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("a",{href:"https://github.com/HangCcZ",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit"}},"Designed and Developed by Hang Chen"))}),{key:"2"})],document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.5be5376c.chunk.js.map