
export class Ball {
  constructor( xpos, ypos, sizeRadius, color, dx, dy) {
    this.xpos = xpos
    this.ypos = ypos
    this.sizeRadius = sizeRadius
    this.color = color
    this.dx = dx
    this.dy = dy 
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc( this.xpos, this.ypos, this.sizeRadius,0, Math.PI * 2 )
    ctx.fillStyle = this.color
    ctx.fill()
  }
}