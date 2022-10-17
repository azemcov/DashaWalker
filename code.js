{//start

    let yN = 4; //ball XY in massive & position in game
    let xN = 4; //ball XY in massive & position in game
    let yMap = 5; //level XY in massive
    let xMap = 5; //level XY in massive
    let yMapPos = -1; //map position in game
    let xMapPos = -1; //map position in game
    document.getElementById('up').addEventListener('pointerdown', goUp);
    document.getElementById('left').addEventListener('pointerdown', goLeft);
    document.getElementById('down').addEventListener('pointerdown', goDown);
    document.getElementById('right').addEventListener('pointerdown', goRight);
  //  document.getElementById('up').addEventListener('pointerup', stopWalking);
  //  document.getElementById('left').addEventListener('pointerup', stopWalking);
  //  document.getElementById('down').addEventListener('pointerup', stopWalking);
  //  document.getElementById('right').addEventListener('pointerup', stopWalking);
    document.getElementById('print').innerHTML='проверка'
    function    goUp(){document.getElementById('print').innerHTML='хуетень какая-то';document.getElementById('print').innerHTML='хуетень какая-то 2'};
    function  goLeft(){checkLeft();};
    function  goDown(){checkDown();};
    function goRight(){checkRight();};
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
    

    function checkLeft()
    {
           if (sector[yN][xN-1]=='O'&&level[yMap][xMap-1]=='O'){xN--;xMap--;document.getElementById('ball').style.left=xN+'rem';}
      else if (sector[yN][xN-1]=='B'&&level[yMap][xMap-1]=='O'){xMap--;xMapPos++;document.getElementById('map').style.left=xMapPos+'rem';}
      else {}
    }
    function checkDown()
    {
           if (sector[yN+1][xN]=='O'&&level[yMap+1][xMap]=='O'){yN++;yMap++;document.getElementById('ball').style.top=yN+'rem';}
      else if (sector[yN+1][xN]=='B'&&level[yMap+1][xMap]=='O'){yMap++;yMapPos--;document.getElementById('map').style.top=yMapPos+'rem';}
      else {}
    }
    function checkRight()
    {
           if (sector[yN][xN+1]=='O'&&level[yMap][xMap+1]=='O'){xN++;xMap++;document.getElementById('ball').style.left=xN+'rem';}
      else if (sector[yN][xN+1]=='B'&&level[yMap][xMap+1]=='O'){xMap++;xMapPos--;document.getElementById('map').style.left=xMapPos+'rem';}
      else {}
    }
    
  }//end