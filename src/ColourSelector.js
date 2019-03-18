import React from 'react';
import styled from 'styled-components';

const colours = {
  red: [
    {
      name: 'red',
      value: 'rgba(212, 69, 39, 1)',
    },
    {
      name: 'red 75 percent',
      value: 'rgba(212, 69, 39, 0.75)',
      shades: [0.75, 0.5, 0.25],
    },
    {
      name: 'red 50 percent',
      value: 'rgba(212, 69, 39, 0.5)',
      shades: [0.75, 0.5, 0.25],
    },
    {
      name: 'red 25 percent',
      value: 'rgba(212, 69, 39, 0.25)',
      shades: [0.75, 0.5, 0.25],
    },
  ],
  black: [
    {
      name: 'black',
      value: 'rgb(38, 38, 38)',
    },
  ],
  blue: [
    {
      name: 'blue',
      value: 'rgba(225, 233, 238, 1)',
    },
    {
      name: 'blue 75 percent',
      value: 'rgba(225, 233, 238, 0.75)',
      shades: [0.75, 0.5, 0.25],
    },
    {
      name: 'blue 50 percent',
      value: 'rgba(225, 233, 238, 0.5)',
      shades: [0.75, 0.5, 0.25],
    },
    {
      name: 'blue 25 percent',
      value: 'rgba(225, 233, 238, 0.25)',
      shades: [0.75, 0.5, 0.25],
    },
  ],
  cream: [
    {
      name: 'cream',
      value: 'rgba(248, 248, 248, 1)',
    },
  ],
  gray: [
    {
      name: 'gray',
      value: 'rgb(101, 101, 101)',
    },
    {
      name: 'gray 75 percent',
      value: 'rgb(101, 101, 101, 0.75)',
    },
    {
      name: 'gray 50 percent',
      value: 'rgb(101, 101, 101, 0.50)',
    },
    {
      name: 'gray 25 percent',
      value: 'rgb(101, 101, 101, 0.25)',
    },
  ],
};

const ShadeLabel = styled.label`
  box-sizing: border-box;
  outline-color: #000;
  outline-style: solid;
  outline-width: 0px;
  height: ${props => props.size};
  background-color: ${props => props.value};
`;

const ShadeInput = styled.input`
  box-sizing: border-box;
  outline-color: #000;
  outline-style: solid;
  outline-width: 0px;
  height: ${props => props.size};
  background-color: ${props => props.value};

  &:checked {
    outline-width: 2px;
    z-index: 1;
  }
`;

const Shade = ({ name, value, size = 1, selected, onChange }) => (
  <React.Fragment>
    <ShadeInput
      type="radio"
      name="colour"
      className="input-reset"
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
  if (shades.length === 1 && idx === 0) return '14rem';
  if (shades.length > 1 && idx === 0) return '8rem';
  return '2rem';
};

const Swatch = ({ shades, name, labelColour, onChange, selectedValue }) => (
  <div className="flex-auto flex flex-column sans-serif relative">
    <span
      className="f6 ttc fw4 absolute top-1 left-1 z-2"
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
    <legend className="f3 b mb3">Colour</legend>
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
