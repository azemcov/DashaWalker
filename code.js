{//start

    let yN = 4; //ball XY in massive & position in game
    let xN = 4; //ball XY in massive & position in game
    let yMap = 5; //level XY in massive
    let xMap = 5; //level XY in massive
    let yMapPos = -1; //map position in game
    let xMapPos = -1; //map position in game

  //  document.getElementById('up').addEventListener('pointerup', stopWalking);
  //  document.getElementById('left').addEventListener('pointerup', stopWalking);
  //  document.getElementById('down').addEventListener('pointerup', stopWalking);
  //  document.getElementById('right').addEventListener('pointerup', stopWalking);
    document.getElementById('print').innerHTML='проверка'

    let sector = [['B','B','B','B','B','B','B','B','B'],
                  ['B','O','O','O','O','O','O','O','B'],
                  ['B','O','O','O','O','O','O','O','B'],
                  ['B','O','O','O','O','O','O','O','B'],
                  ['B','O','O','O','O','O','O','O','B'],
                  ['B','O','O','O','O','O','O','O','B'],
                  ['B','O','O','O','O','O','O','O','B'],
                  ['B','O','O','O','O','O','O','O','B'],
                  ['B','B','B','B','B','B','B','B','B']];
    
    let level =[['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','O','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','O','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','O','O','O','O','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
                ['B','B','B','B','B','O','B','O','B','B','B','B','B','B','B','B','B','B','O','O','O','O','O','O','B','B','B','B','B','B','B','B','B','B','O','O','O','O','O','O','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
                ['B','B','B','O','B','O','B','O','O','O','O','B','B','B','O','O','O','O','O','B','B','B','O','O','O','B','B','B','B','B','B','B','B','B','B','O','B','O','O','B','B','B','B','B','B','B','B','B','B','O','B','B','B','B','B'],
                ['B','B','B','O','O','O','O','O','O','B','O','O','O','O','O','O','O','O','B','B','O','O','O','O','O','O','B','B','B','B','B','B','B','B','B','B','O','O','O','B','B','B','B','B','B','B','B','O','O','O','O','B','B','B','B'],
                ['B','B','B','O','O','O','O','O','O','O','O','O','O','O','O','B','O','O','O','O','O','O','O','O','O','O','O','O','B','B','B','B','B','B','B','B','B','O','B','B','B','B','B','B','B','O','O','O','O','O','O','O','B','B','B'],
                ['B','B','O','B','O','O','O','O','O','O','O','O','O','B','B','B','O','O','O','O','B','O','O','O','O','O','O','O','O','O','B','B','B','B','B','B','B','O','B','B','B','B','B','O','O','O','O','O','O','O','O','O','B','B','B'],
                ['B','B','B','O','B','B','O','O','B','B','O','B','B','B','O','O','O','O','O','B','O','B','O','O','O','O','O','O','O','B','B','B','B','B','O','B','O','O','B','B','B','B','O','O','O','O','O','O','O','O','O','B','B','B','B'],
                ['B','B','B','B','B','B','B','B','B','O','O','O','B','B','B','O','O','O','O','O','O','O','O','O','O','B','B','B','O','B','B','B','B','B','O','O','O','O','O','B','B','O','O','O','O','O','O','O','O','O','O','O','O','B','B'],
                ['B','B','B','B','B','B','B','O','O','O','O','O','O','O','B','B','O','O','O','O','O','O','O','O','O','O','B','O','B','B','B','O','O','O','O','O','O','O','O','O','B','O','O','O','O','O','O','O','O','O','O','O','B','B','B'],
                ['B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','B','B','B','O','O','O','O','O','B','O','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','B','B','B','B','B'],
                ['B','B','B','B','B','O','O','B','O','O','O','O','O','O','B','O','B','B','B','B','O','B','B','B','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','B','O','O','O','O','O','O','O','O','O','B','B','B','B','B'],
                ['B','B','B','B','O','O','O','O','O','O','O','O','B','O','O','O','O','B','B','O','O','B','B','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','B','B','O','O','O','O','O','O','O','O','O','B','B','B','B','B'],
                ['B','B','B','B','O','O','O','O','O','O','O','O','O','B','B','O','B','B','B','B','B','B','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','B','B','O','O','O','O','O','O','O','O','O','B','B','B','B','B'],
                ['B','B','B','B','O','O','O','O','O','O','O','O','B','O','O','B','B','B','B','O','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','O','B','B','B','O','O','O','O','O','O','O','O','O','B','B','B','B','B'],
                ['B','B','B','B','O','O','O','O','O','B','O','B','O','O','B','O','O','O','O','O','O','O','B','B','O','O','B','B','O','O','O','O','O','O','O','B','O','O','B','B','B','O','O','O','O','O','O','O','O','O','O','B','B','B','B'],
                ['B','B','B','B','O','O','O','B','B','B','O','O','O','B','B','O','O','O','B','O','O','O','O','B','B','O','B','B','O','O','O','B','O','O','B','O','O','B','B','B','O','O','O','O','O','O','O','O','O','O','O','O','B','B','B'],
                ['B','B','B','O','O','O','O','B','B','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','B','O','O','O','O','O','O','O','O','B','B','O','B','B','B','B','O','O','O','O','O','O','O','O','B','O','O','O','O','B','B'],
                ['B','B','B','O','O','O','B','B','B','O','O','O','O','O','B','B','O','O','O','O','O','O','O','O','B','O','O','O','O','O','B','B','O','O','O','B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','O','O','O','B','B'],
                ['B','B','B','B','O','O','B','B','O','O','O','O','O','B','O','O','B','O','B','O','O','O','O','O','B','O','O','O','O','O','O','O','O','O','B','B','B','B','O','O','O','O','B','O','O','B','O','O','B','O','O','B','O','B','B'],
                ['B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','B','B','O','O','B','B','B','O','O','O','O','O','O','O','O','B','O','B','B','O','O','O','O','B'],
                ['B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','B','O','O','O','O','O','O','O','B','O','B','B','B','B','O','O','O','O','O','O','O','O','B','O','B','B','O','O','O','O','B'],
                ['B','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','O','O','O','B','B','B','B','B','O','B','O','B','O','O','O','B','B','B','B','B','O','O','O','O','O','B','O','B','B','B','O','O','O','O','B','O','B'],
                ['B','B','B','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','B','B','O','O','O','O','B','B','B','B','B','B','O','B','B','B','B','B','O','O','O','O','O','O','O','O','O','B','O','O','O','B','O','O','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','B','B','B','B','B','B','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','O','O','O','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','O','B','O','O','O','B','O','B','B','B','B','B','B','B','B','B','B','B','B','O','O','O','O','O','O','O','B','O','O','O','O','B','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','O','O','O','O','O','O','O','O','O','O','B','B','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','O','O','O','O','O','B','B','B','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
                ['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B']];
    
document.getElementById('up').onclick = function()
{
       if (sector[yN-1][xN]=='O'&&level[yMap-1][xMap]=='O'){yN--;yMap--;document.getElementById('ball').style.top=yN+'rem';}
  else if (sector[yN-1][xN]=='B'&&level[yMap-1][xMap]=='O'){yMap--;yMapPos++;document.getElementById('map').style.top=yMapPos+'rem';}
  else {}
};
document.getElementById('left').onclick = function()
{
       if (sector[yN][xN-1]=='O'&&level[yMap][xMap-1]=='O'){xN--;xMap--;document.getElementById('ball').style.left=xN+'rem';}
  else if (sector[yN][xN-1]=='B'&&level[yMap][xMap-1]=='O'){xMap--;xMapPos++;document.getElementById('map').style.left=xMapPos+'rem';}
  else {}
}
document.getElementById('down').onclick = function()
{
      if (sector[yN+1][xN]=='O'&&level[yMap+1][xMap]=='O'){yN++;yMap++;document.getElementById('ball').style.top=yN+'rem';}
  else if (sector[yN+1][xN]=='B'&&level[yMap+1][xMap]=='O'){yMap++;yMapPos--;document.getElementById('map').style.top=yMapPos+'rem';}
  else {}
}
document.getElementById('right').onclick = function()
{
       if (sector[yN][xN+1]=='O'&&level[yMap][xMap+1]=='O'){xN++;xMap++;document.getElementById('ball').style.left=xN+'rem';}
  else if (sector[yN][xN+1]=='B'&&level[yMap][xMap+1]=='O'){xMap++;xMapPos--;document.getElementById('map').style.left=xMapPos+'rem';}
  else {}
}    
  }//end