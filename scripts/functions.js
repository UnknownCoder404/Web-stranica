// Bad Sight Mode
const defaultFontSize = document.body.style.fontSize;
let badSightModeState = false;
function badSightMode() {
  console.log(badSightModeState);
  if (badSightModeState) {
    document.body.style.fontSize = defaultFontSize;
    badSightModeState = false;
  } else {
    document.body.style.fontSize = "20px";
    badSightModeState = true;
  }
}
// End Bad Sight Mode
