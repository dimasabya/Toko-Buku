// dropdown menu
const drop_cat = document.querySelector(".kategory ");

document.querySelector(".drop-check").onclick = () => {
  drop_cat.classList.toggle("slide");
};

// drop.addEventListener("click", function () {
//   drop_cat.classList.toggle("slide");
// });

const drop = document.querySelector("#drop-check");
document.addEventListener("click", function (e) {
  if (!drop.contains(e.target) && !drop_cat.contains(e.target)) {
    drop_cat.classList.remove("slide");
  }
});

// abouts

const h4 = document.querySelector(".title-abouts");
const i = document.querySelector("#up");
const span = document.querySelector(".content-satu");
const spanDua = document.querySelector(".content-dua");
const spanTiga = document.querySelector(".content-tiga");
const spanEmpat = document.querySelector(".content-empat");
const spanLima = document.querySelector(".content-lima");

// document.querySelector(".check").addEventListener("click", function () {
//   i.classList.toggle("up");
//   console.log("oke");
// });

// document.querySelector(".check").addEventListener("click", function () {
//   span.classList.toggle("show");
//   console.log("oke");
// });
// document.querySelector(".check-dua").addEventListener("click", function () {
//   spanDua.classList.toggle("show");
//   console.log("oke");
// });
// document.querySelector(".check-tiga").addEventListener("click", function () {
//   spanTiga.classList.toggle("show");
//   console.log("oke");
// });
// document.querySelector(".check-empat").addEventListener("click", function () {
//   spanEmpat.classList.toggle("show");
//   console.log("oke");
// });
// document.querySelector(".check-lima").addEventListener("click", function () {
//   spanLima.classList.toggle("show");
//   console.log("oke");
// });

// function inp(arrow) {
//   document.querySelector(".check").addEventListener("click", function () {
//     i.classList.toggle(`${arrow}`);
//   });
// }

// function show(span) {
//   document.querySelector(".check").addEventListener("click", function () {
//     span.classList.toggle("show");
//     console.log(span);
//     console.log("oke");
//   });
// }

//  pengecekan sudah login

const log = document.querySelector("#login");

if (!localStorage.getItem("username")) {
  log.innerHTML = "Masuk";
} else {
  log.innerHTML = "Keluar";
}

log.addEventListener("click", function () {
  if (!localStorage.getItem("username")) {
    log.href = "login.html";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});
