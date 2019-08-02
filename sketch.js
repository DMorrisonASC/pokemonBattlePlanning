function setup(){
    createCanvas(600, 600);
    
}


let attackWidth4 = 100;
let attackHeight4 = 40;
let attackWidth3 = 100;
let attackHeight3 = 40;
let attackWidth2 = 100;
let attackHeight2 = 40;
let attackWidth = 100;
let attackHeight = 40;

let x4 = 50;
let y4 = 450;
let x3 = 350;
let y3= 450;
let x2 = 50;
let y2 = 525;
let x = 350; 
let y = 525;

// // const dmg = text("That did 20 damage", 30, 390);
// b = text("Your opponent's health is" + opponentHealth);
// c = a + b;

opponentHealth = 100;

function draw(){
    fill(35, 1, 0);
    rect(0, 400, 600, 200);
    fill(255, 204, 0);
    rect(x, y, attackWidth, attackHeight);
    rect(x3, y3, attackWidth3, attackHeight3);
    rect(x2, y2, attackWidth2, attackHeight2);
    rect(x4, y4, attackWidth4, attackHeight4);
    fill(0, 50, 75);
    rect(0, 360, 600, 40);
    fill(0);
    textSize(30);

    // let a = "That did" + dmg20 + "damage" + "Your opponent's health is " + opponentHealth;
    // let c = b + dmg;
    // text(c, 30, 390)

    
}

function mouseClicked(){
    console.log(mouseX,mouseY);
// If attack4(button4) is clicked, health decreases

    if (mouseX > x && mouseX < x+attackWidth && mouseY > y && mouseY < y+attackHeight) {
        dmg20 = opponentHealth -= 20;
        let a = "That did" + dmg20 + "damage" + "Your opponent's health is " + opponentHealth;
        text(dmg20, 30, 390);

        text(opponentHealth, 30, 390)
        console.log(opponentHealth);
        // console.log(dmg20);
        // // let b = "That did 20 damage" + "Your opponent's health is " + opponentHealth;
        // // let c = b + dmg;
        // // text(c, 30, 390)
       
    }
    else if(mouseX > x2 && mouseX < x2 + attackWidth2 && mouseY > y2 && mouseY < y2 + attackHeight2) {
        dmg = text("That did 15 damage", 30, 390)
        opponentHealth -= 15;
        
        }
    else if (mouseX > x3 && mouseX < x3 + attackWidth3 && mouseY > y3 && mouseY < y3 + attackHeight3) {
        dmg = text("That did 10 damage", 30, 390)
        opponentHealth -= 10;

    }
    else if (mouseX > x4 && mouseX < x4 + attackWidth4 && mouseY > y4 && mouseY < y4 + attackHeight4) {
        dmg = text("That did 5 damage", 30, 390)
        opponentHealth -= 5;

    }
    

}
