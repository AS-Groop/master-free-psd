const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}



// video gallery

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo(){

    videoPlayer.style.display = "none";
    myVideo.src = "";

}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block";
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;



// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  };




  
}



$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $block = $('.block');

    /** click event on toggle menu */
    
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
        $block.toggleClass('blockon');
    })

    // owl-crousel for blog
    $('.owl-carousel.blog-post').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
    $('.site-title.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav:false,
        items:1
    });

    
    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});