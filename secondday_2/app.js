angular.module('myApp',[]);
angular.module('myApp')
    .component('app',{
        templateUrl:'app.tmp.html',
        controller:function(){
            this.dogList=[
                'https://i.ytimg.com/vi/3ggIHfwkIWM/maxresdefault.jpg',
                'https://i.ytimg.com/vi/gvfDAcKzCco/maxresdefault.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRSZneQxK6wPWw8739LiBrbB_59tR1mbRZMYPcxnVEFoIEA5i6A',
                'https://i.ytimg.com/vi/Sr3za5PzLWU/maxresdefault.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmzzzD4hfTn3K7C99gktjEQZa0kro3bvv_aGr8Gmydl-mqDkG6AA'                
            ];

            this.catList=[
                'http://www.qygjxz.com/data/out/56/3882120-cute-cats-pictures.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShULRQ6pu7XSBJiglQzaEAhl7AyU2z6ybr_LXwb-ew4kZ43gUS',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf67sWo6L5fEx_4LDzcNywUySLFhdXmkspwfxjqge5qrI_ruhQpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5k-FpTHERg5od00dhMQrwg7CyxsSynKC7jbFQA5bLQd2xc9Co'
            ];
            this.catSlideShowCompleted = false;
           this.onCatSlideShowCompleted = function(){
                this.catSlideShowCompleted = true;
           };
        }
    });

angular.module('myApp')
    .component('mySlide',{
        templateUrl:'slide.tmp.html',
        bindings: {
            slideshowTitle:'@',
            slideshowItems:'<',
            onCompleted:'&'
        },
        controller:function(){
            this.active=0;
            this.goBack=function(){
                if(this.active === 0){
                    this.active=this.slideshowItems.length-1;
                }else{
                    this.active=this.active-1;
                }
            };
            this.goNext=function(){
                if(this.active === this.slideshowItems.length-1){
                    this.active=0;
                    this.onCompleted();
                }else{
                   this.active=this.active+1;
                }
            };
        }
    });


   