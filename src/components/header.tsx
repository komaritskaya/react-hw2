import React from 'react';

const Header = () => React.createElement(
  'h1',
  { className: 'ui header', key: 'header' },
  'Hello World',
  React.createElement('span', null, '👋'),
);

export default Header;
