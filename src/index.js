function heading() {
  const element = document.createElement('h1');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.capitalize('Life before webpack');

  return element;
}

document.body.appendChild(heading());