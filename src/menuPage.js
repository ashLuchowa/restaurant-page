import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';

const menuPage = () => {
    
    const mainContent = document.getElementById('content');
    // Create headline and create <h1>
    let titleText = document.createTextNode('Browse our menu page');
    const title = document.createElement('h1');
    // Append title to <h1>
    title.appendChild(titleText);
    // Create <div> with a class name and append  <h1>
    const mainTitle = document.createElement('div');
    mainTitle.classList.add('main-title');
    mainTitle.appendChild(title);
    // Append <div> to main content
    mainContent.appendChild(mainTitle);

    // Menu Content
    // Create and append main-menu div
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('main-menu');
    mainContent.appendChild(mainMenu);

    menuLibrary.forEach((menuItem) => {
        // Create a div for each menu item
        const menuItemContainer = document.createElement('div');
        menuItemContainer.classList.add('menu-item');
        mainMenu.appendChild(menuItemContainer);

        // Append Image
        const menuImage = new Image();
        menuImage.src = menuItem.img;
        menuItemContainer.appendChild(menuImage);

        // Append Title
        const menuTitle = document.createElement('h2');
        menuTitle.textContent = menuItem.title;
        menuItemContainer.appendChild(menuTitle);

        // Append Description
        const menuDescription = document.createElement('p');
        menuDescription.textContent = menuItem.description;
        menuItemContainer.appendChild(menuDescription);

        // Append Price
        const menuCost = document.createElement('p');
        menuCost.classList.add('menu-cost');
        menuCost.textContent = `$${menuItem.price}`;
        menuItemContainer.appendChild(menuCost);
    });

    return mainContent;
}

class Menu {
    constructor(title, description, img, price) {
        this.title = title;
        this.description = description;
        this.img = img;
        this.price = price;
    }
}

let menu001 = new Menu('Cheese Pasta', 'A pasta marinated in cheese', img2, 23);
let menu002 = new Menu('Rice Soup', 'Rice with soup', img3, 10);
let menu003 = new Menu('Nanaki Chicken', 'Grilled Chicken with sauce', img4, 12);
let menu004 = new Menu('Burito', 'A burito with lettice only', img5, 5);
let menu005 = new Menu('Orange Chicken', 'An actual live chicken', img6, 12);
let menu006 = new Menu('Aussie Pizza', 'Beef, fresh tomato, feta cheese and spinash', img7, 24);
let menu007 = new Menu('Tandoori Chicken', 'Marinated in yogurt and spices', img8, 15.90);
let menu008 = new Menu('Croissant', 'Filled with ham and cheese', img9, 8);

// menu library
let menuLibrary = [menu001, menu002, menu003, menu004, menu005, menu006, menu007, menu008];


export default menuPage;

