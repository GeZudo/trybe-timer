import React from 'react';
import './App.css';
import Content from './components/Content';
import CollapseMenu from './components/CollapseMenu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <video autoPlay muted loop className="video-container">
          <source src="./bg.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <Content />
        </div>
        <CollapseMenu />
      </div>
    );
  }
}

export default App;
