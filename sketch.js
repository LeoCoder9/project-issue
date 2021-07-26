var form, game, player;

var gameState = "START";

var knight, knightRun, knightIdle;

var bg, bgIm;

var floor;

var keyS = false;

var monsters;

var startbg, endbg


// monster variables:
var hyenaIm;
var vultureIm;
var deceasedIm;
var scorpioIm;
var mummyIm;



var lives = 5
var kills = 0
var level = 1

var hurt, hit
var bgmusic

function preload() {

  knightRun = loadAnimation("images/Knight/Run (1).png", "images/Knight/Run (2).png", "images/Knight/Run (3).png", "images/Knight/Run (4).png",
    "images/Knight/Run (5).png", "images/Knight/Run (6).png", "images/Knight/Run (7).png", "images/Knight/Run (8).png", "images/Knight/Run (9).png",
    "images/Knight/Run (10).png")

  knightIdle = loadAnimation("images/Knight/Idle (1).png", "images/Knight/Idle (2).png", "images/Knight/Idle (3).png", "images/Knight/Idle (4).png",
    "images/Knight/Idle (5).png", "images/Knight/Idle (6).png", "images/Knight/Idle (7).png", "images/Knight/Idle (8).png", "images/Knight/Idle (9).png",
    "images/Knight/Idle (10).png")

  bgIm = loadImage("images/bg9.png");

  hurt = loadSound("sounds/hurtSound.wav")
  hit = loadSound("sounds/hit.mp3")

  bgmusic = loadSound("sounds/BackgroundMusic.mp3")

  startbg = loadImage("images/backgroundStart.jpg")
  endbg = loadImage("images/GameOverBackground.jfif")


  // monster images
  hyenaIm = loadAnimation("images/Hyena/hyenaWalk1.png", "images/Hyena/hyenaWalk2.png", "images/Hyena/hyenaWalk3.png", "images/Hyena/hyenaWalk4.png", "images/Hyena/hyenaWalk5.png", "images/Hyena/hyenaWalk6.png");
  vultureIm = loadAnimation("images/Vulture/vultureWalk1.png", "images/Vulture/vultureWalk2.png", "images/Vulture/vultureWalk3.png", "images/Vulture/vultureWalk4.png");
  deceasedIm = loadAnimation("images/Deceased/deceasedWalk1.png", "images/Deceased/deceasedWalk2.png", "images/Deceased/deceasedWalk3.png", "images/Deceased/deceasedWalk4.png", "images/Deceased/deceasedWalk5.png", "images/Deceased/deceasedWalk6.png",);
  scorpioIm = loadAnimation("images/Scorpio/scorpioWalk1.png", "images/Scorpio/scorpioWalk2.png", "images/Scorpio/scorpioWalk3.png", "images/Scorpio/scorpioWalk4.png",);
  mummyIm = loadAnimation("images/Mummy/mummyWalk1.png", "images/Mummy/mummyWalk2.png", "images/Mummy/mummyWalk3.png", "images/Mummy/mummyWalk4.png", "images/Mummy/mummyWalk5.png", "images/Mummy/mummyWalk5.png", "images/Mummy/mummyWalk6.png",);
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  monsters = new Group();


  game = new Game();
  game.start();

}

function draw() {


  if (gameState === "PLAY") {
    game.play();
  }



}




/*

   improve the game over texts
   make a restart button (working)
            make levels for more monsters
            create the monsters functions(more)
   improve multi and single player buttons (from start)
   logic for multi player
   */


   // button properties:

//this.singlePlrButtom.size(100,100);
// this.singlePlrButtom.style("font-family", "Bodoni");
  //this.singlePlrButtom.style("font-size", "48px");
   //this.singlePlrButtom.style('color', '#ff0000'); 
   //let col = color(25, 23, 200, 50);
   // this.singlePlrButtom.style('background-color', col);
