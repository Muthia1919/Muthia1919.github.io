<!DOCTYPE html>

<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-sacale=1.0">
    <title>Perpustakaan Muthia Sari</title>
</head>
<body>
    <nav>
        <div class="wraper">
            <div class="logo"><a href=''>Perpustakaan Muthia Sari</a></div>
            <div class="menu">
                <ul>
                    <li><a href="home">home</a></li>
                    <li><a href="about us">about us</a></li>
                    <li><a href="contact us">contact us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div> class='wrapper">
        <!--untuk home-->
        <section id="home">
            <img src="https://www.freepik.com/free-vector/people-library-flat-vector-illustration_9176169.htm#fromView=search&page=1&position=13&uuid=e163468b-33db-424b-a232-c1790643f0ac&query=perpustakaan"/>
            <div class="kolom">
                <h2> HELLO! Selamat Datang di Perpsuatakaan Muthia Sari </h2>
                <p class="deskripsi"> website ini dibuat untuk memenuhi tugas mata kuliah PENGEMBANGAN WEB PERPUSTAKAAN. Website ini memiliki koleksi tugas kuliah dan informasi katalog buku yang menarik </p> 
                <p>website ini dikelola dengan dukungan dan kerja sama dari pihak lain. Kolaborasi ini bertujuan untuk meningkatkan layanan informasi, memperluas akses pengetahuan, dan memberikan manfaat yang lebih luas bagi masyarakat</p>
        </section>

        <section id="about us"
            <div class="kolom">
                <h2>informasi pribadi</h2>
                <table>
                    <tr><th>Nama</th><td>Muthia Sari</td></tr>
                    <tr><th>NIM</th><td>220709002</td></tr>
                    <tr><th>Program Studi</th><td>Perpustakaan dan Sains Informasi</td></tr>
                    <tr><th>Fakultas</th><td>Ilmu Budaya</td></tr>
                    <tr><th>Universitas</th><td>Universitas Sumatra Utara</td></tr>
                </table>
            </div>
        </section>

        <section id="contact us"
            <div></section>class="kolom">
                <h2>Silahkan memberi masukan atau mengirim pesan!</h2>
                <form action=""method="POST">
                    <table>
                        <tr>
                            <td><label for="name">Nama:</label></td>
                            <td><input type="text" id="name" name="name" required></td>
                        </tr>
                        <tr>
                            <td><label for="phone">No HP:</label></td>
                            <td><input type="number" id="phone" name="phone" required></td>
                        </tr>
                        <tr>
                            <td><label for="email">Email:</label></td>
                            <td><input type="email" id="email" name="email" required></td>
                        </tr>
                        <tr>
                            <td><label for="message">Pesan:</label></td>
                            <td><textarea id="message" name="message" rows="4" required></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center;"><button type="submit">Kirim</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        </section>

        <section id="pendaftaran anggota"
            <div cllas="container"
                <p>Silakan isi formulir di bawah ini untuk mendaftar sebagai pengguna baru</p>
                <h2>Selamat bergabung!</h2>
                <p>Pastikan data yang Anda masukkan akurat dan lengkap untuk kemudahan verifikasi</p>
                <form action="/submit" method="post">
                    <form action=""method="POST">
                        <table>
                            <tr>
                                <td><label for="name">Nama:</label></td>
                                <td><input type="text" id="name" name="name" required></td>
                            </tr>
                            <tr>
                                <td><label for="address">Alamat:</label></td>
                                <td><input type="text" id="address" name="address" required></td>
                            </tr>
                            <tr>
                                <td><label for="email">Email:</label></td>
                                <td><input type="email" id="email" name="email" required></td>
                            </tr>
                            <tr>
                                <td><label for="phone">No HP:</label></td>
                                <td><input type="tel" id="phone" name="phone" required></td>
                            </tr>
                            <tr>
                                <td><label for="dob">Tanggal Lahir:</label></td>
                                <td><input type="date" id="dob" name="dob" required></td>
                            </tr>
                            <tr>
                                <td colspan="2" style="text-align: center;"><button type="submit">Daftar</button></td>
                            </tr>
                        </table>
                    </form> 
        </section>

</body>
<html>
