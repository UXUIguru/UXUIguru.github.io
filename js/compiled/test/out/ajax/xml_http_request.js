// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__16029,handler){
var map__16030 = p__16029;
var map__16030__$1 = ((((!((map__16030 == null)))?((((map__16030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16030):map__16030);
var uri = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__16030,map__16030__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__16028_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__16028_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__16030,map__16030__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___16042 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___16042)){
var response_type_16043 = temp__4657__auto___16042;
this$__$1.responseType = cljs.core.name.call(null,response_type_16043);
} else {
}

var seq__16032_16044 = cljs.core.seq.call(null,headers);
var chunk__16033_16045 = null;
var count__16034_16046 = (0);
var i__16035_16047 = (0);
while(true){
if((i__16035_16047 < count__16034_16046)){
var vec__16036_16048 = cljs.core._nth.call(null,chunk__16033_16045,i__16035_16047);
var k_16049 = cljs.core.nth.call(null,vec__16036_16048,(0),null);
var v_16050 = cljs.core.nth.call(null,vec__16036_16048,(1),null);
this$__$1.setRequestHeader(k_16049,v_16050);

var G__16051 = seq__16032_16044;
var G__16052 = chunk__16033_16045;
var G__16053 = count__16034_16046;
var G__16054 = (i__16035_16047 + (1));
seq__16032_16044 = G__16051;
chunk__16033_16045 = G__16052;
count__16034_16046 = G__16053;
i__16035_16047 = G__16054;
continue;
} else {
var temp__4657__auto___16055 = cljs.core.seq.call(null,seq__16032_16044);
if(temp__4657__auto___16055){
var seq__16032_16056__$1 = temp__4657__auto___16055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16032_16056__$1)){
var c__7228__auto___16057 = cljs.core.chunk_first.call(null,seq__16032_16056__$1);
var G__16058 = cljs.core.chunk_rest.call(null,seq__16032_16056__$1);
var G__16059 = c__7228__auto___16057;
var G__16060 = cljs.core.count.call(null,c__7228__auto___16057);
var G__16061 = (0);
seq__16032_16044 = G__16058;
chunk__16033_16045 = G__16059;
count__16034_16046 = G__16060;
i__16035_16047 = G__16061;
continue;
} else {
var vec__16039_16062 = cljs.core.first.call(null,seq__16032_16056__$1);
var k_16063 = cljs.core.nth.call(null,vec__16039_16062,(0),null);
var v_16064 = cljs.core.nth.call(null,vec__16039_16062,(1),null);
this$__$1.setRequestHeader(k_16063,v_16064);

var G__16065 = cljs.core.next.call(null,seq__16032_16056__$1);
var G__16066 = null;
var G__16067 = (0);
var G__16068 = (0);
seq__16032_16044 = G__16065;
chunk__16033_16045 = G__16066;
count__16034_16046 = G__16067;
i__16035_16047 = G__16068;
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

//# sourceMappingURL=xml_http_request.js.map