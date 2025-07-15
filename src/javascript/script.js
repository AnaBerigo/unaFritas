$(document).ready(function () {
  // MENU MOBILE
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  // DESTACAR ITEM DO MENU ATUAL
  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", function () {
    const header = $("header");
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= -139) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1)");
    }

    sections.each(function (index) {
      const section = $(this);
      const sectionTop = section.offset().top - 500;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = index;
        return false; // Sair do loop
      }
    });
    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  // CORRIGIR ANCORAGEM (scroll suave com offset do header fixo)
  const headerHeight = $("header").outerHeight();

  $(".nav-item a[href^='#']").on("click", function (e) {
    e.preventDefault();

    const alvo = $($(this).attr("href"));
    if (alvo.length) {
      $("html, body").animate(
        {
          scrollTop: alvo.offset().top - headerHeight + 1,
        },
        600
      );
    }

    // Fecha o menu mobile, se aberto
    $("#mobile_menu").removeClass("active");
    $("#mobile_btn").find("i").removeClass("fa-x");
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

$("#meuFormulario").on("submit", function (e) {
  e.preventDefault();

  var $form = $(this);
  var dados = $form.serialize();

  $.ajax({
    url: "https://formsubmit.co/22c4f7495f3f45bcef8326dea1f0c02c",
    method: "POST",
    data: dados,
    success: function () {
      $form[0].reset();
      mostrarToast("Mensagem enviada com sucesso!");
    },
    error: function () {
      mostrarToast("Erro ao enviar a mensagem.");
    },
  });
});

function mostrarToast(mensagem) {
  var $toast = $("#toast");
  $toast.text(mensagem).removeClass("hidden");

  setTimeout(function () {
    $toast.addClass("hidden");
  }, 4000);
}

ScrollReveal().reveal("#cta", {
  delay: 200,
  duration: 2000,
  distance: "20%",
  origin: "left",
});

ScrollReveal().reveal("#banner", {
  delay: 200,
  duration: 2000,
  distance: "14%",
  origin: "right",
});

ScrollReveal().reveal(".titulo-sessao", {
  delay: 200,
  duration: 1000,
  distance: "50px",
  origin: "bottom",
  easing: "ease-in-out",
  reset: false,
});

ScrollReveal().reveal(".nome-sessao", {
  delay: 100,
  duration: 800,
  distance: "20px",
  origin: "left",
  reset: false,
});

ScrollReveal().reveal("#infos_aboutUs > div", {
  interval: 200,
  duration: 1000,
  distance: "60px",
  origin: "bottom",
  reset: false,
});

ScrollReveal().reveal("#batatas > .card", {
  interval: 100,
  duration: 1000,
  distance: "10%",
  origin: "bottom",
  reset: false,
});

ScrollReveal().reveal(".content", {
  duration: 800,
  distance: "50px",
  origin: "right",
  reset: false,
});

ScrollReveal().reveal(".footer-form, .footer-dados, .footer-info", {
  duration: 1000,
  distance: "50px",
  origin: "bottom",
  interval: 150,
  reset: false,
});
