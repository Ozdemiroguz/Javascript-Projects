const square = document.querySelector('.square');
square.addEventListener('mousemove', runEvent);
function runEvent(e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},50)`;
    square.innerHTML = `rgb(${e.offsetX},${e.offsetY},50)`
}