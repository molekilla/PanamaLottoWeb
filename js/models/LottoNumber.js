define(function(require) {
  var Backbone = require('backbone');
  var LottoNumber = Backbone.Model.extend({

    url: 'http://panamenio.herokuapp.com/api/gob/loteria/numeros',

    model: LottoNumber,

    initialize: function(model, options) {
    }
    
  });

  return LottoNumber;
});