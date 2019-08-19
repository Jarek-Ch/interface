(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-meta"],{bcdb:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.value?a("div",[e.adding?[a("div",{staticClass:"dvs-flex"},[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4 dvs-mr-4"},[a("label",[e._v("Attribute Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMeta.attribute_name,expression:"newMeta.attribute_name"}],attrs:{type:"text"},domProps:{value:e.newMeta.attribute_name},on:{input:function(t){t.target.composing||e.$set(e.newMeta,"attribute_name",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4 dvs-mr-4"},[a("label",[e._v("Attribute Value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMeta.attribute_value,expression:"newMeta.attribute_value"}],attrs:{type:"text"},domProps:{value:e.newMeta.attribute_value},on:{input:function(t){t.target.composing||e.$set(e.newMeta,"attribute_value",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Content")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMeta.content,expression:"newMeta.content"}],attrs:{type:"text"},domProps:{value:e.newMeta.content},on:{input:function(t){t.target.composing||e.$set(e.newMeta,"content",t.target.value)}}})])]),e.anyNewMetaPopulated?a("help",{staticClass:"dvs-mb-4"},[e._v("<meta "+e._s(e.newMeta.attribute_name)+'="'+e._s(e.newMeta.attribute_value)+'" content="'+e._s(e.newMeta.content)+'">')]):e._e(),a("button",{staticClass:"dvs-btn dvs-mb-11",style:e.theme.actionButton,attrs:{disabled:e.isInvalid},on:{click:e.requestCreateMeta}},[e._v("Add New Meta")])]:e._e(),e.globalForm?a("h3",{staticClass:"dvs-mb-8 dvs-pr-16",style:{color:e.theme.panel.color}},[e._v("Existing Global Meta")]):e._e(),0!=e.value.length||e.adding?e._e():a("help",{staticClass:"dvs-mb-8",attrs:{subtle:!0}},[a("p",[e._v("You currently do not have any meta tags at this time.")]),a("button",{staticClass:"dvs-btn dvs-btn-ghost dvs-btn-sm",on:{click:function(t){e.adding=!0}}},[e._v("Add Some Now")])]),a("div",{staticClass:"dvs-mb-8 dvs-flex dvs-flex-col"},e._l(e.value,function(t,n){return a("div",{key:n,staticClass:"dvs-flex dvs-justify-between dvs-items-center dvs-mb-2"},[a("div",{staticClass:"dvs-font-mono dvs-p-8 leading-loose dvs-text-sm",style:e.theme.panelCard},[t.edit?[a("fieldset",{staticClass:"dvs-fieldset"},[a("div",{staticClass:"dvs-flex dvs-items-center"},[e._v("\n              <meta\n              "),a("input",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"meta.edit"},{name:"model",rawName:"v-model",value:e.value[n].attribute_name,expression:"value[key].attribute_name"}],staticClass:"dvs-ml-4",attrs:{type:"text"},domProps:{value:e.value[n].attribute_name},on:{input:function(t){t.target.composing||e.$set(e.value[n],"attribute_name",t.target.value)}}}),e._v('="\n              '),a("input",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"meta.edit"},{name:"model",rawName:"v-model",value:e.value[n].attribute_value,expression:"value[key].attribute_value"}],attrs:{type:"text"},domProps:{value:e.value[n].attribute_value},on:{input:function(t){t.target.composing||e.$set(e.value[n],"attribute_value",t.target.value)}}}),e._v('"\n              '),a("span",{staticClass:"dvs-ml-4"},[e._v('content="')]),a("input",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"meta.edit"},{name:"model",rawName:"v-model",value:e.value[n].content,expression:"value[key].content"}],attrs:{type:"text"},domProps:{value:e.value[n].content},on:{input:function(t){t.target.composing||e.$set(e.value[n],"content",t.target.value)}}}),e._v('">\n            ')])])]:[e._v("<meta "+e._s(t.attribute_name)+'="'+e._s(t.attribute_value)+'" content="'+e._s(t.content)+'">')]],2),a("div",{staticClass:"dvs-flex dvs-justify-between dvs-items-center"},[t.edit?e._e():a("div",{staticClass:"dvs-flex"},[a("button",{staticClass:"dvs-btn dvs-btn-xs dvs-ml-4",style:e.theme.actionButtonGhost,on:{click:function(a){return e.setEditMode(t)}}},[a("edit-icon",{attrs:{w:"20",h:"20"}})],1),a("button",{directives:[{name:"devise-alert-confirm",rawName:"v-devise-alert-confirm",value:{callback:e.requestDeleteMeta,arguments:t,message:"Are you sure you want to delete this meta?"},expression:"{callback: requestDeleteMeta, arguments:meta, message: 'Are you sure you want to delete this meta?'}"}],staticClass:"dvs-btn dvs-btn-xs dvs-ml-4",style:e.theme.actionButtonGhost},[a("trash-icon",{attrs:{w:"20",h:"20"}})],1)]),t.edit?a("button",{staticClass:"dvs-btn dvs-mr-2",style:e.theme.actionButton,on:{click:function(t){return e.requestUpdateMeta(e.value[n])}}},[e._v("Save")]):e._e(),t.edit?a("button",{staticClass:"dvs-btn",on:{click:function(a){return e.setEditMode(t)}}},[e._v("Cancel")]):e._e()])])}),0)],2):e._e()},s=[],i=a("5176"),l=a.n(i),o={name:"MetaForm",data:function(){return{adding:!1,newMeta:{site_id:0,attribute_name:null,attribute_value:null,content:null}}},mounted:function(){this.newMeta.site_id=window.deviseSettings.$page.site_id},methods:{requestCreateMeta:function(){this.$emit("request-create-meta",this.newMeta),this.newMeta=l()({},this.newMeta)},requestUpdateMeta:function(e){this.$emit("request-update-meta",e)},requestDeleteMeta:function(e){this.$emit("request-delete-meta",e)},setEditMode:function(e){"undefined"===typeof e.edit?this.$set(e,"edit",!0):e.edit=!e.edit}},computed:{isInvalid:function(){return null===this.newMeta.attribute_name||null===this.newMeta.attribute_value||null===this.newMeta.content},anyNewMetaPopulated:function(){return null!==this.newMeta.attribute_name||null!==this.newMeta.attribute_value||null!==this.newMeta.content}},props:{value:{},globalForm:{type:Boolean,default:!0}},components:{TrashIcon:function(){return a.e("devise-icons").then(a.bind(null,"b02d"))},EditIcon:function(){return a.e("devise-icons").then(a.bind(null,"39b0"))}}},u=o,d=a("0c7c"),r=Object(d["a"])(u,n,s,!1,null,null,null);t["default"]=r.exports},d9b0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"devise-admin-content"}},[a("h3",{staticClass:"dvs-mb-8",style:{color:e.theme.panel.color}},[e._v("Add Global Meta")]),a("help",{staticClass:"dvs-mb-8"},[e._v("\n      Global Meta are the meta tags that will be attached to every page of this site. They can be overridden on a page level but this gives you to the opportunity to set the\n      "),a("span",{staticClass:"dvs-fonts-mono"},[e._v("<meta>")]),e._v(" across\n      "),a("strong",[e._v("all")]),e._v(" pages.\n    ")]),a("meta-form",{on:{"request-create-meta":e.requestCreateMeta,"request-update-meta":e.requestUpdateMeta,"request-delete-meta":e.requestDeleteMeta},model:{value:e.localValue.data,callback:function(t){e.$set(e.localValue,"data",t)},expression:"localValue.data"}})],1)])},s=[],i=a("5176"),l=a.n(i),o=a("cebc"),u=a("2f62"),d=a("bcdb"),r={name:"MetaManage",data:function(){return{localValue:{data:[]},modulesToLoad:1}},mounted:function(){this.retrieveAllMeta()},methods:Object(o["a"])({},Object(u["b"])("devise",["getMeta","createMeta","updateMeta","deleteMeta"]),{requestCreateMeta:function(e){this.createMeta(e)},requestUpdateMeta:function(e){this.updateMeta(e).then(function(){e.edit=!1})},requestDeleteMeta:function(e){this.deleteMeta(e)},retrieveAllMeta:function(){var e=this;this.getMeta().then(function(){e.localValue=l()({},e.localValue,e.meta),e.localValue.data.map(function(t){e.$set(t,"edit",!1)}),window.deviseSettings.$bus.$emit("incrementLoadbar",e.modulesToLoad)})}}),computed:Object(o["a"])({},Object(u["c"])("devise",["meta"])),components:{MetaForm:d["default"]}},v=r,c=a("0c7c"),m=Object(c["a"])(v,n,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=devise-meta.a02998f5.js.map