import './style.css';
import img1 from './img1.jpg';

function initialPage() {
    const mainContent = document.getElementById('content');

    // Create headline and create <h1>
    let titleText = document.createTextNode('Welcome to Kaligula Restaurant');
    const title = document.createElement('h1');
    // Append title to <h1>
    title.appendChild(titleText);
    // Create <div> with a class name and append  <h1>
    const mainTitle = document.createElement('div');
    mainTitle.classList.add('main-title');
    mainTitle.appendChild(title);
    // Append <div> to main content
    mainContent.appendChild(mainTitle);

    // Load image
    const myImage = new Image();
    myImage.src = img1;
    myImage.classList.add('content-image');
    // Create container div with a class name and append <image>
    const mainImageContainer = document.createElement('div');
    mainImageContainer.classList.add('main-image');
    mainImageContainer.appendChild(myImage);
    // Append container div to main content
    mainContent.appendChild(mainImageContainer);
    

    // Create text node and create <p>
    let text = document.createTextNode("Where culinary excellence meets an inviting atmosphere. Here, we blend traditional flavors with modern culinary techniques to bring you an unforgettable dining experience.");
    const para = document.createElement('p');
    // Append text node to <p> tag
    para.appendChild(text);
    // Append <p> to <div> with a class name
    const mainPara = document.createElement('div');
    mainPara.classList.add('main-para');
    mainPara.appendChild(para);
    // Append <div> to main content
    mainContent.appendChild(mainPara);

    return mainContent;
}

initialPage();