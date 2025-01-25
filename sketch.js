let font1;
let s='Is there anything you would like to say?';

let userInput;
let button;
let userLine;

let sentence=[];

function preload(){
  font1=loadFont('JetBrainsMonoNL-ThinItalic.ttf')
}

function setup(){
  createCanvas(400,500);
  textFont(font1)
  userInput=createInput()
  userInput.position(40,100);
  button = createButton('enter');
  button.position(userInput.x, userInput.y+20);
  button.mousePressed(newLine);
}

function draw(){
  background(220);
  text('Hello there, Im your supporter. ', 40,50);
  text(s,40,70);
  writeSentence();
}

function newLine(){
  userline=userInput.value();
  userInput.value('');
  sentence.push(userline);
}

function writeSentence(){
  for(x=0;x<sentence.length; x++){
    text(sentence[x], 40,180+x*20);
  }
}