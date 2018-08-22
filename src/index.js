import _ from 'lodash'
import './style.css'

function heading() {
  let element = document.createElement('h1');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.capitalize('hello webpack!');

  return element;
}

document.body.appendChild(heading());