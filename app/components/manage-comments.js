import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  ID: null,
  done: false,

  commentsModel: Ember.computed('done', function(){
     return this.get('store').query('comment', {'post': this.ID});
    }),

  actions: {
    openModal: function () {
      var self = this;
      this.set('statement', null);
      Ember.$('.ui.newComment.modal').modal({
        closable: false,
        detachable: false,
        onDeny: function () {
          return true;
        },
        onApprove: function () {
          var myStore = self.get('store');
          var post = myStore.peekRecord('post', self.ID);
          var newComment = myStore.createRecord('comment',{
            statement: self.get('statement'),
            timeStamp: new Date(),
            post: post
          });
          newComment.save().then(function () {
            self.set('statement', null);
            self.set('done', true);
            return true;

          });
        }
      })
        .modal('show');
    },

  }
});

