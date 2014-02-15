acanvas.directive('kcanvas', ['$rootScope', function ($rootScope) {
    var kineticContainer = '<div id="container"></div>';
	var _x = 20, _y = 20;
	return {
		restrict: 'EA',
		template: '<div id="container"></div>',
		link: function(scope, iElement, iAttrs) {
			scope.stage = new Kinetic.Stage({
				container: 'container',
				width: 600,
				height: window.innerHeight - 20
			});
 
			scope.addImage = function(src) {
				var layer = new Kinetic.Layer();
				var img = new window.Image();
			    
				img.onload = function(){
					img= new Kinetic.Image({ 
						draggable: true,
						resizable: true,
						x: _x, 
						y: _y, 
						width: img.width, 
						height: img.height, 
						image: img
					});
					_x += 20, _y += 20;
					layer.add(img)
					scope.stage.add(layer);
					layer.draw();				
				};
				img.crossOrigin = "*";
				img.src = src;

			};
			
			scope.saveCanvas = function(){
			    return scope.stage.toImage();
			};		
		}
	};
}]);

function KineticCtrl($scope) {

}
