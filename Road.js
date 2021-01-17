import { gameSpeed } from "./Constants.js";

const Road = function (ctx, playground) {
    this.y = 0;

    this.iLikeToMoveItMoveIt = () => {
        if (this.y > playground.height) {
            this.y = 0;
        }
        this.y += gameSpeed;
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

export default Road;