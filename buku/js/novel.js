// dropdown menu
const drop_cat = document.querySelector(".kategory ");

document.querySelector(".drop-check").onclick = () => {
  drop_cat.classList.toggle("slide");
  // if (drop_cat.classList == "slide") {
  //   const scrollTop =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;
  //   const offset = 150;

  //   // Set posisi container kategori sesuai dengan posisi scroll saat ini
  //   drop_cat.style.top = `${scrollTop + offset}px`;
  // }
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

// pengambilan data dari table novel

const novelSatu = document.querySelector("#novel-satu");
const novelDua = document.querySelector("#novel-dua");
const novelTiga = document.querySelector("#novel-tiga");

const beli = document.querySelector(".beli");
const btn = document.querySelector("#pembelian");
const container = document.querySelector("#novel");
const pembelian = document.querySelector("#pembelian");
const tag = document.createElement("h4");

const novel = [
  {
    id: 1,
    judul: "Harry Potter",
    harga: 75000,
  },
  {
    id: 2,
    judul: "Layangan Putus",
    harga: 45000,
  },
  {
    id: 3,
    judul: "Majnun",
    harga: 20000,
  },
  {
    id: 4,
    judul: "I Think I Love You",
    harga: 25000,
  },
  {
    id: 5,
    judul: "172 Days",
    harga: 15000,
  },
  {
    id: 6,
    judul: "Funiculi Funicula",
    harga: 35000,
  },
  {
    id: 7,
    judul: "Terpikat ",
    harga: 10000,
  },
  {
    id: 8,
    judul: "Oh My Savior ",
    harga: 12500,
  },
  {
    id: 9,
    judul: "Heartbreak Motel",
    harga: 22500,
  },
  {
    id: 10,
    judul: "The Midnight Library",
    harga: 21500,
  },
];

//
novelSatu.addEventListener("click", function () {
  const num = document.querySelector("#number");
  const total = document.querySelector("#total");
  const nilai = novelSatu.value;
  beli.classList.add("keranjang");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const offset = 150;

  // Set posisi container kategori sesuai dengan posisi scroll saat ini
  beli.style.top = `${scrollTop + offset}px`;

  if (!tag) {
    return false;
  } else {
    novel.map((novel) => {
      if (novel.id == nilai) {
        tag.innerHTML = novel.judul;

        pembelian.prepend(tag);

        num.addEventListener("change", function () {
          let hasil = novel.harga * num.value;

          total.innerHTML = hasil;
        });
      }
    });
  }
});

novelDua.addEventListener("click", function () {
  const num = document.querySelector("#number");
  const total = document.querySelector("#total");
  const nilai = novelDua.value;
  beli.classList.add("keranjang");

  // beli.scrollIntoView({ behavior: "smooth" });
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const offset = 150;

  // Set posisi container kategori sesuai dengan posisi scroll saat ini
  beli.style.top = `${scrollTop + offset}px`;

  if (!tag) {
    return false;
  } else {
    novel.map((novel) => {
      if (novel.id == nilai) {
        tag.innerHTML = novel.judul;

        pembelian.prepend(tag);

        num.addEventListener("change", function () {
          let hasil = novel.harga * num.value;

          total.innerHTML = hasil;
        });
      }
    });
  }
});

document.addEventListener("click", function (e) {
  if (!beli.contains(e.target) & !container.contains(e.target)) {
    beli.classList.remove("keranjang");
    pembelian.removeChild(tag);
  }
});

function dd(a) {
  const num = document.querySelector("#number");
  const total = document.querySelector("#total");

  if (a == 3) {
    beli.classList.add("keranjang");

    // beli.scrollIntoView({ behavior: "smooth" });
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const offset = 150;

    // Set posisi container kategori sesuai dengan posisi scroll saat ini
    beli.style.top = `${scrollTop + offset}px`;
    if (!tag) {
      return false;
    } else {
      novel.map((novel) => {
        if (novel.id == a) {
          tag.innerHTML = novel.judul;

          pembelian.prepend(tag);

          num.addEventListener("change", function () {
            let hasil = novel.harga * num.value;

            total.innerHTML = hasil;
          });
        }
      });
    }
  } else if (a == 4) {
    beli.classList.add("keranjang");

    // beli.scrollIntoView({ behavior: "smooth" });
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const offset = 150;

    // Set posisi container kategori sesuai dengan posisi scroll saat ini
    beli.style.top = `${scrollTop + offset}px`;
    if (!tag) {
      return false;
    } else {
      novel.map((novel) => {
        if (novel.id == a) {
          tag.innerHTML = novel.judul;

          pembelian.prepend(tag);

          num.addEventListener("change", function () {
            let hasil = novel.harga * num.value;

            total.innerHTML = hasil;
          });
        }
      });
    }
  } else if (a == 5) {
    beli.classList.add("keranjang");

    // beli.scrollIntoView({ behavior: "smooth" });
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const offset = 150;

    // Set posisi container kategori sesuai dengan posisi scroll saat ini
    beli.style.top = `${scrollTop + offset}px`;
    if (!tag) {
      return false;
    } else {
      novel.map((novel) => {
        if (novel.id == a) {
          tag.innerHTML = novel.judul;

          pembelian.prepend(tag);

          num.addEventListener("change", function () {
            let hasil = novel.harga * num.value;

            total.innerHTML = hasil;
          });
        }
      });
    }
  } else if (a == 6) {
    beli.classList.add("keranjang");

    // beli.scrollIntoView({ behavior: "smooth" });
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const offset = 150;

    // Set posisi container kategori sesuai dengan posisi scroll saat ini
    beli.style.top = `${scrollTop + offset}px`;
    if (!tag) {
      return false;
    } else {
      novel.map((novel) => {
        if (novel.id == a) {
          tag.innerHTML = novel.judul;

          pembelian.prepend(tag);

          num.addEventListener("change", function () {
            let hasil = novel.harga * num.value;

            total.innerHTML = hasil;
          });
        }
      });
    }
  } else if (a == 7) {
    beli.classList.add("keranjang");

    // beli.scrollIntoView({ behavior: "smooth" });
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const offset = 150;

    // Set posisi container kategori sesuai dengan posisi scroll saat ini
    beli.style.top = `${scrollTop + offset}px`;
    if (!tag) {
      return false;
    } else {
      novel.map((novel) => {
        if (novel.id == a) {
          tag.innerHTML = novel.judul;

          pembelian.prepend(tag);

          num.addEventListener("change", function () {
            let hasil = novel.harga * num.value;

            total.innerHTML = hasil;
          });
        }
      });
    }
  } else if (a == 8) {
    beli.classList.add("keranjang");

    // beli.scrollIntoView({ behavior: "smooth" });
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const offset = 150;

    // Set posisi container kategori sesuai dengan posisi scroll saat ini
    beli.style.top = `${scrollTop + offset}px`;
    if (!tag) {
      return false;
    } else {
      novel.map((novel) => {
        if (novel.id == a) {
          tag.innerHTML = novel.judul;

          pembelian.prepend(tag);

          num.addEventListener("change", function () {
            let hasil = novel.harga * num.value;

            total.innerHTML = hasil;
          });
        }
      });
    }
  } else if (a == 9) {
    beli.classList.add("keranjang");

    // beli.scrollIntoView({ behavior: "smooth" });
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const offset = 150;

    // Set posisi container kategori sesuai dengan posisi scroll saat ini
    beli.style.top = `${scrollTop + offset}px`;
    if (!tag) {
      return false;
    } else {
      novel.map((novel) => {
        if (novel.id == a) {
          tag.innerHTML = novel.judul;

          pembelian.prepend(tag);

          num.addEventListener("change", function () {
            let hasil = novel.harga * num.value;

            total.innerHTML = hasil;
          });
        }
      });
    }
  } else if (a == 10) {
    beli.classList.add("keranjang");

    // beli.scrollIntoView({ behavior: "smooth" });
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const offset = 150;

    // Set posisi container kategori sesuai dengan posisi scroll saat ini
    beli.style.top = `${scrollTop + offset}px`;
    if (!tag) {
      return false;
    } else {
      novel.map((novel) => {
        if (novel.id == a) {
          tag.innerHTML = novel.judul;

          pembelian.prepend(tag);

          num.addEventListener("change", function () {
            let hasil = novel.harga * num.value;

            total.innerHTML = hasil;
          });
        }
      });
    }
  }
}

// beli
function pilih() {
  // event.preventDefault();
  alert("Anda membeli buku ini");
}

//
// merubah tampilan dari login
const log = document.querySelector("#login");

if (!localStorage.getItem("username")) {
  log.innerHTML = "Masuk";
} else {
  log.innerHTML = "Keluar";
}

// function untuk ketika belum login akan diarahkan ke halaman login
// dan funtion untuk menghapus atau ketika user keluar maka
// data akan terhapus dari localstorage
log.addEventListener("click", function () {
  if (!localStorage.getItem("username")) {
    log.href = "../login.html";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});
