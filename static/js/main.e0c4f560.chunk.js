(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{102:function(t,e,a){t.exports={progressContainer:"ProgressBar_progressContainer__ZClBh",progressHelpText:"ProgressBar_progressHelpText__3cOci",circleProgressContainer:"ProgressBar_circleProgressContainer__1Nb_e"}},121:function(t,e,a){t.exports={addItemContainer:"AddItemForm_addItemContainer__2xiZ6",addItemButton:"AddItemForm_addItemButton__3siwr"}},171:function(t,e,a){t.exports={taskDeadlineInput:"DeadlineDate_taskDeadlineInput__eIzbt"}},172:function(t,e,a){t.exports={taskSelect:"PrioritySelect_taskSelect__2WqUx"}},173:function(t,e,a){t.exports={createdDateText:"CreatedDate_createdDateText__1QF8F"}},179:function(t,e,a){t.exports={pageNotFoundBlock:"PageNotFound_pageNotFoundBlock__2KmMD"}},180:function(t,e,a){t.exports={mainBlock:"App_mainBlock__pKt28",circularProgressContainer:"App_circularProgressContainer__jPJZt"}},25:function(t,e,a){t.exports={loginContainer:"Login_loginContainer__1Sst0",welcomeTextContainer:"Login_welcomeTextContainer__29OKk",loginContent:"Login_loginContent__28aMJ",projectContainer:"Login_projectContainer__2mw08",projectImageContainer:"Login_projectImageContainer__3NFV3",projectImage:"Login_projectImage__2rrfy",projectBody:"Login_projectBody__182rn",projectInfo:"Login_projectInfo__2LeoU",projectHelpText:"Login_projectHelpText__1fa_O",projectList:"Login_projectList__1uQI-",authContainer:"Login_authContainer__1wEcZ",authForm:"Login_authForm__3Ubng",authFormControl:"Login_authFormControl__3fYpL",authTextContainer:"Login_authTextContainer__KObyY",authErrorText:"Login_authErrorText__2rPgR",authRememberMeText:"Login_authRememberMeText__1ZtLd",authButton:"Login_authButton__2d8gv"}},34:function(t,e,a){t.exports={todolistBlock:"Todolist_todolistBlock__3J3Zf",todolistContainer:"Todolist_todolistContainer__1ewUe",todolistTitleContainer:"Todolist_todolistTitleContainer__2rYOq",todolistTitleEditableSpanInput:"Todolist_todolistTitleEditableSpanInput__2zxIm",todolistTitle:"Todolist_todolistTitle__3vL_R",todolistInput:"Todolist_todolistInput__3T8Og",todolistDisplay:"Todolist_todolistDisplay__1YGF8",todolistDeleteButton:"Todolist_todolistDeleteButton__xZ4AS",todolistFilterContainer:"Todolist_todolistFilterContainer__1ZP5H",buttonGroupContainer:"Todolist_buttonGroupContainer__2UaGt",buttonFilter:"Todolist_buttonFilter__35Pa3"}},35:function(t,e,a){t.exports={header:"Header_header__2e8PM",linkHeaderLogo:"Header_linkHeaderLogo__1mPCh",headerLogoContainer:"Header_headerLogoContainer__2yrFS",headerLogo:"Header_headerLogo__3GVhv",headerLogoImg:"Header_headerLogoImg__2OXJj",headerLogoText:"Header_headerLogoText__3_QgH",headerDisplay:"Header_headerDisplay__366sA",headerUserInfo:"Header_headerUserInfo__2vwet",headerUserText:"Header_headerUserText__1LeAd",headerEmailText:"Header_headerEmailText__1DhTn",headerButton:"Header_headerButton__3OIk3"}},39:function(t,e,a){t.exports={taskSettingsContainer:"TaskSettings_taskSettingsContainer__1J1P6",settingsItemContainer:"TaskSettings_settingsItemContainer__3T3Na",taskItemHelpText:"TaskSettings_taskItemHelpText__2dHZ6",itemText:"TaskSettings_itemText__2m15W",taskDescriptionEditableSpanInput:"TaskSettings_taskDescriptionEditableSpanInput__27wj6"}},468:function(t,e,a){},469:function(t,e,a){"use strict";a.r(e);var n,s,i=a(2),r=a(0),o=a.n(r),c=a(16),l=a.n(c),d=a(76),u=a(19),j=a(72),b=a(166),p=a(12),h=a.n(p),O=a(32),m=a(10),f=a(167),x=a.n(f),T=a(70),k=a.n(T),g=x.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"b49ff398-348e-49be-b98e-42e3db5cb9ab"}}),_=function(t){return g.post("auth/login",t)},v=function(){return g.get("auth/me")},I=function(){return g.delete("auth/login")},C=function(){return g.get("todo-lists")},S=function(t){return g.post("todo-lists",{title:t})},y=function(t){return g.delete("todo-lists/".concat(t))},N=function(t,e){return g.put("todo-lists/".concat(t),{title:e})},L=function(t){return g.get("todo-lists/".concat(t,"/tasks"))},D=function(t,e){return g.delete("todo-lists/".concat(t,"/tasks/").concat(e))},E=function(t,e){return g.post("todo-lists/".concat(t,"/tasks"),{title:e,description:"Empty description",deadline:k()().format("L"),priority:0})},w=function(t,e,a){return g.put("todo-lists/".concat(t,"/tasks/").concat(e),a)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hight=2]="Hight",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var A=function(t,e){t.messages.length?e(M(t.messages[0])):e(M("Some error occurred")),e(U("failed"))},P=function(t,e){e(M(t.message?t.message:"Some error occurred")),e(U("failed"))},F={isLoggedIn:!1,email:""},H=function(t,e){return{type:"AUTH/SET-IS-LOGGED-IN",value:t,email:e}},B={status:"idle",error:null,isInitialized:!1},U=function(t){return{type:"APP/SET-STATUS",status:t}},M=function(t){return{type:"APP/SET-ERROR",error:t}},R=a(101),G=[],z=function(t){return{type:"ADD-TODOLIST",todolist:t}},K=function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}},V=function(t,e){return{type:"CHANGE-TODOLIST-ENTITY-STATUS",id:t,status:e}},Z=a(52),Y={},J=function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}},q=function(t){return{type:"ADD-TASK",task:t}},W=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}},Q=function(t,e,a){return{type:"UPDATE-TASK",model:e,todolistId:a,taskId:t}},X=function(t,e,a){return{type:"CHANGE-TASK-ENTITY-STATUS",todolistId:t,taskId:e,status:a}},$=function(t,e,a){return function(){var n=Object(O.a)(h.a.mark((function n(s,i){var r,o,c,l;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,r=i(),o=r.tasks[a].find((function(e){return e.id===t}))){n.next=6;break}return console.warn("task not found in the state"),n.abrupt("return");case 6:return c=Object(m.a)({deadline:o.deadline,description:o.description,priority:o.priority,startDate:o.startDate,title:o.title,status:o.status},e),s(U("loading")),s(X(a,t,"loading")),n.next=11,w(a,t,c);case 11:0===(l=n.sent).data.resultCode?(s(Q(t,e,a)),s(X(a,t,"succeeded"))):A(l.data,s),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),P(n.t0,s);case 18:return n.prev=18,s(U("succeeded")),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[0,15,18,21]])})));return function(t,e){return n.apply(this,arguments)}}()},tt=Object(j.c)({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-IS-INITIALIZED":return Object(m.a)(Object(m.a)({},t),{},{isInitialized:e.isInitialized});case"APP/SET-STATUS":return Object(m.a)(Object(m.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(m.a)(Object(m.a)({},t),{},{error:e.error});default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TASKS":return Object(m.a)(Object(m.a)({},t),{},Object(Z.a)({},e.todolistId,e.tasks.map((function(t){return Object(m.a)(Object(m.a)({},t),{},{entityStatus:"idle"})}))));case"ADD-TASK":return Object(m.a)(Object(m.a)({},t),{},Object(Z.a)({},e.task.todoListId,[e.task].concat(Object(R.a)(t[e.task.todoListId]))));case"REMOVE-TASK":return Object(m.a)(Object(m.a)({},t),{},Object(Z.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"UPDATE-TASK":return Object(m.a)(Object(m.a)({},t),{},Object(Z.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(m.a)(Object(m.a)({},t),e.model):t}))));case"CHANGE-TASK-ENTITY-STATUS":return Object(m.a)(Object(m.a)({},t),{},Object(Z.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(m.a)(Object(m.a)({},t),{},{entityStatus:e.status}):t}))));case"SET-TODOLISTS":var a=Object(m.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"ADD-TODOLIST":return Object(m.a)(Object(m.a)({},t),{},Object(Z.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(m.a)({},t);return delete n[e.id],n;default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(m.a)(Object(m.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"ADD-TODOLIST":return[Object(m.a)(Object(m.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(R.a)(t));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(m.a)(Object(m.a)({},t),{},{title:e.title,entityStatus:"idle"}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(m.a)(Object(m.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(m.a)(Object(m.a)({},t),{},{entityStatus:e.status}):t}));default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"AUTH/SET-IS-LOGGED-IN":return Object(m.a)(Object(m.a)({},t),{},{isLoggedIn:e.value,email:e.email});default:return t}}}),et=Object(j.d)(tt,Object(j.a)(b.a));window.store=et;var at=a(23),nt=a(183),st=a(48),it=a(517),rt=o.a.memo((function(t){var e=Object(r.useState)(!1),a=Object(st.a)(e,2),n=a[0],s=a[1],o=Object(r.useState)(t.value),c=Object(st.a)(o,2),l=c[0],d=c[1],j=Object(u.b)();return n?Object(i.jsx)(it.a,{value:l,onChange:function(t){d(t.currentTarget.value)},onBlur:function(){""!==l?(s(!1),t.onChangeValue(l)):(j(M("\u0421hanges not saved. Title is emply.")),s(!1),t.onChangeValue(t.value))},autoFocus:!0,color:"primary",className:t.editableSpanInputStyle}):Object(i.jsx)("span",{onDoubleClick:function(){s(!0),d(t.value)},className:t.editableSpanTextStyle,children:t.value})})),ot=a(171),ct=a.n(ot),lt=o.a.memo((function(t){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("input",{value:t.dateValue,onChange:function(e){t.onDateChange(e.currentTarget.value)},type:"date",className:ct.a.taskDeadlineInput})})})),dt=a(172),ut=a.n(dt),jt=o.a.memo((function(t){var e=Object(r.useState)(!0),a=Object(st.a)(e,2),n=a[0],s=a[1];return n?Object(i.jsx)("span",{onDoubleClick:function(){s(!1)},className:t.priorityTextStyle,style:{margin:"0 0 0 12px"},children:function(){switch(t.priority){case 0:return"Low";case 1:return"Middle";case 2:return"Hight";case 3:return"Urgently";case 4:return"Later"}}()}):Object(i.jsxs)("select",{onChange:function(e){t.onChangePriority(+e.target.value),s(!0)},name:"priority",className:ut.a.taskSelect,children:[Object(i.jsx)("option",{value:0,selected:!0,children:"Low"}),Object(i.jsx)("option",{value:1,children:"Middle"}),Object(i.jsx)("option",{value:2,children:"Hight"}),Object(i.jsx)("option",{value:3,children:"Urgently"}),Object(i.jsx)("option",{value:4,children:"Later"})]})})),bt=a(173),pt=a.n(bt),ht=o.a.memo((function(t){var e;return Object(i.jsx)("span",{className:pt.a.createdDateText,children:t.createdDate?(e=k()(t.createdDate).format("L"),"".concat(e.substr(3,2),".").concat(e.substr(0,2),".").concat(e.substr(6,4))):null})})),Ot=a(39),mt=a.n(Ot),ft=o.a.memo((function(t){var e=Object(r.useCallback)((function(e){t.changeTaskDescription(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(r.useCallback)((function(e){t.changeTaskDeadline(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(r.useCallback)((function(e){t.changeTaskPriority(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(i.jsxs)("div",{className:mt.a.taskSettingsContainer,children:[Object(i.jsxs)("div",{className:mt.a.settingsItemContainer,children:[Object(i.jsx)("p",{className:mt.a.taskItemHelpText,children:"Description:"}),Object(i.jsx)(rt,{value:t.task.description,onChangeValue:e,editableSpanInputStyle:mt.a.taskDescriptionEditableSpanInput,editableSpanTextStyle:mt.a.itemText})]}),Object(i.jsxs)("div",{className:mt.a.settingsItemContainer,children:[Object(i.jsx)("span",{className:mt.a.taskItemHelpText,children:"Deadline:"}),Object(i.jsx)(lt,{dateValue:t.task.deadline.substr(0,10),onDateChange:a})]}),Object(i.jsxs)("div",{className:mt.a.settingsItemContainer,children:[Object(i.jsx)("span",{className:mt.a.taskItemHelpText,children:"Priority:"}),Object(i.jsx)(jt,{todolistId:t.todolistId,priority:t.task.priority,onChangePriority:n,priorityTextStyle:mt.a.itemText})]}),Object(i.jsxs)("div",{className:mt.a.settingsItemContainer,children:[Object(i.jsx)("span",{className:mt.a.taskItemHelpText,style:{margin:"0 12px 0 0"},children:"Created:"}),Object(i.jsx)(ht,{createdDate:t.task.addedDate})]})]})})),xt=a(508),Tt=a(519),kt=a(507),gt=a(174),_t=a.n(gt),vt=a(53),It=a.n(vt),Ct=o.a.memo((function(t){var e=Object(r.useState)(!1),a=Object(st.a)(e,2),s=a[0],o=a[1],c=Object(r.useCallback)((function(){o(!s)}),[s]),l=Object(r.useCallback)((function(){t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),d=Object(r.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]),u=Object(r.useCallback)((function(e){t.changeTaskStatus(t.task.id,e.currentTarget.checked?n.Completed:n.New,t.todolistId)}),[t.task.id,t.todolistId]);return Object(i.jsxs)("div",{className:t.task.status===n.Completed?"is-done":"",children:[Object(i.jsxs)("div",{className:It.a.taskMainInfo,children:[Object(i.jsxs)("div",{className:It.a.taskStatusAndTitle,children:[Object(i.jsx)(Tt.a,{checked:t.task.status===n.Completed,onChange:u,color:"primary",className:It.a.taskCheckbox}),Object(i.jsx)(rt,{value:t.task.title,onChangeValue:d,editableSpanInputStyle:It.a.taskTitleEditableSpanInput,editableSpanTextStyle:It.a.taskTitle})]}),Object(i.jsxs)("div",{className:It.a.taskButtonsContainer,children:[Object(i.jsx)(kt.a,{onClick:c,color:"primary",className:It.a.taskButton,children:Object(i.jsx)(_t.a,{fontSize:"inherit"})}),Object(i.jsx)(kt.a,{onClick:l,disabled:"loading"===t.task.entityStatus,className:It.a.taskButton,children:Object(i.jsx)(xt.a,{fontSize:"inherit"})})]})]}),s?Object(i.jsx)(ft,{todolistId:t.todolistId,task:t.task,changeTaskDescription:t.changeTaskDescription,changeTaskDeadline:t.changeTaskDeadline,changeTaskPriority:t.changeTaskPriority}):null]},t.task.id)})),St=a(509),yt=a(121),Nt=a.n(yt),Lt=o.a.memo((function(t){var e=t.addItem,a=t.disabled,n=void 0!==a&&a,s=t.addItemInputStyle,o=Object(r.useState)(""),c=Object(st.a)(o,2),l=c[0],d=c[1],u=Object(r.useState)(null),j=Object(st.a)(u,2),b=j[0],p=j[1],h=function(){""!==l.trim()?(e(l),d("")):p("Title is required")};return Object(i.jsxs)("div",{className:Nt.a.addItemContainer,children:[Object(i.jsx)(it.a,{value:l,onChange:function(t){d(t.currentTarget.value)},onKeyPress:function(t){null!==b&&p(""),"Enter"===t.key&&h()},disabled:n,error:!!b,helperText:b,label:"Title",variant:"outlined",className:s}),Object(i.jsx)(kt.a,{onClick:h,disabled:n,className:Nt.a.addItemButton,color:"primary",children:Object(i.jsx)(St.a,{})})]})})),Dt=a(102),Et=a.n(Dt),wt=a(175),At=o.a.memo((function(t){var e=Object(r.useCallback)((function(e){var a=0;return e.forEach((function(t){2===t.status&&a++})),Math.round(100*a/t.tasks.length)}),[t.tasks]);return isNaN(e(t.tasks))?null:Object(i.jsxs)("div",{className:Et.a.progressContainer,children:[Object(i.jsx)("span",{className:Et.a.progressHelpText,children:"Progress (Completed):"}),Object(i.jsx)("div",{className:Et.a.circleProgressContainer,children:Object(i.jsx)(wt.a,{percentage:e(t.tasks),primaryColor:["#0085eb","#dfe5ff"],secondaryColor:"#FFE5FF",strokeWidth:5,width:70})})]})})),Pt=a(510),Ft=a(471),Ht=a(34),Bt=a.n(Ht),Ut=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,s=Object(nt.a)(t,["demo"]),o=Object(u.b)();Object(r.useEffect)((function(){var t;a||o((t=s.todolist.id,function(){var e=Object(O.a)(h.a.mark((function e(a){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(U("loading")),e.next=4,L(t);case 4:n=e.sent,s=n.data.items,a(J(s,t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),P(e.t0,a);case 12:return e.prev=12,a(U("succeeded")),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()))}),[a,o,s.todolist.id]);var c=Object(r.useCallback)((function(t){s.addTask(t,s.todolist.id)}),[s.addTask,s.todolist.id]),l=Object(r.useCallback)((function(){s.removeTodolist(s.todolist.id)}),[s.removeTodolist,s.todolist.id]),d=Object(r.useCallback)((function(t){s.changeTodolistTitle(s.todolist.id,t)}),[s.todolist.id,s.changeTodolistTitle]),j=Object(r.useCallback)((function(){return s.changeFilter("all",s.todolist.id)}),[s.todolist.id,s.changeFilter]),b=Object(r.useCallback)((function(){return s.changeFilter("active",s.todolist.id)}),[s.todolist.id,s.changeFilter]),p=Object(r.useCallback)((function(){return s.changeFilter("completed",s.todolist.id)}),[s.todolist.id,s.changeFilter]),m=s.tasks;return"active"===s.todolist.filter&&(m=s.tasks.filter((function(t){return t.status===n.New}))),"completed"===s.todolist.filter&&(m=s.tasks.filter((function(t){return t.status===n.Completed}))),Object(i.jsx)("div",{className:Bt.a.todolistBlock,children:Object(i.jsxs)("div",{className:Bt.a.todolistContainer,children:[Object(i.jsxs)("div",{className:Bt.a.todolistTitleContainer,children:[Object(i.jsx)(rt,{value:s.todolist.title,onChangeValue:d,editableSpanInputStyle:Bt.a.todolistTitleEditableSpanInput,editableSpanTextStyle:Bt.a.todolistTitle}),Object(i.jsxs)("div",{className:Bt.a.todolistDisplay,children:[Object(i.jsx)("span",{children:s.todolist.addedDate?k()(s.todolist.addedDate).format("L"):null}),Object(i.jsx)(kt.a,{onClick:l,disabled:"loading"===s.todolist.entityStatus,className:Bt.a.todolistDeleteButton,children:Object(i.jsx)(xt.a,{fontSize:"inherit"})})]})]}),Object(i.jsx)(Lt,{addItem:c,disabled:"loading"===s.todolist.entityStatus,addItemInputStyle:Bt.a.todolistInput}),Object(i.jsx)("div",{children:m.map((function(t){return Object(i.jsx)(Ct,{todolistId:s.todolist.id,task:t,removeTask:s.removeTask,changeTaskTitle:s.changeTaskTitle,changeTaskStatus:s.changeTaskStatus,changeTaskDescription:s.changeTaskDescription,changeTaskDeadline:s.changeTaskDeadline,changeTaskPriority:s.changeTaskPriority},t.id)}))}),Object(i.jsx)("div",{className:Bt.a.todolistFilterContainer,children:Object(i.jsxs)(Pt.a,{color:"primary",className:Bt.a.buttonGroupContainer,children:[Object(i.jsx)(Ft.a,{variant:"all"===s.todolist.filter?"contained":"outlined",onClick:j,color:"default",className:Bt.a.buttonFilter,children:"All"}),Object(i.jsx)(Ft.a,{variant:"active"===s.todolist.filter?"contained":"outlined",onClick:b,color:"primary",className:Bt.a.buttonFilter,children:"Active"}),Object(i.jsx)(Ft.a,{variant:"completed"===s.todolist.filter?"contained":"outlined",onClick:p,color:"secondary",className:Bt.a.buttonFilter,children:"Completed"})]})}),Object(i.jsx)(At,{tasks:s.tasks})]})})})),Mt=a(176),Rt=a.n(Mt),Gt=a(182),zt=a(64),Kt=a.n(zt),Vt=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(u.c)((function(t){return t.todolists})),s=Object(u.c)((function(t){return t.auth.isLoggedIn})),o=Object(u.c)((function(t){return t.tasks})),c=Object(u.b)();Object(r.useEffect)((function(){!a&&s&&c(function(){var t=Object(O.a)(h.a.mark((function t(e){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(U("loading")),t.next=4,C();case 4:a=t.sent,e({type:"SET-TODOLISTS",todolists:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),P(t.t0,e);case 11:return t.prev=11,e(U("succeeded")),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}())}),[a,s,c]);var l=Object(r.useCallback)((function(t,e){c(function(t,e){return function(){var a=Object(O.a)(h.a.mark((function a(n){var s,i;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(U("loading")),a.next=4,E(e,t);case 4:0===(s=a.sent).data.resultCode?(i=s.data.data.item,n(q(i))):A(s.data,n),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),P(a.t0,n);case 11:return a.prev=11,n(U("succeeded")),a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[0,8,11,14]])})));return function(t){return a.apply(this,arguments)}}()}(t,e))}),[c]),d=Object(r.useCallback)((function(t,e){c(function(t,e){return function(){var a=Object(O.a)(h.a.mark((function a(n){var s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(U("loading")),n(X(e,t,"loading")),a.next=5,D(e,t);case 5:0===(s=a.sent).data.resultCode?(n(W(t,e)),n(X(e,t,"succeeded"))):A(s.data,n),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),P(a.t0,n);case 12:return a.prev=12,n(U("succeeded")),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})));return function(t){return a.apply(this,arguments)}}()}(t,e))}),[c]),j=Object(r.useCallback)((function(t,e,a){c($(t,{title:e},a))}),[c]),b=Object(r.useCallback)((function(t,e,a){c($(t,{status:e},a))}),[c]),p=Object(r.useCallback)((function(t,e,a){c($(t,{description:e},a))}),[c]),m=Object(r.useCallback)((function(t,e,a){c($(t,{deadline:e},a))}),[c]),f=Object(r.useCallback)((function(t,e,a){c($(t,{priority:e},a))}),[c]),x=Object(r.useCallback)((function(t){c(function(t){return function(){var e=Object(O.a)(h.a.mark((function e(a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(U("loading")),e.next=4,S(t);case 4:0===(n=e.sent).data.resultCode?a(z(n.data.data.item)):A(n.data,a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),P(e.t0,a);case 11:return e.prev=11,a(U("succeeded")),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()}(t))}),[c]),T=Object(r.useCallback)((function(t){var e;c((e=t,function(){var t=Object(O.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(U("loading")),a(V(e,"loading")),t.next=5,y(e);case 5:0===(n=t.sent).data.resultCode?a({type:"REMOVE-TODOLIST",id:e}):A(n.data,a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),P(t.t0,a);case 12:return t.prev=12,a(U("succeeded")),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()))}),[c]),k=Object(r.useCallback)((function(t,e){c(function(t,e){return function(){var a=Object(O.a)(h.a.mark((function a(n){var s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(U("loading")),n(V(t,"loading")),a.next=5,N(t,e);case 5:0===(s=a.sent).data.resultCode?n(K(t,e)):A(s.data,n),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),P(a.t0,n);case 12:return a.prev=12,n(U("succeeded")),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})));return function(t){return a.apply(this,arguments)}}()}(t,e))}),[c]),g=Object(r.useCallback)((function(t,e){c({type:"CHANGE-TODOLIST-FILTER",id:e,filter:t})}),[c]);if(!s)return Object(i.jsx)(at.a,{to:"/login"});return Object(i.jsxs)("div",{className:Kt.a.todolistsListBlock,children:[Object(i.jsx)(Rt.a,{params:{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#0085eb"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#0085eb",opacity:.4,width:1},move:{enable:!0,speed:.4,random:!1,straight:!1,bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}}},className:Kt.a.particles}),Object(i.jsx)("div",{"data-aos":"fade-right","data-aos-duration":"600",className:Kt.a.todolistsListInputContainer,children:Object(i.jsx)(Lt,{addItem:x,addItemInputStyle:Kt.a.todolistsListInput})}),Object(i.jsx)("div",{children:Object(i.jsx)(Gt.a,{breakpointCols:{default:4,1300:3,1e3:2,680:1},columnClassName:Kt.a.todolistColumnItem,className:Kt.a.todolistslits,children:n.map((function(t){var e=o[t.id];return Object(i.jsx)(Ut,{todolist:t,tasks:e,addTask:l,removeTask:d,changeTaskTitle:j,changeTaskStatus:b,changeTaskDescription:p,changeTaskDeadline:m,changeTaskPriority:f,removeTodolist:T,changeTodolistTitle:k,changeFilter:g,demo:a},t.id)}))})})]})},Zt=a(181),Yt=a(511),Jt=a(506),qt=a(512),Wt=a.p+"static/media/todolist.7517dddc.png",Qt=a(25),Xt=a.n(Qt),$t=o.a.memo((function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.auth.isLoggedIn})),a=Object(Zt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address."):e.email="Required.",t.password?t.password.length<6&&(e.password="Password must be more than six characters."):e.password="Required.",e},onSubmit:function(e){var n;t((n=e,function(){var t=Object(O.a)(h.a.mark((function t(e){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(U("loading")),t.next=4,_(n);case 4:0===(a=t.sent).data.resultCode?e(H(!0,n.email)):A(a.data,e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),P(t.t0,e);case 11:return t.prev=11,e(U("succeeded")),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}())),a.resetForm()}});return e?Object(i.jsx)(at.a,{to:"/"}):Object(i.jsxs)("div",{className:Xt.a.loginContainer,children:[Object(i.jsx)("div",{className:Xt.a.welcomeTextContainer,children:Object(i.jsx)("h3",{children:"Welcome to Task Tracker application"})}),Object(i.jsxs)("div",{className:Xt.a.loginContent,children:[Object(i.jsxs)("div",{"data-aos":"zoom-in","data-aos-duration":"600",className:Xt.a.projectContainer,children:[Object(i.jsx)("div",{className:Xt.a.projectImageContainer,style:{backgroundImage:"url(".concat(Wt,")")}}),Object(i.jsx)("div",{className:Xt.a.projectBody,children:Object(i.jsxs)("div",{className:Xt.a.projectInfo,children:[Object(i.jsx)("h3",{className:Xt.a.projectHelpText,children:"Task Tracker help you to:"}),Object(i.jsxs)("ul",{className:Xt.a.projectList,children:[Object(i.jsx)("li",{children:"Structure information about all current tasks in one place;"}),Object(i.jsx)("li",{children:"Set description, deadline and filtres for your tasks;"}),Object(i.jsx)("li",{children:"Set a deadline for completed tasks;"}),Object(i.jsx)("li",{children:"Display the percentage of completed tasks;"}),Object(i.jsx)("li",{children:"Manage and control tasks with user interface;"})]})]})})]}),Object(i.jsx)(Yt.a,{"data-aos":"zoom-in","data-aos-duration":"600",className:Xt.a.authContainer,container:!0,children:Object(i.jsx)("form",{onSubmit:a.handleSubmit,className:Xt.a.authForm,children:Object(i.jsxs)(Jt.a,{className:Xt.a.authFormControl,children:[Object(i.jsx)("div",{className:Xt.a.authTextContainer,children:Object(i.jsx)("h3",{children:"Authorization"})}),Object(i.jsx)(it.a,Object(m.a)({variant:"outlined",label:"Email"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?Object(i.jsx)("div",{className:Xt.a.authErrorText,children:a.errors.email}):Object(i.jsx)("div",{className:Xt.a.authErrorText}),Object(i.jsx)(it.a,Object(m.a)({type:"password",variant:"outlined",label:"Password"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?Object(i.jsx)("div",{className:Xt.a.authErrorText,children:a.errors.password}):Object(i.jsx)("div",{className:Xt.a.authErrorText}),Object(i.jsx)(qt.a,{label:"Remember me",className:Xt.a.authRememberMeText,control:Object(i.jsx)(Tt.a,Object(m.a)({},a.getFieldProps("rememberMe")))}),Object(i.jsx)(Ft.a,{type:"submit",variant:"contained",className:Xt.a.authButton,children:"Login"})]})})})]})]})})),te=a(179),ee=a.n(te),ae=o.a.memo((function(){return Object(i.jsxs)("div",{className:ee.a.pageNotFoundBlock,children:[Object(i.jsx)("p",{children:"Something wrong..."}),Object(i.jsx)("p",{children:"404: PAGE NOT FOUND!"})]})})),ne=a(513),se=a(514),ie=a(472),re=a(515),oe=a.p+"static/media/primaryLogo.9d6a70d6.png",ce=a(35),le=a.n(ce);function de(){var t=Object(u.c)((function(t){return t.app.status})),e=Object(u.c)((function(t){return t.auth.isLoggedIn})),a=Object(u.c)((function(t){return t.auth.email})),n=Object(u.b)();return Object(i.jsxs)("div",{children:[Object(i.jsx)(ne.a,{position:"static",children:Object(i.jsxs)(se.a,{"data-aos":"zoom-in-right","data-aos-duration":"800",className:le.a.header,children:[Object(i.jsx)("a",{href:"/",className:le.a.linkHeaderLogo,children:Object(i.jsxs)("div",{className:le.a.headerLogoContainer,children:[Object(i.jsx)("div",{className:le.a.headerLogo,children:Object(i.jsx)("img",{src:oe,alt:"LogoImage",className:le.a.headerLogoImg})}),Object(i.jsx)(ie.a,{className:le.a.headerLogoText,children:"Task Tracker"})]})}),e?Object(i.jsxs)("div",{className:le.a.headerDisplay,children:[Object(i.jsxs)("div",{className:le.a.headerUserInfo,children:[Object(i.jsx)("span",{className:le.a.headerUserText,children:"User:"}),Object(i.jsx)("span",{className:le.a.headerEmailText,children:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)(Ft.a,{onClick:function(){n(function(){var t=Object(O.a)(h.a.mark((function t(e){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(U("loading")),t.next=4,I();case 4:0===(a=t.sent).data.resultCode?e(H(!1,"")):A(a.data,e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),P(t.t0,e);case 11:return t.prev=11,e(U("succeeded")),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}())},className:le.a.headerButton,children:"Sign out"})})]}):Object(i.jsx)("div",{className:le.a.headerDisplay,children:Object(i.jsx)("div",{children:Object(i.jsx)(Ft.a,{href:"https://social-network.samuraijs.com/signUp",className:le.a.headerButton,children:"Sign up"})})})]})}),"loading"===t?Object(i.jsx)(re.a,{}):Object(i.jsx)("div",{style:{height:"4px"}})]})}var ue=a(521),je=a(518);function be(t){return Object(i.jsx)(je.a,Object(m.a)({elevation:6,variant:"filled"},t))}function pe(){var t=Object(u.c)((function(t){return t.app.error})),e=Object(u.b)(),a=function(t,a){"clickaway"!==a&&e(M(null))},n=null!==t;return Object(i.jsx)(ue.a,{open:n,autoHideDuration:6e3,onClose:a,children:Object(i.jsx)(be,{onClose:a,severity:"error",children:t})})}var he=a(516),Oe=a(180),me=a.n(Oe);function fe(t){var e=t.demo,a=void 0!==e&&e,n=Object(u.c)((function(t){return t.app.isInitialized})),s=Object(u.b)();return Object(r.useEffect)((function(){s(function(){var t=Object(O.a)(h.a.mark((function t(e){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(U("loading")),t.next=4,v();case 4:0===(a=t.sent).data.resultCode&&e(H(!0,a.data.data.email)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),P(t.t0,e);case 11:return t.prev=11,e({type:"APP/SET-IS-INITIALIZED",isInitialized:!0}),e(U("succeeded")),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,8,11,15]])})));return function(e){return t.apply(this,arguments)}}())}),[s]),n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(pe,{}),Object(i.jsx)(de,{}),Object(i.jsx)("section",{className:me.a.mainBlock,children:Object(i.jsxs)(at.d,{children:[Object(i.jsx)(at.b,{exact:!0,path:"/",render:function(){return Object(i.jsx)(Vt,{demo:a})}}),Object(i.jsx)(at.b,{path:"/login",render:function(){return Object(i.jsx)($t,{})}}),Object(i.jsx)(at.b,{path:"/404",render:function(){return Object(i.jsx)(ae,{})}}),Object(i.jsx)(at.a,{from:"*",to:"/404"})]})})]}):Object(i.jsx)("div",{style:{position:"fixed",top:"50%",textAlign:"center",width:"100%"},children:Object(i.jsx)(he.a,{})})}var xe=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,522)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),i(t),r(t)}))};a(468);l.a.render(Object(i.jsx)(u.a,{store:et,children:Object(i.jsx)(d.a,{children:Object(i.jsx)(fe,{})})}),document.getElementById("root")),xe()},53:function(t,e,a){t.exports={taskMainInfo:"Task_taskMainInfo__mwrgF",taskStatusAndTitle:"Task_taskStatusAndTitle__31LBi",taskCheckbox:"Task_taskCheckbox__WuyTx",taskTitleEditableSpanInput:"Task_taskTitleEditableSpanInput__1mpxd",taskTitle:"Task_taskTitle__2N1T5",taskButtonsContainer:"Task_taskButtonsContainer__s-3IG",taskButton:"Task_taskButton__1vx1H"}},64:function(t,e,a){t.exports={todolistsListBlock:"TodolistsList_todolistsListBlock__18vZk",particles:"TodolistsList_particles__FU0qG",todolistsListInputContainer:"TodolistsList_todolistsListInputContainer__1joSV",todolistsListInput:"TodolistsList_todolistsListInput__2Si-D",todolistslits:"TodolistsList_todolistslits__1pfhw",todolistColumnItem:"TodolistsList_todolistColumnItem__3itiN"}}},[[469,1,2]]]);
//# sourceMappingURL=main.e0c4f560.chunk.js.map