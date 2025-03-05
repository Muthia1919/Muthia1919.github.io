<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perpustakaan Muthia Sari</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            text-align: center;
        }
        table {
            margin: 20px auto;
            border-collapse: collapse;
            width: 50%;
        }
        table, th, td {
            border: 1px solid black;
            padding: 10px;
        }
        form {
            width: 50%;
            margin: auto;
        }
        input, textarea {
            width: 100%;
            padding: 8px;
            margin: 5px 0;
        }
        button {
            padding: 10px;
            background-color: blue;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Perpustakaan Muthia Sari</h1>
    <p>perkenalkan saya muthia ini adalah homepage pertama saya</p>
    
     <p><a href="https://library.usu.ac.id/" target="_blank">Kunjungi Perpustakaan USU</a></p>
</body>
    
    <h2>About Me</h2>
    <table>
        <tr><th>Nama</th><td>Muthia Sari</td></tr>
        <tr><th>NIM</th><td>220709002</td></tr>
        <tr><th>Program Studi</th><td>Perpustakaan dan Sains Informasi</td></tr>
        <tr><th>Fakultas</th><td>Ilmu Budaya</td></tr>
        <tr><th>Universitas</th><td>Universitas Sumatra Utara</td></tr>
    </table>
    
    <h2>Contact Us</h2>
    <form>
        <label for="phone">No HP:</label>
        <input type="text" id="phone" name="phone" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Pesan:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Kirim</button>
    </form>
    
</html>
