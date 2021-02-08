export class ExpensesList {

    constructor(parentEl){
        this.parentEl = parentEl;
        this.categoryListPrice = [
            []
        ];
    }

    createListElements(el = this.parentEl, expenseName = 'Element listy', expensePrice = 0){
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.classList.add('list-price');
        span.textContent = `${expensePrice}`;
        button.textContent = "Usuń";


        p.innerHTML = `${expenseName}`;

        this.categoryListPrice[0].push(expensePrice);
        
        li.appendChild(p);
        li.appendChild(span);  
        li.appendChild(button);
        ul.appendChild(li);

        el.classList.add('expenses-bar__list--hide');
        el.appendChild(ul);

        console.log(this.categoryListPrice);
    }
};

