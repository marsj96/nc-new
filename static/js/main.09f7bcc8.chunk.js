(this["webpackJsonpnc-new"]=this["webpackJsonpnc-new"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(22),r=c.n(s),i=(c(28),c(29),c(8)),o=c(2),l=c(3),j=c(4),b=c(0),u=a.a.createContext(),d=function(e){var t=e.children,c=Object(n.useState)(""),a=Object(l.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=o[0],d=o[1];return Object(b.jsx)(u.Provider,{value:{user:s,setUser:r,loggedIn:j,setLoggedIn:d},children:t})},h=c(7),O=c.n(h),x=O.a.create({baseURL:"https://nc-news-reddit.herokuapp.com/api/"}),m=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(j.useState)(""),r=Object(l.a)(s,2),o=r[0],d=r[1],h=Object(j.useState)(!1),O=Object(l.a)(h,2),m=O[0],p=O[1],f=Object(n.useContext)(u),v=f.setLoggedIn,N=f.user,g=f.setUser,y=f.loggedIn;Object(n.useEffect)((function(){x.get("/users").then((function(e){return e.data.users})).then((function(e){a(e)}))}),[]);var C=function(e,t){e.preventDefault(),g(t),c.forEach((function(e){e.username===N?(g(e),v(!0)):p(!0)}))};return y?Object(b.jsx)("nav",{className:"bar",children:Object(b.jsxs)("nav",{className:"navBar",children:[Object(b.jsx)("img",{src:N.avatar_url,alt:N.username,className:"avatarIMG"}),Object(b.jsxs)("h4",{className:"usernameNav",children:[" ",N.username," "]}),Object(b.jsxs)("h4",{className:"navBarButtons",children:[Object(b.jsx)(i.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"Home"})," Topics"]})]})}):Object(b.jsx)("nav",{className:"bar",children:Object(b.jsxs)("nav",{className:"navBar",children:[Object(b.jsxs)("form",{className:"loginBox",onSubmit:C,children:[Object(b.jsx)("label",{children:Object(b.jsx)("input",{className:m?"error":"",type:"text",value:o,style:{width:"90px"},onChange:function(e){var t=e.target.value;d(t),C(e,t)}})}),Object(b.jsx)("input",{className:"loginButton",type:"submit",value:"Login"})]}),Object(b.jsxs)("h4",{className:"navBarButtons",children:[Object(b.jsx)(i.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"Home "}),"Topics "]})]})})},p=O.a.create({baseURL:"https://nc-news-reddit.herokuapp.com/api/"}),f=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(l.a)(s,2),o=r[0],j=r[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),h=d[0],O=d[1];return Object(n.useEffect)((function(){(function(e,t){if(t)return p.get("/articles?order=".concat(t)).then((function(e){return e.data.articles}));if(""!==e&&"Date"!==e){var c=e.toLowerCase();return p.get("/articles?sort_by=".concat(c)).then((function(e){return e.data.articles}))}return p.get("/articles").then((function(e){return e.data.articles}))})(c,h).then((function(e){j(e)}))}),[c,h]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"filterBy",children:["Filter:",Object(b.jsxs)("select",{onChange:function(e){var t=e.target.value;a(t),O("")},children:[Object(b.jsx)("option",{children:"Date"}),Object(b.jsx)("option",{children:"Title"}),Object(b.jsx)("option",{children:"Topic"}),Object(b.jsx)("option",{children:"Votes"}),Object(b.jsx)("option",{children:"Comment_count"}),Object(b.jsx)("option",{children:"Author"})]}),Object(b.jsx)("button",{className:"ascButton",onClick:function(){O("ASC")},children:" \u2191 "})," ",Object(b.jsx)("button",{onClick:function(){O("DESC")},children:" \u2193 "})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"articlesPage",children:o.map((function(e){return Object(b.jsxs)("ul",{className:"articlesCards",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(i.b,{to:"/articles/".concat(e.article_id),style:{textDecoration:"none",color:"white"},children:Object(b.jsx)("h2",{className:"articleTitle",children:e.title},e.article_id)}),Object(b.jsx)(i.b,{to:"/topics/".concat(e.topic),style:{textDecoration:"none",color:"blue"},className:"articleTitle",children:Object(b.jsx)("p",{children:" (".concat(e.topic,")")})})]},e.article_id),Object(b.jsx)(i.b,{to:"/articles/".concat(e.article_id),style:{textDecoration:"none",color:"white"},children:Object(b.jsx)("li",{className:"articleBody",children:Object(b.jsxs)("p",{children:[" ",e.body.slice(0,200),"... "]},e.body)},e.body)}),Object(b.jsx)("li",{children:Object(b.jsxs)("p",{className:"articleBottom",children:["".concat(e.author," "),"Votes:","".concat(e.votes," "),"".concat(e.created_at.slice(0,10)," "),Object(b.jsx)(i.b,{to:"/articles/".concat(e.article_id),style:{textDecoration:"none",color:"blue"},children:"Comments"})]},e.created_at)},e.created_at)]})}))})]})},v=function(){return Object(b.jsx)("div",{className:"mainHeader",children:Object(b.jsx)("h1",{children:"NC-News"})})},N=c(23),g=O.a.create({baseURL:"https://nc-news-reddit.herokuapp.com/api/"}),y=O.a.create({baseURL:"https://nc-news-reddit.herokuapp.com/api/"}),C=function(e,t){return y.patch("/articles/".concat(e),{inc_votes:t}).then((function(e){return console.log("RETURN",e),e.data}))},S=O.a.create({baseURL:"https://nc-news-reddit.herokuapp.com/api/"}),B=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(j.useState)(!1),r=Object(l.a)(s,2),i=r[0],d=r[1],h=Object(j.useState)(!1),O=Object(l.a)(h,2),x=O[0],m=O[1],f=Object(j.useState)(""),v=Object(l.a)(f,2),y=v[0],B=v[1],_=Object(j.useState)(""),w=Object(l.a)(_,2),k=w[0],D=w[1],L=Object(j.useState)([]),E=Object(l.a)(L,2),U=E[0],R=E[1],T=Object(j.useState)(0),I=Object(l.a)(T,2),P=I[0],A=I[1],H=Object(o.g)().article_id,J=Object(j.useContext)(u),V=J.loggedIn,M=J.user,F=function(e,t){e.preventDefault(),B(t)};return Object(n.useEffect)((function(){var e;(e=H,p.get("/articles/".concat(e)).then((function(e){return e.data.articles}))).then((function(e){a(e)}))}),[H]),Object(n.useEffect)((function(){var e;(e=H,g.get("/articles/".concat(e,"/comments")).then((function(e){return e.data.comments}))).then((function(e){R(e)}))}),[H]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("ul",{className:"articlesCards",children:[Object(b.jsx)("li",{children:Object(b.jsx)("h2",{className:"articleTitle",children:c.title},c.title)}),Object(b.jsx)("li",{children:Object(b.jsxs)("p",{className:"articleBody",children:[" ",c.body," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"articleBottom",children:[Object(b.jsxs)("h4",{className:"articleBottom",children:[c.author," Votes:","".concat(c.votes+P," ")]}),V?Object(b.jsx)("p",{className:"upvoteButton",children:Object(b.jsx)("button",{onClick:function(){C(H,1),d(!1),A((function(e){return e+1}))},children:"+"})}):"",V?Object(b.jsx)("p",{className:"upvoteButton",children:Object(b.jsx)("button",{onClick:function(){C(H,-1),A((function(e){return e-1}))},children:"-"})}):""]})})]}),V?Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"postCommentButton",onClick:function(){d(!0),m(!0)},children:"Post a comment"}),x?Object(b.jsx)("button",{onClick:function(){d(!1),m(!1)},children:"X"}):""]}):Object(b.jsx)("p",{children:" Please log in to post a comment. "}),i?Object(b.jsxs)("form",{onSubmit:F,children:[Object(b.jsx)("label",{children:Object(b.jsx)("textarea",{className:"commentPost",type:"text",value:k,onChange:function(e){var t=e.target.value;D(t),F(e,t)}})}),Object(b.jsx)("input",{className:"loginButton",type:"submit",value:"Send",onClick:function(){var e,t;e=H,t={username:M.username,body:y},console.log(t),S.post("/articles/".concat(e,"/comments"),t).then((function(e){return console.log(e),e.data})),d(!1),m(!1),R((function(e){var t=Object(N.a)(e);return t.unshift({author:M.username,body:y,votes:0,created_at:"Just now..",comment_id:500}),t}))}})]}):""]},c.article_id),Object(b.jsx)("div",{children:U.map((function(e){return Object(b.jsxs)("div",{className:"commentCard",children:[Object(b.jsxs)("h3",{className:"commentAuthor",children:[" ",e.author," "]}),Object(b.jsxs)("p",{className:"commentBody",children:[" ",e.body," "]}),Object(b.jsxs)("p",{className:"votesComment",children:[" ",e.created_at.slice(0,10)]})]},e.comment_id)}))})]})},_=O.a.create({baseURL:"https://nc-news-reddit.herokuapp.com/api/"}),w=function(){var e=Object(o.g)(),t=Object(j.useState)([]),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(j.useEffect)((function(){var t;(t=e.topic,_.get("/articles?topic=".concat(t)).then((function(e){return console.log(e),e.data.articles}))).then((function(e){console.log(e),a(e)}))}),[e.topic]),Object(b.jsx)("div",{children:n.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(i.b,{to:"/articles/".concat(e.article_id),children:e.title})},e.article_id)}))})};var k=function(){return Object(b.jsx)(d,{children:Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsx)(v,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(f,{})}),Object(b.jsx)(o.a,{path:"/articles/:article_id",element:Object(b.jsx)(B,{})}),Object(b.jsx)(o.a,{path:"/topics/:topic",element:Object(b.jsx)(w,{})})]})]})})})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.09f7bcc8.chunk.js.map