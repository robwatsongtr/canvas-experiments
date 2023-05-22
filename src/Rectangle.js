
export class Rectangle {
  constructor( xpos, ypos, width, height, color) {
    this.xpos = xpos
    this.ypos = ypos
    this.width = width
    this.height = height
    this.color = color 
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
  } 
}