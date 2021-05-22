
// 转换字符串，为 highchart.heatmap 可用的格式
// data，字符型数据，例如 "[2.3,5.7,6.8]"
// nrow, ncol，望文生义
string2array4heatmap = function(data, nrow, ncol){
	// 替换掉无用
	data = data.replace("[","");
	data = data.replace("]","");
	// 转为数组
	jsonObj = data.split(",")
	// 产生可用的数据，例如
	// [[0,0,6],[0,1,3][1,0,1],[1,1,7]]
	var output ="[";
	for(var j=0; j<nrow; j++){
		for(var m=0; m<ncol; m++)
			output= output+"["+j+","+m+","+jsonObj[(j*ncol+m)]+"],";
	}
	// 去掉最后一个字符，即逗号
	output = output.substring(0, output.length-1);
	output = output+"]";
	return output;
};

// 获取最大值最小值
getColMinMax = function(data){
	// 替换掉无用
	data = data.replace("[","");
	data = data.replace("]","");
	// 转为数组
	jsonObj = data.split(",")
	// 产生可用的数据，例如
	max = Math.max.apply(null, jsonObj);
	min = Math.min.apply(null, jsonObj);
	return [min, max]
}


// colsString, 字符串即可候选颜色
// length， 颜色长度的二倍，例如7个颜色14长度
// min,max，getColMinMax返回的最大最小值
getStackCols = function(colsString, length, min, max){
	colsArray = colsString.split(",");
	step = max/length
	step = step.toFixed(2)
	var value4col = "[";
	for(var i=0; i<colsArray.length; i++){
		temp = min+step*i;
		value4col = value4col+"["+temp+",'"+colsArray[i]+"'],";
	}
	value4col = value4col.substring(0, value4col.length-1);
	value4col = value4col+"]";
	return value4col;
}


//基础热图：
//需要加载包：highcharts.js; exporting.js; heatmap.js;
//热图是从左下开始画图，级坐标(0,0)在左下角，特别注意这点
function hightChartsHeatmapsPlot(divIDs,data,colors,title,xCategories,yCategories,ylable,min,max){
	//divID:一个字符串，块级元素id;
	//data：一个数组，线图数据，[[0（colNum）,0（rowNum）,6],[0,1,6],[0,2,6],[0,3,6],[0,4,6],[0,5,6],...],
	//colors:一个数组，[[0, '#FFFFFF'],	[0.04761905, '#FFFFFF'],[0.09523810, '#FFFFFF'],...,[0.9(或者1), '#FFFFFF']],从0-1分段
	//title：一个字符串，图的标题;
	//xCategories:一个数组，x轴对应对象，
	//yCategories:一个数组，y轴对应对象，
	//ylable:一个字符串，y轴标题;
	//min:色棒的最小值
	//max：色棒的最大值
	//
	//不能设定参数：subtitle，lable
	$('#'+divIDs).highcharts({
		chart: {
			type: 'heatmap',
			marginTop: 40,	//上边距，单位PX，
			marginBottom: 60, //底边距，单位PX
			plotBorderWidth: 1,
			plotBorderColor:'white',
		},
		title: {
			text: title,
		},
		xAxis: {
			categories: xCategories,//类别名称。从Highcharts3.0以后，通过获取数据列中数据的name和设置坐标轴的type为"category"可以初步制作出类别轴。
			labels:{
				// x:45,//调节x偏移
				// y:-35,//调节y偏移
				// rotation:-45,//调节倾斜角度偏移,副值是逆时针，单位是度
				rotation: -30,
				enabled: true,
			 },
			lineWidth :0, // 轴线的宽度，
			tickWidth:0, // 刻度线的宽度，
			title: null,
		},
		yAxis: {
			categories: yCategories, 
			title: {
				text: ylable,
			},
		},
		/*
		 * 调色棒，stops:
		 *对应的颜色从小到大
		 *	
		*/
		colorAxis: {
			min: min,
			max: max,
			stops: colors,
		},
		legend: {
			align: 'right',//图例的水平位置："left", "center"(默认) and "right"
			layout: 'vertical',	//图例布局："horizontal"（水平） or "vertical"（竖直）.
			margin: 0,//图例和坐标轴的距离
			verticalAlign: 'top',//图例竖直方向的位置： "top", "middle" or "bottom". 
			y: 25,//距离verticalAlign指定方你想的距离：默认是 0
			//x:-25,
			symbolHeight: 150, //图例对应符号的大小
			//title:{text:"Genomic distance"},//图例的名字
		},
		/*
		 *tooltip:提示信息：
		 *
		*/
		tooltip: {
			formatter: function () {
				return "X: <b>"+this.series.yAxis.categories[this.point.y] + '</b><br>Y: <b>'+this.series.xAxis.categories[this.point.x]+'</b><br>value:<b>'+this.point.value.toFixed(2)+"</b>";
			}
		},
		credits: {
			enabled: false
		},
		series: [{
			name: '',
			borderWidth: 2,	//map的边框宽度
			borderColor:'white',
			data: data,
			dataLabels: {
				enabled: false,//是否显示data数字
			}
		}]
	});	
}


