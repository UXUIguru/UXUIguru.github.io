// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__15513__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15514__i = 0, G__15514__a = new Array(arguments.length -  0);
while (G__15514__i < G__15514__a.length) {G__15514__a[G__15514__i] = arguments[G__15514__i + 0]; ++G__15514__i;}
  args = new cljs.core.IndexedSeq(G__15514__a,0);
} 
return G__15513__delegate.call(this,args);};
G__15513.cljs$lang$maxFixedArity = 0;
G__15513.cljs$lang$applyTo = (function (arglist__15515){
var args = cljs.core.seq(arglist__15515);
return G__15513__delegate(args);
});
G__15513.cljs$core$IFn$_invoke$arity$variadic = G__15513__delegate;
return G__15513;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15516__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15517__i = 0, G__15517__a = new Array(arguments.length -  0);
while (G__15517__i < G__15517__a.length) {G__15517__a[G__15517__i] = arguments[G__15517__i + 0]; ++G__15517__i;}
  args = new cljs.core.IndexedSeq(G__15517__a,0);
} 
return G__15516__delegate.call(this,args);};
G__15516.cljs$lang$maxFixedArity = 0;
G__15516.cljs$lang$applyTo = (function (arglist__15518){
var args = cljs.core.seq(arglist__15518);
return G__15516__delegate(args);
});
G__15516.cljs$core$IFn$_invoke$arity$variadic = G__15516__delegate;
return G__15516;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map