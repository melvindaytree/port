
$(".project1").click(function () {
    $(".project1").find(".projecthover").stop(true).toggle("slow");
});

$(".project2").click(function () {
    $(".project2").find(".projecthover").stop(true).toggle("slow");
});

$(".project3").click(function () {
    $(".project3").find(".projecthover").stop(true).toggle("slow");
});

$(".project4").click(function () {
    $(".project4").find(".projecthover").stop(true).toggle("slow");
});

$(".project5").click(function () {
    $(".project5").find(".projecthover").stop(true).toggle("slow");
});

$(".project6").hover(function () {
    $(".project6").find(".projecthover").stop(true).slideToggle("slow");
});

$(".project7").hover(function () {
    $(".project7").find(".projecthover").stop(true).slideToggle("slow");
});

$(".project8").hover(function () {
    $(".project8").find(".projecthover").stop(true).slideToggle("slow");
});

$(".project9").hover(function () {
    $(".project9").find(".projecthover").stop(true).slideToggle("slow");
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