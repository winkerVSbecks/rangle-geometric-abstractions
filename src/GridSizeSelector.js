import React from 'react';
import styled from 'styled-components';
import { Heading } from './Primitives';

const GridOptionLabel = styled.label.attrs({
  className:
    'db w3 h3 pa3 ba mr3 f6 fw4 lh-solid sans-serif flex items-center justify-center',
})`
  color: #262626;
  border-color: #ccc;
  border-style: solid;
  border-width: 2px;
`;

const GridOptionInput = styled.input.attrs({
  type: 'radio',
  className: 'clip',
})`
  &:checked + ${GridOptionLabel} {
    border-color: #000;
  }
`;

export const GridSizeSelector = ({ value, onChange, className }) => (
  <fieldset className={`db bn pa0 ma0 sans-serif bg-white ${className}`}>
    <Heading as="legend" className="f4 b mb2">
      Grid Size
    </Heading>

    <div className="flex">
      <div>
        <GridOptionInput
          id="6x6"
          checked={value === 6}
          onChange={() => onChange(6)}
          value={6}
        />
        <GridOptionLabel htmlFor="6x6">6x6</GridOptionLabel>
      </div>

      <div>
        <GridOptionInput
          id="12x12"
          checked={value === 12}
          onChange={() => onChange(12)}
          value={12}
        />
        <GridOptionLabel htmlFor="12x12">12x12</GridOptionLabel>
      </div>
    </div>
  </fieldset>
);
