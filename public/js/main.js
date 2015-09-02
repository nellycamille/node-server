function getHTML(page) {
  $.get(page, function(html) {
    $("#content").empty();
    $("#content").append(html);
  });
}

$(document).ready(function(){
  $("#link-travesia").on("click", function() {
    getHTML('travesia.html');

  });


});
