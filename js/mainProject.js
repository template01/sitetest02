var mainProject = (function(slug) {

    // alert(params)

    var getProjectContent = function(slug,level) {
        mainAjaxGetters.getParts('posts?filter[name]=' + slug)
            .success(function(data) {
                level
                    .empty()
                    .append(itemSingleWrapper(data[0]))
                    mainRoute.router.updatePageLinks()

            })
            .error(function() {
                console.log('error')
                level
                    .empty()
                    .append('There was an error!')
            });
    }

    var itemSingleContent = function(item) {
        return `<div class="padded">`+ item.content.rendered +`</div>`;
    }

    var checkIfArchive = function(){
      if(window.location.pathname.split("/").pop()==="archive"){
        return '<a href="/work" data-navigo> BACK</a>';
      }else{
        return '<a href="/" data-navigo> BACK</a>';
      }
    }

    var itemSingleWrapper = function(item) {
        return `<div id="projectItemSingle" >
                <div class="rotatedHeader pull-left">
                  <h1 class="fixed padded-sides flex distribute-content width-is-height">
                    `+checkIfArchive()+`
                    <span>`+item.title.rendered+`</span>
                  </h1>
                </div>
                <div class="border-left" id="projectItemSingleInner">
                  <h1 class="no-margin flex align-content-vertical-center border-bottom default-height padded-sides">
                    <span class="text-align-left">`+ item.title.rendered +`</span>
                    <span class="text-align-center">`+ item.date +`</span>
                    <span class="text-align-right">`+ item.category +`</span>
                  </h1>
                  `+itemSingleContent(item)+`
                </div>
              </div>`
    }




    var goTo = function(slug,level) {
        getProjectContent(slug,level)
    }

    return {
        goTo: goTo
    };
})();
