var mainProject = (function(slug) {

    // alert(params)

    var getProjectContent = function(slug,level) {
        mainAjaxGetters.getParts('posts?filter[name]=' + slug)
            .success(function(data) {
                level
                    .empty()
                    .append("<h1 id='splash'>" + slug + "</h1>")
                    .append(data[0].content.rendered)
            })
            .error(function() {
                console.log('error')
                level
                    .empty()
                    .append('There was an error!')
            });
    }

    var goTo = function(slug,level) {
        getProjectContent(slug,level)
    }

    return {
        goTo: goTo
    };
})();
