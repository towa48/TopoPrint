(function(ol) {
	'use strict'
	
	var openCycleMapLayer = new ol.layer.Tile({
	  source: new ol.source.OSM({
		attributions: [
		  new ol.Attribution({
			html: 'All maps &copy; ' +
				'<a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
		  }),
		  ol.source.OSM.ATTRIBUTION
		],
		url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
	  })
	});

	var map = new ol.Map({
	  layers: [
		openCycleMapLayer
	  ],
	  target: 'map',
	  controls: ol.control.defaults({
		attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
		  collapsible: false
		})
	  }),
	  view: new ol.View({
		maxZoom: 18,
		center: [-244780.24508882355, 5986452.183179816],
		zoom: 15
	  })
	});

})(ol);