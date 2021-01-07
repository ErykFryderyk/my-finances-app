export class ExpensesList {

    constructor(parentEl){
        this.parentEl = parentEl
    }

    createListElements(){
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const h3 = document.createElement('h3');

        h3.innerHTML = 'To jest element listy';
        

        li.appendChild(h3);
        ul.appendChild(li);

        this.parentEl.classList.add('xD');
        this.parentEl.appendChild(ul);
        // this.elem.appendChild(ul);
        console.log(this.parentEl);
        console.log(this.elem);
    }
};

