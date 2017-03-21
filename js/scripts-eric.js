$(document).ready(function() {
  $('.next').click(function(){
   $(this).parent().hide().next().show();//hide parent and show next
 });

$('.back').click(function(){
   $(this).parent().hide().prev().show();//hide parent and show previous
 });










  $("#start").click(function() {
    $(".question").toggle();
    $(".well").next.show();
  });

  $(".well").click(function() {
    $(".well").next.show();
  });

  $(".clickable").click(function() {
    $(".question").toggle();
    $(".answer").toggle();
  });
});
