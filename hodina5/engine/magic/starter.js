function test()
{
    console.log("test");

    let mycanvas = document.getElementById("myCanvas");
    let context = mycanvas.getContext("2d");

    let point1 = new Point(100, 100, context);

    point1.draw();
    
    let point2 = new Point(50, 50, context);
    point2.draw();
    
    let x = 50;
    let y = 50;

    for(let i = 0; i < 8; i++)
    {
        console.log(i);

        
        let y = 50;

        let point = new Point (x, y, context)
        point.draw();

        x = x + 20;
        y = y + 10;

    }




}