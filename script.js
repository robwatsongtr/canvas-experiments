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

const circle = {
  x: 200,
  y: 205,
  size: 10, // radius 
  dx: 5,  // the increment of movement on x axis
  dy: 4  // the increment of movement on the y axis
}

// arc(x pos, y pos, radius, startAngle, endAngle)  to get 360 degrees its 2 * PI radians 
function drawCircle() {
  ctx.beginPath()
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
  ctx.fillStyle = 'purple'
  ctx.fill()
}

drawCircle()