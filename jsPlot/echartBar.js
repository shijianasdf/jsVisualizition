var $echartBar = function(id,title,yTitle,xData,yData){  //titlePos,
    //title:'Top 20 lncRNA regulation relationships'
	//id:'LncRNAbarContainer'
	//titlePos： 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
	//xTitle：'lncRNA' 
	//yTitle:'Number of regulation relationshape'
	//xData: ["MALAT1",	"HOTAIR",	"H19",	"MEG3",	"UCA1",	"PVT1",	"CDKN2B-AS1",	"GAS5",	"NEAT1",	"TUG1",	"XIST",	"CCAT1",	"LINC-ROR",	"HOTTIP",	"HULC",	"SNHG1",	"CRNDE",	"CASC2",	"HNF1A-AS1","SPRY4-IT1"]																			
	//yData:[178,	140,	117,	97,	77,	64,	63,	63,	58,	49,	39,	34,	33,	31,	31,	31,	24,	21,	21,	21]
	var dom = document.getElementById(id);
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
			    //color: ['#3398DB'],
				title: { //标题
		            text: title,      //主标题
		            textAlign: "auto",
		            //x: titlePos,//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
		            y: 'top',
		            textStyle:{
		                //color:'#0DB9F2',        //颜色
		                fontStyle:'normal',     //风格
		                fontWeight:'bolder',    //粗细
		                //fontFamily:'Microsoft yahei',   //字体
		                fontSize:12,     //大小
		                align:'center',   //水平对齐
		                /*verticalAlign:'middle' */
		            },
		            /*subtext:'副标题',      //副标题
		            subtextStyle:{          //对应样式
		                color:'#F27CDE',
		                fontSize:14
		            },*/
		            itemGap:7
		        },
		        grid: {  //设置图片所在区域的margin和padding
	                bottom: '3%',
	                containLabel: true //将X轴和y轴标签展示出来
	            },
				legend: {}, //图例
				toolbox: {  //右上角的下载等
		            show : true,
		            feature : {
		                mark : {show: true},
		                dataView : {show: false, readOnly: true},
		                //magicType: {show: true, type: ['line', 'bar']},
		                //restore : {show: true},
		                saveAsImage : {show: true}
		            }
		        },
			    tooltip: { //提示
			    	trigger: 'axis',
		            axisPointer: {
		                type: 'shadow',
		                label: {
		                    show: true
		                }
		            }
			    },
		        xAxis: {
			        type: 'category', //离散型变量
			        /*name: xTitle,  //x轴标题
			        nameLocation:'middle',  //x轴标题在x轴中间位置
			        nameGap:50,  //x轴标题距离x轴的距离
	*/		        nameTextStyle :{
			            //color:'#0DB9F2',        //颜色
			            fontStyle:'normal',     //风格
			            fontWeight:'bold',    //粗细
			            //fontFamily:'Microsoft yahei',   //字体
			            fontSize:14     //大小
			            //align:'right'   //水平对齐
			        },
			        axisLabel: {
			            interval: 0,
			            rotate: 40
			        },
			        splitLine: {
			            show: false
			        },
			        data: xData																			
		        },
			    yAxis: {
			        type: 'value',
			        name:yTitle,
			        nameLocation:'middle',
			        nameGap:40,
			        nameTextStyle :{
			            //color:'#0DB9F2',        //颜色
			            fontStyle:'normal',     //风格
			            fontWeight:'bold',    //粗细
			            //fontFamily:'Microsoft yahei',   //字体
			            fontSize:14,     //大小
			            //align:'right'   //水平对齐
			        },
			    },
			    series: [{
			        data: yData,
			        type: 'bar'
			    }]		
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	    charts.push(myChart);
	}
	
}
