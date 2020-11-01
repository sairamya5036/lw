import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Contact_API_Name from '@salesforce/schema/Contact';
import contact_FirstName_Field from '@salesforce/schema/Contact.FirstName';
import contact_LastName_Field from '@salesforce/schema/Contact.LastName';
import contact_Email_Field from '@salesforce/schema/Contact.Email';


export default class ContactCreator extends LightningElement {

    objApiName = Contact_API_Name;
    fields = [contact_FirstName_Field,contact_LastName_Field,contact_Email_Field];
    handleSuccess(event){
        const toasMsg = new ShowToastEvent({
            title: "Contact Created",
            Message: "Reccord Id is "+ event.detail.id,
            variant: "Success"
        });
        this.dispatchEvent(toasMsg);
    }
    

}