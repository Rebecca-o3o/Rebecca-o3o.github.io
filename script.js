// === parallax triangles scroll ===
window.addEventListener("DOMContentLoaded", scrollLoop, false)

var trianglePointLeft = document.getElementById('point-left')
var trianglePointRight = document.getElementById('point-right')
var trianglePointLeftSmall = document.getElementById('point-left-small')
// var trianglePointRightSmall = document.getElementById('point-right-small')

var xScrollPosition
var yScrollPosition

function scrollLoop(e){
  xScrollPosition = window.scrollX
  yScrollPosition = window.scrollY

  setTranslate(0, yScrollPosition * -0.2, trianglePointLeft)
  setTranslate(0, yScrollPosition * 0.8, trianglePointRight)
  setTranslate(0, yScrollPosition * -0.8, trianglePointLeftSmall)
  // setTranslate(yScrollPosition * 5, 0, trianglePointRightSmall)

  requestAnimationFrame(scrollLoop)
}

function setTranslate (xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "," + yPos + "px, 0"
}
