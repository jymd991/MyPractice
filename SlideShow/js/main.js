(function(){
  'use strict'

  var files = [
        "img/images0.jpg",
        "img/images1.jpg",
        "img/images2.jpg",
        "img/images3.jpg"
  ];

  var play =document.getElementById('play');
  var pause =document.getElementById('pause');
  // var img =document.getElementsByTagName('img').length;
  var image =document.getElementById('image');
  var main =document.getElementById('main');
  var prev =document.getElementById('prev');
  var next =document.getElementById('next');

  var timer;
  var nowPlay =0;


    image.addEventListener('click',function(){
      main.src =this[0].src;
    });

    function playSlideshow() {
      timer = setTimeout(function(){
        next.click();
        playSlideshow();
      },1500);
    }
    prev.addEventListener('click',function(){
      nowPlay--;
      if(nowPlay < 0 ){
        nowPlay=files.length -1 ;
      }
      main.src=files[nowPlay];//image不可
    });

    next.addEventListener('click',function(){
      nowPlay++;
      if(nowPlay > files.length -1){
        nowPlay= 0;
      }
      main.src=files[nowPlay];//image不可
    });

    play.addEventListener('click',function() {
      playSlideshow();
      this.className = 'hidden';//表示非表示
      pause.className = '';
    });
    pause.addEventListener('click', function() {
        clearTimeout(timer);
        this.className = 'hidden';
        play.className = '';
    });

})();
