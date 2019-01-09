// initiallize

var selectedPlayer = 'images/char-boy.png';
var characters = [
      'images/char-boy.png',
      'images/char-cat-girl.png',
      'images/char-horn-girl.png',
      'images/char-pink-girl.png',
      'images/char-princess-girl.png'
    ];
var charIndex = 0;

var xAxis = [0,101,202,303,404];
var yAxis = [63,146,229];

var collectible;
var allEnemies = [];

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
      this.y = yAxis[(yAxis.indexOf(this.y)+2)%3];
      this.speed = Math.floor(Math.random()*200 + 150); // randomly set speed between 150 - 350;
    }
    this.x += this.speed * dt;
  };

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Place all enemy objects in an array called allEnemies
function callEnemies(){
  for(var y in yAxis){
    var iniSpeed = Math.floor(Math.random()*200 + 150);
    var enemy = new Enemy(0,yAxis[y],iniSpeed);
    allEnemies.push(enemy);
  }
  var enemy2 = new Enemy(0,yAxis[Math.floor(Math.random()*yAxis.length)],iniSpeed);
  allEnemies.push(enemy2);
}

// Now write your own player class
class Player{
  constructor(selectedPlayer){
    this.x = 202;
    this.y = 395;
    this.character = selectedPlayer;
    this.score = 0;
    this.life = 1;
  };

  update(){
    var e = document.querySelector('#scoreNum');
    e.innerText = this.score;
    var el = document.querySelector('#lifeNum');
    el.innerText = this.life;
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
        this.x = this.x >= 505 ? 505: this.x+101;
        break;
      case 'up':
        this.y = this.y <= -20 ? -20: this.y-83;
        break;
      case 'down':
        this.y = this.y >= 395 ? 395: this.y+83;
        if(this.y >= 229){ // once step into the stone, can't go back to the grass
          this.y = 229;
        }
        break;
    }
    if(this.y == -20){//when reach the water
      this.life++;
      this.score += 10;
      setTimeout(()=>{
        this.x = 202;
        this.y = 395;
      }, 500);
    };
  };
}
// Place the player object in a variable called player
function playerSelect(){
    charIndex ++;
    if(charIndex >= characters.length){
      charIndex = 0;
    }
    selectedPlayer = characters[charIndex];
    return selectedPlayer;
}

var player = new Player(selectedPlayer);
var charChoose = document.querySelector('.charChoose');
charChoose.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
}
charChoose.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
}
charChoose.addEventListener('click',function(){
  playerSelect();
  player.character = selectedPlayer;
});
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

class Collectible{
  constructor(x,y,index){
    this.x = x;
    this.y = y;
    this.gem = [
      'images/Gem Blue.png',
      'images/Gem Green.png',
      'images/Gem Orange.png',
      'images/Heart.png'
    ];
    this.index = this.gem[index];
  }

  render(){
    ctx.drawImage(Resources.get(this.index), this.x, this.y);
  }
}


function gemProduce(){
  var randomX = xAxis[Math.floor(Math.random() * xAxis.length)];
  var randomY = yAxis[Math.floor(Math.random() * yAxis.length)];
  var randomGem = Math.floor(Math.random()*4);
  collectible = new Collectible(randomX,randomY,randomGem);

}
callEnemies();
gemProduce();

var e = document.querySelector('#restart');
e.addEventListener('click',function(){
  document.querySelector('.info').style.display = 'flex';
  document.querySelector('.over').style.display = 'none';
  player.score = 0;
  player.life = 1;
  player.x = 202;
  player.y = 395;
  Engine;
  callEnemies();
});
