(ns re-hipster-jeans.events
  (:require [re-frame.core :as re-frame]
            [re-hipster-jeans.db :as db]
            [ajax.core :as ajax]
            [ajax.edn :as ajaxedn]))

(re-frame/reg-event-db
  :initialize-db
  (fn [_ _]
    db/default-db))

(re-frame/reg-event-db
  :set-active-panel
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
  :load-data
  (fn
    ;; fetch information for the phone with the given phone-id
    [db [_ data-set]]
    (ajax/GET (str "api_sham/" (name data-set) ".edn")
              {:handler         #(re-frame/dispatch [:process-data-response data-set %1])
               :error-handler   #(re-frame/dispatch [:process-data-error data-set %1])
               :response-format (ajaxedn/edn-response-format)
               :keywords?       true})
    db))


(re-frame/reg-event-db
  :load-about-md
  (fn
    ;; fetch information for the phone with the given phone-id
    [db [_ data-set]]
    (ajax/GET "about.md"
              {:handler         #(re-frame/dispatch [:about-md-loaded %1])
               :error-handler   #(re-frame/dispatch [:about-md-error %1])
               :response-format :raw})
    db))

(re-frame/reg-event-db
  :load-readme-md
  (fn
    ;; fetch information for the phone with the given phone-id
    [db [_ data-set]]
    (ajax/GET "readme.md"
              {:handler         #(re-frame/dispatch [:readme-md-loaded %1])
               :error-handler   #(re-frame/dispatch [:readme-md-error %1])
               :response-format :raw})
    db))

(re-frame/reg-event-db
  :about-md-loaded
  (fn [db [_ data]]
    (println ":about-md-loaded" data)
    (assoc db :about-md data)))

(re-frame/reg-event-db
  :about-md-error
  (fn [db [_ data]]
    (println ":about-md-error")
    db))

(re-frame/reg-event-db
  :readme-md-loaded
  (fn [db [_ data]]
    (assoc db :readme-md data)))

(re-frame/reg-event-db
  :process-data-response
  (fn [db [_ data-set response]]
    (do
      (println ":process-data-response" (-> response :columns))
      (assoc db :data-set {:name data-set :data response}))))

(re-frame/reg-event-db
  :process-data-error
  (fn [db [_ data-set response]]
    (assoc db :data-error {:name data-set :response response})))