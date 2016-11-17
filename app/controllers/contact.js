import Ember from 'ember';

export default Ember.Controller.extend({
    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageLongEnough: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('isValidEmail', 'isMessageLongEnough'),

    actions: {        
        saveInvitation() {
            alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
        }
    }
});
