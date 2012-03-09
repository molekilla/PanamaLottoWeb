// create model
var LottoItem = Spine.Model.setup("LottoItem", ["first", "second", "third", "serie","folio","letras","lottoDate","lottoType"]);

// Persist model between page reloads.
LottoItem.extend(Spine.Model.Local);

// Instance methods
LottoItem.include({
    // 
    label: function() {
        var lottoDateTyped = Date.parseExact(this.lottoDate, 'dd-MM-yyyy');
        return this.lottoType + 
        ' - ' + 
        lottoDateTyped.toString('dd') + 
        ' de ' + 
        lottoDateTyped.toString('MMMM') + 
        ' de ' + 
        lottoDateTyped.toString('yyyy');
    },
    
    historyLabel: function() {
        var lottoDateTyped = Date.parseExact(this.lottoDate, 'dd-MM-yyyy');
        return lottoDateTyped.toString('dddd dd');
    }, 
    monthYearKey: function() {
    	 var lottoDateTyped = Date.parseExact(this.lottoDate, 'dd-MM-yyyy');
         return lottoDateTyped.toString('MMyyyy');
    },
    historyMonthLabel: function() {
   	    var lottoDateTyped = Date.parseExact(this.lottoDate, 'dd-MM-yyyy');
        return lottoDateTyped.toString('MMMM yyyy');
   }
});

    
    // total: function() {
        // return (this.price * this.quantity);
    // },
    
    // increase: function(quantity) {
        // quantity = (typeof(quantity) != 'undefined') ? quantity : 1;
        // this.quantity = this.quantity + quantity;
        // this.save();
    // },
    
    // decrease: function(quantity) {
        // quantity = (typeof(quantity) != 'undefined') ? quantity : 1;
        // if (this.quantity >= quantity) {
            // this.quantity = this.quantity - quantity;
        // }
        // else {
            // this.quantity = 0;
        // }
        // this.save();
    // },