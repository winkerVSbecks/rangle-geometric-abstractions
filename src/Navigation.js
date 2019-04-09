import React from 'react';

export const Navigation = ({
  signedIn,
  signOut,
  signIn,
  goTo,
  toggleRoute,
}) => (
  <nav
    className="flex justify-between bb b--white-10 sans-serif"
    style={{ backgroundColor: '#262626' }}
  >
    <div className="flex items-center pa3">
      <img
        src="/geometric-abstractions.png"
        className="dib w2 h2 br-100"
        alt="Site Name"
      />
    </div>
    <div className="flex-grow pa3 flex items-center">
      {goTo && (
        <button
          className="bg-transparent bn f6 link dib white dim mr3 mr4-ns"
          onClick={toggleRoute}
        >
          {goTo}
        </button>
      )}
      {signedIn ? (
        <button
          className="bg-transparent f6 dib white dim pv2 ph4 br0 ba b--white-60"
          onClick={signOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="bg-transparent f6 dib white dim pv2 ph4 br0 ba b--white-60"
          onClick={signIn}
        >
          Sign In
        </button>
      )}
    </div>
  </nav>
);
