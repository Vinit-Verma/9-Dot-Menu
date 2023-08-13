let navigation = document.getElementsByClassName("navigation");
console.log("My console for navigation", navigation);
navigation[0].addEventListener("click", () => {
  navigation[0].classList.toggle("active");
});
