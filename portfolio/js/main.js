
function toggleDisplay(id) {
    $(id).click(function() {
    $(id).find(".projecthover").stop(true).toggle("slow");
    });
};

toggleDisplay(".project1");
toggleDisplay(".project2");
toggleDisplay(".project3");
toggleDisplay(".project4");
toggleDisplay(".project5");
toggleDisplay(".project6");

/*
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
*/


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

//Check if form is filled out
(function() {
    $('form > input').keyup(function() {
        console.log("blue");
        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#submit').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#submit').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });
});