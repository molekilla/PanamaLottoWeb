$('#historyPage').live('pagecreate', function() {
    window.HistoryController = Spine.Controller.create({
        el: $("#historyList"),        
        proxied: ["render","add"],

        init: function(){
            var recentLotto = this;
        },                     
       
        render: function(){
        	var lottoItems = this.items.reverse();
        	var lottoCalendar = {};
        	for (var i=0;i<lottoItems.length;i++)
        	{
        		var item = lottoItems[i];
        		var key = item.monthYearKey(); // month + year;
        		if (lottoCalendar[key] == undefined )
        	    {
        	           lottoCalendar[key] = new Array();
        	    }
        	    lottoCalendar[key].push(item);
        	}
        	
          	// create html
        	for (key in lottoCalendar)
        	{
        		var header = { header: lottoCalendar[key][0].historyMonthLabel() };
        		$("#historyItemHeaderTemplate").tmpl(header).appendTo(this.el);
        		$("#historyListTemplate").tmpl(lottoCalendar[key]).appendTo(this.el);
        	}
        	//this.el.listview('refresh');
        	// $("#historyListTemplate").tmpl(numbers)

            // this.el.html(htmlData);
        },
        
        add: function(items) {
            this.items = items;
        }
    });
})