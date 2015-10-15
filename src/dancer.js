
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

makeDancer.prototype.lineup = function() {
  var index = window.dancers.indexOf(this);
  var danceLine = (index/(dancers.length)) * $("body").width();
  var height = $("body").height() * 0.5;
  var styleSettings = {
    top: height,
    left: danceLine
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.removeSelf = function () {
  if (this.$node.position().left > 1200) {
    this.$node.remove();
    window.health--;
  }
}