(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var Bullet = Asteroids.Bullet = function (options) {
    options.color = Bullet.COLOR;
    options.radius = Bullet.RADIUS;
    Asteroids.MovingObject.call(this, options);
  };
  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.isWrappable = false;

  Bullet.RADIUS = 2;
  Bullet.COLOR = "#ff0000";

  Bullet.prototype.collideWith = function (otherObj) {
    if (otherObj instanceof Asteroids.Asteroid) {
      this.game.remove(otherObj);
    }
  };
})();
