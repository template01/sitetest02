var mainProjectList = (function() {

    // alert(params)

    var renderList = function() {
        mainAjaxGetters.getParts('posts?')
            .success(function(data) {
                lvlHolder2
                    .empty()
                    // .append("<h1 id='splash'>" + slug + "</h1>")
                    .append(loopItems(data))
                    mainRoute.router.updatePageLinks()
            })
            .error(function() {
                console.log('error')
                lvlHolder2
                    .empty()
                    .append('There was an error!')
            });
    }

    var itemWrapper = function(item) {
        return `<div class="padded border-bottom">
                    <h1>
                      <a class="flex distribute-content" href="work/` + item.slug + `/archive" data-navigo>`+
                      `<span class="text-align-left">`+ item.title.rendered +`</span>`+
                      `<span class="text-align-center">`+ item.date +`</span>`+
                      `<span class="text-align-right">`+ item.category +`</span>`+
                      `</a>
                    </h1>
                </div>`;
    }

    var loopItems = function(data) {
        return `<div id="projectList" >
            <div class="rotatedHeader pull-left force-rotated-header-border">
              <h1 class="fixed padded-sides flex distribute-content width-is-height">
                <a href="/" data-navigo> BACK</a>
                <a href="/" data-navigo> WORK LIST</a>
              </h1>
            </div>
            <div id="innerList">
            <div class="padded-sides border-bottom"><h1 class="flex default-height distribute-content no-margin align-content-center">`+
            `<span class="text-align-left">Title</span>`+
            `<span class="text-align-center">Time</span>`+
            `<span class="text-align-right">Type</span>`+
            `</h1></div>`+
            data.map(itemWrapper).join("") +
            `</div>`+
          `</div>`
    }

    return {
        renderList: renderList
    };
})();
