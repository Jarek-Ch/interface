(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-tables"],{"28a5":function(e,t,s){"use strict";var n=s("aae3"),i=s("cb7c"),l=s("ebd6"),o=s("0390"),a=s("9def"),r=s("5f1b"),c=s("520a"),u=s("79e5"),d=Math.min,h=[].push,v="split",p="length",f="lastIndex",m=4294967295,g=!u(function(){RegExp(m,"y")});s("214f")("split",2,function(e,t,s,u){var b;return b="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[p]||2!="ab"[v](/(?:ab)*/)[p]||4!="."[v](/(.?)(.?)/)[p]||"."[v](/()()/)[p]>1||""[v](/.?/)[p]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(i,e,t);var l,o,a,r=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,v=void 0===t?m:t>>>0,g=new RegExp(e.source,u+"g");while(l=c.call(g,i)){if(o=g[f],o>d&&(r.push(i.slice(d,l.index)),l[p]>1&&l.index<i[p]&&h.apply(r,l.slice(1)),a=l[0][p],d=o,r[p]>=v))break;g[f]===l.index&&g[f]++}return d===i[p]?!a&&g.test("")||r.push(""):r.push(i.slice(d)),r[p]>v?r.slice(0,v):r}:"0"[v](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var i=e(this),l=void 0==s?void 0:s[t];return void 0!==l?l.call(s,i,n):b.call(String(i),s,n)},function(e,t){var n=u(b,e,this,t,b!==s);if(n.done)return n.value;var c=i(e),h=String(this),v=l(c,RegExp),p=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),w=new v(g?c:"^(?:"+c.source+")",f),y=void 0===t?m:t>>>0;if(0===y)return[];if(0===h.length)return null===r(w,h)?[h]:[];var C=0,_=0,x=[];while(_<h.length){w.lastIndex=g?_:0;var k,S=r(w,g?h:h.slice(_));if(null===S||(k=d(a(w.lastIndex+(g?0:_)),h.length))===C)_=o(h,_,p);else{if(x.push(h.slice(C,_)),x.length===y)return x;for(var R=1;R<=S.length-1;R++)if(x.push(S[R]),x.length===y)return x;_=C=k}}return x.push(h.slice(C)),x}]})},"2b56":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.localFilters&&e.localFilters.search?s("div",{staticClass:"dvs-flex dvs-px-4 dvs-py-8"},[s("fieldset",{staticClass:"dvs-w-full dvs-fieldset"},[s("label",{staticClass:"dvs-pb-2"},[e._v("Search")]),"field"===e.uiType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.localFilters.search[e.column],expression:"localFilters.search[column]"}],staticClass:"dvs-w-full",attrs:{type:"text"},domProps:{value:e.localFilters.search[e.column]},on:{keyup:e.updateValue,input:function(t){t.target.composing||e.$set(e.localFilters.search,e.column,t.target.value)}}}):e._e(),"array-select"===e.uiType?s("select",{directives:[{name:"model",rawName:"v-model",value:e.localFilters.search[e.column],expression:"localFilters.search[column]"}],staticClass:"w-full",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.localFilters.search,e.column,t.target.multiple?s:s[0])},e.updateValue]}},[s("option",{attrs:{value:""}},[e._v("Any")]),e._l(e.options,function(t){return s("option",{key:t},[e._v(e._s(t))])})],2):e._e(),"object-select"===e.uiType?s("select",{directives:[{name:"model",rawName:"v-model",value:e.localFilters.search[e.column],expression:"localFilters.search[column]"}],staticClass:"w-full",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.localFilters.search,e.column,t.target.multiple?s:s[0])},e.updateValue]}},[s("option",{attrs:{value:""}},[e._v("Any")]),e._l(e.options,function(t,n){return s("option",{key:t,domProps:{value:n}},[e._v(e._s(t))])})],2):e._e()])]):e._e()},i=[],l=s("a745"),o=s.n(l),a=s("5176"),r=s.n(a),c=s("29ec"),u={name:"SuperTableSearch",data:function(){return{localFilters:null}},mounted:function(){var e=this;this.$nextTick(function(){e.localFilters=r()({},e.localFilters,e.value)})},methods:{updateValue:function(){this.$emit("input",this.localFilters),this.$emit("change",this.localFilters)},clear:function(){this.localFilters="",this.updateValue()}},computed:{uiType:function(){return"undefined"!==typeof this.options?o()(this.options)?"array-select":"object-select":"field"}},watch:{value:function(e){this.localFilters=r()({},this.localFilters,e)}},props:["value","column","options"],mixins:[c["a"]]},d=u,h=s("0c7c"),v=Object(h["a"])(d,n,i,!1,null,null,null);t["default"]=v.exports},c64a:function(e,t,s){"use strict";s.r(t);var n,i,l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("table",{staticClass:"dvs-table dvs-mb-8"},[s("tr",e._l(e.tableColumns,function(t,n){return s("th",{key:n,class:{"dvs-hidden md:dvs-table-cell":t.hideMobile},on:{click:function(s){return e.showControls(t.key)}}},[t.toggleColumns?s("div",{staticClass:"flex"},[s("toggle-columns",{model:{value:e.columns,callback:function(t){e.columns=t},expression:"columns"}}),e._v("\n          "+e._s(t.label)+"\n        ")],1):s("div",{staticClass:"dvs-flex"},[s("div",[e._v(e._s(t.label))]),s("column-controls",{ref:t.key,refInFor:!0,attrs:{column:t},model:{value:e.filters,callback:function(t){e.filters=t},expression:"filters"}})],1)])}),0),e._l(e.theRecords,function(t,n){return s("tr",{key:n},[e._l(e.tableColumns,function(n,i){return[s("td",{key:i,class:{"dvs-hidden lg:dvs-table-cell":n.hideMobile}},[n.template?s("cell",{attrs:{record:t,contents:e.getRecordColumn(t,n.key)}}):s("span",[e._v(e._s(e.getRecordColumn(t,n.key)))])],1)]})],2)}),e.theRecords.length?e._e():s("tr",[s("td",{staticClass:"dvs-text-center",attrs:{colspan:e.columns.length}},[e._v("No Results Found")])])],2),e.records.data&&e.records.data.length?s("pagination",{staticClass:"dvs-mb-8",attrs:{meta:e.records},on:{changePage:e.changePage}}):e._e(),e.filters.single?e._e():s("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[s("label",[e._v("Do you want the data paginated?")]),s("toggle",{attrs:{id:e.randomString(8)},on:{change:e.requestRefreshRecords},model:{value:e.filters.paginated,callback:function(t){e.$set(e.filters,"paginated",t)},expression:"filters.paginated"}})],1),!e.filters.single&&e.filters.paginated?s("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[s("label",[e._v("What is the number of records per page?")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.limit,expression:"filters.limit"}],attrs:{type:"number"},domProps:{value:e.filters.limit},on:{keyup:e.requestRefreshRecords,input:function(t){t.target.composing||e.$set(e.filters,"limit",t.target.value)}}})]):e._e(),s("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[s("label",[e._v("Do you only want the first record?")]),s("toggle",{attrs:{id:e.randomString(8)},on:{change:e.requestRefreshRecords},model:{value:e.filters.single,callback:function(t){e.$set(e.filters,"single",t)},expression:"filters.single"}})],1),s("fieldset",{staticClass:"dvs-fieldset dvs-mb-8"},[s("label",{staticClass:"dvs-mb-8"},[e._v("Scopes")]),e.filters.scopes!=={}?s("ul",{staticClass:"dvs-list-reset dvs-mb-4"},e._l(e.filters.scopes,function(t,n){return s("li",{key:n,staticClass:"dvs-mb-2 dvs-px-4 py-3 dvs-flex dvs-items-center dvs-justify-between",style:e.theme.actionButtonGhost},[e._v("\n        "+e._s(n)+"\n        "),s("div",{staticClass:"dvs-cursor-pointer",on:{click:function(t){return e.removeScope(n)}}},[s("close-icon",{staticClass:"dvs-pl-2 dvs-cursor-pointer",attrs:{w:"20",h:"20"}})],1)])}),0):e._e(),s("div",{staticClass:"dvs-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newScope,expression:"newScope"}],staticClass:"dvs-mb-4 dvs-mr-4",attrs:{placeholder:"New Scope Name",type:"text"},domProps:{value:e.newScope},on:{input:function(t){t.target.composing||(e.newScope=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newScopeProperties,expression:"newScopeProperties"}],staticClass:"dvs-mb-4",attrs:{placeholder:"New Scope Properties",type:"text"},domProps:{value:e.newScopeProperties},on:{input:function(t){t.target.composing||(e.newScopeProperties=t.target.value)}}})]),s("button",{staticClass:"dvs-btn dvs-btn-xs",style:e.theme.actionButtonGhost,on:{click:e.addScope}},[e._v("Add Scope")])]),s("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[s("label",[e._v("Do you want to cache this data?")]),s("toggle",{on:{change:e.requestRefreshRecords},model:{value:e.filters.cache,callback:function(t){e.$set(e.filters,"cache",t)},expression:"filters.cache"}})],1)],1)},o=[],a=(s("28a5"),s("6762"),s("2fdb"),s("cebc")),r=s("2f62"),c=s("ccb7"),u={name:"Cell",data:function(){return{eventName:""}},created:function(){this.$options.template="<div>".concat(this.contents,"</div>")},methods:{emit:function(e){this.eventName=e}},props:["contents","record"]},d=u,h=s("0c7c"),v=Object(h["a"])(d,n,i,!1,null,null,null),p=v.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.shouldDisplayControls?s("div",{staticClass:"dvs-ml-4"},[s("div",{staticClass:"dvs-cursor-pointer",on:{click:function(t){e.show=!0}}},[s("settings-icon")],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[s("div",{staticClass:"dvs-blocker dvs-z-20",on:{click:function(t){return t.preventDefault(),e.hide(t)}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"dvs-absolute dvs--mt-8 dvs-pin-l dvs-mb-1 dvs-min-w-250 dvs-z-40 dvs-shadow-lg",style:e.theme.panel},[s("div",{staticClass:"dvs-pt-4 dvs-pb-2 dvs-px-4 dvs-flex dvs-justify-between dvs-items-center dvs-min-w-64",style:{background:e.theme.panelCard.background}},[e._v("\n        "+e._s(this.column.label)+"\n        "),s("div",{staticClass:"dvs-flex dvs-justify-between"},[s("button",{staticClass:"dvs-btn dvs-btn-xs",style:e.theme.actionButton,on:{click:function(t){return e.clearAll()}}},[e._v("Clear")]),s("div",{on:{click:e.hide}},[s("close-icon",{staticClass:"dvs-pl-2 dvs-cursor-pointer",attrs:{w:"20",h:"20"}})],1)])]),s("div",{staticClass:"dvs-px-4 dvs-column-control-modules",style:e.theme.panel},["undefined"!==typeof e.column.search?s("search",{ref:"search",style:{borderColor:e.theme.panelCard.background},attrs:{column:e.column.search,options:e.column.options},on:{change:e.updateValue},model:{value:e.localFilters,callback:function(t){e.localFilters=t},expression:"localFilters"}}):e._e()],1)])])]):e._e()},m=[],g=(s("386d"),s("55dd"),s("5176")),b=s.n(g),w={name:"ColumnControls",data:function(){return{show:!1,localFilters:null}},mounted:function(){this.localFilters=b()({},this.localFilters,this.value)},methods:{updateValue:function(e){this.$emit("input",e),this.$emit("change",e)},clearAll:function(){this.localFilters={related:{},search:{},sort:{},dates:{},page:"1"},this.updateValue()},hide:function(){var e=this;setTimeout(function(){e.show=!1})}},computed:{shouldDisplayControls:function(){return"undefined"!==typeof this.column.sort||"undefined"!==typeof this.column.search}},props:{column:{type:Object,required:!0},value:{}},components:{CloseIcon:function(){return s.e("devise-icons").then(s.bind(null,"1a4e"))},SettingsIcon:function(){return s.e("devise-icons").then(s.bind(null,"8dd5"))},Search:function(){return Promise.resolve().then(s.bind(null,"2b56"))}}},y=w,C=Object(h["a"])(y,f,m,!1,null,null,null),_=C.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.meta.last_page>1?s("div",[e.listMode?s("ul",{staticClass:"dvs-list-reset dvs-flex"},e._l(e.meta.last_page,function(t){return s("li",{key:t,staticClass:"dvs-btn dvs-btn-xs dvs-mr-1 dvs-cursor-pointer",class:{"dvs-current-page":e.isCurrentPage(t)},style:e.decideStyle(t),on:{click:function(s){return e.update(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),0):s("div",{staticClass:"dvs-flex"},[s("button",{staticClass:"dvs-btn dvs-btn-xs dvs-mr-1",style:this.theme.actionButtonGhost,on:{click:function(t){return e.changePage(1)}}},[e._v("First")]),s("button",{staticClass:"dvs-btn dvs-btn-xs dvs-mr-1",style:this.theme.actionButtonGhost,on:{click:function(t){return e.changePage(e.meta.current_page-1)}}},[e._v("Prev")]),s("select",{staticClass:"dvs-p-2 dvs-mr-1 dvs-text-xs dvs-appearance-none",domProps:{value:e.meta.current_page},on:{change:function(t){return e.changePage(t.target.value)}}},e._l(e.meta.last_page,function(t){return s("option",{key:t,domProps:{value:t}},[e._v("\n        "+e._s(t)+"\n      ")])}),0),s("button",{staticClass:"dvs-btn dvs-btn-xs dvs-mr-1",style:this.theme.actionButtonGhost,on:{click:function(t){return e.changePage(e.meta.current_page+1)}}},[e._v("Next")]),s("button",{staticClass:"dvs-btn dvs-btn-xs dvs-mr-1",style:this.theme.actionButtonGhost,on:{click:function(t){return e.changePage(e.meta.last_page)}}},[e._v("Last")])])]):e._e()},k=[],S={name:"SuperTablePagination",methods:Object(a["a"])({},Object(r["b"])(["updateFilters"]),{changePage:function(e){e>0&&e<=this.meta.last_page&&this.$emit("changePage",e)},isCurrentPage:function(e){return e===this.meta.current_page},decideStyle:function(e){return this.isCurrentPage(e)?this.theme.actionButton:this.theme.actionButtonGhost}}),computed:Object(a["a"])({},Object(r["c"])(["filters"])),props:["meta","listMode"]},R=S,$=Object(h["a"])(R,x,k,!1,null,null,null),P=$.exports,F=s("29ec"),j=s("aa28"),O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-mr-4 dvs-relative"},[s("div",{on:{click:function(t){e.show=!0}}},[s("switch-icon",{staticClass:"dvs-cursor-pointer dvs-float-right"})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"dvs-absolute dvs-pin-t dvs-pin-r dvs-mt-1 dvs-z-40 dvs-shadow-lg dvs-border-t-2"},[s("div",{staticClass:"dvs-pt-4 dvs-pb-2 dvs-px-4"},[e._v("\n      Toggle Columns\n      "),s("span",{on:{click:function(t){e.show=!1}}},[s("switch-icon",{staticClass:"dvs-cursor-pointer dvs-float-right"})],1)]),s("div",{staticClass:"dvs-px-4"},[s("div",{staticClass:"dvs-flex dvs-px-4 dvs-py-8 dvs-flex dvs-flex-col dvs-max-h-200 dvs-overflow-y-scroll"},[s("div",e._l(e.columns,function(t){return s("fieldset",{key:t.key,staticClass:"dvs-mr-4 dvs-flex dvs-mb-2"},[s("div",{staticClass:"dvs-flex dvs-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.show,expression:"column.show"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.show)?e._i(t.show,null)>-1:t.show},on:{change:[function(s){var n=t.show,i=s.target,l=!!i.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);i.checked?a<0&&e.$set(t,"show",n.concat([o])):a>-1&&e.$set(t,"show",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(t,"show",l)},e.update]}}),s("label",{staticClass:"dvs-pl-2"},[e._v(e._s(t.label))])])])}),0)])])])])},T=[],N={name:"ToggleColumns",data:function(){return{show:!1,columns:[]}},mounted:function(){this.columns=this.value;for(var e=0;e<this.columns.length;e+1)"undefined"===typeof this.columns[e].show&&this.$set(this.columns[e],"show",!0)},methods:{update:function(){this.$emit("input",this.columns)}},computed:Object(a["a"])({},Object(r["c"])(["currentTeam"]),{tableColumns:function(){var e=this,t=[];return t=this.columns.filter(function(t){return!!e.showColumn(t)}),t}}),props:{value:{type:Array,required:!0},type:{type:String,required:!0}},components:{SwitchIcon:function(){return s.e("devise-icons").then(s.bind(null,"cd97"))}}},D=N,q=Object(h["a"])(D,O,T,!1,null,null,null),A=q.exports,V={name:"SuperTable",data:function(){return{theOptions:{showLinks:!0},filters:{related:{},search:{},sort:{},dates:{},paginated:!0,page:"1",limit:5,single:!1,scopes:{},cache:!1},refreshRecords:null,records:[],meta:{},newScope:"",newScopeProperties:""}},mounted:function(){if(this.theOptions.showLinks=this.showLinks,"undefined"!==typeof this.editData){for(var e in this.editData.filters.scopes)if(this.editData.filters.scopes.hasOwnProperty(e)){var t=this.editData.filters.scopes[e];for(var s in t)t.hasOwnProperty(s)&&(this.filters.scopes[s]=t[s])}this.$set(this.filters,"limit",this.editData.filters.limit),this.$set(this.filters,"single",this.editData.filters.single),this.$set(this.filters,"page",this.editData.filters.page),this.$set(this.filters,"paginated",this.editData.filters.paginated),this.$set(this.filters,"cache",this.editData.filters.cache)}this.requestRefreshRecords()},methods:Object(a["a"])({},Object(r["b"])("devise",["getModelRecords"]),{updateValue:function(){var e=this,t="".concat(this.model.class,"&").concat(c["a"].buildFilterParams(this.filters));this.$emit("input",t),this.$emit("change",t),this.$nextTick(function(){e.$emit("done",t)})},cancel:function(){this.$emit("cancel")},requestRefreshRecords:function(){var e=this;this.updateValue(),clearTimeout(this.refreshRecords),this.refreshRecords=setTimeout(function(){e.getModelRecords({model:e.value,filters:e.filters}).then(function(t){e.records=t.data})},500)},changePage:function(e){this.filters.page=e,this.requestRefreshRecords()},showControls:function(e){this.$refs.hasOwnProperty(e)&&!1===this.$refs[e][0].show&&(this.$refs[e][0].show=!0)},getRecordColumn:function(e,t){return t.includes(".")?this.getRecordColumnTraversal(e,t):e[t]},getRecordColumnTraversal:function(e,t){for(var s=t.split(".[]."),n=0;n<s.length;n+1){var i=s[n];e=n%2===1?this.getFormattedStringFromArray(e,i):[e].concat(i.split(".")).reduce(function(e,t){return e[t]})}return e},getFormattedStringFromArray:function(e,t){for(var s="",n=0;n<e.length;n+1)n>0&&(s+=", "),s+=e[n][t];return s},showColumn:function(e){return!0===e.show||"undefined"===typeof e.show},addScope:function(){""!==this.newScope&&(this.filters.scopes[this.newScope]=this.newScopeProperties,this.newScope="",this.newScopeProperties="",this.requestRefreshRecords())},removeScope:function(e){this.$delete(this.filters.scopes,e),this.requestRefreshRecords(),this.updateValue()}}),computed:{theRecords:function(){return"undefined"!==typeof this.records.data?this.records.data:this.filters.single?[this.records]:this.records},tableColumns:function(){var e=this,t=[];return t=this.columns.filter(function(t){return!!e.showColumn(t)}),t}},watch:{model:function(){this.requestRefreshRecords()},filters:function(){this.requestRefreshRecords()}},props:{value:{type:String},model:{type:Object},columns:{type:Array,required:!0},showLinks:{type:Boolean},editData:{type:Object}},mixins:[F["a"]],components:{CloseIcon:function(){return s.e("devise-icons").then(s.bind(null,"1a4e"))},ColumnControls:_,ToggleColumns:A,Pagination:P,Cell:p,Toggle:j["default"]}},B=V,E=Object(h["a"])(B,l,o,!1,null,null,null);t["default"]=E.exports}}]);
//# sourceMappingURL=devise-tables.e7d96bcd.js.map