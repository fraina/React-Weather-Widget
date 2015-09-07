# Laima

A starter kit of Front-End Tool to develop, showcase, and mock API,
powered by fly and webpack.

Please use <https://github.com/IEMustDie/slush-laima> to generate new projects.

## Requirement

```bash
npm install -g fly
```

## Commands

```bash
# with mock server
fly

fly clear

# sprite images
fly sprite

# imagemin, will generate files to `build/img-min`
fly image

# `lint` and `test`
fly prebuild

fly build

# before `release` and `master`, please `build`
# git push `release`
fly release
# git push `master`
fly master

# lint with ESLint
fly lint

# test with karma-mocha
fly test

# after build, you can showcase it
fly view
```

## Caveats

 - Webpack `reslove.root` = `src/js`

## Folder Structure

 - `build/` - build files
 - `src/` - source files
    - `css/`
    - `font/`
    - `img/`
       - `sprite/` - sprite files
    - `js/`
    - `locales/` - i18n files
    - `index.jade`
 - `test/` - testing files
 - api.js mock api
 - mock.js mock server

## Build Folder Structure

 - `build/` - build files
    - `font/`
    - `img/`
    - `locales/`
    - `application-[hash:7].css`
    - `application-[hash:7].css.map`
    - `bundle-[hash:7].js`
    - `bundle-[hash:7].js.map`
    - `vendor-[hash:7].js`
    - `vendor-[hash:7].js.map`
    - `index.html`

## List of slush-laima-*

 - [slush-laima](https://github.com/IEMustDie/slush-laima)
 - [slush-laima-ie8](https://github.com/IEMustDie/slush-laima-ie8)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
