# React weather widget

A simple weather widget made with React and Redux, using Yahoo Weather API.

## Run locally

* checkout repository
* install dependencies: `$ npm install`
* then `$ fly`

and it will open in your default browser automatically.

## Usage

Set location and units of temperature by access URL parameters, and the state will be stored in HTML5 localStorage.

| param | default         | describe                        |
| ----- | --------------- | ------------------------------- |
| l     | Taiwan Taichung | location name                   |
| u     | f (Fahrenheit)  | units, can be set to 'c' or 'f' |

Also, you can toggle units by click the units beside degree.
