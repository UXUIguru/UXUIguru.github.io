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
var G__8410__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8411__i = 0, G__8411__a = new Array(arguments.length -  0);
while (G__8411__i < G__8411__a.length) {G__8411__a[G__8411__i] = arguments[G__8411__i + 0]; ++G__8411__i;}
  args = new cljs.core.IndexedSeq(G__8411__a,0);
} 
return G__8410__delegate.call(this,args);};
G__8410.cljs$lang$maxFixedArity = 0;
G__8410.cljs$lang$applyTo = (function (arglist__8412){
var args = cljs.core.seq(arglist__8412);
return G__8410__delegate(args);
});
G__8410.cljs$core$IFn$_invoke$arity$variadic = G__8410__delegate;
return G__8410;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8413__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8414__i = 0, G__8414__a = new Array(arguments.length -  0);
while (G__8414__i < G__8414__a.length) {G__8414__a[G__8414__i] = arguments[G__8414__i + 0]; ++G__8414__i;}
  args = new cljs.core.IndexedSeq(G__8414__a,0);
} 
return G__8413__delegate.call(this,args);};
G__8413.cljs$lang$maxFixedArity = 0;
G__8413.cljs$lang$applyTo = (function (arglist__8415){
var args = cljs.core.seq(arglist__8415);
return G__8413__delegate(args);
});
G__8413.cljs$core$IFn$_invoke$arity$variadic = G__8413__delegate;
return G__8413;
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

//# sourceMappingURL=debug.js.map?rel=1486506031278