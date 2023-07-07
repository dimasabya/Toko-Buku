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

// ------------------ ambil data dan tampilkan di halaman ---------------------
// berisi array object untuk dijadikan data buku
const bukuPopuler = [
  {
    id: 1,
    judul: "One Piece",
    pengarang: "Echiro Oda",
    Harga: 20000,
    src: `assets/images/onepiece.png`,
    alt: "gambar 1",
    halaman: 100,
    terbit: "12 Juni 2005",
    penerbit: "Toko Buku",
    isbn: 1987264749,
    bahasa: "Indonesia",
    berat: 0.2,
    lebar: 12,
    panjang: 20,
    deskripsi:
      "One Piece: Petualangan Laut yang Tak Terbatas adalah sebuah buku yang menggambarkan dunia epik dan petualangan yang tak terlupakan dari salah satu manga dan anime paling populer sepanjang masa, yaitu One Piece. Ditulis oleh seorang penggemar setia seri ini, buku ini menghadirkan deskripsi mendalam tentang alur cerita, karakter-karakter yang ikonik, dan dunia yang luas yang dibangun oleh Eiichiro Oda.Dalam buku ini, Anda akan diantar ke dalam petualangan Monkey D. Luffy dan kru bajak laut Topi Jerami dalam mencari harta karun terbesar di dunia, One Piece. Anda akan dibawa ke lautan yang luas, pulau-pulau eksotis, dan bertemu dengan beragam karakter yang kuat dan menarik. Mulai dari Nami, ahli navigator yang cerdas, Zoro, pedang yang lihai, Sanji, koki yang jago bertarung, hingga Kapten Bajak Laut Shanks dan Yonko lainnya, setiap karakter memiliki keunikan dan cerita latar yang menarik.",
  },
  {
    id: 2,
    judul: "Funiculi Funicula",
    pengarang: "Toshikazu Kawaguchi",
    Harga: 10000,
    src: `assets/images/funiculi-funicula.png`,
    alt: "gambar 2",
    halaman: 105,
    terbit: "12 Juni 2022",
    penerbit: "Toko Buku",
    isbn: 19873334749,
    bahasa: "Indonesia",
    berat: 0.25,
    lebar: 12,
    panjang: 20,
    deskripsi:
      "Funiculì, Funiculà: A Journey through Music and Heritage adalah sebuah buku yang mengangkat lagu populer Italia yang ikonik dengan judul yang sama. Buku ini menggali lebih dalam tentang sejarah, kebudayaan, dan makna di balik lagu tersebut. Dalam buku ini, Anda akan dihadapkan pada perjalanan yang memperkenalkan Anda pada asal-usul lagu Funiculì, Funiculà serta perannya dalam warisan budaya Italia. Mulai dari pencipta lagu, Luigi Denza, hingga lirikus Peppino Turco, Anda akan mempelajari tentang kehidupan dan inspirasi di balik karya ini.",
  },
  {
    id: 3,
    judul: "Layangan Putus",
    pengarang: "Eca Prasetya",
    Harga: 15000,
    src: `assets/images/layngan-putus.png`,
    alt: "gambar 3",
    halaman: 115,
    terbit: "12 Oktober 2022",
    penerbit: "Toko Buku",
    isbn: 19873974749,
    bahasa: "Indonesia",
    berat: 0.25,
    lebar: 12,
    panjang: 20,
    deskripsi:
      "Layangan Putus adalah sebuah buku fiksi yang mengeksplorasi kisah penuh ketegangan, perjuangan, dan perjalanan emosional. Buku ini ditulis dengan penuh kecerdasan dan empati untuk membawa para pembaca pada perjalanan yang menggugah dan menginspirasi.Dalam Layangan Putus, kita diperkenalkan pada tokoh utama, Maya, seorang gadis remaja yang mengalami masa-masa sulit dalam hidupnya. Maya telah kehilangan sosok ayahnya yang sangat ia cintai, dan peristiwa tersebut telah mengubah hidupnya secara drastis. Dia merasa putus asa dan hilang arah, mencoba untuk memahami dan menghadapi perasaan-trauma yang berkecamuk di dalamnya.",
  },
  {
    id: 4,
    judul: "SpyxFamily 07",
    pengarang: "Tatsuya Endo",
    Harga: 12000,
    src: `assets/images/spyxfamily.png`,
    alt: "gambar 4",
    halaman: 90,
    terbit: "22 Oktober 2022",
    penerbit: "Toko Buku",
    isbn: 19873125749,
    bahasa: "Indonesia",
    berat: 0.25,
    lebar: 12,
    panjang: 20,
    deskripsi:
      "Spy x Family 07 adalah volume ketujuh dari seri manga populer berjudul Spy x Family. Dalam volume ini, cerita terus berkembang dengan intrik yang menegangkan, aksi seru, dan humor yang khas.Dalam Spy x Family 07, keluarga unik ini, yang terdiri dari agen mata-mata bernama Twilight, pembunuh berbakat bernama Yoruichi, dan gadis kecil berbakat bernama Anya, kembali dengan petualangan baru yang menantang. Mereka dihadapkan pada misi rahasia yang lebih kompleks dan musuh yang lebih berbahaya, sementara tetap menjaga identitas mereka yang sebenarnya.Volume ini mengungkapkan lebih banyak latar belakang karakter-karakter utama, menyelidiki hubungan mereka yang semakin kuat, dan menghadirkan momen-momen emosional yang mendalam. Sambil berusaha menjalankan tugas mereka sebagai keluarga palsu, Twilight, Yoruichi, dan Anya juga harus menghadapi tantangan personal mereka masing-masing.",
  },
  {
    id: 5,
    judul: "Melangkah",
    pengarang: "J.S Khairen",
    Harga: 13000,
    src: `assets/images/melangkah.png`,
    alt: "gambar 5",
    halaman: 95,
    terbit: "22 Juli 2022",
    penerbit: "Toko Buku",
    isbn: 19878725749,
    bahasa: "Indonesia",
    berat: 0.25,
    lebar: 12,
    panjang: 20,
    deskripsi:
      "Novel karya J. S Khairen yang berjudul Melangkah bertemakan tentang petualangan di Indonesia. Tidak hanya itu, cerita dalam novel ini juga mengutamakan kisah pahlawan. Berbeda dari karya-karya yang sebelumnya, di novel ini Khairen memberi sedikit imajinasi yang ia tanamkan. Terdapat 36 episode dan 5 babak.",
  },
  {
    id: 6,
    judul: "Laut Bercerita",
    pengarang: "Leila Chudori",
    Harga: 10500,
    src: `assets/images/laut-bercerita.png`,
    alt: "gambar 6",
    halaman: 100,
    terbit: "10 Juli 2022",
    penerbit: "Toko Buku",
    isbn: 19878266749,
    bahasa: "Indonesia",
    berat: 0.25,
    lebar: 12,
    panjang: 20,
    deskripsi:
      "Laut Bercerita adalah sebuah buku yang memikat yang membawa pembaca dalam perjalanan yang mendalam dan mempesona melalui cerita-cerita yang tersembunyi di lautan yang luas dan misterius.    Dalam buku ini, penulis membawa kita ke dalam dunia lautan yang penuh dengan keindahan dan keajaiban alam. Mulai dari perairan tropis yang berwarna-warni dengan kehidupan laut yang beraneka ragam, hingga samudera yang dalam dan misterius dengan makhluk-makhluk yang langka dan eksotis.Setiap halaman buku ini membawa kita pada petualangan baru yang menakjubkan, menceritakan tentang kehidupan laut yang unik, tantangan yang dihadapi oleh makhluk-makhluk laut, dan kisah-kisah menarik yang terjadi di dalam laut yang luas. Pembaca akan merasakan sentuhan air laut, mendengar suara ombak, dan merasakan keajaiban yang tersembunyi di dalam laut.",
  },
  {
    id: 7,
    judul: "The Midnight Library",
    pengarang: "Matt Haig",
    Harga: 15000,
    src: `assets/images/midnight-library.png`,
    alt: "gambar 7",
  },
  {
    id: 8,
    judul: "Heartbreak Motel",
    pengarang: "Ika Natahsaa",
    Harga: 10000,
    src: `assets/images/heartbreak_mote.png`,
    alt: "gambar 8",
  },
  {
    id: 9,
    judul: "Bumi Manusia",
    pengarang: "Pramoedya Ananta Toer",
    Harga: 20000,
    src: `assets/images/bumi-manusia.png`,
    alt: "gambar 9",
  },
  {
    id: 10,
    judul: "Negeri 5 Menara",
    pengarang: "Ahmad Fuadi",
    Harga: 25000,
    src: `assets/images/negeri-5-menara.png`,
    alt: "gambar 10",
  },
];

