/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
let hello = document.getElementById("canvas1").getContext('2d');
hello.font = '48px sans-serif';
hello.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
const canvas = document.getElementById('canvas2')
const ctx = canvas.getContext('2d')
let height = prompt("Please Enter A Valid Height")
let width = prompt("Please Enter A Valid Width")
let x = prompt("Please Enter A Valid X Coordinate")
let y = prompt("Please Enter A Valid Y Coordinate")
if (width < 1){
  alert("Please Enter A Width Value Greater Than 1")
}
else if (height < 1){
  alert("Please Enter A Height Value Greater Than 1")
}
else if (x < 5){
  alert("Please Enter An X Coordinate Value Greater Than 5")
}
else if (y < 5){
  alert("Please Enter A Y Coordinate Value Greater Than 5")
}
else if (height > 256 || width > 256 || x > 256 || y > 256){
  alert("The Rectangle Will Not Fit On The Canvas")
}
else {
  ctx.strokeRect(height, width, x, y)
}
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
var div = document.getElementById('canvas3').getContext('2d');
let color = prompt("Please Enter A Valid Color");
if (color === 'blue' || color ===  'black' || color ==='green' ||color === 'orange' ||color === 'purple' || color === 'red' || color === 'yellow' ){
  div.fillStyle = color
  div.fillRect( 10, 10, 100, 50);
}
else {
  alert(`${color} Is Invalid`)
  color = null;
}
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  const canvas = document.getElementById("canvas4");
  const context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);

  x = Number(prompt("Please Enter A Valid Length For Side 1"));
  y = Number(prompt("Please Enter A Valid Length For Side 2"));
  z = Number(prompt("Please Enter A Valid Length For Side 3"));

  if (isNaN(x) || isNaN(y) || isNaN(z) == true)
  {
    alert("That Is An Invalid Input");
  }

  else if ((x * x) + (y * y) != (z * z)) {
    alert("That Is An Invalid Right Triangle");
  }

  else if (x > canvas.height || y > canvas.width) {
    alert("That Does Not Fit On The Canvas")
  }

  else{
    context.beginPath();
    context.moveTo(10,10);
    context.lineTo(10,10+x);
    context.lineTo(10+y,10+x);
    context.closePath();
    context.stroke();
}
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
 let canvas = document.getElementById('canvas5');
 let ctx = canvas.getContext('2d');
 ctx.clearRect(0, 0, canvas.width, canvas.height);
  while(true){
	let radius=Number(prompt("Please Enter A Valid Value For The Radius"));
	if(radius>=1 && radius<=canvas.width && Number.isInteger(radius)){
	break;
		}
	}
  let x = canvas.width;
  let y = canvas.height;
  let eyeRad=radius*.1
  let mouthRad=radius*.7
  ctx.beginPath();
  ctx.arc(x/2, y/2, radius, 0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2 - radius/3, y/2-radius/4, eyeRad,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2+radius/3, y/2-radius/4, eyeRad,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2, y/2, mouthRad,0, Math.PI);
  ctx.stroke();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
    let canvas = document.getElementById('canvas6');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let outerRadius=Number(prompt("Please Enter a Valid Value For The Outer Radius"));
    let innerRadius=Number(prompt("Please Enter a Valid Value For The Inner Radius"));
    if (outerRadius>=innerRadius && canvas.width>=outerRadius+125 && canvas.height>=outerRadius+125 && innerRadius>=1 && outerRadius>=1){
      let points=5;
      let outerx=[];
      let outery=[];
      let innerx=[];
      let innery=[];
      for(let x=0;x<points;x++){
        outerx.push(Math.cos((Math.PI*2*x)/points-(Math.PI/2))*outerRadius+125);
        outery.push(Math.sin((Math.PI*2*x)/points-(Math.PI/2))*outerRadius+125);
        innerx.push(Math.cos(((Math.PI*2*x)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
        innery.push(Math.sin(((Math.PI*2*x)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
        }
        ctx.beginPath();
        ctx.moveTo(outerx[0], outery[0]);
        for(let y=0;y<outerx.length;y++){
        ctx.lineTo(innerx[y], innery[y]);
        ctx.lineTo(outerx[y+1], outery[y+1]);
        }
        ctx.lineTo(outerx[0], outery[0]);
        ctx.stroke();
        ctx.closePath();
    }
    else{
        alert('The Input Is Invalid');
      }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById('canvas7');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let sideLength=80;
  let center=[10+(sideLength)/2+sideLength/Math.sqrt(2), 10+(sideLength/2)+(sideLength/Math.sqrt(2))]
  console.log(center)
  let points=8;
  let pointx=[];
  let pointy=[];

  for(let a=0;a<points;a++){
    pointx.push(Math.cos(((Math.PI*2*a)/points)-Math.PI/8)*100+center[0]);
    pointy.push(Math.sin(((Math.PI*2*a)/points)-Math.PI/8)*100+center[1]);
  }
  ctx.beginPath();
  ctx.moveTo([pointx][0], pointy[0]);
  for(let y=0;y<pointx.length;y++){
    ctx.lineTo(pointx[y], pointy[y]);
  }
  ctx.lineTo(pointx[0], pointy[0]);
  ctx.stroke();

  ctx.fillStyle="red";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.textAlign="center";
  ctx.font="62px sans-serif";
  ctx.fillStyle="white";
  ctx.fillText("STOP", center[0], center[1]+15);
  ctx.closePath()
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let radius = 40 / Math.sin(0.125 * Math.PI);
  let canvas = document.getElementById('canvas7');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.moveTo(Math.cos(0.125 * Math.PI) * radius + 110, Math.sin(0.125 * Math.PI) * radius + 110);
  let x = 0;
  let angle = 0.25 * Math.PI;
  while (x < 8) {
    context.lineTo(Math.cos(0.125 * Math.PI + angle) * radius + 110, Math.sin(0.125 * Math.PI + angle) * radius + 110);
    angle = angle + 0.25 * Math.PI;
    x = x + 1;
  }
  context.closePath();
  context.fillStyle = "red";
  context.fill();
  context.font = "65px Arial";
  context.fillStyle = "white";
  context.fillText("STOP", 22, 130);
  lineWidth = 1;
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let ctx = document.getElementById("canvas9").getContext("2d");
  ctx.clearRect(0,0,1024,760);
  let houseColor = prompt("Please Enter A Color For The House");
  let doorColor = prompt("Please Enter A Color For The Front Door");
  if ((houseColor == "blue" || houseColor == "brown"|| houseColor == "green" || houseColor == "orange" || houseColor == "purple" || houseColor == "red" || houseColor == "yellow") && (doorColor == "blue" || doorColor == "brown"|| doorColor == "green" || doorColor == "orange" || doorColor == "purple" || doorColor == "red" || doorColor == "yellow")){

   ctx.fillRect(150,canvas.height-460,700,450);
   ctx.strokeRect(150,canvas.height-460,700,450);
   ctx.fillStyle="lightskyblue";
   let windowx= [275,645,275,645];
   let windowy= [canvas.height-385,canvas.height-385,canvas.height-135,canvas.height-135];
   for(let a = 0; a<4; a++){
     ctx.moveTo(windowx[a],windowy[a]);
     ctx.fillRect(windowx[a],windowy[a],80,80);
     ctx.strokeRect(windowx[a],windowy[a],80,80);
   }
   ctx.fillStyle=door;
   ctx.fillRect(450,canvas.height-160,100,150);
   ctx.strokeRect(450,canvas.height-160,100,150);
   ctx.fillStyle="gold";
   ctx.moveTo(544,canvas.height-85);
   ctx.arc(537,canvas.height-85,7,0,Math.PI*2);
   ctx.fill();
   ctx.stroke();
   ctx.fillStyle="gray";
   ctx.beginPath();
   ctx.moveTo(150,canvas.height-460);
   ctx.lineTo(500,canvas.height-735);
   ctx.lineTo(850,canvas.height-460);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
 }else{
   alert(`One Of The Colors Is Not Supported`)
 }
}
