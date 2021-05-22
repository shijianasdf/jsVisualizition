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
function drawBoxplot(divID,data1,datalable1,data2,datalable2,color1,fillColor1,color2,fillColor2,xCategories,xlable,ylable){
	// 强行适应宽度，但并不好使，当放大或缩小后，会发现元素大小不对应
	var setWidth = $('#'+divID).parent().width();
	$('#'+divID).highcharts({
		chart: {
			type: 'boxplot',
	        // Explicitly tell the width and height of a chart
	        //width: setWidth
		},
		title: {text: ""},
		subtitle: {text: ""},
		legend: {
			align: 'left',
			x:50,
			verticalAlign: 'top',
			floating: true,
			backgroundColor: '#FFFFFF'
		},
		xAxis: {
			gridLineWidth: 0,
			lineWidth: 0,
			tickWidth: 0,
			color: 'red',
			//color: ['red','black','red','black','red','black','red','black','red','black','red','black','red'],
			/*lineColor: 'black',
			tickColor: 'black',
			categories: ['a1', 'a2', 'a3', 'a4', 'a5','a6','a7'],
			*/
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
				// color: color,
				lineWidth: 1,
				stemDashStyle: 'dot',
				stemWidth: 1,
				whiskerLength: '38%',
			},
		},
		credits: {
			enabled: false
		},
		series: [{
				name: datalable1,
				data: data1,
				color: fillColor1,
				fillColor: fillColor1,
				medianColor: color1,
				stemColor: color1,
				whiskerColor: color1,
				tooltip: {
					// headerFormat: '<em>Experiment No {point.key}</em><br/>',
					headerFormat: '<b>{point.x}</b><br/>',
				},
			},
			{
				name: datalable2,
				data: data2,
				color: fillColor2,
				fillColor: fillColor2,
				medianColor: color2,
				stemColor: color2,
				whiskerColor: color2,
				tooltip: {
				//headerFormat: '<em>Experiment No {point.key}</em><br/>',
					headerFormat: '<b>{point.x}</b><br/>',
				},
			}
		]

	});
}
