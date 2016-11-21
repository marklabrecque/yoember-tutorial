import Ember from 'ember';

export default Ember.Controller.extend({
    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageLongEnough: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('isValidEmail', 'isMessageLongEnough'),

    actions: {        
        saveInvitation() {
            const email = this.get('emailAddress');
            const message = this.get('message');

            const newContact = this.store.createRecord('contact', {
                email: email,
                message: message
            });

            newContact.save().then((response) => {
                this.set('responseMessage', `Thank you! We will be in touch shortly.`);
                this.set('emailAddress', '');
            });
        }
    }
});
