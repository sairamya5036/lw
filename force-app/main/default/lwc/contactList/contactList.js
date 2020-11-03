import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import contact_FirstName_Field from '@salesforce/schema/Contact.FirstName';
import contact_LastName_Field from '@salesforce/schema/Contact.LastName';
import contact_Email_Field from '@salesforce/schema/Contact.Email';
const COLUMNS = [
    {label: 'Contact First Name', fieldName : contact_FirstName_Field.fieldApiName, type : 'text'},
    {label: 'Contact Last Name', fieldName : contact_LastName_Field.fieldApiName, type : 'text'},
    {label: 'Contact Email', fieldName : contact_Email_Field.fieldApiName, type : 'text'}
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts) contacts;

}

