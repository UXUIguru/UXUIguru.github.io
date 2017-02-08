// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__10261 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10262 = null;
var count__10263 = (0);
var i__10264 = (0);
while(true){
if((i__10264 < count__10263)){
var vec__10265 = cljs.core._nth.call(null,chunk__10262,i__10264);
var effect_k = cljs.core.nth.call(null,vec__10265,(0),null);
var value = cljs.core.nth.call(null,vec__10265,(1),null);
var temp__4655__auto___10271 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___10271)){
var effect_fn_10272 = temp__4655__auto___10271;
effect_fn_10272.call(null,value);
} else {
}

var G__10273 = seq__10261;
var G__10274 = chunk__10262;
var G__10275 = count__10263;
var G__10276 = (i__10264 + (1));
seq__10261 = G__10273;
chunk__10262 = G__10274;
count__10263 = G__10275;
i__10264 = G__10276;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10261);
if(temp__4657__auto__){
var seq__10261__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10261__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__10261__$1);
var G__10277 = cljs.core.chunk_rest.call(null,seq__10261__$1);
var G__10278 = c__7228__auto__;
var G__10279 = cljs.core.count.call(null,c__7228__auto__);
var G__10280 = (0);
seq__10261 = G__10277;
chunk__10262 = G__10278;
count__10263 = G__10279;
i__10264 = G__10280;
continue;
} else {
var vec__10268 = cljs.core.first.call(null,seq__10261__$1);
var effect_k = cljs.core.nth.call(null,vec__10268,(0),null);
var value = cljs.core.nth.call(null,vec__10268,(1),null);
var temp__4655__auto___10281 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___10281)){
var effect_fn_10282 = temp__4655__auto___10281;
effect_fn_10282.call(null,value);
} else {
}

var G__10283 = cljs.core.next.call(null,seq__10261__$1);
var G__10284 = null;
var G__10285 = (0);
var G__10286 = (0);
seq__10261 = G__10283;
chunk__10262 = G__10284;
count__10263 = G__10285;
i__10264 = G__10286;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__10287 = cljs.core.seq.call(null,value);
var chunk__10288 = null;
var count__10289 = (0);
var i__10290 = (0);
while(true){
if((i__10290 < count__10289)){
var map__10291 = cljs.core._nth.call(null,chunk__10288,i__10290);
var map__10291__$1 = ((((!((map__10291 == null)))?((((map__10291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10291):map__10291);
var effect = map__10291__$1;
var ms = cljs.core.get.call(null,map__10291__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10291__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10287,chunk__10288,count__10289,i__10290,map__10291,map__10291__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10287,chunk__10288,count__10289,i__10290,map__10291,map__10291__$1,effect,ms,dispatch))
,ms);
}

var G__10295 = seq__10287;
var G__10296 = chunk__10288;
var G__10297 = count__10289;
var G__10298 = (i__10290 + (1));
seq__10287 = G__10295;
chunk__10288 = G__10296;
count__10289 = G__10297;
i__10290 = G__10298;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10287);
if(temp__4657__auto__){
var seq__10287__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10287__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__10287__$1);
var G__10299 = cljs.core.chunk_rest.call(null,seq__10287__$1);
var G__10300 = c__7228__auto__;
var G__10301 = cljs.core.count.call(null,c__7228__auto__);
var G__10302 = (0);
seq__10287 = G__10299;
chunk__10288 = G__10300;
count__10289 = G__10301;
i__10290 = G__10302;
continue;
} else {
var map__10293 = cljs.core.first.call(null,seq__10287__$1);
var map__10293__$1 = ((((!((map__10293 == null)))?((((map__10293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10293):map__10293);
var effect = map__10293__$1;
var ms = cljs.core.get.call(null,map__10293__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10293__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10287,chunk__10288,count__10289,i__10290,map__10293,map__10293__$1,effect,ms,dispatch,seq__10287__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10287,chunk__10288,count__10289,i__10290,map__10293,map__10293__$1,effect,ms,dispatch,seq__10287__$1,temp__4657__auto__))
,ms);
}

var G__10303 = cljs.core.next.call(null,seq__10287__$1);
var G__10304 = null;
var G__10305 = (0);
var G__10306 = (0);
seq__10287 = G__10303;
chunk__10288 = G__10304;
count__10289 = G__10305;
i__10290 = G__10306;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__10307 = cljs.core.seq.call(null,value);
var chunk__10308 = null;
var count__10309 = (0);
var i__10310 = (0);
while(true){
if((i__10310 < count__10309)){
var event = cljs.core._nth.call(null,chunk__10308,i__10310);
re_frame.router.dispatch.call(null,event);

var G__10311 = seq__10307;
var G__10312 = chunk__10308;
var G__10313 = count__10309;
var G__10314 = (i__10310 + (1));
seq__10307 = G__10311;
chunk__10308 = G__10312;
count__10309 = G__10313;
i__10310 = G__10314;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10307);
if(temp__4657__auto__){
var seq__10307__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10307__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__10307__$1);
var G__10315 = cljs.core.chunk_rest.call(null,seq__10307__$1);
var G__10316 = c__7228__auto__;
var G__10317 = cljs.core.count.call(null,c__7228__auto__);
var G__10318 = (0);
seq__10307 = G__10315;
chunk__10308 = G__10316;
count__10309 = G__10317;
i__10310 = G__10318;
continue;
} else {
var event = cljs.core.first.call(null,seq__10307__$1);
re_frame.router.dispatch.call(null,event);

var G__10319 = cljs.core.next.call(null,seq__10307__$1);
var G__10320 = null;
var G__10321 = (0);
var G__10322 = (0);
seq__10307 = G__10319;
chunk__10308 = G__10320;
count__10309 = G__10321;
i__10310 = G__10322;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__10323 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__10324 = null;
var count__10325 = (0);
var i__10326 = (0);
while(true){
if((i__10326 < count__10325)){
var event = cljs.core._nth.call(null,chunk__10324,i__10326);
clear_event.call(null,event);

var G__10327 = seq__10323;
var G__10328 = chunk__10324;
var G__10329 = count__10325;
var G__10330 = (i__10326 + (1));
seq__10323 = G__10327;
chunk__10324 = G__10328;
count__10325 = G__10329;
i__10326 = G__10330;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10323);
if(temp__4657__auto__){
var seq__10323__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10323__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__10323__$1);
var G__10331 = cljs.core.chunk_rest.call(null,seq__10323__$1);
var G__10332 = c__7228__auto__;
var G__10333 = cljs.core.count.call(null,c__7228__auto__);
var G__10334 = (0);
seq__10323 = G__10331;
chunk__10324 = G__10332;
count__10325 = G__10333;
i__10326 = G__10334;
continue;
} else {
var event = cljs.core.first.call(null,seq__10323__$1);
clear_event.call(null,event);

var G__10335 = cljs.core.next.call(null,seq__10323__$1);
var G__10336 = null;
var G__10337 = (0);
var G__10338 = (0);
seq__10323 = G__10335;
chunk__10324 = G__10336;
count__10325 = G__10337;
i__10326 = G__10338;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1486506038278