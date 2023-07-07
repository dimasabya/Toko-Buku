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

// baner acak
const banner = document.querySelector("#baner-sub");
const imgUrl = `assets/images/baner/baner`;

const acak = Math.floor(Math.random() * 4) + 1;

for (let i = 1; i < 2; i++) {
  const a = document.createElement("a");

  const img = document.createElement("img");
  img.src = `${imgUrl}${acak}.png`;

  banner.appendChild(a);
  a.appendChild(img);
  console.log(acak);
  if (i === 2) {
    break;
  }
}

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
