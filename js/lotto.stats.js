var lottoStats = (function() {
	
	return {
		
		prepareDataset: function(rawdata) {
			var x = 0;
			var max = rawdata.length;
			var calculatedFrecuency = [];
			for (x = 0; x < 10; x++) {
			    var records = this.where(rawdata, x);
			    if (records.length > 0) {
			        var percentage = (records.length / max) * 100;
			        calculatedFrecuency.push(
			        		{
			        			key: x, 
			        			value:  Math.round(percentage, 2)
			        		});
			    }
			}
			return calculatedFrecuency;
		},
		
		where: function(list, match) {
		    var foundValues = [];
		    var r = 0;
		    for (r = 0; r < list.length; r++) {
		        if (list[r] == match) {
		            foundValues.push(list[r]);
		        }
		    }
		    return foundValues;
		},
		
		frecuency: function(lottoItems) {
			var terms = [];
			
			for (i=0;i<lottoItems.length;i++)
		    {
				var lottoItem = lottoItems[i];
				terms.push([lottoItem.first, lottoItem.second, lottoItem.third]);
		    }			

			// 1. Get last two and add to lastNumberList, 
			//and get first two and add to first number list
			var lastFList = [];
			var firstFList = [];

			for (i = 0; i < terms.length; i++) {
			    var data = terms[i];
			    
			    for (j = 0; j < data.length; j++) {
			        var number = data[j];
			        if (number.length == 4) {
			            var last = number.substring(2, 3);//.substring(0, 1);
			            var first = number.substring(0, 2).substring(0, 1);
			            lastFList.push(last);
			            firstFList.push(first);
			        }
			        else {
			            lastFList.push(number.substring(0, 1));
			            firstFList.push(number.substring(0, 1));
			        }
			    }
			}

			var graphDataSet = {firstSet: null, secondSet: null};
			graphDataSet.firstSet = this.prepareDataset(firstFList);
			graphDataSet.secondSet = this.prepareDataset(lastFList);
			
			return graphDataSet;
		}
	}
})();

