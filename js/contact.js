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

fetch("data/contact.json")
  .then((res) => res.json())
  .then((datas) => {
    let table = "";
    datas.forEach((data) => {
      console.log(data);
      table += `<div class="contact">
      <div class="content-satu">
          <img src="${data.url}" alt="" class="satu-img">
      </div>
      <div class="content-dua" style="text-align: center;">
          <h3>${data.nama}</h3><br/>
          <p>12220750</p>
          <p style="margin: .5rem 0 .5rem 0; font-size: 13px">Senior Developer dan FRONT-END</p>
          <hr>
      </div>
      <div class="content-tiga" style="text-align: center; padding: .5rem;">
          <a href="#" style="margin-right: 1rem;"><img src="assets/images/contact/whatsapp.png" alt=""
                  style=" width: 25px; height: 25px;"></a>
          <a href="#" style=""><img src="assets/images/contact/ig.png" alt=""
                  style=" width: 25px; height: 25px;"></a>
      </div>
    </div>`;
      document.querySelector(".container").innerHTML = table;
    });
    console.log(table);
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
