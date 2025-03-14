<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perpustakaan Muthia Sari</title>
    <style>
    {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    padding: 20px;
}

h1, h2 {
    color: #2c3e50;
}

/* Link Styling */
a {
    color: #1abc9c;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

a:hover {
    text-decoration: underline;
}

/* Tabel Styling */
table {
    margin: 20px auto;
    border-collapse: collapse;
    width: 60%;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

table, th, td {
    border: 1px solid #ddd;
    padding: 12px;
}

th {
    background: #34495e;
    color: white;
    text-transform: uppercase;
}

td {
    background: #ecf0f1;
}

/* Form Styling */
form {
    width: 50%;
    margin: 20px auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 12px;
    background-color: #2980b9;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #1abc9c;
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
