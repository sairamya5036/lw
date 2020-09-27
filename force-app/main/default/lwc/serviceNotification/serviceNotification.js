import { LightningElement, track } from 'lwc';
import { subscribe} from 'lightning/empApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class EmpApiLWC extends LightningElement {
    @track channelName = '/topic/SalesforceInstanceLog';
    //strResponse = null;
    //@track isChangeCaptured = false;
    subscription = {};
    message1 = {};
    connectedCallback() {
        this.handleSubscribe();
    }
    

/*
    disconnectedCallback(){
        this.handleUnsubscribe();

    }*/


    /*constructor() {
        super();
        //if(isChangeCaptured == true){
            const toastEvnt = new ShowToastEvent( {
                title: 'Did it work!!',
                message: 'This is your toast message',
                variant: 'warning',
                mode:'sticky'
          })
          this.dispatchEvent (toastEvnt);
          
        this.handleSubscribe();
        //}
        
    }*/
    // Handles subscribe button click
    handleSubscribe() {
        // Callback invoked whenever a new event message is received
        const messageCallback = function(response) {
            console.log('New message received : ', JSON.stringify(response));

            this.message1 = JSON.stringify(response);
            //this.handleToastEvent();
            console.log('-->',this.message1);
            this.template.querySelector('c-display-toast-message').handleToast();
            console.log('-->displ');
            //this.strResponse = JSON.stringify(response);
            //console.log('@@@2Successfully New Message  : ', this.strResponse);
            // Response contains the payload of the new message received
                
        };

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, messageCallback).then(response => {
            // Response contains the subscription information on successful subscribe call
            console.log('Successfully subscribed to : ', JSON.stringify(response.channel));
            console.log('@@@1Successfully New Message  : ', JSON.stringify(response));
            
            

          this.subscription = response;
        });
    }
    // Handles unsubscribe button click
   /* handleUnsubscribe() {
        this.toggleSubscribeButton(false);

        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, response => {
            console.log('unsubscribe() response: ', JSON.stringify(response));
            // Response is true for successful unsubscribe
        });
    }*/

   
}// It did work!!!!! hurray