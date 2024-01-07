/* This code is adding an event listener to a mobile menu icon. When the icon is clicked, it toggles
the "menuActive" class on the mobile menu element. If the mobile menu element has the "menuActive"
class, it changes the innerHTML of the mobile menu icon to display a different icon. If the mobile
menu element does not have the "menuActive" class, it changes the innerHTML of the mobile menu icon
to display a different icon. */
let mobileMenuIcon = document.getElementById("mobileMenuIcon");
let mobileMenu = document.getElementById("mobileMenu"); // Change "actualMobileMenu" to the correct ID

mobileMenuIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("menuActive");

  if (mobileMenu.classList.contains("menuActive")) {
    mobileMenuIcon.innerHTML = '<i class="ri-xrp-line"></i>';
  } else {
    mobileMenuIcon.innerHTML = ' <i   class="ri-menu-line"></i>';
  }
});




/**
 * This JavaScript code adds a smooth scrolling functionality to a button that scrolls to the top of
 * the page when clicked, and also adds a fixed navigation bar when scrolling down.
 */
// Get the button element

var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to scroll to the top with smooth scrolling when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event listener for the button click
scrollToTopBtn.addEventListener('click', scrollToTop);

// Select the navbar element and store it in the variable `navbar`
var navbar = document.getElementById("nav");
/* `navbar.classList.remove("fixedNav");` is removing the "fixedNav" class from the `navbar` element.
This class is responsible for styling the navbar as a fixed navigation bar. By removing the class,
the navbar will no longer have the fixed position and will return to its default styling. */
navbar.classList.remove("fixedNav");
scrollToTopBtn.style.display = "none";
// Function to handle the scroll event
function handleScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }

  if (window.pageYOffset > 0) {
    navbar.classList.add("fixedNav");
  } else {
    navbar.classList.remove("fixedNav");
  }
}

// Show the navbar as fixedNav when scrolling down
window.onscroll = handleScroll;

/* The code `document.addEventListener('DOMContentLoaded', function () { ... });` is adding an event
listener to the `DOMContentLoaded` event of the `document` object. This event is fired when the
initial HTML document has been completely loaded and parsed, without waiting for stylesheets,
images, and subframes to finish loading. */
  // Wait for the DOM content to be fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 1,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  });




  /* courses section */

  let courseNames = document.querySelectorAll(".courseName");

  courseNames.forEach((el, i) => {
    el.addEventListener("click", () => {
      courseNames.forEach((el, i) => {
        el.classList.remove("product-filter-tags-names");
        el.style.color = "#000"
      })
      el.classList.add("product-filter-tags-names");
      el.style.color = "#1bbf72"
    });
  });
  