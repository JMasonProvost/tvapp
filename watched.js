// const testBtn = document.getElementById("test-btn");
// testBtn.addEventListener("click", () => {
//   alert("clicked");
// });

const form = document.querySelector("#showsForm");
const input = document.querySelector("#showsName");
const list = document.querySelector("#list");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const showsName = input.value;
  const newLI = document.createElement("LI");
  newLI.innerText = showsName;
  list.append(newLI);
  input.value = "";

});

//const watchingBtn = document.getElementById("watching-btn");
//watchingBtn.addEventListener("click", () => {
// window.location = "./watching.html";
//});

//const watchedBtn = document.getElementById("watched-btn");
//watchedBtn.addEventListener("click", () => {
//  window.location = "./watched.html";
//});

//const comingSoonBtn = document.getElementById("coming-soon-btn");
//comingSoonBtn.addEventListener("click", () => {
// window.location = "./comingsoon.html";
//});

const container = document.querySelector('#container');
const baseURL = 'https://soldierswifecrazylife.com/wp-content/uploads/2023/01/'

for (let i = 1; i < 10; i++) {
  const newImg = document.createElement('img');
  newImg.scr = `${baseURL}${i}.jpg`
  container.appendChild(newImg)
}



