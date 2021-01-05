export class Wallet {

    walletElem = document.querySelector('.wallet__value');
    constructor(){
        this.price = 2;
        
    }

    setValue(){ 

        this.walletElem.classList.add('price');
    }
}