var mainMenu = (function() {

    var renderMainMenu = function() {
      app.prepend(`
      <a href="/work" data-navigo>About</a>
      <a href="/test" data-navigo>About</a>
  	  <a href="/" data-navigo>home</a>
      `)


    }

    var initMenu = function() {
        renderMainMenu()
    }

    return {
        initMenu: initMenu
    };
})();
