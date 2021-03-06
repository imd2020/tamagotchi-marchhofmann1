export default class Background {
    constructor(x, y, s, state, images){
        this.x = x;
        this.y = y;
        this.s = s;
        this.state = state;
        this.titlescreen = images.titlescreen;
        this.tutorial1 = images.tutorial1;
        this.tutorial2 = images.tutorial2;
    }

    display() {
    if (this.state === "start"){
        image(this.titlescreen, this.s * this.x, this.s * this.y, this.s * 800, this.s * 600);
        }

    if (this.state === "tutorial1"){
        image(this.tutorial1, this.s * this.x, this.s * this.y, this.s * 800, this.s * 600);
        }

    if (this.state === "tutorial2"){
        image(this.tutorial2, this.s * this.x, this.s * this.y, this.s * 800, this.s * 600);
        }
    

    if (this.state === "game"){
        noStroke();
        fill(130, 210, 255);
        rect(this.s * this.x, this.s * this.y, this.s * 800, this.s * 600);
        
        fill(50, 100, 20);
        rect(this.s * this.x, this.s * this.y + this.s * 350, this.s * 800, this.s * 250);
        
        fill(0, 0, 0, 160);
        rect(this.s * this.x, this.s * this.y, this.s * 800, this.s * 112);
        rect(this.s * this.x, this.s * this.y + this.s * 488, this.s * 800, this.s * 112);
        rect(this.s * this.x, this.s * this.y + this.s * 112, this.s * 212, this.s * 376);
       }
    }
}