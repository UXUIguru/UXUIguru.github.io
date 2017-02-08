// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8974,handler){
var map__8975 = p__8974;
var map__8975__$1 = ((((!((map__8975 == null)))?((((map__8975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8975):map__8975);
var uri = cljs.core.get.call(null,map__8975__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8975__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__8975__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__8975__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__8975__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__8975__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__8975__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8975,map__8975__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8973_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__8973_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__8975,map__8975__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___8987 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___8987)){
var response_type_8988 = temp__4657__auto___8987;
this$__$1.responseType = cljs.core.name.call(null,response_type_8988);
} else {
}

var seq__8977_8989 = cljs.core.seq.call(null,headers);
var chunk__8978_8990 = null;
var count__8979_8991 = (0);
var i__8980_8992 = (0);
while(true){
if((i__8980_8992 < count__8979_8991)){
var vec__8981_8993 = cljs.core._nth.call(null,chunk__8978_8990,i__8980_8992);
var k_8994 = cljs.core.nth.call(null,vec__8981_8993,(0),null);
var v_8995 = cljs.core.nth.call(null,vec__8981_8993,(1),null);
this$__$1.setRequestHeader(k_8994,v_8995);

var G__8996 = seq__8977_8989;
var G__8997 = chunk__8978_8990;
var G__8998 = count__8979_8991;
var G__8999 = (i__8980_8992 + (1));
seq__8977_8989 = G__8996;
chunk__8978_8990 = G__8997;
count__8979_8991 = G__8998;
i__8980_8992 = G__8999;
continue;
} else {
var temp__4657__auto___9000 = cljs.core.seq.call(null,seq__8977_8989);
if(temp__4657__auto___9000){
var seq__8977_9001__$1 = temp__4657__auto___9000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8977_9001__$1)){
var c__7228__auto___9002 = cljs.core.chunk_first.call(null,seq__8977_9001__$1);
var G__9003 = cljs.core.chunk_rest.call(null,seq__8977_9001__$1);
var G__9004 = c__7228__auto___9002;
var G__9005 = cljs.core.count.call(null,c__7228__auto___9002);
var G__9006 = (0);
seq__8977_8989 = G__9003;
chunk__8978_8990 = G__9004;
count__8979_8991 = G__9005;
i__8980_8992 = G__9006;
continue;
} else {
var vec__8984_9007 = cljs.core.first.call(null,seq__8977_9001__$1);
var k_9008 = cljs.core.nth.call(null,vec__8984_9007,(0),null);
var v_9009 = cljs.core.nth.call(null,vec__8984_9007,(1),null);
this$__$1.setRequestHeader(k_9008,v_9009);

var G__9010 = cljs.core.next.call(null,seq__8977_9001__$1);
var G__9011 = null;
var G__9012 = (0);
var G__9013 = (0);
seq__8977_8989 = G__9010;
chunk__8978_8990 = G__9011;
count__8979_8991 = G__9012;
i__8980_8992 = G__9013;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6417__auto__ = body;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1486506034369