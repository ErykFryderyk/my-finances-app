import { Wallet } from './wallet.js';
import { Expenses } from './expenses.js';
import { NavigationBar } from './navigationBar.js';

class App {
    constructor({
        navBar,
        inputPayment,
        payment,
        expensesBar,
        expensesBarList,
        modal,
        addButton,
        walletValue,
    }){
        this.navBar = navBar;
        this.input = inputPayment;
        this.payment = payment;
        this.expensesBar = expensesBar;
        this.expensesBarList = expensesBarList;
        this.modal = modal;
        this.addButton = addButton;
        this.walletValue = walletValue;

        this.wallet = new Wallet(this.walletValue);
        this.expensesObj = new Expenses(this.expensesBar, this.expensesBarList);
        this.navBarElement = new NavigationBar(this.navBar, this.modal, this.addButton);


        this.input.addEventListener('keypress', (e) =>{
            const paymentValue = this.input.value;
            if(e.key === 'Enter' && this.input.value !== ''){
                this.insertValue(e, paymentValue);
                this.input.value = '';
            }
        })
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

        // this.navBar.appendChild(input);
    }


    //Run app 
    start(){
        // this.createInput();
        this.expensesObj.createExpensesBar();
        this.expensesObj.createExpensesBar();
        this.expensesObj.createExpensesBar();
        this.navBarElement.createElement();
        this.wallet.setValue();
    }
}

const app = new App({
    navBar: document.querySelector('.nav-bar'),
    inputPayment: document.querySelector('.input__payment'),
    payment: document.querySelector('.payment__value'),
    expensesBar: document.querySelector('.expenses-bar'),
    expensesBarList: document.querySelector('.expenses-bar__list'),
    modal: document.querySelector('.modal'),
    addButton: document.querySelector('.nav-bar__add-new-expenses button'),
    walletValue: document.querySelector('.wallet__value')
});

app.start();


