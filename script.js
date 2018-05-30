/* global $ */ 

$(function(){
    
    //jquery Events
    // $("p").on("click mouseenter", function(){
    //     console.log("You clicked a paragraph");
    // });
    
     $("p").one({
        "click": function() { console.log ("Clicked"); },
        "mouseover": function() { console.log("Hovered"); }
    });
    
    $("p").off("click");
    
    // $("p").hover(function() {
    //   console.log("You entered.");
    // },
    // function() {
    //     console.log("You left");
    // });
    
    $("input").change(function() {
        console.log("You did something");
    });
});

//Types of jquery methods
// dblick, mouseenter, mouseleave, mousedown, mouseup, hover

//form events: focus, blur, change