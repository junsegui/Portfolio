const ES = document.getElementById("ES");
const upButton = document.querySelector(".upButton");

ES.addEventListener("click", () => {
  let url = "./index.html";
  location.href = `${url}`;
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    upButton.classList.add("active");
  } else {
    upButton.classList.remove("active");
  }
});
