$(document).ready(function(){
    $(".homepage-slides").owlCarousel({
        items:1,
        margin:30,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
         smartSpeed:1000,
        autoplayHoverPause:true,
        
        navText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
    })
    $(".logo-carousel").owlCarousel({
        items:6,
        margin:30,
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
         smartSpeed:1000,
        autoplayHoverPause:true,
    })
    
    $(".case-studies-carousel").owlCarousel({
        items:3,
        margin:30,
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
         smartSpeed:1000,
        autoplayHoverPause:true,
    })
    
    $(".testimonial-carousel").owlCarousel({
        items:1,
        margin:30,
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
         smartSpeed:1000,
        autoplayHoverPause:true,
    })
    
    $(".menu-trigger").click(function(){
        $(".off-canvas-menu").addClass("show-off-canvas-menu") 
        $(".off-canvas-menu-shade").addClass("active") 
       
    })
    
    $(".menu-close,.off-canvas-menu-shade").on('click',function(){
        $(".off-canvas-menu").removeClass("show-off-canvas-menu")
        $(".off-canvas-menu-shade").removeClass("active")
    })
    
    
    $(".single-testimonial-box").hover(function(){
        $(".single-testimonial-box").removeClass("active")
        $(this).addClass("active")
    })
    
    
   $(".video-play-btn").magnificPopup({
       type:'iframe'
   })
})















