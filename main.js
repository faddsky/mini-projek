document.addEventListener("DOMContentLoaded", function () {
  // Efek hover untuk anggota tim
  const teamMembers = document.querySelectorAll(".team .member");

  teamMembers.forEach((member) => {
      const image = member.querySelector("img");
      const text = member.querySelector("p");

      member.addEventListener("mouseenter", function () {
          image.style.transform = "scale(0.9)"; // Mengecilkan gambar saat hover
          text.style.opacity = "1"; // Menampilkan teks nama
      });

      member.addEventListener("mouseleave", function () {
          image.style.transform = "scale(1)"; // Mengembalikan ukuran normal
          text.style.opacity = "0"; // Menyembunyikan teks nama
      });
  });

  // Efek hover untuk produk (opsional)
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
          card.style.transform = "scale(0.95)"; // Mengecilkan produk saat hover
      });

      card.addEventListener("mouseleave", function () {
          card.style.transform = "scale(1)"; // Mengembalikan ukuran normal
      });
  });
});
