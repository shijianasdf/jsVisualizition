var downloadFile = function(element,fileName,content){
    element.attr("download",fileName);
    element.attr("href",content);
};
var $networkVisualization = function(nodes,edges){
 cy = cytoscape({
    container: document.getElementById('cytoscapeweb'),
    elements:{
        nodes:nodes,
        edges:edges
    },
    style: cytoscape.stylesheet()
            .selector('node')
            .css({
                'content': 'data(id)',
                'text-valign': 'top',
                'color': '#000000',
                'text-outline-width': 0,
                'background-color': 'data(nodecolor)',
                'text-outline-color': '#000000',
                'shape': 'data(favorshape)',
//                'border-width' : 2,
//            	'border-style' : 'solid',
//            	'border-color' : '#666666'

            })
            .selector('edge')
            .css({
                'curve-style': 'bezier',
                'line-color': 'data(edgecolor)',
                'width': 1,
                'line-style':'data(linestyle)'
            })
            .selector(':selected')
            .css({
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'black',
                'source-arrow-color': 'black'
            })
            .selector('.faded')
            .css({
                'opacity': 0.5,
                'text-opacity': 1
             }),
    layout: {
        name: 'random',
        padding: 30
    },
    ready:function(){
    	window.cy = this;     
    	cy.elements().unselectify(); 
    	cy.on('tap', 'node', function(e){
    	    var node = e.target; 
    	    var neighborhood = node.neighborhood().add(node);       
    	    cy.elements().addClass('faded');
    	    neighborhood.removeClass('faded');
    	  });     
    	  cy.on('tap', function(e){
    	    if( e.target === cy ){
    	      cy.elements().removeClass('faded');
    	    }
    	  });            
        $('#circle').click(function(){
            var layout = cy.layout({ name: 'circle' });
            layout.run();
        });
        $('#grid').click(function(){
            var layout = cy.layout({ name: 'grid' });
            layout.run();
        });
        $('#arbor').click(function(){
            var layout = cy.layout({ name: 'arbor' });
            layout.run();
        });
        $('#cola').click(function(){
            var layout = cy.layout({ name: 'cola' });
            layout.run();
        });
        $('#cose').click(function(){
            var layout = cy.layout({ name: 'cose' });
            layout.run();
        });
    }
});
 var panzoom = {
    zoomFactor: 0.05, // zoom factor per zoom tick
    zoomDelay: 45, // how many ms between zoom ticks
    minZoom: 0.1, // min zoom level
    maxZoom: 10, // max zoom level
    fitPadding: 50, // padding when fitting
    panSpeed: 10, // how many ms in between pan ticks
    panDistance: 10, // max pan distance per tick
    panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
    panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
    panInactiveArea: 8, // radius of inactive area in pan drag box
    panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
    zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
    fitSelector: undefined, // selector of elements to fit
    animateOnFit: function(){ // whether to animate on fit
        return false;
    },
    fitAnimationDuration: 1000, // duration of animation on fit
    // icon class names
    sliderHandleIcon: 'fa fa-minus',
    zoomInIcon: 'fa fa-plus',
    zoomOutIcon: 'fa fa-minus',
    resetIcon: 'fa fa-expand'
};
cy.panzoom(panzoom);
var nav = cy.navigator({  //必须叫defaults
    container: $("#navigator") // can be a HTML or jQuery element or jQuery selector
    , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
    , thumbnailEventFramerate: 30 // max thumbnail's updates per second triggered by graph updates
    , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
    , dblClickDelay: 200 // milliseconds
    , removeCustomContainer: true // destroy the container specified by user on plugin destroy
    , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
});
cy.ready(function(){	
	downloadFile($("#png"),"a.png",cy.png());
	downloadFile($("#jpg"),"a.jpg",cy.jpg());
});
cy.elements("edge").qtip({
	content: {
		title:"<Strong>Mutual Exclusivity Information</Strong>",
		text: function(){ 
			    	return ('<B>Tissue Origin</B>: '+ this.data().tissueorigin + '<br/><B>Cancer Type</B>: ' + this.data().cancertype +'<br/><B>Subtype</B>: ' + this.data().subtype+'<br/><B>The variant type of '+this.data().source + "</B>: " + this.data().aberrancetype1+ "<br/><B>The variant type of " + this.data().target + "</B>: " + this.data().aberrancetype2 + "<br/><B>Source</B>: " +this.data().evidence);		    
			},
		button:true
	},	
	position: {
		my: 'top center',
		at: 'bottom center'
	},
	style: {
		classes: 'qtip-bootstrap',
		tip: {
			width: 25,
			height: 10
		}
	},
	show: {
        event: 'mouseover',
        delay: 1000
    },
    hide:{
    	event: 'mouseout',
    	delay: 1000
    }
});
};