$('.nav__item-toggle').on('click', function(e) {
    $(this).next('.nav__item--child').toggleClass("show");
    e.preventDefault();
});

$('.toggle').on('click', function(e) {
    $(this).toggleClass("toggle-x");
    $('#map').toggleClass("big"); //you can list several class names 
    e.preventDefault();
});


$("a.btn__toggle").click(function(e) {
    e.preventDefault();
    $("#map").attr("src", $(this).attr("href"));
    $("#map").toggleClass("big");
    $(this).toggleClass("toggle-x");
    $("a").removeClass("active");
    $(this).addClass("active");
})