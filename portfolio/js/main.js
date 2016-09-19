
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

/* Slide down effect for the programs 
$( "#h4languages" ).click(function() {
    console.log("slide");
    $("#languages").slideDown( "slow" )});

$( "#h4applications" ).click(function() {
    console.log("slide");
    $("#applications").slideDown( "slow" )});
*/

//For form submission using Ajax
$(document).ready(function() {

    // process the form
    $('#submit').click(function(event) {

        console.log("step1");
        $('#progress').width('20%');

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'comments'    :     $('textarea[name=comments]').val()
        };
    console.log("step2");
    $('#progress').width('55%');
        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : '/contact.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
            });
console.log("step3");
$('#progress').width('100%');
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
        $('#name').val("");
        $('#email').val("");
        $('#comments').val("");
        setTimeout( function() {$('#progress').width(0)}, 2000);
    });
        
});