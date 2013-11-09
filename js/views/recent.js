define(function(require) {
  var Backbone = require('backbone');
  var Templates = require('templates/compiled');
  var Recent = Backbone.View.extend({

    initialize: function(model, options) {
    },
    
    template: Templates.recent,

    render: function() {
      this.$el.html(this.template({ model: _.last(this.collection.models) }));
      return this;
    }

  });

  return Recent;
});