
$(".project1").hover(function () {
    $(".project1").find(".projecthover").stop(true).slideToggle("slow");
});

$(".project2").hover(function () {
    $(".project2").find(".projecthover").stop(true).slideToggle("slow");
});

$(".project3").hover(function () {
    $(".project3").find(".projecthover").stop(true).slideToggle("slow");
});

$(".project4").hover(function () {
    $(".project4").find(".projecthover").stop(true).slideToggle("slow");
});

$(".project5").hover(function () {
    $(".project5").find(".projecthover").stop(true).slideToggle("slow");
});

$(".project6").hover(function () {
    $(".project6").find(".projecthover").stop(true).slideToggle("slow");
});


$("#language").toggle( function () {
        $("#language").addClass("expand");
        $(".center-box").css("width", "1400px");
        $("#language").removeClass("language");
        $("#program").toggle();
    },
    
    function () {
        $("#language").removeClass("expand");
        $(".center-box").css( "width", "660px" );
        $("#language").addClass("language");
        $("#program").delay( 3000 ).toggle();
    });

    $("#program").toggle( function () {
        $("#program").addClass("expand");
        $(".center-box").css("width", "1400px");
        $("#program").removeClass("program");
        $("#language").toggle();
    },
    
    function () {
        $("#program").removeClass("expand");
        $(".center-box").css( "width", "660px" );
        $("#program").addClass("program");
        $("#language").delay( 3000 ).toggle();
    });