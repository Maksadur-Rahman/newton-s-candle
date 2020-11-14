class Ball{
 constructor(x,y,radius)
 {

    var opction={

        isStatic:true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,

    }

   this.radius=radius;
   this.x=x;
   this.y=y;
   this.body=Bodies.circle(this.x,this.y,this.radius,opction);
   World.add(world,this.body);


 }
 display(){
   var pos = this.body.position;
   push()
   fill("purple");  
   circle(pos.x,pos.y,this.radius);
   Pop()

  }

}