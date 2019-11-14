/* eslint-disable no-alert */
import { LightningElement, track } from 'lwc';

export default class eventComp1 extends LightningElement {
    @track message = "Hey"; 
    handleClick(){
       let value = this.template.querySelector("lightning-input").value;
       //alert(value);
       const mgsEvent = new CustomEvent('sendmessage', {detail : {message : value}});
       this.dispatchEvent(mgsEvent);
    }
}