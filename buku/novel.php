<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novel</title>
    <link rel="stylesheet" href="css/novel.css">
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
</head>

<body>
    <div class="navigasi">
        <div class="nav">
            <ul>
                <li><a href="../about.html">About</a></li>
                <li><a href="../contact.php">Contact</a></li>
                <li><a href="../service.html">Service</a></li>
            </ul>
        </div>
        <div class="navbar">
            <div class="logo">
                <a href="../index.html"><img class="l-buku" src="../assets/images/buku.png" alt=""></a>
                <h2 style="font-family: 'Lobster', cursive;">Toko Buku</h2>
            </div>
            <div class="pilihan">
                <h3>Kategory</h3>
                <input class="drop-check" id="drop-check" type="checkbox" name="" id="">
                <img class="drop" src="../assets/images/dropdown.png" alt="">
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
                <li><a href="#">Novel</a></li>
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

    <div id="novel" class="novel" style="display: block; text-align: center;">
        <table class="t-novel" border="2px" style="border: 1px solid red; margin: auto;">
            <thead>
                <tr>
                    <th colspan="3">NOVEL</th>
                </tr>
                <tr>
                    <th style="width: 20rem;">Judul</th>
                    <th style="width: 20rem;">Harga</th>
                    <th style="width: 20rem;">Beli</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Harry Potter</td>
                    <td>Rp. 75.000</td>
                    <td><button id="novel-satu" value="1">Buy</button></td>
                </tr>
                <tr>
                    <td>Layangan Putus</td>
                    <td>Rp. 45.000</td>
                    <td><button id="novel-dua" value="2">Buy</button></td>
                </tr>
                <tr>
                    <td>Majnun</td>
                    <td>Rp. 20.000</td>
                    <td><button onclick="dd(value)" id="novel-tiga" value="3" name="tiga">Buy</button></td>
                </tr>
                <tr>
                    <td>I Think I Love You</td>
                    <td>Rp. 25.000</td>
                    <td><button onclick="dd(value)" id="novel-empat" value="4">Buy</button></td>
                </tr>
                <tr>
                    <td>172 Days</td>
                    <td>Rp. 15.000</td>
                    <td><button onclick="dd(value)" id="novel-lima" value="5">Buy</button></td>
                </tr>
                <tr>
                    <td>Funiculi Funicula</td>
                    <td>Rp. 35.000</td>
                    <td><button onclick="dd(value)" id="novel-enam" value="6">Buy</button></td>
                </tr>
                <tr>
                    <td>Terpikat </td>
                    <td>Rp. 10.000</td>
                    <td><button onclick="dd(value)" id="novel-tujuh" value="7">Buy</button></td>
                </tr>
                <tr>
                    <td>Oh My Savior </td>
                    <td>Rp. 12.500</td>
                    <td><button onclick="dd(value)" id="novel-delapan" value="8">Buy</button></td>
                </tr>
                <tr>
                    <td>Heartbreak Motel</td>
                    <td>Rp. 22.500</td>
                    <td><button onclick="dd(value)" id="novel-sembilan" value="9">Buy</button></td>
                </tr>
                <tr>
                    <td>The Midnight Library</td>
                    <td>Rp. 21.500</td>
                    <td><button onclick="dd(value)" id="novel-sepuluh" value="10">Buy</button></td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="beli">
        <h5>Keranjang Buku</h5><hr>
        <form action="" method="post" id="pembelian">
            <p>Nama: <input type="text" name="nama" id="nama" placeholder="nama"></p> <hr>
            <p>Alamat: <input type="text" name="alamat" id="alamat" placeholder="Alamat"></p><hr>
            <p>No Hp: <input type="text" name="nohp" id="nohp" placeholder="no Hp"></p><hr>
            <p>Jumlah: <input type="number" name="number" id="number"
                    placeholder="jumlah buku"></p><hr>
            <p>Total: <span id="total">0</span></p>
            <button style="margin: .5rem 0;" id="btn" onclick="pilih()">BUY</button>
        </form>
    </div>






    <div class="footer">
        <div class="footer-menu">
            <ul>
                <li>
                    <h3>Produk</h3>
                    <a href="">abc</a>
                    <a href="">abc</a>
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
                    <a href="#"><img class="f-logo" src="../assets/images/buku.png" alt=""></a>
                    <h2 style="font-family: 'Lobster', cursive;">Toko Buku</h2>
                </div>
                <div class="footer-cat">
                    <h2 style="font-size: 1.2rem;">Toko buku online terbesar, terlengkap dan terpercaya di Indonesia
                    </h2>
                </div>
                <div class="footer-somed">
                    <a href=""><img class="s-logo" src="../assets/images/ig.png" alt=""></a>
                    <a href=""><img class="s-logo" src="../assets/images/fb.png" alt=""></a>
                    <a href=""><img class="s-logo" src="../assets/images/tiktok.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <h3>© 2023 PT. Toko Buku</h3>
        </div>
    </div>

    <script>
        feather.replace()
    </script>
    <script src="js/novel.js"></script>
</body>

</html>