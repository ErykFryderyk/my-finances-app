export class Wallet {

    
    constructor(elem){
        this.elem = elem;
        this.price = 5000;
    }

    calculation(){
        const prices = document.querySelectorAll('.expenses-bar__price');
        const priceArr = [];

        
        prices.forEach(el =>{
            priceArr.push(parseInt(el.innerHTML));
        });
        console.log(priceArr);
        
        let sum = 0;
        for (let i = 0; i < priceArr.length; i++) {
            sum += priceArr[i];
        }

        this.price = this.price - sum;

        console.log(this.price);
    }

    setValue(){ 
        console.log(this.elem);
        // this.walletElem.classList.add('price');
        this.calculation();
        this.elem.innerHTML = this.price + "zł";
        
    }
}



// ZRobiłem nową klasę która umożliwa zliczanie wartości poszczególnych wydatków które dodaliśmy do listy i obliczyć ile zostało nam srodków do wykorzystania