import { LightningElement } from 'lwc';
import templateOne from './multipleComponentsRender.html';
import templateTwo from './secondComponent.html';

export default class MultipleComponentsRender extends LightningElement {
    templateOne = true;
    render(){
        return this.templateOne ? templateOne  : templateTwo
    }
    switchTemplate(){
        this.templateOne = this.templateOne === true ? false : true ;
    }
}