<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perpustakaan Muthia Sari</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <!-- Navbar -->
        <nav>
            <ul>
                <li><a href="#" onclick="showSlide('home')">Home</a></li>
                <li><a href="#" onclick="showSlide('about')">About Me</a></li>
                <li><a href="#" onclick="showSlide('contact')">Contact Us</a></li>
            </ul>
        </nav>

        <!-- Slide 1 - Home -->
        <section id="home" class="slide">
            <div class="content">
                <h1>Perpustakaan Muthia Sari</h1>
                <p>Selamat datang di perpustakaan Muthia Sari. Kami menyediakan berbagai koleksi buku untuk mendukung proses belajar mengajar. <a href="https://library.usu.ac.id/" target="_blank">Kunjungi Perpustakaan USU</a> untuk informasi lebih lanjut.</p>
            </div>
        </section>

        <!-- Slide 2 - About Me -->
        <section id="about" class="slide">
            <div class="content">
                <h2>About Me</h2>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>NIM</th>
                        <th>Prodi</th>
                        <th>Fakultas</th>
                    </tr>
                    <tr>
                        <td>Muthia Sari</td>
                        <td>123456789</td>
                        <td>Ilmu Komputer</td>
                        <td>Fakultas Teknik</td>
                    </tr>
                </table>
            </div>
        </section>

        <!-- Slide 3 - Contact Us -->
        <section id="contact" class="slide">
            <div class="content">
                <h2>Contact Us</h2>
                <form>
                    <label for="name">Nama:</label>
                    <input type="text" id="name" name="name" required><br><br>

                    <label for="phone">No HP:</label>
                    <input type="tel" id="phone" name="phone" required><br><br>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br><br>

                    <label for="message">Pesan:</label><br>
                    <textarea id="message" name="message" rows="4" required></textarea><br><br>

                    <input type="submit" value="Kirim Pesan">
                </form>
            </div>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>
