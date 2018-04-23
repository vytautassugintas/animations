import _ from 'lodash';
import tween from 'popmotion/animations/tween';

function component() {
  const element = document.createElement('div');
  const a = document.createElement('div');
  const div = document.createElement('div');
  a.setAttribute('id', 'a');
  a.innerHTML = 'link';
  div.setAttribute('class', 'counter');
  a.innerHTML = div;

  const counter = document.querySelector('#a .counter');

  const updateCounter = (v) => a.innerHTML = v;

  tween().start(updateCounter);

  const button = document.createElement('button');

  button.addEventListener("click", () => {
    tween().start(updateCounter)
  })

  button.innerHTML = "animate";

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(a);
  element.appendChild(button);

  return element;
}

document.body.appendChild(component());