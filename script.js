import { Rectangle } from './Rectangle.js'
import { Ball } from './Ball.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

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
]

for( let rect of rectangles )  {
  rect.draw(ctx)
}

// Draw Ball 1, only move on x axis 
// ( xpos, ypos, sizeRadius, color, dx, dy )
const ball1 = new Ball( 200, 205, 10, "purple", 5, 0 )
ball1.draw(ctx)

// Animate Ball 1: -------------------
function animateBall1() {
  // clear previous position of object along path  
  //
  // clearRect(x, y, width, height)
  // x is the x axis cordinate of the rectangle's starting point
  // y is the y axis of the coordinate's starting point
  // width is the rectangle's width, height is rectangle's height
  //
  // The x and y arguments to clearRect() should be the coordinates of the top-left 
  // corner of the rectangle to clear, minus the size of the ball, NOT the dx or dy
  ctx.clearRect(
    ball1.xpos - ball1.sizeRadius, 
    ball1.ypos - ball1.sizeRadius, 
    ball1.sizeRadius * 2, 
    ball1.sizeRadius * 2
  );

  // change position
  ball1.xpos += ball1.dx 
  ball1.ypos += ball1.dy

  // draw ball
  ball1.draw(ctx)

  // left / right wall collision detection and reverse path 
  if( ball1.xpos + (ball1.sizeRadius * 2) > canvas.width || ball1.xpos - (ball1.sizeRadius * 2) < 0 ) {
    ball1.dx *= -1
  }

  // Animate but adjust 'frame rate' with setTimeout, last argument is time between draws
  // in milliseconds (1000 is one frame per second)
  setTimeout( () => {
    requestAnimationFrame(animateBall1)
   }, 15)
}

animateBall1()

// draw ball 2 only move on Y axis
const ball2 = new Ball( 200, 30, 10, "red", 0, 5 )
ball2.draw(ctx)

function animateBall2() {
  // clear previous position along path
  ctx.clearRect(
    ball2.xpos - ball2.sizeRadius, 
    ball2.ypos - ball2.sizeRadius, 
    ball2.sizeRadius * 2, 
    ball2.sizeRadius * 2
  );

  // change position
  ball2.xpos += ball2.dx 
  ball2.ypos += ball2.dy

  // draw ball
  ball2.draw(ctx)

  // left / right wall collision detection and reverse path 
  if( ball2.ypos + (ball1.sizeRadius * 2) > canvas.height || ball2.ypos - (ball2.sizeRadius * 2) < 0 ) {
    ball2.dy *= -1
  }

  // Animate but adjust 'frame rate' with setTimeout, last argument is time between draws
  // in milliseconds (1000 is one frame per second)
  setTimeout( () => {
    requestAnimationFrame(animateBall2)
   }, 10)
}

animateBall2()

const ball3 = new Ball( 400, 30, 10, "gray", 0, 5 )
ball3.draw(ctx)

function animateBall3() {
  // clear previous position along path
  ctx.clearRect(
    ball3.xpos - ball3.sizeRadius, 
    ball3.ypos - ball3.sizeRadius, 
    ball3.sizeRadius * 2, 
    ball3.sizeRadius * 2
  );

  // change position
  ball3.xpos += ball3.dx 
  ball3.ypos += ball3.dy

  // draw ball
  ball3.draw(ctx)

  // left / right wall collision detection and reverse path 
  if( ball3.ypos + (ball3.sizeRadius * 2) > canvas.height || ball3.ypos - (ball3.sizeRadius * 2) < 0 ) {
    ball3.dy *= -1
  }

  // Animate but adjust 'frame rate' with setTimeout, last argument is time between draws
  // in milliseconds (1000 is one frame per second)
  setTimeout( () => {
    requestAnimationFrame(animateBall3)
   }, 0)
}

animateBall3()