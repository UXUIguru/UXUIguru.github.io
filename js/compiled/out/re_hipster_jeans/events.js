// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_hipster_jeans.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_hipster_jeans.db');
goog.require('ajax.core');
goog.require('ajax.edn');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return re_hipster_jeans.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__11252){
var vec__11253 = p__11252;
var _ = cljs.core.nth.call(null,vec__11253,(0),null);
var active_panel = cljs.core.nth.call(null,vec__11253,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-data","load-data",-1806350928),(function (db,p__11258){
var vec__11259 = p__11258;
var _ = cljs.core.nth.call(null,vec__11259,(0),null);
var data_set = cljs.core.nth.call(null,vec__11259,(1),null);
ajax.core.GET.call(null,[cljs.core.str("api_sham/"),cljs.core.str(cljs.core.name.call(null,data_set)),cljs.core.str(".edn")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__11259,_,data_set){
return (function (p1__11256_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-data-response","process-data-response",-956715850),data_set,p1__11256_SHARP_], null));
});})(vec__11259,_,data_set))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__11259,_,data_set){
return (function (p1__11257_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-data-error","process-data-error",270739145),data_set,p1__11257_SHARP_], null));
});})(vec__11259,_,data_set))
,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.edn.edn_response_format.call(null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-about-md","load-about-md",156285020),(function (db,p__11264){
var vec__11265 = p__11264;
var _ = cljs.core.nth.call(null,vec__11265,(0),null);
var data_set = cljs.core.nth.call(null,vec__11265,(1),null);
ajax.core.GET.call(null,"about.md",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__11265,_,data_set){
return (function (p1__11262_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-md-loaded","about-md-loaded",152611838),p1__11262_SHARP_], null));
});})(vec__11265,_,data_set))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__11265,_,data_set){
return (function (p1__11263_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-md-error","about-md-error",353964517),p1__11263_SHARP_], null));
});})(vec__11265,_,data_set))
,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-readme-md","load-readme-md",1086771229),(function (db,p__11270){
var vec__11271 = p__11270;
var _ = cljs.core.nth.call(null,vec__11271,(0),null);
var data_set = cljs.core.nth.call(null,vec__11271,(1),null);
ajax.core.GET.call(null,"readme.md",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__11271,_,data_set){
return (function (p1__11268_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"readme-md-loaded","readme-md-loaded",622194704),p1__11268_SHARP_], null));
});})(vec__11271,_,data_set))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__11271,_,data_set){
return (function (p1__11269_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"readme-md-error","readme-md-error",211792256),p1__11269_SHARP_], null));
});})(vec__11271,_,data_set))
,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"about-md-loaded","about-md-loaded",152611838),(function (db,p__11274){
var vec__11275 = p__11274;
var _ = cljs.core.nth.call(null,vec__11275,(0),null);
var data = cljs.core.nth.call(null,vec__11275,(1),null);
cljs.core.println.call(null,":about-md-loaded",data);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"about-md","about-md",-811310574),data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"about-md-error","about-md-error",353964517),(function (db,p__11278){
var vec__11279 = p__11278;
var _ = cljs.core.nth.call(null,vec__11279,(0),null);
var data = cljs.core.nth.call(null,vec__11279,(1),null);
cljs.core.println.call(null,":about-md-error");

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"readme-md-loaded","readme-md-loaded",622194704),(function (db,p__11282){
var vec__11283 = p__11282;
var _ = cljs.core.nth.call(null,vec__11283,(0),null);
var data = cljs.core.nth.call(null,vec__11283,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"readme-md","readme-md",707450152),data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-data-response","process-data-response",-956715850),(function (db,p__11286){
var vec__11287 = p__11286;
var _ = cljs.core.nth.call(null,vec__11287,(0),null);
var data_set = cljs.core.nth.call(null,vec__11287,(1),null);
var response = cljs.core.nth.call(null,vec__11287,(2),null);
cljs.core.println.call(null,":process-data-response",new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(response));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"data-set","data-set",-1844076932),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),data_set,new cljs.core.Keyword(null,"data","data",-232669377),response], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-data-error","process-data-error",270739145),(function (db,p__11290){
var vec__11291 = p__11290;
var _ = cljs.core.nth.call(null,vec__11291,(0),null);
var data_set = cljs.core.nth.call(null,vec__11291,(1),null);
var response = cljs.core.nth.call(null,vec__11291,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"data-error","data-error",-1058016301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),data_set,new cljs.core.Keyword(null,"response","response",-1068424192),response], null));
}));

//# sourceMappingURL=events.js.map?rel=1486506042287