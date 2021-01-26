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
        modalPayment,
        modalCategory,
        buttonSetPayment,
        buttonAddCategory,
        walletValue,
    }){
        this.navBar = navBar;
        this.input = inputPayment;
        this.payment = payment;
        this.expensesBar = expensesBar;
        this.expensesBarList = expensesBarList;
        this.modalPayment = modalPayment;
        this.modalCategory = modalCategory;
        this.buttonSetPayment = buttonSetPayment;
        this.buttonAddCategory = buttonAddCategory;
        this.walletValue = walletValue;
        

        this.wallet = new Wallet(this.walletValue, this.payment);
        this.expensesObj = new Expenses(this.expensesBar, this.expensesBarList);
        this.navBarElement = new NavigationBar(this.navBar, this.modalPayment, this.modalCategory, this.buttonSetPayment, this.buttonAddCategory);

        this.input.addEventListener('keypress', (e) =>{
            const paymentValue = this.input.value;
            if(e.key === 'Enter' && this.input.value !== ''){
                this.insertValue(e, paymentValue);
                this.wallet.setValue();
                this.input.value = '';
            }
        })
    }

    insertValue(e, paymentValue){
        this.payment.innerHTML = paymentValue;
    }

    //Run app 
    start(){
        // this.createInput();
        this.expensesObj.createExpensesBar();
        this.expensesObj.createExpensesBar();
        this.expensesObj.createExpensesBar();
        this.navBarElement.setEvents();
        this.wallet.setValue();
    }
}

const app = new App({
    navBar: document.querySelector('.nav-bar'),
    inputPayment: document.querySelector('.input__payment'),
    payment: document.querySelector('.payment__value'),
    expensesBar: document.querySelector('.expenses-bar'),
    expensesBarList: document.querySelector('.expenses-bar__list'),
    modalPayment: document.querySelector('.modal__payment'),
    modalCategory: document.querySelector('.modal__add-category'),
    buttonSetPayment: document.querySelector('.btn-set-payment-value'),
    buttonAddCategory: document.querySelector('.btn-add-category'),
    walletValue: document.querySelector('.wallet__value')
});

app.start();


