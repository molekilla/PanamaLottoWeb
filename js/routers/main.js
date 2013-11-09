define(function(require) {
    var Backbone = require('backbone');
    var RecentView = require('views/recent');
    var HistoryView = require('views/history');
    var LottoNumbers = require('collections/LottoNumberCollection');
    var Router = Backbone.Router.extend({
      
      initialize: function(options) {
        this.collection = new LottoNumbers();
      },

      routes: {
        "" : "index"
      },

      index: function(options) {
        var self = this;
        var history = new HistoryView({ collection: self.collection, el: $(".history") });
        this.collection.fetch({
          dataType: "jsonp",
          success: function() {
            var view = new RecentView({ collection: self.collection, el: $(".recent") });
            console.log(options);
            view.render();
          },
          error: function(err) {
            console.log(err);
          }
        });
      }
    });

    return Router;
});