
export class Rectangle {

  // type annotations for the constructor 
  private xpos: number;
  private ypos: number;
  private width: number;
  private height: number;
  private color: string;

  constructor( xpos: number, ypos: number, width: number, height: number, color: string) {
    this.xpos = xpos
    this.ypos = ypos
    this.width = width
    this.height = height
    this.color = color 
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height)
  } 
}