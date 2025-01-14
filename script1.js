// function welcomeMessage() {
//     alert("Welcome to Cooking Delight! Enjoy exploring delicious recipes!");
//   }

//   // Call the function when the page loads
//   window.onload = welcomeMessage;

//   let currentIndex = 0;

//   function showSlide(index) {
//     const slides = document.querySelectorAll(".carousel-item");
//     const totalSlides = slides.length;

//     if (index >= totalSlides) currentIndex = 0;
//     else if (index < 0) currentIndex = totalSlides - 1;
//     else currentIndex = index;

//     const offset = -currentIndex * 320;
//     document.querySelector(".carousel-content").style.transform = `translateX(${offset}px)`;
//   }

//   function nextSlide() {
//     showSlide(currentIndex + 1);
//   }

//   function prevSlide() {
//     showSlide(currentIndex - 1);
//   }

//   document.addEventListener("DOMContentLoaded", () => {
//     showSlide(currentIndex);
//   });
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  // Show the next slide
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  // Show the previous slide
  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }

  // Update carousel transform based on current index
  function updateCarousel() {
    const carouselContent = document.querySelector(".carousel-content");
    const newTransform = -currentIndex * (items[0].offsetWidth + 20); // 20 is the gap between items
    carouselContent.style.transform = `translateX(${newTransform}px)`;
  }

  // Set an interval to automatically change the slide every 3 seconds
  let slideInterval = setInterval(showNextSlide, 3000);

  // Pause the slideshow on hover
  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mouseenter", function () {
    clearInterval(slideInterval); // Stop slideshow on hover
  });
  carousel.addEventListener("mouseleave", function () {
    slideInterval = setInterval(showNextSlide, 3000); // Restart slideshow on mouse leave
  });

  // Handle prev and next buttons
  document.getElementById("prev").addEventListener("click", function () {
    showPrevSlide();
  });

  document.getElementById("next").addEventListener("click", function () {
    showNextSlide();
  });

  // Initial call to update the carousel
  updateCarousel();
});
