// ✅ Message de confirmation
console.log("Le site a bien chargé !");

// ✅ Scroll fluide vers les sections (si ancres internes)
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});

// ✅ Alerte lors du clic sur le lien "Contact"
document.addEventListener("DOMContentLoaded", function () {
  const contactLinks = document.querySelectorAll("a[href='contact.html']");
  contactLinks.forEach(link => {
    link.addEventListener("click", function () {
      alert("Vous allez être redirigé vers la page Contact.");
    });
  });
});

// ✅ Menu burger pour mobile
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav ul");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});

// ✅ Carrousel automatique (images dans /images/carrousel1.jpg, carrousel2.jpg, etc.)
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    const images = ["carrousel1.jpg", "carrousel2.jpg", "carrousel3.jpg"];
    let index = 0;

    setInterval(() => {
      index = (index + 1) % images.length;
      carousel.setAttribute("src", "images/" + images[index]);
    }, 3000);
  }
});

// ✅ Animation d'apparition au scroll
document.addEventListener("DOMContentLoaded", function () {
  const animatedItems = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  animatedItems.forEach(item => {
    observer.observe(item);
  });
});
