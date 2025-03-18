/* main.css */

/* Reset some default styles */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

/* Body Styling */
body {
    background-color: #f7f7f7;
    color: #333;
}

/* Social Media Section */
.medsos {
    background-color: #85c1e9;
    padding: 15px 0;
}
.medsos ul {
    text-align: center;
}
.medsos ul li {
    display: inline-block;
    margin-right: 10px;
}
.medsos ul li a {
    color: #fff;
    font-size: 24px;
}

/* Header Section */
header {
    background-color: #4b1818;
    padding: 20px 0;
}
header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header h1 a {
    color: #fff;
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
}
header ul {
    list-style: none;
}
header ul li {
    display: inline-block;
    margin-left: 20px;
}
header ul li a {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    transition: background-color 0.3s;
}
header ul li a:hover {
    background-color: #85c1e9;
    color: #4b1818;
}
header ul li.active a {
    background-color: #85c1e9;
    color: #4b1818;
}

/* Banner Section */
.banner {
    height: 60vh;
    background-image: url('../img/benner.jpg');
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.banner::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(133, 193, 233, 0.6);
}
.banner h2 {
    color: #fff;
    font-size: 36px;
    text-align: center;
    z-index: 1;
    padding: 20px 30px;
    border: 3px solid #fff;
    background-color: rgba(0, 0, 0, 0.5);
}

/* Home Section */
.home {
    padding: 50px 0;
    background-color: #fff;
}
.home h3 {
    text-align: center;
    color: #3079aa;
    margin-bottom: 20px;
}
.home p {
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
    color: #333;
}
.home a {
    color: #3079aa;
    text-decoration: none;
}
.home a:hover {
    text-decoration: underline;
}

/* Footer Section */
footer {
    background-color: #85c1e9;
    padding: 30px 0;
    text-align: center;
    color: #4b1818;
}

/* About Section Table */
section#about-us table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}
section#about-us th, section#about-us td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
section#about-us th {
    background-color: #f4f4f4;
}

/* Contact Form */
form {
    width: 80%;
    margin: 0 auto;
}
form table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}
form table td {
    padding: 10px;
}
form input, form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
form button {
    background-color: #4b1818;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
form button:hover {
    background-color: #85c1e9;
    color: #4b1818;
}

<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Perpustakaan Muthia Sari</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
</head>
<body>
    <!-- header -->
    <div class="medsos">
         </div class="container"> 
              <ul>
                  <li><a href="#">f</i></a></li>
                  <li><a href="#">i</i></i></a></li>
                  <li><a href="#">tiktok</i></i></a></li>
              </ul>
        </div>
    </div>
     <header>
        <div class="container"
            <h1><a href="krikiw">PERPUSTAKAAN MUTHIA SARI</a></h1>
            <ul>
                <ul class="active"><a href="krikiw">HOME</a></ul>
                <ul><a href="about me">ABOUT ME</a></ul>
                <ul><a href="contact us">CONTACT US</a></ul>
            </ul>
        </div>
     </header>

     <!--benner-->
     <section class="benner"
         <h2>HELLO! SELAMAT DATANG DI PERPUSTAKAAN MUTHIA SARI</h2>
    </section>

    <!--home-->
    <section class="home"
        <div class="container"
            <h3>About</h3>
            
            <p>website ini dibuat untuk memenuhi tugas mata kuliah PENGEMBANGAN WEB PERPUSTAKAAN. Website ini memiliki koleksi tugas kuliah dan informasi katalog buku yang menarik.</p>
            <p>website ini dikelola dengan dukungan dan kerja sama dari pihak lain. Kolaborasi ini bertujuan untuk meningkatkan layanan informasi, memperluas akses pengetahuan, dan memberikan manfaat yang lebih luas bagi masyarakat.</p>
            <p><a href="https://library.usu.ac.id/" target="_blank"><klik disini ></a></p> 
        </div>
    </section>

    <!--footer-->
    <footer>
        <div class="container"
            <small>copyright & copy; 2025 - Muthia Sari, all rights reerved.</small>
        </div>
    </footer>
</body>
</html>
