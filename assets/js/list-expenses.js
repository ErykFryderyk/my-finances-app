export class ExpensesList {

    constructor(parentEl){
        this.parentEl = parentEl;
    }

    createListElements(el = this.parentEl, expenseName = 'Element listy', expensePrice = 200){
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.classList.add('list-price');
        span.textContent = `${expensePrice} zł`;
        button.textContent = "Usuń";


        h3.innerHTML = `${expenseName} `;
        
        h3.appendChild(span);  
        li.appendChild(h3);
        li.appendChild(button);
        ul.appendChild(li);

        el.classList.add('expenses-bar__list--hide');
        el.appendChild(ul);
    }

    fun(){
        console.log('działa');
    }
};

