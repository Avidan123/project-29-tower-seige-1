class Polygon{
constructor(x,y,radius){
var options={
'restitution':0.8,
 'friction':1.0,
'density':1.0
}
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius


this.image=loadImage("polygon.png")
World.add(world,this.body)


}
display(){
var pos=this.body.position
//ellipse(pos.x,pos.y,pos.radius.x,pos.radius.y)
imageMode(CENTER)
image(this.image,pos.x,pos.y,50,50)

}





}