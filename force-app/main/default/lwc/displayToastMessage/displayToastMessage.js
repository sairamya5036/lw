import { LightningElement,api } from 'lwc';

export default class DisplayToastMessage extends LightningElement {
    @api
    handleToast(){
        const toastEvnt = new ShowToastEvent( {
            title: 'Did it work!!',
            message: 'This is your toast message',
            variant: 'warning',
            mode:'sticky'
            /*message: "Record {0} created! See it {1}!",
            messageData: [
            response.data.sobject.Log_Description__c,
            {
                url: "/"+ response.data.sobject.id,
                label: data.sobject.Name
            }
        ]*/
      })
      this.dispatchEvent (toastEvnt);
    }
}