// const testBtn = document.getElementById("test-btn");
// testBtn.addEventListener("click", () => {
//   alert("clicked");
// });

const watchingBtn = document.getElementById("watching-btn");
watchingBtn.addEventListener("click", () => {
  window.location = "./watching.html";
});

const watchedBtn = document.getElementById("watched-btn");
watchedBtn.addEventListener("click", () => {
  window.location = "./watched.html";
});

const comingSoonBtn = document.getElementById("coming-soon-btn");
comingSoonBtn.addEventListener("click", () => {
  window.location = "./comingsoon.html";
});
