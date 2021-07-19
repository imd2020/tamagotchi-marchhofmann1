 export default class Parameter {
    constructor(x, y, w, h, s, color, textSize, text, value){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.s = s;
        this.color = color;
        this.textSize = textSize;
        this.text = text;
        this.value = value;
    }

    display() {
        if (this.value === "Name"){
            noStroke();
    
            fill(this.color);
            rect(this.s * this.x, this.s * this.y, this. s *this.w, this.s * this.h);
            
            fill(255);
            textAlign(CENTER);
            textStyle(BOLD);
            textFont("Helvetica");
            textSize(this.s * this.textSize + 10);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 10);
        } else {
        noStroke();

        fill(0, 0, 0, 80);
        rect(this.s * (this.x + 8), this.s * (this.y + 8), this. s *this.w, this.s * this.h);

        fill(this.color);
        rect(this.s * this.x, this.s * this.y, this. s *this.w, this.s * this.h);
        
        fill(255);
        textAlign(CENTER);
        textStyle(NORMAL);
        textFont("Helvetica");
        textSize(this.s * this.textSize);
        text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 - 10);

        fill(255);
        textAlign(CENTER);
        textStyle(BOLD);
        textFont("Helvetica");
        textSize(this.s * (this.textSize + 10));
        text(this.value, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 25);
        }
    }
}