require.config({
    paths: {
      "jquery": ["vendor/jquery/jquery"],
      "underscore": "vendor/underscore/underscore-min",
      "backbone": "vendor/backbone/backbone-min",
      "handlebars": "vendor/handlebars/handlebars",
      "bootstrap": "vendor/bootstrap/dist/js/bootstrap.min",
      "moment" : "vendor/momentjs/min/moment-with-langs.min"
    },
    shim: {
      'underscore': {
         'exports': '_'
       },
       'backbone': {
         'deps': ['jquery', 'underscore'],
         'exports': 'Backbone'
       },
       'handlebars': {
         'exports': 'Handlebars'
       },
       'bootstrap' : {
        'deps' : ['jquery'],
        'exports' : 'bs'
       }
    },
    waitSeconds: 8
});
//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery', 'underscore', 'backbone', 'app', 'bootstrap'], function(jquery, _, Backbone, App, bs){
  var app = new App();
  app.init();
});