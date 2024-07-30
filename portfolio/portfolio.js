document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    // Handle form submission
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        alert(`Thank you for your message, ${name}! We'll get back to you at ${email}.`);
        form.reset(); // Clear the form after submission
      } else {
        alert('Please fill out all fields.');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const addSkillForm = document.getElementById('add-skill-form');
    const skillsList = document.getElementById('skills-list');
    const addProjectButton = document.getElementById('add-project');
    const projectsList = document.getElementById('projects-list');

    // Handle adding new skill
    addSkillForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const newSkillInput = document.getElementById('new-skill');
        const newSkill = newSkillInput.value.trim();

        if (newSkill) {
            const listItem = document.createElement('li');
            listItem.textContent = newSkill;
            skillsList.appendChild(listItem); // Add new skill to the existing list
            newSkillInput.value = ''; // Clear the input field
        }
    });

    // Handle adding new project
    addProjectButton.addEventListener('click', function () {
        const projectTitle = prompt('Enter the project title:');
        const projectDescription = prompt('Enter the project description:');
        if (projectTitle && projectDescription) {
            const projectDiv = document.createElement('div');
            const title = document.createElement('h3');
            title.textContent = projectTitle;
            const description = document.createElement('p');
            description.textContent = projectDescription;
            projectDiv.appendChild(title);
            projectDiv.appendChild(description);
            projectsList.appendChild(projectDiv);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-project-form');
    const projectsList = document.getElementById('projects-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values from the form
        const projectName = document.getElementById('project-name').value;
        const projectDescription = document.getElementById('project-description').value;

        // Create a new project element
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `<h3>${projectName}</h3><p>${projectDescription}</p>`;

        // Append the new project to the list
        projectsList.appendChild(projectDiv);

        // Clear the form fields
        form.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const skillForm = document.getElementById('add-skill-form');
    const skillsList = document.getElementById('skills-list');

    skillForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get the value from the input field
        const newSkill = document.getElementById('new-skill').value;

        // Create a new list item for the skill
        const skillItem = document.createElement('li');
        skillItem.textContent = newSkill;

        // Add the new skill to the list
        skillsList.appendChild(skillItem);

        // Clear the input field
        skillForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const skillForm = document.getElementById('add-skill-form');
    const skillsList = document.getElementById('skills-list');

    skillForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get the values from the input fields
        const skillName = document.getElementById('new-skill-name').value;
        const skillDetails = document.getElementById('new-skill-details').value;

        // Create a new skill box
        const newSkillBox = document.createElement('div');
        newSkillBox.className = 'skill-box';

        const skillTitle = document.createElement('h3');
        skillTitle.textContent = skillName;
        newSkillBox.appendChild(skillTitle);

        const skillDescription = document.createElement('p');
        skillDescription.textContent = skillDetails;
        newSkillBox.appendChild(skillDescription);

        // Add the new skill box to the skills list
        skillsList.appendChild(newSkillBox);

        // Clear the input fields
        skillForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const projectForm = document.getElementById('add-project-form');
    const projectsList = document.getElementById('projects-list');

    projectForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get the values from the input fields
        const projectName = document.getElementById('new-project-name').value;
        const projectDescription = document.getElementById('new-project-description').value;

        // Create a new project box
        const newProjectBox = document.createElement('div');
        newProjectBox.className = 'project-box';

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = projectName;
        newProjectBox.appendChild(projectTitle);

        const projectDescriptionText = document.createElement('p');
        projectDescriptionText.textContent = projectDescription;
        newProjectBox.appendChild(projectDescriptionText);

        // Add the new project box to the projects list
        projectsList.appendChild(newProjectBox);

        // Clear the input fields
        projectForm.reset();
    });
});
