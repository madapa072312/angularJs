angular.module('myApp',[]);
angular.module('myApp')
       .component('myButton',{
        templateUrl:'button.tmp.html',
        bindings:{
            onClickButton: '&',
            myTitle:'@'
        },
        controller: function(){
            this.onClick=function(){
                this.onClickButton();
            };
        }        
       }) ;


angular.module('myApp')
       .component('app',{
        templateUrl:'app.tmp.html',
        controller:function(){
            this.firstTitle='First Button';
            this.SecondTitle='Second Button';
            this.OnClickConsole = function(){
                console.log('Mahesh');
            };

            this.OnClickAlert = function(){
                alert('Hi Mahesh');
            };
        }
       });