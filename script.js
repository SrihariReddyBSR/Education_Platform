
// Count-Down Functionality in Navbar1

function updateCountdown() {
    var now = new Date();
    var endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    var timeRemaining = endOfDay - now;

    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = formatTime(hours) + "H : " + formatTime(minutes) + "M : " + formatTime(seconds) + "S";

    setTimeout(updateCountdown, 1000); // Update every second
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  updateCountdown();

//   On-Line and Off-Line Training Functionality

function toggleForm(formId) {
    var forms = document.querySelectorAll('.form-container');
    
    forms.forEach(function(form) {
      if (form.id === formId) {
        form.classList.add('active');
      } else {
        form.classList.remove('active');
      }
    });
  }

// FAQ's Section Toggle

let accordions = document.querySelectorAll('.faq_sec');
       accordions.forEach((acco) => {
          acco.onclick = () => {
            accordions.forEach((subcontent) => {
              subcontent.classList.remove('active');
            })
            acco.classList.add('active')
          }
       })