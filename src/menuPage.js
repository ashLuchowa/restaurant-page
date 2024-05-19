import img1 from './img1.jpg';

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

let menu001 = new Menu('Cheese Pasta', 'A pasta marinated in cheese', img1, 23);
let menu002 = new Menu('Rice Soup', 'Rice with soup', img1, 10);
let menu003 = new Menu('Nanaki Chicken', 'Grilled Chicken with sauce', img1, 12);
let menu004 = new Menu('Burito', 'A burito with lettice only', img1, 5);
let menu005 = new Menu('Orange Chicken', 'Boneless skinless chicken breast', img1, 12);
let menu006 = new Menu('Aussie Pizza', 'Beef, fresh tomato, feta cheese and spinash', img1, 24);
let menu007 = new Menu('Tandoori Chicken', 'Marinated in yogurt and spices', img1, 15.90);
let menu008 = new Menu('Croissant', 'Filled with ham and cheese', img1, 8);

// menu library
let menuLibrary = [menu001, menu002, menu003, menu004, menu005, menu006, menu007, menu008];


export default menuPage;

