# Typescript + CSS Loader

A simple loading animation abstraction. All styles are courtesy of [Luke Haas' Single Element Spinners](https://projects.lukehaas.me/css-loaders/). 

## Usage

```
const parent = document.querySelector('.js-load-here'); // Where the loader should display.
const loader = new Loader(parent);

loader.add('Repositioning Satellites...'); // Optional message. This will show above the loader.
loader.update('Found Location...'); // This will update the text set in the .add() method.
loader.remove(); // This removes the instance of the loader from the DOM.
``` 

There are separate files for each loader in the `/spinners` directory that have been imported into `_loaders.scss`. Uncomment the desired import to only include the desired spinner.