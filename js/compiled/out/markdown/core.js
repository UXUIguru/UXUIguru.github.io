// Compiled by ClojureScript 1.9.229 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__8147){
var map__8158 = p__8147;
var map__8158__$1 = ((((!((map__8158 == null)))?((((map__8158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8158):map__8158);
var replacement_transformers = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__8158,map__8158__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_8160 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__8161 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_8160,map__8158,map__8158__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__8164,transformer){
var vec__8165 = p__8164;
var text = cljs.core.nth.call(null,vec__8165,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__8165,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_8160,map__8158,map__8158__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__6417__auto__ = replacement_transformers;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__8161,(0),null);
var new_state = cljs.core.nth.call(null,vec__8161,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_8160;
}});
;})(map__8158,map__8158__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__7499__auto__ = [];
var len__7492__auto___8170 = arguments.length;
var i__7493__auto___8171 = (0);
while(true){
if((i__7493__auto___8171 < len__7492__auto___8170)){
args__7499__auto__.push((arguments[i__7493__auto___8171]));

var G__8172 = (i__7493__auto___8171 + (1));
i__7493__auto___8171 = G__8172;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq8168){
var G__8169 = cljs.core.first.call(null,seq8168);
var seq8168__$1 = cljs.core.next.call(null,seq8168);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__8169,seq8168__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__8177_8181 = cljs.core.seq.call(null,lines);
var chunk__8178_8182 = null;
var count__8179_8183 = (0);
var i__8180_8184 = (0);
while(true){
if((i__8180_8184 < count__8179_8183)){
var line_8185 = cljs.core._nth.call(null,chunk__8178_8182,i__8180_8184);
markdown.links.parse_reference_link.call(null,line_8185,references);

var G__8186 = seq__8177_8181;
var G__8187 = chunk__8178_8182;
var G__8188 = count__8179_8183;
var G__8189 = (i__8180_8184 + (1));
seq__8177_8181 = G__8186;
chunk__8178_8182 = G__8187;
count__8179_8183 = G__8188;
i__8180_8184 = G__8189;
continue;
} else {
var temp__4657__auto___8190 = cljs.core.seq.call(null,seq__8177_8181);
if(temp__4657__auto___8190){
var seq__8177_8191__$1 = temp__4657__auto___8190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8177_8191__$1)){
var c__7228__auto___8192 = cljs.core.chunk_first.call(null,seq__8177_8191__$1);
var G__8193 = cljs.core.chunk_rest.call(null,seq__8177_8191__$1);
var G__8194 = c__7228__auto___8192;
var G__8195 = cljs.core.count.call(null,c__7228__auto___8192);
var G__8196 = (0);
seq__8177_8181 = G__8193;
chunk__8178_8182 = G__8194;
count__8179_8183 = G__8195;
i__8180_8184 = G__8196;
continue;
} else {
var line_8197 = cljs.core.first.call(null,seq__8177_8191__$1);
markdown.links.parse_reference_link.call(null,line_8197,references);

var G__8198 = cljs.core.next.call(null,seq__8177_8191__$1);
var G__8199 = null;
var G__8200 = (0);
var G__8201 = (0);
seq__8177_8181 = G__8198;
chunk__8178_8182 = G__8199;
count__8179_8183 = G__8200;
i__8180_8184 = G__8201;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__8206_8210 = cljs.core.seq.call(null,lines);
var chunk__8207_8211 = null;
var count__8208_8212 = (0);
var i__8209_8213 = (0);
while(true){
if((i__8209_8213 < count__8208_8212)){
var line_8214 = cljs.core._nth.call(null,chunk__8207_8211,i__8209_8213);
markdown.links.parse_footnote_link.call(null,line_8214,footnotes);

var G__8215 = seq__8206_8210;
var G__8216 = chunk__8207_8211;
var G__8217 = count__8208_8212;
var G__8218 = (i__8209_8213 + (1));
seq__8206_8210 = G__8215;
chunk__8207_8211 = G__8216;
count__8208_8212 = G__8217;
i__8209_8213 = G__8218;
continue;
} else {
var temp__4657__auto___8219 = cljs.core.seq.call(null,seq__8206_8210);
if(temp__4657__auto___8219){
var seq__8206_8220__$1 = temp__4657__auto___8219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8206_8220__$1)){
var c__7228__auto___8221 = cljs.core.chunk_first.call(null,seq__8206_8220__$1);
var G__8222 = cljs.core.chunk_rest.call(null,seq__8206_8220__$1);
var G__8223 = c__7228__auto___8221;
var G__8224 = cljs.core.count.call(null,c__7228__auto___8221);
var G__8225 = (0);
seq__8206_8210 = G__8222;
chunk__8207_8211 = G__8223;
count__8208_8212 = G__8224;
i__8209_8213 = G__8225;
continue;
} else {
var line_8226 = cljs.core.first.call(null,seq__8206_8220__$1);
markdown.links.parse_footnote_link.call(null,line_8226,footnotes);

var G__8227 = cljs.core.next.call(null,seq__8206_8220__$1);
var G__8228 = null;
var G__8229 = (0);
var G__8230 = (0);
seq__8206_8210 = G__8227;
chunk__8207_8211 = G__8228;
count__8208_8212 = G__8229;
i__8209_8213 = G__8230;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__8235 = cljs.core.split_with.call(null,(function (p1__8231_SHARP_){
return cljs.core.not_empty.call(null,p1__8231_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__8235,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__8235,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_8253 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_8254 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_8253,_STAR_formatter_STAR_8254){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_8253,_STAR_formatter_STAR_8254))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__8255 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__8255,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__8255,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__8261_8268 = lines__$1;
var vec__8262_8269 = G__8261_8268;
var seq__8263_8270 = cljs.core.seq.call(null,vec__8262_8269);
var first__8264_8271 = cljs.core.first.call(null,seq__8263_8270);
var seq__8263_8272__$1 = cljs.core.next.call(null,seq__8263_8270);
var line_8273 = first__8264_8271;
var more_8274 = seq__8263_8272__$1;
var state_8275 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__8261_8276__$1 = G__8261_8268;
var state_8277__$1 = state_8275;
while(true){
var vec__8265_8278 = G__8261_8276__$1;
var seq__8266_8279 = cljs.core.seq.call(null,vec__8265_8278);
var first__8267_8280 = cljs.core.first.call(null,seq__8266_8279);
var seq__8266_8281__$1 = cljs.core.next.call(null,seq__8266_8279);
var line_8282__$1 = first__8267_8280;
var more_8283__$1 = seq__8266_8281__$1;
var state_8284__$2 = state_8277__$1;
var line_8285__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_8284__$2))?"":line_8282__$1);
var state_8286__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_8284__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_8284__$2),cljs.core.first.call(null,more_8283__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_8284__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_8284__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_8283__$1))){
var G__8287 = more_8283__$1;
var G__8288 = cljs.core.assoc.call(null,transformer.call(null,html,line_8285__$2,cljs.core.first.call(null,more_8283__$1),cljs.core.dissoc.call(null,state_8286__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_8285__$2));
G__8261_8276__$1 = G__8287;
state_8277__$1 = G__8288;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_8286__$3))),line_8285__$2,"",cljs.core.assoc.call(null,state_8286__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_8254;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_8253;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__7499__auto__ = [];
var len__7492__auto___8291 = arguments.length;
var i__7493__auto___8292 = (0);
while(true){
if((i__7493__auto___8292 < len__7492__auto___8291)){
args__7499__auto__.push((arguments[i__7493__auto___8292]));

var G__8293 = (i__7493__auto___8292 + (1));
i__7493__auto___8292 = G__8293;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq8289){
var G__8290 = cljs.core.first.call(null,seq8289);
var seq8289__$1 = cljs.core.next.call(null,seq8289);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__8290,seq8289__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__7499__auto__ = [];
var len__7492__auto___8296 = arguments.length;
var i__7493__auto___8297 = (0);
while(true){
if((i__7493__auto___8297 < len__7492__auto___8296)){
args__7499__auto__.push((arguments[i__7493__auto___8297]));

var G__8298 = (i__7493__auto___8297 + (1));
i__7493__auto___8297 = G__8298;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq8294){
var G__8295 = cljs.core.first.call(null,seq8294);
var seq8294__$1 = cljs.core.next.call(null,seq8294);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__8295,seq8294__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__7499__auto__ = [];
var len__7492__auto___8300 = arguments.length;
var i__7493__auto___8301 = (0);
while(true){
if((i__7493__auto___8301 < len__7492__auto___8300)){
args__7499__auto__.push((arguments[i__7493__auto___8301]));

var G__8302 = (i__7493__auto___8301 + (1));
i__7493__auto___8301 = G__8302;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq8299){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8299));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__7499__auto__ = [];
var len__7492__auto___8304 = arguments.length;
var i__7493__auto___8305 = (0);
while(true){
if((i__7493__auto___8305 < len__7492__auto___8304)){
args__7499__auto__.push((arguments[i__7493__auto___8305]));

var G__8306 = (i__7493__auto___8305 + (1));
i__7493__auto___8305 = G__8306;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq8303){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8303));
});


//# sourceMappingURL=core.js.map?rel=1486506031142