class Paper{
    constructor(x,y,r){
 var options = {
     'istatic': false,
     'restitution': 0.5,
     'friction' : 0.5,
     'density' : 1.2
 }
this.x = x;
this.y = y;
this.r = r;

this.body = Bodies.circle(x,y,r/2,options);
World.add(world,this.body);


    }

    display(){
        // var paperpos = this.Paper.position;

        push();
        translate(this.paper.position.x,this.papaer.position.y);
        rectMode(centre);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
        

    }
}