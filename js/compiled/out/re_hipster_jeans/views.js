// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_hipster_jeans.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_hipster_jeans.components.datatables');
goog.require('markdown.core');
re_hipster_jeans.views.home_panel = (function re_hipster_jeans$views$home_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The Hipster Jeans Company"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is a solution to home assigment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Use the navigation to see different data sets"], null)], null);
});
});
re_hipster_jeans.views.top_selling_manufacturers_panel = (function re_hipster_jeans$views$top_selling_manufacturers_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Top manufacturers by gender and country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.components.datatables.datatable,new cljs.core.Keyword(null,"top-selling-manufacturers-by-gender-and-country","top-selling-manufacturers-by-gender-and-country",-81627299),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["abc"], null)], null)], null)], null);
});
});
re_hipster_jeans.views.top_selling_months_panel = (function re_hipster_jeans$views$top_selling_months_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Top months by country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.components.datatables.datatable,new cljs.core.Keyword(null,"top-selling-months-by-country","top-selling-months-by-country",-1894409285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["abc"], null)], null)], null)], null);
});
});
re_hipster_jeans.views.top_selling_sizes_panel = (function re_hipster_jeans$views$top_selling_sizes_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Top sizes by country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.components.datatables.datatable,new cljs.core.Keyword(null,"top-selling-sizes-by-country","top-selling-sizes-by-country",387623070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["abc"], null)], null)], null)], null);
});
});
re_hipster_jeans.views.about_panel = (function re_hipster_jeans$views$about_panel(){
var md = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-md","about-md",-811310574)], null));
return ((function (md){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown.core.md__GT_html.call(null,cljs.core.deref.call(null,md))], null)], null)], null);
});
;})(md))
});
re_hipster_jeans.views.readme_panel = (function re_hipster_jeans$views$readme_panel(){
var md = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"readme-md","readme-md",707450152)], null));
return ((function (md){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown.core.md__GT_html.call(null,cljs.core.deref.call(null,md))], null)], null)], null);
});
;})(md))
});
re_hipster_jeans.views.panels = (function re_hipster_jeans$views$panels(panel_name){
var G__11248 = (((panel_name instanceof cljs.core.Keyword))?panel_name.fqn:null);
switch (G__11248) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.views.home_panel], null);

break;
case "about-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.views.about_panel], null);

break;
case "readme-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.views.readme_panel], null);

break;
case "top-selling-manufacturers-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.views.top_selling_manufacturers_panel], null);

break;
case "top-selling-months-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.views.top_selling_months_panel], null);

break;
case "top-selling-sizes-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.views.top_selling_sizes_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
re_hipster_jeans.views.show_panel = (function re_hipster_jeans$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.views.panels,panel_name], null);
});
re_hipster_jeans.views.main_panel = (function re_hipster_jeans$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.views.show_panel,cljs.core.deref.call(null,active_panel)], null);
});
;})(active_panel))
});

//# sourceMappingURL=views.js.map?rel=1486506042187