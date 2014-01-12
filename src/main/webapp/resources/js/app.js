/*
 * This is the main application script that controls the animation capabilities
 * of joyride.js. Note that it depends of JQuery 2.0.3. 
 *
 * by Jim Lombardo, WCTC Web and Software Developer instructor
 */

// Immediately initialize foundation (must happen at page load)
$(document).foundation();

// Expects the class myhigh on elements
function toggleHighlight(on_id) {
    $('.myhigh').removeClass('jhighlight').addClass('junhighlight');
    $(on_id).removeClass('junhighlight').addClass('jhighlight');
}
             
// When the start button is clicked we start joyride and process
// joyride 'Next' buttons via css class designation. Note that when
// the tour ends we need to reload the page so that joyride is restarted
$("#startBtn").click(function(){
    $("#startBtn").hide();
    $("#tp" ).removeClass('junhighlight').addClass('jhighlight');
    $(document).foundation('joyride', 'start');
    
    $(".joyride-next-tip").click(function(){
        if($("#tp" ).hasClass('jhighlight')) {
            $("#tp" ).removeClass('jhighlight').addClass('junhighlight');
            $("#domain" ).removeClass('junhighlight').addClass('jhighlight');
        } else if($("#domain" ).hasClass('jhighlight')) {
            $("#domain" ).removeClass('jhighlight').addClass('junhighlight');
            $("#port" ).removeClass('junhighlight').addClass('jhighlight');
        } else if($('#port' ).hasClass('jhighlight')) {
            $("#port" ).removeClass('jhighlight').addClass('junhighlight');
            $("#app" ).removeClass('junhighlight').addClass('jhighlight');
        } else if($('#app' ).hasClass('jhighlight')) {
            $("#app" ).removeClass('jhighlight').addClass('junhighlight');
            $("#page" ).removeClass('junhighlight').addClass('jhighlight');
        } else if($('#page' ).hasClass('jhighlight')) {
            $("#page" ).removeClass('jhighlight').addClass('junhighlight');
            $("#qs" ).removeClass('junhighlight').addClass('jhighlight');
        } else if($('#qs' ).hasClass('jhighlight')) {
            $("#qs" ).removeClass('jhighlight').addClass('junhighlight');
            $("#startBtn").show();
            location.reload();
        }
    });
});

