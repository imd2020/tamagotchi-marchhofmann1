import Button from "./classes/button.js";
import Background from "./classes/background.js";
import Parameter from "./classes/parameter.js";
import Animal from "./classes/animal.js";

let images = {
    default1M: loadImage("./assets/default1M.png"),
    bored1M: loadImage("./assets/bored1M.png"),
    happy1M: loadImage("./assets/happy1M.png"),
    hungry1M: loadImage("./assets/hungry1M.png"),
    sleeping1M: loadImage("./assets/sleeping1M.png"),
    unhappy1M: loadImage("./assets/unhappy1M.png"),

    default1F: loadImage("./assets/default1F.png"),
    bored1F: loadImage("./assets/bored1F.png"),
    happy1F: loadImage("./assets/happy1F.png"),
    hungry1F: loadImage("./assets/hungry1F.png"),
    sleeping1F: loadImage("./assets/sleeping1F.png"),
    unhappy1F: loadImage("./assets/unhappy1F.png"),

    default1S: loadImage("./assets/default1S.png"),
    bored1S: loadImage("./assets/bored1S.png"),
    happy1S: loadImage("./assets/happy1S.png"),
    hungry1S: loadImage("./assets/hungry1S.png"),
    sleeping1S: loadImage("./assets/sleeping1S.png"),
    unhappy1S: loadImage("./assets/unhappy1S.png"),

    default2M: loadImage("./assets/default2M.png"),
    bored2M: loadImage("./assets/bored2M.png"),
    happy2M: loadImage("./assets/happy2M.png"),
    hungry2M: loadImage("./assets/hungry2M.png"),
    sleeping2M: loadImage("./assets/sleeping2M.png"),
    unhappy2M: loadImage("./assets/unhappy2M.png"),

    default2F: loadImage("./assets/default2F.png"),
    bored2F: loadImage("./assets/bored2F.png"),
    happy2F: loadImage("./assets/happy2F.png"),
    hungry2F: loadImage("./assets/hungry2F.png"),
    sleeping2F: loadImage("./assets/sleeping2F.png"),
    unhappy2F: loadImage("./assets/unhappy2F.png"),

    default2S: loadImage("./assets/default2S.png"),
    bored2S: loadImage("./assets/bored2S.png"),
    happy2S: loadImage("./assets/happy2S.png"),
    hungry2S: loadImage("./assets/hungry2S.png"),
    sleeping2S: loadImage("./assets/sleeping2S.png"),
    unhappy2S: loadImage("./assets/unhappy2S.png"),

    default3M: loadImage("./assets/default3M.png"),
    unhappy3M: loadImage("./assets/unhappy3M.png"),

    default3F: loadImage("./assets/default3F.png"),
    unhappy3F: loadImage("./assets/unhappy3F.png"),

    default3S: loadImage("./assets/default3S.png"),
    unhappy3S: loadImage("./assets/unhappy3S.png"),

    default1E: loadImage("./assets/default1E.png"),
    default2E: loadImage("./assets/default2E.png"),
    default3E: loadImage("./assets/default3E.png"),

    titlescreen: loadImage("./assets/titlescreen.jpg"),
    tutorial1: loadImage("./assets/tutorial1.jpg"),
    tutorial2: loadImage("./assets/tutorial2.jpg"),

    dead1: loadImage("./assets/dead1.png"),
    dead2: loadImage("./assets/dead2.png"),
};

//creating classes
let background = new Background(0, 0, 1, "null", images);
let parameter1 = new Parameter(16, 16, 180, 80, 1, color(180, 120, 40), 18, "Sympathie:", 0);
let parameter2 = new Parameter(212, 16, 180, 80, 1, color(180, 120, 40), 18, "Freude:", 0);
let parameter3 = new Parameter(408, 16, 180, 80, 1, color(180, 120, 40), 18, "Hunger:", 0);
let parameter4 = new Parameter(604, 16, 180, 80, 1, color(180, 120, 40), 18, "M??digkeit:", 0);
let name = new Parameter(16, 116, 180, 80, 1, color(0, 0, 0, 0), 18, "null", "Name");

