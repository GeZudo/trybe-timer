import React from 'react';
import './App.css';
import Content from './components/Content';

class App extends React.Component {
    render(){
      return (
        <div className="App">
          {/* <div className="video-container">
            <iframe src="https://www.youtube.com/embed/m4P9XkF9gsI?controls=0&autoplay=1&mute=1&playlist=m4P9XkF9gsI&loop=1" title="youtube-bg"></iframe>
          </div> */}
          <video autoPlay muted loop className="video-container">
            <source src="./bg.mp4" type="video/mp4"></source>
          </video>
          <div className="content">
            <Content />
          </div>
        </div>
      );
    }
}

export default App;
