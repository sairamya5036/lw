import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    firstNumber = 0;
    secondNumber = 0;
     result = 0;
     value = 'Multiplication';

    get options() {
        return [
            { label: 'Addition', value: 'Addition' },
            { label: 'Substraction', value: 'Substraction' },
            { label: 'Multiplication', value: 'Multiplication' },
            { label: 'Division', value: 'Division' },
        ];
    }
    handleChanges(event){
        if(event.target.name==='fnumber'){
            this.firstNumber= event.target.value;
        }
        if(event.target.name==='snumber'){
            this.secondNumber= event.target.value;
        }
        
        
        
    }
    handleOpChange(event){
            this.value = event.detail.value;
    }

    calculateResult(event){
        console.log('-->Hii'+ this.value);
        if(this.value === 'Addition'){
           this.result = parseInt(this.firstNumber)+ parseInt(this.secondNumber);
        }else if(this.value === 'Substraction'){
            this.result = parseInt(this.firstNumber)- parseInt(this.secondNumber);
        }else if(this.value === 'Multiplication'){
            this.result = parseInt(this.firstNumber)* parseInt(this.secondNumber);
        }else if(this.value === 'Division'){
            this.result = parseInt(this.firstNumber)/ parseInt(this.secondNumber);
        }
    }
    handleReset(event){
        this.firstNumber= null;
        this.secondNumber = null;
        this.value = null;
    }
}