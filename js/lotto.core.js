// Lotto Main js 
    //var URL = "http://query.yahooapis.com/v1/public/yql/LNB/LNB2?format=json";
var URL = 'http://localhost:3000/api/gob/loteria/numeros'


    // index page 
	$('#indexPage').live('pagecreate',function(event, ui) {    
		$('#refreshData12').live('click', function(event, ui) {
	        $.mobile.loadingMessage = "Cargando datos...";
	        $.mobile.showPageLoadingMsg();
	        LottoItem.deleteAll();   
			lottoCore.syncMonths(12);
		});
		$('#refreshData04').live('click', function(event, ui) {
	        $.mobile.loadingMessage = "Cargando datos...";
	        $.mobile.showPageLoadingMsg();
	        LottoItem.deleteAll();   
			lottoCore.syncMonths(4);
		});
		$('#refreshData06').live('click', function(event, ui) {
	        $.mobile.loadingMessage = "Cargando datos...";
	        $.mobile.showPageLoadingMsg();
	        LottoItem.deleteAll();   
			lottoCore.syncMonths(6);
		});
    });   
	

        
    // recent page 
	$('#recentPage').live('pageshow',function(event, ui) {    
        $.mobile.loadingMessage = "Cargando datos...";
        $.mobile.showPageLoadingMsg();
        
        if ( LottoItem.count() > 0 )
        {
            setTimeout(function() {
                $.mobile.hidePageLoadingMsg();
                }, 500);
        }
    });    

    $('#statsPage').live('pagecreate', function()
    		{ 
                LottoItem.fetch();
                amplify.subscribe('onReadAndSyncLottoDataReady', function() {
                	lottoCore.renderStaticGraph();
                });        
                
                if ( !lottoCore.useLocalStorage() )
                {
                    $.ajax(
                        {
                            type: 'GET',
                            url: URL, 
                            dataType: 'jsonp',
                            success: lottoCore.readAndSyncLottoData,
                            error: function(xhr, status, exceptionOut) {
                                $('#errorMessage').innerText='XYZ app no disponible en estos momentos.';
                            }
                        }
                    );
                } else {
                    // read from storage
                    // lottoCore.renderRecentView();
                	lottoCore.renderStaticGraph();
                }
    		}
    	);

    
    $('#recentPage').live('pagecreate', function()
		{ 
            LottoItem.fetch(); 
            amplify.subscribe('onReadAndSyncLottoDataReady', function() {
                lottoCore.renderRecentView();
            });        
            
            if ( !lottoCore.useLocalStorage() )
            {
                $.ajax(
                    {
                        type: 'GET',
                        url: URL, 
                        dataType: 'jsonp',
                        success: lottoCore.readAndSyncLottoData,
                        error: function(xhr, status, exceptionOut) {
                            $('#errorMessage').innerText='XYZ app no disponible en estos momentos.';
                        }
                    }
                );
            } else {
                // read from storage
                lottoCore.renderRecentView();
            }
		}
	);

    // history page
    $('#historyPage').live('pageshow',function(event, ui) {    
        $.mobile.loadingMessage = "Cargando datos...";
        $.mobile.showPageLoadingMsg();
        
        if ( LottoItem.count() > 0 )
        {
            setTimeout(function() {
                $.mobile.hidePageLoadingMsg();
                }, 500);
        }
    });    

    $('#historyPage').live('pagecreate', function()
		{   
            LottoItem.fetch();
            amplify.subscribe("onReadAndSyncLottoDataReady", function() {
                lottoCore.renderHistoryView();
            });        
            if ( !lottoCore.useLocalStorage() )
            {
                $.ajax(
                    {
                        type: 'GET',
                        url: URL, 
                        dataType: 'jsonp',
                        success: lottoCore.readAndSyncLottoData,
                        complete: function() { 
                        	$('#historyList').listview('refresh');
                        },
                        error: function(xhr, status, exceptionOut) {
                            $('#errorMessage').innerText = 'XYZ app no disponible en estos momentos.';
                        }
                    }
                );
            } else {
                // read from storage
                lottoCore.renderHistoryView();
              
            }
		}
	);
    
    var lottoCore = (function () {
        var DATE_STORAGE_FORMAT = 'yyyy-MM-ddTHH:mm:ss';
        var DATE_STORAGE_KEY = 'lotto.lastUpdate';
        
        return {
        saveLastUpdateDate: function() {                    
            amplify.store(DATE_STORAGE_KEY, (new Date()).toString(DATE_STORAGE_FORMAT));
        },
        
        renderStaticGraph: function() {
        
        	var controller = StatsController.init();
        	controller.render();
        },
        
        getLastUpdateDate: function() {
            try {
              var d = amplify.store(DATE_STORAGE_KEY);
              return Date.parseExact(d, DATE_STORAGE_FORMAT);
            }
            catch (ex) {
              return Date.today();
            }            
        },
        
        renderRecentView: function() {                
        	
        	var recentController = RecentController.init();
        	
        	// get query string , if any
        	var queryString = $.mobile.path.parseUrl(window.location.href).search;
        	queryString = queryString.substring(1,queryString.length).split('&');
        	if ( queryString.length == 1 )
            {
        		var keys = queryString[0].split('=');
        		if ( keys.length == 2 )
        		{
        			var lottoDate = keys[1];
        			var found = LottoItem.select(function(l) {
                        if ( l.lottoDate == lottoDate) return true; 
                        });
                   
        			try { 
                      recentController.add(found[0]);
                      recentController.render();
                      $('#recentTitle').text(found[0].label());
        			} 
        			catch (ex)
        			{
        				
        			}
        		}
        		else { 
                    
                    var recentLottoItem = LottoItem.last();
                    recentController.add(recentLottoItem);
                    recentController.render();
                    $('#recentTitle').text(recentLottoItem.label());
                  }
            } 
        },
        
        renderHistoryView: function() {                                      
            var controller = HistoryController.init();
            controller.add(LottoItem.all());
            controller.render();
        },
        
        useLocalStorage: function() 
        {
           // return false;   
            if ( LottoItem.count() == 0 ) return false;
            
            var now = (new Date()).getTime();
            var lastUpdated = this.getLastUpdateDate().getTime();
            var minutes = ((now - lastUpdated) / 1000) / 60
            if ( minutes > 60 )
            {
                return false;
            } else {
                return true;
            }            
        },
        
        syncMonths: function(lastMonths) {
    		
    		var saveHistoryData = function(data){
    			lottoCore.syncData(data);
    			var pendingCalls = lastMonths - 1;
    			if ( pendingCalls > 0)
    		    {
    				lottoCore.syncMonths(pendingCalls);
    			} else {
    				lottoCore.saveLastUpdateDate();
    	            $.mobile.hidePageLoadingMsg();
    			}
    		};
    		var today = new Date();
    		var historyDate = new Date();
    		historyDate.setMonth(today.getMonth() - lastMonths +1);
    		
    		var monthValue = historyDate.getMonth() + 1;
    		if ( historyDate.getMonth().length == 1 )
    	    {
    		   monthValue = "0" + (historyDate.getMonth() + 1);	
    	    }
    		var historyUrl = "http://query.yahooapis.com/v1/public/yql" +
    				"?q=select%20*%20from%20html%20where%20url%20%3D%20'" +
    				"http%3A%2F%2Fwww.lnb.gob.pa%2Fsitio%2Fnumerosjugados.php%3Ftiposorteo%3DT%26ano%3D" +
    				historyDate.getFullYear() + "%26meses%3D" +
    				monthValue + "%26Consultar%3D" +
    				"consulta'%20and%20%20xpath%3D'%2F%2Ftable%5B%40border%3D%221%22%5D'%0A&format=json";
    		
    		$.ajax(
                    {
                        type: 'GET',
                        url: historyUrl, 
                        dataType: 'jsonp',
                        success: saveHistoryData,
                        error: function(xhr, status, exceptionOut) {
                            $('#errorMessage').innerText='XYZ app no disponible en estos momentos.';
                        }
                    }
                );
        },
        
        syncData: function(data){
        	$.each(data.sorteos, function(i, lottoItem) {
                if ( i > -1 ) {                     
                    // spine class                
                    var instanceItem = LottoItem.init({
                        lottoType: lottoItem.tipo,
                        lottoDate: lottoItem.fecha,
                        first: lottoItem.primero.numero,
                        letras: lottoItem.primero.letras,
                        serie: lottoItem.primero.serie,
                        folio: lottoItem.primero.folio,
                        second: lottoItem.segundo.numero,
                        third: lottoItem.tercero.numero
                    });   
                    var found = LottoItem.select(function(l) {
                                    if ( l.lottoDate == instanceItem.lottoDate) return true; 
                                    });
                    if ( found.length == 0 )
                    {
                      instanceItem.save();
                    }
                }
            });	
        },
        
        readAndSyncLottoData: function(data) {            
            //LottoItem.deleteAll();                       
            lottoCore.syncData(data);
            
            lottoCore.saveLastUpdateDate();
            $.mobile.hidePageLoadingMsg();
            amplify.publish("onReadAndSyncLottoDataReady");
         }
        }
    })();
    
