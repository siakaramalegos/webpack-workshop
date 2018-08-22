import _ from 'lodash'
import './style.css'

function heading() {
  const element = document.createElement('h1');
  element.innerHTML = _.capitalize('hello webpack!');
  return element;
}

document.body.appendChild(heading());