
// photo declaration was done 
var photos = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg","img/18.jpg","img/19.jpg","img/20.jpg","img/21.jpg","img/22.jpg","img/23.jpg"];

var imges = document.querySelector(".imgSlide img");
// count = array index Number Exmpol --photos call Array
var count = 0 ;

function next(){

    count++ ;
    // Length = 3
    if(count >= photos.length){
        count = 0;
        imges.src =photos[count];
    }else{
        imges.src =photos[count];
    }

}

function previ(){

    count-- ;
    if(count < 0){
        // Length = 3
        count = photos.length - 1 ;
        imges.src =photos[count];
    }else{
        imges.src =photos[count];
    }

}