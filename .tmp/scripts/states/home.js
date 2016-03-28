/**
 * 默认的产品首页和默认的跳转规则
 */
define(['./states', '../cons/simpleCons','../controllers/homeController'],
  function (stateModule, cons) {
    stateModule.config(
        ['$stateProvider', '$urlRouterProvider',
          function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/');

            $stateProvider
                .state("home", {
                  url: "/",
                  controller: 'homeController',
                  templateUrl: cons.VIEW_PATH + 'home.html'
                })
                .state("view1", {
                  url: "/view1",
                  controller: 'view1Controller',
                  templateUrl: cons.VIEW_PATH + 'view1.html'
                })
                .state("about", {
                  url: "/about",
                  controller: 'aboutController',
                  templateUrl: cons.VIEW_PATH + 'about.html'
                })
                .state("contact", {
                  url: "/contact",
                  controller: 'contactController',
                  templateUrl: cons.VIEW_PATH + 'contact.html'
                })
                .state("post", {
                  url: "/post/:idPost",
                  controller: 'postController',
                  templateUrl: cons.VIEW_PATH + 'post.html'
                })
                ;

          }])
  })