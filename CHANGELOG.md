### 2.0.6 (2015-08-26)

- `css-sprite` => `sprity`

### 2.0.5 (2015-08-26)

- Fix bug: minifying `json`

### 2.0.4 (2015-08-26)

- Fix webpack dev-server

### 2.0.3 (2015-08-24)

- Fix flyfile
- Fix #1: server.js bug

### 2.0.0 (2015-08-17)

- Goodbye `Gulp`
- fly with `fly`
    - `gulp` => `fly`
    - `gulp prebuild` => `fly prebuild`
    - `gulp build` => `fly build`
    - `gulp lint` => `fly lint`
    - `gulp test` => `fly test`
    - `gulp clean` => `fly clear`
    - `gulp view` => `fly view`
    - `gulp deploy` => `fly release`
    - `gulp deploy:master` => `fly master`
    - `fly sprite` - sprite images
    - `fly image` - imagemin, will generate files to `build/img-min`

### 1.2.1 (2015-08-07)

- Fix mock server

### 1.2.0 (2015-08-06)

- Fix tasks for ES6
- Eslint rule: Airbnb JavaScript Style Guide
- Install g11n from npm
- Change webpack baseUrl to `src/js`
- Use Karma for test
- BrowserSync html-injector
- Remove `preLoaders` from Webpack
- New task: `prebuild`

### 1.1.0 (2015-07-30)

- No API changed
- Refactor webpack-dev-server, mock server, and BrowserSync
- use Webpack for Sass, Jade, and related files
- Add task: `jsonminify`
- Remove tasks: `htmlmin`, `jade`, `rev`, `sass`, `serve`, `watch`

### 1.0.10 (2015-07-28)

- Do not reload browser when Mock related files changed

### 1.0.9 (2015-07-28)

- Fix CORS for Mock server

### 1.0.8 (2015-07-27)

- Exclude `locales` form `rev`

### 1.0.5 (2015-07-26)

- Dropped `laima-sass-library`
- Using `laima-mvcss`
- Bump dependencies

### 1.0.3 (2015-07-23)

- scripts: fixed `postinstall`, added `init`

### 1.0.2 (2015-07-23)

- use g11n for i18n

### 1.0.1 (2015-07-22)

- auto commit after install

### 1.0.0 (2015-07-22)

- Fully refactored using ES6
- **Using Webpack for js**
- Webpack dev server
- Mocha for testing
- new mocking mechanism
- Added .editorconfig
- Dropped Require.js
- Dropped Docco
- Dropped CoffeeScript
- Dropped IE8 support

### 0.9.4 (2015-06-10)

- Fixed task: build

### 0.9.3 (2015-06-10)

- MVCSS v4.0.15
- bump dependencies

### 0.9.2 (2015-05-18)

- MVCSS v4.0.14
- bump dependencies
- eslint backbone
- **預設改用 gulp-sass**
- **調整 watch 機制**

### 0.9.1 (2015-04-13)

- bump dependencies

### 0.9.0 (2015-04-09)

- 修正 task
- 增加判斷值 isBuild
- 調整 task: src, watch
- bump dependencies
- **config.js, server.js 改為 coffeescript**
- MVCSS v4.0.13
- bump dependencies

### 0.8.15 (2015-03-30)

- 調整 gitignore
- 修正 welcomepage
- 移除 --src 參數
- 增加 spritesmith
- 調整 gulp 套件引用
- bump dependencies

### 0.8.14 (2015-03-25)

- 修正測試
- 修正 task: stylus
- MVCSS v4.0.10
- bump dependencies

### 0.8.13 (2015-02-12)

- 移除 lodash，使用 underscore
- bump dependencies

### 0.8.12 (2015-02-09)

- 調整 eslint 規則
- 調整 coffeelint 規則
- 修正 lodash 路徑
- bump dependencies

### 0.8.11 (2015-01-29)

- 預設不安裝 gulp-image
- lodash 3.0.0
- 移除 js 檔案預設執行 eslint
- 移除 coffee 檔案預設執行 coffeelint

### 0.8.10 (2015-01-19)

- 增加 htmlmin
- 修正 rev 作用範圍

### 0.8.9 (2015-01-14)

- config 加入版本控制中

### 0.8.8 (2015-01-14)

- build 時輕量化 bower
- **增加 deploy gh-pages 功能**
- build 時增加 rev

### 0.8.7 (2015-01-13)

- MVCSS v4.0.7
- 增加 gulp-image、gulp-bump

### 0.8.6 (2015-01-08)

- 修正參數數量問題

### 0.8.5 (2015-01-08)

- 增加 express middleware

### 0.8.4 (2015-01-07)

- 增加 Remarkable 選項

### 0.8.3 (2015-01-07)

- markdown 檔案預設使用 remarkable

### 0.8.2 (2015-01-05)

