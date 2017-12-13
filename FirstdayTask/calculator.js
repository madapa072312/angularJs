var myCalci=angular.module('myCalculators', []); 

myCalci.component('myCalculator',{
    // template: '<div>my custom calculator</div>',
    templateUrl: 'myCal.tpl.html',
    controller: 'myCalControl',
    bindings:{
        resultText: '@'
    } 
});

myCalci.controller('myCalControl',function(){
    this.val1=0;
    this.val2=0;
    this.isCalculated = false;
    this.onInputChange=function(){
        this.isCalculated = false;
    }
    this.result = 0;

    this.add=function(a,b){
        this.result = 0;
        this.isCalculated = true;
        this.result=parseInt(a)+parseInt(b);
    };
    this.sub=function(a,b){
        this.result = 0;
        this.isCalculated = true;
        this.result=parseInt(a)-parseInt(b);
    };
    this.mult=function(a,b){
        this.result = 0;
        this.isCalculated = true;
        this.result=parseInt(a)*parseInt(b);
    };
    this.divide=function(a,b){
        this.result = 0;
        this.isCalculated = true;
        this.result=parseInt(a)/parseInt(b);
    };
});

myCalci.controller('MyCalciCtrl',function($scope){
    $scope.val1=0;
    $scope.val2=0;
    $scope.isCalculated = false;
    $scope.onInputChange=function(){
        $scope.isCalculated = false;
    }
    $scope.result = 0;

    $scope.add=function(a,b){
        $scope.result = 0;
        $scope.isCalculated = true;
        $scope.result=parseInt(a)+parseInt(b);
    };
    $scope.sub=function(a,b){
        $scope.result = 0;
        $scope.isCalculated = true;
        $scope.result=parseInt(a)-parseInt(b);
    };
    $scope.mult=function(a,b){
        $scope.result = 0;
        $scope.isCalculated = true;
        $scope.result=parseInt(a)*parseInt(b);
    };
    $scope.divide=function(a,b){
        $scope.result = 0;
        $scope.isCalculated = true;
        $scope.result=parseInt(a)/parseInt(b);
    };
});