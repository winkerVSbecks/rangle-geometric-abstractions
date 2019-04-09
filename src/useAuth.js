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

// netlifyIdentity.on('login', user => {
//   netlifyAuth.isAuthenticated = true;
//   netlifyAuth.user = user;
// });

// netlifyIdentity.on('logout', user => {
//   netlifyAuth.isAuthenticated = true;
//   netlifyAuth.user = null;
// });

// export const netlifyAuth = {
//   isAuthenticated: false,
//   user: null,
//   authenticate(callback) {
//     this.isAuthenticated = true;
//     netlifyIdentity.open();
//     netlifyIdentity.on('login', user => {
//       this.user = user;
//       callback(user);
//     });
//   },
//   signout(callback) {
//     this.isAuthenticated = false;
//     netlifyIdentity.logout();
//     netlifyIdentity.on('logout', () => {
//       this.user = null;
//       callback();
//     });
//   },
// };
