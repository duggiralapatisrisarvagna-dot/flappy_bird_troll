console.log("coin.js loaded");

class Coin {

    constructor(x, y, speed) {

        this.x = x;
        this.y = y;

        this.radius = 14;

        // Speed passed in from the pipe so they always move together
        this.speed = speed;

        this.collected = false;

        this.angle = 0;

    }

    update() {

        this.x -= this.speed;
        this.angle += 0.12;

    }

    draw(ctx) {

        if (this.collected) return;

        ctx.save();

        ctx.translate(this.x, this.y);

        let squash = Math.cos(this.angle);
        ctx.scale(squash, 1);

        let gradient = ctx.createRadialGradient(0, 0, 2, 0, 0, this.radius);
        gradient.addColorStop(0, "#FFF6B0");
        gradient.addColorStop(0.6, "#FFD700");
        gradient.addColorStop(1, "#B8860B");

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#B8860B";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius - 4, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();

    }

}