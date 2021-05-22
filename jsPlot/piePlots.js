function piePlotSort(divID,pieLables,pieValue,title){
	//画饼图，并对提供数据倒序排序；
	//divID：对应块级id
	//pieLables:图的标题
	//pieValue：扇形值
	//title：标题
	//alert(pieLables);
/*	
	$(function () {
		alert("sdsdfg");
*/
	    var colors = Highcharts.getOptions().colors;

	    var versionsData = [];
	    //var pieLables = ["xin1","xin2","xin3"];
	    //var pieLables = "[xin1,xin2,xin3]";
	    //var pieValue = "[10,12,20]";
	    
	    pieLables = pieLables.replace("[","");
	    pieLables = pieLables.replace("]","");
	    //var pieLablesArray = pieLables.split(",");
	    var pieLablesArrayOriginal = pieLables.split(",");
	    //alert(pieLablesArrayOriginal);
	    //alert(pieLablesArrayOriginal.length);
	    //alert(pieLablesArrayOriginal[1]);
	    
	    pieValue = pieValue.replace("[","");
	    pieValue = pieValue.replace("]","");
	    var pieValueArray = pieValue.split(",");

	   // alert(pieValueArray);
	    var pieValueArrayOriginal = pieValueArray.concat();
	    pieValueArray.sort(function(a,b){return Number(a)<Number(b)?1:-1;});
	    var sortIndex =[];
	   
	    for(var i=0;i<pieValueArray.length;i++){
	    	var tmpIndex = pieValueArrayOriginal.indexOf(pieValueArray[i]);
	    	pieValueArrayOriginal[tmpIndex] = 0;
	    	sortIndex.push(tmpIndex);
	    }
	    //alert(sortIndex);
	    var pieLablesArray = [];
	    if(sortIndex.length>10){
	    	for(var i=0;i<10;i++)
   		    	pieLablesArray.push(pieLablesArrayOriginal[sortIndex[i]]);
	    }else{
	    	for(var i=0;i<sortIndex.length;i++)
   		    	pieLablesArray.push(pieLablesArrayOriginal[sortIndex[i]]);
	    }
	   
	    
	    
	    
	    //for(var i = 0; i < pieLablesArray.length & i < 11;i++){
	    for(var i = 0; i < pieLablesArray.length;i++){
	    	versionsData.push(
	            {
	                name:pieLablesArray[i],
	                y:Number(pieValueArray[i]),
	                x:i,
	                color:colors[i]
	            }
	        );
	    }
	    
	    //versionsData = [{name:"xin1",y:10,color:colors[0]},{name:"xin2",y:16,color:colors[1]},{name:"xi3",y:20,color:colors[2]}];
	    // 强行适应宽度，但并不好使，当放大或缩小后，会发现元素大小不对应
		var setWidth = $('#'+divID).parent().width();
		//alert(setWidth);
	    // Create the chart
	    $('#'+divID).highcharts({
	        chart: {
	            type: 'pie',
	            //width: setWidth
	        },
	        title: {
	            //text: 'Browser market share, April, 2011'
	            text: title,
	        },
	        yAxis: {
	            title: {
	                text: 'Total percent market share'
	            }
	        },
	        plotOptions: {
	            pie: {
	            	size: '100%',
	                shadow: false,
	                center: ['50%', '50%']
	            }
	        },
	        tooltip: {
	    	    valueSuffix: ''
	        },
	        credits: {                                                         
	            enabled: false,                                                 
	        },
	        series: [ {
	            name: 'Versions',
	            data: versionsData,
	            //size: '90%',
	            //innerSize: '0',
	            dataLabels: {
	                formatter: function() {
	                    // display only if larger than 1
	                	if(this.point.x < 10000){
	                		return this.y > 0.9 ? '<b>'+ this.point.name +':</b> '+ this.y +''  : null;
	                	}else{
	                		return null;
	                	}
	                    
	                }
	            }
	        }]
	    //});
	});				
}