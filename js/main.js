document.addEventListener("DOMContentLoaded", function () {
  var hamMenu = document.querySelector(".ham_menu");
  var mobileMenu = document.querySelector(".mobile_menu");
  var mobileMenuClose = document.querySelector(".mobile_menu_close");

  hamMenu.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    hamMenu.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  });

  mobileMenuClose.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    hamMenu.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });

  document
    .querySelector(".mobile_menu")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.remove("active");
      }
    });

  var mobileMenuLinks = document.querySelectorAll(".mobile_menu_wrap a");
  mobileMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      document.querySelector(".mobile_menu").classList.remove("active");
    });
  });

  var swiper = new Swiper(".swiper_2", {
    slidesPerView: 1.55,
    spaceBetween: 70,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.55,
        spaceBetween: 70,
      },
    },
  });

  var swiper = new Swiper(".swiper_4", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
});
