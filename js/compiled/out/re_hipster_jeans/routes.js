// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_hipster_jeans.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
re_hipster_jeans.routes.hook_browser_navigation_BANG_ = (function re_hipster_jeans$routes$hook_browser_navigation_BANG_(){
var G__11027 = (new goog.History());
goog.events.listen(G__11027,goog.history.EventType.NAVIGATE,((function (G__11027){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__11027))
);

G__11027.setEnabled(true);

return G__11027;
});
re_hipster_jeans.routes.app_routes = (function re_hipster_jeans$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__10844__auto___11088 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__11058 = params__10845__auto__;
var map__11058__$1 = ((((!((map__11058 == null)))?((((map__11058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11058):map__11058);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-sizes-by-country","top-selling-sizes-by-country",387623070)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__11060 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-sizes-by-country","top-selling-sizes-by-country",387623070)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/home",action__10844__auto___11088);


var action__10844__auto___11089 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__11063 = params__10845__auto__;
var map__11063__$1 = ((((!((map__11063 == null)))?((((map__11063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11063):map__11063);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-about-md","load-about-md",156285020)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__11065 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-about-md","load-about-md",156285020)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__10844__auto___11089);


var action__10844__auto___11090 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__11068 = params__10845__auto__;
var map__11068__$1 = ((((!((map__11068 == null)))?((((map__11068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11068):map__11068);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"readme-panel","readme-panel",529122927)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-readme-md","load-readme-md",1086771229)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__11070 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"readme-panel","readme-panel",529122927)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-readme-md","load-readme-md",1086771229)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/readme",action__10844__auto___11090);


var action__10844__auto___11091 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__11073 = params__10845__auto__;
var map__11073__$1 = ((((!((map__11073 == null)))?((((map__11073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11073):map__11073);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-manufacturers-panel","top-selling-manufacturers-panel",315566476)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-manufacturers-by-gender-and-country","top-selling-manufacturers-by-gender-and-country",-81627299)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__11075 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-manufacturers-panel","top-selling-manufacturers-panel",315566476)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-manufacturers-by-gender-and-country","top-selling-manufacturers-by-gender-and-country",-81627299)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/top_manufacturers",action__10844__auto___11091);


var action__10844__auto___11092 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__11078 = params__10845__auto__;
var map__11078__$1 = ((((!((map__11078 == null)))?((((map__11078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11078):map__11078);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-months-panel","top-selling-months-panel",315166900)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-months-by-country","top-selling-months-by-country",-1894409285)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__11080 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-months-panel","top-selling-months-panel",315166900)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-months-by-country","top-selling-months-by-country",-1894409285)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/top_months",action__10844__auto___11092);


var action__10844__auto___11093 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__11083 = params__10845__auto__;
var map__11083__$1 = ((((!((map__11083 == null)))?((((map__11083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11083):map__11083);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-sizes-panel","top-selling-sizes-panel",836655776)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-sizes-by-country","top-selling-sizes-by-country",387623070)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__11085 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-sizes-panel","top-selling-sizes-panel",836655776)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-sizes-by-country","top-selling-sizes-by-country",387623070)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/top_sizes",action__10844__auto___11093);


return re_hipster_jeans.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1486506041379