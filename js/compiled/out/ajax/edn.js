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
var args11231 = [];
var len__7492__auto___11234 = arguments.length;
var i__7493__auto___11235 = (0);
while(true){
if((i__7493__auto___11235 < len__7492__auto___11234)){
args11231.push((arguments[i__7493__auto___11235]));

var G__11236 = (i__7493__auto___11235 + (1));
i__7493__auto___11235 = G__11236;
continue;
} else {
}
break;
}

var G__11233 = args11231.length;
switch (G__11233) {
case 0:
return ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11231.length)].join('')));

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
var args11238 = [];
var len__7492__auto___11241 = arguments.length;
var i__7493__auto___11242 = (0);
while(true){
if((i__7493__auto___11242 < len__7492__auto___11241)){
args11238.push((arguments[i__7493__auto___11242]));

var G__11243 = (i__7493__auto___11242 + (1));
i__7493__auto___11242 = G__11243;
continue;
} else {
}
break;
}

var G__11240 = args11238.length;
switch (G__11240) {
case 0:
return ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11238.length)].join('')));

}
});

ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/edn"], null)], null);
});

ajax.edn.edn_request_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.edn.edn_request_format.call(null);
});

ajax.edn.edn_request_format.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=edn.js.map?rel=1486506042133