public with sharing class ContactController {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        return [
            Select FirstName,LastName,Email from Contact 
            where FirstName!= null and LastName!= null and Email!= null 
            WITH SECURITY_ENFORCED LIMIT 10
        ];
    }
}
