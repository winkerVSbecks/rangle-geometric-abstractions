import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import styled from 'styled-components';
import 'tachyons';

import { Heading, Button, Toggle } from '../Primitives';
import { ColourSelector } from '../ColourSelector';
import { GridSizeSelector } from '../GridSizeSelector';
import { Navigation } from '../Navigation';

const Showcase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ToggleWrapper = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Toggle
        enabled={toggle}
        onClick={() => {
          setToggle(!toggle);
        }}
      />
    </div>
  );
};

storiesOf('Primitives', module)
  .add('Heading', () => (
    <div className="ma4">
      <Heading className="f1">Hello this is a Heading</Heading>
    </div>
  ))
  .add('Button', () => (
    <Showcase>
      <Button href="#" className="mr4" style={{ minWidth: '5rem' }}>
        Link
      </Button>

      <Button as="button" className="mr4" onClick={action('clicked')}>
        as Button
      </Button>

      <Button as="button" onClick={action('clicked')}>
        With emoji{' '}
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </Showcase>
  ))
  .add('Toggle Button', () => (
    <Showcase>
      <ToggleWrapper />
    </Showcase>
  ));

storiesOf('ColourSelector', module)
  .add('display swatches', () => (
    <Showcase>
      <div className="w-50">
        <ColourSelector />
      </div>
    </Showcase>
  ))
  .add('with selected value', () => (
    <Showcase>
      <div className="w-50">
        <ColourSelector value={'rgba(225, 233, 238, 1)'} />
      </div>
    </Showcase>
  ));

storiesOf('GridSizeSelector', module)
  .add('display options', () => (
    <Showcase>
      <GridSizeSelector className="center" />
    </Showcase>
  ))
  .add('with selected value', () => (
    <Showcase>
      <GridSizeSelector className="center" value={9} />
    </Showcase>
  ));

storiesOf('Navigation', module)
  .add('default', () => (
    <Showcase>
      <div className="w-75">
        <Navigation />
      </div>
    </Showcase>
  ))
  .add('signed-in', () => (
    <Showcase>
      <div className="w-75">
        <Navigation signedIn />
      </div>
    </Showcase>
  ))
  .add('with a link', () => (
    <Showcase>
      <div className="w-75">
        <Navigation goTo="Gallery" />
      </div>
    </Showcase>
  ));
