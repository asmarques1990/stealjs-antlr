import Component from 'can-component';
import Map from 'can-map';
import template from './home.stache';
import 'can-map-define';
import 'chat/antlr';

Component.extend({
  tag: 'home-page',
  view: template,
  viewModel: Map.extend({
    define: {
      greeting: {
        value: 'Welcome to your new CanJS App!'
      }
    }
  })
});

