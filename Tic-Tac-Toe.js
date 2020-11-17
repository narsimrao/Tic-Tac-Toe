console.log("connect");
var inc = 1;

// document.getElementsByTagName('td').style.border = '0';

var Restart = document.getElementById('Restart_btn');

var Start = document.getElementById('start_btn');

var box = document.querySelectorAll("td");

Restart.addEventListener("click",restart_the_game);

Start.addEventListener("click",game_start);
//restart_the_game
function restart_the_game(){
  for(var i=0;i<box.length;i++)
  {
    box[i].textContent = '';
    inc=1;
  }
}

function alert_winner(){
  // x winning combination
  if(box[0].textContent === 'X' && box[1].textContent === 'X' && box[2].textContent === 'X')
  {
    document.getElementById('winner').innerHTML = 'X Wins';
  }
  if(box[3].textContent === 'X' && box[4].textContent === 'X' && box[5].textContent === 'X')
  {
    document.getElementById('winner').innerHTML = 'X Wins';
  }
  if(box[6].textContent === 'X' && box[7].textContent === 'X' && box[8].textContent === 'X')
  {
    document.getElementById('winner').innerHTML = 'X Wins';
  }
  if(box[0].textContent === 'X' && box[4].textContent === 'X' && box[8].textContent === 'X')
  {
    document.getElementById('winner').innerHTML = 'X Wins';
  }
  if(box[2].textContent === 'X' && box[4].textContent === 'X' && box[6].textContent === 'X')
  {
    document.getElementById('winner').innerHTML = 'X Wins';
  }
  if(box[0].textContent === 'X' && box[3].textContent === 'X' && box[6].textContent === 'X')
  {
    document.getElementById('winner').innerHTML = 'X Wins';
  }
  if(box[2].textContent === 'X' && box[5].textContent === 'X' && box[8].textContent === 'X')
  {
    document.getElementById('winner').innerHTML = 'X Wins';
  }
  if(box[1].textContent === 'X' && box[4].textContent === 'X' && box[7].textContent === 'X')
  {
    document.getElementById('winner').innerHTML = 'X Wins';
  }


  // O winning combination
  if(box[0].textContent === 'O' && box[1].textContent === 'O' && box[2].textContent === 'O')
  {
    document.getElementById('winner').innerHTML = 'O Wins';
  }
  if(box[3].textContent === 'O' && box[4].textContent === 'O' && box[5].textContent === 'O')
  {
    document.getElementById('winner').innerHTML = 'O Wins';
  }
  if(box[6].textContent === 'O' && box[7].textContent === 'O' && box[8].textContent === 'O')
  {
    document.getElementById('winner').innerHTML = 'O Wins';
  }
  if(box[0].textContent === 'O' && box[4].textContent === 'O' && box[8].textContent === 'O')
  {
    document.getElementById('winner').innerHTML = 'O Wins';
  }
  if(box[2].textContent === 'O' && box[4].textContent === 'O' && box[6].textContent === 'O')
  {
    document.getElementById('winner').innerHTML = 'O Wins';
  }
  if(box[0].textContent === 'O' && box[3].textContent === 'O' && box[6].textContent === 'O')
  {
    document.getElementById('winner').innerHTML = 'O Wins';
  }
  if(box[2].textContent === 'O' && box[5].textContent === 'O' && box[8].textContent === 'O')
  {
    document.getElementById('winner').innerHTML = 'O Wins';
  }
  if(box[1].textContent === 'O' && box[4].textContent === 'O' && box[7].textContent === 'O')
  {
    document.getElementById('winner').innerHTML = 'O Wins';
  }
}

//change between x and o
function game_play(){

  if(this.textContent === '')
  {
    if(inc%2 == 0)
   {
     this.textContent = 'O';
   }
   else {
     this.textContent = 'X';
   }
   inc++;
   alert_winner();
  }


}

for(var k=0;k<box.length;k++)
{
    box[k].addEventListener('click',game_play);
}


function game_start(){

    for(var f = 0; f<box.length;f++)
    {
      box[f].style.border = '5px solid black';
    }


}
