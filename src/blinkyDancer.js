var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  // return blinkyDancer;
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// var BlinkyDancer = function(top, left, timeBetweenSteps) {
//   MakeDancer.call(this, top, left, timeBetweenSteps);

//   var oldStep = this.step;
// };

// // BlinkyDancer.prototype = Object.create(MakeDancer.prototype);
// // BlinkyDancer.prototype.constructor = BlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  // MakeDancer.prototype.step.call(this);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.toggle();
};
