$(document).ready(function() {
  window.dancers = [];
  window.health = 100;

  window.setInterval(function() {
    $("#infobar").html("<p>You have "+window.health+" health!!</p>");
  }, 500);

  $(".lineupButton").on("click", function(event) {
    for(var i=0; i < window.dancers.length; i++) {
      window.dancers[i].lineup();
    }
  });

  window.setInterval(function(){
    var orc = new Orc(
      $("body").height()*0.5 * Math.random() + $("body").height()*0.60,
      $("body").width()*0.10 * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(orc);
    $("body").append(orc.$node);
  }, 900);

  window.setInterval(function(){
    var troll = new Troll(
      $("body").height()*0.5 * Math.random() + $("body").height()*0.60,
      $("body").width()*0.10 * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(troll);
    $("body").append(troll.$node);
  }, 2200);

  $("body").on("click", "span", (function() {
    $(this).remove();
  }));

  window.setInterval(function(){
    for (var i =0; i < dancers.length; i++) {
      dancers[i].removeSelf();
    }
  }, 1000);

  
});
