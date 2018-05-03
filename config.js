(function() {
    angular
      .module("fatApp")
      .config(function($routeProvider) {
        $routeProvider
          .when("/home", {
            template: "<home-component></home-component>"
          })
          .when("/tv", {
            template: "<tv-component></tv-component>"
          })
          .when("/film", {
            template: "<film-component></film-component>"
          })
          .when("/music", {
            template: "<music-component></music-component>"
          })
          .when("/team", {
            template: "<team-component></team-component>"  
          })
          .otherwise({
            redirectTo: "/home"
          });
      })
  })();