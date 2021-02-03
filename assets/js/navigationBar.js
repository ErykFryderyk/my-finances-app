export class NavigationBar {
    constructor(wrapper, modalPayment, modalCategory, buttonSet, buttonAdd){
        this.wrapper = wrapper;
        this.modalPayment = modalPayment;
        this.modalCategory = modalCategory;
        this.modalItem = document.querySelector('.modal__add-item');
        this.button = buttonSet;
        this.buttonCategory = buttonAdd;
        this.buttonAddItem = document.querySelector('.btn-add-item');

        this.inputCategory;
    }

    
    setEvents(){
        this.button.addEventListener('click', () => {
            this.modalCategory.classList.add('modal__add-category--hide');
            this.modalItem.classList.add('modal__add-item--hide');
            this.modalPayment.classList.toggle('modal--active');
        });

        this.buttonCategory.addEventListener('click', () => {
            this.modalPayment.classList.remove('modal--active');
            this.modalItem.classList.add('modal__add-item--hide');
            this.modalCategory.classList.toggle('modal__add-category--hide');
        });

        this.buttonAddItem.addEventListener('click', () => {
            this.checkClassList();
        });
    }
    
    checkClassList(){
        this.modalCategory.classList.add('modal__add-category--hide');
        this.modalPayment.classList.remove('modal--active');
        this.modalItem.classList.toggle('modal__add-item--hide');
    }
    
}