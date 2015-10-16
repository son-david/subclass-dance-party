$(document).ready(function() {
  window.dancers = [];
  window.health = 3;
  window.counter = 0;

  window.setInterval(function() {
    $("#infobar").html("<p>You have "+window.health+" health!!</p>");
  }, 500);

  $(".lineupButton").on("click", function(event) {
    for(var i=0; i < window.dancers.length; i++) {
      window.dancers[i].lineup();
    }
  });

  //$("body").on("dblclick", "span", function(event) {
  //for (var i = 0; i < window.dancers.length; i++) {
    //$(this).interact;
    //}
  //});

//Pythagorean var c = Path.sqrt.(a*a + b * b)

  window.setInterval(function(){
    if (window.health > 0) {
      var orc = new Orc(
        $("body").height()*0.5 * Math.random() + $("body").height()*0.50,
        $("body").width()*0.10 * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(orc);
      $("body").append(orc.$node);
    }
  }, 900);

  window.setInterval(function(){
    if (window.health > 0) {
    var troll = new Troll(
      $("body").height()*0.5 * Math.random() + $("body").height()*0.50,
      $("body").width()*0.10 * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(troll);
    $("body").append(troll.$node);
    }
  }, 2200);

  window.setInterval(function(){
    if (window.health > 0) {
    var beast = new Beast(
      $("body").height()*0.5 * Math.random() + $("body").height()*0.50,
      $("body").width()*0.10 * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(beast);
    $("body").append(beast.$node);
    }
  }, 4000);

  window.setInterval(function(){
    if (window.health > 0) {
    var dwarf = new Dwarf(
      $("body").height()*0.5 * Math.random() + $("body").height()*0.50,
      $("body").width()*0.10 * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dwarf);
    $("body").append(dwarf.$node);
    }
  }, 10000);

  $("body").on("click", "span", (function() {
    $(this).remove();
    window.counter++;
  }));

  window.setInterval(function(){
    if (window.health > 0) {
      for (var i =0; i < dancers.length; i++) {
        dancers[i].removeSelf();
      }
    }
  }, 1000);

  window.setInterval(function(){
    if (window.health < 1) {
      for (var i =0; i < dancers.length; i++) {
        dancers[i].stop();
      }
      $("#infobar").html("<p>YOU LOSE!!!</p><p>You got "+window.counter+" points.</p><p>refresh page to try again</p>");
    }
  }, 500);
  
  
  
});