import './style.css';
import img1 from './img1.jpg';

function initialPage() {
    const mainContent = document.getElementById('content');

    // Add image to div#content
    const myImage = new Image();
    myImage.src = img1;
    myImage.classList.add('content-image');
    mainContent.appendChild(myImage);

    return mainContent;
}

initialPage();