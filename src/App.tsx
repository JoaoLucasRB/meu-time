import React from 'react';
import Router from './router';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="Body">
        <Router />
      </div>
    </div>
  );
}

export default App;
