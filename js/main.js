$(".m-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  rtl: true,
  autoplay: true,
  navText: [
    "<i class='fa-solid fa-chevron-right'></i>",
    "<i class='fa-solid fa-chevron-left'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".product-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  rtl: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 5,
    },
  },
});

$(".amazing-slider").owlCarousel({
  loop: false,
  margin: 0,
  mouseDrag: false,
  nav: false,
  dots: false,
  rtl: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 5,
    },
  },
});
$(".special-slider").owlCarousel({
  loop: false,
  margin: 0,
  dots: true,
  nav: false,
  rtl: true,
  dotsData: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".insta-slider").owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav: false,
  rtl: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 6,
    },
  },
});
$(".brand-slider").owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  rtl: true,
  autoplay: false,
  navText: [
    "<i class='fa-solid fa-chevron-right'></i>",
    "<i class='fa-solid fa-chevron-left'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 6,
    },
  },
});
$(".related-slider").owlCarousel({
  loop: false,
  margin: 0,
  dots: false,
  nav: false,
  rtl: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 6,
    },
  },
});
$(".related-article-slider").owlCarousel({
  loop: false,
  margin: 0,
  mouseDrag: false,
  dots: false,
  nav: false,
  rtl: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
});
/***********timer Amazing***********/
$(document).ready(function () {
  function countdownTimer() {
    var countdownElements = document.querySelectorAll(".box-timer");
    countdownElements.forEach(function (countdownElement) {
      var daysElements = countdownElement.querySelectorAll(".days-value");
      var hoursElements = countdownElement.querySelectorAll(".hours-value");
      var minutesElements = countdownElement.querySelectorAll(".minutes-value");
      var secondsElements = countdownElement.querySelectorAll(".seconds-value");
      var messageElement = countdownElement.querySelector(".timer-message");
      var messagesElement = countdownElement.querySelector(".massages-heddin");
      var targetYear = parseInt(countdownElement.dataset.targetYear);
      var targetMonth = parseInt(countdownElement.dataset.targetMonth) - 1;
      var targetDay = parseInt(countdownElement.dataset.targetDay);
      var targetHour = parseInt(countdownElement.dataset.targetHour);
      var targetMinute = parseInt(countdownElement.dataset.targetMinute);
      var targetSecond = parseInt(countdownElement.dataset.targetSecond);
      var targetDate = new Date(
        targetYear,
        targetMonth,
        targetDay,
        targetHour,
        targetMinute,
        targetSecond,
      );

      function updateTimer() {
        var now = new Date().getTime();
        var timeRemaining = targetDate - now;
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        var minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
        );
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        for (var i = 0; i < daysElements.length; i++) {
          daysElements[i].innerHTML = days;
        }
        for (var i = 0; i < hoursElements.length; i++) {
          hoursElements[i].innerHTML = hours;
        }
        for (var i = 0; i < minutesElements.length; i++) {
          minutesElements[i].innerHTML = minutes;
        }
        for (var i = 0; i < secondsElements.length; i++) {
          secondsElements[i].innerHTML = seconds;
        }
        if (timeRemaining > 0) {
          setTimeout(updateTimer, 1000);
        } else {
          messagesElement.style.display = "none";
          /*messageElement.style.display = 'block';
                    var messageTextElement = messageElement.querySelector('.timer-message-text');
                    messageTextElement.innerHTML = 'تایمر به پایان رسیده است';*/
        }
      }

      updateTimer();
    });
  }
  countdownTimer();
});

$(".message a").click(function () {
  $(".form-login-mprtheme form").animate(
    { height: "toggle", opacity: "toggle" },
    "slow",
  );
});

