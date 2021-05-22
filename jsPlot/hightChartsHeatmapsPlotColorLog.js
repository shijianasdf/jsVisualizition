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
                minColor: '#FFFAFA',
                maxColor: '#00FF00'
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
//参数赋值：
	var data = [[0,0,0.357],[0,1, 0.411],[0,2, 0.221],[0,3, 0],[0,4, 0.349],[0,5, 0.358],[0,6, 0.28],[1,0, 0.447],[1,1, 0.268],[1,2, 0.188],[1,3, 0.764],[1,4, 0.709],[1,5, 0.326],[1,6, 1.712],[2,0, 0],[2,1, 5.217],[2,2, 0.852],[2,3, 0.569],[2,4, 2.546],[2,5, 0.179],[2,6, 0.335],[3,0, 0.199],[3,1, 0.899],[3,2, 0.287],[3,3, 0.35],[3,4, 0.505],[3,5, 0.7],[3,6, 0.902],[4,0, 0.551],[4,1, 2.015],[4,2, 1.319],[4,3, 2.525],[4,4, 0.735],[4,5, 1.132],[4,6, 0.506],[5,0, 0.486],[5,1, 1.04],[5,2, 1.12],[5,3, 0],[5,4, 0.961],[5,5, 0.394],[5,6, 0.274],[6,0, 0.406],[6,1, 0.636],[6,2, 0.517],[6,3, 0.929],[6,4, 0.59],[6,5, 0.165],[6,6, 0.426]];
	var xCategories = ["YANG","KRETZ","PARALKAR","HE","HANGAUER","TRIMARCHI","WHITE","CABILI","KELLEY","GENCODE","LNCipedia","NONCODE","IYER"];
	var yCategories = ["IYER","NONCODE","LNCipedia","GENCODE","KELLEY","CABILI","WHITE","TRIMARCHI","HANGAUER","HE","PARALKAR","KRETZ","YANG"];
	var min=0;
	var max=5.217;
	var minColor='#FFFAFA';
    var maxColor='#00FF00';

//执行
    hightChartsHeatmapsPlotColorLog('heatmap',data,'name:hightChartsHeatmapsPlot',xCategories,yCategories,'ylable',min,max,minColor,maxColor);