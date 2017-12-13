var myapp=angular.module('myApp', []); //nameOfModule and dependencyArray
  myapp.controller('MyCtrl',function($scope){//create a controller and add scope to it
    //and it is a dependency injection AND TO THE SCOPE WE CAN ADD DATA
    //map this controller to html component and we can add it to n components

    $scope.title = "AngularJs Training";
    $scope.sayHi=function(){
        $scope.title="modified from controller";
    };

    $scope.students = [
        {
            name : 'Mahesh',
            age : '28',
            dob : '12-Aug-1989'
        },
        {
            name : 'Mahendra',
            age : '32',
            dob : '12-Aug-1985'
        },
        {
            name : 'Syamala',
            age : '36',
            dob : '12-Aug-1982'
        },
        {
            name : 'Madhavi',
            age : '30',
            dob : '12-Aug-1987'
        }
    ];

    $scope.getDetails=function(student){
        console.log(student);
        $scope.selectedStudent=student;
    }

  });