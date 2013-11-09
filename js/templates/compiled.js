define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["history"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#c"
    + escapeExpression(((stack1 = depth0.cid),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          "
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.displayDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </a>\n        <span class=\"label label-success pull-right\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.tipo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n      </h3>\n    </div>\n    <div id=\"#c"
    + escapeExpression(((stack1 = depth0.cid),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"panel-collapse collapse in\">\n      <div class=\"panel-body\">   \n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-4\">Primer premio</div>\n          <div class=\"col-xs-6 col-sm-6\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.primero)),stack1 == null || stack1 === false ? stack1 : stack1.numero)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            <span class=\"label label-info\">Serie "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.primero)),stack1 == null || stack1 === false ? stack1 : stack1.serie)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            <span class=\"label label-info\">Folio "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.primero)),stack1 == null || stack1 === false ? stack1 : stack1.folio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            <span class=\"label label-info\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.primero)),stack1 == null || stack1 === false ? stack1 : stack1.letras)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-4\">Segundo premio</div>\n          <div class=\"col-xs-6 col-sm-6\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.segundo)),stack1 == null || stack1 === false ? stack1 : stack1.numero)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-4\">Tercer premio</div>\n          <div class=\"col-xs-6 col-sm-6\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.tercero)),stack1 == null || stack1 === false ? stack1 : stack1.numero)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
  return buffer;
  }

  buffer += "  ";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["recent"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\">\n          "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.displayDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </a>\n        <span class=\"label label-success pull-right\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.tipo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n      </h3>\n    </div>\n    <div class=\"panel-collapse collapse in\">\n      <div class=\"panel-body\">   \n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-4\">Primer premio</div>\n          <div class=\"col-xs-6 col-sm-6\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.primero)),stack1 == null || stack1 === false ? stack1 : stack1.numero)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            <span class=\"label label-info\">Serie "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.primero)),stack1 == null || stack1 === false ? stack1 : stack1.serie)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            <span class=\"label label-info\">Folio "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.primero)),stack1 == null || stack1 === false ? stack1 : stack1.folio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            <span class=\"label label-info\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.primero)),stack1 == null || stack1 === false ? stack1 : stack1.letras)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-4\">Segundo premio</div>\n          <div class=\"col-xs-6 col-sm-6\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.segundo)),stack1 == null || stack1 === false ? stack1 : stack1.numero)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-4\">Tercer premio</div>\n          <div class=\"col-xs-6 col-sm-6\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.tercero)),stack1 == null || stack1 === false ? stack1 : stack1.numero)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
  return buffer;
  });

return this["JST"];

});