import {configure} from '@storybook/react'

function loadStories() {
  const req = require.context('../src', true, /.stories.js$/)
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)