let startButton = new Button(310, 400, 180, 80, 1, false, color(0, 50, 100), 20, "Start", "");
let tutorialButton = new Button(310, 500, 180, 80, 1, false, color(0, 50, 100), 20, "Weiter", "");
let button1 = new Button(16, 216, 180, 80, 1, false, color(0, 50, 100), 20, "null", "");
let button2 = new Button(16, 312, 180, 80, 1, false, color(0, 50, 100), 20, "null", "");
let button3 = new Button(16, 408, 180, 80, 1, false, color(0, 50, 100), 20, "null", "");
let button4 = new Button(16, 504, 180, 80, 1, false, color(0, 50, 100), 20, "null", "");
let textbox = new Button(212, 504, 572, 80, 1, false, color(220, 220, 220), 20, "null", "null");

let animal = new Animal(350, 165, 300, 300, 1, "default", "S", 1, images);

let globalTime = 0;
let globalState = "start";
let globalRandom = 0;
let globalAge = 0;

function startScreen(){
    background.display();
    startButton.display();
}

function tutorialScreen(){
    background.display();
    tutorialButton.display();
}

function gameScreen(){
    background.display();

    parameter1.display();
    parameter2.display();
    parameter3.display();
    parameter4.display();
    name.display();

    button1.display();
    button2.display();
    button3.display();
    button4.display();
    textbox.display();

    animal.display();
}

