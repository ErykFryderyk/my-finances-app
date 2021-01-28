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
        const button = document.createElement('button');

        span.classList.add('list-price');
        span.textContent = 200;
        button.textContent = "Usuń";


        h3.innerHTML = `${this.counter}. Element listy `;
        this.counter++;
        
        h3.appendChild(span);  
        li.appendChild(h3);
        li.appendChild(button);
        ul.appendChild(li);

        this.parentEl.classList.add('expenses-bar__list--hide');
        this.parentEl.appendChild(ul);
    }
};

