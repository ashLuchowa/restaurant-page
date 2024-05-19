// Import CSS
import './style.scss';

// Import function
import initialPage from './initialPage';

function component() {
    const buttons = document.querySelectorAll('.main-nav button');

    // Clicking menu tab
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if(e.target.textContent === 'Home') {
                if(!initialPage) {
                    initialPage();
                }
            }
        }, {once:true});
    });

    // Display initial page
    initialPage();
}

component();