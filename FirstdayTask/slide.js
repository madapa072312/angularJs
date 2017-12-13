var myappslide=angular.module('myAppSlide', []); 
myappslide.controller('MyCtrlslide',function($scope){
  $scope.title = "AngularJs Training";
    
  $scope.imgList = [
      'https://prismic-io.s3.amazonaws.com/netmums/9b74ff704d13607631c6ea63d5c20e68e436b586_baby-girl-in-hat.jpg',
      'https://i.ytimg.com/vi/DSnbZUjIyAc/maxresdefault.jpg',
      'https://assets.babycenter.com/ims/2012/09/stk_expecting_PHP3073967_4x3.jpg',
      'https://img.webmd.boots.com/dtmcms/live/webmd_uk/consumer_assets/site_images/articles/health_tools/baby_skin_care_slideshow/istock_photo_of_sleeping_newborn.jpg'
  ];

  $scope.myimage="https://prismic-io.s3.amazonaws.com/netmums/9b74ff704d13607631c6ea63d5c20e68e436b586_baby-girl-in-hat.jpg";

  $scope.ActivePosition=0;

  $scope.changeImageNext = function(){
    if($scope.ActivePosition === $scope.imgList.length -1 ){
        $scope.ActivePosition=0;
    }else{
        $scope.ActivePosition+=1;
        console.log( $scope.ActivePosition);
        $scope.myimage=$scope.imgList[$scope.ActivePosition];
    }
  };
  $scope.changeImagePrev = function(position){
    if($scope.ActivePosition === 0 ){  
        $scope.ActivePosition=$scope.imgList.length -1;
    }
    else{   
    $scope.ActivePosition-=1;
    console.log( $scope.ActivePosition);
    $scope.myimage=$scope.imgList[$scope.ActivePosition];
    }
  }
});