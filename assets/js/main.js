// $(function(){
//   // $(".card-img").on("mouseover", function(){
//   //   $(this).parent().find(".movie-overlay").css("display","block");
//   // });
//   $(".movie-overlay").on("mouseover mouseout", function(){
//     $(this).toggleClass("transparent");
//   });
// });

$(function(){
  $(".movie-overlay").on("click", function(event){
    // turn on this movie-overlay
    $(this).css("opacity", 1);

    // turn off all other movie-overlays
    $(".movie-overlay").not(this).css("opacity", 0);
  });
  $(".movie-overlay").on("mouseodut", function(event){
    $(this).css("opacity", 0);
  });
});
