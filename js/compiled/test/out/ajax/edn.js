// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.edn');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('cljs.reader');
ajax.edn.edn_read = (function ajax$edn$edn_read(xhrio){
return cljs.reader.read_string.call(null,ajax.protocols._body.call(null,xhrio));
});
ajax.edn.edn_response_format = (function ajax$edn$edn_response_format(var_args){
var args17740 = [];
var len__7492__auto___17743 = arguments.length;
var i__7493__auto___17744 = (0);
while(true){
if((i__7493__auto___17744 < len__7492__auto___17743)){
args17740.push((arguments[i__7493__auto___17744]));

var G__17745 = (i__7493__auto___17744 + (1));
i__7493__auto___17744 = G__17745;
continue;
} else {
}
break;
}

var G__17742 = args17740.length;
switch (G__17742) {
case 0:
return ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17740.length)].join('')));

}
});

ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.edn.edn_read,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/edn"], null)], null));
});

ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.edn.edn_response_format.call(null);
});

ajax.edn.edn_response_format.cljs$lang$maxFixedArity = 1;

ajax.edn.edn_request_format = (function ajax$edn$edn_request_format(var_args){
var args17747 = [];
var len__7492__auto___17750 = arguments.length;
var i__7493__auto___17751 = (0);
while(true){
if((i__7493__auto___17751 < len__7492__auto___17750)){
args17747.push((arguments[i__7493__auto___17751]));

var G__17752 = (i__7493__auto___17751 + (1));
i__7493__auto___17751 = G__17752;
continue;
} else {
}
break;
}

var G__17749 = args17747.length;
switch (G__17749) {
case 0:
return ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17747.length)].join('')));

}
});

ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/edn"], null)], null);
});

ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.edn.edn_request_format.call(null);
});

ajax.edn.edn_request_format.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=edn.js.map