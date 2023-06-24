var value1 = document.querySelector(".value1");
var value2 = document.querySelector(".value2");
var value3 = document.querySelector(".value3");
var value4 = document.querySelector(".value4");
var start1 = 0;
var start2 = 0;
var start3 = 0;
var start4 = 0;
var end1 = 550;
var end2 = 650;
var end3 = 350;
var end4 = 72;
var speed = 10;
// counter 1 counter 1 counter 1 counter 1 counter 1
var progress1 = setInterval(() => {
    start1++;
    // console.log(start);
    value1.textContent = start2;
    if (start1 == end1) {
        clearInterval(progress1);
    }
}, speed)
// counter 1 counter 1 counter 1 counter 1 counter 1

// counter 2 counter 2 counter 2 counter 2 counter 2

var progress2 = setInterval(() => {
    start2++;
    // console.log(start);
    value2.textContent = start2;
    if (start2 == end2) {
        clearInterval(progress2);
    }
}, speed)
// counter 2 counter 2 counter 2 counter 2 counter 2

// counter 3 counter 3 counter 3 counter 3 counter 3
var progress3 = setInterval(() => {
    start3++;
    // console.log(start3);
    value3.textContent = start3;
    if (start3 == end3) {
        clearInterval(progress3);
    }
}, speed)
// counter 3 counter 3 counter 3 counter 3 counter 3

// counter 4 counter 4 counter 4 counter 4 counter 4
var progress4 = setInterval(() => {
    start4++;
    // console.log(start4);
    value4.textContent = start4;
    if (start4 == end4) {
        clearInterval(progress4);
    }
}, speed)
// counter 4 counter 4 counter 4 counter 4 counter 4


var overlay1 = document.querySelector(".overlay1");
var overlay2 = document.querySelector(".overlay2");
var overlay3 = document.querySelector(".overlay3");
var overlay4 = document.querySelector(".overlay4");
var overlay5 = document.querySelector(".overlay5");
var overlay6 = document.querySelector(".overlay6");

// Overlay Overlay Overlay Overlay Overlay Overlay

function abt_overlay1(){
    overlay1.style.display ="flex";
    document.querySelector(".about").style.height="100vh";
    document.querySelector(".about").style.overflow="hidden";
}
function abt_overlay2(){
    overlay2.style.display ="flex";
    document.querySelector(".about").style.height="100vh";
    document.querySelector(".about").style.overflow="hidden";
}
function abt_overlay3(){
    overlay3.style.display ="flex";
    document.querySelector(".about").style.height="100vh";
    document.querySelector(".about").style.overflow="hidden";
}
function abt_overlay4(){
    overlay4.style.display ="flex";
    document.querySelector(".about").style.height="100vh";
    document.querySelector(".about").style.overflow="hidden";
}
function abt_overlay5(){
    overlay5.style.display ="flex";
    document.querySelector(".about").style.height="100vh";
    document.querySelector(".about").style.overflow="hidden";
}
function abt_overlay6(){
    overlay6.style.display ="flex";
    document.querySelector(".about").style.height="100vh";
    document.querySelector(".about").style.overflow="hidden";
}

// Overlay Overlay Overlay Overlay Overlay Overlay

// Close Close Close Close Close Close Close Close

function abt_overlay_close1(){
    overlay1.style.display ="none";
    document.querySelector(".about").style.height="auto";
    // document.querySelector(".about").style.overflow="visible";
}
function abt_overlay_close2(){
    overlay2.style.display ="none";
    document.querySelector(".about").style.height="auto";
    // document.querySelector(".about").style.overflow="visible";
}
function abt_overlay_close3(){
    overlay3.style.display ="none";
    document.querySelector(".about").style.height="auto";
    // document.querySelector(".about").style.overflow="visible";
}
function abt_overlay_close4(){
    overlay4.style.display ="none";
    document.querySelector(".about").style.height="auto";
    // document.querySelector(".about").style.overflow="visible";
}
function abt_overlay_close5(){
    overlay5.style.display ="none";
    document.querySelector(".about").style.height="auto";
    // document.querySelector(".about").style.overflow="visible";
}
function abt_overlay_close6(){
    overlay6.style.display ="none";
    document.querySelector(".about").style.height="auto";
    // document.querySelector(".about").style.overflow="visible";
}

// Close Close Close Close Close Close Close Close

// Next Next Next Next Next Next Next Next Next


function abt_overlay_next1(){
    overlay1.style.display="none"
    overlay2.style.display="flex"
}
function abt_overlay_next2(){
    overlay2.style.display="none"
    overlay3.style.display="flex"
}
function abt_overlay_next3(){
    overlay3.style.display="none"
    overlay4.style.display="flex"
}
function abt_overlay_next4(){
    overlay4.style.display="none"
    overlay5.style.display="flex"
}
function abt_overlay_next5(){
    overlay5.style.display="none"
    overlay6.style.display="flex"
}
function abt_overlay_next6(){
    overlay6.style.display="none"
    overlay1.style.display="flex"
}

// Next Next Next Next Next Next Next Next Next

// Back Back Back Back Back Back Back Back Back

function abt_overlay_back1(){
    overlay1.style.display="none"
    overlay6.style.display="flex"
}
function abt_overlay_back2(){
    overlay2.style.display="none"
    overlay1.style.display="flex"
}
function abt_overlay_back3(){
    overlay3.style.display="none"
    overlay2.style.display="flex"
}
function abt_overlay_back4(){
    overlay4.style.display="none"
    overlay3.style.display="flex"
}
function abt_overlay_back5(){
    overlay5.style.display="none"
    overlay4.style.display="flex"
}
function abt_overlay_back6(){
    overlay6.style.display="none"
    overlay5.style.display="flex"
}

// Back Back Back Back Back Back Back Back Back
