// Enemies our player must avoid
var Enemy = function(row, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -100;
    this.y =  60 + (row -1) * 81;
    this.speed = speed;
    this.row = row;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 505) {
      this.x = -100;
    }
    else {
      this.x += this.speed * dt;
    }

//checkCollisions

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
  //refactored to reuse reset function to set initial values
  this.reset();
  //added row to simplify collisions
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {

};

Player.prototype.reset = function() {
  //reuseable reset function to place the player in bottom row
  this.x = 202;
  this.y = 400;
  this.row = 5;
};

Player.prototype.handleInput = function(input) {
  console.log(input);

  var xMovementSize = 101;
  var yMovementSize = 82;

  switch(input) {
    case 'left':
        if (this.x - xMovementSize >= 0) {
          this.x -= xMovementSize;
        }
        break;
    case 'right':
      if (this.x + xMovementSize <= 404) {
          this.x += xMovementSize;
      }
        break;
    case 'up':
        this.y -= yMovementSize;
        this.row -= 1;
        break;
    case 'down':
      if (this.y + yMovementSize <= 400) {
        this.y += yMovementSize;
        this.row += 1;
      }
        break;
      };
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

var enemy = new Enemy(1,60);
var enemy2 = new Enemy(2,120);
var enemy3 = new Enemy(3,80);
allEnemies.push(enemy);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
var player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
