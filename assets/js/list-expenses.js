export class ExpensesList {

    constructor(parentEl){
        this.parentEl = parentEl;
    }

    createListElements(el = this.parentEl, expenseName = 'Element listy', expensePrice = 10){
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.classList.add('list-price');
        span.textContent = `${expensePrice}`;
        button.textContent = "Usuń";
        p.innerHTML = `${expenseName}`;
        
        li.appendChild(p);
        li.appendChild(span);  
        li.appendChild(button);
        ul.appendChild(li);

        el.classList.add('expenses-bar__list--hide');
        el.appendChild(ul);
    }
};

