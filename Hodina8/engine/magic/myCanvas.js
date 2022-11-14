class myCanvas
{
    constructor(id)
    {
        this.id = id;
        this.el = document.getElementById(this.id);

        this.ctx = this.el.getContext("2d");


        this.shapes = Array();

        this.width = this.el.width;
        this.height = this.el.height;
    }
    /**
     * Tato funkce usnadnuje pridavani bodu co Canvasu, ktere budou vykresleny
     * @param {Point} new_point - novy bod pro vykresleni
     */
    add_shape(new_point)
    {
        this.shapes.push(new_point);


    }


    /**
     * Tato metoda vykresli vsechny body, jenz jsou znamy pro nas Canvas.
     */
    display()
    {
        for(let i = 0; i < this.shapes.length; i++)
        {
            this.shapes[i].draw(this.ctx);
            if(this.shapes[i].vector != null)
            this.shapes[i].move();

        }
    }
    clear()
    {
        this.ctx.clearRect(0, 0,this.el.width, this.el.height);


    }

    debug()
    {
        console.log("id: " + this.id);

        for(let i = 0; i < this.shapes.length; i++)
        {
            this.shapes[i].debug();





        }




    }


}