angular.module('myApp',[]);
angular.module('myApp')
.component('app',{
 templateUrl:'app.component.html',
 controller:function(){
     this.greeting='Hello World';

     this.dob = '1513061958000';

     this.num = 12;
}
});

angular.module('myApp')
    .filter('myName',function(){
        return function(value,extra){
            return "Custom filter greeting is "+ value + extra;
        };
    });
angular.module('myApp')
    .filter('ageCheck',function(){
        return function(value,check){
            if(!check){
                if(parseInt(value)<10){
                    return "You are Junior. You are age is "+value+" and check is 10";
                }else{
                    return "You are Senior. You are age is "+value+" and check is 10";
                }
            }else{
                if(parseInt(value)<parseInt(check)){
                    return "You are Junior. You are age is "+value+" and check is "+check;
                }else{
                    return "You are Senior. You are age is "+value+" and check is "+check;
                }
            }
        };
    });    