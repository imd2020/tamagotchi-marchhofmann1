export default class Animal {
    constructor(x, y, w, h, s, state, gender, age, images){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.s = s;
        this.state = state;
        this.gender = gender;
        this.age = age;

        this.default1M = images.default1M;
        this.bored1M = images.bored1M;
        this.happy1M = images.happy1M;
        this.hungry1M = images.hungry1M;
        this.sleeping1M = images.sleeping1M;
        this.unhappy1M = images.unhappy1M;

        this.default1F = images.default1F;
        this.bored1F = images.bored1F;
        this.happy1F = images.happy1F;
        this.hungry1F = images.hungry1F;
        this.sleeping1F = images.sleeping1F;
        this.unhappy1F = images.unhappy1F;

        this.default1S = images.default1S;
        this.bored1S = images.bored1S;
        this.happy1S = images.happy1S;
        this.hungry1S = images.hungry1S;
        this.sleeping1S = images.sleeping1S;
        this.unhappy1S = images.unhappy1S;

        this.default2M = images.default2M;
        this.bored2M = images.bored2M;
        this.happy2M = images.happy2M;
        this.hungry2M = images.hungry2M;
        this.sleeping2M = images.sleeping2M;
        this.unhappy2M = images.unhappy2M;

        this.default2F = images.default2F;
        this.bored2F = images.bored2F;
        this.happy2F = images.happy2F;
        this.hungry2F = images.hungry2F;
        this.sleeping2F = images.sleeping2F;
        this.unhappy2F = images.unhappy2F;

        this.default2S = images.default2S;
        this.bored2S = images.bored2S;
        this.happy2S = images.happy2S;
        this.hungry2S = images.hungry2S;
        this.sleeping2S = images.sleeping2S;
        this.unhappy2S = images.unhappy2S;

        this.default3M = images.default3M;
        this.unhappy3M = images.unhappy3M;

        this.default3F = images.default3F;
        this.unhappy3F = images.unhappy3F;

        this.default3S = images.default3S;
        this.unhappy3S = images.unhappy3S;

        this.default1E = images.default1E;
        this.default2E = images.default2E;
        this.default3E = images.default3E;
        
        this.dead1 = images.dead1;
        this.dead2 = images.dead2;
    }

    display() {
        //Male, Age: 1
        if(this.state === "default" && this.gender === "M" && this.age === 1){
        image(this.default1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "M" && this.age === 1){
        image(this.bored1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "M" && this.age === 1){
        image(this.happy1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "M" && this.age === 1){
        image(this.hungry1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "M" && this.age === 1){
        image(this.sleeping1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "M" && this.age === 1){
        image(this.unhappy1M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Female, Age: 1
        if(this.state === "default" && this.gender === "F" && this.age === 1){
        image(this.default1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "F" && this.age === 1){
        image(this.bored1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "F" && this.age === 1){
        image(this.happy1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "F" && this.age === 1){
        image(this.hungry1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "F" && this.age === 1){
        image(this.sleeping1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "F" && this.age === 1){
        image(this.unhappy1F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Special, Age: 1
        if(this.state === "default" && this.gender === "S" && this.age === 1){
        image(this.default1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "S" && this.age === 1){
        image(this.bored1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "S" && this.age === 1){
        image(this.happy1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "S" && this.age === 1){
        image(this.hungry1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "S" && this.age === 1){
        image(this.sleeping1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "S" && this.age === 1){
        image(this.unhappy1S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Male, Age: 2
        if(this.state === "default" && this.gender === "M" && this.age === 2){
        image(this.default2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "M" && this.age === 2){
        image(this.bored2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "M" && this.age === 2){
        image(this.happy2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "M" && this.age === 2){
        image(this.hungry2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "M" && this.age === 2){
        image(this.sleeping2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "M" && this.age === 2){
        image(this.unhappy2M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Female, Age: 2
        if(this.state === "default" && this.gender === "F" && this.age === 2){
        image(this.default2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "F" && this.age === 2){
        image(this.bored2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "F" && this.age === 2){
        image(this.happy2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "F" && this.age === 2){
        image(this.hungry2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "F" && this.age === 2){
        image(this.sleeping2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "F" && this.age === 2){
        image(this.unhappy2F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Special, Age: 2
        if(this.state === "default" && this.gender === "S" && this.age === 2){
        image(this.default2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "bored" && this.gender === "S" && this.age === 2){
        image(this.bored2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "happy" && this.gender === "S" && this.age === 2){
        image(this.happy2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "hungry" && this.gender === "S" && this.age === 2){
        image(this.hungry2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "sleeping" && this.gender === "S" && this.age === 2){
        image(this.sleeping2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "S" && this.age === 2){
        image(this.unhappy2S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Male, Age: 3
        if(this.state === "default" && this.gender === "M" && this.age === 3){
        image(this.default3M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "M" && this.age === 3){
        image(this.unhappy3M, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Female, Age: 3
        if(this.state === "default" && this.gender === "F" && this.age === 3){
        image(this.default3F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "F" && this.age === 3){
        image(this.unhappy3F, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Special, Age: 3
        if(this.state === "default" && this.gender === "S" && this.age === 3){
        image(this.default3S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "unhappy" && this.gender === "S" && this.age === 3){
        image(this.unhappy3S, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Egg
        if(this.state === "default" && this.gender === "E" && this.age === 1){
        image(this.default1E, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "default" && this.gender === "E" && this.age === 2){
        image(this.default2E, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "default" && this.gender === "E" && this.age === 3){
        image(this.default3E, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }

        //Dead
        if(this.state === "dead"  && this.gender != "E"){
        image(this.dead1, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
        if(this.state === "dead" && this.gender === "E"){
        image(this.dead2, this.s * this.x, this.s * this.y, this.s * this.w, this.s * this.h);
        }
    }
}