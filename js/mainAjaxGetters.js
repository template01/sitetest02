var mainAjaxGetters = (function(){

  var wordpressUrl = 'http://api.template-studio.nl/'
  var apiUrl = wordpressUrl+'wp-json/wp/v2/'

  var getParts = function(apiQuery) {
    // apiQuery 'posts?filter[category_name]=wdka-pp-colophon'
      return $.ajax({

          url: apiUrl+apiQuery
      });
  }

  return  {
    // test: test
    getParts:getParts
  };
})();
