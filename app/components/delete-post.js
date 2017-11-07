import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  post: null,

  modalName: Ember.computed(function () {

      return 'deletePost' + this.get('post').id;

    }),



  actions: {
    openModal: function (post) {
      var self = this;
      Ember.$('.ui.' + this.get('modalName') + '.modal').modal({

        closable: false,
        detachable: false,
        onDeny: function () {
          Ember.$('.ui.' + self.get('modalName') + '.modal').modal('hide');
        },
        onApprove: function () {
          post.destroyRecord();
          Ember.$('.ui.' + self.get('modalName') + '.modal').modal('hide');

        }
      })
        .modal('show');
    }
  }
});
