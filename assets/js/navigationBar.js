export class NavigationBar {
    constructor(wrapper, modalPayment, modalCategory, buttonSet, buttonAdd){
        this.wrapper = wrapper;
        this.modalPayment = modalPayment;
        this.modalCategory = modalCategory;
        this.button = buttonSet;
        this.buttonCategory = buttonAdd;

        this.inputCategory;
    }

    setEvents(){
        this.button.addEventListener('click', () => {
            this.modalPayment.classList.toggle('modal--active');
        });

        this.buttonCategory.addEventListener('click', () => {
            this.modalCategory.classList.toggle('modal__add-category--hide');
        });

        
        const div = document.createElement('div');
        const button = document.createElement('button');
        
        button.textContent = '+';
        button.addEventListener('click', () => {
            this.modal.classList.toggle('modal--active')
        });

        div.setAttribute('class', 'nav-bar__add-new-expenses');
        div.appendChild(button);
        // this.wrapper.appendChild(div);

    }
}