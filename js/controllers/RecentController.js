$('#recentPage').live('pagecreate', function() {
    window.RecentController = Spine.Controller.create({
        el: $("#mostRecentLotto"),
        proxied: ["render","add"],

        init: function(){
            var recentLotto = this;
        },                     
       
        render: function(){
            var output = $("#recentItemTemplate").tmpl(this.item);
            this.el.html(output);
            // this.renderStaticGraph();
        },
        renderStaticGraph: function() {
        	var dataset = lottoStats.frecuency(LottoItem.all());
 
        	// First Set
        	var drawGraph = function(set, id, title) {
        		var y = "";
            	var label = "";
            	var i;
            	
        		for (i=0;i<set.length;i++)
        	    {
        		 var item = set[i];
        		 if ( i == 0 )
        	     {
        		   y += item.key;
        		   label += item.value + '%25';
        	     }
        		 else {
        			y = y + '|' + item.key;
        			label = label + '|' + item.value + '%25';
        		 }
        	   }
        	   
            	$(id).attr('src',
                		"http://chart.apis.google.com/chart?chs=255x200&cht=p&chd=s:ZSTXTMOemo"
                		+ "&chdl=" + y
                		+ "&chl=" + label
                		+ "&chco=174FD1|EFDD52|0C6738|2AB3D7|59E211|C28F15|FF5DC0|C40A0B|C7B4D3"
                		+ "&chtt=" + title + "+Decenas+M%C3%A1s+Jugadas")	;
        	};
        	
        	drawGraph(dataset.firstSet, '#staticChart1','1ra');
        	drawGraph(dataset.secondSet, '#staticChart2','2da');

        },
		
        add: function(item) {
            this.item = item;
        }
    });
})