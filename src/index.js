import tween from 'popmotion/animations/tween';
import { MotionValue } from 'popmotion-react';
import { h, render, Component } from 'preact';

const stateChangeHandlersToSides = {
  on: ({ value }) => tween({
    from: value.get(),
    to: 100
  }).start(value),
  off: ({ value }) => tween({
    from: value.get(),
    to: 0
  }).start(value)
};

const stateChangeHandlersUpAndDown = {
  on: ({ value }) => tween({
    from: value.get(),
    to: { y: 300, x: 200 },
  }).start(value),
  off: ({ value }) => tween({
    from: value.get(),
    to: 0
  }).start(value)
};

const Square = () => (
  <MotionValue onStateChange={stateChangeHandlersToSides}>
    {({ v, state, setStateTo }) => (
      <div
        style={{
          background: 'red',
          width: '100px',
          height: '100px',
          transform: 'translateX(' + v + 'px)'
        }}
        onClick={state === 'on' ? setStateTo.off : setStateTo.on}
      />
    )}
  </MotionValue>
);

const Circle = () => (
  <MotionValue onStateChange={stateChangeHandlersUpAndDown}>
    {({ v, state, setStateTo }) => (
      <div
        style={{
          background: 'blue',
          width: '100px',
          height: '100px',
          borderRadius: 50,
          transform: 'translateX(' + v.x + 'px) translateY(' + v.y + 'px)'
        }}
        onClick={state === 'on' ? setStateTo.off : setStateTo.on}
      />
    )}
  </MotionValue>
);

class App extends Component {

  animate = e => {
    console.log("Hi");
  }
  
  render(){
    return (
      <div id="foo">
        <Square/>
        <div style={{height: 300}}>
          <Circle/>
        </div> 
        <span>Hello, world!</span>
        <button onClick={this.animate}>Click Me</button>
      </div>
    );
  }
}

render((
	<App/>
), document.body);
