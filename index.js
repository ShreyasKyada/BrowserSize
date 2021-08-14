let btnSet = document.getElementById('btnSet');

btnSet.addEventListener('click', function () {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    window.open("#", "", `width=${width}px, height=${height}px`);
});

let Window = document.getElementById('browserSize');
let screen = document.getElementById('screenSize');

function windowSize() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let screenHeight = this.screen.height;
    let screenWidth = this.screen.width;
    Window.innerHTML = `Browser window size : ${windowWidth} x ${windowHeight}`;
    screen.innerHTML = `Screen size : ${screenWidth} x ${screenHeight}`;
}
onresize = windowSize;
onload = windowSize;

let size = document.getElementsByClassName('grid-item');

size[0].addEventListener('click',function() {
    window.open("#", "", "width=640px, height=480px");
});

size[1].addEventListener('click',function() {
    window.open("#", "", "width=800px, height=600px");
});

size[2].addEventListener('click',function() {
    window.open("#", "", "width=1024px, height=768px");
});

size[3].addEventListener('click',function() {
    window.open("#", "", "width=1152px, height=864px");
});

size[4].addEventListener('click',function() {
    window.open("#", "", "width=1280px, height=1024px");
});

size[5].addEventListener('click',function() {
    window.open("#", "", "width=1600px, height=1200px");
});