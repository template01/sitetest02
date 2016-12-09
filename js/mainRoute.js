var mainRoute = (function() {


    var router = new Navigo(root = null, useHash = false);

    var ranIndex = false

    var setUpRoutes = function() {

        router
            .on({

                'work/:slug': function(params) {
                  // window.setTimeout(function(){
                    mainIndex.unfixIndexImageSlider()
                    mainLvlTransitions.indexScrollMemory = window.scrollY
                    mainSub.initSub(params.slug)
                    mainLvlTransitions.goToLvl(2)
                  // },300)

                },
                '*': function() {
                    if(!ranIndex){
                      mainIndex.initIndex()
                      ranIndex = true
                    }
                    mainLvlTransitions.goToLvl(1)
                    mainIndex.fixIndexImageSlider()
                    mainLvlTransitions.recallLvlScroll(mainLvlTransitions.indexScrollMemory)

                }
            })
            .resolve();


    }

    var initRouter = function() {
        setUpRoutes()
    }

    return {
        setUpRoutes: setUpRoutes,
        initRouter: initRouter,
        router: router
    };
})();
