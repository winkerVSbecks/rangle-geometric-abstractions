import React, { useState } from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import awsmobile from './aws-exports';
import { GeometricAbstractionsCreator } from './GeometricAbstractionsCreator';
import { Navigation } from './Navigation';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import { Gallery } from './Gallery';

Amplify.configure(awsmobile);
Storage.configure({
  level: 'private',
});

// // Delete all files
// Storage.list('', { level: 'private' }).then(result => {
//   console.log(result);

//   result.map(({ key }) => {
//     Storage.remove(key, { level: 'private' })
//       .then(result => console.log(result))
//       .catch(err => console.log(err));
//   });
// });

const App = props => {
  const [route, setRoute] = useState('Home');

  return (
    <React.Fragment>
      <SkipNavLink className="link sans-serif dark-gray" />
      <div>
        <Navigation
          signedIn={props.authState === 'signedIn'}
          signOut={() => {
            Auth.signOut()
              .then(data => console.log(data))
              .catch(err => console.log(err));
          }}
          goTo={route === 'Home' ? 'Gallery' : 'Home'}
          toggleRoute={() => {
            if (route === 'Home') setRoute('Gallery');
            if (route === 'Gallery') setRoute('Home');
          }}
        />
        <SkipNavContent>
          {route === 'Home' ? <GeometricAbstractionsCreator /> : <Gallery />}
        </SkipNavContent>
      </div>
    </React.Fragment>
  );
};

export default withAuthenticator(App, false);
