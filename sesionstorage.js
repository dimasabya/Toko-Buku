function data(nilai) {
  // menyimpan nilai/ value ke seisonstorage
  sessionStorage.setItem("nilai", nilai);

  // mengambil nilai unutk menjadikan paramter ke url
  let url = `populer.html`;
  let param = "?nilai=" + nilai;

  // menggabungkan
  let newUrl = url + param;

  window.location.href = newUrl;
}
