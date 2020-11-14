class Roof{
    constructor(x,y,width,height){

        var opction={
  
            isStatic:true,
        
        }

        
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,opction);

     }
     display(){

        var pos = this.body.position;
        push()
        fill("purple");  
        circle(pos.x,pos.y,this.diameter);
        pop()
    }
}