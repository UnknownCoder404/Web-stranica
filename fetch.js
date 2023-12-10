const addViewUrl = "https://view-counter-auww.onrender.com/add-view";
// if website was already visited, dont add view
if (!localStorage.getItem("visited")) {
  fetch(addViewUrl, {
    method: "POST",
  });
  localStorage.setItem("visited", true);
}
