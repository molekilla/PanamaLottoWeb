define(function(require) {
    var Backbone = require('backbone');
    var LottoNumber = require('models/LottoNumber');
    var LottoNumberCollection = Backbone.Collection.extend({

      url: 'http://panamenio.herokuapp.com/api/gob/loteria/numeros',

      model: LottoNumber,

      initialize: function(models, options) {
      },

      parse: function(data) {
        return data.sorteos;
      }

    });

    return LottoNumberCollection;
});