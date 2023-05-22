
export class Ball {
  constructor( xpos, ypos, sizeRadius, color, dx, dy, frameDelay ) {
    this.xpos = xpos
    this.ypos = ypos
    this.sizeRadius = sizeRadius
    this.color = color
    this.dx = dx
    this.dy = dy 
    this.frameDelay = frameDelay
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc( this.xpos, this.ypos, this.sizeRadius,0, Math.PI * 2 )
    ctx.fillStyle = this.color
    ctx.fill()
  }

  animateHoriz(ctx) {
    // clear previous position of object along path:   
    //
    // clearRect(x, y, width, height)
    // x is the x axis cordinate of the rectangle's starting point
    // y is the y axis of the coordinate's starting point
    // width is the rectangle's width, height is rectangle's height
    //
    // The x and y arguments to clearRect() should be the coordinates of the top-left 
    // corner of the rectangle to clear, minus the size of the ball, NOT the dx or dy
    ctx.clearRect(
      this.xpos - this.sizeRadius, 
      this.ypos - this.sizeRadius, 
      this.sizeRadius * 2, 
      this.sizeRadius * 2
    );

    // change position 
    this.xpos += this.dx
    this.ypos += this.dy 
    
    // draw ball
    this.draw(ctx)

    // left right collision detection 
    if ( 
      this.xpos + (this.sizeRadius * 2) > canvas.width || 
      this.xpos - (this.sizeRadius * 2) < 0 
    ) {
      this.dx *= -1
    }

    // animate with a given frame delay in milliseconds
    setTimeout( () => {
      requestAnimationFrame( () => this.animateHoriz(ctx) )
    }, this.frameDelay)
  }

  animateVert(ctx) {
    ctx.clearRect(
      this.xpos - this.sizeRadius, 
      this.ypos - this.sizeRadius, 
      this.sizeRadius * 2, 
      this.sizeRadius * 2
    );

    this.xpos += this.dx 
    this.ypos += this.dy

    this.draw(ctx)

    // up down collision detecton 
    if ( 
      this.ypos + (this.sizeRadius * 2) > canvas.height || 
      this.ypos - (this.sizeRadius * 2) < 0 
    ) {
      this.dy *= -1
    }

    setTimeout( () => {
      requestAnimationFrame( () => this.animateVert(ctx) )
    }, this.frameDelay)
  }

}