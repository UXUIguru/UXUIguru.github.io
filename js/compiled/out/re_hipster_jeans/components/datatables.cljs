(ns re-hipster-jeans.components.datatables
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]))

(defn datatable
  [data-set data]
  (let [data (re-frame/subscribe [:data-set])]
    (r/create-class
      {:component-did-mount     (fn [node]

                                  (let [el (r/dom-node node)
                                        x (or (and @data (:data @data)) {:columns ["no data..."] :rows []})]

                                    (println ":component-did-mount" (:columns x))

                                    (.DataTable (js/$ el)
                                                (clj->js {:bDestroy   true
                                                          :destroy    true
                                                          :data       (or (:rows x) [])
                                                          :columns    (mapv (fn [c] {:title c}) (:columns x))
                                                          :columnDefs (mapv (fn [_c] {:width "33%" :targets 0}) (:columns x))
                                                          }))))

       :component-will-update   (fn [this new-argv]
                                  (let [x (or (and @data (:data @data)) {:columns ["no data..."] :rows []})]
                                    (println ":component-will-update" (:columns x))))

       :component-did-update    (fn [node]

                                  (let [el (r/dom-node node)
                                        x (or (and @data (:data @data)) {:columns ["no data..."] :rows []})]

                                    (println ":component-did-update" (:columns x))

                                    (when (js/$.fn.DataTable.isDataTable el)
                                      (do
                                        (println "destroying")
                                        (.destroy (.DataTable (js/$ el) (clj->js {:retrieve true})))
                                        (.empty (js/$ el))
                                        (println "is datatable: " (js/$.fn.DataTable.isDataTable el))
                                        ))

                                    (.DataTable (js/$ el)
                                                (clj->js {:data    (or (:rows x) [])
                                                          :columns (mapv (fn [c] {:title c}) (:columns x))
                                                          ;:columnDefs (mapv (fn [_c] {:width "33%" :targets 0}) (:columns x))
                                                          }))
                                    ))

       :component-will-unmount  (fn [node]
                                  (println ":component-will-unmount")
                                  (let [el (r/dom-node node)]
                                    (when (js/$.fn.DataTable.isDataTable el)
                                      (.destroy (.DataTable (js/$ el) (clj->js {:retrieve true})))
                                      (.empty (js/$ el)))))

       :display-name            "datatable-cljs"

       :should-component-update (fn [this old-argv new-argv]
                                  (println "should-component-update")
                                  true)

       :reagent-render
                                (fn [columns]
                                  (let [x (or (and @data (:data @data)) {:columns ["no data..."] :rows []})]
                                    (println "RENDERING" (:columns x))
                                    [:table {:id data-set :class "table table-striped table-hover" :data-att (prn-str (:columns x))}
                                     ]))})))