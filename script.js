const aboutMeLink = document.getElementById('aboutmepython');
const skillsetLink = document.getElementById('skillsetpython');
const myProjectsLink = document.getElementById('myprojectspython');
const textElement = document.querySelector('.apppy p');

function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function Viewed(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function highlightOnScroll() {
    const aboutMeSection = document.getElementById('aboute');
    const skillsetSection = document.getElementById('technologies');
    const myProjectsSection = document.getElementById('my_projects');

    aboutMeLink.classList.remove('highlight');
    skillsetLink.classList.remove('highlight');
    myProjectsLink.classList.remove('highlight');

    if (Viewed(aboutMeSection)) {
        aboutMeLink.classList.add('highlight');
    } else if (Viewed(skillsetSection)) {
        skillsetLink.classList.add('highlight');
    } else if (Viewed(myProjectsSection)) {
        myProjectsLink.classList.add('highlight');
    }
}

function updateText() {
    
    if (aboutMeLink.classList.contains('highlight')) {
        textElement.textContent = 'about_me.py';
    } else if (skillsetLink.classList.contains('highlight')) {
        textElement.textContent = 'skillset.py';
    } else if (myProjectsLink.classList.contains('highlight')) {
        textElement.textContent = 'my_projects.py';
    }
}

window.addEventListener('scroll', highlightOnScroll);
window.addEventListener('scroll', updateText);

document.addEventListener('DOMContentLoaded', function() {
    updateText();
    highlightOnScroll();
});