/* DOM REFERENCE */

let domRefs = {
    backdrop: document.querySelector('.backdrop'),
    centerContain: document.querySelector('.center-contain')
};

const ctx = domRefs.backdrop.getContext("2d");

/* DOM UPDATE */
class Ripple {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    createArc(radius) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    }
}

//Update the backdrop color
domRefs.backdrop.style.background = "black";

//Fix the ratio and coordinates
function resizeCanvas() {
    // Get the pixel ratio
    const dpr = window.devicePixelRatio || 1;

    // Set the canvas size to the viewport size
    domRefs.backdrop.width = window.innerWidth * dpr;
    domRefs.backdrop.height = window.innerHeight * dpr;

    // Scale to account for device pixel ratio
    ctx.scale(dpr, dpr);
}

function drawRipple(ripple, radius) {
    // Clear old ripple
    ctx.fillStyle = "black";
    ripple.createArc(radius); //clears slightly larger than old ripple
    ctx.fill();

    // Create new ripple
    ctx.strokeStyle = `rgb(255 255 255 / ${(39 - radius)/100})`;
    ripple.createArc(radius);
    ctx.stroke();

    if (radius < 40) {
        window.requestAnimationFrame(() => {
            drawRipple(ripple, radius+.75)
        });
    }
    else {
        // Clear the final ripple
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* EVENT LISTENERS */

resizeCanvas();

domRefs.centerContain.addEventListener("click", (e) => {
    //Triple ripple
    for (let i = 0; i < 3; i++) {
        //Initiate ripples
        setTimeout(() => {
            window.requestAnimationFrame( () => {
                const ripple = new Ripple(e.clientX, e.clientY);
                drawRipple(ripple, 1);
            });
        }, i * 150);
    }
});

window.addEventListener('resize', resizeCanvas);
