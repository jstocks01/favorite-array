// front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var favoriteThings = [$("input#celebrity").val(), $("input#vegetable").val(), $("input#food").val(), $("input#animal").val()];

    var first = favoriteThings[0];
    var second = favoriteThings[1];
    var third = favoriteThings[2];

    var excerptFavoriteThings = [];
    excerptFavoriteThings.push(second);
    excerptFavoriteThings.push(first);
    excerptFavoriteThings.push(third);

    $("#output").show();
    $("ul.output").append("<li>" + excerptFavoriteThings[0] + "</li>").append("<li>" + excerptFavoriteThings[1] + "</li>").append("<li>" + excerptFavoriteThings[2] + "</li>");
  });
});