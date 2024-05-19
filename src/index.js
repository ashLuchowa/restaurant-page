// Import CSS
import './style.scss';

// Import function
import initialPage from './initialPage';
import menuPage from './menuPage';

function component() {
    const mainContent = document.getElementById('content');
    const buttons = document.querySelectorAll('.main-nav button');

    // Clicking menu tab
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if(e.target.textContent === 'Home') {
                mainContent.innerHTML = '';
                initialPage();
            } else if(e.target.textContent === 'Menu') {
                mainContent.innerHTML = '';
                menuPage();
            }
        });
    });

    initialPage();
}

component();