(ns re-hipster-jeans.views
  (:require [re-frame.core :as re-frame]
            [re-hipster-jeans.components.datatables :refer [datatable]]
            [markdown.core :refer [md->html]]))

;; home


(defn home-panel []
  (fn []
    [:div [:h1 "The Hipster Jeans Company"]
     [:div "This is a solution to home assigment"]
     [:div "Use the navigation to see different data sets"]]))

(defn top-selling-manufacturers-panel []
  (fn []
    [:div [:h1 "Top manufacturers by gender and country"]
     [:div [datatable :top-selling-manufacturers-by-gender-and-country ["abc"]]]]))

(defn top-selling-months-panel []
  (fn []
    [:div [:h1 "Top months by country"]
     [:div [datatable :top-selling-months-by-country ["abc"]]]]))

(defn top-selling-sizes-panel []
  (fn []
    [:div [:h1 "Top sizes by country"]
     [:div [datatable :top-selling-sizes-by-country ["abc"]]]]))

(defn about-panel []
  (let [md (re-frame/subscribe [:about-md])]
    (fn []
      [:div {:dangerouslySetInnerHTML {:__html (md->html @md)}}
       ])))

(defn readme-panel []
  (let [md (re-frame/subscribe [:readme-md])]
    (fn []
      [:div {:dangerouslySetInnerHTML {:__html (md->html @md)}}
       ])))

;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    :readme-panel [readme-panel]
    :top-selling-manufacturers-panel [top-selling-manufacturers-panel]
    :top-selling-months-panel [top-selling-months-panel]
    :top-selling-sizes-panel [top-selling-sizes-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [show-panel @active-panel])))
