define(function(require) {
  var Backbone = require('backbone');
  var Templates = require('templates/compiled');
  var moment = require('moment');

  var History = Backbone.View.extend({

    initialize: function(model, options) {
    },
    events: {
      "click .btn-default" : "render"
    },
    
    template: Templates.history,

    render: function() {
      var self = this;
      // current collection, initial only
      var currentSet = _.initial(this.collection.models);
      var previousMonth = moment().startOf('month').subtract('days', 1);

      // fetch next items
      this.collection.fetch({
        data: {
          month: previousMonth.month(),
          year: previousMonth.year()
        },
        dataType: "jsonp",
        success: function(collection) {
          currentSet = currentSet.concat(collection.models.reverse());
          self.$el.html(self.template({ models: currentSet }));
        },
        error: function(err) {
          console.log(err);
        }
      });

      // this.$el.prepend(this.template({ models: currentSet }));
      // this.$el.html(this.template({ models: currentSet }));
      return this;
    }

  });

  return History;
});