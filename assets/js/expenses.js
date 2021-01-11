import { arrow, categoryIcon } from './svgfile.js';
import { ExpensesList } from './list-expenses.js';

export  class Expenses{
    constructor(
        expensesBar, 
        expensesBarList
    ){
        this.expensesBar = expensesBar;
        this.expensesBarList = expensesBarList;

        this.expensesList = null;
    }

    createElement(element, type, nameClass){
        element = document.createElement(`.${type}`);
        element.className = nameClass;
    }


    createExpensesBarIcon(parentEl){
        const boxIcon = document.createElement('div');

        boxIcon.className = 'expenses-bar__icon';
        boxIcon.innerHTML = arrow;
            
        parentEl.appendChild(boxIcon); 
    }

    createBarIcon(parentEl){
        const barIcon = document.createElement('div');
        barIcon.className = 'expenses-bar__header-icon';
        barIcon.innerHTML = categoryIcon[0];
        parentEl.appendChild(barIcon);
    }

    createExpensesBarTitle(parentEl){
        const title = document.createElement('h2');
        title.className = 'expenses-bar__title'
        title.innerHTML = "Nowa Kategoria";
        parentEl.appendChild(title);
    }

    price(parentEl){
        const price = document.createElement('span');
        price.className = 'expenses-bar__price';
        price.innerHTML = '500,00 zł';
        parentEl.appendChild(price);
    }


    createExpensesBar(){
        const el = []
        
        for (let i = 0; i <= 2; i++) {
            const div = document.createElement('div');
            el.push(div);
        }
        el[0].className = 'expenses-bar__inner';
        el[1].className = 'expenses-bar__header';
        el[2].className = 'expenses-bar__list';
        // el.forEach(elem => console.log(elem));

        // EVENT CLICK 
        el[0].addEventListener('click', function(e){
                if(this.children[0].firstChild.classList.contains('expenses-bar__icon--hide')){
                    this.children[0].firstChild.classList.remove('expenses-bar__icon--hide')
                    el[2].classList.add('expenses-bar__list--hide');
                }else{
                    this.children[0].firstChild.classList.add('expenses-bar__icon--hide')
                    el[2].classList.remove('expenses-bar__list--hide');
                }
        })
        

        el[0].append(el[1]);
        el[0].append(el[2]);

        // CREATE AND ADD ELEMENTS TO EXPENSES WRAPPER 
        this.expensesBar.appendChild(el[0]);
        this.createExpensesBarIcon(el[1]);
        this.createBarIcon(el[1]);
        this.createExpensesBarTitle(el[1]);
        this.price(el[1]);

        this.expensesList = new ExpensesList(el[2]);
        this.expensesList.createListElements(el[2]);
        this.expensesList.createListElements(el[2]);
    }
}