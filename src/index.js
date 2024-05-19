import './style.css';
import img1 from './img1.jpg';

const mainContent = document.getElementById('content');

const myImage = new Image();
myImage.src = img1;

mainContent.appendChild(myImage);

console.log('hi');