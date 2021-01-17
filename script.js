import PlayerCar from "./PlayerCar.js";
import OtherCar from "./OtherCar.js";
import Road from "./Road.js";

const playground = document.getElementById("playground");
const ctx = playground.getContext("2d");

const road = new Road(ctx, playground);
const playerCar = new PlayerCar(ctx, playground);
const car1 = new OtherCar(ctx, playground, "images/carGrey.png");
const car2 = new OtherCar(ctx, playground, "images/carYellow.png");
const car3 = new OtherCar(ctx, playground, "images/ambulance.png");

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowRight":
            playerCar.moveRight(30);
            break;
        case "ArrowLeft":
            playerCar.moveLeft(30);
            break;
    }
});

window.addEventListener("deviceorientation", (e) => {
    if (e.gamma > 10) {
        playerCar.moveRight(10);
    }
    else if (e.gamma < -10) {
        playerCar.moveLeft(10);
    }
});

setInterval(() => {
    ctx.clearRect(0, 0, playground.width, playground.height);
    road.draw();
    playerCar.draw();
    car1.draw();
    car2.draw();
    car3.draw();
}, 1);