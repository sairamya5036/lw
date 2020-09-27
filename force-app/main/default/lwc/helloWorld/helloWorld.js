import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track greeting = 'World';
    areDetailsVisible = false;
    changeHandler(event) {
        this.greeting = event.target.value;
    }
    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }
}