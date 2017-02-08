// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_hipster_jeans.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_hipster_jeans.views');
goog.require('re_hipster_jeans.config');
goog.require('re_hipster_jeans.routes');
goog.require('re_hipster_jeans.subs');
goog.require('re_hipster_jeans.events');
goog.require('re_frame.core');
re_hipster_jeans.core.dev_setup = (function re_hipster_jeans$core$dev_setup(){
if(cljs.core.truth_(re_hipster_jeans.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
re_hipster_jeans.core.mount_root = (function re_hipster_jeans$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_hipster_jeans.views.main_panel], null),document.getElementById("app"));
});
re_hipster_jeans.core.init = (function re_hipster_jeans$core$init(){
re_hipster_jeans.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

re_hipster_jeans.core.dev_setup.call(null);

return re_hipster_jeans.core.mount_root.call(null);
});
goog.exportSymbol('re_hipster_jeans.core.init', re_hipster_jeans.core.init);

//# sourceMappingURL=core.js.map