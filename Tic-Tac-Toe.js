console.log("connect");
var inc = 1;

document.getElementById('box').style.border = '0';

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
