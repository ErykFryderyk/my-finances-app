const input = document.querySelector('.input__payment');

class App {
    constructor(inputElem, elem){
        this.inputElem = inputElem;
        this.elem = elem;
    }
    start(){
        console.log(this.inputElem);
        console.log(this.elem)
        // this.elem.innerHTML = 2;
        const span = document.querySelector('span');
        span.innerHTML = 'cześć';
        this.elem.appendChild(span);
    }
}






const app = new App({
    inputElem: document.querySelector('.input__payment'),
    elem: document.querySelector('.expenses__value').textContent,
});



input.addEventListener('keypress', (e) => {
    if(e.key === "Enter" && input.value !== ''){
        app.start();
    }
})