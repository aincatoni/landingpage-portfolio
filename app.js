document.addEventListener("DOMContentLoaded", () => {

  window.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    if(window.scrollY > 30 ) {
      header.classList.remove("top");
    } else {
      header.classList.add("top");
    }
  });

  
    const projectListItems = document.querySelectorAll('#projects-list li');
    const projects = document.querySelectorAll('#projects-showcase > div');

    projectListItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');

            projects.forEach(project => {
                if (project.getAttribute('id') === projectId) {
                    project.classList.remove('d-none');
                } else {
                    project.classList.add('d-none');
                }
            });
        });
    });




  
});