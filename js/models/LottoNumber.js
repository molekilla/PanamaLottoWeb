define(function(require) {
  var Backbone = require('backbone');
  var moment = require('moment');
  var LottoNumber = Backbone.Model.extend({

    initialize: function(model, options) {
    },

    parse: function(data) {
      moment.lang('es');
      data.momentDate = moment(data.fecha, 'DD-MM-YYYY');
      data.displayDate = data.momentDate.format('LL');
      data.dia = data.momentDate.format('dddd');
      return data;
    }
    
  });

  return LottoNumber;
});