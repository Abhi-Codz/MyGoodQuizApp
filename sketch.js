var gameState = 0;
var contestantCount;
var contestant;
var database;
var quiz;
var question;

function setup(){
  let canvas = createCanvas(850,400);
  
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("aqua");

}