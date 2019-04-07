import React from 'react';
import styled from 'styled-components';
import { Heading } from './Primitives';
import colours from './colours';

const ShadeInput = styled.input.attrs({
  type: 'radio',
  name: 'colour',
  className: 'input-reset bn br0 db w-100',
})`
  box-sizing: border-box;
  outline-color: #000;
  outline-style: solid;
  outline-width: 0px;
  height: ${props => props.size * 0.5}rem;
  background-color: ${props => props.value};

  @media screen and (min-width: 30em) {
    height: ${props => props.size * 0.8}rem;
  }

  &:checked {
    outline-width: 2px;
    z-index: 1;
  }

  &:active,
  &:focus {
    outline-color: #2761d4;
  }
`;

const Shade = ({ name, value, size = 1, selected, onChange }) => (
  <React.Fragment>
    <ShadeInput
      value={value}
      id={name.replace(/\s/g, '-')}
      size={size}
      checked={selected}
      onChange={() => onChange(value)}
    />
    <label htmlFor={name.replace(/\s/g, '-')} className="clip">
      {name}
    </label>
  </React.Fragment>
);

const shadeHeight = (shades, idx) => {
  if (shades.length === 1 && idx === 0) return 14;
  if (shades.length > 1 && idx === 0) return 8;
  return 2;
};

const Swatch = ({ shades, name, labelColour, onChange, selectedValue }) => (
  <div className="flex-auto flex flex-column sans-serif relative">
    <span
      className="f6 ttc fw4 absolute top-1 left-1 z-2 dn di-l"
      aria-hidden="true"
      style={{ color: labelColour }}
    >
      {name}
    </span>
    {shades.map((shade, idx) => (
      <Shade
        key={shade.name}
        {...shade}
        size={shadeHeight(shades, idx)}
        selected={selectedValue === shade.value}
        onChange={onChange}
      />
    ))}
  </div>
);

export const ColourSelector = ({ value, onChange, className }) => (
  <fieldset className={`db bn pa0 ma0 sans-serif bg-white ${className}`}>
    <Heading as="legend" className="f4 b mb2">
      Colour
    </Heading>
    <div className="flex mb3">
      <Swatch
        name="Red"
        labelColour="#fff"
        shades={colours.red}
        selectedValue={value}
        onChange={onChange}
      />
      <Swatch
        name="Black"
        labelColour="#fff"
        shades={colours.black}
        selectedValue={value}
        onChange={onChange}
      />
    </div>
    <div className="flex">
      <Swatch
        name="Blue"
        labelColour="#656565"
        shades={colours.blue}
        selectedValue={value}
        onChange={onChange}
      />
      <Swatch
        name="Cream"
        labelColour="#656565"
        shades={colours.cream}
        selectedValue={value}
        onChange={onChange}
      />
      <Swatch
        name="Gray"
        labelColour="#fff"
        shades={colours.gray}
        selectedValue={value}
        onChange={onChange}
      />
    </div>
  </fieldset>
);
