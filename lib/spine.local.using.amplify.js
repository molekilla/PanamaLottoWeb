(function() {
  if (typeof Spine === "undefined" || Spine === null) {
    Spine = require("spine");
  }
  Spine.Model.Local = {
    extended: function() {
      this.change(this.saveLocal);
      return this.fetch(this.loadLocal);
    },
    saveLocal: function() {
      var result;
      //result = JSON.stringify(this);
      //return localStorage[this.className] = result;
      return amplify.store(this.className, this);
    },
    loadLocal: function() {
      var result;
      result = amplify.store(this.className);
      return this.refresh(result || [], {
        clear: true
      });
    }
  };
  if (typeof module !== "undefined" && module !== null) {
    module.exports = Spine.Model.Local;
  }
}).call(this);
