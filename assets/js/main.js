import { Expenses } from './expenses.js';

const input = document.querySelector('.input__payment');
const headerElem = document.querySelector('.header');


class App {
    constructor({
        headerElement, 
        input,
        expenses,
        navBar,
        payment
    }){
        this.headerElement = headerElement;
        this.input = input;
        this.expenses = expenses;
        this.navBar = navBar;
        this.payment = payment;

        this.expensesObj = new Expenses();
    }

    createButton(parentElement = this.headerElement){
        const button = document.createElement('button');
        button.innerText = 'CLICK!';

        parentElement.append(button);
    }

    insertValue(e, paymentValue){
        this.payment.innerHTML = paymentValue + ' zł';
    }

    createInput(){
        const input = document.createElement('input');
        input.classList.add('input__payment');
        input.setAttribute('type', 'number');
        input.setAttribute('value', 560);

        input.addEventListener('keypress', (e) =>{
            const paymentValue = input.value;
            if(e.key === 'Enter' && input.value !== ''){
                this.insertValue(e, paymentValue);
                input.value = '';
            }
        })

        this.navBar.appendChild(input);
    }


    //This method run app 
    start(){
        this.createInput();
        
    }
}

const app = new App({
    headerElement: document.querySelector('.header'),
    input: document.querySelector('.input__payment'),
    expenses: document.querySelector('.expenses__value'),
    navBar: document.querySelector('.nav-bar'),
    payment: document.querySelector('.payment__value'),
});

app.start();


// input.addEventListener('keypress', (e) => {
//     if(e.key === "Enter" && input.value !== ''){
//         app.start();
//     }
// })