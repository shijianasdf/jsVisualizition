function barPlotDelxLabErrorbar(divID,title,xAxisLable,xAxisTitle,barValue,color,xLableRotation,errorData){
	//只能画每类一个柱的bar图；
	//divID：对应
	//title:图的标题
	//xAxisLable：x轴标签
	//xAxisTitle：x轴标题
	//barValue：bar图的柱对应的值
	//color：bar图的柱颜色
	//xLableRotation：x轴标签倾斜度数；
	//errorData：errorbar对应的区间值
	//result：直接在对应divid对的块画bar图；
	//example://barPlot(divID = coexpressionBarplot,title = "the coexpression of lncRNA and gene",xAxisLable,xAxisTitle = 'coexpression value',barValue,color = "#1C86EE",xLableRotation = -45);
	errorData = errorData.replace("[","");
	errorData = errorData.replace("]","");
	var errorDataArray = errorData.split(",");
	var barValueArraytmp = barValue.replace("[","");
	barValueArraytmp = barValueArraytmp.replace("]","");
	var barValueArray = barValueArraytmp.split(",");
	
	var errorDatafinal=[];
	//alert(barValueArray+'<br/>'+errorDataArray);
	//alert(Number(barValueArray[6])+"."+Number(errorDataArray[6]));
	//alert(Number(barValueArray[6])+Number(errorDataArray[6]));
	for(var i=0;i<errorDataArray.length;i++){
		
		tmpError=[(Number(barValueArray[i])-Number(errorDataArray[i])),(Number(barValueArray[i])+Number(errorDataArray[i]))];
		errorDatafinal.push(tmpError);
	}
	//alert(errorDatafinal);
	//var i=1;
	//alert(Number(barValueArray[i])+Number(errorDataArray[i])+"......"+Number(barValueArray[i])+Number(errorDataArray[i]));
	//alert(errorData+"<br/>"+barValueArray+"<br/>"+errorDatafinal);
  
    // 强行适应宽度，但并不好使，当放大或缩小后，会发现元素大小不对应
	var setWidth = $('#'+divID).parent().width();
		$('#'+divID).highcharts({
			chart: {
	            type: 'column',
	            //width: setWidth
				//zoomType: 'x'
			},
			title: {
				//text: 'Temperature vs Rainfall'
				text:title,
			},
			xAxis: {
				categories: eval("("+xAxisLable+")"),
	            title: {                                                       
	                text: null,                                                 
	            },
	           
	            labels:{
                    //x:45,//调节x偏移
                    //y:-35,//调节y偏移
                    //rotation:-45,//调节倾斜角度偏移,副值是逆时针，单位是度
	            	rotation: xLableRotation,
	            	enabled: true,
	            	
                 },
			},
			yAxis: [{ // Primary yAxis
				
				labels: {
					formatter: function() {
						return this.value + '';
					},
				},
				title: {
					text: ' ',
					style: {
						//color: '#69ADDF'
					},
				}
			}],

			tooltip: {
				shared: true
			},
			credits: {                                                         
	            enabled: false,                                      
	        },
	        legend: {
	            enabled: false,
	        },
			series: [{
				name: xAxisTitle,
				color: color,
				type: 'column',
				//yAxis: 1,
				//data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
				data: eval("("+barValue+")"),
				tooltip: {
					pointFormat: '{series.name}: {point.y} <br/>'
				}
			}, { 
				name: 'Expression value error',
				type: 'errorbar',
				//yAxis: 1,
				//data: [[48, 51], [68, 73], [92, 110], [128, 136], [140, 150], [171, 179], [135, 143], [142, 149], [204, 220], [189, 199], [95, 110], [52, 56]],
				data:errorDatafinal,
				tooltip: {
					pointFormat: 'Error range: {point.low}-{point.high}'
				}
			}],
		});
				
}




