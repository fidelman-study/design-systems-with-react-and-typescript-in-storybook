import React from 'react';
import { wInfo } from './utils';
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs/react';
import { Button } from './Button';

storiesOf('Button', module)
  .addWithJSX(
    'with background',
    wInfo(`
    Description of the Component 1
    ~~~js
    <button>Click me</button>
    ~~~
    `)(() => <Button bg={color('bg', 'aqua', 'group1')}>Hello World</Button>),
  )
  .addWithJSX(
    'with background 2',
    wInfo('Description of the Component 2')(() => (
      <Button bg={text('bg', 'yellow')}>Hello World</Button>
    )),
  );
