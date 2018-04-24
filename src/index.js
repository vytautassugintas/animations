import tween from 'popmotion/animations/tween';
import { h, render, Component } from 'preact';

class App extends Component {

  animate = e => {
    console.log("Hi");
  }
  
  render(){
    return (
      <div id="foo">
        <span>Hello, world!</span>
        <button onClick={this.animate}>Click Me</button>
      </div>
    );
  }
}

render((
	<App/>
), document.body);
