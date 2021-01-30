import { Wallet } from './wallet.js';
import { Expenses } from './expenses.js';
import { ExpensesList } from './list-expenses.js'
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
        btnAddCategory,
        btnAddItem
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
        this.btnAddCategory = btnAddCategory;
        this.inputCategory;
        this.btnAddItem = btnAddItem;
        

        this.wallet = new Wallet(this.walletValue, this.payment);
        this.expensesObj = new Expenses(this.expensesBar, this.expensesBarList);
        this.expensesList = new ExpensesList();
        this.navBarElement = new NavigationBar(this.navBar, this.modalPayment, this.modalCategory, this.buttonSetPayment, this.buttonAddCategory);

        this.input.addEventListener('keypress', (e) =>{
            const paymentValue = this.input.value;
            if(e.key === 'Enter' && this.input.value !== ''){
                this.insertValue(e, paymentValue);
                this.wallet.setValue();
                this.input.value = '';
            }
        })

        this.btnAddCategory.addEventListener('click', () => {
            this.inputCategory = document.querySelector('.modal__input-category');
            if(this.inputCategory.value !== ''){
                this.expensesObj.createExpensesBar(this.inputCategory.value);
                this.wallet.setValue();
            }
        });

        this.btnAddItem.addEventListener('click', () => {
            const inputExpenseName = document.querySelector('#expense-name');
            const inputExpenseValue = document.querySelector('#expense-value');
            const inputSelectCategory = document.querySelector('#select-category');

            
            if(inputExpenseName.value !== '' && inputExpenseValue.value !== ''){
                console.log(inputExpenseName.value);
                console.log(inputSelectCategory.value);
                console.log(inputSelectCategory.value);
                 
                this.expensesList.createListElements();
                
            }else{
                console.log('Wypełnij inputy');
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
        const elem = document.querySelectorAll('.expenses-bar__inner');
        elem.forEach(el => {
            console.log(el.children);
        })
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
    walletValue: document.querySelector('.wallet__value'),
    btnAddCategory: document.querySelector('#add-category'),
    btnAddItem: document.querySelector('#add-item'),
});

app.start();


