function getHTML(page) {
  $.get(page, function(html) {
    $("#content").empty();
    $("#content").append(html);
  });
}

$(document).ready(function(){
  $(".link-travesia").on("click", function() {
    getHTML('travesia.html');
  });
  $(".link-home").on("click", function() {
    getHTML('home.html');
  });
  $(".link-contacto").on("click", function() {
    getHTML('contact.html');
  });
  $(".link-bellie").on("click", function() {
    getHTML('bellie.html');
  });
  $(".link-embarazo").on("click", function() {
    getHTML('embarazo.html');
  });
  $(".link-blessings").on("click", function() {
    getHTML('blessing.html');
  });
  $(".link-familia").on("click", function() {
    getHTML('familia.html');
  });
  $(".link-comercial").on("click", function() {
    getHTML('comercial.html');
  });
  $(".link-parto").on("click", function() {
    getHTML('parto.html');
  });
  $(".link-posparto").on("click", function() {
    getHTML('post-parto.html');
  });
  $(".link-lactancia").on("click", function() {
    getHTML('lactancia.html');
  });
  $(".link-historia").on("click", function() {
    getHTML('historia.html');
  });
  $(".link-servicios").on("click", function() {
    getHTML('servicio.html');
  });

});



///////////// This JS is for dropdown   //////////////////////

( function( $ ) {
$( document ).ready(function() {
// Cache the elements we'll need
var menu = $('#cssmenu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

// Toggle menu visibility
menu.on('click', '#responsive-tab', function(){
	listItems.slideToggle('slow');
	listItems.addClass('collapsed');
});
});
} )( jQuery );

///////////// End dropdown   ////////////////////////////////
