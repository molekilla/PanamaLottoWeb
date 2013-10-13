define(function(require) {
    var Backbone = require('backbone');
    var Router = Backbone.Router.extend({
      initialize: function(options) {
      },

      routes: {
        "" : "index"
      },

      index: function(options) {
        console.log(options);
        // var index = new App.Views.Index({
        //   collection: new App.Collections.Invoices(null, { dirs: this.directories }),
        //   el: this.parent });

        // index.collection.fetch({
        //   headers: index.collection.appHeaders,
        //   data: { category: "all" },
        //   success: function() {
        //     index.collection.reset(index.collection.models);
        //     //index.render();
        //   }
        // });
      }
    });

    return Router;
});