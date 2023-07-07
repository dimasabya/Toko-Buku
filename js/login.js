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

// daftar

let simpanData = function () {
  let username = document.querySelector("#usernameSignup").value;
  let pass = document.querySelector("#passwordSignup").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", pass);
  alert("berhasil daftar");
  sign.classList.remove("feed");
  container.classList.remove("feed");
};

// login
let ambilData = function (event) {
  event.preventDefault();

  let username = document.querySelector("#username").value;
  let pass = document.querySelector("#password").value;
  let url = "index.html";
  let URL = `${url}?user=${username}`;

  if (username === localStorage.getItem("username") && pass === localStorage.getItem("password")) {
    alert("login berhasil");
    setTimeout(function () {
      window.location.replace(URL);
    }, 3000);
  } else {
    alert("username dan password salah");
  }
};
