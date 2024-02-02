const search = document.querySelector(".search-box");
document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
};

const cart = document.querySelector(".cart");
document.querySelector("#cart-icon").onclick = () => {
  cart.classList.toggle("active");
  search.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
};

const user = document.querySelector(".user");
document.querySelector("#user-icon").onclick = () => {
  user.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
};

const navbar = document.querySelector(".navbar");
document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
};

window.onscroll = () => {
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
};
//navbar scrooll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

//Swiper
var swiper = new Swiper(".new-arrival", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    deplay: 5500,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
