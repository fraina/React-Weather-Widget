# React weather widget

A simple weather widget made with React and Redux, using Yahoo Weather API. :sunny:

Most of those awesome weather icons are base on [ANIMATED WEATHER ICONS](http://codepen.io/joshbader/pen/EjXgqr) by [Josh Bader](http://codepen.io/joshbader/), made some changes to color for white background.

And the windy icon base on [SVG icons animated with CSS](http://codepen.io/TechnotronicOz/pen/eokCA) by [Matt](http://codepen.io/TechnotronicOz/).

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
