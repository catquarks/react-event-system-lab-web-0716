const React = require('react');
const ReactDOM = require('react-dom');

const Keypad = require('./components/Keypad');
const EyesOnMe = require('./components/EyesOnMe');

ReactDOM.render(
  <div>
    <Keypad />
    <br />
    <EyesOnMe />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
