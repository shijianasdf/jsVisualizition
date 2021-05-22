//
// 封装DataTable插件，为了更方便之使用
// 版本 1.0
// 张冠雄
//

// 添加跳转，分别为列跳转和行跳转
// 使用时，根据需要修改
// 需要postForm.js
// 添加列的响应，点击跳转
// 一定放在DataTable初始化之前
function addColLinks(id, addLinkCol){
	$("#"+id+" tr").each(function(){
		// 對描述列進行綁定
		var colDesc = $(this).children("td:eq("+addLinkCol+")");
		// 綁定 css 樣式
		colDesc.addClass("linkTd");
		// 綁定 click 事件
		colDesc.click(function(){
			var lnchrom_id = $(this).parent().children("td:eq(0)").text();
			//var targetType = $("#targetType").val();
			post('recordInfo.action', {lnchrom_id:lnchrom_id}, "_blank");
		});
	});
}

// 添加行的响应，点击一行的任意位置跳转
function addRowLinks(id){
	$("#"+id+" tbody").on('click', 'tr', function () {
		var lncrna_name = $('td', this).eq(1).text();// 获取lncRNA name
		var target_name = $('td', this).eq(2).text();// 获取target name
		var targetType = $("#targetType").val();
		//var row=$('td',this).text();
		//alert(lncrna_name);
		post('recordInfo.action', {lncRNA_name:lncrna_name, target_symbol:target_name, targetType:targetType}, "_blank");
		//post('tableRowInfo.action', {rowID:ID});//将id号传入相应的action中进行数据库查询，得到对应的信息
	});
}

//添加行的响应，鼠标在上面的时候高亮，移走后恢复
function addRowHover(id){
	// DataTable也有对行列同时高亮，形成高亮十字线的例子
	// 但只实现了对列的高亮，似乎把这个代码和例子中的正合在一起即可，未测试
	$("#"+id+" tbody").on('mouseover', 'tr', function(){
		table.$('tr.highlight').removeClass('highlight');
		$(this).addClass('highlight');
	}).on('mouseleave', function(){
		table.$('tr.highlight').removeClass('highlight');
	});
}

// 初始化DataTable插件，此函数是最底层函数
// 如果没有特殊情况可以直接调用此函数，或直接使用DataTable的代码
// 输入变量
// id, 对哪一个<table>使用DataTable插件
// destory, ture/false, 这个用于是否重建DataTable
// 如果该id已经被DataTable构建过了，那么直接调用DataTable()的话会有错误
// 需要先destroy该DataTable
function initDataTable(id, destroy){
	table = $("#"+id).DataTable({
		// 是否搜索
		"searching": true,
		// 是否分页
		"paging": true,
		// 每页显示的条目数
		"lengthMenu": [[10,30,50,-1], [10,30,50,"All"]],
		// 是否使用jQueryUI的样式
		"jQueryUI": false,
		// 是否允许排序
		"aaSorting": [[ 0, "desc" ]],
		// 支持多列排序，参数为orderMuti
		"ordering": true,
		// 是否destroy，用于reload table
		"destroy": destroy,
		// 下载插件 -- 开始
		// 如果不需要的话需要删除
		"dom": 'T<"clear">lfrtip',
		    "oTableTools": {
		"sSwfPath": "plugins/datatables/extensions/TableTools/swf/copy_csv_xls.swf",
		"aButtons": ["xls"]
		/*"aButtons": ["copy","xls"]*/
		},
		// 下载插件 -- 结束
	});
}

function initTable(id, addLinkCol){
	// 添加列链接，一定要放在DataTable初始化之前
	addColLinks(id, addLinkCol);
	// 官方文档提到：在对$("#test")进行DataTable初始化后，如果对$("#test")进行修改，并直接重新初始化会出错
	// 原因是因为环境中已有$("#test")相应的DataTable对象
	// 因此首先判断id <table> 是否被DataTable初始化过
	// 如果已经被初始化了，使用DataTable中的destroy参数，删除之前存在的DataTable对象
	if ($.fn.dataTable.isDataTable("#"+id)){
		initDataTable(id, true);
	}else{
		initDataTable(id, false);
	}
	// 添加行样式，用以响应鼠标放上去高亮
	// 放在DataTable初始化之后
	addRowHover(id);
}

