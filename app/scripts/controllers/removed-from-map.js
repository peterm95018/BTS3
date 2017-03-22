/***************************************/

	    /*Currently using JSONP to prevent Cross origin issues*/
	   // $.ajax({
   	// 	//url: 'http://skynet.soe.ucsc.edu/bts/coord2.jsonp',
   	// 	url: 'http://bts.ucsc.edu:8081/location/get',
    // 	dataType: 'json',
    // 	jsonp : false,
    // 	cache: false,
    // 	jsonpCallback: 'parseResponse',
    // 	success: function(data) {
    //     console.log(data);

	   //  		$rootScope.busCount = data.length;
	   //    		if($rootScope.busCount === 0 && (!$scope.noBusMessage)){
	  	// 			$scope.showNoBuses();
	  	// 		}

	  	// 		//Add new markers if needed
	  	// 		var add;
	  	// 		for (var j = data.length - 1; j >= 0; j--) {
	  	// 			add = true;
	  	// 			for (var z = $scope.markerIDs.length - 1; z >= 0; z--) {
	  	// 				if ( $scope.markerIDs[z] === data[j].id ){
	   //    					add = false;
	   //    				}
	  	// 			};
	  	// 			if ( add ){
	  	// 				$scope.map.markers.push($scope.createMarker(data[j]));
	  	// 				$scope.markerIDs.push(data[j].id);
	  	// 				console.log('added is true');
	  	// 			}
	  	// 		};
	  	// 		//sanitize marker array for old markers
	  	// 		var remove;
	  	// 		for (var k = $scope.map.markers.length - 1; k >= 0; k--) {
	  	// 			remove = true;
	  	// 			for (var l = data.length - 1; l >= 0; l--) {
	  	// 				if($scope.map.markers[k].id === data[l].id){
	  	// 					remove = false;
	  	// 				}
	  	// 			};
	  	// 			if(remove === true){
	  	// 				for (var f = $scope.markerIDs.length - 1; f >= 0; f--) {
				// 				if($scope.markerIDs[f] === $scope.map.markers[k].id){
				// 					$scope.markerIDs.splice(f,1);
				// 				}
	  	// 				}
	  	// 				$scope.map.markers.splice(k,1);
	  	// 			}
	  	// 		};

    //   			//animate marker updates
	  	// 		for (var d = $scope.map.markers.length - 1; d >= 0; d--) {
	  	// 			for (var e = data.length - 1; e >= 0; e--) {
	  	// 				if($scope.map.markers[d].id === data[e].id){
	  	// 					if($rootScope.notMobile){
	  	// 					animateBus(d,data[e]);
	  	// 					}else{
	  	// 						$scope.map.markers[d].latitude = data[e].latitude;
	  	// 						$scope.map.markers[d].longitude = data[e].longitude;
	  	// 					}
	  	// 				}
	  	// 			};
	  	// 		};

    //   			_.each($scope.map.markers, function (marker) {
				//     marker.closeClick = function () {
				//        // marker.showWindow = false;
				//         _.defer(function(){$scope.$apply();});
				//     };
				//     marker.onClicked = function () {
				//        $scope.map.center = {latitude: marker.latitude,
		  //       			longitude: marker.longitude};
				//        onClickedBus(marker);
				       
				//     };
				// });

				// timeoutID.push($timeout(getData, 3000));

	   //    		$window.onblur = function () {
	   //    			for (var i = timeoutID.length - 1; i >= 0; i--) {
	   //    				$timeout.cancel(timeoutID[i]);
	   //    			};
	   //    			timeoutID.splice(0,timeoutID.length);
				// 	//$timeout.cancel(timeoutID);
				// 	$timeout.cancel($scope.animateTimeout);
				// 	$scope.map.markers.splice(0,$scope.map.markers.length);
				// 	$scope.markerIDs.splice(0,$scope.markerIDs.length);
					
				// };
				// $window.onfocus = function () {
				// 	//Restart data refresh requests
				// 	getData();
				// }; 