acanvas = angular.module('acanvas', []);
acanvas.factory('AcanvasService', function () {
	return {
	    queryImages: function(filter){
		    //just return a mock data
			if(!filter){
				return [{
				  src: '_mockdata/101311698.png'
				}, {
				  src: '_mockdata/99106294.png'
				}, {
				  src: '_mockdata/101311698.png'
				}, {
				  src: '_mockdata/99106294.png'	
				}, {
				  src: '_mockdata/101311698.png'
				}, {
				  src: '_mockdata/99106294.png'	
				}];
			} else {
				return [{
				  src: '_mockdata/99106294.png'
				}];			
			}
		},
		
		saveImage: function(data){
		    alert(data);
		}
	};
});
