class Sprite{
    constructor(animation, x, y, speed){
        this.x = x;
        this.y = y;
        this.animation = animation;
        this.w = this.animation[0].width;
        this.len = this.animation.length;
        this.speed = speed; 
        this.index = 0;
        this.radius = this.w/2;

        //defining function within a constructor makes it specific to that instance
        this.intersects = function(other){
                //the x in this x represents the center
                let d = dist(this.x + this.radius, this.y + this.radius, other.x + other.radius, other.y + other.radius);
                if (d<this.radius + other.radius){
                    return true;
                } else{
                    return false;
                } 
                
                
        }
        
    }

    show(){
        let index = floor(this.index) % this.len;
        image(this.animation[index], this.x, this.y); 
    }

    animate(){
        this.index += this.speed;
        this.x += this.speed *5;

        //once bird is off the screen, reset the x position
        if(this.x >width){
            this.x = -this.w;
        }
    }

}