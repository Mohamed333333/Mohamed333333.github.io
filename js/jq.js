$(document).ready(function(){

$(function() {  
    $("body").niceScroll();
});

$(".img").height($(".img").parent().siblings(".col-lg-7").innerHeight());

$("section.loading-over .sk-chase").fadeOut(5000,function(){
$(this).parent().fadeOut(1000);

});
});
