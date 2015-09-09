# React weather widget

A simple weather widget made with React and Redux, using Yahoo Weather API. :sunny:

Inspired by [ANIMATED WEATHER ICONS](http://codepen.io/joshbader/pen/EjXgqr) by [Josh Bader](http://codepen.io/joshbader/)

## Run locally

* checkout repository
* install dependencies: `$ npm install`
* then `$ fly`

and it will open in your default browser automatically.

## Usage

Set location and units of temperature by access URL parameters, and the state will be stored in HTML5 localStorage.

gh-page demo: [http://fraina.github.io/React-Weather-Widget/?l=NY&u=f](http://fraina.github.io/React-Weather-Widget/?l=NY&u=f)

| param | default         | describe                        |
| ----- | --------------- | ------------------------------- |
| l     | Taiwan Taichung | location name                   |
| u     | f (Fahrenheit)  | units, can be set to 'c' or 'f' |

e.g. http://localhost:4000/?l=NY&u=f

Also, you can toggle units by click the units beside degree.

## LICENSE

MIT
