/**
 * 
 */
 function heatmapDataFormat(data){
	 //鍔熻兘鐘舵€乴abel
	 var xCategories=data.function_status;
	 var yCategories=data.sample_name.split(";");
	 
	 //鏋勯€爃eatmap鏁版嵁鏍煎紡
	 var gsvascore=data.infoData;
	 var heatmapData=[];
	 for(var i=0;i< gsvascore.length;i++){
		 heatmapData[i]=gsvascore[i].gsva_score.split(";");
	 }

	 
	 var data=[];
	 var count=0;
	 var maxCond=[];
	 var minCond=[];
	 var max;
	 var min;

	 for(var i=0;i<heatmapData.length;i++){
		 maxCond[i] = Math.max.apply(null, heatmapData[i]);
		 minCond[i] = Math.min.apply(null, heatmapData[i]);
		 for(var j=0;j<heatmapData[i].length;j++){
			 data[count]={'x': j, 'y': i, 'value': Number(heatmapData[i][j])};
			 count=count+1;
		 }
	 }
	 //console.log(maxCond);
	 //console.log(minCond);
	 max=Math.max.apply(null, maxCond);
	 min=Math.max.apply(null, minCond);
	 
	 res=[xCategories, yCategories, max, min, data]
	 return res;
 }