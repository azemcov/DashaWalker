{
    let x = document.getElementById('x');
    let y = document.getElementById('y');
    let ball = document.getElementById('ball');
    let xN = 0;
    let yN = 0;

    //for PC
    document.getElementById('up').onpointerdown = yUp;
    document.getElementById('down').onpointerdown = yDown;
    document.getElementById('left').onpointerdown = xLeft;
    document.getElementById('right').onpointerdown = xRight;
    //for phones
    document.getElementById('up').addEventListener('onpointerdown', yUp);
    document.getElementById('down').addEventListener('onpointerdown', yDown);
    document.getElementById('left').addEventListener('onpointerdown', xLeft);
    document.getElementById('right').addEventListener('onpointerdown', xRight);

    function yUp()
    {
        if (yN<0)
        {
            yN++;
            y.innerHTML = 'y:'+yN;
            ball.style.top = -yN+'rem'
        }
        else {}
    }
    function yDown()
    {
        if (yN>-9)
        {
            yN--;
            y.innerHTML = 'y:'+yN;
            ball.style.top = -yN+'rem'
        }
        else {}
    }
    function xLeft()
    {
        if (xN>0)
        {
            xN--;
            x.innerHTML = 'x:'+xN;
            ball.style.left = xN+'rem'
        }
    }
    function xRight()
    {
        if (xN<19)
        {
            xN++;
            x.innerHTML = 'x:'+xN;
            ball.style.left = xN+'rem'
        }
    }
}
