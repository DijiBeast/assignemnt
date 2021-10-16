var mouseEvent = "empty"
var last_position_X, last_position_Y;
color = "red";
width_of_line = 1;


canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{

    mouseEvent = "mouseUP";
}


canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{

    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

console.log("Last position of x and y coordinates = ");
HTMLFormControlsCollection.log("x = " + last_position_X + "y = " + last_position_Y);
ctx.moveTo(last_position_X, last_position_Y);

console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
}


last_position_X = current_position_of_mouse_x;
last_position_Y = current_position_of_mouse_y;



}



















