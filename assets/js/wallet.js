export class Wallet {

    
    constructor(elem){
        this.elem = elem;
        this.price = null;
    }

    calculation(){
        const prices = document.querySelectorAll('.expenses-bar__price');
        const paymentPrice = document.querySelector('.payment__value');
        const priceArr = [];
        this.price = parseInt(paymentPrice.innerHTML);
        
        prices.forEach(el =>{
            priceArr.push(parseInt(el.innerHTML));
        });
        
        let sum = 0;
        for (let i = 0; i < priceArr.length; i++) {
            sum += priceArr[i];
        }

        this.price = this.price - sum;
    }

    setValue(){ 
        this.calculation();
        this.elem.innerHTML = this.price;
    }
}
