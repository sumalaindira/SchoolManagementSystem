

var formModule = angular.module('formModule', [])
.controller('FormController', [ '$http', '$scope', function($http, $scope) {
		var self = this;
		
		 $http.post('student/getTeachers').then(function(response) {
				$scope.data = response.data;
				if($scope.data.successful)
				{
					$scope.teachers = $scope.data.responseObject;
				}
				else
				{
					console.log("Client error while getting data");
				}
			},
			function(response)
			{
				console.log("Server error while getting data");
			});

		    
		 $scope.getCourse = function(totalObj)
			{
				$http.post('student/getCourse', totalObj.teacherid).then(function(response)
				{
					$scope.data = response.data;  
					if($scope.data.successful)   
					{
						$scope.courses = $scope.data.responseObject;
						$scope.data = {object : totalObj};
					}
					else
					{
						console.log("Client error while getting data");
					}
				},
				function(response)
				{
					console.log("Server error while getting data");
				});
			}
		    
		 $scope.getStudentData = function(aadhaar) {
		        $http.post('student/getStudentData', aadhaar).then(function(response) {
		        	$scope.data = response.data;
		       
     				if($scope.data.successful)   
					{
						$scope.students = $scope.data.responseObject;
						
						if ($scope.students == null || $scope.students == undefined || $scope.students == "") {
							
							alert("Hello!Students not assign to this Courses!!");
							window.location.reload();
			   			}  
						else{   
							$("#studentDiv").show();
						}
						//$scope.data = {object : totalObj};  
					}
					else
					{
						console.log("Client error while getting data");
					}
				},
				function(response)
				{
					console.log("Server error while getting data");
				});
			}
		       
			
} ]);           