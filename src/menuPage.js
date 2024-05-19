import img1 from './img1.jpg';

const menuPage = () => {
    
    const mainContent = document.getElementById('content');
    // Create headline and create <h1>
    let titleText = document.createTextNode('This is the menu page');
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

        // Append the data
        menuItemContainer.textContent = menuItem.title;
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

let menu001 = new Menu('Cheese Pasta', 'A pasta marinated in cheese', '', 23);
let menu002 = new Menu('Rice Soup', 'Rice with soup', '', 10);
let menu003 = new Menu('Nanaki Chicken', 'Grilled Chicken with sauce', '', 12);
let menu004 = new Menu('Burito', 'A burito with lettice only', '', 5);

// menu library
let menuLibrary = [menu001, menu002, menu003, menu004];


export default menuPage;

