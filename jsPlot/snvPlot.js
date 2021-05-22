// 封装 SNV plot
// 版本 1.0
// 张冠雄
// 封装的是 raphael-group 开发的 gd3 library
// 来源于 github
// https://github.com/raphael-group/gd3.git
//
// 安装步骤
/*
# 安装基础依赖
dnf install numpy numpy-f2py python3-scipy python3-networkx python3-h5py npm 
# clone gd3 library
git clone https://github.com/raphael-group/gd3.git
# 安装
cd gd3
npm install
# 注意这里需要使用 vpn http_proxy 否则必然失败

*/
// 显示此图的 div id
// 数据，见底部例子
// 样本分类，例如癌症类型，与颜色有关
// data, json format
// categories, array format
function snvPlot(id, data, categories, plotWidth, plotHeight){
	var styling = {
		height: plotHeight,
		width: plotWidth
	};
	var sampleTypes = {},
	params = {},
	vizData = [];
	params.style=styling;
	//var categories = ['BLCA', 'BRCA', 'COADREAD', 'GBM', 'HNSC', 'LUAD', 'LUSC', 'OV', 'SCNAH'];
	for(gKey in Object.keys(data)){
		var gene = Object.keys(data)[gKey],
		transcriptList = Object.keys(data[gene]);
		for(tKey in transcriptList){
		var transcript = transcriptList[tKey],
		domains = data[gene][transcript].domains,
		length = data[gene][transcript].length,
		mutations = data[gene][transcript].mutations;
		var mKeys = Object.keys(mutations);
		for(mKey in mKeys){
			var m = mKeys[mKey],
			cancer = mutations[m].dataset;
			//alert(cancer);
			sampleTypes[cancer] = 0;
		}
		vizData.push({gene: gene, transcript: transcript, domains: domains, length: length, mutations: mutations, mutationCategories: categories, proteinDomainDB: 'PFAM'});
		}
	}
	sampleTypes = Object.keys(sampleTypes);
	params.sampleTypes = sampleTypes;
	// Draw STAG1 where no scrollbar should appear
	d3.select('#'+id)
    .append('h3')
    .html(vizData[0].gene + " <small>" + vizData[0].transcript + "</small>");
	d3.select('#'+id)
      .datum(vizData[0])
      .call(gd3.transcript(params));
	
	// 紧随 SNV plot 之后，添加 legend 容器
	var container = d3.select('#'+id).append("div");
	// 设定 legend 样式
	var legend = container.append("div").style("padding", "10px");
	legend.style("left", 20).style("top", 25).style("display", "block").style("visibility", "visible");
	//var legend = container.append("div").style("background", "#fff").style("border", "1px solid #ccc").style("padding", "10px").style("position", "absolute");
	// legend 内部 div 宽度，即 legend 宽度
	var columnCategories = legend.append("div").style("min-width", plotWidth).style("width", plotWidth);
	// 排序 categories，例如排序癌症类型
	categoriesName = categories.sort();
	// 获取 categories 的颜色
	var d3color = d3.scale.category20();
	var colCategoryToColor = {};
    for (var i = 0; i < categoriesName.length; i++) {
      colCategoryToColor[categoriesName[i]] = d3color(i);
    }
    // 向 legend 区块中添加 legend 开始
	var categoryLegendKeys = columnCategories.selectAll("div").data(categoriesName).enter().append("div").style("display", "inline-block").style("font-size", "16px").style("margin-right", "10px");
	categoryLegendKeys.append("div").style("background", function(d) {
		if (gd3.color.categoryPalette) return gd3.color.categoryPalette(d);
		return colCategoryToColor[d];
	}).style("display", "inline-block").style("height", "16px").style("width", "8px");
	categoryLegendKeys.append("span").style("display", "inline-block").style("margin-left", "2px").text(function(d) {
		return d;
	});
	var categoryLegendKeyWidths = [];
	categoryLegendKeys.each(function() {
		var cWidth = this.getBoundingClientRect().width;
		categoryLegendKeyWidths.push(cWidth);
	});
	categoryLegendKeys.style("width", d3.max(categoryLegendKeyWidths) + "px").style("min-width", d3.max(categoryLegendKeyWidths) + "px");
	// 向 legend 区块中添加 legend 完毕
}


