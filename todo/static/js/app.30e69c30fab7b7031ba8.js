webpackJsonp([1],{Fpql:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("Fpql")},null,null).exports,a=n("/ocq"),c=n("mvHQ"),r=n.n(c),l={name:"TodoList",data:function(){return{storageKey:"todo_items",todoInp:"",todoList:[],beforeEditText:"",activeTab:"all"}},created:function(){this.todoList=JSON.parse(localStorage.getItem(this.storageKey)||[])},computed:{total:function(){return this.todoList.length},remaining:function(){return this.todoList.filter(function(t){return!t.done}).length},isDone:function(){return 0==this.remaining},todoListFilter:function(){var t=this.activeTab;return"all"==t?this.todoList:"pending"==t?this.todoList.filter(function(t){return!t.done}):"completed"==t?this.todoList.filter(function(t){return t.done}):this.todoList}},methods:{addList:function(){if(0!=this.todoInp.trim().length){var t={id:this.todoList.length,content:this.todoInp,done:!1,editing:!1};this.todoInp="",this.todoList.push(t),this.setStorage()}},removeList:function(t){this.todoList.splice(t,1),this.setStorage()},editTodo:function(t){this.beforeEditText=t.content,t.editing=!0,this.setStorage()},doneEdit:function(t){0==t.content.trim().length&&(t.content=this.beforeEditText),t.editing=!1,this.setStorage()},cancelEdit:function(t){t.content=this.beforeEditText,t.editing=!1,this.setStorage()},checkAll:function(t){this.todoList.forEach(function(e){return e.done=t.target.checked}),this.setStorage()},setStorage:function(){localStorage.setItem(this.storageKey,r()(this.todoList))}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h1",{staticClass:"todo-title"},[t._v("Todo List ("+t._s(t.total)+")")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.todoInp,expression:"todoInp"}],staticClass:"todo-input",attrs:{type:"text",name:"",value:"",placeholder:"What needs to be done?",maxlength:"50"},domProps:{value:t.todoInp},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addList(e)},input:function(e){e.target.composing||(t.todoInp=e.target.value)}}}),t._v(" "),n("div",{staticClass:"todo-section"},[n("ul",{staticClass:"todo-list"},t._l(t.todoListFilter,function(e,o){return n("li",{key:e.id},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"t.done"}],staticClass:"todo-check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{change:[function(n){var o=e.done,i=n.target,s=!!i.checked;if(Array.isArray(o)){var a=t._i(o,null);i.checked?a<0&&t.$set(e,"done",o.concat([null])):a>-1&&t.$set(e,"done",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(e,"done",s)},t.setStorage]}}),t._v(" "),n("div",{staticClass:"todo-text"},[e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"t.content"}],staticClass:"todo-edit-inp",attrs:{type:"text"},domProps:{value:e.content},on:{keyup:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.doneEdit(e)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.cancelEdit(e)}],blur:function(n){return t.doneEdit(e)},input:function(n){n.target.composing||t.$set(e,"content",n.target.value)}}}):n("span",{on:{dblclick:function(n){return t.editTodo(e)}}},[t._v(t._s(e.content))])])]),t._v(" "),n("b",{on:{click:function(e){return t.removeList(o)}}},[t._v("×")])])}),0)]),t._v(" "),t.total>0?n("div",{staticClass:"extra-section"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isDone,expression:"isDone"}],staticClass:"todo-check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isDone)?t._i(t.isDone,null)>-1:t.isDone},on:{click:t.checkAll,change:function(e){var n=t.isDone,o=e.target,i=!!o.checked;if(Array.isArray(n)){var s=t._i(n,null);o.checked?s<0&&(t.isDone=n.concat([null])):s>-1&&(t.isDone=n.slice(0,s).concat(n.slice(s+1)))}else t.isDone=i}}}),t._v(" "),n("div",{staticClass:"selection"},[n("small",{class:["all"==t.activeTab?"active":""],on:{click:function(e){t.activeTab="all"}}},[t._v("All")]),t._v(" "),n("small",{class:["pending"==t.activeTab?"active":""],on:{click:function(e){t.activeTab="pending"}}},[t._v("Pending")]),t._v(" "),n("small",{class:["completed"==t.activeTab?"active":""],on:{click:function(e){t.activeTab="completed"}}},[t._v("Completed")])]),t._v(" "),n("small",{staticClass:"todo-text"},[t._v(t._s(t.remaining)+" items left")])]):t._e()])},staticRenderFns:[]};var u=n("VU/8")(l,d,!1,function(t){n("oTr+")},null,null).exports;o.a.use(a.a);var p=new a.a({routes:[{path:"/",name:"TodoList",component:u}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},"oTr+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.30e69c30fab7b7031ba8.js.map