<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contact</title>
    <link rel="stylesheet" href="css/contact.css">
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
</head>

<body>
    <div class="navigasi">
        <div class="nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="service.html">Service</a></li>
            </ul>
        </div>
        <div class="navbar">
            <div class="logo">
                <a href="index.html"><img class="l-buku" src="assets/images/buku.png" alt=""></a>
                <h2 style="font-family: 'Lobster', cursive;">Toko Buku</h2>
            </div>
            <div class="pilihan">
                <h3>Kategory</h3>
                <input class="drop-check" id="drop-check" type="checkbox" name="" id="">
                <img class="drop" src="assets/images/dropdown.png" alt="">
            </div>

            <div class="cari">
                <input type="search" name="" id="" placeholder="Search"><button>Cari</button>
            </div>
            <a class="nav-log" href="" id="login"></a>
            <a href="#"><img src="" alt=""></a>
        </div>
    </div>
    <div class="kategory ">
        <div class="sub-kategory cf">
            <ul>
                <li><a href="">Matematika</a></li>
                <li><a href="">Sejarah</a></li>
                <li><a href="">Islam</a></li>
                <li><a href="">Budaya</a></li>
                <li><a href="">Komik</a></li>
                <li><a href="buku/novel.php">Novel</a></li>
            </ul>
            <ul class="kat">
                <li><a href="">Gaya Hidup</a></li>
                <li><a href="">Komputer & Teknologi</a></li>
                <li><a href="">Kimia</a></li>
                <li><a href="">Masak</a></li>
                <li><a href="">Islam</a></li>
                <li><a href="">Hukum</a></li>
            </ul>
        </div>
    </div>

    <H2 style="background-color: black; color: white; text-align: center;">Contact Kami</H2>
    <div class="container">
        <!-- Data contact diambil langsung dari data/contact.json, dan dipanggil dengan api lewat javasript -->
    </div>

    <div class="contact-form">
        <h2 style="margin:1rem 0">Kritik & Saran</h2>
        <form action="#" method="POST">
            <div class="form-group">
                <label for="name">Nama:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Pesan:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit">Kirim</button>
            </div>
        </form>
    </div>

    <?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $pesan = $_POST['message'];

  // Buat string data pesan
  $data = "Nama: $name\nEmail: $email\nPesan: $pesan\n\n";

  // Simpan data pesan ke file teks
  $file = 'data/pesan.txt';
  file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

  echo "<script>";
  echo "window.onload = function() {";
  echo "  alert('Terimakasih $name telah mengisi pesan');";
  echo "}";
  echo "</script>";
}
?>


    <?php
$file = 'data/pesan.txt';

if (file_exists($file)) {
  echo "<h2>Pesan</h2>";
  $content = file_get_contents($file);
  $messages = explode("\n\n", $content);

  $a =1;
  $totalMessages = count($messages);
  $totalMessages -= $a;
  echo "<p>Total Pesan: $totalMessages</p>";

  foreach ($messages as $message) {
    echo "<div class='comment-box'>";
    echo "<div class='comment-content'>";
    echo nl2br($message); // Menampilkan pesan dengan menjaga baris baru
    echo "</div>";
    echo "</div>";
  }
} else {
  echo "<p>Tidak ada pesan kontak yang dikirim.</p>";
}
?>

    <div class="footer">
        <div class="footer-menu">
            <ul>
                <li>
                    <h3>Produk</h3>
                    <a href="">Novel</a>
                    <a href="">Teknologi</a>
                </li>
                <li>
                    <h3>Belanja</h3>
                    <a href="">Belanja</a>
                    <a href="">Pembayaran</a>
                    <a href="">Pengiriman</a>
                </li>
                <li>
                    <h3>Tentang Toko Buku</h3>
                    <a href="">Tentang Kami</a>
                    <a href="">Toko Kami</a>
                </li>
                <li>
                    <h3>Lainnya</h3>
                    <a href="">Syarat dan Ketentuan</a>
                    <a href="">Kebijakan & Privasi</a>
                    <a href="">Bantuan</a>
                    <a href="">Hubungi Kami</a>
                </li>
            </ul>
            <div class="footer-item">
                <div class="footer-logo">
                    <a href="#"><img class="f-logo" src="assets/images/buku.png" alt=""></a>
                    <h2 style="font-family: 'Lobster', cursive;">Toko Buku</h2>
                </div>
                <div class="footer-cat">
                    <h2 style="font-size: 1.2rem;">Toko buku online terbesar, terlengkap dan terpercaya di Indonesia
                    </h2>
                </div>
                <div class="footer-somed">
                    <a href=""><img class="s-logo" src="assets/images/ig.png" alt=""></a>
                    <a href=""><img class="s-logo" src="assets/images/fb.png" alt=""></a>
                    <a href=""><img class="s-logo" src="assets/images/tiktok.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <h3>© 2023 PT. Toko Buku</h3>
        </div>
    </div>

    <script>feather.replace()</script>
    <script src="js/contact.js"></script>
</body>

</html>