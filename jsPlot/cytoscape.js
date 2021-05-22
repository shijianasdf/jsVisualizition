//画cytoscape网络图：
function drawPPI(ajaxnode, ajaxedge, ajaxdes){
	//alert(ajaxnode);alert(ajaxedge);alert(ajaxdes);
	PPI(eval('('+ajaxnode+')'),eval('('+ajaxedge+')'),eval('('+ajaxdes+')'));	
	if(document.getElementById("network").innerHTML.match(/.*cytoscapeweb.*$/)){
		return true;
	}
	
} 
//下载格式为png的image
//aLink为超链接a
//filename为保存的文件名
//content为文件内容
function downloadFile(aLink,fileName,content){
	aLink.download=fileName;
	aLink.href="data:image/png;base64,"+content;
}
//给用的ID对应Canvas元素加颜色
function loadCanvas(id, color){
	var canvas = document.getElementById(id);
	//getContext() 方法返回一个用于在画布上绘图的环境;参数 contextID 指定了您想要在画布上绘制的类型。当前唯一的合法值是 "2d"，它指定了二维绘图，并且导致这个方法返回一个环境对象，该对象导出一个二维绘图 API。
    var context = canvas.getContext('2d');
	//width和height是<canvas id="canvas1" width="25" height="25"></canvas>，一个方形的画板
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 10;
				//beginPath() 方法开始一条路径，或重置当前的路径。
    context.beginPath();
				//arc() 方法创建弧/曲线（用于创建圆或部分圆）。context.arc(x,y,r,sAngle,eAngle,counterclockwise);x:圆的中心的 x 坐标。y:圆的中心的 y 坐标。r:圆的半径。sAngle:起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。eAngle:结束角，以弧度计。counterclockwise:可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
				//fillStyle:设置或返回用于填充绘画的颜色、渐变或模式
    context.fillStyle = color;
				//fill() 方法填充当前的图像（路径）。默认颜色是黑色。请使用 fillStyle 属性来填充另一种颜色/渐变。
    context.fill();
				//lineWidth 设置或返回当前的线条宽度 
    context.lineWidth = 3;
				//strokeStyle 设置或返回用于笔触的颜色、渐变或模式 
    context.strokeStyle = '#B0E2FF';
  	//stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
    context.stroke();
}
		   //网络刻画函数
function PPI(node,edge,des ) {
	var div_id = "cytoscapeweb";
	var network_json = {

			data: {
			       nodes: node,
				   edges: edge
		                       }
	};
	//视觉风格有三部分构成：global，nodes，nodes
	var visual_style = {
			//全局设置
			global: {
				backgroundColor: "#FFFFFF"
			},
			//节点设置
			nodes: {
				shape: "ELLIPSE",
				borderWidth: 2,//边框的粗细
		    	//边框颜色；  					
				borderColor: {
					defaultValue:"#157DEC"
				},
				//passthroughMapper:获得可传递的节点大小值；
				size: { passthroughMapper: { attrName: "weight" } },
				//
            	color: {
            		defaultValue: "#fff999",//#fff999
            		//discreteMapper:独立属性设置；
            		//attrName:数据属性的的名字；
            		//
				        	discreteMapper: {
					        	attrName: "id",//从ID提取颜色；
					        	entries: des
					        	/*entries:数据的格式数组：
					        	attrValue: The edge or node data attribute value
					        	value: The visual style value (e.g. a color code).
					        	例子：attrValue: "catalytic", value: "#ff0000"
					        	*/
					        	}
				      	 },
        
				selectionBorderColor:"#000000",//选择的边框颜色
				hoverGlowOpacity:1,//鼠标在节点上边时；是不炫目，默认为0，不炫目；
				hoverBorderColor:"#000000",//鼠标在节点上是，边框颜色
				hoverGlowColor:"#B0E2FF",//鼠标在节点上时，外周显示的颜色；
				label: { passthroughMapper: { attrName: "id" } },
				labelHorizontalAnchor: "center",//标签的水平位置；
				labelFontColor:"#000000",//节点标签的颜色；
				labelGlowOpacity:1,// 标签的透明度；0完全透明，1不透明；
				labelGlowColor:"#FCFCFC",//鼠标在上方，炫目的标签颜色
				labelVerticalAnchor:"top",//标签的竖直方向位置：top, middle or bottom
				labelFontWeight:"bold",//标签字体；normal or bold. The default is "normal".
				labelFontSize:12,//标签字体大小；
				selectionColor:"#AB8EC6",//选择节点的填充颜色；
				opacity:1.0//节点不透明度；0完全透明，1不透明；
			},
			//边设置
			edges: {
				width: 3,//边线的粗细；
				color: "#1E669B"//边的颜色；
			}
			
	};
	var options = {
		swfPath: "./plugins/cytoscape_web/swf/CytoscapeWeb",//swf所在的路径，但不要拓展名
		flashInstallerPath: "./plugins/cytoscape_web/swf/playerProductInstall"//Flash Player
	};
	//参考：http://cytoscapeweb.cytoscape.org/documentation#section/org.cytoscapeweb.Visualization
	var vis = new org.cytoscapeweb.Visualization(div_id, options);

	//图像加载完毕，有一个回应，
	vis.ready(function() {
		//根据元素的ID获得元素
		document.getElementById("div_1").onclick = function(){ 
		   vis.layout('ForceDirected');
		};
		document.getElementById("div_2").onclick = function(){ 
		   vis.layout('CompoundSpringEmbedder');
		};
		document.getElementById("div_3").onclick = function(){ 
		   vis.layout('Circle');
		};
		document.getElementById("div_4").onclick = function(){ 
		   vis.layout('Radial');
		};
		document.getElementById("div_5").onclick = function(){ 
		   vis.layout('Tree');
		};	
		
		document.getElementById("pdf").onclick = function(){
			//downloadFile(document.getElementById("ddpng"),"networkDisply.png",vis.png());
			downloadFile(document.getElementById("ddpdf"),"networkDisply.pdf",vis.pdf());
		};
		document.getElementById("png").onclick = function(){
			downloadFile(document.getElementById("ddpng"),"networkDisply.png",vis.png());
			//downloadFile(document.getElementById("ddpng"),"networkDisply.pdf",vis.pdf());
		};
	});
	
	
	var draw_options = {
		// 默认的layout
		layout: "ForceDirected",	
		network: network_json,		
		visualStyle: visual_style,
		panZoomControlVisible: true 
	};
	vis.draw(draw_options);
	//刻画图例圆圈刻画；
	//loadCanvas("canvas1", "#e33100");
	loadCanvas("canvas2", "#e5e5e5");
	loadCanvas("canvas3", "rgb(25,110,160)");
};