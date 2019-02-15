import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
setAddon(JSXAddon);

function loadStories() {
  require('./welcomeStory');
  const req = require.context('../src', true, /.stories.js$/);
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
