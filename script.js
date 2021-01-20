const playground = document.getElementById("playground");
const ctx = playground.getContext("2d");

const carDimentions = {
    width: 50,
    height: 101
}

const PlayerCar = function () {
    this.image = new Image(carDimentions.width, carDimentions.height);
    this.image.src = "images/carRed.png";

    this.x = playground.width / 2 - carDimentions.width / 2;
    this.y = playground.height - carDimentions.height - 20;

    this.draw = () => {
        ctx.drawImage(
            this.image, // картинката
            this.x,
            this.y
        );
    }

    this.moveRight = () => {
        if ((this.x + carDimentions.width) < playground.width) {
            this.x += 30;
        }
    }

    this.moveLeft = () => {
        if (this.x > 0) {
            this.x -= 30;
        }
    }
}

const Road = function () {
    this.y = 0;

    this.iLikeToMoveItMoveIt = () => {
        if (this.y > playground.height) {
            this.y = 0;
        }
        this.y += 3;
    }

    this.draw = () => {
        this.iLikeToMoveItMoveIt();
        ctx.beginPath();
        ctx.rect(playground.width / 2 - 10, this.y - 600, 20, 100);
        ctx.rect(playground.width / 2 - 10, this.y - 450, 20, 100);
        ctx.rect(playground.width / 2 - 10, this.y - 300, 20, 100);
        ctx.rect(playground.width / 2 - 10, this.y - 150, 20, 100);
        ctx.rect(playground.width / 2 - 10, this.y, 20, 100);
        ctx.rect(playground.width / 2 - 10, this.y + 150, 20, 100);
        ctx.rect(playground.width / 2 - 10, this.y + 300, 20, 100);
        ctx.rect(playground.width / 2 - 10, this.y + 450, 20, 100);
        ctx.rect(playground.width / 2 - 10, this.y + 600, 20, 100);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}

const OtherCar = function (imgSrc) {
    this.image = new Image(carDimentions.width, carDimentions.height);
    this.image.src = imgSrc;

    this.x = Math.floor(Math.random() * (playground.width - carDimentions.width));
    this.y = -carDimentions.height;

    this.move = () => {
        if (this.y > playground.height) {
            this.x = Math.floor(Math.random() * (playground.width - carDimentions.width));
            this.y = -carDimentions.height;
        }
        this.y += 3;
    }

    this.draw = () => {
        this.move();
        ctx.drawImage(
            this.image, // картинката
            this.x,
            this.y
        )
    }
}

const road = new Road();
const playerCar = new PlayerCar();
const car1 = new OtherCar("images/carGrey.png");
const car2 = new OtherCar("images/carYellow.png");
const car3 = new OtherCar("images/ambulance.png");

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowRight":
            playerCar.moveRight();
            break;
        case "ArrowLeft":
            playerCar.moveLeft();
            break;
    }
});

setInterval(() => {
    ctx.clearRect(0, 0, playground.width, playground.height);
    road.draw();
    playerCar.draw();
    car1.draw();
    car2.draw();
    car3.draw();
}, 10);