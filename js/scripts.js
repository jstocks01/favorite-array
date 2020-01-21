$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var favoriteThings = [$("input#celebrity").val(), $("input#vegetable").val(), $("input#food").val(), $("input#animal").val()];

    $("#output").show();
    $("p.output").text(favoriteThings);
  })
})