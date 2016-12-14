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
            <div class="rotatedHeader">
              <h1 class="fixed">
                <a href="/" data-navigo> back</a>
              </h1>
            </div>
            <div>
            <div class="padded-sides border-bottom"><h1 class="flex distribute-content no-margin">`+
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
