// UI logic
$(function() {
  $("#appointment").submit(function(event) {
    var name = $("input#name").val();
    var description = $("input#description").val()
    var date = $("input#date").val()
    var time = $("input#time").val()
    $(".nameConfirm").text(name);
    $(".descriptionConfirm").text(description);
    $(".dateConfirm").text(date);
    $(".timeConfirm").text(time);
    $(".container1").fadeToggle();
    $(".container2").fadeToggle();
    event.preventDefault();
  });
});
