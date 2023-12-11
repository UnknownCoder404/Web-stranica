// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
const topbar = document.querySelector(".accessibility-container");
const startOffset = topbar.style.top;
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbar.style.top = "0";
  } else {
    topbar.style.top = startOffset;
  }
}

const badSightButton = document.querySelector(".bad-sight-button");

badSightButton.addEventListener("click", () => {
  badSightMode();
});
