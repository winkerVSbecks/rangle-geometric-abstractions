import { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export function useAuth() {
  const currentUser = netlifyIdentity.currentUser();
  const [isAuthenticated, setAuthenticated] = useState(
    currentUser ? true : false,
  );
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    netlifyIdentity.on('login', user => {
      setUser(user);
      setAuthenticated(true);
    });
    netlifyIdentity.on('logout', () => {
      setUser(null);
      setAuthenticated(false);
    });
  });

  const signIn = callback => {
    netlifyIdentity.open();
  };

  const signOut = callback => {
    netlifyIdentity.logout();
  };

  return [isAuthenticated, signIn, signOut, user];
}
