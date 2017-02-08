// Compiled by ClojureScript 1.9.229 {}
goog.provide('markdown.common');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.common._STAR_inhibit_separator_STAR_ = null;
markdown.common.escape_delimiter = [cljs.core.str(cljs.core.char$.call(null,(254))),cljs.core.str(cljs.core.char$.call(null,(491)))].join('');
markdown.common.gen_token = (function markdown$common$gen_token(n){
return [cljs.core.str(markdown.common.escape_delimiter),cljs.core.str(n),cljs.core.str(markdown.common.escape_delimiter)].join('');
});
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.common.freeze_string = (function markdown$common$freeze_string(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14932 = arguments.length;
var i__7493__auto___14933 = (0);
while(true){
if((i__7493__auto___14933 < len__7492__auto___14932)){
args__7499__auto__.push((arguments[i__7493__auto___14933]));

var G__14934 = (i__7493__auto___14933 + (1));
i__7493__auto___14933 = G__14934;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last.call(null,args);
var token = markdown.common.gen_token.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),token], null),cljs.core.reduce.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.drop_last.call(null,args))))], null);
});

markdown.common.freeze_string.cljs$lang$maxFixedArity = (0);

markdown.common.freeze_string.cljs$lang$applyTo = (function (seq14931){
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14931));
});

/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.common.thaw_string = (function markdown$common$thaw_string(text,state){
while(true){
var temp__4655__auto__ = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[cljs.core.str(markdown.common.escape_delimiter),cljs.core.str("\\d+"),cljs.core.str(markdown.common.escape_delimiter)].join('')),text);
if(cljs.core.truth_(temp__4655__auto__)){
var matches = temp__4655__auto__;
var G__14937 = cljs.core.reduce.call(null,((function (text,state,matches,temp__4655__auto__){
return (function (s,r){
return clojure.string.replace.call(null,s,cljs.core.re_pattern.call(null,r),((function (text,state,matches,temp__4655__auto__){
return (function (p1__14935_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state),p1__14935_SHARP_,p1__14935_SHARP_);
});})(text,state,matches,temp__4655__auto__))
);
});})(text,state,matches,temp__4655__auto__))
,text,matches);
var G__14938 = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),((function (text,state,matches,temp__4655__auto__){
return (function (p1__14936_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__14936_SHARP_,matches);
});})(text,state,matches,temp__4655__auto__))
);
text = G__14937;
state = G__14938;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
break;
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.common.thaw_strings = (function markdown$common$thaw_strings(text,state){
if(!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)))){
return markdown.common.thaw_string.call(null,text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_code = (function markdown$common$escape_code(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.common.escaped_chars = (function markdown$common$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__6417__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
/**
 * Return a transformer to
 * - find all the chunks of the string delimited by the `separator',
 * - wrap the output with the `open' and `close' markers, and
 * - apply the `transformer' to the text inside the chunk.
 */
markdown.common.make_separator = (function markdown$common$make_separator(var_args){
var args14939 = [];
var len__7492__auto___14948 = arguments.length;
var i__7493__auto___14949 = (0);
while(true){
if((i__7493__auto___14949 < len__7492__auto___14948)){
args14939.push((arguments[i__7493__auto___14949]));

var G__14950 = (i__7493__auto___14949 + (1));
i__7493__auto___14949 = G__14950;
continue;
} else {
}
break;
}

var G__14941 = args14939.length;
switch (G__14941) {
case 3:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14939.length)].join('')));

}
});

markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3 = (function (separator,open,close){
return markdown.common.make_separator.call(null,separator,open,close,cljs.core.identity);
});

markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4 = (function (separator,open,close,transformer){
var separator__$1 = cljs.core.seq.call(null,separator);
return ((function (separator__$1){
return (function (text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,separator__$1)),cljs.core.seq.call(null,text));
var cur_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.into.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.call(null,out,separator__$1):out),buf)),cljs.core.dissoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var vec__14942 = (((transformer === cljs.core.identity))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buf,cur_state], null):(function (){var vec__14945 = transformer.call(null,clojure.string.join.call(null,buf),cur_state);
var s = cljs.core.nth.call(null,vec__14945,(0),null);
var new_state = cljs.core.nth.call(null,vec__14945,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,s),new_state], null);
})());
var new_buf = cljs.core.nth.call(null,vec__14942,(0),null);
var new_state = cljs.core.nth.call(null,vec__14942,(1),null);
var G__14952 = cljs.core.vec.call(null,cljs.core.concat.call(null,out,cljs.core.seq.call(null,open),new_buf,cljs.core.seq.call(null,close)));
var G__14953 = cljs.core.PersistentVector.EMPTY;
var G__14954 = cljs.core.rest.call(null,tokens);
var G__14955 = cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
out = G__14952;
buf = G__14953;
tokens = G__14954;
cur_state = G__14955;
continue;
} else {
var G__14956 = out;
var G__14957 = cljs.core.into.call(null,buf,cljs.core.first.call(null,tokens));
var G__14958 = cljs.core.rest.call(null,tokens);
var G__14959 = cur_state;
out = G__14956;
buf = G__14957;
tokens = G__14958;
cur_state = G__14959;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var G__14960 = out;
var G__14961 = buf;
var G__14962 = cljs.core.rest.call(null,tokens);
var G__14963 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),true);
out = G__14960;
buf = G__14961;
tokens = G__14962;
cur_state = G__14963;
continue;
} else {
var G__14964 = cljs.core.into.call(null,out,cljs.core.first.call(null,tokens));
var G__14965 = buf;
var G__14966 = cljs.core.rest.call(null,tokens);
var G__14967 = cur_state;
out = G__14964;
buf = G__14965;
tokens = G__14966;
cur_state = G__14967;
continue;

}
}
}
break;
}
}
});
;})(separator__$1))
});

