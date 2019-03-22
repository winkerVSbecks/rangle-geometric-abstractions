import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { GeometricAbstractionsCreator } from './GeometricAbstractionsCreator';
import { Navigation } from './Navigation';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';

Amplify.configure(awsmobile);

const App = props => (
  <React.Fragment>
    <SkipNavLink className="link sans-serif dark-gray" />
    <div>
      {console.log(props)}
      <Navigation
        signedIn={props.authState === 'signedIn'}
        signOut={() => {
          Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }}
      />
      <SkipNavContent>
        <GeometricAbstractionsCreator />
      </SkipNavContent>
    </div>
  </React.Fragment>
);

export default withAuthenticator(App, false);
// export default withAuthenticator(App, true, [<MyGreetings />], null, {});
