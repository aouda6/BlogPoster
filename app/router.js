import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('post');
  this.route('posts');
  this.route('about');
  this.route('contact', function() {
    this.route('email');
    this.route('phone');
  });
});

export default Router;