markdown.common.make_separator.cljs$lang$maxFixedArity = 4;

markdown.common.escape_code_transformer = (function markdown$common$escape_code_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.escape_code.call(null,text),state], null);
});
markdown.common.separator = (function markdown$common$separator(escape_QMARK_,text,open,close,separator__$1,state){
return markdown.common.make_separator.call(null,separator__$1,open,close,(cljs.core.truth_(escape_QMARK_)?markdown.common.escape_code_transformer:cljs.core.identity)).call(null,text,state);
});
markdown.common.strong = markdown.common.make_separator.call(null,"**","<strong>","</strong>");
markdown.common.bold = markdown.common.make_separator.call(null,"__","<b>","</b>");
markdown.common.em = markdown.common.make_separator.call(null,"*","<em>","</em>");
markdown.common.italics = markdown.common.make_separator.call(null,"_","<i>","</i>");
markdown.common.strikethrough = markdown.common.make_separator.call(null,"~~","<del>","</del>");
markdown.common.inline_code = markdown.common.make_separator.call(null,"`","<code>","</code>",markdown.common.escape_code_transformer);
markdown.common.inhibit = (function markdown$common$inhibit(text,state){
if(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)){
return markdown.common.make_separator.call(null,markdown.common._STAR_inhibit_separator_STAR_,"","",markdown.common.freeze_string).call(null,text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_inhibit_separator = (function markdown$common$escape_inhibit_separator(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)?clojure.string.replace.call(null,text,clojure.string.join.call(null,cljs.core.concat.call(null,markdown.common._STAR_inhibit_separator_STAR_,markdown.common._STAR_inhibit_separator_STAR_)),clojure.string.join.call(null,markdown.common._STAR_inhibit_separator_STAR_)):text),state], null);
});
markdown.common.heading_text = (function markdown$common$heading_text(text){
return clojure.string.trim.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/^([ ]+)?[#]+/,""),/[#]+$/,""));
});
markdown.common.heading_level = (function markdown$common$heading_level(text){
var num_hashes = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__14968_SHARP_){
return cljs.core.not_EQ_.call(null," ",p1__14968_SHARP_);
}),cljs.core.take_while.call(null,(function (p1__14969_SHARP_){
return (cljs.core._EQ_.call(null,"#",p1__14969_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__14969_SHARP_));
}),cljs.core.seq.call(null,text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.common.make_heading = (function markdown$common$make_heading(text,heading_anchors){
var temp__4657__auto__ = markdown.common.heading_level.call(null,text);
if(cljs.core.truth_(temp__4657__auto__)){
var heading = temp__4657__auto__;
var text__$1 = markdown.common.heading_text.call(null,text);
return [cljs.core.str("<h"),cljs.core.str(heading),cljs.core.str((cljs.core.truth_(heading_anchors)?[cljs.core.str(" id=\""),cljs.core.str(clojure.string.replace.call(null,clojure.string.lower_case.call(null,text__$1)," ","&#95;")),cljs.core.str("\"")].join(''):null)),cljs.core.str(">"),cljs.core.str(text__$1),cljs.core.str("</h"),cljs.core.str(heading),cljs.core.str(">")].join('');
} else {
return null;
}
});
markdown.common.dashes = (function markdown$common$dashes(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__6417__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\-\-\-/,"&mdash;"),/\-\-/,"&ndash;")),state], null);
});

//# sourceMappingURL=common.js.map