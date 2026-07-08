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
  mouseDrag:false,
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
  dots:true,
  nav: false,
  rtl: true,
  dotsData:true,
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
  dots:false,
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
  dots:false,
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
/***********timer Amazing***********/
jQuery(document).ready(function (){
    function countdownTimer() {
        var countdownElements = document.querySelectorAll('.box-timer');
        countdownElements.forEach(function (countdownElement) {
            var daysElements = countdownElement.querySelectorAll('.days-value');
            var hoursElements = countdownElement.querySelectorAll('.hours-value');
            var minutesElements = countdownElement.querySelectorAll('.minutes-value');
            var secondsElements = countdownElement.querySelectorAll('.seconds-value');
            var messageElement = countdownElement.querySelector('.timer-message');
            var messagesElement = countdownElement.querySelector('.massages-heddin');
            var targetYear = parseInt(countdownElement.dataset.targetYear);
            var targetMonth = parseInt(countdownElement.dataset.targetMonth) - 1;
            var targetDay = parseInt(countdownElement.dataset.targetDay);
            var targetHour = parseInt(countdownElement.dataset.targetHour);
            var targetMinute = parseInt(countdownElement.dataset.targetMinute);
            var targetSecond = parseInt(countdownElement.dataset.targetSecond);
            var targetDate = new Date(targetYear, targetMonth, targetDay, targetHour, targetMinute, targetSecond);

            function updateTimer() {
                var now = new Date().getTime();
                var timeRemaining = targetDate - now;
                var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
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
                    messagesElement.style.display = 'none';
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
