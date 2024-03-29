/** Swiper Customisation **/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  speed: 500,
  spaceBetween: 20,
  breakpoints: {
    993: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let numberEl = document.querySelector(".number-el");
let swiperSlides = document.querySelectorAll(".swiper-slide.guides");

//Initiate Swiper slider
const swiper2 = new Swiper(".mySwiper2", {
  on: {
    init: function () {
      numberEl.innerHTML = `0${this.activeIndex + 1}/0${swiperSlides.length}`;
    },
  },

  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next-guides",
    prevEl: ".swiper-button-prev-guides",
  },
});

swiper2.on("slideChange", function () {
  numberEl.innerHTML = `0${swiper2.activeIndex + 1}/0${swiperSlides.length}`;
});

//Slider Click Delay

// Define delay (in milliseconds)
swiperDelay = 0;

// Add event to previous button
$(".swiper-button-prev-guides.enabled").click(function () {
  // Disable swiper buttons so user doesnt click again
  $(".swiper-button-prev-guides").removeClass("enabled");

  // Set timeout for previous slide move
  setTimeout(function () {
    // Move to previous slide
    swiper.slidePrev();

    // Re-enable swiper buttons
    $(".swiper-button-prev-guides").addClass("enabled");
  }, swiperDelay);
});

// Add event to next button
$(".swiper-button-next-guides.enabled").click(function () {
  // Disable swiper buttons so user doesnt click again
  $(".swiper-button-next-guides").removeClass("enabled");

  // Set timeout for next slide move
  setTimeout(function () {
    // Move to next slide
    swiper.slideNext();

    // Re-enable swiper buttons
    $(".swiper-button-next-guides").addClass("enabled");
  }, swiperDelay);
});

//GSAP clip-path animation
// const tl = gsap.timeline({ paused: true });
// const slide1 = document.querySelectorAll(".guides-img");
// const leftarrow = document.querySelector(".swiper-button-next-guides");
// const rightarrow = document.querySelector(".swiper-button-prev-guides");

// tl.to(slide1, {
//   // clipPath: "circle(15% at 80% 50%)",

//   duration: 0.7,
//   ease: Power1.easeInOut,
// });
// tl.to(slide1, {
//   // clipPath: "circle(70% at 80% 50%)",

//   duration: 0.7,
//   ease: Power1.easeInOut,
//   delay: 0.7,
// });

// leftarrow.addEventListener("click", () => {
//   tl.restart();
// });
// rightarrow.addEventListener("click", () => {
//   tl.restart();
// });

// For maintenance
// window.location.href = "https://barcrawl-zagreb.com/maintenance.html";

const navLinks = document.querySelector(".nav-links");
const navIcon = document.querySelector("#nav-icon");
const navLinkArray = document.querySelectorAll(".nav-link");

const toggleMenu = function () {
  navIcon.classList.toggle("open");
  navLinks.classList.toggle("open");
  console.log(body);
  body.classList.toggle("overflow");
};

navIcon.addEventListener("click", function () {
  toggleMenu();
});

navLinkArray.forEach((linkItem) => {
  linkItem.addEventListener("click", function () {
    if (body.classList.contains("overflow")) {
      toggleMenu();
    }
  });
});

// ScrollTrigger.create({
//   trigger: "#bar-crawl-numbers-section",
//   start: "0% bottom",
//   once: true,
//   markers: true,
//   onEnter: animateNum,
// });

function animateNum() {
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
}
let animated = false;
document.addEventListener("scroll", function () {
  let numbersSection = document.querySelector("#bar-crawl-numbers-section");
  let numberSectionTop = numbersSection.getBoundingClientRect().top;
  let viewPort = document.documentElement.scrollTop;

  if (!animated) {
    if (numberSectionTop + viewPort < 400) {
      animated = true;
      animateNum();
    }
  }
});
