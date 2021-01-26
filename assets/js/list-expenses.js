export class ExpensesList {

    constructor(parentEl){
        this.parentEl = parentEl;
        this.counter = 1;
    }

    createListElements(){
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const span = document.createElement('span');

        span.classList.add('list-price');
        span.textContent = 200;

        h3.innerHTML = `${this.counter}. Element listy `;
        this.counter++;
        h3.appendChild(span);  

        li.appendChild(h3);
        ul.appendChild(li);

        this.parentEl.classList.add('expenses-bar__list--hide');
        this.parentEl.appendChild(ul);
    }
};

