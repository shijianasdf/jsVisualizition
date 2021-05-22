var $leftToRightTreePlot  =  function(DivID,data){
		var dom = document.getElementById(DivID);
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		myChart.hideLoading();
		     myChart.setOption(option = {
		    		 toolbox: {  //下载项
		    	            show : true,
		    	            feature : {
		    	                mark : {show: true},
		    	                dataView : {show: false, readOnly: true},
		    	                //magicType: {show: true, type: ['line', 'bar']},
		    	                //restore : {show: true},
		    	                saveAsImage : {show: true}
		    	            }
		    	        },
		            tooltip: {
		                trigger: 'item',
		                triggerOn: 'mousemove'
		            },
		            series: [
		                {
		                    type: 'tree',

		                    data: [data],

		                    top: '0%',
		                    left: '5%',
		                    bottom: '0%',
		                    right: '5%',

		                    symbolSize: 7,
		                    initialTreeDepth: 6,
		                    label: {
		                        normal: {
		                            position: 'left', //文字位置
		                            verticalAlign: 'middle',
		                            align: 'right',
		                            fontSize: 9
		                        }
		                    },

		                    leaves: {  //最后一层叶子节点位置
		                        label: {
		                            normal: {
		                                position: 'left',
		                                verticalAlign: 'middle',
		                                align: 'right'
		                            }
		                        }
		                    },

		                    expandAndCollapse: true,
		                    animationDuration: 550,
		                    animationDurationUpdate: 750
		                },

		            ]
		        }); 
		if (option && typeof option === "object") {
		    myChart.setOption(option, true);
		}
	};	
	
	var $radialPlot  =  function(DivID,data){
		var dom = document.getElementById(DivID);
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		myChart.hideLoading();
		myChart.setOption(option = {
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
		        tooltip: {
		            trigger: 'item',
		            triggerOn: 'mousemove'
		        },
		        series: [
		            {
		                type: 'tree',
	
		                data: [data],
	
		                top: '10%',
		                bottom: '10%',
		                left: '10%',
		                right: '10%',
		                layout: 'radial',
	                    fontSize:4,
		                symbol: 'emptyCircle',
	
		                symbolSize: 5,
		                
		                initialTreeDepth: 6,
	
		                animationDurationUpdate: 750
	
		            }
		        ]
		    });  
		if (option && typeof option === "object") {
		    myChart.setOption(option, true);
		}
	};	
	
	var $topToBottomPlot  =  function(DivID,data){
		var dom = document.getElementById(DivID);
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		myChart.hideLoading();
		myChart.setOption(option = {
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
    	        calculable : true,
		        tooltip: {
		            trigger: 'item',
		            triggerOn: 'mousemove'
		        },
		        series:[
		            {
		                type: 'tree',

		                data: [data],

		                left: '0%',
		                right: '0%',
		                top: '5%',
		                bottom: '5%',

		                symbol: 'emptyCircle',

		                orient: 'vertical',

		                expandAndCollapse: true,
		                initialTreeDepth: 6,
		                label: {
		                    normal: {
		                        position: 'top',
		                        rotate: -90,
		                        verticalAlign: 'middle',
		                        align: 'right',
		                        fontSize: 9
		                    }
		                },

		                leaves: {
		                    label: {
		                        normal: {
		                            position: 'bottom',
		                            rotate: -90,
		                            verticalAlign: 'middle',
		                            align: 'left'
		                        }
		                    }
		                },

		                animationDurationUpdate: 750
		            }
		        ]
		    });  
		if (option && typeof option === "object") {
		    myChart.setOption(option, true);
		}
	};