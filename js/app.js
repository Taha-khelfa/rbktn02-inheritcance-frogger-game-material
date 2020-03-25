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
    var enemyLeft= this.x -60;
    var enemyRight = this.x +70;
    var enemyTop = this.y -60;
    var enemyButtom = this.y +60;
    if(player.x > enemyLeft && player.x < enemyRight && player.y > enemyTop && player.y < enemyButtom ){
        player.reset();
        player.lives--;
        if(player.lives===0){
            alert('Game over')
            player.lives=5
        }
      
    }
    

    
    
     
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
      this.z = x;
      this.w= y;
   this.sprite = 'images/char-boy.png';
   this.x= x|| 200 ;
   this.y= y|| 380 ;
   this.speed= speed||0 ;
   this.lives=5;
    this.award = 0 ;
   
  };



  Player.prototype.update= function (){
    }
   Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
};

     Player.prototype.handleInput = function (key){
          if (key ==='left'){
              if(this.x>0){
                 this.x=this.x-25
                  
                }
            } 
             if (key==='right'){
                 if(this.x<450){
                    this.x=this.x+25
                 }
             
             } 
             if ( key === 'up'){
                 if(this.y>=0){
                    this.y=this.y-25
                 }
              }
              if (key ==='down'){
                  if(this.y<420){
                    this.y=this.y+25
                  }
               }
               if(this.y<0){
                   setTimeout(() =>{
                       this.x = 200 ;
                       this.y = 400 ;
                   },1000);
               }
        }
        

        
    Player.prototype.reset = function(){
     this.x=this.z;
     this.y=this.w;
  }
var Heart = function ( x, y,){
    this.x= x;
    this.y =y;
    this.dx=80;
    this.dy=100
    this.spriite = 'images/Heart.png' ;
    this.arr=[]
}

Heart.prototype.render= function() {
    ctx.drawImage(Resources.get(this.spriite), this.x, this.y,this.dx,this.dy)

};
Heart.prototype.update = function (){
    var heartLeft= this.x -50;
    var heartRight = this.x +50;
    var heartTop = this.y -15;
    var heartButtom = this.y +15;
    
    if(player.x > heartLeft && player.x < heartRight && player.y > heartTop && player.y < heartButtom ){
        this.arr.push(5)
        
        this.dx=0
        this.dy=0
    }
    
}
    
    var player = new Player (200,400,50);
    var allEnemies =[];
var enemyOne = new Enemy (0,63,80)
var enemyTwo = new Enemy (0 ,140,100)
var enemyThree = new Enemy ( 0,230, 55)
allEnemies.push(enemyOne);
allEnemies.push(enemyTwo);
allEnemies.push(enemyThree)
var heartOne = new Heart (50,150)
var heartTwo = new Heart ( 150 ,300)
var heartThree = new Heart ( 400,212)
allHeart=[];

allHeart.push(heartOne);
allHeart.push(heartTwo);
allHeart.push(heartThree);

allHeart.forEach(function(heart) {
    
    if (heart.arr.length !==0){
        player.award++
    }
  
});


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





