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
var seq__16789 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__16790 = null;
var count__16791 = (0);
var i__16792 = (0);
while(true){
if((i__16792 < count__16791)){
var vec__16793 = cljs.core._nth.call(null,chunk__16790,i__16792);
var effect_k = cljs.core.nth.call(null,vec__16793,(0),null);
var value = cljs.core.nth.call(null,vec__16793,(1),null);
var temp__4655__auto___16799 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___16799)){
var effect_fn_16800 = temp__4655__auto___16799;
effect_fn_16800.call(null,value);
} else {
}

var G__16801 = seq__16789;
var G__16802 = chunk__16790;
var G__16803 = count__16791;
var G__16804 = (i__16792 + (1));
seq__16789 = G__16801;
chunk__16790 = G__16802;
count__16791 = G__16803;
i__16792 = G__16804;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16789);
if(temp__4657__auto__){
var seq__16789__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16789__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__16789__$1);
var G__16805 = cljs.core.chunk_rest.call(null,seq__16789__$1);
var G__16806 = c__7228__auto__;
var G__16807 = cljs.core.count.call(null,c__7228__auto__);
var G__16808 = (0);
seq__16789 = G__16805;
chunk__16790 = G__16806;
count__16791 = G__16807;
i__16792 = G__16808;
continue;
} else {
var vec__16796 = cljs.core.first.call(null,seq__16789__$1);
var effect_k = cljs.core.nth.call(null,vec__16796,(0),null);
var value = cljs.core.nth.call(null,vec__16796,(1),null);
var temp__4655__auto___16809 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___16809)){
var effect_fn_16810 = temp__4655__auto___16809;
effect_fn_16810.call(null,value);
} else {
}

var G__16811 = cljs.core.next.call(null,seq__16789__$1);
var G__16812 = null;
var G__16813 = (0);
var G__16814 = (0);
seq__16789 = G__16811;
chunk__16790 = G__16812;
count__16791 = G__16813;
i__16792 = G__16814;
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
var seq__16815 = cljs.core.seq.call(null,value);
var chunk__16816 = null;
var count__16817 = (0);
var i__16818 = (0);
while(true){
if((i__16818 < count__16817)){
var map__16819 = cljs.core._nth.call(null,chunk__16816,i__16818);
var map__16819__$1 = ((((!((map__16819 == null)))?((((map__16819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16819):map__16819);
var effect = map__16819__$1;
var ms = cljs.core.get.call(null,map__16819__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16819__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__16815,chunk__16816,count__16817,i__16818,map__16819,map__16819__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__16815,chunk__16816,count__16817,i__16818,map__16819,map__16819__$1,effect,ms,dispatch))
,ms);
}

var G__16823 = seq__16815;
var G__16824 = chunk__16816;
var G__16825 = count__16817;
var G__16826 = (i__16818 + (1));
seq__16815 = G__16823;
chunk__16816 = G__16824;
count__16817 = G__16825;
i__16818 = G__16826;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16815);
if(temp__4657__auto__){
var seq__16815__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16815__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__16815__$1);
var G__16827 = cljs.core.chunk_rest.call(null,seq__16815__$1);
var G__16828 = c__7228__auto__;
var G__16829 = cljs.core.count.call(null,c__7228__auto__);
var G__16830 = (0);
seq__16815 = G__16827;
chunk__16816 = G__16828;
count__16817 = G__16829;
i__16818 = G__16830;
continue;
} else {
var map__16821 = cljs.core.first.call(null,seq__16815__$1);
var map__16821__$1 = ((((!((map__16821 == null)))?((((map__16821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16821):map__16821);
var effect = map__16821__$1;
var ms = cljs.core.get.call(null,map__16821__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16821__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__16815,chunk__16816,count__16817,i__16818,map__16821,map__16821__$1,effect,ms,dispatch,seq__16815__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__16815,chunk__16816,count__16817,i__16818,map__16821,map__16821__$1,effect,ms,dispatch,seq__16815__$1,temp__4657__auto__))
,ms);
}

var G__16831 = cljs.core.next.call(null,seq__16815__$1);
var G__16832 = null;
var G__16833 = (0);
var G__16834 = (0);
seq__16815 = G__16831;
chunk__16816 = G__16832;
count__16817 = G__16833;
i__16818 = G__16834;
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

var seq__16835 = cljs.core.seq.call(null,value);
var chunk__16836 = null;
var count__16837 = (0);
var i__16838 = (0);
while(true){
if((i__16838 < count__16837)){
var event = cljs.core._nth.call(null,chunk__16836,i__16838);
re_frame.router.dispatch.call(null,event);

var G__16839 = seq__16835;
var G__16840 = chunk__16836;
var G__16841 = count__16837;
var G__16842 = (i__16838 + (1));
seq__16835 = G__16839;
chunk__16836 = G__16840;
count__16837 = G__16841;
i__16838 = G__16842;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16835);
if(temp__4657__auto__){
var seq__16835__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16835__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__16835__$1);
var G__16843 = cljs.core.chunk_rest.call(null,seq__16835__$1);
var G__16844 = c__7228__auto__;
var G__16845 = cljs.core.count.call(null,c__7228__auto__);
var G__16846 = (0);
seq__16835 = G__16843;
chunk__16836 = G__16844;
count__16837 = G__16845;
i__16838 = G__16846;
continue;
} else {
var event = cljs.core.first.call(null,seq__16835__$1);
re_frame.router.dispatch.call(null,event);

var G__16847 = cljs.core.next.call(null,seq__16835__$1);
var G__16848 = null;
var G__16849 = (0);
var G__16850 = (0);
seq__16835 = G__16847;
chunk__16836 = G__16848;
count__16837 = G__16849;
i__16838 = G__16850;
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
var seq__16851 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__16852 = null;
var count__16853 = (0);
var i__16854 = (0);
while(true){
if((i__16854 < count__16853)){
var event = cljs.core._nth.call(null,chunk__16852,i__16854);
clear_event.call(null,event);

var G__16855 = seq__16851;
var G__16856 = chunk__16852;
var G__16857 = count__16853;
var G__16858 = (i__16854 + (1));
seq__16851 = G__16855;
chunk__16852 = G__16856;
count__16853 = G__16857;
i__16854 = G__16858;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16851);
if(temp__4657__auto__){
var seq__16851__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16851__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__16851__$1);
var G__16859 = cljs.core.chunk_rest.call(null,seq__16851__$1);
var G__16860 = c__7228__auto__;
var G__16861 = cljs.core.count.call(null,c__7228__auto__);
var G__16862 = (0);
seq__16851 = G__16859;
chunk__16852 = G__16860;
count__16853 = G__16861;
i__16854 = G__16862;
continue;
} else {
var event = cljs.core.first.call(null,seq__16851__$1);
clear_event.call(null,event);

var G__16863 = cljs.core.next.call(null,seq__16851__$1);
var G__16864 = null;
var G__16865 = (0);
var G__16866 = (0);
seq__16851 = G__16863;
chunk__16852 = G__16864;
count__16853 = G__16865;
i__16854 = G__16866;
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

//# sourceMappingURL=fx.js.map