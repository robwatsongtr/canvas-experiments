function draw() {
  // retrieve the DOM node representing the canvas element 
  const canvas = document.getElementById("tutorial");

  // call canvas.getContext to access the rendering context to draw 
  if (canvas.getContext) {
    // getContext takes one paramater, the type of content (eg: "2d")
    // with ctx we now have a canvas environment 
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 20, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  }
}