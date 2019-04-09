import React, { useState } from 'react';
import { GeometricAbstractionsCreator } from './GeometricAbstractionsCreator';
import { Navigation } from './Navigation';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import { useAuth } from './useAuth';

const App = props => {
  const [route, setRoute] = useState('Home');
  const [isAuthenticated, signIn, signOut] = useAuth();

  return (
    <React.Fragment>
      <SkipNavLink className="link sans-serif dark-gray" />
      <div>
        <Navigation
          signedIn={isAuthenticated}
          signIn={signIn}
          signOut={signOut}
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
