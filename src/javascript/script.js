$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
});

$(document).ready(function () {
  let currentIndex = 0;
  const $track = $(".carousel-track");
  const $items = $(".carousel-item");
  const totalItems = $items.length;

  function isMobile() {
    return $(window).width() <= 870;
  }

  function updateCarousel() {
    if (isMobile()) {
      const translateX = -currentIndex * 100;
      $track.css("transform", `translateX(${translateX}%)`);
    }
  }

  $(".next-btn").click(function () {
    if (isMobile() && currentIndex < totalItems - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  $(".prev-btn").click(function () {
    if (isMobile() && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  $(window).on("resize", function () {
    updateCarousel();
  });
});
