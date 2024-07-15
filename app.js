document.addEventListener("DOMContentLoaded", () => {

  window.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    if(window.scrollY > 30 ) {
      header.classList.remove("top");
    } else {
      header.classList.add("top");
    }
  });

  const navbarHeight = document.querySelector("#header").offsetHeight;

  document.querySelectorAll('.navlist a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const targetPosition = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  
    const projectListItems = document.querySelectorAll('#projects-list li');
    const projects = document.querySelectorAll('#projects-showcase > div');

    projectListItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const projectId = this.getAttribute('data-project');

            projects.forEach(project => {
                if (project.getAttribute('id') === projectId) {
                    project.classList.remove('d-none');
                } else {
                    project.classList.add('d-none');
                }
            });
        });

        item.addEventListener('mouseleave', function() {
          projects.forEach(project => {
              project.classList.add('d-none');
          });
      });

        
    });

  
});