import { Rectangle } from './Rectangle.js';
import { Ball } from './Ball.js';
// reference: https://www.youtube.com/watch?v=gm1QtePAYTM
// 'as HTMLCanvasElement' is a type assertion, also known as a type cast, 
// which tells the TypeScript compiler to treat the value returned by document.getElementById('canvas') 
// as an HTMLCanvasElement. Since getElementById returns a generic HTMLElement or null, 
// the type assertion is necessary to inform TypeScript about the specific type.
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const rectangles = [
    // row 1
    new Rectangle(30, 40, 150, 150, "blue"),
    new Rectangle(220, 40, 160, 150, "blue"),
    new Rectangle(420, 40, 150, 150, "blue"),
    // row 2
    new Rectangle(30, 220, 150, 150, "green"),
    new Rectangle(220, 220, 160, 150, "green"),
    new Rectangle(420, 220, 150, 150, "green"),
    // row 3
    new Rectangle(30, 410, 150, 150, "orange"),
    new Rectangle(220, 410, 160, 150, "orange"),
    new Rectangle(420, 410, 150, 150, "orange"),
];
// Draw rectangles 
for (let rect of rectangles) {
    rect.draw(ctx);
}
// Draw Ball 1,  move on x axis 
// ( xpos, ypos, sizeRadius, color, dx, dy, animationFrameDelay )
const ball1 = new Ball(200, 205, 10, "purple", 5, 0, 5);
ball1.draw(ctx);
ball1.animateHoriz(ctx);
// draw ball 2 only move on Y axis
const ball2 = new Ball(200, 30, 10, "red", 0, 5, 2);
ball2.draw(ctx);
ball2.animateVert(ctx);
// draw ball3, Y axis move 
const ball3 = new Ball(400, 30, 10, "green", 0, 5, 40);
ball3.draw(ctx);
ball3.animateVert(ctx);
// draw ball 4, x axis move 
const ball4 = new Ball(200, 390, 10, "brown", 5, 0, 13);
ball4.draw(ctx);
ball4.animateHoriz(ctx);
