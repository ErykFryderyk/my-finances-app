import { arrow, categoryIcon } from './svgfile.js';

export  class Expenses{
    
    expensesWrapper = document.querySelector('.expenses-bar');
    expensesBox = null;

    constructor(){

    }


    createExpensesBar(){
        const el = [] 
        for (let i = 0; i < 2; i++) {
            const div = document.createElement('div');
            el[i].push(div);
            expensesBox.addEventListener('click', function(){
                console.log('SIEMA');
            })
        }

        el[0].className = 
        el[0]= document.createElement('div');
        

        expensesBox.className = 'expenses-bar__inner';
        this.expensesBox = expensesBox;

        // return expensesBar;
        console.log(this.expensesBox);
        this.createBoxIcon();
        this.createBarIcon();
        this.createExpensesBarTitle();
        this.price();
        this.expensesWrapper.appendChild(this.expensesBox);
        console.log(this.expensesWrapper);
    }

    createBarIcon(){
        const barIcon = document.createElement('div');
        barIcon.className = 'bar__icon';
        barIcon.innerHTML = categoryIcon[0];

        this.expensesBox.appendChild(barIcon);
    }

    createExpensesBarTitle(){
        const title = document.createElement('h2');
        title.className = 'bar-title'
        title.innerHTML = "Nowa Kategoria";
        this.expensesBox.appendChild(title);
    }

    createBoxIcon(){
        const boxIcon = document.createElement('div');

        boxIcon.className = 'box__icon';
        boxIcon.innerHTML = arrow;
            
        this.expensesBox.appendChild(boxIcon); 
    }

    price(){
        const price = document.createElement('span');
        price.className = 'bar-price';

        price.innerHTML = '500,00 zł';
        
        this.expensesBox.appendChild(price);

    }
}