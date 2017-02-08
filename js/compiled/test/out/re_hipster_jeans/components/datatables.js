// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_hipster_jeans.components.datatables');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
re_hipster_jeans.components.datatables.datatable = (function re_hipster_jeans$components$datatables$datatable(data_set,data){
var data__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-set","data-set",-1844076932)], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (data__$1){
return (function (node){
var el = reagent.core.dom_node.call(null,node);
var x = (function (){var or__6417__auto__ = (function (){var and__6405__auto__ = cljs.core.deref.call(null,data__$1);
if(cljs.core.truth_(and__6405__auto__)){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data__$1));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no data..."], null),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.PersistentVector.EMPTY], null);
}
})();
cljs.core.println.call(null,":component-did-mount",new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(x));

return $(el).DataTable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bDestroy","bDestroy",-1547873611),true,new cljs.core.Keyword(null,"destroy","destroy",-843660405),true,new cljs.core.Keyword(null,"data","data",-232669377),(function (){var or__6417__auto__ = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.call(null,((function (el,x,data__$1){
return (function (c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),c], null);
});})(el,x,data__$1))
,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword(null,"columnDefs","columnDefs",1825078585),cljs.core.mapv.call(null,((function (el,x,data__$1){
return (function (_c){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"33%",new cljs.core.Keyword(null,"targets","targets",2014963406),(0)], null);
});})(el,x,data__$1))
,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(x))], null)));
});})(data__$1))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (data__$1){
return (function (this$,new_argv){
var x = (function (){var or__6417__auto__ = (function (){var and__6405__auto__ = cljs.core.deref.call(null,data__$1);
if(cljs.core.truth_(and__6405__auto__)){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data__$1));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no data..."], null),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.PersistentVector.EMPTY], null);
}
})();
return cljs.core.println.call(null,":component-will-update",new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(x));
});})(data__$1))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (data__$1){
return (function (node){
var el = reagent.core.dom_node.call(null,node);
var x = (function (){var or__6417__auto__ = (function (){var and__6405__auto__ = cljs.core.deref.call(null,data__$1);
if(cljs.core.truth_(and__6405__auto__)){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data__$1));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no data..."], null),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.PersistentVector.EMPTY], null);
}
})();
cljs.core.println.call(null,":component-did-update",new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(x));

if(cljs.core.truth_($.fn.DataTable.isDataTable(el))){
cljs.core.println.call(null,"destroying");

$(el).DataTable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),true], null))).destroy();

$(el).empty();

cljs.core.println.call(null,"is datatable: ",$.fn.DataTable.isDataTable(el));
} else {
}

return $(el).DataTable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var or__6417__auto__ = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.call(null,((function (el,x,data__$1){
return (function (c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),c], null);
});})(el,x,data__$1))
,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(x))], null)));
});})(data__$1))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (data__$1){
return (function (node){
cljs.core.println.call(null,":component-will-unmount");

var el = reagent.core.dom_node.call(null,node);
if(cljs.core.truth_($.fn.DataTable.isDataTable(el))){
$(el).DataTable(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),true], null))).destroy();

return $(el).empty();
} else {
return null;
}
});})(data__$1))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"datatable-cljs",new cljs.core.Keyword(null,"should-component-update","should-component-update",2040868163),((function (data__$1){
return (function (this$,old_argv,new_argv){
cljs.core.println.call(null,"should-component-update");

return true;
});})(data__$1))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (data__$1){
return (function (columns){
var x = (function (){var or__6417__auto__ = (function (){var and__6405__auto__ = cljs.core.deref.call(null,data__$1);
if(cljs.core.truth_(and__6405__auto__)){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data__$1));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no data..."], null),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.PersistentVector.EMPTY], null);
}
})();
cljs.core.println.call(null,"RENDERING",new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(x));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),data_set,new cljs.core.Keyword(null,"class","class",-2030961996),"table table-striped table-hover",new cljs.core.Keyword(null,"data-att","data-att",-690641707),cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(x))], null)], null);
});})(data__$1))
], null));
});

//# sourceMappingURL=datatables.js.map