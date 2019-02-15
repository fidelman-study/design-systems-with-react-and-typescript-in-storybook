import React from 'react';
import { wInfo } from './utils';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .addWithJSX(
    'with background',
    wInfo(`
    Description of the Component 1
    ~~~js
    <button>Click me</button>
    ~~~
    `)(() => <Button bg="aqua">Hello World</Button>),
  )
  .addWithJSX(
    'with background 2',
    wInfo('Description of the Component 2')(() => (
      <Button bg="yellow">Hello World</Button>
    )),
  );
