document.addEventListener("DOMContentLoaded", function () {
    // Animasi header saat halaman dimuat
    const header = document.querySelector("header h1");
    header.style.opacity = 0;
    header.style.transform = "translateY(-20px)";
    setTimeout(() => {
        header.style.transition = "opacity 1s, transform 1s";
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
    }, 300);

    // Efek hover pada navbar
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Tambahkan efek fade-in untuk konten utama
    const mainContent = document.querySelector("main");
    mainContent.style.opacity = 0;
    mainContent.style.transition = "opacity 1.5s";
    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 500);

    // Animasi footer saat di-scroll ke bawah
    const footer = document.querySelector("footer");
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.style.backgroundColor = "#3b82f6"; // Warna biru saat mencapai footer
            footer.style.transition = "background-color 0.5s";
        } else {
            footer.style.backgroundColor = "#1e3a8a"; // Kembali ke warna asli
        }
    });
});
