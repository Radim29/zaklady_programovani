

class shape
{
    /**
     * Tato instance moduje tvar jenz bude vykreslen v Canvasu
     * @param {Point} center_point - teziste
     * @param {Point} id - identifikator tvaru
     * @param {int} radius - velikost opsane kruznice
     */
    constructor(id, center_point, radius)
    {
        this.id = id;
        this.center_point = center_point;
        this.radius = radius;

        this.shapes = Array();
        this.init();


    }
    init()
    {
        if(this.id == "line")
        {
            let half_radius = this.radius / 2;
            this.shapes.push(new Point(this.center_point.x - half_radius, this.center_point.y));
            this.shapes.push(new Point(this.center_point.x + half_radius, this.center_point.y));



        }





    }
    /**
     * tato metoda vykresli vsechny body
     * @param {context} ctx - context z Canvasu
     */
    draw(ctx)
    {
        for(let i = 0; i < this.shapes.length; i++)
        {
            this.shapes[i].draw(ctx);

        }


    }
}