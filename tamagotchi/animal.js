export default class Animal {
    constructor(x, y, w, h, s, state, gender, age){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.s = s;
        this.state = state;
        this.gender = gender;
        this.age = age;
    }


    display() {
        //Male, Age: 1
        if(this.state === "default" && this.gender === "M" && this.age === 1){
        image(default1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "M" && this.age === 1){
        image(bored1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "M" && this.age === 1){
        image(happy1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "M" && this.age === 1){
        image(hungry1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "M" && this.age === 1){
        image(sleeping1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "M" && this.age === 1){
        image(unhappy1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Female, Age: 1
        if(this.state === "default" && this.gender === "F" && this.age === 1){
        image(default1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "F" && this.age === 1){
        image(bored1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "F" && this.age === 1){
        image(happy1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "F" && this.age === 1){
        image(hungry1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "F" && this.age === 1){
        image(sleeping1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "F" && this.age === 1){
        image(unhappy1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Special, Age: 1
        if(this.state === "default" && this.gender === "S" && this.age === 1){
        image(default1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "S" && this.age === 1){
        image(bored1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "S" && this.age === 1){
        image(happy1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "S" && this.age === 1){
        image(hungry1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "S" && this.age === 1){
        image(sleeping1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "S" && this.age === 1){
        image(unhappy1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Male, Age: 2
        if(this.state === "default" && this.gender === "M" && this.age === 2){
        image(default2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "M" && this.age === 2){
        image(bored2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "M" && this.age === 2){
        image(happy2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "M" && this.age === 2){
        image(hungry2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "M" && this.age === 2){
        image(sleeping2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "M" && this.age === 2){
        image(unhappy2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Female, Age: 2
        if(this.state === "default" && this.gender === "F" && this.age === 2){
        image(default2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "F" && this.age === 2){
        image(bored2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "F" && this.age === 2){
        image(happy2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "F" && this.age === 2){
        image(hungry2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "F" && this.age === 2){
        image(sleeping2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "F" && this.age === 2){
        image(unhappy2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Special, Age: 2
        if(this.state === "default" && this.gender === "S" && this.age === 2){
        image(default2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "S" && this.age === 2){
        image(bored2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "S" && this.age === 2){
        image(happy2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "S" && this.age === 2){
        image(hungry2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "S" && this.age === 2){
        image(sleeping2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "S" && this.age === 2){
        image(unhappy2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Male, Age: 3
        if(this.state === "default" && this.gender === "M" && this.age === 3){
        image(default3M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "M" && this.age === 3){
        image(unhappy3M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Female, Age: 3
        if(this.state === "default" && this.gender === "F" && this.age === 3){
        image(default3F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "F" && this.age === 3){
        image(unhappy3F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Special, Age: 3
        if(this.state === "default" && this.gender === "S" && this.age === 3){
        image(default3S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "S" && this.age === 3){
        image(unhappy3S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Egg
        if(this.state === "default" && this.gender === "E" && this.age === 1){
        image(default1E, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "default" && this.gender === "E" && this.age === 2){
        image(default2E, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "default" && this.gender === "E" && this.age === 3){
        image(default3E, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Dead
        if(this.state === "dead"  && this.gender != "E"){
        image(dead1, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "dead" && this.gender === "E"){
        image(dead2, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
    }
}