$(document).ready(function() {
  $("#jscpt").click(function() {
    $(".j-gone").toggle();
    $(".j-text-showing").toggle();
    $("#jscpt").addClass("backgroundnew");
    $("#jscpt").removeClass("style");
  });

  $("#opts").click(function() {
    $(".o-gone").toggle();
    $(".o-text-showing").toggle();
    $("#opts").addClass("backgroundnew");
    $("#opts").removeClass("style");
  });

  $("#vars").click(function() {
    $(".v-gone").toggle();
    $(".v-text-showing").toggle();
    $("#vars").addClass("backgroundnew");
    $("#vars").removeClass("style");
  });

  $("#varName").click(function() {
    $(".vn-gone").toggle();
    $(".vn-text-showing").toggle();
    $("#varName").addClass("backgroundnew");
    $("#varName").removeClass("style");
  });

  $("#funct").click(function() {
    $(".f-gone").toggle();
    $(".f-text-showing").toggle();
    $("#funct").addClass("backgroundnew");
    $("#funct").removeClass("style");
  });

  $("#meth").click(function() {
    $(".m-gone").toggle();
    $(".m-text-showing").toggle();
    $("#meth").addClass("backgroundnew");
    $("#meth").removeClass("style");
  });


});
