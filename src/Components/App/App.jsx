import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>hello world</div>;

export default () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
