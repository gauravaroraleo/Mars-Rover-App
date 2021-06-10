c1 = document.getElementById("myCanvas");
ctx = c1.getContext("2d");
roverwidth = 100;
roverheight = 100;
roverx = 10;
rovery = 10;
roverimg = "rover.png";
nasa=["Rover 1.jpeg","rover 2.jpeg","rover 3.jpeg","rover 4.jpeg"];
var x = Math.floor(Math.random()*4);
bgimg = nasa[x];

function add() {
    backgimg = new Image();
    backgimg.onload = uploadbg;
    backgimg.src = bgimg;
    roverimage = new Image();
    roverimage.onload = uploadrover;
    roverimage.src = roverimg;
}

function uploadbg() {
    ctx.drawImage(backgimg, 0, 0, c1.width, c1.height);
}

function uploadrover() {
    ctx.drawImage(roverimage, roverx, rovery, roverwidth, roverheight);
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keypress = e.keyCode;
    if (keypress == '38') {
        up();
        console.log("The user pressed the up key");

    }
    if (keypress == '40') {
        down();
        console.log("The User Pressed The down key");
    }
    if (keypress == '37') {
        left();
        console.log("The user pressed the left key");
    }
    if (keypress == '39') {
        right();
        console.log("The user pressed the right key");
    }
}

function up() {
    if (rovery >= 0) {
        rovery = rovery - 10;
        uploadbg();
        uploadrover();
    }
}

function down() {
    if (rovery <= 500) {
        rovery = rovery + 10;
        uploadbg();
        uploadrover();
    }
}

function left() {
    if (roverx >= 0) {
        roverx = roverx - 10;
        uploadbg();
        uploadrover();
    }
}

function right() {
    if (roverx <= 700) {
        roverx = roverx + 10;
        uploadbg();
        uploadrover();

    }



}
