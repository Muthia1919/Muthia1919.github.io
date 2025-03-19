<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perpustakaan Muthia Sari</title>
    <style>
        /* Basic Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #e3f2fd; /* Biru Langit */
            color: #333; /* Hitam */
        }

        /* Navbar */
        nav {
            background-color: #1e3a8a; /* Navy */
            padding: 15px;
            text-align: center;
            transition: background-color 0.3s;
        }

        nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            display: inline;
            margin: 0 20px;
        }

        nav ul li a {
            color: #fff; /* Putih */
            text-decoration: none;
            font-size: 18px;
            padding: 10px 20px;
            background-color: #1e3a8a; /* Navy */
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        nav ul li a:hover {
            background-color: #3b82f6; /* Biru Langit */
        }

        /* Header */
        header {
            background-color: #1e3a8a; /* Navy */
            color: #fff; /* Putih */
            padding: 50px 0;
            text-align: center;
            opacity: 0; /* Initially hidden for fade-in effect */
            transition: opacity 1s ease-out;
        }

        header h1 {
            font-size: 36px;
            margin-bottom: 10px;
        }

        header p {
            font-size: 18px;
        }

        /* Main Section */
        main {
            padding: 50px;
            text-align: center;
        }

        main h2 {
            color: #1e3a8a; /* Navy */
        }

        main p {
            font-size: 18px;
            line-height: 1.6;
        }

        /* Footer */
        footer {
            background-color: #1e3a8a; /* Navy */
            color: #fff; /* Putih */
            text-align: center;
            padding: 20px;
        }

    </style>
</head>
<body>

    <!-- Navbar -->
    <nav id="navbar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about-me.html">Tentang saya</a></li>
            <li><a href="contact.html">Kontak</a></li>
        </ul>
    </nav>

    <!-- Header Section -->
    <header id="header">
        <h1>Perpustakaan Muthia Sari</h1>
    </header>

    <!-- Main Section -->
    <main>
        <p>Selamat datang di perpustakaan kami. Temukan berbagai koleksi buku untuk mendukung pembelajaran Anda, website ini berkolaborasi dengan perpustakan usu bertujuan untuk meningkatkan layanan informasi, memperluas akses pengetahuan, dan memberikan manfaat yang lebih luas bagi masyarakat.</p>
        <p><a href="https://library.usu.ac.id/" target="_blank">Klik disini untuk mengunjungi Perpustakaan USU</a></p>
    </main>

    <!-- Footer Section -->
    <footer>
        <p>@2025 Perpustakaan Muthia Sari.</p>
    </footer>

    <script>
        // JavaScript untuk animasi header
        window.addEventListener("scroll", function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.style.opacity = 1; // Fade-in ketika scroll
            } else {
                header.style.opacity = 0; // Memudar jika scroll ke atas
            }
        });

        // JavaScript untuk efek warna navbar saat menggulir
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = '#3b82f6'; // Ubah warna navbar saat scroll
            } else {
                navbar.style.backgroundColor = '#1e3a8a'; // Warna awal navbar
            }
        });

        // JavaScript untuk efek transisi saat hover pada navbar
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.transform = 'scale(1.1)'; // Membesar sedikit saat hover
                link.style.transition = 'transform 0.2s ease-in-out'; // Transisi lembut
            });
            link.addEventListener('mouseout', () => {
                link.style.transform = 'scale(1)'; // Kembali ke ukuran normal
            });
        });
    </script>

</body>
</html>
