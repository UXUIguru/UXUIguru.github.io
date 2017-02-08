// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__16075_16079 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__16076_16080 = null;
var count__16077_16081 = (0);
var i__16078_16082 = (0);
while(true){
if((i__16078_16082 < count__16077_16081)){
var k_16083 = cljs.core._nth.call(null,chunk__16076_16080,i__16078_16082);
var v_16084 = (b[k_16083]);
(a[k_16083] = v_16084);

var G__16085 = seq__16075_16079;
var G__16086 = chunk__16076_16080;
var G__16087 = count__16077_16081;
var G__16088 = (i__16078_16082 + (1));
seq__16075_16079 = G__16085;
chunk__16076_16080 = G__16086;
count__16077_16081 = G__16087;
i__16078_16082 = G__16088;
continue;
} else {
var temp__4657__auto___16089 = cljs.core.seq.call(null,seq__16075_16079);
if(temp__4657__auto___16089){
var seq__16075_16090__$1 = temp__4657__auto___16089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16075_16090__$1)){
var c__7228__auto___16091 = cljs.core.chunk_first.call(null,seq__16075_16090__$1);
var G__16092 = cljs.core.chunk_rest.call(null,seq__16075_16090__$1);
var G__16093 = c__7228__auto___16091;
var G__16094 = cljs.core.count.call(null,c__7228__auto___16091);
var G__16095 = (0);
seq__16075_16079 = G__16092;
chunk__16076_16080 = G__16093;
count__16077_16081 = G__16094;
i__16078_16082 = G__16095;
continue;
} else {
var k_16096 = cljs.core.first.call(null,seq__16075_16090__$1);
var v_16097 = (b[k_16096]);
(a[k_16096] = v_16097);

var G__16098 = cljs.core.next.call(null,seq__16075_16090__$1);
var G__16099 = null;
var G__16100 = (0);
var G__16101 = (0);
seq__16075_16079 = G__16098;
chunk__16076_16080 = G__16099;
count__16077_16081 = G__16100;
i__16078_16082 = G__16101;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args16102 = [];
var len__7492__auto___16105 = arguments.length;
var i__7493__auto___16106 = (0);
while(true){
if((i__7493__auto___16106 < len__7492__auto___16105)){
args16102.push((arguments[i__7493__auto___16106]));

var G__16107 = (i__7493__auto___16106 + (1));
i__7493__auto___16106 = G__16107;
continue;
} else {
}
break;
}

var G__16104 = args16102.length;
switch (G__16104) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16102.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__16109 = (i + (2));
var G__16110 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__16109;
ret = G__16110;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16111_16115 = cljs.core.seq.call(null,v);
var chunk__16112_16116 = null;
var count__16113_16117 = (0);
var i__16114_16118 = (0);
while(true){
if((i__16114_16118 < count__16113_16117)){
var x_16119 = cljs.core._nth.call(null,chunk__16112_16116,i__16114_16118);
ret.push(x_16119);

var G__16120 = seq__16111_16115;
var G__16121 = chunk__16112_16116;
var G__16122 = count__16113_16117;
var G__16123 = (i__16114_16118 + (1));
seq__16111_16115 = G__16120;
chunk__16112_16116 = G__16121;
count__16113_16117 = G__16122;
i__16114_16118 = G__16123;
continue;
} else {
var temp__4657__auto___16124 = cljs.core.seq.call(null,seq__16111_16115);
if(temp__4657__auto___16124){
var seq__16111_16125__$1 = temp__4657__auto___16124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16111_16125__$1)){
var c__7228__auto___16126 = cljs.core.chunk_first.call(null,seq__16111_16125__$1);
var G__16127 = cljs.core.chunk_rest.call(null,seq__16111_16125__$1);
var G__16128 = c__7228__auto___16126;
var G__16129 = cljs.core.count.call(null,c__7228__auto___16126);
var G__16130 = (0);
seq__16111_16115 = G__16127;
chunk__16112_16116 = G__16128;
count__16113_16117 = G__16129;
i__16114_16118 = G__16130;
continue;
} else {
var x_16131 = cljs.core.first.call(null,seq__16111_16125__$1);
ret.push(x_16131);

var G__16132 = cljs.core.next.call(null,seq__16111_16125__$1);
var G__16133 = null;
var G__16134 = (0);
var G__16135 = (0);
seq__16111_16115 = G__16132;
chunk__16112_16116 = G__16133;
count__16113_16117 = G__16134;
i__16114_16118 = G__16135;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16136_16140 = cljs.core.seq.call(null,v);
var chunk__16137_16141 = null;
var count__16138_16142 = (0);
var i__16139_16143 = (0);
while(true){
if((i__16139_16143 < count__16138_16142)){
var x_16144 = cljs.core._nth.call(null,chunk__16137_16141,i__16139_16143);
ret.push(x_16144);

var G__16145 = seq__16136_16140;
var G__16146 = chunk__16137_16141;
var G__16147 = count__16138_16142;
var G__16148 = (i__16139_16143 + (1));
seq__16136_16140 = G__16145;
chunk__16137_16141 = G__16146;
count__16138_16142 = G__16147;
i__16139_16143 = G__16148;
continue;
} else {
var temp__4657__auto___16149 = cljs.core.seq.call(null,seq__16136_16140);
if(temp__4657__auto___16149){
var seq__16136_16150__$1 = temp__4657__auto___16149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16136_16150__$1)){
var c__7228__auto___16151 = cljs.core.chunk_first.call(null,seq__16136_16150__$1);
var G__16152 = cljs.core.chunk_rest.call(null,seq__16136_16150__$1);
var G__16153 = c__7228__auto___16151;
var G__16154 = cljs.core.count.call(null,c__7228__auto___16151);
var G__16155 = (0);
seq__16136_16140 = G__16152;
chunk__16137_16141 = G__16153;
count__16138_16142 = G__16154;
i__16139_16143 = G__16155;
continue;
} else {
var x_16156 = cljs.core.first.call(null,seq__16136_16150__$1);
ret.push(x_16156);

var G__16157 = cljs.core.next.call(null,seq__16136_16150__$1);
var G__16158 = null;
var G__16159 = (0);
var G__16160 = (0);
seq__16136_16140 = G__16157;
chunk__16137_16141 = G__16158;
count__16138_16142 = G__16159;
i__16139_16143 = G__16160;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16161_16165 = cljs.core.seq.call(null,v);
var chunk__16162_16166 = null;
var count__16163_16167 = (0);
var i__16164_16168 = (0);
while(true){
if((i__16164_16168 < count__16163_16167)){
var x_16169 = cljs.core._nth.call(null,chunk__16162_16166,i__16164_16168);
ret.push(x_16169);

var G__16170 = seq__16161_16165;
var G__16171 = chunk__16162_16166;
var G__16172 = count__16163_16167;
var G__16173 = (i__16164_16168 + (1));
seq__16161_16165 = G__16170;
chunk__16162_16166 = G__16171;
count__16163_16167 = G__16172;
i__16164_16168 = G__16173;
continue;
} else {
var temp__4657__auto___16174 = cljs.core.seq.call(null,seq__16161_16165);
if(temp__4657__auto___16174){
var seq__16161_16175__$1 = temp__4657__auto___16174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16161_16175__$1)){
var c__7228__auto___16176 = cljs.core.chunk_first.call(null,seq__16161_16175__$1);
var G__16177 = cljs.core.chunk_rest.call(null,seq__16161_16175__$1);
var G__16178 = c__7228__auto___16176;
var G__16179 = cljs.core.count.call(null,c__7228__auto___16176);
var G__16180 = (0);
seq__16161_16165 = G__16177;
chunk__16162_16166 = G__16178;
count__16163_16167 = G__16179;
i__16164_16168 = G__16180;
continue;
} else {
var x_16181 = cljs.core.first.call(null,seq__16161_16175__$1);
ret.push(x_16181);

var G__16182 = cljs.core.next.call(null,seq__16161_16175__$1);
var G__16183 = null;
var G__16184 = (0);
var G__16185 = (0);
seq__16161_16165 = G__16182;
chunk__16162_16166 = G__16183;
count__16163_16167 = G__16184;
i__16164_16168 = G__16185;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args16186 = [];
var len__7492__auto___16201 = arguments.length;
var i__7493__auto___16202 = (0);
while(true){
if((i__7493__auto___16202 < len__7492__auto___16201)){
args16186.push((arguments[i__7493__auto___16202]));

var G__16203 = (i__7493__auto___16202 + (1));
i__7493__auto___16202 = G__16203;
continue;
} else {
}
break;
}

var G__16188 = args16186.length;
switch (G__16188) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16186.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__16189 = obj;
G__16189.push(kfn.call(null,k),vfn.call(null,v));

return G__16189;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x16190 = cljs.core.clone.call(null,handlers);
x16190.forEach = ((function (x16190,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__16191 = cljs.core.seq.call(null,coll);
var chunk__16192 = null;
var count__16193 = (0);
var i__16194 = (0);
while(true){
if((i__16194 < count__16193)){
var vec__16195 = cljs.core._nth.call(null,chunk__16192,i__16194);
var k = cljs.core.nth.call(null,vec__16195,(0),null);
var v = cljs.core.nth.call(null,vec__16195,(1),null);
f.call(null,v,k);

var G__16205 = seq__16191;
var G__16206 = chunk__16192;
var G__16207 = count__16193;
var G__16208 = (i__16194 + (1));
seq__16191 = G__16205;
chunk__16192 = G__16206;
count__16193 = G__16207;
i__16194 = G__16208;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16191);
if(temp__4657__auto__){
var seq__16191__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16191__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__16191__$1);
var G__16209 = cljs.core.chunk_rest.call(null,seq__16191__$1);
var G__16210 = c__7228__auto__;
var G__16211 = cljs.core.count.call(null,c__7228__auto__);
var G__16212 = (0);
seq__16191 = G__16209;
chunk__16192 = G__16210;
count__16193 = G__16211;
i__16194 = G__16212;
continue;
} else {
var vec__16198 = cljs.core.first.call(null,seq__16191__$1);
var k = cljs.core.nth.call(null,vec__16198,(0),null);
var v = cljs.core.nth.call(null,vec__16198,(1),null);
f.call(null,v,k);

var G__16213 = cljs.core.next.call(null,seq__16191__$1);
var G__16214 = null;
var G__16215 = (0);
var G__16216 = (0);
seq__16191 = G__16213;
chunk__16192 = G__16214;
count__16193 = G__16215;
i__16194 = G__16216;
continue;
}
} else {
return null;
}
}
break;
}
});})(x16190,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x16190;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args16217 = [];
var len__7492__auto___16223 = arguments.length;
var i__7493__auto___16224 = (0);
while(true){
if((i__7493__auto___16224 < len__7492__auto___16223)){
args16217.push((arguments[i__7493__auto___16224]));

var G__16225 = (i__7493__auto___16224 + (1));
i__7493__auto___16224 = G__16225;
continue;
} else {
}
break;
}

var G__16219 = args16217.length;
switch (G__16219) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16217.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit16220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit16220 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta16221){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta16221 = meta16221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit16220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16222,meta16221__$1){
var self__ = this;
var _16222__$1 = this;
return (new cognitect.transit.t_cognitect$transit16220(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta16221__$1));
});

cognitect.transit.t_cognitect$transit16220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16222){
var self__ = this;
var _16222__$1 = this;
return self__.meta16221;
});

cognitect.transit.t_cognitect$transit16220.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit16220.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit16220.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit16220.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit16220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta16221","meta16221",-1238753077,null)], null);
});

cognitect.transit.t_cognitect$transit16220.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit16220.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit16220";

cognitect.transit.t_cognitect$transit16220.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/t_cognitect$transit16220");
});

cognitect.transit.__GT_t_cognitect$transit16220 = (function cognitect$transit$__GT_t_cognitect$transit16220(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16221){
return (new cognitect.transit.t_cognitect$transit16220(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16221));
});

}

return (new cognitect.transit.t_cognitect$transit16220(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6417__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map