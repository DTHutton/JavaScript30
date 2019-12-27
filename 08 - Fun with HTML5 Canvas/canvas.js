//? logs timestamp of refresh so I don't have to think about what should be showing since I can't figure out how to turn off the hot reload for repl.it
//*--------------------------------------------------------
const compiled = new Date();
console.log('compiled: ', compiled);

//*-------------------------------------------------------- //*--------------------------------------------------------
//*-------------------------------------------------------- //*--------------------------------------------------------

//? canvas setup
//*--------------------------------------------------------
const canvas = document.querySelector('#draw'); //! grabs canvas HTML element and assigns it to `canvas`
const ctx = canvas.getContext('2d'); //! https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
canvas.width = window.innerWidth; //! sizes canvas to be the same width of the window
canvas.height = window.innerHeight; //! sizes canvas to be the same height of the window
ctx.strokeStyle = '#BADA55'; //! specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes
ctx.lineJoin = 'round'; //! determines the shape used to join two line segments where they meet
ctx.lineCap = 'round'; //! determines the shape used to draw the end points of lines
ctx.lineWidth = 30; //! sets the thickness of lines
ctx.globalCompositeOperation = 'multiply'; //! sets the type of compositing operation to apply when drawing new shapes

let isDrawing = false; //! flag that will determine if the cursor is drawing(clicked) or just moving around(no click)
let lastX = 0; //! sets default value for x position
let lastY = 0; //! sets default value for y position
let hue = 0; //! sets default value for hue
let direction = true; //! sets default value for direction variable that is used to determine lineWidth in draw()

//? function that runs when mouse is moved on top of the canvas
//*--------------------------------------------------------
function draw(e) {
  if(!isDrawing) return; //! stops function from running if not mouse down
  console.log(e)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath(); //! starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path
  //! start from
  ctx.moveTo(lastX, lastY); //! begins a new sub-path at the point specified by the given (x, y) coordinates
  //! go to
  ctx.lineTo(e.offsetX, e.offsetY); //! adds a straight line to the current sub-path by connecting the sub-path's last point to the specified (x, y) coordinates
  ctx.stroke(); //! strokes (outlines) the current or given path with the current stroke style
  [lastX, lastY] = [e.offsetX, e.offsetY]; //! updates lastX and lastY with the values associated with last known mouse position
  hue++; //! increments the hue value by 1 every time draw() runs
	//! resets hue value to 0 so that the number doesn't keep increasing out of the control
  if (hue >= 360) {
    hue = 0;
  }
	//! increments/decrements the lineWidth based on value of `direction`
	if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}
	if(direction) {
	ctx.lineWidth++;
	} else {
			ctx.lineWidth--;
	}
}

//? event listeners
//*--------------------------------------------------------
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true; //! sets isDrawing to true if mouse is down
  [lastX, lastY] = [e.offsetX, e.offsetY]; //! updates lastX and lastY with the values associated with last known mouse position
  });

canvas.addEventListener('mousemove', draw); //! adds event listener that runs draw() when mouse is moved on top of canvas
canvas.addEventListener('mouseup', () => isDrawing = false); //! sets isDrawing to false if mouse is up
canvas.addEventListener('mouseout', () => isDrawing = false); //! sets isDrawing to false when mouse leaves canvas area
