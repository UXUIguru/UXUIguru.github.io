// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__7080__auto__ = (((value == null))?null:value);
var m__7081__auto__ = (devtools.format._header[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,value);
} else {
var m__7081__auto____$1 = (devtools.format._header["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__7080__auto__ = (((value == null))?null:value);
var m__7081__auto__ = (devtools.format._has_body[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,value);
} else {
var m__7081__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__7080__auto__ = (((value == null))?null:value);
var m__7081__auto__ = (devtools.format._body[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,value);
} else {
var m__7081__auto____$1 = (devtools.format._body["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__13717__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__13717__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__13717__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__13717__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__13716__auto__ = temp__4657__auto____$2;
return goog.object.get(o__13716__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__13717__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__13717__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__13717__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__13717__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__13716__auto__ = temp__4657__auto____$2;
return goog.object.get(o__13716__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__13717__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__13717__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__13717__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__13717__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__13716__auto__ = temp__4657__auto____$2;
return goog.object.get(o__13716__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__13717__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__13717__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__13717__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__13717__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__13716__auto__ = temp__4657__auto____$2;
return goog.object.get(o__13716__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__13717__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__13717__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__13717__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__13717__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__13716__auto__ = temp__4657__auto____$2;
return goog.object.get(o__13716__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__13717__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__13717__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__13717__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__13717__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__13716__auto__ = temp__4657__auto____$2;
return goog.object.get(o__13716__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__13717__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__13717__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__13717__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__13717__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__13716__auto__ = temp__4657__auto____$2;
return goog.object.get(o__13716__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13791 = arguments.length;
var i__7493__auto___13792 = (0);
while(true){
if((i__7493__auto___13792 < len__7492__auto___13791)){
args__7499__auto__.push((arguments[i__7493__auto___13792]));

var G__13793 = (i__7493__auto___13792 + (1));
i__7493__auto___13792 = G__13793;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq13790){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13790));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13795 = arguments.length;
var i__7493__auto___13796 = (0);
while(true){
if((i__7493__auto___13796 < len__7492__auto___13795)){
args__7499__auto__.push((arguments[i__7493__auto___13796]));

var G__13797 = (i__7493__auto___13796 + (1));
i__7493__auto___13796 = G__13797;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq13794){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13794));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13799 = arguments.length;
var i__7493__auto___13800 = (0);
while(true){
if((i__7493__auto___13800 < len__7492__auto___13799)){
args__7499__auto__.push((arguments[i__7493__auto___13800]));

var G__13801 = (i__7493__auto___13800 + (1));
i__7493__auto___13800 = G__13801;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq13798){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13798));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13803 = arguments.length;
var i__7493__auto___13804 = (0);
while(true){
if((i__7493__auto___13804 < len__7492__auto___13803)){
args__7499__auto__.push((arguments[i__7493__auto___13804]));

var G__13805 = (i__7493__auto___13804 + (1));
i__7493__auto___13804 = G__13805;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq13802){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13802));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13807 = arguments.length;
var i__7493__auto___13808 = (0);
while(true){
if((i__7493__auto___13808 < len__7492__auto___13807)){
args__7499__auto__.push((arguments[i__7493__auto___13808]));

var G__13809 = (i__7493__auto___13808 + (1));
i__7493__auto___13808 = G__13809;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq13806){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13806));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13811 = arguments.length;
var i__7493__auto___13812 = (0);
while(true){
if((i__7493__auto___13812 < len__7492__auto___13811)){
args__7499__auto__.push((arguments[i__7493__auto___13812]));

var G__13813 = (i__7493__auto___13812 + (1));
i__7493__auto___13812 = G__13813;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq13810){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13810));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13815 = arguments.length;
var i__7493__auto___13816 = (0);
while(true){
if((i__7493__auto___13816 < len__7492__auto___13815)){
args__7499__auto__.push((arguments[i__7493__auto___13816]));

var G__13817 = (i__7493__auto___13816 + (1));
i__7493__auto___13816 = G__13817;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq13814){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13814));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13825 = arguments.length;
var i__7493__auto___13826 = (0);
while(true){
if((i__7493__auto___13826 < len__7492__auto___13825)){
args__7499__auto__.push((arguments[i__7493__auto___13826]));

var G__13827 = (i__7493__auto___13826 + (1));
i__7493__auto___13826 = G__13827;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__13821){
var vec__13822 = p__13821;
var state_override = cljs.core.nth.call(null,vec__13822,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__13822,state_override){
return (function (p1__13818_SHARP_){
return cljs.core.merge.call(null,p1__13818_SHARP_,state_override);
});})(vec__13822,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq13819){
var G__13820 = cljs.core.first.call(null,seq13819);
var seq13819__$1 = cljs.core.next.call(null,seq13819);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__13820,seq13819__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13829 = arguments.length;
var i__7493__auto___13830 = (0);
while(true){
if((i__7493__auto___13830 < len__7492__auto___13829)){
args__7499__auto__.push((arguments[i__7493__auto___13830]));

var G__13831 = (i__7493__auto___13830 + (1));
i__7493__auto___13830 = G__13831;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq13828){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13828));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___13834 = arguments.length;
var i__7493__auto___13835 = (0);
while(true){
if((i__7493__auto___13835 < len__7492__auto___13834)){
args__7499__auto__.push((arguments[i__7493__auto___13835]));

var G__13836 = (i__7493__auto___13835 + (1));
i__7493__auto___13835 = G__13836;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq13832){
var G__13833 = cljs.core.first.call(null,seq13832);
var seq13832__$1 = cljs.core.next.call(null,seq13832);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__13833,seq13832__$1);
});


//# sourceMappingURL=format.js.map?rel=1486506050459