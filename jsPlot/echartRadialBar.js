var $echartRadialBarPlot = function(id,title,xTitle,yData){ //titlePos
	//id : "LncRNAradialContainer"
	//title : "Top 20 lncRNA in diseases"
	//titlePos : 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
	//xTitle : ["MALAT1",	"HOTAIR",	"H19",	"MEG3",	"UCA1",	"PVT1",	"CDKN2B-AS1",	"GAS5",	"NEAT1",	"TUG1",	"XIST",	"CCAT1",	"LINC-ROR",	"HOTTIP",	"HULC",	"SNHG1",	"CRNDE",	"CASC2",	"HNF1A-AS1","SPRY4-IT1"]
	//yData : [54,	44,	42,	40,	25,	25,	24,	29,	29,	23,	18,	21,	16,	13,	11,	17,	12,	12,	8,	13]
	var dom = document.getElementById(id);
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
			color: ['#3398DB'], //颜色
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
	                /*verticalAlign:'middle'*/
	            },
	            /*subtext:'副标题',      //副标题
	            subtextStyle:{          //对应样式
	                color:'#F27CDE',
	                fontSize:14
	            },*/
	            itemGap:10
	        },
			toolbox: {
		        show : true,
		        feature : {
		             mark : {show: true},
		             dataView : {show: false, readOnly: true},
		                //magicType: {show: true, type: ['line', 'bar']},
		                //restore : {show: true},
		             saveAsImage : {show: true}
		        }
		    },	
		    grid: {  //设置图片所在区域的margin和padding
	            containLabel: true, //将X轴和y轴标签展示出来
	            bottom : 0
	            /*left: '10%',  
	            bottom:'35%'*/  
	        },
		    angleAxis: {
		        type: 'category',
		        data: xTitle,
		        //boundaryGap: false,
		        z: 10,
		        rotate: 20,
		        axisLabel:{
		        	fontWeight:'bolder',
		        	//inside: true,
		        	interval:0,
		        	//rotate:-90,  //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度
		        	fontSize:7,
		        	fontStyle:'normal',
		        	//align: "center",
		        	align:'left', //'left' 'center' 'right' 
		        	verticalAlign:'top', //'top' 'middle' 'bottom' 		        	
		        	lineHeight:5,
		        	padding:0,
		        	margin:8
		        }
		    },
		    radiusAxis: {
		    	/*nameLocation:"end",           //坐标轴名称显示位置。可选：'start','middle','end'
		        //nameTextStyle:mytextStyle,   //坐标轴名称的文字样式
		        nameGap:30,                    //坐标轴名称与轴线之间的距离
		        nameRotate:90,                  //坐标轴名字旋转，角度值
*/		    },
		    polar: {
		    },
		    series: [{
		        type: 'bar',
		        data: yData,
		        coordinateSystem: 'polar',
		/*        name: 'A',
		        stack: 'a'*/
		    }],
		    tooltip: { //提示
		    	trigger: 'axis',
		        axisPointer: {
		            type: 'shadow',
		            label: {
		                show: true
		            }
		        }
		    },
		    legend:{
		        show: true
		    }
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	    charts.push(myChart);
	}
}
/*var dom = document.getElementById("LncRNAradialContainer");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
		color: ['#3398DB'],
		title: { //标题
            text: "dfgefhr",      //主标题
            textAlign: 'center',
            x: 60,//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'top',
            textStyle:{
                //color:'#0DB9F2',        //颜色
                fontStyle:'normal',     //风格
                fontWeight:'bolder',    //粗细
                //fontFamily:'Microsoft yahei',   //字体
                fontSize:16,     //大小
                align:'center',   //水平对齐
                verticalAlign:'middle'
            },
            subtext:'副标题',      //副标题
            subtextStyle:{          //对应样式
                color:'#F27CDE',
                fontSize:14
            },
            itemGap:10
        },
			 	toolbox: {
		            show : true,
		            feature : {
		                mark : {show: true},
		                dataView : {show: true, readOnly: true},
		                //magicType: {show: true, type: ['line', 'bar']},
		                //restore : {show: true},
		                saveAsImage : {show: true}
		            }
		        },	
    angleAxis: {
        type: 'category',
        data: ["MALAT1",	"HOTAIR",	"H19",	"MEG3",	"UCA1",	"PVT1",	"CDKN2B-AS1",	"GAS5",	"NEAT1",	"TUG1",	"XIST",	"CCAT1",	"LINC-ROR",	"HOTTIP",	"HULC",	"SNHG1",	"CRNDE",	"CASC2",	"HNF1A-AS1","SPRY4-IT1"],
        z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [54,	44,	42,	40,	25,	25,	24,	29,	29,	23,	18,	21,	16,	13,	11,	17,	12,	12,	8,	13],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }],
    tooltip: { //提示
    	trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true
            }
        }
    },
    legend:{
        show: true
    }
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}*/