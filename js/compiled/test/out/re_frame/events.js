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
var make_chain = (function (p1__16643_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__16643_SHARP_));
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

var temp__4657__auto___16644 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___16644)){
var not_i_16645 = temp__4657__auto___16644;
if(cljs.core.fn_QMARK_.call(null,not_i_16645)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_16645);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_16645);
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
var _STAR_handling_STAR_16660 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_16661 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10090__auto___16674 = re_frame.interop.now.call(null);
var duration__10091__auto___16675 = (end__10090__auto___16674 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__16662_16676 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__16663_16677 = null;
var count__16664_16678 = (0);
var i__16665_16679 = (0);
while(true){
if((i__16665_16679 < count__16664_16678)){
var vec__16666_16680 = cljs.core._nth.call(null,chunk__16663_16677,i__16665_16679);
var k__10092__auto___16681 = cljs.core.nth.call(null,vec__16666_16680,(0),null);
var cb__10093__auto___16682 = cljs.core.nth.call(null,vec__16666_16680,(1),null);
try{cb__10093__auto___16682.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10091__auto___16675,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e16669){if((e16669 instanceof java.lang.Exception)){
var e__10094__auto___16683 = e16669;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10092__auto___16681,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10094__auto___16683);
} else {
throw e16669;

}
}
var G__16684 = seq__16662_16676;
var G__16685 = chunk__16663_16677;
var G__16686 = count__16664_16678;
var G__16687 = (i__16665_16679 + (1));
seq__16662_16676 = G__16684;
chunk__16663_16677 = G__16685;
count__16664_16678 = G__16686;
i__16665_16679 = G__16687;
continue;
} else {
var temp__4657__auto___16688 = cljs.core.seq.call(null,seq__16662_16676);
if(temp__4657__auto___16688){
var seq__16662_16689__$1 = temp__4657__auto___16688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16662_16689__$1)){
var c__7228__auto___16690 = cljs.core.chunk_first.call(null,seq__16662_16689__$1);
var G__16691 = cljs.core.chunk_rest.call(null,seq__16662_16689__$1);
var G__16692 = c__7228__auto___16690;
var G__16693 = cljs.core.count.call(null,c__7228__auto___16690);
var G__16694 = (0);
seq__16662_16676 = G__16691;
chunk__16663_16677 = G__16692;
count__16664_16678 = G__16693;
i__16665_16679 = G__16694;
continue;
} else {
var vec__16670_16695 = cljs.core.first.call(null,seq__16662_16689__$1);
var k__10092__auto___16696 = cljs.core.nth.call(null,vec__16670_16695,(0),null);
var cb__10093__auto___16697 = cljs.core.nth.call(null,vec__16670_16695,(1),null);
try{cb__10093__auto___16697.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10091__auto___16675,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e16673){if((e16673 instanceof java.lang.Exception)){
var e__10094__auto___16698 = e16673;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10092__auto___16696,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10094__auto___16698);
} else {
throw e16673;

}
}
var G__16699 = cljs.core.next.call(null,seq__16662_16689__$1);
var G__16700 = null;
var G__16701 = (0);
var G__16702 = (0);
seq__16662_16676 = G__16699;
chunk__16663_16677 = G__16700;
count__16664_16678 = G__16701;
i__16665_16679 = G__16702;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_16661;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_16660;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map