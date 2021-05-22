// 转换字符串，
// data，字符型数据，例如 "[2.3,5.7,6.8]"
// nrow, ncol，望文生义
string2array4boxplot = function(data, nrow, ncol){
	// 替换掉无用
	data = data.replace("[","");
	data = data.replace("]","");
	// 转为数组
	jsonObj = data.split(",")
	// 产生可用的数据，例如
	// [[0,0,6],[0,1,3][1,0,1],[1,1,7]]
	var output ="[[";
	for(var j=0; j<nrow; j++){
		for(var m=0; m<ncol; m++){
			arrIdx = j*ncol+m
			if((arrIdx+1)%ncol==0)
				output= output+jsonObj[arrIdx]+"], [";
			else
				output= output+jsonObj[arrIdx]+", ";	
		}
			
	}
	// 去掉最后一个字符，即逗号
	output = output.substring(0, output.length-3);
	output = output+"]";
	return output;
};



//基础boxplot
//需要加载包： jquery.min.js; highcharts.js; exporting.js; highcharts-more.js
//hightChartsHeatmapsPlot(divIDs,data,colors,title,xCategories,yCategories,ylable,min,max)
//lines(divID,data,colors,title,subtitle,xlable,ylable)
function drawBoxplot(divID,data,datalable,color,fillColor,title,subtitle,xCategories,xlable,ylable){

		    $('#'+divID).highcharts({
			    chart: {
			        type: 'boxplot'
			    },   
			    title: {
			        text: title
			    },
			    subtitle: {
		        	text: subtitle
		        },
			    legend: {
			        enabled: false
			    },	
			    xAxis: {
			    	gridLineWidth: 0,
			    	lineWidth: 0,
			        tickWidth: 0,
			    	/*lineColor: 'black',
			        tickColor: 'black',*/
			        //categories: ['a1', 'a2', 'a3', 'a4', 'a5','a6','a7'],
			    	categories:xCategories,
			        title: {
			            text: xlable,
			        }            
			    },    
			    yAxis: {
					min: 0,
					gridLineWidth: 1,
			        title: {
			            text: ylable,
			        },	        
			    },
		        plotOptions: {
		        	boxplot: {
		        		//color: color,
		            	lineWidth: 1,
		                fillColor: fillColor,
		                medianColor: color,
		                stemColor: color,
		                stemDashStyle: 'dot',
		                stemWidth: 1,
		                whiskerColor: color,
		                whiskerLength: '38%',
		            },
		        },
		        credits: {
		            enabled: false
			    },
			    series: [{
			        name: datalable,
			        data: data,
			        tooltip: {
			            //headerFormat: '<em>Experiment No {point.key}</em><br/>',
			            headerFormat: '<b>{point.x}</b><br/>',
			        }
			    }]
			
			});
				
	}
