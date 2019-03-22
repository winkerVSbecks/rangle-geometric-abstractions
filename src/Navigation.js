import React from 'react';

export const Navigation = ({ signedIn, signOut }) => (
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
      <button className="bg-transparent bn f6 link dib white dim mr3 mr4-ns">
        Gallery
      </button>
      {signedIn && (
        <button
          className="bg-transparent f6 dib white dim pv2 ph4 br0 ba b--white-60"
          onClick={signOut}
        >
          Sign Out
        </button>
      )}
    </div>
  </nav>
);
