//该函数为某些网页中元素加上提示信息
//参数解释：
//		ID：为元素的id
//		content：要加上提示信息的文本的名字
//		position_my：位置信息，at为提示目标元素的右下角；eg:'top left'
//		position_at：位置信息，my为提示信息的左下角;eg:'top right'
function qtip(ID,content, position_my, position_at){
	$("#"+ID).qtip({
		//页面加载完成就创建提示信息元素
		prerender: true,
		//通过元素属性创建提示，如a[title]，把原有的title重命名为oldtitle
		suppress: true,
		//内容相关的设置
		content:{
			//提示信息的内容
			text:function(event,api){
				$.ajax({url:'qtipContent/'+content})
					.done(function(txt){
					api.set('content.text',txt);
					})
					.fail(function(xhr,status,error){
						api.set('content.text',status+":"+error);
					});
					return 'Loading...';
			},
			//提示信息的关闭按钮
			button:false
		},
		//样式设置
		// 这个样式设置，要自己在css中写了，这样才有用，一般没用，另一种方式可以直接修改qtip的css
		style: {
			// 以下的width和height都在qtip.css中进行了修改
			// 在其中搜索
			// 自行修改的地方
			// 可以找到
			width: 200,
			height: 500,
	        classes: 'qtip-light qtip-shadow'
	        
	    },
 	 	// 位置相关的设置
		position: {
			// 提示信息的目标元素，默认为选择器
			target:$("#"+ID),
			//at为提示目标元素的右下角，my为提示目标元素的左下角
	    	my: position_my,
	    	at: position_at,
	    	// 使提示信息在指定目标内可见，不会超出边界
	    	viewport:false,
	    	// 位置调整方法，精确的xy坐标
	    	adjust:{
	    		method: 'shift',
	    		// screen for qtip中的滚动条，防止超出页面范围
	    		screen : true
	    		}
	 
	 		},
	 	// 显示提示的相关设置
	  	show:{
			// 事件名称，默认为鼠标移到时
			event:'mouseenter',
			// 隐藏其他提示
			solo:true,
			// 页面加载完就显示
			ready:false,
		},
		// 隐藏提示的相关设置
		hide:{
			event:'mouseleave'
		}
	});
}