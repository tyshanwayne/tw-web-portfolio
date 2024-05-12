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

//ON CLICK SIDE BAR RESPONSIVENESS
const sidebarProject = document.getElementById('sidebarProject');
const sidebarName = document.getElementById('sidebarName');
const sidebarStatic = document.getElementById('sidebarStatic');
const sidebarTemplates = document.getElementById('sidebarTemplates');
const sidebarScratchesConsole = document.getElementById('sidebarScratchesConsole');
const sidebarScratches = document.getElementById('sidebarScratches');

const clickProject = document.getElementById('clickProject');
const clickName = document.getElementById('clickName')
const clickStatic = document.getElementById('clickStatic');
const clickTemplates = document.getElementById('clickTemplates');
const clickScratchesConsole = document.getElementById('clickScratchesConsole');
const clickScratches = document.getElementById('clickScratches');

const projectArrow = document.getElementById('projectArrow');
const nameArrow = document.getElementById('nameArrow');
const staticArrow = document.getElementById('staticArrow');
const templatesArrow = document.getElementById('templatesArrow');
const scratchesconsoleArrow = document.getElementById('scratchesconsoleArrow');
const scratchesArrow = document.getElementById('scratchesArrow');

sidebarProject.addEventListener('click', function() {
    if (clickProject.style.display === 'none' ){
        clickProject.style.display = 'block';
        projectArrow.classList.add('bx-chevron-down');
        projectArrow.classList.remove('bx-chevron-right');
    } else {
        clickProject.style.display = 'none';
        projectArrow.classList.add('bx-chevron-right');
        projectArrow.classList.remove('bx-chevron-down');
    }
});

sidebarName.addEventListener('click', function() {
    if (clickName.style.display === 'none' ){
        clickName.style.display = 'block';
        nameArrow.classList.add('bx-chevron-down');
        nameArrow.classList.remove('bx-chevron-right');
    } else {
        clickName.style.display = 'none';
        nameArrow.classList.add('bx-chevron-right');
        nameArrow.classList.remove('bx-chevron-down');
    }
});

sidebarStatic.addEventListener('click', function() {
    if (clickStatic.style.display === 'none' ){
        clickStatic.style.display = 'block';
        staticArrow.classList.add('bx-chevron-down');
        staticArrow.classList.remove('bx-chevron-right');
    } else {
        clickStatic.style.display = 'none';
        staticArrow.classList.add('bx-chevron-right');
        staticArrow.classList.remove('bx-chevron-down');
    }
});

sidebarTemplates.addEventListener('click', function() {
    if (clickTemplates.style.display === 'none' ){
        clickTemplates.style.display = 'block';
        templatesArrow.classList.add('bx-chevron-down');
        templatesArrow.classList.remove('bx-chevron-right');
    } else {
        clickTemplates.style.display = 'none';
        templatesArrow.classList.add('bx-chevron-right');
        templatesArrow.classList.remove('bx-chevron-down');
    }
});

sidebarScratchesConsole.addEventListener('click', function() {
    if (clickScratchesConsole.style.display === 'none' ){
        clickScratchesConsole.style.display = 'block';
        scratchesconsoleArrow.classList.add('bx-chevron-down');
        scratchesconsoleArrow.classList.remove('bx-chevron-right');
    } else {
        clickScratchesConsole.style.display = 'none';
        scratchesconsoleArrow.classList.add('bx-chevron-right');
        scratchesconsoleArrow.classList.remove('bx-chevron-down');
    }
});

sidebarScratches.addEventListener('click', function() {
    if (clickScratches.style.display === 'none' ){
        clickScratches.style.display = 'block';
        scratchesArrow.classList.add('bx-chevron-down');
        scratchesArrow.classList.remove('bx-chevron-right');
    } else {
        clickScratches.style.display = 'none';
        scratchesArrow.classList.add('bx-chevron-right');
        scratchesArrow.classList.remove('bx-chevron-down');
    }
});