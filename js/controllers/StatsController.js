$('#statsPage').live('pagecreate', function() {
    window.StatsController = Spine.Controller.create({
        proxied: ["render"],

        init: function(){
            // var recentLotto = this;
        },                     
       
        drawGraph: function(set, id, title) {
    		var y = "";
        	var label = "";
        	var i;
        	
    		for (i=0;i<10;i++)
    	    {
    		 var item = set[i];
    		 if ( item == null )
    	     {
    			y += ",_" 
    	     } else {
    		 if ( i == 0 )
    	     {
    		   y += item.value;
    		   //label += item.value + '%25';
    	     }
    		 else {
    			y = y + ',' + item.value;
    			//label = label + '|' + item.value + '%25';
    		 }
    	     }
    	   }
    	   
    		//  174FD1|EFDD52|0C6738|2AB3D7|59E211|C28F15|FF5DC0|C40A0B"
    		var color1 = "C40A0B";
    		var color2 = "0C6738";
    		var color3 = "FFC6A5|FFFF42|DEF3BD|00A5C6|DEBDDE|2AB3D7|59E211|C28F15|FF5DC0|C40A0B";
    		var useColor;
    		if ( title.substring(0,1) == "1" )
    			{
    			useColor = color1;
    			} else {
    				useColor = color2;
    			}
    	
    		
        	$(id).attr('src',
            		"http://chart.apis.google.com/chart?chs=285x220&"
        			+ "chxt=y&chbh=a&chxt=x,y&cht=bvg&chds=a&chm=N*f*%,000000,0,-1,11" 
        			+ "&chd=t:" +  y
        		
            		
            		+ "&chco=" + color3
            		+ "&chtt=" + title + "+Decenas+M%C3%A1s+Jugadas")	;
    	},
        render: function() {
        	var dbItems = LottoItem.all();
        	var sinceDate = dbItems[0];
        	var dataset = lottoStats.frecuency(dbItems);
        	$('#since').text(sinceDate.lottoDate);
        	this.drawGraph(dataset.firstSet, '#staticChart1','1ra');
        	this.drawGraph(dataset.secondSet, '#staticChart2','2da');

        }
    });
})