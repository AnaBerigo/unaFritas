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

$(document).ready(function () {
  // Mostrar apenas batatas ao iniciar
  $("#batatas").show();
  $("#adicionais, #bebidas").hide();
  $("#options button").removeClass("active");
  $('#options button:contains("Batatas")').addClass("active");

  // Alternar entre categorias
  $("#options button").click(function () {
    const categoria = $(this).text().trim().toLowerCase();

    $("#batatas, #adicionais, #bebidas").hide();

    if (categoria.includes("batatas")) {
      $("#batatas").show();
    } else if (categoria.includes("adicionais")) {
      $("#adicionais").show();
    } else if (categoria.includes("bebidas")) {
      $("#bebidas").show();
    }

    // Resetar botão ativo
    $("#options button").removeClass("active");
    $(this).addClass("active");
  });

  // Lógica do carrossel horizontal
  $(".next-btn").click(function () {
    const visible = $(
      "#batatas:visible, #adicionais:visible, #bebidas:visible"
    );
    visible.animate({ scrollLeft: "+=300" }, 500);
  });

  $(".prev-btn").click(function () {
    const visible = $(
      "#batatas:visible, #adicionais:visible, #bebidas:visible"
    );
    visible.animate({ scrollLeft: "-=300" }, 500);
  });
});
