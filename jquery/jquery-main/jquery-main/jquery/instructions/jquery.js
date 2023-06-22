$(document).ready(function () { 
    $("#css").click(function(){
        $("#text").css("color", "blue");
        $("#text").css("display", "block");
        $("#text2").css("display", "none");
    });

    $("#html").click(function(){
        $("#text2").show(1000).css("color", "blue");
        $("#text").hide(1000).css("color", "blue");
        $("#text").hide(1000).css("display", "block");
    });
    $("#toggle").click(function(){
        $("#text, #text2").toggle(1000);
    });
    
    $("#slide").click(function(){
        $("#text").slideToggle(2000);
    });
  
});