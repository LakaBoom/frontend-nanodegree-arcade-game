// Enemies our player must avoid
class Enemy{
  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
  };

  update(dt){
    if(this.x > 505){// when off canvas
      this.x = -200; // offset to the origin
      //todo: speed increasing as score get higher
      this.speed = Math.floor(Math.random()*200 + 150); // randomly set speed between 150 - 350;
    }
    this.x += this.speed * dt;
  };

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var enemyYaxis = [63,146,229];
for(var y in enemyYaxis){
  var iniSpeed = Math.floor(Math.random()*200 + 150);
  var enemy = new Enemy(0,enemyYaxis[y],iniSpeed);
  allEnemies.push(enemy);
}

// Now write your own player class
// todo: select own character among these given characters
var selectedPlayer = 'images/char-boy.png';
class Player{
  constructor(selectedPlayer){
    this.x = 202;
    this.y = 395;
    this.character = selectedPlayer;
  };

  update(){
    if(this.y == -20){//when reach the water
      setTimeout(()=>{
        this.x = 202;
        this.y = 395;
      }, 500);
    };
  }

  render(){
    ctx.drawImage(Resources.get(this.character), this.x, this.y);
  };

  handleInput(inputKey){
    switch (inputKey) {
      case 'left':
        this.x = this.x <= 0 ? 0: this.x-101 ;
        break;
      case 'right':
        this.x = this.x >= 404 ? 404: this.x+101;
        break;
      case 'up':
        this.y = this.y <= -20 ? -20: this.y-83;
        break;
      case 'down':
        this.y = this.y >= 395 ? 395: this.y+83;
        break;
    }
  };
}
// Place the player object in a variable called player
var player = new Player(selectedPlayer);


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
