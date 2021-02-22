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
        this.navBarElement = new NavigationBar(this.navBar, this.modalPayment, this.modalCategory, this.buttonSetPayment, this.buttonAddCategory);
        this.listExpenses = new ExpensesList();

        this.input.addEventListener('keypress', (e) =>{
            const paymentValue = this.input.value;
            if(e.key === 'Enter' && this.input.value !== ''){
                this.insertValue(e, paymentValue);
                this.wallet.setValue();
                this.input.value = '';
            }
        })

        //dodawanie kategorii w modalu
        this.btnAddCategory.addEventListener('click', () => {
            this.inputCategory = document.querySelector('.modal__input-category');
            if(this.inputCategory.value !== ''){
                const selectCategory = document.querySelector('#select-category');
                const numberOfOptions = document.querySelectorAll('option').length - 1;
                const inputRadioChecked = document.querySelector('input[type="radio"]:checked').value;

                console.log(inputRadioChecked);
                
                const option = document.createElement('option');
                option.setAttribute('value', numberOfOptions);
                option.innerHTML = `${this.inputCategory.value}`;

                selectCategory.appendChild(option);


                this.expensesObj.createExpensesBar(this.inputCategory.value, inputRadioChecked);
                this.wallet.setValue();
            }else{
                console.log("Wypełnij Input");
            }
        });

        // dodawanie nowej rzeczy do listy  
        this.btnAddItem.addEventListener('click', () => {
            const inputExpenseName = document.querySelector('#expense-name');
            const inputExpenseValue = document.querySelector('#expense-value');
            const inputSelectedOption = document.querySelector('#select-category');
            const expenseLists = document.querySelectorAll('.expenses-bar__list');
            const expenseBars = document.querySelectorAll('.expenses-bar__inner');

            const wrapperElement = expenseLists[inputSelectedOption.value]; 

            if(inputExpenseName.value !== '' && inputExpenseValue.value !== ''){
                const par = expenseBars[inputSelectedOption.value].firstChild.lastChild;

                this.listExpenses.createListElements(wrapperElement, inputExpenseName.value, inputExpenseValue.value);

                inputExpenseName.value = '';
                inputExpenseValue.value = '';
                this.navBarElement.checkClassList();


                this.expensesObj.getElements(par, wrapperElement);
                this.wallet.setValue();


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
    modalPayment: document.querySelector('.modal__add-budget'),
    modalCategory: document.querySelector('.modal__add-category'),
    buttonSetPayment: document.querySelector('.btn-set-payment-value'),
    buttonAddCategory: document.querySelector('.btn-add-category'),
    walletValue: document.querySelector('.wallet__value'),
    btnAddCategory: document.querySelector('#add-category'),
    btnAddItem: document.querySelector('#add-item'),
});

app.start();


