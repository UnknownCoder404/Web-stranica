const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
const mapsIframe = document.querySelector(".maps-iframe");
// set width of iframe to width of the screen and leave a bit of space
// so its left for spacing
mapsIframe.style.width = `${width - 10}px`;
// set height to 2x times less than width
// show google maps iframe
if (width > 300) {
  mapsIframe.style.display = "block";
} else {
  mapsIframe.style.display = "none";
}
