// Link to HTML5 Canvas API Crash Course: 
// https://www.youtube.com/watch?v=gm1QtePAYTM

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// fillRect()
// four arguments for fillrect: x placement, y placement, widthOfRec, heightOfRec
// Can also use strokeRect() for non-filled rectangles. 

// Row 1:
ctx.fillStyle="blue"
ctx.fillRect(30, 40, 150, 150)
ctx.fillRect(220, 40, 160, 150)
ctx.fillRect(420, 40, 150, 150)

// Row 2
ctx.fillStyle = "green"
ctx.fillRect(30, 220, 150, 150)
ctx.fillRect(220, 220, 160, 150)
ctx.fillRect(420, 220, 150, 150)

// Row 3
ctx.fillStyle = "orange"
ctx.fillRect(30, 410, 150, 150)
ctx.fillRect(220, 410, 160, 150)
ctx.fillRect(420, 410, 150, 150)

const ball1 = {
  x: 200,
  y: 205,
  size: 10, // radius 
  dx: 5,  // the increment of movement on x axis
  dy: 0  // the increment of movement on the y axis
}

// arc(x pos, y pos, radius, startAngle, endAngle)  to get 360 degrees its 2 * PI radians 
function drawBall() {
  ctx.beginPath()
  ctx.arc(ball1.x, ball1.y, ball1.size, 0, Math.PI * 2)
  ctx.fillStyle = 'purple'
  ctx.fill()
}

function animateBall() {

  // clear previous position of object along path  
  //
  // clearRect(x, y, width, height)
  // x is the x axis cordinate of the rectangle's starting point
  // y is the y axis of the coordinate's starting point
  // width is the rectangle's width, height is rectangle's height
  //
  // The x and y arguments to clearRect() should be the coordinates of the top-left 
  // corner of the rectangle to clear, minus the size of the ball, NOT the dx or dy
  ctx.clearRect(ball1.x - ball1.size, ball1.y - ball1.size, ball1.size * 2, ball1.size * 2);

  // change position:
  ball1.x += ball1.dx 
  ball1.y += ball1.dy

  // draw ball   
  drawBall()

  // animate but adjust 'frame rate' with setTimeout, last argument is time between draws
  // in milliseconds (1000 is one frame per second)

  // setTimeout( () => {
  //  requestAnimationFrame(animateBall)
  // }, 100)

}

animateBall()

