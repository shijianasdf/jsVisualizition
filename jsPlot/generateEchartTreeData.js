var $conductArrayJSON = function(ArrayJSON){
	   //处理对象数组，将influencedfunction,regulatorymechanism中带分号的分开
	   var newArrayJSON = [];
	   for(var i =0;i<ArrayJSON.length;i++){
		   /* var flag1 = ArrayJSON[i].regulatorymechanism.indexOf(";"); //indexOf返回字符串中;所在的位置,如果不存在，返回-1.
		   if(flag1 != -1){
			   alert("shi");
			   var temp1 = ArrayJSON[i].regulatorymechanism.split(";");//根据;对字符串进行分割，例如"shi;jian"返回字符串数组["shi","jian"].
			   alert(temp1);
			   //ArrayJSON[i].regulatorymechanism = temp1[0];
	           for(var k = 0;k<temp1.length;k++){
	        	   alert("jian");
	        	   var flag = ArrayJSON[i].influencedfunction.indexOf(";");
	    		   if(flag != -1){
	    			   var temp = ArrayJSON[i].influencedfunction.split(";");
	    			   //ArrayJSON[i].influencedfunction = temp[0];
	    			   for(var j = 0;j<temp.length;j++){
	    				   alert("object");//根本就没走
	    				   tempObject = {};
	    			       tempObject.diseasename = ArrayJSON[i].diseasename;
	    			       tempObject.regulator = ArrayJSON[i].regulator;
	    			       tempObject.regulatorymechanism = temp1[k];
	    			       tempObject.target = ArrayJSON[i].target;
	    			       tempObject.influencedfunction = temp[j];
	    			       if(ArrayJSON[i].drugs == "chemoresistance" || ArrayJSON[i].drugs == "chemosensitivity")
	    			       		tempObject.drugs = ArrayJSON[i].drugs;
	    			       else
	    			       		tempObject.drugs = "NA";	    			       
	    			       newArrayJSON.push(tempObject);  
	    			   }	  
	    		   } 
			   }
		   } */
		   var flag = ArrayJSON[i].influencedfunction.indexOf(";");
		   if(flag != -1){
			   var temp = ArrayJSON[i].influencedfunction.split(";");
			   ArrayJSON[i].influencedfunction = temp[0];
			   for(var j = 1;j<temp.length;j++){
				   tempObject = {};
			       tempObject.diseasename = ArrayJSON[i].diseasename;
			       tempObject.regulator = ArrayJSON[i].regulator;
			       tempObject.regulatorymechanism = ArrayJSON[i].regulatorymechanism;
			       tempObject.target = ArrayJSON[i].target;
			       tempObject.influencedfunction = temp[j];
			       if(ArrayJSON[i].drugs == "chemoresistance" || ArrayJSON[i].drugs == "chemosensitivity")
			       		tempObject.drugs = ArrayJSON[i].drugs;
			       else
			    	   tempObject.drugs = "NA";
			       ArrayJSON.push(tempObject);
			   }	  
		   } 
		   //ArrayJSON.splice(i,1);
	   }
	   //ArrayJSON.push(newArrayJSON);
	   return ArrayJSON;
   }; 
  var $reSortRoot =function(root,value_key) {
		//console.log("Calling");
		for (var key in root) {
			if (key == "key") {
				root.name = root.key;
				delete root.key;
			}
			if (key == "values") {
				root.children = [];
				for (item in root.values) {
					root.children.push($reSortRoot(root.values[item],value_key));
				}
				delete root.values;
			}
			if (key == value_key) {
				root.value = parseFloat(root[value_key]);
				delete root[value_key];
			}
		}
		return root;
	};