//基础热图：
//需要加载包： jquery.min.js; highcharts.js; exporting.js; heatmap.js;
//热图是从左下开始画图，级坐标(0,0)在左下角，特别注意这点
function hightChartsHeatmapsPlotColorLog(divID,data,title,xCategories,yCategories,ylable,min,max,minColor,maxColor){
	//divID:一个字符串，块级元素id;
	//data：一个数组，线图数据，[[0（colNum）,0（rowNum）,6],[0,1,6],[0,2,6],[0,3,6],[0,4,6],[0,5,6],...],
	//title：一个字符串，图的标题;
	//xCategories:一个数组，x轴对应对象，
	//yCategories:一个数组，y轴对应对象，
	//ylable:一个字符串，y轴标题;
	//min:色棒的最小值
	//max：色棒的最大值
	//minColor:一个颜色字符串建议使用16色，类似："#006838"
	//maxColor:一个颜色字符串建议使用16色，类似："#006838"
	
	//不能设定参数：subtitle，lable
	   $('#'+divID).highcharts({	        
	        chart: {
	            type: 'heatmap',
	            marginTop: 40,	//上边距，单位PX，
	            //marginRight: 120,	//上边距，单位PX，
	            marginBottom: 60, //底边距，单位PX
	            plotBorderWidth: 1,
	            plotBorderColor:'white',
	        },

	        title: {
	            text: title,
	        },
	        xAxis: {
	            categories: xCategories,//类别名称。从Highcharts3.0以后，通过获取数据列中数据的name和设置坐标轴的type为"category"可以初步制作出类别轴。
	            	
	            
	            labels:{
                 //x:45,//调节x偏移
                 //y:-35,//调节y偏移
                 //rotation:-45,//调节倾斜角度偏移,副值是逆时针，单位是度
	            	rotation: -30,
	            	enabled: true,
              },
	        	lineWidth :0,//轴线的宽度，
	        	tickWidth:0,//刻度线的宽度，
	        	title: null,
	        },

	        yAxis: {
	            categories: yCategories, 
	            title: {
	                text: ylable,
	            },
	        },
			/*调色棒，stops:
			 *对应的颜色从小到大	
			 
			 */
			 //红色
			 
	        colorAxis: {
	        	min:min,
	        	max:max,
              minColor: minColor,
              maxColor: maxColor
	        },
	        
	        legend: {
	            align: 'right',//图例的水平位置："left", "center"(默认) and "right"
	            layout: 'vertical',	//图例布局："horizontal"（水平） or "vertical"（竖直）.
	            margin: 0,//图例和坐标轴的距离
	            verticalAlign: 'top',//图例竖直方向的位置： "top", "middle" or "bottom". 
	            y: 25,//距离verticalAlign指定方你想的距离：默认是 0
	            //x:-25,
	            symbolHeight: 40, //图例对应符号的大小
	            //title:{text:"Genomic distance"},//图例的名字
	        },
			/*
			 *tooltip:提示信息：
			 *
			 */
	        tooltip: {
	            formatter: function () {
	            	return "X: <b>"+this.series.yAxis.categories[this.point.y] + '</b><br>Y: <b>'+this.series.xAxis.categories[this.point.x]+'</b><br>value:<b>'+this.point.value.toFixed(2)+"</b>";
	            }
	        },
		    credits: {
		            enabled: false
		    },
	        series: [{
	            name: '',
	            borderWidth: 2,	//map的边框宽度
	            borderColor:'white',
	            data: data,
	            dataLabels: {
	                enabled: false,//是否显示data数字
	            }
	        }]

	    });	
	  
	   
}
//example:parameter

//执行
  //hightChartsHeatmapsPlotColorLog('heatmap2',data,'name:hightChartsHeatmapsPlot',xCategories,yCategories,'ylable',min,max,minColor,maxColor);