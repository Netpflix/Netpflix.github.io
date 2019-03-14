// $(function(){
//   // $(".card-img").on("mouseover", function(){
//   //   $(this).parent().find(".movie-overlay").css("display","block");
//   // });
//   $(".movie-overlay").on("mouseover mouseout", function(){
//     $(this).toggleClass("transparent");
//   });
// });

$(function(){
  $(".movie-overlay").on("mouseover click", function(event){
    // turn on this movie-overlay
    $(this).css("opacity", 1);

    // turn off all other movie-overlays
    $(".movie-overlay").not(this).css("opacity", 0);

    // make it impossible to accidentally click through
    // the overlay (if you tap in the right place,
    // it skips the overlay and goes right to YouTube
    // -- not ideal!)
    event.preventDefault();
  });
  $(".movie-overlay").on("mouseout", function(event){
    $(this).css("opacity", 0);
  });
});
