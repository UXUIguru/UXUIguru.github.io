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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__17761){
var vec__17762 = p__17761;
var _ = cljs.core.nth.call(null,vec__17762,(0),null);
var active_panel = cljs.core.nth.call(null,vec__17762,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-data","load-data",-1806350928),(function (db,p__17767){
var vec__17768 = p__17767;
var _ = cljs.core.nth.call(null,vec__17768,(0),null);
var data_set = cljs.core.nth.call(null,vec__17768,(1),null);
ajax.core.GET.call(null,[cljs.core.str("api_sham/"),cljs.core.str(cljs.core.name.call(null,data_set)),cljs.core.str(".edn")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__17768,_,data_set){
return (function (p1__17765_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-data-response","process-data-response",-956715850),data_set,p1__17765_SHARP_], null));
});})(vec__17768,_,data_set))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__17768,_,data_set){
return (function (p1__17766_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-data-error","process-data-error",270739145),data_set,p1__17766_SHARP_], null));
});})(vec__17768,_,data_set))
,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.edn.edn_response_format.call(null),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-about-md","load-about-md",156285020),(function (db,p__17773){
var vec__17774 = p__17773;
var _ = cljs.core.nth.call(null,vec__17774,(0),null);
var data_set = cljs.core.nth.call(null,vec__17774,(1),null);
ajax.core.GET.call(null,"about.md",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__17774,_,data_set){
return (function (p1__17771_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-md-loaded","about-md-loaded",152611838),p1__17771_SHARP_], null));
});})(vec__17774,_,data_set))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__17774,_,data_set){
return (function (p1__17772_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-md-error","about-md-error",353964517),p1__17772_SHARP_], null));
});})(vec__17774,_,data_set))
,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-readme-md","load-readme-md",1086771229),(function (db,p__17779){
var vec__17780 = p__17779;
var _ = cljs.core.nth.call(null,vec__17780,(0),null);
var data_set = cljs.core.nth.call(null,vec__17780,(1),null);
ajax.core.GET.call(null,"readme.md",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__17780,_,data_set){
return (function (p1__17777_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"readme-md-loaded","readme-md-loaded",622194704),p1__17777_SHARP_], null));
});})(vec__17780,_,data_set))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__17780,_,data_set){
return (function (p1__17778_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"readme-md-error","readme-md-error",211792256),p1__17778_SHARP_], null));
});})(vec__17780,_,data_set))
,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"about-md-loaded","about-md-loaded",152611838),(function (db,p__17783){
var vec__17784 = p__17783;
var _ = cljs.core.nth.call(null,vec__17784,(0),null);
var data = cljs.core.nth.call(null,vec__17784,(1),null);
cljs.core.println.call(null,":about-md-loaded",data);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"about-md","about-md",-811310574),data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"about-md-error","about-md-error",353964517),(function (db,p__17787){
var vec__17788 = p__17787;
var _ = cljs.core.nth.call(null,vec__17788,(0),null);
var data = cljs.core.nth.call(null,vec__17788,(1),null);
cljs.core.println.call(null,":about-md-error");

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"readme-md-loaded","readme-md-loaded",622194704),(function (db,p__17791){
var vec__17792 = p__17791;
var _ = cljs.core.nth.call(null,vec__17792,(0),null);
var data = cljs.core.nth.call(null,vec__17792,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"readme-md","readme-md",707450152),data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-data-response","process-data-response",-956715850),(function (db,p__17795){
var vec__17796 = p__17795;
var _ = cljs.core.nth.call(null,vec__17796,(0),null);
var data_set = cljs.core.nth.call(null,vec__17796,(1),null);
var response = cljs.core.nth.call(null,vec__17796,(2),null);
cljs.core.println.call(null,":process-data-response",new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(response));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"data-set","data-set",-1844076932),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),data_set,new cljs.core.Keyword(null,"data","data",-232669377),response], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-data-error","process-data-error",270739145),(function (db,p__17799){
var vec__17800 = p__17799;
var _ = cljs.core.nth.call(null,vec__17800,(0),null);
var data_set = cljs.core.nth.call(null,vec__17800,(1),null);
var response = cljs.core.nth.call(null,vec__17800,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"data-error","data-error",-1058016301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),data_set,new cljs.core.Keyword(null,"response","response",-1068424192),response], null));
}));

//# sourceMappingURL=events.js.map