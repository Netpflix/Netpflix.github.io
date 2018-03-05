$(function(){
  // $(".card-img").on("mouseover", function(){
  //   $(this).parent().find(".movie-overlay").css("display","block");
  // });
  $(".movie-overlay").on("mouseover mouseout", function(){
    $(this).toggleClass("transparent");
  });
});
