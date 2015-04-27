
$(document).ready(function(){
    slider();
	// alert("works!");
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        // var $window = $(window); 
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });  
    });
function slider() {
    if (document.body.scrollTop > 120) //Show the slider after scrolling down 100px
        $('.sideNav').stop().animate({"margin-left": '-100'});
    else
        $('.sideNav').stop().animate({"margin-left": '0'}); //200 matches the width of the slider
}
$(window).scroll(function () {
    slider();
});
$(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});
});


