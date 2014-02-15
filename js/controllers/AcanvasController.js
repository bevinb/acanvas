acanvas.controller("AcanvasController", function ($scope) { 
    $scope.$on("imgclick", function (event, msg) {
        console.log("parent", msg); 
        $scope.$broadcast("pimgclick", msg); 
    }); 
}).controller("ImageListController", function ($scope, AcanvasService) { 
    $scope.imgs = AcanvasService.queryImages();

	$scope.search = function(){
		$scope.imgs = AcanvasService.queryImages($scope.keyword);
	};
	
	$scope.addNode = function(src){
	    $scope.$emit("imgclick", src); 
	};
}).controller("KineticController", function ($scope, AcanvasService) { 
    $scope.isCanvasShowed = true;
	
	$scope.toggleCanvas = function(){
		$scope.isCanvasShowed = !$scope.isCanvasShowed;
	};
	
	$scope.save = function(){
		$scope.stage.toDataURL({
		    mimeType: 'image/png',
		    callback: AcanvasService.saveImage
		});
	};

    $scope.$on("pimgclick", function (event, msg) { 
        console.log("KineticController", msg); 
		$scope.addImage(msg);
    }); 
}); 

