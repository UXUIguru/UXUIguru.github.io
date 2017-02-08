// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__10115_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__10115_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___10116 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___10116)){
var not_i_10117 = temp__4657__auto___10116;
if(cljs.core.fn_QMARK_.call(null,not_i_10117)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_10117);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_10117);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_10132 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_10133 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10090__auto___10146 = re_frame.interop.now.call(null);
var duration__10091__auto___10147 = (end__10090__auto___10146 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10134_10148 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10135_10149 = null;
var count__10136_10150 = (0);
var i__10137_10151 = (0);
while(true){
if((i__10137_10151 < count__10136_10150)){
var vec__10138_10152 = cljs.core._nth.call(null,chunk__10135_10149,i__10137_10151);
var k__10092__auto___10153 = cljs.core.nth.call(null,vec__10138_10152,(0),null);
var cb__10093__auto___10154 = cljs.core.nth.call(null,vec__10138_10152,(1),null);
try{cb__10093__auto___10154.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10091__auto___10147,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10141){if((e10141 instanceof java.lang.Exception)){
var e__10094__auto___10155 = e10141;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10092__auto___10153,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10094__auto___10155);
} else {
throw e10141;

}
}
var G__10156 = seq__10134_10148;
var G__10157 = chunk__10135_10149;
var G__10158 = count__10136_10150;
var G__10159 = (i__10137_10151 + (1));
seq__10134_10148 = G__10156;
chunk__10135_10149 = G__10157;
count__10136_10150 = G__10158;
i__10137_10151 = G__10159;
continue;
} else {
var temp__4657__auto___10160 = cljs.core.seq.call(null,seq__10134_10148);
if(temp__4657__auto___10160){
var seq__10134_10161__$1 = temp__4657__auto___10160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10134_10161__$1)){
var c__7228__auto___10162 = cljs.core.chunk_first.call(null,seq__10134_10161__$1);
var G__10163 = cljs.core.chunk_rest.call(null,seq__10134_10161__$1);
var G__10164 = c__7228__auto___10162;
var G__10165 = cljs.core.count.call(null,c__7228__auto___10162);
var G__10166 = (0);
seq__10134_10148 = G__10163;
chunk__10135_10149 = G__10164;
count__10136_10150 = G__10165;
i__10137_10151 = G__10166;
continue;
} else {
var vec__10142_10167 = cljs.core.first.call(null,seq__10134_10161__$1);
var k__10092__auto___10168 = cljs.core.nth.call(null,vec__10142_10167,(0),null);
var cb__10093__auto___10169 = cljs.core.nth.call(null,vec__10142_10167,(1),null);
try{cb__10093__auto___10169.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10091__auto___10147,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10145){if((e10145 instanceof java.lang.Exception)){
var e__10094__auto___10170 = e10145;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10092__auto___10168,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10094__auto___10170);
} else {
throw e10145;

}
}
var G__10171 = cljs.core.next.call(null,seq__10134_10161__$1);
var G__10172 = null;
var G__10173 = (0);
var G__10174 = (0);
seq__10134_10148 = G__10171;
chunk__10135_10149 = G__10172;
count__10136_10150 = G__10173;
i__10137_10151 = G__10174;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10133;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_10132;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1486506037376