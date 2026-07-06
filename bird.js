console.log("bird.js loaded");

// Friend face image
const faceImg = new Image();
faceImg.src = "friend.png";

class Bird {

    constructor() {

        this.x = 120;
        this.y = 300;

        this.radius = 22;

        this.velocity = 0;
        this.gravity = 0.55;
        this.jumpForce = -10;

        this.wingAngle = 0;

    }

    update() {

        this.velocity += this.gravity;
        this.y += this.velocity;

        this.wingAngle += 0.25;

    }

    jump() {

        this.velocity = this.jumpForce;

    }

    draw(ctx) {

        ctx.save();

        ctx.translate(this.x, this.y);

        // Rotate while flying
        ctx.rotate(this.velocity * 0.05);

        // ==========================
        // SHADOW
        // ==========================

        ctx.shadowColor = "rgba(0,0,0,0.25)";
        ctx.shadowBlur = 8;

        // ==========================
        // WING (Behind Face)
        // ==========================

        ctx.shadowBlur = 0;

        let wingOffset = Math.sin(this.wingAngle) * 6;

        ctx.fillStyle = "#F4B400";

        ctx.beginPath();

        ctx.ellipse(

            -18,
            4 + wingOffset,

            16,
            9,

            -0.3,

            0,

            Math.PI * 2

        );

        ctx.fill();

        // ==========================
        // FRIEND HEAD
        // ==========================

        if (faceImg.complete && faceImg.naturalWidth > 0) {

            ctx.drawImage(

                faceImg,

                -35,   // Left
                -40,   // Up

                72,    // Width
                86      // Height

            );

        }

        // ==========================
        // BEAK
        // ==========================

        ctx.fillStyle = "#E67E22";

        ctx.beginPath();

        ctx.moveTo(28, -2);
        ctx.lineTo(46, 3);
        ctx.lineTo(28, 9);

        ctx.closePath();

        ctx.fill();

        // ==========================
        // LEGS
        // ==========================

        ctx.strokeStyle = "#D35400";
        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.moveTo(-6, 32);
        ctx.lineTo(-8, 42);

        ctx.moveTo(6, 32);
        ctx.lineTo(8, 42);

        ctx.stroke();

        ctx.restore();

    }

}
