import React from 'react';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { GeometricAbstractionsCreator } from './GeometricAbstractionsCreator';
import { Navigation } from './Navigation';

Amplify.configure(awsmobile);

const App = () => (
  <div>
    <Navigation />
    <GeometricAbstractionsCreator />
  </div>
);

// export const AppWithAuth = withAuthenticator(App, true);

export default withAuthenticator(App, true, [], null, {});
