import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
    modalName: Ember.computed(function () { //Add new role

        return 'newPost';

    }),


  actions: {
    openModal: function () {
      var self = this;
      self.set('title', null);
      self.set('body', null);
      Ember.$('.ui.' + this.get('modalName') + '.modal').modal({
        closable: false,
        detachable: false,
        onDeny: function () {
          return true;
        },
        onApprove: function () {
          var myStore = self.get('store');
          var newPost = myStore.createRecord('post',{
            title: self.get('title'),
            body: self.get('body')
          });
          newPost.save().then(function () {
            return true;
          });
        }
      })
        .modal('show');
    },

  }
});
