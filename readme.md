# Webpack Workshop

Are you afraid of your build tool? Fret no more. Come learn the basics of Webpack, using the new version 4. We'll learn about the new features such as sensible defaults as well as the core features. During this workshop, we will build a simple application using JavaScript, HTML, CSS, and images to understand all parts of setting up the build tool.

## Webpack Workshop Demo

All demo code is in this repo with each step in the workshop represented by a branch in the repo. Make sure you pull all branches.

During the workshop, start with the first step and attempt to perform the exercises for the follow step. If you cannot finish in time or have too many errors, feel free to checkout the next step and run `npm install` to add any new packages for that step.

### Slides

Slides can be found [here](https://siakaramalegos.github.io/webpack-workshop/).

### Branches by Step

- `0-initial-state` - Basic index.html page that loads Lodash and the src/index.js script
- `1-hello-webpack` - Transforms the basic application into one that maps dependencies using the default Webpack setup
- `2-custom-config` - Adds a custom webpack configuration for the `entry` and `output` properties as well as the npm build script
- `3-css-loader` - Adds CSS and a CSS loader in the Webpack config
- `4-image-loader` - Adds images and `file-loader` to handle images in the Webpack config
- `5-html-plugin` - Programmatically creates HTML files using webpack plugins
- `6-better-env` - Add mode to our production script, install webpack-dev-server, and clean up our build folder
- `7-babel` - Adds Babel to transpile ES2015 code to ES5 for older browsers
- `8-optimizations` - Adds `webpack-bundle-analyzer` and optimizes our function import from Lodash

## Resources

- [Webpack official documentation](https://webpack.js.org/)
- [SurviveJS Webpack](https://survivejs.com/webpack/foreword/) by Juho Vepsäläinen - free online book with a detailed tutorial on learning Webpack (or purchase to support the author of the book and the author of Webpack)

## Social Media & Speaking

You can follow me on [Twitter](https://twitter.com/thegreengreek) and [Medium](https://medium.com/@thegreengreek)!

Interested in having me speak at your event? Check out my [speaking history](https://github.com/siakaramalegos/sia_speaks) and/or my [website](https://siakaramalegos.github.io/).