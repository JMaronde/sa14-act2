function moveSquare() {
    const square = document.getElementById('square');
    
    if (square.classList.contains('moved')) { // moves the square back to original position if it already moved
        square.classList.remove('moved');
    } else {
        square.classList.add('moved'); // moves the square if it hasn't already
    }
}