// variable penampung dari pemanggilan tag html
const container = document.querySelector(".buku");
const datas = document.querySelector(".data-buku");
const populer = document.querySelector(".buku-pop");
const btn = document.querySelector(".btn-buku");

// mengambil bilai dari sessionStorage
// dan ditampung dalam variable nilai
let nilai = sessionStorage.getItem("nilai");

function book(buku) {
  // buat tag html
  const title = document.createElement("h3");
  const gambar = document.createElement("img");
  const pengarang = document.createElement("p");
  const harga = document.createElement("p");
  const bukuBorder = document.createElement("div");
  const svg = `wave.svg`;

  bukuBorder.classList.add("buku-border");

  // vadilasi data dari id buku
  if (buku.id == 1) {
    container.style.backgroundImage = `url("assets/images/onepiece.png")`;
    datas.style.backgroundColor = "#E8AA42";
    populer.style.backgroundColor = "#E8AA42";
    populer.style.color = "white";
  } else if (buku.id == 2) {
    container.style.backgroundImage = `url("assets/images/funiculi-funicula.png")`;
    datas.style.backgroundColor = "#47A992";
    populer.style.backgroundColor = "#47A992";
    populer.style.color = "white";
  } else if (buku.id == 3) {
    container.style.backgroundImage = `url("assets/images/layngan-putus.png")`;
    datas.style.backgroundColor = "#47A992";
    populer.style.backgroundColor = "#47A992";
    populer.style.color = "white";
  } else if (buku.id == 4) {
    container.style.backgroundImage = `url("assets/images/spyxfamily.png")`;
    datas.style.backgroundColor = "#47A992";
    populer.style.backgroundColor = "#47A992";
    populer.style.color = "white";
  } else if (buku.id == 5) {
    container.style.backgroundImage = `url("assets/images/melangkah.png")`;
    datas.style.backgroundColor = "#321E1E";
    populer.style.backgroundColor = "#321E1E";
    populer.style.color = "white";
    title.style.color = "white";
    pengarang.style.color = "white";
    harga.style.color = "white";
  } else if (buku.id == 6) {
    container.style.backgroundImage = `url("assets/images/laut-bercerita.png")`;
    datas.style.backgroundColor = "#00C4FF";
    populer.style.backgroundColor = "#00C4FF";
    populer.style.color = "white";
  }

  // menambahkan class pada tag html
  gambar.classList.add("img-op");
  title.classList.add("title");
  pengarang.classList.add("sub-title");
  harga.classList.add("sub-title");

  // menambahkan data dan attribut pad tag
  title.innerHTML = buku.judul;
  gambar.src = buku.src;
  gambar.alt = buku.alt;
  pengarang.innerHTML = `Penulis: ${buku.pengarang}`;
  harga.innerHTML = `Harga: ${buku.Harga}`;

  // menambahkan tag pada parent dengan input awal
  datas.prepend(bukuBorder);
  bukuBorder.style.backgroundImage = svg;

  bukuBorder.prepend(harga);
  bukuBorder.prepend(pengarang);
  bukuBorder.prepend(title);
  bukuBorder.prepend(gambar);
}

