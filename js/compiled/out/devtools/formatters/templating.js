// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x14114_14115 = value;
x14114_14115.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x14119_14120 = value;
x14119_14120.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x14124_14125 = value;
x14124_14125.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__6405__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__6405__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14133 = arguments.length;
var i__7493__auto___14134 = (0);
while(true){
if((i__7493__auto___14134 < len__7492__auto___14133)){
args__7499__auto__.push((arguments[i__7493__auto___14134]));

var G__14135 = (i__7493__auto___14134 + (1));
i__7493__auto___14134 = G__14135;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__14129_14136 = cljs.core.seq.call(null,items);
var chunk__14130_14137 = null;
var count__14131_14138 = (0);
var i__14132_14139 = (0);
while(true){
if((i__14132_14139 < count__14131_14138)){
var item_14140 = cljs.core._nth.call(null,chunk__14130_14137,i__14132_14139);
if(cljs.core.some_QMARK_.call(null,item_14140)){
if(cljs.core.coll_QMARK_.call(null,item_14140)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_14140)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_14140));
}
} else {
}

var G__14141 = seq__14129_14136;
var G__14142 = chunk__14130_14137;
var G__14143 = count__14131_14138;
var G__14144 = (i__14132_14139 + (1));
seq__14129_14136 = G__14141;
chunk__14130_14137 = G__14142;
count__14131_14138 = G__14143;
i__14132_14139 = G__14144;
continue;
} else {
var temp__4657__auto___14145 = cljs.core.seq.call(null,seq__14129_14136);
if(temp__4657__auto___14145){
var seq__14129_14146__$1 = temp__4657__auto___14145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14129_14146__$1)){
var c__7228__auto___14147 = cljs.core.chunk_first.call(null,seq__14129_14146__$1);
var G__14148 = cljs.core.chunk_rest.call(null,seq__14129_14146__$1);
var G__14149 = c__7228__auto___14147;
var G__14150 = cljs.core.count.call(null,c__7228__auto___14147);
var G__14151 = (0);
seq__14129_14136 = G__14148;
chunk__14130_14137 = G__14149;
count__14131_14138 = G__14150;
i__14132_14139 = G__14151;
continue;
} else {
var item_14152 = cljs.core.first.call(null,seq__14129_14146__$1);
if(cljs.core.some_QMARK_.call(null,item_14152)){
if(cljs.core.coll_QMARK_.call(null,item_14152)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_14152)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_14152));
}
} else {
}

var G__14153 = cljs.core.next.call(null,seq__14129_14146__$1);
var G__14154 = null;
var G__14155 = (0);
var G__14156 = (0);
seq__14129_14136 = G__14153;
chunk__14130_14137 = G__14154;
count__14131_14138 = G__14155;
i__14132_14139 = G__14156;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq14128){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14128));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14164 = arguments.length;
var i__7493__auto___14165 = (0);
while(true){
if((i__7493__auto___14165 < len__7492__auto___14164)){
args__7499__auto__.push((arguments[i__7493__auto___14165]));

var G__14166 = (i__7493__auto___14165 + (1));
i__7493__auto___14165 = G__14166;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((2) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7500__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__14160_14167 = cljs.core.seq.call(null,children);
var chunk__14161_14168 = null;
var count__14162_14169 = (0);
var i__14163_14170 = (0);
while(true){
if((i__14163_14170 < count__14162_14169)){
var child_14171 = cljs.core._nth.call(null,chunk__14161_14168,i__14163_14170);
if(cljs.core.some_QMARK_.call(null,child_14171)){
if(cljs.core.coll_QMARK_.call(null,child_14171)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_14171))));
} else {
var temp__4655__auto___14172 = devtools.formatters.helpers.pref.call(null,child_14171);
if(cljs.core.truth_(temp__4655__auto___14172)){
var child_value_14173 = temp__4655__auto___14172;
template.push(child_value_14173);
} else {
}
}
} else {
}

var G__14174 = seq__14160_14167;
var G__14175 = chunk__14161_14168;
var G__14176 = count__14162_14169;
var G__14177 = (i__14163_14170 + (1));
seq__14160_14167 = G__14174;
chunk__14161_14168 = G__14175;
count__14162_14169 = G__14176;
i__14163_14170 = G__14177;
continue;
} else {
var temp__4657__auto___14178 = cljs.core.seq.call(null,seq__14160_14167);
if(temp__4657__auto___14178){
var seq__14160_14179__$1 = temp__4657__auto___14178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14160_14179__$1)){
var c__7228__auto___14180 = cljs.core.chunk_first.call(null,seq__14160_14179__$1);
var G__14181 = cljs.core.chunk_rest.call(null,seq__14160_14179__$1);
var G__14182 = c__7228__auto___14180;
var G__14183 = cljs.core.count.call(null,c__7228__auto___14180);
var G__14184 = (0);
seq__14160_14167 = G__14181;
chunk__14161_14168 = G__14182;
count__14162_14169 = G__14183;
i__14163_14170 = G__14184;
continue;
} else {
var child_14185 = cljs.core.first.call(null,seq__14160_14179__$1);
if(cljs.core.some_QMARK_.call(null,child_14185)){
if(cljs.core.coll_QMARK_.call(null,child_14185)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_14185))));
} else {
var temp__4655__auto___14186 = devtools.formatters.helpers.pref.call(null,child_14185);
if(cljs.core.truth_(temp__4655__auto___14186)){
var child_value_14187 = temp__4655__auto___14186;
template.push(child_value_14187);
} else {
}
}
} else {
}

