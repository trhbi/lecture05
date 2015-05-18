function skip15sec(){
  var player  = document.querySelector("audio");
  player.currentTime = player.currentTime + 15;
}

function onSkip15secButtonClicked(event){
  skip15sec();
}

var skip15secButton = document.querySelector("#skip");
skip15secButton.addEventListener("click",  onSkip15secButtonClicked);


function back15sec(){
  var player  = document.querySelector("audio");
  player.currentTime = player.currentTime - 15;
}

function onBack15secButtonClicked(event){
  back15sec();
}

var back15secButton = document.querySelector("#back");
back15secButton.addEventListener("click",  onBack15secButtonClicked);


function restart(){
  var player = document.querySelector("audio");
  player.currentTime = 0;
}

function onRestartButtonClicked(event){
  restart();
}

var restartButton = document.querySelector("#restart");
restartButton.addEventListener("click",  onRestartButtonClicked);


function loop(){
  var player = document.querySelector("audio");
  player.loop = true;
}

function onLoopButtonClicked(event){
  loop();
}

var loopButton = document.querySelector("#loop");
loopButton.addEventListener("click",  onLoopButtonClicked);


function setPlaybackRate(value){
 var player = document.querySelector("audio");
 player.playbackRate = value;
}

function onPlaybackRateChanged(event){
 var rate = playbackRateControl.value;
  setPlaybackRate(rate);
};

var playbackRateControl = 
 document.querySelector("#playback-rate-control > input");
 playbackRateControl.addEventListener("change",onPlaybackRateChanged);

function showPlaybackRate(value){
 var label = 
 document.querySelector("#playback-rate-control > span");
 label.textContent = "x " + value;
}

function setPlaybackRate(value){
 var player = document.querySelector("audio");
 player.playbackRate = value;
 showPlaybackRate(value);
}

function normalSpeed(value){
  var player = document.querySelector("audio");
  player.playbackRate = 1;
}

function onNomalSpeedClicked(event){
  var rate = playbackRateControl.value;
  setPlaybackRate(rate);
};

var playbackRateControl =
 document.querySelector("#nomal-speed");
 playbackRateControl.addEventListener("click", onNomalSpeedButtonClicked);