// function untuk menampilkan semua buku
function allBuku() {
  datas.classList.add("books");
  container.style.backgroundColor = "#BFACE2";
  datas.style.backgroundColor = "#BFACE2";
  // datas.classList.remove("data-buku");
  bukuPopuler.forEach((buku) => {
    const conBook = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const pengarang = document.createElement("p");
    const harga = document.createElement("p");
    const buy = document.createElement("button");

    datas.appendChild(conBook);
    img.classList.add("img-all");

    img.src = buku.src;
    title.innerHTML = buku.judul;
    pengarang.innerHTML = buku.pengarang;
    harga.innerHTML = buku.Harga;
    buy.innerHTML = "BUY";

    conBook.appendChild(img);
    conBook.appendChild(title);
    conBook.appendChild(pengarang);
    conBook.appendChild(harga);
    conBook.appendChild(buy);
  });
}

// function untuk user ketika mengkilik beli dan akan muncul halaman baru
// berisi buku yang dipilih sesuai keinginan user
const beli = function (buku) {
  let deskripsi = `
  <h3>${buku.pengarang}</h3>
  <h2 style="margin: 1rem auto 3rem ">${buku.judul}</h2>
  <ul style="display:flex; justify-content:space-evenly; align-item:center;  text-decoration: none; list-style: none;
              ">
      <li><a href="#format">Pilih Format Buku</a></li>
      <li><a href="#deskripsi">Deskripsi Buku</a></li>
      <li><a href="#detail">Detail Buku</a></li>
  </ul>
  <hr>
  <div style="margin: 2rem 0;" id="format">
      <h3>Pilih Format Buku Yang Tersedia</h3>
      <span style="display:block; margin: 1rem 0; border: 1px solid black; width: 10rem; line-height: 1.5rem;
                     text-align: center; padding: .5rem; border-radius: 10px">
          <h4 style="font-weight: 600">Soft Cover</h4>
          <p style="font-size: 15px;">mulai dari</p>
          <p>Rp. ${buku.Harga}</p>
          <button class="order" onclick="order()">BUY</button>
      </span>
  </div>
  <div style="margin: 5rem 0" id="deskripsi">
      <h3 style="margin: 1rem auto">Deskripsi Buku</h3>
      <p>${buku.deskripsi}</p>
  </div>
  <div id="detail">
    <h3 style="margin: 1rem 0">Detail</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:10px">
    <span>
    <p>Jumlah Halaman</p>
    <p>${buku.halaman}</p>
    </span>
    <span>
    <p>Tanggal Terbit</p>
    <p>${buku.terbit}</p>
    </span>
    <span>
    <p>ISBN</p>
    <p>${buku.isbn}</p>
    </span>
    <span>
    <p>Bahasa</p>
    <p>${buku.bahasa}</p>
    </span>
    <span>
    <p>Penerbit</p>
    <p>${buku.penerbit}</p>
    </span>
    <span>
    <p>Berat</p>
    <p>${buku.berat} kg</p>
    </span>
    <span>
    <p>Lebar</p>
    <p>${buku.lebar} cm</p>
    </span>
    <span>
    <p>Panjang</p>
    <p>${buku.panjang} cm</p>
    </span>
    </div>
  </div>`;

  btn.addEventListener("click", function () {
    container.classList.add("remove");

    const desk = document.querySelector(".desk");
    let beliCont = document.createElement("div");
    let section = document.createElement("div");
    let content = document.createElement("div");
    let img = document.createElement("img");

    beliCont.classList.add("buying");
    section.classList.add("section-buy");
    content.classList.add("content-buy");
    content.innerHTML = deskripsi;

    img.src = buku.src;

    desk.appendChild(beliCont);
    beliCont.append(section);
    beliCont.append(content);
    section.prepend(img);
  });
};

// function pengecekan saat akan membeli apakah sudah login atau belum
const order = function () {
  if (!localStorage.getItem("username")) {
    alert("Silahkan Login Lebih Dulu");
    window.location.href = `login.html`;
  } else {
    alert("Anda membeli buku ini");
  }
};

// function untuk melihat paramter yang dikirim dari user
setTimeout(function () {
  if (nilai == "all") {
    btn.remove();
    allBuku();
  } else {
    bukuPopuler.map((buku) => {
      if (buku.id == nilai) {
        book(buku);
        beli(buku);
      }
      // } else if (buku.id == nilai) {
      //   book(buku);
      // } else if (buku.id == nilai) {
      //   book(buku);
      // } else if (buku.id == nilai) {
      //   book(buku);
      // } else if (buku.id == nilai) {
      //   book(buku);
      // } else if (buku.id == nilai) {
      //   book(buku);
      // }
    });
  }
}, 1000);

// menghapus nilai dari storage saat pindah halaman ataupun refresh
// function removeSesiosstorage() {
//   sessionStorage.removeItem("nilai");
// }

// window.addEventListener("beforeunload", removeSesiosstorage);

//  pengecekan sudah login

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
    log.href = "login.html";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});
