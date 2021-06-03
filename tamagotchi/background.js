export default class Background {
    constructor(x, y, s, state){
        this.x = x;
        this.y = y;
        this.s = s;
        this.state = state;
    }

    display() {
    if (this.state === "start"){
        noStroke();
        fill(200, 0, 0);
        rect(this.s * this.x, this.s * this.y, this.s * 800, this.s * 600);
        }

    if (this.state === "tutorial1"){
        noStroke();
        fill(200, 200, 200);
        rect(this.s * this.x, this.s * this.y, this.s * 800, this.s * 600);

        fill(0);
        textAlign(CENTER);
        textStyle(NORMAL);
        textFont("Helvetica");
        textSize(100);
        text("Test 1", 200, 200);
        }

    if (this.state === "tutorial2"){
        noStroke();
        fill(200, 200, 200);
        rect(this.s * this.x, this.s * this.y, this.s * 800, this.s * 600);

        fill(0);
        textAlign(CENTER);
        textStyle(NORMAL);
        textFont("Helvetica");
        textSize(100);
        text("Test 2", 400, 400);
        }
    

    if (this.state === "game"){
        noStroke();
        fill(0, 0, 200);
        rect(this.s * this.x, this.s * this.y, this.s * 800, this.s * 600);
        
        fill(0, 0, 20);
        rect(this.s * this.x, this.s * this.y + this.s * 400, this.s * 800, this.s * 200);
        
        fill(255, 255, 255, 75);
        rect(this.s * this.x, this.s * this.y, this.s * 800, this.s * 112);
        rect(this.s * this.x, this.s * this.y + this.s * 488, this.s * 800, this.s * 112);
        rect(this.s * this.x, this.s * this.y + this.s * 112, this.s * 212, this.s * 376);
       }
    }
}