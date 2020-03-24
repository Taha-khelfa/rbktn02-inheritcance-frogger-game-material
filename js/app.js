// Enemies our player must avoid

var Enemy = function(x,y,speed) { 
    this.x = x ||0
    this.y= y||0
    this.speed= speed||80;
    this.sprite = 'images/enemy-bug.png'
    // var location ={
    //     left : Math.floor(Math.random()*100),
    //     top : 
    // }
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // this.sprite = 'images/enemy-bug.png'
    // this.speed=Math.floor(Math.random()*enemySpeed) ;
    // this.location= location ;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    this.x=this.x+this.speed*dt
    if (this.x>500) this.x=0
    

    
    
     
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
  var Player = function(x,y,speed){
   this.sprite = 'images/char-boy.png';
   this.x= x|| 200 ;
   this.y= y|| 380 ;
   this.speed= speed||0 ;
   this.score =0 ;
   
  };



  Player.prototype.update= function (){
  //if ( allowedKeys.37){
      //this.x= this.x+this.speed*dt
    //   this.x;
    //   this.y;
      //this.score++ ;

    
    
  }
    Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    console.log(this.x)
};

    
        Player.prototype.handleInput = function (key){
            
            if (key ==='left'){
              if(this.x>0){
                  
                  this.x=this.x-50
                  
                }
            } 
             if (key==='right'){
                 if(this.x<450){
                    this.x=this.x+50
                 }
             
             } 
             if ( key === 'up'){
                 if(this.y>0){
                    this.y=this.y-50
                 }
              }
              if (key ==='down'){
                  if(this.y<420){
                    this.y=this.y+50
                  }
               }
        }
    // Player.prototype.reset = function(){
       
        
// }
    
    var player = new Player (250,300,50);
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var enemyOne = new Enemy (0,63,80)
var enemyTwo = new Enemy (0 ,140,100)
var enemyThree = new Enemy ( 0,230, 55)
allEnemies.push(enemyOne);
allEnemies.push(enemyTwo);
allEnemies.push(enemyThree)




// Place the player object in a variable called player



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
