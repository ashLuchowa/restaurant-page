import img1 from './assets/img1.jpg';

const contactPage = () => {
    
    const mainContent = document.getElementById('content');
    // Create headline and create <h1>
    let titleText = document.createTextNode('Contact Us');
    const title = document.createElement('h1');
    // Append title to <h1>
    title.appendChild(titleText);
    // Create <div> with a class name and append  <h1>
    const mainTitle = document.createElement('div');
    mainTitle.classList.add('main-title');
    mainTitle.appendChild(title);
    // Append <div> to main content
    mainContent.appendChild(mainTitle);

    createFormInputs(mainContent);
}

// Contact Form Class
class CreateInputs {
    constructor(element, attribute, name, id, properties) {
        this.element = element,
        this.attribute = attribute,
        this.name = name,
        this.id = id;
        this.properties = properties;
    }
}

// Form Input boxes
const firstNameLabel = new CreateInputs('label', 'for', 'First Name', 'firstName', 'firstName');
const firstNameInput = new CreateInputs('input', 'type', 'First Name', 'firstName', 'text');
const lastNameLabel = new CreateInputs('label', 'for', 'Last Name', 'lastName', 'lastName');
const lastNameInput = new CreateInputs('input', 'type', 'Last Name', 'lastName', 'text');
const phoneLabel = new CreateInputs('label', 'for', 'Phone Number', 'phoneNumber', 'phoneNumber');
const phoneInput = new CreateInputs('input', 'type', 'Phone Number', 'phoneNumber', 'number');
const emailLabel = new CreateInputs('label', 'for', 'Email', 'email', 'email');
const emailInput = new CreateInputs('input', 'type', 'Email', 'email', 'email');
const messageLabel = new CreateInputs('label', 'for', 'Leave a message', 'message', 'message');
const messageInput = new CreateInputs('input', 'type', 'message', 'message', 'message');
const submitBtn = new CreateInputs('input', 'type', 'submit', 'submit', 'submit');

// Form Array
const formArray = [firstNameLabel, firstNameInput, lastNameLabel, lastNameInput, phoneLabel, phoneInput,
                   emailLabel, emailInput, messageLabel, messageInput, submitBtn];

// Create form inputs and labels
function createFormInputs(mainContent) {

    // Create form container
    const mainFormContainer = document.createElement('form');
    mainFormContainer.classList.add('main-form');
    mainContent.appendChild(mainFormContainer);

    // Generate form inputs
    formArray.forEach((formArrayItem) => {
        if(formArrayItem.element === 'label') {
            const formItem = document.createElement(formArrayItem.element);
            const formText = document.createTextNode(formArrayItem.name);
            formItem.setAttribute(formArrayItem.attribute, formArrayItem.properties);
            mainFormContainer.appendChild(formItem);
            formItem.appendChild(formText);
        } else {
            const formItem = document.createElement(formArrayItem.element);
            const formText = document.createTextNode(formArrayItem.name);
            formItem.setAttribute(formArrayItem.attribute, formArrayItem.properties);
            formItem.setAttribute('name', formArrayItem.id);
            formItem.setAttribute('id', formArrayItem.id);
            mainFormContainer.appendChild(formItem);
            formItem.appendChild(formText);
        }
    });

}

export default contactPage;

