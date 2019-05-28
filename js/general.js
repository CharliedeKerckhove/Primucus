//Logo
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 190;
var y = 100;
var radius = 75;
var currentEndAngle = 0.8;
var currentStartAngle = 0.8;
var start = setInterval(draw, 15);
var counter = 0;
var counterClockwise = false;

function draw() {
/*checks count, if more than 120 do nothing else...*/
  if (counter >= 120) {

  } else {
/*... begin draw from current start angle * PI*/
    var startAngle = currentStartAngle * Math.PI;
    var startAngle2 = (currentStartAngle * Math.PI) + 0.7;
    var endAngle2 = ((currentEndAngle) * Math.PI) + 0.7;
/*add 0.01 to end angle making it move*/
    currentEndAngle = currentEndAngle + 0.01;


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Bottom of logo
    drawLogo(startAngle, 0.8);
    //Top connecting arc
    drawArc(startAngle2, endAngle2);
  }
/*increases count*/
  counter++;
}
/*draws a 15px wide arc using the preset variables in green*/
function drawArc(startAngle2, endAngle2) {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle2, endAngle2);
  ctx.lineWidth = 15;
  ctx.strokeStyle = "#19BD75";
  ctx.stroke();
}
/*draws two 15px wide arc in green using the preset variables and adding to them to set their position*/
function drawLogo(startAngle, endAngle) {
  ctx.beginPath();
  ctx.arc(x + 100, y + 109, radius, startAngle, endAngle);
  ctx.lineWidth = 15;
  ctx.strokeStyle = "#19BD75";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x - 100, y + 69, radius, startAngle, endAngle);
  ctx.lineWidth = 15;
  ctx.strokeStyle = "#19BD75";
  ctx.stroke();
}

//Dropdown Menu
var increase = document.getElementById("textIncrease");
var decrease = document.getElementById("textDecrease");
var colour = document.getElementById("colourChange");
var backgroundB = false;
var home = document.getElementById("home");
var newRange = document.getElementById("newRange");
var mens = document.getElementById("mens");
var womens = document.getElementById("womens");
var aboutUs = document.getElementById("aboutUs");
var currentFontSize = "1.2em";
/*shows hidden dropdown content*/
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
/*checks local storage for previously set font size to use*/
if (localStorage.getItem("fontSize")) {
  var storedSize = localStorage.getItem("fontSize");
  setFontSize(storedSize);
}
/*changes font size of text within these id's*/
function setFontSize(value) {
  document.querySelector("#home").style.fontSize = value;
  document.querySelector("#newRange").style.fontSize = value;
  document.querySelector("#mens").style.fontSize = value;
  document.querySelector("#womens").style.fontSize = value;
  document.querySelector("#aboutUs").style.fontSize = value;
  document.querySelector("#contactUs").style.fontSize = value;
}
/*set font size to local storage*/
//Text Increase
function textIncrease() {
  localStorage.setItem("fontSize", "1.3em");
  setFontSize("1.3em");
}
//Text Decrease
function textDecrease() {
  localStorage.setItem("fontSize", "1.2em");
  setFontSize("1.2em");
}
/*checks local storage for previously set background colour to use*/
if (localStorage.getItem("background")) {
  var storedColour = localStorage.getItem("background");
  setBackground(storedColour);
}
/*set background colour*/
function setBackground(value) {
  document.body.style.backgroundColor = value;
}
/*set background colour to local storage*/
//Background Colour
function colourChange() {
  if (backgroundB == false) {
    localStorage.setItem("background", "black");
    setBackground("black");
    backgroundB = true;
  } else {
    localStorage.setItem("background", "white");
    setBackground("white");
    backgroundB = false;
  }
}
/*monitor for onclicks*/
increase.addEventListener("click", textIncrease);
decrease.addEventListener("click", textDecrease);
colour.addEventListener("click", colourChange);
//Social Media
function facebook(){
    window.open ("http://www.facebook.com")
}
function twitter(){
    window.open ( "http://www.twitter.com")
}
function instagram(){
    window.open ("http://www.instagram.com")
}
function youtube(){
    window.open ("http://www.youtube.com")
}
facebookbtn.addEventListener("click",facebook);
twitterbtn.addEventListener("click",twitter);
instagrambtn.addEventListener("click",instagram);
youtubebtn.addEventListener("click",youtube);