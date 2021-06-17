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
        image(images.default1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "M" && this.age === 1){
        image(images.bored1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "M" && this.age === 1){
        image(images.happy1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "M" && this.age === 1){
        image(images.hungry1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "M" && this.age === 1){
        image(images.sleeping1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "M" && this.age === 1){
        image(images.unhappy1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Female, Age: 1
        if(this.state === "default" && this.gender === "F" && this.age === 1){
        image(images.default1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "F" && this.age === 1){
        image(images.bored1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "F" && this.age === 1){
        image(images.happy1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "F" && this.age === 1){
        image(images.hungry1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "F" && this.age === 1){
        image(images.sleeping1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "F" && this.age === 1){
        image(images.unhappy1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Special, Age: 1
        if(this.state === "default" && this.gender === "S" && this.age === 1){
        image(images.default1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "S" && this.age === 1){
        image(images.bored1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "S" && this.age === 1){
        image(images.happy1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "S" && this.age === 1){
        image(images.hungry1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "S" && this.age === 1){
        image(images.sleeping1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "S" && this.age === 1){
        image(images.unhappy1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Male, Age: 2
        if(this.state === "default" && this.gender === "M" && this.age === 2){
        image(images.default2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "M" && this.age === 2){
        image(images.bored2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "M" && this.age === 2){
        image(images.happy2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "M" && this.age === 2){
        image(images.hungry2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "M" && this.age === 2){
        image(images.sleeping2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "M" && this.age === 2){
        image(images.unhappy2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Female, Age: 2
        if(this.state === "default" && this.gender === "F" && this.age === 2){
        image(images.default2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "F" && this.age === 2){
        image(images.bored2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "F" && this.age === 2){
        image(images.happy2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "F" && this.age === 2){
        image(images.hungry2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "F" && this.age === 2){
        image(images.sleeping2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "F" && this.age === 2){
        image(images.unhappy2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Special, Age: 2
        if(this.state === "default" && this.gender === "S" && this.age === 2){
        image(images.default2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "S" && this.age === 2){
        image(images.bored2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "S" && this.age === 2){
        image(images.happy2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "S" && this.age === 2){
        image(images.hungry2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "S" && this.age === 2){
        image(images.sleeping2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "S" && this.age === 2){
        image(images.unhappy2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Male, Age: 3
        if(this.state === "default" && this.gender === "M" && this.age === 3){
        image(images.default3M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "M" && this.age === 3){
        image(images.unhappy3M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Female, Age: 3
        if(this.state === "default" && this.gender === "F" && this.age === 3){
        image(images.default3F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "F" && this.age === 3){
        image(images.unhappy3F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Special, Age: 3
        if(this.state === "default" && this.gender === "S" && this.age === 3){
        image(images.default3S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "S" && this.age === 3){
        image(images.unhappy3S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Egg
        if(this.state === "default" && this.gender === "E" && this.age === 1){
        image(images.default1E, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "default" && this.gender === "E" && this.age === 2){
        image(images.default2E, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "default" && this.gender === "E" && this.age === 3){
        image(images.default3E, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Dead
        if(this.state === "dead"  && this.gender != "E"){
        image(images.dead1, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "dead" && this.gender === "E"){
        image(images.dead2, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
    }
}