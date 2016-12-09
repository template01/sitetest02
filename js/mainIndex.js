var mainIndex = (function() {

    var indexSplashWrapper
    var indexStudioWrapper
    var indexImageSliderWrapper
    var indexFooterWrapper

    var renderIndexStructure = function() {

        var indexStructure = `
        <div id="">
          <div id="indexSplashWrapper"></div>
          <div id="indexStudioWrapper"></div>
          <div id="indexImageSliderWrapper"></div>
          <div id="indexFooterWrapper"></div>
        </div>
        `
        lvlHolder1
            .append(indexStructure)

        indexSplashWrapper = $("#indexSplashWrapper")
        indexStudioWrapper = $("#indexStudioWrapper")
        indexImageSliderWrapper = $("#indexImageSliderWrapper")
        indexFooterWrapper = $("#indexFooterWrapper")

    }



    var getIndexContent = function(target) {
        mainAjaxGetters.getParts('pages?filter[name]=index')
            .success(function(data) {
                indexImageSlider()
                indexSplashContent()
                indexFooterContent()
            })
            .error(function() {
                console.log('error')
                indexImageSliderWrapper
                    .append('There was an error!')
            });
    }


    var indexSplashContent = function() {

        mainAjaxGetters.getParts('posts')
            .success(function(data) {
                indexStudioWrapper
                    .append(`
                      <div class="col2">
                      <h1>Once you have made it to the box office and gotten your tickets, you are confronted with the problems of the theater itself. If you are in one of the run-down older theaters, you must adjust to the musty smell of seldom-cleaned carpets. Escaped springs lurk in the faded plush or cracked leather seats, and half the seats you sit in seem loose or tilted so that you sit at a strange angle. The newer twin and quad theaters offer their own problems. Sitting in an area only one-quarter the size of a regular theater, moviegoers often have to put up with the sound of the movie next door. This is especially jarring when the other movie involves racing cars or a karate war and you are trying to enjoy a quiet love story. And whether the theater is old or new, it will have floors that seem to be coated with rubber cement. By the end of a movie, shoes almost have to be pried off the floor because they have become sealed to a deadly compound of spilled soda, hardening bubble gum, and crushed Ju-Jubes.</h1>
                      </div>
                      <div class="col2 fullHeight">
                        <div class="row2">
                          <p>Once you have made it to the box office and gotten your tickets, you are confronted with the problems of the theater itself. If you are in one of the run-down older theaters, you must adjust to the musty smell of seldom-cleaned carpets. Escaped springs lurk in the faded plush or cracked leather seats, and half the seats you sit in seem loose or tilted so that you sit at a strange angle. The newer twin and quad theaters offer their own problems. Sitting in an area only one-quarter the size of a regular theater, moviegoers often have to put up with the sound of the movie next door. This is especially jarring when the other movie involves racing cars or a karate war and you are trying to enjoy a quiet love story. And whether the theater is old or new, it will have floors that seem to be coated with rubber cement. By the end of a movie, shoes almost have to be pried off the floor because they have become sealed to a deadly compound of spilled soda, hardening bubble gum, and crushed Ju-Jubes.</p>
                        </div>
                        <div class="row2">
                          <p>Once you have made it to the box office and gotten your tickets, you are confronted with the problems of the theater itself. If you are in one of the run-down older theaters, you must adjust to the musty smell of seldom-cleaned carpets. Escaped springs lurk in the faded plush or cracked leather seats, and half the seats you sit in seem loose or tilted so that you sit at a strange angle. The newer twin and quad theaters offer their own problems. Sitting in an area only one-quarter the size of a regular theater, moviegoers often have to put up with the sound of the movie next door. This is especially jarring when the other movie involves racing cars or a karate war and you are trying to enjoy a quiet love story. And whether the theater is old or new, it will have floors that seem to be coated with rubber cement. By the end of a movie, shoes almost have to be pried off the floor because they have become sealed to a deadly compound of spilled soda, hardening bubble gum, and crushed Ju-Jubes.</p>
                        </div>
                      </div>
                      `)

            })
            .error(function() {
                console.log('error')

            });

    }


        var indexFooterContent = function() {

            mainAjaxGetters.getParts('posts')
                .success(function(data) {
                    indexFooterWrapper
                        .append(`
                          <div class="col1">
                              <p>Once you have made it to the box office and gotten your tickets, you are confronted with the problems of the theater itself. If you are in one of the run-down older theaters, you must adjust to the musty smell of seldom-cleaned carpets. Escaped springs lurk in the faded plush or cracked leather seats, and half the seats you sit in seem loose or tilted so that you sit at a strange angle. The newer twin and quad theaters offer their own problems. Sitting in an area only one-quarter the size of a regular theater, moviegoers often have to put up with the sound of the movie next door. This is especially jarring when the other movie involves racing cars or a karate war and you are trying to enjoy a quiet love story. And whether the theater is old or new, it will have floors that seem to be coated with rubber cement. By the end of a movie, shoes almost have to be pried off the floor because they have become sealed to a deadly compound of spilled soda, hardening bubble gum, and crushed Ju-Jubes.</p>
                          </div>
                          `)

                })
                .error(function() {
                    console.log('error')

                });

        }


    var indexImageSlider = function() {

        mainAjaxGetters.getParts('posts')
            .success(function(data) {
                indexImageSliderWrapper
                    .append(loopItems(data))
            })
            .error(function() {
                console.log('error')

            });

        createWrapper = function(item) {
            return `<div class="imageSlideItem"  style='background-color:` + item.acf.backgroundcolor.split(':')[1] + `; background-image:url("` + item.acf.customfeaturedimage.url + `")'>
                      <div class="imageSlideItemHeader">
                        <h1>
                          <a href="work/` + item.slug + `" data-navigo-custom>` + item.title.rendered + `</a>
                        </h1>
                      </div>
                    </div>`;
        }

        loopItems = function(data) {
            return `<div id="indexImageSlider">` + data.map(createWrapper).join("") + `</div>`
        }

    }


    var unfixIndexImageSlider = function() {
        $('.imageSlideItem').css({
            "background-attachment": "initial"
        })
    }

    var fixIndexImageSlider = function() {
        $('.imageSlideItem').css({
            "background-attachment": "fixed"
        })
    }

    var indexScrollToProjectEvent = function() {
        $(document).on('click', 'a[data-navigo-custom]', function(e) {
            e.preventDefault()
            window.scroll({
                top: $(this).parents('.imageSlideItem').position().top,
                left: 0,
                behavior: 'smooth'
            });
            var thisSaved = $(this)
            window.setTimeout(function() {
                mainRoute.router.navigate(thisSaved.attr('href'));
            }, 500)
        })
    }

    var initIndex = function() {
        indexScrollToProjectEvent()
        renderIndexStructure()
        getIndexContent()
    }



    return {
        fixIndexImageSlider: fixIndexImageSlider,
        unfixIndexImageSlider: unfixIndexImageSlider,
        renderIndexStructure: renderIndexStructure,
        initIndex: initIndex
    };
})();