function barPlotDelxAxisLables(divID,title,xAxisLable,xAxisTitle,barValue,color,xLableRotation){
	//只能画每类一个柱的bar图；
	//divID：对应
	//title:图的标题
	//xAxisLable：x轴标签
	//xAxisTitle：x轴标题
	//barValue：bar图的柱对应的值
	//color：bar图的柱颜色
	//xLableRotation：x轴标签倾斜度数；
	//
	//result：直接在对应divid对的块画bar图；
	//example://barPlot(divID = coexpressionBarplot,title = "the coexpression of lncRNA and gene",xAxisLable,xAxisTitle = 'coexpression value',barValue,color = "#1C86EE",xLableRotation = -45);

	$('#'+divID).highcharts({
		
		 chart: {                                                           
	            type: 'column',	//竖着的barplot图；
	        },                                                                 
	        title: {                                                           
	            //text: 'Chromosome lncRNA target sits',           
	            text: title,   //标题
	        },                                                                 
	        xAxis: {                                                           
	            //categories:  eval("("+returnMsg.chromonames+")"),
	            //categories:  eval('('+"<s:property value="barPlotColName"/>"+')'),//若struts属性值含有"'",提取是需要"<s:property value="barPlotColName"/>"，而不是'<s:property value="barPlotColName"/>'
	            //categories:  ['a','b','c','d'],
	        	categories:  eval("("+xAxisLable+")"),
	        	lineWidth :0,//轴线的宽度，
	        	tickWidth:0,//刻度线的宽度，
	            title: {                                                       
	                text: null,                                                 
	            },
	           
	            labels:{
                    //x:45,//调节x偏移
                    //y:-35,//调节y偏移
                    //rotation:-45,//调节倾斜角度偏移,副值是逆时针，单位是度
	            	rotation: xLableRotation,
	            	enabled: false,
                 },
                
	        },  
	        yAxis: {
	           // min: 0, //y轴的最小值；
	            title: {                                                       
	                text: '',                             
	                align: 'high',                                              
	            },
	
	            labels: {
	                overflow: 'justify',                                      
	            }                                                             
	        },
	        legend: {
	            enabled: false
	        },
	        tooltip: {                                                         
	            valueSuffix: '',                                       
	        },                                                                 
	        plotOptions: {
	        	/*
	        	series: {
	        		color: 'rgb(230,240,250)',
	                borderWidth: 1,
	                borderColor: '#08519C'
	            },
	            */
	        	column: {                                                         
	                dataLabels: {                                              
	                    enabled: true,
	                    rotation: 0,
	                    //formatter: function(){return this.x;},
	                    formatter: function(){
			                		return this.x;
                			},
	                },
	                //color: '#1C86EE',
	                color: color,
	            },                                                             
	        },                                                              
	        credits: {                                                         
	            enabled: false,                                      
	        }, 
	        
	        
	        series: [{ 
	        	//name: 'coexpression value',
	        	name: xAxisTitle,
	            //data: eval("("+returnMsg.lncRNAsummarydata+")"),  
	            //data: eval("("+'<s:property value="barPlotData"/>'+")"),
	        	//data: [1, 3, -1, -5],
	        	//data: barValue,//对应柱图值；
	        	data: eval("("+barValue+")"),//对应柱图值；
	        	/*
	            dataLabels: {
	                
	                enabled: true,
	                rotation: -45,
	                //color: 'black',
	                //align: 'right',
	                x: 5,
	                y:function() {
	                		var result;
	                		if(this.y < 0){
	                			result = -14;
	                		}
	                		else{
	                			result = 14;
	                		}
	                        alert(result);
	                		return result;
	                        
	                },
	                
	                
	                style: {
	                    //fontSize: '13px',
	                    //fontFamily: 'Verdana, sans-serif',
	                   
	                },
	                formatter: function() {
	                        return this.x;
	                }

	            }
	      //*/
	        }],                                                             
		});
	
}


function barPlot(divID,title,xAxisLable,xAxisTitle,barValue,color,xLableRotation){
	//只能画每类一个柱的bar图；
	//divID：对应
	//title:图的标题
	//xAxisLable：x轴标签
	//xAxisTitle：x轴标题
	//barValue：bar图的柱对应的值
	//color：bar图的柱颜色
	//xLableRotation：x轴标签倾斜度数；
	//
	//result：直接在对应divid对的块画bar图；
	//example://barPlot(divID = coexpressionBarplot,title = "the coexpression of lncRNA and gene",xAxisLable,xAxisTitle = 'coexpression value',barValue,color = "#1C86EE",xLableRotation = -45);

	$('#'+divID).highcharts({
		
		 chart: {                                                           
	            type: 'column',	//竖着的barplot图；
	        },                                                                 
	        title: {                                                           
	            //text: 'Chromosome lncRNA target sits',           
	            text: title,   //标题
	        },                                                                 
	        xAxis: {                                                           
	            //categories:  eval("("+returnMsg.chromonames+")"),
	            //categories:  eval('('+"<s:property value="barPlotColName"/>"+')'),//若struts属性值含有"'",提取是需要"<s:property value="barPlotColName"/>"，而不是'<s:property value="barPlotColName"/>'
	            //categories:  ['a','b','c','d'],
	        	categories:  eval("("+xAxisLable+")"),
	            title: {                                                       
	                text: null,                                                 
	            },
	            labels:{
                    //x:45,//调节x偏移
                    //y:-35,//调节y偏移
                    //rotation:-45//调节倾斜角度偏移,副值是逆时针，单位是度
	            	rotation: xLableRotation
                 }
	        },                                                                 
	        yAxis: {                                                           
	           // min: 0, //y轴的最小值；
	            title: {                                                       
	                text: '',                             
	                align: 'high',                                              
	            },                                                             
	            labels: {                                                      
	                overflow: 'justify',                                      
	            }                                                             
	        }, 
	        legend: {
	            enabled: false
	        },
	        tooltip: {                                                         
	            valueSuffix: '',                                       
	        },                                                                 
	        plotOptions: {                                                     
	        	column: {                                                         
	                dataLabels: {                                              
	                    enabled: false,                                          
	                },
	                //color: '#1C86EE',
	                color: color,
	            }                                                              
	        },                                                              
	        credits: {                                                         
	            enabled: false,                                                 
	        },                                                                 
	        series: [{ 
	        	//name: 'coexpression value',
	        	name: xAxisTitle,
	            //data: eval("("+returnMsg.lncRNAsummarydata+")"),  
	            //data: eval("("+'<s:property value="barPlotData"/>'+")"),
	        	//data: [1, 3, -1, -5],
	        	//data: barValue,//对应柱图值；
	        	data: eval("("+barValue+")"),//对应柱图值；
	        }],                                                             
		});
	
}
