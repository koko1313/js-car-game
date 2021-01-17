import { carDimentions, gameSpeed } from "./Constants.js";

const OtherCar = function (ctx, playground, imgSrc) {
    this.image = new Image(carDimentions.width, carDimentions.height);
    this.image.src = imgSrc;

    this.x = Math.floor(Math.random() * playground.width - carDimentions.width);
    this.y = -carDimentions.height;

    this.move = () => {
        if (this.y > playground.height) {
            this.x = Math.floor(Math.random() * playground.width - carDimentions.width);
            this.y = -carDimentions.height;
        }
        this.y += gameSpeed;
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

export default OtherCar;