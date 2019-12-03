joystick = {
  init: function() {
    var $elem = $("#stick, #base");
    $(document).on("keydown", function(e) {
      switch (e.keyCode) {
        case 38:
          $elem.addClass("top");
          conn.send("#A$");
          break;
        case 37:
          $elem.addClass("left");
          conn.send("#C$");
          break;
        case 39:
          $elem.addClass("right");
          conn.send("#D$");
          break;
        case 40:
          $elem.addClass("bottom");
          conn.send("#B$");
          break;
      }
    });
    $(document).on("keyup", function(e) {
      switch (e.keyCode) {
        case 38:
          $elem.removeClass("top");
          break;
        case 37:
          $elem.removeClass("left");
          break;
        case 39:
          $elem.removeClass("right");
          break;
        case 40:
          $elem.removeClass("bottom");
          break;
      }
    });
  }
};

$(function() {
  joystick.init();
});
