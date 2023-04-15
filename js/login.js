const sign = document.querySelector(".signup");
const container = document.querySelector(".continer");
const i = document.querySelector(".close a");

document.querySelector(".sign-btn").addEventListener("click", function () {
  sign.classList.add("feed");
  container.classList.add("feed");
});

document.querySelector(".close").addEventListener("click", function () {
  sign.classList.remove("feed");
  container.classList.remove("feed");
});
