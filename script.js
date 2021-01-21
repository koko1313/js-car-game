const playground = document.getElementById("playground");
const ctx = playground.getContext("2d");

const carDimentions = {
    width: 50,
    height: 101
}

const calculateA = (x, y) => {
    return {
        x: x,
        y: y + carDimentions.height
    }
}

const calculateB = (x, y) => {
    return {
        x: x + carDimentions.width,
        y: y + carDimentions.height
    }
}

const calculateC = (x, y) => {
    return {
        x: x + carDimentions.width,
        y: y
    }
}

const calculateD = (x, y) => {
    return {
        x: x,
        y: y
    }
}

const detectCollision = (playerCar, enemyCars) => {
    for (const enemyCar of enemyCars) {
        if (playerCar.a.x > enemyCar.a.x && playerCar.a.x < enemyCar.b.x
            && playerCar.a.y > enemyCar.d.y && playerCar.a.y < enemyCar.a.y
        ) {
            return true; // collision A
        }

        if (playerCar.b.x > enemyCar.a.x && playerCar.b.x < enemyCar.b.x
            && playerCar.b.y > enemyCar.d.y && playerCar.b.y < enemyCar.a.y
        ) {
            return true; // collision B
        }

        if (playerCar.c.x > enemyCar.a.x && playerCar.c.x < enemyCar.b.x
            && playerCar.c.y > enemyCar.d.y && playerCar.c.y < enemyCar.a.y
        ) {
            return true; // collision C
        }

        if (playerCar.d.x > enemyCar.a.x && playerCar.d.x < enemyCar.b.x
            && playerCar.d.y > enemyCar.d.y && playerCar.d.y < enemyCar.a.y
        ) {
            return true; // collision C
        }
    }
}

const PlayerCar = function () {
    this.image = new Image(carDimentions.width, carDimentions.height);
    this.image.src = "images/carRed.png";

    this.x = playground.width / 2 - carDimentions.width / 2;
    this.y = playground.height - carDimentions.height - 20;

    this.a = null;
    this.b = null;
    this.c = null;
    this.d = null;

    this.calculateABCD = () => {
        this.a = calculateA(this.x, this.y);
        this.b = calculateB(this.x, this.y);
        this.c = calculateC(this.x, this.y);
        this.d = calculateD(this.x, this.y);
    }

    this.draw = () => {
        ctx.drawImage(
            this.image, // картинката
            this.x,
            this.y
        );
        this.calculateABCD();
    }

    this.moveRight = (step) => {
        if ((this.x + carDimentions.width) < playground.width) {
            this.x += step;
        }
    }

    this.moveLeft = (step) => {
        if (this.x > 0) {
            this.x -= step;
        }
    }
}

const Road = function () {
    this.y = 0;

    this.iLikeToMoveItMoveIt = () => {
        if (this.y > playground.height) {
            this.y = 0;
        }
        this.y += 1;
    }

    this.draw = () => {
        this.iLikeToMoveItMoveIt();
        ctx.beginPath();
        ctx.rect(playground.width / 3 - 10, this.y - 600, 20, 100);
        ctx.rect(playground.width / 3 - 10, this.y - 450, 20, 100);
        ctx.rect(playground.width / 3 - 10, this.y - 300, 20, 100);
        ctx.rect(playground.width / 3 - 10, this.y - 150, 20, 100);
        ctx.rect(playground.width / 3 - 10, this.y, 20, 100);
        ctx.rect(playground.width / 3 - 10, this.y + 150, 20, 100);
        ctx.rect(playground.width / 3 - 10, this.y + 300, 20, 100);
        ctx.rect(playground.width / 3 - 10, this.y + 450, 20, 100);
        ctx.rect(playground.width / 3 - 10, this.y + 600, 20, 100);

        ctx.rect(playground.width * 2 / 3 - 10, this.y - 600, 20, 100);
        ctx.rect(playground.width * 2 / 3 - 10, this.y - 450, 20, 100);
        ctx.rect(playground.width * 2 / 3 - 10, this.y - 300, 20, 100);
        ctx.rect(playground.width * 2 / 3 - 10, this.y - 150, 20, 100);
        ctx.rect(playground.width * 2 / 3 - 10, this.y, 20, 100);
        ctx.rect(playground.width * 2 / 3 - 10, this.y + 150, 20, 100);
        ctx.rect(playground.width * 2 / 3 - 10, this.y + 300, 20, 100);
        ctx.rect(playground.width * 2 / 3 - 10, this.y + 450, 20, 100);
        ctx.rect(playground.width * 2 / 3 - 10, this.y + 600, 20, 100);

        ctx.fillStyle = "white";
        ctx.fill();
    }
}

const EnemyCar = function (imgSrc, delay = 0) {
    this.image = new Image(carDimentions.width, carDimentions.height);
    this.image.src = imgSrc;

    this.x = Math.floor(Math.random() * (playground.width - carDimentions.width));
    this.y = -carDimentions.height - delay;

    this.a = null;
    this.b = null;
    this.c = null;
    this.d = null;

    this.calculateABCD = () => {
        this.a = calculateA(this.x, this.y);
        this.b = calculateB(this.x, this.y);
        this.c = calculateC(this.x, this.y);
        this.d = calculateD(this.x, this.y);
    }

    this.move = () => {
        if (this.y > playground.height) {
            this.x = Math.floor(Math.random() * (playground.width - carDimentions.width));
            this.y = -carDimentions.height;
        }
        this.y += 1;
    }

    this.draw = () => {
        this.move();
        ctx.drawImage(
            this.image, // картинката
            this.x,
            this.y
        );
        this.calculateABCD();
    }
}

const road = new Road();
const playerCar = new PlayerCar();

const enemyCars = [];
enemyCars.push(new EnemyCar("images/carGrey.png"));
enemyCars.push(new EnemyCar("images/carYellow.png", 180));
enemyCars.push(new EnemyCar("images/ambulance.png", 360));
enemyCars.push(new EnemyCar("images/carGreen.png", 540));

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
    if (e.gamma < -10) {
        playerCar.moveLeft(7);
    }
    else if (e.gamma > 10) {
        playerCar.moveRight(7);
    }
});

setInterval(() => {
    ctx.clearRect(0, 0, playground.width, playground.height);
    road.draw();
    playerCar.draw();
    enemyCars.forEach(car => {
        car.draw();
    });
    if (detectCollision(playerCar, enemyCars)) {
        console.log("Удар");
    }
}, 1);