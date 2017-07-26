# Nightwatch Ready

It's a minimum configuration of [Nightwatch.js](http://nightwatchjs.org/), *Ready* to use, out of the box.

Based on [Selenium](https://github.com/SeleniumHQ/selenium) and [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/).

---

In order to have it up and running [NodeJs](https://nodejs.org/) is mandatory, it can be installed using [n](https://github.com/tj/n), a handy NodeJs binary manager, or using the official installer present in the NodeJs website ([https://nodejs.org/download/](https://nodejs.org/download/)).

### Running the tests
In order to running the tests and linters the **dev dependencies** need to be installed.
```
$ yarn

// or 

$ npm install
```

Once the dependencies are installed:
```
$ npm test
```

It also possible to lint the tests (via [ESLint](http://eslint.org/), following the [StandardJS](http://standardjs.com/) syntax).
```
$ npm run lint
```
