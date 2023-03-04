let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", (event) => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", (event) => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});

// setInterval(() => {
//       scrollContainer.style.scrollBehavior = "smooth";
//       scrollContainer.scrollLeft += 900;
// }, 2000);

// setInterval(() => {
//       scrollContainer.style.scrollBehavior = "smooth";
//       scrollContainer.scrollLeft -= 900;
// }, 4000);
