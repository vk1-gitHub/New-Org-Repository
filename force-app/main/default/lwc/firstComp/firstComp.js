import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class firstComp extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    handleClick(){
        fireEvent(this.pageRef, 'pubsubEvent', {detail : {Message : 'Hey, How Are You'}});
    }
}