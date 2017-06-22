$(document).ready(function(){
    $(".thumbs img").click(function() {
        event.preventDefault();
        var mainImage = $(this).attr('src');
        $('.main-images img').attr('src', mainImage);
    });
    var mini = $('.image');

        mini.each(function (index) {
            var currentImg = $(this);
            $(currentImg).on("click", function() {
                $(mini).removeClass("active-img");
                $(currentImg).addClass("active-img");
        });
    });

    $('.photo-gallery-items').click(function() {
    	$('.gallery-container').css("display","inline-block");
    });
    $('.close-icon').click(function() {
        $('.gallery-container').css("display","none");
    });    
   
});