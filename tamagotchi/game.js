import Button from "./button.js";
import Background from "./background.js";
import Parameter from "./parameter.js";
import Animal from "./animal.js";

default1M = loadImage("./default1M.png");
bored1M = loadImage("./bored1M.png");
happy1M = loadImage("./happy1M.png");
hungry1M = loadImage("./hungry1M.png");
sleeping1M = loadImage("./sleeping1M.png");
unhappy1M = loadImage("./unhappy1M.png");

default1F = loadImage("./default1F.png");
bored1F = loadImage("./bored1F.png");
happy1F = loadImage("./happy1F.png");
hungry1F = loadImage("./hungry1F.png");
sleeping1F = loadImage("./sleeping1F.png");
unhappy1F = loadImage("./unhappy1F.png");

default1S = loadImage("./default1S.png");
bored1S = loadImage("./bored1S.png");
happy1S = loadImage("./happy1S.png");
hungry1S = loadImage("./hungry1S.png");
sleeping1S = loadImage("./sleeping1S.png");
unhappy1S = loadImage("./unhappy1S.png");

default2M = loadImage("./default2M.png");
bored2M = loadImage("./bored2M.png");
happy2M = loadImage("./happy2M.png");
hungry2M = loadImage("./hungry2M.png");
sleeping2M = loadImage("./sleeping2M.png");
unhappy2M = loadImage("./unhappy2M.png");

default2F = loadImage("./default2F.png");
bored2F = loadImage("./bored2F.png");
happy2F = loadImage("./happy2F.png");
hungry2F = loadImage("./hungry2F.png");
sleeping2F = loadImage("./sleeping2F.png");
unhappy2F = loadImage("./unhappy2F.png");

default2S = loadImage("./default2S.png");
bored2S = loadImage("./bored2S.png");
happy2S = loadImage("./happy2S.png");
hungry2S = loadImage("./hungry2S.png");
sleeping2S = loadImage("./sleeping2S.png");
unhappy2S = loadImage("./unhappy2S.png");

default3M = loadImage("./default3M.png");
unhappy3M = loadImage("./unhappy3M.png");

default3F = loadImage("./default3F.png");
unhappy3F = loadImage("./unhappy3F.png");

default3S = loadImage("./default3S.png");
unhappy3S = loadImage("./unhappy3S.png");

default1E = loadImage("./default1E.png");
default2E = loadImage("./default2E.png");
default3E = loadImage("./default3E.png");

dead1 = loadImage("./dead1.png");
dead2 = loadImage("./dead2.png");

//creating classes
let background = new Background(0, 0, 1, "null");
let parameter1 = new Parameter(16, 16, 180, 80, 1, color(9, 155, 200), 18, "Sympathie:", 0);
let parameter2 = new Parameter(212, 16, 180, 80, 1, color(9, 155, 200), 18, "Freude:", 0);
let parameter3 = new Parameter(408, 16, 180, 80, 1, color(9, 155, 200), 18, "Hunger:", 0);
let parameter4 = new Parameter(604, 16, 180, 80, 1, color(9, 155, 200), 18, "Müdigkeit:", 0);
let name = new Parameter(16, 116, 180, 80, 1, color(0, 0, 0, 0), 18, "null", "Name");

let startButton = new Button(310, 400, 180, 80, 1, false, color(0, 150, 150), 20, "Start", "");
let tutorialButton = new Button(310, 500, 180, 80, 1, false, color(0, 150, 0), 20, "Weiter", "");
let button1 = new Button(16, 216, 180, 80, 1, false, color(90, 0, 90), 20, "Spielen", "");
let button2 = new Button(16, 312, 180, 80, 1, false, color(90, 0, 90), 20, "Füttern", "");
let button3 = new Button(16, 408, 180, 80, 1, false, color(90, 0, 90), 20, "Schlafen", "");
let button4 = new Button(16, 504, 180, 80, 1, false, color(90, 0, 90), 20, "Alleine lassen", "");
let textbox = new Button(212, 504, 572, 80, 1, false, color(200, 200, 200), 20, "null", "null");

let animal = new Animal(350, 165, 300, 300, 1, "default", "S", 1);

let globalTime = 0;
let globalState = "game";

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

        textbox.text = "Ei";
        textbox.text2 = "test";
    }

    //game
    if (button1.hitTest() && globalState === "game") {
        parameter1.value = parameter1.value + 1;
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

    if (frameCount > 90 && globalTime === 1){
        textbox.isActive = true;
        }
    }

    console.log(background.state + " / " + frameCount + " / " + globalTime);
}


/*
PARAMETER ANPASSEN + GLOBAL TIME HINZUFÜGEN

    if (button1.hitTest() && globalState === "game") {
        parameter1.value = parameter1.value + 1;
      }

      tutorial button active effekt einfügen
*/