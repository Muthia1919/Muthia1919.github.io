document.addEventListener("DOMContentLoaded", function () {
    // Animasi Efek Ketik
    const text = "Selamat datang di perpustakaan kami!";
    let index = 0;
    const textElement = document.querySelector("main p:first-of-type");

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    textElement.textContent = ""; // Kosongkan teks sebelum mulai
    setTimeout(typeText, 500);

    // Animasi Navbar Saat Scroll
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#3b82f6"; // Ubah warna saat scroll
            navbar.style.transition = "0.3s";
        } else {
            navbar.style.backgroundColor = "#1e3a8a"; // Kembali ke warna awal
        }
    });

    // Mode Gelap
    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Mode Gelap 🌙";
    darkModeBtn.style.position = "fixed";
    darkModeBtn.style.bottom = "20px";
    darkModeBtn.style.right = "20px";
    darkModeBtn.style.padding = "10px 15px";
    darkModeBtn.style.backgroundColor = "#333";
    darkModeBtn.style.color = "white";
    darkModeBtn.style.border = "none";
    darkModeBtn.style.borderRadius = "5px";
    darkModeBtn.style.cursor = "pointer";

    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            document.body.style.backgroundColor = "#1e1e1e";
            document.body.style.color = "white";
            darkModeBtn.textContent = "Mode Terang ☀️";
        } else {
            document.body.style.backgroundColor = "#e3f2fd";
            document.body.style.color = "#333";
            darkModeBtn.textContent = "Mode Gelap 🌙";
        }
    });
});
