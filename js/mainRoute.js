var mainRoute = (function() {


    var router = new Navigo(root = null, useHash = false);

    var ranIndex = false

    var setUpRoutes = function() {

        router
            .on({

                'work/:slug/:action': function(params,query) {
                    mainIndex.unfixIndexImageSlider()
                    mainLvlTransitions.indexScrollMemory = window.scrollY
                    mainProject.goTo(params.slug,lvlHolder3)
                    mainLvlTransitions.goToLvl(3)

                },
                'work/:slug': function(params,query) {
                    mainIndex.unfixIndexImageSlider()
                    mainLvlTransitions.indexScrollMemory = window.scrollY
                    mainProject.goTo(params.slug,lvlHolder2)
                    mainLvlTransitions.goToLvl(2)

                },
                'work/': function(params) {
                    // mainIndex.unfixIndexImageSlider()
                    // mainLvlTransitions.indexScrollMemory = window.scrollY
                    mainProjectList.renderList()
                    mainLvlTransitions.goToLvl(2)

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