var G__14188 = cljs.core.next.call(null,seq__14160_14179__$1);
var G__14189 = null;
var G__14190 = (0);
var G__14191 = (0);
seq__14160_14167 = G__14188;
chunk__14161_14168 = G__14189;
count__14162_14169 = G__14190;
i__14163_14170 = G__14191;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq14157){
var G__14158 = cljs.core.first.call(null,seq14157);
var seq14157__$1 = cljs.core.next.call(null,seq14157);
var G__14159 = cljs.core.first.call(null,seq14157__$1);
var seq14157__$2 = cljs.core.next.call(null,seq14157__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__14158,G__14159,seq14157__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14194 = arguments.length;
var i__7493__auto___14195 = (0);
while(true){
if((i__7493__auto___14195 < len__7492__auto___14194)){
args__7499__auto__.push((arguments[i__7493__auto___14195]));

var G__14196 = (i__7493__auto___14195 + (1));
i__7493__auto___14195 = G__14196;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq14192){
var G__14193 = cljs.core.first.call(null,seq14192);
var seq14192__$1 = cljs.core.next.call(null,seq14192);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14193,seq14192__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14199 = arguments.length;
var i__7493__auto___14200 = (0);
while(true){
if((i__7493__auto___14200 < len__7492__auto___14199)){
args__7499__auto__.push((arguments[i__7493__auto___14200]));

var G__14201 = (i__7493__auto___14200 + (1));
i__7493__auto___14200 = G__14201;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq14197){
var G__14198 = cljs.core.first.call(null,seq14197);
var seq14197__$1 = cljs.core.next.call(null,seq14197);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14198,seq14197__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args14202 = [];
var len__7492__auto___14207 = arguments.length;
var i__7493__auto___14208 = (0);
while(true){
if((i__7493__auto___14208 < len__7492__auto___14207)){
args14202.push((arguments[i__7493__auto___14208]));

var G__14209 = (i__7493__auto___14208 + (1));
i__7493__auto___14208 = G__14209;
continue;
} else {
}
break;
}

var G__14204 = args14202.length;
switch (G__14204) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14202.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj14206 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6417__auto__ = start_index;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (0);
}
})()};
return obj14206;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14217 = arguments.length;
var i__7493__auto___14218 = (0);
while(true){
if((i__7493__auto___14218 < len__7492__auto___14217)){
args__7499__auto__.push((arguments[i__7493__auto___14218]));

var G__14219 = (i__7493__auto___14218 + (1));
i__7493__auto___14218 = G__14219;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__14213){
var vec__14214 = p__14213;
var state_override_fn = cljs.core.nth.call(null,vec__14214,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq14211){
var G__14212 = cljs.core.first.call(null,seq14211);
var seq14211__$1 = cljs.core.next.call(null,seq14211);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__14212,seq14211__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7403__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14223_14226 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14224_14227 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14223_14226,_STAR_print_fn_STAR_14224_14227,sb__7403__auto__){
return (function (x__7404__auto__){
return sb__7403__auto__.append(x__7404__auto__);
});})(_STAR_print_newline_STAR_14223_14226,_STAR_print_fn_STAR_14224_14227,sb__7403__auto__))
;

try{var _STAR_print_level_STAR_14225_14228 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14225_14228;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14224_14227;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14223_14226;
}
return [cljs.core.str(sb__7403__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_14230 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14230;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__14232 = name;
switch (G__14232) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__14237 = tag;
var html_tag = cljs.core.nth.call(null,vec__14237,(0),null);
var style = cljs.core.nth.call(null,vec__14237,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_14241 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_14241;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_14244 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_14245 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_14245;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_14244;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__14246 = initial_value;
var G__14247 = value.call(null);
initial_value = G__14246;
value = G__14247;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__14248 = initial_value;
var G__14249 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__14248;
value = G__14249;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__14250 = initial_value;
var G__14251 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__14250;
value = G__14251;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1486506052493