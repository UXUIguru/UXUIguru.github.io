// Compiled by ClojureScript 1.9.229 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__15349){
var map__15360 = p__15349;
var map__15360__$1 = ((((!((map__15360 == null)))?((((map__15360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15360):map__15360);
var replacement_transformers = cljs.core.get.call(null,map__15360__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__15360__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__15360__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__15360,map__15360__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_15362 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__15363 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_15362,map__15360,map__15360__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__15366,transformer){
var vec__15367 = p__15366;
var text = cljs.core.nth.call(null,vec__15367,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__15367,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_15362,map__15360,map__15360__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__6417__auto__ = replacement_transformers;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__15363,(0),null);
var new_state = cljs.core.nth.call(null,vec__15363,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_15362;
}});
;})(map__15360,map__15360__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15372 = arguments.length;
var i__7493__auto___15373 = (0);
while(true){
if((i__7493__auto___15373 < len__7492__auto___15372)){
args__7499__auto__.push((arguments[i__7493__auto___15373]));

var G__15374 = (i__7493__auto___15373 + (1));
i__7493__auto___15373 = G__15374;
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

markdown.core.format.cljs$lang$applyTo = (function (seq15370){
var G__15371 = cljs.core.first.call(null,seq15370);
var seq15370__$1 = cljs.core.next.call(null,seq15370);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__15371,seq15370__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__15379_15383 = cljs.core.seq.call(null,lines);
var chunk__15380_15384 = null;
var count__15381_15385 = (0);
var i__15382_15386 = (0);
while(true){
if((i__15382_15386 < count__15381_15385)){
var line_15387 = cljs.core._nth.call(null,chunk__15380_15384,i__15382_15386);
markdown.links.parse_reference_link.call(null,line_15387,references);

var G__15388 = seq__15379_15383;
var G__15389 = chunk__15380_15384;
var G__15390 = count__15381_15385;
var G__15391 = (i__15382_15386 + (1));
seq__15379_15383 = G__15388;
chunk__15380_15384 = G__15389;
count__15381_15385 = G__15390;
i__15382_15386 = G__15391;
continue;
} else {
var temp__4657__auto___15392 = cljs.core.seq.call(null,seq__15379_15383);
if(temp__4657__auto___15392){
var seq__15379_15393__$1 = temp__4657__auto___15392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15379_15393__$1)){
var c__7228__auto___15394 = cljs.core.chunk_first.call(null,seq__15379_15393__$1);
var G__15395 = cljs.core.chunk_rest.call(null,seq__15379_15393__$1);
var G__15396 = c__7228__auto___15394;
var G__15397 = cljs.core.count.call(null,c__7228__auto___15394);
var G__15398 = (0);
seq__15379_15383 = G__15395;
chunk__15380_15384 = G__15396;
count__15381_15385 = G__15397;
i__15382_15386 = G__15398;
continue;
} else {
var line_15399 = cljs.core.first.call(null,seq__15379_15393__$1);
markdown.links.parse_reference_link.call(null,line_15399,references);

var G__15400 = cljs.core.next.call(null,seq__15379_15393__$1);
var G__15401 = null;
var G__15402 = (0);
var G__15403 = (0);
seq__15379_15383 = G__15400;
chunk__15380_15384 = G__15401;
count__15381_15385 = G__15402;
i__15382_15386 = G__15403;
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
var seq__15408_15412 = cljs.core.seq.call(null,lines);
var chunk__15409_15413 = null;
var count__15410_15414 = (0);
var i__15411_15415 = (0);
while(true){
if((i__15411_15415 < count__15410_15414)){
var line_15416 = cljs.core._nth.call(null,chunk__15409_15413,i__15411_15415);
markdown.links.parse_footnote_link.call(null,line_15416,footnotes);

var G__15417 = seq__15408_15412;
var G__15418 = chunk__15409_15413;
var G__15419 = count__15410_15414;
var G__15420 = (i__15411_15415 + (1));
seq__15408_15412 = G__15417;
chunk__15409_15413 = G__15418;
count__15410_15414 = G__15419;
i__15411_15415 = G__15420;
continue;
} else {
var temp__4657__auto___15421 = cljs.core.seq.call(null,seq__15408_15412);
if(temp__4657__auto___15421){
var seq__15408_15422__$1 = temp__4657__auto___15421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15408_15422__$1)){
var c__7228__auto___15423 = cljs.core.chunk_first.call(null,seq__15408_15422__$1);
var G__15424 = cljs.core.chunk_rest.call(null,seq__15408_15422__$1);
var G__15425 = c__7228__auto___15423;
var G__15426 = cljs.core.count.call(null,c__7228__auto___15423);
var G__15427 = (0);
seq__15408_15412 = G__15424;
chunk__15409_15413 = G__15425;
count__15410_15414 = G__15426;
i__15411_15415 = G__15427;
continue;
} else {
var line_15428 = cljs.core.first.call(null,seq__15408_15422__$1);
markdown.links.parse_footnote_link.call(null,line_15428,footnotes);

var G__15429 = cljs.core.next.call(null,seq__15408_15422__$1);
var G__15430 = null;
var G__15431 = (0);
var G__15432 = (0);
seq__15408_15412 = G__15429;
chunk__15409_15413 = G__15430;
count__15410_15414 = G__15431;
i__15411_15415 = G__15432;
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
var vec__15437 = cljs.core.split_with.call(null,(function (p1__15433_SHARP_){
return cljs.core.not_empty.call(null,p1__15433_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__15437,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__15437,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_15455 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_15456 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_15455,_STAR_formatter_STAR_15456){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_15455,_STAR_formatter_STAR_15456))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__15457 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__15457,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__15457,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__15463_15470 = lines__$1;
var vec__15464_15471 = G__15463_15470;
var seq__15465_15472 = cljs.core.seq.call(null,vec__15464_15471);
var first__15466_15473 = cljs.core.first.call(null,seq__15465_15472);
var seq__15465_15474__$1 = cljs.core.next.call(null,seq__15465_15472);
var line_15475 = first__15466_15473;
var more_15476 = seq__15465_15474__$1;
var state_15477 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__15463_15478__$1 = G__15463_15470;
var state_15479__$1 = state_15477;
while(true){
var vec__15467_15480 = G__15463_15478__$1;
var seq__15468_15481 = cljs.core.seq.call(null,vec__15467_15480);
var first__15469_15482 = cljs.core.first.call(null,seq__15468_15481);
var seq__15468_15483__$1 = cljs.core.next.call(null,seq__15468_15481);
var line_15484__$1 = first__15469_15482;
var more_15485__$1 = seq__15468_15483__$1;
var state_15486__$2 = state_15479__$1;
var line_15487__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_15486__$2))?"":line_15484__$1);
var state_15488__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_15486__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_15486__$2),cljs.core.first.call(null,more_15485__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_15486__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_15486__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_15485__$1))){
var G__15489 = more_15485__$1;
var G__15490 = cljs.core.assoc.call(null,transformer.call(null,html,line_15487__$2,cljs.core.first.call(null,more_15485__$1),cljs.core.dissoc.call(null,state_15488__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_15487__$2));
G__15463_15478__$1 = G__15489;
state_15479__$1 = G__15490;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_15488__$3))),line_15487__$2,"",cljs.core.assoc.call(null,state_15488__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_15456;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_15455;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15493 = arguments.length;
var i__7493__auto___15494 = (0);
while(true){
if((i__7493__auto___15494 < len__7492__auto___15493)){
args__7499__auto__.push((arguments[i__7493__auto___15494]));

var G__15495 = (i__7493__auto___15494 + (1));
i__7493__auto___15494 = G__15495;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq15491){
var G__15492 = cljs.core.first.call(null,seq15491);
var seq15491__$1 = cljs.core.next.call(null,seq15491);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__15492,seq15491__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15498 = arguments.length;
var i__7493__auto___15499 = (0);
while(true){
if((i__7493__auto___15499 < len__7492__auto___15498)){
args__7499__auto__.push((arguments[i__7493__auto___15499]));

var G__15500 = (i__7493__auto___15499 + (1));
i__7493__auto___15499 = G__15500;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq15496){
var G__15497 = cljs.core.first.call(null,seq15496);
var seq15496__$1 = cljs.core.next.call(null,seq15496);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__15497,seq15496__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15502 = arguments.length;
var i__7493__auto___15503 = (0);
while(true){
if((i__7493__auto___15503 < len__7492__auto___15502)){
args__7499__auto__.push((arguments[i__7493__auto___15503]));

var G__15504 = (i__7493__auto___15503 + (1));
i__7493__auto___15503 = G__15504;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq15501){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15501));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15506 = arguments.length;
var i__7493__auto___15507 = (0);
while(true){
if((i__7493__auto___15507 < len__7492__auto___15506)){
args__7499__auto__.push((arguments[i__7493__auto___15507]));

var G__15508 = (i__7493__auto___15507 + (1));
i__7493__auto___15507 = G__15508;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq15505){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15505));
});


//# sourceMappingURL=core.js.map