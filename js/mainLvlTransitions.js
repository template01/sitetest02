var mainLvlTransitions = (function() {
    var levels = [1, 2, 3]

    var goToLvl = function(lvl) {

        eval('lvlHolder' + lvl)
            .removeClass('lvlInactive' + lvl)
            .addClass('lvlActive' + lvl)

        levelsFiltered = levels.filter(function(item) {
            return item !== lvl;
        });

        for (var i in levelsFiltered) {
            eval('lvlHolder' + levelsFiltered[i])
                .removeClass('lvlActive' + levelsFiltered[i])
                .addClass('lvlInactive' + levelsFiltered[i])
        }
    }

    var indexScrollMemory = 0

    var recallLvlScroll = function(scrollPos) {
      // timeout period is based on transition within mainLevels.sass
      window.setTimeout(function(){
        window.scroll({ top: scrollPos, left: 0, behavior: 'smooth' });
      },301)
    }


    return {
        indexScrollMemory: indexScrollMemory,
        recallLvlScroll: recallLvlScroll,
        goToLvl: goToLvl
    };
})();
