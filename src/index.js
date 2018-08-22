import capitalize from 'lodash/capitalize'
import './style.css'
import angryUnicorn from './angry_unicorn.jpg'

const heading = () => {
  const element = document.createElement('h1');
  element.innerHTML = capitalize('hello webpack!');
  return element;
}

const image = () => {
  const image = new Image();
  image.src = angryUnicorn;
  return image;
}

document.body.appendChild(heading());
document.body.appendChild(image());