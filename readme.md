### Credit Swiss Home Assignment - The Hipster Jeans Company

#### 1. Functionality of solution

The Hipster Jeans Company UI has been implemented as a SPA (single page application)
based of [reframe](https://github.com/Day8/re-frame) framework. Additionally I make use of several additional
libraries. The most important being [DataTables](https://datatables.net/) jQuery plug-in, which provides a
 visual component for displaying tables with pagination and full text search.
Another important library is [test.check](https://github.com/clojure/test.check) which is a Clojure
property-based testing tool. I have use test.check for both testing and test data API generation.

The application itself is very simple. The more involved part was the integration of imperative DataTables
jQuery plug-in with the ReactJS ecosystem. This is realised as a reagent wrapper ( see: `re-hipster-jeans.components.datatables` )
Another nontrivial part was generating the API data.
The underlying records are generated with test.check generators ( see `re-hipster-jeans.api-data-generator` )
Then series of transformations are grouping them and aggregate the top results in each groups.


#### 2. Reasons/justification for library choices

The reason for choosing reframe framework is mainly motivated by the prior conversation with James Cross,
on which we have discussed his project needs, where ClojureScript SPA framework was discussed as a potential choice.
DataTables it is very natural fit for presentation of tabular data.
The application been created with [re-frame-template](https://github.com/Day8/re-frame-template)

#### 3. Data format and API protocol
The data itself is provided as a static resources holding the result of aggregation queries on the underlying records.
The format I choose is [edn](https://github.com/edn-format/edn) which is as natural to Clojure as json is to JavaScript.
The extended data notation supports a rich set of built-in elements, and the definition of extension elements in terms of the others,
which serves as a very flexible protocol for custom data types beyond lists and maps of primitives.

#### 4. Running

* Building and running the applicatione requires [leiningen](https://leiningen.org/)
* To run the application plese execute `lein figwheel dev` in the terminal, you should see the following output:

    Figwheel: Cleaning because dependencies changed
    Figwheel: Cutting some fruit, just a sec ...
    Figwheel: Validating the configuration found in project.clj
    Figwheel: Configuration Valid :)
    Figwheel: Starting server at http://0.0.0.0:3449
    Figwheel: Watching build - dev
    Figwheel: Cleaning build - dev
    Compiling "resources/public/js/compiled/app.js" from ["src/cljs"]...
    Successfully compiled "resources/public/js/compiled/app.js" in 19.293 seconds.
    Figwheel: Starting CSS Watcher for paths  ["resources/public/css"]
    Launching ClojureScript REPL for build: dev
    Figwheel Controls:
              (stop-autobuild)                ;; stops Figwheel autobuilder
              (start-autobuild [id ...])      ;; starts autobuilder focused on optional ids
              (switch-to-build id ...)        ;; switches autobuilder to different build
              (reset-autobuild)               ;; stops, cleans, and starts autobuilder
              (reload-config)                 ;; reloads build config and resets autobuild
              (build-once [id ...])           ;; builds source one time
              (clean-builds [id ..])          ;; deletes compiled cljs target files
              (print-config [id ...])         ;; prints out build configurations
              (fig-status)                    ;; displays current state of system
      Switch REPL build focus:
              :cljs/quit                      ;; allows you to switch REPL to another build
        Docs: (doc function-name-here)
        Exit: Control+C or :cljs/quit
     Results: Stored in vars *1, *2, *3, *e holds last exception object
    Prompt will show when Figwheel connects to your application
    To quit, type: :cljs/quit
    cljs.user=>

* navigate to http://0.0.0.0:3449 to see the actual webapplication in action

* to generate new set of data please execute `lein genapi` this will generate the following resources:

    public
    └── api_sham
        ├── top-selling-manufacturers-by-gender-and-country.edn
        ├── top-selling-months-by-country.edn
        └── top-selling-sizes-by-country.edn

which serves as an API for the web application

* `lein test` executes a test verifying if the top record of given group is greater or equal to other records
     from the same group.
