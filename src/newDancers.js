var Orc = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="orc"></span>');
  this.setPosition(top, left);
  this.move(20000);
};

Orc.prototype = Object.create(makeDancer.prototype);
Orc.prototype.constructor = Orc;

var Troll = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="troll"></span>');
  this.setPosition(top, left);
  this.move(15000);
};

Troll.prototype = Object.create(makeDancer.prototype);
Troll.prototype.constructor = Troll;


var Beast = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="beast"></span>');
  this.setPosition(top, left);
  this.move(5000);
};

Beast.prototype = Object.create(makeDancer.prototype);
Beast.prototype.constructor = Beast;

var Dwarf = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dwarf"></span>');
  this.setPosition(top, left);
  this.move(2500);
};

Dwarf.prototype = Object.create(makeDancer.prototype);
Dwarf.prototype.constructor = Dwarf;