function Events($http , $scope){
	$http.get('http://localhost:8080/EventTracker/events.json').
	success(function(data){
		$scope.events = data;
		
	});
}