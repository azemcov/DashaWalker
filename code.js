{
    let x = document.getElementById('x');
    let y = document.getElementById('y');
    let ball = document.getElementById('ball');
    let xN = 0;
    let yN = 0;

    //for PC
    document.getElementById('up').mousedown = yUp;
    document.getElementById('down').mousedown = yDown;
    document.getElementById('left').mousedown = xLeft;
    document.getElementById('right').mousedown = xRight;
    //for phones
    document.getElementById('up').addEventListener('ontouchstart', yUp);
    document.getElementById('down').addEventListener('ontouchstart', yDown);
    document.getElementById('left').addEventListener('ontouchstart', xLeft);
    document.getElementById('right').addEventListener('ontouchstart', xRight);

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
