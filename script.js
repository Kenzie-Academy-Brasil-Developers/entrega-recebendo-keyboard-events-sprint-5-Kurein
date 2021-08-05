let box = document.getElementById("box")
let boxTop = 200
let boxLeft = 200

'use strict';

document.addEventListener('keydown', (event) => {
  let box = document.getElementById("box")

  const keyName = event.key;
  if (keyName === "ArrowUp") {
    boxTop -= 10
    box.style.top = boxTop + "px"
  } if (keyName === "ArrowDown") {
    boxTop += 10
    box.style.top = boxTop + "px"
  } if (keyName === "ArrowLeft") {
    boxLeft -= 10
    box.style.left = boxLeft + "px"
  } if (keyName === "ArrowRight") {
    boxLeft += 10
    box.style.left = boxLeft + "px"
  }
});