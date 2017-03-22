$(document).ready(function() {
  $('.next').click(function(){
    $(this).parent().hide().next().show();//hide parent and show next
    $(".question").show();
    $(".answer").hide();
  });

  $('.back').click(function(){
    $(this).parent().hide().prev().show();//hide parent and show previous
    $(".question").show();
    $(".answer").hide();
  });

  $("p").click(function() {
    $(".question").toggle();
    $(".answer").toggle();
  });

  $(".answer, .question button").click(function() {
    $(".question").toggle();
    $(".answer").toggle();
  });
});
