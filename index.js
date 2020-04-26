
var colors = ["red", "blue", "yellow", "green"];
var chain = [];
var userChain = [];


//function - prompt user to begin game
function startGame(){
  chain = [];
  userChain = [];
  $(".user-score").text(chain.length);
  alert("Watch what Simon says, then repeat it back it to him!");
}


// function - add another item to chain
function addItem(){
  var newItem = Math.floor(Math.random()*4)
  chain.push(colors[newItem]);
}


// function - play through the chain
function playChain(){
  // alert("Ok - get ready!")
  userChain = [];
  var delay = 1000;

  $.each(chain, function(col) {
     setTimeout(function () {
        playButton(chain[col])
     }, delay+=500);
  });
}



// function - play one button
function playButton(color){
  $("#" + color).addClass("highlight")

  setTimeout(function(){
    $("#" + color).removeClass("highlight");
    }, 200);
}


$(".color-button").click(function(){
  playButton(this.id);
  userChain.push(this.id);

  if(userChain[userChain.length - 1] !== chain[userChain.length - 1]) {
    alert('Wrong!')
  }
  else if(userChain.length == chain.length) {
    // alert("Well done! Now I make it harder");
    $(".user-score").text(chain.length);
    addItem();
    playChain();
  }
})


$(".button-new-game").click(function() {
  startGame();
  addItem();
  playChain();
});
