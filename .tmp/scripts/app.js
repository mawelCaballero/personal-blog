define([
  'angular',
  'ui.router',
   './controllers/_base',
  './states/_base',
  './directives/_base',
  './filters/_base',
  './services/_base',
  './app-tpl'
],function(){
  return angular.module('mawelsApp',[
    'ui.router',
    'app.tpl',
    'app.mawelsControllers',
    'app.mawelsStates',
    'app.mawelsDirectives',
    'app.mawelsFilters',
    'app.mawelsServices'
  ]);
});