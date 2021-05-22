var $plotlyHeatmap = function(id,data,title){
	 /*var data = [
                 {
                   z: [[1, 0.3, 30, 0.5, 1,67], [20, 1, 60, 80, 30,34], [30, 60, 1, -10, 20,-100]], //可视化的矩阵
                   x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Sunday'], //x轴题目
                   y: ['Morning', 'Afternoon', 'Evening'], //y轴题目
                   type: 'heatmap',
                   zmin:-10,
                   zmax:80, 
                 //设置热图颜色映射，可以自己设置([[0, '#3D9970'],[1, '#001f3f']] `[[0, 'rgb(0,0,255)', [1, 'rgb(255,0,0)']]`)，也可以使用默认映射颜色(Greys,YlGnBu,Greens,YlOrRd,Bluered,RdBu,Reds,Blues,Picnic,Rainbow,Portland,Jet,Hot,Blackbody,Earth,Electric,Viridis,Cividis)，
                   colorscale: 'YlGnBu',  //YlGnBu Poland
                   reversescale: true, //Reverses the color mapping
                   //showscale: true //不加热图的color bar
                 }
               ];*/
        var layout = {
        		  title: title,
        		  /*margin: {
        			    l: 120
        			  },*/
        		  annotations: [],
        		  //autosize: true,
        		  xaxis: {
        		    ticks: '',
        		    tickangle: 90, //x轴标题90度角展示
        		    side: 'top',
        		    automargin:true //自动调整留给x轴，y轴的空间大小，自动展示x轴，y轴标题
        		  },
        		  yaxis: {
        		    ticks: '',
        		    ticksuffix: ' ',
        		    automargin:true, //
        		    //tickangle: 90,
        		    /*width: 700,
        		    height: 700,*/
        		    autosize: true
        		  }
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
		Plotly.newPlot(id, data, layout, config); 
};


var $plotlyHeatmapGEO = function(id,data,title){
	 /*var data = [
                {
                  z: [[1, 0.3, 30, 0.5, 1,67], [20, 1, 60, 80, 30,34], [30, 60, 1, -10, 20,-100]], //可视化的矩阵
                  x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Sunday'], //x轴题目
                  y: ['Morning', 'Afternoon', 'Evening'], //y轴题目
                  type: 'heatmap',
                  zmin:-10,
                  zmax:80, 
                //设置热图颜色映射，可以自己设置([[0, '#3D9970'],[1, '#001f3f']] `[[0, 'rgb(0,0,255)', [1, 'rgb(255,0,0)']]`)，也可以使用默认映射颜色(Greys,YlGnBu,Greens,YlOrRd,Bluered,RdBu,Reds,Blues,Picnic,Rainbow,Portland,Jet,Hot,Blackbody,Earth,Electric,Viridis,Cividis)，
                  colorscale: 'YlGnBu',  //YlGnBu Poland
                  reversescale: true, //Reverses the color mapping
                  //showscale: true //不加热图的color bar
                }
              ];*/
       var layout = {
       		  title: title,
       		  margin: {
       		    t: 170
       		  },
       		  /*margin: {
       			    l: 120
       			  },*/
       		  annotations: [],
       		  //autosize: true,
       		  xaxis: {
       		    ticks: '',
       		    tickangle: 90, //x轴标题90度角展示
       		    side: 'top',
       		    automargin:true //自动调整留给x轴，y轴的空间大小，自动展示x轴，y轴标题
       		  },
       		  yaxis: {
       		    ticks: '',
       		    ticksuffix: ' ',
       		    automargin:true, //
       		    //tickangle: 90,
       		    /*width: 700,
       		    height: 700,*/
       		    autosize: true
       		  }
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
		Plotly.newPlot(id, data, layout, config); 
};
