var mainIndex = (function() {

    var indexSplashWrapper
    var indexStudioWrapper
    var indexImageSliderWrapper
    var indexFooterWrapper

    var renderIndexStructure = function() {

        var indexStructure = `
        <div id="indexWrapper">
          <div id="indexSplashWrapper"></div>
          <div id="indexStudioWrapper"></div>
          <div id="indexImageSliderWrapper"></div>
        </div>
        `

        lvlHolder1
            .append(indexStructure)

        indexSplashWrapper = $("#indexSplashWrapper")
        indexStudioWrapper = $("#indexStudioWrapper")
        indexImageSliderWrapper = $("#indexImageSliderWrapper")
            // indexFooterWrapper = $("#indexFooterWrapper")

    }

    var indexStartstudioCam = function(target) {
        var timeoutPeriod = 800;
        var imageURI = 'http://template01.info/serverOnly/stillcam/checkFile.php';
        var x = 0,
            y = 0;
        var img = new Image();
        var setTimer;

        img.onload = function() {
            var canvas = document.getElementById(target);
            var context = canvas.getContext("2d");
            context.drawImage(img, x, y);
            setTimer = setTimeout(timedRefresh, timeoutPeriod);
        };

        function timedRefresh() {
            d = new Date();
            img.src = imageURI + '?' + d.getTime();
        }
        timedRefresh()

    }


    var indexResizestudioCam = function(target) {
        if ($('#' + 'indexStudioCamInner').parent().width() / $('#' + 'indexStudioCamInner').parent().height() > 16 / 9) {
            $('#' + target).css({
                'width': $('#' + target).parent().width() + 'px',
            })
        } else {
            $('#' + target).css({
                'height': $('#' + target).parent().height() + 'px',
                // 'margin-left': -$('#' + target).parent().width() / 4 + 'px',


            })
        }

    }


    var getIndexContent = function(target) {
        mainAjaxGetters.getParts('pages?filter[name]=index')
            .success(function(data) {
                indexSplashContent()
                indexImageSlider()
                indexStudioContent()
                    // indexFooterContent()
            })
            .error(function() {
                console.log('error')
                indexImageSliderWrapper
                    .append('There was an error!')
            });
    }


    var indexStudioContent = function() {

        mainAjaxGetters.getParts('posts')
            .success(function(data) {
                indexStudioWrapper
                    .append(`

                      <div class="col2 padded fullHeight">
                        <div class="row2">
                          <h1>Template is a visual design studio run by Lasse van den Bosch Christensen and Marlon Harder. Our work takes on any form of graphic design and digital development: from classic printed matter to web programming or a mix between the two.</h1>
                        </div>
                        <div class="row2">
                            <div id="" class="flex align-content-bottom"><p>Contact: <br>Write us at contact(at)template01.info, give us a call at +31 (0)6 57 77 28 91 or visit us at Rusthoflaan 56, 3034 XM Rotterdam, the Netherland We're also on Twitter and Github </p></div>
                        </div>
                      </div>
                      <div class="col2 fullHeight">
                        <div class="row2">
                          <div id="indexStudioCam" class="linkOuterParent noSmooth">
                            <canvas id="indexStudioCamInner" width="1920px" height="1080px" style="display:block;"></canvas>
                            <div class="rotatedHeader">
                              <h1>
                                <a href="/cam" data-navigo-custom="">Studio Camera</a>
                              </h1>
                            </div>

                          </div>
                        </div>
                        <div class="row2">
                          <p id="indexReadMore" class="blueBack  flex align-content-center alignTextCenter"><span onclick="mainIndex.indexScrollToFirst()">scroll down<br>or<br>
                          <span id="" class="linkOuterParent noSmooth">
                          <a href="/template" data-navigo-custom="">Read More</a>
                          </span>
                          </p>
                          </div>
                        </div>
                      </div>
                      `)
                mainIndex.indexStartstudioCam("indexStudioCamInner")
                mainIndex.indexResizestudioCam("indexStudioCamInner")
            })
            .error(function() {
                console.log('error')

            });

    }


    var indexSplashContent = function() {

        mainAjaxGetters.getParts('posts')
            .success(function(data) {
                indexSplashWrapper
                    .append(`
                      <div class="col2 padded fullHeight">
                        <div class="row2">
                          <h1>Template</h1>
                        </div>
                        <div class="row2">
                          <h1>Does:</h1>
                        </div>
                        </div>
                        <div class="col2 fullHeight">
                          <div id="" class="slashFrameWrapper">
                              <div id="splashFrame01" class="splashFrame flex align-content-center alignTextCenter blueBack">
                                <h1>Concept Development</h1>
                              </div>
                              <div id="splashFrame02" class="splashFrame flex align-content-center alignTextCenter redBack">
                                <h1>Identity Design</h1>
                              </div>
                              <div id="splashFrame03" class="splashFrame flex align-content-center alignTextCenter blueBack">
                                <h1>Graphic Design</h1>
                              </div>
                              <div id="splashFrame04" class="splashFrame flex align-content-center alignTextCenter redBack">
                                <h1>Programming</h1>
                              </div>
                          </div>
                        </div>
                      `)
                indexScrollSplashAway()
                cycleTroughSplashFrames()
            })
            .error(function() {
                console.log('error')

            });

    }

    var cycleTroughSplashFrames = function(){

      //
      // (function cycle() {
      //
      //     divs.eq(i).fadeIn(400)
      //               .delay(1000)
      //               .fadeOut(400, cycle);
      //
      //
      // })();

      var divs = $('.splashFrame'),
          i = 0;
      var timeout = 2100;
      var action = function() {
          // Do stuff here
            divs.eq(i).addClass('slideIn')
            var savedIterator= i
            setTimeout(function(){
              divs.eq(savedIterator).removeClass('slideIn')

            }, 3000);
            i = ++i % divs.length;

          setTimeout(action, timeout);
      };
      action();


    }

    var indexScrollSplashAway = function(){
      // left: 37, up: 38, right: 39, down: 40,
      // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
      var keys = {37: 1, 38: 1, 39: 1, 40: 1};

      function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
      }

      function preventDefaultForScrollKeys(e) {
          if (keys[e.keyCode]) {
              preventDefault(e);
              return false;
          }
      }

      function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
      }

      function enableScroll() {
          if (window.removeEventListener)
              window.removeEventListener('DOMMouseScroll', preventDefault, false);
          window.onmousewheel = document.onmousewheel = null;
          window.onwheel = null;
          window.ontouchmove = null;
          document.onkeydown = null;
      }

      $(window).scroll(function(){
        $(window).scrollTop(0)
        disableScroll()
        indexStudioWrapper.addClass('active')
        indexSplashWrapper.addClass('inActive')
        $(window).off("scroll");
        window.setTimeout(function(){
          enableScroll()
        },800)
      })
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
            return `<div class="imageSlideItem linkOuterParent"  style='background-color:` + item.acf.backgroundcolor.split(':')[1] + `; background-image:url("` + item.acf.customfeaturedimage.url + `")'>
                      <div class="rotatedHeader">
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
            if (!$(this).parents('.linkOuterParent').hasClass("noSmooth")) {

                window.scroll({
                    top: $(this).parents('.linkOuterParent').position().top,
                    left: 0,
                    behavior: 'smooth'
                });
                var thisSaved = $(this)
                if ($(this).parents('.linkOuterParent').offset().top - $(window).scrollTop() > $(window).height() - ($(window).height() / 1) || $(window).scrollTop() - $(this).parents('.linkOuterParent').offset().top > $(window).height() - ($(window).height() / 1)) {
                    window.setTimeout(function() {
                        mainRoute.router.navigate(thisSaved.attr('href'));
                    }, 500)
                } else {
                    window.setTimeout(function() {
                        mainRoute.router.navigate(thisSaved.attr('href'));
                    }, 50)
                }
            }else{
                  mainRoute.router.navigate( $(this).attr('href'));
            }


        })
    }

    var indexScrollToFirst = function(){
      window.scroll({
          top: $(window).height(),
          left: 0,
          behavior: 'smooth'
      });
    }


    //
    // var indexScrollOffsetSplash = function(){
    //   $(window).scroll(function(){
    //     // alert('yo')
    //     $('#indexFooterWrapper').outerHeight()
    //     if(window.scrollY + $(window).height() >= $('#indexFooterWrapper').offset().top){
    //       // alert('hey')
    //       console.log(window.scrollY + $(window).height() -  $('#indexFooterWrapper').offset().top)
    //       $("#indexStudioWrapper").css({'top':'-'+(window.scrollY + $(window).height() -  $('#indexFooterWrapper').offset().top)+'px'})
    //     }
    //   })
    // }

    var initIndex = function() {
        indexScrollToProjectEvent()
        renderIndexStructure()
        getIndexContent()
            // indexScrollOffsetSplash()
    }



    return {
        fixIndexImageSlider: fixIndexImageSlider,
        unfixIndexImageSlider: unfixIndexImageSlider,
        renderIndexStructure: renderIndexStructure,
        initIndex: initIndex,
        indexStartstudioCam: indexStartstudioCam,
        indexResizestudioCam: indexResizestudioCam,
        indexScrollToFirst:indexScrollToFirst
    };
})();
