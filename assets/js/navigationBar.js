export class NavigationBar {
    constructor(wrapper, modal, button){
        this.wrapper = wrapper;
        this.modal = modal;
        this.button = button;
    }

    createElement(){
        this.button.addEventListener('click', () => {
            this.modal.classList.toggle('modal--active')
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