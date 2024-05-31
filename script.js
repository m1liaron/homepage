document.addEventListener('DOMContentLoaded', function() {
    function animateSkillBars() {
      document.getElementById('html-progress').style.width = '60%';
      document.getElementById('css-progress').style.width = '65%';
      document.getElementById('js-progress').style.width = '40%';
      document.getElementById('react-progress').style.width = '50%';
      document.getElementById('nodejs-progress').style.width = '50%';
    }
  
    let i = 0; // Declare i outside the function to preserve its value across function calls
    const txt = 'VLADISLAV MATVEICHENKO';
    const speed = 100; // Adjusted the speed to make it more readable

    function typeEffect() {
        if (i < txt.length) {
            document.querySelector(".name").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        }
    }

    animateSkillBars();
    typeEffect();
  });