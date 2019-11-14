/* eslint-disable no-console */
import { LightningElement, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class secondComp extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    @track message;
	connectedCallback() {
        console.log('connectedCallback Called');
		// subscribe to bearListUpdate event
        registerListener('pubsubEvent', this.handlePubSub, this);
        console.log('connectedCallback Called blow');
    }  
	disconnectedCallback() {
		// unsubscribe from bearListUpdate event
        unregisterAllListeners(this);
        console.log('DisconnectedCallback Called');
    }
    handlePubSub(event){
        console.log('handlePubSub Called');
        this.message = event.detail.Message;
        console.log('Result : '+JSON.stringify(event.detail));
    }
}