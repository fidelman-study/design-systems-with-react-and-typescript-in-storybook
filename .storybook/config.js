import { configure } from '@storybook/react';

function loadStories() {
  require('./welcomeStory');
  const req = require.context('../src', true, /.stories.js$/);
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
