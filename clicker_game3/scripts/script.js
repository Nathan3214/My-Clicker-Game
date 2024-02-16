const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

// Buildings are made from classes here.
// Building(name, clicks per second, base cost, button ID)
let cursor = new Building('Cursor', 0.1, 20, 'buySingleCursor');
let energyDrink = new Building('Energy Drink', 1, 100, 'buyEnergyDrink');
let eggSandwich = new Building('Egg Sandwich', 4, 300, 'buyEggSandwich');
let megaEnergy = new Building('Mega Energy', 8, 500, 'buyMegaEnergy');
let cocaCola = new Building('Coca Cola', 16, 800, 'buyCocaCola');

// Manual click function
function scorePlusPlus() {
    score++;
}

// Increases the score by the current clicks-per-second
function incScore() {
    score += cursor.cps + energyDrink.cps + eggSandwich.cps + megaEnergy.cps + cocaCola.cps;
}

// Updates the states of all the Building buttons
function updateButtons() {
    cursor.buttonState();
    energyDrink.buttonState();
    eggSandwich.buttonState();
    megaEnergy.buttonState();
    cocaCola.buttonState();
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        Math.floor(score).toLocaleString();
}
setInterval(updatePage, tickRate);
