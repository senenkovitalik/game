// Enemies our player must avoid
var Enemy = function(x, y, speed) {

    // initial position by row
    var row = [70, 150, 230, 310]; // from top to bottom

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = row[y];
    this.speed = speed;

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
    this.x += this.speed*dt;

    // When gubug reach the end of playground it being moving from start
    if(this.x > 505) {
        this.x = -101;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(img) {
    this.sprite = img;
    this.x = 202;
    this.y = 410;
}

Player.prototype.update = function() {
    // When a player reaches the top of playground he will be removed to bottom.
    if(this.y === -5) {
        setTimeout(
            function() {
                player.x = 202;
                player.y = 410;
            }, 1000 );
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {

    switch (key) {
        case 'up':
            if(this.y >= 78) {
                this.y += -83;
            }
            break;
        case 'down':
            if(this.y <= 327) {
                this.y += 83;
            }
            break;
        case 'left':
            if(this.x >= 83) {
                this.x += -101;
            }
            break;
        case 'right':
            if(this.x <= 303) {
                this.x += 101;
            }
            break;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy11 = new Enemy(0, 0, 160);
var enemy12 = new Enemy(-303, 0, 160);
var enemy21 = new Enemy(0, 1, 100);
var enemy22 = new Enemy(-303, 1, 100);
var enemy31 = new Enemy(0, 2, 130);
var enemy32 = new Enemy(-303, 2, 130);
// var enemy4 = new Enemy(-190, 3, 180);

allEnemies = [enemy11, enemy12, enemy21, enemy22, enemy31, enemy32];

// Place the player object in a variable called player
player = new Player(null);

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
