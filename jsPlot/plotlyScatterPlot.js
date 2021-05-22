var $plotlyScatterPlot = function(id,data,xtitle,ytitle,cancertype){
	            /*  var trace1 = {
	        		    		  x: [1, 2, 3, 4, 5,4,6,3,65,2,6,3,8,4,8,4,8,4,1,4,2,6,6,3,8,4,8,4,8,4,1,4,2,6],
	        		    		  y: [1, 6, 3, 6, 1,5,6,95,8,0,4,8,0,0,3,5,8,5,89,54,8,9,6,95,8,0,4,6,23,7,4,67,6,4],
	        		    		  mode: 'markers+text',
	        		    		  type: 'scatter',
	        		    		  name: 'GBM',
	        		    		  //text: ['TCGA SAMPLE1', 'TCGA SAMPLE2', 'TCGA SAMPLE3', 'TCGA SAMPLE4', 'TCGA SAMPLE5'],
	        		    		  textposition: 'top center',
	        		    		  textfont: {
	        		    		    family:  'Raleway, sans-serif'
	        		    		  },
	        		    		  marker: { size: 12 } //设置点大小
	        		    		};*/
	   // var data = [trace1];
	   //title: Expression of lncRNA-target across TCGA cancer samples
           var layout = {	
	    		  title:"Expression of " + xtitle +"-"+ ytitle +" across TCGA "+cancertype,
	    		  xaxis: {
	    			title : xtitle + " (TPM)",//x轴标题
		    	    showgrid: true,
		    	    zeroline: true,
		    	    showticklabels: true,  
	    		    //range: [ 0.75, 5.25 ]
	    		  },
	    		  yaxis: {
	    			title: ytitle + " (TPM)", //y轴标题  
	    			zerolinecolor: 'rgb(255, 255, 255)',
			        zerolinewidth: 2,
	    		    //range: [0, 8]
	    		  },
	    		};
	    		var config = {
						  scrollZoom: true,
						  //responsive: true,
						  displayModeBar: true,
						  displaylogo: false,
						  toImageButtonOptions: {
						    format: 'svg', // one of png, svg, jpeg, webp
						    filename: 'custom_image',
						    height: 500,
						    width: 700,
						    scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
						  }
				};
	    		Plotly.newPlot(id, data,layout,config);
};


var $plotlyScatterPlotGEO = function(id,data,xtitle,ytitle,cancertype){
    /*  var trace1 = {
		    		  x: [1, 2, 3, 4, 5,4,6,3,65,2,6,3,8,4,8,4,8,4,1,4,2,6,6,3,8,4,8,4,8,4,1,4,2,6],
		    		  y: [1, 6, 3, 6, 1,5,6,95,8,0,4,8,0,0,3,5,8,5,89,54,8,9,6,95,8,0,4,6,23,7,4,67,6,4],
		    		  mode: 'markers+text',
		    		  type: 'scatter',
		    		  name: 'GBM',
		    		  //text: ['TCGA SAMPLE1', 'TCGA SAMPLE2', 'TCGA SAMPLE3', 'TCGA SAMPLE4', 'TCGA SAMPLE5'],
		    		  textposition: 'top center',
		    		  textfont: {
		    		    family:  'Raleway, sans-serif'
		    		  },
		    		  marker: { size: 12 } //设置点大小
		    		};*/
// var data = [trace1];
//title: Expression of lncRNA-target across TCGA cancer samples
var layout = {	
	  title:"Expression of " + xtitle +"-"+ ytitle +" across GEO "+cancertype,
	  xaxis: {
		title : xtitle,//x轴标题
	    showgrid: true,
	    zeroline: true,
	    showticklabels: true,  
	    //range: [ 0.75, 5.25 ]
	  },
	  yaxis: {
		title: ytitle, //y轴标题  
		zerolinecolor: 'rgb(255, 255, 255)',
        zerolinewidth: 2,
	    //range: [0, 8]
	  },
	};
	var config = {
			  scrollZoom: true,
			  //responsive: true,
			  displayModeBar: true,
			  displaylogo: false,
			  toImageButtonOptions: {
			    format: 'svg', // one of png, svg, jpeg, webp
			    filename: 'custom_image',
			    height: 500,
			    width: 700,
			    scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
			  }
	};
	Plotly.newPlot(id, data,layout,config);
};
