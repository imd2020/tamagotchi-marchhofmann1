export default class Button {
    constructor(x, y, w, h, s, isActive, color, textSize, text, text2){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.s = s;
        this.isActive = isActive;
        this.color = color;
        this.textSize = textSize;
        this.text = text;
        this.text2 = text2;
    }

    display() {
        if (this.w >= 500){
            noStroke();
            if (this.isActive === true){
                fill(255, 200, 0, 192);
                }
                if (this.isActive === false){
                fill(0, 0, 0, 80);
                }
            rect(this.s * (this.x + 8), this.s * (this.y + 8), this. s *this.w, this.s * this.h);
    
            fill(this.color);
            rect(this.s * this.x, this.s * this.y, this. s *this.w, this.s * this.h);
    
            fill(0);
            textAlign(CENTER);
            textStyle(NORMAL);
            textFont("Helvetica");
            textSize(this.s * this.textSize);
            text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 - 5);
            text(this.text2, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 20);
        } else {
        noStroke();
        if (this.isActive === true){
            fill(255, 200, 0, 192);
            }
            if (this.isActive === false){
            fill(0, 0, 0, 80);
            }
        rect(this.s * (this.x + 8), this.s * (this.y + 8), this. s *this.w, this.s * this.h);

        fill(this.color);
        rect(this.s * this.x, this.s * this.y, this. s *this.w, this.s * this.h);

        fill(255);
        textAlign(CENTER);
        textStyle(NORMAL);
        textFont("Helvetica");
        textSize(this.s * this.textSize);
        text(this.text, this.s * this.x + this.s * this.w / 2, this.s * this.y + this.s * this.h / 2 + 7);
        }
    }

    hitTest() {
        if (mouseX >= this.s * this.x &&
            mouseX <= this.s * this.x + this.s * this.w &&
            mouseY >= this.s * this.y &&
            mouseY <= this.s * this.y + this.s * this.h
            ){
                return true;
            } else {
                return false;
            }
    }
}