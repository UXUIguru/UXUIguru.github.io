// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_hipster_jeans.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
re_hipster_jeans.routes.hook_browser_navigation_BANG_ = (function re_hipster_jeans$routes$hook_browser_navigation_BANG_(){
var G__17536 = (new goog.History());
goog.events.listen(G__17536,goog.history.EventType.NAVIGATE,((function (G__17536){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__17536))
);

G__17536.setEnabled(true);

return G__17536;
});
re_hipster_jeans.routes.app_routes = (function re_hipster_jeans$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__10844__auto___17597 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__17567 = params__10845__auto__;
var map__17567__$1 = ((((!((map__17567 == null)))?((((map__17567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17567):map__17567);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-sizes-by-country","top-selling-sizes-by-country",387623070)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__17569 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-sizes-by-country","top-selling-sizes-by-country",387623070)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/home",action__10844__auto___17597);


var action__10844__auto___17598 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__17572 = params__10845__auto__;
var map__17572__$1 = ((((!((map__17572 == null)))?((((map__17572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17572):map__17572);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-about-md","load-about-md",156285020)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__17574 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-about-md","load-about-md",156285020)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__10844__auto___17598);


var action__10844__auto___17599 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__17577 = params__10845__auto__;
var map__17577__$1 = ((((!((map__17577 == null)))?((((map__17577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17577):map__17577);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"readme-panel","readme-panel",529122927)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-readme-md","load-readme-md",1086771229)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__17579 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"readme-panel","readme-panel",529122927)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-readme-md","load-readme-md",1086771229)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/readme",action__10844__auto___17599);


var action__10844__auto___17600 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__17582 = params__10845__auto__;
var map__17582__$1 = ((((!((map__17582 == null)))?((((map__17582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17582):map__17582);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-manufacturers-panel","top-selling-manufacturers-panel",315566476)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-manufacturers-by-gender-and-country","top-selling-manufacturers-by-gender-and-country",-81627299)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__17584 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-manufacturers-panel","top-selling-manufacturers-panel",315566476)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-manufacturers-by-gender-and-country","top-selling-manufacturers-by-gender-and-country",-81627299)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/top_manufacturers",action__10844__auto___17600);


var action__10844__auto___17601 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__17587 = params__10845__auto__;
var map__17587__$1 = ((((!((map__17587 == null)))?((((map__17587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17587):map__17587);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-months-panel","top-selling-months-panel",315166900)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-months-by-country","top-selling-months-by-country",-1894409285)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__17589 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-months-panel","top-selling-months-panel",315166900)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-months-by-country","top-selling-months-by-country",-1894409285)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/top_months",action__10844__auto___17601);


var action__10844__auto___17602 = (function (params__10845__auto__){
if(cljs.core.map_QMARK_.call(null,params__10845__auto__)){
var map__17592 = params__10845__auto__;
var map__17592__$1 = ((((!((map__17592 == null)))?((((map__17592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17592):map__17592);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-sizes-panel","top-selling-sizes-panel",836655776)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-sizes-by-country","top-selling-sizes-by-country",387623070)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10845__auto__)){
var vec__17594 = params__10845__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"top-selling-sizes-panel","top-selling-sizes-panel",836655776)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928),new cljs.core.Keyword(null,"top-selling-sizes-by-country","top-selling-sizes-by-country",387623070)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/top_sizes",action__10844__auto___17602);


return re_hipster_jeans.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map