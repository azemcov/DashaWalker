{
    let x = document.getElementById('x');
    let y = document.getElementById('y');
    let ball = document.getElementById('ball');
    let xN = 0;
    let yN = 0;

//     document.getElementById('up').onclick = yUp;
//     document.getElementById('down').onclick = yDown;
//     document.getElementById('left').onclick = xLeft;
//     document.getElementById('right').onclick = xRight;

//     document.getElementById('up').addEventListener("click", yUp);
//     document.getElementById('down').addEventListener("click", yDown);
//     document.getElementById('left').addEventListener("click", xLeft);
//     document.getElementById('right').addEventListener("click", xRight);

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
