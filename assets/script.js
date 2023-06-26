document.addEventListener("DOMContentLoaded", function() {
    var dateElement = document.getElementById("date");
    var timeElement = document.getElementById("time");

    function updateDateTime() {
        var dateTime = new Date();

        var optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var formattedDate = dateTime.toLocaleDateString('en-US', optionsDate);

        var optionsTime = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        var formattedTime = dateTime.toLocaleTimeString('en-US', optionsTime);

        dateElement.innerHTML = formattedDate;
        timeElement.innerHTML = formattedTime;
    }

    setInterval(updateDateTime, 1000);
});

const phrases = ["I am a UI/UX Designer", "I am a Web Developer"];
let count = 0;
let phraseIndex = 0;
let currentPhrase = "";
let typedWords = "";

(function type() {
  if (count === phrases.length) {
    count = 0;
  }

  currentPhrase = phrases[count];

  typedWords = currentPhrase.slice(0, ++phraseIndex);
  document.querySelector('.typewriting').textContent = typedWords;

  if (typedWords.length === currentPhrase.length) {
    count++;
    phraseIndex = 0;
  }

  setTimeout(type, 300);
})();


var emojis = document.getElementsByClassName("emoji");
    for (var i = 0; i < icons.length; i++) {
      emojis[i].style.top = Math.random() * 100 + "%";
      emojis[i].style.left = Math.random() * 100 + "%";
    }
      function toggleResume() {
        var addResumeSection = document.querySelector('.resume-section');
      
        if (addResumeSection.style.display === 'none') {
          addResumeSection.style.display = 'block';
      
          setTimeout(function() {
            var contentHeader = document.querySelector('.content_header');
            var content = document.querySelector('.content-resume');
      
            contentHeader.scrollIntoView({ behavior: 'smooth' });
            content.scrollIntoView({ behavior: 'smooth' });
          }, 0);
        } else {
          addResumeSection.style.display = 'none';
        }
      }

      function toggleWorks() {
        var addWorksSection = document.querySelector('.works-section');
      
        if (addWorksSection.style.display === 'none') {
          addWorksSection.style.display = 'block';
      
          setTimeout(function() {
            var contentHeader = document.querySelector('.content_header');
            var content = document.querySelector('.content');
      
            contentHeader.scrollIntoView({ behavior: 'smooth' });
            content.scrollIntoView({ behavior: 'smooth' });
          }, 0);
        } else {
          addWorksSection.style.display = 'none';
        }
      }

      function toggleContacts() {
        var contactsSection = document.querySelector('.contacts-section');
      
        if (contactsSection.style.display === 'none') {
          contactsSection.style.display = 'block';
      
          setTimeout(function() {
            contactsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 0);
        } else {
          contactsSection.style.display = 'none';
        }
      }

      function scrollToContent(section) {
        var contentHeader = section.querySelector('.content_header-isi');
        var content = section.querySelector('.content-isi');
      
        contentHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      function toggleBelle() {
        var belleSection = document.querySelector('.belle-section');
      
        if (belleSection.style.display === 'none') {
          belleSection.style.display = 'block';
      
          setTimeout(function() {
            scrollToContent(belleSection);
          }, 0);
        } else {
          belleSection.style.display = 'none';
        }
      }
      
      function togglePasarin() {
        var pasarinSection = document.querySelector('.pasarin-section');
      
        if (pasarinSection.style.display === 'none') {
          pasarinSection.style.display = 'block';
      
          setTimeout(function() {
            scrollToContent(pasarinSection);
          }, 0);
        } else {
          pasarinSection.style.display = 'none';
        }
      }
      
      function toggleNotebook() {
        var notebookSection = document.querySelector('.notebook-section');
      
        if (notebookSection.style.display === 'none') {
          notebookSection.style.display = 'block';
      
          setTimeout(function() {
            scrollToContent(notebookSection);
          }, 0);
        } else {
          notebookSection.style.display = 'none';
        }
      }