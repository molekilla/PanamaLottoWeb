define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["recent"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n          "
    + escapeExpression(((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </a>\n        <span class=\"label label-default pull-right\">Dominical</span>\n        <span class=\"label label-primary pull-right\">Intermedio</span>\n      </h4>\n    </div>\n    <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n      <div class=\"panel-body\">   \n        asasass\n        assasa\n        asa\n        </div>\n        Odometer JS\n      </div>\n    </div>\n  </div>";
  return buffer;
  });

return this["JST"];

});