$(function () {
  const modals = [];

  function modal(btnId, modalId, closeClass) {
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    const close = document.querySelector("." + closeClass);

    // اگر هر کدام از المان‌ها وجود نداشت، تابع متوقف شود
    if (!btn || !modal || !close) {
      return;
    }

    modals.push(modal);

    btn.addEventListener("click", function () {
      modal.style.display = "block";
    });

    close.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // تعریف مودال‌ها
  modal("btn_modal_login", "modal_login", "close");
  modal("btn_modal_video", "modal_video", "close_video");
  modal("btn_modal_share", "modal_share", "close_share");

  // فقط یک Event Listener برای بستن مودال‌ها با کلیک بیرون از آن‌ها
  window.addEventListener("click", function (e) {
    modals.forEach(function (modal) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

/************quantity number plus and minus************/
$(document).on("click", "button.plus, button.minus", function () {
  var qty = $(this).parent(".quantity").find(".qty");
  var val = parseFloat(qty.val());
  var max = parseFloat(qty.attr("max"));
  var min = parseFloat(qty.attr("min"));
  var step = parseFloat(qty.attr("step"));
  if ($(this).is(".plus")) {
    if (max && max <= val) {
      qty.val(max).change();
    } else {
      qty.val(val + step).change();
    }
  } else {
    if (min && min >= val) {
      qty.val(min).change();
    } else if (val > 1) {
      qty.val(val - step).change();
    }
  }
});
// floating
$(document).ready(function () {
  const $icon = $(".floating-button i");
  const $contactList = $(".contact-list");

  $icon.on("click", function () {
    const opening = !$icon.hasClass("is-open");

    $contactList.slideToggle();
    $icon.toggleClass("is-open fa-multiply", opening);
    $icon.toggleClass("fa-comment-dots", !opening);
    $icon.closest(".floating-button").attr("aria-expanded", opening);
  });
});

// scrollup
$("#scrollup").click(function () {
  $("html").animate({ scrollTop: 0 }, 1000);
});

//story script
var currentSkin = getCurrentSkin();
var stories = window.Zuck(document.querySelector("#stories"), {
  backNative: true,
  previousTap: true,
  skin: currentSkin["name"],
  autoFullScreen: currentSkin["params"]["autoFullScreen"],
  avatars: currentSkin["params"]["avatars"],
  paginationArrows: currentSkin["params"]["paginationArrows"],
  list: currentSkin["params"]["list"],
  cubeEffect: currentSkin["params"]["cubeEffect"],
  localStorage: true,
  stories: [
    {
      id: "ramon-01",
      photo: "./img/story/1.webp",
      name: "معرفی محصول",
      time: timestamp(),
      items: [
        {
          id: "ramon-01-1",
          type: "photo",
          length: 3,
          src: "./img/story/1.webp",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "کلیک کنید",
          time: timestamp(),
        },
        {
          id: "ramon-01-2",
          type: "video",
          length: 0,
          src: "./img/story/2.webm",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "مشاهده محصول",
          time: timestamp(),
        },
        {
          id: "ramon-01-3",
          type: "photo",
          length: 3,
          src: "./img/story/3.webp",
          preview: "./img/story/3.webp",
          link: "#",
          linkText: false,
          time: timestamp(),
        },
      ],
    },
    {
      id: "ramon-02",
      photo: "./img/story/1.webp",
      name: "معرفی محصول",
      time: timestamp(),
      items: [
        {
          id: "ramon-02-1",
          type: "photo",
          length: 3,
          src: "./img/story/1.webp",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "کلیک کنید",
          time: timestamp(),
        },
        {
          id: "ramon-02-2",
          type: "video",
          length: 0,
          src: "./img/story/2.webm",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "مشاهده محصول",
          time: timestamp(),
        },
        {
          id: "ramon-02-3",
          type: "photo",
          length: 3,
          src: "./img/story/3.webp",
          preview: "./img/story/3.webp",
          link: "#",
          linkText: false,
          time: timestamp(),
        },
      ],
    },
    {
      id: "ramon-03",
      photo: "./img/story/1.webp",
      name: "معرفی محصول",
      time: timestamp(),
      items: [
        {
          id: "ramon-03-1",
          type: "photo",
          length: 3,
          src: "./img/story/1.webp",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "کلیک کنید",
          time: timestamp(),
        },
        {
          id: "ramon-03-2",
          type: "video",
          length: 0,
          src: "./img/story/2.webm",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "مشاهده محصول",
          time: timestamp(),
        },
        {
          id: "ramon-03-3",
          type: "photo",
          length: 3,
          src: "./img/story/3.webp",
          preview: "./img/story/3.webp",
          link: "#",
          linkText: false,
          time: timestamp(),
        },
      ],
    },
    {
      id: "ramon-04",
      photo: "./img/story/1.webp",
      name: "معرفی محصول",
      time: timestamp(),
      items: [
        {
          id: "ramon-04-1",
          type: "photo",
          length: 3,
          src: "./img/story/1.webp",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "کلیک کنید",
          time: timestamp(),
        },
        {
          id: "ramon-04-2",
          type: "video",
          length: 0,
          src: "./img/story/2.webm",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "مشاهده محصول",
          time: timestamp(),
        },
        {
          id: "ramon-04-3",
          type: "photo",
          length: 3,
          src: "./img/story/3.webp",
          preview: "./img/story/3.webp",
          link: "#",
          linkText: false,
          time: timestamp(),
        },
      ],
    },
    {
      id: "ramon-05",
      photo: "./img/story/1.webp",
      name: "معرفی محصول",
      time: timestamp(),
      items: [
        {
          id: "ramon-05-1",
          type: "photo",
          length: 3,
          src: "./img/story/1.webp",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "کلیک کنید",
          time: timestamp(),
        },
        {
          id: "ramon-05-2",
          type: "video",
          length: 0,
          src: "./img/story/2.webm",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "مشاهده محصول",
          time: timestamp(),
        },
        {
          id: "ramon-05-3",
          type: "photo",
          length: 3,
          src: "./img/story/3.webp",
          preview: "./img/story/3.webp",
          link: "#",
          linkText: false,
          time: timestamp(),
        },
      ],
    },
    {
      id: "ramon-06",
      photo: "./img/story/1.webp",
      name: "معرفی محصول",
      time: timestamp(),
      items: [
        {
          id: "ramon-06-1",
          type: "photo",
          length: 3,
          src: "./img/story/1.webp",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "کلیک کنید",
          time: timestamp(),
        },
        {
          id: "ramon-06-2",
          type: "video",
          length: 0,
          src: "./img/story/2.webm",
          preview: "./img/story/1.webp",
          link: "#",
          linkText: "مشاهده محصول",
          time: timestamp(),
        },
        {
          id: "ramon-06-3",
          type: "photo",
          length: 3,
          src: "./img/story/3.webp",
          preview: "./img/story/3.webp",
          link: "#",
          linkText: false,
          time: timestamp(),
        },
      ],
    },
  ],
});
