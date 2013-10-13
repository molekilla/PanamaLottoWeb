define(function(require) {
    var Backbone = require('backbone');
    var MainRouter = require('routers/main');
    var App = {
      init: function() {
        new MainRouter();
        Backbone.history.start();
      }
    };

    //Define this module as exporting a function
    return function() {
      return App;
    };
});