// $(document).ready(function() {
//   window.dancers = [];

//   $(".addDancerButton").on("click", function(event) {
//     var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

//     // get the maker function for the kind of dancer we're supposed to make
//     var dancerMakerFunction = window[dancerMakerFunctionName];

//     // make a dancer with a random position

//     var dancer = new dancerMakerFunction(
//       $("body").height()*0.5 * Math.random() + $("body").height()*0.4,
//       $("body").width()*0.25 * Math.random(),
//       Math.random() * 1000
//     );
//     $('body').append(dancer.$node);
//   });
// });

$(document).ready(function() {
  
  window.setInterval(function(){
    var orc = new Orc(
      $("body").height()*0.5 * Math.random() + $("body").height()*0.4,
      $("body").width()*0.10 * Math.random(),
      Math.random() * 1000
    );
    $("body").append(orc.$node);
  }, 1000);

  window.setInterval(function(){
    var troll = new Troll(
      $("body").height()*0.5 * Math.random() + $("body").height()*0.4,
      $("body").width()*0.10 * Math.random(),
      Math.random() * 1000
    );
    $("body").append(troll.$node);
  }, 2000);

  $(".orc").click(function() {
    console.log ("dsfa");
  });

});
