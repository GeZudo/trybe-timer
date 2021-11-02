import React from 'react';
import Countdown, { zeroPad } from "react-countdown";
import Input from './Input';

class Content extends React.Component {
  clockRef = null;
  constructor() {
    super();
    this.state = {
      inputHours: 0,
      inputMinutes: 0,
      inputSeconds: 0,
      totalTime: 0,
      timer: false,
    };
    this.bell = "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
    this.audio = new Audio(this.bell)
  }

  handleOnStart = () => {
    this.setState({
      timer: true,
    })
  }

  hadleOnStop = () => {
    this.setState({
      timer: false,
    })
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.timeToMs);
  }

  timeToMs = () => {
    const { inputHours, inputMinutes, inputSeconds } = this.state;
    const hToMs = inputHours * 3600000;
    const mToMs = inputMinutes * 60000;
    const sToMs = inputSeconds * 1000;
    const total = sToMs+mToMs+hToMs;
    this.setState({
      totalTime: total,
    })
  }

  handleStart = () => {
    this.clockRef.start();
    this.setState({
      timer: true,
    })
  }

  handlePause = () => {
    this.clockRef.isPaused() ? this.clockRef.start() : this.clockRef.pause();
  }

  handleStop =() => {
    this.clockRef.stop();
  }

  setClockRef = (ref) => {
    this.clockRef = ref;
  }

  playAudio =() => {
    this.audio.play();
    this.setState({
      timer: false,
    })
  }

  addUm = () => {
    const {totalTime} = this.state
    this.setState({
      totalTime: totalTime+60000
    })
  }

  remUm = () => {
    const {totalTime} = this.state
    this.setState({
      totalTime: totalTime-60000
    })
  }

  render() {
    const {
      inputHours,
      inputMinutes,
      inputSeconds,
      totalTime,
      timer,
    } = this.state;

    return (
    <div className="contentInput">
      <div className="inputs">
        <Input
            formType="number"
            labelText="Horas"
            name="inputHours"
            value={ inputHours }
            onChange={ this.handleChange }
        />
        <Input
            formType="number"
            labelText="Minutos"
            name="inputMinutes"
            value={ inputMinutes }
            onChange={ this.handleChange }
        />
        <Input
            formType="number"
            labelText="Segundos"
            name="inputSeconds"
            value={ inputSeconds }
            onChange={ this.handleChange }
        />
      </div>
      <Countdown
        date={Date.now() + totalTime }
        intervalDelay={0}
        precision={0}
        autoStart={false}
        controlled={false}
        ref={this.setClockRef}
        onStop={this.hadleOnStop}
        onComplete={this.playAudio}
        renderer={props => <div className="timer">{zeroPad(props.hours)}:{zeroPad(props.minutes)}:{zeroPad(props.seconds)}</div>}
      />
      <div className="buttons">
        <button onClick={ this.remUm }>-1</button>
        <button onClick={ this.handleStart }>Start</button>
        <button onClick={ this.handlePause }>Pause / Resume</button>
        <button onClick={ this.handleStop }>Stop</button>
        <button onClick={ this.addUm }>+1</button>
      </div>
      {timer && <div className="timer-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_ITiwPMUzho?controls=1&autoplay=1&playlist=_ITiwPMUzho&loop=1" title="YouTube video player"></iframe>
      </div>}
    </div>
  )
}
}

export default Content;
