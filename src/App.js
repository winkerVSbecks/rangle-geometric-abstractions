import React, { useState } from 'react';
import { GeometricAbstractionsCreator } from './GeometricAbstractionsCreator';
import { Navigation } from './Navigation';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';

const App = props => {
  const [route, setRoute] = useState('Home');

  return (
    <React.Fragment>
      <SkipNavLink className="link sans-serif dark-gray" />
      <div>
        <Navigation
          signedIn={props.authState === 'signedIn'}
          signOut={() => {}}
          toggleRoute={() => {
            if (route === 'Home') setRoute('Gallery');
            if (route === 'Gallery') setRoute('Home');
          }}
        />
        <SkipNavContent>
          <GeometricAbstractionsCreator />
        </SkipNavContent>
      </div>
    </React.Fragment>
  );
};

export default App;
