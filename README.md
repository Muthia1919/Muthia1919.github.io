<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Perpustakaan Muthia Sari</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <style>
        /* CSS goes here */
    </style>
</head>
<body>
    <!-- Header -->
    <div class="medsos">
        <div class="container">
            <ul>
                <li><a href="https://www.instagram.com/tiaa.sari?igsh=MXc2NjBjZWRoemRlbg=="><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.tiktok.com/@muthia.sari?_t=ZS-8unNSeaxcpt&_r=1"><i class="fa-brands fa-tiktok"></i></a></li>
            </ul>
        </div>
    </div>

    <!-- Header Navigation -->
    <header>
        <div class="container">
            <h1><a href="index.html">PERPUSTAKAAN MUTHIA SARI</a></h1>
            <ul>
                <li class="active" onclick="showSlide(0)">HOME</li>
                <li onclick="showSlide(1)">ABOUT ME</li>
                <li onclick="showSlide(2)">CONTACT US</li>
            </ul>
        </div>
    </header>

    <!-- Slides Section -->
    <div class="slides">
        <!-- Home Slide -->
        <section class="slide" id="home">
            <h2>HELLO! SELAMAT DATANG DI PERPUSTAKAAN MUTHIA SARI</h2>
        </section>

        <!-- About Me Slide -->
        <section class="slide" id="about">
            <h3>ABOUT ME</h3>
            <table>
                <tr>
                    <th>Nama</th>
                    <td>Muthia Sari</td>
                </tr>
                <tr>
                    <th>NIM</th>
                    <td>123456789</td>
                </tr>
                <tr>
                    <th>Kelas</th>
                    <td>TI-A</td>
                </tr>
                <tr>
                    <th>Prodi</th>
                    <td>Teknik Informatika</td>
                </tr>
                <tr>
                    <th>Fakultas</th>
                    <td>Fakultas Teknik</td>
                </tr>
            </table>
        </section>

        <!-- Contact Us Slide -->
        <section class="slide" id="contact">
            <h3>CONTACT US</h3>
            <p>Silakan isi form di bawah untuk menghubungi kami. Semua pesan akan dikirimkan langsung ke nomor WhatsApp kami.</p>
            <form action="https://api.whatsapp.com/send?phone=085174147405" method="GET" target="_blank">
                <table>
                    <tr>
                        <td><label for="name">Nama:</label></td>
                        <td><input type="text" id="name" name="name" required></td>
                    </tr>
                    <tr>
                        <td><label for="phone">No HP:</label></td>
                        <td><input type="tel" id="phone" name="phone" required></td>
                    </tr>
                    <tr>
                        <td><label for="email">Email:</label></td>
                        <td><input type="email" id="email" name="email" required></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center;">
                            <button type="submit">Kirim Pesan</button>
                        </td>
                    </tr>
                </table>
            </form>
        </section>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <small>&copy; 2025 - Muthia Sari, all rights reserved.</small>
        </div>
    </footer>

    <script>
        let currentSlide = 0;

        // Function to show a specific slide
        function showSlide(slideIndex) {
            const slides = document.querySelectorAll('.slide');
            slides.forEach((slide, index) => {
                slide.style.display = (index === slideIndex) ? 'block' : 'none';
            });

            const navItems = document.querySelectorAll('header ul li');
            navItems.forEach((item, index) => {
                item.classList.toggle('active', index === slideIndex);
            });
        }

        // Initialize the first slide
        showSlide(currentSlide);
    </script>
</body>
</html>
