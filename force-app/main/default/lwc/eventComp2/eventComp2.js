import { LightningElement, track } from 'lwc';

export default class eventComp2 extends LightningElement {
    @track message;
    getMessage(event){
       var message = event.detail.message;
       this.message = message;
    }
}