var mainLvlTransitions = (function() {
    var levels = [1, 2, 3]

    var goToLvl = function(lvl) {

        if(lvl === 3){
          console.log('lvl3')

          eval('lvlHolder' + lvl)
              .removeClass('lvlInactiveThird' + lvl)
              .addClass('lvlActiveThird' + lvl)
              .removeClass('lvlInactive' + lvl)
              .removeClass('lvlActive' + lvl)


          levelsFiltered = levels.filter(function(item) {
              return item !== lvl;
          });

          for (var i in levelsFiltered) {
              eval('lvlHolder' + levelsFiltered[i])
                  .removeClass('lvlActiveThird' + levelsFiltered[i])
                  .addClass('lvlInactiveThird' + levelsFiltered[i])
                  .removeClass('lvlInactive' + levelsFiltered[i])
                  .removeClass('lvlActive' + levelsFiltered[i])

          }


        }else{

          eval('lvlHolder' + lvl)
              .removeClass('lvlInactive' + lvl)
              .addClass('lvlActive' + lvl)
              .removeClass('lvlInactiveThird' + lvl)
              .removeClass('lvlActiveThird' + lvl)


          levelsFiltered = levels.filter(function(item) {
              return item !== lvl;
          });

          for (var i in levelsFiltered) {
              eval('lvlHolder' + levelsFiltered[i])
                  .removeClass('lvlActive' + levelsFiltered[i])
                  .addClass('lvlInactive' + levelsFiltered[i])
                  .removeClass('lvlInactiveThird' + levelsFiltered[i])
                  .removeClass('lvlActiveThird' + levelsFiltered[i])

          }

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
