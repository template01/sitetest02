var mainSub = (function(slug) {

    // alert(params)

    var getSubContent = function(slug) {
        mainAjaxGetters.getParts('posts?filter[name]=' + slug)
            .success(function(data) {
                lvlHolder2
                    .empty()
                    .append("<h1 id='splash'>" + slug + "</h1>")
                    .append(data[0].content.rendered)
            })
            .error(function() {
                console.log('error')
                lvlHolder2
                    .empty()
                    .append('There was an error!')
            });
    }

    var initSub = function(slug) {
        getSubContent(slug)
    }

    return {
        initSub: initSub
    };
})();
