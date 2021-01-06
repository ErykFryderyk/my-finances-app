import { Wallet } from './wallet.js';
import { Expenses } from './expenses.js';

const input = document.querySelector('.input__payment');
const headerElem = document.querySelector('.header');


class App {
    constructor({
        headerElement, 
        input,
        expenses,
        navBar,
        payment,
        expensesBar,
    }){
        this.headerElement = headerElement;
        this.input = input;
        this.expenses = expenses;
        this.navBar = navBar;
        this.payment = payment;
        this.expensesBar = expensesBar;

        this.wallet = new Wallet();
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

    //Navbar input 
    createInput(){
        const input = document.createElement('input');
        input.classList.add('input__payment');
        input.setAttribute('type', 'number');
        input.setAttribute('placeholder', '2000 zł');

        // Event
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
        this.expensesObj.createExpensesBar();
        // this.wallet.setValue(2);
    }
}

const app = new App({
    headerElement: document.querySelector('.header'),
    input: document.querySelector('.input__payment'),
    // expenses: document.querySelector('.expenses__value'),
    navBar: document.querySelector('.nav-bar'),
    payment: document.querySelector('.payment__value'),
    expensesBar: document.querySelector('.expenses-bar'),
});

app.start();


