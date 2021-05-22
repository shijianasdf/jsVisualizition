/*var x = ['BRCA', 'BRCA', 'BRCA', 'BRCA', 'BRCA', 'COAD','COAD','COAD',
                 'COAD', 'COAD', 'READ', 'READ', 'READ', 'READ','READ','UCEC','UCEC','UCEC','UCEC','UCEC']
var x1 = ['BRCA', 'BRCA', 'BRCA', 'COAD','COAD','COAD',
                  'READ', 'READ', 'READ', 'UCEC','UCEC','UCEC']
var cancer = {
  y: [0.6, 0.7, 0.3, 0.6,  0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2,0.6, 0.7, 0.3, 0.6, 0.5, 0.7, 0.9, 0.5, 0.8],
  x: x,
  name: 'cancer',
  boxpoints: 'all',
  pointpos: 0,
  jitter: 0.3,
  marker: {color: 'rgb(7,40,89)'},
  type: 'box'
};
var normal = {
  y: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],
  x: x1,
  name: 'normal',
  boxpoints: 'all',
  pointpos: 0,
  jitter: 0.3,
  marker: {color:'#3D9970'},
  type: 'box'
};

var data = [cancer,normal];*/

var $plotlyBoxplot = function(id,data,gene,yrange){
	       var layout = {
			  title: 'The Differential Expression Of ' + gene,
			  //autosize: true,
			  yaxis: {
			    title: 'log2(TPM+1)', //y轴标题
			    zeroline: true,
			    //autorange: true, //基于数据自动调节y轴的刻度
			    //range: [0,30], //y轴从0到30
			    range: yrange,
			    zerolinecolor: 'rgb(255, 255, 255)',
		        zerolinewidth: 2
		        
			  },
			  xaxis: {
				    title : 'TCGA Cancer Type',//x轴标题
		    	    showgrid: true,
		    	    zeroline: true,
		    	    showticklabels: true
		      },
			  boxmode: 'group',
			  selectedpoints:100,
			  //width: "100%",
			  //autosize:true
			};
	       
	    	  /*yaxis: {
	    	    zeroline: false,
	    	    gridcolor: 'white'
	    	  },*/
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

			Plotly.newPlot(id, data, layout, config); 
};

var $plotlyGeoBoxplot = function(id,data,gene,yrange){
    var layout = {
		  title: 'The Differential Expression Of ' + gene,
		  //autosize: true,
		  yaxis: {
		    title: 'exp', //y轴标题
		    zeroline: true,
		    //autorange: true, //基于数据自动调节y轴的刻度
		    //range: [0,30], //y轴从0到30
		    range: yrange,
		    zerolinecolor: 'rgb(255, 255, 255)',
	        zerolinewidth: 2
	        
		  },
		  xaxis: {
			    title : 'GEO datasets',//x轴标题
	    	    showgrid: true,
	    	    zeroline: true,
	    	    showticklabels: true
	      },
		  boxmode: 'group',
		  selectedpoints:100,
		  //width: "100%",
		  //autosize:true
		};
    
 	  /*yaxis: {
 	    zeroline: false,
 	    gridcolor: 'white'
 	  },*/
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

		Plotly.newPlot(id, data, layout, config); 
};


