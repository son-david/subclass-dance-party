
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function() {
  setTimeout((this.step).bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.move = function(speed) {
  this.$node.animate({left : 1250}, speed,"linear");
};
