import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module).add('with background', () => (
  <Button bg="aqua">Hello World</Button>
));

storiesOf('Button', module).add('with background 2', () => (
  <Button bg="yellow">Hello World</Button>
));