- fixed bug

### 0.8.1 (2015-01-04)

- 增加 gulp-todo

### 0.8.0 (2015-01-04)

- 調整 jade 註解為不顯示
- **重構 gulpfile 架構，拆分 tasks**
- 增加 task：stylus
- mocha for testing

### 0.7.1 (2014-12-22)

- 增加 lint task

### 0.7.0 (2014-12-19)

- 移除未使用套件
- **重構 mock 機制，改用 express**

### 0.6.6 (2014-12-17)

- 調整 eslint
- 調整命令 docco 為 doc

### 0.6.5 (2014-12-16)

- 修改 coffeelint
- 新增 Docco

### 0.6.4 (2014-12-15)

- 移除 jshint，使用 eslint

### 0.6.3 (2014-12-12)

- 排除主動編譯 `_*.jade` 檔案

### 0.6.2 (2014-12-11)

- QUnit v1.16.0

### 0.6.1 (2014-12-09)

- MVCSS v4.0.6

### 0.6.0 (2014-12-09)

- **modes: pure, langing (default)**

### 0.5.11 (2014-12-07)

- 新增 gulp-marked

### 0.5.11 (2014-12-06)

- 移除 gulp-complexity

### 0.5.10 (2014-12-06)

- scripts: postinstall 安裝 bower

### 0.5.9 (2014-12-05)

- minor fixes

### 0.5.8 (2014-12-02)

- 移除 gulp-imagemin
- 移除 qrcode-npm
- 加入 browser-sync-spa
- 加入 server 端 mock.js

### 0.5.7 (2014-11-30)

- 加入 portscanner

### 0.5.6 (2014-11-30)

- 加入 mock.js

### 0.5.5 (2014-11-30)

- 移除 haml
- 調整 bower 路徑
- 加入 gulp-complexity

### 0.5.4 (2014-11-25)

- 升級套件

### 0.5.3 (2014-11-25)

- 修正圖片

### 0.5.2 (2014-11-25)

- 修正圖片權限

### 0.5.1 (2014-11-25)

- 修正預設 build

### 0.5.0 (2014-11-25)

- **Landing Page**

### 0.4.10 (2014-11-20)

- 修正 qrcode url protocol

### 0.4.9 (2014-11-20)

- 修正 bower

### 0.4.8 (2014-11-18)

- 增加 localtunnel

### 0.4.7 (2014-11-18)

- 調整 task 執行
- 加上 qrcode

### 0.4.6 (2014-11-14)

- removed Makefile
- 移除未使用模組
- 調整 broswersync 選項
- 調整執行分流

### 0.4.5 (2014-11-12)

- 開放 mock cors
- 更新 Material Design Color Helper

### 0.4.4 (2014-11-12)

- 移除 plumber

### 0.4.3 (2014-11-12)

- 加入 Material Design Color Helper

### 0.4.2 (2014-11-11)

- 增加 open 參數

### 0.4.1 (2014-11-11)

- minor fixes

### 0.4.0 (2014-11-09)

- **加入 mock 機制**

### 0.3.10 (2014-11-06)

- 修正 index.jade 語法

### 0.3.9 (2014-11-06)

- 加入 jade

### 0.3.8 (2014-11-05)

- 加入 haml.js

### 0.3.7 (2014-11-05)

- 移除 template 功能
- 加入 port 參數

### 0.3.6 (2014-11-04)

- 修正 watch

### 0.3.5 (2014-11-03)

- 修正 src task 問題

### 0.3.4 (2014-11-03)

- 調整 js 結構

### 0.3.3 (2014-11-02)

- 移除 buildPath 參數，使用 --dir 替代

### 0.3.2 (2014-11-02)

- 調整 reload 及 build 機制

### 0.3.1 (2014-11-02)

- webserver 換為 browser-sync
- 調整 gulp 機制

### 0.3.0 (2014-11-01)

- **重構 gulpfile 機制**
- **專案架構調整**
- 調整 rjs

### 0.2.2 (2014-10-31)

- 修正 html 檔案

### 0.2.1 (2014-10-29)

- normalize.css v3.0.2

### 0.2.0 (2014-10-29)

- gulpfile.coffee
- 加入 coffeescript
- 使用 lodash
- 重構 gulpfile

### 0.1.5 (2014-10-24)

- 重構 uglify 流程

### 0.1.4 (2014-10-23)

- 移除 gulp-autoprefixer
- gulp-compass 2.0.0
- 修正 rjs.optimized 為 false 時行為
- 加上 compass 錯誤捕捉

### 0.1.3 (2014-10-14)

- 增加 font

### 0.1.2 (2014-10-12)

- 調整內部機制
- config.rjs.compile => config.rjs.optimized

### 0.1.1 (2014-10-02)

- 簡化內部機制

### 0.1.0 (2014-09-30)

- first commit
