(ns re-hipster-jeans.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [re-hipster-jeans.events]
              [re-hipster-jeans.subs]
              [re-hipster-jeans.routes :as routes]
              [re-hipster-jeans.views :as views]
              [re-hipster-jeans.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))
