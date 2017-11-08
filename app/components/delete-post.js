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
          return true;
        },
        onApprove: function () {
          post.destroyRecord();
          return true;
        }
      })
        .modal('show');
    }
  }
});
