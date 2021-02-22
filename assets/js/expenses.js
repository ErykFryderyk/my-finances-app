import { arrow, categoryIcon } from './svgfile.js';

export  class Expenses{

    
    constructor(
        expensesBar, 
        expensesBarList
        ){
            this.expensesBar = expensesBar;
            this.expensesBarList = expensesBarList;
            
            this.expensesList = null;
            this.elementsArray = [];

            this.array = [];
        }

    createExpensesBarIcon(parentEl){
        const boxIcon = document.createElement('div');

        boxIcon.className = 'expenses-bar__icon';
        boxIcon.innerHTML = arrow;
            
        parentEl.appendChild(boxIcon); 
    }

    createBarIcon(parentEl, radioValue){
        const barIcon = document.createElement('div');
        barIcon.className = 'expenses-bar__header-icon';
        barIcon.innerHTML = categoryIcon[radioValue];
        parentEl.appendChild(barIcon);
    }

    createExpensesBarTitle(parentEl, nameCategory = 'Nowa Kategoria'){
        const title = document.createElement('h2');
        title.className = 'expenses-bar__title'
        title.innerHTML = nameCategory;
        parentEl.appendChild(title);
    }

    price(parentEl, countedValues = 0){
        const price = document.createElement('span');
        price.className = 'expenses-bar__price';
        price.innerHTML = countedValues;
        parentEl.appendChild(price);
    }


    createExpensesBar(inputValue, radioValue){
        const el = []
        
        for (let i = 0; i <= 2; i++) {
            const div = document.createElement('div');
            el.push(div);
        }
        el[0].className = 'expenses-bar__inner';
        el[1].className = 'expenses-bar__header';
        el[2].className = 'expenses-bar__list';

        // EVENT CLICK 
        el[0].addEventListener('click', function(){
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
        this.createBarIcon(el[1], radioValue);
        this.createExpensesBarTitle(el[1], inputValue);
        this.price(el[1]);
    }

    getElements(string, numberOfElement){
        const listPriceArray = [];
        const listChildrenLength = numberOfElement.children.length;
        let addedPrice = null;

        for (let i = 0; i < listChildrenLength; i++) {
            const element = numberOfElement.children[i].firstChild.children[1].innerHTML;

            listPriceArray.push(parseInt(element));
        }

        listPriceArray.forEach(price => {
            addedPrice = addedPrice + price;
        });

        string.innerHTML = addedPrice;
    }
}