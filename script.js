document.addEventListener('DOMContentLoaded', function() {
    // Skills animation
    function animateSkillBars() {
      document.getElementById('html-progress').style.width = '60%';
      document.getElementById('css-progress').style.width = '65%';
      document.getElementById('js-progress').style.width = '40%';
      document.getElementById('react-progress').style.width = '50%';
      document.getElementById('nodejs-progress').style.width = '50%';
    }
  

    // Type effect
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

    // Projects modals

    const projects = document.querySelectorAll('.project');
    const modal = document.getElementById('modal');
    const siteFrame = document.getElementById('site-frame');
    const projectName = document.getElementById('project-name')
    const projectUrl = document.getElementById('project-url')
    const closeButton = document.querySelector('.close-button');

    projects.forEach(project => {
      project.addEventListener('click', () => {
        const url = project.getAttribute('data-url');
        siteFrame.src = url;
        modal.style.display = "block"
        projectName.innerText = project.textContent;
        projectUrl.href = url
      })
    });

    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
      siteFrame.src = "";
    })

    window.addEventListener("click", (event) => {
      if(event.target == modal) {
        modal.style.display = "none";
        siteFrame.src = "";
      }
    })
    
    animateSkillBars();
    typeEffect();
  });