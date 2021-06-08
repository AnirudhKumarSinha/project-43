var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2=loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  textAlign(CENTER)

  // Add code to display score in the middle of the screen
  fill("white")
  textSize(20)
  text("Score : " + security.score, 500,55)

  //displaying rules
  textSize(15)
  textAlign(CENTER) 
  fill("white") 
  text("Rules : Solve The Jumbled Words By Using The Hints And Enter In The Input Boxes And Press On Check To Check The Passcode",500,470)

  //displaying tittle
  textAlign(CENTER) 
  textSize(25)
  text("Help Aladdin!!",500,25)

  // Add code to display the end screen

  if(security.score === 3) {
    clear()
    background(bg2)
    textAlign(CENTER)
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",500, 200);
  }

  

  drawSprites()
}