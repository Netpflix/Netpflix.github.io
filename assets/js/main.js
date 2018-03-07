// $(function(){
//   // $(".card-img").on("mouseover", function(){
//   //   $(this).parent().find(".movie-overlay").css("display","block");
//   // });
//   $(".movie-overlay").on("mouseover mouseout", function(){
//     $(this).toggleClass("transparent");
//   });
// });

$(function(){
  $(".movie-overlay").on("click mouseover", function(){
    $(this).css("opacity", 1);

    // turn off all other movie-overlays' opacity
    $(".movie-overlay").not(this).css("opacity", 0);
  });
});
