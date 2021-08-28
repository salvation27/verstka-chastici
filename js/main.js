






jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 100 ? 'In': 'Out')](200);           
    });
});

// длябургера анимация

(function() {
  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      this.classList.contains("is-active") === true
        ? this.classList.remove("is-active")
        : this.classList.add("is-active");
    });
  }
})();


// появление меню по нажатии на кнопку

$(document).ready(function() {
  $(".burger_test").click(function() {
    $(".brger_menu").toggleClass("vis");
  });
});

$(document).ready(function() {
  $(".closer").click(function() {
    $(".brger_menu").click("brger_menu");
  });

  

  $("[data-submit]").on("click", function(e) {
    e.preventDefault();
    var antispam = $(this)
      .closest("form")
      .find("#antispam")[0];
    var send = true;
    if (antispam) {
      send = antispam.value.length === 0 ? true : false;
    }
    send &&
      $(this)
        .parent("form")
        .submit();
  });
  $.validator.addMethod(
    "regex",
    function(value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Please check your input."
  );
  function valEl(el) {
    el.validate({
      rules: {
        tel: {
          required: true,
          regex: "^([+]+)*[0-9\x20\x28\x29-]{5,20}$"
        },
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        tel: {
          required: "Поле обязательно для заполнения",
          regex: "Телефон может содержать символы + - ()"
        },
        name: {
          required: "Поле обязательно для заполнения"
        },
        email: {
          required: "Поле обязательно для заполнения",
          email: "Неверный формат E-mail"
        }
      },
      submitHandler: function(form) {
        $("#loader").fadeIn();
        var $form = $(form);
        var $formId = $(form).attr("id");
        switch ($formId) {
          case "goToNewPage":
            $.ajax({
              type: "POST",
              url: $form.attr("action"),
              data: $form.serialize()
            }).always(function(response) {
              //ссылка на страницу "спасибо" - редирект
              location.href ="senk.html";
              //отправка целей в Я.Метрику и Google Analytics
              ga("send", "event", "masterklass7", "register");
              yaCounter27714603.reachGoal("lm17lead");
            });
            break;
          case "popupResult":
            $.ajax({
              type: "POST",
              url: $form.attr("action"),
              data: $form.serialize()
            }).always(function(response) {
              setTimeout(function() {
                $(".js-form").trigger("reset");
                $("#loader").fadeOut();
              }, 800);
              setTimeout(function() {
                $("#overlay").fadeIn();
              }, 100);
              $("#overlay").on("click", function(e) {
                $("#overlay").fadeOut();
              });
            });
            break;
        }
        return false;
      }
    });
  }

  $(".js-form").each(function() {
    valEl($(this));
  });
  $("[data-scroll]").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "data-scroll")).offset().top
      },
      2000
    );
    event.preventDefault();
  });
  $("[data-scroll]").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "data-scroll")).offset().top
      },
      2000
    );
    event.preventDefault();
  });
});

// слайдер оффера


$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
   arrows: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },

     {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      
      }
    },
     {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// второй слайдер


$('.responsive2').slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
   arrows: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },

     {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      
      }
    },
     {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





$('a[href^="#"]').bind("click.smoothscroll", function(e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top
      },
      2000,
      "swing",
      function() {
        window.location.hash = target;
      }
    );
});

