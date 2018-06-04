/* global $ */ 

$(function(){
    
    //jquery Events
 //  $("h1").hide(500); // <-- can pass in a number (ms) or slow/fast
 //  $("h1").show(2000); //combination of slide and fade effects
   
  //  $("img").slideUp(500); // <-- can pass in a number (ms) or slow/fast
  //  $("img").slideDown(2000); 
   
    // $("img").fadeOut(500); // <-- can pass in a number (ms) or slow/fast
  //   $("img").fadeIn("normal"); 
     
  //   $("h1").toggle(900); // <-- can pass in a number (ms) or slow/fast
  //   $("h1").toggle("normal"); //can also do fade toggle or slide toggle to do opposite of what current state is

    $("h1").hide();
    $("h1").fadeIn(2000, function(){
        
    $(this).addClass("blue");
    });
    
    $("img").on("click", function(){
        $("h1").stop();
    });
    
    $("p").hide(500).delay(4000).show(400);
});

//Types of jquery methods
// dblick, mouseenter, mouseleave, mousedown, mouseup, hover

//form events: focus, blur, change