function mouseClicked(){
    //start
    if (startButton.hitTest() && globalState === "start") {
        globalState = "tutorial";
        background.state = "tutorial1";
        frameCount = 0;
      }

    //tutorial
    if (tutorialButton.hitTest() && globalState === "tutorial" && background.state === "tutorial1" && frameCount > 10) {
        background.state = "tutorial2";
        tutorialButton.text = "Start";
        frameCount = 0;
    }

    if (tutorialButton.hitTest() && globalState === "tutorial" && background.state === "tutorial2" && frameCount > 10) {
        globalState = "game";
        frameCount = 0;

        globalTime = 1;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "Ein Ei ist erschienen.";
        textbox.text2 = "";
        textbox.isActive = false;

        name.text = "Ei";
        animal.state = "default";
        animal.gender = "E";
        animal.age = 1;
    }

    //game
    //egg
    if (textbox.hitTest() && globalState === "game" && textbox.isActive === true && globalTime === 1) {
        globalTime = 2;
        button1.text = "Warten";
        button2.text = "Ei aufbrechen";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = true;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "K??mmere dich um das Ei.";
        textbox.text2 = "";
        textbox.isActive = false;

        name.text = "Ei";
        animal.state = "default";
        animal.gender = "E";
        animal.age = 1;
    }

    if (button1.hitTest() && globalState === "game" && button1.isActive === true && globalTime === 2) {
        globalTime = 3;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "Dein Ei beginnt zu schl??pfen!";
        textbox.text2 = "";
        textbox.isActive = true;

        name.text = "Ei";
        animal.state = "default";
        animal.gender = "E";
        animal.age = 2;
    }
    
    if (textbox.hitTest() && globalState === "game" && textbox.isActive === true && globalTime === 3) {
        globalTime = 4;
        button1.text = "Warten";
        button2.text = "Ei aufbrechen";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = true;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "Was m??chtest du tun?";
        textbox.text2 = "";
        textbox.isActive = false;

        name.text = "Ei";
        animal.state = "default";
        animal.gender = "E";
        animal.age = 2;
    }

    if (button1.hitTest() && globalState === "game" && button1.isActive === true && globalTime === 4) {
        globalTime = 5;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "Es dauert nicht mehr lange,";
        textbox.text2 = "bis es schl??pft!";
        textbox.isActive = true;

        name.text = "Ei";
        animal.state = "default";
        animal.gender = "E";
        animal.age = 3;
    }

    if (textbox.hitTest() && globalState === "game" && textbox.isActive === true && globalTime === 5) {
        globalTime = 6;
        button1.text = "Warten";
        button2.text = "Ei aufbrechen";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = true;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "Was m??chtest du tun?";
        textbox.text2 = "";
        textbox.isActive = false;

        name.text = "Ei";
        animal.state = "default";
        animal.gender = "E";
        animal.age = 3;
    }

    //dead
    if (button2.hitTest() && globalState === "game" && button2.isActive === true && button2.text === "Ei aufbrechen") {
        globalTime = 0;
        button1.text = "Neustart";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "Wie konntest du nur?";
        textbox.text2 = "Du hast das Ei kaputt gemacht!";
        textbox.isActive = false;

        name.text = "Ei";
        animal.state = "dead";
        animal.gender = "E";
        animal.age = 1;
    }

    if (button1.hitTest() && globalState === "game" && button1.isActive === true && animal.state === "dead") {
        globalState = "start";
        globalTime = 0;
        globalAge = 0;
        globalRandom = 0;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "";
        textbox.text2 = "";
        textbox.isActive = false;

        name.text = "null";
        animal.state = "default";
        animal.gender = "E";
        animal.age = 1;

        parameter1.value = 0;
        parameter2.value = 0;
        parameter3.value = 0;
        parameter4.value = 0;
    }

    if (globalTime === 9 && parameter1.value <= 0) {
        globalTime = 0;
        button1.text = "Neustart";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = name.text + " hat zu wenig Sympathie zu dir aufgebaut.";
        textbox.text2 = name.text + " nahm den letzten Ausweg.";
        textbox.isActive = false;

        animal.state = "dead";
    }

    if (globalTime === 9 && parameter2.value <= 0) {
        globalTime = 0;
        button1.text = "Neustart";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = name.text + " ist vor Freudlosigkeit gestorben.";
        textbox.text2 = "Ruhe in Frieden " + name.text + ".";
        textbox.isActive = false;

        animal.state = "dead";
    }

    if (globalTime === 9 && parameter3.value >= 100) {
        globalTime = 0;
        button1.text = "Neustart";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = name.text  + " ist verhungert.";
        textbox.text2 = "Du h??ttest " + name.text + " h??ufiger f??ttern sollen!";
        textbox.isActive = false;

        animal.state = "dead";
    }

    if (globalTime === 9 && parameter4.value >= 100) {
        globalTime = 0;
        button1.text = "Neustart";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = name.text + " ist vor Schlaflosigkeit gestorben.";
        textbox.text2 = "Das waren zu viele schlaflose N??chte f??r " + name.text + ".";
        textbox.isActive = false;

        animal.state = "dead";
    }

    //animal
    if (button1.hitTest() && globalState === "game" && button1.isActive === true && globalTime === 6) {
        globalTime = 7;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "Es ist geschl??pft!";
        textbox.text2 = "";
        textbox.isActive = true;

        globalRandom = Math.round(random(1, 100));

        if (globalRandom >= 1 && globalRandom <= 45) {
            name.text = "Wesen";
            animal.state = "default";
            animal.gender = "M";
            animal.age = 1;
        }
        if (globalRandom >= 46 && globalRandom <= 90) {
            name.text = "Wesen";
            animal.state = "default";
            animal.gender = "F";
            animal.age = 1;
        }
        if (globalRandom >= 91 && globalRandom <= 100) {
            name.text = "Wesen";
            animal.state = "default";
            animal.gender = "S";
            animal.age = 1;
        }
    }

    if (textbox.hitTest() && globalState === "game" && textbox.isActive === true && globalTime === 7) {
        globalRandom = 0;

        globalTime = 8;
        button1.text = "Jerry";
        button2.text = "Ludwig";
        button3.text = "Lisa";
        button4.text = "Mimi";
        button1.isActive = true;
        button2.isActive = true;
        button3.isActive = true;
        button4.isActive = true;

        textbox.isActive = false;
        name.text = "Wesen";

        if (animal.gender === "M"){
            textbox.text = "Es ist ein Junge.";
            textbox.text2 = "Wie soll er hei??en?";
        }
        if (animal.gender === "F"){
            textbox.text = "Es ist ein M??dchen.";
            textbox.text2 = "Wie soll sie hei??en?";
        }
        if (animal.gender === "S"){
            textbox.text = "Solch ein Exemplar wurde noch nie zuvor gesehen!";
            textbox.text2 = "Wie soll es hei??en?";
        }
    }

    if (button1.hitTest() && globalState === "game" && button1.isActive === true && globalTime === 8) {
        globalTime = 9;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;
        textbox.isActive = true;
        name.text = "Jerry";

            if (animal.gender === "M"){
                textbox.text = name.text + " liebt seinen Namen!";
                textbox.text2 = "";
                animal.state = "happy";
                parameter1.value = parameter1.value + Math.round(random(50, 70));
            }
            if (animal.gender === "F"){
                textbox.text = name.text + " mag ihren Namen nicht.";
                textbox.text2 = "";
                animal.state = "unhappy";
                parameter1.value = parameter1.value + Math.round(random(30, 50));
            }
            if (animal.gender === "S"){
                textbox.text = name.text + " mag den Namen!";
                textbox.text2 = "";
                animal.state = "happy";
                parameter1.value = parameter1.value + Math.round(random(40, 60));
            }

        parameter2.value = parameter2.value + Math.round(random(40, 60));
        parameter3.value = parameter3.value + Math.round(random(40, 60));
        parameter4.value = parameter4.value + Math.round(random(40, 60));
     }


    if (button2.hitTest() && globalState === "game" && button2.isActive === true && globalTime === 8) {
        globalTime = 9;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;
        textbox.isActive = true;
        name.text = "Ludwig";

            if (animal.gender === "M"){
                textbox.text = name.text + " liebt seinen Namen!";
                textbox.text2 = "";
                animal.state = "happy";
                parameter1.value = parameter1.value + Math.round(random(50, 70));
            }
            if (animal.gender === "F"){
                textbox.text = name.text + " mag ihren Namen nicht.";
                textbox.text2 = "";
                animal.state = "unhappy";
                parameter1.value = parameter1.value + Math.round(random(30, 50));
            }
            if (animal.gender === "S"){
                textbox.text = name.text + " mag den Namen!";
                textbox.text2 = "";
                animal.state = "happy";
                parameter1.value = parameter1.value + Math.round(random(40, 60));
            }

        parameter2.value = parameter2.value + Math.round(random(40, 60));
        parameter3.value = parameter3.value + Math.round(random(40, 60));
        parameter4.value = parameter4.value + Math.round(random(40, 60));
    }

    if (button3.hitTest() && globalState === "game" && button3.isActive === true && globalTime === 8) {
        globalTime = 9;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;
        textbox.isActive = true;
        name.text = "Lisa";

            if (animal.gender === "M"){
                textbox.text = name.text + " mag seinen Namen nicht.";
                textbox.text2 = "";
                animal.state = "unhappy";
                parameter1.value = parameter1.value + Math.round(random(30, 50));
            }
            if (animal.gender === "F"){
                textbox.text = name.text + " liebt ihren Namen!";
                textbox.text2 = "";
                animal.state = "happy";
                parameter1.value = parameter1.value + Math.round(random(50, 70));
            }
            if (animal.gender === "S"){
                textbox.text = name.text + " mag den Namen!";
                textbox.text2 = "";
                animal.state = "happy";
                parameter1.value = parameter1.value + Math.round(random(40, 60));
            }

        parameter2.value = parameter2.value + Math.round(random(40, 60));
        parameter3.value = parameter3.value + Math.round(random(40, 60));
        parameter4.value = parameter4.value + Math.round(random(40, 60));
    }

    if (button4.hitTest() && globalState === "game" && button4.isActive === true && globalTime === 8) {
        globalTime = 9;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;
        textbox.isActive = true;
        name.text = "Mimi";

            if (animal.gender === "M"){
                textbox.text = name.text + " mag seinen Namen nicht.";
                textbox.text2 = "";
                animal.state = "unhappy";
                parameter1.value = parameter1.value + Math.round(random(30, 50));
            }
            if (animal.gender === "F"){
                textbox.text = name.text + " liebt ihren Namen!";
                textbox.text2 = "";
                animal.state = "happy";
                parameter1.value = parameter1.value + Math.round(random(50, 70));
            }
            if (animal.gender === "S"){
                textbox.text = name.text + " mag den Namen!";
                textbox.text2 = "";
                animal.state = "happy";
                parameter1.value = parameter1.value + Math.round(random(40, 60));
            }

            parameter2.value = parameter2.value + Math.round(random(40, 60));
            parameter3.value = parameter3.value + Math.round(random(40, 60));
            parameter4.value = parameter4.value + Math.round(random(40, 60));
    }

    //real start
    if (textbox.hitTest() && globalState === "game" && textbox.isActive === true && globalTime === 9) {
        globalAge = globalAge + 1;
        globalTime = 10;
        globalRandom = 0;
        button1.text = "Spielen";
        button2.text = "F??ttern";
        button3.text = "Schlafen lassen";
        button4.text = "Alleine lassen";
        button1.isActive = true;
        button2.isActive = true;
        button3.isActive = true;
        button4.isActive = true;

        textbox.isActive = false;
        animal.state = "default";

        if (parameter1.value <= 20){
            animal.state = "unhappy";
        }
        if (parameter2.value <= 20){
            animal.state = "bored";
        }
        if (parameter3.value >= 80){
            animal.state = "hungry";
        }
        if (parameter4.value >= 80){
            animal.state = "sleeping";
        }

        if (parameter1.value >= 100){
            parameter1.value = 100;
        }
        if (parameter1.value <= 0){
            parameter1.value = 0;
        }
        if (parameter2.value >= 100){
            parameter2.value = 100;
        }
        if (parameter2.value <= 0){
            parameter2.value = 0;
        }
        if (parameter3.value <= 0){
            parameter3.value = 0;
        }
        if (parameter3.value >= 100){
            parameter3.value = 100;
        }
        if (parameter4.value <= 0){
            parameter4.value = 0;
        }
        if (parameter4.value >= 100){
            parameter4.value = 100;
        }

        if (globalAge === 10){
            textbox.text = name.text + " ist gewachsen!";
            textbox.text2 = "Was m??chtest du mit " + name.text + " machen?";
        }else{
            textbox.text = "Was m??chtest du mit " + name.text + " machen?";
            textbox.text2 = "";
        }
    }

    if (button1.hitTest() && globalState === "game" && button1.isActive === true && globalTime === 10) {
        globalTime = 9;

        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.isActive = true;

        globalRandom = Math.round(random(1, 9));

        if (globalRandom >= 1 && globalRandom <= 3) {
            textbox.text = name.text + " hatte beim Spielen";
            textbox.text2 = "wahnsinnig viel Spa??!"; 

            parameter1.value = parameter1.value + Math.round(random(0, 10));
            parameter2.value = parameter2.value + Math.round(random(10, 15));
            parameter3.value = parameter3.value + Math.round(random(0, 10));
            parameter4.value = parameter4.value + Math.round(random(0, 5));

            animal.state = "happy";
        }
        if (globalRandom >= 4 && globalRandom <= 6) {
            textbox.text = name.text + " hatte beim Spielen nur wenig Spa??.";
            textbox.text2 = "Aber es half gegen die Langeweile."; 

            parameter1.value = parameter1.value + Math.round(random(-5, 5));
            parameter2.value = parameter2.value + Math.round(random(5, 15));
            parameter3.value = parameter3.value + Math.round(random(0, 5));
            parameter4.value = parameter4.value + Math.round(random(0, 10));

            animal.state = "unhappy";
        }
        if (globalRandom >= 7 && globalRandom <= 9) {
            textbox.text = name.text + " hat sich beim Spielen verletzt.";
            textbox.text2 = "Die Stimmung ist im Keller."; 

            parameter1.value = parameter1.value + Math.round(random(-5, 5));
            parameter2.value = parameter2.value - Math.round(random(0, 5));
            parameter3.value = parameter3.value + Math.round(random(5, 10));
            parameter4.value = parameter4.value + Math.round(random(5, 10));

            animal.state = "bored";
        }

        if (parameter1.value >= 100){
            parameter1.value = 100;
        }
        if (parameter1.value <= 0){
            parameter1.value = 0;
        }
        if (parameter2.value >= 100){
            parameter2.value = 100;
        }
        if (parameter2.value <= 0){
            parameter2.value = 0;
        }
        if (parameter3.value <= 0){
            parameter3.value = 0;
        }
        if (parameter3.value >= 100){
            parameter3.value = 100;
        }
        if (parameter4.value <= 0){
            parameter4.value = 0;
        }
        if (parameter4.value >= 100){
            parameter4.value = 100;
        }
    }

    if (button2.hitTest() && globalState === "game" && button2.isActive === true && globalTime === 10) {
        globalTime = 9;

        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.isActive = true;

        globalRandom = Math.round(random(1, 9));

        if (globalRandom >= 1 && globalRandom <= 3) {
            textbox.text = name.text + " fand das Essen sehr lecker!";
            textbox.text2 = "Du bist ein guter Koch."; 

            parameter1.value = parameter1.value + Math.round(random(0, 5));
            parameter2.value = parameter2.value + Math.round(random(-5, 5));
            parameter3.value = parameter3.value - Math.round(random(10, 15));
            parameter4.value = parameter4.value + Math.round(random(-5, 5));

            animal.state = "happy";
        }
        if (globalRandom >= 4 && globalRandom <= 6) {
            textbox.text = "Das viele Essen hat " + name.text;
            textbox.text2 = "ganz m??de gemacht."; 

            parameter1.value = parameter1.value + Math.round(random(-5, 5));
            parameter2.value = parameter2.value + Math.round(random(-10, 5));
            parameter3.value = parameter3.value - Math.round(random(10, 15));
            parameter4.value = parameter4.value + Math.round(random(5, 10));

            animal.state = "sleeping";
        }
        if (globalRandom >= 7 && globalRandom <= 9) {
            textbox.text = name.text + " hat das Essen scheinbar nicht vertragen...";
            textbox.text2 = ""; 

            parameter1.value = parameter1.value - Math.round(random(5, 10));
            parameter2.value = parameter2.value - Math.round(random(5, 15));
            parameter3.value = parameter3.value + Math.round(random(-10, 5));
            parameter4.value = parameter4.value + Math.round(random(0, 5));

            animal.state = "hungry";
        }

        if (parameter1.value >= 100){
            parameter1.value = 100;
        }
        if (parameter1.value <= 0){
            parameter1.value = 0;
        }
        if (parameter2.value >= 100){
            parameter2.value = 100;
        }
        if (parameter2.value <= 0){
            parameter2.value = 0;
        }
        if (parameter3.value <= 0){
            parameter3.value = 0;
        }
        if (parameter3.value >= 100){
            parameter3.value = 100;
        }
        if (parameter4.value <= 0){
            parameter4.value = 0;
        }
        if (parameter4.value >= 100){
            parameter4.value = 100;
        }
    }

    if (button3.hitTest() && globalState === "game" && button3.isActive === true && globalTime === 10) {
        globalTime = 9;

        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.isActive = true;

        globalRandom = Math.round(random(1, 9));

        if (globalRandom >= 1 && globalRandom <= 3) {
            textbox.text = name.text + " hat wie ein Stein geschlafen!";
            textbox.text2 = "Was " + name.text + " wohl nur getr??umt hat..."; 

            parameter1.value = parameter1.value + Math.round(random(-5, 5));
            parameter2.value = parameter2.value + Math.round(random(-5, 10));
            parameter3.value = parameter3.value + Math.round(random(-5, 5));
            parameter4.value = parameter4.value - Math.round(random(10, 15));

            animal.state = "sleeping";
        }
        if (globalRandom >= 4 && globalRandom <= 6) {
            textbox.text = name.text  + " ist nach wenigen Stunden aufgewacht";
            textbox.text2 = "und hatte Langeweile."; 

            parameter1.value = parameter1.value + Math.round(random(-10, 5));
            parameter2.value = parameter2.value - Math.round(random(5, 10));
            parameter3.value = parameter3.value + Math.round(random(-5, 5));
            parameter4.value = parameter4.value - Math.round(random(5, 15));

            animal.state = "bored";
        }
        if (globalRandom >= 7 && globalRandom <= 9) {
            textbox.text = name.text + " hatte einen Alptraum!";
            textbox.text2 = ""; 

            parameter1.value = parameter1.value - Math.round(random(5, 10));
            parameter2.value = parameter2.value - Math.round(random(5, 10));
            parameter3.value = parameter3.value + Math.round(random(0, 5));
            parameter4.value = parameter4.value - Math.round(random(5, 15));

            animal.state = "unhappy";
        }

        if (parameter1.value >= 100){
            parameter1.value = 100;
        }
        if (parameter1.value <= 0){
            parameter1.value = 0;
        }
        if (parameter2.value >= 100){
            parameter2.value = 100;
        }
        if (parameter2.value <= 0){
            parameter2.value = 0;
        }
        if (parameter3.value <= 0){
            parameter3.value = 0;
        }
        if (parameter3.value >= 100){
            parameter3.value = 100;
        }
        if (parameter4.value <= 0){
            parameter4.value = 0;
        }
        if (parameter4.value >= 100){
            parameter4.value = 100;
        }
    }

    if (button4.hitTest() && globalState === "game" && button4.isActive === true && globalTime === 10) {
        globalTime = 9;

        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.isActive = true;

        globalRandom = Math.round(random(1, 9));

        if (globalRandom >= 1 && globalRandom <= 3) {
            textbox.text = name.text + " hat sich die Umgebung genauer angesehen.";
            textbox.text2 = "Das hat " + name.text + " scheinbar Spa?? gemacht."; 

            parameter1.value = parameter1.value + Math.round(random(5, 15));
            parameter2.value = parameter2.value + Math.round(random(0, 5));
            parameter3.value = parameter3.value + Math.round(random(-5, 5));
            parameter4.value = parameter4.value + Math.round(random(-5, 5));

            animal.state = "happy";
        }
        if (globalRandom >= 4 && globalRandom <= 6) {
            textbox.text = name.text  + " hat dich vermisst.";
            textbox.text2 = "Das war wohl zu viel Einsamkeit."; 

            parameter1.value = parameter1.value + Math.round(random(0, 10));
            parameter2.value = parameter2.value - Math.round(random(0, 5));
            parameter3.value = parameter3.value + Math.round(random(0, 5));
            parameter4.value = parameter4.value + Math.round(random(-5, 5));

            animal.state = "unhappy";
        }
        if (globalRandom >= 7 && globalRandom <= 9) {
            textbox.text = name.text + " hat auf dich gewartet.";
            textbox.text2 = ""; 

            parameter1.value = parameter1.value + Math.round(random(0, 15));
            parameter2.value = parameter2.value + Math.round(random(-5, 5));
            parameter3.value = parameter3.value + Math.round(random(-5, 10));
            parameter4.value = parameter4.value + Math.round(random(-5, 10));

            animal.state = "default";
        }

        if (parameter1.value >= 100){
            parameter1.value = 100;
        }
        if (parameter1.value <= 0){
            parameter1.value = 0;
        }
        if (parameter2.value >= 100){
            parameter2.value = 100;
        }
        if (parameter2.value <= 0){
            parameter2.value = 0;
        }
        if (parameter3.value <= 0){
            parameter3.value = 0;
        }
        if (parameter3.value >= 100){
            parameter3.value = 100;
        }
        if (parameter4.value <= 0){
            parameter4.value = 0;
        }
        if (parameter4.value >= 100){
            parameter4.value = 100;
        }
    }

    if (globalAge === 20 && (parameter1.value + parameter2.value + 100 - parameter3.value + 100 - parameter4.value) >= 200) {
        button1.text = "Neustart";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        animal.state = "default";
        textbox.text = name.text + " ist ausgewachsen und hatte eine tolle Zeit mit dir!";
        textbox.text2 = "Erreichte Punktzahl: " + (parameter1.value + parameter2.value + 100 - parameter3.value + 100 - parameter4.value);
        textbox.isActive = false;
    }

    if (globalAge === 20 && (parameter1.value + parameter2.value + 100 - parameter3.value + 100 - parameter4.value) <= 200) {
        button1.text = "Neustart";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = true;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        animal.state = "unhappy";
        textbox.text = name.text + " ist ausgewachsen und will dich endlich verlassen.";
        textbox.text2 = "Erreichte Punktzahl: " + (parameter1.value + parameter2.value + 100 - parameter3.value + 100 - parameter4.value);
        textbox.isActive = false;
    }

    if (button1.hitTest() && globalState === "game" && button1.isActive === true && globalAge === 20) {
        globalState = "start";
        globalTime = 0;
        globalAge = 0;
        globalRandom = 0;
        button1.text = "";
        button2.text = "";
        button3.text = "";
        button4.text = "";
        button1.isActive = false;
        button2.isActive = false;
        button3.isActive = false;
        button4.isActive = false;

        textbox.text = "";
        textbox.text2 = "";
        textbox.isActive = false;

        name.text = "null";
        animal.state = "default";
        animal.gender = "E";
        animal.age = 1;

        parameter1.value = 0;
        parameter2.value = 0;
        parameter3.value = 0;
        parameter4.value = 0;
    }
}


function draw(){
    if(globalState === "start"){
        startScreen();
        background.state = "start";
        globalTime = 0;
    }

    if(globalState === "tutorial"){
        tutorialScreen();
    }

    if(globalState === "game"){
        gameScreen();
        background.state = "game";

        if (frameCount > 30 && globalTime === 1){
            textbox.isActive = true;  
        }

        if (globalAge >= 10){
            animal.age = 2;  
        }

        if (globalAge >= 20){
            animal.age = 3;  
        }
    }
}

function animalAnimation() {
    if (animal.state === "dead"){
    gsap.to(animal, {
        duration: 0.6,
        ease: "in",
        y: 165,
        onComplete: () => {
            gsap.to(animal, {
                duration: 0.5,
                ease: "out",
                y: 165,
                onComplete: () => {
                    animalAnimation();
                },
            });
        },
    });
    }else{
        gsap.to(animal, {
            duration: 0.6,
            ease: "in",
            y: 155,
            onComplete: () => {
                gsap.to(animal, {
                    duration: 0.5,
                    ease: "out",
                    y: 165,
                    onComplete: () => {
                        animalAnimation();
                    },
                });
            },
        });
    }
}

animalAnimation();


window.draw = draw;
window.mouseClicked = mouseClicked;
