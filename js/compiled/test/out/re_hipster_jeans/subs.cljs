(ns re-hipster-jeans.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  :name
  (fn [db]
    (:name db)))

(re-frame/reg-sub
  :active-panel
  (fn [db _]
    (:active-panel db)))


(re-frame/reg-sub
  :data-set
  (fn [db _]
    (do
      (println "DATASET" (-> db :data-set :data :columns))
      (:data-set db))))



(re-frame/reg-sub
  :about-md
  (fn [db _]
    (:about-md db)))


(re-frame/reg-sub
  :readme-md
  (fn [db _]
    (:readme-md db)))