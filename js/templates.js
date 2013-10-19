define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["recent"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <label class=\"checkbox\">\n      <input type=\"checkbox\" id=\"category\" ";
  if (stack1 = helpers.checked) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.checked; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " value=\""
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    </label>\n    ";
  return buffer;
  }

  buffer += "  <div id=\"configurationDialog\" class=\"modal hide\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n      <h3>Categorias</h3>\n    </div>\n    <div class=\"modal-body\">\n    <p class=\"text-info\">Las siguientes categorias se crearan como carpetas en Dropbox (Apps/RecuerdamePagar). Asegurese subir sus facturas en formato PDF.</p>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.list || depth0.list),stack1 ? stack1.call(depth0, depth0.categories, options) : helperMissing.call(depth0, "list", depth0.categories, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div class=\"modal-footer\">\n      <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Salir</a>\n      <a href=\"#\" class=\"btn btn-primary\">Guardar cambios</a>\n    </div>\n  </div>";
  return buffer;
  });

return this["JST"];

});