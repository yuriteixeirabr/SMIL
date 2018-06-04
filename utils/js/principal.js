$(document).ready(function(){

    $("#motionE1").hide();
    $("#motionN1").hide();
    $("#motionC1").hide();
    $("#motionO1").hide();

    $("#circleE1").hide();
    $("#circleN1").hide();
    $("#circleC1").hide();
    $("#circleO1").hide();

    setTimeout(function () {
        $("#motionE1").show();
        $("#motionN1").show();
        $("#motionC1").show();
        $("#motionO1").show();

        $("#circleE1").show();
        $("#circleN1").show();
        $("#circleC1").show();
        $("#circleO1").show();
    }, 6000);
});