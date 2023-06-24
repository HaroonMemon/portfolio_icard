function show() {
    document.getElementById("nav").style.display = "block";
    // document.getElementById("nav-bar").style.transform="translate(0%)";
    document.getElementById("nav").style.transition = "1s";
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-close").style.display = "block";
    // document.getElementById("close-btn").style.display="block";
}
function hide() {
    // document.getElementById("nav-bar").style.transform="translate(100%)";
    document.getElementById("nav").style.display = "none";
    document.getElementById("nav").style.transition = "1s";
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu-close").style.display = "none";
    // document.getElementById("close-btn").style.display="none";

}
