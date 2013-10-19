define(function(require) {
  var Backbone = require('backbone');
  var Templates = require('templates/compiled');
  var Recent = Backbone.View.extend({
    initialize: function(model, options) {
    },

    // events: {
    //   "click .btn-primary" : "saveChanges"
    // },

    template: Templates.recent,

    initialize: function(options) {
      // this.collection = new App.Collections.Categories(null, { dirs: options.dirs });
      // this.parent = options.parent;
      // //this.listenTo(this.collection, "change", this.render);
      // //this.listenTo(this.collection, "reset", this.render);
      // Handlebars.registerHelper('list', function(items, options) {
      //   var out = "";

      //   for(var i=0, l=items.length; i<l; i++) {
      //     var model = items[i];
      //     _.extend(model, {
      //       checked: model.get("exists") ? "checked" : ""
      //     });
      //     out = out + options.fn(model);
      //   }
      //   return out;
      // });

    },

    render: function() {
      var model = {
        title: 'test'
      };
      this.$el.html(this.template({ model: model }));
      // var self = this;
      // self.$el.html(self.template({ categories: self.collection.models }));
      // this.collection.fetch({
      //   headers: this.collection.appHeaders,
      //   success: function(model) {
      //     self.$el.html(self.template({ categories: self.collection.models }));
      //   }
      // });
      return this;
    }    
  });

  return Recent;
});