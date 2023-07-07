// dropdown menu
const drop_cat = document.querySelector(".kategory ");

document.querySelector(".drop-check").onclick = () => {
  drop_cat.classList.toggle("slide");
  drop_cat.scrollIntoView({ behavior: "smooth" });
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

// service
const [satu, dua, tiga, empat, lima] =
  document.querySelectorAll(".bintang span");

satu.addEventListener("click", function () {
  satu.classList.toggle("colorStar");

  dua.classList.remove("colorStar");
  tiga.classList.remove("colorStar");
  empat.classList.remove("colorStar");
  lima.classList.remove("colorStar");
});
dua.addEventListener("click", function () {
  satu.classList.add("colorStar");
  dua.classList.toggle("colorStar");

  tiga.classList.remove("colorStar");
  empat.classList.remove("colorStar");
  lima.classList.remove("colorStar");
});
tiga.addEventListener("click", function () {
  satu.classList.add("colorStar");
  dua.classList.add("colorStar");
  tiga.classList.toggle("colorStar");

  empat.classList.remove("colorStar");
  lima.classList.remove("colorStar");
});
empat.addEventListener("click", function () {
  satu.classList.add("colorStar");
  dua.classList.add("colorStar");
  tiga.classList.add("colorStar");
  empat.classList.toggle("colorStar");

  lima.classList.remove("colorStar");
});
lima.addEventListener("click", function () {
  satu.classList.add("colorStar");
  dua.classList.add("colorStar");
  tiga.classList.add("colorStar");
  empat.classList.add("colorStar");
  lima.classList.toggle("colorStar");
});

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
