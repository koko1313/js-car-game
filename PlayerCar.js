import { carDimentions } from "./Constants.js";

const PlayerCar = function (ctx, playground) {
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
        this.x += 30;
    }

    this.moveLeft = () => {
        this.x -= 30;
    }
}

export default PlayerCar;