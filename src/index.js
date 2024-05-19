// Import CSS
import './style.scss';

// Import function
import initialPage from './initialPage';
import menuPage from './menuPage';
import contactPage from './contactPage';

function component() {
    const mainContent = document.getElementById('content');
    const buttons = document.querySelectorAll('.main-nav button');

    // Clicking menu tab
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            addActiveClass(button);

            if(e.target.textContent === 'Home') {
                generatePage(mainContent, initialPage);
            } else if(e.target.textContent === 'Menu') {
                generatePage(mainContent, menuPage);
            } else if(e.target.textContent === 'Contact') {
                generatePage(mainContent, contactPage);
            }
        });
    });

    initialPage();
}

// Add active class to buttons
function addActiveClass(button) {
    const activeClass = document.querySelector('.active');
    if(activeClass) {
        activeClass.classList.remove('active');
    }
    button.classList.add('active');
}

// Generate page function
function generatePage(mainContent, pageModules) {
    mainContent.innerHTML = '';
    return pageModules();
}

component();