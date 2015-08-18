var routerModule = (function(){
	
	var routes = {},
		  el = null;

  function route (path, templateId) {
      routes[path] = {templateId: templateId};
  }

  function tmpl(str){
	  return document.getElementById(str).innerHTML
	};

  function router () {
    // Current route url (getting rid of '#' in hash as well):
    var url = location.hash.slice(1) || '/',
        route = routes[url];
      
    // Lazy load view element:
    el = el || document.getElementById('view');
       
    // Render route template 
    el.innerHTML = tmpl(route.templateId);
  }

  // Listen on hash change:
  window.addEventListener('hashchange', router);
  // Listen on page load:
  window.addEventListener('load', router);

  return {
    route : route
  }

})();

$(function(){

	//Set Routes

	routerModule.route('/', 'schedule');
  routerModule.route('/my-game', 'my-game');
  routerModule.route('/plays', 'plays');
  routerModule.route('/leaderboard', 'leaderboard');
  routerModule.route('/help', 'help');
  
})


	
